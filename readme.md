# 🐾 SweetPet - Landing Page Profissional

## 📖 Sobre o Projeto
Landing page responsiva desenvolvida para um pet shop fictício, como parte do desafio extra do curso de Introdução à Programação Front-End e Back-End (SCTEC/SENAI). O projeto foi idealizado com foco em **Mobile First**, **UX/UI moderna** e **código modular**, superando os requisitos mínimos ao implementar uma arquitetura de desenvolvimento de nível profissional.

## 🚀 Tecnologias e Arquitetura
- **HTML5 Semântico:** Estruturação com tags como `<header>`, `<main>`, `<section>`, `<footer>` e `<nav>`, garantindo acessibilidade e SEO.
- **CSS3 Avançado:** Uso de Flexbox, Grid, variáveis CSS, transições suaves, gradientes e media queries para responsividade completa.
- **JavaScript ES6+ Modular:** Separação de responsabilidades em módulos (`header.js`, `footer.js`, `utils.js`, `initApp.js`) e `type="module"`, garantindo código limpo, reutilizável e de fácil manutenção.
- **FontAwesome:** Ícones vetoriais para uma identidade visual moderna e escalável.

## 🎯 Diferenciais Técnicos (Além do Solicitado)

### 1. Arquitetura Modular (JavaScript Profissional)
- **`initApp.js`:** Ponto central de inicialização, orquestrando todos os módulos de forma organizada.
- **`utils.js`:** Funções reutilizáveis (Carrossel de classes e Scroll com efeito de header) que podem ser aplicadas a qualquer elemento do projeto.
- **`header.js` e `footer.js`:** Lógica de interação (Menu hambúrguer, validação de formulário e animação de envio) isolada em seus respectivos componentes.

### 2. Metodologia Mobile First
Todo o CSS foi desenvolvido com foco nas telas menores, utilizando **`max-width`** como base e evoluindo com media queries (`min-width`) para tablets e desktops. Essa abordagem garante performance e uma experiência de usuário superior em dispositivos móveis, o principal canal de acesso atualmente.

### 3. Interatividade e Feedback Visual (Formulário de Contato)
O formulário de e-mail não apenas valida campos (vazio e formato Regex), mas também oferece um **feedback visual animado**:
- **Animação de "Carta Enviada":** O elemento original desliza para a direita, enquanto um elemento de confirmação (carta + mensagem) desliza da esquerda, simulando o envio de uma mensagem.
- **Feedback de Erro:** O botão exibe mensagens de erro temporárias ("Digite um e-mail válido") sem quebrar a experiência do usuário, melhorando a usabilidade.

### 4. Responsividade e Layout Adaptativo
- **Imagens Responsivas:** Diferentes imagens para cada tamanho de tela (Mobile, Tablet, Desktop) utilizando técnicas de CSS (`object-fit` e `background-image`).
- **Header Fixo com Efeito de Scroll:** O cabeçalho original desliza suavemente para fora, enquanto um cabeçalho fixo surge com transição suave (`transform` + `transition`), garantindo uma experiência premium durante a navegação.

### 5. Commits Profissionais
Todo o desenvolvimento foi versionado com **Conventional Commits**, utilizando prefixos como `feat`, `refactor`, `doc` e `fix`. O histórico de commits reflete um fluxo de trabalho organizado, profissional e alinhado com as boas práticas de desenvolvimento ágil.

## 📱 Responsividade
| Dispositivo | Largura |
|-------------|---------|
| **Mobile** | Até 767px (Base) |
| **Tablet** | 768px a 1023px |
| **Desktop** | A partir de 1024px |

## 🛠️ Como Executar Localmente
1. Baixe ou clone o repositório do projeto.
2. Abra a pasta no **VS Code**.
3. Instale a extensão **Live Server**.
4. Clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"**.
5. O projeto será aberto automaticamente no seu navegador.

## 🌐 Projeto Online (GitHub Pages)
O SweetPet está disponível online para visualização através do GitHub Pages. Acesse o link abaixo para ver o projeto em funcionamento:

👉 **[https://brunotxrs.github.io/SweetPet/](hhttps://brunotxrs.github.io/SweetPet/)**


## 📁 Estrutura de Pastas

````
    SweetPet/
    ├── index.html
    ├── README.md
    └── src/
        ├── assets/
        │   ├── favicon/
        │   ├── imgs/
        │   └── videos/
        ├── css/
        │   ├── global.css
        │   ├── header.css
        │   ├── main.css
        │   ├── footer.css
        │   └── index.css
        └── js/
            ├── utils.js
            ├── header.js
            ├── footer.js
            ├── initApp.js
            └── index.js
````

## 👤 Autor
**Bruno Teixeira**
- [![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white)](https://github.com/brunotxrs)
