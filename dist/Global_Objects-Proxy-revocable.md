
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="overheadIndicator" style="background: #9CF49C;"> 
    <p><strong>&#x8BE5;&#x7279;&#x6027;&#x76EE;&#x524D;&#x4ECD;&#x5904;&#x4E8E; ECMAScript 6 &#x89C4;&#x8303;&#x8349;&#x6848;&#x4E2D;</strong><br>&#x76EE;&#x524D;&#x7684;&#x5B9E;&#x73B0;&#x5728;&#x672A;&#x6765;&#x53EF;&#x80FD;&#x4F1A;&#x53D1;&#x751F;&#x6539;&#x53D8;&#xFF0C;&#x751A;&#x81F3;&#x88AB;&#x5B8C;&#x5168;&#x5220;&#x9664;&#xFF0C;&#x8BF7;&#x8C28;&#x614E;&#x4F7F;&#x7528;&#x3002;</p> 
</div></div>

<h2 id="Summary" name="Summary">&#x6982;&#x8FF0;</h2>

<p><code><strong>Proxy.revocable()</strong></code> &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x7528;&#x6765;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x53EF;&#x64A4;&#x9500;&#x7684;&#x4EE3;&#x7406;&#x5BF9;&#x8C61;&#x3002;</p>

<h2 id="Syntax" name="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">Proxy.revocable(target, handler);
</pre>

<p></p><dl><dt><code>target</code></dt>
 <dd>&#x76EE;&#x6807;&#x5BF9;&#x8C61;&#xFF0C;&#x53EF;&#x4EE5;&#x662F;&#x4EFB;&#x610F;&#x7C7B;&#x578B;&#x7684;&#x5BF9;&#x8C61;&#xFF0C;&#x6BD4;&#x5982;&#x6570;&#x7EC4;&#xFF0C;&#x51FD;&#x6570;&#xFF0C;&#x751A;&#x81F3;&#x662F;&#x53E6;&#x5916;&#x4E00;&#x4E2A;&#x4EE3;&#x7406;&#x5BF9;&#x8C61;&#x3002;</dd>
 <dt><code>handler</code></dt>
 <dd>&#x5904;&#x7406;&#x5668;&#x5BF9;&#x8C61;&#xFF0C;&#x5305;&#x542B;&#x4E86;&#x4E00;&#x7EC4;&#x4EE3;&#x7406;&#x65B9;&#x6CD5;&#xFF0C;&#x5206;&#x522B;&#x63A7;&#x5236;&#x6240;&#x751F;&#x6210;&#x4EE3;&#x7406;&#x5BF9;&#x8C61;&#x7684;&#x5404;&#x79CD;&#x884C;&#x4E3A;&#x3002;</dd>
</dl><p></p>

<h3 id="Return_value" name="Return_value">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x4E86;&#x6240;&#x751F;&#x6210;&#x7684;&#x4EE3;&#x7406;&#x5BF9;&#x8C61;&#x672C;&#x8EAB;&#x4EE5;&#x53CA;&#x8BE5;&#x4EE3;&#x7406;&#x5BF9;&#x8C61;&#x7684;&#x64A4;&#x9500;&#x65B9;&#x6CD5;&#x7684;&#x5BF9;&#x8C61;&#x3002;</p>

<h2 id=".E6.8F.8F.E8.BF.B0">&#x63CF;&#x8FF0;</h2>

<p>&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x662F;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#xFF0C;&#x5176;&#x7ED3;&#x6784;&#x4E3A;&#xFF1A; <code>{&quot;proxy&quot;: proxy, &quot;revoke&quot;: revoke}&#xFF0C;&#x5176;&#x4E2D;&#xFF1A;</code></p>

<dl>
 <dt><code>proxy</code></dt>
 <dd>&#x8868;&#x793A;&#x65B0;&#x751F;&#x6210;&#x7684;&#x4EE3;&#x7406;&#x5BF9;&#x8C61;&#x672C;&#x8EAB;&#xFF0C;&#x548C;&#x7528;&#x4E00;&#x822C;&#x65B9;&#x5F0F; <code>new Proxy(target, handler)</code> &#x521B;&#x5EFA;&#x7684;&#x4EE3;&#x7406;&#x5BF9;&#x8C61;&#x6CA1;&#x4EC0;&#x4E48;&#x4E0D;&#x540C;&#xFF0C;&#x53EA;&#x662F;&#x5B83;&#x53EF;&#x4EE5;&#x88AB;&#x64A4;&#x9500;&#x6389;&#x3002;</dd>
 <dt><code>revoke</code></dt>
 <dd>&#x64A4;&#x9500;&#x65B9;&#x6CD5;&#xFF0C;&#x8C03;&#x7528;&#x7684;&#x65F6;&#x5019;&#x4E0D;&#x9700;&#x8981;&#x52A0;&#x4EFB;&#x4F55;&#x53C2;&#x6570;&#xFF0C;&#x5C31;&#x53EF;&#x4EE5;&#x64A4;&#x9500;&#x6389;&#x548C;&#x5B83;&#x4E00;&#x8D77;&#x751F;&#x6210;&#x7684;&#x90A3;&#x4E2A;&#x4EE3;&#x7406;&#x5BF9;&#x8C61;&#x3002;</dd>
