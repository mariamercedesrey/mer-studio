/* @ds-bundle: {"format":4,"namespace":"DesignSystem_e0175b","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Logotypo","sourcePath":"components/brand/Logotypo.jsx"},{"name":"SignatureDot","sourcePath":"components/brand/SignatureDot.jsx"},{"name":"MockupScreen","sourcePath":"components/work/MockupScreen.jsx"},{"name":"ProjectDetail","sourcePath":"components/work/ProjectDetail.jsx"},{"name":"TagComponent","sourcePath":"components/work/TagComponent.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"df47fff75895","components/brand/Icon.jsx":"888c535c18a1","components/brand/Logotypo.jsx":"fbd0bd287964","components/brand/SignatureDot.jsx":"b21c217c1166","components/work/MockupScreen.jsx":"f95be459fc6f","components/work/ProjectDetail.jsx":"ebca0834915b","components/work/TagComponent.jsx":"628cf55e6f66","ui_kits/website/ClientMarquee.jsx":"58e9595a23ef","ui_kits/website/Closing.jsx":"76a8c240022f","ui_kits/website/Hero.jsx":"500b0cea749c","ui_kits/website/Process.jsx":"26ab2421e3fc","ui_kits/website/SelectedWork.jsx":"314a86c88e97","ui_kits/website/Services.jsx":"1e4baeb719d2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_e0175b = window.DesignSystem_e0175b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// figma node: 2007:229 Button (6 variants: Style × State)

const BTN_BG = {
  primary: 'var(--action-primary-background)',
  secondary: 'var(--action-secondary-background)',
  ghost: 'transparent'
};
const BTN_FG = {
  primary: 'var(--action-primary-text)',
  secondary: 'var(--action-secondary-text)',
  ghost: 'var(--action-ghost-text)'
};
const BTN_HOVER_BG = {
  primary: 'var(--accent-bright)',
  secondary: 'var(--color-neutral-800)',
  ghost: 'var(--fills-primary)'
};
function Button(_p = {}) {
  const {
    label = 'discover more',
    style2,
    variant,
    state = 'default',
    disabled,
    onClick,
    href,
    type = 'button',
    className,
    style,
    children,
    ...rest
  } = _p;
  const v = variant ?? style2 ?? 'primary';
  const isDisabled = disabled || state === 'disabled';
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  let bg = BTN_BG[v] ?? BTN_BG.primary;
  let fg = BTN_FG[v] ?? BTN_FG.primary;
  if (isDisabled) {
    bg = v === 'ghost' ? 'transparent' : 'var(--action-disabled-background)';
    fg = 'var(--action-disabled-text)';
  } else if (hover) {
    bg = BTN_HOVER_BG[v];
  }
  const Tag = href && !isDisabled ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    href: Tag === 'a' ? href : undefined,
    type: Tag === 'button' ? type : undefined,
    disabled: Tag === 'button' ? isDisabled : undefined,
    "aria-disabled": isDisabled || undefined,
    onClick: isDisabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    className: className,
    style: {
      width: 'fit-content',
      minHeight: 48,
      borderRadius: 999,
      border: 'none',
      backgroundColor: bg,
      display: 'inline-flex',
      flexDirection: 'row',
      gap: 8,
      padding: '14px 20px 14px 20px',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      textDecoration: 'none',
      transform: press && !isDisabled ? 'scale(0.97)' : 'scale(1)',
      transition: 'background-color 160ms var(--ease-precise), transform 160ms var(--ease-precise)',
      outlineOffset: 3,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: 'nowrap',
      lineHeight: '20px',
      color: fg
    }
  }, children ?? label));
}
Object.assign(__ds_scope, { Button, __ds_default_components_actions_Button_8qpwqe: Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/brand/Icon.jsx
try { (() => {
// figma node: 112:1065 icon (3 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "type=" + __venc(p.type);
function Icon(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "positive"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18,
      color: "var(--primary-color)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6.5 L -0.351 6.014 C -0.507 6.126 -0.6 6.307 -0.6 6.5 L 0 6.5 Z M 9 0 L 9.351 -0.486 C 9.142 -0.638 8.858 -0.638 8.649 -0.486 L 9 0 Z M 18 6.5 L 18.6 6.5 C 18.6 6.307 18.507 6.126 18.351 6.014 L 18 6.5 Z M 0 6.5 L 0.351 6.986 L 9.351 0.486 L 9 0 L 8.649 -0.486 L -0.351 6.014 L 0 6.5 Z M 9 0 L 8.649 0.486 L 17.649 6.986 L 18 6.5 L 18.351 6.014 L 9.351 -0.486 L 9 0 Z M 18 6.5 L 17.4 6.5 L 17.4 16 L 18 16 L 18.6 16 L 18.6 6.5 L 18 6.5 Z M 18 16 L 17.4 16 C 17.4 16.773 16.773 17.4 16 17.4 L 16 18 L 16 18.6 C 17.436 18.6 18.6 17.436 18.6 16 L 18 16 Z M 16 18 L 16 17.4 L 2 17.4 L 2 18 L 2 18.6 L 16 18.6 L 16 18 Z M 2 18 L 2 17.4 C 1.227 17.4 0.6 16.773 0.6 16 L 0 16 L -0.6 16 C -0.6 17.436 0.564 18.6 2 18.6 L 2 18 Z M 0 16 L 0.6 16 L 0.6 6.5 L 0 6.5 L -0.6 6.5 L -0.6 16 L 0 16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.500,
    height: 3.500,
    viewBox: "0 0 5.500 3.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.25,
      top: 11.5,
      width: 5.5,
      height: 3.5,
      color: "rgb(210,125,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.75 1 C 2.75 1 2 0 1.25 0 C 0.5 0 0 0.5 0 1.25 C 0 2.25 2.75 3.5 2.75 3.5 C 2.75 3.5 5.5 2.25 5.5 1.25 C 5.5 0.5 5 0 4.25 0 C 3.5 0 2.75 1 2.75 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18,
      color: "var(--tertiary-color)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6.5 L -0.351 6.014 C -0.507 6.126 -0.6 6.307 -0.6 6.5 L 0 6.5 Z M 9 0 L 9.351 -0.486 C 9.142 -0.638 8.858 -0.638 8.649 -0.486 L 9 0 Z M 18 6.5 L 18.6 6.5 C 18.6 6.307 18.507 6.126 18.351 6.014 L 18 6.5 Z M 0 6.5 L 0.351 6.986 L 9.351 0.486 L 9 0 L 8.649 -0.486 L -0.351 6.014 L 0 6.5 Z M 9 0 L 8.649 0.486 L 17.649 6.986 L 18 6.5 L 18.351 6.014 L 9.351 -0.486 L 9 0 Z M 18 6.5 L 17.4 6.5 L 17.4 16 L 18 16 L 18.6 16 L 18.6 6.5 L 18 6.5 Z M 18 16 L 17.4 16 C 17.4 16.773 16.773 17.4 16 17.4 L 16 18 L 16 18.6 C 17.436 18.6 18.6 17.436 18.6 16 L 18 16 Z M 16 18 L 16 17.4 L 2 17.4 L 2 18 L 2 18.6 L 16 18.6 L 16 18 Z M 2 18 L 2 17.4 C 1.227 17.4 0.6 16.773 0.6 16 L 0 16 L -0.6 16 C -0.6 17.436 0.564 18.6 2 18.6 L 2 18 Z M 0 16 L 0.6 16 L 0.6 6.5 L 0 6.5 L -0.6 6.5 L -0.6 16 L 0 16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.500,
    height: 3.500,
    viewBox: "0 0 5.500 3.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.25,
      top: 11.5,
      width: 5.5,
      height: 3.5,
      color: "rgb(210,125,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.75 1 C 2.75 1 2 0 1.25 0 C 0.5 0 0 0.5 0 1.25 C 0 2.25 2.75 3.5 2.75 3.5 C 2.75 3.5 5.5 2.25 5.5 1.25 C 5.5 0.5 5 0 4.25 0 C 3.5 0 2.75 1 2.75 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18,
      color: "var(--primary-color)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6.5 L -0.351 6.014 C -0.507 6.126 -0.6 6.307 -0.6 6.5 L 0 6.5 Z M 9 0 L 9.351 -0.486 C 9.142 -0.638 8.858 -0.638 8.649 -0.486 L 9 0 Z M 18 6.5 L 18.6 6.5 C 18.6 6.307 18.507 6.126 18.351 6.014 L 18 6.5 Z M 0 6.5 L 0.351 6.986 L 9.351 0.486 L 9 0 L 8.649 -0.486 L -0.351 6.014 L 0 6.5 Z M 9 0 L 8.649 0.486 L 17.649 6.986 L 18 6.5 L 18.351 6.014 L 9.351 -0.486 L 9 0 Z M 18 6.5 L 17.4 6.5 L 17.4 16 L 18 16 L 18.6 16 L 18.6 6.5 L 18 6.5 Z M 18 16 L 17.4 16 C 17.4 16.773 16.773 17.4 16 17.4 L 16 18 L 16 18.6 C 17.436 18.6 18.6 17.436 18.6 16 L 18 16 Z M 16 18 L 16 17.4 L 2 17.4 L 2 18 L 2 18.6 L 16 18.6 L 16 18 Z M 2 18 L 2 17.4 C 1.227 17.4 0.6 16.773 0.6 16 L 0 16 L -0.6 16 C -0.6 17.436 0.564 18.6 2 18.6 L 2 18 Z M 0 16 L 0.6 16 L 0.6 6.5 L 0 6.5 L -0.6 6.5 L -0.6 16 L 0 16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.500,
    height: 3.500,
    viewBox: "0 0 5.500 3.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.25,
      top: 11.5,
      width: 5.5,
      height: 3.5,
      color: "var(--tertiary-color)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.75 1 C 2.75 1 2 0 1.25 0 C 0.5 0 0 0.5 0 1.25 C 0 2.25 2.75 3.5 2.75 3.5 C 2.75 3.5 5.5 2.25 5.5 1.25 C 5.5 0.5 5 0 4.25 0 C 3.5 0 2.75 1 2.75 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: type=positive
    "type=positive": __body0,
    // figma: type=negative
    "type=negative": __body1,
    // figma: type=alternative
    "type=alternative": __body2
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { Icon, __ds_default_components_brand_Icon_1q8wa2h: Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logotypo.jsx
try { (() => {
// figma node: 112:1075 logotypo (2 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "type=" + __venc(p.type);
function Logotypo(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "vertical"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--primary-color)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Agente"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--primary-color)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Mamá"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(210,125,86)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text3 ?? "AI"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 1,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--primary-color)",
      flexShrink: 0
    }
  }, props.text1 ?? "Agente"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--primary-color)",
      flexShrink: 0
    }
  }, props.text2 ?? "Mamá"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(210,125,86)",
      flexShrink: 0
    }
  }, props.text3 ?? "AI")));
  const __impls = {
    // figma: type=horizontal
    "type=horizontal": __body0,
    // figma: type=vertical
    "type=vertical": __body1
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
Object.assign(__ds_scope, { Logotypo, __ds_default_components_brand_Logotypo_1fg0y0d: Logotypo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logotypo.jsx", error: String((e && e.message) || e) }); }

// components/brand/SignatureDot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Intentional addition — the MER signature yellow dot as a reusable, motion-ready element.

function SignatureDot(_p = {}) {
  const {
    size = 24,
    tone = 'accent',
    animate = false,
    className,
    style,
    ...rest
  } = _p;
  const bg = tone === 'dark' ? 'var(--accent-dark)' : tone === 'muted' ? 'rgb(126,126,126)' : 'var(--accent-primary)';
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    "data-mer-dot": ""
  }, rest, {
    className: [animate ? 'mer-dot-anim' : '', className].filter(Boolean).join(' ') || undefined,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      borderRadius: '50%',
      backgroundColor: bg,
      flexShrink: 0,
      ...style
    }
  }));
}
Object.assign(__ds_scope, { SignatureDot, __ds_default_components_brand_SignatureDot_soh5jd: SignatureDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SignatureDot.jsx", error: String((e && e.message) || e) }); }

// components/work/MockupScreen.jsx
try { (() => {
// figma node: 129:1133 Mockup Screen — percentage-positioned so it scales with any width/height.
function MockupScreen(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1728,
      height: 1041,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-49ceebe19e421fda",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "107.3%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-68110c5f5c18af20",
    style: {
      position: "absolute",
      left: "-0.058%",
      top: 0,
      width: "100.058%",
      height: "100%"
    }
  }));
}
Object.assign(__ds_scope, { MockupScreen, __ds_default_components_work_MockupScreen_79red7: MockupScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/work/MockupScreen.jsx", error: String((e && e.message) || e) }); }

// components/work/ProjectDetail.jsx
try { (() => {
// Intentional addition — reusable Project Detail pattern, modelled on Figma "Frame 1984078285" (node 2033:1913).
// Structure only. Open/close transitions, scroll behaviour and image motion are intentionally NOT defined yet —
// hook into data-state / onClose / the section slots when motion specs arrive.

function PDRoleChip({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 27,
      padding: '7px 9px',
      boxSizing: 'border-box',
      backgroundColor: 'var(--surface-raised-dark)',
      color: 'var(--color-neutral-0)',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 13,
      lineHeight: 1,
      letterSpacing: '0.020em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }
  }, children);
}
function PDArrowIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 6.5h8.5V15M17.5 6.5 6.5 17.5",
    stroke: "currentColor",
    strokeWidth: "1.25",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function PDCloseIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12",
    stroke: "currentColor",
    strokeWidth: "1.25",
    strokeLinecap: "round"
  }));
}
function ProjectDetail(_p = {}) {
  const {
    client = 'Asociart',
    linkLabel = 'asociart.com',
    linkHref,
    title = 'Reengineering a 13-module legacy platform',
    meta = '[Insurance & Finance] AT NEORIS',
    roles = ['Design System', 'PRODUCT DESIGN', 'Front-End'],
    blocks = [],
    heroImage,
    gallery = [],
    overlay = false,
    open = true,
    onClose,
    children,
    className,
    style
  } = _p;
  React.useEffect(() => {
    if (!overlay || !open || !onClose) return;
    const k = e => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [overlay, open, onClose]);
  if (!open) return null;
  const ink = 'var(--text-primary)';
  return /*#__PURE__*/React.createElement("article", {
    role: overlay ? 'dialog' : undefined,
    "aria-modal": overlay || undefined,
    "aria-label": title,
    "data-state": open ? 'open' : 'closed',
    className: className,
    style: {
      position: overlay ? 'fixed' : 'relative',
      inset: overlay ? 0 : undefined,
      zIndex: overlay ? 100 : undefined,
      overflowY: overlay ? 'auto' : undefined,
      backgroundColor: 'var(--surface-soft)',
      color: ink,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 2,
      backgroundColor: 'var(--surface-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '30px 16px 0 48px',
      minHeight: 83,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 48,
      lineHeight: 1.2,
      whiteSpace: 'nowrap'
    }
  }, client), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, linkLabel && /*#__PURE__*/React.createElement("a", {
    href: linkHref ?? '#',
    target: linkHref ? '_blank' : undefined,
    rel: "noreferrer",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      height: 48,
      padding: '0 26px',
      borderRadius: 55,
      boxShadow: 'inset 0 0 0 1px rgb(20,20,20)',
      color: ink,
      textDecoration: 'none',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 16,
      lineHeight: '11.581px',
      letterSpacing: '0.030em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }
  }, linkLabel, /*#__PURE__*/React.createElement(PDArrowIcon, null)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Close project",
    style: {
      width: 48,
      height: 48,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent',
      border: 'none',
      color: ink,
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(PDCloseIcon, null)))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 0,
      margin: '36px 16px 0 20px',
      borderTop: '0.5px solid rgb(141,141,141)'
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '47px 48px 0 48px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 200,
      fontSize: 62,
      lineHeight: 1.2,
      textWrap: 'pretty'
    }
  }, title), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-technical)',
      fontSize: 14,
      lineHeight: '100%',
      letterSpacing: '0.020em',
      textTransform: 'uppercase'
    }
  }, meta), roles.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 4,
      marginTop: 4
    }
  }, roles.map(r => /*#__PURE__*/React.createElement(PDRoleChip, {
    key: r
  }, r)))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '72px 48px 95px 43px',
      display: 'flex',
      flexDirection: 'column',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 400px',
      maxWidth: 561,
      display: 'flex',
      flexDirection: 'column',
      gap: 29
    }
  }, blocks.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 28,
      lineHeight: '100%'
    }
  }, b.heading), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 18,
      lineHeight: '100%',
      textWrap: 'pretty'
    }
  }, b.body)))), heroImage && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 1 725px',
      aspectRatio: '725 / 688',
      background: `url(${heroImage}) center / cover no-repeat`
    }
  })), gallery.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 24,
      alignItems: 'flex-start'
    }
  }, gallery.map((g, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: g.overlay ? 'absolute' : 'relative',
      left: g.overlay ? 0 : undefined,
      top: g.overlay ? 0 : undefined,
      zIndex: g.overlay ? 1 : undefined,
      width: g.width,
      height: g.height,
      maxWidth: '100%',
      flexShrink: 0,
      borderRadius: g.radius ?? 0,
      boxShadow: g.shadow ? '22.431px 44.863px 12.462px 0px rgba(0,0,0,0.12)' : undefined,
      background: `url(${g.src}) center / cover no-repeat`
    }
  }))), children));
}
Object.assign(__ds_scope, { ProjectDetail, __ds_default_components_work_ProjectDetail_xukf92: ProjectDetail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/work/ProjectDetail.jsx", error: String((e && e.message) || e) }); }

// components/work/TagComponent.jsx
try { (() => {
// figma node: 7:1202 tag_component — bracketed uppercase tag: [ DESIGN ]

function TagComponent(_p = {}) {
  const {
    text1,
    label,
    color = 'rgba(0,0,0,0.6)',
    size = 14,
    className,
    style
  } = _p;
  const bracket = side => ({
    width: 3,
    alignSelf: 'stretch',
    boxSizing: 'border-box',
    borderTop: '1.5px solid currentColor',
    borderBottom: '1.5px solid currentColor',
    [side === 'left' ? 'borderLeft' : 'borderRight']: '1.5px solid currentColor',
    flexShrink: 0
  });
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      width: 'fit-content',
      display: 'inline-flex',
      flexDirection: 'row',
      gap: 4,
      alignItems: 'stretch',
      color,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: bracket('left')
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Aspekta, var(--font-display)',
      fontWeight: 700,
      fontSize: size,
      whiteSpace: 'nowrap',
      lineHeight: 1,
      letterSpacing: '0.020em',
      color,
      textTransform: 'uppercase',
      padding: '1px 0'
    }
  }, label ?? text1 ?? 'Tag'), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: bracket('right')
  }));
}
Object.assign(__ds_scope, { TagComponent, __ds_default_components_work_TagComponent_1nit00r: TagComponent });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/work/TagComponent.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ClientMarquee.jsx
try { (() => {
// Client marquee — looping logo carousel on ink at 55% opacity. Figma: Client Marquee (149:5176)
const MQ = '../../assets/clients/';
function MqMask({
  src,
  w,
  h
}) {
  const m = `url(${src}) center / contain no-repeat`;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: w,
      height: h,
      flexShrink: 0,
      background: 'rgb(246,246,246)',
      WebkitMask: m,
      mask: m
    }
  });
}
function MqImg({
  src,
  w,
  h,
  whiteBg
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: w,
      height: h,
      flexShrink: 0,
      background: `url(${src}) center / contain no-repeat`,
      filter: whiteBg ? 'grayscale(1) invert(1)' : 'brightness(0) invert(0.965)',
      mixBlendMode: whiteBg ? 'screen' : 'normal'
    }
  });
}
function MqLogos() {
  const {
    Icon,
    Logotypo
  } = window.DesignSystem_e0175b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MqImg, {
    src: MQ + 'client-01.png',
    w: 117.403,
    h: 37.543
  }), /*#__PURE__*/React.createElement(MqMask, {
    src: MQ + 'client-09.svg',
    w: 112.269,
    h: 30.076
  }), /*#__PURE__*/React.createElement(MqImg, {
    src: MQ + 'client-02.png',
    w: 126.7,
    h: 54.014
  }), /*#__PURE__*/React.createElement(MqMask, {
    src: MQ + 'client-10.svg',
    w: 66.921,
    h: 31.059
  }), /*#__PURE__*/React.createElement(MqImg, {
    src: MQ + 'client-03.png',
    w: 92.465,
    h: 36.62
  }), /*#__PURE__*/React.createElement(MqMask, {
    src: MQ + 'client-11.svg',
    w: 92.465,
    h: 46.69
  }), ['04', '05', '06', '07', '08'].map(n => /*#__PURE__*/React.createElement(MqImg, {
    key: n,
    src: MQ + 'client-' + n + '.png',
    w: 74.48,
    h: 59.248,
    whiteBg: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 3.307,
      alignItems: 'center',
      flexShrink: 0,
      '--primary-color': 'rgb(246,246,246)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    type: "positive",
    style: {
      width: 39.683,
      height: 39.683
    }
  }), /*#__PURE__*/React.createElement(Logotypo, {
    type: "horizontal",
    style: {
      gap: 1.653
    }
  })), /*#__PURE__*/React.createElement(MqMask, {
    src: MQ + 'client-12.svg',
    w: 169.105,
    h: 33.873
  }));
}
function ClientMarquee() {
  const m = 'url(../../assets/icons/scroll-arrow.svg) center / contain no-repeat';
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "02 Client marquee",
    style: {
      position: 'relative',
      height: 249,
      backgroundColor: 'rgb(20,20,20)',
      display: 'flex',
      flexDirection: 'column',
      padding: '80px 0 20px 0',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxSizing: 'border-box',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mer-marquee-track",
    style: {
      display: 'flex',
      width: 'max-content',
      opacity: 0.55
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 55,
      alignItems: 'center',
      paddingRight: 55
    }
  }, /*#__PURE__*/React.createElement(MqLogos, null)), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      display: 'flex',
      gap: 55,
      alignItems: 'center',
      paddingRight: 55
    }
  }, /*#__PURE__*/React.createElement(MqLogos, null)))), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 50,
      height: 50,
      transform: 'rotate(180deg)',
      background: 'rgb(238,187,10)',
      WebkitMask: m,
      mask: m
    }
  }));
}
Object.assign(window, {
  ClientMarquee
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ClientMarquee.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Closing.jsx
try { (() => {
// Final CTA, contact block, footer. Figma: Website / Desktop › Final CTA, Contact, Footer
function Hairline() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 0,
      borderTop: '0.3px solid rgb(200,200,200)'
    }
  });
}
function Closing({
  onNav
}) {
  const {
    Button,
    SignatureDot
  } = window.DesignSystem_e0175b;
  const mono13 = {
    fontFamily: 'var(--font-technical)',
    fontSize: 13,
    lineHeight: '13.200px',
    letterSpacing: '0.825px',
    color: 'rgb(20,20,20)',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap'
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hairline, null), /*#__PURE__*/React.createElement(Hairline, null), /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "08 Final CTA",
    style: {
      position: 'relative',
      height: 447,
      overflow: 'hidden',
      backgroundColor: 'rgb(20,20,20)',
      display: 'flex',
      flexDirection: 'column',
      gap: 45,
      padding: '66px 48px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 810,
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-technical)',
      fontSize: 16,
      lineHeight: '100%',
      letterSpacing: '0.020em',
      color: '#fff'
    }
  }, "That's all for now."), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 80,
      lineHeight: '90px',
      letterSpacing: '-1.088px',
      color: '#fff'
    }
  }, "Got a project in mind?", /*#__PURE__*/React.createElement("br", null), "Let\u2019s talk", /*#__PURE__*/React.createElement(SignatureDot, {
    size: 24,
    animate: true,
    style: {
      marginLeft: 12
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    label: "lets talk",
    style: {
      width: 172,
      height: 56
    },
    onClick: () => onNav('contact')
  }))), /*#__PURE__*/React.createElement(Hairline, null), /*#__PURE__*/React.createElement("section", {
    id: "contact",
    "data-screen-label": "09 Contact",
    style: {
      backgroundColor: 'rgb(20,20,20)',
      padding: 48,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-negative.svg",
    alt: "mer.studio",
    style: {
      width: 305.156,
      height: 47.788,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22
    }
  }, ['hello@mer.studio', '+54 9 11 41742309'].map(t => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: t.includes('@') ? 'mailto:' + t : 'tel:+5491141742309',
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 24,
      lineHeight: 1.2,
      color: '#fff',
      textDecoration: 'none',
      whiteSpace: 'nowrap'
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      width: 443
    }
  }, [['Selected Works', 'work'], ['Services', 'services'], ['AI Visibility', 'services'], ['About Us', 'about']].map(([t, id]) => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: '#' + id,
    onClick: e => {
      e.preventDefault();
      onNav(id);
    },
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      lineHeight: 1.2,
      letterSpacing: '-0.010em',
      color: '#fff',
      textDecoration: 'none'
    }
  }, t))))), /*#__PURE__*/React.createElement("footer", {
    "data-screen-label": "10 Footer",
    style: {
      height: 51,
      display: 'flex',
      padding: '14px 48px',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxSizing: 'border-box',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: mono13
  }, "\xA92026 mer.studio\u2122 All Rights Reserved"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: mono13
  }, "Working Worldwide from"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono13,
      height: 23,
      boxShadow: 'inset 0 0 0 1px rgb(20,20,20)',
      display: 'inline-flex',
      alignItems: 'center',
      padding: '4px 14px',
      boxSizing: 'border-box'
    }
  }, "argentina"))));
}
Object.assign(window, {
  Closing
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Closing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Hero — header bar, headline, m mark, industries. Figma: Website / Desktop › Hero (149:5103)
const heroMono = {
  fontFamily: 'var(--font-technical)',
  fontWeight: 400,
  textTransform: 'uppercase'
};
function SiteNav({
  onNav
}) {
  const items = [['selected work', 'work'], ['Services', 'services'], ['AI Visibility', 'services'], ['About us', 'about']];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width: 339.418,
      height: 32,
      borderRadius: 30.333,
      backgroundColor: 'rgba(120,120,120,0.2)',
      backdropFilter: 'blur(7.222px)',
      WebkitBackdropFilter: 'blur(7.222px)',
      display: 'flex',
      alignItems: 'center',
      padding: '5.778px 11px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 19.262,
      padding: '0 12.316px',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    }
  }, items.map(([label, id]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: '#' + id,
    onClick: e => {
      e.preventDefault();
      onNav(id);
    },
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 13,
      lineHeight: '13.972px',
      letterSpacing: '0.040em',
      color: 'rgb(20,20,20)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      textDecoration: 'none'
    }
  }, label))));
}
function Hero({
  onNav
}) {
  const {
    Button,
    SignatureDot
  } = window.DesignSystem_e0175b;
  const industries = ['[Agribusiness]', '[Fashion]', '[Insurance]', '[Finance]', '[Foreign Trade]', '[startups]', '[Enterprise]', '[Healthcare]'];
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "01 Hero",
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 778,
      backgroundColor: 'var(--surface-soft)',
      padding: '28px 48px 100px 48px',
      boxSizing: 'border-box',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 116
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 32,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.svg",
    alt: "mer.studio",
    style: {
      width: 181.815,
      height: 28.039,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...heroMono,
      fontSize: 13,
      lineHeight: '10px',
      letterSpacing: '1.718px',
      color: 'rgb(119,119,119)',
      whiteSpace: 'nowrap'
    }
  }, "DESIGN AND BUILD, END TO END")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginRight: 12
    }
  }, /*#__PURE__*/React.createElement(SiteNav, {
    onNav: onNav
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1248,
      height: 502,
      display: 'flex',
      flexDirection: 'column',
      gap: 23.75,
      justifyContent: 'flex-end',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 880,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 24,
      lineHeight: '100%',
      letterSpacing: '2px',
      color: 'rgb(20,20,20)'
    }
  }, "From the first decision to the last detail."), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 95,
      lineHeight: '100%',
      letterSpacing: '-3.332px',
      color: 'rgb(20,20,20)'
    }
  }, "Strategy, design and build, end to end.")), /*#__PURE__*/React.createElement(Button, {
    label: "book a call",
    style: {
      height: 52
    },
    onClick: () => onNav('contact')
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -18,
      top: 548,
      width: 55,
      height: 55,
      borderRadius: '50%',
      backgroundColor: 'rgb(246,246,246)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: -65,
      height: 684,
      padding: '0 48px 70px 0',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 614,
      display: 'flex',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 929,
      height: 614,
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-slot": "hero-visual",
    style: {
      height: 507,
      background: 'rgb(240,240,240)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 48px',
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...heroMono,
      fontSize: 16,
      lineHeight: '100%',
      letterSpacing: '0.020em',
      color: 'rgb(20,20,20)'
    }
  }, "wHERE WE'VE WORKED"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, industries.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontFamily: 'var(--font-technical)',
      fontSize: 13,
      lineHeight: 1,
      letterSpacing: '0.010em',
      color: 'rgb(20,20,20)',
      textTransform: 'capitalize',
      whiteSpace: 'nowrap'
    }
  }, t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      padding: '25px 0',
      flexGrow: 1,
      alignSelf: 'stretch',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 275,
      height: 188,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      fontFamily: 'var(--font-brand)',
      fontWeight: 800,
      fontSize: 285.42,
      lineHeight: 0.66,
      letterSpacing: '-0.070em',
      color: 'rgb(20,20,20)'
    }
  }, "m"), /*#__PURE__*/React.createElement(SignatureDot, {
    size: 45.954,
    animate: true,
    style: {
      position: 'absolute',
      left: 190.281,
      top: 140.445
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 22,
      lineHeight: '100%',
      color: 'rgb(20,20,20)'
    }
  }, "Strategy, design and code, handled end to end by one team. Twenty-five years across enterprise products and US startups, applied at any size \u2014 a brand, a website, an online store, a full platform."), /*#__PURE__*/React.createElement(Button, {
    label: "start a project",
    style: {
      height: 52
    },
    onClick: () => onNav('contact')
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      top: 28,
      width: 32,
      height: 32,
      backgroundColor: 'rgb(52,52,52)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 12,
      lineHeight: '13.972px',
      color: '#fff'
    }
  }, "EN")));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Process.jsx
