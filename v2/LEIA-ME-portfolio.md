# LEIA-ME · Portfólio LuaOS 98
### Índice geral do projeto — mapa de todos os arquivos e status

> Mapa do projeto. Lista tudo que foi gerado, o que cada arquivo é, e o estado de cada peça. Serve pra você (ou pro Claude Design / Código) não se perder.
> **Status geral:** CONTEÚDO 100% COMPLETO. Falta só geração de imagem (parte feita) e polish visual/código.

---

## Fluxo de produção
Conteúdo validado em texto (.md) → wireframe anotado (HTML) → arte gerada (Nano Banana) → montagem visual (Claude Design) → mecânica/interação (Claude Código).

---

## Status dos 6 cases

| Case | Texto (.md) | Wireframe | Thumb (Nano Banana) |
|------|-------------|-----------|---------------------|
| **Expresso** | no HTML | `wireframe-expresso.html` | wireframe pronto: `wireframe-thumb-expresso.html` |
| **PCO** | `pco-*.md` (3 arquivos) | `wireframe-pco.html` | wireframe pronto: `wireframe-thumb-pco.html` |
| **Treinamentos** | `case-treinamentos.md` | `wireframe-treinamentos.html` | wireframe pronto: `wireframe-thumb-treinamentos.html` |
| **Sistema de Inteligência** | `case-sistema-inteligencia.md` | `wireframe-sistema-inteligencia.html` | ✅ arte gerada + trocada |
| **Design Ops** | `case-design-ops.md` | `wireframe-design-ops.html` | wireframe pronto: `wireframe-thumb-designops.html` |
| **DW Safer** | `case-dwsafer.md` | `wireframe-safer.html` | wireframe pronto: `wireframe-thumb-safer.html` |

---

## Seções e utilitários

| Peça | Arquivo | Status |
|------|---------|--------|
| Área de Projetos (grade 3+3 + beta) | `wireframe-area-projetos.html` | estrutura fechada |
| Sobre Mim (ficha RPG + Horas Pagas + Não Pagas) | `sobre-mim.md` · `wireframe-sobre-mim.html` | fechado |
| Palavras-chave (roteador de competências) | `palavras-chave.html` | fechado (PT) |
| Contato (bate-papo UOL paródia) | `wireframe-contato.html` | fechado |
| Componentes / mini-DS | `componentes-ds.html` | fechado |
| Artigos (Medium + LinkedIn) | `artigos-sistema-inteligencia.md` | prontos pra publicar |
| Voz e tom (memória externa da voz) | `voz-e-tom-lua.md` | fechado, aberto a evolução |
| Prompts de ícones (Nano Banana) | `prompt-nanobanana-icones.md` | ✅ ícones gerados |

---

## Destaques-âncora da vitrine (decididos)
- **PCO** → `🔍 Discovery de campo`
- **DW Safer** → `3 frentes reconstruídas`
- **Sistema** → `Template público`
- **Expresso** → `🏆 Innovation in Digital Banking 2024`
- **Treinamentos** → `R$ 200 mil/ano economizados`
- **Design Ops** → `Single Source of Truth`

Hierarquia da grade: linha de cima (amplos/sistêmicos, capinhas maiores) = PCO, Safer, Sistema. Linha de baixo (prova específica, menores) = Expresso, Treinamentos, Design Ops.

---

## O que já está resolvido (não mexer)
- Todo o conteúdo textual dos 6 cases + artigos.
- Estrutura de todas as telas (wireframes).
- Thumb do Sistema (arte gerada e trocada).
- Ícones do desktop (gerados).
- Aviso de beta: bloco de notas vintage (não modal), texto fechado.
- Contato: mecânica de bate-papo com efeito "digitando", estado persistente, sem telefone.
- **Sem trava de segurança / sem censura:** todos os dados do portfólio são fictícios (nomes tipo Arya Stark / João das Neves). Nada precisa ser ocultado.

---

## O que falta (pendências reais)

### Geração de imagem (Nano Banana) — parte feita
- [✅] Thumb do Sistema
- [✅] Ícones do desktop
- [ ] 5 thumbs restantes (wireframes prontos: PCO, Safer, Expresso, Treinamentos, Design Ops)
- [ ] Arte do Contato (bate-papo)
- [ ] Retratos pixel: Fátima, Sueli, Luazinha com Monster, Lua na lira
- [ ] Luazinha segurando plaquinha "CENSURADO" — OPCIONAL, só se decidir censurar algo (hoje: nada a censurar)

