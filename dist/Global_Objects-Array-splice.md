
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><strong><code style="font-style: normal; line-height: 1.5;">splice()</code></strong><span style="line-height: 1.5;"><strong> </strong></span>&#x65B9;&#x6CD5;&#x901A;&#x8FC7;&#x5220;&#x9664;&#x73B0;&#x6709;&#x5143;&#x7D20;&#x548C;/&#x6216;&#x6DFB;&#x52A0;&#x65B0;&#x5143;&#x7D20;&#x6765;&#x66F4;&#x6539;&#x6570;&#x7EC4;&#x7684;&#x5185;&#x5BB9;<span style="line-height: 1.5;">&#x3002;</span></p>

<pre class="brush: js">var myFish = [&quot;angel&quot;, &quot;clown&quot;, &quot;mandarin&quot;, &quot;sturgeon&quot;];

myFish.splice(2, 0, &quot;drum&quot;); 
// myFish is [&quot;angel&quot;, &quot;clown&quot;, &quot;drum&quot;, &quot;mandarin&quot;, &quot;sturgeon&quot;] 

myFish.splice(2, 1); 
// myFish is [&quot;angel&quot;, &quot;clown&quot;, &quot;mandarin&quot;, &quot;sturgeon&quot;] 

myFish.splice(2, 1, &quot;splice&quot;, &quot;parrot&quot;);
// myFish is [&quot;angel&quot;, &quot;clown&quot;, &quot;splice&quot;, &quot;parrot&quot;, &quot;sturgeon&quot;] 

</pre>

<h2 id="sect1"><img src="https://mdn.mozillademos.org/files/14569/Array.prototype.splice().png" alt="splice()"></h2>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><var>array</var>.splice(<var>start</var>)
<var>array</var>.splice(<var>start</var>, <var>deleteCount</var>) 
<var>array</var>.splice(<var>start</var>, <var>deleteCount</var>, <var>item1</var>, <var>item2</var>, ...)<code>
</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>start&#x200B;</code></dt>
 <dd><span style="line-height: 1.5;">&#x6307;&#x5B9A;&#x4FEE;&#x6539;&#x7684;&#x5F00;&#x59CB;&#x4F4D;&#x7F6E;&#xFF08;&#x4ECE;0&#x8BA1;&#x6570;&#xFF09;&#x3002;&#x5982;&#x679C;&#x8D85;&#x51FA;&#x4E86;&#x6570;&#x7EC4;&#x7684;&#x957F;&#x5EA6;&#xFF0C;&#x5219;&#x4ECE;&#x6570;&#x7EC4;&#x672B;&#x5C3E;&#x5F00;&#x59CB;&#x6DFB;&#x52A0;&#x5185;&#x5BB9;&#xFF1B;&#x5982;&#x679C;&#x662F;&#x8D1F;&#x503C;&#xFF0C;&#x5219;&#x8868;&#x793A;&#x4ECE;&#x6570;&#x7EC4;&#x672B;&#x4F4D;&#x5F00;&#x59CB;&#x7684;&#x7B2C;&#x51E0;&#x4F4D;&#x3002;</span></dd>
</dl>

<dl>
 <dt><code>deleteCount</code>&#xA0;<span class="inlineIndicator optional optionalInline">&#x53EF;&#x9009;</span></dt>
 <dd><span style="line-height: 1.5;">&#x6574;&#x6570;&#xFF0C;&#x8868;&#x793A;&#x8981;&#x79FB;&#x9664;&#x7684;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x7684;&#x4E2A;&#x6570;&#x3002;&#x5982;&#x679C; </span><code>deleteCount</code><span style="line-height: 1.5;"> &#x662F; 0&#xFF0C;&#x5219;&#x4E0D;&#x79FB;&#x9664;&#x5143;&#x7D20;&#x3002;&#x8FD9;&#x79CD;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x81F3;&#x5C11;&#x5E94;&#x6DFB;&#x52A0;&#x4E00;&#x4E2A;&#x65B0;&#x5143;&#x7D20;&#x3002;&#x5982;&#x679C; </span><code>deleteCount&#xA0;</code><span style="line-height: 1.5;">&#x5927;&#x4E8E;</span><code><var>start</var></code><span style="line-height: 1.5;"> &#x4E4B;&#x540E;&#x7684;&#x5143;&#x7D20;&#x7684;&#x603B;&#x6570;&#xFF0C;&#x5219;&#x4ECE; </span><code><var>start</var></code><span style="line-height: 1.5;"> &#x540E;&#x9762;&#x7684;&#x5143;&#x7D20;&#x90FD;&#x5C06;&#x88AB;&#x5220;&#x9664;&#xFF08;&#x542B;&#x7B2C; </span><code><var>start</var></code><span style="line-height: 1.5;"> &#x4F4D;&#xFF09;&#x3002;</span></dd>
 <dd>&#x5982;&#x679C;deleteCount&#x88AB;&#x7701;&#x7565;&#xFF0C;&#x5219;&#x5176;&#x76F8;&#x5F53;&#x4E8E;(arr.length - start)&#x3002;</dd>
