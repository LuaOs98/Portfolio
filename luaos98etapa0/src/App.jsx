// ── LuaOS 98 · app raiz ───────────────────────────────────────────────────
import { useState } from 'react';
import { I18nProvider } from './i18n/I18n.jsx';
import { useWindows } from './state/useWindows.js';
import Desktop from './components/Desktop.jsx';
import Taskbar, { TASKBAR_HEIGHT } from './components/Taskbar.jsx';

function Shell() {
  const win = useWindows();
  const [startOpen, setStartOpen] = useState(false);
  const [betaClosed, setBetaClosed] = useState(false);

  const closeStart = () => setStartOpen(false);

  return (
    <div
      onClick={closeStart}
      style={{ position: 'fixed', inset: 0, overflow: 'hidden' }}
    >
      {/* área do desktop (acima da taskbar) */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: TASKBAR_HEIGHT }}>
        <Desktop
          win={win}
          betaClosed={betaClosed}
          // mascote entra na Etapa 1: clicar no beta vai disparar a piada da Luazinha.
          onBetaClick={() => { /* Etapa 1 (mascote): say(betaJoke) */ }}
          onBetaDismiss={() => setBetaClosed(true)}
        />
      </div>

      <Taskbar
        open={win.state.open}
        minimized={win.state.minimized}
        topWindow={win.state.topWindow}
        startOpen={startOpen}
        onToggleStart={() => setStartOpen((v) => !v)}
        onOpen={(id) => { win.actions.openWindow(id); closeStart(); }}
        onShutdown={() => { closeStart(); /* Etapa 1: fala de despedida da Luazinha */ }}
        onTaskClick={(id) => {
          // clicar no botão: se minimizada, restaura; se ativa, minimiza; senão foca.
          if (win.state.minimized[id]) win.actions.focusWindow(id);
          else if (id === win.state.topWindow) win.actions.minimizeWindow(id);
          else win.actions.focusWindow(id);
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <Shell />
    </I18nProvider>
  );
}
