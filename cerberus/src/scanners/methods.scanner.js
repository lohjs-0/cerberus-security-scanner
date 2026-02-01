const axios = require("axios");

exports.checkMethods = async (targetUrl) => {
  try {
    const dangerousMethods = ["PUT", "DELETE", "PATCH"];
    const allowed = [];

    for (const method of dangerousMethods) {
      try {
        const response = await axios({
          method,
          url: targetUrl
        });

        if (response.status < 500) {
          allowed.push(method);
        }
      } catch (err) {}
    }

    if (allowed.length > 0) {
      return {
        id: "HTTP-001",
        title: "Insecure HTTP Methods",
        category: "Configuration",
        severity: "MEDIUM",
        description: `Métodos inseguros habilitados: ${allowed.join(", ")}`
      };
    }
  } catch (error) {
    return null;
  }
};
