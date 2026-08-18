// ── LuaOS 98 · corpo da janela (placeholder da Etapa 0) ───────────────────
// Na Etapa 0 o foco é o SHELL (abrir/fechar/focar/mover/min/max). O conteúdo
// real de cada case entra nas etapas seguintes, sempre como dado. Cada tipo
// mostra aqui um marcador do que vai preenchê-lo, pra validação visual.
import { fonts, theme } from '../theme.js';

const roadmap = {
  cards: 'Grade 3+3 de cases · Etapa dos cases',
  case: 'Case guarda-chuva (Expresso) · Etapa dos cases',
  pco: 'Case PCO — 5 abas + marcos-âncora · Etapa dos cases',
  intel: 'Case Sistema de Inteligência · Etapa dos cases',
  treino: 'Case Treinamentos · Etapa dos cases',
  dops: 'Case Design Ops · Etapa dos cases',
  safer: 'Case DW Safer — abas · Etapa dos cases',
  sobre: 'Sobre Mim — Ficha / Horas Pagas / Não Pagas (gatas) · Etapa lúdica',
  keywords: 'Palavras-chave — roteador de competências · Etapa dos cases',
  chat: 'Bate-papo UOL — "digitando…" + contatos · Etapa do chat',
  list: 'Lixeira — segredos · Etapa dos cases',
  text: 'Documento de texto · Etapa dos cases',
};

export default function WindowBody({ def }) {
  return (
    <div>
      <div style={{
        fontFamily: fonts.pixel, fontSize: 12, color: theme.night, lineHeight: 1.5,
        marginBottom: 10,
      }}>{def.label}</div>
      <div style={{
        border: '1.5px dashed #9aa0a6', background: '#f5f6f7', padding: '14px 16px',
        fontFamily: fonts.body, fontSize: 13, color: theme.muted,
      }}>
        <div style={{ marginBottom: 6 }}>🚧 Estrutura da janela pronta (shell).</div>
        <div>Próximo conteúdo aqui: <b style={{ color: theme.night }}>{roadmap[def.kind] || def.kind}</b></div>
      </div>
    </div>
  );
}
