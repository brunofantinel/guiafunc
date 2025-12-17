# 📚 Guia de Atendimento e Vendas - CLIP Porto Alegre

## Bem-vindo ao Site de Treinamento!

Este é um site interativo desenvolvido em **React 19** com **Tailwind CSS** e **TypeScript**, contendo um guia completo de atendimento e vendas para os colaboradores da CLIP Porto Alegre, além de um quiz interativo para testar conhecimentos.

---

## 🎯 Características Principais

✅ **8 Seções de Conteúdo** - Guia completo sobre atendimento e vendas  
✅ **Quiz Interativo** - 6 perguntas com feedback imediato  
✅ **Navegação Fluida** - Scroll suave entre seções  
✅ **Design Responsivo** - Funciona perfeitamente em mobile, tablet e desktop  
✅ **Tema Vermelho CLIP** - Identidade visual da marca integrada  
✅ **Animações Suaves** - Entrada de elementos com Framer Motion  
✅ **Componentes Reutilizáveis** - Código limpo e modular  

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

### 1. **Node.js** (versão 18 ou superior)
- Baixe em: https://nodejs.org/
- Recomendado: Versão LTS (Long Term Support)
- Verifique a instalação abrindo PowerShell e digitando:
  ```powershell
  node --version
  npm --version
  ```

### 2. **Git** (opcional, mas recomendado)
- Baixe em: https://git-scm.com/
- Permite clonar repositórios e controlar versão

