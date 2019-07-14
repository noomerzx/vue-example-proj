import 'array-flat-polyfill'

// More detail: https://github.com/vuejs/vue-test-utils/issues/839#issuecomment-410474714
const { getComputedStyle } = window
window.getComputedStyle = function getComputedStyleStub(el) {
  return {
    ...getComputedStyle(el),
    transitionDelay: '',
    transitionDuration: '',
    animationDelay: '',
    animationDuration: '',
  }
}
