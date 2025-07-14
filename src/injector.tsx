// src/inject-react.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";

const App = () => {
  return (
      <Body/>
  );
};

const mountNode = document.createElement("div");
mountNode.id = "saywhat-extension-ui";

Object.assign(mountNode.style, {
  position: "fixed",
  right: "20px",
  bottom: '0',
  zIndex: "999999",
  height: '100%',
  display: 'flex',
  alignItems: 'center'
});

document.body.appendChild(mountNode);

const root = ReactDOM.createRoot(mountNode);
root.render(<App />);