</dl>

<dl>
 <dt><code>item1, item2,&#xA0;<em>...</em></code>&#xA0;<span class="inlineIndicator optional optionalInline">&#x53EF;&#x9009;</span></dt>
 <dd>&#x8981;&#x6DFB;&#x52A0;&#x8FDB;&#x6570;&#x7EC4;&#x7684;&#x5143;&#x7D20;,&#x4ECE;<code><var>start</var></code><span style="line-height: 1.5;"> </span>&#x4F4D;&#x7F6E;&#x5F00;&#x59CB;&#x3002;&#x5982;&#x679C;&#x4E0D;&#x6307;&#x5B9A;&#xFF0C;&#x5219; <code>splice()&#xA0;</code>&#x5C06;&#x53EA;&#x5220;&#x9664;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x7531;&#x88AB;&#x5220;&#x9664;&#x7684;&#x5143;&#x7D20;&#x7EC4;&#x6210;&#x7684;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x3002;&#x5982;&#x679C;&#x53EA;&#x5220;&#x9664;&#x4E86;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x5219;&#x8FD4;&#x56DE;&#x53EA;&#x5305;&#x542B;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x6570;&#x7EC4;&#x3002;&#x5982;&#x679C;&#x6CA1;&#x6709;&#x5220;&#x9664;&#x5143;&#x7D20;&#xFF0C;&#x5219;&#x8FD4;&#x56DE;&#x7A7A;&#x6570;&#x7EC4;&#x3002;</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x5982;&#x679C;&#x6DFB;&#x52A0;&#x8FDB;&#x6570;&#x7EC4;&#x7684;&#x5143;&#x7D20;&#x4E2A;&#x6570;&#x4E0D;&#x7B49;&#x4E8E;&#x88AB;&#x5220;&#x9664;&#x7684;&#x5143;&#x7D20;&#x4E2A;&#x6570;&#xFF0C;&#x6570;&#x7EC4;&#x7684;&#x957F;&#x5EA6;&#x4F1A;&#x53D1;&#x751F;&#x76F8;&#x5E94;&#x7684;&#x6539;&#x53D8;&#x3002;</p>

<h2 id="&#x63D0;&#x793A;&#x548C;&#x6CE8;&#x91CA;">&#x63D0;&#x793A;&#x548C;&#x6CE8;&#x91CA;</h2>

<p>&#x6CE8;&#x91CA;&#xFF1A;&#x8BF7;&#x6CE8;&#x610F;&#xFF0C;splice() &#x65B9;&#x6CD5;&#x4E0E; slice() &#x65B9;&#x6CD5;&#x7684;&#x4F5C;&#x7528;&#x662F;&#x4E0D;&#x540C;&#x7684;&#xFF0C;splice() &#x65B9;&#x6CD5;&#x4F1A;&#x76F4;&#x63A5;&#x5BF9;&#x6570;&#x7EC4;&#x8FDB;&#x884C;&#x4FEE;&#x6539;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;_splice()">&#x4F7F;&#x7528;&#xA0;<code>splice()</code></h3>

<p>&#x5982;&#x4E0B;&#x4EE3;&#x7801;&#x6F14;&#x793A;&#x4E86; splice &#x7684;&#x7528;&#x6CD5;&#xFF1A;</p>

<pre class="brush: js">var myFish = [&quot;angel&quot;, &quot;clown&quot;, &quot;mandarin&quot;, &quot;surgeon&quot;];

