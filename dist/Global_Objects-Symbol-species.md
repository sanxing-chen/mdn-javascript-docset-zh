
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>Symbol.species</strong></code>&#xA0;&#x662F;&#x6307;&#x5B9A;&#x4E00;&#x4E2A;&#x6784;&#x9020;&#x51FD;&#x6570;&#x521B;&#x5EFA;&#x6D3E;&#x751F;&#x5BF9;&#x8C61;&#x7684;&#x51FD;&#x6570;&#x503C;&#x5C5E;&#x6027;&#x3002;</p>

<div><table class="standard-table"> 
  <thead> 
    <tr> 
      <th colspan="2" class="header"><code>Symbol.species</code> &#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x7279;&#x6027;&#xFF1A;</th> 
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
</table></div>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>species &#x8BBF;&#x95EE;&#x5668;&#x5C5E;&#x6027;&#x5141;&#x8BB8;&#x5B50;&#x7C7B;&#x8986;&#x76D6;&#x5BF9;&#x8C61;&#x7684;&#x9ED8;&#x8BA4;&#x6784;&#x9020;&#x51FD;&#x6570;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<p>&#x4F60;&#x53EF;&#x80FD;&#x60F3;&#x5728;&#x6269;&#x5C55;&#x6570;&#x7EC4;&#x7C7B;&#xA0;<code>MyArray&#xA0;</code>&#x4E0A;&#x8FD4;&#x56DE;&#xA0;<a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Array"><code>Array</code></a> &#x5BF9;&#x8C61;&#x3002;&#xA0;&#x4F8B;&#x5982;&#xFF0C;&#x5F53;&#x4F7F;&#x7528;&#x4F8B;&#x5982;&#xA0;<a title="map() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7531;&#x539F;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x65B9;&#x6CD5;&#x540E;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x7EC4;&#x6210;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map"><code>map()</code></a> &#x8FD9;&#x6837;&#x7684;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x9ED8;&#x8BA4;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;&#x65F6;&#xFF0C;&#x4F60;&#x5E0C;&#x671B;&#x8FD9;&#x4E9B;&#x65B9;&#x6CD5;&#x80FD;&#x591F;&#x8FD4;&#x56DE;&#x7236;&#x7EA7;&#x7684; Array &#x5BF9;&#x8C61;&#xFF0C;&#x4EE5;&#x53D6;&#x4EE3;&#xA0;<code>MyArray &#x5BF9;&#x8C61;&#x3002;Symbol.</code>species &#x5141;&#x8BB8;&#x4F60;&#x8FD9;&#x4E48;&#x505A;&#xFF1A;</p>

<pre class="brush: js">class MyArray extends Array {
  // &#x8986;&#x76D6; species &#x5230;&#x7236;&#x7EA7;&#x7684; Array &#x6784;&#x9020;&#x51FD;&#x6570;&#x4E0A;
  static get [Symbol.species]() { return Array; }
}
var a = new MyArray(1,2,3);
var mapped = a.map(x =&gt; x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array);   // true
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
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-symbol.species" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Symbol.species</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-symbol.species" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Symbol.species</small></a></td>
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
   <th>Internet Explorer/Edge</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>51</td>
   <td><a title="Released on 2015-09-22." href="/en-US/Firefox/Releases/41">41</a> (41)</td>
   <td>14</td>
   <td>38</td>
   <td>10</td>
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
   <th>IE/Edge Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>5</td>
   <td>41.0 (41)</td>
   <td>14</td>
   <td>38</td>
   <td>10</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/@@species" class="new"><code>Map[@@species]</code></a></li>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/@@species" class="new"><code>Set[@@species]</code></a></li>
</ul>
                  
                
              