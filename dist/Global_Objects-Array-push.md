
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>push()</strong></code>&#xA0;&#x65B9;&#x6CD5;&#x5C06;&#x4E00;&#x4E2A;&#x6216;&#x591A;&#x4E2A;&#x5143;&#x7D20;&#x6DFB;&#x52A0;&#x5230;&#x6570;&#x7EC4;&#x7684;&#x672B;&#x5C3E;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x7684;&#x65B0;&#x957F;&#x5EA6;&#x3002;</p>

<pre>var numbers = [1, 2, 3];
numbers.push(4);

console.log(numbers); 
// [1, 2, 3, 4]

numbers.push(5, 6, 7);

console.log(numbers); 
// [1, 2, 3, 4, 5, 6, 7]</pre>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">arr.push(element1, ..., elementN)
</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>element<em>N</em></code></dt>
 <dd>&#x88AB;&#x6DFB;&#x52A0;&#x5230;&#x6570;&#x7EC4;&#x672B;&#x5C3E;&#x7684;&#x5143;&#x7D20;&#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;" style="line-height: 24px;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x5F53;&#x8C03;&#x7528;&#x8BE5;&#x65B9;&#x6CD5;&#x65F6;&#xFF0C;&#x65B0;&#x7684; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length" title="length &#x5C5E;&#x6027;&#x8868;&#x793A;&#x4E00;&#x4E2A;&#x65E0;&#x7B26;&#x53F7; 32-bit &#x6574;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x4E2A;&#x6570;&#x3002;"><code>length</code></a> &#x5C5E;&#x6027;&#x503C;&#x5C06;&#x88AB;&#x8FD4;&#x56DE;&#x3002;</p>

<h2 name="Description" id="Description" style="margin-bottom: 20px; line-height: 30px;">&#x63CF;&#x8FF0;</h2>

<p>push&#x65B9;&#x6CD5;&#x5C06;&#x503C;&#x9644;&#x52A0;&#x5230;&#x6570;&#x7EC4;&#x4E2D;&#x3002;</p>

<p><code>push</code>&#xA0;&#x65B9;&#x6CD5;&#x6709;&#x610F;&#x5177;&#x6709;&#x901A;&#x7528;&#x6027;&#x3002;&#x8BE5;&#x65B9;&#x6CD5;&#x548C; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call" title="call() &#x65B9;&#x6CD5;&#x5728;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;this&#x503C;&#x548C;&#x82E5;&#x5E72;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x503C;&#x7684;&#x524D;&#x63D0;&#x4E0B;&#x8C03;&#x7528;&#x67D0;&#x4E2A;&#x51FD;&#x6570;&#x6216;&#x65B9;&#x6CD5;."><code>call()</code></a> &#x6216; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply" title="apply() &#x65B9;&#x6CD5;&#x5728;&#x6307;&#x5B9A;&#xA0;this&#xA0;&#x503C;&#x548C;&#x53C2;&#x6570;&#xFF08;&#x53C2;&#x6570;&#x4EE5;&#x6570;&#x7EC4;&#x6216;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x7684;&#x5F62;&#x5F0F;&#x5B58;&#x5728;&#xFF09;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#x8C03;&#x7528;&#x67D0;&#x4E2A;&#x51FD;&#x6570;&#x3002;"><code>apply()</code></a> &#x4E00;&#x8D77;&#x4F7F;&#x7528;&#x65F6;&#xFF0C;&#x53EF;&#x5E94;&#x7528;&#x5728;&#x7C7B;&#x4F3C;&#x6570;&#x7EC4;&#x7684;&#x5BF9;&#x8C61;&#x4E0A;&#x3002;<code>push</code>&#xA0;&#x65B9;&#x6CD5;&#x6839;&#x636E;&#xA0;<code>length</code>&#xA0;&#x5C5E;&#x6027;&#x6765;&#x51B3;&#x5B9A;&#x4ECE;&#x54EA;&#x91CC;&#x5F00;&#x59CB;&#x63D2;&#x5165;&#x7ED9;&#x5B9A;&#x7684;&#x503C;&#x3002;&#x5982;&#x679C;&#xA0;<code>length</code>&#xA0;&#x4E0D;&#x80FD;&#x88AB;&#x8F6C;&#x6210;&#x4E00;&#x4E2A;&#x6570;&#x503C;&#xFF0C;&#x5219;&#x63D2;&#x5165;&#x7684;&#x5143;&#x7D20;&#x7D22;&#x5F15;&#x4E3A; 0&#xFF0C;&#x5305;&#x62EC;&#xA0;<code>length</code>&#xA0;&#x4E0D;&#x5B58;&#x5728;&#x65F6;&#x3002;&#x5F53; <code>length</code> &#x4E0D;&#x5B58;&#x5728;&#x65F6;&#xFF0C;&#x5C06;&#x4F1A;&#x521B;&#x5EFA;&#x5B83;&#x3002;</p>