### Polish visual (Claude Design)
- Montar wireframes → telas Win98 finais
- Aplicar segunda fonte (Share Tech Mono no corpo)
- Estrelas/sparkles animados no papel de parede
- Encaixar as thumbs na grade da área de Projetos
- Definir tamanho final das capinhas

### Mecânica / interação (Claude Código) — FASE 2, depois do PT congelado
- Efeito "digitando" + estado persistente do Contato
- Aviso de beta clicável (Luazinha completa a piada)
- Falas da Luazinha por gatilho de scroll (Sobre Mim e cases)
- Comportamento da mascote (45s, para após 3 dispensas)
- **Localização PT↔EN** — ver seção abaixo

---

## Localização PT ↔ EN (fase 2, no Código)
- **Decisão:** a mecânica de idioma é trabalho de CÓDIGO, não de Design. Não montar no Claude Design.
- **Regra:** PT-BR é a fonte da verdade. EN é localização (piadas culturais se RECRIAM, não se traduzem — "envelheceu igual leite" não vira "aged like milk", vira outra piada que funcione).
- **Sequência:** congelar o PT inteiro (visual + texto) ANTES de fazer o EN. Traduzir antes de congelar = retrabalho dobrado.
- **Toggle:** global (portfólio inteiro), não por seção. NÃO usar modal inicial (fricção + cara de site institucional). Melhor: seletor discreto no SYSTRAY (perto do relógio da taskbar), onde o idioma do teclado ficava no Windows real — fiel, discreto, sempre acessível.
- **Instrução técnica pro Código (passar cedo):** estruturar todos os textos como DADOS separados do layout (objeto/arquivo de strings), mesmo na versão só-PT. Assim o EN entra como segundo conjunto, sem refazer telas. Não chumbar texto no HTML.
- **Beta:** vai só em PT, SEM toggle. O idioma entra junto com o conteúdo EN, pós-lançamento. Não segurar o beta por causa disso.

## Plano de ação (ordem)
1. Summarizar falas da Luazinha + checar gatilhos (revisar junto).
2. Conteúdo redondo → **Claude Design** (montagem visual Win98).
3. → **Claude Código** (mecânica, estado, gatilhos, "digitando").
4. → **Localização EN** (por último, PT congelado).

## Mecânica da Luazinha (FECHADA — vai pro Código)
O problema real NÃO era intrusão (fala individual funciona bem, testado abrindo uma a uma). Era EMPILHAMENTO de falas quando há múltiplas janelas abertas — cada janela roda sua fila em paralelo e elas atropelam. É problema de concorrência, não de conteúdo. Correção:

1. **Fila global única:** a Luazinha nunca fala duas coisas ao mesmo tempo. Gatilhos concorrentes enfileiram; uma fala termina (ou é fechada) antes da próxima.
2. **Prioridade por foco:** falas da janela EM FOCO têm prioridade. Falas de janelas fora de foco esperam ou são descartadas por contexto.
3. **Estado "vista" por FALA INDIVIDUAL (não por contexto):** no momento em que uma fala aparece na tela, vira "vista" e sai da fila pra sempre (na sessão). Falas que nunca chegaram a aparecer continuam "não vistas" e elegíveis. Efeito: reabrir uma janela PULA o que já foi visto (sem papagaio) mas dá NOVA CHANCE às falas que a pessoa perdeu (ex: saiu antes dos 50s das encadeadas). Marcador é "fala apareceu = vista", não "contexto foi aberto".
4. **Descarte por troca de contexto:** falas encadeadas pendentes são canceladas ao trocar de janela/aba (não disparam fora de contexto) — mas como não foram "vistas", seguem elegíveis numa futura reabertura.
5. **Exceção áreas lúdicas:** Sobre Mim (gatas ciclando) e Contato (chat) têm encenação própria que PODE rodar de novo ao revisitar, porque ali a fala É o conteúdo, não aviso.
6. **Limite de fechamento por irritação IMEDIATA:** fechar 5 falas seguidas e rápidas desabilita a mascote; fechamentos espaçados (leu, depois fechou) NÃO contam. (Subimos de 3 para 5 pra não penalizar quem só lia com pressa em alguns momentos.)

