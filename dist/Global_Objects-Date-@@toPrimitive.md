
                
                  <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p>The <code><strong>[@@toPrimitive]()</strong></code> method converts a <code>Date</code> object to a primitive value.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><var>Date()[Symbol.toPrimitive](hint);
</var></pre>

<h3 id="Return_value">Return value</h3>

<p>The primitive value of the given <a title="Creates a JavaScript Date instance that represents a single moment in time. Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"><code>Date</code></a> object. Depending on the argument, the method can return either a string or a number.</p>

<h2 id="Description">Description</h2>

<p>The <code>[@@toPrimitive]()</code> method of the <a title="Creates a JavaScript Date instance that represents a single moment in time. Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"><code>Date</code></a> object returns a primitive value, that is either of type number or of type string.</p>

<p>If <code>hint</code> is <code>&quot;string&quot;</code> or <code>&quot;default&quot;</code>, <code>[@@toPrimitive]()</code> tries to call the <code>toString</code> method. If the <code>toString</code> property does not exist, it tries to call the <code>valueOf</code> method and if the <code>valueOf</code> does not exist either, <code>[@@toPrimitive]()</code> throws a <a title="The TypeError object represents an error when a value is not of the expected type." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a>.</p>

<p>If <code>hint</code> is <code>&quot;number&quot;</code>, <code>[@@toPrimitive]()</code> first tries to call <code>valueOf</code>, and if that fails, it calls <code>toString</code>.</p>

<p>JavaScript calls the <code>[@@toPrimitive]()</code> method to convert an object to a primitive value. You rarely need to invoke the <code>[@@toPrimitive]()</code> method yourself; JavaScript automatically invokes it when encountering an object where a primitive value is expected.</p>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype-@@toprimitive">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="en-US">The definition of &apos;Date.prototype.@@toPrimitive&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="https://tc39.github.io/ecma262/#sec-date.prototype-@@toprimitive">ECMAScript 2017 Draft (ECMA-262)<br><small lang="en-US">The definition of &apos;Date.prototype.@@toPrimitive&apos; in that specification.</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p></p><div class="htab"> 
    <a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a> 
    <ul> 
        <li class="selected"><a>Desktop</a></li> 
        <li><a>Mobile</a></li> 
    </ul> 
</div><p></p>

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
   <td><a title="Released on 2016-01-26." href="/en-US/Firefox/Releases/44">44.0</a> (44.0)</td>
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
   <td>44.0 (44.0)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><a title="The Symbol.toPrimitive is a&#xA0;symbol that&#xA0;specifies a function valued property that is called to convert an object to a corresponding primitive value." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive"><code>Symbol.toPrimitive</code></a></li>
</ul>
                
              