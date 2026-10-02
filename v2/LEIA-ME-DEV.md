# LEIA-ME · DEV — LuaOS 98 (v2)

Guia técnico da reconstrução v2. Complementa o `LEIA-ME-portfolio.md` (mapa de
conteúdo) com **como o código funciona**. Tudo aqui é **sem build**: HTML + CSS +
JS vanilla. Abre direto no navegador (via servidor local ou GitHub Pages).

---

## Princípio central
**Conteúdo é dado vestido em componente.** Os tokens e componentes vivem num
lugar só (`styles.css`). Mudou um token → muda em todas as telas. Cada case é um
arquivo próprio que **reusa** esses componentes.

---

## Mapa de arquivos

```
v2/
├── index.html            ← o SHELL (desktop, janelas, taskbar, cena, i18n)
├── styles.css            ← FONTE ÚNICA: tokens + componentes + shell
├── case-expresso.html    ← Bradesco Expresso (guarda-chuva)
├── case-pco.html         ← Prospecção/PCO (5 abas) · provisório
├── case-treino.html      ← Treinamentos
├── case-safer.html       ← DW Safer (4 abas)
├── case-designops.html   ← Design Ops
├── case-intel.html       ← Sistema de Inteligência
├── case-sobre.html       ← Sobre Mim (3 abas: Ficha / Horas Pagas / Não Pagas)
├── componentes.html      ← vitrine dos componentes (referência visual)
└── assets/               ← imagens, vídeos, posters, capas, mascote, wallpaper
```

---

## Tokens (em `styles.css`, no `:root`)
Estrutura: **primitivas → semânticas → dimensões → tipografia**.
- Cores: primitivas (`--purple-500`…) → semânticas (`--text-heading`, `--bg-card`…).
- Espaçamento: `--space-4 … --space-48` (base de ritmo = **24**; blocos pesados = **40**).
- Tipografia (fiel ao Figma): título `--font-pixel` 24/32; corpo `--font-mono`
  **18/28** (`type/mono-paragrafo`); caixa/secundário 14/22.4.
- Layout: `--layout-max: 1280px`; coluna de leitura fica em ~80% da janela.

> **Regra de ouro:** nunca chumbar valor de cor/espaçamento/fonte no HTML. Usar
> as classes/variáveis. Ajuste visual = mexer no `styles.css`, não nos cases.

---

## Componentes principais (classes em `styles.css`)
`.window`/`.window__bar` · `.case-title`/`.case-sub`/`.status-line` ·
`.sec-title`(=h2)/`.h3` · `.p`/`.list` · `.pin-label` · `.marco`(+`--texto`) ·
`.card`(+`--dashed`, `.card__label`, `--mini`, `--rosa`) · `.badge`/`.tag` ·
`.quote`(+`--amarelo`/`--rosa`/…) · `.feature`(verde "sempre aberto" + roxo
`<details>` expansível) · `.actor` · `.ficha` · `.principio` · `.vrow`/`.subcase` ·
abas: `.tabs`/`.tabbar`/`.tab`/`.tabpanel`.

A vitrine `componentes.html` mostra todos renderizados.

---

## Abas (componente reutilizável)
Marcação:
```html
<div class="tabs">
  <div class="tabbar">
    <button class="tab tab--selected" data-tab="id1">Label 1</button>
    <button class="tab" data-tab="id2">Label 2</button>
  </div>
  <div class="tabpanel tabpanel--active" id="id1">…</div>
  <div class="tabpanel" id="id2">…</div>
</div>
```
Mais um `<script>` curtinho no fim do arquivo (delegação de clique) troca o painel
ativo. Usado em Safer, PCO e Sobre Mim.

---

## Como os cases entram no shell
O shell abre cada case numa **janela com iframe** (`<iframe src="case-x.html">`).
Pra não ter moldura dupla, cada case detecta que está embutido e esconde a própria
barra:
```html
<script>if(window.parent!==window)document.documentElement.classList.add("embed")</script>
```
+ CSS `html.embed .window__bar{display:none}` etc. Resultado: **arquivo sozinho =
janela completa** (bom pra compartilhar link direto); **dentro do shell = só o conteúdo**.

---

## Shell (`index.html`)
- **Window manager** vanilla: abrir/fechar/minimizar/maximizar/**arrastar**/empilhar
  (z-index no clique), taskbar sincronizada, **Esc** fecha a do topo.
- **Mobile:** janelas viram tela cheia (`@media max-width:720px`).
- **Janelas especiais** (renderizadas pelo shell, não iframe): Meus Projetos (grid
  de capas), Palavras-chave (tags→cases), Contato (bate-papo), Lixeira (easter egg).
- **Registro de janelas:** objeto `WIN` (id → título, tamanho, `src` ou `kind`).
- **Ícones do desktop:** array `ICONS`. **Projetos:** array `PROJECTS`.
  **Palavras-chave:** `KW_GROUPS`. **Lixeira:** `TRASH`. Tudo como **dados**.

---

## Cena do desktop (duas mecânicas)
- **Horário:** `timeOfDay()` → `data-tod` (manhã/tarde/noite/madrugada) → tint +
  estrelas via CSS.
- **Progresso até o destino:** abrir um case marca `visited`; `data-prog` (0→6) dá
  zoom na estrada rumo ao horizonte; abrir os 6 = "chegou ao destino" (**por
  contagem, independe da ordem**, como no brainstorm). Zoom/tint usam a **imagem
  única** atual; aceitam frames/paisagens dedicadas depois (trocar no CSS/arrays).
- Respeita `prefers-reduced-motion`.

---

## i18n (PT ↔ EN)
- Mecânica é **código**, não design. **PT é a fonte da verdade**; EN **recria**
  piadas culturais (não traduz literal).
- Implementado no **chrome do desktop**: dicionário `I18N` + atributos `data-i18n`
  + botão no systray (perto do relógio). `LANG_READY.en=false` enquanto o EN não
  existe → troca o chrome e avisa que o conteúdo segue em PT.
- **Conteúdo dos cases:** hoje é PT inline. Quando houver EN, o caminho recomendado
  é dar `data-i18n` às strings dos cases e um dicionário por case (mesma mecânica).
  Estrutura já pensada pra isso — sem refazer tela.

---

## Rodar localmente
Por causa do iframe, abra via **servidor** (não `file://`):
```
cd v2 && python3 -m http.server 8080   # depois: http://localhost:8080/
```

## Publicar (GitHub Pages)
Hoje o `main` serve o site antigo. Pra "virar a chave": promover o conteúdo de
`v2/` para a raiz (ou apontar o Pages para `v2/`) quando tudo estiver validado.
Há um `.nojekyll` na raiz.

---

## Backlog (FASE 2 / polish) — ordem combinada
C (cena ✓ estrelas) → D (este doc ✓) → E (repontar `componentes.html`) → F
(responsivo fino) → … → **B (som opcional, por último)**.
Specs fechadas no `LEIA-ME-portfolio.md` ainda a implementar: **mascote Luazinha**
(fila global, prioridade por foco, "visto" por fala, trava de 5 fechamentos),
**Contato "digitando" + estado persistente**, **aviso de beta clicável**,
**easter eggs** (janela "excesso de competência", Executar), **camadas extras da
estrada** (micro-recompensas por case, placa final, persistência local).
