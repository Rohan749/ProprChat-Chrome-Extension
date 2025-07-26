import { useEffect } from 'react';
import "./Popup.css";

export default function() {
  useEffect(() => {
    console.log("Hello from the proprchat!");
  }, []);

  return (
    <div style={{
      padding: '0 25px',
      background: "#090909",
    }}>
      <img src="/logo.png" style={{
        height: "100px",
        width: '100px'
      }} />
      <h1>ProprChat!</h1>
      <p style={{
        textAlign: 'center',
        fontWeight: 'medium',
        fontSize: "16px",
        wordSpacing: '2px',
        lineHeight: "20px"
      }}>
        Open ChatGPT. ProprChat is available in the input section!
      </p>
    </div>
  )
}
