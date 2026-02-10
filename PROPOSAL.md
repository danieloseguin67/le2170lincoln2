# Website Development & Hosting Proposal
## Le 2170 Lincoln Avenue, Montreal

**Prepared for:** Le 2170 Lincoln Avenue Management  
**Prepared by:** SeguinDev (a division of 16272649 Canada Inc)  
**Date:** February 9, 2026  
**Valid Until:** March 11, 2026

---

## Executive Summary

This proposal outlines a comprehensive solution for developing, deploying, and maintaining a modern property management website for Le 2170 Lincoln Avenue. The solution includes a fully responsive Angular-based web application with advanced features for apartment listings, tenant services, and property management.

---

## Project Scope

### 1. Website Development

**Features & Functionality:**
- **Multi-page Angular Application** with server-side rendering (SSR)
  - Home page with image carousel and property showcase
  - Apartment listings page with individual apartment details
  - Amenities showcase page
  - About page with property information
  - Student Living page with lifestyle content
  - Contact page
  - Listings management dashboard (admin)
  
- **User Experience Features:**
  - Responsive design for mobile, tablet, and desktop
  - Multi-language support (English/French)
  - Interactive image galleries with Unsplash API integration
  - Modern Material Design UI components
  - Header navigation and footer components
  
- **Administrative Features:**
  - Secure authentication system with login dialog
  - Listing management interface with edit/create dialogs
  - Help and support dialog systems
  - Admin dashboard for listing management

- **Technical Specifications:**
  - Framework: Angular 19+ with TypeScript 5+
  - Styling: SCSS with Angular Material components
  - Server-Side Rendering (Angular Universal) for optimal SEO
  - Component-based architecture
  - Optimized image formats (AVIF) for faster loading
  - Unsplash API integration for dynamic imagery

### 2. Domain Registration Services

**Domain:** le2170lincoln.com

**Service Provider:** GoDaddy
- Domain registration: 3 years
- DNS management included
- WHOIS privacy protection
- Email forwarding capability
- Domain lock security feature
- 24/7 domain support

**Estimated Cost:** $36 - $45 (3 years)

### 3. Hosting Infrastructure

**GoDaddy VPS Gen4 - Windows Server**

**Server Specifications:**
- **Plan:** Gen4 VPS Windows
- **Duration:** 3 years
- **CPU:** 2 vCPUs
- **RAM:** 4GB DDR4
- **Storage:** 100GB SSD
- **Bandwidth:** Unmetered
- **OS:** Windows Server 2022
- **Database:** SQL Server 2019 Express (included)

