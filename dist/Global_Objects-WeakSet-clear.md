
                
                  <div><section id="Quick_Links" class="Quick_links"><!-- --></section> <div class="overheadIndicator obsolete obsoleteHeader"><p><strong><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span> Obsolete</strong><br>This feature is obsolete. Although it may still work in some browsers, its use is discouraged since it could be removed at any time. Try to avoid using it.</p></div></div>

<p>The <code><strong>clear()</strong></code> method used to remove all elements from a <code>WeakSet</code> object, but is no longer part of ECMAScript and its implementations.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><em>ws</em>.clear();</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Using_the_clear_method">Using the <code>clear</code> method</h3>

<pre class="brush: js example-bad">var ws = new WeakSet();

ws.add(window);
ws.has(window);  // true

ws.clear();

ws.has(window); // false
</pre>

<h2 id="Specifications">Specifications</h2>

<p>Not part of any current specification or draft. The method was planned&#xA0;for inclusion in ECMAScript 6, but dropped from the draft specification in revision 28 (October 14, 2014). Browser support for the feature was subsequently removed, and it never became part of the final&#xA0;standard. </p>

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
   <td>36</td>
   <td><span style="color: #f00;">No&#xA0;support</span> [1]</td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td>23</td>
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
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span> [1]</td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
  </tr>
 </tbody>
</table>
</div>

<p>[1] Added to Firefox in version 34, but removed in version 46. See&#xA0;<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1101817" class="external" title="FIXED: Remove Weak{Map,Set}.prototype.clear">bug&#xA0;1101817</a>.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet" title="The WeakSet object lets you store weakly held objects in a collection."><code>WeakSet</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/delete" title="The delete() method removes the specified element from a WeakSet object."><code>WeakSet.prototype.delete()</code></a></li>
</ul>
                
              