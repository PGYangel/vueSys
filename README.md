# vueSys
vuecli+element-ui的系统基础框架

# 安装vue-cli步骤
1、安装webpack：npm install webpack -g

2、安装 webpack-cli：npm install webpack webpack-cli -g

3、安装vue-cli：npm install --global vue-cli

# 构建项目
1、vue init webpack name  (注意：name是自定义命名)

2、输入命令后，会跳出几个选项让你回答：
Project name (baoge)： -----项目名称，直接回车，按照括号中默认名字（注意这里的名字不能有大写字母，如果有会报错Sorry, name can no longer contain capital letters），阮一峰老师博客为什么文件名要小写 ，可以参考一下。

Project description (A Vue.js project)： ----项目描述，也可直接点击回车，使用默认名字

Author ()： ----作者，输入你的大名

接下来会让用户选择：

Runtime + Compiler: recommended for most users 运行加编译，既然已经说了推荐，就选它了

Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specificHTML) are ONLY allowed in .vue files - render functions are required elsewhere 仅运行时，已经有推荐了就选择第一个了

Install vue-router? (Y/n) 是否安装vue-router，这是官方的路由，大多数情况下都使用，这里就输入“y”后回车即可。

Use ESLint to lint your code? (Y/n) 是否使用ESLint管理代码，ESLint是个代码风格管理工具，是用来统一代码风格的，一般项目中都会使用。

接下来也是选择题Pick an ESLint preset (Use arrow keys) 选择一个ESLint预设，编写vue项目时的代码风格，直接y回车

Setup unit tests with Karma + Mocha? (Y/n) 是否安装单元测试

Setup e2e tests with Nightwatch(Y/n)? 是否安装e2e测试

3、安装依赖：npm install

( 如果安装速度太慢。可以安装淘宝镜像，打开命令行工具，输入：

 npm install -g cnpm --registry=https://registry.npm.taobao.org

 然后使用cnpm来安装 )

没有安装element-ui的项目输入npm install element-ui 进行安装

4、如果要打包后本地读取资源，修改config/index.js中build的assetsPublicPath值为：'./'

5、项目全局引用element-ui：

在main.js文件引用element-ui，添加下面引用代码，

import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
