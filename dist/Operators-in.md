
                
                  
                    <p>&#xA0;</p>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p>&#x5982;&#x679C;&#x6307;&#x5B9A;&#x7684;&#x5C5E;&#x6027;&#x5B58;&#x5728;&#x4E8E;&#x6307;&#x5B9A;&#x7684;&#x5BF9;&#x8C61;&#x4E2D;&#xFF0C;&#x5219;&#xA0;<code>in</code>&#xA0;<code>&#x8FD0;&#x7B97;&#x7B26;&#x4F1A;&#x8FD4;&#x56DE;</code>&#xA0;<code>true</code>&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre><code><em>prop</em> in <em>objectName</em> </code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>prop</code></dt>
 <dd>&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x7C7B;&#x578B;&#x6216;&#x8005;symbol&#x7C7B;&#x578B;&#x7684;&#x5C5E;&#x6027;&#x540D;&#xFF0C;&#x6216;&#x8005;&#x6570;&#x7EC4;&#x7D22;&#x5F15;&#x3002;</dd>
</dl>

<dl>
 <dt><code>objectName</code></dt>
 <dd>&#x9700;&#x8981;&#x68C0;&#x6D4B;&#x7684;&#x5BF9;&#x8C61;&#x3002;</dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x6F14;&#x793A;&#x4E86;&#x4E00;&#x4E9B;&#xA0;<code>in</code>&#xA0;&#x8FD0;&#x7B97;&#x7B26;&#x7684;&#x7528;&#x6CD5;&#x3002;</p>

<pre class="brush:js">// &#x6570;&#x7EC4;
var trees = new Array(&quot;redwood&quot;, &quot;bay&quot;, &quot;cedar&quot;, &quot;oak&quot;, &quot;maple&quot;);
0 in trees        // &#x8FD4;&#x56DE;true
3 in trees        // &#x8FD4;&#x56DE;true
6 in trees        // &#x8FD4;&#x56DE;false
&quot;bay&quot; in trees    // &#x8FD4;&#x56DE;false (&#x5FC5;&#x987B;&#x4F7F;&#x7528;&#x7D22;&#x5F15;&#x53F7;,&#x800C;&#x4E0D;&#x662F;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x7684;&#x503C;)
&quot;length&quot; in trees // &#x8FD4;&#x56DE;true (length&#x662F;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x5C5E;&#x6027;)

// &#x5185;&#x7F6E;&#x5BF9;&#x8C61;
&quot;PI&quot; in Math          // &#x8FD4;&#x56DE;true

// &#x81EA;&#x5B9A;&#x4E49;&#x5BF9;&#x8C61;
var mycar = {make: &quot;Honda&quot;, model: &quot;Accord&quot;, year: 1998};
&quot;make&quot; in mycar  // &#x8FD4;&#x56DE;true
&quot;model&quot; in mycar // &#x8FD4;&#x56DE;true
</pre>

<p>in&#x53F3;&#x64CD;&#x4F5C;&#x6570;&#x5FC5;&#x987B;&#x662F;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x503C;&#x3002;&#x6BD4;&#x5982;&#xFF0C;&#x53EF;&#x4EE5;&#x662F;&#x4E00;&#x4E2A;<code>String</code>&#x5305;&#x88C5;&#x5BF9;&#x8C61;&#xFF0C;&#x4F46;&#x4E0D;&#x80FD;&#x662F;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x539F;&#x59CB;&#x503C;&#x3002;</p>

<pre class="brush:js">var color1 = new String(&quot;green&quot;);
&quot;length&quot; in color1 // &#x8FD4;&#x56DE;true
var color2 = &quot;coral&quot;;
&quot;length&quot; in color2 // &#x62A5;&#x9519;(color2&#x4E0D;&#x662F;&#x5BF9;&#x8C61;)
</pre>

<h3 name="Using_in_with_deleted_or_undefined_properties" id="Using_in_with_deleted_or_undefined_properties">&#x4F7F;&#x7528;delete&#x8FD0;&#x7B97;&#x7B26;&#x548C;&#x5C06;&#x5C5E;&#x6027;&#x8D4B;&#x503C;&#x4E3A;undefined</h3>

<p>&#x5982;&#x679C;&#x4F60;&#x4F7F;&#x7528;&#xA0;<code><a title="zh-CN/docs/JavaScript/Reference/Operators/Special/delete" href="/zh-CN/docs/JavaScript/Reference/Operators/delete">delete</a></code>&#xA0;&#x8FD0;&#x7B97;&#x7B26;&#x5220;&#x9664;&#x4E86;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&#xFF0C;&#x5219;&#xA0;<code>in</code>&#xA0;&#x8FD0;&#x7B97;&#x7B26;&#x5BF9;&#x6240;&#x5220;&#x9664;&#x5C5E;&#x6027;&#x8FD4;&#x56DE;&#xA0;<code>false</code>&#x3002;</p>

