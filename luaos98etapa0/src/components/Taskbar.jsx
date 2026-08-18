// ── LuaOS 98 · barra de tarefas ───────────────────────────────────────────
// Botão Iniciar (+ menu), botões das janelas abertas, e o systray à direita.
import { theme, fonts } from '../theme.js';
import { useI18n } from '../i18n/I18n.jsx';
import { findWindow } from '../data/windows.js';
import StartMenu from './StartMenu.jsx';
import Systray from './Systray.jsx';

export const TASKBAR_HEIGHT = 40;

export default function Taskbar({
  open, minimized, topWindow, startOpen,
  onToggleStart, onOpen, onShutdown, onTaskClick,
}) {
  const { t } = useI18n();

  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0, height: TASKBAR_HEIGHT,
      background: theme.chrome, borderTop: '2px outset #fff', display: 'flex',
      alignItems: 'center', gap: 6, padding: '0 6px', zIndex: 9000,
    }}>
      {/* Iniciar */}
      <div style={{ position: 'relative' }}>
        <button
          onClick={(e) => { e.stopPropagation(); onToggleStart(); }}
          style={{
            fontFamily: fonts.pixel, fontSize: 10, padding: '7px 12px',
            background: startOpen ? theme.chromeBtn : '#d8d3ce',
            border: startOpen ? '2px inset #8f8a86' : '2px outset #fff',
            color: theme.ink, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
          }}
        >
          <span style={{ fontSize: 14 }}>🌙</span> {t('start')}
        </button>
        {startOpen && <StartMenu onOpen={onOpen} onShutdown={onShutdown} />}
      </div>

      {/* botões das janelas abertas */}
      <div style={{ flex: 1, display: 'flex', gap: 4, overflow: 'hidden' }}>
        {open.map((id) => {
          const def = findWindow(id);
          if (!def) return null;
          const active = id === topWindow && !minimized[id];
          return (
            <button key={id}
              onClick={(e) => { e.stopPropagation(); onTaskClick(id); }}
              title={def.label}
              style={{
                fontFamily: fonts.body, fontSize: 12, padding: '5px 10px', maxWidth: 160,
                background: active ? '#e6e2dc' : theme.chromeBtn,
                border: active ? '2px inset #8f8a86' : '2px outset #fff',
                color: theme.ink, cursor: 'pointer', whiteSpace: 'nowrap',
                overflow: 'hidden', textOverflow: 'ellipsis',
                display: 'flex', alignItems: 'center', gap: 6,
              }}
            >
              <span>{def.icon}</span>
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{def.label}</span>
            </button>
          );
        })}
      </div>

      <Systray />
    </div>
  );
}
