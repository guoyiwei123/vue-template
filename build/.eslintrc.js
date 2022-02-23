module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"es6": true,
		"node": true
	},
	"extends": [
        "plugin:vue/base",
        'plugin:vue/vue3-recommended',
    ],
	"parserOptions": {
        "parser": "babel-eslint",
		"ecmaVersion": 12,
		"sourceType": "module"
    },
    "parser": "vue-eslint-parser",
	"plugins": [],
	"rules": {
		"no-console": 1,  // 禁止打印信息
		"no-duplicate-imports": 2,   // 禁止模块重复导入
        "no-debugger": 2,  // 禁止debugger
        "no-await-in-loop": 2,  // 禁止在循环中出现await
        "no-dupe-args": 2, // 禁止function 定义中出现重名参数
        "no-extra-parens": 2, // 禁止不必要的括号
        "no-extra-semi": 2, // 禁止不必要的分号
        "no-func-assign": 2, // 禁止对function 声明重新赋值
        "default-case": 2, // 要求 switch 语句中有 default 分支
        "no-empty-function": 2, // 禁止出现空函数
        "no-eval": 2, // 禁用 eval()
        "no-fallthrough": 2, // 禁止 case 语句落空
        "no-global-assign": 2, // 禁止对原生对象或只读的全局对象进行赋值
        "no-new-wrappers": 2, // 禁止对 String，Number 和 Boolean 使用 new 操作符
        "no-return-await": 2, // 禁用不必要的 return await
        "no-self-assign": 2, // 禁止自我赋值
        "no-self-compare": 2, // 禁止自身比较
        "no-sequences": 2, // 禁用逗号操作符
        "no-mixed-spaces-and-tabs": [2, "smart-tabs"],
        "switch-colon-spacing": [2, {"after": false, "before": true}], // 强制在 switch 的冒号左右有空格
        "quotes": [2, "double"],  // 强制使用一致的反勾号、双引号或单引号
        "no-redeclare": 2, // 禁用多次声明同一变量 
        "no-useless-return": 2,  // 禁止多余的 return 语句
        "semi": [2, "always"],  // 要求或禁止使用分号代替 ASI (semi)
        "vue/html-indent": [2, "tab"], // 设置html缩进
        "vue/no-unused-components": 1, // 组件没有使用时给与警告
	},
}
