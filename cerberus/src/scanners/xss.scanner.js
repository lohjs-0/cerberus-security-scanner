const axios = require("axios");

exports.checkXSS = async (targetUrl) => {
  try {
    const payload = "<script>alert(1)</script>";
    const response = await axios.get(`${targetUrl}?q=${payload}`);

    if (response.data && response.data.includes(payload)) {
      return {
        vulnerability: "Cross-Site Scripting (XSS)",
        severity: "HIGH",
        description: "Possível XSS refletido detectado"
      };
    }
  } catch (error) {
    return null;
  }
};
