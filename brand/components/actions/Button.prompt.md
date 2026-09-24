The MER pill call-to-action — use for every primary action ("book a call", "start a project", "lets talk"); one primary per viewport region.

```jsx
<Button label="book a call" />
<Button variant="secondary" label="discover more" />
<Button variant="ghost" label="see all work" />
<Button label="book a call" state="disabled" />
<Button label="start a project" href="#contact" />
```

- `variant` / `style2`: `primary` (accent yellow on ink text), `secondary` (ink on white text), `ghost` (text only).
- `state="disabled"` or `disabled`: neutral-300 fill, neutral-500 text (ghost stays transparent).
- Geometry: radius 999, padding 14/20, Outfit 500 16/20 → 48px tall. Website instances stretch to 52 / 56px via `style={{height:56}}`.
- Hover/press are code-side additions (not drawn in Figma): hover lifts primary to `--accent-bright`, press scales 0.97.
- Labels are lowercase in MER copy; don't Title-Case them.
