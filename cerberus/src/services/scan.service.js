const authScanner = require("../scanners/auth.scanner");
const sqliScanner = require("../scanners/sqli.scanner");
const headersScanner = require("../scanners/headers.scanner");
const xssScanner = require("../scanners/xss.scanner");

exports.executeScan = async (targetUrl) => {
  const vulnerabilities = [];

  const authResult = await authScanner.checkAuth(targetUrl);
  if (authResult) vulnerabilities.push(authResult);

  const sqliResult = await sqliScanner.checkSQLi(targetUrl);
  if (sqliResult) vulnerabilities.push(sqliResult);

  const headerResult = await headersScanner.checkHeaders(targetUrl);
  if (headerResult) vulnerabilities.push(headerResult);

  const xssResult = await xssScanner.checkXSS(targetUrl);
  if (xssResult) vulnerabilities.push(xssResult);

  return {
    target: targetUrl,
    scannedAt: new Date().toISOString(),
    vulnerabilities,
  };
};
