/* 
    创建一个Person类，其包含公有属性name和私有属性age
    以及公有方法 setAge;创建一个Teacher类，使其继承Person,
    并包含私有属性 studentCount 和私有方法setStudentCount
*/
function Person(name, age) {
    this.name = name
    this.setAge(age)
}
Person.prototype.setAge = (function() {
    let age
    return function(new_age) {
        age = new_age
    }
})()

function Teacher(name, age, studentCount) {
    Person.apply(this, [name, age])

    function setStudentCount(new_student_count) {
        studentCount = new_student_count
    }
}

Teacher.prototype = Object.create(Person.prototype)
Teacher.prototype.constructor = Teacher


// 原生js实现tab切换
/*
    <div>
        <nav>
            <div index = '0'>one</div>
            <div index = '1'>two</div>
        </nav>
        <ul class = 'ul'>
            <li class = 'one'>one</li>
            <li class = 'two'></li>
        </ul>
    </div>
    <script>
        let nav = document.getElementByTagName('nav')[0]
        nav.addEventListener('click',function(e){
            let index = e.target.getAttribute('index')
            let ul = document.getElementByClassName('ul')[0]
            for(let i  = 0;i < ul.children.length;i++){
                ul.children[i].style.display = 'none'
            }
            ul.children[index] = 'block'
        })
    </script>    
*/
//三栏布局(mid在文档流最前面)
/*
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <title>Document</title>
</head>
<body>
 <div class="contaner">
  <div class="mid"></div>
  <div class="left"></div>
  <div class="right"></div>
 </div>
 <style>
  .contaner{
   position: relative;
  }
  .contaner div{
   height: 600px;
  }
  .left,.right{
   width: 300px;
   background-color: green;
  }
  .left{
   position: absolute;
   left: 0px;
   top: 0px;
  }
  .right{
   position: absolute;
   right: 0px;
   top: 0px;
  }
  .mid{
   padding: 0 300px;
   background-color: red;
  }
 </style>
</body>
</html>
 */