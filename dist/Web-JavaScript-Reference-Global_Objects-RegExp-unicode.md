The **`unicode`** property indicates whether or not the "`u`" flag is used with a regular expression. `unicode` is a read-only property of an individual regular expression instance.

<div>

<table class="standard-table">

<thead>

<tr>

<th class="header" colspan="2">Property attributes of `RegExp.prototype.unicode`</th>

</tr>

</thead>

<tbody>

<tr>

<td>Writable</td>

<td>no</td>

</tr>

<tr>

<td>Enumerable</td>

<td>no</td>

</tr>

<tr>

<td>Configurable</td>

<td>yes</td>

</tr>

</tbody>

</table>

</div>

## Description

The value of `unicode` is a [`Boolean`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean "The Boolean object is an object wrapper for a boolean value.") and `true` if the "`u`" flag was used; otherwise `false`. The "`u`" flag enables various Unicode-related features. With the "u" flag, any Unicode code point escapes will be interpreted as such, for example.

You cannot change this property directly. It is read-only.

## Examples

### Using the `unicode` property

<pre class="brush: js">var regex = new RegExp('\u{61}', 'u');

console.log(regex.unicode); // true
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
<small lang="en-US">The definition of 'RegExp.prototype.unicode' in that specification.</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-get-regexp.prototype.unicode)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="en-US">The definition of 'RegExp.prototype.unicode' in that specification.</small>](https://tc39.github.io/ecma262/#sec-get-regexp.prototype.unicode)</td>

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

<th>Edge</th>

<th>Firefox (Gecko)</th>

<th>Internet Explorer</th>

<th>Opera</th>

<th>Safari</th>

</tr>

<tr>

<td>Basic support</td>

<td>50</td>

<td>12 (case folding 13)</td>

<td>[46](/en-US/Firefox/Releases/46 "Released on 2016-04-26.") (46)</td>

<td><span style="color: #f00;">No support</span></td>

<td>37</td>

<td>10</td>

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

<td>50</td>

<td>46.0 (46)</td>

<td><span style="color: #f00;">No support</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>10</td>

</tr>

</tbody>

</table>

</div>

## See also

*   [`RegExp.lastIndex`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex "The lastIndex is a read/write integer property of regular expression instances that specifies the index at which to start the next match.")
*   [`RegExp.prototype.global`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global "The global property indicates whether or not the "g" flag is used with the regular expression. global is a read-only property of an individual regular expression instance.")
*   [`RegExp.prototype.ignoreCase`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase "The ignoreCase property indicates whether or not the "i" flag is used with the regular expression. ignoreCase is a read-only property of an individual regular expression instance.")
*   [`RegExp.prototype.multiline`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline "The multiline property indicates whether or not the "m" flag is used with the regular expression. multiline is a read-only property of an individual regular expression instance.")
*   [`RegExp.prototype.source`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source "The source property returns a String containing the source text of the regexp object, and it doesn't contain the two forward slashes on both sides and any flags.")
*   [`RegExp.prototype.sticky`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky "The sticky property reflects whether or not the search is sticky (searches in strings only from the index indicated by the lastIndex property of this regular expression). sticky is a read-only property of an individual regular expression object.")