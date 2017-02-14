
                
                  
                    <p></p><section class="Quick_links" id="Quick_Links"><!-- --></section><p></p>
<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>
<p>&#x5F53;&#x5B57;&#x7B26;&#x4E32;&#x5339;&#x914D;&#x5230;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#xFF08;regular expression&#xFF09;&#x65F6;&#xFF0C;<code><strong>match()</strong></code> &#x65B9;&#x6CD5;&#x4F1A;&#x63D0;&#x53D6;&#x5339;&#x914D;&#x9879;&#x3002;</p>
<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>
<pre class="syntaxbox"><code><em>str</em>.match(regexp);</code></pre>
<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>
<dl>
 <dt>
  <code>regexp</code></dt>
 <dd>
  &#x4E00;&#x4E2A;<a title="JavaScript/Reference/Global Objects/RegExp" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp">&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;</a>&#x5BF9;&#x8C61;&#x3002;&#x5982;&#x679C;&#x4F20;&#x5165;&#x4E00;&#x4E2A;&#x975E;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5BF9;&#x8C61;&#xFF0C;&#x5219;&#x4F1A;&#x9690;&#x5F0F;&#x5730;&#x4F7F;&#x7528; <code>new RegExp(obj)</code>&#xA0;&#x5C06;&#x5176;&#x8F6C;&#x6362;&#x4E3A;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5BF9;&#x8C61;&#x3002;</dd>
</dl>
<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>
<dl>
 <dt>
  <code>array</code></dt>
 <dd>
  &#x4E00;&#x4E2A;&#x5305;&#x542B;&#x5339;&#x914D;&#x7ED3;&#x679C;&#x7684;&#x6570;&#x7EC4;&#xFF0C;&#x5982;&#x679C;&#x6CA1;&#x6709;&#x5339;&#x914D;&#x9879;&#xFF0C;&#x5219;&#x8FD4;&#x56DE; <code>null</code>&#x3002;</dd>
</dl>
<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>
<p>&#x5982;&#x679C;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x6CA1;&#x6709;&#xA0;<code>g</code> &#x6807;&#x5FD7;&#xFF0C;&#x8FD4;&#x56DE;&#x548C; <a title="exec() &#x65B9;&#x6CD5;&#x4E3A;&#x6307;&#x5B9A;&#x7684;&#x4E00;&#x6BB5;&#x5B57;&#x7B26;&#x4E32;&#x6267;&#x884C;&#x641C;&#x7D22;&#x5339;&#x914D;&#x64CD;&#x4F5C;&#x3002;&#x5B83;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x662F;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x6216;&#x8005; null&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec"><code>RegExp.exec(str)</code></a> &#x76F8;&#x540C;&#x7684;&#x7ED3;&#x679C;&#x3002;&#x800C;&#x4E14;&#x8FD4;&#x56DE;&#x7684;&#x6570;&#x7EC4;&#x62E5;&#x6709;&#x4E00;&#x4E2A;&#x989D;&#x5916;&#x7684;<span style="line-height: 1.572;">&#xA0;</span><code style="font-size: 14px;">input</code><span style="line-height: 1.572;">&#xA0;&#x5C5E;&#x6027;&#xFF0C;&#x8BE5;&#x5C5E;&#x6027;&#x5305;&#x542B;&#x539F;&#x59CB;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x53E6;&#x5916;&#xFF0C;&#x8FD8;&#x62E5;&#x6709;&#x4E00;&#x4E2A;&#xA0;</span><code style="font-size: 14px;">index</code><span style="line-height: 1.572;">&#xA0;&#x5C5E;&#x6027;&#xFF0C;&#x8BE5;&#x5C5E;&#x6027;&#x8868;&#x793A;&#x5339;&#x914D;&#x7ED3;&#x679C;&#x5728;&#x539F;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x7684;&#x7D22;&#x5F15;&#xFF08;&#x4EE5;0&#x5F00;&#x59CB;&#xFF09;&#x3002;</span></p>
<p>&#x5982;&#x679C;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5305;&#x542B;&#xA0;<code>g</code> &#x6807;&#x5FD7;&#xFF0C;&#x5219;&#x8BE5;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x6240;&#x6709;&#x5339;&#x914D;&#x7ED3;&#x679C;&#x7684;&#x6570;&#x7EC4;&#x3002;&#x5982;&#x679C;&#x6CA1;&#x6709;&#x5339;&#x914D;&#x5230;&#xFF0C;&#x5219;&#x8FD4;&#x56DE;&#xA0;<code>null</code>&#x3002;</p>
<h3 name="Notes" id="Notes">&#x53C2;&#x770B;&#xFF1A;<code>RegExp</code> &#x65B9;&#x6CD5;</h3>
<ul>
 <li>&#x5982;&#x679C;&#x4F60;&#x9700;&#x8981;&#x77E5;&#x9053;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x662F;&#x5426;&#x5339;&#x914D;&#x4E00;&#x4E2A;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#xFF08;<code>RegExp</code>&#xFF09;&#xFF0C;&#x53EF;&#x4F7F;&#x7528; <a title="test() &#x65B9;&#x6CD5;&#x6267;&#x884C;&#x4E00;&#x4E2A;&#x68C0;&#x7D22;&#xFF0C;&#x7528;&#x6765;&#x67E5;&#x770B;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x4E0E;&#x6307;&#x5B9A;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x662F;&#x5426;&#x5339;&#x914D;&#x3002;&#x8FD4;&#x56DE; true &#x6216; false&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test"><code>RegExp.test(str)</code></a>&#x3002;</li>
 <li>&#x5982;&#x679C;&#x4F60;&#x53EA;&#x662F;&#x9700;&#x8981;&#x7B2C;&#x4E00;&#x4E2A;&#x5339;&#x914D;&#x7ED3;&#x679C;&#xFF0C;&#x4F60;&#x53EF;&#x80FD;&#x60F3;&#x8981;&#x4F7F;&#x7528; <a title="exec() &#x65B9;&#x6CD5;&#x4E3A;&#x6307;&#x5B9A;&#x7684;&#x4E00;&#x6BB5;&#x5B57;&#x7B26;&#x4E32;&#x6267;&#x884C;&#x641C;&#x7D22;&#x5339;&#x914D;&#x64CD;&#x4F5C;&#x3002;&#x5B83;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x662F;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x6216;&#x8005; null&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec"><code>RegExp.exec(str)</code></a>&#x3002;</li>
