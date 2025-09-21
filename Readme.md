# QA Tech Week - PayBank

## 📌 Sobre o Projeto

**PayBank** é um projeto acadêmico da semana do **QA Tech Week - Primeira Edição** que simula uma aplicação bancária com foco em autenticação e gerenciamento de contas de usuário.

A aplicação foi desenvolvida em **Node.js**, aproveitando sua arquitetura assíncrona e baseada em eventos para alta performance e escalabilidade. Todo o ambiente está **containerizado com Docker**, garantindo consistência entre desenvolvimento, testes e produção.

### ⚙️ Tecnologias Utilizadas

- **Node.js** – Backend da aplicação  
- **PostgreSQL** – Banco de dados relacional  
- **Docker** – Containerização do ambiente  
- **Redis** – Gerenciamento de mensageria e processos distribuídos  
- **Playwright** – Testes automatizados de ponta a ponta (E2E) com JavaScript  
- **Jenkins** – Automação da pipeline de regressão contínua  

### 🔁 Integração Contínua

O projeto conta com uma **pipeline de regressão contínua automatizada via Jenkins**, que executa os testes automatizados a cada push no repositório. Essa automação garante que novas alterações não quebrem funcionalidades existentes, mantendo a estabilidade do sistema ao longo do desenvolvimento.

Além disso, o **Redis** é utilizado para gerenciar filas de execução e coordenar tarefas assíncronas durante a execução dos testes, otimizando a orquestração em ambientes distribuídos.

Aqui você encontrará as instruções para configurar o ambiente, subir os serviços necessários e rodar os testes automatizados com Playwright.

## 📌 Pré-requisitos
Antes de começar, certifique-se de ter os seguintes softwares instalados em seu sistema:

- [Git for Windows](https://gitforwindows.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js (versão LTS)](https://nodejs.org/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

## 🐋 Guia de Instalação do Docker
- [Windows](https://dev.to/papitofernando/instalando-o-docker-no-windows-10-home-ou-professional-com-wsl-2-26m3)
- [MacOS](https://docs.docker.com/desktop/setup/install/mac-install/)
- [Linux Ubuntu](https://docs.docker.com/engine/install/ubuntu/)

## 🚀 Configuração do Ambiente
1. Faça um Fork do projeto
2. Clone este repositório:
   ```sh
   git clone git@github.com:seu-usuario/qatw-primeira-edicao.git
   cd qatw-primeira-edicao
   ```
   
## 🐳 Subindo o Ambiente com Docker Compose
O projeto utiliza Docker Compose para gerenciar os serviços necessários para os testes.

1. Certifique-se de que o Docker Desktop está em execução.
2. No terminal, execute o comando abaixo para subir os serviços:
   ```sh
   docker-compose up -d
   ```
3. Para verificar se os contêineres estão rodando:
   ```sh
   docker ps
   ```
4. Para parar os serviços:
   ```sh
   docker-compose down
   ```

## 🧪 Executando os Testes com Playwright

1. Instale as dependências do Playwright:
   ```sh
   npx playwright install
   ```
2. Para rodar os testes localmente:
   ```sh
   npx playwright test
   ```
3. Para visualizar o relatório dos testes após a execução:
   ```sh
   npx playwright show-report
   ```
4. Para rodar os testes em modo UI (visualizando a execução):
   ```sh
   npx playwright test --ui
   ```

## 📄 Licença
Este projeto está sob a licença MIT.
