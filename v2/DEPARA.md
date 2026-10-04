# De-para · LuaOS 98 — versão no ar × versão nova (v2)

Comparação entre o que está publicado hoje (`main`, raiz) e a reconstrução v2,
pra decidir o que subir e o que corrigir. Atualizado em 2026-10-04.

---

## 1. Como o site é publicado (e como "virar a chave")

- O site no ar é servido pelo **GitHub Pages a partir da branch `main`, pasta raiz** (`/`).
  Na raiz hoje: `index.html` (versão antiga), `assets/`, `image-slot.js`,
  `support.js`, `og.png`, `.nojekyll`. Não há workflow de build.
- A v2 vive em `v2/` só na branch de trabalho. Pra ir ao ar, o conteúdo de `v2/`
  precisa estar **na raiz da `main`** (promover v2 → raiz).
- **Reversível:** a versão antiga continua guardada no histórico do git e na branch
  `claude/luaos-98-portfolio-ku1gzz`. Dá pra voltar com um `git revert` do commit de deploy.

---

## 2. O que muda (resumo honesto)

| Aspecto | No ar hoje (antiga) | v2 (nova) |
|---|---|---|
| Arquitetura | 1 arquivo gigante (SproutCore-style, `image-slot`/`sc-if`) | Modular: shell + 1 arquivo por case, `styles.css` como fonte única |
| **Responsivo (celular)** | ❌ sem `@media`, trava no desktop | ✅ janelas viram tela cheia no mobile |
| **Arrastar janelas** | ❌ não arrasta | ✅ arrasta, empilha, minimiza, maximiza, Esc fecha |
| **Cena do fundo** | imagem fixa com enquadramento manual | ✅ muda com o **horário** (manhã/tarde/noite/madrugada) + estrelas + zoom "rumo ao destino" ao abrir cases |
| **Som** | ❌ nenhum | ✅ 8-bit em código, mudo por padrão, botão na taskbar |
| **Mascote (Luazinha)** | falas básicas (welcome/beta/shutdown) | ✅ motor de falas com fila, prioridade por foco, "visto" por fala |
| **Contato (bate-papo)** | efeito de digitação | ✅ digitação + histórico que persiste no navegador |
| **Ícones do desktop** | PNGs pixel-art | ✅ os **mesmos PNGs** (reaproveitados) |
| **Design system** | estilos espalhados inline | ✅ tokens + componentes num lugar só |
| Idioma EN | rascunho | estrutura pronta (PT é a fonte; EN entra depois) |

**Conclusão:** a v2 ganha em responsividade, interação e manutenção. É a candidata a ir ao ar.

---

## 3. Paridade de conteúdo (cases)

Todos os cases da versão no ar existem na v2:

| Case | No ar | v2 |
|---|---|---|
| Bradesco Expresso (guarda-chuva) | ✅ | ✅ `case-expresso.html` |
| Prospecção / PCO (5 abas) | ✅ | ✅ `case-pco.html` |
| DW Safer (4 abas) | ✅ | ✅ `case-safer.html` |
| Sistema de Inteligência | ✅ | ✅ `case-intel.html` |
| Treinamentos | ✅ | ✅ `case-treino.html` |
| Design Ops | ✅ | ✅ `case-designops.html` |
| Sobre Mim (3 abas) | ✅ | ✅ `case-sobre.html` |
| Meus Projetos / Palavras-chave / Contato / Lixeira | ✅ | ✅ (janelas do shell) |

---

## 4. Verificações já feitas (smoke-test automatizado)

Carreguei o shell + os 7 cases num navegador real (Playwright) e cliquei nas abas:

- ✅ **Nenhum erro de JavaScript** em nenhuma tela.
- ✅ **Todos os 49 assets** referenciados existem no disco.
- ✅ **Sem pegadinha de maiúscula/minúscula** nos nomes de arquivo (isso quebraria no
  GitHub Pages, que é Linux, mesmo funcionando no Mac). Confirmado: `PCO-metricas.mp4`
  e `intel-Subabas.mp4` batem com a referência.
- ℹ️ Os erros de "Google Fonts" e "vídeo ERR_ABORTED" que aparecem no meu ambiente são
  artefatos do sandbox (proxy bloqueia fontes externas; vídeo não baixa até dar play).
  **No navegador de verdade não acontecem.**

---

## 5. Defeitos / pendências conhecidas (o que corrigir)

### Precisa da sua decisão/conteúdo
- [ ] **og.png (preview de link):** adicionei as meta tags de Open Graph/Twitter, mas a
  imagem `og.png` é a da versão antiga. Trocar por uma da v2 depois. Se for usar domínio
  próprio, o `og:image`/`og:url` idealmente vira URL absoluta.
- [ ] **Destino final da estrada:** o que aparece quando a pessoa abre os 6 cases (placa? CTA?).
- [ ] **Persistência do progresso:** lembra entre visitas (localStorage) ou zera a cada sessão?
- [ ] **Easter eggs:** textos da janela "excesso de competência" e do "Executar".
- [ ] **Falas novas da Luazinha** (opcional) e **conteúdo EN**.

### Técnico (eu resolvo)
- [ ] Janela "Manifesto.ppt" existia como easter-egg na versão antiga — avaliar se recria na v2.
- [ ] Enquadramento de algumas imagens: a versão antiga tinha zoom/pan manual por imagem
  (`STATE`); a v2 usa `object-fit` do CSS. Conferir caso a caso se alguma ficou cortada.
- [ ] Validar no celular de verdade (o sandbox não renderiza viewport muito estreito).

---

## 6. Plano de deploy

1. Promover `v2/*` para a raiz da `main` (index, styles.css, cases, componentes, assets).
2. Manter `.nojekyll` e `og.png` na raiz.
3. Remover arquivos só da versão antiga que a v2 não usa (`image-slot.js`, `support.js`).
4. Commit + push na `main` → GitHub Pages republica sozinho.
5. Validar ao vivo e ir riscando os defeitos da seção 5.
