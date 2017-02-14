
                
                  
                    <div>
 <section class="Quick_links" id="Quick_Links"><!-- --></section></div>
<h2 id="Summary" name="Summary">&#x6982;&#x8FF0;</h2>
<p><code><strong>Number.MIN_VALUE</strong></code> &#x5C5E;&#x6027;&#x8868;&#x793A;&#x5728; JavaScript &#x4E2D;&#x6240;&#x80FD;&#x8868;&#x793A;&#x7684;&#x6700;&#x5C0F;&#x7684;&#x6B63;&#x503C;&#x3002;</p>
<p></p><table class="standard-table"> 
  <thead> 
    <tr> 
      <th class="header" colspan="2"><code>Number.MIN_VALUE</code> &#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x7279;&#x6027;&#xFF1A;</th> 
    </tr> 
  </thead> 
  <tbody> 
    <tr> 
      <td>writable</td> 
      <td>false</td> 
    </tr> 
    <tr> 
      <td>enumerable</td> 
      <td>false</td> 
    </tr> 
    <tr> 
      <td>configurable</td> 
      <td>false</td> 
    </tr> 
  </tbody> 
</table><p></p>
<h2 id="Description" name="Description">&#x63CF;&#x8FF0;</h2>
<p><code>MIN_VALUE</code>&#xA0;&#x5C5E;&#x6027;&#x662F; JavaScript &#x91CC;&#x6700;&#x63A5;&#x8FD1; 0 &#x7684;&#x6B63;&#x503C;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x6700;&#x5C0F;&#x7684;&#x8D1F;&#x503C;&#x3002;</p>
<p><code>MIN_VALUE</code> &#x7684;&#x503C;&#x7EA6;&#x4E3A; 5e-324&#x3002;&#x5C0F;&#x4E8E;&#xA0;<code>MIN_VALUE</code> (&quot;underflow values&quot;) &#x7684;&#x503C;&#x5C06;&#x4F1A;&#x8F6C;&#x6362;&#x4E3A; 0&#x3002;</p>
<p>&#x56E0;&#x4E3A;&#xA0;<code>MIN_VALUE</code> &#x662F;&#xA0;<code>Number</code>&#xA0;&#x7684;&#x4E00;&#x4E2A;&#x9759;&#x6001;&#x5C5E;&#x6027;&#xFF0C;&#x56E0;&#x6B64;&#x5E94;&#x8BE5;&#x76F4;&#x63A5;&#x4F7F;&#x7528;&#xFF1A;&#xA0;<code>Number.MIN_VALUE&#xFF0C;</code>&#xA0;&#x800C;&#x4E0D;&#x662F;&#x4F5C;&#x4E3A;&#x4E00;&#x4E2A;&#x521B;&#x5EFA;&#x7684;&#xA0;<code>Number</code> &#x5B9E;&#x4F8B;&#x7684;&#x5C5E;&#x6027;&#x3002;</p>
<h2 id="Examples" name="Examples">&#x793A;&#x4F8B;</h2>
<h3 id="Example:_Using_MIN_VALUE" name="Example:_Using_MIN_VALUE">&#x4F8B;&#x5B50;&#xFF1A;&#x4F7F;&#x7528;&#xA0;<code>MIN_VALUE</code></h3>
<p>&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x91CC;&#x4E24;&#x4E2A;&#x6570;&#x503C;&#x76F8;&#x9664;&#x3002;&#x5982;&#x679C;&#x7ED3;&#x679C;&#x5927;&#x4E8E;&#x6216;&#x7B49;&#x4E8E;&#xA0;<code>MIN_VALUE</code>&#xFF0C;&#x5219;&#x8C03;&#x7528;&#xA0;<code>func1</code> &#x51FD;&#x6570;&#xFF1B;&#x5426;&#x5219;&#xFF0C;&#x8C03;&#x7528;&#xA0;<code>func2</code>&#xA0;&#x51FD;&#x6570;&#x3002;</p>
<pre class="brush:js">if (num1 / num2 &gt;= Number.MIN_VALUE) {
    func1();
} else {
    func2();
}</pre>
<h2 id=".E8.A7.84.E8.8C.83">&#x89C4;&#x8303;</h2>
<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x7248;&#x672C;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x89E3;</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition. Implemented in JavaScript 1.1</td>
   <td>Standard</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a class="external" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.7.3.3" hreflang="en" lang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Number.MIN_VALUE</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a class="external" href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.min_value" hreflang="en" lang="en">ECMAScript 6 (ECMA-262)<br><small lang="zh-CN">Number.MIN_VALUE</small></a></td>
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
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE" title="Number.MAX_VALUE &#x5C5E;&#x6027;&#x8868;&#x793A;&#x5728; JavaScript &#x91CC;&#x6240;&#x80FD;&#x8868;&#x793A;&#x7684;&#x6700;&#x5927;&#x6570;&#x503C;&#x3002;"><code>Number.MAX_VALUE</code></a></li>
</ul>
                  
                
              