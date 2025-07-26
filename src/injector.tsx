import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";

function waitForElement(selector: string): Promise<Element> {
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      const el = document.querySelector(selector);
      if (el) {
        clearInterval(interval);
        resolve(el);
      }
    }, 100);
  });
}

async function mountReactApp() {

  await waitForElement("form textarea");
  const inputContainer = document.querySelector('form textarea')?.parentElement?.parentElement;
  if (!inputContainer || document.getElementById("proprchat-ui")) return;

  const mountNode = document.createElement("div");
  mountNode.id = "proprchat-ui";

  Object.assign(mountNode.style, {
    display: "block",
    width: "100%",
  });

  inputContainer.parentElement?.insertBefore(mountNode, inputContainer.nextSibling);

  const root = ReactDOM.createRoot(mountNode);
  root.render(<Body />);
}

const observer = new MutationObserver(() => {
  mountReactApp();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

try {
  mountReactApp();
} catch (err) {
  console.warn("ProprChat mount failed:", err);
}