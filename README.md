<div align="center">

```
 ██████╗███████╗██████╗ ██████╗ ███████╗██████╗ ██╗   ██╗███████╗
██╔════╝██╔════╝██╔══██╗██╔══██╗██╔════╝██╔══██╗██║   ██║██╔════╝
██║     █████╗  ██████╔╝██████╔╝█████╗  ██████╔╝██║   ██║███████╗
██║     ██╔══╝  ██╔══██╗██╔══██╗██╔══╝  ██╔══██╗██║   ██║╚════██║
╚██████╗███████╗██║  ██║██████╔╝███████╗██║  ██║╚██████╔╝███████║
 ╚═════╝╚══════╝╚═╝  ╚═╝╚═════╝ ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝
```

**Guardião de três cabeças que vigia sua aplicação por múltiplos ângulos.**

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)
[![License](https://img.shields.io/badge/Licença-MIT-green?style=for-the-badge)](#️-licença)

</div>

---

## O que é o Cerberus?

<p align="left">
  <img src="1000038566-removebg-preview.png" align="right" width="220" style="margin-left: 20px; border-radius: 15px;">
  <div>
  <p>Scanner de vulnerabilidades para aplicações web</p>

  Cerberus é uma API REST simples e modular construída com Node.js que automatiza a detecção de vulnerabilidades de segurança comuns em aplicações web. Inspirado no guardião de três cabeças do submundo, ele vigia sua aplicação por múltiplos ângulos — identificando ameaças antes que se tornem brechas.

  > ⚠️ **Aviso:** Use o Cerberus apenas em aplicações que você possui ou tem permissão explícita para testar. Varreduras não autorizadas são ilegais.

  </div>
</p>

<br clear="right">

---

## ✨ Funcionalidades

| Recurso | Descrição |
|---|---|
| 🧩 **Arquitetura Modular** | Cada scanner roda como um módulo independente e plugável |
| 🌐 **API REST** | Interface HTTP limpa para disparar varreduras e obter resultados |
| 📊 **Relatórios em JSON** | Saída estruturada pronta para integração com outras ferramentas |
| 🔩 **Fácil de Estender** | Adicione novas verificações sem alterar o código existente |

---

## 🛡️ Vulnerabilidades Detectadas

| Vulnerabilidade | Descrição |
|---|---|
| 🔐 Autenticação Ausente | Detecta endpoints expostos sem proteção de autenticação adequada |
| 💉 SQL Injection | Identifica padrões suscetíveis a ataques de injeção SQL |
| 🪖 Headers de Segurança Ausentes | Verifica a ausência de headers como CSP, HSTS, X-Frame-Options, etc. |

---

## 🛠️ Stack

```
Backend   →  Node.js + Express.js
HTTP      →  Axios
Linguagem →  JavaScript
Versionamento → Git & GitHub
```

---

## 🚀 Como rodar

### Pré-requisitos

- [Node.js 18+](https://nodejs.org/)

### Instalação

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

A API sobe em `http://localhost:3000`.

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

---

## 📂 Estrutura do projeto

```
cerberus/
└── scanners/              # Módulos de detecção independentes
│   ├── authCheck.js       # Verificação de autenticação ausente
│   ├── sqlInjection.js    # Detecção de SQL Injection
│   └── securityHeaders.js # Verificação de headers de segurança
├── server.js              # Entry point da API
└── package.json
```

---

## 🗺️ Roadmap

- [x] Detecção de autenticação ausente
- [x] Detecção de SQL Injection
- [x] Verificação de headers de segurança
- [x] Relatórios em JSON
- [x] Arquitetura modular
- [ ] Open Redirect detection
- [ ] XSS scanning
- [ ] Integração com GitHub Actions
- [ ] Dashboard visual de relatórios
- [ ] Exportar relatório em PDF

---

## ⚖️ Licença

Distribuído sob a licença MIT. Veja [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

Feito com ☕ e olhos nas sombras — guard your gates. 🐺

**[⬆ Voltar ao topo](#)**

</div>