**Descartado:** 3 pontinhos / lâmpada (era solução pra intrusão, que não é o problema), ocultar falas (elas ficam todas — o problema era simultaneidade), minimizar a mascote (ela é personalidade central).

**Nível de interrupção por tipo de tela:** cases (leitura séria) = a fala de abertura apresenta e as demais são espontâneas mas na fila global, sem atropelar. Áreas lúdicas + desktop ocioso = mais solta. Regra: interrupção inversamente proporcional à seriedade da leitura.

**Validação pendente:** testar navegação real com lead/designer sênior (ADPList) observando onde trava/hesita/irrita — especialmente o cenário de múltiplas janelas. Bônus: é discovery de usabilidade documentado (conecta com o gap de pesquisa/discovery e vira material pro meta-case).

## Conteúdo estratégico pós-lançamento (peso de case, não enfeite)
- **Meta-case: "o case sobre fazer este portfólio".** Um case dentro do próprio portfólio explicando as decisões de design do LuaOS 98. É o único case que o recrutador VIVE enquanto lê (está dentro do produto), e o único impossível de fingir. Prova a tese central (integridade, decisão documentada) por demonstração, não por discurso — metacoerência. Regras pra não virar umbigo: focar em DECISÕES e TRADE-OFFS (o que foi cortado/recusado e por quê: a splash descartada, o modal de idioma recusado, o wallpaper que virou V2), não nos acertos. A Luazinha pode quebrar a quarta parede aqui (é o assunto). É V2 porque só fica bom com o portfólio pronto (não dá pra explicar decisões ainda em aberto). Par natural do post de lançamento: o post anuncia, o meta-case aprofunda. RASCUNHO BRUTO JÁ EXISTE: a conversa inteira de construção documenta cada decisão. Invite candidato: "O portfólio sobre fazer este portfólio" / "As decisões de design que você não vê enquanto navega" / "você gosta de metalinguagem?" (a decidir).

## Ideias V2 (pós-lançamento, registradas pra não perder)
- **Wallpaper / jornada da estrada (mecânica FECHADA no brainstorm):** a estrada do papel de parede avança conforme a pessoa ABRE CASES (não por scroll — isso encaixa na arquitetura de desktop, onde abrir janela é a ação principal). Progresso por QUANTIDADE, não por ordem (abriu 3 = avançou 3, não importa quais — robusto e respeita navegação livre). Camadas a definir na V2:
  - Micro-recompensas a cada avanço (cada case aberto muda algo na paisagem: elemento novo, céu mudando de tom, Luazinha aparecendo em algum ponto) — pra quem abre só 2-3 (a maioria) já sentir resposta, não só o completista.
  - Tela final / placa pra quem abre TUDO (o bônus, não a única recompensa). Destino a decidir: (a) empurrão pro contato ("chegou ao fim, bora conversar?") = design a serviço de conversão, captura o lead mais quente no auge; (b) destino afetivo (BH/casa, conecta com o quase-nomadismo do Sobre Mim); (c) tese destilada / manifesto. Possível combinar (a)+(b): placa afetiva + "bora conversar?".
  - Pergunta técnica em aberto: progresso persiste entre visitas (armazenamento local) ou reseta por sessão? Persistente = mais sofisticado; por-sessão = mais simples. Decidir na V2.
  - Semente V3: cada case adicionar um elemento temático à paisagem, pra a tela final ser o retrato do que AQUELA pessoa explorou.
  - Descartado: versão "muda por visita" (fraca, depende da pessoa voltar).
- **Falas extras da Luazinha por case** + textos dos **easter eggs** (janela de erro "excesso de competência", menu Executar, arquivos da lixeira). Munição pra plugar depois.

---

## Princípios que regem tudo
- Integridade acima de impacto: métrica com procedência, status honesto, verbo calibrado.
- Três camadas separadas: implementado / em progresso / visão de futuro.
- Liderar com o mecanismo, não com a porcentagem, quando a métrica é estimativa.
- Cor nunca valida sozinha (acessibilidade herdada no kit).
- A voz da Lua é a régua (ver `voz-e-tom-lua.md`).
