const axios = require("axios");

exports.checkAuth = async (targetUrl) => {
  try {
    const response = await axios.get(targetUrl);

    if (response.status === 200) {
      return {
        id: "AUTH-001",
        title: "Missing Authentication",
        category: "Authentication",
        severity: "HIGH",
        description: "Endpoint acessível sem autenticação"
      };
    }
  } catch (error) {
    return null;
  }
};