<p>&#x552F;&#x4E00;&#x7684;&#x539F;&#x751F;&#x7C7B;&#x6570;&#x7EC4;&#xFF08;array-like&#xFF09;&#x5BF9;&#x8C61;&#x662F; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String" title="String&#xA0;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x662F;&#x7528;&#x6765;&#x6784;&#x9020;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#x6216;&#x5B57;&#x7B26;&#x5E8F;&#x5217;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;&#x3002;"><code>Strings</code></a>&#xFF0C;&#x5C3D;&#x7BA1;&#x5982;&#x6B64;&#xFF0C;&#x5B83;&#x4EEC;&#x5E76;&#x4E0D;&#x9002;&#x7528;&#x8BE5;&#x65B9;&#x6CD5;&#xFF0C;&#x56E0;&#x4E3A;&#x5B57;&#x7B26;&#x4E32;&#x662F;&#x4E0D;&#x53EF;&#x6539;&#x53D8;&#x7684;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x6DFB;&#x52A0;&#x5143;&#x7D20;&#x5230;&#x6570;&#x7EC4;">&#x6DFB;&#x52A0;&#x5143;&#x7D20;&#x5230;&#x6570;&#x7EC4;</h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x521B;&#x5EFA;&#x4E86;&#xA0;<code>sports</code>&#xA0;&#x6570;&#x7EC4;&#xFF0C;&#x5305;&#x542B;&#x4E24;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x7136;&#x540E;&#x53C8;&#x628A;&#x4E24;&#x4E2A;&#x5143;&#x7D20;&#x6DFB;&#x52A0;&#x7ED9;&#x5B83;&#x3002;<code>total</code>&#xA0;&#x53D8;&#x91CF;&#x4E3A;&#x6570;&#x7EC4;&#x7684;&#x65B0;&#x957F;&#x5EA6;&#x503C;&#x3002;</p>

<pre class="brush: js">var sports = [&quot;soccer&quot;, &quot;baseball&quot;];
var total = sports.push(&quot;football&quot;, &quot;swimming&quot;);

console.log(sports); 
// [&quot;soccer&quot;, &quot;baseball&quot;, &quot;football&quot;, &quot;swimming&quot;]

console.log(total);&#xA0; 
// 4</pre>

<h3 id="&#x5408;&#x5E76;&#x4E24;&#x4E2A;&#x6570;&#x7EC4;">&#x5408;&#x5E76;&#x4E24;&#x4E2A;&#x6570;&#x7EC4;</h3>

<p>&#x8BE5;&#x793A;&#x4F8B;&#x4F7F;&#x7528; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply" title="apply() &#x65B9;&#x6CD5;&#x5728;&#x6307;&#x5B9A;&#xA0;this&#xA0;&#x503C;&#x548C;&#x53C2;&#x6570;&#xFF08;&#x53C2;&#x6570;&#x4EE5;&#x6570;&#x7EC4;&#x6216;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x7684;&#x5F62;&#x5F0F;&#x5B58;&#x5728;&#xFF09;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#x8C03;&#x7528;&#x67D0;&#x4E2A;&#x51FD;&#x6570;&#x3002;"><code>apply()</code></a> &#x6DFB;&#x52A0;&#x7B2C;&#x4E8C;&#x4E2A;&#x6570;&#x7EC4;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x3002;</p>

<pre class="brush: js">var vegetables = [&apos;parsnip&apos;, &apos;potato&apos;];
var moreVegs = [&apos;celery&apos;, &apos;beetroot&apos;];

// Merge the second array into the first one
// Equivalent to vegetables.push(&apos;celery&apos;, &apos;beetroot&apos;);
Array.prototype.push.apply(vegetables, moreVegs);

console.log(vegetables); 
// [&apos;parsnip&apos;, &apos;potato&apos;, &apos;celery&apos;, &apos;beetroot&apos;]</pre>

<h3 id="&#x50CF;&#x6570;&#x7EC4;&#x4E00;&#x6837;&#x4F7F;&#x7528;&#x5BF9;&#x8C61;">&#x50CF;&#x6570;&#x7EC4;&#x4E00;&#x6837;&#x4F7F;&#x7528;&#x5BF9;&#x8C61;</h3>

