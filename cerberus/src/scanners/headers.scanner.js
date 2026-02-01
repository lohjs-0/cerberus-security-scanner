const axios = require("axios");

exports.checkHeaders = async (targetUrl) => {
  try {
    const response = await axios.get(targetUrl);

    const requiredHeaders = [
      "x-frame-options",
      "x-content-type-options",
      "content-security-policy"
    ];

    const missing = requiredHeaders.filter(
      (header) => !response.headers[header]
    );

    if (missing.length > 0) {
      return {
        id: "HDR-001",
        title: "Missing Security Headers",
        category: "Headers",
        severity: "MEDIUM",
        description: `Headers ausentes: ${missing.join(", ")}`
      };
    }
  } catch (error) {
    return null;
  }
};
