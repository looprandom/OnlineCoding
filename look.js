function fn(str1, str2) {
    // 长度不一样，前面补0
    if (str1.length > str2.length) {
        let len = str1.length - str2.length
        str2 = str2.split("")
        for (let i = 0; i < len; i++) {
            str2.splice(0, 0, 0)
        }
        str2 = str2.join("")
    } else {
        let len = str2.length - str1.length
        str1 = str1.split("")
        for (let i = 0; i < len; i++) {
            str1.splice(0, 0, 0)
        }
        str1 = str1.join("")
    }
    //调用add函数对两个长度相等(可能带前导0)的字符串表示的数字进行相加
    return add(str1, str2)
}
console.log(fn("12", "456"))

function add(a, b) {
    let t = 0
    let f = 0 //进位 初始化为0
    let sum = ""
        //从个位数开始相加
    for (let i = a.length - 1; i >= 0; i--) {
        t = parseInt(a[i]) + parseInt(b[i]) + f
            // 向下取整获取进位
        f = Math.floor(t / 10)
        sum = t % 10 + sum
    }
    //处理边界情况
    if (f == 1) {
        sum = "1" + sum
    }
    return sum
}

// {
/* <div id="square" draggable>
    </div>
    <div id="dragTarget"></div>
<style>
    #square{
        width: 200px;
        height: 200px;
        margin: 100px auto;
    }
</style> */
// } { /* <script> */ } //Html5方式 
// let square = document.getElementById('square')
// square.addEventListener('dragstart',function(e){
//     e.dataTransfer.setData('Text',e.target.id)
// },false)
// let dragTarget = document.getElementById('dragTarget')
// dragTarget.addEventListener('dragenter',function(e){
//     if(e.dataTransfer.getData('Text') =='square'){
//         //允许放置
//     }
//     e.preventDefault()
// },false)
// // 给用户反馈信息
// dragTarget.addEventListener('dragover',function(e){

// },false)
// //完成放置
// dragTarget.addEventListener('drag',function(){
//     e.preventDefault()
//     e.target.appendChild(square)
// })
// </script>