const authScanner = require("../scanners/auth.scanner");
const sqliScanner = require("../scanners/sqli.scanner");
const headersScanner = require("../scanners/headers.scanner");
const xssScanner = require("../scanners/xss.scanner");
const methodsScanner = require("../scanners/methods.scanner");

exports.executeScan = async (targetUrl) => {
  const vulnerabilities = [];

  const auth = await authScanner.checkAuth(targetUrl);
  if (auth) vulnerabilities.push(auth);

  const sqli = await sqliScanner.checkSQLi(targetUrl);
  if (sqli) vulnerabilities.push(sqli);

  const headers = await headersScanner.checkHeaders(targetUrl);
  if (headers) vulnerabilities.push(headers);

  const xss = await xssScanner.checkXSS(targetUrl);
  if (xss) vulnerabilities.push(xss);

  const methods = await methodsScanner.checkMethods(targetUrl);
  if (methods) vulnerabilities.push(methods);

  return {
    target: targetUrl,
    scannedAt: new Date().toISOString(),
    vulnerabilities
  };
};
