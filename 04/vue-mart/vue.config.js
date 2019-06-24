module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
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
        app.get('/api/login', function (req, res) {
          const {username,password}=req.query;
          if(username==='jerry'&&password==='123'){
            res.json({
              code:0,
              token:'jilei'
            });
          }else{
            res.json({
              code:1,
              message:'用户名或密码错误'
            })
          }

        })
        app.get('/api/logout',function (req,res) {
          res.json({
            code:-1
          })
        })
      }
    }
  }
}
