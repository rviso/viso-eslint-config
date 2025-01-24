exports.getLineTerminator = function getLineTerminator(text) {
  return text.includes('\r\n') ? '\r\n' : '\n'
}
