const axios = require("axios");

exports.checkXSS = async (targetUrl) => {
  try {
    const payload = "<script>alert(1)</script>";
    const response = await axios.get(`${targetUrl}?q=${payload}`);

    if (response.data && response.data.includes(payload)) {
      return {
        id: "XSS-001",
        title: "Cross-Site Scripting (XSS)",
        category: "Injection",
        severity: "HIGH",
        description: "Possível XSS refletido detectado"
      };
    }
  } catch (error) {
    return null;
  }
};
