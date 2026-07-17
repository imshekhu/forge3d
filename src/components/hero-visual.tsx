export function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Abstract 3D printer illustration">
      <div className="visual-orbit orbit-one" />
      <div className="visual-orbit orbit-two" />
      <div className="printer-shell">
        <div className="printer-top">
          <span className="printer-brand">FORGE / P2S</span>
          <span className="status-light" />
        </div>
        <div className="printer-window">
          <div className="gantry">
            <span className="tool-head">
              <span />
            </span>
          </div>
          <div className="printed-object">
            <span className="object-layer layer-one" />
            <span className="object-layer layer-two" />
            <span className="object-layer layer-three" />
            <span className="object-layer layer-four" />
          </div>
          <div className="print-bed" />
          <div className="scan-line" />
        </div>
        <div className="printer-footer">
          <span>LOCAL FABRICATION UNIT</span>
          <span>GTA / ON</span>
        </div>
      </div>

      <div className="visual-tag tag-model">
        <span className="tag-pulse" />
        MODEL READY
        <b>98%</b>
      </div>
      <div className="visual-tag tag-material">
        <span>ACTIVE MATERIAL</span>
        <b>PLA / MATTE</b>
      </div>
      <div className="visual-coordinates" aria-hidden="true">
        <span>X 043.7</span>
        <span>Y 018.2</span>
        <span>Z 112.5</span>
      </div>
    </div>
  );
}
