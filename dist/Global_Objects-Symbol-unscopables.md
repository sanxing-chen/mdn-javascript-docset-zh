
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><strong><code>Symbol.unscopables&#xA0;</code></strong>&#x6307;&#x7528;&#x4E8E;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x503C;&#xFF0C;&#x5176;&#x5BF9;&#x8C61;&#x81EA;&#x8EAB;&#x548C;&#x7EE7;&#x627F;&#x7684;&#x4ECE;&#x5173;&#x8054;&#x5BF9;&#x8C61;&#x7684; with &#x73AF;&#x5883;&#x7ED1;&#x5B9A;&#x4E2D;&#x6392;&#x9664;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x79F0;&#x3002;</p>

<div><table class="standard-table"> 
  <thead> 
    <tr> 
      <th colspan="2" class="header"><code>Symbol.unscopables</code> &#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x7279;&#x6027;&#xFF1A;</th> 
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

<p><code>&#x53EF;&#x4EE5;&#x5728;&#x4EFB;&#x4F55;&#x5BF9;&#x8C61;&#x4E0A;&#x5B9A;&#x4E49;&#xA0;@@unscopables</code>&#xA0;symbol (<code>Symbol.unscopables</code>)<code>&#xFF0C;&#x7528;&#x4E8E;&#x6392;&#x9664;&#x5C5E;&#x6027;&#x540D;&#x79F0;&#x5E76;&#x4E0E; with &#x73AF;&#x5883;&#x7ED1;&#x5B9A;&#x5728;&#x4E00;&#x8D77;&#x4F5C;&#x4E3A;&#x8BCD;&#x6CD5;&#x53D8;&#x91CF;&#x516C;&#x5F00;&#x3002; &#x8BF7;&#x6CE8;&#x610F;&#xFF0C;&#x5982;&#x679C;&#x4F7F;&#x7528;&#xA0;</code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode">Strict mode</a><code>&#xFF0C;&#x8BED;&#x53E5;&#x5C06;&#x4E0D;&#x53EF;&#x7528;&#xFF0C;&#x5E76;&#x4E14;&#x53EF;&#x80FD;&#x4E5F;&#x4E0D;&#x9700;&#x8981; symbol&#x3002;</code></p>

<p>&#x5728;&#xA0;<code>unscopables</code>&#xA0;&#x5BF9;&#x8C61;&#x4E0A;&#x8BBE;&#x7F6E;&#x5C5E;&#x6027;&#x4E3A; true&#xFF0C;&#x5C06;&#x4F7F;&#x5176;&#xA0;<em>unscopable</em> &#x5E76;&#x4E14;&#x56E0;&#x6B64;&#x8BE5;&#x5C5E;&#x6027;&#x4E5F;&#x5C06;&#x4E0D;&#x4F1A;&#x5728;&#x8BCD;&#x6CD5;&#x73AF;&#x5883;&#x53D8;&#x91CF;&#x4E2D;&#x51FA;&#x73B0;&#x3002; &#x5982;&#x679C;&#x8BBE;&#x7F6E;&#x5C5E;&#x6027;&#x4E3A;&#xA0;<code>false</code>&#xA0;&#xFF0C;&#x5219;&#x5C06;&#x4F7F;&#x5176;&#x53EF;&#xA0;<code>scopable</code>&#xA0;&#x5E76;&#x4E14;&#x8BE5;&#x5C5E;&#x6027;&#x4F1A;&#x51FA;&#x73B0;&#x5728;&#x8BCD;&#x6CD5;&#x73AF;&#x5883;&#x53D8;&#x91CF;&#x4E2D;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<p>&#x4E0B;&#x5217;&#x7684;&#x4EE3;&#x7801;&#x53EF;&#x517C;&#x5BB9; ES5 &#x53CA;&#x4EE5;&#x4E0B;&#x7248;&#x672C;&#x3002;&#x7136;&#x800C;&#xFF0C;&#x5728;&#xA0;ECMAScript 2015 (ES6) &#x6216;&#x5176;&#x540E;&#x7EED;&#x7248;&#x672C;&#x4E2D;&#xFF0C;<a title="&#x6570;&#x7EC4;&#x7684; keys() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x7D22;&#x5F15;&#x7684;&#x8FED;&#x4EE3;&#x5668;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys"><code>Array.prototype.keys()</code></a> &#x65B9;&#x6CD5;&#x624D;&#x4F1A;&#x51FA;&#x73B0;&#x3002;&#x610F;&#x5473;&#x7740;&#x5185;&#x90E8;&#xA0;<code>with</code> &#x73AF;&#x5883;&#x201C;&#x5173;&#x952E;&#x5B57;&#x201D; &#x5B58;&#x5728;&#x8BE5;&#x65B9;&#x6CD5;&#xFF0C;&#x4F46;&#x53D8;&#x91CF;&#x4E2D;&#x4E0D;&#x4F1A;&#x5B58;&#x5728;&#x3002; &#x4E5F;&#x5C31;&#x662F;&#x8BF4;&#xFF0C;&#x5F53;&#xA0;<code>unscopable</code>s symbol &#x88AB;&#x5C55;&#x793A;&#x65F6;&#xFF0C;&#x5185;&#x7F6E;&#x7684;<code>unscopables&#xA0;</code>&#x8BBE;&#x7F6E;&#x662F;&#x7531;&#xA0;<a title="Symbol&#x5C5E;&#x6027; @@unscopable &#x5305;&#x542B;&#x4E86;&#x6240;&#x6709;&#xA0;ES2015 (ES6) &#x4E2D;&#x65B0;&#x5B9A;&#x4E49;&#x7684;&#x4E14;&#x5E76;&#x672A;&#x88AB;&#x66F4;&#x65E9;&#x7684;&#xA0;ECMAScript &#x6807;&#x51C6;&#x6536;&#x7EB3;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x3002;&#x8FD9;&#x4E9B;&#x5C5E;&#x6027;&#x5E76;&#x4E0D;&#x5305;&#x542B;&#x5728;&#xA0;with&#xA0;&#x8BED;&#x53E5;&#x7ED1;&#x5B9A;&#x7684;&#x73AF;&#x5883;&#x4E2D;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/@@unscopables"><code>Array.prototype[@@unscopables]</code></a> &#x5C55;&#x793A;&#x5E76;&#x5B9E;&#x73B0;&#x7684;&#xFF0C;&#xA0;&#x4E00;&#x4E9B; Array &#x7684;&#x65B9;&#x6CD5; &#x5C06;&#x4F5C;&#x4E3A;&#xA0;scoped&#xA0;&#x653E;&#x5165; <code>with</code> &#x8BED;&#x53E5;&#x4E2D;&#x3002;</p>