<pre class="brush:js">var mycar = {make: &quot;Honda&quot;, model: &quot;Accord&quot;, year: 1998};
delete mycar.make;
&quot;make&quot; in mycar;  // &#x8FD4;&#x56DE;false

var trees = new Array(&quot;redwood&quot;, &quot;bay&quot;, &quot;cedar&quot;, &quot;oak&quot;, &quot;maple&quot;);
delete trees[3];
3 in trees; // &#x8FD4;&#x56DE;false
</pre>

<p>&#x5982;&#x679C;&#x4F60;&#x53EA;&#x662F;&#x5C06;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x8D4B;&#x503C;&#x4E3A;&#xA0;<code>undefined</code>&#xFF0C;&#x800C;&#x6CA1;&#x6709;&#x7528;&#xA0;<code>delete</code>&#xA0;&#x5220;&#x9664;&#x5B83;&#xFF0C;&#x5219;&#xA0;<code>in</code>&#xA0;&#x8FD0;&#x7B97;&#x4ECD;&#x7136;&#x4F1A;&#x8FD4;&#x56DE;<code>true</code>&#x3002;</p>

<pre class="brush:js">var mycar = {make: &quot;Honda&quot;, model: &quot;Accord&quot;, year: 1998};
mycar.make = undefined;
&quot;make&quot; in mycar;  // &#x8FD4;&#x56DE;true
</pre>

<pre class="brush:js">var trees = new Array(&quot;redwood&quot;, &quot;bay&quot;, &quot;cedar&quot;, &quot;oak&quot;, &quot;maple&quot;);
trees[3] = undefined;
3 in trees; // &#x8FD4;&#x56DE;true
</pre>

<h3 name="Inherited_properties" id="Inherited_properties">&#x7EE7;&#x627F;&#x5C5E;&#x6027;</h3>

<p>&#x5982;&#x679C;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&#x662F;&#x4ECE;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x7EE7;&#x627F;&#x6765;&#x7684;&#xFF0C;<code>in</code> &#x8FD0;&#x7B97;&#x7B26;&#x4E5F;&#x4F1A;&#x8FD4;&#x56DE;&#xA0;<code>true</code>&#x3002;</p>

<pre class="brush:js">&quot;toString&quot; in {}; // &#x8FD4;&#x56DE;true
</pre>

<h2 style="margin-bottom: 20px; line-height: 30px;" id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <td>&#x89C4;&#x8303;</td>
   <td>&#x72B6;&#x6001;</td>
   <td>&#x5907;&#x6CE8;</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="https://tc39.github.io/ecma262/#s&lt;br&gt;
    ec-relational-operators">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Relational Operators</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-relational-operators">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Relational Operators</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-11.8.7">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">The in Operator</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf#sec-11.8.7">ECMAScript 3rd Edition (ECMA-262)<br><small lang="zh-CN">The in Operator</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition. Implemented in JavaScript 1.4.</td>
  </tr>
 </tbody>
</table>

<h2 style="margin-bottom: 20px; line-height: 30px;" id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;"><br>
 &#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<div id="compat-desktop">
<table class="compat-table">
 <tbody>
  <tr>
   <th style="line-height: 16px;">Feature</th>
   <th style="line-height: 16px;">Chrome</th>
   <th style="line-height: 16px;">Firefox (Gecko)</th>
   <th style="line-height: 16px;">Internet Explorer</th>
   <th style="line-height: 16px;">Opera</th>
   <th style="line-height: 16px;">Safari</th>
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
   <th style="line-height: 16px;">Feature</th>
   <th style="line-height: 16px;">Android</th>
   <th style="line-height: 16px;">Chrome for Android</th>
   <th style="line-height: 16px;">Firefox Mobile (Gecko)</th>
   <th style="line-height: 16px;">IE Mobile</th>
   <th style="line-height: 16px;">Opera Mobile</th>
   <th style="line-height: 16px;">Safari Mobile</th>
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

<p>&#xA0;</p>

<h2 style="margin-bottom: 20px; line-height: 30px;" name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="zh-CN/docs/JavaScript/Reference/Operators/Special/delete" href="/zh-CN/docs/JavaScript/Reference/Operators/delete">delete</a></li>
 <li><a title="zh-CN/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty" href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty">Object.prototype.hasOwnProperty</a></li>
 <li><a title="&#x9759;&#x6001;&#x65B9;&#x6CD5;&#xA0;Reflect.has() &#x4F5C;&#x7528;&#x4E0E;&#xA0;in &#x64CD;&#x4F5C;&#x7B26;&#xA0;&#x76F8;&#x540C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/has"><code>Reflect.has()</code></a></li>
 <li><a title="/zh-CN/docs/Enumerability_and_ownership_of_properties" href="/zh-CN/docs/Enumerability_and_ownership_of_properties">&#x5C5E;&#x6027;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x6027;&#x548C;&#x6240;&#x6709;&#x6743;</a></li>
</ul>
                  
                
              