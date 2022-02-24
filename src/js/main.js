const wrapper = document.querySelector('.wrapper')
const blocks = wrapper.querySelectorAll('.block')

class Block {
  constructor() {
    this.INIT_ROTATE = 0
    this.translateX = this.INIT_ROTATE
    this.startTranslateX  = 0
    this.startTouches = 0
  }
  
  touchStart = (item, event) => {
    this.startTouches = event.changedTouches[0]
    this.startTranslateX = this.translateX
  }

  touchMove = (block, event) => {
    const moveTouches = event.changedTouches[0]
    const differenceStartMove = this.startTouches.pageY - moveTouches.pageY

    this.translateX = this.startTranslateX + differenceStartMove

    if (this.translateX <= -200) {
      this.translateX = -200
      block.style.transform = `rotate(${ this.translateX }deg)`
      return
    }
    if (this.translateX >= 200) {
      this.translateX = 200
      block.style.transform = `rotate(${ this.translateX }deg)`
      return
    }

    block.style.transform = `rotate(${ this.translateX }deg)`
  }
}

const generateBlocks = () => {
  blocks.forEach(block => {
    const blockComponent = new Block()
    block.addEventListener('touchstart', blockComponent.touchStart.bind(this, block))
    block.addEventListener('touchmove', blockComponent.touchMove.bind(this, block))
  })
}

generateBlocks()
