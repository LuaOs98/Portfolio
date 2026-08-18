// ── LuaOS 98 · systray ────────────────────────────────────────────────────
// Relógio + seletor de idioma (onde ficava o layout de teclado no Windows).
// No beta o seletor existe mas o EN está inativo: clicar mostra a dica.
import { useEffect, useState } from 'react';
import { fonts, theme } from '../theme.js';
import { useI18n } from '../i18n/I18n.jsx';

function useClock(lang) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000 * 20);
    return () => clearInterval(id);
  }, []);
  return now.toLocaleTimeString(lang === 'en' ? 'en-US' : 'pt-BR', { hour: '2-digit', minute: '2-digit' });
}

export default function Systray() {
  const { lang, toggleLang, langReady, langHint } = useI18n();
  const clock = useClock(lang);
  const label = lang === 'pt' ? 'PT-BR' : 'EN';

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, position: 'relative' }}>
      <div
        onClick={(e) => { e.stopPropagation(); toggleLang(); }}
        title={langReady.en ? 'PT / EN' : (lang === 'pt' ? 'EN em breve' : 'PT em breve')}
        style={{
          fontFamily: fonts.pixel, fontSize: 8, color: theme.ink,
          background: theme.chromeBtn, border: '2px inset #fff', padding: '3px 6px',
          cursor: 'pointer', opacity: langReady.en ? 1 : 0.75,
        }}
      >{label}</div>

      <div style={{
        fontFamily: fonts.pixel, fontSize: 8, color: theme.ink,
        background: theme.chromeBtn, border: '2px inset #fff', padding: '3px 6px',
      }}>{clock}</div>

      {langHint && (
        <div style={{
          position: 'absolute', bottom: 'calc(100% + 6px)', right: 0, whiteSpace: 'nowrap',
          background: '#fffef0', border: '1px solid #000', boxShadow: '2px 2px 0 rgba(0,0,0,0.35)',
          fontFamily: fonts.body, fontSize: 11, color: theme.ink, padding: '4px 8px',
        }}>{lang === 'pt' ? 'EN em breve ✨' : 'PT em breve ✨'}</div>
      )}
    </div>
  );
}
