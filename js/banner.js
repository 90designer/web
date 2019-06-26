let slideWrap = document.getElementById('slide-wrap');
let slideContent = slideWrap.children[0]
let viewWidth = document.documentElement.clientWidth || document.body.clientWidth
let firstUl = slideWrap.getElementsByTagName('ul')[0]
let aItem = slideWrap.getElementsByTagName('ul')[1].children
let liItem = firstUl.children
let prev = slideWrap.getElementsByTagName('span')[0]
let next = slideWrap.getElementsByTagName('span')[1]
// 存储当前索引 
let index = 0
// 设置滑动对象的宽度
slideContent.style.width = viewWidth * liItem.length + 'px'
// 设置li对象的宽度
for(let i = 0; i < liItem.length; i++) {
    liItem[i].style.width = viewWidth + 'px'
}
//按钮高光切换
for(let i = 0; i < aItem.length; i++) {
    aItem[i].onclick = function(){
        for(let k = 0; k < aItem.length; k++) {
            aItem[k].className = ''
        }
        this.className = 'current'
        imgSlide(i)
        // 存储当前的索引
        index = i
    }
}
//图片滑动
function imgSlide(index){
    let left = index * viewWidth
    slideContent.style.left = -left + 'px'
}
// 箭头点击事件
prev.onclick = function(){
    index--
    if(index < 0) {
        index = liItem.length - 1
    }
    imgSlide(index)
}

// 箭头点击事件
next.onclick = function(){
    index++
    if(index == liItem.length) {
        index = 0
    }
    imgSlide(index)
}