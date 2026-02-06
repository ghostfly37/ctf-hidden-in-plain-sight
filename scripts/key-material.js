import { setTerminal, setInputEventListeners } from "./input-level.js";

// Data
const codeEncoded = "Key material was recovered during prior analysis";
const codeDecoded = "Beyond Beautiful";
const nextLevel = "integrity-check";

// Generate HTML
setTerminal(codeEncoded);

// Event Listeners
setInputEventListeners(codeDecoded, nextLevel);