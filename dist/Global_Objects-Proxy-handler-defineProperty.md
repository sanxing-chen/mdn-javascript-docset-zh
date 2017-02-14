
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><strong><code>handler.defineProperty()</code></strong> &#x7528;&#x4E8E;&#x62E6;&#x622A;&#x5BF9;&#x5BF9;&#x8C61;&#x7684; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" title="Object.defineProperty() &#x65B9;&#x6CD5;&#x4F1A;&#x76F4;&#x63A5;&#x5728;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4E0A;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x65B0;&#x5C5E;&#x6027;&#xFF0C;&#x6216;&#x8005;&#x4FEE;&#x6539;&#x4E00;&#x4E2A;&#x5DF2;&#x7ECF;&#x5B58;&#x5728;&#x7684;&#x5C5E;&#x6027;&#xFF0C; &#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x3002;"><code>Object.defineProperty()</code></a> &#x64CD;&#x4F5C;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="brush: js">var p = new Proxy(target, {
  defineProperty: function(target, property, descriptor) {
  }
});
</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<p>&#x4E0B;&#x5217;&#x53C2;&#x6570;&#x5C06;&#x4F1A;&#x88AB;&#x4F20;&#x9012;&#x7ED9; <code>defineProperty</code> &#x65B9;&#x6CD5;&#x3002;<code> this</code> &#x7ED1;&#x5B9A;&#x5728; handler &#x5BF9;&#x8C61;&#x4E0A;&#x3002;</p>

<dl>
 <dt><code>target</code></dt>
 <dd>&#x76EE;&#x6807;&#x5BF9;&#x8C61;&#x3002;</dd>
 <dt><code>property</code></dt>
 <dd>&#x5F85;&#x68C0;&#x7D22;&#x5176;&#x63CF;&#x8FF0;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x3002;</dd>
 <dt><code>descriptor</code></dt>
 <dd>&#x5F85;&#x5B9A;&#x4E49;&#x6216;&#x4FEE;&#x6539;&#x7684;&#x5C5E;&#x6027;&#x7684;&#x63CF;&#x8FF0;&#x7B26;&#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p><code>defineProperty</code> &#x65B9;&#x6CD5;&#x5FC5;&#x987B;&#x4EE5;&#x4E00;&#x4E2A; <a href="/zh-CN/docs/Web/JavaScript/Reference/Boolean" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Boolean</code></a> &#x8FD4;&#x56DE;&#xFF0C;&#x8868;&#x793A;&#x5B9A;&#x4E49;&#x8BE5;&#x5C5E;&#x6027;&#x7684;&#x64CD;&#x4F5C;&#x6210;&#x529F;&#x4E0E;&#x5426;&#x3002;</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code><strong>handler.defineProperty()</strong></code> &#x7528;&#x4E8E;&#x62E6;&#x622A;&#x5BF9;&#x5BF9;&#x8C61;&#x7684; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" title="Object.defineProperty() &#x65B9;&#x6CD5;&#x4F1A;&#x76F4;&#x63A5;&#x5728;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4E0A;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x65B0;&#x5C5E;&#x6027;&#xFF0C;&#x6216;&#x8005;&#x4FEE;&#x6539;&#x4E00;&#x4E2A;&#x5DF2;&#x7ECF;&#x5B58;&#x5728;&#x7684;&#x5C5E;&#x6027;&#xFF0C; &#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x3002;"><code>Object.defineProperty()</code></a> &#x64CD;&#x4F5C;&#x3002;</p>

<h3 id="&#x62E6;&#x622A;">&#x62E6;&#x622A;</h3>

<p>&#x8BE5;&#x65B9;&#x6CD5;&#x4F1A;&#x62E6;&#x622A;&#x76EE;&#x6807;&#x5BF9;&#x8C61;&#x7684;&#x4EE5;&#x4E0B;&#x64CD;&#x4F5C; :</p>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" title="Object.defineProperty() &#x65B9;&#x6CD5;&#x4F1A;&#x76F4;&#x63A5;&#x5728;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4E0A;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x65B0;&#x5C5E;&#x6027;&#xFF0C;&#x6216;&#x8005;&#x4FEE;&#x6539;&#x4E00;&#x4E2A;&#x5DF2;&#x7ECF;&#x5B58;&#x5728;&#x7684;&#x5C5E;&#x6027;&#xFF0C; &#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x3002;"><code>Object.defineProperty()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty" title="&#x9759;&#x6001;&#x65B9;&#x6CD5; Reflect.defineProperty() &#x6709;&#x5F88;&#x50CF; Object.defineProperty() &#x65B9;&#x6CD5;&#xFF0C;&#x4F46;&#x8FD4;&#x56DE;&#x7684;&#x662F;&#xA0;Boolean &#x503C;&#x3002;"><code>Reflect.defineProperty()</code></a></li>
</ul>

