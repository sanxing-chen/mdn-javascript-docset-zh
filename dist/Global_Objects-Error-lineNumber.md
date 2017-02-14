
                
                  <div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="overheadIndicator nonStandard nonStandardHeader"> 
      <p><strong><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> Non-standard</strong><br> 
      This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.</p> 
      </div></div>

<p>The <code><strong>lineNumber</strong></code> property contains the line number in the file that raised this error.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_lineNumber">Using <code>lineNumber</code></h3>

<pre class="brush: js">var e = new Error(&apos;Could not parse input&apos;);
throw e;
console.log(e.lineNumber) // 2
</pre>

<h3 id="Alternative_example_using_error_event">Alternative example using <code>error</code> event</h3>

<pre class="brush: js">window.addEventListener(&apos;error&apos;, function(e) {
  console.log(e.lineNumber); // 5
});
var e = new Error(&apos;Could not parse input&apos;);
throw e;
</pre>

<p>This is not a standard feature and lacks widespread support. See the browser compatability table below.</p>

<h2 id="Specifications">Specifications</h2>

<p>Not part of any specification. Non-standard.</p>

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

<p>&#xA0;</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a title="The non-standard stack property of Error objects offer a trace of which functions were called, in what order, from which line and file, and with what arguments. The stack string proceeds from the most recent calls to earlier ones, leading back to the original global scope call." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/stack"><code>Error.prototype.stack</code></a> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></li>
 <li><a title="The columnNumber property contains the column number in the line of the file that raised this error." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber"><code>Error.prototype.columnNumber</code></a> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></li>
 <li><a title="The fileName property contains the path to the file that raised this error." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName"><code>Error.prototype.fileName</code></a> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></li>
</ul>
                
              