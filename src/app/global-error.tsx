"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Critical Global Error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{
        backgroundColor: "#e9e0cf",
        color: "#142b23",
        fontFamily: "system-ui, -apple-system, sans-serif",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        padding: "16px",
      }}>
        <div style={{
          maxWidth: "480px",
          width: "100%",
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          padding: "32px",
          borderRadius: "24px",
          border: "1px solid rgba(183, 135, 54, 0.4)",
          boxShadow: "0 10px 30px rgba(20, 43, 35, 0.1)",
        }}>
          <h2 style={{ fontSize: "28px", fontWeight: "bold", margin: "0 0 12px 0", color: "#142b23" }}>
            Sanctuary Unavailable
          </h2>
          <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#2d4a3e", margin: "0 0 24px 0" }}>
            A critical system exception occurred. Please try reloading the platform.
          </p>
          <button
            onClick={() => reset()}
            style={{
              backgroundColor: "#b78736",
              color: "#ffffff",
              border: "none",
              padding: "12px 28px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Reload Sanctuary
          </button>
        </div>
      </body>
    </html>
  );
}
