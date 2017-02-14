<div>

<div class="overheadIndicator nonStandard nonStandardHeader">

**<span title="This API has not been standardized."></span>Non-standard**  
This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.

</div>

</div>

The non-standard **`stack`** property of [`Error`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error "The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions. See below for standard built-in error types.") objects offer a trace of which functions were called, in what order, from which line and file, and with what arguments. The stack string proceeds from the most recent calls to earlier ones, leading back to the original global scope call.

## Description

Each step will be separated by a newline, with the first part of the line being the function name (if not a call from the global scope), then by an at (@) sign, the file location (except when the function is the error constructor as the error is being thrown), a colon, and, if there is a file location, the line number. (Note that the [`Error`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error "The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions. See below for standard built-in error types.") object also possesses the `fileName`, `lineNumber` and `columnNumber` properties for retrieving these from the error thrown (but only the error, and not its trace).)

Note that this is the format used by Firefox. There is no standard formatting. However, Safari 6+ and Opera 12- use a very similar format. Browsers using the V8 JavaScript engine (such as Chrome, Opera 15+, Android Browser) and IE10+, on the other hand, uses a different format (see these MSDN [error.stack](http://msdn.microsoft.com/en-us/library/windows/apps/hh699850.aspx) docs).

**Argument values in the stack**: Prior to Firefox 14 ([bug 744842](https://bugzilla.mozilla.org/show_bug.cgi?id=744842 "FIXED: don't include actual args in error.stack.toString()")), the function name would be followed by the argument values converted to string in parentheses immediately before the at (`@`) sign. While an object (or array, etc.) would appear in the converted form `"[object Object]"`, and as such could not be evaluated back into the actual objects, scalar values could be retrieved (though it may be — it is still possible in Firefox 14 — easier to use `arguments.callee.caller.arguments`, as could the function name be retrieved by `arguments.callee.caller.name`). `"undefined"` is listed as `"(void 0)"`. Note that if string arguments were passed in with values such as `"@"`, `"("`, `")"` (or if in file names), you could not easily rely on these for breaking the line into its component parts. Thus, in Firefox 14 and later this is less of an issue.

Different browsers set this value at different times. For example, Firefox sets it when creating an [`Error`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error "The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions. See below for standard built-in error types.") object, while PhantomJS sets it only when throwing the [`Error`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error "The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions. See below for standard built-in error types."), and [MSDN docs](http://msdn.microsoft.com/en-us/library/windows/apps/hh699850.aspx) also seem to match the PhantomJS implementation.

## Example

The following HTML markup demonstrates the use of `stack` property.

<pre class="brush: html"><!DOCTYPE HTML>
<meta charset="UTF-8">
<title>Stack Trace Example</title>
<body>
<script>
function trace() {
  try {
    throw new Error('myError');
  }
  catch(e) {
    alert(e.stack);
  }
}
function b() {
  trace();
}
function a() {
  b(3, 4, '\n\n', undefined, {});
}
a('first call, firstarg');
</script>
</pre>

Assuming the above markup is saved as `C:\example.html` on a Windows file system it produces an alert message box with the following text:

Starting with Firefox 30 and later containing the column number ([bug 762556](https://bugzilla.mozilla.org/show_bug.cgi?id=762556 "FIXED: Error stack should contain column number")):

<pre><samp>trace@file:///C:/example.html:9:17
b@file:///C:/example.html:16:13
a@file:///C:/example.html:19:13
@file:///C:/example.html:21:9</samp></pre>

Firefox 14 to Firefox 29:

<pre><samp>trace@file:///C:/example.html:9
b@file:///C:/example.html:16
a@file:///C:/example.html:19
@file:///C:/example.html:21</samp></pre>

Firefox 13 and earlier would instead produce the following text:

<pre><samp>Error("myError")@:0
trace()@file:///C:/example.html:9
b(3,4,"\n\n",(void 0),[object Object])@file:///C:/example.html:16
a("first call, firstarg")@file:///C:/example.html:19
@file:///C:/example.html:21</samp></pre>

### Stack of eval'ed code

Starting with Firefox 30 (Firefox 30 / Thunderbird 30 / SeaMonkey 2.27 / Firefox OS 1.4), the error stack of code in `Function()` and `eval()` calls, now produces stacks with more detailed information about the line and column numbers inside these calls. Function calls are indicated with `"> Function"` and eval calls with `"> eval"`. See [bug 332176](https://bugzilla.mozilla.org/show_bug.cgi?id=332176 "FIXED: eval still uses call site line number as offset for eval'ed code in the year 2014").

<pre class="brush: js">try {
  new Function('throw new Error()')();
} catch (e) {
  console.log(e.stack);
}

// anonymous@file:///C:/example.html line 7 > Function:1:1
// @file:///C:/example.html:7:6

try {
  eval("eval('FAIL')");
} catch (x) {
  console.log(x.stack);
}

// @file:///C:/example.html line 7 > eval line 1 > eval:1:1
// @file:///C:/example.html line 7 > eval:1:1
// @file:///C:/example.html:7:6
</pre>

You can also use the `//# sourceURL` directive to name an eval source. See also [Debug eval sources](/en-US/docs/Tools/Debugger/How_to/Debug_eval_sources) in the [Debugger](/en-US/docs/Tools/Debugger) docs and this [blog post](http://fitzgeraldnick.com/weblog/59/).

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

<th>Edge</th>

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

<td>10</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>6</td>

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

<td>4.0</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>6</td>

</tr>

</tbody>

</table>

</div>

## See also

*   [Components.stack](/en-US/docs/Components.stack)
*   External projects: [TraceKit](https://github.com/csnover/TraceKit/) and [javascript-stacktrace](https://github.com/eriwen/javascript-stacktrace)
*   MSDN: [error.stack](http://msdn.microsoft.com/en-us/library/windows/apps/hh699850.aspx "http://msdn.microsoft.com/en-us/library/windows/apps/hh699850.aspx") docs
*   [Overview of the V8 JavaScript stack trace API](https://github.com/v8/v8/wiki/Stack%20Trace%20API)