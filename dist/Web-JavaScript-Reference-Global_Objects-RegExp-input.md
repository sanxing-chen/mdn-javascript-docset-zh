<div>

<div class="overheadIndicator nonStandard nonStandardHeader">

**<span title="This API has not been standardized."></span>Non-standard**  
This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.

</div>

</div>

The non-standard **`input`** property is a static property of regular expressions that contains the string against which a regular expression is matched. `RegExp.$_` is an alias for this property.

## Syntax

<pre class="syntaxbox"><var>RegExp</var>.input
RegExp.$_
</pre>

## Description

The `input` property is static, it is not a property of an individual regular expression object. Instead, you always use it as `RegExp.input` or `RegExp.$_.`

The value of the `**input**` property is modified whenever the searched string on the regular expression is changed and that string is matching.

## Examples

### Using `input` and `$_`

<pre class="brush: js">var re = /hi/g;
re.test('hi there!');
RegExp.input;         // "hi there!"
re.test('foo');       // new test, non-matching
RegExp.$_;            // "hi there!"
re.test('hi world!'); // new test, matching
RegExp.$_;            // "hi world!"
</pre>

## Specifications

Non-standard. Not part of any current specification.

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

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

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

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

</tbody>

</table>

</div>

## See also

*   <span title="This API has not been standardized."></span>[`RegExp.lastMatch ($&amp;)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch "The non-standard lastMatch property is a static and read-only property of regular expressions that contains the last matched characters. RegExp.$& is an alias for this property.")
*   <span title="This API has not been standardized."></span>[`RegExp.lastParen ($+)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen "The non-standard lastParen property is a static and read-only property of regular expressions that contains the last parenthesized substring match, if any. RegExp.$+ is an alias for this property.")
*   <span title="This API has not been standardized."></span>[`RegExp.leftContext ($`)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext "The non-standard leftContext property is a static and read-only property of regular expressions that contains the substring preceding the most recent match. RegExp.$` is an alias for this property.")
*   <span title="This API has not been standardized."></span>[`RegExp.rightContext ($')`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext "The non-standard rightContext property is a static and read-only property of regular expressions that contains the substring following the most recent match. RegExp.$' is an alias for this property.")
*   <span title="This API has not been standardized."></span>[`RegExp.$1-$9`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n "The non-standard $1, $2, $3, $4, $5, $6, $7, $8, $9 properties are static and read-only properties of regular expressions that contain parenthesized substring matches.")