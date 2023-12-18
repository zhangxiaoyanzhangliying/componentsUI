/*
 * @Author: v-zhang.xiaoyan@v-zhang.xiaoyan v-zhang.xiaoyan@hellogroup.com
 * @Date: 2023-12-16 21:40:02
 * @LastEditors: v-zhang.xiaoyan@v-zhang.xiaoyan v-zhang.xiaoyan@hellogroup.com
 * @LastEditTime: 2023-12-16 21:40:16
 * @FilePath: \components\.eslintrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
	root: true,
	env: {
		node: true，
		'vue/setup-compiler-macros': true
	},
	'extends': [
		'plugin:vue/essential',
		'eslint:recommended'
	],
	parserOptions: {
		parser: '@babel/eslint-parser',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		//在rules中添加自定义规则
		//关闭组件命名规则
		"vue/multi-word-component-names": "off",
	},
	overrides: [
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)'
			],
			env: {
				jest: true
			}
		}
	]
}
