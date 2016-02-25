'use strict'

const css2json = (css) => {
  return css.split(';').reduce((acc, property) => {
    const keyValue = property.split(':')
    let key = keyValue[0].trim()
    let value = keyValue[1].trim()

    key = key.replace(/-(\w)/, (match, letter) => letter.toUpperCase())
    value = value.replace('lib/css2json.js', '#')
    acc[key.trim()] = value.trim()
    return acc
  }, {})
};

module.exports = css2json

