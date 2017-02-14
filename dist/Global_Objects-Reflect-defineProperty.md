
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>&#x9759;&#x6001;&#x65B9;&#x6CD5; <code><strong>Reflect</strong></code><strong><code>.defineProperty()</code></strong> &#x6709;&#x5F88;&#x50CF; <a title="Object.defineProperty() &#x65B9;&#x6CD5;&#x4F1A;&#x76F4;&#x63A5;&#x5728;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4E0A;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x65B0;&#x5C5E;&#x6027;&#xFF0C;&#x6216;&#x8005;&#x4FEE;&#x6539;&#x4E00;&#x4E2A;&#x5DF2;&#x7ECF;&#x5B58;&#x5728;&#x7684;&#x5C5E;&#x6027;&#xFF0C; &#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"><code>Object.defineProperty()</code></a> &#x65B9;&#x6CD5;&#xFF0C;&#x4F46;&#x8FD4;&#x56DE;&#x7684;&#x662F;&#xA0;<a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Boolean"><code>Boolean</code></a> &#x503C;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">Reflect.defineProperty(target, propertyKey, attributes)
</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>target</code></dt>
 <dd>&#x76EE;&#x6807;&#x5BF9;&#x8C61;&#x4E0A;&#x5B9A;&#x4E49;&#x7684;&#x5C5E;&#x6027;&#x3002;</dd>
 <dt><code>propertyKey</code></dt>
 <dd>&#x5B9A;&#x4E49;&#x6216;&#x4FEE;&#x6539;&#x7684;&#x5C5E;&#x6027;&#x7684;&#x540D;&#x79F0;&#x3002;</dd>
 <dt><code>attributes</code></dt>
 <dd>&#x5B9A;&#x4E49;&#x6216;&#x4FEE;&#x6539;&#x7684;&#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x79F0;&#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#xA0;<a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Boolean"><code>Boolean</code></a> &#x503C;&#x6307;&#x793A;&#x4E86;&#x5C5E;&#x6027;&#x662F;&#x5426;&#x88AB;&#x6210;&#x529F;&#x5B9A;&#x4E49;&#x3002;</p>

<h3 id="&#x5F02;&#x5E38;">&#x5F02;&#x5E38;</h3>

<p>&#x629B;&#x51FA;&#x4E00;&#x4E2A; <a title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a>&#xFF0C;&#x5982;&#x679C;&#x76EE;&#x6807;&#x4E0D;&#x662F;&#xA0;<a title="Object &#x6784;&#x9020;&#x51FD;&#x6570;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5305;&#x88C5;&#xFF08;object wrapper&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object"><code>Object</code></a>&#x3002;</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>Reflect.defineProperty</code> &#x65B9;&#x6CD5;&#x5141;&#x8BB8;&#x7CBE;&#x786E;&#x6DFB;&#x52A0;&#x6216;&#x4FEE;&#x6539;&#x5BF9;&#x8C61;&#x4E0A;&#x7684;&#x5C5E;&#x6027;&#x3002;&#x66F4;&#x591A;&#x7684;&#x7EC6;&#x8282;&#x8BF7;&#x53C2;&#x9605; <a title="Object.defineProperty() &#x65B9;&#x6CD5;&#x4F1A;&#x76F4;&#x63A5;&#x5728;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4E0A;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x65B0;&#x5C5E;&#x6027;&#xFF0C;&#x6216;&#x8005;&#x4FEE;&#x6539;&#x4E00;&#x4E2A;&#x5DF2;&#x7ECF;&#x5B58;&#x5728;&#x7684;&#x5C5E;&#x6027;&#xFF0C; &#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"><code>Object.defineProperty</code></a>&#xFF0C;&#x56E0;&#x4E3A;&#x5B83;&#x4EEC;&#x4FE9;&#x662F;&#x76F8;&#x4F3C;&#x7684;&#xA0;&#x3002;<code>Object.defineProperty&#xA0;</code>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x6216;&#x5982;&#x679C;&#x5C5E;&#x6027;&#x6CA1;&#x6709;&#x6210;&#x529F;&#x88AB;&#x5B9A;&#x4E49;&#xFF0C;&#x629B;&#x51FA;&#x4E00;&#x4E2A; <a title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a> &#x3002; &#x800C;&#xA0;<code>Reflect.defineProperty&#xFF0C;</code>&#x53EA;&#x662F;&#x7B80;&#x5355;&#x5730;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A; <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Boolean"><code>Boolean</code></a> &#x662F;&#x5426;&#x8BE5;&#x5C5E;&#x6027;&#x88AB;&#x6210;&#x529F;&#x5B9A;&#x4E49;&#x4E86;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;_Reflect.defineProperty()">&#x4F7F;&#x7528;&#xA0;<code>Reflect.defineProperty()</code></h3>

