# 第一个版本

## 在JSX中嵌入表达式
- 将表达式作为内容的一部分
  - null、undefined、false不会显示
  - 普通对象不能作为子元素
- 将表达式作为元素属性
- 属性使用小驼峰命名
- 防止注入攻击
  - 自动编码
  - 

## 元素的不可变性
- 虽然jsx元素是一个对象，但其对象中的所有属性都是只读的
- 如果确实需要修改元素的属性，则需要重新创建一个新的jsx元素 

## 深入人物setState
- setState对状态的改变，可能是异步的  
  > 如果改变状态的代码是处于某个html事件中，那么是异步的，否则是同步


# 属性默认值 和 类型检查

## 属性默认值

通过一个静态属性```defaultProps```告知react属性默认值

## 属性类型检查

使用库：```prop-types```

对组件使用静态属性```propTypes```告知react如何检查属性

```js

PropTypes.any：//任意类型
PropTypes.array：//数组类型
PropTypes.bool：//布尔类型
PropTypes.func：//函数类型
PropTypes.number：//数字类型
PropTypes.object：//对象类型
PropTypes.string：//字符串类型
PropTypes.symbol：//符号类型

PropTypes.node：//任何可以被渲染的内容，字符串、数字、React元素
PropTypes.element：//react元素
PropTypes.elementType：//react元素类型
PropTypes.instanceOf(构造函数)：//必须是指定构造函数的实例
PropTypes.oneOf([xxx, xxx])：//枚举
PropTypes.oneOfType([xxx, xxx]);  //属性类型必须是数组中的其中一个
PropTypes.arrayOf(PropTypes.XXX)：//必须是某一类型组成的数组
PropTypes.objectOf(PropTypes.XXX)：//对象由某一类型的值组成
PropTypes.shape(对象): //属性必须是对象，并且满足指定的对象要求
PropTypes.exact({...})：//对象必须精确匹配传递的数据

//自定义属性检查，如果有错误，返回错误对象即可
属性: function(props, propName, componentName) {
   //...
}
```

# HOC高阶组件
> HOC高阶组件，以组件作为参数，并返回一个组件
> HOF高阶函数，以函数作为参数，并返回一个函数

> 通常，可以利用HOC实现横切关注点
  - 20个组件，每个组件在创建组件和销毁组件时，需要作日志记录，提取共同点
  - 20个组件，他们需要显示一些内容，得到的数据结构完全一致
**注意**
1. 不要在render中使用高阶组件 放在render函数中每次都会创建一个新的组件
2. 不要在高阶组件内部更改传入的组件

# 渲染原理
> React元素：React element，通过React.createElment创建，

# 首次渲染
- 通过参数的值创建节点
- 根据不同节点，做不同事情
  - 文本节点，
  - 空节点

# HOOK简介
- HOOK是react16.8.0之后出现的
- 组件：无状态组件(函数组件),类组件
类组件中麻烦：
1. this指向问题
2. 繁琐的生命周期

- hook用于增强函数组件功能

# state hook
- useState是在函数组件中使用的函数，用于函数组件中使用状态
- 一个函数组件中可以有多个状态，这个做法非常有利于横向切分关注点

# state hook原理
1. 当运行一个函数组件时，

# effect hook
- effect hook：用于函数组件中处理副作用
- 副作用
  1. ajax请求
  2. 计时器
  3. 其他异步操作
  4. 更改真实DOM对象
  5. 会对外部产生影响的操作
1. 副作用函数的运行时间点，是在页面真实的UI渲染完成之后，因此它的执行是异步的，并且不会阻塞浏览器
  1. componentDidMount和componentDidUpdate，更改了真实dom，但是用户还没有看到UI的更新
  2. useeEffect中的副作用函数，更改了真实dom，并且用户已经看到了UI更新，异步
2. 每个函数中可以多次使用effect函数 
3. useEffect中的副作用函数可以用有返回值，可以有返回值，且必须是一个函数，该函数叫做清理函数
  1. 该函数运行时间点，在每次运行副作用函数之前
  2. 首次渲染组件不会运行
  3. 组件被销毁时一定会运行


# 自定义hook
- 定义：将一些常用的、跨越多个组件的hook功能，抽离出去成为一个函数，该函数即为自定义hook
- 自定义hook，由于其内部需要使用hook功能，所以也要按照hook的规则实现


# reducer hook
- flux: facebook的一个数据流框架，单向数据流，数据存储在数据仓库中

# callback hook
- 用于得到一个固定引用值的函数，通常用它进行性能优化
- useCallback


# 路由的两种模式
- 路由：根据不同的页面地址，展示不同的组件
- history路由模式
- hash路由模式

# 路由组件
## router组件
- 不做任何显示，仅提供路由模式配置，另外，该组件会产生一个上下文，上下文会提供一些实用的对象和方法，供其他组件使用
1. HashRouter:实用hash模式匹配
2. BrowserRouter:实用browser history匹配
- 通常情况下，router组件只有一个，该组件包裹整个页面

## route组件
1. path匹配的路径 默认情况下不区分大小写 
  1. sensitive属性设置为true则区分大小写
  2. 默认情况下只匹配初始目录，如果要精确匹配，则要加exact属性
2. component匹配的组件

# redux中间件
> 中间件：类似于插件，可以在不影响原本功能，并且不改动原本代码的基础上，对其功能进行增强
> 在redux中，中间件主要用于增强dispatch函数
> redux中间件书写 中间件本身是一个函数，该函数接受一个store参数，表示创建的仓库，该仓库并非一个完整的仓库对象，仅包含getState、dispatch。该函数的运行时间是在仓库运行之后调用