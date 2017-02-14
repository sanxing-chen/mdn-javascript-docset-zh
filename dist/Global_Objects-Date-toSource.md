
                
                  <div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="overheadIndicator nonStandard nonStandardHeader"> 
      <p><strong><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> Non-standard</strong><br> 
      This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.</p> 
      </div></div>

<p>The <strong><code>toSource()</code></strong> method returns a string representing the source code of the object.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><var>dateObj</var>.toSource()
Date.toSource()</pre>

<h3 id="Return_value">Return value</h3>
<p>A string representing the source code of the given <a title="Creates a JavaScript Date instance that represents a single moment in time. Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"><code>Date</code></a> object.</p>

<h2 id="Description">Description</h2>

<p>The <code>toSource()</code> method returns the following values:</p>

<ul>
 <li>For the built-in <a title="Creates a JavaScript Date instance that represents a single moment in time. Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"><code>Date</code></a> object, <code>toSource()</code> returns the following string indicating that the source code is not available:

  <pre class="brush: js">function Date() {
    [native code]
}
</pre>
 </li>
 <li>For instances of <a title="Creates a JavaScript Date instance that represents a single moment in time. Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"><code>Date</code></a>, <code>toSource()</code> returns a string representing the source code.</li>
</ul>

<p>This method is usually called internally by JavaScript and not explicitly in code.</p>

<h2 id="Specifications">Specifications</h2>

<p>Not part of any standard. Implemented in JavaScript 1.3.</p>

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
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><a title="The toSource() method returns a string representing the source code of the object." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource"><code>Object.prototype.toSource()</code></a></li>
</ul>
                
              