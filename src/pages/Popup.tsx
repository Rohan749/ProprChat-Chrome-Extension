import { useEffect } from 'react';
import "./Popup.css";

export default function() {
  useEffect(() => {
    console.log("Hello from the proprchat!");
  }, []);

  return (
    <div style={{
      padding: '10px',
      background: "#090909",
    }}>
      <img src="/logo.png" style={{
        height: "100px",
        width: '100px'
      }} />
      <h1>ProprChat!</h1>
      <p style={{
        textAlign: 'center'
      }}>
        Open ChatGPT. ProprChat is available on bottom right!
      </p>
    </div>
  )
}
