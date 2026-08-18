// ── LuaOS 98 · gerenciador de janelas ─────────────────────────────────────
// Estado e ações de abrir/fechar/focar/minimizar/maximizar + arrastar.
// Portado da lógica do Design Component (state.open/z/topZ/selected/...).
import { useCallback, useState } from 'react';
import { findWindow } from '../data/windows.js';

const START_Z = 10;

export function useWindows() {
  const [open, setOpen] = useState([]);        // ids abertos (ordem de abertura)
  const [z, setZ] = useState({});              // id → z-index
  const [topZ, setTopZ] = useState(START_Z);
  const [selected, setSelected] = useState(null); // ícone selecionado no desktop
  const [minimized, setMinimized] = useState({});
  const [maximized, setMaximized] = useState({});
  const [pos, setPos] = useState({});          // id → { top, left } quando arrastada

  const focusWindow = useCallback((id) => {
    setTopZ((tz) => {
      const nz = tz + 1;
      setZ((m) => ({ ...m, [id]: nz }));
      return nz;
    });
    setMinimized((m) => (m[id] ? { ...m, [id]: false } : m));
  }, []);

  const openWindow = useCallback((id) => {
    setSelected(null);
    setOpen((cur) => {
      if (cur.includes(id)) {
        focusWindow(id);
        return cur;
      }
      setTopZ((tz) => {
        const nz = tz + 1;
        setZ((m) => ({ ...m, [id]: nz }));
        return nz;
      });
      return [...cur, id];
    });
  }, [focusWindow]);

  const closeWindow = useCallback((id) => {
    setOpen((cur) => cur.filter((x) => x !== id));
  }, []);

  const minimizeWindow = useCallback((id) => {
    setMinimized((m) => ({ ...m, [id]: true }));
  }, []);

  const toggleMax = useCallback((id) => {
    focusWindow(id);
    setMaximized((m) => ({ ...m, [id]: !m[id] }));
  }, [focusWindow]);

  // clique único seleciona o ícone; clique de novo (ou duplo) abre.
  const selectIcon = useCallback((id) => {
    setSelected((cur) => {
      if (cur === id) {
        openWindow(id);
        return null;
      }
      return id;
    });
  }, [openWindow]);

  const clearSelection = useCallback(() => setSelected(null), []);

  // arrastar: grava posição absoluta (px) da janela.
  const moveWindow = useCallback((id, top, left) => {
    setPos((p) => ({ ...p, [id]: { top, left } }));
  }, []);

  // janela no topo (maior z entre as visíveis) — para estilo "ativa".
  const topWindow = open
    .filter((id) => !minimized[id])
    .sort((a, b) => (z[a] || 0) - (z[b] || 0))
    .pop();

  return {
    state: { open, z, topZ, selected, minimized, maximized, pos, topWindow },
    findWindow,
    actions: {
      openWindow, closeWindow, focusWindow, minimizeWindow,
      toggleMax, selectIcon, clearSelection, moveWindow,
    },
  };
}
