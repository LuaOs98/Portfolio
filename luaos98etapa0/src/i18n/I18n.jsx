// ── LuaOS 98 · contexto de idioma ─────────────────────────────────────────
// Expõe { lang, t, toggleLang, langReady, langHint } para toda a árvore.
// No beta o seletor existe (systray) mas o EN está inativo: tentar trocar só
// dispara uma dica ("EN em breve"), sem mudar de idioma.
import { createContext, useContext, useCallback, useMemo, useRef, useState } from 'react';
import { langReady, translator } from './strings.js';

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [lang, setLang] = useState('pt');
  const [langHint, setLangHint] = useState(false);
  const hintTimer = useRef(null);

  const toggleLang = useCallback(() => {
    const next = lang === 'pt' ? 'en' : 'pt';
    if (!langReady[next]) {
      // idioma ainda não disponível → mostra a dica por ~2,2s e não troca
      clearTimeout(hintTimer.current);
      setLangHint(true);
      hintTimer.current = setTimeout(() => setLangHint(false), 2200);
      return;
    }
    setLangHint(false);
    setLang(next);
  }, [lang]);

  const t = useMemo(() => translator(lang), [lang]);

  const value = useMemo(
    () => ({ lang, t, toggleLang, langReady, langHint }),
    [lang, t, toggleLang, langHint]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n precisa estar dentro de <I18nProvider>');
  return ctx;
}
