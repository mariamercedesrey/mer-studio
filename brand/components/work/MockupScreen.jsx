// figma node: 129:1133 Mockup Screen — percentage-positioned so it scales with any width/height.
export function MockupScreen(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 1728,
      height: 1041,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-49ceebe19e421fda" style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "107.3%" }} />
      <div className="fig-asset-68110c5f5c18af20" style={{ position: "absolute", left: "-0.058%", top: 0, width: "100.058%", height: "100%" }} />
    </div>
  );
}
export default MockupScreen;
