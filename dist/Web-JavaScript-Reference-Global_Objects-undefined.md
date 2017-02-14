## 概述

`undefined`有多重角色,通常情况下,我们所说的`undefined`都指的是全局对象的一个属性`"undefined"`.

## 语法

    undefined 

## 描述

`在JavaScript中,undefined这个词有多重含义.首字母大写的Undefined表示的是一种数据类型,小写的undefined表示的是属于这种数据类型的唯一的一个值.但这两种undefined都只能存在于文档或规范中,不能存在于JavaScript代码中.在JavaScript代码中,你看到的undefined最有可能是全局对象的一个属性`<span style="font-style: italic;">,</span>该属性的初始值是就是前面所说的原始值`undefined`,还有种情况就是,这个`undefined`是个局部变量,就像其他普通变量一样,没有任何特殊性,它的值不一定是`undefined`,但通常情况下都是的.下面我们所说的`undefined`,`都指的是window.undefined`这个属性.

在ES3中(Firefox4之前),`window.undefined`就是一个普通的属性,你完全可以把它的值改变成为任意的真值,但在ES5中((Firefox4之后),`window.undefined`成了一个不可写,不可配置的数据属性,它的值永远是`undefined`.

一个未初始化的变量的值为`undefined`,一个没有传入实参的形参变量的值为`undefined`,如果一个函数什么都不返回,则该函数默认返回`undefined`.

你可以使用严格相等运算符来判断一个值是否是`undefined`:

<pre class="brush: js">var x;
if (x === undefined) {
   // 执行到这里
}
else {
   // 不会执行到这里
}
</pre>

<div class="note">注: 这里必须使用严格相等运算符===,而不能使用普通的相等运算符==,因为`x == undefined`成立还可能是因为`x为``null`,`在JavaScript中null`== `undefined`是返回true的.</div>

另外,还可以使用`[typeof](/zh-CN/docs/JavaScript/Reference/Operators/typeof "JavaScript/Reference/Operators/Special_Operators/typeof_Operator")`来判断:

<pre class="brush: js">var x;
if (typeof x === 'undefined') {
   // 执行到这里
}
</pre>

有时必须使用`[typeof](/zh-CN/docs/JavaScript/Reference/Operators/typeof "JavaScript/Reference/Operators/Special_Operators/typeof_Operator")`的原因是,如果一个变量根本没有被声明,只有使用`typeof`判断才不会报错,用相等运算符判断会抛出异常.

<pre class="brush: js">// x没有被声明过
if (typeof x === 'undefined') { // 不会报错
   // these statements execute
}

if(x === undefined){ // 抛出ReferenceError异常

}
</pre>

不过如果要检测的变量是个全局变量,可以不使用`typeof`.可以通过检测全局对象的同名属性来代替:

<pre class="brush: js">// x可能没有被声明过,但如果已经声明了的话,x是个全局变量
if (window.x === undefined) { // 即使window.x不存在,也不会报错
   // 可能会执行到这里
}

if(x === undefined){ // 如果window.x不存在,则会抛出ReferenceError异常

}
</pre>