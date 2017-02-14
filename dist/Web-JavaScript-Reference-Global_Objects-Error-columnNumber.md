<div>

<div class="overheadIndicator nonStandard nonStandardHeader">

**<span title="This API has not been standardized."></span>Non-standard**  
This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.

</div>

</div>

The `**columnNumber**` property contains the column number in the line of the file that raised this error.

## Examples

### Using `columnNumber`

<pre class="brush: js">var e = new Error('Could not parse input');
throw e;
console.log(e.columnNumber) // 0
</pre>

## Specifications

Not part of any specification. Non-standard.

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

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

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

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span style="color: #f00;">No support</span></td>

<td><span style="color: #f00;">No support</span></td>

<td><span style="color: #f00;">No support</span></td>

</tr>

</tbody>

</table>

</div>

## See also

*   [`Error.prototype.stack`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/stack "The non-standard stack property of Error objects offer a trace of which functions were called, in what order, from which line and file, and with what arguments. The stack string proceeds from the most recent calls to earlier ones, leading back to the original global scope call.")<span title="This API has not been standardized."></span>
*   [`Error.prototype.lineNumber`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber "The lineNumber property contains the line number in the file that raised this error.")<span title="This API has not been standardized."></span>
*   [`Error.prototype.fileName`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName "The fileName property contains the path to the file that raised this error.")<span title="This API has not been standardized."></span>