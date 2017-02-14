<div>

<div class="overheadIndicator obsolete obsoleteHeader">

**<span title="This is an obsolete API and is no longer guaranteed to work."></span>Obsolete**  
This feature is obsolete. Although it may still work in some browsers, its use is discouraged since it could be removed at any time. Try to avoid using it.

</div>

</div>

The **`handler.enumerate()`** method used to be a trap for [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in "The for...in statement iterates over the enumerable properties of an object, in arbitrary order. For each distinct property, statements can be executed.") statements, but has been removed from the ECMAScript standard in ES2016 and is deprecated in browsers.

## Syntax

<pre class="brush: js">var p = new Proxy(target, {
  enumerate(target) {
  }
});
</pre>

### Parameters

The following parameter is passed to the `enumerate` method. `this` is bound to the handler.

<dl>

<dt>`target`</dt>

<dd>The target object.</dd>

</dl>

### Return value

An [iterator](/en-US/docs/Web/JavaScript/Guide/The_Iterator_protocol) object.

## Description

The `**handler.enumerate**` method is a trap for [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in "The for...in statement iterates over the enumerable properties of an object, in arbitrary order. For each distinct property, statements can be executed.") statements.

### Interceptions

This trap can intercept these operations:

*   Property enumeration / for...in: `for (var name in proxy) {...}`
*   [`Reflect.enumerate()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/enumerate "The static Reflect.enumerate() method used to return an iterator with the enumerable own and inherited properties of the target object, but has been removed in ECMAScript 2016 and is deprecated in browsers.")

### Invariants

If the following invariants are violated, the proxy will throw a [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError "The TypeError object represents an error when a value is not of the expected type."):

*   The `enumerate` method must return an object.

## Examples

The following code traps [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in "The for...in statement iterates over the enumerable properties of an object, in arbitrary order. For each distinct property, statements can be executed.") statements.

<pre class="brush: js">var p = new Proxy({}, {
  enumerate(target) {
    console.log('called');
    return ['a', 'b', 'c'][Symbol.iterator]();
  }
});

for (var x in p) { // "called"
  console.log(x);  // "a"
}                  // "b"
                   // "c"
</pre>

The following code violates the invariant.

<pre class="brush: js">var p = new Proxy({}, {
  enumerate(target) {
    return 1;
  }
});

for (var x in p) {} // TypeError is thrown
</pre>

Note: Both examples make use of the shorthand syntax for [method definitions](/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions).

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
<small lang="en-US">The definition of '[[Enumerate]]' in that specification.</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots-enumerate)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition. Removed in ECMAScript 2016.</td>

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

<td><span style="color: #f00;">No support</span></td>

<td><span style="color: #f00;">No support</span> [1]</td>

<td><span style="color: #f00;">No support</span></td>

<td><span style="color: #f00;">No support</span></td>

<td><span style="color: #f00;">No support</span></td>

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

<td><span style="color: #f00;">No support</span></td>

<td><span style="color: #f00;">No support</span></td>

<td>37.0 (37) [1]</td>

<td><span style="color: #f00;">No support</span></td>

<td><span style="color: #f00;">No support</span></td>

<td><span style="color: #f00;">No support</span></td>

</tr>

</tbody>

</table>

</div>

[1] This feature was supported from version 37 to version 46, but has been removed to comply with the latest ECMAScript standard, see [bug 1246318](https://bugzilla.mozilla.org/show_bug.cgi?id=1246318 "FIXED: Remove [[Enumerate]] and associated reflective capabilities").

## See also

*   [`Proxy`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy "The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc).")
*   [`handler`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler "The proxy's handler object is a placeholder object which contains traps for proxies.")
*   [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in "The for...in statement iterates over the enumerable properties of an object, in arbitrary order. For each distinct property, statements can be executed.") statements
*   [`Reflect.enumerate()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/enumerate "The static Reflect.enumerate() method used to return an iterator with the enumerable own and inherited properties of the target object, but has been removed in ECMAScript 2016 and is deprecated in browsers.")