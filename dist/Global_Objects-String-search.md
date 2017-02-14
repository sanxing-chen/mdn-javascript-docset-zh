
                
                  
                    <p></p><section id="Quick_Links" class="Quick_links"><!-- --></section><p></p>

<h2 name="Summary" id="Summary">&#x6982;&#x8981;</h2>

<p><code><strong>search()</strong></code>&#xA0;&#x65B9;&#x6CD5;&#x6267;&#x884C;&#x4E00;&#x4E2A;&#x67E5;&#x627E;&#xFF0C;&#x770B;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#x4E0E;&#x4E00;&#x4E2A;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x662F;&#x5426;&#x5339;&#x914D;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><var>str</var>.search(<var>regexp</var>)</pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>regexp</code></dt>
 <dd>&#x4E00;&#x4E2A;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp">&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#xFF08;regular expression&#xFF09;</a>&#x5BF9;&#x8C61;&#x3002;&#x5982;&#x679C;&#x4F20;&#x5165;&#x4E00;&#x4E2A;&#x975E;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5BF9;&#x8C61;&#xFF0C;&#x5219;&#x4F1A;&#x4F7F;&#x7528; new RegExp(obj) &#x9690;&#x5F0F;&#x5730;&#x5C06;&#x5176;&#x8F6C;&#x6362;&#x4E3A;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5BF9;&#x8C61;&#x3002;</dd>
</dl>

<h3 name="Parameters" id="Parameters">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x5982;&#x679C;&#x5339;&#x914D;&#x6210;&#x529F;&#xFF0C;&#x5219;&#xA0;<code>search()</code>&#xA0;&#x8FD4;&#x56DE;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5728;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x9996;&#x6B21;&#x5339;&#x914D;&#x9879;&#x7684;&#x7D22;&#x5F15;&#x3002;&#x5426;&#x5219;&#xFF0C;&#x8FD4;&#x56DE; -1&#x3002;</p>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x5F53;&#x4F60;&#x60F3;&#x8981;&#x77E5;&#x9053;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x662F;&#x5426;&#x5B58;&#x5728;&#x67D0;&#x4E2A;&#x6A21;&#x5F0F;&#xFF08;pattern&#xFF09;&#x65F6;&#x53EF;&#x4F7F;&#x7528;&#xA0;<code>search</code>&#xFF0C;&#x7C7B;&#x4F3C;&#x4E8E;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x7684; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test" title="test() &#x65B9;&#x6CD5;&#x6267;&#x884C;&#x4E00;&#x4E2A;&#x68C0;&#x7D22;&#xFF0C;&#x7528;&#x6765;&#x67E5;&#x770B;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x4E0E;&#x6307;&#x5B9A;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x662F;&#x5426;&#x5339;&#x914D;&#x3002;&#x8FD4;&#x56DE; true &#x6216; false&#x3002;"><code>test</code></a> &#x65B9;&#x6CD5;&#x3002;&#x5F53;&#x8981;&#x4E86;&#x89E3;&#x66F4;&#x591A;&#x5339;&#x914D;&#x4FE1;&#x606F;&#x65F6;&#xFF0C;&#x53EF;&#x4F7F;&#x7528; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match" title="&#x5F53;&#x5B57;&#x7B26;&#x4E32;&#x5339;&#x914D;&#x5230;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#xFF08;regular expression&#xFF09;&#x65F6;&#xFF0C;match() &#x65B9;&#x6CD5;&#x4F1A;&#x63D0;&#x53D6;&#x5339;&#x914D;&#x9879;&#x3002;"><code>match</code></a>&#xFF08;&#x4F1A;&#x66F4;&#x6162;&#xFF09;&#xFF0C;&#x8BE5;&#x65B9;&#x6CD5;&#x7C7B;&#x4F3C;&#x4E8E;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x7684; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec" title="exec() &#x65B9;&#x6CD5;&#x4E3A;&#x6307;&#x5B9A;&#x7684;&#x4E00;&#x6BB5;&#x5B57;&#x7B26;&#x4E32;&#x6267;&#x884C;&#x641C;&#x7D22;&#x5339;&#x914D;&#x64CD;&#x4F5C;&#x3002;&#x5B83;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x662F;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x6216;&#x8005; null&#x3002;"><code>exec</code></a> &#x65B9;&#x6CD5;&#x3002;</p>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<h3 name="Example:_Using_search" id="Example:_Using_search">&#x4F8B;&#x5B50;&#xFF1A;&#x4F7F;&#x7528;&#xA0;<code>search</code></h3>

