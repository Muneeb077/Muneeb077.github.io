import tradePlatformCover from '../assets/Projects-pic/Trade-platform-login-pic.png';
import realEstateCover from '../assets/Projects-pic/HomeNest-search-map.jpg';
import homeNestHome from '../assets/Projects-pic/HomeNest-home.jpg';
import homeNestListing from '../assets/Projects-pic/HomeNest-listing.jpg';
import homeNestSearchDark from '../assets/Projects-pic/HomeNest-search-dark.jpg';
import homeNestHostDashboard from '../assets/Projects-pic/HomeNest-host-dashboard.jpg';
import homeNestAdminOverview from '../assets/Projects-pic/HomeNest-admin-overview.jpg';
import satelitesCover from '../assets/Projects-pic/Satelites-poster.png';

/**
 * Featured projects get image cards; the rest are listed under "More projects".
 * Optional fields: demo (hides the button when undefined), highlight, caseStudy.
 * caseStudy.gallery is an optional list of { src, alt, caption } screenshots.
 * @type {Array<Object>}
 */
const allProjects = [
    {
        id: "trade-platform",
        title: "Trade Platform",
        featured: true,
        order: 1,
        kind: "Full-stack · Featured",
        summary: "A stock-trading web app. Users buy and sell from a transactions module, track their positions on a dashboard, and read profit and loss from interactive charts.",
        cover: tradePlatformCover,
        coverAlt: "Trade Platform login screen with a profit and loss chart",
        tech: ["React", "Node", "Express", "MongoDB", "Tailwind"],
        github: "https://github.com/Muneeb077/Trade-Platform",
        demo: "[DEMO_URL]",
        caseStudy: {
            stackLine: "React · Node · Express · MongoDB · Tailwind · Vite",
            heroAlt: "Trade Platform sign-in screen beside a daily profit and loss bar chart",
            heroCaption: "Sign-in with email or Google, next to the daily profit/loss chart.",
            features: [
                { title: "Accounts & sign-in", body: "Email and password login, plus Google sign-in." },
                { title: "Buy & sell", body: "A transactions module for placing trades and keeping a record of each one." },
                { title: "P&L dashboard", body: "Live view of open trades and overall progress, with interactive profit and loss charts." },
            ],
            decisions: [
                { title: "Data model", body: "[Why MongoDB? How you structure users, holdings and transactions.]" },
                { title: "Calculating P&L", body: "[Where prices come from and how gains and losses are computed — server or client side, and why.]" },
                { title: "Auth", body: "[How sessions work — JWT, cookies, OAuth for Google — and how routes are protected.]" },
            ],
            learned: "[One real bug or obstacle, how you tracked it down, and what you'd do differently now.]",
        },
    },
    {
        id: "real-estate-db",
        title: "HomeNest — Real Estate Marketplace",
        featured: true,
        order: 2,
        kind: "Full-stack · MySQL",
        summary: "A marketplace to buy, rent, or book a stay across 50,000 listings on a live map. Guests, hosts and admins each get their own tools, built on a hand-written MySQL layer with encryption at rest.",
        highlight: "50,000 listings",
        cover: realEstateCover,
        coverAlt: "HomeNest map search with price pins beside a grid of listing cards",
        tech: ["Next.js", "Flask", "MySQL", "Redis", "Docker"],
        github: "https://github.com/Muneeb077/Real-Estate-DB",
        caseStudy: {
            stackLine: "Next.js · React · Tailwind · Flask · SQLAlchemy · MySQL 9 · Redis/RQ · Nginx · Docker",
            heroAlt: "HomeNest search page: listing cards on the left, a Leaflet map of Lisbon with nightly price pins on the right",
            heroCaption: "Map search with \"search as I move the map\", filtering stays in Lisbon.",
            gallery: [
                { src: homeNestHome, alt: "HomeNest home page: headline, a Stays / Rent / Buy search bar with location, keywords, dates and guests, and popular destination cards", caption: "Home: one search bar for stays, rentals and sales, no account needed." },
                { src: homeNestListing, alt: "Listing page for a 5 bed townhouse in Lisbon with a photo grid, room details, host info and a $154 per night booking panel", caption: "Listing: photo grid, verified host and a booking panel that holds dates for 30 minutes." },
                { src: homeNestSearchDark, alt: "Dark mode search of homes for sale in Paris, listing cards beside a map with sale price pins", caption: "Dark mode: homes for sale in Paris, with price pins on the map." },
                { src: homeNestHostDashboard, alt: "Host dashboard with payout, live listing and upcoming stay totals, a monthly payout bar chart and a list of upcoming stays", caption: "Host dashboard: payouts from the HostEarnings procedure and upcoming stays." },
                { src: homeNestAdminOverview, alt: "Admin platform overview with GMV, revenue and user KPIs, monthly GMV charts for stays, rentals and sales, top hosts and median price by city", caption: "Admin overview: KPIs and GMV computed in MySQL with CTEs and window functions." },
            ],
            features: [
                { title: "Map search", body: "Anyone can browse 50,000 listings in 34 cities without an account. Filters, full-text keywords, date availability, infinite scroll, and a Leaflet map with price pins that re-searches as you pan." },
                { title: "Bookings & offers", body: "Guests book stays with a live quote, a 30-minute hold and payment (Stripe Checkout when keys are set), make purchase offers, request viewings and message hosts over encrypted chat." },
                { title: "Host tools", body: "A listing editor with map pin, photo upload (EXIF-stripped, WebP), blocked dates, seasonal and weekend price rules, an offers inbox and an earnings dashboard." },
                { title: "Admin console", body: "Platform KPIs and GMV charts, median price by city, moderation queue, host verification, user management, an audit log viewer and one-click encrypted backups." },
            ],
            decisions: [
                { title: "Logic in the database", body: "Booking, cancellation and offer acceptance are stored procedures. CreateBooking locks the listing row with SELECT … FOR UPDATE and uses idempotency keys; AcceptOffer closes a sale, supersedes competing offers and records the transaction in one step. Search is dynamic SQL combining FULLTEXT, a SPATIAL index and keyset pagination." },
                { title: "Encryption at rest", body: "Emails, phone numbers, host licenses and messages are stored as ciphertext. Blind indexes keep encrypted emails searchable, the key-encryption key can be rotated, and backups are encrypted with tamper detection." },
                { title: "Ids and roles", body: "BIGINT keys internally, ULIDs in every URL so nothing is enumerable. Roles live in a join table, so one account can both book and host." },
                { title: "Append-only audit", body: "Triggers on 8 tables write old and new values to an audit log partitioned by year. Two more triggers block UPDATE and DELETE on it, even for the app's own database account." },
            ],
            learned: "The hardest part was making double-booking impossible under concurrency. Row locking inside the booking procedure handles the normal path, and an overlap trigger catches any write that bypasses it. A test fires 4 concurrent requests for the same dates and asserts only one survives. All 30 tests run against a real MySQL rebuilt from the migrations, with nothing mocked. Under a Locust load test of 300 concurrent users the public read path served 15,384 requests with 0 failures and a p95 of 8 ms.",
        },
    },
    {
        id: "wine-accracy-model",
        title: "Wine Quality Prediction",
        featured: false,
        order: 3,
        summary: "ML model that lifted accuracy from a 45% baseline to 85% through feature engineering and careful EDA.",
        highlight: "45% baseline to 85%",
        tech: ["Python · scikit-learn"],
        github: "https://github.com/Muneeb077/VinoVision",
    },
    {
        id: "satelites-trend",
        title: "Satellite Trends Dashboard",
        featured: false,
        order: 4,
        summary: "Cleaned and transformed satellite datasets, then built an interactive dashboard to explore trends. Course project, COMP 4304.",
        cover: satelitesCover,
        coverAlt: "Satellite trends visualization poster",
        tech: ["Python · Pandas"],
        github: "https://github.com/Muneeb077/Satellites-trend-visualization",
    },
];

export const projects = [...allProjects].sort((a, b) => a.order - b.order);
