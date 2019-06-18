module.exports = {
    configureWebpack: {
        devServer: {
            before(app) {//中间件
                app.get('/api/goods', function (req, res) {
                    res.json({
                        code: 0,
                        list: [{
                            id: 1,
                            text: 'Web全栈架构师',
                            price: 199
                        },
                            {
                                id: 2,
                                text: 'Python全栈架构师',
                                price: 199
                            }]
                    })
                })
            }
        }
    }
}
