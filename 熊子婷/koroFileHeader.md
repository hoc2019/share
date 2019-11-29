[参考文档](https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE)
#### 一. 介绍
> -  vscode扩展插件
> - 在文件头中添加注释
> - 支持用户自定义文件注释模板对象
> - 保存文件的时候自动更新编辑时间

#### 二. 安装
在 Vscode 扩展商店中搜索koroFileHeader,点击安装即可。

#### 三. 使用
1. 文件头部注释：
- **Windows:**  `ctrl + alt + i`
- **Mac:**  `ctrl + cmd + i`
2. 函数注释：
- **Windows:**  `ctrl + alt + t`
- **Mac:**  `ctrl + cmd + t`

#### 四. 配置

##### 1. 注释模板的配置
- 默认配置：
在用户首选项中搜索fileheader，默认配置为：
```
"fileheader.customMade": {}, // 文件头注释
"fileheader.cursorMode": {}, // 函数头注释
```
- 自定义模板：
> 在用户设置中，搜索fileheader，修改配置，重启编辑器生效   

例1：

```
// 头部注释
  "fileheader.customMade": {
    "Author": "xzt",
    "Date": "",
    "LastEditors": "",
    "LastEditTime": "",
    "Description": "",
    "FilePath": ""
  },
```
ctrl+alt+i 生成结果：
```
/*
 * @Author: xzt
 * @Date: 2019-11-18 14:03:05
 * @LastEditors:
 * @LastEditTime: 2019-11-18 15:40:28
 * @Description:
 * @FilePath: \web-ac-distribution\src\components\StaticDescription\index.js
 */
```
例2：
```
  // 函数注释
  "fileheader.cursorMode": {
    "name": "xzt",
    "description": "",
    "param": "",
    "return": ""
  },
```
ctrl+alt+t 生成结果：
```
/**
 * @name: xzt
 * @description: 
 * @param {type} 
 * @return: 
 */
```
- 自动更新最后编辑时间、编辑人：   
> 要开启这个功能，需要在首选项设置中填写对应的属性，不填写对应属性即关闭对应功能
```
  "fileheader.customMade": {
  ...
    "LastEditors": "xzt",
    "LastEditTime": ""
    ...
  },
```

##### 2. 插件配置
> 参考模板设置的方式，找到配置项"fileheader.configObj"，修改这个对象即可。

- autoAdd：自动添加文件头部注释
```
"fileheader.configObj": {
  "autoAdd": true, // 默认开启
}
```

- autoAlready：只让支持的语言，自动添加头部注释
> 将autoAlready关闭，即给所有文件自动添加头部注释。
```
"autoAdd": true, // 自动添加头部注释开启才能自动添加
"autoAlready": true, // 默认开启
```
- prohibitAutoAdd：自动添加头部注释黑名单
> 插件黑名单的参数接收的是文件后缀，当文件后缀匹配跟黑名单数组内的元素匹配时，该文件不会自动添加头部注释。
```
"prohibitAutoAdd": [ "json", "md" ] // 禁止.json .md文件，自动添加头部注释
```

- FilePath：文件相对于项目的路径
> 1. 如果想给字段换一个名字，可以在specialOptions中修改它。   
> 2. 字段的值为：生成头部注释时，文件相对于当前VSCode窗口打开的文件夹的路径
> 3. 将FilePath设为no item name可以去掉项目名称。
> 4. 该配置的作用在于：项目的文件夹层级较为复杂或者项目中存在大量相同的文件名。

- Date 字段时间选项：   
当前时间/创建文件时间：
```
"createFileTime": true, // 设为false更改为当前生成注释的时间
```
头部注释：
> createFileTime默认为此文件的创建时间，将该字段设为flase即可改为当前注释的插入时间。       

函数注释：
> 该字段会生成函数注释插入的时间。

##### END：
```
  "fileheader.configObj": {
    "createFileTime": true, // 当前时间/创建文件时间,设为false更改为当前生成注释的时间
    "language": {
        "java": {
            "head": "/$$",
            "middle": " $ @",
            "end": " $/"
        },
        // 针对有特殊要求的文件如：test.blade.php
        "blade.php":{
          "head": "<!--",
          "middle": " * @",
          "end": "-->",
        },
      "languagetest": {
        "head": "/$$",
        "middle": " $ @",
        "end": " $/"
      }
    }, // 自定义语言注释符号(可选项)
    "autoAdd": true, // 自动添加文件头部注释
    "autoAlready": true, // 只让支持的语言，自动添加头部注释
    "prohibitAutoAdd": [
      "json",
      "md"
    ], // 禁止.json .md文件，自动添加头部注释
    "annotationStr": {
      "head": "/*",
      "middle": " * @",
      "end": " */",
      "use": false
    }, // 默认注释形式：
    "headInsertLine": {
      "php": 2 // php后缀的文件，在第二行插入文件头部注释
    }, // 头部注释第几行插入
    "beforeAnnotation": {}, // 头部注释前面插入内容
    "afterAnnotation": {}, // 头部注释后面插入内容，需要特殊定制的文件后缀
    "specialOptions": {}, // 特殊字段允许自定义
    "switch": {
      "newlineAddAnnotation": true
    }, // 遇到\r\n、\n、\r换行情况时，自动在下一行开头添加应该有的注释标识符, 为避免出现问题，插件提供了一个开关来关闭它
    "moveCursor": true, // 移动光标到Description :所在行
    "dateFormat": "YYYY-MM-DD HH:mm:ss",
    "atSymbol": "#", // 所有文件的@改为#,默认为@，此为示例。
    "atSymbolObj": {
      "js": "", // .js文件 去掉@
      "java": "#" // .java文件 @改为#
    },
    "colon": " ", // 所有注释的冒号改为一个空格，默认为": "
    "colonObj": {
      "js": " ", // .js文件 去掉: 留一个空格
      "java": "$" // .java文件 ": "改为$
    },
    "showErrorMessage": false // 默认不显示错误通知 用于debugger
  },
```