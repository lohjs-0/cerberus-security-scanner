const axios = require("axios");

exports.checkAuth = async (targetUrl) => {
  try {
    const response = await axios.get(targetUrl);

    if (response.status === 200) {
      return {
        vulnerability: "Missing Authentication",
        severity: "HIGH",
        description: "Endpoint acessível sem autenticação"
      };
    }
  } catch (error) {
    return null;
  }
};
