//问题1：
for (var i = 0; i < 4; i++) {
    setTimeout(function() {
        console.log(i);
    }, 300);
}
//请问打印结果是？ 4444
// 问题2：
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。
// 求该青蛙跳上一个n级的台阶总共有多少种跳法
function fn(n) {
    if (n === 1)
        return 1
    if (n === 2)
        return 2
    return fn(n - 1) + fn(n - 2)
}
console.log(fn(3))
console.log(fn(5))
    //问题3：
function test(a, b) {
    console.log(b)
    return {
        test: function(c) {
            return test(c, a);
        }
    };
}
var retA = test(0);
retA.test(2);
retA.test(4);
retA.test(8);
var retB = test(0).test(2).test(4).test(8);
var retC = test('good').test('bad');
retC.test('good');
retC.test('bad');

//请问打印结果是？undefined