// ── LuaOS 98 · desktop ────────────────────────────────────────────────────
// Compõe wallpaper + estrelas + ícones + bloco de beta + janelas abertas.
// A barra de tarefas fica embaixo (App). Aqui é a área acima dela.
import { useRef } from 'react';
import { theme } from '../theme.js';
import { desktopIcons, findWindow } from '../data/windows.js';
import DesktopIcon from './DesktopIcon.jsx';
import BetaNote from './BetaNote.jsx';
import Window from './Window.jsx';
import WindowBody from './WindowBody.jsx';

// estrelas fixas (piscando) no papel de parede
function useStars(n = 12) {
  return Array.from({ length: n }, (_, i) => ({
    top: 4 + ((i * 37) % 30),
    left: 4 + ((i * 53) % 92),
    delay: (i % 5) * 0.5,
  }));
}

export default function Desktop({ win, betaClosed, onBetaClick, onBetaDismiss }) {
  const deskRef = useRef(null);
  const stars = useStars(14);
  const { state, actions } = win;

  return (
    <div
      ref={deskRef}
      onClick={() => actions.clearSelection()}
      style={{
        position: 'absolute', inset: 0, overflow: 'hidden',
        background: `radial-gradient(120% 90% at 50% 10%, #12525a 0%, ${theme.desktop} 45%, #024b4b 100%)`,
      }}
    >
      {/* estrelas */}
      {stars.map((s, i) => (
        <div key={i} style={{
          position: 'absolute', width: 3, height: 3, background: '#fff', borderRadius: '50%',
          top: `${s.top}%`, left: `${s.left}%`, animation: 'twinkle 3s ease-in-out infinite',
          animationDelay: `${s.delay}s`, pointerEvents: 'none',
        }} />
      ))}

      {/* ícones */}
      <div style={{
        position: 'absolute', top: 14, left: 14, display: 'flex', flexDirection: 'column',
        gap: 6, zIndex: 1,
      }}>
        {desktopIcons.map((def) => (
          <DesktopIcon key={def.id} def={def}
            selected={state.selected === def.id}
            onSelect={actions.selectIcon}
            onOpen={actions.openWindow}
          />
        ))}
      </div>

      {/* aviso de beta (não-modal) */}
      {!betaClosed && <BetaNote onClick={onBetaClick} onDismiss={onBetaDismiss} />}

      {/* janelas abertas */}
      {state.open.map((id) => {
        const def = findWindow(id);
        if (!def) return null;
        const isMax = !!state.maximized[id];
        const canMax = def.size === 'content' || def.kind === 'cards';
        return (
          <Window
            key={id}
            def={def}
            size={def.size}
            isMax={isMax}
            pos={state.pos[id]}
            z={state.z[id] || 10}
            active={id === state.topWindow}
            hidden={!!state.minimized[id]}
            canMax={canMax}
            deskRef={deskRef}
            onClose={() => actions.closeWindow(id)}
            onMin={() => actions.minimizeWindow(id)}
            onMax={() => actions.toggleMax(id)}
            onFocus={() => actions.focusWindow(id)}
            onMove={(top, left) => actions.moveWindow(id, top, left)}
          >
            <WindowBody def={def} />
          </Window>
        );
      })}
    </div>
  );
}
