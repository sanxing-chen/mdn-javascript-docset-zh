
                
                  
                    <p></p><section class="Quick_links" id="Quick_Links"><!-- --></section><p></p>

<p><strong><code>unshift()</code></strong> &#x65B9;&#x6CD5;&#x5C06;&#x4E00;&#x4E2A;&#x6216;&#x591A;&#x4E2A;&#x5143;&#x7D20;&#x6DFB;&#x52A0;&#x5230;&#x6570;&#x7EC4;&#x7684;&#x5F00;&#x5934;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x65B0;&#x6570;&#x7EC4;&#x7684;&#x957F;&#x5EA6;&#x3002;</p>

<pre class="brush:js">let a = [1, 2, 3];
a.unshift(4, 5);

console.log(a);
// [4, 5, 1, 2, 3]

</pre>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">arr.unshift(element1, ..., elementN)
</pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;&#x5217;&#x8868;</h3>

<dl>
 <dt><font face="Courier New, Andale Mono, monospace">element1, ..., elementN</font></dt>
 <dd>&#x8981;&#x6DFB;&#x52A0;&#x5230;&#x6570;&#x7EC4;&#x5F00;&#x5934;&#x7684;&#x5143;&#x7D20;&#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x5F53;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x8C03;&#x7528;&#x8BE5;&#x65B9;&#x6CD5;&#x65F6;&#xFF0C;&#x8FD4;&#x56DE;&#x5176; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length" title="length &#x5C5E;&#x6027;&#x8868;&#x793A;&#x4E00;&#x4E2A;&#x65E0;&#x7B26;&#x53F7; 32-bit &#x6574;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x4E2A;&#x6570;&#x3002;"><code>length</code></a> &#x5C5E;&#x6027;&#x503C;&#x3002;</p>

<dl>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p><code>unshift</code> &#x65B9;&#x6CD5;&#x4F1A;&#x5728;&#x8C03;&#x7528;&#x5B83;&#x7684;&#x7C7B;&#x6570;&#x7EC4;&#xFF08;array-like&#xFF09;&#x5BF9;&#x8C61;&#x7684;&#x5F00;&#x59CB;&#x4F4D;&#x7F6E;&#x63D2;&#x5165;&#x7ED9;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x3002;</p>

<p><code>unshift</code> &#x7279;&#x610F;&#x88AB;&#x8BBE;&#x8BA1;&#x6210;&#x5177;&#x6709;&#x901A;&#x7528;&#x6027;&#xFF1B;&#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x80FD;&#x591F;&#x901A;&#x8FC7;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call" title="call() &#x65B9;&#x6CD5;&#x5728;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;this&#x503C;&#x548C;&#x82E5;&#x5E72;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x503C;&#x7684;&#x524D;&#x63D0;&#x4E0B;&#x8C03;&#x7528;&#x67D0;&#x4E2A;&#x51FD;&#x6570;&#x6216;&#x65B9;&#x6CD5;."><code>call</code></a> &#x6216; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply" title="apply() &#x65B9;&#x6CD5;&#x5728;&#x6307;&#x5B9A;&#xA0;this&#xA0;&#x503C;&#x548C;&#x53C2;&#x6570;&#xFF08;&#x53C2;&#x6570;&#x4EE5;&#x6570;&#x7EC4;&#x6216;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x7684;&#x5F62;&#x5F0F;&#x5B58;&#x5728;&#xFF09;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#x8C03;&#x7528;&#x67D0;&#x4E2A;&#x51FD;&#x6570;&#x3002;"><code>apply</code></a>&#xA0;&#x65B9;&#x6CD5;&#x4F5C;&#x7528;&#x4E8E;&#x7C7B;&#x4F3C;&#x6570;&#x7EC4;&#x7684;&#x5BF9;&#x8C61;&#x4E0A;&#x3002;<span style="line-height: inherit;">&#x4E0D;&#x8FC7;&#x5BF9;&#x4E8E;&#x6CA1;&#x6709; length &#x5C5E;&#x6027;&#xFF08;&#x4EE3;&#x8868;&#x4ECE;0&#x5F00;&#x59CB;&#x7684;&#x4E00;&#x7CFB;&#x5217;&#x8FDE;&#x7EED;&#x7684;&#x6570;&#x5B57;&#x5C5E;&#x6027;&#x7684;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#xFF09;&#x7684;&#x5BF9;&#x8C61;&#xFF0C;&#x8C03;&#x7528;&#x8BE5;&#x65B9;&#x6CD5;&#x53EF;&#x80FD;&#x6CA1;&#x6709;&#x4EFB;&#x4F55;&#x610F;&#x4E49;&#x3002;</span></p>