### 3. **Editor de Código** (recomendado)
- **Visual Studio Code** (https://code.visualstudio.com/)
- Extensões recomendadas:
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - TypeScript Vue Plugin

---

## 🚀 Instalação e Execução (Windows/PowerShell)

### Passo 1: Extrair o Arquivo ZIP

1. Clique com botão direito no arquivo `clip-treinamento.zip`
2. Selecione **"Extrair Tudo..."**
3. Escolha a pasta de destino (ex: `C:\Users\SeuUsuario\Documents`)
4. Clique em **"Extrair"**

Ou use PowerShell:
```powershell
# Navegue até a pasta onde está o ZIP
cd C:\Users\SeuUsuario\Downloads

# Extraia o arquivo
Expand-Archive -Path clip-treinamento.zip -DestinationPath C:\Users\SeuUsuario\Documents
```

### Passo 2: Abrir PowerShell na Pasta do Projeto

1. Abra a pasta extraída (`clip-treinamento`)
2. Clique na barra de endereço e digite `powershell`
3. Pressione **Enter**

Ou abra PowerShell e navegue:
```powershell
cd C:\Users\SeuUsuario\Documents\clip-treinamento
```

### Passo 3: Instalar Dependências

Execute o comando para instalar todas as dependências:

```powershell
npm install
```

⏳ **Isso pode levar 2-5 minutos na primeira vez**

Se encontrar erros, tente:
```powershell
npm install --legacy-peer-deps
```

### Passo 4: Iniciar o Servidor de Desenvolvimento

```powershell
npm run dev
```

Você verá uma mensagem como:
```
  VITE v7.1.7  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

### Passo 5: Acessar o Site

1. Abra seu navegador (Chrome, Firefox, Edge, etc.)
2. Digite na barra de endereço: `http://localhost:5173`
3. O site carregará automaticamente

---

## 📁 Estrutura do Projeto

```
clip-treinamento/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx              # Página principal com 8 seções
│   │   │   └── NotFound.tsx          # Página 404
│   │   ├── components/
│   │   │   ├── Navigation.tsx        # Navegação (mobile + desktop)
│   │   │   ├── SectionCard.tsx       # Componentes de seção
│   │   │   ├── Quiz.tsx              # Quiz interativo (6 perguntas)
│   │   │   ├── ErrorBoundary.tsx     # Tratamento de erros
│   │   │   └── ui/                   # Componentes shadcn/ui
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx      # Contexto de tema
│   │   ├── lib/
│   │   │   └── utils.ts              # Funções utilitárias
│   │   ├── App.tsx                   # Roteamento principal
│   │   ├── main.tsx                  # Entry point React
│   │   └── index.css                 # Estilos globais e tema
│   ├── public/
│   │   └── images/                   # Imagens do projeto
│   │       ├── Logo-Clip-Oficial.jpg
│   │       ├── 1.jpg até 6.jpg       # Imagens das seções
│   │       └── final.jpg             # Imagem de conclusão
│   └── index.html                    # HTML principal
├── server/
│   └── index.ts                      # Servidor Express
├── package.json                      # Dependências do projeto
├── tsconfig.json                     # Configuração TypeScript
├── vite.config.ts                    # Configuração Vite
├── tailwind.config.ts                # Configuração Tailwind
└── README.md                         # Este arquivo
```

---

## 🎨 Seções do Site

### 1. **Introdução (Hero Section)**
- Apresentação do guia
- Logo da CLIP
- Botão para começar leitura

### 2. **A Importância do Atendimento**
- Primeira impressão
- Postura aberta
- Escuta ativa
- Empatia e respeito

### 3. **Como Abordar o Cliente**
- Saudação educada
- Dicas de ouro
- Substituição de termos negativos

### 4. **Técnicas de Venda na Prática**
- 5 passos práticos:
  1. Levantamento de necessidades
  2. Oferta de opções
  3. Benefícios vs características
  4. Cross-selling & Upselling
  5. Fechamento

### 5. **Exposição e Organização**
- Layout inteligente
- Setorização clara
- Vitrines atrativas

### 6. **Merchandising Visual**
- Reposição constante
- Agrupamento estratégico
- Altura dos olhos
- Etiquetas e sinalização
- Limpeza impecável
- Displays temáticos

### 7. **Comportamento Esperado**
- Responsabilidades do atendente
- Acionamento de supervisor
- Suporte ao cliente

### 8. **Conclusão**
- Mensagem inspiradora
- Resultados esperados

---

## 🧪 Quiz Interativo

O site inclui um **quiz com 6 perguntas** para testar o conhecimento:

✅ **Feedback imediato** - Verde para acerto, vermelho para erro  
✅ **Trecho de apoio** - Justificativa de cada resposta  
✅ **Contador de progresso** - Acompanhe seu desempenho  
✅ **Navegação** - Botões "Anterior" e "Próxima"  
✅ **Resultado final** - Pontuação e mensagem personalizada  
✅ **Botões de ação** - "Reiniciar Quiz" ou "Voltar para o Guia"  

---

## 🛠️ Scripts Disponíveis

Execute estes comandos no PowerShell dentro da pasta do projeto:

```powershell
# Iniciar servidor de desenvolvimento
npm run dev

# Compilar para produção
npm run build

# Visualizar build de produção
npm run preview

# Verificar erros de tipo TypeScript
npm run check

# Formatar código com Prettier
npm run format
```

---

## 🔧 Customizações Comuns

### Alterar Cores Primárias

Edite o arquivo `client/src/index.css`:

```css
:root {
  --primary: #c41e3a;           /* Vermelho CLIP */
  --primary-foreground: #fef2f2;
  /* ... outras cores */
}
```

### Adicionar Novas Seções

1. Abra `client/src/pages/Home.tsx`
2. Adicione um novo `<SectionCard>` com um `id` único
3. Atualize o array `SECTIONS` em `client/src/components/Navigation.tsx`

### Modificar Perguntas do Quiz

Edite `client/src/components/Quiz.tsx` e modifique o array `QUIZ_QUESTIONS`:

```tsx
const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Sua pergunta aqui?",
    alternatives: [
      { letter: "A", text: "Opção A" },
      { letter: "B", text: "Opção B" },
      { letter: "C", text: "Opção C" },
      { letter: "D", text: "Opção D" }
    ],
    correctAnswer: "A",
    supportText: "Explicação da resposta correta"
  },
  // ... mais perguntas
];
```

---

## 🐛 Solução de Problemas

### Erro: "npm: O termo 'npm' não é reconhecido"

**Solução:** Node.js não foi instalado corretamente.
1. Reinstale Node.js de https://nodejs.org/
2. Reinicie o PowerShell
3. Verifique com: `npm --version`

### Erro: "Port 5173 is already in use"

**Solução:** Outra aplicação está usando a porta.
```powershell
# Use uma porta diferente
npm run dev -- --port 3000
```

### Erro: "Cannot find module"

**Solução:** Dependências não foram instaladas.
```powershell
# Limpe cache e reinstale
npm cache clean --force
npm install
```

### Site não carrega no navegador

**Solução:**
1. Verifique se o servidor está rodando (você deve ver "Local: http://localhost:5173")
2. Tente atualizar a página (Ctrl+R ou Cmd+R)
3. Limpe o cache do navegador (Ctrl+Shift+Delete)
4. Tente outro navegador

---

## 📦 Dependências Principais

| Pacote | Versão | Uso |
|--------|--------|-----|
| React | ^19.2.1 | Framework principal |
| React DOM | ^19.2.1 | Renderização no DOM |
| Wouter | ^3.3.5 | Roteamento leve |
| Framer Motion | ^12.23.22 | Animações |
| Tailwind CSS | ^4.1.14 | Estilos utilitários |
| Lucide React | ^0.453.0 | Ícones |
| Radix UI | latest | Componentes acessíveis |
| TypeScript | 5.6.3 | Tipagem estática |
| Vite | ^7.1.7 | Build tool rápido |

---

## 🚢 Deploy (Publicação)

### Compilar para Produção

```powershell
npm run build
```

Isso criará uma pasta `dist/` com os arquivos otimizados.

### Opções de Hospedagem

- **Vercel** (https://vercel.com) - Recomendado para React
- **Netlify** (https://netlify.com)
- **GitHub Pages** (https://pages.github.com)
- **Heroku** (https://heroku.com)
- **AWS** (https://aws.amazon.com)

---

## 📞 Suporte e Documentação

- **React:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com
- **Wouter:** https://github.com/molefrog/wouter
- **Framer Motion:** https://www.framer.com/motion
- **TypeScript:** https://www.typescriptlang.org
- **Vite:** https://vitejs.dev

---

## 📄 Licença

Material de treinamento interno - CLIP Porto Alegre © 2024

---

## ✨ Dicas Finais

1. **Mantenha o servidor rodando** enquanto desenvolve
2. **Use o DevTools do navegador** (F12) para debugar
3. **Salve os arquivos** e o site recarrega automaticamente
4. **Teste no mobile** usando DevTools (Ctrl+Shift+M)
5. **Leia os erros** no console - eles ajudam a identificar problemas

---

## 🎉 Pronto para Começar!

Se tudo correu bem, você deve ver o site rodando em `http://localhost:5173`

Aproveite o guia de treinamento! 🚀
