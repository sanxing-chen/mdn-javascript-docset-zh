
                
                  
                    <p></p><section class="Quick_links" id="Quick_Links"><!-- --></section><p></p>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p><code><strong>pop()</strong>&#x65B9;&#x6CD5;&#x4ECE;&#x6570;&#x7EC4;&#x4E2D;<strong>&#x5220;&#x9664;</strong>&#x6700;&#x540E;&#x4E00;&#x4E2A;<strong>&#x5143;&#x7D20;</strong>&#xFF0C;&#x5E76;<strong>&#x8FD4;&#x56DE;</strong>&#x8BE5;&#x5143;&#x7D20;&#x7684;<strong>&#x503C;</strong>&#x3002;&#x6B64;&#x65B9;&#x6CD5;<strong>&#x66F4;&#x6539;</strong>&#x6570;&#x7EC4;&#x7684;<strong>&#x957F;&#x5EA6;</strong>&#x3002;</code></p>

<pre>let a = [1, 2, 3];
a.length; // 3

a.pop(); // 3

console.log(a); // [1, 2]
a.length; // 2</pre>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><em>arr</em>.pop()</code></pre>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x4ECE;&#x6570;&#x7EC4;&#x4E2D;&#x5220;&#x9664;&#x7684;&#x5143;&#x7D20;; <a title="undefined&#x6709;&#x591A;&#x91CD;&#x89D2;&#x8272;,&#x901A;&#x5E38;&#x60C5;&#x51B5;&#x4E0B;,&#x6211;&#x4EEC;&#x6240;&#x8BF4;&#x7684;undefined&#x90FD;&#x6307;&#x7684;&#x662F;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&quot;undefined&quot;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined"><code>undefined</code></a> &#x5982;&#x679C;&#x6570;&#x7EC4;&#x4E3A;&#x7A7A;&#x3002;</p>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p><code>pop</code>&#xA0;&#x65B9;&#x6CD5;&#x4ECE;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x4E2D;&#x5220;&#x9664;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x5C06;&#x8BE5;&#x503C;&#x8FD4;&#x56DE;&#x7ED9;&#x8C03;&#x7528;&#x8005;&#x3002;</p>

<p><code>pop</code>&#xA0;&#x662F;&#x6545;&#x610F;&#x901A;&#x7528;&#x7684;; &#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x662F; <a title="call() &#x65B9;&#x6CD5;&#x5728;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;this&#x503C;&#x548C;&#x82E5;&#x5E72;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x503C;&#x7684;&#x524D;&#x63D0;&#x4E0B;&#x8C03;&#x7528;&#x67D0;&#x4E2A;&#x51FD;&#x6570;&#x6216;&#x65B9;&#x6CD5;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call">called</a> &#x6216;<a title="apply() &#x65B9;&#x6CD5;&#x5728;&#x6307;&#x5B9A;&#xA0;this&#xA0;&#x503C;&#x548C;&#x53C2;&#x6570;&#xFF08;&#x53C2;&#x6570;&#x4EE5;&#x6570;&#x7EC4;&#x6216;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x7684;&#x5F62;&#x5F0F;&#x5B58;&#x5728;&#xFF09;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#x8C03;&#x7528;&#x67D0;&#x4E2A;&#x51FD;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply">applied</a> &#xA0;&#x5230;&#x7C7B;&#x4F3C;&#x6570;&#x7EC4;&#x7684;&#x5BF9;&#x8C61;&#x3002;&#x4E0D;&#x5305;&#x542B;&#x53CD;&#x6620;&#x4E00;&#x7CFB;&#x5217;&#x8FDE;&#x7EED;&#x7684;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x7684;&#x957F;&#x5EA6;&#x5C5E;&#x6027;&#x7684;&#x5BF9;&#x8C61;&#xFF0C;&#x57FA;&#x4E8E;&#x96F6;&#x7684;&#x6570;&#x503C;&#x5C5E;&#x6027;&#x53EF;&#x80FD;&#x4E0D;&#x4F1A;&#x4EE5;&#x4EFB;&#x4F55;&#x6709;&#x610F;&#x4E49;&#x7684;&#x65B9;&#x5F0F;&#x8868;&#x73B0;&#x3002;</p>