<h2 name="Examples" id="Examples">&#x4F8B;&#x5B50;</h2>

<pre class="brush:js">var arr = [1, 2];

arr.unshift(0); //result of call is 3, the new array length
//arr is [0, 1, 2]

arr.unshift(-2, -1); // = 5
//arr is [-2, -1, 0, 1, 2]

arr.unshift( [-3] );
//arr is [[-3], -2, -1, 0, 1, 2]</pre>

<h2 id="&#x89C4;&#x8303;" style="margin-bottom: 20px; line-height: 30px;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>ECMAScript 3rd Edition</td>
   <td>Standard</td>
   <td>Initial definition.<br>
    Implemented in JavaScript 1.2</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.13" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Array.prototype.unshift</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.unshift" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Array.prototype.unshift</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;" style="margin-bottom: 20px; line-height: 30px;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
   <th style="line-height: 16px;">Feature</th>
   <th style="line-height: 16px;">Chrome</th>
   <th style="line-height: 16px;">Firefox (Gecko)</th>
   <th style="line-height: 16px;">Internet Explorer</th>
   <th style="line-height: 16px;">Opera</th>
   <th style="line-height: 16px;">Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>1.0</td>
   <td>1.0 (1.7 or earlier)</td>
   <td>5.5</td>
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

<h2 name="See_also" id="See_also" style="margin-bottom: 20px; line-height: 30px;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<p></p>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push" title="push()&#xA0;&#x65B9;&#x6CD5;&#x5C06;&#x4E00;&#x4E2A;&#x6216;&#x591A;&#x4E2A;&#x5143;&#x7D20;&#x6DFB;&#x52A0;&#x5230;&#x6570;&#x7EC4;&#x7684;&#x672B;&#x5C3E;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x7684;&#x65B0;&#x957F;&#x5EA6;&#x3002;"><code>Array.prototype.push()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop" title="pop()&#x65B9;&#x6CD5;&#x4ECE;&#x6570;&#x7EC4;&#x4E2D;&#x5220;&#x9664;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x8BE5;&#x5143;&#x7D20;&#x7684;&#x503C;&#x3002;&#x6B64;&#x65B9;&#x6CD5;&#x66F4;&#x6539;&#x6570;&#x7EC4;&#x7684;&#x957F;&#x5EA6;&#x3002;"><code>Array.prototype.pop()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift" title="shift() &#x65B9;&#x6CD5;&#x4ECE;&#x6570;&#x7EC4;&#x4E2D;&#x5220;&#x9664;&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x8BE5;&#x5143;&#x7D20;&#x3002;&#x6B64;&#x65B9;&#x6CD5;&#x66F4;&#x6539;&#x6570;&#x7EC4;&#x7684;&#x957F;&#x5EA6;&#x3002;"><code>Array.prototype.shift()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat" title="concat()&#xA0;&#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x5408;&#x5E76;&#x4E24;&#x4E2A;&#x6216;&#x591A;&#x4E2A;&#x6570;&#x7EC4;&#x3002;&#x6B64;&#x65B9;&#x6CD5;&#x4E0D;&#x4F1A;&#x66F4;&#x6539;&#x73B0;&#x6709;&#x6570;&#x7EC4;&#xFF0C;&#x800C;&#x662F;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x6570;&#x7EC4;&#x3002;"><code>Array.prototype.concat()</code></a></li>
</ul>
                  
                
              