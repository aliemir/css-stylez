import { camelToKebab } from './parsers'

const cssStylez = (styles, parser = camelToKebab) => {
  if (typeof styles !== 'object') {
    throw new TypeError('css-stylez', 'First argument should be an object')
  }
  if (typeof parser !== 'function') {
    throw new TypeError('css-stylez', 'Second argument should be a function')
  }

  const proxy = new Proxy(styles, {
    get(target, name, receiver) {
      const parsed = parser(name)
      const rv = Reflect.get(target, parsed, receiver)
      return rv
    },
  })
  return proxy
}

export default cssStylez

export { camelToKebab }
