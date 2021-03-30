/**
 * 编写一个异步任务调度器
 */
class Scheduler {

    list = []; //用来承载还未执行的异步

    count = 0; //用来计数

    constructor(num) {
        this.num = num; //允许同时运行的异步函数的最大个数
    }

    async add(fn) {

        this.count >= this.num ? await new Promise((resolve) => { this.list.push(resolve) }) : "";

        this.count++;

        const result = await fn();

        this.count--;

        if (this.list.length > 0) {
            this.list.shift()();
        }

        return result;

    }

}

module.exports = Scheduler