
                
                  
                    <div>
 <section class="Quick_links" id="Quick_Links"><!-- --></section></div>
<h2 id="Summary" name="Summary">&#x6982;&#x8FF0;</h2>
<p><code><strong>toString()</strong></code> &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x5F62;&#x5F0F;&#x3002;</p>
<h2 id="Syntax" name="Syntax">&#x8BED;&#x6CD5;</h2>
<pre class="syntaxbox"><code><em>str</em>.toString()</code></pre>
<h2 id="Description" name="Description">&#x63CF;&#x8FF0;</h2>
<p><code>String</code> &#x5BF9;&#x8C61;&#x8986;&#x76D6;&#x4E86;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object &#x6784;&#x9020;&#x51FD;&#x6570;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5305;&#x88C5;&#xFF08;object wrapper&#xFF09;&#x3002;"><code>Object</code></a> &#x5BF9;&#x8C61;&#x7684;&#xA0;<code>toString</code> &#x65B9;&#x6CD5;&#xFF1B;&#x5E76;&#x6CA1;&#x6709;&#x7EE7;&#x627F; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString" title="toString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x4EE3;&#x8868;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;"><code>Object.toString()</code></a>&#x3002;&#x5BF9;&#x4E8E; <code>String</code> &#x5BF9;&#x8C61;&#xFF0C;<code>toString</code> &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x5F62;&#x5F0F;&#xFF0C;&#x548C; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf" title="valueOf() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#xFF08;String object&#xFF09;&#x7684;&#x539F;&#x59CB;&#x503C;&#xFF08;primitive value&#xFF09;&#x3002;"><code>String.prototype.valueOf()</code></a> &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x503C;&#x4E00;&#x6837;&#x3002;</p>
<h2 id="Examples" name="Examples">&#x793A;&#x4F8B;</h2>
<h3 id="Example:_Using_toString" name="Example:_Using_toString">&#x4F8B;&#x5B50;&#xFF1A;&#x4F7F;&#x7528;&#xA0;<code>toString</code></h3>
<p>&#x4E0B;&#x4F8B;&#x8F93;&#x51FA;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#xFF08;String object&#xFF09;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x503C;&#xFF1A;</p>
<pre class="brush:js">var x = new String(&quot;Hello world&quot;);

alert(x.toString())      // &#x8F93;&#x51FA; &quot;Hello world&quot;</pre>
<h2 id=".E8.A7.84.E8.8C.83">&#x89C4;&#x8303;</h2>
<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition.</td>
   <td>Standard</td>
   <td>Initial definition.<br>
    Implemented in JavaScript 1.1.</td>
  </tr>
  <tr>
   <td><a class="external" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.5.4.2" hreflang="en" lang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">String.prototype.toString</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a class="external" href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.tostring" hreflang="en" lang="en">ECMAScript 6 (ECMA-262)<br><small lang="zh-CN">String.prototype.toString</small></a></td>
   <td><span class="spec-RC">Release Candidate</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>
<h2 id=".E6.B5.8F.E8.A7.88.E5.99.A8.E5.85.BC.E5.AE.B9.E6.80.A7">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>
<p></p><div class="htab"> 
    <a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a> 
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
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
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
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   </tr>
  </tbody>
 </table>
</div>
<h2 id="See_also" name="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>
<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource" title="&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x6E90;&#x4EE3;&#x7801;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;."><code>Object.prototype.toSource()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf" title="valueOf() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#xFF08;String object&#xFF09;&#x7684;&#x539F;&#x59CB;&#x503C;&#xFF08;primitive value&#xFF09;&#x3002;"><code>String.prototype.valueOf()</code></a></li>
</ul>
                  
                
              