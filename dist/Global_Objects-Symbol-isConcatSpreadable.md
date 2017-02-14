
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p>&#x5185;&#x7F6E;&#x7684;<strong><code>Symbol.isConcatSpreadable</code></strong><code>&#x7B26;&#x53F7;&#x7528;&#x4E8E;&#x914D;&#x7F6E;&#x67D0;&#x5BF9;&#x8C61;&#x4F5C;&#x4E3A;</code><a title="concat() &#x65B9;&#x6CD5;&#x5C06;&#x4F20;&#x5165;&#x7684;&#x6570;&#x7EC4;&#x6216;&#x975E;&#x6570;&#x7EC4;&#x503C;&#x4E0E;&#x539F;&#x6570;&#x7EC4;&#x5408;&#x5E76;,&#x7EC4;&#x6210;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x6570;&#x7EC4;&#x5E76;&#x8FD4;&#x56DE;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat"><code>Array.prototype.concat()</code></a>&#x65B9;&#x6CD5;&#x7684;&#x53C2;&#x6570;&#x65F6;&#x662F;&#x5426;&#x5C55;&#x5F00;&#x5176;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x3002;</p>

<div><table class="standard-table"> 
  <thead> 
    <tr> 
      <th colspan="2" class="header"><code>Symbol.isConcatSpreadable</code> &#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x7279;&#x6027;&#xFF1A;</th> 
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

<p><code>@@isConcatSpreadable</code>&#xA0;&#x7B26;&#x53F7;&#xA0;(<code>Symbol.isConcatSpreadable</code>) &#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x5B9A;&#x4E49;&#x4E3A;&#x5BF9;&#x8C61;&#x5C5E;&#x6027;&#x6216;&#x7EE7;&#x627F;&#x800C;&#x6765;&#xFF0C;&#x5B83;&#x662F;&#x5E03;&#x5C14;&#x7C7B;&#x578B;&#x3002;&#x5B83;&#x53EF;&#x4EE5;&#x63A7;&#x5236;&#x6570;&#x7EC4;&#x6216;&#x7C7B;&#x4F3C;&#x6570;&#x7EC4;&#xFF08;array-like&#xFF09;&#x7684;&#x5BF9;&#x8C61;&#x7684;&#x884C;&#x4E3A;&#xFF1A;</p>

<ul>
 <li>&#x5BF9;&#x4E8E;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#xFF0C;&#x9ED8;&#x8BA4;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x7528;&#x4E8E;concat&#x65F6;&#xFF0C;&#x4F1A;&#x6309;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x5C55;&#x5F00;&#x7136;&#x540E;&#x8FDB;&#x884C;&#x8FDE;&#x63A5;&#xFF08;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x4F5C;&#x4E3A;&#x65B0;&#x6570;&#x7EC4;&#x7684;&#x5143;&#x7D20;&#xFF09;&#x3002;&#x91CD;&#x7F6E;<code>Symbol.isConcatSpreadable</code>&#x53EF;&#x4EE5;&#x6539;&#x53D8;&#x9ED8;&#x8BA4;&#x884C;&#x4E3A;&#x3002;</li>
 <li>&#x5BF9;&#x4E8E;&#x7C7B;&#x4F3C;&#x6570;&#x7EC4;&#x7684;&#x5BF9;&#x8C61;&#xFF0C;&#x7528;&#x4E8E;concat&#x65F6;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x6574;&#x4F53;&#x4F5C;&#x4E3A;&#x65B0;&#x6570;&#x7EC4;&#x7684;&#x5143;&#x7D20;&#xFF0C;&#x91CD;&#x7F6E;<code>Symbol.isConcatSpreadable</code>&#x53EF;&#x6539;&#x53D8;&#x9ED8;&#x8BA4;&#x884C;&#x4E3A;&#x3002;</li>
</ul>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x6570;&#x7EC4;">&#x6570;&#x7EC4;</h3>

