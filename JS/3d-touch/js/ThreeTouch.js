const FRAME_WIDTH = 988 / 4,
    FRAME_HEIGHT = 1164 / 6,
    MASK_WIDTH = 146;  //阴影

//封装
class ThreeDTouch{
    //构造函数
    constructor(el, callback){
        this.el = el;
        this.callback = callback;
        this.bindEvents();  //调用对象上的bindEvents方法
    }
    bindEvents(){
        this.el.addEventListener('touchstart', this.touchDidStart)
        this.el.addEventListener('touchforcechange', this.touchForceDidchange)
    }
    touchDidStart(){

    }
    touchForceDidchange(event){
        document.getElementById('force_val').innerHTML = event.touches[0].force;
    }
}

let toucher =  new ThreeDTouch(document.getElementById('force_btn'), function(){

})
console.log(toucher);

