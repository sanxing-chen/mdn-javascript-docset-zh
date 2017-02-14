The **`handler.setPrototypeOf()`** method is a trap for [`Object.setPrototypeOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf "The Object.setPrototypeOf() method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.").

## Syntax

<pre class="brush: js">var p = new Proxy(target, {
  setPrototypeOf: function(target, prototype) {
  }
});
</pre>

### Parameters

The following parameters are passed to the `setPrototypeOf` method. `this` is bound to the handler.

<dl>

<dt>`target`</dt>

<dd>The target object.</dd>

<dt>`prototype`</dt>

<dd>The object's new prototype or `null`.</dd>

</dl>

### Return value

The `setPrototypeOf` method returns `true` if the `[[Prototype]]` was successfully changed, otherwise `false`.

## Description

The `**handler.setPrototypeOf**` method is a trap for [`Object.setPrototypeOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf "The Object.setPrototypeOf() method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.").

### Interceptions

This trap can intercept these operations:

*   [`Object.setPrototypeOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf "The Object.setPrototypeOf() method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.")
*   [`Reflect.setPrototypeOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf "The static Reflect.setPrototypeOf() method is the same method as Object.setPrototypeOf(). It sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or to null.")

### Invariants

If the following invariants are violated, the proxy will throw a [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError "The TypeError object represents an error when a value is not of the expected type."):

*   If `target` is not extensible, the `prototype` parameter must be the same value as `Object.getPrototypeOf(target)`.

## Examples

If you want to disallow setting a new prototype for your object, your handler's `setPrototypeOf` method can either return `false`, or it can throw an exception.

The former approach means that any operation that performs such mutation, that throws an exception on failure to mutate, will have to create the exception itself.  For example, [`Object.setPrototypeOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf "The Object.setPrototypeOf() method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.") will create and throw a `TypeError` itself.  If the mutation is performed by an operation that _doesn't_ ordinarily throw in case of failure, such as [`Reflect.setPrototypeOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf "The static Reflect.setPrototypeOf() method is the same method as Object.setPrototypeOf(). It sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or to null."), no exception will be thrown.

<pre class="brush: js">var handlerReturnsFalse = {
    setPrototypeOf(target, newProto) {
        return false;
    }
};

var newProto = {}, target = {};

var p1 = new Proxy(target, handlerReturnsFalse);
Object.setPrototypeOf(p1, newProto); // throws a TypeError
Reflect.setPrototypeOf(p1, newProto); // returns false
</pre>

The latter approach will cause _any_ operation that attempts to mutate, to throw.  This approach is required if you want even non-throwing operations to throw on failure, or you want to throw a custom exception value.

<pre class="brush: js">var handlerThrows = {
    setPrototypeOf(target, newProto) {
        throw new Error('custom error');
    }
}; 

var newProto = {}, target = {};

var p2 = new Proxy(target, handlerThrows);
Object.setPrototypeOf(p2, newProto); // throws new Error("custom error")
Reflect.setPrototypeOf(p2, newProto); // throws new Error("custom error")</pre>

## Specifications

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="en-US">The definition of '[[SetPrototypeOf]]' in that specification.</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots-setprototypeof-v)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="en-US">The definition of '[[SetPrototypeOf]]' in that specification.</small>](https://tc39.github.io/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-setprototypeof-v)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

</tbody>

</table>

## Browser compatibility

<div>

<div class="htab"><a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>

*   <a>Desktop</a>
*   <a>Mobile</a>

</div>

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

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>[49](/en-US/Firefox/Releases/49 "Released on 2016-09-13.") (49)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

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

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>49.0 (49)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

</tbody>

</table>

</div>

## See also

*   [`Proxy`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy "The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc).")
*   [`handler`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler "The proxy's handler object is a placeholder object which contains traps for proxies.")
*   [`Object.setPrototypeOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf "The Object.setPrototypeOf() method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.")
*   [`Reflect.setPrototypeOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf "The static Reflect.setPrototypeOf() method is the same method as Object.setPrototypeOf(). It sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or to null.")