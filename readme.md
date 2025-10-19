# 🔬 Stencil Web Components POC

Prova de conceito utilizando **[Stencil](https://stenciljs.com/)** para criação de **Web Components reutilizáveis**, interoperáveis entre **React**, **Vue**, **Angular** e aplicações **vanilla JS**.

O objetivo é validar a **integração**, **build**, **empacotamento** e **publicação** dos componentes, explorando padrões que facilitem a adoção em diferentes ecossistemas frontend.

---

## 🚀 Tecnologias e ferramentas

- **Stencil** – Compilador para Web Components nativos  
- **TypeScript** – Tipagem estática e produtividade  
- **Vite** ou **Rollup** – Build e empacotamento  
- **ES Modules** – Distribuição moderna  
- **Storybook (opcional)** – Catálogo e documentação visual

---

## 🧩 Objetivos da POC

- Criar componentes totalmente independentes de framework  
- Garantir compatibilidade com React e Vue  
- Testar o processo de build e publicação (npm ou local registry)  
- Avaliar performance e tamanho dos bundles  
- Explorar boas práticas de isolamento de estilo (Shadow DOM)

---

## ⚙️ Como executar

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm start

# Gerar build de produção
npm run build
