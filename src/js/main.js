const wrapper = document.querySelector('.wrapper')
const blocks = wrapper.querySelectorAll('.block')

class Block {
  constructor() {
    this.INIT_ROTATE_X = 0
    this.INIT_ROTATE_Y = 0
    this.rotateX = this.INIT_ROTATE_X
    this.rotateY = this.INIT_ROTATE_Y
    this.startRotateX  = 0
    this.startRotateY  = 0
    this.startTouches = 0
  }
  
  touchStart = (item, event) => {
    this.startTouches = event.changedTouches[0]
    this.startRotateX = this.rotateX
    this.startRotateY = this.rotateY
  }

  touchMove = (block, event) => {
    const moveTouches = event.changedTouches[0]
    const differenceStartMoveX = this.startTouches.pageX - moveTouches.pageX
    const differenceStartMoveY = this.startTouches.pageY - moveTouches.pageY

    // this.rotateX = this.startRotateX + differenceStartMoveX
    this.rotateY = this.startRotateY + differenceStartMoveY

    block.style.transform = `rotate(${ this.rotateY }deg)`
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
