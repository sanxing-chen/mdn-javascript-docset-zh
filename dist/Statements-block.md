
                
                  
                    <div>
<div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>
</div>

<h2 id="&#x6982;&#x89C8;">&#x6982;&#x89C8;</h2>

<p><strong>&#x8BED;&#x53E5;&#x5757;</strong> (&#x6216;&#x5176;&#x4ED6;&#x8BED;&#x8A00;&#x4E2D;&#x7684;&#xA0;<strong>&#x590D;&#x5408;&#x8BED;&#x53E5;</strong>) &#x7528;&#x6765;&#x7EC4;&#x7EC7;&#x96F6;&#x4E2A;&#x6216;&#x591A;&#x6761;&#x8BED;&#x53E5;. &#x7528;&#x4E00;&#x5BF9;&#x82B1;&#x62EC;&#x53F7;&#x754C;&#x5B9A;&#x8BED;&#x53E5;&#x5757;.</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">{
  <var>statement_1</var>;
  <var>statement_2;</var>
  ...
  <var>statement_n;</var>
}
</pre>

<dl>
 <dt><code>statement_1</code>, <code>statement_2</code>, <code>statement_n</code></dt>
 <dd>&#x8BED;&#x53E5;&#x90FD;&#x5305;&#x88F9;&#x5728;&#x8BED;&#x53E5;&#x5757;&#x4E2D;.</dd>
</dl>

<h2 id="&#x8BF4;&#x660E;">&#x8BF4;&#x660E;</h2>

<p>&#x8BED;&#x53E5;&#x5757;&#x901A;&#x5E38;&#x5728;&#x6D41;&#x7A0B;&#x63A7;&#x5236;&#x8BED;&#x53E5; (&#x5982; <code>if</code>, <code>for</code>, <code>while</code>)&#x4E2D;&#x4F7F;&#x7528;.&#x5982;:</p>

<pre class="brush: js">while (x &lt; 10) {
  x++;
}
</pre>

<p>&#x6CE8;&#x610F;&#x8BED;&#x53E5;&#x5757;&#x4E0D;&#x662F;&#x4EE5;&#x5206;&#x53F7;&#x7ED3;&#x5C3E;.</p>

<p>&#x5176;&#x4ED6;&#x8BED;&#x8A00;&#x4E2D;&#x901A;&#x5E38;&#x5C06;&#x8BED;&#x53E5;&#x5757;&#x79F0;&#x4E3A;&#xA0;<strong>&#x590D;&#x5408;&#x8BED;&#x53E5;</strong>. &#x8BED;&#x53E5;&#x5757;&#x5141;&#x8BB8;&#x4F60;&#x5728;Javascript&#x9700;&#x8981;&#x4E00;&#x884C;&#x8BED;&#x53E5;&#x7684;&#x65F6;&#x5019;&#x4F7F;&#x7528;&#x591A;&#x884C;&#x8BED;&#x53E5;. &#x5728;JavaScript&#x4E2D;&#x4F7F;&#x7528;&#x8BED;&#x53E5;&#x5757;&#x662F;&#x79CD;&#x5F88;&#x5E38;&#x89C1;&#x7684;&#x505A;&#x6CD5;. &#x4E0E;&#x4E4B;&#x76F8;&#x53CD;&#x7684;&#x505A;&#x6CD5;&#x662F;&#x4F7F;&#x7528;&#xA0;<a href="/en-US/docs/Web/JavaScript/Reference/Statements/Empty">empty&#x8BED;&#x53E5;</a>, empty&#x8BED;&#x53E5; &#x53EF;&#x4EE5;&#x5728;&#x9700;&#x8981;&#x8BED;&#x53E5;&#x7684;&#x73AF;&#x5883;&#x4E0B;&#x4E0D;&#x63D0;&#x4F9B;&#x4EFB;&#x4F55;&#x8BED;&#x53E5;.</p>

<h3 id="&#x5757;&#x7EA7;&#x4F5C;&#x7528;&#x57DF;">&#x5757;&#x7EA7;&#x4F5C;&#x7528;&#x57DF;</h3>

<h4 id="&#x4F7F;&#x7528;_var">&#x4F7F;&#x7528; var</h4>

