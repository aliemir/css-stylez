import cssStylez, { camelToKebab } from '../src'

const bulmaTest = {
  'is-flex-tablet-only': 'is-flex-tablet-only',
  'has-text-grey-darker': 'has-text-grey-darker',
  'is-size-5-desktop': 'is-size-5-desktop',
  'is-three-fifths': 'is-three-fifts',
  'is-12': 'is-12',
}

const stylez = cssStylez(bulmaTest, camelToKebab)

describe('bulma-test', () => {
  test('is-flex-tablet-only', () => {
    expect(stylez.isFlexTabletOnly).toBe(bulmaTest['is-flex-tablet-only'])
  })
  test('has-text-grey-darker', () => {
    expect(stylez.hasTextGreyDarker).toBe(bulmaTest['has-text-grey-darker'])
  })
  test('is-size-5-desktop', () => {
    expect(stylez.isSize5Desktop).toBe(bulmaTest['is-size-5-desktop'])
  })
  test('is-three-fifths', () => {
    expect(stylez.isThreeFifths).toBe(bulmaTest['is-three-fifths'])
  })
  test('is-12', () => {
    expect(stylez.is12).toBe(bulmaTest['is-12'])
  })
})

describe('type handling', () => {
  test('non object argument 0', () => {
    expect(() => {
      cssStylez('test', camelToKebab)
    }).toThrowError(TypeError)
  })
  test('non object argument 1', () => {
    expect(() => {
      cssStylez(bulmaTest, '')
    }).toThrowError(TypeError)
  })
})
