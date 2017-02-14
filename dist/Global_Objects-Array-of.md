
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>Array.of()</strong></code> &#x65B9;&#x6CD5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5177;&#x6709;&#x53EF;&#x53D8;&#x6570;&#x91CF;&#x53C2;&#x6570;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x5B9E;&#x4F8B;&#xFF0C;&#x800C;&#x4E0D;&#x8003;&#x8651;&#x53C2;&#x6570;&#x7684;&#x6570;&#x91CF;&#x6216;&#x7C7B;&#x578B;&#x3002;</p>

<p>&#xA0;<code><strong>Array.of()</strong></code>&#xA0;&#x548C;&#xA0;<code><strong>Array</strong></code>&#xA0;&#x6784;&#x9020;&#x51FD;&#x6570;&#x4E4B;&#x95F4;&#x7684;&#x533A;&#x522B;&#x5728;&#x4E8E;&#x5904;&#x7406;&#x6574;&#x6570;&#x53C2;&#x6570;&#xFF1A;<strong>Array.of(7)&#xA0;</strong>&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5177;&#x6709;&#x5355;&#x4E2A;&#x5143;&#x7D20; <strong>7</strong> &#x7684;&#x6570;&#x7EC4;&#xFF0C;&#x800C;&#xA0;<strong>Array(7)&#xA0;</strong>&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5305;&#x542B; <strong>7</strong> &#x4E2A; <strong>undefined </strong>&#x5143;&#x7D20;&#x7684;&#x6570;&#x7EC4;&#x3002;</p>

<pre class="syntaxbox">Array.of(7);       // [7] 
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]</pre>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre><code>Array.of(<var>element0</var>[,&#xA0;<var>element1</var>[, ...[,&#xA0;<var>elementN</var>]]])</code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt>element<em>N</em></dt>
 <dd>&#x4EFB;&#x610F;&#x4E2A;&#x53C2;&#x6570;&#xFF0C;&#x5C06;&#x6309;&#x987A;&#x5E8F;&#x6210;&#x4E3A;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x65B0;&#x7684; <a href="/zh-CN/docs/Web/JavaScript/Reference/Array" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Array</code></a> &#x5B9E;&#x4F8B;&#x3002;</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x6B64;&#x51FD;&#x6570;&#x662F;ECMAScript 2015&#x6807;&#x51C6;&#x7684;&#x4E00;&#x90E8;&#x5206;&#x3002;&#x8BE6;&#x89C1;&#xA0;<a href="https://gist.github.com/rwaldron/1074126" class="external"><code>Array.of &#x548C;</code>&#xA0;<code>Array.from</code>&#xA0;proposal</a>&#xA0;&#x548C;&#xA0;<a href="https://gist.github.com/rwaldron/3186576" class="external"><code>Array.of</code>&#xA0;polyfill</a>&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<pre class="brush: js" style="font-size: 14px;"><span style="line-height: 22px;">Array.of(1);         // [1]
</span><span style="line-height: 22px;">Array.of(1, 2, 3);   // [1, 2, 3]</span>
Array.of(undefined); // [undefined]
</pre>

<h2 name="Compatibility" id="Compatibility">Polyfill</h2>

<p>&#x5982;&#x679C;&#x539F;&#x751F;&#x4E0D;&#x652F;&#x6301;&#x7684;&#x8BDD;&#xFF0C;&#x5728;&#x5176;&#x4ED6;&#x4EE3;&#x7801;&#x4E4B;&#x524D;&#x6267;&#x884C;&#x4EE5;&#x4E0B;&#x4EE3;&#x7801;&#x4F1A;&#x521B;&#x5EFA;&#xA0;<code>Array.of()</code>&#xA0;&#x3002;</p>

<pre class="brush: js" style="font-size: 14px;">if (!Array.of) {
  Array.of = function() {
    return Array.prototype.slice.call(arguments);
  };
}</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table>
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-array.of" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Array.of</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
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

<table>
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
   <td>45</td>
   <td><a href="/en-US/Firefox/Releases/25" title="Released on 2013-10-29.">25</a> (25)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>

<table>
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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>39</td>
   <td>25.0 (25)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Array" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Array</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from" title="Array.from() &#x65B9;&#x6CD5;&#x4ECE;&#x7C7B;&#x4F3C;&#x6570;&#x7EC4;&#x6216;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x6570;&#x7EC4;&#x5B9E;&#x4F8B;&#x3002;"><code>Array.from()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/of" title="TypedArray.of() &#x65B9;&#x6CD5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5177;&#x6709;&#x53EF;&#x53D8;&#x6570;&#x91CF;&#x53C2;&#x6570;&#x7684;&#x65B0;&#x7C7B;&#x578B;&#x6570;&#x7EC4;&#xA0;&#x3002;&#x6B64;&#x65B9;&#x6CD5;&#x51E0;&#x4E4E;&#x4E0E;Array.of() &#x76F8;&#x540C;&#x3002;"><code>TypedArray.of()</code></a></li>
</ul>
                  
                
              