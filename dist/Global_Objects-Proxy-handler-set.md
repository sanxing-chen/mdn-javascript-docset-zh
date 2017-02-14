
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>handler.set()</strong></code>&#xA0;&#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x62E6;&#x622A;&#x8BBE;&#x7F6E;&#x5C5E;&#x6027;&#x503C;&#x7684;&#x64CD;&#x4F5C;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="brush: js">var p = new Proxy(target, {
  set: function(target, property, value, receiver) {
  }
});
</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<p>&#x4EE5;&#x4E0B;&#x662F;&#x4F20;&#x9012;&#x7ED9;set&#x65B9;&#x6CD5;&#x7684;&#x53C2;&#x6570;&#xFF0C;<code>this&#x4E0A;&#x4E0B;&#x6587;&#x7ED1;&#x5B9A;&#x5728;</code>handler&#x5BF9;&#x8C61;&#x4E0A;.</p>

<dl>
 <dt><code>target</code></dt>
 <dd>&#x76EE;&#x6807;&#x5BF9;&#x8C61;&#x3002;</dd>
 <dt><code>property</code></dt>
 <dd>&#x88AB;&#x8BBE;&#x7F6E;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x3002;</dd>
 <dt><code>value</code></dt>
 <dd>&#x88AB;&#x8BBE;&#x7F6E;&#x7684;&#x65B0;&#x503C;&#x3002;</dd>
 <dt><code>receiver</code></dt>
 <dd>&#x6700;&#x521D;&#x88AB;&#x8C03;&#x7528;&#x7684;&#x5BF9;&#x8C61;&#x3002;&#x901A;&#x5E38;&#x662F;proxy&#x672C;&#x8EAB;&#xFF0C;&#x4F46;handler&#x7684;set&#x65B9;&#x6CD5;&#x4E5F;&#x6709;&#x53EF;&#x80FD;&#x5728;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x6216;&#x4EE5;&#x5176;&#x4ED6;&#x65B9;&#x5F0F;&#x88AB;&#x95F4;&#x63A5;&#x5730;&#x8C03;&#x7528;&#xFF08;&#x56E0;&#x6B64;&#x4E0D;&#x4E00;&#x5B9A;&#x662F;proxy&#x672C;&#x8EAB;&#xFF09;&#x3002;</dd>
 <dd>&#x6BD4;&#x5982;&#xFF0C;&#x5047;&#x8BBE;&#x6709;&#x4E00;&#x6BB5;&#x4EE3;&#x7801;&#x6267;&#x884C;&#xA0;<code>obj.name = &quot;jen&quot;&#xFF0C;obj&#x4E0D;&#x662F;&#x4E00;&#x4E2A;proxy&#x4E14;&#x81EA;&#x8EAB;&#x4E0D;&#x542B;name&#x5C5E;&#x6027;&#xFF0C;&#x4F46;&#x5B83;&#x7684;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x6709;&#x4E00;&#x4E2A;proxy&#xFF0C;&#x90A3;&#x4E48;&#x90A3;&#x4E2A;proxy&#x7684;set&#x62E6;&#x622A;&#x51FD;&#x6570;&#x4F1A;&#x88AB;&#x8C03;&#x7528;&#xFF0C;&#x6B64;&#x65F6;obj&#x4F1A;&#x4F5C;&#x4E3A;receiver&#x53C2;&#x6570;&#x4F20;&#x8FDB;&#x6765;&#x3002;</code></dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>set&#x65B9;&#x6CD5;&#x5E94;&#x8BE5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5E03;&#x5C14;&#x503C;&#xFF0C;&#x8FD4;&#x56DE;true&#x4EE3;&#x8868;&#x6B64;&#x6B21;&#x8BBE;&#x7F6E;&#x5C5E;&#x6027;&#x6210;&#x529F;&#x4E86;&#xFF0C;&#x5982;&#x679C;&#x8FD4;&#x56DE;false&#x4E14;&#x8BBE;&#x7F6E;&#x5C5E;&#x6027;&#x64CD;&#x4F5C;&#x53D1;&#x751F;&#x5728;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E0B;&#xFF0C;&#x90A3;&#x4E48;&#x4F1A;&#x629B;&#x51FA;&#x4E00;&#x4E2A;<code>TypeError</code>&#x3002;</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code><strong>handler.set</strong></code>&#xA0;&#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x62E6;&#x622A;&#x8BBE;&#x7F6E;&#x5C5E;&#x6027;&#x503C;&#x7684;&#x64CD;&#x4F5C;&#x3002;</p>

