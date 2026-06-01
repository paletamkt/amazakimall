# Amazaki — Checklists da Ativação Estratégica

Sistema interativo de acompanhamento da ativação estratégica do **Centro Comercial Amazaki** (Aleixo, Manaus/AM).

Desenvolvido pela **Paleta Marketing** — Contrato Nº 28.2026.

---

## Estrutura do projeto

```
amazaki-checklist/
├── index.html          # Entry point
├── css/
│   ├── reset.css       # Normalize / reset
│   ├── tokens.css      # Design tokens (cores, tipografia, espaçamento)
│   ├── animations.css  # Keyframes e classes de animação
│   ├── layout.css      # Estrutura de layout (header, pages, overview, detail)
│   ├── components.css  # Componentes reutilizáveis (cards, items, badges)
│   └── mobile.css      # Responsividade (tablet, mobile, touch, print)
├── js/
│   ├── data.js         # Dados dos 14 checklists
│   ├── state.js        # Gerenciamento de estado com localStorage
│   ├── ui.js           # Funções de renderização e atualização de UI
│   └── app.js          # Controller principal e inicialização
└── README.md
```

---

## Funcionalidades

- **14 checklists** cobrindo toda a jornada da ativação
- **187 itens** com classificação A (Atividade) ou E (Entrega)
- **Progresso individual** por checklist e por fase
- **Progresso por escopo** (Marketing, Operacional, Compartilhado)
- **Progresso geral** visível no header fixo
- **Estado persistente** via `localStorage` — dados mantidos ao reabrir
- **Animações** de entrada, confetti ao marcar itens e toast de confirmação
- **Totalmente responsivo** — mobile first, touch otimizado
- **Acessibilidade** — navegação por teclado (Space/Enter), atributos ARIA
- **Deep link** — URL com hash `#checklist-N` para abrir diretamente

---

## Escopos

| Escopo | Checklists | Responsável |
|--------|-----------|-------------|
| Marketing | 01–05, 13 | Paleta Marketing |
| Operacional | 06–10, 14 | Construtora Arruda |
| Compartilhado | 11–12 | Paleta + Construtora |

---

## Como usar

Abra `index.html` diretamente no navegador — não requer servidor.

Para hospedar no GitHub Pages:
1. Faça push do repositório
2. Vá em **Settings → Pages → Source: main branch / root**
3. Acesse via `https://seu-usuario.github.io/amazaki-checklist/`

---

## Tecnologias

- HTML5 semântico
- CSS3 (custom properties, grid, animations, backdrop-filter)
- JavaScript vanilla (ES6+, módulos via IIFE)
- Google Fonts: DM Serif Display, DM Sans, JetBrains Mono
- `localStorage` para persistência

---

## Paleta Marketing

**CNPJ:** 40.994.507/0001-22  
**E-mail:** contato@paletavisual.com.br  
**WhatsApp:** (92) 98241-0613  
**Manaus/AM**
