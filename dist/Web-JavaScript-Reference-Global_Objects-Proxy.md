<div>

<div>

<div style="background: #9CF49C;" class="overheadIndicator">

**该新特性属于 ECMAScript 2015（ES6）规范，在使用时请注意浏览器兼容性。**

</div>

</div>

</div>

## 简介

**Proxy **对象用来为基础操作（例如：属性查找、赋值、枚举、方法调用等）定义用户自定义行为。

## 术语

<dl>

<dt>[handler](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler)</dt>

<dd>包含 traps 的对象。</dd>

<dt>traps</dt>

<dd>提供访问属性的途径，与操作系统中的 traps 定义相似。</dd>

<dt>target</dt>

<dd>被代理虚拟化的对象，这个对象常常用作代理的存储后端。关于对象不可拓展性和不可修改属性的不变量会被代理拦截。</dd>

</dl>

## 语法

<pre class="syntaxbox">var p = new Proxy(target, handler);
</pre>

### 参数

<dl>

<dt>`target`</dt>

<dd>目标对象，可以是任意类型的对象，比如数组，函数，甚至是另外一个代理对象。</dd>

<dt>`handler`</dt>

<dd>处理器对象，包含了一组代理方法，分别控制所生成代理对象的各种行为。</dd>

</dl>

## 方法

<dl>

