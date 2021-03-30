//通过express框架来实现服务端，使用node server.js 或 nodemon server.js来实现
const app = require('express')()

const cors = require('cors')
app.use(cors())

app.get('/tab1', (req, res) => {
    res.json('Tab 1 的结果')
})

app.get('/tab2', (req, res) => {
    //这里通过延时代码来模拟处理大数据量的场景
    setTimeout(() => {
        res.json('Tab 2 的结果')
    }, 3000)
})

app.listen(3000, () => {
    console.log('app start at 3000 port')
})