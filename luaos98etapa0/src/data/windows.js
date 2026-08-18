// ── LuaOS 98 · registro de janelas ────────────────────────────────────────
// Metadados e layout de cada janela/ícone. O CONTEÚDO dos cases (textos,
// cards, abas) entra nas etapas seguintes, sempre como dado — aqui ficam só
// identidade, ícone e geometria inicial.
//
// Campos:
//  id        chave única
//  icon      emoji de fallback (usado até o asset de ícone existir)
//  img       caminho do ícone pixel-art (Etapa de assets; opcional)
//  label     nome sob o ícone no desktop / botão da taskbar
//  title     texto da barra de título da janela
//  kind      tipo de corpo a renderizar (cards | case | pco | intel | treino |
//            dops | safer | sobre | keywords | chat | list | text)
//  size      'content' = janela grande de leitura (72%×80%, faixa de ícones à
//            esquerda); ausente = janela flutuante com top/left/width próprios
//  hidden    true = não aparece como ícone no desktop (abre por link/sub-case)
//  top/left/width/maxH  geometria da janela flutuante (px)

export const windowDefs = [
  { id: 'projetos', icon: '📁', img: 'assets/icon-projetos.png', label: 'Meus_Projetos',
    title: '📁 C:\\PORTFOLIO\\CASES', kind: 'cards', size: 'index',
    top: 30, left: 120, width: 700, maxH: 560 },

  { id: 'prospeccao', hidden: true, icon: '📁', label: 'Prospecção_PCO',
    title: '📁 Prospecção_PCO — Design Sistêmico', kind: 'pco', size: 'content',
    top: 20, left: 160, width: 700, maxH: 600 },

  { id: 'expresso', hidden: true, icon: '🏦', label: 'Bradesco_Expresso',
    title: '🏦 Bradesco_Expresso — Visão Geral', kind: 'case', size: 'content',
    top: 30, left: 90, width: 640, maxH: 600 },

  { id: 'intel', icon: '🧠', img: 'assets/icon-intel.png', label: 'Sist_Inteligência',
    title: '🧠 Sistema_de_Inteligencia — Case Study', kind: 'intel', size: 'content',
    top: 24, left: 150, width: 700, maxH: 600 },

  { id: 'treinamentos', hidden: true, icon: '📚', label: 'Treinamentos',
    title: '📚 Treinamentos — Case Study', kind: 'treino', size: 'content',
    top: 24, left: 150, width: 700, maxH: 600 },

  { id: 'safer', hidden: true, icon: '🔐', label: 'DW_Safer',
    title: '🔐 DW_Safer', kind: 'safer', size: 'content',
    top: 24, left: 150, width: 720, maxH: 620 },

  { id: 'designops', hidden: true, icon: '📁', label: 'Design_Ops',
    title: '📁 Design_Ops — Case Study', kind: 'dops', size: 'content',
    top: 24, left: 150, width: 700, maxH: 600 },

  { id: 'sobre', icon: '📝', img: 'assets/icon-sobre-mim.png', label: 'Sobre_mim.txt',
    title: '👤 Sobre_Mim — Ficha de Personagem', kind: 'sobre', size: 'content',
    top: 90, left: 220, width: 720, maxH: 620 },

  { id: 'palavras', icon: '🗂️', img: 'assets/icon-keywords.png', label: 'Palavras-chave',
    title: '🗂️ Palavras-chave', kind: 'keywords', size: 'content',
    top: 60, left: 300, width: 720, maxH: 620 },

  { id: 'manifesto', hidden: true, icon: '📑', label: 'Manifesto.ppt',
    title: '📑 Manifesto_anti-tabelas.ppt', kind: 'text',
    top: 120, left: 200, width: 400, maxH: 420 },

  { id: 'contato', icon: '📧', img: 'assets/icon-contato.png', label: 'Bate-papo Uol',
    title: '💬 Bate-papo (L)Uol', kind: 'chat',
    top: 80, left: 260, width: 440, maxH: 470 },

  { id: 'lixeira', icon: '🗑️', img: 'assets/icon-lixeira.png', label: 'Lixeira',
    title: '🗑️ Lixeira', kind: 'list', size: 'index',
    top: 100, left: 180, width: 440, maxH: 420 },
];

// Ícones que aparecem no desktop (na ordem do registro).
export const desktopIcons = windowDefs.filter((w) => !w.hidden);

export function findWindow(id) {
  return windowDefs.find((w) => w.id === id) || null;
}
