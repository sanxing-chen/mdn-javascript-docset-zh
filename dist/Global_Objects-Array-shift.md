
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>shift()</strong></code> &#x65B9;&#x6CD5;&#x4ECE;&#x6570;&#x7EC4;&#x4E2D;<strong>&#x5220;&#x9664;</strong>&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x8BE5;&#x5143;&#x7D20;&#x7684;&#x503C;&#x3002;&#x6B64;&#x65B9;&#x6CD5;&#x66F4;&#x6539;&#x6570;&#x7EC4;&#x7684;&#x957F;&#x5EA6;&#x3002;</p>

<pre><code>let a = [1, 2, 3];
let b = a.shift();

console.log(a); 
// [2, 3]

console.log(b); 
// 1</code>
</pre>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;&#xA0;</h3>

<p>&#x4ECE;&#x6570;&#x7EC4;&#x4E2D;&#x5220;&#x9664;&#x7684;&#x5143;&#x7D20;; <a title="undefined&#x6709;&#x591A;&#x91CD;&#x89D2;&#x8272;,&#x901A;&#x5E38;&#x60C5;&#x51B5;&#x4E0B;,&#x6211;&#x4EEC;&#x6240;&#x8BF4;&#x7684;undefined&#x90FD;&#x6307;&#x7684;&#x662F;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&quot;undefined&quot;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined"><code>undefined</code></a> &#x5982;&#x679C;&#x6570;&#x7EC4;&#x4E3A;&#x7A7A;&#x3002;&#xA0;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>arr</var>.shift()</code></pre>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>shift</code> &#x65B9;&#x6CD5;&#x79FB;&#x9664;&#x7D22;&#x5F15;&#x4E3A; 0 &#x7684;&#x5143;&#x7D20;(&#x5373;&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;)&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x88AB;&#x79FB;&#x9664;&#x7684;&#x5143;&#x7D20;&#xFF0C;&#x5176;&#x4ED6;&#x5143;&#x7D20;&#x7684;&#x7D22;&#x5F15;&#x503C;&#x968F;&#x4E4B;&#x51CF; 1&#x3002;&#x5982;&#x679C; <a title="length &#x5C5E;&#x6027;&#x8868;&#x793A;&#x4E00;&#x4E2A;&#x65E0;&#x7B26;&#x53F7; 32-bit &#x6574;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x4E2A;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length"><code>length</code></a> &#x5C5E;&#x6027;&#x7684;&#x503C;&#x4E3A; 0 (&#x957F;&#x5EA6;&#x4E3A; 0)&#xFF0C;&#x5219;&#x8FD4;&#x56DE; <a title="undefined&#x6709;&#x591A;&#x91CD;&#x89D2;&#x8272;,&#x901A;&#x5E38;&#x60C5;&#x51B5;&#x4E0B;,&#x6211;&#x4EEC;&#x6240;&#x8BF4;&#x7684;undefined&#x90FD;&#x6307;&#x7684;&#x662F;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&quot;undefined&quot;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined"><code>undefined</code></a>&#x3002;</p>

<p><code>shift</code> &#x65B9;&#x6CD5;&#x5E76;&#x4E0D;&#x5C40;&#x9650;&#x4E8E;&#x6570;&#x7EC4;&#xFF1A;&#x8BE5;&#x65B9;&#x6CD5;&#x4EA6;&#x53EF;&#x901A;&#x8FC7; <a title="call() &#x65B9;&#x6CD5;&#x5728;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;this&#x503C;&#x548C;&#x82E5;&#x5E72;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x503C;&#x7684;&#x524D;&#x63D0;&#x4E0B;&#x8C03;&#x7528;&#x67D0;&#x4E2A;&#x51FD;&#x6570;&#x6216;&#x65B9;&#x6CD5;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call"><code>call</code></a> &#x6216; <a title="apply() &#x65B9;&#x6CD5;&#x5728;&#x6307;&#x5B9A;&#xA0;this&#xA0;&#x503C;&#x548C;&#x53C2;&#x6570;&#xFF08;&#x53C2;&#x6570;&#x4EE5;&#x6570;&#x7EC4;&#x6216;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x7684;&#x5F62;&#x5F0F;&#x5B58;&#x5728;&#xFF09;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#x8C03;&#x7528;&#x67D0;&#x4E2A;&#x51FD;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply"><code>apply</code></a> &#x4F5C;&#x7528;&#x4E8E;&#x5BF9;&#x8C61;&#x4E0A;&#x3002;&#x5BF9;&#x4E8E;&#x4E0D;&#x5305;&#x542B; length &#x5C5E;&#x6027;&#x7684;&#x5BF9;&#x8C61;&#xFF0C;&#x5C06;&#x6DFB;&#x52A0;&#x4E00;&#x4E2A;&#x503C;&#x4E3A; 0 &#x7684; length &#x5C5E;&#x6027;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x79FB;&#x9664;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x4E00;&#x4E2A;&#x5143;&#x7D20;">&#x79FB;&#x9664;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x4E00;&#x4E2A;&#x5143;&#x7D20;</h3>

