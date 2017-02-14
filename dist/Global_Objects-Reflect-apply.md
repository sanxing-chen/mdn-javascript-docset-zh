
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p>&#x9759;&#x6001;&#x65B9;&#x6CD5;&#xA0;<code><strong>Reflect</strong></code><strong><code>.apply()</code></strong> &#x901A;&#x8FC7;&#x6307;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x5217;&#x8868;&#x53D1;&#x8D77;&#x5BF9;&#x76EE;&#x6807;(target)&#x51FD;&#x6570;&#x7684;&#x8C03;&#x7528;&#x3002;</p>

<h2 id="&#x53E5;&#x6CD5;">&#x53E5;&#x6CD5;</h2>

<pre class="syntaxbox">Reflect.apply(target, thisArgument, argumentsList)
</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt>target</dt>
 <dd>&#x76EE;&#x6807;&#x51FD;&#x6570;&#x3002;</dd>
 <dt>thisArgument</dt>
 <dd>target&#x51FD;&#x6570;&#x8C03;&#x7528;&#x65F6;&#x7ED1;&#x5B9A;&#x7684;this&#x5BF9;&#x8C61;&#x3002;</dd>
 <dt>argumentsList</dt>
 <dd>target&#x51FD;&#x6570;&#x8C03;&#x7528;&#x65F6;&#x4F20;&#x5165;&#x7684;&#x5B9E;&#x53C2;&#x5217;&#x8868;&#xFF0C;&#x8BE5;&#x53C2;&#x6570;&#x5E94;&#x8BE5;&#x662F;&#x4E00;&#x4E2A;&#x7C7B;&#x6570;&#x7EC4;&#x7684;&#x5BF9;&#x8C61;&#x3002;</dd>
</dl>

<h3 id="&#x5F02;&#x5E38;">&#x5F02;&#x5E38;</h3>

<p>&#x5982;&#x679C;target&#x5BF9;&#x8C61;&#x4E0D;&#x53EF;&#x8C03;&#x7528;&#xFF0C;&#x629B;&#x51FA;<a title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a>&#x3002;</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x8BE5;&#x65B9;&#x6CD5;&#x4E0E;ES5&#x4E2D;<a title="apply() &#x65B9;&#x6CD5;&#x5728;&#x6307;&#x5B9A;&#xA0;this&#xA0;&#x503C;&#x548C;&#x53C2;&#x6570;&#xFF08;&#x53C2;&#x6570;&#x4EE5;&#x6570;&#x7EC4;&#x6216;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x7684;&#x5F62;&#x5F0F;&#x5B58;&#x5728;&#xFF09;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#x8C03;&#x7528;&#x67D0;&#x4E2A;&#x51FD;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply"><code>Function.prototype.apply()</code></a>&#x65B9;&#x6CD5;&#x7C7B;&#x4F3C;&#xFF1A;&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x65B9;&#x6CD5;&#x5E76;&#x4E14;&#x663E;&#x5F0F;&#x5730;&#x6307;&#x5B9A;this&#x53D8;&#x91CF;&#x548C;&#x53C2;&#x6570;&#x5217;&#x8868;(arguments)&#xA0;&#xFF0C;&#x53C2;&#x6570;&#x5217;&#x8868;&#x53EF;&#x4EE5;&#x662F;&#x6570;&#x7EC4;&#xFF0C;&#x6216;&#x7C7B;&#x4F3C;&#x6570;&#x7EC4;&#x7684;&#x5BF9;&#x8C61;&#x3002;</p>

<pre class="brush: js">Function.prototype.apply.call(Math.floor, undefined, [1.75]);</pre>

<p>&#x4F7F;&#x7528;&#xA0;<code>Reflect.apply</code>&#xA0;&#x65B9;&#x6CD5;&#x4F1A;&#x4F7F;&#x4EE3;&#x7801;&#x66F4;&#x52A0;&#x7B80;&#x6D01;&#x6613;&#x61C2;&#x3002;</p>

<h2 id="&#x4F7F;&#x7528;&#x793A;&#x4F8B;">&#x4F7F;&#x7528;&#x793A;&#x4F8B;</h2>

<h3 id="Reflect.apply()"><code>Reflect.apply()</code></h3>

<pre class="brush: js">Reflect.apply(Math.floor, undefined, [1.75]); 
// 1;

Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);
// &quot;hello&quot;

Reflect.apply(RegExp.prototype.exec, /ab/, [&quot;confabulation&quot;]).index;
// 4

Reflect.apply(&quot;&quot;.charAt, &quot;ponies&quot;, [3]);
// &quot;i&quot;
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
   <td><a hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-reflect.apply">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Reflect.apply</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x9996;&#x6B21;&#x5B9A;&#x4E49;.</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="https://tc39.github.io/ecma262/#sec-reflect.apply">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Reflect.apply</small></a></td>
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
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>49</td>
   <td><a title="Released on 2015-11-03." href="/en-US/Firefox/Releases/42">42</a> (42)</td>
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
   <td>42.0 (42)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x8FDE;&#x63A5;">&#x76F8;&#x5173;&#x8FDE;&#x63A5;</h2>

<ul>
 <li><a title="Reflect &#x5BF9;&#x8C61;&#x63D0;&#x4F9B;&#x4E86;&#x82E5;&#x5E72;&#x4E2A;&#x80FD;&#x5BF9;&#x4EFB;&#x610F;&#x5BF9;&#x8C61;&#x8FDB;&#x884C;&#x67D0;&#x79CD;&#x7279;&#x5B9A;&#x7684;&#x53EF;&#x62E6;&#x622A;&#x64CD;&#x4F5C;&#xFF08;interceptable operation&#xFF09;&#x7684;&#x65B9;&#x6CD5;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect"><code>Reflect</code></a></li>
 <li><a title="apply() &#x65B9;&#x6CD5;&#x5728;&#x6307;&#x5B9A;&#xA0;this&#xA0;&#x503C;&#x548C;&#x53C2;&#x6570;&#xFF08;&#x53C2;&#x6570;&#x4EE5;&#x6570;&#x7EC4;&#x6216;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x7684;&#x5F62;&#x5F0F;&#x5B58;&#x5728;&#xFF09;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#x8C03;&#x7528;&#x67D0;&#x4E2A;&#x51FD;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply"><code>Function.prototype.apply()</code></a></li>
</ul>
                  
                
              