<p>&#x9ED8;&#x8BA4;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;<a title="concat() &#x65B9;&#x6CD5;&#x5C06;&#x4F20;&#x5165;&#x7684;&#x6570;&#x7EC4;&#x6216;&#x975E;&#x6570;&#x7EC4;&#x503C;&#x4E0E;&#x539F;&#x6570;&#x7EC4;&#x5408;&#x5E76;,&#x7EC4;&#x6210;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x6570;&#x7EC4;&#x5E76;&#x8FD4;&#x56DE;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat"><code>Array.prototype.concat()</code></a> &#x5C55;&#x5F00;&#x5176;&#x5143;&#x7D20;&#x8FDE;&#x63A5;&#x5230;&#x7ED3;&#x679C;&#x4E2D;&#xFF1A;</p>

<pre class="brush: js">var alpha = [&apos;a&apos;, &apos;b&apos;, &apos;c&apos;], 
    numeric = [1, 2, 3]; 

var alphaNumeric = alpha.concat(numeric); 

console.log(alphaNumeric); // &#x7ED3;&#x679C;: [&apos;a&apos;, &apos;b&apos;, &apos;c&apos;, 1, 2, 3]
</pre>

<p>&#x8BBE;&#x7F6E;<code>Symbol.isConcatSpreadable</code>&#x4E3A;<code>false</code>&#xFF1A;</p>

<pre class="brush: js">var alpha = [&apos;a&apos;, &apos;b&apos;, &apos;c&apos;], 
    numeric = [1, 2, 3]; 

numeric[Symbol.isConcatSpreadable] = false;
var alphaNumeric = alpha.concat(numeric); 

console.log(alphaNumeric); // &#x7ED3;&#x679C;: [&apos;a&apos;, &apos;b&apos;, &apos;c&apos;, [1, 2, 3] ]
</pre>

<h3 id="Array-like_&#x5BF9;&#x8C61;">Array-like &#x5BF9;&#x8C61;</h3>

<p>&#x5BF9;&#x4E8E;&#x7C7B;&#x6570;&#x7EC4; (array-like)&#x5BF9;&#x8C61;&#xFF0C;&#x9ED8;&#x8BA4;&#x4E0D;&#x5C55;&#x5F00;&#x3002;&#x671F;&#x671B;&#x5C55;&#x5F00;&#x5176;&#x5143;&#x7D20;&#x7528;&#x4E8E;&#x8FDE;&#x63A5;&#xFF0C;&#x9700;&#x8981;&#x8BBE;&#x7F6E;&#xA0;<code>Symbol.isConcatSpreadable</code>&#xA0;&#x4E3A;true&#xFF1A;</p>

<pre class="brush: js">var x = [1, 2, 3];

var fakeArray = { 
  [Symbol.isConcatSpreadable]: true, 
  length: 2, 
  0: &quot;hello&quot;, 
  1: &quot;world&quot; 
}

x.concat(fakeArray); // [1, 2, 3, &quot;hello&quot;, &quot;world&quot;]
</pre>

<h2 id="&#x6280;&#x672F;&#x6807;&#x51C6;">&#x6280;&#x672F;&#x6807;&#x51C6;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x6807;&#x51C6;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x5907;&#x6CE8;</th>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-symbol.isconcatspreadable">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Symbol.isconcatspreadable</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="https://tc39.github.io/ecma262/#sec-symbol.isconcatspreadable">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Symbol.isconcatspreadable</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>No change.</td>
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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><a title="Released on 2016-08-02." href="/en-US/Firefox/Releases/48">48</a> (48)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>48.0 (48)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x53C2;&#x8003;">&#x53C2;&#x8003;</h2>

<ul>
 <li><a title="concat() &#x65B9;&#x6CD5;&#x5C06;&#x4F20;&#x5165;&#x7684;&#x6570;&#x7EC4;&#x6216;&#x975E;&#x6570;&#x7EC4;&#x503C;&#x4E0E;&#x539F;&#x6570;&#x7EC4;&#x5408;&#x5E76;,&#x7EC4;&#x6210;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x6570;&#x7EC4;&#x5E76;&#x8FD4;&#x56DE;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat"><code>Array.prototype.concat()</code></a></li>
</ul>
                  
                
              