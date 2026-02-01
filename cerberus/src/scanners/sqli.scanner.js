const axios = require("axios");

exports.checkSQLi = async (targetUrl) => {
  try {
    const payload = "' OR 1=1 --";
    const response = await axios.get(`${targetUrl}?id=${payload}`);

    if (response.status === 200) {
      return {
        id: "SQLI-001",
        title: "SQL Injection",
        category: "Injection",
        severity: "HIGH",
        description: "Possível SQL Injection detectado"
      };
    }
  } catch (error) {
    return null;
  }
};
