import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Alexander Guo, Director & Actor";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#d9d9d9",
          padding: "0 80px",
        }}
      >
        <div
          style={{
            fontSize: 128,
            fontWeight: 900,
            letterSpacing: "-4px",
            lineHeight: 0.9,
            color: "#222121",
            fontFamily: "sans-serif",
          }}
        >
          ALEXANDER
        </div>
        <div
          style={{
            fontSize: 128,
            fontWeight: 900,
            letterSpacing: "-4px",
            lineHeight: 0.9,
            color: "#222121",
            fontFamily: "sans-serif",
          }}
        >
          GUO
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginTop: 32,
          }}
        >
          <div style={{ width: 56, height: 6, background: "#222121" }} />
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "3px",
              color: "#222121",
              fontFamily: "sans-serif",
            }}
          >
            DIRECTOR &amp; ACTOR
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