<dt>[`Proxy.revocable()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/revocable "Proxy.revocable() 方法可以用来创建一个可撤销的代理对象。")</dt>

<dd>创建一个可撤销的代理对象。</dd>

</dl>

## handler 对象的方法

handler 是占位符对象，它包含代理的 traps。

## 示例

### 基础示例

在以下简单的例子中，当对象中不存在属性名时，缺省返回数为37。例子中使用了 [`get`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/get) 处理器（[`get`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/get) handler）。

<pre class="brush: js">var handler = {
    get: function(target, name){
        return name in target?
            target[name] :
            37;
    }
};

var p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // 1, undefined
console.log('c' in p, p.c); // false, 37
</pre>

### 无操作转发代理

在以下例子中，我们使用了一个原生 JavaScript 对象，代理会将所有应用到它的操作转发到这个对象上。

<pre class="brush: js">var target = {};
var p = new Proxy(target, {});

p.a = 37; // 被转发到代理的操作

console.log(target.a); // 37\. 操作已经被正确地转发
</pre>

### 验证

通过代理，你可以轻松地验证向一个对象的传值。以下例子使用了 [`set`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/set) 处理器（[`set`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/set) handler）。

<pre class="brush: js">let validator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer');
      }
      if (value > 200) {
        throw new RangeError('The age seems invalid');
      }
    }

    // The default behavior to store the value
    obj[prop] = value;
  }
};

let person = new Proxy({}, validator);

person.age = 100;
console.log(person.age); // 100
person.age = 'young'; // 抛出异常
person.age = 300; // 抛出异常
</pre>

### 扩展构造函数

方法代理可以轻松地通过一个新构造函数来扩展一个已有的构造函数。一下的例子中使用了 [`construct`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/construct) 处理器 （`[construct](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/construct) handler`）和 `[apply](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply) 处理器` （[`apply`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply) handler）。

<pre class="brush: js">function extend(sup,base) {
  var descriptor = Object.getOwnPropertyDescriptor(
    base.prototype,"constructor"
  );
  base.prototype = Object.create(sup.prototype);
  var handler = {
    construct: function(target, args) {
      var obj = Object.create(base.prototype);
      this.apply(target,obj,args);
      return obj;
    },
    apply: function(target, that, args) {
      sup.apply(that,args);
      base.apply(that,args);
    }
  };
  var proxy = new Proxy(base,handler);
  descriptor.value = proxy;
  Object.defineProperty(base.prototype, "constructor", descriptor);
  return proxy;
}

var Person = function(name){
  this.name = name
};

var Boy = extend(Person, function(name, age) {
  this.age = age;
});

Boy.prototype.sex = "M";

var Peter = new Boy("Peter", 13);
console.log(Peter.sex);  // "M"
console.log(Peter.name); // "Peter"
console.log(Peter.age);  // 13</pre>

### 操作 DOM 节点

有时你希望切换两个不同的元素的属性或类名。下面展示了如何使用 [`set`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/set) 处理器（[`set`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/set) handler）。

<pre class="brush: js">let view = new Proxy({
  selected: null
},
{
  set: function(obj, prop, newval) {
    let oldval = obj[prop];

    if (prop === 'selected') {
      if (oldval) {
        oldval.setAttribute('aria-selected', 'false');
      }
      if (newval) {
        newval.setAttribute('aria-selected', 'true');
      }
    }

    // The default behavior to store the value
    obj[prop] = newval;
  }
});

let i1 = view.selected = document.getElementById('item-1');
console.log(i1.getAttribute('aria-selected')); // 'true'

let i2 = view.selected = document.getElementById('item-2');
console.log(i1.getAttribute('aria-selected')); // 'false'
console.log(i2.getAttribute('aria-selected')); // 'true'
</pre>

### 值修正及附加属性

以下 products 代理会计算传值并根据需要转换为数组。这个代理对象同时支持一个叫做 `latestBrowser 的附加属性，这个属性可以同时作为 getter 和 setter。`

<pre class="brush: js">let products = new Proxy({
  browsers: ['Internet Explorer', 'Netscape']
},
{
  get: function(obj, prop) {
    // 附加属性
    if (prop === 'latestBrowser') {
      return obj.browsers[obj.browsers.length - 1];
    }

    // 缺省行为是返回属性值
    return obj[prop];
  },
  set: function(obj, prop, value) {
    // 附加属性
    if (prop === 'latestBrowser') {
      obj.browsers.push(value);
      return;
    }

    // 如果不是数组则进行转换
    if (typeof value === 'string') {
      value = [value];
    }

    // 缺省行为是保存属性值
    obj[prop] = value;
  }
});

console.log(products.browsers); // ['Internet Explorer', 'Netscape']
products.browsers = 'Firefox'; // 传入一个 string (错误地)
console.log(products.browsers); // ['Firefox'] <- 没问题, 得到的是一个 array

products.latestBrowser = 'Chrome';
console.log(products.browsers); // ['Firefox', 'Chrome']
console.log(products.latestBrowser); // 'Chrome'
</pre>

### 通过属性查找数组中的特定对象

以下代理为数组扩展了一些实用工具。可以看到，你可以灵活地“定义”属性，而不需要使用 `[Object.defineProperties](/zh-CN/docs/JavaScript/Reference/Global_Objects/Object/defineProperties) 方法。以下例子可以用于通过单元格来查找表格中的一行。在这种情况下，target 是 ``[table.rows](/zh-CN/docs/DOM/table.rows)。`

<pre class="brush: js">let products = new Proxy([
  { name: 'Firefox', type: 'browser' },
  { name: 'SeaMonkey', type: 'browser' },
  { name: 'Thunderbird', type: 'mailer' }
],
{
  get: function(obj, prop) {
    // 缺省行为是返回属性值， prop 通常是一个整数
    if (prop in obj) {
      return obj[prop];
    }

    // 获取 products 的 number; 它是 products.length 的别名
    if (prop === 'number') {
      return obj.length;
    }

    let result, types = {};

    for (let product of obj) {
      if (product.name === prop) {
        result = product;
      }
      if (types[product.type]) {
        types[product.type].push(product);
      } else {
        types[product.type] = [product];
      }
    }

    // 通过 name 获取 product
    if (result) {
      return result;
    }

    // 通过 type 获取 products
    if (prop in types) {
      return types[prop];
    }

    // 获取 product type
    if (prop === 'types') {
      return Object.keys(types);
    }

    return undefined;
  }
});

console.log(products[0]); // { name: 'Firefox', type: 'browser' }
console.log(products['Firefox']); // { name: 'Firefox', type: 'browser' }
console.log(products['Chrome']); // undefined
console.log(products.browser); // [{ name: 'Firefox', type: 'browser' }, { name: 'SeaMonkey', type: 'browser' }]
console.log(products.types); // ['browser', 'mailer']
console.log(products.number); // 3
</pre>

### 一个完整的 traps 列表示例

出于教学目的，这里为了创建一个完整的 traps 列表示例，我们将尝试代理化一个非原生对象，这特别适用于这类操作：由 [发布在 document.cookie页面上的“小型框架”](https://developer.mozilla.org/zh-CN/docs/DOM/document.cookie#A_little_framework.3A_a_complete_cookies_reader.2Fwriter_with_full_unicode_support "https://developer.mozilla.org/zh-CN/docs/DOM/document.cookie#A_little_framework.3A_a_complete_cookies_reader.2Fwriter_with_full_unicode_support")创建的 docCookies 全局对象。

<pre class="brush: js">/*
  var docCookies = ... get the "docCookies" object here:  
  https://developer.mozilla.org/zh-CN/docs/DOM/document.cookie#A_little_framework.3A_a_complete_cookies_reader.2Fwriter_with_full_unicode_support
*/

var docCookies = new Proxy(docCookies, {
  "get": function (oTarget, sKey) {
    return oTarget[sKey] || oTarget.getItem(sKey) || undefined;
  },
  "set": function (oTarget, sKey, vValue) {
    if (sKey in oTarget) { return false; }
    return oTarget.setItem(sKey, vValue);
  },
  "deleteProperty": function (oTarget, sKey) {
    if (sKey in oTarget) { return false; }
    return oTarget.removeItem(sKey);
  },
  "enumerate": function (oTarget, sKey) {
    return oTarget.keys();
  },
  "ownKeys": function (oTarget, sKey) {
    return oTarget.keys();
  },
  "has": function (oTarget, sKey) {
    return sKey in oTarget || oTarget.hasItem(sKey);
  },
  "defineProperty": function (oTarget, sKey, oDesc) {
    if (oDesc && "value" in oDesc) { oTarget.setItem(sKey, oDesc.value); }
    return oTarget;
  },
  "getOwnPropertyDescriptor": function (oTarget, sKey) {
    var vValue = oTarget.getItem(sKey);
    return vValue ? {
      "value": vValue,
      "writable": true,
      "enumerable": true,
      "configurable": false
    } : undefined;
  },
});

/* Cookies 测试 */

alert(docCookies.my_cookie1 = "First value");
alert(docCookies.getItem("my_cookie1"));

docCookies.setItem("my_cookie1", "Changed value");
alert(docCookies.my_cookie1);</pre>

## 浏览器兼容性

<div class="htab"><a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>

*   <a>Desktop</a>
*   <a>Mobile</a>

</div>

<div id="compat-desktop">

<table class="compat-table">

<tbody>

<tr>

<th>Feature</th>

<th>Chrome</th>

<th>Firefox (Gecko)</th>

<th>Internet Explorer</th>

<th>Opera</th>

<th>Safari</th>

</tr>

<tr>

<td>Basic support</td>

<td>

49.0

</td>

<td>[18](/en-US/Firefox/Releases/18 "Released on 2013-01-08.") (18)</td>

<td>12</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

</tbody>

</table>

</div>

<div id="compat-mobile">

<table class="compat-table">

<tbody>

<tr>

<th>Feature</th>

<th>Android</th>

<th>Chrome for Android</th>

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

</tr>

<tr>

<td>Basic support</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>49.0</td>

<td>[18](/en-US/Firefox/Releases/18 "Released on 2013-01-08.") (18)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

</tbody>

</table>

</div>

## Gecko特别说明

*   目前，`Object.getPrototypeOf(proxy) <font face="Open Sans, Arial, sans-serif">无条件地返回 </font>``Object.getPrototypeOf(target)，因为`ES6 getPrototypeOf 的缺陷还没被实现 ([bug 888969](https://bugzilla.mozilla.org/show_bug.cgi?id=888969 "FIXED: Implement ES6 Proxy traps for getPrototypeOf and setPrototypeOf")，[bug 888969](https://bugzilla.mozilla.org/show_bug.cgi?id=888969 "FIXED: Implement ES6 Proxy traps for getPrototypeOf and setPrototypeOf"))。
*   `Array.isArray(proxy)` 无条件地返回 `Array.isArray(target)` ([bug 1111785](https://bugzilla.mozilla.org/show_bug.cgi?id=1111785 "FIXED: Implement ES6 7.2.2  IsArray")，[bug 1111785](https://bugzilla.mozilla.org/show_bug.cgi?id=1111785 "FIXED: Implement ES6 7.2.2  IsArray"))。
*   `Object.prototype.toString.call(proxy)` 无条件地返回 `Object.prototype.toString.call(target)，`因为 ES6 Symbol.toStringTag 还没被实现 ([bug 1114580](https://bugzilla.mozilla.org/show_bug.cgi?id=1114580 "FIXED: Implement ES6 Symbol.toStringTag"))。

## 参考

*   ["Proxies are awesome" Brendan Eich presentation at JSConf](http://jsconf.eu/2010/speaker/be_proxy_objects.html) ([slides](http://www.slideshare.net/BrendanEich/metaprog-5303821))
*   [ECMAScript Harmony Proxy proposal page](http://wiki.ecmascript.org/doku.php?id=harmony:proxies) and [ECMAScript Harmony proxy semantics page](http://wiki.ecmascript.org/doku.php?id=harmony:proxies_semantics)
*   [Tutorial on proxies](http://soft.vub.ac.be/~tvcutsem/proxies/)
*   [SpiderMonkey specific Old Proxy API](/zh-CN/docs/JavaScript/Old_Proxy_API "/zh-CN/docs/JavaScript/Old_Proxy_API")
*   [`Object.watch()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/watch "监视一个对象的某个属性是否被赋值,在该属性赋值时触发指定的回调函数.") is a non-standard feature but has been supported in Gecko for a long time.

## 版权声明

一些内容（如文本、例子）是复制自或修改自[ECMAScript wiki](http://wiki.ecmascript.org/doku.php)（版权声明 [CC 2.0 BY-NC-SA](http://creativecommons.org/licenses/by-nc-sa/2.0/)）。