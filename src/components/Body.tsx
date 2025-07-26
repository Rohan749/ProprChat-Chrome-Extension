import React from "react";
import "./styles.css";
import summarize from "../assets/summarize.png";
import kid from "../assets/kid.png";
import contract from "../assets/compact.png";
import expand from "../assets/expand.png";
import more from "../assets/more.png";
import pencil from "../assets/pencil.png";
import bug from "../assets/bug.png";
import { InjectPrompt } from "../functions/InjectPrompts";

const Body = () => {
  return (
    <div className="container">
      <div className="_body">
        <button
          onClick={() =>
            InjectPrompt("Expand this content by adding more details")
          }
        >
          <span className="tooltip-text">Expand</span>
          <img src={expand} alt="" />
        </button>
        <button
          onClick={() =>
            InjectPrompt(
              "Make this content shorter while keeping the original meaning"
            )
          }
        >
          <span className="tooltip-text">Shorten</span>
          <img src={contract} alt="" />
        </button>
        <button
          onClick={() =>
            InjectPrompt(
              "Rephrase this content without changing the actual meaning"
            )
          }
        >
          <span className="tooltip-text">Rephrase</span>
          <img src={pencil} alt="" />
        </button>
        <button
          onClick={() =>
            InjectPrompt(
              "Summarize this content into easy and understandable format"
            )
          }
        >
          <span className="tooltip-text">Summarize</span>
          <img src={summarize} alt="" />
        </button>
        <button onClick={() => InjectPrompt("Add a bit more into it")}>
          <span className="tooltip-text">A bit More</span>
          <img src={more} alt="" />
        </button>
        <button
          onClick={() =>
            InjectPrompt(
              "Explain this in a very simple way, like you're talking to a 5-year-old"
            )
          }
        >
          <span className="tooltip-text">Explain like I'm 5</span>
          <img src={kid} alt="" />
        </button>
        {/* <button
          onClick={() =>
            InjectPrompt("I've got this error, please fix it step by step")
          }
        >
          <span className="tooltip-text">Error Fix</span>
          <img src={bug} alt="" />
        </button> */}
      </div>
    </div>
  );
};

export default Body;
