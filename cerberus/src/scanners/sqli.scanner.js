const axios = require("axios");

exports.checkSQLi = async (targetUrl) => {
  try {
    const payload = "' OR 1=1 --";
    const response = await axios.get(`${targetUrl}?id=${payload}`);

    if (response.status === 200) {
      return {
        vulnerability: "SQL Injection",
        severity: "HIGH",
        description: "Possível SQL Injection detectado"
      };
    }
  } catch (error) {
    return null;
  }
};
