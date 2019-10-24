const canvas = document.getElementById('screen')
const ctx = canvas.getContext('2d')
const width = 200
const height = 50

ctx.width = width + 'px'
ctx.height = height + 'px'

canvas.addEventListener('click', function() {
  ctx.clearRect(0, 0, width, height)
  drawLine()
  drawText()
})

drawLine()
drawText()

function drawLine() {
  for(let i = 0; i < 6; i ++) {
    let beginX = Math.random() * width
    let beginY = Math.random() * height
    let endX = Math.random() * width
    let endY = Math.random() * height
    ctx.beginPath()
    ctx.moveTo(beginX, beginY)
    ctx.lineTo(endX, endY)
    ctx.strokeStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
    ctx.stroke()
  }  
}

function drawText() {
  var souceText = ['A', 'B', 'C', 'D', 'E',
  'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O', 'P',
  'Q', 'R', 'S', 'T', 'U',
  'V', 'W', 'X', 'Y', 'Z']
  //随机选四个， 不重复
  let result = []
  for(i = 0; i < 4; i ++) {
    const idx = Math.floor(Math.random() * souceText.length)
    result.push(souceText[idx])
    //删除
    souceText.splice(idx, 1)
  }
  console.log('result', result)
  for(let i = 0; i < result.length; i ++) {
    ctx.font = '40px Helvetica'
    ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
    ctx.textBaseline = 'middle'  // top  bottom
    let preWidth = width / 4 - 10
    ctx.fillText(result[i], Math.random() * preWidth + i * preWidth, height / 2)
  }
}