<p>&#x4EE5;&#x4E0B;&#x4EE3;&#x7801;&#x663E;&#x793A;&#x4E86;&#x5220;&#x9664;&#x5176;&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x4E4B;&#x524D;&#x548C;&#x4E4B;&#x540E;&#x7684;myFish&#x6570;&#x7EC4;&#x3002;&#x5B83;&#x8FD8;&#x663E;&#x793A;&#x5DF2;&#x5220;&#x9664;&#x7684;&#x5143;&#x7D20;&#xFF1A;</p>

<pre class="brush: js">let myFish = [&apos;angel&apos;, &apos;clown&apos;, &apos;mandarin&apos;, &apos;surgeon&apos;];

console.log(&apos;&#x8C03;&#x7528; shift &#x4E4B;&#x524D;: &apos; + myFish);
// &quot;&#x8C03;&#x7528; shift &#x4E4B;&#x524D;: angel,clown,mandarin,surgeon&quot;

var shifted = myFish.shift(); 

console.log(&apos;&#x8C03;&#x7528; shift &#x4E4B;&#x540E;: &apos; + myFish); 
// &quot;&#x8C03;&#x7528; shift &#x4E4B;&#x540E;: clown,mandarin,surgeon&quot; 

console.log(&apos;&#x88AB;&#x5220;&#x9664;&#x7684;&#x5143;&#x7D20;: &apos; + shifted); 
// &quot;&#x88AB;&#x5220;&#x9664;&#x7684;&#x5143;&#x7D20;: angel&quot;</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x5907;&#x6CE8;</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" class="external" href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf" title="ECMAScript 3rd Edition (ECMA-262)">ECMAScript 3rd Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition. Implemented in JavaScript 1.2.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.9" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Array.prototype.shift</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.shift" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Array.prototype.shift</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-array.prototype.shift" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Array.prototype.shift</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x652F;&#x6301;">&#x6D4F;&#x89C8;&#x5668;&#x652F;&#x6301;</h2>

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
   <th>Feature</th>
   <th>Chrome</th>
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
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

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="push()&#xA0;&#x65B9;&#x6CD5;&#x5C06;&#x4E00;&#x4E2A;&#x6216;&#x591A;&#x4E2A;&#x5143;&#x7D20;&#x6DFB;&#x52A0;&#x5230;&#x6570;&#x7EC4;&#x7684;&#x672B;&#x5C3E;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x7684;&#x65B0;&#x957F;&#x5EA6;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push"><code>Array.prototype.push()</code></a></li>
 <li><a title="pop()&#x65B9;&#x6CD5;&#x4ECE;&#x6570;&#x7EC4;&#x4E2D;&#x5220;&#x9664;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x8BE5;&#x5143;&#x7D20;&#x7684;&#x503C;&#x3002;&#x6B64;&#x65B9;&#x6CD5;&#x66F4;&#x6539;&#x6570;&#x7EC4;&#x7684;&#x957F;&#x5EA6;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop"><code>Array.prototype.pop()</code></a></li>
 <li><a title="unshift() &#x65B9;&#x6CD5;&#x5728;&#x6570;&#x7EC4;&#x7684;&#x5F00;&#x5934;&#x6DFB;&#x52A0;&#x4E00;&#x4E2A;&#x6216;&#x8005;&#x591A;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x65B0;&#x7684; length &#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift"><code>Array.prototype.unshift()</code></a></li>
</ul>
                  
                
              