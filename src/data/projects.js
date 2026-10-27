import tradePlatformCover from '../assets/Projects-pic/Trade-platform-login-pic.png';
import realEstateCover from '../assets/Projects-pic/HomeNest-search-map.jpg';
import satelitesCover from '../assets/Projects-pic/Satelites-poster.png';

/**
 * Featured projects get image cards; the rest are listed under "More projects".
 * Optional fields: demo (hides the button when undefined), highlight, caseStudy.
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
            role: "[Solo developer]",
            timeline: "[X weeks, 2025]",
            stackLine: "React · Node · Express · MongoDB · Tailwind · Vite",
            heroAlt: "Trade Platform sign-in screen beside a daily profit and loss bar chart",
            heroCaption: "Sign-in with email or Google, next to the daily profit/loss chart.",
            problem: "[2–3 sentences: why you built this, who it's for, and what was missing from what already existed.]",
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
            next: "[1–2 improvements you'd ship next, e.g. real-time prices, tests, deployment.]",
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
            role: "[Solo developer]",
            stackLine: "Next.js · React · Tailwind · Flask · SQLAlchemy · MySQL 9 · Redis/RQ · Nginx · Docker",
            heroAlt: "HomeNest search page: listing cards on the left, a Leaflet map of Lisbon with nightly price pins on the right",
            heroCaption: "Map search with \"search as I move the map\", filtering stays in Lisbon.",
            problem: "The first version was a basic property manager: clients browsed listings, admins edited the database. It exposed sequential ids in URLs and its sell procedure committed the status change before writing the transaction, so sales always failed. I rebuilt it as a real three-sided marketplace (guests, hosts, admins) where the database itself guarantees the rules that matter: no double bookings, atomic sales, and an audit trail nobody can edit.",
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
