
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>Reflect&#x662F;&#x4E00;&#x4E2A;&#x5185;&#x7F6E;&#x7684;&#x5BF9;&#x8C61;&#xFF0C;&#x63D0;&#x4F9B;&#x53EF;&#x62E6;&#x622A;&#x7684;JavaScript&#x64CD;&#x4F5C;&#x7684;&#x65B9;&#x6CD5;&#x3002;&#x65B9;&#x6CD5;&#x4E0E;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler">&#x4EE3;&#x7406;&#x5904;&#x7406;&#x7A0B;&#x5E8F;</a>&#x76F8;&#x540C;&#x3002;&#x53CD;&#x5C04;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x5BF9;&#x8C61;&#xFF0C;&#x56E0;&#x6B64;&#x5B83;&#x4E0D;&#x53EF;&#x6784;&#x9020;&#x3002;</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x4E0E;&#x5927;&#x591A;&#x6570;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x4E0D;&#x540C;&#xFF0C;Reflect&#x4E0D;&#x662F;&#x6784;&#x9020;&#x51FD;&#x6570;&#x3002;&#x60A8;&#x4E0D;&#x80FD;&#x5C06;&#x5176;&#x4E0E;&#x4E00;&#x4E2A;<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/new">(new operate)&#x65B0;&#x8FD0;&#x7B97;&#x7B26;</a>&#x4E00;&#x8D77;&#x4F7F;&#x7528;&#xFF0C;&#x6216;&#x8005;&#x5C06;Reflect&#x5BF9;&#x8C61;&#x4F5C;&#x4E3A;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x6765;&#x8C03;&#x7528;&#x3002;</p>

<h2 id="&#x65B9;&#x6CD5;">&#x65B9;&#x6CD5;</h2>

<p>Reflect&#x5BF9;&#x8C61;&#x63D0;&#x4F9B;&#x4EE5;&#x4E0B;&#x9759;&#x6001;&#x51FD;&#x6570;&#xFF0C;&#x5B83;&#x4EEC;&#x5177;&#x6709;&#x4E0E;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler">&#x4EE3;&#x7406;&#x5904;&#x7406;&#x7A0B;&#x5E8F;&#x65B9;&#x6CD5;</a>&#x76F8;&#x540C;&#x7684;&#x540D;&#x79F0;&#x3002;&#x8FD9;&#x4E9B;&#x65B9;&#x6CD5;&#x4E2D;&#x7684;&#x4E00;&#x4E9B;&#x4E0E; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object &#x6784;&#x9020;&#x51FD;&#x6570;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5305;&#x88C5;&#xFF08;object wrapper&#xFF09;&#x3002;"><code>Object</code></a> &#x4E0A;&#x7684;&#x5BF9;&#x5E94;&#x65B9;&#x6CD5;&#x76F8;&#x540C;&#x3002;</p>

