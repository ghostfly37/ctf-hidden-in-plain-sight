import { setTerminal, setInputEventListeners } from "./input-level.js";

// Data
const codeEncoded = "cd9d607079544e951cac51c2248b2fe4";
const codeDecoded = "Apple Pie";
const nextLevel = "hidden-layers";

// Generate HTML
setTerminal(codeEncoded);

// Event Listeners
setInputEventListeners(codeDecoded, nextLevel);