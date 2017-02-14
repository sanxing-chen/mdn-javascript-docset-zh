
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section> <div class="overheadIndicator obsolete obsoleteHeader"><p><strong><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span> &#x5DF2;&#x5E9F;&#x5F03;</strong><br>This feature is obsolete. Although it may still work in some browsers, its use is discouraged since it could be removed at any time. Try to avoid using it.</p></div></div>

<p><code><strong>clear()</strong></code>&#x7528;&#x6765;&#x4ECE; <code>WeakMap&#x5BF9;&#x8C61;&#x4E2D;&#x79FB;&#x9664;&#x6240;&#x6709;&#x5143;&#x7D20;&#x3002;</code>&#x4F46;&#x4E0D;&#x518D;&#x662F;ECMAScript&#x548C;&#x5B83;&#x7684;&#x5B9E;&#x73B0;&#x90E8;&#x5206;</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><em>wm</em>.clear();</pre>

<h2 id="Examples">Examples</h2>

<h3 id="&#x4F7F;&#x7528;_clear_&#x65B9;&#x6CD5;">&#x4F7F;&#x7528; <code>clear</code> &#x65B9;&#x6CD5;</h3>

<pre class="brush: js;highlight:[10] example-bad">var wm = new WeakMap();
var obj = {};

wm.set(obj, &quot;foo&quot;);
wm.set(window, &quot;bar&quot;);

wm.has(obj); // true
wm.has(window); // true

wm.clear();

wm.has(obj)  // false
wm.has(window)  // false
</pre>

<h2 id="Specifications">Specifications</h2>

<p>Not part of any current specification or draft. This method was part of the ECMAScript 6 draft specification until revision 28 (version of October 14, 2014), but has been removed in later versions of the draft. It will not be part of the final standard.</p>

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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span> [1]</td>
   <td>11</td>
   <td>23</td>
   <td>7.1</td>
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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span> [1]</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>8</td>
  </tr>
 </tbody>
</table>
</div>

<p>[1] The <code>clear()</code> method has been supported from version 20 until version 45 (including).</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/WeakMap" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>WeakMap</code></a></li>
</ul>
                  
                
              