//&#x4ECE;&#x7B2C; 2 &#x4F4D;&#x5F00;&#x59CB;&#x5220;&#x9664; 0 &#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x63D2;&#x5165; &quot;drum&quot;
var removed = myFish.splice(2, 0, &quot;drum&quot;);
//&#x8FD0;&#x7B97;&#x540E;&#x7684; myFish:[&quot;angel&quot;, &quot;clown&quot;, &quot;drum&quot;, &quot;mandarin&quot;, &quot;surgeon&quot;]
//&#x88AB;&#x5220;&#x9664;&#x5143;&#x7D20;&#x6570;&#x7EC4;&#xFF1A;[]&#xFF0C;&#x6CA1;&#x6709;&#x5143;&#x7D20;&#x88AB;&#x5220;&#x9664;

//&#x4ECE;&#x7B2C; 3 &#x4F4D;&#x5F00;&#x59CB;&#x5220;&#x9664; 1 &#x4E2A;&#x5143;&#x7D20;
removed = myFish.splice(3, 1);
//&#x8FD0;&#x7B97;&#x540E;&#x7684;myFish&#xFF1A;[&quot;angel&quot;, &quot;clown&quot;, &quot;drum&quot;, &quot;surgeon&quot;]
//&#x88AB;&#x5220;&#x9664;&#x5143;&#x7D20;&#x6570;&#x7EC4;&#xFF1A;[&quot;mandarin&quot;]

//&#x4ECE;&#x7B2C; 2 &#x4F4D;&#x5F00;&#x59CB;&#x5220;&#x9664; 1 &#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x7136;&#x540E;&#x63D2;&#x5165; &quot;trumpet&quot;
removed = myFish.splice(2, 1, &quot;trumpet&quot;);
//&#x8FD0;&#x7B97;&#x540E;&#x7684;myFish: [&quot;angel&quot;, &quot;clown&quot;, &quot;trumpet&quot;, &quot;surgeon&quot;]
//&#x88AB;&#x5220;&#x9664;&#x5143;&#x7D20;&#x6570;&#x7EC4;&#xFF1A;[&quot;drum&quot;]

//&#x4ECE;&#x7B2C; 0 &#x4F4D;&#x5F00;&#x59CB;&#x5220;&#x9664; 2 &#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x7136;&#x540E;&#x63D2;&#x5165; <span style="font-size: 1rem;">&quot;parrot&quot;, &quot;anemone&quot; &#x548C; &quot;blue&quot;</span>
removed = myFish.splice(0, 2, &quot;parrot&quot;, &quot;anemone&quot;, &quot;blue&quot;);
//&#x8FD0;&#x7B97;&#x540E;&#x7684;myFish&#xFF1A;[&quot;parrot&quot;, &quot;anemone&quot;, &quot;blue&quot;, &quot;trumpet&quot;, &quot;surgeon&quot;]
//&#x88AB;&#x5220;&#x9664;&#x5143;&#x7D20;&#x7684;&#x6570;&#x7EC4;&#xFF1A;[&quot;angel&quot;, &quot;clown&quot;]

//&#x4ECE;&#x7B2C; 3 &#x4F4D;&#x5F00;&#x59CB;&#x5220;&#x9664; 2 &#x4E2A;&#x5143;&#x7D20;
removed = myFish.splice(3, Number.MAX_VALUE);
//&#x8FD0;&#x7B97;&#x540E;&#x7684;myFish: [&quot;parrot&quot;, &quot;anemone&quot;, &quot;blue&quot;]
//&#x88AB;&#x5220;&#x9664;&#x5143;&#x7D20;&#x7684;&#x6570;&#x7EC4;&#xFF1A;[&quot;trumpet&quot;, &quot;surgeon&quot;]
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col"><code>Specification</code></th>
   <th scope="col"><code>Status</code></th>
   <th scope="col"><code>Comment</code></th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf" class="external" lang="en" hreflang="en" title="ECMAScript 3rd Edition (ECMA-262)">ECMAScript 3rd Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.Implemented in JavaScript 1.2</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.12" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Array.prototype.splice</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td><code>&#xA0;</code></td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.splice" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Array.prototype.splice</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td><code>&#xA0;</code></td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-array.prototype.splice" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Array.prototype.splice</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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

<h2 id="&#x5411;&#x540E;&#x517C;&#x5BB9;">&#x5411;&#x540E;&#x517C;&#x5BB9;</h2>

