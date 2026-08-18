// ── LuaOS 98 · aviso de beta ──────────────────────────────────────────────
// Bloco de notas (LEIA-ME.txt) colado no desktop: NÃO é modal, sempre visível,
// levemente torto. Clicável → dispara a piada da Luazinha (ligado na Etapa da
// mascote). O ✕ próprio só some com o bloco, sem bloquear nada.
import { titleGradient, theme, fonts } from '../theme.js';
import { useI18n } from '../i18n/I18n.jsx';

export default function BetaNote({ onClick, onDismiss }) {
  const { t } = useI18n();
  return (
    <div
      onClick={onClick}
      style={{
        position: 'absolute', top: 16, right: 16, width: 210,
        transform: 'rotate(2.5deg)', cursor: 'pointer', zIndex: 5,
        background: '#fffef0', border: '2px solid #000',
        boxShadow: '3px 3px 0 rgba(0,0,0,0.35)',
      }}
    >
      <div style={{
        background: titleGradient, color: '#fff', fontSize: 10, padding: '3px 7px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: fonts.pixel,
      }}>
        <span>{t('betaFile')}</span>
        <span
          onClick={(e) => { e.stopPropagation(); onDismiss(); }}
          title="Fechar"
          style={{
            background: theme.chromeBtn, color: theme.ink, width: 13, height: 12,
            textAlign: 'center', lineHeight: '11px', border: '1px solid #000',
            fontSize: 9, fontFamily: fonts.body, cursor: 'pointer',
          }}
        >✕</span>
      </div>
      <div style={{
        padding: '11px 12px', fontFamily: fonts.body, fontSize: 12, lineHeight: 1.6,
        color: theme.ink, whiteSpace: 'pre-line',
        background: 'repeating-linear-gradient(#fffef0,#fffef0 20px,#e8e2c0 20px,#e8e2c0 21px)',
      }}>
        <b style={{ color: theme.night }}>{t('betaTitle')}</b>
        {'\n' + t('betaBody')}
      </div>
    </div>
  );
}
