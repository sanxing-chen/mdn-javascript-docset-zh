
                
                  <div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="overheadIndicator obsolete obsoleteHeader"><p><strong><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span> Obsolete</strong><br>This feature is obsolete. Although it may still work in some browsers, its use is discouraged since it could be removed at any time. Try to avoid using it.</p></div></div>

<p>The static <code><strong>Reflect</strong></code><strong><code>.enumerate()</code></strong> method used to return an iterator with the enumerable own and inherited properties of the target object, but has been removed in ECMAScript 2016 and is deprecated in browsers.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">Reflect.enumerate(target)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>target</code></dt>
 <dd>The target object on which to get the property.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>An iterator with the enumerable own and inherited properties of the target object.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>A <a title="The TypeError object represents an error when a value is not of the expected type." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a>, if <code>target</code> is not an <a title="The Object constructor creates an object wrapper." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"><code>Object</code></a>.</p>

<h2 id="Description">Description</h2>

<p>The <code>Reflect.enumerate</code> method returns an iterator with the enumerable own and inherited properties of the target object.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Reflect.enumerate()">Using <code>Reflect.enumerate()</code></h3>

<pre class="brush: js">var obj = { x: 1, y: 2 };

for (var name of Reflect.enumerate(obj)) {
  console.log(name);
}
// logs &quot;x&quot; and &quot;y&quot;
</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-reflect.enumerate" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="en-US">The definition of &apos;Reflect.enumerate&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition. Removed in ECMAScript 2016.</td>
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
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
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
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><a title="Reflect is a built-in object that provides methods for interceptable JavaScript operations. The methods are the same as those of proxy handlers. Reflect is not a function object, so it&apos;s not constructible." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect"><code>Reflect</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a></li>
</ul>
                
              