function sortObjectRecursive(obj) {
  if (obj instanceof Array) {
    return obj.sort().map(item => sortObjectRecursive(item))
  }
  if (typeof obj === 'object') {
    return Object.keys(obj).sort().reduce((o, key) => ({
      ...o,
      [key]: sortObjectRecursive(obj[key])
    }), {})
  }
  return obj
}

module.exports = sortObjectRecursive