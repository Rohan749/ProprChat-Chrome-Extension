import browser from "webextension-polyfill";

console.log("ProprChat Installed!");

browser.runtime.onInstalled.addListener((details) => {
  console.log("Extension installed:", details);
});
