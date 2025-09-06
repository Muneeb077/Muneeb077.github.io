import tradePlatformCover from '../assets/Projects-pic/Trade-platform-login-pic.png';
import expenseTrackerCover from '../assets/Projects-pic/Expense-tracker-pic.png';
import realEstateCover from '../assets/Projects-pic/Real-estate-agent-pic.png';
import satelitesCover from '../assets/Projects-pic/Satelites-poster.png';
import covaluationCover from '../assets/Projects-pic/Covaluation-dashboard-pic.png';

/**
 * @type {Array<Object>}
 */
export const projects = [
    {
        id: "trade-platform",
        title: "Trade Platform",
        description: "Built a trading platform with a dynamic dashboard to monitor trades and overall progress. The transaction module enables users to buy and sell stocks, complemented by interactive graphs that visualize profit and loss performance.",
        cover: tradePlatformCover,
        tech: ['React','Express','MongoDB','Javascript','Node','Vite','Tailwind'],
        github: "https://github.com/Muneeb077/Trade-Platform"
    },
    {
        id: "track-my-spending",
        title: "Expense Tracker",
        description: "Developed an interactive expense tracker with a comprehensive dashboard featuring visual insights through graphs. Integrated income tracking with bar charts to analyze earnings trends and expense tracking with line charts for clear visibility into spending patterns.",
        cover: expenseTrackerCover,
        tech: ['React','Express','MongoDB','Javascript','Node','Vite','Tailwind'],
        github: "https://github.com/Muneeb077/track-my-spending"
    },
    {
        id: "real-estate-db",
        title: "Real Estate Manager",
        description: "Designed a real estate management system with dedicated client and admin interfaces. Clients can browse properties, while the admin panel enables database management and addition of new listings for seamless scalability.",
        cover: realEstateCover,
        tech: ['Python','Flask','MySQL','Javascript'],
        github: "https://github.com/Muneeb077/Real-Estate-DB"
    },
    {
        id: "satelites-trend",
        title: "Satelites Trend Visualization (Academic Project)",
        description: "Completed a course project, which is COMP 4304, focused on data visualization by cleaning, preprocessing, and transforming datasets for accuracy. Developed an interactive dashboard to explore multiple satellite trends and patterns with clarity.",
        cover: satelitesCover,
        tech: ['Scikitlearn','SciPy','Python','Pandas','NumPy','Matplotlib'],
        github: "https://github.com/Muneeb077/Satellites-trend-visualization"
    },
    {
        id: "covalutation",
        title: "Covaluation (Academic Project)",
        description: "Collaborated on a course group project to build a peer review platform. The system allows users to provide reviews for teammates, while clicking the review increment the view count, fostering transparency and constructive feedback.",
        cover: covaluationCover,
        tech: ['Python','SQLite','Javascript'],
        github: "https://github.com/CS2005F23/term-project-teame"
    },
    {
        id: "wine-accracy-model",
        title: "Wine Quality Prediction Model",
        description: "Developed a machine learning model to predict wine quality, improving accuracy from 45% baseline to 85% through feature engineering and iterative evaluation. Performed extensive data preprocessing, conducted exploratory data analysis to uncover outliers, distributions, and correlations, and applied statistical transformations to refine feature distribution. Implemented and validated the model to ensure reproducibility and reliable performance.",
        tech: ['Scikitlearn','SciPy','Python','Pandas','NumPy','Matplotlib'],
        github: "https://github.com/Muneeb077/Trade-Platform"
    },
    {
        id: "minesweeper",
        title: "MineSweeper Game",
        description: "Developed a clone of the classic Minesweeper game with interactive gameplay and logic-based mechanics for an engaging user experience.",
        cover: "",
        tech: ['Python','Tkinter'],
        github: "https://github.com/Muneeb077/MineSweeper"
    },
];