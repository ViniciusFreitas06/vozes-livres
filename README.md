# Site Vozes Livres, Mulheres Seguras

## Descrição
Site informativo dedicado ao projeto "Vozes Livres, Mulheres Seguras", focado no combate à violência contra a mulher. O site apresenta um design moderno e responsivo com paleta de cores em tons de roxo e lilás, transmitindo acolhimento e força.

## Características do Design
- **Paleta de cores**: Tons de roxo (#6A0DAD, #C084FC, #E9D5FF) com contraste em branco
- **Design responsivo**: Otimizado para dispositivos móveis (mobile-first)
- **Tipografia**: Fonte Inter para melhor legibilidade
- **Elementos visuais**: Ícones Font Awesome, gradientes suaves, transições animadas

## Seções do Site

### 1. Header (Cabeçalho)
- Logo do projeto com ícone de coração
- Menu de navegação responsivo
- Links: Início, Sobre, Objetivos, Premiações, Contato

### 2. Hero (Seção Principal)
- Título de destaque: "Vozes Livres, Mulheres Seguras"
- Subtítulo explicativo
- Botão de chamada para ação "Saiba Mais"
- Espaço reservado para imagem principal

### 3. Sobre
- Texto explicativo sobre o projeto
- Estatísticas de impacto (500+ mulheres atendidas, 50+ palestras, 20+ parcerias)
- Espaço para imagem ilustrativa

### 4. Objetivos
- Três cards principais:
  - Conscientizar sobre violência contra a mulher
  - Oferecer apoio e orientação
  - Criar redes de proteção
- Ícones circulares com gradiente roxo

### 5. Premiações
- Carrossel interativo com 3 prêmios
- Controles de navegação (anterior/próximo)
- Indicadores de posição
- Auto-play a cada 5 segundos

### 6. Contato
- Formulário com validação (nome, e-mail, mensagem)
- Links para redes sociais
- Validação em tempo real dos campos

### 7. Footer (Rodapé)
- Informações do projeto
- Links rápidos de navegação
- Números de emergência (180 - Central da Mulher, 190 - Polícia)
- Direitos autorais

## Funcionalidades JavaScript

### Navegação
- Menu mobile responsivo com animações
- Navegação suave entre seções
- Destaque automático do link ativo

### Carrossel de Premiações
- Navegação manual com botões
- Indicadores clicáveis
- Auto-play automático
- Suporte a navegação por teclado

### Formulário de Contato
- Validação em tempo real
- Mensagens de erro personalizadas
- Notificação de sucesso
- Campos obrigatórios: nome (min. 2 caracteres), e-mail válido, mensagem (min. 10 caracteres)

### Animações e Efeitos
- Scroll reveal para elementos
- Animação de contadores nas estatísticas
- Efeitos hover em botões e links
- Transições suaves

## Responsividade

### Mobile (até 568px)
- Menu hambúrguer
- Layout em coluna única
- Botões e textos otimizados para toque
- Navegação simplificada

### Tablet (568px - 768px)
- Layout em duas colunas para algumas seções
- Menu horizontal
- Objetivos em grid 2x2

### Desktop (768px+)
- Layout completo em múltiplas colunas
- Menu horizontal fixo
- Objetivos em grid 3x1
- Espaçamentos otimizados

## Estrutura de Arquivos
```
vozes-livres-site/
├── index.html              # Página principal
├── assets/
│   ├── css/
│   │   └── style.css       # Estilos CSS
│   ├── js/
│   │   └── script.js       # JavaScript interativo
│   └── images/             # Pasta para imagens (vazia - placeholders no código)
├── README.md               # Esta documentação
└── todo.md                 # Lista de tarefas do projeto
```

## Como Usar

1. **Visualização Local**: Abra o arquivo `index.html` em qualquer navegador moderno
2. **Adicionar Imagens**: Coloque as imagens na pasta `assets/images/` e substitua os placeholders no HTML
3. **Personalização**: Edite as cores no arquivo CSS (variáveis CSS no início do arquivo)
4. **Conteúdo**: Modifique os textos diretamente no arquivo HTML

## Tecnologias Utilizadas
- HTML5 semântico
- CSS3 com variáveis customizadas
- JavaScript ES6+ (classes, arrow functions)
- Font Awesome para ícones
- Google Fonts (Inter)

## Acessibilidade
- Navegação por teclado
- Contraste adequado de cores
- Textos alternativos para ícones
- Estrutura semântica HTML
- Foco visível em elementos interativos

## Compatibilidade
- Navegadores modernos (Chrome, Firefox, Safari, Edge)
- Dispositivos móveis (iOS, Android)
- Tablets e desktops
- Suporte a touch e mouse

## Próximos Passos
1. Adicionar imagens reais nos placeholders
2. Integrar formulário de contato com backend
3. Implementar analytics (Google Analytics)
4. Adicionar mais animações e micro-interações
5. Otimizar para SEO (meta tags, structured data)

---

**Desenvolvido com foco em responsividade mobile e experiência do usuário.**

