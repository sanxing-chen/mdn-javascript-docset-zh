The **`handler.preventExtensions()`** method is a trap for [`Object.preventExtensions()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions "The Object.preventExtensions() method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object).").

## Syntax

<pre class="brush: js">var p = new Proxy(target, {
  preventExtensions: function(target) {
  }
});
</pre>

### Parameters

The following parameter is passed to the `preventExtensions` method. `this` is bound to the handler.

<dl>

<dt>`target`</dt>

<dd>The target object.</dd>

</dl>

### Return value

The `preventExtensions` method must return a boolean value.

## Description

The `**handler.preventExtensions()**` method is a trap for [`Object.preventExtensions()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions "The Object.preventExtensions() method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object).").

### Interceptions

This trap can intercept these operations:

*   [`Object.preventExtensions()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions "The Object.preventExtensions() method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object).")
*   [`Reflect.preventExtensions()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions "The static Reflect.preventExtensions() method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object). It is similar to Object.preventExtensions(), but with some differences.")

### Invariants

If the following invariants are violated, the proxy will throw a [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError "The TypeError object represents an error when a value is not of the expected type."):

*   `Object.preventExtensions(proxy)` only returns `true` if `Object.isExtensible(proxy)` is `false`.

## Examples

The following code traps [`Object.preventExtensions()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions "The Object.preventExtensions() method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object).").

<pre class="brush: js">var p = new Proxy({}, {
  preventExtensions: function(target) {
    console.log('called');
    Object.preventExtensions(target);
    return true;
  }
});

console.log(Object.preventExtensions(p)); // "called"
                                          // false
</pre>

The following code violates the invariant.

<pre class="brush: js">var p = new Proxy({}, {
  preventExtensions: function(target) {
    return true;
  }
});

Object.preventExtensions(p); // TypeError is thrown
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
<small lang="en-US">The definition of '[[PreventExtensions]]' in that specification.</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots-preventextensions)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="en-US">The definition of '[[PreventExtensions]]' in that specification.</small>](https://tc39.github.io/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-preventextensions)</td>

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

<td>[22](/en-US/Firefox/Releases/22 "Released on 2013-06-25.") (22)</td>

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

<td>22.0 (22)</td>

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
*   [`Object.preventExtensions()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions "The Object.preventExtensions() method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object).")
*   [`Reflect.preventExtensions()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions "The static Reflect.preventExtensions() method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object). It is similar to Object.preventExtensions(), but with some differences.")