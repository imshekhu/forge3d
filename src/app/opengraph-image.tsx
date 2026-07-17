import { ImageResponse } from "next/og";

export const alt =
  "Forge3D — AI-assisted custom modelling and 3D printing in the GTA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          overflow: "hidden",
          background: "#0a0d0b",
          color: "#eef0e8",
          fontFamily: "Arial, sans-serif",
          padding: "78px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            opacity: 0.16,
            backgroundImage:
              "linear-gradient(rgba(185,255,90,.3) 1px,transparent 1px),linear-gradient(90deg,rgba(185,255,90,.3) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            width: "67%",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 55,
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            <div
              style={{
                display: "flex",
                width: 38,
                height: 38,
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #b9ff5a",
                color: "#b9ff5a",
                transform: "rotate(45deg)",
              }}
            >
              <span style={{ transform: "rotate(-45deg)", fontSize: 18 }}>F</span>
            </div>
            Forge<span style={{ color: "#b9ff5a", marginLeft: -15 }}>3D</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 86,
              fontWeight: 650,
              letterSpacing: "-5px",
              lineHeight: 0.92,
            }}
          >
            Your idea,
            <span style={{ color: "#b9ff5a" }}>made real.</span>
          </div>
          <p style={{ marginTop: 38, color: "#a8b0a4", fontSize: 24 }}>
            Custom 3D design & printing across the GTA.
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            right: 90,
            display: "flex",
            width: 290,
            height: 390,
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid rgba(185,255,90,.45)",
            background: "#141a15",
            boxShadow: "20px 25px 0 rgba(185,255,90,.06)",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 170,
              height: 220,
              alignItems: "flex-end",
              justifyContent: "center",
              border: "2px solid #364038",
              background: "#080b09",
              paddingBottom: 28,
            }}
          >
            <div
              style={{
                width: 105,
                height: 140,
                background:
                  "linear-gradient(135deg,#d6ff9f,#8fd234 70%,#4b7024)",
                clipPath:
                  "polygon(35% 0,65% 0,75% 25%,95% 60%,80% 100%,20% 100%,5% 60%,25% 25%)",
              }}
            />
          </div>
        </div>
      </div>
    ),
    size,
  );
}
