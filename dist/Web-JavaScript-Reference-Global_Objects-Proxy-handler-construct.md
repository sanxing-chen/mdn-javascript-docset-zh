The `**handler.construct()**` method is a trap for the [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new "The new operator creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function.") operator.

## Syntax

<pre class="brush: js">var p = new Proxy(target, {
  construct: function(target, argumentsList, newTarget) {
  }
});
</pre>

### Parameters

The following parameters are passed to the `construct` method. `this` is bound to the handler.

<dl>

<dt>`target`</dt>

<dd>The target object.</dd>

<dt>`argumentsList`</dt>

<dd>The list of arguments for the constructor.</dd>

<dt>`newTarget`</dt>

<dd>The constructor that was originally called.</dd>

</dl>

### Return value

The `construct` method must return an object.

## Description

The `**handler.construct()**` method is a trap for the [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new "The new operator creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function.") operator.

### Interceptions

This trap can intercept these operations:

*   `new proxy(...args)`
*   [`Reflect.construct()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/construct "The static Reflect.construct() method acts like the new operator as a function. It is equivalent to calling new target(...args).")

### Invariants

If the following invariants are violated, the proxy will throw a [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError "The TypeError object represents an error when a value is not of the expected type."):

*   The result must be an `Object`.

## Examples

The following code traps the [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new "The new operator creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function.") operator.

<pre class="brush: js">var p = new Proxy(function() {}, {
  construct: function(target, argumentsList, newTarget) {
    console.log('called: ' + argumentsList.join(', '));
    return { value: argumentsList[0] * 10 };
  }
});

console.log(new p(1).value); // "called: 1"
                             // 10
</pre>

The following code violates the invariant.

<pre class="brush: js">var p = new Proxy(function() {}, {
  construct: function(target, argumentsList, newTarget) {
    return 1;
  }
});

new p(); // TypeError is thrown
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
<small lang="en-US">The definition of '[[Construct]]' in that specification.</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots-construct-argumentslist-newtarget)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="en-US">The definition of '[[Construct]]' in that specification.</small>](https://tc39.github.io/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-construct-argumentslist-newtarget)</td>

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
*   [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new "The new operator creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function.") operator.
*   [`Reflect.construct()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/construct "The static Reflect.construct() method acts like the new operator as a function. It is equivalent to calling new target(...args).")