<pre class="brush: js">var keys = [];

with(Array.prototype) {
  keys.push(&quot;something&quot;);
}

Object.keys(Array.prototype[Symbol.unscopables]); 
// [&quot;copyWithin&quot;, &quot;entries&quot;, &quot;fill&quot;, &quot;find&quot;, &quot;findIndex&quot;, 
//  &quot;includes&quot;, &quot;keys&quot;, &quot;values&quot;]
</pre>

<p>&#x4F60;&#x4E5F;&#x53EF;&#x4EE5;&#x4E3A;&#x4F60;&#x81EA;&#x5DF1;&#x7684;&#x5BF9;&#x8C61;&#x8BBE;&#x7F6E;&#xA0;<code>unscopables</code>&#xA0;&#x3002;</p>

<pre class="brush: js">var obj = { 
  foo: 1, 
  bar: 2 
};

obj[Symbol.unscopables] = { 
  foo: false, 
  bar: true 
};

with(obj) {
  console.log(foo); // 1
  console.log(bar); // ReferenceError: bar is not defined
}
</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-symbol.unscopables" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Symbol.unscopables</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-symbol.unscopables" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Symbol.unscopables</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

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
   <td>38</td>
   <td><a title="Released on 2016-08-02." href="/en-US/Firefox/Releases/48">48</a> (48)</td>
   <td>12</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>9</td>
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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>48.0 (48)</td>
   <td>12</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>9</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><a title="Symbol&#x5C5E;&#x6027; @@unscopable &#x5305;&#x542B;&#x4E86;&#x6240;&#x6709;&#xA0;ES2015 (ES6) &#x4E2D;&#x65B0;&#x5B9A;&#x4E49;&#x7684;&#x4E14;&#x5E76;&#x672A;&#x88AB;&#x66F4;&#x65E9;&#x7684;&#xA0;ECMAScript &#x6807;&#x51C6;&#x6536;&#x7EB3;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x3002;&#x8FD9;&#x4E9B;&#x5C5E;&#x6027;&#x5E76;&#x4E0D;&#x5305;&#x542B;&#x5728;&#xA0;with&#xA0;&#x8BED;&#x53E5;&#x7ED1;&#x5B9A;&#x7684;&#x73AF;&#x5883;&#x4E2D;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/@@unscopables"><code>Array.prototype[@@unscopables]</code></a></li>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/with">with</a></code> statement (not available in <a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">Strict mode</a>)</li>
</ul>
                  
                
              