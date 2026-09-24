The immersive, full-screen case study that opens from a Selected Work item — one reusable pattern, each project supplies its own content and imagery.

```jsx
<ProjectDetail
  overlay open={open} onClose={() => setOpen(false)}
  client="Asociart" linkLabel="asociart.com" linkHref="https://asociart.com"
  title="Reengineering a 13-module legacy platform"
  meta="[Insurance & Finance] AT NEORIS"
  roles={['Design System','PRODUCT DESIGN','Front-End']}
  blocks={[{heading:'Starting point', body:'…'},{heading:'What we did', body:'…'},{heading:'Outcome', body:'…'}]}
  heroImage="assets/work/asociart-system.png"
  gallery={[
    {src:'assets/work/asociart-mobile.png', width:153.785, height:357.999, overlay:true},
    {src:'assets/work/asociart-desktop.png', width:621.349, height:369.374, shadow:true},
    {src:'assets/work/asociart-detail.png', width:525, height:321, radius:8},
  ]}
/>
```

- Surface `--surface-soft` (rgb 245,243,243); ink text; 0.5px rgb(141,141,141) divider under the header.
- Header: client name (Outfit 48) left; outlined live-site pill (radius 55, 1px inset ink) + close ✕ right. Header is sticky.
- Title Outfit **200** 62/1.2 → mono meta → role chips (rgb 63,63,63, Outfit 500 13 uppercase).
- Body: 561px narrative column (28px/500 headings, 18px/400 copy, 29px gap) beside a 725×688 key visual; then a 24px-gap image strip.
- Motion (open/close, image reveal) is deliberately unspecified — attach it via `data-state` and your router; don't bake it into this component yet.
