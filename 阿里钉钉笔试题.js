//钉钉
/*
 问题1：编写一个javascript函数，对一个仅包含数字对多维数组进行处理，返回拍平的数组，比如[1,[2,[3,4]]]，返回[1,2,3,4]
*/

let func = function(nums) {
    if (!(nums instanceof Array)) return nums;
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] instanceof Array) {
            result.push(...callback(nums[i]));
        } else {
            result.push(nums[i]);
        }
    }

    function callback(nums) {
        let arr = [];
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] instanceof Array) {
                arr.push(...callback(nums[i]));
            } else {
                arr.push(nums[i]);
            }
        }
        return arr;
    }

    return result;
};
console.log(func([1, [2, [3, 4]]]));

Function.prototype.bind = function(context, ...args) {
    if (typeof this !== "function") {
        throw new Error("this must be a function");
    }
    var self = this
    var fbound = function() {
        self.apply(this instanceof self ? this : context, args.concat(Array.prototype.slice.call(arguments)));
    }
    if (this.prototype) {
        fbound.prototype = Object.create(this.prototype)
    }
    return fbound
}







/*
 问题2：请根据描述使用javascript实现函数 _bind 模拟原生 bind 方法，并通过测试用例：




function func(x){
    console.log(x, this.y)
}

//your code here

//测试用例
func._bind({y: 'foo'})() //undefined "foo"
func._bind()() //undefined undefined
func._bind({y: 'bar'}, 'foo')() //"foo" "bar"
*/

Function.prototype._bind = function(content, data) {

    console.log(content);
    return () => {
        // content._bind(data);
    };
}
func._bind({ y: 'foo' })() //undefined "foo"
func._bind()() //undefined undefined
func._bind({ y: 'bar' }, 'foo')() //"foo" "bar"