import { setTerminal, setInputEventListeners } from "./input-level.js";

// Data
const codeEncoded = "Hehe, looks like you found my secret, cutie.<br>   The source of the transmissions was none other<br>than me, all along.<br>   You've got one final puzzle to solve before<br>you receive your reward.<br>       <br> What is my favourite food?";
const codeDecoded = "Musty Mushroom Pasta";
const nextLevel = "valentine";

// Generate HTML
setTerminal(codeEncoded);

// Event Listeners
setInputEventListeners(codeDecoded, nextLevel);