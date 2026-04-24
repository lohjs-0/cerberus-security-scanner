<div align="center">

# 🐺 Cerberus Security Scanner
**Uma API modular para varredura de vulnerabilidades em aplicações web**

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)

</div>

---

## 🔍 Sobre

Cerberus é uma API REST simples e modular construída com Node.js que automatiza a detecção de vulnerabilidades de segurança comuns em aplicações web. Inspirado no guardião de três cabeças do submundo, ele vigia sua aplicação por múltiplos ângulos — identificando ameaças antes que se tornem brechas.

---

## 🛡️ Vulnerabilidades Detectadas

| Vulnerabilidade               | Descrição                                                                 |
|-------------------------------|---------------------------------------------------------------------------|
| 🔐 Autenticação Ausente        | Detecta endpoints expostos sem proteção de autenticação adequada          |
| 💉 SQL Injection               | Identifica padrões suscetíveis a ataques de injeção SQL                   |
| 🪖 Headers de Segurança Ausentes | Verifica a ausência de headers como CSP, HSTS, X-Frame-Options, etc.   |

---

## 🚀 Funcionalidades

- **Arquitetura modular** — cada scanner roda como um módulo independente e plugável
- **API REST** — interface HTTP limpa para disparar varreduras e obter resultados
- **Relatórios em JSON** — saída estruturada pronta para integração com outras ferramentas
- **Fácil de estender** — adicione novas verificações sem alterar o código existente

---

## 🛠️ Stack Tecnológica

- **[Node.js](https://nodejs.org/)** — ambiente de execução JavaScript
- **[Express.js](https://expressjs.com/)** — servidor HTTP e roteamento
- **[Axios](https://axios-http.com/)** — cliente HTTP para requisições às aplicações alvo
- **JavaScript** — linguagem principal
- **Git & GitHub** — controle de versão

---

## 📦 Como Executar

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/cerberus.git

# Entrar na pasta do projeto
cd cerberus

# Instalar dependências
npm install

# Iniciar o servidor
npm start
```

---

## 📡 Uso da API

### Executar uma varredura

```http
POST /scan
Content-Type: application/json

{
  "url": "https://aplicacao-alvo.com"
}
```

### Exemplo de resposta

```json
{
  "target": "https://aplicacao-alvo.com",
  "scannedAt": "2026-03-17T12:00:00Z",
  "vulnerabilities": [
    {
      "type": "Headers de Segurança Ausentes",
      "severity": "medium",
      "details": "Header X-Frame-Options não encontrado"
    },
    {
      "type": "SQL Injection",
      "severity": "high",
      "details": "Possível vetor de injeção detectado em /login"
    }
  ]
}
```

> ⚠️ **Aviso:** Use o Cerberus apenas em aplicações que você possui ou tem permissão explícita para testar. Varreduras não autorizadas são ilegais.

---

## 🧩 Adicionando um Novo Módulo de Scanner

O Cerberus foi desenvolvido para ser estendido. Para adicionar uma nova verificação de vulnerabilidade:

1. Crie um novo arquivo dentro de `/scanners/`
2. Exporte uma função assíncrona que recebe a URL alvo e retorna os resultados
3. Registre-a no pipeline principal de varredura

```js
// scanners/openRedirect.js
module.exports = async function checkOpenRedirect(url) {
  // sua lógica de detecção aqui
  return { type: "Open Redirect", severity: "medium", details: "..." };
};
```