<p><span style="line-height: 1.5;">&#x5728; JavaScript 1.2 &#x4E2D;&#xFF0C;&#x5982;&#x679C;&#x53EA;&#x5220;&#x9664;&#x4E86;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#xFF08;&#x5373; howmany &#x53C2;&#x6570;&#x4E3A; 1&#xFF09;&#xFF0C;&#x5219; splice &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x88AB;&#x5220;&#x9664;&#x7684;&#x5143;&#x7D20;&#xFF1B;&#x5F53;&#x5220;&#x9664;&#x591A;&#x4E2A;&#x5143;&#x7D20;&#x65F6;&#xFF0C;&#x8FD4;&#x56DE;&#x7531;&#x88AB;&#x5220;&#x5143;&#x7D20;&#x7EC4;&#x6210;&#x7684;&#x6570;&#x7EC4;&#x3002;&#x4E0D;&#x8FC7;&#xFF0C;&#x5728; Netscape Navigator 4 &#x4E4B;&#x540E;&#x5C31;&#x6CA1;&#x6709;&#x6D4F;&#x89C8;&#x5668;&#x4F7F;&#x7528; JavaScript 1.2 &#x4E86;&#xFF0C;&#x6240;&#x4EE5;&#x53EF;&#x4EE5;&#x8BA4;&#x4E3A; splice &#x603B;&#x662F;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x3002;</span></p>

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push" title="push()&#xA0;&#x65B9;&#x6CD5;&#x6DFB;&#x52A0;&#x4E00;&#x4E2A;&#x6216;&#x591A;&#x4E2A;&#x5143;&#x7D20;&#x5230;&#x6570;&#x7EC4;&#x7684;&#x672B;&#x5C3E;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x65B0;&#x7684;&#x957F;&#x5EA6;&#xFF08;length &#x5C5E;&#x6027;&#x503C;&#xFF09;&#x3002;"><code>push</code></a> / <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop" title="pop() &#x65B9;&#x6CD5;&#x5220;&#x9664;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6700;&#x540E;&#x7684;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x4E14;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x5143;&#x7D20;&#x3002;"><code>pop</code></a> - &#x5728;&#x6570;&#x7EC4;&#x672B;&#x5C3E;&#x589E;/&#x5220;&#x5143;&#x7D20;&#xFF1B;</li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift" title="unshift() &#x65B9;&#x6CD5;&#x5728;&#x6570;&#x7EC4;&#x7684;&#x5F00;&#x5934;&#x6DFB;&#x52A0;&#x4E00;&#x4E2A;&#x6216;&#x8005;&#x591A;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x65B0;&#x7684; length &#x503C;&#x3002;"><code>unshift</code></a> / <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift" title="shift() &#x65B9;&#x6CD5;&#x4ECE;&#x6570;&#x7EC4;&#x4E2D;&#x5220;&#x9664;&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x8BE5;&#x5143;&#x7D20;&#x3002;&#x6B64;&#x65B9;&#x6CD5;&#x66F4;&#x6539;&#x6570;&#x7EC4;&#x7684;&#x957F;&#x5EA6;&#x3002;"><code>shift</code></a> - &#x5728;&#x6570;&#x7EC4;&#x9996;&#x90E8;&#x589E;/&#x5220;&#x5143;&#x7D20;&#xFF1B;</li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat" title="concat()&#xA0;&#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x5408;&#x5E76;&#x4E24;&#x4E2A;&#x6216;&#x591A;&#x4E2A;&#x6570;&#x7EC4;&#x3002;&#x6B64;&#x65B9;&#x6CD5;&#x4E0D;&#x4F1A;&#x66F4;&#x6539;&#x73B0;&#x6709;&#x6570;&#x7EC4;&#xFF0C;&#x800C;&#x662F;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x6570;&#x7EC4;&#x3002;"><code>concat</code></a> - &#x628A;&#x4E00;&#x4E2A;&#xFF08;&#x6216;&#x591A;&#x4E2A;&#xFF09;&#x6570;&#x7EC4;&#x548C;&#xFF08;&#x6216;&#xFF09;&#x503C;&#x4E0E;&#x539F;&#x6570;&#x7EC4;&#x62FC;&#x63A5;&#xFF0C;&#x8FD4;&#x56DE;&#x62FC;&#x63A5;&#x540E;&#x7684;&#x6570;&#x7EC4;&#x3002;</li>
</ul>
                  
                
              