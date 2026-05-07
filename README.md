# 🍕 FoodApp - Página de Produtos

<p align="center">
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma" />
  <img src="https://img.shields.io/badge/Photoshop-31A8FF?style=for-the-badge&logo=adobe-photoshop&logoColor=black" alt="Photoshop" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
</p>

## 📌 Sobre o Projeto

Este é um projeto de estudo frontend desenvolvido em **React** e **Vite**, inspirado nas interfaces modernas de grandes aplicações de delivery e venda de alimentos. 

O foco principal do desenvolvimento foi reproduzir com alta fidelidade a seção mais crítica da experiência de um usuário em um app de comida: **a tela de listagem de produtos**, garantindo um design limpo, interações fluidas, componentização eficiente e gerenciamento de estados dinâmicos.

---

## 📸 Demonstração da Interface

<p align="center">
  <img width="836" height="943" alt="tela-de-produtos" src="https://github.com/user-attachments/assets/0cb974cb-b2ca-400b-ae55-dc1b51dabd66" />
</p>



---

## 🚀 Como Ele Funciona

A aplicação é dividida em módulos e componentes reativos que se configuram para oferecer uma experiência de navegação rápida e intuitiva:

* **🔍 Barra de Pesquisa:** Permite filtrar instantaneamente todos os produtos do catálogo por nome. O filtro é atualizado em tempo real conforme a digitação e, ao clicar no botão `"X"`, a busca é limpa, restaurando o catálogo completo imediatamente.
* **🎛️ Barra de Categorias (Slider Horizontal):** Funciona como um carrossel interativo. As categorias deslizam horizontalmente através de setas de navegação ou via scroll. Ao selecionar uma categoria, o slider centraliza o botão escolhido de forma automática e suave, enquanto a lista abaixo é filtrada.
* **🛍️ Seção de Produtos Dinâmica:** Exibe os itens disponíveis a partir de uma estrutura de dados de array. Conta com efeitos visuais refinados, incluindo uma animação de *hover* ao passar o mouse sobre o card e uma microinteração imersiva ao clicar no ícone de coração para favoritar o produto.
* **⚠️ Tratamento de Estado Vazio (Mensagem de Erro):** Caso o usuário pesquise por um termo que não corresponda a nenhum item cadastrado, a aplicação gerencia esse estado exibindo uma mensagem amigável de produto não localizado diretamente na seção principal.

---

## 🎯 Qual Problema Ele Resolve?

Em aplicações de e-commerce e delivery, a **fricção na busca e escolha de produtos** é o principal motivo de abandono de carrinhos. Este projeto resolve e otimiza esse cenário técnico através de:

1.  **Filtros de Alta Performance:** A filtragem combinada (por categoria e termo de busca) acontece no lado do cliente (*client-side*), eliminando requisições desnecessárias e entregando um feedback instantâneo ao usuário.
2.  **UX Fluida e Responsiva:** Elementos como o carrossel que se auto-centraliza e animações de feedback rápido mantêm o usuário engajado e reduzem a carga cognitiva durante a navegação.
3.  **Arquitetura Limpa:** Demonstra como componentizar elementos reutilizáveis em React (Cards, Sliders, SearchBars), facilitando a manutenção e a escalabilidade do código.

---

## 🛠️ Tecnologias Utilizadas

O ecossistema do projeto foi construído utilizando as melhores práticas do mercado atual:

* **Vite & React** - Para uma renderização ultra-rápida e componentização baseada em estados.
* **JavaScript (ES6+)** - Manipulação lógica de arrays, filtros de busca e eventos de interface.
* **HTML5 & CSS3** - Estruturação semântica e estilização moderna, com foco em animações de microinterações.
* **Figma & Photoshop** - Utilizados no planejamento visual, extração de assets e fidelidade do layout.
* **Node.js** - Ambiente de execução para gerenciamento das dependências do projeto.

---

## 📦 Como Executar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/lucianosergiodasilva/pagina-de-produtos.git
   ```
