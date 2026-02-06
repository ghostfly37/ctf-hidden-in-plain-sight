import { setTerminal, setInputEventListeners } from "./data-level.js";

// Data
const dataLabel = "File Transmission Intercepted";
const nextLevel = "key-material";

// Generate HTML
setTerminal(dataLabel);

// Event Listeners
setInputEventListeners(nextLevel);