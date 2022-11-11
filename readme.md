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