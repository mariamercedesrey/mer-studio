A device-screen bitmap (APS website capture over a MacBook mockup layer) used inside the Selected Work laptop composition — use as the screen texture in project mockups.

```jsx
<MockupScreen style={{ width: 404.562, height: 243.72, opacity: 0.6 }} />
```

- Native size 1728×1041; scale via `style` width/height (the inner layers are absolutely positioned at native size, so wrap in a scaled container if you need a true resize).
- Paints via `.fig-asset-*` classes from `components/work/fig-assets.css` (imported by styles.css).
