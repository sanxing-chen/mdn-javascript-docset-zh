
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>Reflect</strong></code><strong><code>.get()&#xA0;</code></strong>&#x65B9;&#x6CD5;&#x7684;&#x5DE5;&#x4F5C;&#x65B9;&#x5F0F;&#xFF0C;&#x5C31;&#x50CF;&#x4ECE;&#xA0;object (<code>target[propertyKey]</code>) &#x4E2D;&#x83B7;&#x53D6;&#x5C5E;&#x6027;&#xFF0C;&#x4F46;&#x5B83;&#x662F;&#x4F5C;&#x4E3A;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x6267;&#x884C;&#x7684;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">Reflect.get(target, propertyKey[, receiver])
</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>target</code></dt>
 <dd>&#x9700;&#x8981;&#x53D6;&#x503C;&#x7684;&#x76EE;&#x6807;&#x5BF9;&#x8C61;</dd>
 <dt><code>propertyKey</code></dt>
 <dd>&#x9700;&#x8981;&#x83B7;&#x53D6;&#x7684;&#x503C;&#x7684;&#x952E;&#x503C;</dd>
 <dt>receiver</dt>
 <dd>&#x5982;&#x679C;&#x9047;&#x5230; getter&#xFF0C;&#x6B64;&#x503C;&#x5C06;&#x63D0;&#x4F9B;&#x7ED9;&#x76EE;&#x6807;&#x8C03;&#x7528;&#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x5C5E;&#x6027;&#x503C;&#x3002;</p>

<h3 id="&#x5F02;&#x5E38;">&#x5F02;&#x5E38;</h3>

<p>&#x5982;&#x679C;&#x76EE;&#x6807;&#x503C;&#x7C7B;&#x578B;&#x4E0D;&#x662F; <a title="Object &#x6784;&#x9020;&#x51FD;&#x6570;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5305;&#x88C5;&#xFF08;object wrapper&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object"><code>Object</code></a>&#xFF0C;&#x5219;&#x629B;&#x51FA;&#x4E00;&#x4E2A;&#xA0;<a title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a>&#x3002;</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>Reflect.get &#x65B9;&#x6CD5;&#x5141;&#x8BB8;&#x4F60;&#x4ECE;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4E2D;&#x53D6;&#x503C;</code>&#x3002;&#x5C31;&#x5982;&#x540C;&#x51FD;&#x6570;&#xFF08;function&#xFF09;&#x91CC;&#x7684;&#xA0;<a href="/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors">&#x5C5E;&#x6027;&#x8BBF;&#x95EE;&#x5668;</a>&#xA0;&#x8BED;&#x6CD5;&#x3002;</p>

<h2 id="&#x5B9E;&#x4F8B;">&#x5B9E;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;_Reflect.get()"><code><font face="Open Sans, Arial, sans-serif">&#x4F7F;&#x7528;&#xA0;</font>Reflect.get()</code></h3>

<pre class="brush: js">// Object
var obj = { x: 1, y: 2 };
Reflect.get(obj, &quot;x&quot;); // 1

// Array
Reflect.get([&quot;zero&quot;, &quot;one&quot;], 1); // &quot;one&quot;

// Proxy with a get handler
var x = {p: 1};
var obj = new Proxy(x, {
  get(t, k, r) { return k + &quot;bar&quot;; }
});
Reflect.get(obj, &quot;foo&quot;); // &quot;foobar&quot;
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
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-reflect.get" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Reflect.get</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-reflect.get" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Reflect.get</small></a></td>
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
   <td><a title="Released on 2015-11-03." href="/en-US/Firefox/Releases/42">42</a> (42)</td>
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
 <li><a title="Reflect &#x5BF9;&#x8C61;&#x63D0;&#x4F9B;&#x4E86;&#x82E5;&#x5E72;&#x4E2A;&#x80FD;&#x5BF9;&#x4EFB;&#x610F;&#x5BF9;&#x8C61;&#x8FDB;&#x884C;&#x67D0;&#x79CD;&#x7279;&#x5B9A;&#x7684;&#x53EF;&#x62E6;&#x622A;&#x64CD;&#x4F5C;&#xFF08;interceptable operation&#xFF09;&#x7684;&#x65B9;&#x6CD5;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect"><code>Reflect</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors">Property accessors</a></li>
</ul>
                  
                
              