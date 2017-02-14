
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>&#x9759;&#x6001;&#x65B9;&#x6CD5;&#xA0;<code><strong>Reflect</strong></code><strong><code>.getOwnPropertyDescriptor()</code></strong> &#x4E0E; <a title="Object.getOwnPropertyDescriptor() &#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x4E0A;&#x4E00;&#x4E2A;&#x81EA;&#x6709;&#x5C5E;&#x6027;&#x5BF9;&#x5E94;&#x7684;&#x5C5E;&#x6027;&#x63CF;&#x8FF0;&#x7B26;&#x3002;&#xFF08;&#x81EA;&#x6709;&#x5C5E;&#x6027;&#x6307;&#x7684;&#x662F;&#x76F4;&#x63A5;&#x8D4B;&#x4E88;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x4ECE;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x8FDB;&#x884C;&#x67E5;&#x627E;&#x7684;&#x5C5E;&#x6027;&#xFF09;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor"><code>Object.getOwnPropertyDescriptor()</code></a> &#x65B9;&#x6CD5;&#x76F8;&#x4F3C;&#x3002;&#x5982;&#x679C;&#x5728;&#x5BF9;&#x8C61;&#x4E2D;&#x5B58;&#x5728;&#xFF0C;&#x5219;&#x8FD4;&#x56DE;&#x7ED9;&#x5B9A;&#x7684;&#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x63CF;&#x8FF0;&#x7B26;&#x3002;&#x5426;&#x5219;&#x8FD4;&#x56DE; <a title="undefined&#x6709;&#x591A;&#x91CD;&#x89D2;&#x8272;,&#x901A;&#x5E38;&#x60C5;&#x51B5;&#x4E0B;,&#x6211;&#x4EEC;&#x6240;&#x8BF4;&#x7684;undefined&#x90FD;&#x6307;&#x7684;&#x662F;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&quot;undefined&quot;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined"><code>undefined</code></a>&#x3002;&#xA0;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">Reflect.getOwnPropertyDescriptor(target, propertyKey)
</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>target</code></dt>
 <dd>&#x9700;&#x8981;&#x5BFB;&#x627E;&#x5C5E;&#x6027;&#x7684;&#x76EE;&#x6807;&#x5BF9;&#x8C61;&#x3002;</dd>
 <dt><code>propertyKey</code></dt>
 <dd>&#x83B7;&#x53D6;&#x81EA;&#x5DF1;&#x7684;&#x5C5E;&#x6027;&#x63CF;&#x8FF0;&#x7B26;&#x7684;&#x5C5E;&#x6027;&#x7684;&#x540D;&#x79F0;&#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x5982;&#x679C;&#x5C5E;&#x6027;&#x5B58;&#x5728;&#x4E8E;&#x7ED9;&#x5B9A;&#x7684;&#x76EE;&#x6807;&#x5BF9;&#x8C61;&#x4E2D;&#xFF0C;&#x5219;&#x8FD4;&#x56DE;&#x5C5E;&#x6027;&#x63CF;&#x8FF0;&#x7B26;&#xFF1B;&#x5426;&#x5219;&#xFF0C;&#x8FD4;&#x56DE;&#xA0;<a title="undefined&#x6709;&#x591A;&#x91CD;&#x89D2;&#x8272;,&#x901A;&#x5E38;&#x60C5;&#x51B5;&#x4E0B;,&#x6211;&#x4EEC;&#x6240;&#x8BF4;&#x7684;undefined&#x90FD;&#x6307;&#x7684;&#x662F;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&quot;undefined&quot;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined"><code>undefined</code></a>&#x3002;</p>

<h3 id="&#x5F02;&#x5E38;">&#x5F02;&#x5E38;</h3>