</dl>

<p>&#x4E00;&#x65E6;&#x67D0;&#x4E2A;&#x4EE3;&#x7406;&#x5BF9;&#x8C61;&#x88AB;&#x64A4;&#x9500;&#xFF0C;&#x5B83;&#x5C06;&#x53D8;&#x7684;&#x51E0;&#x4E4E;&#x5B8C;&#x5168;&#x4E0D;&#x53EF;&#x7528;&#xFF0C;&#x5728;&#x5B83;&#x8EAB;&#x4E0A;&#x6267;&#x884C;&#x4EFB;&#x4F55;&#x7684;<strong>&#x53EF;&#x4EE3;&#x7406;&#x64CD;&#x4F5C;</strong>&#x90FD;&#x4F1A;&#x629B;&#x51FA; <a class="new" href="/zh-CN/docs/Web/JavaScript/Reference/TypeError" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>TypeError</code></a> &#x5F02;&#x5E38;&#xFF08;&#x6CE8;&#x610F;&#xFF0C;&#x53EF;&#x4EE3;&#x7406;&#x64CD;&#x4F5C;&#x4E00;&#x5171;&#x6709; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy#Methods_of_the_handler_object" title="The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc)."><code>14 &#x79CD;</code></a>&#xFF0C;&#x6267;&#x884C;&#x8FD9; 14 &#x79CD;&#x64CD;&#x4F5C;&#x4EE5;&#x5916;&#x7684;&#x64CD;&#x4F5C;&#x4E0D;&#x4F1A;&#x629B;&#x51FA;&#x5F02;&#x5E38;&#xFF09;&#x3002;&#x4E00;&#x65E6;&#x88AB;&#x64A4;&#x9500;&#xFF0C;&#x8FD9;&#x4E2A;&#x4EE3;&#x7406;&#x5BF9;&#x8C61;&#x6C38;&#x8FDC;&#x4E0D;&#x53EF;&#x80FD;&#x6062;&#x590D;&#x5230;&#x539F;&#x6765;&#x7684;&#x72B6;&#x6001;&#xFF0C;&#x540C;&#x65F6;&#x548C;&#x5B83;&#x5173;&#x8054;&#x7684;<strong>&#x76EE;&#x6807;&#x5BF9;&#x8C61;</strong>&#x4EE5;&#x53CA;<strong>&#x5904;&#x7406;&#x5668;&#x5BF9;&#x8C61;</strong>&#x5C06;&#x6709;&#x53EF;&#x80FD;&#x88AB;&#x5783;&#x573E;&#x56DE;&#x6536;&#x6389;&#x3002;&#x8C03;&#x7528;&#x64A4;&#x9500;&#x65B9;&#x6CD5;&#x591A;&#x6B21;&#x5C06;&#x4E0D;&#x4F1A;&#x6709;&#x4EFB;&#x4F55;&#x6548;&#x679C;&#xFF0C;&#x5F53;&#x7136;&#xFF0C;&#x4E5F;&#x4E0D;&#x4F1A;&#x62A5;&#x9519;&#x3002;</p>

<h2 id="Examples" name="Examples">&#x793A;&#x4F8B;</h2>

<pre class="brush: js">var revocable = Proxy.revocable({}, {
  get(target, name) {
    return &quot;[[&quot; + name + &quot;]]&quot;;
  }
});
var proxy = revocable.proxy;
proxy.foo;              // &quot;[[foo]]&quot;

revocable.revoke();     // &#x6267;&#x884C;&#x64A4;&#x9500;&#x65B9;&#x6CD5;

proxy.foo;              // TypeError
proxy.foo = 1           // &#x540C;&#x6837; TypeError
delete proxy.foo;       // &#x8FD8;&#x662F; TypeError
typeof proxy            // &quot;object&quot;&#xFF0C;&#x56E0;&#x4E3A; typeof &#x4E0D;&#x5C5E;&#x4E8E;&#x53EF;&#x4EE3;&#x7406;&#x64CD;&#x4F5C;
</pre>

<h2 id="Specifications" name="Specifications">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x540D;&#x79F0;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x5907;&#x6CE8;</th>
  </tr>
  <tr>
   <td><a class="external" href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-proxy.revocable" hreflang="en" lang="en">ECMAScript 6 (ECMA-262)<br><small lang="zh-CN">Proxy Revocation Functions</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id=".E6.B5.8F.E8.A7.88.E5.99.A8.E5.85.BC.E5.AE.B9.E6.80.A7">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<p></p><div class="htab"> 
    <a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a> 
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
   <td><a href="/en-US/Firefox/Releases/34" title="Released on 2014-12-01.">34</a> (34)</td>
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
   <td><a href="/en-US/Firefox/Releases/34" title="Released on 2014-12-01.">34</a> (34)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also" name="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy" title="The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc)."><code>Proxy</code></a></li>
</ul>
                  
                
              