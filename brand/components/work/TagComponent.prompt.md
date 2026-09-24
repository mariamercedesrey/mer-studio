Bracketed uppercase tag — use for discipline labels inside a project label strip ("PROJECT [DESIGN] [DEVELOPMENT] / [CUSTOM PROJECT]").

```jsx
<TagComponent label="Design" />
<TagComponent label="Development" size={12.528} color="rgba(20,20,20,0.6)" />
```

- Aspekta 700, uppercase, +0.02em, line-height 1; brackets are 3px-wide 1.5px strokes in `currentColor`.
- Aspekta isn't on Google Fonts — falls back to Outfit until the real file is supplied.
- For free-standing bracket copy in mono (e.g. `[Fashion]`, `[Insurance & Finance]`) just type the brackets in JetBrains Mono — that's a text style, not this component.
