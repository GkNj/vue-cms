module.exports = {
    presets: [
        '@vue/app'
    ],
    plugins: [
        ["@babel/plugin-transform-modules-commonjs", {"strictMode": false}]//取消严格模式
    ]
}
