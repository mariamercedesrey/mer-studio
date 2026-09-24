The signature yellow dot — place it as punctuation after a section headline ("What we've built●") or as the animated brand character.

```jsx
<h2 style={{position:'relative'}}>Four steps, no surprises<SignatureDot style={{position:'absolute',left:493,top:71.75}} /></h2>
<SignatureDot size={45.954} animate />
<SignatureDot size={6.6} tone="dark" />
```

- One dot per section, max. It sits on the baseline of the last word, never as a bullet or decoration grid.
- `animate` applies `.mer-dot-anim` (2s loop: bounce, translation, subtle rotation, squash on landing). Under `prefers-reduced-motion` it stays still.
- Motion is a placeholder for the documented loop — refine the keyframes in `tokens/motion.css` when a motion reference arrives; the component API stays the same.
