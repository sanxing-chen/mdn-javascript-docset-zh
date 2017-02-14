
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>Symbol.toPrimitive</strong></code>&#xA0;&#x6307;&#x5C06;&#x88AB;&#x8C03;&#x7528;&#x7684;&#x6307;&#x5B9A;&#x51FD;&#x6570;&#x503C;&#x7684;&#x5C5E;&#x6027;&#x8F6C;&#x6362;&#x4E3A;&#x76F8;&#x5BF9;&#x5E94;&#x7684;&#x539F;&#x59CB;&#x503C;&#x3002;</p>

<div><table class="standard-table"> 
  <thead> 
    <tr> 
      <th colspan="2" class="header"><code>Symbol.toPrimitive</code> &#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x7279;&#x6027;&#xFF1A;</th> 
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

<p>&#x5728;&#xA0;<code>Symbol.toPrimitive</code> &#x5C5E;&#x6027;(&#x7528;&#x4F5C;&#x51FD;&#x6570;&#x503C;)&#x7684;&#x5E2E;&#x52A9;&#x4E0B;&#xFF0C;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x53EF;&#x88AB;&#x8F6C;&#x6362;&#x4E3A;&#x539F;&#x59CB;&#x503C;&#x3002;<code>&#x8BE5;&#x51FD;&#x6570;&#x7531;&#x5B57;&#x7B26;&#x4E32;&#x53C2;&#x6570; hint &#x8C03;&#x7528;&#xFF0C;</code>&#x76EE;&#x7684;&#x662F;&#x6307;&#x5B9A;&#x539F;&#x59CB;&#x503C;&#x8F6C;&#x6362;&#x7ED3;&#x679C;&#x7684;&#x9996;&#x9009;&#x7C7B;&#x578B;&#x3002;&#xA0;hint&#xA0;&#x53C2;&#x6570;&#x53EF;&#x4EE5;&#x662F;<code>&quot;number&quot;&#x3001;</code><code>&quot;string&quot;&#xA0;</code>&#x548C;&#xA0;<code>&quot;default&quot; &#x4E2D;&#x7684;&#x4E00;&#x79CD;&#x3002;</code></p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<p>&#x4E0B;&#x5217;&#x7684;&#x4F8B;&#x5B50;&#x5C55;&#x793A;&#x4E86;&#xA0;<code>Symbol.toPrimitive</code> &#x5C5E;&#x6027;&#x5982;&#x4F55;&#x5C06;&#x5BF9;&#x8C61;&#x8F6C;&#x6362;&#x4E3A;&#x539F;&#x59CB;&#x503C;&#x3002;</p>

<pre class="brush: js">// &#x6CA1;&#x6709; Symbol.toPrimitive &#x5C5E;&#x6027;&#x7684;&#x5BF9;&#x8C61;
var obj1 = {};
console.log(+obj1);     // NaN
console.log(`${obj1}`); // &quot;[object Object]&quot;
console.log(obj1 + &quot;&quot;); // &quot;[object Object]&quot;

// &#x62E5;&#x6709; Symbol.toPrimitive &#x5C5E;&#x6027;&#x7684;&#x5BF9;&#x8C61;
var obj2 = {
  [Symbol.toPrimitive](hint) {
    if (hint == &quot;number&quot;) {
      return 10;
    }
    if (hint == &quot;string&quot;) {
      return &quot;hello&quot;;
    }
    return true;
  }
};
console.log(+obj2);     // 10      -- hint is &quot;number&quot;
console.log(`${obj2}`); // &quot;hello&quot; -- hint is &quot;string&quot;
console.log(obj2 + &quot;&quot;); // &quot;true&quot;  -- hint is &quot;default&quot;
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
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-symbol.toprimitive" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Symbol.toPrimitive</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-symbol.toprimitive" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Symbol.toPrimitive</small></a></td>
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
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>48</td>
   <td><a title="Released on 2016-01-26." href="/en-US/Firefox/Releases/44">44</a> (44)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
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
   <td>44.0 (44)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive" class="new"><code>Date.prototype[@@toPrimitive]</code></a></li>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive" class="new"><code>Symbol.prototype[@@toPrimitive]</code></a></li>
</ul>
                  
                
              