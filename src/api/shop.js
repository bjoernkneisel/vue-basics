/**
 * Mocking API calls for testing purposes
 */
const _products = [
  {"id": 1, "title": "iPad Air", "price": 699, "inventory": 67},
  {"id": 2, "title": "iPhone 12 Mini", "price": 689, "inventory": 22},
  {"id": 3, "title": "Airbeat 2018 Full CD", "price": 20, "inventory": 122}
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 850)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}