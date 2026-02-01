const methodsScanner = require("../scanners/methods.scanner");
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

  const methodsResult = await methodsScanner.checkMethods(targetUrl);
if (methodsResult) vulnerabilities.push(methodsResult);

  return {
    target: targetUrl,
    scannedAt: new Date().toISOString(),
    vulnerabilities,
  };
};
