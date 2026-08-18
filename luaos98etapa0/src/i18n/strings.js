// ── LuaOS 98 · store de strings da UI ─────────────────────────────────────
// REGRA DO PROJETO: texto é DADO, separado do layout. PT-BR é a fonte da
// verdade. O inglês entra depois como um segundo conjunto — basta preencher
// `ui.en` e virar `langReady.en = true`. Nenhuma tela precisa ser refeita.
//
// Convenção: qualquer chave nula/vazia em `en` cai automaticamente no PT
// (ver `translator()`), então dá pra ligar o EN de forma incremental.
//
// O conteúdo longo dos cases NÃO mora aqui — ele vive junto dos dados de cada
// janela (src/data/*), e será estruturado como { pt, en } quando o EN chegar.

export const langReady = { pt: true, en: false };

export const ui = {
  pt: {
    start: 'Iniciar',
    shutdown: 'Desligar...',
    langHint: 'EN em breve',
    // menu Iniciar
    menuProjetos: 'Meus Projetos',
    menuIntel: 'Sist. Inteligência',
    menuSobre: 'Sobre mim',
    menuPalavras: 'Palavras-chave',
    menuContato: 'Contato',
    // beta notepad (LEIA-ME.txt colado no desktop)
    betaFile: 'LEIA-ME.txt',
    betaTitle: 'LuaOS 98 — v0.9 beta',
    betaBody: 'conteúdo: 100%\nverniz em aplicação.\n(sim, os gaps já foram mapeados) 🌙',
  },
  en: {
    // A LIGAR DEPOIS. Chaves nulas caem no PT automaticamente.
    start: null,
    shutdown: null,
    langHint: 'PT em breve',
    menuProjetos: null,
    menuIntel: null,
    menuSobre: null,
    menuPalavras: null,
    menuContato: null,
    betaFile: null,
    betaTitle: null,
    betaBody: null,
  },
};

// Cria uma função t(key) para um idioma. Fallback: valor nulo/vazio → PT.
export function translator(lang) {
  const cur = ui[lang] || {};
  return (key) => {
    const val = cur[key];
    return val == null || val === '' ? ui.pt[key] : val;
  };
}