<pre class="brush: js">var obj = {};
Reflect.defineProperty(obj, &quot;x&quot;, {value: 7}); // true
obj.x; // 7
</pre>

<h3 id="&#x68C0;&#x67E5;&#x5C5E;&#x6027;&#x662F;&#x5426;&#x88AB;&#x6210;&#x529F;&#x5B9A;&#x4E49;">&#x68C0;&#x67E5;&#x5C5E;&#x6027;&#x662F;&#x5426;&#x88AB;&#x6210;&#x529F;&#x5B9A;&#x4E49;</h3>

<p><a title="Object.defineProperty() &#x65B9;&#x6CD5;&#x4F1A;&#x76F4;&#x63A5;&#x5728;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4E0A;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x65B0;&#x5C5E;&#x6027;&#xFF0C;&#x6216;&#x8005;&#x4FEE;&#x6539;&#x4E00;&#x4E2A;&#x5DF2;&#x7ECF;&#x5B58;&#x5728;&#x7684;&#x5C5E;&#x6027;&#xFF0C; &#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"><code>Object.defineProperty</code></a> &#x65B9;&#x6CD5;&#xFF0C;&#x5982;&#x679C;&#x6210;&#x529F;&#x5219;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#xFF0C;&#x5426;&#x5219;&#x629B;&#x51FA;&#x4E00;&#x4E2A; <a title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a> &#x3002;&#x53E6;&#x5916;&#xFF0C;&#x5F53;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&#x65F6;&#xFF0C;&#x4F60;&#x4E5F;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#xA0;<code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/try...catch">try...catch</a></code> &#x5757;&#x53BB;&#x6355;&#x83B7;&#x5176;&#x4E2D;&#x4EFB;&#x4F55;&#x7684;&#x9519;&#x8BEF;&#x3002;&#x800C;&#x56E0;&#x4E3A; <code>Reflect.defineProperty</code> &#x8FD4;&#x56DE; Boolean &#x503C;&#x4F5C;&#x4E3A;&#x6210;&#x529F;&#x7684;&#x72B6;&#x6001;&#xFF0C;&#x6240;&#x4EE5;&#x4F60;&#x4E5F;&#x53EF;&#x4EE5;&#x53EA;&#x4F7F;&#x7528;&#xA0;<code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/if...else">if...else</a></code> &#x5757;&#xFF1A;</p>

<pre class="brush: js">if (Reflect.defineProperty(target, property, attributes)) {
  // &#x6210;&#x529F;
} else {
  // &#x5931;&#x8D25;
}</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-reflect.defineproperty" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Reflect.defineProperty</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-reflect.defineproperty" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Reflect.defineProperty</small></a></td>
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
   <th>Edge</th>
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>49</td>
   <td>12</td>
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
 <li><a title="Object.defineProperty() &#x65B9;&#x6CD5;&#x4F1A;&#x76F4;&#x63A5;&#x5728;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4E0A;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x65B0;&#x5C5E;&#x6027;&#xFF0C;&#x6216;&#x8005;&#x4FEE;&#x6539;&#x4E00;&#x4E2A;&#x5DF2;&#x7ECF;&#x5B58;&#x5728;&#x7684;&#x5C5E;&#x6027;&#xFF0C; &#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"><code>Object.defineProperty()</code></a></li>
</ul>
                  
                
              