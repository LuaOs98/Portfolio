// ── LuaOS 98 · tokens de tema ────────────────────────────────────────────
// Paleta portada do UI_KIT do Design Component (fonte da verdade visual).
// Mantido como dado para o resto do app referenciar um único lugar.
export const theme = {
  base: '#2b2438',        // Base Escura
  baseDeep: '#161018',    // fundo da página (fora do desktop)
  sand: '#e0a373',        // Areia Rosada
  sunset: '#b8577a',      // Pôr-do-sol (accent)
  night: '#3d2b56',       // Roxo Noite
  cactus: '#3f6b70',      // Verde-Cacto
  gold: '#d9a441',        // Dourado Lua
  desktop: '#008080',     // teal clássico (fallback do wallpaper)
  chrome: '#ece7e0',      // corpo de janela
  chromeBtn: '#d8d3ce',   // botões de chrome
  line: '#8f8a86',
  ink: '#2b2438',
  muted: '#6b6070',
};

// Gradiente da barra de título (roxo noite → pôr-do-sol).
export const titleGradient = `linear-gradient(90deg, ${theme.night}, ${theme.sunset})`;

export const fonts = {
  pixel: "'Press Start 2P', monospace",   // títulos, chrome, badges
  body: "'Share Tech Mono', monospace",   // leitura longa (cases)
  screen: "'VT323', monospace",           // textura de tela retrô
};
