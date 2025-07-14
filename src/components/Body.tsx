import React from "react";
import "./styles.css";
import summarize from "../assets/summarize.png";
import kid from "../assets/kid.png";
import contract from "../assets/compact.png";
import expand from "../assets/expand.png";
import more from "../assets/more.png";
import pencil from "../assets/pencil.png";
import { InjectPrompt } from "../functions/InjectPrompts";
import logo from "../assets/logo.png";

const Body = () => {
  return (
    <div className="container">
      <div className="_body">
        <div>
          <img src={logo} className="logo" alt="" />
        </div>
        <button
          onClick={() =>
            InjectPrompt("Expand this content by adding more details ")
          }
        >
          <span>Expand</span>
          <img src={expand} alt="" />
        </button>
        <button
          onClick={() =>
            InjectPrompt(
              "Make this content shorter while keeping the original meaning "
            )
          }
        >
          <span>Shorten</span>
          <img src={contract} alt="" />
        </button>
        <button
          onClick={() =>
            InjectPrompt(
              "Rephrase this content without changing the actual meaning"
            )
          }
        >
          <span>Rephrase</span>
          <img src={pencil} alt="" />
        </button>
        <button
          onClick={() =>
            InjectPrompt(
              "Summarize this content into easy and understandable format "
            )
          }>
          <span>Summarize</span>
          <img src={summarize} alt="" />
        </button>
        <button onClick={() => InjectPrompt("Add a bit more into it ")}>
          <span>A bit More</span>
          <img src={more} alt="" />
        </button>
        <button
          onClick={() =>
            InjectPrompt(
              "Explain this in a very simple way, like you're talking to a 5-year-old "
            )
          }
        >
          <span>Explain like I'm 5</span>
          <img src={kid} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Body;
