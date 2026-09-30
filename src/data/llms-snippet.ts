// The /ai-visibility/ snippet card (Figma 2230:1376) is an excerpt of public/llms.txt, built from the file itself so it never drifts:
// the title, the blockquote, the "## Services" heading and the first list under it. Fails the build if llms.txt loses that shape.
export function llmsSnippet(llms: string): string {
  const blocks = llms.replace(/\r\n/g, '\n').split(/\n{2,}/).map((b) => b.trim());
  const title = blocks.find((b) => b.startsWith('# '));
  const quote = blocks.find((b) => b.startsWith('> '));
  const heading = blocks.findIndex((b) => b === '## Services');
  const list = heading < 0 ? undefined : blocks.slice(heading + 1).find((b) => b.startsWith('- '));
  if (!title || !quote || !list) throw new Error('llms.txt no longer has a title, a blockquote and a "## Services" list: update src/data/llms-snippet.ts');
  return [title, '', quote, '', '## Services', list].join('\n');
}