try { (() => {
// How it works (charcoal) + About (ink). Figma: Website / Desktop › How It Works, About
const STEPS = [['01', 'Call', 'Twenty minutes. You tell us what you need, by when, and what budget you have.'], ['02', 'Proposal', 'Within 48 hours you get scope, final price, delivery date and what is out of scope. If it does not work for you, we stop there.'], ['03', 'Design and build', 'We work in blocks and show you progress along the way. Two rounds of revisions included.'], ['04', 'Handover', 'Launch, files and accounts in your name. Thirty days of support in case anything breaks.']];
const STATS = [['25+', 'years of experience designing products, brands and websites'], ['35+', 'websites and digital products delivered directly to clients'], ['1:1', 'Direct access to the senior designer, from first call to final files'], ['7', 'years designing for US startups, working alongside founders']];
function HowItWorks() {
  const {
    SignatureDot
  } = window.DesignSystem_e0175b;
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "06 How it works",
    style: {
      position: 'relative',
      height: 624.25,
      backgroundColor: 'rgb(52,52,52)',
      padding: '95.25px 48px 96px 48px',
      boxSizing: 'border-box',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 81
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-technical)',
      fontSize: 16,
      lineHeight: '100%',
      letterSpacing: '0.020em',
      color: 'rgb(245,243,243)',
      textTransform: 'uppercase'
    }
  }, "How it works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      width: 810,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 45,
      lineHeight: '100%',
      letterSpacing: '-1.088px',
      color: 'rgb(245,243,243)'
    }
  }, "Four steps, no surprises", /*#__PURE__*/React.createElement(SignatureDot, {
    size: 24,
    style: {
      marginLeft: 8
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      width: 739,
      fontFamily: 'var(--font-body-alt)',
      fontSize: 16,
      lineHeight: '21.600px',
      color: 'rgb(245,243,243)'
    }
  }, "Every project starts with a 20-minute call. You get back a proposal with a fixed scope, a final price and a delivery date.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0.75,
      justifyContent: 'center'
    }
  }, STEPS.map(([n, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      width: 335.438,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: '22px 12px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-technical)',
      fontSize: 17,
      lineHeight: '13.200px',
      letterSpacing: '1.155px',
      color: 'rgb(245,243,243)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 24,
      lineHeight: '25.920px',
      letterSpacing: '-0.480px',
      color: 'rgb(245,243,243)'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body-alt)',
      fontSize: 15,
      lineHeight: '20px',
      color: 'rgb(245,243,243)'
    }
  }, d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -16,
      top: 397.264,
      width: 1472,
      height: 148,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/process-line.svg",
    alt: "",
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: 1472,
      height: 148,
      transform: 'scaleY(-1)'
    }
  }), /*#__PURE__*/React.createElement(SignatureDot, {
    size: 24,
    tone: "muted",
    style: {
      position: 'absolute',
      left: 1183,
      top: 34
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 923,
      top: 125.463,
      width: 517,
      height: 259,
      background: 'url(../../assets/img/how-it-works.png) center / cover no-repeat'
    }
  }));
}
function About({
  onNav
}) {
  const {
    Button
  } = window.DesignSystem_e0175b;
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    "data-screen-label": "07 About",
    style: {
      height: 760,
      backgroundColor: 'rgb(20,20,20)',
      display: 'flex',
      flexDirection: 'column',
      gap: 58,
      padding: '100px 48px',
      alignItems: 'center',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'stretch',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 297,
      outline: '0.750px dashed rgb(246,246,246)',
      outlineOffset: '-0.375px',
      display: 'flex',
      gap: 50,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 334,
      height: 297,
      flexShrink: 0,
      transform: 'scaleX(-1)',
      background: 'url(../../assets/img/mer-portrait.png) center / cover no-repeat',
      outline: '0.311px dashed rgb(246,246,246)',
      outlineOffset: '-0.311px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      flexGrow: 1,
      paddingRight: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      padding: '3.952px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-technical)',
      fontSize: 16,
      lineHeight: '100%',
      letterSpacing: '0.020em',
      color: 'rgb(246,246,246)',
      textTransform: 'uppercase'
    }
  }, "about us"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 43.5,
      lineHeight: '44.370px',
      letterSpacing: '-1.088px',
      color: 'rgb(246,246,246)'
    }
  }, "I'm Mer.\xA0 I've been designing digital products for more than 25 years.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body-alt)',
      fontSize: 16,
      lineHeight: '21.600px',
      color: 'rgb(246,246,246)'
    }
  }, "Eight of those years went into complex enterprise products, and seven into working with US startups, often directly with founders and CEOs. That is what I bring to a small project: the judgement to decide quickly and well, and the ability to build what I design."))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 157.42,
      border: '0.450px solid rgb(246,246,246)',
      display: 'flex'
    }
  }, STATS.map(([v, d]) => /*#__PURE__*/React.createElement("div", {
    key: v,
    style: {
      flex: 1,
      border: '0.400px dashed rgb(246,246,246)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: '25px 40px',
      justifyContent: 'center',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 42,
      lineHeight: '31.500px',
      letterSpacing: '-0.945px',
      color: 'rgb(238,187,10)',
      height: 53,
      display: 'flex',
      alignItems: 'center'
    }
  }, v), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 15,
      lineHeight: '100%',
      color: 'rgb(246,246,246)',
      minHeight: 42
    }
  }, d))))), /*#__PURE__*/React.createElement(Button, {
    label: "book a call",
    style: {
      width: 201,
      height: 56
    },
    onClick: () => onNav('contact')
  }));
}
Object.assign(window, {
  HowItWorks,
  About
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Process.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SelectedWork.jsx
try { (() => {
// Selected Work — scroll-driven editorial list. Items rest at 30% opacity; the one nearest the viewport centre
// becomes active (100%) and clickable. Thresholds/easing are provisional — refine when motion specs arrive.
const W = '../../assets/work/';
const bg = (src, extra = '') => `${extra}url(${W}${src}) center / cover no-repeat`;
const abs = (l, t, w, h, more = {}) => ({
  position: 'absolute',
  left: l,
  top: t,
  width: w,
  height: h,
  ...more
});
const PROJECTS = [{
  id: 'asociart',
  align: 'start',
  w: 1049,
  title: 'Reengineering a 13-module legacy platform ',
  meta: '[Insurance & Finance] AT NEORIS',
  roles: ['Design System', 'PRODUCT DESIGN', 'Front-End'],
  media: () => /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgb(239,239,239)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: abs(0, -28.87, 748, 711, {
      background: `linear-gradient(90deg, rgba(239,239,239,0) 64.89%, rgb(239,239,239) 100%), ${bg('asociart-system.png')}`
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: abs(232, 153.1, 584.992, 347.76, {
      background: bg('asociart-desktop.png'),
      boxShadow: '0px 3.780px 3.780px 0px rgba(0,0,0,0.25)'
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: abs(802.189, 94.135, 210.638, 490.35, {
      background: bg('asociart-mobile.png')
    })
  })),
  detail: {
    client: 'Asociart',
    linkLabel: 'asociart.com',
    linkHref: 'https://asociart.com',
    title: 'Reengineering a 13-module legacy platform',
    blocks: [{
      heading: 'Starting point',
      body: 'Asociart brought Neoris in to replace a monolithic legacy system running claims, legal, medical and financial operations across ten-plus departments. There was no UX practice on the product and no shared visual system. We were brought in to build that foundation while the platform was reengineered.'
    }, {
      heading: 'What we did',
      body: 'Research with internal users and stakeholders, service blueprints for thirteen interconnected modules, and the Core Design System underneath all of them — 71+ components, token architecture for colour, type and spacing, documented in Storybook. Component states and interaction behaviour specified against WCAG contrast. Hands-on in Angular to keep the specs and the production UI aligned.'
    }, {
      heading: 'Outcome',
      body: 'One shared foundation across thirteen modules and multiple teams, serving 500+ internal users. Five years on the account, 130+ sprints, a 98% successful build rate across active modules.'
    }],
    heroImage: W + 'asociart-system.png',
    gallery: [{
      src: W + 'asociart-mobile.png',
      width: 153.785,
      height: 357.999,
      overlay: true
    }, {
      src: W + 'asociart-desktop.png',
      width: 621.349,
      height: 369.374,
      shadow: true
    }, {
      src: W + 'asociart-detail.png',
      width: 525,
      height: 321,
      radius: 8
    }]
  }
}, {
  id: 'orchardmile',
  align: 'end',
  w: 922,
  title: 'Turning creators into storefronts',
  meta: '[Ecommerce & Fashion] AT ORCHARDMILE',
  roles: ['Design System', 'PRODUCT DESIGN', 'Prototyping'],
  media: () => /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgb(235,235,235)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: abs(36, 1.1, 886, 651, {
      background: bg('orchardmile-bg.png')
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: abs(36, 24.074, 328.288, 617.851, {
      background: bg('orchardmile-phone.png')
    })
  })),
  heroImage: 'orchardmile-bg.png',
  client: 'Orchardmile'
}, {
  id: 'storefront',
  align: 'start',
  w: 1060,
  title: '250 brands, one storefront',
  meta: '[Ecommerce & Fashion] ',
  roles: ['Front-End', 'Growth Design'],
  media: () => /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundColor: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -134.539,
      top: -189.63,
      display: 'flex'
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 410.992,
      height: 777.549,
      opacity: 0.7,
      background: `url(${W}storefront-bg.jpg) 50% 0% / 139.760% 373.563% no-repeat`
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: abs(233, 153, 584.992, 347.76, {
      background: bg('asociart-desktop.png'),
      boxShadow: '0px 3.780px 3.780px 0px rgba(0,0,0,0.25)'
    })
  })),
  heroImage: 'storefront-bg.jpg'
}, {
  id: 'coupon',
  align: 'end',
  w: 654,
  title: 'A coupon that works one-handed, in a crowd',
  meta: '[Consumer Brands]',
  roles: ['UX/UI', 'Mobile'],
  media: null
}, {
  id: 'industrial',
  align: 'start',
  w: 1049,
  title: 'Making an industrial process legible',
  meta: '[Agrobusiness] [Enterprise]',
  roles: ['branding', 'Brand System', 'Web Development'],
  media: () => /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundColor: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: abs(0, -45.9, 1063.946, 729, {
      background: `linear-gradient(180deg, rgba(2,18,36,0) 65.43%, rgb(2,18,36) 100%), ${bg('industrial-ocean.jpg')}`
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: abs(211, 70.1, 626, 513, {
      background: `url(${W}industrial-screen.png) 104.932% 50% / 100.412% 100% no-repeat`
    })
  })),
  heroImage: 'industrial-ocean.jpg'
}, {
  id: 'safety',
  align: 'end',
  w: 831,
  h: 653,
  title: 'A safety net, not a productivity app',
  meta: '[Startups] ',
  roles: ['UX Research', 'Design System', 'AI-Assisted Build'],
  media: () => /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgb(229,229,229)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: abs(342.662, 26.436, 227.137, 108.161, {
      background: bg('safety-logo.png')
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: abs(27.541, 27.025, 246.616, 970.19, {
      background: `url(${W}safety-long.png) 49.756% 0% / 111.171% 99.965% no-repeat`
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: abs(292.846, 170.4, 421.826, 456.978, {
      opacity: 0.55,
      background: bg('safety-group.png')
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: abs(578, 130, 256.102, 487.988, {
      transform: 'matrix(0.987,0.159,-0.159,0.987,0,0)',
      transformOrigin: '0 0',
      background: bg('safety-phone.png')
    })
  })),
  heroImage: 'safety-group.png'
}, {
  id: 'aps',
  align: 'start',
  w: 1154.305,
  title: 'A site that answers "does it pay for itself?"',
  meta: '[Enterprise] ',
  roles: ['Web Design', 'Interactive Tool', 'Web Development'],
  media: () => {
    const {
      MockupScreen
    } = window.DesignSystem_e0175b;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0
      }
    }, /*#__PURE__*/React.createElement(MockupScreen, {
      style: {
        position: 'absolute',
        left: 40,
        top: 40,
        width: 950,
        height: 572.3
      }
    }));
  },
  heroImage: 'aps-site.png',
  client: 'American Padel Systems'
}, {
  id: 'units',
  align: 'end',
  w: 1081,
  title: 'Six business units, one product',
  meta: '[Startups] [Ecommerce]',
  roles: ['Product Design', 'Design System', 'Information Architecture'],
  media: null
}];
function WorkRole({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      height: 28,
      display: 'inline-flex',
      alignItems: 'center',
      padding: '7px 9px',
      boxSizing: 'border-box',
      backgroundColor: 'rgb(63,63,63)',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 13,
      lineHeight: 1,
      letterSpacing: '0.020em',
      color: '#fff',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }
  }, children);
}
function WorkItem({
  p,
  active,
  onOpen,
  refCb
}) {
  const end = p.align === 'end';
  return /*#__PURE__*/React.createElement("div", {
    ref: refCb,
    "data-work": p.id,
    onClick: () => active && onOpen(p),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: end ? 'flex-end' : 'flex-start',
      opacity: active ? 1 : 0.3,
      transition: 'opacity 500ms var(--ease-precise)',
      cursor: active ? 'pointer' : 'default'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: p.w,
      height: p.h ?? 654,
      overflow: 'hidden',
      flexShrink: 0,
      outline: p.media ? 'none' : '1px dashed rgba(246,246,246,0.25)',
      outlineOffset: -1
    }
  }, p.media ? p.media() : /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 20,
      bottom: 18,
      fontFamily: 'var(--font-technical)',
      fontSize: 11,
      letterSpacing: '0.04em',
      color: 'rgb(131,131,131)',
      textTransform: 'uppercase'
    }
  }, "Imagery not in Figma source")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: p.w > 900 ? p.w : undefined,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      alignItems: 'center'
    }
  }, p.roles.map(r => /*#__PURE__*/React.createElement(WorkRole, {
    key: r
  }, r))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 34,
      lineHeight: 1.2,
      color: '#fff',
      whiteSpace: 'nowrap'
    }
  }, p.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-technical)',
      fontSize: 14,
      lineHeight: '100%',
      letterSpacing: '0.020em',
      color: '#fff',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }
  }, p.meta)));
}
function SelectedWork({
  onOpen
}) {
  const {
    SignatureDot
  } = window.DesignSystem_e0175b;
  const refs = React.useRef({});
  const [active, setActive] = React.useState(PROJECTS[0].id);
  React.useEffect(() => {
    const onScroll = () => {
      const mid = window.innerHeight / 2;
      let best = null,
        bestD = Infinity;
      for (const p of PROJECTS) {
        const el = refs.current[p.id];
        if (!el) continue;
        const r = el.getBoundingClientRect();
        const d = Math.abs((r.top + r.bottom) / 2 - mid);
        if (d < bestD) {
          bestD = d;
          best = p.id;
        }
      }
      if (best) setActive(best);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    "data-screen-label": "03 Selected work",
    style: {
      backgroundColor: 'rgb(20,20,20)',
      display: 'flex',
      flexDirection: 'column',
      gap: 54,
      padding: '100px 48px 100px 48px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-technical)',
      fontSize: 16,
      lineHeight: '100%',
      letterSpacing: '0.020em',
      color: '#fff',
      textTransform: 'uppercase'
    }
  }, "selected work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      display: 'flex',
      alignItems: 'flex-end',
      gap: 8,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 45,
      lineHeight: '100%',
      letterSpacing: '-0.020em',
      color: '#fff',
      whiteSpace: 'nowrap'
    }
  }, "What we've built", /*#__PURE__*/React.createElement(SignatureDot, {
    size: 24,
    animate: true,
    style: {
      marginBottom: 2
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 83
    }
  }, PROJECTS.map(p => /*#__PURE__*/React.createElement(WorkItem, {
    key: p.id,
    p: p,
    active: active === p.id,
    onOpen: onOpen,
    refCb: el => refs.current[p.id] = el
  }))));
}
Object.assign(window, {
  SelectedWork,
  WORK_PROJECTS: PROJECTS,
  WORK_ASSET_BASE: W
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SelectedWork.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
// Services — pixel banner, service list, always-included card, add-ons. Figma: Website / Desktop › Services
function SectionHeading({
  eyebrow,
  children,
  color = 'rgb(20,20,20)',
  width,
  size = 45
}) {
  const {
    SignatureDot
  } = window.DesignSystem_e0175b;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      width
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-technical)',
      fontSize: 16,
      lineHeight: '100%',
      letterSpacing: '0.020em',
      color,
      textTransform: 'uppercase'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: size,
      lineHeight: '100%',
      letterSpacing: '-0.020em',
      color
    }
  }, children, /*#__PURE__*/React.createElement(SignatureDot, {
    size: 24,
    style: {
      marginLeft: 8,
      verticalAlign: 'baseline'
    }
  })));
}
const SERVICES = [['Branding', 'Identity, and the system to keep it consistent.'], ['Websites', 'A landing, a full site, or an online store.'], ['Digital Product', "An app or a platform that doesn't exist yet."], ['AI VISIBILITY · GEO / AEO', 'So people find you when they ask an AI, not just Google.']];
const INCLUDED = [['Strategy', 'Every project starts with the business decision, not the screen.'], ['Design & build, end to end', 'The same hands design it and ship it. No handoff, nothing lost in translation.'], ['You own it', 'Files and accounts handed over in your name.']];
const ADDONS = [['Design System', 'Exported tokens, a documented component library, and a usage guide — so your team, or an AI agent, can keep building on it without breaking the system.'], ['Maintenance', 'Optional, after handover. Changes, updates, backups and priority response.']];
function ServiceRow({
  n,
  name,
  desc
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      backgroundColor: 'rgba(120,120,120,0.2)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 29,
      display: 'flex',
      padding: '0 2px 0 55px',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 25,
      lineHeight: 1,
      letterSpacing: '0.070em',
      color: 'rgb(20,20,20)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-editorial)',
      fontStyle: 'italic',
      fontSize: 14,
      lineHeight: '17.400px',
      color: 'rgb(20,20,20)',
      whiteSpace: 'nowrap'
    }
  }, desc)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 15,
      lineHeight: 1,
      letterSpacing: '0.020em',
      color: hover ? 'var(--accent-dark)' : 'rgb(20,20,20)',
      transition: 'color 160ms'
    }
  }, "[", n, "]")));
}
function Services() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "04 Pixel banner",
    style: {
      width: 1436,
      height: 255,
      background: 'url(../../assets/img/pixel-banner.png) 49.999% 17.594% / 100.182% 159.296% no-repeat, rgb(245,243,243)'
    }
  }), /*#__PURE__*/React.createElement("section", {
    id: "services",
    "data-screen-label": "05 Services",
    style: {
      backgroundColor: 'rgb(245,243,243)',
      padding: '3px 48px 100px 48px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 45
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "services",
    width: 822
  }, "Strategy, Design & Build, end to end"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 285,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 44
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: 285,
      height: 30,
      transform: 'matrix(0,-1,1,0,0,285)',
      transformOrigin: '0 0',
      fontFamily: 'var(--font-editorial)',
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: 37,
      textAlign: 'center',
      whiteSpace: 'nowrap',
      lineHeight: '30px',
      letterSpacing: '1.320px',
      color: 'rgb(214,169,12)'
    }
  }, "Always included"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 354,
      alignSelf: 'stretch',
      borderRadius: 2.25,
      backgroundColor: 'rgb(63,63,63)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: '23px 24px',
      justifyContent: 'center',
      boxSizing: 'border-box',
      flexShrink: 0
    }
  }, INCLUDED.map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      width: 306
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 22,
      lineHeight: 1,
      letterSpacing: '0.070em',
      color: '#fff'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-editorial)',
      fontStyle: 'italic',
      fontSize: 14,
      lineHeight: '17.400px',
      color: '#fff'
    }
  }, d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 285,
      display: 'flex',
      flexDirection: 'column',
      gap: 26,
      justifyContent: 'center',
      flexGrow: 1
    }
  }, SERVICES.map(([name, desc], i) => /*#__PURE__*/React.createElement(ServiceRow, {
    key: name,
    n: i + 1,
    name: name,
    desc: desc
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      backgroundColor: 'rgba(120,120,120,0.2)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 54,
      justifyContent: 'center',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 332,
      flexShrink: 0,
      fontFamily: 'var(--font-technical)',
      fontSize: 26,
      textAlign: 'right',
      lineHeight: '38.400px',
      letterSpacing: '-0.480px',
      color: 'rgb(20,20,20)'
    }
  }, "Added to any project \u2014 or contracted on their own."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      flexGrow: 1,
      alignSelf: 'stretch'
    }
  }, ADDONS.map(([t, d]) => /*#__PURE__*/React.createElement("article", {
    key: t,
    style: {
      border: '1px dashed rgb(155,155,155)',
      padding: '22px 20px',
      flexGrow: 1,
      flexBasis: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 5.83
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 24,
      lineHeight: '25.920px',
      letterSpacing: '-0.480px',
      color: 'rgb(20,20,20)'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-editorial)',
      fontStyle: 'italic',
      fontSize: 12,
      lineHeight: '17.400px',
      color: 'rgb(20,20,20)'
    }
  }, d))))))));
}
Object.assign(window, {
  Services,
  SectionHeading
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logotypo = __ds_scope.Logotypo;

__ds_ns.SignatureDot = __ds_scope.SignatureDot;

__ds_ns.MockupScreen = __ds_scope.MockupScreen;

__ds_ns.ProjectDetail = __ds_scope.ProjectDetail;

__ds_ns.TagComponent = __ds_scope.TagComponent;

})();
