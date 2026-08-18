// ── LuaOS 98 · ícone do desktop ───────────────────────────────────────────
import { fonts, theme } from '../theme.js';

export default function DesktopIcon({ def, selected, onSelect, onOpen }) {
  return (
    <div
      onClick={(e) => { e.stopPropagation(); onSelect(def.id); }}
      onDoubleClick={(e) => { e.stopPropagation(); onOpen(def.id); }}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '6px 8px', width: 80, borderRadius: 3, cursor: 'pointer',
        background: selected ? 'rgba(61,43,86,0.45)' : 'transparent',
      }}
    >
      {/* emoji de fallback; o ícone pixel-art (def.img) entra na etapa de assets */}
      <span style={{ fontSize: 40, lineHeight: 1 }}>{def.icon}</span>
      <span style={{
        fontFamily: fonts.pixel, fontSize: 8, lineHeight: 1.5, color: '#fff',
        textShadow: '1px 1px 2px rgba(0,0,0,0.9)', marginTop: 6, textAlign: 'center',
        background: selected ? theme.night : 'transparent', padding: '1px 3px',
        wordBreak: 'break-word',
      }}>{def.label}</span>
    </div>
  );
}
