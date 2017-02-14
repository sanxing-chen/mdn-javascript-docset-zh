
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p><strong><code>handler.get()</code></strong>&#xA0;&#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x62E6;&#x622A;&#x5BF9;&#x8C61;&#x7684;&#x8BFB;&#x53D6;&#x5C5E;&#x6027;&#x64CD;&#x4F5C;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="brush: js">var p = new Proxy(target, {
  get: function(target, property, receiver) {
  }
});
</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<p>&#x4EE5;&#x4E0B;&#x662F;&#x4F20;&#x9012;&#x7ED9;get&#x65B9;&#x6CD5;&#x7684;&#x53C2;&#x6570;&#xFF0C;<code>this&#x4E0A;&#x4E0B;&#x6587;&#x7ED1;&#x5B9A;&#x5728;</code>handler&#x5BF9;&#x8C61;&#x4E0A;.</p>

<dl>
 <dt><code>target</code></dt>
 <dd>&#x76EE;&#x6807;&#x5BF9;&#x8C61;&#x3002;</dd>
 <dt><code>prop</code>erty</dt>
 <dd>&#x88AB;&#x83B7;&#x53D6;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x3002;</dd>
 <dt><code>receiver</code></dt>
 <dd>Proxy&#x6216;&#x8005;&#x7EE7;&#x627F;Proxy&#x7684;&#x5BF9;&#x8C61;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>get&#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x8FD4;&#x56DE;&#x4EFB;&#x4F55;&#x503C;&#x3002;</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><strong><code>handler.get</code></strong>&#xA0;&#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x62E6;&#x622A;&#x5BF9;&#x8C61;&#x7684;&#x8BFB;&#x53D6;&#x5C5E;&#x6027;&#x64CD;&#x4F5C;&#x3002;</p>

<h3 id="&#x62E6;&#x622A;">&#x62E6;&#x622A;</h3>

<p>&#x8BE5;&#x65B9;&#x6CD5;&#x4F1A;&#x62E6;&#x622A;&#x76EE;&#x6807;&#x5BF9;&#x8C61;&#x7684;&#x4EE5;&#x4E0B;&#x64CD;&#x4F5C;:</p>

<ul>
 <li>&#x8BBF;&#x95EE;&#x5C5E;&#x6027;: <code>proxy[foo]&#x548C;</code>&#xA0;<code>proxy.bar</code></li>
 <li>&#x8BBF;&#x95EE;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x7684;&#x5C5E;&#x6027;: <code>Object.create(proxy)[foo]</code></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/get" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Reflect.get()</code></a></li>
</ul>

<h3 id="&#x4E0D;&#x53D8;&#x91CF;">&#x4E0D;&#x53D8;&#x91CF;</h3>

<p>&#x5982;&#x679C;&#x8FDD;&#x80CC;&#x4E86;&#x4EE5;&#x4E0B;&#x7684;&#x4E0D;&#x53D8;&#x91CF;&#xFF0C;proxy&#x4F1A;&#x629B;&#x51FA;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;"><code>TypeError</code></a>:</p>

<ul>
 <li>&#x5982;&#x679C;&#x8981;&#x8BBF;&#x95EE;&#x7684;&#x76EE;&#x6807;&#x5C5E;&#x6027;&#x662F;&#x4E0D;&#x53EF;&#x5199;&#x4EE5;&#x53CA;&#x4E0D;&#x53EF;&#x914D;&#x7F6E;&#x7684;&#xFF0C;&#x5219;&#x8FD4;&#x56DE;&#x7684;&#x503C;&#x5FC5;&#x987B;&#x4E0E;&#x8BE5;&#x76EE;&#x6807;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x76F8;&#x540C;&#x3002;</li>
 <li>&#x5982;&#x679C;&#x8981;&#x8BBF;&#x95EE;&#x7684;&#x76EE;&#x6807;&#x5C5E;&#x6027;&#x6CA1;&#x6709;&#x914D;&#x7F6E;&#x8BBF;&#x95EE;&#x65B9;&#x6CD5;&#xFF0C;&#x5373;get&#x65B9;&#x6CD5;&#x662F;undefined&#x7684;&#xFF0C;&#x5219;&#x8FD4;&#x56DE;&#x503C;&#x5FC5;&#x987B;&#x4E3A;undefined&#x3002;</li>
</ul>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<p>&#x4EE5;&#x4E0B;&#x4EE3;&#x7801;&#x6F14;&#x793A;&#x5982;&#x4F55;&#x62E6;&#x622A;&#x5C5E;&#x6027;&#x503C;&#x7684;&#x8BFB;&#x53D6;&#x64CD;&#x4F5C;&#x3002;</p>

<pre class="brush: js">var p = new Proxy({}, {
  get: function(target, prop, receiver) {
    console.log(&quot;called: &quot; + prop);
    return 10;
  }
});

console.log(p.a); // &quot;called: a&quot;
                  // 10
</pre>

<p>&#x4EE5;&#x4E0B;&#x4EE3;&#x7801;&#x6F14;&#x793A;&#x8FDD;&#x53CD;&#x4E0D;&#x53D8;&#x91CF;&#x7684;&#x60C5;&#x51B5;&#x3002;</p>

<pre class="brush: js">var obj = {};
Object.defineProperty(obj, &quot;a&quot;, { 
  configurable: false, 
  enumerable: false, 
  value: 10, 
  writable: false 
});

var p = new Proxy(obj, {
  get: function(target, prop) {
    return 20;
  }
});

p.a; //&#x4F1A;&#x629B;&#x51FA;TypeError
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
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots-get-p-receiver" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">[[Get]]</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-get-p-receiver" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">[[Get]]</small></a></td>
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
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy" title="Editorial review completed."><code>Proxy</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler" title="&#x5904;&#x7406;&#x5668;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x81EA;&#x5B9A;&#x4E49;&#x4EE3;&#x7406;&#x5BF9;&#x8C61;&#x7684;&#x5404;&#x79CD;&#x53EF;&#x4EE3;&#x7406;&#x64CD;&#x4F5C;&#x3002;"><code>handler</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/get" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Reflect.get()</code></a></li>
</ul>
                  
                
              