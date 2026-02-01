const axios = require("axios");

exports.checkTraversal = async (targetUrl) => {
  try {
    const payload = "../../../../../etc/passwd";
    const response = await axios.get(`${targetUrl}?file=${payload}`);

    if (response.data && response.data.toString().includes("root:")) {
      return {
        id: "TRAV-001",
        title: "Directory Traversal",
        category: "File Access",
        severity: "HIGH",
        description: "Possível acesso a arquivos do sistema"
      };
    }
  } catch (error) {
    return null;
  }
};
