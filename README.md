<div align="center">

# 🐺 Cerberus Security Scanner

**A modular API for scanning vulnerabilities in web applications**

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)

</div>

---

## 🔍 About

Cerberus is a simple and modular REST API built with Node.js that automates the detection of common security vulnerabilities in web applications. Inspired by the three-headed guardian of the underworld, it watches over your application from multiple angles — identifying threats before they become breaches.

---

## 🛡️ Detected Vulnerabilities

| Vulnerability | Description |
|---|---|
| 🔐 Missing Authentication | Detects endpoints exposed without proper auth protection |
| 💉 SQL Injection | Identifies patterns susceptible to SQL injection attacks |
| 🪖 Missing Security Headers | Checks for absent headers like CSP, HSTS, X-Frame-Options, etc. |

---

## 🚀 Features

- **Modular architecture** — each scanner runs as an independent, pluggable module
- **REST API** — clean HTTP interface to trigger scans and retrieve results
- **JSON reports** — structured output ready for integration with other tools
- **Easy to extend** — add new vulnerability checks without touching existing code

---

## 🛠️ Tech Stack

- **[Node.js](https://nodejs.org/)** — JavaScript runtime environment
- **[Express.js](https://expressjs.com/)** — HTTP server and routing
- **[Axios](https://axios-http.com/)** — HTTP client for making requests to target applications
- **JavaScript** — core language
- **Git & GitHub** — version control

---

## 📦 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/cerberus.git

# Navigate to the project folder
cd cerberus

# Install dependencies
npm install

# Start the server
npm start
```

---

## 📡 API Usage

### Run a scan

```http
POST /scan
Content-Type: application/json

{
  "url": "https://target-application.com"
}
```

### Example response

```json
{
  "target": "https://target-application.com",
  "scannedAt": "2026-03-17T12:00:00Z",
  "vulnerabilities": [
    {
      "type": "Missing Security Headers",
      "severity": "medium",
      "details": "X-Frame-Options header not found"
    },
    {
      "type": "SQL Injection",
      "severity": "high",
      "details": "Potential injection vector detected at /login"
    }
  ]
}
```

> ⚠️ **Disclaimer:** Use Cerberus only on applications you own or have explicit permission to test. Unauthorized scanning is illegal.

---

## 🧩 Adding a New Scanner Module

Cerberus is built to be extended. To add a new vulnerability check:

1. Create a new file inside `/scanners/`
2. Export an async function that receives the target URL and returns findings
3. Register it in the main scan pipeline

```js
// scanners/openRedirect.js
module.exports = async function checkOpenRedirect(url) {
  // your detection logic here
  return { type: "Open Redirect", severity: "medium", details: "..." };
};
```

---