<p>&#x5982;&#x679C;&#x4F60;&#x5728;&#x4E00;&#x4E2A;&#x7A7A;&#x6570;&#x7EC4;&#x4E0A;&#x8C03;&#x7528; pop()&#xFF0C;&#x5B83;&#x8FD4;&#x56DE; &#xA0;<a title="undefined&#x6709;&#x591A;&#x91CD;&#x89D2;&#x8272;,&#x901A;&#x5E38;&#x60C5;&#x51B5;&#x4E0B;,&#x6211;&#x4EEC;&#x6240;&#x8BF4;&#x7684;undefined&#x90FD;&#x6307;&#x7684;&#x662F;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&quot;undefined&quot;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined"><code>undefined</code></a>&#x3002;</p>

<h2 name="Example" id="Example">&#x793A;&#x4F8B;</h2>

<h3 name="Example:_Removing_the_last_element_of_an_array" id="Example:_Removing_the_last_element_of_an_array">&#x4F8B;&#x5B50;: &#x5220;&#x9664;&#x6389;&#x6570;&#x7EC4;&#x7684;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x5143;&#x7D20;</h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x9996;&#x5148;&#x521B;&#x5EFA;&#x4E86;&#x4E00;&#x4E2A;&#x62E5;&#x6709;&#x56DB;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x6570;&#x7EC4; myFish&#xFF0C;&#x7136;&#x540E;&#x5220;&#x9664;&#x6389;&#x5B83;&#x7684;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x3002;</p>

<pre class="brush:js">let myFish = [&quot;angel&quot;, &quot;clown&quot;, &quot;mandarin&quot;, &quot;surgeon&quot;];

let popped = myFish.pop();

console.log(myFish); 
// [&quot;angel&quot;, &quot;clown&quot;, &quot;mandarin&quot;]

console.log(popped); 
// surgeon
</pre>

<h2 style="margin-bottom: 20px; line-height: 30px;" id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table>
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" class="external" href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf" title="ECMAScript 3rd Edition (ECMA-262)">ECMAScript 3rd Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition. Implemented in JavaScript 1.2.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.6" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Array.prototype.pop</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.pop" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Array.prototype.pop</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-array.prototype.pop" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Array.prototype.pop</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
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
   <td>1.0</td>
   <td>1.0 (1.7 or earlier)</td>
   <td>5.5</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
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
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="sect1">&#xA0;</h2>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="push()&#xA0;&#x65B9;&#x6CD5;&#x6DFB;&#x52A0;&#x4E00;&#x4E2A;&#x6216;&#x591A;&#x4E2A;&#x5143;&#x7D20;&#x5230;&#x6570;&#x7EC4;&#x7684;&#x672B;&#x5C3E;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x65B0;&#x7684;&#x957F;&#x5EA6;&#xFF08;length &#x5C5E;&#x6027;&#x503C;&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push"><code>Array.prototype.push()</code></a></li>
 <li><a title="shift() &#x65B9;&#x6CD5;&#x4ECE;&#x6570;&#x7EC4;&#x4E2D;&#x5220;&#x9664;&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x8BE5;&#x5143;&#x7D20;&#x3002;&#x6B64;&#x65B9;&#x6CD5;&#x66F4;&#x6539;&#x6570;&#x7EC4;&#x7684;&#x957F;&#x5EA6;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift"><code>Array.prototype.shift()</code></a></li>
 <li><a title="unshift() &#x65B9;&#x6CD5;&#x5728;&#x6570;&#x7EC4;&#x7684;&#x5F00;&#x5934;&#x6DFB;&#x52A0;&#x4E00;&#x4E2A;&#x6216;&#x8005;&#x591A;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x65B0;&#x7684; length &#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift"><code>Array.prototype.unshift()</code></a></li>
 <li><a title="concat()&#xA0;&#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x5408;&#x5E76;&#x4E24;&#x4E2A;&#x6216;&#x591A;&#x4E2A;&#x6570;&#x7EC4;&#x3002;&#x6B64;&#x65B9;&#x6CD5;&#x4E0D;&#x4F1A;&#x66F4;&#x6539;&#x73B0;&#x6709;&#x6570;&#x7EC4;&#xFF0C;&#x800C;&#x662F;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x6570;&#x7EC4;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat"><code>Array.prototype.concat()</code></a></li>
 <li><a title="splice() &#x65B9;&#x6CD5;&#x901A;&#x8FC7;&#x5220;&#x9664;&#x73B0;&#x6709;&#x5143;&#x7D20;&#x548C;/&#x6216;&#x6DFB;&#x52A0;&#x65B0;&#x5143;&#x7D20;&#x6765;&#x66F4;&#x6539;&#x6570;&#x7EC4;&#x7684;&#x5185;&#x5BB9;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice"><code>Array.prototype.splice()</code></a></li>
</ul>
                  
                
              