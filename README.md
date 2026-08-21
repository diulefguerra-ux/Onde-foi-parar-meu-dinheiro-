# Onde foi parar meu dinheiro?

**Discente:** Diúle Fagundes Guerra
**Slogan:** Entenda seus gastos. Mude seus hábitos.
**Área:** Finanças pessoais e educação financeira

## 🚀 Sobre o Projeto (Entrega 3)

Este repositório contém a versão inicial do aplicativo "Onde foi parar meu dinheiro?", desenvolvido com **React Native (Expo)**. A estrutura visual e técnica foi definida, incluindo o fluxo básico de navegação.

### 📱 Relação das Telas e Finalidades

*   **Splash Screen:** Tela de abertura com a identidade visual do aplicativo.
*   **Login:** Tela de acesso (simulada) para o usuário entrar no aplicativo.
*   **Dashboard:** Tela principal com resumo financeiro e atalhos para outras funções.
*   **Nova Despesa:** Tela para registrar um novo gasto.

### 🔄 Fluxo de Navegação

A navegação foi implementada utilizando o **React Navigation (Native Stack)**. O fluxo inicial configurado é:

`Splash` ➔ `Login` ➔ `Dashboard` ➔ `Nova Despesa` (com opção de voltar)

### 🛠️ Tecnologias Utilizadas

*   **React Native (via Expo):** Framework principal para desenvolvimento cross-platform.
*   **TypeScript:** Tipagem estática para maior segurança e organização do código.
*   **React Navigation:** Gerenciamento das rotas e navegação entre telas.
*   **AsyncStorage:** Para armazenamento local de dados (persistência).

### 💾 Estratégia de Armazenamento de Dados

Para o desenvolvimento deste Produto Mínimo Viável (MVP), optou-se por **não utilizar um backend em nuvem**. O foco é garantir a experiência do usuário (UX). 

O aplicativo adota a estratégia **Local-First**. Todos os dados (despesas, metas, categorias) serão convertidos para JSON e salvos na memória interna do dispositivo utilizando o `AsyncStorage`. O processamento será feito localmente pelo próprio JavaScript/TypeScript.

### 📂 Estrutura de Pastas (src)

O código foi organizado para facilitar a manutenção e escalabilidade:

*   `src/components/`: Componentes visuais reutilizáveis (botões, cards, inputs).
*   `src/screens/`: As páginas completas do aplicativo.
*   `src/routes/`: Configuração de roteamento e navegação do app.

### ⚙️ Instalação e Execução

Para rodar o projeto localmente, você precisará do [Node.js](https://nodejs.org/) instalado.

1. Clone o repositório:
```bash
git clone https://github.com/diulefguerra-ux/Onde-foi-parar-meu-dinheiro-.git
```
2. Acesse a pasta do projeto:
```bash
cd Onde-foi-parar-meu-dinheiro-
```
3. Instale as dependências:
```bash
npm install
```
4. Inicie o servidor do Expo:
```bash
npx expo start
```
5. Utilize o aplicativo **Expo Go** no seu celular (Android/iOS) para ler o QR Code exibido no terminal e testar o app.
