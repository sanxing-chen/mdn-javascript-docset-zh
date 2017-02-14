<div>

<div class="overheadIndicator nonStandard nonStandardHeader">

**<span title="This API has not been standardized."></span>Non-standard**  
This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.

</div>

</div>

The `**toSource()**` method returns code that could eval to the same error.

## Syntax

<pre class="syntaxbox"><var>e</var>.toSource()</pre>

### Return value

A string containing the source code of the error.

## Description

Calling the `toSource` method of an [`Error`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error "The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions. See below for standard built-in error types.") instance (including_[NativeErrors](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types)_) will return a string containing the source code of the error. This string can be evaluated to create an (approximately) equal object. Naturally, the string containing the source follows the structure of the [`Error`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error "The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions. See below for standard built-in error types.") constructor. For example:

<pre class="brush: js">(new_name_(_message_ ,_fileName_,_lineNumber_))
</pre>

where these attributes correspond to the respective properties of the error instance.

<div class="note">

**Note:** Be aware that the properties used by the `toSource` method in the creation of this string are mutable and may not accurately reflect the function used to create an error instance or the filename or line number where the actual error occurred.

</div>

## Specifications

Not part of any standard. Implemented in JavaScript 1.3.

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

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

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

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

</tbody>

</table>

</div>

## See also

*   [`Error.prototype.fileName`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName "The fileName property contains the path to the file that raised this error.")
*   [`Error.prototype.lineNumber`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber "The lineNumber property contains the line number in the file that raised this error.")
*   [`Error.prototype.message`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/message "The message property is a human-readable description of the error.")
*   [`Error.prototype.name`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/name "The name property represents a name for the type of error. The initial value is "Error".")
*   [`Object.prototype.toSource()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource "The toSource() method returns a string representing the source code of the object.")