<h3 id="&#x4E0D;&#x53D8;&#x91CF;">&#x4E0D;&#x53D8;&#x91CF;</h3>

<p>&#x5982;&#x679C;&#x8FDD;&#x80CC;&#x4E86;&#x4EE5;&#x4E0B;&#x7684;&#x4E0D;&#x53D8;&#x91CF;&#xFF0C;proxy&#x4F1A;&#x629B;&#x51FA; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;"><code>TypeError</code></a>:</p>

<ul>
 <li>&#x5982;&#x679C;&#x76EE;&#x6807;&#x5BF9;&#x8C61;&#x4E0D;&#x53EF;&#x6269;&#x5C55;&#xFF0C; &#x5C06;&#x4E0D;&#x80FD;&#x6DFB;&#x52A0;&#x5C5E;&#x6027;&#x3002;</li>
 <li>&#x4E0D;&#x80FD;&#x6DFB;&#x52A0;&#x6216;&#x8005;&#x4FEE;&#x6539;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&#x4E3A;&#x4E0D;&#x53EF;&#x914D;&#x7F6E;&#x7684;&#xFF0C;&#x5982;&#x679C;&#x5B83;&#x4E0D;&#x4F5C;&#x4E3A;&#x4E00;&#x4E2A;&#x76EE;&#x6807;&#x5BF9;&#x8C61;&#x7684;&#x4E0D;&#x53EF;&#x914D;&#x7F6E;&#x7684;&#x5C5E;&#x6027;&#x5B58;&#x5728;&#x7684;&#x8BDD;&#x3002;</li>
 <li>&#x5982;&#x679C;&#x76EE;&#x6807;&#x5BF9;&#x8C61;&#x5B58;&#x5728;&#x4E00;&#x4E2A;&#x5BF9;&#x5E94;&#x7684;&#x53EF;&#x914D;&#x7F6E;&#x5C5E;&#x6027;&#xFF0C;&#x8FD9;&#x4E2A;&#x5C5E;&#x6027;&#x53EF;&#x80FD;&#x4E0D;&#x4F1A;&#x662F;&#x4E0D;&#x53EF;&#x914D;&#x7F6E;&#x7684;&#x3002;</li>
 <li>&#x5982;&#x679C;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&#x5728;&#x76EE;&#x6807;&#x5BF9;&#x8C61;&#x4E2D;&#x5B58;&#x5728;&#x5BF9;&#x5E94;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x90A3;&#x4E48; <code>Object.defineProperty(target, prop, descriptor)</code> &#x5C06;&#x4E0D;&#x4F1A;&#x629B;&#x51FA;&#x5F02;&#x5E38;&#x3002;</li>
 <li>&#x5728;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E0B;&#xFF0C; <code>false</code> &#x4F5C;&#x4E3A;<code> handler.defineProperty</code> &#x65B9;&#x6CD5;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x7684;&#x8BDD;&#x5C06;&#x4F1A;&#x629B;&#x51FA; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;"><code>TypeError</code></a> &#x5F02;&#x5E38;.</li>
</ul>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<p>&#x4EE5;&#x4E0B;&#x4EE3;&#x7801;&#x6F14;&#x793A;&#x5982;&#x4F55;&#x62E6;&#x622A;&#x5BF9;&#x76EE;&#x6807;&#x5BF9;&#x8C61;&#x7684; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" title="Object.defineProperty() &#x65B9;&#x6CD5;&#x4F1A;&#x76F4;&#x63A5;&#x5728;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4E0A;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x65B0;&#x5C5E;&#x6027;&#xFF0C;&#x6216;&#x8005;&#x4FEE;&#x6539;&#x4E00;&#x4E2A;&#x5DF2;&#x7ECF;&#x5B58;&#x5728;&#x7684;&#x5C5E;&#x6027;&#xFF0C; &#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x3002;"><code>Object.defineProperty()</code></a> &#x64CD;&#x4F5C;&#x3002;</p>

<pre class="brush: js">var p = new Proxy({}, {
  defineProperty: function(target, prop, descriptor) {
    console.log(&apos;called: &apos; + prop);
    return true;
  }
});

var desc = { configurable: true, enumerable: true, value: 10 };
Object.defineProperty(p, &apos;a&apos;, desc); // &quot;called: a&quot;
</pre>

