The **`[@@split]()`** method splits a [`String`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String "The String global object is a constructor for strings, or a sequence of characters.") object into an array of strings by separating the string into substrings.

## Syntax

<pre class="syntaxbox"><var>regexp</var>[Symbol.split](str[, <var>limit</var>])</pre>

### Parameters

<dl>

<dt>`str`</dt>

<dd>The target of the split operation.</dd>

<dt>`limit`</dt>

<dd>

Optional. Integer specifying a limit on the number of splits to be found. The `[@@split]()` method still splits on every match of `this` RegExp pattern, until the number of split items match the `limit` or the string falls short of `this` pattern.

</dd>

</dl>

### Return value

An [`Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "The JavaScript Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects.") containing substrings as its elements.

## Description

This method is called internally in [`String.prototype.split()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split "Technical review completed.") if the `separator` argument is a [`RegExp`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "The RegExp constructor creates a regular expression object for matching text with a pattern.") object. For example, the following two examples return the same result.

<pre class="brush: js">'a-b-c'.split(/-/);

/-/[Symbol.split]('a-b-c');</pre>

This method exists for customizing the split behavior in `RegExp` subclass.

If the `str` argument is **not** a [`RegExp`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "The RegExp constructor creates a regular expression object for matching text with a pattern.") object, [`String.prototype.split()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split "Technical review completed.") doesn't call this method, nor create a [`RegExp`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "The RegExp constructor creates a regular expression object for matching text with a pattern.") object.

## Examples

### Direct call

This method can be used in almost the same way as [`String.prototype.split()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split "Technical review completed."), except the different `this` and the different arguments order.

<pre class="brush: js">var re = /-/g;
var str = '2016-01-02';
var result = re[Symbol.split](str);
console.log(result);  // ["2016", "01", "02"]
</pre>

### Using `@@split` in subclasses

Subclasses of [`RegExp`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "The RegExp constructor creates a regular expression object for matching text with a pattern.") can override the `[@@split]()` method to modify the default behavior.

<pre class="brush: js">class MyRegExp extends RegExp {
  [Symbol.split](str, limit) {
    var result = RegExp.prototype[Symbol.split].call(this, str, limit);
    return result.map(x => "(" + x + ")");
  }
}

var re = new MyRegExp('-');
var str = '2016-01-02';
var result = str.split(re); // String.prototype.split calls re[@@split].
console.log(result); // ["(2016)", "(01)", "(02)"]
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
<small lang="en-US">The definition of 'RegExp.prototype[@@split]' in that specification.</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-regexp.prototype-@@split)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="en-US">The definition of 'RegExp.prototype[@@split]' in that specification.</small>](https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split)</td>

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

*   [`String.prototype.split()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split "Technical review completed.")
*   [`RegExp.prototype[@@match]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@match "The [@@match]() method retrieves the matches when matching a string against a regular expression.")
*   [`RegExp.prototype[@@replace]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace "The [@@replace]() method replaces some or all matches of a this pattern in a string by a replacement, and returns the result of the replacement as a new string. The replacement can be a string or a function to be called for each match.")
*   [`RegExp.prototype[@@search]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@search "The [@@search]() method executes a search for a match between a this regular expression and a string.")
*   [`RegExp.prototype.exec()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec "The exec() method executes a search for a match in a specified string. Returns a result array, or null.")
*   [`RegExp.prototype.test()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test "The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.")