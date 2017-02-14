The **`handler.ownKeys()`** method is a trap for [`Reflect.ownKeys()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys "The static Reflect.ownKeys() method returns an array of the target object's own property keys.").

## Syntax

<pre class="brush: js">var p = new Proxy(target, {
  ownKeys: function(target) {
  }
});
</pre>

### Parameters

The following parameter is passed to the `ownKeys` method. `this` is bound to the handler.

<dl>

<dt>`target`</dt>

<dd>The target object.</dd>

</dl>

### Return value

The `ownKeys` method must return an enumerable object.

## Description

The `**handler.ownKeys()**` method is a trap for [`Reflect.ownKeys()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys "The static Reflect.ownKeys() method returns an array of the target object's own property keys.").

### Interceptions

This trap can intercept these operations:

*   [`Object.getOwnPropertyNames()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames "The Object.getOwnPropertyNames() method returns an array of all properties (enumerable or not) found directly upon a given object.")
*   [`Object.getOwnPropertySymbols()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols "The Object.getOwnPropertySymbols() method returns an array of all symbol properties found directly upon a given object.")
*   [`Object.keys()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys "The Object.keys() method returns an array of a given object's own enumerable properties, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).")
*   [`Reflect.ownKeys()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys "The static Reflect.ownKeys() method returns an array of the target object's own property keys.")

### Invariants

If the following invariants are violated, the proxy will throw a [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError "The TypeError object represents an error when a value is not of the expected type."):

*   The result of `ownKeys` must be an array.
*   The type of each array element is either a [`String`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String "The String global object is a constructor for strings, or a sequence of characters.") or a [`Symbol`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol "The Symbol() function returns a value of type symbol, has static properties that expose several members of built in objects, has static methods that expose the global symbol registry, and resembles a built in object class but is incomplete as a contructor because it does not support the syntax "new Symbol()".").
*   The result List must contain the keys of all non-configurable own properties of the target object.
*   If the target object is not extensible, then the result List must contain all the keys of the own properties of the target object and no other values.

## Examples

The following code traps [`Object.getOwnPropertyNames()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames "The Object.getOwnPropertyNames() method returns an array of all properties (enumerable or not) found directly upon a given object.").

<pre class="brush: js">var p = new Proxy({}, {
  ownKeys: function(target) {
    console.log('called');
    return ['a', 'b', 'c'];
  }
});

console.log(Object.getOwnPropertyNames(p)); // "called"
                                            // [ 'a', 'b', 'c' ]</pre>

The following code violates an invariant.

<pre class="brush: js example-bad">var obj = {};
Object.defineProperty(obj, 'a', { 
  configurable: false, 
  enumerable: true, 
  value: 10 }
);

var p = new Proxy(obj, {
  ownKeys: function(target) {
    return [123, 12.5, true, false, undefined, null, {}, []];
  }
});

console.log(Object.getOwnPropertyNames(p)); 

// TypeError: proxy [[OwnPropertyKeys]] must return an array 
// with only string and symbol elements
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
<small lang="en-US">The definition of '[[OwnPropertyKeys]]' in that specification.</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots-ownpropertykeys)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="en-US">The definition of '[[OwnPropertyKeys]]' in that specification.</small>](https://tc39.github.io/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-ownpropertykeys)</td>

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

## Compatibility notes

### Firefox

*   In Gecko 42 (Firefox 42 / Thunderbird 42 / SeaMonkey 2.39), the `ownKey` implementation got updated to reflect the final ES2015 specification (see [bug 1049662](https://bugzilla.mozilla.org/show_bug.cgi?id=1049662 "FIXED: Update ES6 scripted proxies "ownKeys" to ES6 final")):
    *   The result is now checked if it is an array and if the array elements are either of type string or of type symbol.
    *   Enumerating duplicate own property names is not a failure anymore.

## See also

*   [`Proxy`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy "The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc).")
*   [`handler`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler "The proxy's handler object is a placeholder object which contains traps for proxies.")
*   [`Object.getOwnPropertyNames()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames "The Object.getOwnPropertyNames() method returns an array of all properties (enumerable or not) found directly upon a given object.")
*   [`Reflect.ownKeys()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys "The static Reflect.ownKeys() method returns an array of the target object's own property keys.")