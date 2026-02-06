import { setTerminal, setInputEventListeners } from "./input-level.js";

// Data
const codeEncoded = "Aevrmrk: Hs rsx jsvkix";
const codeDecoded = "Warning: Do not forget";
const nextLevel = "encoded-signal";

// Generate HTML
setTerminal(codeEncoded);

// Event Listeners
setInputEventListeners(codeDecoded, nextLevel);