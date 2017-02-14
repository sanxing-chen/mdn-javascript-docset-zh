
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p>Symbol&#x5C5E;&#x6027; @@unscopable &#x5305;&#x542B;&#x4E86;&#x6240;&#x6709;&#xA0;ES2015 (ES6) &#x4E2D;&#x65B0;&#x5B9A;&#x4E49;&#x7684;&#x4E14;&#x5E76;&#x672A;&#x88AB;&#x66F4;&#x65E9;&#x7684;&#xA0;ECMAScript &#x6807;&#x51C6;&#x6536;&#x7EB3;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x3002;&#x8FD9;&#x4E9B;&#x5C5E;&#x6027;&#x5E76;&#x4E0D;&#x5305;&#x542B;&#x5728;&#xA0;<code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with">with</a></code>&#xA0;&#x8BED;&#x53E5;&#x7ED1;&#x5B9A;&#x7684;&#x73AF;&#x5883;&#x4E2D;</p>

<p></p><table class="standard-table"> 
  <thead> 
    <tr> 
      <th colspan="2" class="header"><code>Array.prototype[@@unscopables]</code> &#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x7279;&#x6027;&#xFF1A;</th> 
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
      <td>true</td> 
    </tr> 
  </tbody> 
</table><p></p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><var>arr</var>[Symbol.unscopables]</pre>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>with &#x7ED1;&#x5B9A;&#x4E2D;&#x672A;&#x5305;&#x542B;&#x7684;&#x6570;&#x7EC4;&#x9ED8;&#x8BA4;&#x5C5E;&#x6027;&#x6709;&#xFF1A;</code>copyWithin, entries, fill, find, findIndex, includes, keys, &#x548C;&#xA0;values&#x3002;</p>

<p>&#x67E5;&#x770B; <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" class="new" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables"><code>Symbol.unscopables</code></a> &#x4EE5;&#x4E86;&#x89E3;&#x5982;&#x4F55;&#x7ED9;&#x4F60;&#x5B9A;&#x4E49;&#x7684;&#x5BF9;&#x8C61;&#x8BBE;&#x7F6E; unscopables&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<p>&#x4EE5;&#x4E0B;&#x7684;&#x4EE3;&#x7801;&#x5728;ES5&#x6216;&#x66F4;&#x65E9;&#x7684;&#x7248;&#x672C;&#x4E2D;&#x80FD;&#x6B63;&#x5E38;&#x5DE5;&#x4F5C;&#x3002;&#x7136;&#x800C;&#xA0;ECMAScript 2015 (ES6) &#x6216;&#x4E4B;&#x540E;&#x7684;&#x7248;&#x672C;&#x4E2D;&#x65B0;&#x6DFB;&#x52A0;&#x4E86;&#xA0;<a title="&#x6570;&#x7EC4;&#x7684; keys() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x7D22;&#x5F15;&#x7684;&#x8FED;&#x4EE3;&#x5668;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys"><code>Array.prototype.keys()</code></a> &#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x3002;&#x8FD9;&#x610F;&#x5473;&#x7740;&#x5728;&#xA0;<code>with &#x8BED;&#x53E5;&#x7684;&#x4F5C;&#x7528;&#x57DF;&#xFF0C;&quot;keys&quot;&#x53EA;&#x80FD;&#x4F5C;&#x4E3A;&#x65B9;&#x6CD5;&#x800C;&#x4E0D;&#x80FD;&#x4F5C;&#x4E3A;&#x67D0;&#x4E2A;&#x53D8;&#x91CF;&#x3002;&#x8FD9;&#x6B63;&#x662F;&#x5185;&#x7F6E;&#x7684; @@unscopables &#x5373; Array.prototype[@@unscopables] symbol&#x5C5E;&#x6027;&#x6240;&#x8981;&#x89E3;&#x51B3;&#x7684;&#x95EE;&#x9898;&#xFF1A;&#x9632;&#x6B62;&#x67D0;&#x4E9B;&#x6570;&#x7EC4;&#x65B9;&#x6CD5;&#x88AB;&#x6DFB;&#x52A0;&#x5230;&#xA0;with &#x8BED;&#x53E5;&#x7684;&#x4F5C;&#x7528;&#x57DF;&#x5185;&#x3002;</code></p>

<pre class="brush: js">var keys = [];

with(Array.prototype) {
  keys.push(&quot;something&quot;);
}

Object.keys(Array.prototype[Symbol.unscopables]); 
// [&quot;copyWithin&quot;, &quot;entries&quot;, &quot;fill&quot;, &quot;find&quot;, &quot;findIndex&quot;, 
//  &quot;includes&quot;, &quot;keys&quot;, &quot;values&quot;]</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x540D;&#x79F0;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x5907;&#x6CE8;</th>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype-@@unscopables">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Array.prototype[@@unscopables]</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x9996;&#x6B21;&#x5B9A;&#x4E49;</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Array.prototype[@@unscopables]</small></a></td>
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

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" class="new" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables"><code>Symbol.unscopables</code></a></li>
</ul>
                  
                
              