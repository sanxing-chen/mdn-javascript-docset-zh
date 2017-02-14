The **`handler.isExtensible()`** method is a trap for [`Object.isExtensible()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible "The Object.isExtensible() method determines if an object is extensible (whether it can have new properties added to it).").

## Syntax

<pre class="brush: js">var p = new Proxy(target, {
  isExtensible: function(target) {
  }
});
</pre>

### Parameters

The following parameter is passed to the `isExtensible` method. `this` is bound to the handler.

<dl>

<dt>`target`</dt>

<dd>The target object.</dd>

</dl>

### Return value

The `isExtensible` method must return a boolean value.

## Description

The `**handler.isExtensible()**` method is a trap for [`Object.isExtensible()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible "The Object.isExtensible() method determines if an object is extensible (whether it can have new properties added to it).").

### Interceptions

This trap can intercept these operations:

*   [`Object.isExtensible()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible "The Object.isExtensible() method determines if an object is extensible (whether it can have new properties added to it).")
*   [`Reflect.isExtensible()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible "The static Reflect.isExtensible() method determines if an object is extensible (whether it can have new properties added to it). It is similar to Object.isExtensible(), but with some differences.")

### Invariants

If the following invariants are violated, the proxy will throw a [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError "The TypeError object represents an error when a value is not of the expected type."):

*   `Object.isExtensible(proxy)` must return the same value as `Object.isExtensible(target)`.

## Examples

The following code traps [`Object.isExtensible()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible "The Object.isExtensible() method determines if an object is extensible (whether it can have new properties added to it).").

<pre class="brush: js">var p = new Proxy({}, {
  isExtensible: function(target) {
    console.log('called');
    return true;
  }
});

console.log(Object.isExtensible(p)); // "called"
                                     // true
</pre>

The following code violates the invariant.

<pre class="brush: js">var p = new Proxy({}, {
  isExtensible: function(target) {
    return false;
  }
});

Object.isExtensible(p); // TypeError is thrown
</pre>

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
<small lang="en-US">The definition of '[[IsExtensible]]' in that specification.</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots-isextensible)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="en-US">The definition of '[[IsExtensible]]' in that specification.</small>](https://tc39.github.io/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-isextensible)</td>

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

<td>[31](/en-US/Firefox/Releases/31 "Released on 2014-07-22.") (31)</td>

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

<td>31.0 (31)</td>

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
*   [`Object.isExtensible()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible "The Object.isExtensible() method determines if an object is extensible (whether it can have new properties added to it).")
*   [`Reflect.isExtensible()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible "The static Reflect.isExtensible() method determines if an object is extensible (whether it can have new properties added to it). It is similar to Object.isExtensible(), but with some differences.")