<h3 id="&#x62E6;&#x622A;">&#x62E6;&#x622A;</h3>

<p>&#x8BE5;&#x65B9;&#x6CD5;&#x4F1A;&#x62E6;&#x622A;&#x76EE;&#x6807;&#x5BF9;&#x8C61;&#x7684;&#x4EE5;&#x4E0B;&#x64CD;&#x4F5C;:</p>

<ul>
 <li>&#x6307;&#x5B9A;&#x5C5E;&#x6027;&#x503C;: <code>proxy[foo] = bar</code>&#xA0;&#x548C;&#xA0;<code>proxy.foo = bar</code></li>
 <li>&#x6307;&#x5B9A;&#x7EE7;&#x627F;&#x8005;&#x7684;&#x5C5E;&#x6027;&#x503C;: <code>Object.create(proxy)[foo] = bar</code></li>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set" class="new"><code>Reflect.set()</code></a></li>
</ul>

<h3 id="&#x7EA6;&#x675F;">&#x7EA6;&#x675F;</h3>

<p>&#x5982;&#x679C;&#x8FDD;&#x80CC;&#x4EE5;&#x4E0B;&#x7684;&#x7EA6;&#x675F;&#x6761;&#x4EF6;&#xFF0C;proxy&#x4F1A;&#x629B;&#x51FA;&#x4E00;&#x4E2A;<a title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a>:</p>

<ul>
 <li>&#x82E5;&#x76EE;&#x6807;&#x5C5E;&#x6027;&#x662F;&#x4E0D;&#x53EF;&#x5199;&#x53CA;&#x4E0D;&#x53EF;&#x914D;&#x7F6E;&#x7684;&#xFF0C;&#x5219;&#x4E0D;&#x80FD;&#x6539;&#x53D8;&#x5B83;&#x7684;&#x503C;&#x3002;</li>
 <li>&#x5982;&#x679C;&#x76EE;&#x6807;&#x5C5E;&#x6027;&#x6CA1;&#x6709;&#x914D;&#x7F6E;&#x5B58;&#x50A8;&#x65B9;&#x6CD5;&#xFF0C;&#x5373;set&#x65B9;&#x6CD5;&#x662F;undefined&#x7684;&#xFF0C;&#x5219;&#x4E0D;&#x80FD;&#x8BBE;&#x7F6E;&#x5B83;&#x7684;&#x503C;&#x3002;</li>
 <li>&#x5728;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E0B;&#xFF0C;&#x82E5;set&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;false&#xFF0C;&#x5219;&#x4F1A;&#x629B;&#x51FA;&#x4E00;&#x4E2A;&#xA0;<a title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a> &#x5F02;&#x5E38;&#x3002;</li>
</ul>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<p>&#x4EE5;&#x4E0B;&#x4EE3;&#x7801;&#x6F14;&#x793A;&#x5982;&#x4F55;&#x6355;&#x83B7;&#x5C5E;&#x6027;&#x7684;&#x8BBE;&#x7F6E;&#x64CD;&#x4F5C;&#x3002;</p>

<pre class="brush: js">var p = new Proxy({}, {
  set: function(target, prop, value, receiver) {
    console.log(&quot;called: &quot; + prop + &quot; = &quot; + value);
    return true;
  }
});

p.a = 10; // &quot;called: a = 10&quot;
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
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots-set-p-v-receiver" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">[[Set]]</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-set-p-v-receiver" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">[[Set]]</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<div><div class="htab"> 
    <a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a> 
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
   <td>Basic support</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><a title="Released on 2013-01-08." href="/en-US/Firefox/Releases/18">18</a> (18)</td>
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
   <td>18.0 (18)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x53E6;&#x89C1;">&#x53E6;&#x89C1;</h2>

<ul>
 <li><a title="Editorial review completed." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy"><code>Proxy</code></a></li>
 <li><a title="&#x5904;&#x7406;&#x5668;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x81EA;&#x5B9A;&#x4E49;&#x4EE3;&#x7406;&#x5BF9;&#x8C61;&#x7684;&#x5404;&#x79CD;&#x53EF;&#x4EE3;&#x7406;&#x64CD;&#x4F5C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler"><code>handler</code></a></li>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set" class="new"><code>Reflect.set()</code></a></li>
</ul>
                  
                
              