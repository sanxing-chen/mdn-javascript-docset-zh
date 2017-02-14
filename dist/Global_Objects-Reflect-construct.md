
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p><code><strong>Reflect</strong></code><strong><code>.construct()</code></strong> &#x65B9;&#x6CD5;&#x7684;&#x884C;&#x4E3A;&#x6709;&#x70B9;&#x50CF;&#xA0;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new"><code>new</code> &#x64CD;&#x4F5C;&#x7B26;</a> &#x6784;&#x9020;&#x51FD;&#x6570;&#xA0;&#xFF0C; &#x76F8;&#x5F53;&#x4E8E;&#x8FD0;&#x884C;&#xA0;<code>new target(...args)</code>.</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">Reflect.construct(target, argumentsList[, newTarget])
</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>target</code></dt>
 <dd>&#x88AB;&#x8FD0;&#x884C;&#x7684;&#x76EE;&#x6807;&#x51FD;&#x6570;</dd>
 <dt><code>argumentsList</code></dt>
 <dd>&#x8C03;&#x7528;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x6570;&#x7EC4;&#x6216;&#x8005;&#x4F2A;&#x6570;&#x7EC4;</dd>
 <dt><code>newTarget</code> <span class="inlineIndicator optional optionalInline">&#x53EF;&#x9009;</span></dt>
 <dd>&#x8BE5;&#x53C2;&#x6570;&#x4E3A;&#x6784;&#x9020;&#x51FD;&#x6570;&#xFF0C; &#x53C2;&#x8003; <code><a href="/en-US/docs/Web/JavaScript/Reference/Operators/new.target">new.target</a></code> &#x64CD;&#x4F5C;&#x7B26;&#xFF0C;&#x5982;&#x679C;&#x6CA1;&#x6709;newTarget&#x53C2;&#x6570;&#xFF0C; &#x9ED8;&#x8BA4;&#x548C;<code>target&#x4E00;&#x6837;</code></dd>
</dl>

<h3 id="Errors_thrown">Errors thrown</h3>

<p>&#x629B;&#x51FA;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;"><code>TypeError</code></a>,&#x5F02;&#x5E38;&#xFF0C; &#x5982;&#x679C;target&#x6216;&#x8005;newTarget&#x4E0D;&#x662F;&#x6784;&#x9020;&#x51FD;&#x6570;</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>Reflect.construct&#x5141;&#x8BB8;&#x4F60;&#x4F7F;&#x7528;&#x53EF;&#x53D8;&#x7684;&#x53C2;&#x6570;&#x6765;&#x8C03;&#x7528;&#x6784;&#x9020;&#x51FD;&#x6570;</code>&#xA0;</p>

<pre class="brush: js">var obj = new Foo(...args);
var obj = Reflect.construct(Foo, args); </pre>

<h2 id="&#x5B9E;&#x4F8B;">&#x5B9E;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;_Reflect.construct()">&#x4F7F;&#x7528; <code>Reflect.construct()</code></h3>

<pre class="brush: js">var d = Reflect.construct(Date, [1776, 6, 4]);
d instanceof Date; // true
d.getFullYear(); // 1776
</pre>

<h3 id="&#x4F7F;&#x7528;_newTarget_&#x53C2;&#x6570;">&#x4F7F;&#x7528;&#xA0;<code>newTarget</code> &#x53C2;&#x6570;</h3>

<p>&#x53C2;&#x8003; <a href="/en-US/docs/Web/JavaScript/Reference/Classes">classes</a>&#xA0;&#x83B7;&#x53D6;&#x66F4;&#x591A;&#x6709;&#x5173;&#x5B50;&#x7C7B;&#x7684;&#x4FE1;&#x606F;&#xFF0C;&#xA0;&#xA0;&#x548C;<code><a href="/en-US/docs/Web/JavaScript/Reference/Operators/new.target">new.target</a></code> &#x64CD;&#x4F5C;&#x7B26;&#x7684;&#x4FE1;&#x606F;</p>

<pre class="brush: js">function someConstructor() {}
var result = Reflect.construct(Array, [], someConstructor);

Reflect.getPrototypeOf(result); // &#x8F93;&#x51FA;&#xFF1A;someConstructor.prototype
Array.isArray(result); // true
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
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-reflect.construct" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Reflect.construct</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-reflect.construct" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Reflect.construct</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;</h2>

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
   <td><a href="/en-US/Firefox/Releases/42" title="Released on 2015-11-03.">42</a> (42)</td>
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

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect" title="Reflect &#x5BF9;&#x8C61;&#x63D0;&#x4F9B;&#x4E86;&#x82E5;&#x5E72;&#x4E2A;&#x80FD;&#x5BF9;&#x4EFB;&#x610F;&#x5BF9;&#x8C61;&#x8FDB;&#x884C;&#x67D0;&#x79CD;&#x7279;&#x5B9A;&#x7684;&#x53EF;&#x62E6;&#x622A;&#x64CD;&#x4F5C;&#xFF08;interceptable operation&#xFF09;&#x7684;&#x65B9;&#x6CD5;&#x3002;"><code>Reflect</code></a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new"><code>new</code></a></li>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Operators/new.target">new.target</a></code></li>
</ul>
                  
                
              