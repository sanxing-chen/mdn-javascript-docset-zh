The **`handler.has()`** method is a trap for the [`in`](/en-US/docs/Web/JavaScript/Reference/Operators/in "The in operator returns true if the specified property is in the specified object.") operator.

## Syntax

<pre class="brush: js">var p = new Proxy(target, {
  has: function(target, prop) {
  }
});
</pre>

### Parameters

The following parameters are passed to `has` method. `this` is bound to the handler.

<dl>

<dt>`target`</dt>

<dd>The target object.</dd>

<dt>`prop`</dt>

<dd>The name of the property to check for existence.</dd>

</dl>

### Return value

The `has` method must return a boolean value.

## Description

The `**handler.has**` method is a trap for the [`in`](/en-US/docs/Web/JavaScript/Reference/Operators/in "The in operator returns true if the specified property is in the specified object.") operator.

### Interceptions

This trap can intercept these operations:

*   Property query: `foo in proxy`
*   Inherited property query: `foo in Object.create(proxy)`
*   `with` check`: with(proxy) { (foo); }`
*   [`Reflect.has()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/has "The static Reflect.has() method works like the in operator as a function.")

### Invariants

If the following invariants are violated, the proxy will throw a [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError "The TypeError object represents an error when a value is not of the expected type."):

*   A property cannot be reported as non-existent, if it exists as a non-configurable own property of the target object.
*   A property cannot be reported as non-existent, if it exists as an own property of the target object and the target object is not extensible.

## Examples

The following code traps the [`in`](/en-US/docs/Web/JavaScript/Reference/Operators/in "The in operator returns true if the specified property is in the specified object.") operator.

<pre class="brush: js">var p = new Proxy({}, {
  has: function(target, prop) {
    console.log('called: ' + prop);
    return true;
  }
});

console.log('a' in p); // "called: a"
                       // true
</pre>

The following code violates an invariant.

<pre class="brush: js">var obj = { a: 10 };
Object.preventExtensions(obj);
var p = new Proxy(obj, {
  has: function(target, prop) {
    return false;
  }
});

'a' in p; // TypeError is thrown
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
<small lang="en-US">The definition of '[[HasProperty]]' in that specification.</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots-hasproperty-p)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="en-US">The definition of '[[HasProperty]]' in that specification.</small>](https://tc39.github.io/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-hasproperty-p)</td>

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

<td>[18](/en-US/Firefox/Releases/18 "Released on 2013-01-08.") (18)</td>

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

<td>18.0 (18)</td>

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
*   [`in`](/en-US/docs/Web/JavaScript/Reference/Operators/in "The in operator returns true if the specified property is in the specified object.") operator
*   [`Reflect.has()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/has "The static Reflect.has() method works like the in operator as a function.")