<p>&#x5982;&#x4E0A;&#x6240;&#x8FF0;&#xFF0C;push &#x662F;&#x7279;&#x610F;&#x8BBE;&#x8BA1;&#x4E3A;&#x901A;&#x7528;&#x7684;&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x5B83;&#x6765;&#x83B7;&#x5F97;&#x4FBF;&#x5229;&#x3002;&#x6B63;&#x5982;&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x6240;&#x793A;&#xFF0C;Array.prototype.push &#x53EF;&#x4EE5;&#x5728;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4E0A;&#x5DE5;&#x4F5C;&#x3002;&#xA0;&#x6CE8;&#x610F;&#xFF0C;&#x6211;&#x4EEC;&#x6CA1;&#x6709;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x6765;&#x5B58;&#x50A8;&#x5BF9;&#x8C61;&#x7684;&#x96C6;&#x5408;&#x3002;&#xA0;&#x76F8;&#x53CD;&#xFF0C;&#x6211;&#x4EEC;&#x5C06;&#x8BE5;&#x96C6;&#x5408;&#x5B58;&#x50A8;&#x5728;&#x5BF9;&#x8C61;&#x672C;&#x8EAB;&#x4E0A;&#xFF0C;&#x5E76;&#x4F7F;&#x7528;&#x5728;&#xA0;Array.prototype.push &#x4E0A;&#x4F7F;&#x7528;&#x7684; <code>call</code> &#x6765;&#x8C03;&#x7528;&#x8BE5;&#x65B9;&#x6CD5;&#xFF0C;&#x4F7F;&#x5176;&#x8BA4;&#x4E3A;&#x6211;&#x4EEC;&#x6B63;&#x5728;&#x5904;&#x7406;&#x6570;&#x7EC4;&#xFF0C;&#x800C;&#x5B83;&#x53EA;&#x662F;&#x50CF;&#x5E73;&#x5E38;&#x4E00;&#x6837;&#x8FD0;&#x4F5C;&#xFF0C;&#x8FD9;&#x8981;&#x611F;&#x8C22; JavaScript &#x5141;&#x8BB8;&#x6211;&#x4EEC;&#x5EFA;&#x7ACB;&#x4EFB;&#x610F;&#x7684;&#x6267;&#x884C;&#x4E0A;&#x4E0B;&#x6587;&#x3002;</p>

<pre class="brush: js">var obj = {
    length: 0,

    addElem: function addElem (elem) {
        // obj.length is automatically incremented 
        // every time an element is added.
        [].push.call(this, elem);
    }
};

// Let&apos;s add some empty objects just to illustrate.
obj.addElem({});
obj.addElem({});
console.log(obj.length);
// &#x2192; 2</pre>

<p>&#x6CE8;&#x610F;&#xFF0C;&#x5C3D;&#x7BA1; obj &#x4E0D;&#x662F;&#x6570;&#x7EC4;&#xFF0C;&#x4F46;&#x662F; push &#x65B9;&#x6CD5;&#x6210;&#x529F;&#x5730;&#x4F7F;&#xA0;obj &#x7684; length &#x5C5E;&#x6027;&#x589E;&#x957F;&#x4E86;&#xFF0C;&#x5C31;&#x50CF;&#x6211;&#x4EEC;&#x5904;&#x7406;&#x4E00;&#x4E2A;&#x5B9E;&#x9645;&#x7684;&#x6570;&#x7EC4;&#x4E00;&#x6837;&#x3002;</p>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf" class="external" lang="en" hreflang="en" title="ECMAScript 3rd Edition (ECMA-262)">ECMAScript 3rd Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition. Implemented in JavaScript 1.2.</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.7" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Array.prototype.push</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.push" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Array.prototype.push</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-array.prototype.push" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Array.prototype.push</small></a></td>
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

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop" title="pop()&#x65B9;&#x6CD5;&#x4ECE;&#x6570;&#x7EC4;&#x4E2D;&#x5220;&#x9664;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x8BE5;&#x5143;&#x7D20;&#x7684;&#x503C;&#x3002;&#x6B64;&#x65B9;&#x6CD5;&#x66F4;&#x6539;&#x6570;&#x7EC4;&#x7684;&#x957F;&#x5EA6;&#x3002;"><code>Array.prototype.pop()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift" title="shift() &#x65B9;&#x6CD5;&#x4ECE;&#x6570;&#x7EC4;&#x4E2D;&#x5220;&#x9664;&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x8BE5;&#x5143;&#x7D20;&#x3002;&#x6B64;&#x65B9;&#x6CD5;&#x66F4;&#x6539;&#x6570;&#x7EC4;&#x7684;&#x957F;&#x5EA6;&#x3002;"><code>Array.prototype.shift()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift" title="unshift() &#x65B9;&#x6CD5;&#x5728;&#x6570;&#x7EC4;&#x7684;&#x5F00;&#x5934;&#x6DFB;&#x52A0;&#x4E00;&#x4E2A;&#x6216;&#x8005;&#x591A;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x65B0;&#x7684; length &#x503C;&#x3002;"><code>Array.prototype.unshift()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat" title="concat()&#xA0;&#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x5408;&#x5E76;&#x4E24;&#x4E2A;&#x6216;&#x591A;&#x4E2A;&#x6570;&#x7EC4;&#x3002;&#x6B64;&#x65B9;&#x6CD5;&#x4E0D;&#x4F1A;&#x66F4;&#x6539;&#x73B0;&#x6709;&#x6570;&#x7EC4;&#xFF0C;&#x800C;&#x662F;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x6570;&#x7EC4;&#x3002;"><code>Array.prototype.concat()</code></a></li>
</ul>
                  
                
              