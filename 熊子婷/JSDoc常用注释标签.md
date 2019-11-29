[JSDoc文档参考链接](http://yuri4ever.github.io/jsdoc/)

#### 什么是JSDoc
JSDoc是一个根据JavaScript文件中的注释信息，生成JavaScript应用程序或库、模板的API文档的工具。  
你可以使用它记录如：命名空间、类、方法、方法参数等

> 注：JSDoc并不会对源码产生任何影响，因为所有的内容都是写在注释里面的。

#### 使用JSDoc
JSDoc本质是代码注释，所以使用起来非常方便，但是他有一定的格式和规则，只要了解这些，那么后面的事情，比如生产文档，生成智能提示都可以通过工具来完成。

#### JSDoc注释
JSDoc注释一般应该放置在方法或函数声明之前，它必须以`/ **`开始，以便由JSDoc解析器识别。其他任何以`/*`，`/***`或者超过3个星号的注释，都将被JSDoc解析器忽略。如下：
```
/**
 * Book类，代表一个书本.
 * @constructor
 * @param {string} title - 书本的标题.
 * @param {string} author - 书本的作者.
 */
function Book(title, author) {
    this.title=title;
    this.author=author;
}
Book.prototype={
    /**
     * 获取书本的标题
     * @returns {string|*}
     */
    getTitle:function(){
        return this.title;
    },
    /**
     * 设置书本的页数
     * @param {number} pageNum 页数
     */
    setPageNum:function(pageNum){
        this.pageNum=pageNum;
    }
}; 
```
#### JSDoc标签
在JSDoc 注释有一套标准的注释标签，一般以@开头。常用标签如下：  

（1） @param 标识函数参数类型及描述
> @param {<type>} name - some description

```
/**
 * ...
 * @param {string} a - 参数a
 * ...
 */
 function test(a){}
```

> - 任意类型

```
/**
 * ...
 * @param {*} somebody - Whatever you want.
 * ...
 */
 function sayHello(somebody) {
    console.log('Hello ' + JSON.stringify(somebody));
}
```

> - 一种或其他类型

```
/**
 * @param {(string|string[])} [somebody=John Doe] - Somebody's name, or an array of names.
 */
function sayHello(somebody) {
    if (!somebody) {
        somebody = 'John Doe';
    } else if (Array.isArray(somebody)) {
        somebody = somebody.join(', ');
    }
    alert('Hello ' + somebody);
}
```

> - 非必传字段需给参数名加上'[]'

```
/**
 * ...
 * @param {string} [j] - 参数j是一个可选参数
 * ...
 */
```

> - 参数如有默认值需用'='表示

```
/**
 * ...
 * @param {number} b=1 - 参数b默认值为1
 * ...
 */
```

如果你的可选参数在参数位已经有了默认值的处理，那么不再需要额外的添加[]来表示了，vscode会帮助你标记。
```
// 文档中的默认值写法
/**
 * ...
 * @param {number} [param=123] - 可选参数param默认值为123
 * ...
 */
 function test(param = 123) { }
 
// 实际上使用vscode以后可以简化为
/**
 * ...
 * @param param - 可选参数param默认值为123
 * ...
 */
  function test(param = 123) { }
```
两者效果是一样的，并且由于我们手动制定了一个基础类型的值，那么我们连类型的指定都可以省略了，简单的定义一下参数的描述即可。


> - 如果参数是object，可继续用@param对其属性进行详细说明

```
/**
 * ...
 * @param {object} d - 参数d为一个对象
 * @param {string} d.e - 参数d的e属性
 * @param {string} d.f - 参数d的f属性
 * @param {object[]} g - 参数g为一个对象数组
 * @param {string} g[].h - 参数g数组中一项的h属性
 * @param {string} g[].i - 参数g数组中一项的i属性
 * ...
 */
```

（2） @returns 表示函数返回值类型及描述  
该标记就是用来指定函数的返回值，用法与`@param`类似，并且基本这两个都会同时出现，与`@param`的区别在于，因为`@return`只有一个，所以不会像前者一样还需要指定参数名。
> - @returns {<type>} some description

```
/**
 * ...
 * @return {number} 返回值
 * ...
 */
```

（3） @type 标识变量类型  
```
 /**
 * @var {configParam}
 * @type {object}
 * @desc configParam是对象类型
 * @property {boolean} debug - 属性debug
 * @property {string} appId - 属性appId
 * @property {string} timestamp - 属性timestamp
 * @property {string} nonceStr - 属性nonceStr
 */
var configParam = {
    debug: false,
    appId: data.data.appId,
    timestamp: data.data.timestamp,
    nonceStr: data.data.nonceStr,
    signature: data.data.signature,
    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
};
```
> @type {typeName}
> - '*'表示任意类型

```
/**
 * @type {number}
 */
var foo1;

/**
 * @type {*}
 * @desc 任何类型
 */
var foo2;

/**
 * @type {object}
 * @desc 对象
 * @property {string} a - 属性a
 */
var foo7 = {
    a: 'a'
};
```
> - '?'表示可以为null

```
/**
 * @type {?string}
 * @desc string或者null
 */
var foo3;
```

> - '!'表示不能为null

```
/**
 * @type {!string}
 * @desc string且不能为null
 */
var foo4;
```

> - 数组用'[]'表示

```
/**
 * @type {boolean[]}
 * @desc boelean数组
 */
var foo5;

```

> - 类型有多种情况需用'|'进行分割，并加上'()'

```
/**
 * @type {(number|string)}
 * @desc number或者string
 */
var foo6;
```

> - 可以使用@callback或@typedef定义的类型

（4） @var 标识一个变量
> - `@var [<type>][<name>]`

（5） @property 描述对象的属性
> - `@property [<type>] [<name>] [some description]`

```
/**
 * @var {object}
 * @property {string} a - 属性a
 * @property {string} b - 属性b
 */
var foo = {
    a: 'a',
    b: 'b'
}
```
（6） @func 标识一个函数
> - `@func [<FunctionName>]`

```
/**
 * @func
 */
function foo() {
    ...
}
```

（7） @desc 对某个部分的详细描述和说明
> - `@desc <some description>`

（8） @class 标识一个函数为构造函数，可以用 new 的方式实例化
> - `@class [<type> <name>]`

（9） @classdesc 与 @class 结合使用
> - `@classdesc <some description>  `   

> 注：
与 @desc 不同，@classdesc 是对类的描述，而 @desc 是对类的构造函数的描述

（10） @public 标识类的属性或方法的访问范围是public
> - `@public`

（11） @private 标识类的属性或方法的访问范围是private
> - `@private`

（12） @example 使用示例
> - `@example`

```
/**
 * @func
 * @desc 计算两个数值的和
 * @param {number} a - 加数a
 * @param {number} b - 加数b
 * @returns {number} 返回a和b的和
 * @example
 * add(1, 2);    // 返回3
 */
function add(a, b) {
    return a + b;
}
```
