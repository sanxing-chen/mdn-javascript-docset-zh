
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p>&#x9759;&#x6001;&#x65B9;&#x6CD5;&#xA0;<code><strong>Reflect</strong></code><strong><code>.set()</code></strong> &#x5DE5;&#x4F5C;&#x65B9;&#x5F0F;&#x5C31;&#x50CF;&#x5728;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4E0A;&#x8BBE;&#x7F6E;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">Reflect.set(target, propertyKey, value[, receiver])
</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>target</code></dt>
 <dd>&#x8BBE;&#x7F6E;&#x5C5E;&#x6027;&#x7684;&#x76EE;&#x6807;&#x5BF9;&#x8C61;&#x3002;</dd>
 <dt><code>propertyKey</code></dt>
 <dd>&#x8BBE;&#x7F6E;&#x7684;&#x5C5E;&#x6027;&#x7684;&#x540D;&#x79F0;&#x3002;</dd>
 <dt>value</dt>
 <dd>&#x8BBE;&#x7F6E;&#x7684;&#x503C;&#x3002;</dd>
 <dt>receiver</dt>
 <dd>&#x5982;&#x679C;&#x9047;&#x5230; setter&#xFF0C;this &#x5C06;&#x63D0;&#x4F9B;&#x7ED9;&#x76EE;&#x6807;&#x8C03;&#x7528;&#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A; <a href="/zh-CN/docs/Web/JavaScript/Reference/Boolean" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Boolean</code></a> &#x503C;&#x8868;&#x660E;&#x662F;&#x5426;&#x6210;&#x529F;&#x8BBE;&#x7F6E;&#x5C5E;&#x6027;&#x3002;</p>

<h3 id="&#x5F02;&#x5E38;">&#x5F02;&#x5E38;</h3>

<p>&#x629B;&#x51FA;&#x4E00;&#x4E2A; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;"><code>TypeError</code></a>&#xFF0C;&#x5982;&#x679C;&#x76EE;&#x6807;&#x4E0D;&#x662F;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object &#x6784;&#x9020;&#x51FD;&#x6570;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5305;&#x88C5;&#xFF08;object wrapper&#xFF09;&#x3002;"><code>Object</code></a>&#x3002;</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>Reflect.set</code>&#xA0;&#x65B9;&#x6CD5;&#x5141;&#x8BB8;&#x4F60;&#x5728;&#x5BF9;&#x8C61;&#x4E0A;&#x8BBE;&#x7F6E;&#x5C5E;&#x6027;&#x3002;&#x5B83;&#x7684;&#x4F5C;&#x7528;&#x662F;&#x7ED9;&#x5C5E;&#x6027;&#x8D4B;&#x503C;&#x5E76;&#x4E14;&#x5C31;&#x50CF;&#xA0;<a href="/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors">property accessor</a> &#x8BED;&#x6CD5;&#x4E00;&#x6837;&#xFF0C;&#x4F46;&#x662F;&#x5B83;&#x662F;&#x4EE5;&#x51FD;&#x6570;&#x7684;&#x65B9;&#x5F0F;&#x3002;&#xA0;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;_Reflect.set()">&#x4F7F;&#x7528; <code>Reflect.set()</code></h3>

<pre class="brush: js">// Object
var obj = {};
Reflect.set(obj, &quot;prop&quot;, &quot;value&quot;); // true
obj.prop; // &quot;value&quot;

// Array
var arr = [&quot;duck&quot;, &quot;duck&quot;, &quot;duck&quot;];
Reflect.set(arr, 2, &quot;goose&quot;); // true
arr[2]; // &quot;goose&quot;

// It can truncate an array.
Reflect.set(arr, &quot;length&quot;, 1); // true
arr; // [&quot;duck&quot;];

// With just one argument, propertyKey and value are &quot;undefined&quot;.
var obj = {};
Reflect.set(obj); // true
Reflect.getOwnPropertyDescriptor(obj, &quot;undefined&quot;);
// { value: undefined, writable: true, enumerable: true, configurable: true }
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
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-reflect.set" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Reflect.set</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-reflect.set" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Reflect.set</small></a></td>
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
   <td><a href="/en-US/Firefox/Releases/42" title="Released on 2015-11-03.">42</a> (42)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
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
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>49</td>
   <td>42.0 (42)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>10</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect" title="Reflect &#x5BF9;&#x8C61;&#x63D0;&#x4F9B;&#x4E86;&#x82E5;&#x5E72;&#x4E2A;&#x80FD;&#x5BF9;&#x4EFB;&#x610F;&#x5BF9;&#x8C61;&#x8FDB;&#x884C;&#x67D0;&#x79CD;&#x7279;&#x5B9A;&#x7684;&#x53EF;&#x62E6;&#x622A;&#x64CD;&#x4F5C;&#xFF08;interceptable operation&#xFF09;&#x7684;&#x65B9;&#x6CD5;&#x3002;"><code>Reflect</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors">Property accessors</a></li>
</ul>
                  
                
              