<p>&#x629B;&#x51FA;&#x4E00;&#x4E2A; <a title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a>&#xFF0C;&#x5982;&#x679C;&#x76EE;&#x6807;&#x4E0D;&#x662F;&#xA0;<a title="Object &#x6784;&#x9020;&#x51FD;&#x6570;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5305;&#x88C5;&#xFF08;object wrapper&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object"><code>Object</code></a>&#x3002;</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>Reflect.</code>getOwnPropertyDescriptor &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&#x63CF;&#x8FF0;&#x7B26;&#xFF0C;&#x5982;&#x679C;&#x7ED9;&#x5B9A;&#x7684;&#x5C5E;&#x6027;&#x5B58;&#x5728;&#x4E8E;&#x5BF9;&#x8C61;&#x4E2D;&#xFF0C;&#x5426;&#x5219;&#x8FD4;&#x56DE;&#xA0;<a title="undefined&#x6709;&#x591A;&#x91CD;&#x89D2;&#x8272;,&#x901A;&#x5E38;&#x60C5;&#x51B5;&#x4E0B;,&#x6211;&#x4EEC;&#x6240;&#x8BF4;&#x7684;undefined&#x90FD;&#x6307;&#x7684;&#x662F;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&quot;undefined&quot;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined"><code>undefined</code></a> &#x3002; &#x4E0E; &#xA0;<a title="Object.getOwnPropertyDescriptor() &#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x4E0A;&#x4E00;&#x4E2A;&#x81EA;&#x6709;&#x5C5E;&#x6027;&#x5BF9;&#x5E94;&#x7684;&#x5C5E;&#x6027;&#x63CF;&#x8FF0;&#x7B26;&#x3002;&#xFF08;&#x81EA;&#x6709;&#x5C5E;&#x6027;&#x6307;&#x7684;&#x662F;&#x76F4;&#x63A5;&#x8D4B;&#x4E88;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x4ECE;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x8FDB;&#x884C;&#x67E5;&#x627E;&#x7684;&#x5C5E;&#x6027;&#xFF09;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor"><code>Object.getOwnPropertyDescriptor()</code></a> &#x7684;&#x552F;&#x4E00;&#x4E0D;&#x540C;&#x5728;&#x4E8E;&#x5982;&#x4F55;&#x5904;&#x7406;&#x975E;&#x5BF9;&#x8C61;&#x76EE;&#x6807;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;_Reflect.getOwnPropertyDescriptor()">&#x4F7F;&#x7528; <code>Reflect.getOwnPropertyDescriptor()</code></h3>

<pre class="brush: js">Reflect.getOwnPropertyDescriptor({x: &quot;hello&quot;}, &quot;x&quot;);
// {value: &quot;hello&quot;, writable: true, enumerable: true, configurable: true}

Reflect.getOwnPropertyDescriptor({x: &quot;hello&quot;}, &quot;y&quot;);
// undefined

Reflect.getOwnPropertyDescriptor([], &quot;length&quot;);
// {value: 0, writable: true, enumerable: false, configurable: false}
</pre>

<h3 id="&#x4E0E;_Object.getOwnPropertyDescriptor()_&#x7684;&#x4E0D;&#x540C;&#x70B9;">&#x4E0E;&#xA0;<code>Object.getOwnPropertyDescriptor() &#x7684;&#x4E0D;&#x540C;&#x70B9;</code></h3>

<p>&#x5982;&#x679C;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#xFF08;&#x4E00;&#x4E2A;&#x539F;&#x59CB;&#x503C;&#xFF09;&#xFF0C;&#x90A3;&#x4E48;&#x5C06;&#x9020;&#x6210;&#xA0;<a title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a> &#x9519;&#x8BEF;&#x3002;&#x800C;&#x5BF9;&#x4E8E; <a title="Object.getOwnPropertyDescriptor() &#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x4E0A;&#x4E00;&#x4E2A;&#x81EA;&#x6709;&#x5C5E;&#x6027;&#x5BF9;&#x5E94;&#x7684;&#x5C5E;&#x6027;&#x63CF;&#x8FF0;&#x7B26;&#x3002;&#xFF08;&#x81EA;&#x6709;&#x5C5E;&#x6027;&#x6307;&#x7684;&#x662F;&#x76F4;&#x63A5;&#x8D4B;&#x4E88;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x4ECE;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x8FDB;&#x884C;&#x67E5;&#x627E;&#x7684;&#x5C5E;&#x6027;&#xFF09;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor"><code>Object.getOwnPropertyDescriptor</code></a>&#xFF0C;&#x975E;&#x5BF9;&#x8C61;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#x5C06;&#x88AB;&#x5F3A;&#x5236;&#x8F6C;&#x6362;&#x4E3A;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5904;&#x7406;&#x3002;</p>

<pre class="brush: js">Reflect.getOwnPropertyDescriptor(&quot;foo&quot;, 0);
// TypeError: &quot;foo&quot; is not non-null object

Object.getOwnPropertyDescriptor(&quot;foo&quot;, 0);
// { value: &quot;f&quot;, writable: false, enumerable: true, configurable: false }</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-reflect.getownpropertydescriptor" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Reflect.getOwnPropertyDescriptor</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-reflect.getownpropertydescriptor" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Reflect.getOwnPropertyDescriptor</small></a></td>
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
 <li><a title="Object.getOwnPropertyDescriptor() &#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x4E0A;&#x4E00;&#x4E2A;&#x81EA;&#x6709;&#x5C5E;&#x6027;&#x5BF9;&#x5E94;&#x7684;&#x5C5E;&#x6027;&#x63CF;&#x8FF0;&#x7B26;&#x3002;&#xFF08;&#x81EA;&#x6709;&#x5C5E;&#x6027;&#x6307;&#x7684;&#x662F;&#x76F4;&#x63A5;&#x8D4B;&#x4E88;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x4ECE;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x8FDB;&#x884C;&#x67E5;&#x627E;&#x7684;&#x5C5E;&#x6027;&#xFF09;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor"><code>Object.getOwnPropertyDescriptor()</code></a></li>
</ul>
                  
                
              