// ── LuaOS 98 · menu Iniciar ───────────────────────────────────────────────
import { titleGradient, theme, fonts } from '../theme.js';
import { useI18n } from '../i18n/I18n.jsx';

export default function StartMenu({ onOpen, onShutdown }) {
  const { t } = useI18n();
  const items = [
    { icon: '📁', label: t('menuProjetos'), action: () => onOpen('projetos') },
    { icon: '🧠', label: t('menuIntel'), action: () => onOpen('intel') },
    { icon: '📝', label: t('menuSobre'), action: () => onOpen('sobre') },
    { icon: '🗂️', label: t('menuPalavras'), action: () => onOpen('palavras') },
    { icon: '📧', label: t('menuContato'), action: () => onOpen('contato') },
    { icon: '⭐', label: t('shutdown'), action: onShutdown, divider: true },
  ];

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        position: 'absolute', bottom: '100%', left: 0, marginBottom: 2, width: 220,
        background: theme.chrome, border: '2px outset #fff', boxShadow: '3px 3px 10px rgba(0,0,0,0.5)',
        zIndex: 10000, display: 'flex',
      }}
    >
      {/* faixa lateral vertical (assinatura Win98) */}
      <div style={{
        width: 26, background: titleGradient, display: 'flex', alignItems: 'flex-end',
        justifyContent: 'center', padding: '8px 0',
      }}>
        <span style={{
          writingMode: 'vertical-rl', transform: 'rotate(180deg)', color: '#fff',
          fontFamily: fonts.pixel, fontSize: 10, letterSpacing: 2,
        }}>LuaOS 98</span>
      </div>

      <div style={{ flex: 1, padding: '4px 0' }}>
        {items.map((it) => (
          <div key={it.label}
            onClick={it.action}
            style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '7px 12px',
              fontFamily: fonts.body, fontSize: 14, color: theme.ink, cursor: 'pointer',
              borderTop: it.divider ? '1px solid var(--line, #8f8a86)' : 'none',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = theme.night; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = theme.ink; }}
          >
            <span style={{ fontSize: 18 }}>{it.icon}</span>
            <span>{it.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
