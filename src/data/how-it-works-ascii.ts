// Character grid of brand/assets/img/how-it-works.png (copy icon left out), transcribed cell by cell (template-matched
// against JetBrains Mono) so the panel can be drawn as live glyphs. Geometry is in the asset's own
// pixels (1422 × 712); the canvas scales it exactly like the <img> with object-fit: cover.
export const ASCII_ROWS = [
  'P.CV\\=: \\\\/ :: .                                     .   .',
  '#ZD\\*:\\=//   :   ..                             .    ..',
  'EC0+=\\A*\\.    : . .                                  .',
  'X*=*CEB*/.A                                     .        \\',
  'EXEFDE\\\\\\.. *                                  . .',
  'X#00::0/\\//  \\                                .   .    .',
  'XZ0#EF**\\./ +.                                 .        :',
  'YC#ZXF=/\\*+\\/                   .                      .',
  'X00ECYA\\//.= /  .              .            ...        :.',
  'Z0Y=EBDE\\\\ :\\   ..        :     .     .   . : .:  .:/. .:.',
  '1#YACC*E/0\\:\\::\\ .       /  :     . .       . . :.: ::.\\\\.',
  'X#X#+DE\\X+ =B\\. /\\ :.  \\\\ \\         .       :: \\...//\\::./',
  'X#*XY1A=BC*.==/:\\\\\\/::///. .  .         .. ::: :\\ ::\\:\\:/:',
  '1D#F1=BYCAEFAA\\///\\/::::/\\.::..      :  ../.:/: /::://\\ /\\',
  'EXDEE*Z+BCFB/B\\=/+\\/\\:\\\\:/.:::. . :.  :. ..:\\.\\./\\:/:.:\\.:',
  '1CF1EF1D=BCF*/=D+/*=/B++/\\\\.:. /\\/ .\\.  .::..:.:: :./\\\\::.',
  '1FDEAF+BCAAAAEBAA+A=+/+=*A+=/=/\\///// ../ .: .//..:\\./\\:\\/',
];

export const ASCII_GEOMETRY = {
  width: 1422,
  height: 712,
  x0: 37.75, // left edge of column 0
  pitch: 23.2, // column advance (JetBrains Mono 0.6 em)
  baseline0: 73.5, // baseline of row 0
  lineHeight: 38.69,
  fontSize: 38.67,
} as const;
