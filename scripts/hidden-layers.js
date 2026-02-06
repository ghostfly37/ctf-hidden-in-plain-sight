import { setTerminal, setInputEventListeners } from "./input-level.js";

// Data
const codeEncoded = "Visual inspection shows no anomalies";
const codeDecoded = "Raccoon";
const nextLevel = "found";

// Generate HTML
setTerminal(codeEncoded);

// Event Listeners
setInputEventListeners(codeDecoded, nextLevel);