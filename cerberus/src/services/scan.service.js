const authScanner = require("../scanners/auth.scanner");
const sqliScanner = require("../scanners/sqli.scanner");
const headersScanner = require("../scanners/headers.scanner");

exports.executeScan = async (targetUrl) => {
  const vulnerabilities = [];

  const authResult = await authScanner.checkAuth(targetUrl);
  if (authResult) vulnerabilities.push(authResult);

  const sqliResult = await sqliScanner.checkSQLi(targetUrl);
  if (sqliResult) vulnerabilities.push(sqliResult);

  const headerResult = await headersScanner.checkHeaders(targetUrl);
  if (headerResult) vulnerabilities.push(headerResult);

  return {
    target: targetUrl,
    scannedAt: new Date().toISOString(),
    vulnerabilities
  };
};
