The `**URIError**` object represents an error when a global URI handling function was used in a wrong way.

## Syntax

    new URIError([message[, fileName[, lineNumber]]])

### Parameters

<dl>

<dt>`message`</dt>

<dd>Optional. Human-readable description of the error</dd>

<dt>`fileName`<span title="This API has not been standardized."></span></dt>

<dd>Optional. The name of the file containing the code that caused the exception</dd>

<dt>`lineNumber`<span title="This API has not been standardized."></span></dt>

<dd>Optional. The line number of the code that caused the exception</dd>

</dl>

## Description

A `URIError` is thrown when the global URI handling functions are passed a malformed URI.

## Properties

<dl>

<dt>[`URIError.prototype`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError/prototype "The URIError.prototype property represents the prototype for the URIError constructor.")</dt>

<dd>Allows the addition of properties to a `URIError` object.</dd>

</dl>

## Methods

The global `URIError` contains no methods of its own, however, it does inherit some methods through the prototype chain.

## `URIError` instances

### Properties

<div>

<dl>

<dt>`URIError.prototype.constructor`</dt>

<dd>Specifies the function that created an instance's prototype.</dd>

<dt>[`URIError.prototype.message`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/message "The message property is a human-readable description of the error.")</dt>

<dd>Error message. Although ECMA-262 specifies that [`URIError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError "The URIError object represents an error when a global URI handling function was used in a wrong way.") should provide its own `message` property, in [SpiderMonkey](/en-US/docs/Mozilla/Projects/SpiderMonkey), it inherits [`Error.prototype.message`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/message "The message property is a human-readable description of the error.").</dd>

<dt>[`URIError.prototype.name`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/name "The name property represents a name for the type of error. The initial value is "Error".")</dt>

<dd>Error name. Inherited from [`Error`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error "The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions. See below for standard built-in error types.").</dd>

<dt>[`URIError.prototype.fileName`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName "The fileName property contains the path to the file that raised this error.")</dt>

<dd>Path to file that raised this error. Inherited from [`Error`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error "The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions. See below for standard built-in error types.").</dd>

<dt>[`URIError.prototype.lineNumber`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber "The lineNumber property contains the line number in the file that raised this error.")</dt>

<dd>Line number in file that raised this error. Inherited from [`Error`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error "The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions. See below for standard built-in error types.").</dd>

<dt>[`URIError.prototype.columnNumber`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber "The columnNumber property contains the column number in the line of the file that raised this error.")</dt>

<dd>Column number in line that raised this error. Inherited from [`Error`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error "The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions. See below for standard built-in error types.").</dd>

<dt>[`URIError.prototype.stack`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/stack "The non-standard stack property of Error objects offer a trace of which functions were called, in what order, from which line and file, and with what arguments. The stack string proceeds from the most recent calls to earlier ones, leading back to the original global scope call.")</dt>

<dd>Stack trace. Inherited from [`Error`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error "The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions. See below for standard built-in error types.").</dd>

</dl>

</div>

### Methods

<div>

Although the [`URIError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError "The URIError object represents an error when a global URI handling function was used in a wrong way.") prototype object does not contain any methods of its own, [`URIError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError "The URIError object represents an error when a global URI handling function was used in a wrong way.") instances do inherit some methods through the prototype chain.

</div>

## Examples

### Catching an `URIError`

<pre class="brush: js">try {
  decodeURIComponent('%');
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message);             // "malformed URI sequence"
  console.log(e.name);                // "URIError"
  console.log(e.fileName);            // "Scratchpad/1"
  console.log(e.lineNumber);          // 2
  console.log(e.columnNumber);        // 2
  console.log(e.stack);               // "@Scratchpad/2:2:3\n"
}
</pre>

### Creating an `URIError`

<pre class="brush: js">try {
  throw new URIError('Hello', 'someFile.js', 10);
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message);             // "Hello"
  console.log(e.name);                // "URIError"
  console.log(e.fileName);            // "someFile.js"
  console.log(e.lineNumber);          // 10
  console.log(e.columnNumber);        // 0
  console.log(e.stack);               // "@Scratchpad/2:2:9\n"
}
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

<td>[ECMAScript 3rd Edition (ECMA-262)  
<small lang="en-US">The definition of 'URIError' in that specification.</small>](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf#sec-15.11.6.6)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="en-US">The definition of 'URIError' in that specification.</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.11.6.6)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="en-US">The definition of 'URIError' in that specification.</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-native-error-types-used-in-this-standard-urierror)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="en-US">The definition of 'URIError' in that specification.</small>](https://tc39.github.io/ecma262/#sec-native-error-types-used-in-this-standard-urierror)</td>

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

*   [`Error`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error "The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions. See below for standard built-in error types.")
*   [`URIError.prototype`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError/prototype "The URIError.prototype property represents the prototype for the URIError constructor.")
*   [`decodeURI()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI "The decodeURI() function decodes a Uniform Resource Identifier (URI) previously created by encodeURI or by a similar routine.")
*   [`decodeURIComponent()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent "The decodeURIComponent() function decodes a Uniform Resource Identifier (URI) component previously created by encodeURIComponent or by a similar routine.")
*   [`encodeURI()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI "The encodeURI() function encodes a Uniform Resource Identifier (URI) by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).")
*   [`encodeURIComponent()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent "The encodeURIComponent() function encodes a Uniform Resource Identifier (URI) component by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).")