# 📊 Simulador de Financiamento - React Native
## Um componente React Native para cálculo de financiamentos com juros compostos, desenvolvido em TypeScript com Styled Components.

### Pré-requisitos
Node.js (versão 16 ou superior)

npm ou yarn

Expo CLI

### ⚙️ Instalação
Instale o Expo CLI globalmente (recomendado):

```bash
npm install -g expo-cli
```

### Crie um novo projeto React Native:

```bash
npx create-expo-app@latest NomeDoSeuProjeto
```

### Navegue até a pasta do projeto:

```bash
cd NomeDoSeuProjeto
```

### Instale as dependências adicionais:

```bash
npm install styled-components
npm install --save-dev @types/styled-components @types/react-native
```

 ### Executando o Projeto
Inicie o servidor de desenvolvimento:

bash
npm start
Escaneie o QR code com o app Expo Go (disponível na App Store e Google Play)


### 🧮 Fórmulas Utilizadas
Valor da Parcela (PMT):

```text
PMT = PV × [i(1+i)^n] / [(1+i)^n-1]
```

Onde:

PV = Valor financiado

i = Taxa de juros mensal

n = Número de parcelas

Valor Total:

```text
Total = (PMT × n) + Taxas Adicionais
```

### 📱 Plataformas Suportadas:
- iOS
- Android
- Web (via React Native Web)
