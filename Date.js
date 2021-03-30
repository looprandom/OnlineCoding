let date = new Date()
console.log(date) //'2021-03-12T11:18:40.539Z'
console.log(date.getTime()) //'1615547920539'
console.log(date.getFullYear()) //2021
console.log(date.getMonth()) //2 (1月是0)
console.log(date.getDate()) //12
console.log(date.getDay()) //5 (显示星期几)

console(new Date().format("yyyy年MM月dd日"))
console(new Date().format("MM/dd/yyyy"))
console(new Date().format("yyyyMMdd"))
console(new Date().format("yyyy-MM-dd hh:mm:ss"))