</ul>
<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>
<h3 name="Example:_Using_match" id="Example:_Using_match">&#x4F8B;&#x5B50;&#xFF1A;&#x4F7F;&#x7528;&#xA0;<code>match</code></h3>
<p>&#x5728;&#x4E0B;&#x4F8B;&#x4E2D;&#xFF0C;&#x4F7F;&#x7528;&#xA0;<code>match</code> &#x67E5;&#x627E; &quot;<code>Chapter</code>&quot; &#x7D27;&#x8DDF;&#x7740; 1 &#x4E2A;&#x6216;&#x591A;&#x4E2A;&#x6570;&#x503C;&#x5B57;&#x7B26;&#xFF0C;&#x518D;&#x7D27;&#x8DDF;&#x7740;&#x4E00;&#x4E2A;&#x5C0F;&#x6570;&#x70B9;&#x548C;&#x6570;&#x503C;&#x5B57;&#x7B26; 0 &#x6B21;&#x6216;&#x591A;&#x6B21;&#x3002;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5305;&#x542B; <code>i</code> &#x6807;&#x5FD7;&#xFF0C;&#x56E0;&#x6B64;&#x5927;&#x5C0F;&#x5199;&#x4F1A;&#x88AB;&#x5FFD;&#x7565;&#x3002;</p>
<pre class="brush:js">var str = &quot;For more information, see Chapter 3.4.5.1&quot;;
var re = /(chapter \d+(\.\d)*)/i;
var found = str.match(re);

console.log(found);

// logs [&quot;Chapter 3.4.5.1&quot;, &quot;Chapter 3.4.5.1&quot;, &quot;.1&quot;]

// &quot;<code>Chapter 3.4.5.1</code>&quot; is the first match and the first value 
//  remembered from <code>(Chapter \d+(\.\d)*)</code>.

// &quot;<code>.1</code>&quot; is the last value remembered from <code>(\.\d)</code>.</pre>
<h3 name="Example:_Using_global_and_ignore_case_flags_with_match" id="Example:_Using_global_and_ignore_case_flags_with_match">&#x4F8B;&#x5B50;&#xFF1A;<code>match</code> &#x4F7F;&#x7528;&#x5168;&#x5C40;&#xFF08;global&#xFF09;&#x548C;&#x5FFD;&#x7565;&#x5927;&#x5C0F;&#x5199;&#xFF08;ignore case&#xFF09;&#x6807;&#x5FD7;</h3>
<p>&#x4E0B;&#x4F8B;&#x5C55;&#x793A;&#x4E86;&#xA0;<code>match</code>&#xA0;&#x4F7F;&#x7528; global &#x548C; ignore case &#x6807;&#x5FD7;&#x3002;A-E&#x3001;a-e &#x7684;&#x6240;&#x6709;&#x5B57;&#x6BCD;&#x5C06;&#x4F1A;&#x4F5C;&#x4E3A;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x7684;&#x5143;&#x7D20;&#x8FD4;&#x56DE;&#x3002;</p>
<pre class="brush:js">var str = &quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz&quot;;
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);

console.log(matches_array); 
// <code>[&apos;A&apos;, &apos;B&apos;, &apos;C&apos;, &apos;D&apos;, &apos;E&apos;, &apos;a&apos;, &apos;b&apos;, &apos;c&apos;, &apos;d&apos;, &apos;e&apos;]</code>
</pre>
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
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.5.4.10" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">String.prototype.match</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.match" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">String.prototype.match</small></a></td>
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
<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>
<ul>
 <li><a title="exec() &#x65B9;&#x6CD5;&#x4E3A;&#x6307;&#x5B9A;&#x7684;&#x4E00;&#x6BB5;&#x5B57;&#x7B26;&#x4E32;&#x6267;&#x884C;&#x641C;&#x7D22;&#x5339;&#x914D;&#x64CD;&#x4F5C;&#x3002;&#x5B83;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x662F;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x6216;&#x8005; null&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec"><code>RegExp.prototype.exec()</code></a></li>
 <li><a title="test() &#x65B9;&#x6CD5;&#x6267;&#x884C;&#x4E00;&#x4E2A;&#x68C0;&#x7D22;&#xFF0C;&#x7528;&#x6765;&#x67E5;&#x770B;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x4E0E;&#x6307;&#x5B9A;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x662F;&#x5426;&#x5339;&#x914D;&#x3002;&#x8FD4;&#x56DE; true &#x6216; false&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test"><code>RegExp.prototype.test()</code></a></li>
</ul>
                  
                
              