<p>&#x4E0B;&#x4F8B;&#x8BB0;&#x5F55;&#x4E86;&#x4E00;&#x4E2A;&#x6D88;&#x606F;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x5185;&#x5BB9;&#x53D6;&#x51B3;&#x4E8E;&#x5339;&#x914D;&#x662F;&#x5426;&#x6210;&#x529F;&#x3002;</p>

<pre class="brush:js">function testinput(re, str){
  var midstring;
  if (str.search(re) != -1){
    midstring = &quot; contains &quot;;
  } else {
    midstring = &quot; does not contain &quot;;
  }
  console.log (str + midstring + re);
}</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>ECMAScript 3rd Edition.</td>
   <td>Standard</td>
   <td>Initial definition.<br>
    Implemented in JavaScript 1.2</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.5.4.12" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">String.prototype.search</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.search" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">String.prototype.search</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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

<h3 name="See_also" id="See_also">Gecko&#x7279;&#x6709;&#x4E8B;&#x9879;</h3>

<ul>
 <li>&#x5728;<span title="(Firefox 8.0 / Thunderbird 8.0 / SeaMonkey 2.5)">Gecko&#xA0;8.0</span>&#x53CA;&#x4E4B;&#x524D;&#x7684;&#x7248;&#x672C;&#xFF0C;<code>search()&#x5B9E;&#x73B0;&#x6709;&#x95EE;&#x9898;&#xFF1B;&#x5F53;&#x4E0D;&#x4F20;&#x53C2;&#x6570;&#x6216;&#x8005;&#x53C2;&#x6570;&#x4E3A;undefined&#x8C03;&#x7528;&#x8BE5;&#x65B9;&#x6CD5;&#x65F6;&#xFF0C;&#x8BE5;&#x65B9;&#x6CD5;&#x5C06;&#x4E0D;&#x662F;&#x5339;&#x914D;&#x7A7A;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x800C;&#x662F;&#x5BF9;&#x5B57;&#x7B26;&#x4E32;&quot;undefined&quot;&#x8FDB;&#x884C;&#x5339;&#x914D;&#x3002;&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x5DF2;&#x88AB;&#x4FEE;&#x590D;&#xFF0C;&#x73B0;&#x5728;</code>&#xA0;<code>&quot;a&quot;.search()</code>&#xA0;&#x548C;&#xA0;<code>&quot;a&quot;.search(undefined)</code>&#xA0;&#x90FD;&#x80FD;&#x6B63;&#x786E;&#x8FD4;&#x56DE;&#xA0;0&#x3002;</li>
</ul>

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match" title="&#x5F53;&#x5B57;&#x7B26;&#x4E32;&#x5339;&#x914D;&#x5230;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#xFF08;regular expression&#xFF09;&#x65F6;&#xFF0C;match() &#x65B9;&#x6CD5;&#x4F1A;&#x63D0;&#x53D6;&#x5339;&#x914D;&#x9879;&#x3002;"><code>String.prototype.match()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec" title="exec() &#x65B9;&#x6CD5;&#x4E3A;&#x6307;&#x5B9A;&#x7684;&#x4E00;&#x6BB5;&#x5B57;&#x7B26;&#x4E32;&#x6267;&#x884C;&#x641C;&#x7D22;&#x5339;&#x914D;&#x64CD;&#x4F5C;&#x3002;&#x5B83;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x662F;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x6216;&#x8005; null&#x3002;"><code>RegExp.prototype.exec()</code></a></li>
</ul>
                  
                
              