<p>&#x901A;&#x8FC7;var&#x58F0;&#x660E;&#x7684;&#x53D8;&#x91CF;<strong>&#x6CA1;&#x6709;</strong>&#x5757;&#x7EA7;&#x4F5C;&#x7528;&#x57DF;. &#x5728;&#x8BED;&#x53E5;&#x5757;(block)&#x91CC;&#x58F0;&#x660E;&#x7684;&#x53D8;&#x91CF;&#x4F5C;&#x7528;&#x57DF;&#x662F;&#x5176;&#x6240;&#x5728;&#x7684;&#x51FD;&#x6570;&#x6216;&#x8005; script &#x6807;&#x7B7E;&#x5185;, &#x4F60;&#x53EF;&#x4EE5;&#x5728;&#x8BED;&#x53E5;&#x5757;&#x5916;&#x9762;&#x8BBF;&#x95EE;&#x5230;&#x5B83;. &#x6362;&#x53E5;&#x8BDD;&#x8BF4;, &#x8BED;&#x53E5;&#x5757;&#x4E0D;&#x4F1A;&#x751F;&#x6210;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x4F5C;&#x7528;&#x57DF;.&#xA0;&#x5C3D;&#x7BA1;&#x5355;&#x72EC;&#x7684;&#x8BED;&#x53E5;&#x5757;&#x662F;&#x5408;&#x6CD5;&#x7684;&#x8BED;&#x53E5;, &#x4F46;&#x5728;JavaScript&#x4E2D;&#x4F60;&#x4E0D;&#x4F1A;&#x60F3;&#x4F7F;&#x7528;&#x5355;&#x72EC;&#x7684;&#x8BED;&#x53E5;&#x5757;,&#x56E0;&#x4E3A;&#x5B83;&#x4EEC;&#x4E0D;&#x50CF;&#x4F60;&#x60F3;&#x8C61;&#x7684;C&#x6216;Java&#x4E2D;&#x7684;&#x8BED;&#x53E5;&#x5757;&#x90A3;&#x6837;&#x5904;&#x7406;&#x4E8B;&#x7269;. &#x4F8B;&#x5982;:</p>

<pre class="brush: js">var x = 1;
{
  var x = 2;
}
console.log(x); // &#x8F93;&#x51FA; 2
</pre>

<p>&#x8BE5;&#x4EE3;&#x7801;&#x6BB5;&#x4F1A;&#x8F93;&#x51FA;2,&#x56E0;&#x4E3A;&#x5757;&#x4E2D;&#x7684;&#xA0;var x &#x8BED;&#x53E5;&#x4E0E;&#x5757;&#x524D;&#x9762;&#x7684;var x &#x8BED;&#x53E5;&#x4F5C;&#x7528;&#x57DF;&#x76F8;&#x540C;. &#x5728; C &#x6216; Java&#x4E2D;, &#x8FD9;&#x6BB5;&#x4EE3;&#x7801;&#x4F1A;&#x8F93;&#x51FA;1.</p>

<h4 id="&#x4F7F;&#x7528;_let_&#x548C;_const">&#x4F7F;&#x7528; let &#x548C; const</h4>

<p>&#x4E0E; var &#x4E0D;&#x540C;, &#x4F7F;&#x7528; let &#x548C; const &#x58F0;&#x660E;&#x7684;&#x53D8;&#x91CF;&#x662F;&#x6709;&#x5757;&#x7EA7;&#x4F5C;&#x7528;&#x57DF;&#x7684;.</p>

<pre><code>let x = 1;
{
  let x = 2;
}
console.log(x); // &#x8F93;&#x51FA; 1</code></pre>

<p>x = 2 &#x88AB;&#x9650;&#x5236;&#x5728;&#x5757;&#x7EA7;&#x4F5C;&#x7528;&#x57DF;&#x4E2D;, &#x4E5F;&#x5C31;&#x662F;&#x5B83;&#x88AB;&#x58F0;&#x660E;&#x65F6;&#x6240;&#x5728;&#x7684;&#x5757;&#x7EA7;&#x4F5C;&#x7528;&#x4E8E;.</p>

<p>const &#x7684;&#x7ED3;&#x679C;&#x4E5F;&#x662F;&#x4E00;&#x6837;&#x7684;:</p>

<pre><code>const c = 1;
{
  const c = 2;
}
console.log(c); // &#x8F93;&#x5165;1, &#x800C;&#x4E14;&#x4E0D;&#x4F1A;&#x62A5;&#x9519;</code></pre>

<p>&#x6CE8;&#x610F;&#x5757;&#x7EA7;&#x4F5C;&#x7528;&#x57DF;&#x91CC;&#x7684;&#x5E38;&#x91CF;&#x58F0;&#x660E; const c = 2 &#x5E76;&#x4E0D;&#x4F1A;&#x62A5;&#xA0;SyntaxError: Identifier &apos;c&apos; has already been declared &#x8FD9;&#x6837;&#x7684;&#x8BED;&#x6CD5;&#x9519;&#x8BEF;, &#x56E0;&#x4E3A;&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x4F5C;&#x7528;&#x57DF;.</p>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

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
   <td>Initial definition. Implemented in JavaScript 1.0</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-12.1" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Block statement</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-block" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Block statement</small></a></td>
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
 <li><a title="while &#x8BED;&#x53E5;&#x53EF;&#x4EE5;&#x5728;&#x67D0;&#x4E2A;&#x6761;&#x4EF6;&#x8868;&#x8FBE;&#x5F0F;&#x4E3A;&#x771F;&#x7684;&#x524D;&#x63D0;&#x4E0B;&#xFF0C;&#x5FAA;&#x73AF;&#x6267;&#x884C;&#x6307;&#x5B9A;&#x7684;&#x4E00;&#x6BB5;&#x4EE3;&#x7801;&#xFF0C;&#x76F4;&#x5230;&#x90A3;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;&#x4E0D;&#x4E3A;&#x771F;&#x65F6;&#x7ED3;&#x675F;&#x5FAA;&#x73AF;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Statements/while"><code>while</code></a></li>
</ul>
                  
                
              