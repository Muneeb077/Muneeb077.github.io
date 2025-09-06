/**
 * @typedef {"React"|"Python"|"Node"|"Tailwind"|"Vite"|"Express"|"Javascript"|"MongoDB"|"MySQL"|"Flask"|"Pandas"|"NumPy"|"SciPy"|"Scikitlearn"|"Matplotlib"|"Tkinter"} TechId
 */

/**
 * @typedef {Object} Link
 * @property {string} label
 * @property {string} href
 */

/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} cover
 * @property {TechId[]} tech
 * @property {string} [github]
 */