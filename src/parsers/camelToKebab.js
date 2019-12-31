const camelToKebab = str => {
  let expr = /([a-z]|10|11|12|[0-9])([A-Z]|10|11|12|[0-9])/g
  let result = str
  do {
    result = result.replace(expr, g => {
      const toArr = g.split('')
      const first = toArr.shift()
      const rest = toArr.join('')
      return `${first}-${rest.toLowerCase()}`
    })
    expr = /(?!10|11|12)([a-z]|10|11|12|[0-9])([A-Z]|10|11|12|[0-9])/g
  } while (result.match(expr))
  return result
}

export default camelToKebab
