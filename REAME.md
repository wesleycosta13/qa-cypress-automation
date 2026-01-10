# Cypress Automation – DemoQA Practice Form

Projeto de automação de testes end-to-end do **DemoQA Practice Form**, utilizando **Cypress**, seguindo boas práticas de QA e integração contínua (CI/CD).

---

## 🧪 Visão Geral do Projeto

Este projeto automatiza o fluxo principal de preenchimento e envio do formulário **Automation Practice Form** do site DemoQA, validando que o formulário é submetido com sucesso e que o modal de confirmação é exibido corretamente.

O projeto foi desenvolvido com uma estrutura organizada, uso de fixtures, comandos customizados e pipeline de CI/CD com **GitHub Actions**.

---

## 🛠️ Tecnologias Utilizadas

- **JavaScript**
- **Cypress**
- **Node.js**
- **GitHub Actions (CI/CD)**
- **Prettier** (formatação de código)

---

## 📂 Estrutura do Projeto

```txt
qa-cypress-automation/
├─ .github/
│  └─ workflows/
│     └─ cypress.yml
├─ cypress/
│  ├─ e2e/
│  │  └─ demoqa/
│  │     └─ practice-form.cy.js
│  ├─ fixtures/
│  │  └─ user.json
│  └─ support/
│     ├─ commands.js
│     └─ e2e.js
├─ cypress.config.js
├─ package.json
└─ README.md

```
▶️ Como Executar o Projeto Localmente
1️⃣ Instalar as dependências
npm install

2️⃣ Abrir o Cypress (modo interativo)
npm run cy:open

3️⃣ Executar os testes em modo headless
npm run cy:run

🔄 Pipeline de CI/CD

Este projeto utiliza GitHub Actions para executar automaticamente os testes Cypress:

A cada push

A cada pull request

O pipeline realiza:

Instalação das dependências

Execução dos testes em modo headless

Falha automática do pipeline em caso de erro nos testes

🧩 Funcionalidades Automatizadas

Preenchimento do formulário com dados de fixture

Interação com Date Picker

Seleção de radio buttons e checkboxes

Seleção de campos React Select (Estado e Cidade)

Envio do formulário

Validação do modal de confirmação

Tratamento de anúncios e exceções não tratadas

📌 Boas Práticas Aplicadas

Estrutura de projeto organizada

Uso de fixtures para dados de teste

Criação de comandos customizados no Cypress

Evita uso de waits fixos

Testes prontos para CI/CD

🚀 Possíveis Melhorias Futuras

Implementação de Page Object Model

Geração dinâmica de massa de dados

Relatórios de execução (Mochawesome / Allure)

Execução paralela de testes

Integração com Cypress Cloud

👤 Autor

Wesley Oliveira Costa
QA Automation | Cypress | JavaScript

🔗 LinkedIn: www.linkedin.com/in/wesley-oliveira-costa
📂 GitHub: wesleycosta13