<p>&#x5F53;&#x8C03;&#x7528; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" title="Object.defineProperty() &#x65B9;&#x6CD5;&#x4F1A;&#x76F4;&#x63A5;&#x5728;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4E0A;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x65B0;&#x5C5E;&#x6027;&#xFF0C;&#x6216;&#x8005;&#x4FEE;&#x6539;&#x4E00;&#x4E2A;&#x5DF2;&#x7ECF;&#x5B58;&#x5728;&#x7684;&#x5C5E;&#x6027;&#xFF0C; &#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x3002;"><code>Object.defineProperty()</code></a> &#x6216;&#x8005; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty" title="&#x9759;&#x6001;&#x65B9;&#x6CD5; Reflect.defineProperty() &#x6709;&#x5F88;&#x50CF; Object.defineProperty() &#x65B9;&#x6CD5;&#xFF0C;&#x4F46;&#x8FD4;&#x56DE;&#x7684;&#x662F;&#xA0;Boolean &#x503C;&#x3002;"><code>Reflect.defineProperty()</code></a>&#xFF0C;&#x4F20;&#x9012;&#x7ED9; <code>defineProperty</code> &#x7684; <code>descriptor</code>&#xA0;&#xA0; &#x6709;&#x4E00;&#x4E2A;&#x9650;&#x5236; - &#x53EA;&#x6709;&#x4EE5;&#x4E0B;&#x5C5E;&#x6027;&#x624D;&#x6709;&#x7528;&#xFF0C;&#x975E;&#x6807;&#x51C6;&#x7684;&#x5C5E;&#x6027;&#x5C06;&#x4F1A;&#x88AB;&#x65E0;&#x89C6; :</p>

<ul>
 <li><code>enumerable</code></li>
 <li><code>configurable</code></li>
 <li><code>writable</code></li>
 <li><code>value</code></li>
 <li><code>get</code></li>
 <li><code>set</code></li>
</ul>

<pre class="brush: js">var p = new Proxy({}, {
&#xA0; defineProperty(target, prop, descriptor) {
&#xA0; &#xA0; console.log(descriptor);
&#xA0; &#xA0; return Reflect.defineProperty(target, prop, descriptor);
&#xA0; }
});

Object.defineProperty(p, &apos;name&apos;, {
&#xA0; value: &apos;proxy&apos;,
&#xA0; type: &apos;custom&apos;
});  // { value: &apos;proxy&apos; }
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
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots-defineownproperty-p-desc" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">[[DefineOwnProperty]]</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-defineownproperty-p-desc" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">[[DefineOwnProperty]]</small></a></td>
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
   <td><a href="/en-US/Firefox/Releases/18" title="Released on 2013-01-08.">18</a> (18)</td>
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
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy" title="Proxy&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x4E3A;&#x57FA;&#x7840;&#x64CD;&#x4F5C;&#xFF08;&#x4F8B;&#x5982;&#xFF1A;&#x5C5E;&#x6027;&#x67E5;&#x627E;&#x3001;&#x8D4B;&#x503C;&#x3001;&#x679A;&#x4E3E;&#x3001;&#x65B9;&#x6CD5;&#x8C03;&#x7528;&#x7B49;&#xFF09;&#x5B9A;&#x4E49;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x884C;&#x4E3A;&#x3002;"><code>Proxy</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler" title="&#x5904;&#x7406;&#x5668;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x81EA;&#x5B9A;&#x4E49;&#x4EE3;&#x7406;&#x5BF9;&#x8C61;&#x7684;&#x5404;&#x79CD;&#x53EF;&#x4EE3;&#x7406;&#x64CD;&#x4F5C;&#x3002;"><code>handler</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" title="Object.defineProperty() &#x65B9;&#x6CD5;&#x4F1A;&#x76F4;&#x63A5;&#x5728;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4E0A;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x65B0;&#x5C5E;&#x6027;&#xFF0C;&#x6216;&#x8005;&#x4FEE;&#x6539;&#x4E00;&#x4E2A;&#x5DF2;&#x7ECF;&#x5B58;&#x5728;&#x7684;&#x5C5E;&#x6027;&#xFF0C; &#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x3002;"><code>Object.defineProperty()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty" title="&#x9759;&#x6001;&#x65B9;&#x6CD5; Reflect.defineProperty() &#x6709;&#x5F88;&#x50CF; Object.defineProperty() &#x65B9;&#x6CD5;&#xFF0C;&#x4F46;&#x8FD4;&#x56DE;&#x7684;&#x662F;&#xA0;Boolean &#x503C;&#x3002;"><code>Reflect.defineProperty()</code></a></li>
</ul>
                  
                
              