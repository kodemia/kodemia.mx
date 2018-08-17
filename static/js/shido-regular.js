/**
 * Shido: Regular
 *
 * It makes all the elements with the same class
 * have the same height.
 */

/**
 * @attribute regular
 *   @param string  | childrenClass | required
 *   @param numeric | breakpoint    | optional
 *
 * Example:
 *
 * <div regular="childrenClass:breakpoint">
 *   <div class="childrenClass"></div>
 *   <div class="childrenClass"></div>
 *   ...
 * </div>
 */

class Regular {
  match() {
    const $regularItems = document.querySelectorAll('[regular]')

    for (let i = 0; i < $regularItems.length; ++i) {
      let itemProps = $regularItems[i].getAttribute('regular')
      itemProps = itemProps.split(':')
      const childrenClass = '.' + itemProps[0]
      const childrenOff = isNaN(itemProps[1]) ? 0 : itemProps[1]
      const $children = $regularItems[i].querySelectorAll(childrenClass)
      const windowWidth = window.innerWidth
      let a = 0
      let b = 0

      if (windowWidth >= childrenOff) {
        for (let j = 0; j < $children.length; ++j) {
          $children[j].style.height = 'auto'
          a = $children[j].offsetHeight
          if (a >= b) {
            b = a
          }
          for (let k = 0; k < $children.length; ++k) {
            $children[k].style.height = b + 'px'
          }
        }
      } else {
        for (let l = 0; l < $children.length; ++l) {
          $children[l].style.height = 'auto'
        }
      }
    }
  }
  make() {
    const self = this
    let resizeTimer

    this.match()

    window.addEventListener('load', () => {
      self.match()
    })

    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        self.match()
      }, 250)
    })
  }
}

export default Regular
