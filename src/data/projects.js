import tradePlatformCover from '../assets/Projects-pic/Trade-platform-login-pic.png';
import realEstateCover from '../assets/Projects-pic/Real-estate-agent-pic.png';
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
        title: "Real Estate Manager",
        featured: true,
        order: 2,
        kind: "Python · SQL",
        summary: "A property system with two sides: clients browse and filter listings, admins manage the database and add new properties.",
        cover: realEstateCover,
        coverAlt: "Real Estate Manager admin view for managing property listings",
        tech: ["Python", "Flask", "MySQL"],
        github: "https://github.com/Muneeb077/Real-Estate-DB",
    },
    {
        id: "wine-accracy-model",
        title: "Wine Quality Prediction",
        featured: false,
        order: 3,
        summary: "ML model that lifted accuracy from a 45% baseline to 85% through feature engineering and careful EDA.",
        highlight: "45% baseline to 85%",
        tech: ["Python · scikit-learn"],
        // TODO: set the real repo URL for this project
        github: "[WINE_REPO_URL]",
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
