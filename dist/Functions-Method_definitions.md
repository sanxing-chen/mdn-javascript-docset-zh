
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="overheadIndicator" style="background: #9CF49C;"> 
    <p><strong>&#x8BE5;&#x7279;&#x6027;&#x5904;&#x4E8E; ECMAScript 6 &#x89C4;&#x8303;&#x8349;&#x6848;&#x4E2D;&#xFF0C;&#x76EE;&#x524D;&#x7684;&#x5B9E;&#x73B0;&#x5728;&#x672A;&#x6765;&#x53EF;&#x80FD;&#x4F1A;&#x53D1;&#x751F;&#x5FAE;&#x8C03;&#xFF0C;&#x8BF7;&#x8C28;&#x614E;&#x4F7F;&#x7528;&#x3002;</strong></p> 
</div></div>

<p>ECMAScript&#x4ECE;ECMAScript6&#x5F00;&#x59CB;&#xFF0C;&#x5F15;&#x5165;&#x4E86;&#x4E00;&#x79CD;&#x66F4;&#x7B80;&#x77ED;&#x7684;&#x5728;&#x5BF9;&#x8C61;&#x521D;&#x59CB;&#x5668;&#x4E2D;&#x5B9A;&#x4E49;&#x65B9;&#x6CD5;&#x7684;&#x8BED;&#x6CD5;&#xFF0C;&#x8FD9;&#x662F;&#x4E00;&#x79CD;&#x628A;&#x65B9;&#x6CD5;&#x540D;&#x76F4;&#x63A5;&#x8D4B;&#x7ED9;&#x51FD;&#x6570;&#x7684;&#x7B80;&#x5199;&#x65B9;&#x5F0F;&#x3002;</p>

<h2 id=".E8.AF.AD.E6.B3.95">&#x8BED;&#x6CD5;</h2>

<pre class="brush: js">var obj = {
  <var>property</var>([<var>parameters</var>]) {},
  get <var>property</var>() {},
  set <var>property</var>(<var>value</var>) {},
  * <var>generator</var>() {}
};
</pre>

<h2 id=".E7.AE.80.E8.BF.B0">&#x7B80;&#x8FF0;</h2>

<p>&#x8BE5;&#x7B80;&#x5199;&#x8BED;&#x6CD5;&#x4E0E;ECMAScript 5&#x7684;<a href="/en-US/docs/Web/JavaScript/Reference/Functions/get">getter</a>&#x548C;<a href="/en-US/docs/Web/JavaScript/Reference/Functions/set">setter</a>&#x8BED;&#x6CD5;&#x7C7B;&#x4F3C;&#x3002;</p>

<p>&#x5982;&#x4E0B;&#x4EE3;&#x7801;&#xFF0C;</p>

<pre class="brush: js">var obj = {
  foo: function() {},
  bar: function() {}
};</pre>

<p>&#x73B0;&#x53EF;&#x88AB;&#x7B80;&#x5199;&#x4E3A;&#xFF1A;</p>

<pre class="brush: js">var obj = {
  foo() {},
&#xA0; bar() {}
};</pre>

<h3 id=".E7.94.9F.E6.88.90.E5.99.A8.E6.96.B9.E6.B3.95.E7.9A.84.E7.AE.80.E5.86.99.E8.AF.AD.E6.B3.95">&#x751F;&#x6210;&#x5668;&#x65B9;&#x6CD5;&#x7684;&#x7B80;&#x5199;&#x8BED;&#x6CD5;</h3>

<p><a href="/en-US/docs/Web/JavaScript/Reference/Statements/function*">&#x751F;&#x6210;&#x5668;&#x65B9;&#x6CD5;</a>&#x4E5F;&#x53EF;&#x4EE5;&#x7528;&#x8FD9;&#x79CD;&#x7B80;&#x5199;&#x8BED;&#x6CD5;&#x5B9A;&#x4E49;&#x3002;&#x6CE8;&#x610F;&#x7B80;&#x5199;&#x8BED;&#x6CD5;&#x4E2D;&#x7684;&#x661F;&#x53F7;&#xFF08;*&#xFF09;&#x5FC5;&#x987B;&#x51FA;&#x73B0;&#x5728;&#x751F;&#x6210;&#x5668;&#x540D;&#x524D;&#xFF0C;&#x4E5F;&#x5C31;&#x662F;&#x8BF4;<code>* g(){}</code>&#x53EF;&#x4EE5;&#x6B63;&#x5E38;&#x5DE5;&#x4F5C;&#xFF0C;&#x800C;<code>g *(){}&#x4E0D;&#x884C;&#x3002;</code></p>

