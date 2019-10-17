var parent=document.getElementById('content-items')
// console.log(parent)
var send = document.getElementById('send')
send.addEventListener('click',function(){
    var html = $('<li class="content-item">'+
                 '<div class="pic">'+
                 '<img src="https://img3.doubanio.com/view/photo/sqxs/public/p2565261484.webp" alt="">'+
                 '</div>'+
                 '<div class="message">'+
                 '<p class="name">江西移动10086</p>'+
                 '<p class="detail">和大家开始发货时间点开会方式</p>'+
                 '</div>'+
                 '</li>')
    html.appendTo(parent)             


//  console.log(666)
// var li = document.createElement('li')
// li.setAttribute('class','content-item')
// console.log(li)

// var divPic = document.createElement('div')
// divPic.setAttribute('class','pic')
// li.appendChild(divPic)

// var img=document.createElement('img')
// img.setAttribute('src','https://img3.doubanio.com/view/photo/sqxs/public/p2565261484.webp')
// divPic.appendChild(img)

// var message=document.createElement('div')
// message.setAttribute('class','message')
// li.appendChild(message)

// var p1=document.createElement('p')
// p1.setAttribute('class','name')
// var p1Text=document.createTextNode('蜗牛')
// p1.appendChild(p1Text)
// message.appendChild(p1)

// var p2=document.createElement('p')
// p2.setAttribute('class','detail')
// var p2Text=document.createTextNode('你在干嘛')
// p2.appendChild(p2Text)
// message.appendChild(p2)

// console.log(li)
// parent.appendChild(li)
})