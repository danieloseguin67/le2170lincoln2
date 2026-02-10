import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';
// @ts-ignore - multer types are provided at runtime only
import multer from 'multer';
import { mkdirSync } from 'node:fs';

const browserDistFolder = join(import.meta.dirname, '../browser');
const uploadFolder = join(import.meta.dirname, '../uploads');

mkdirSync(uploadFolder, { recursive: true });

const app = express();
const angularApp = new AngularNodeAppEngine();

const storage = multer.diskStorage({
  destination: (_req: any, _file: any, cb: any) => cb(null, uploadFolder),
  filename: (_req: any, file: any, cb: any) => {
    const timestamp = Date.now();
    const sanitized = file.originalname.replace(/[^a-zA-Z0-9_.-]/g, '_');
    cb(null, `${timestamp}_${sanitized}`);
  },
});

const upload = multer({ storage });

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/{*splat}', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

// Serve uploaded images
app.use('/uploads', express.static(uploadFolder));

// Simple API endpoint to upload apartment images
app.post('/api/upload-images', upload.array('images', 10), (req: any, res: any) => {
  const files = (req.files as any[]) || [];
  const urls = files.map((file: any) => `/uploads/${file.filename}`);
  res.json({ urls });
});

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
