
                
                  <div><section id="Quick_Links" class="Quick_links"><!-- --></section> <div class="overheadIndicator nonStandard nonStandardHeader"> 
      <p><strong><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> Non-standard</strong><br> 
      This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.</p> 
      </div></div>

<p>The <code><strong>InternalError.prototype</strong></code> property represents the prototype of the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/InternalError" title="The InternalError object indicates an error that occurred internally in the JavaScript engine. For example: &quot;InternalError: too much recursion&quot;."><code>InternalError</code></a> constructor.</p>

<div><table class="standard-table"> 
  <thead> 
    <tr> 
      <th class="header" colspan="2">Property attributes of <code>InternalError.prototype</code></th> 
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
      <td>no</td> 
    </tr> 
  </tbody> 
</table></div>

<h2 id="Description">Description</h2>

<p>All <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/InternalError" title="The InternalError object indicates an error that occurred internally in the JavaScript engine. For example: &quot;InternalError: too much recursion&quot;."><code>InternalError</code></a> instances inherit from <code>InternalError.prototype</code>. You can use the prototype to add properties or methods to all instances.</p>

<h2 id="Properties">Properties</h2>

<dl>
 <dt><code>InternalError.prototype.constructor</code></dt>
 <dd>Specifies the function that created an instance&apos;s prototype.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/message" title="The message property is a human-readable description of the error."><code>InternalError.prototype.message</code></a></dt>
 <dd>Error message. Inherited from <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error" title="The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base object&#xA0;for user-defined exceptions. See below for standard built-in error types."><code>Error</code></a>.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/name" title="The name property represents a name for the type of error. The initial value is &quot;Error&quot;."><code>InternalError.prototype.name</code></a></dt>
 <dd>Error name. Inherited from <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error" title="The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base object&#xA0;for user-defined exceptions. See below for standard built-in error types."><code>Error</code></a>.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName" title="The fileName property contains the path to the file that raised this error."><code>InternalError.prototype.fileName</code></a></dt>
 <dd>Path to file that raised this error. Inherited from <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error" title="The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base object&#xA0;for user-defined exceptions. See below for standard built-in error types."><code>Error</code></a>.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber" title="The lineNumber property contains the line number in the file that raised this error."><code>InternalError.prototype.lineNumber</code></a></dt>
 <dd>Line number in file that raised this error. Inherited from <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error" title="The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base object&#xA0;for user-defined exceptions. See below for standard built-in error types."><code>Error</code></a>.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber" title="The columnNumber property contains the column number in the line of the file that raised this error."><code>InternalError.prototype.columnNumber</code></a></dt>
 <dd>Column number in line that raised this error. Inherited from <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error" title="The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base object&#xA0;for user-defined exceptions. See below for standard built-in error types."><code>Error</code></a>.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/stack" title="The non-standard stack property of Error objects offer a trace of which functions were called, in what order, from which line and file, and with what arguments. The stack string proceeds from the most recent calls to earlier ones, leading back to the original global scope call."><code>InternalError.prototype.stack</code></a></dt>
 <dd>Stack trace. Inherited from <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error" title="The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base object&#xA0;for user-defined exceptions. See below for standard built-in error types."><code>Error</code></a>.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<p>Although the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/InternalError" title="The InternalError object indicates an error that occurred internally in the JavaScript engine. For example: &quot;InternalError: too much recursion&quot;."><code>InternalError</code></a> prototype object does not contain any methods of its own, <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/InternalError" title="The InternalError object indicates an error that occurred internally in the JavaScript engine. For example: &quot;InternalError: too much recursion&quot;."><code>InternalError</code></a> instances do inherit some methods through the prototype chain.</p>

<h2 id="Specifications">Specifications</h2>

<p>Not part of any specifications.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div><div class="htab"> 
    <a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a> 
    <ul> 
        <li class="selected"><a>Desktop</a></li> 
        <li><a>Mobile</a></li> 
    </ul> 
</div></div>

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
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
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
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/prototype" title="The Error.prototype property represents the prototype for the Error constructor."><code>Error.prototype</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype" title="The Function.prototype property represents the Function prototype object."><code>Function.prototype</code></a></li>
</ul>
                
              