<dl>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/apply" title="&#x9759;&#x6001;&#x65B9;&#x6CD5;&#xA0;Reflect.apply() &#x901A;&#x8FC7;&#x6307;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x5217;&#x8868;&#x53D1;&#x8D77;&#x5BF9;&#x76EE;&#x6807;(target)&#x51FD;&#x6570;&#x7684;&#x8C03;&#x7528;&#x3002;"><code>Reflect.apply()</code></a></dt>
 <dd>&#x5BF9;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x8FDB;&#x884C;&#x8C03;&#x7528;&#x64CD;&#x4F5C;&#xFF0C;&#x540C;&#x65F6;&#x53EF;&#x4EE5;&#x4F20;&#x5165;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x4F5C;&#x4E3A;&#x8C03;&#x7528;&#x53C2;&#x6570;&#x3002;&#x548C; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply" title="apply() &#x65B9;&#x6CD5;&#x5728;&#x6307;&#x5B9A;&#xA0;this&#xA0;&#x503C;&#x548C;&#x53C2;&#x6570;&#xFF08;&#x53C2;&#x6570;&#x4EE5;&#x6570;&#x7EC4;&#x6216;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x7684;&#x5F62;&#x5F0F;&#x5B58;&#x5728;&#xFF09;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#x8C03;&#x7528;&#x67D0;&#x4E2A;&#x51FD;&#x6570;&#x3002;"><code>Function.prototype.apply()</code></a> &#x529F;&#x80FD;&#x7C7B;&#x4F3C;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/construct" title="Reflect.construct() &#x65B9;&#x6CD5;&#x7684;&#x884C;&#x4E3A;&#x6709;&#x70B9;&#x50CF;&#xA0;new &#x64CD;&#x4F5C;&#x7B26; &#x6784;&#x9020;&#x51FD;&#x6570;&#xA0;&#xFF0C; &#x76F8;&#x5F53;&#x4E8E;&#x8FD0;&#x884C;&#xA0;new target(...args)."><code>Reflect.construct()</code></a></dt>
 <dd>&#x5BF9;&#x6784;&#x9020;&#x51FD;&#x6570;&#x8FDB;&#x884C; <a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/new"><code>new</code> </a> &#x64CD;&#x4F5C;&#xFF0C;&#x76F8;&#x5F53;&#x4E8E;&#x6267;&#x884C; <code>new target(...args)&#x3002;</code></dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty" title="&#x9759;&#x6001;&#x65B9;&#x6CD5; Reflect.defineProperty() &#x6709;&#x5F88;&#x50CF; Object.defineProperty() &#x65B9;&#x6CD5;&#xFF0C;&#x4F46;&#x8FD4;&#x56DE;&#x7684;&#x662F;&#xA0;Boolean &#x503C;&#x3002;"><code>Reflect.defineProperty()</code></a></dt>
 <dd>&#x548C; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" title="Object.defineProperty() &#x65B9;&#x6CD5;&#x4F1A;&#x76F4;&#x63A5;&#x5728;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4E0A;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x65B0;&#x5C5E;&#x6027;&#xFF0C;&#x6216;&#x8005;&#x4FEE;&#x6539;&#x4E00;&#x4E2A;&#x5DF2;&#x7ECF;&#x5B58;&#x5728;&#x7684;&#x5C5E;&#x6027;&#xFF0C; &#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x3002;"><code>Object.defineProperty()</code></a> &#x7C7B;&#x4F3C;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty" title="&#x9759;&#x6001;&#x65B9;&#x6CD5;&#xA0;Reflect.deleteProperty() &#x5141;&#x8BB8;&#x7528;&#x4E8E;&#x5220;&#x9664;&#x5C5E;&#x6027;&#x3002;&#x5B83;&#x5F88;&#x50CF; delete operator &#xFF0C;&#x4F46;&#x5B83;&#x662F;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x3002;"><code>Reflect.deleteProperty()</code></a></dt>
 <dd>&#x5220;&#x9664;&#x5BF9;&#x8C61;&#x7684;&#x67D0;&#x4E2A;&#x5C5E;&#x6027;&#xFF0C;&#x76F8;&#x5F53;&#x4E8E;&#x6267;&#x884C; <a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/delete"><code>delete</code> </a><code>target[name]&#x3002;</code></dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/enumerate" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Reflect.enumerate()</code></a></dt>
 <dd>&#x8BE5;&#x65B9;&#x6CD5;&#x4F1A;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x6709;&#x76EE;&#x6807;&#x5BF9;&#x8C61;&#x8EAB;&#x4E0A;&#x6240;&#x6709;&#x53EF;&#x679A;&#x4E3E;&#x7684;&#x81EA;&#x8EAB;&#x5B57;&#x7B26;&#x4E32;&#x5C5E;&#x6027;&#x4EE5;&#x53CA;&#x7EE7;&#x627F;&#x5B57;&#x7B26;&#x4E32;&#x5C5E;&#x6027;&#x7684;&#x8FED;&#x4EE3;&#x5668;&#xFF0C;<a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in"><code>for...in</code></a> &#x64CD;&#x4F5C;&#x904D;&#x5386;&#x5230;&#x7684;&#x6B63;&#x662F;&#x8FD9;&#x4E9B;&#x5C5E;&#x6027;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/get" title="Reflect.get()&#xA0;&#x65B9;&#x6CD5;&#x7684;&#x5DE5;&#x4F5C;&#x65B9;&#x5F0F;&#xFF0C;&#x5C31;&#x50CF;&#x4ECE;&#xA0;object (target[propertyKey]) &#x4E2D;&#x83B7;&#x53D6;&#x5C5E;&#x6027;&#xFF0C;&#x4F46;&#x5B83;&#x662F;&#x4F5C;&#x4E3A;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x6267;&#x884C;&#x7684;&#x3002;"><code>Reflect.get()</code></a></dt>
 <dd>&#x83B7;&#x53D6;&#x5BF9;&#x8C61;&#x8EAB;&#x4E0A;&#x67D0;&#x4E2A;&#x5C5E;&#x6027;&#x7684;&#x503C;&#xFF0C;&#x7C7B;&#x4F3C;&#x4E8E; <code>target[name]&#x3002;</code></dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor" title="&#x9759;&#x6001;&#x65B9;&#x6CD5;&#xA0;Reflect.getOwnPropertyDescriptor() &#x4E0E; Object.getOwnPropertyDescriptor() &#x65B9;&#x6CD5;&#x76F8;&#x4F3C;&#x3002;&#x5982;&#x679C;&#x5728;&#x5BF9;&#x8C61;&#x4E2D;&#x5B58;&#x5728;&#xFF0C;&#x5219;&#x8FD4;&#x56DE;&#x7ED9;&#x5B9A;&#x7684;&#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x63CF;&#x8FF0;&#x7B26;&#x3002;&#x5426;&#x5219;&#x8FD4;&#x56DE; undefined&#x3002;"><code>Reflect.getOwnPropertyDescriptor()</code></a></dt>
 <dd>&#x7C7B;&#x4F3C;&#x4E8E; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor" title="Object.getOwnPropertyDescriptor() &#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x4E0A;&#x4E00;&#x4E2A;&#x81EA;&#x6709;&#x5C5E;&#x6027;&#x5BF9;&#x5E94;&#x7684;&#x5C5E;&#x6027;&#x63CF;&#x8FF0;&#x7B26;&#x3002;&#xFF08;&#x81EA;&#x6709;&#x5C5E;&#x6027;&#x6307;&#x7684;&#x662F;&#x76F4;&#x63A5;&#x8D4B;&#x4E88;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x4ECE;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x8FDB;&#x884C;&#x67E5;&#x627E;&#x7684;&#x5C5E;&#x6027;&#xFF09;"><code>Object.getOwnPropertyDescriptor()</code></a>&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf" title="&#x9759;&#x6001;&#x65B9;&#x6CD5;&#xA0;Reflect.getPrototypeOf() &#x4E0E; Object.getPrototypeOf() &#x65B9;&#x6CD5;&#x662F;&#x4E00;&#x6837;&#x7684;&#x3002;&#x90FD;&#x662F;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;&#xFF08;&#x5373;&#xFF0C;&#x5185;&#x90E8;&#x7684;&#xA0;[[Prototype]] &#x5C5E;&#x6027;&#x7684;&#x503C;&#xFF09;&#x3002;"><code>Reflect.getPrototypeOf()</code></a></dt>
 <dd>&#x7C7B;&#x4F3C;&#x4E8E; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf" title="Object.getPrototypeOf() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;&#xFF08;&#x4E5F;&#x5C31;&#x662F;&#x8BE5;&#x5BF9;&#x8C61;&#x5185;&#x90E8;&#x5C5E;&#x6027;[[Prototype]]&#x7684;&#x503C;&#xFF09;&#x3002;"><code>Object.getPrototypeOf()</code></a>&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/has" title="&#x9759;&#x6001;&#x65B9;&#x6CD5;&#xA0;Reflect.has() &#x4F5C;&#x7528;&#x4E0E;&#xA0;in &#x64CD;&#x4F5C;&#x7B26;&#xA0;&#x76F8;&#x540C;&#x3002;"><code>Reflect.has()</code></a></dt>
 <dd>&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x662F;&#x5426;&#x5B58;&#x5728;&#x67D0;&#x4E2A;&#x5C5E;&#x6027;&#xFF0C;&#x548C; <a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/in"><code>in</code> &#x8FD0;&#x7B97;&#x7B26;</a> &#x7684;&#x529F;&#x80FD;&#x5B8C;&#x5168;&#x76F8;&#x540C;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible" title="&#x9759;&#x6001;&#x65B9;&#x6CD5;&#xA0;Reflect.isExtensible() &#x51B3;&#x5B9A;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x662F;&#x5426;&#x53EF;&#x6269;&#x5C55; &#xFF08;&#x5373;&#x662F;&#x5426;&#x80FD;&#x591F;&#x6DFB;&#x52A0;&#x65B0;&#x7684;&#x5C5E;&#x6027;&#xFF09;&#x3002;&#x4E0E;&#x5B83; Object.isExtensible() &#x65B9;&#x6CD5;&#x76F8;&#x4F3C;&#xFF0C;&#x4F46;&#x6709;&#x4E00;&#x4E9B;&#x4E0D;&#x540C;&#xFF0C;&#x8BE6;&#x60C5;&#x53EF;&#x89C1; differences&#x3002;"><code>Reflect.isExtensible()</code></a></dt>
 <dd>&#x7C7B;&#x4F3C;&#x4E8E; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible" title="Object.isExtensible() &#x65B9;&#x6CD5;&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x662F;&#x5426;&#x662F;&#x53EF;&#x6269;&#x5C55;&#x7684;&#xFF08;&#x662F;&#x5426;&#x53EF;&#x4EE5;&#x5728;&#x5B83;&#x4E0A;&#x9762;&#x6DFB;&#x52A0;&#x65B0;&#x7684;&#x5C5E;&#x6027;&#xFF09;&#x3002;"><code>Object.isExtensible()</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys" title="&#x9759;&#x6001;&#x65B9;&#x6CD5;&#xA0;Reflect.ownKeys() &#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7531;&#x76EE;&#x6807;&#x5BF9;&#x8C61;&#x81EA;&#x8EAB;&#x7684;&#x5C5E;&#x6027;&#x952E;&#x7EC4;&#x6210;&#x7684;&#x6570;&#x7EC4;&#x3002;"><code>Reflect.ownKeys()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x6240;&#x6709;&#x81EA;&#x8EAB;&#x5C5E;&#x6027;&#xFF08;&#x4E0D;&#x5305;&#x542B;&#x7EE7;&#x627F;&#x5C5E;&#x6027;&#xFF09;&#x7684;&#x6570;&#x7EC4;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions" title="&#x9759;&#x6001;&#x65B9;&#x6CD5; Reflect.preventExtensions() &#x65B9;&#x6CD5;&#x963B;&#x6B62;&#x65B0;&#x5C5E;&#x6027;&#x6DFB;&#x52A0;&#x5230;&#x5BF9;&#x8C61; &#x4F8B;&#x5982;&#xFF1A;&#x9632;&#x6B62;&#x5C06;&#x6765;&#x5BF9;&#x5BF9;&#x8C61;&#x7684;&#x6269;&#x5C55;&#x88AB;&#x6DFB;&#x52A0;&#x5230;&#x5BF9;&#x8C61;&#x4E2D;)&#x3002;&#x8BE5;&#x65B9;&#x6CD5;&#x4E0E;&#xA0;Object.preventExtensions()&#x76F8;&#x4F3C;&#xFF0C;&#x4F46;&#x6709;&#x4E00;&#x4E9B;&#x4E0D;&#x540C;&#x70B9;&#x3002;&#x8BE6;&#x60C5;&#x53EF;&#x89C1; differences&#x3002;"><code>Reflect.preventExtensions()</code></a></dt>
 <dd>&#x7C7B;&#x4F3C;&#x4E8E; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions" title="Object.preventExtensions() &#x65B9;&#x6CD5;&#x8BA9;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x53D8;&#x7684;&#x4E0D;&#x53EF;&#x6269;&#x5C55;&#xFF0C;&#x4E5F;&#x5C31;&#x662F;&#x6C38;&#x8FDC;&#x4E0D;&#x80FD;&#x518D;&#x6DFB;&#x52A0;&#x65B0;&#x7684;&#x5C5E;&#x6027;&#x3002;"><code>Object.preventExtensions()</code></a>&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set" title="&#x9759;&#x6001;&#x65B9;&#x6CD5;&#xA0;Reflect.set() &#x5DE5;&#x4F5C;&#x65B9;&#x5F0F;&#x5C31;&#x50CF;&#x5728;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4E0A;&#x8BBE;&#x7F6E;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&#x3002;"><code>Reflect.set()</code></a></dt>
 <dd>&#x8BBE;&#x7F6E;&#x5BF9;&#x8C61;&#x8EAB;&#x4E0A;&#x67D0;&#x4E2A;&#x5C5E;&#x6027;&#x7684;&#x503C;&#xFF0C;&#x7C7B;&#x4F3C;&#x4E8E; <code>target[name] = val&#x3002;</code></dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf" title="&#x9759;&#x6001;&#x65B9;&#x6CD5; Reflect.setPrototypeOf() &#x4E0E; Object.setPrototypeOf() &#x65B9;&#x6CD5;&#x662F;&#x4E00;&#x81F4;&#x7684;&#x3002;&#x5B83;&#x5C06;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B; &#xFF08;&#x5373;&#xFF0C;&#x5185;&#x90E8;&#x7684;[[Prototype]]&#xA0;&#x5C5E;&#x6027;&#xFF09;&#x8BBE;&#x7F6E;&#x4E3A;&#x53E6;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x6216;&#x4E3A;&#xA0;null&#x3002;"><code>Reflect.setPrototypeOf()</code></a></dt>
 <dd>&#x7C7B;&#x4F3C;&#x4E8E; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf" title="&#x5C06;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;(&#x5373;&#x5BF9;&#x8C61;&#x7684;[[Prototype]]&#x5185;&#x90E8;&#x5C5E;&#x6027;)&#x8BBE;&#x7F6E;&#x4E3A;&#x53E6;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x6216;&#x8005;null&#x3002;"><code>Object.setPrototypeOf()</code></a>&#x3002;</dd>
</dl>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table>
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-reflect-object" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Reflect</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-reflect-object" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Reflect</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>Reflect.enumerate has been removed.</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;"><br>
 &#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
   <td>49.0</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
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
   <td>49.0</td>
   <td>49.0</td>
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
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>&#x4EE3;&#x7406;</code></a>&#xA0;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x3002;</li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler" title="&#x5904;&#x7406;&#x5668;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x81EA;&#x5B9A;&#x4E49;&#x4EE3;&#x7406;&#x5BF9;&#x8C61;&#x7684;&#x5404;&#x79CD;&#x53EF;&#x4EE3;&#x7406;&#x64CD;&#x4F5C;&#x3002;"><code>&#x4EE3;&#x7406;&#x5904;&#x7406;&#x5668;</code></a>&#xA0;&#x5BF9;&#x8C61;&#x3002;</li>
</ul>
                  
                
              