// ── LuaOS 98 · janela ─────────────────────────────────────────────────────
// Chrome estilo Win98 (barra de título com − 🗖 ✕), geometria por tipo e
// arraste pela barra de título. O corpo é passado como children.
import { useRef } from 'react';
import { titleGradient, theme, fonts } from '../theme.js';

const btnStyle = {
  width: 18, height: 18, background: theme.chromeBtn, border: '1px outset #fff',
  color: theme.ink, display: 'flex', alignItems: 'center', justifyContent: 'center',
  cursor: 'pointer', marginLeft: 6, lineHeight: 1,
};

function geometry({ size, def, isMax, pos }) {
  if (isMax) {
    return { top: 4, left: 4, width: 'calc(100% - 8px)', height: 'calc(100% - 8px)', maxHeight: 'calc(100% - 8px)' };
  }
  const dragged = pos || null;
  if (size === 'content' || size === 'index' && def.kind === 'cards') {
    return {
      top: dragged ? dragged.top : 16,
      left: dragged ? dragged.left : (size === 'content' ? 140 : def.left || 120),
      width: size === 'content' ? 'min(72%, 1100px)' : (def.width || 700),
      height: size === 'content' ? '80%' : 'auto',
      maxHeight: 'calc(100% - 52px)',
    };
  }
  return {
    top: dragged ? dragged.top : (def.top || 60),
    left: dragged ? dragged.left : (def.left || 160),
    width: def.width || 460,
    height: 'auto',
    maxHeight: 'calc(100% - 60px)',
  };
}

export default function Window({
  def, size, isMax, pos, z, active, hidden, canMax,
  deskRef, onClose, onMin, onMax, onFocus, onMove, children,
}) {
  const elRef = useRef(null);
  const drag = useRef(null);

  const onTitlePointerDown = (e) => {
    if (isMax) return;                       // maximizada não arrasta
    if (e.target.closest('[data-winbtn]')) return; // não arrastar pelos botões
    const el = elRef.current;
    const desk = deskRef?.current;
    if (!el || !desk) return;
    const r = el.getBoundingClientRect();
    const dr = desk.getBoundingClientRect();
    drag.current = {
      startX: e.clientX, startY: e.clientY,
      top: r.top - dr.top, left: r.left - dr.left,
    };
    e.target.setPointerCapture?.(e.pointerId);
    onFocus?.();
  };

  const onTitlePointerMove = (e) => {
    const d = drag.current;
    if (!d) return;
    const nextTop = Math.max(0, d.top + (e.clientY - d.startY));
    const nextLeft = d.left + (e.clientX - d.startX);
    onMove?.(nextTop, nextLeft);
  };

  const endDrag = (e) => {
    if (drag.current) { drag.current = null; e.target.releasePointerCapture?.(e.pointerId); }
  };

  const g = geometry({ size, def, isMax, pos });

  return (
    <div
      ref={elRef}
      onMouseDown={onFocus}
      style={{
        position: 'absolute', top: g.top, left: g.left, width: g.width,
        height: g.height, maxHeight: g.maxHeight,
        background: theme.chrome, border: '2px outset #fff',
        boxShadow: '3px 3px 10px rgba(0,0,0,0.5)', zIndex: z,
        display: hidden ? 'none' : 'flex', flexDirection: 'column',
      }}
    >
      {/* barra de título */}
      <div
        onPointerDown={onTitlePointerDown}
        onPointerMove={onTitlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        style={{
          background: active ? titleGradient : 'linear-gradient(90deg,#4a3f5c,#8a6076)',
          color: '#fff', padding: '6px 8px', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center',
          fontFamily: fonts.pixel, fontSize: 10, cursor: isMax ? 'default' : 'move',
          userSelect: 'none',
        }}
      >
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1, lineHeight: 1.4 }}>
          {def.title}
        </span>
        <span data-winbtn onClick={(e) => { e.stopPropagation(); onMin(); }} title="Minimizar"
          style={{ ...btnStyle, fontSize: 13, fontWeight: 'bold' }}>−</span>
        {canMax && (
          <span data-winbtn onClick={(e) => { e.stopPropagation(); onMax(); }} title="Maximizar"
            style={{ ...btnStyle, fontSize: 11 }}>🗖</span>
        )}
        <span data-winbtn onClick={(e) => { e.stopPropagation(); onClose(); }} title="Fechar"
          style={{ ...btnStyle, fontSize: 12 }}>✕</span>
      </div>

      {/* corpo */}
      <div data-win-body style={{
        padding: 14, overflow: 'auto', fontSize: 15, color: theme.ink,
        lineHeight: 1.55, fontFamily: fonts.body, position: 'relative', flex: 1,
      }}>
        {children}
      </div>
    </div>
  );
}
