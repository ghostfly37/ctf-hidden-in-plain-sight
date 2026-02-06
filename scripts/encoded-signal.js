import { setTerminal, setInputEventListeners } from "./input-level.js";

// Data
const codeEncoded = "U3RyYXdiZXJyaWVzIGFuZCBTdW5zaGluZQ==";
const codeDecoded = "Strawberries and Sunshine";
const nextLevel = "artifact-inspection";

// Generate HTML
setTerminal(codeEncoded);

// Event Listeners
setInputEventListeners(codeDecoded, nextLevel);