<pre class="brush: js;highlight[12]">// &#x7528;&#x6709;&#x5C5E;&#x6027;&#x540D;&#x7684;&#x8BED;&#x6CD5;&#x5B9A;&#x4E49;&#x65B9;&#x6CD5;&#xFF08;ES6&#x4E4B;&#x524D;&#xFF09;&#xFF1A;
var obj2 = {
  g: function*() {
    var index = 0;
    while(true)
      yield index++;
  }
};

// &#x540C;&#x4E00;&#x4E2A;&#x65B9;&#x6CD5;&#xFF0C;&#x7B80;&#x5199;&#x8BED;&#x6CD5;&#xFF1A;
var obj2 = { 
  * g() {
    var index = 0;
    while(true)
      yield index++;
  }
};

var it = obj2.g();
console.log(it.next().value); // 0
console.log(it.next().value); // 1</pre>

<h2 id=".E7.A4.BA.E4.BE.8B">&#x793A;&#x4F8B;</h2>

<h3 id=".E7.AE.80.E5.8D.95.E7.A4.BA.E4.BE.8B">&#x7B80;&#x5355;&#x793A;&#x4F8B;</h3>

<pre class="brush: js;highlight[3]">var obj = {
  a : &quot;foo&quot;,
  b(){ return this.a; }
};
console.log(obj.b()); // &quot;foo&quot;
</pre>

<h3 id=".E8.AE.A1.E7.AE.97.E5.B1.9E.E6.80.A7.E5.90.8D">&#x8BA1;&#x7B97;&#x5C5E;&#x6027;&#x540D;</h3>

<p>&#x8BE5;&#x7B80;&#x5199;&#x65B9;&#x6CD5;&#x4E5F;&#x652F;&#x6301;&#x8BA1;&#x7B97;&#x5C5E;&#x6027;&#x540D;&#xFF08;&#x4E0B;&#x4F8B;&#x4E2D;&#x7684;foo2&#x65B9;&#x6CD5;&#xFF09;&#xFF1A;</p>

<pre class="brush: js;highlight[4]">var bar = {
  foo0 : function (){return 0;},
  foo1(){return 1;},
  [&quot;foo&quot; + 2](){return 2;},
};

console.log(bar.foo0()); // 0
console.log(bar.foo1()); // 1
console.log(bar.foo2()); // 2</pre>

<h2 id=".E8.A7.84.E8.8C.83">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x5907;&#x6CE8;</th>
  </tr>
  <tr>
   <td><a class="external" href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-method-definitions" hreflang="en" lang="en">ECMAScript 6 (ECMA-262)<br><small lang="zh-CN">Method definitions</small></a></td>
   <td><span class="spec-RC">Release Candidate</span></td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;</td>
  </tr>
 </tbody>
</table>

<h2 id=".E6.B5.8F.E8.A7.88.E5.99.A8.E5.85.BC.E5.AE.B9.E6.80.A7">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<div><div class="htab"> 
    <a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a> 
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
   <td>Method definition shorthand</td>
   <td>39</td>
   <td><a href="/en-US/Firefox/Releases/34" title="Released on 2014-12-01.">34</a> (34)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>26</td>
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
   <td>Method definition shorthand</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>34.0 (34)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h3 id="SpiderMonkey.E7.89.B9.E5.AE.9A.E5.A4.87.E6.B3.A8">SpiderMonkey&#x7279;&#x5B9A;&#x5907;&#x6CE8;</h3>

<ul>
 <li>&#x5728;SpiderMonkey 38 (Firefox 38 / Thunderbird 38 / SeaMonkey 2.35)&#x4E4B;&#x524D;&#xFF0C;&quot;<code>get</code>&quot;&#x548C;&quot;<code>set</code>&quot;&#x662F;&#x65E0;&#x6548;&#x7684;&#x751F;&#x6210;&#x5668;&#x65B9;&#x6CD5;&#x540D;&#x3002;&#x8FD9;&#x5728;<a class="external" href="https://bugzilla.mozilla.org/show_bug.cgi?id=1073809" title="FIXED: Allow &quot;get&quot; and &quot;set&quot; as names for generator methods">bug&#xA0;1073809</a>&#x4E2D;&#x88AB;&#x4FEE;&#x590D;&#x4E86;&#x3002;</li>
</ul>

<h2 id=".E5.8F.82.E8.A7.81">&#x53C2;&#x89C1;</h2>

<ul>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Functions/get">get</a></code></li>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Functions/set">set</a></code></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Lexical_grammar">Lexical grammar</a></li>
</ul>
                  
                
              