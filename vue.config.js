module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://blog.xiaoluoa.top:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^api': '/api'
                }
            }
        }
    }
}
