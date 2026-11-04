import tradeGameCover from '../assets/Projects-pic/TradeGame-gameroom.jpg';
import tradeGameLobby from '../assets/Projects-pic/TradeGame-lobby.jpg';
import tradeGameResults from '../assets/Projects-pic/TradeGame-results.jpg';
import tradeGameLeaderboard from '../assets/Projects-pic/TradeGame-leaderboard.jpg';
import tradeGameAchievements from '../assets/Projects-pic/TradeGame-achievements.jpg';
import tradeGameMobile from '../assets/Projects-pic/TradeGame-mobile.jpg';
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
        title: "Trade Game",
        featured: true,
        order: 1,
        kind: "Full-stack · Real-time multiplayer",
        summary: "A live multiplayer trading game. Friends join a room by code and trade the same replay of a real market crash or rally, with headlines landing on their historical dates. Rounds are scored, and players earn XP, levels and achievements.",
        highlight: "real market crash or rally",
        cover: tradeGameCover,
        coverAlt: "Trade Game room mid-round: price chart, order panel, the player's book and live standings, with a news toast and a fill confirmation",
        tech: ["React", "Socket.IO", "Express", "MongoDB", "Tailwind"],
        github: "https://github.com/Muneeb077/Trade-Platform",
        demo: "/demo/trade-game/index.html",
        caseStudy: {
            stackLine: "React 19 · Vite 8 · Tailwind v4 · Recharts · Socket.IO · Node · Express 5 · Mongoose 8 · MongoDB",
            heroAlt: "Game room on day 5 of 20: a rising AAA price chart, an order panel with buy and sell buttons, equity of $102,757.88, standings for two players, and toasts for a news headline and a filled buy order",
            heroCaption: "A live round: prices replay bar by bar for everyone in the room. Shown on the synthetic test scenario.",
            gallery: [
                { src: tradeGameLobby, alt: "Lobby with scenario cards for the COVID crash, the 2021 meme stock rally and the 2008 financial crisis, two of them locked by level, beside a join-by-code box", caption: "Lobby: each card is a historical scenario; harder ones unlock with level." },
                { src: tradeGameResults, alt: "Results page: rank #1 with score 21.89, return +17.86%, max drawdown 0.0% and +496 XP, a level-up bar, the final board for two players and newly unlocked achievements", caption: "Results: score breakdown, level up, final board and achievements." },
                { src: tradeGameLeaderboard, alt: "Weekly leaderboard table of six players ranked by XP this week, with the signed-in player highlighted at #3", caption: "Leaderboards: all-time, weekly and per scenario, multiplayer rounds only." },
                { src: tradeGameAchievements, alt: "Profile achievements gallery showing 6 of 13 badges unlocked, locked badges dimmed, and a recent rounds list", caption: "Profile: 13 achievements and recent rounds that link back to their results." },
                { src: tradeGameMobile, alt: "Two phone-width screenshots of a round: the chart and order panel on the left, the book, equity curve, standings and news stacked on the right", caption: "On a phone the room stacks into one column, chart and order panel first." },
            ],
            features: [
                { title: "Rooms by code", body: "Create a room for a scenario, share its 6-character code, and start when everyone is in. Up to 8 players per room; late joiners watch as spectators, and a reload rejoins with the position intact." },
                { title: "Historical replay", body: "The server replays real daily prices, one trading day about every 5 seconds, so a two-month crash plays out in about 5 minutes. Headlines appear on the day they happened. Players buy and sell at the server's price and watch live standings." },
                { title: "Scoring & progression", body: "Score is return plus an alpha bonus for beating the market, minus penalties for deep drawdowns and for never trading. Rounds award XP and levels, which unlock harder scenarios, and 13 achievements." },
                { title: "Leaderboards & profile", body: "All-time, weekly and per-scenario boards that count multiplayer rounds only, so solo retries can't farm a high score. The profile shows level, achievements and past rounds." },
            ],
            decisions: [
                { title: "Server owns the clock and the fills", body: "Rooms live in memory on one Node process, and a drift-corrected clock schedules every tick from the round's start time, so no bar is skipped after a stall. The client never sends a price: an order fills at the close of the bar everyone is looking at. Cash and cost are integer cents to avoid float drift over many fills. The trade-off is a single instance: a restart ends running rounds." },
                { title: "Raw, unadjusted prices", body: "A seed script pulls daily bars from Tiingo, with Yahoo as a fallback, and keeps raw prices so GME trades in the hundreds, as it did in the headlines. Yahoo only returns split-adjusted closes, so the script un-adjusts them using every later split." },
                { title: "No transactions, still safe", body: "MongoDB runs standalone, so every write is one document. Profile updates use compare-and-swap with a list of applied rounds, which means a retried result never adds XP twice." },
                { title: "Security hardening", body: "Mongoose's sanitizeFilter is on and auth fields must be strings, which blocks NoSQL operator injection. REST and socket events are rate limited, with a lockout on failed room-code guesses. Google sign-in only links to an existing account when Google has verified the email." },
                { title: "Testing", body: "109 backend tests on node:test, including socket integration against an in-memory MongoDB, 21 vitest tests for the client reducer and helpers, and a Playwright suite where two browsers play a full round." },
            ],
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
        demo: "/demo/homenest/index.html",
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