**Additional Features:**
- Full root access
- Remote Desktop Protocol (RDP) access
- Dedicated IP address
- SSL/TLS certificate (Let's Encrypt or GoDaddy)
- Automated daily backups
- 99.9% uptime guarantee
- DDoS protection

**Estimated Cost:** $1,800 - $2,400 (3 years)

### 4. Deployment & Configuration

**Server Setup:**
- Windows Server 2022 configuration
- IIS (Internet Information Services) setup
- Node.js runtime installation
- SQL Server 2019 Express installation and configuration
- Security hardening and firewall configuration
- SSL certificate installation and HTTPS configuration

**Application Deployment:**
- Angular application build optimization
- Server-side rendering configuration
- Database schema creation and migration
- Environment configuration (production)
- Performance optimization and caching
- SEO configuration

**Integration Services:**
- Domain DNS configuration
- Email service setup
- Analytics integration (Google Analytics)
- CDN configuration (if applicable)

---

## Project Timeline

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| **Phase 1: Setup & Configuration** | Week 1 | Domain registration, VPS provisioning, server setup |
| **Phase 2: Development Finalization** | Weeks 2-3 | Complete development, testing, bug fixes |
| **Phase 3: Deployment & Integration** | Week 4 | Application deployment, database setup, DNS configuration |
| **Phase 4: Testing & Launch** | Week 5 | Quality assurance, performance testing, go-live |
| **Phase 5: Training & Handover** | Week 6 | Admin training, documentation delivery |

**Total Project Duration:** 6 weeks from contract signing

---

## Investment Summary

*All prices listed in Canadian Dollars (CAD)*

### One-Time Development & Setup Costs

| Item | Description | Cost (CAD) |
|------|-------------|------------|
| **Website Development** | Custom Angular application with all features | $8,500 - $12,000 |
| **Database Design** | SQL Server schema and stored procedures | $1,200 - $1,800 |
| **Server Setup & Configuration** | Windows Server, IIS, SQL Server setup | $800 - $1,200 |
| **Deployment & Integration** | Application deployment and optimization | $600 - $900 |
| **SSL Certificate (3 years)** | HTTPS security certificate | $150 - $300 |
| **Testing & QA** | Comprehensive testing and bug fixes | $1,000 - $1,500 |
| **Documentation & Training** | User guides and admin training | $500 - $800 |
| **Project Management** | Coordination and communication | $750 - $1,200 |
| | **Subtotal (One-Time)** | **$13,500 - $19,700** |

### Infrastructure Costs (3 Years)

| Item | Description | Cost (CAD) |
|------|-------------|------------|
| **Domain Registration** | le2170lincoln.com (3 years) | $36 - $45 |
| **GoDaddy VPS Gen4** | Windows VPS 2 CPU (3 years) | $1,800 - $2,400 |
| **WHOIS Privacy** | Domain privacy protection (3 years) | $30 - $45 |
| | **Subtotal (3 Years)** | **$1,866 - $2,490** |

### **TOTAL PROJECT INVESTMENT**

**Option A - Standard Package:** $15,366 - $18,500  
**Option B - Premium Package:** $19,000 - $22,190  

*Premium package includes enhanced features, additional customization, and extended support.*

---

## Ongoing Maintenance & Support (Optional)

### Monthly Maintenance Plans

**Basic Support Plan** - $150/month
- Security updates and patches
- Content updates (up to 2 hours/month)
- Monthly backup verification
- Basic technical support (email)
- Uptime monitoring

**Standard Support Plan** - $300/month
- All Basic features
- Content updates (up to 5 hours/month)
- Priority technical support (email/phone)
- Monthly performance reports
- Minor feature enhancements
- SEO monitoring and optimization

**Premium Support Plan** - $500/month
- All Standard features
- Unlimited content updates
- 24/7 emergency support
- Bi-weekly security audits
- Monthly feature development (up to 8 hours)
- Advanced analytics and reporting
- Dedicated account manager

---

## Technical Architecture

### Frontend
- **Framework:** Angular 19+
- **Language:** TypeScript 5+
- **Styling:** SCSS, Angular Material
- **Build Tool:** Angular CLI with esbuild
- **SSR:** Angular Universal for SEO optimization

### Backend
- **Runtime:** Node.js with Express
- **API:** RESTful architecture
- **File Upload:** Multer for image handling
- **Authentication:** JWT-based secure authentication

### Database
- **DBMS:** SQL Server 2019 Express
- **ORM/Query:** Direct SQL with parameterized queries
- **Backup:** Automated daily backups with 30-day retention

### Infrastructure
- **Server:** GoDaddy VPS Gen4 Windows
- **Web Server:** IIS 10+
- **Process Manager:** PM2 or Windows Service
- **SSL:** Let's Encrypt or GoDaddy SSL
- **CDN:** Optional CloudFlare integration

---

## Deliverables

1. **Fully Functional Website**
   - Complete Angular application
   - All pages and features implemented
   - Responsive design across all devices
   - SEO-optimized with server-side rendering

2. **Domain & Hosting**
   - Registered domain: le2170lincoln.com
   - Configured VPS server (3 years)
   - SSL certificate installed
   - Professional email setup

3. **Administrative Access**
   - Admin panel credentials
   - Server RDP access
   - Database access credentials
   - Domain management access

4. **Documentation**
   - User manual for website management
   - Technical documentation
   - API documentation
   - Deployment guide

5. **Source Code**
   - Complete source code repository
   - Git repository access
   - Build and deployment scripts

6. **Training**
   - 2-hour admin training session
   - Video tutorials for common tasks
   - Ongoing email/phone support (first 30 days)

---

## Payment Terms

### Option 1: Phased Payment
- **25% deposit** upon contract signing
- **35%** upon completion of development (Phase 2)
- **25%** upon successful deployment (Phase 3)
- **15%** upon final acceptance and training (Phase 5)

### Option 2: Upfront Payment
- **Full payment** upon contract signing
- **5% discount** applied to total project cost

**Infrastructure Costs:** Paid directly to GoDaddy or reimbursed upon service activation

---

## Terms & Conditions

1. **Scope Changes:** Any modifications to the agreed scope will be assessed and quoted separately.

2. **Timeline:** Project timeline is contingent upon timely feedback and content provision from the client.

3. **Content:** Client is responsible for providing all text content, logos, and proprietary images.

4. **Third-Party Services:** Costs for third-party services (domain, hosting) are subject to provider pricing and may vary.

5. **Warranty:** 30-day bug fix warranty after launch for issues present at deployment.

6. **Intellectual Property:** Upon full payment, all custom code and designs become property of the client. Third-party libraries remain under their respective licenses.

7. **Hosting Renewal:** Client is responsible for hosting and domain renewal after the initial 3-year period.

8. **Data Backup:** While automated backups are included, client is encouraged to maintain additional backups.

9. **Support:** Post-launch support beyond the initial 30 days requires a maintenance plan or will be billed at $100/hour.

10. **Cancellation:** If project is cancelled, client retains rights to completed work proportional to payments made.

---

## Why Choose This Solution?

### Modern Technology Stack
- Future-proof Angular framework with long-term support
- Server-side rendering for superior SEO performance
- Responsive design that works beautifully on all devices

### Reliable Infrastructure
- GoDaddy's proven enterprise-grade hosting
- Windows Server compatibility with familiar management tools
- SQL Server provides robust data management capabilities
- 99.9% uptime guarantee ensures business continuity

### Scalability
- VPS can be upgraded as your needs grow
- Database can handle thousands of listings and users
- Architecture supports adding new features and integrations

### Security
- SSL encryption for all data transmission
- Secure authentication system
- Regular security updates and patches
- DDoS protection and firewall included

### SEO & Performance
- Server-side rendering for optimal search engine indexing
- Fast loading times with optimized assets
- Mobile-friendly design (Google ranking factor)
- Structured data for rich search results

---

## Next Steps

1. **Review this proposal** and contact us with any questions
2. **Schedule a meeting** to discuss any customizations or concerns
3. **Sign the contract** and provide 25% deposit to begin work
4. **Kick-off meeting** to confirm requirements and timeline
5. **Regular updates** throughout the development process

---

## Contact Information

**SeguinDev**  
A division of 16272649 Canada Inc  

**Email:** contact@seguindev.com  
**Phone:** [Contact Phone]  
**Address:** Montreal, Quebec, Canada  

---

## Acceptance

By signing below, the client accepts the terms and scope outlined in this proposal.

**Client Signature:** ____________________________  
**Date:** ____________________________  

**Project Manager Signature:** ____________________________  
**Date:** ____________________________  

---

*This proposal is valid for 30 days from the date above. Pricing and availability are subject to change after the expiration date.*
