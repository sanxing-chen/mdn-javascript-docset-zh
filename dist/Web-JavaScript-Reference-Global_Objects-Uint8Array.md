
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="&#x6982;&#x8FF0;">&#x6982;&#x8FF0;</h2>

<p><strong><code>Uint8Array</code></strong> &#x6570;&#x7EC4;&#x7C7B;&#x578B;&#x8868;&#x793A;&#x4E00;&#x4E2A;8&#x4F4D;&#x65E0;&#x7B26;&#x53F7;&#x6574;&#x578B;&#x6570;&#x7EC4;&#xFF0C;&#x521B;&#x5EFA;&#x65F6;&#x5185;&#x5BB9;&#x88AB;&#x521D;&#x59CB;&#x5316;&#x4E3A;0&#x3002;&#x521B;&#x5EFA;&#x5B8C;&#x540E;&#xFF0C;&#x53EF;&#x4EE5;&#x4EE5;&#x5BF9;&#x8C61;&#x7684;&#x65B9;&#x5F0F;&#x6216;&#x4F7F;&#x7528;&#x6570;&#x7EC4;&#x4E0B;&#x6807;&#x7D22;&#x5F15;&#x7684;&#x65B9;&#x5F0F;&#x5F15;&#x7528;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;&#x683C;&#x5F0F;">&#x8BED;&#x6CD5;&#x683C;&#x5F0F;</h2>

<pre class="syntaxbox">Uint8Array(length);//&#x521B;&#x5EFA;&#x521D;&#x59CB;&#x5316;&#x4E3A;0&#x7684;&#xFF0C;&#x5305;&#x542B;length&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x65E0;&#x7B26;&#x53F7;&#x6574;&#x578B;&#x6570;&#x7EC4;
Uint8Array(typedArray);
Uint8Array(object);
Uint8Array(buffer [, byteOffset [, length]]);</pre>

<p>&#x6784;&#x9020;&#x8BED;&#x6CD5;&#x548C;&#x53C2;&#x6570;&#x7684;&#x66F4;&#x591A;&#x4FE1;&#x606F;&#x8BF7;&#x53C2;&#x89C1;&#xA0;<em><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax">TypedArray</a></em>.</p>

<h2 id="&#x5C5E;&#x6027;">&#x5C5E;&#x6027;</h2>

<dl>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT" title="TypedArray.BYTES_PER_ELEMENT&#xA0;&#x5C5E;&#x6027;&#x4EE3;&#x8868;&#x4E86;&#x5F3A;&#x7C7B;&#x578B;&#x6570;&#x7EC4;&#x4E2D;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x6240;&#x5360;&#x7528;&#x7684;&#x5B57;&#x8282;&#x6570;&#x3002;"><code>Uint8Array.BYTES_PER_ELEMENT</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x4E2D;&#x5143;&#x7D20;&#x7684;&#x5B57;&#x8282;&#x6570;&#xFF0C;Uint8Array&#x4E2D;&#x8FD4;&#x56DE;1&#x5B57;&#x8282;&#x3002;</dd>
 <dt>Uint8Array.length</dt>
 <dd>&#x6570;&#x7EC4;&#x7684;&#x957F;&#x5EA6;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/name" title="TypedArray.name &#x5C5E;&#x6027;&#x662F;&#x63CF;&#x8FF0;&#x7C7B;&#x578B;&#x6570;&#x7EC4;&#x6784;&#x9020;&#x540D;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x503C;&#x3002;"><code>Uint8Array.name</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x6784;&#x9020;&#x540D;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x5BF9;Uint8Array&#x7C7B;&#x578B;&#x800C;&#x8A00;&#x8FD4;&#x56DE; &#x201C;Uint8Array&#x201D;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/prototype" title="TypedArray.prototype&#x5C5E;&#x6027;&#x8868;&#x793A;TypedArray&#x6784;&#x9020;&#x5668;&#x7684;&#x539F;&#x578B;."><code>Uint8Array.prototype</code></a></dt>
 <dd><em>TypedArray</em>&#xA0;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;.</dd>
</dl>

<h2 id="&#x65B9;&#x6CD5;">&#x65B9;&#x6CD5;</h2>

<dl>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Uint8Array.from()</code></a></dt>
 <dd>&#x4ECE;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x6216;&#x53EF;&#x8FED;&#x4EE3;&#x7684;&#x5BF9;&#x8C61;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x7684;Uint8Array&#x6570;&#x7EC4;&#xFF0C;&#x53EF;&#x53C2;&#x89C1;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from" title="Array.from() &#x65B9;&#x6CD5;&#x4ECE;&#x7C7B;&#x4F3C;&#x6570;&#x7EC4;&#x6216;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x6570;&#x7EC4;&#x5B9E;&#x4F8B;&#x3002;"><code>Array.from()</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/of" title="TypedArray.of() &#x65B9;&#x6CD5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5177;&#x6709;&#x53EF;&#x53D8;&#x6570;&#x91CF;&#x53C2;&#x6570;&#x7684;&#x65B0;&#x7C7B;&#x578B;&#x6570;&#x7EC4;&#xA0;&#x3002;&#x6B64;&#x65B9;&#x6CD5;&#x51E0;&#x4E4E;&#x4E0E;Array.of() &#x76F8;&#x540C;&#x3002;"><code>Uint8Array.of()</code></a></dt>
 <dd>&#x901A;&#x8FC7;&#x4E00;&#x4E2A;&#x53EF;&#x53D8;&#x6570;&#x76EE;&#x7684;&#x53C2;&#x6570;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x7684;<code>Uint8Array</code>&#x6570;&#x7EC4;&#xFF0C;&#x53EF;&#x53C2;&#x89C1;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/of" title="Array.of() &#x65B9;&#x6CD5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5177;&#x6709;&#x53EF;&#x53D8;&#x6570;&#x91CF;&#x53C2;&#x6570;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x5B9E;&#x4F8B;&#xFF0C;&#x800C;&#x4E0D;&#x8003;&#x8651;&#x53C2;&#x6570;&#x7684;&#x6570;&#x91CF;&#x6216;&#x7C7B;&#x578B;&#x3002;"><code>Array.of()</code></a>.</dd>
</dl>

<h2 name="Boolean_instances" id="Boolean_instances"><code>Uint8Array</code> &#x539F;&#x578B;&#x58F0;&#x660E;</h2>

<p>&#x6240;&#x6709;&#x7684;<code>Uint8Array&#x5BF9;&#x8C61;&#x7EE7;&#x627F;&#x81EA;</code> <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/prototype" title="TypedArray.prototype&#x5C5E;&#x6027;&#x8868;&#x793A;TypedArray&#x6784;&#x9020;&#x5668;&#x7684;&#x539F;&#x578B;."><code>%TypedArray%.prototype</code></a>.</p>

<h3 id="&#x5C5E;&#x6027;_2">&#x5C5E;&#x6027;</h3>

<dl>
 <dt><code>Uint8Array.prototype.constructor</code></dt>
 <dd>&#x8FD4;&#x56DE;&#x521B;&#x5EFA;&#x5B9E;&#x4F8B;&#x5C5E;&#x6027;&#x7684;&#x51FD;&#x6570;&#xFF0C;&#x9ED8;&#x8BA4;&#x4E3A;&#xA0;<code>Uint8Array</code>&#xA0;&#x6784;&#x9020;&#x5668;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/buffer" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Uint8Array.prototype.buffer</code></a> <span class="inlineIndicator readOnly readOnlyInline" title="&#x8BE5;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x65E0;&#x6CD5;&#x66F4;&#x6539;">&#x53EA;&#x8BFB; </span></dt>
 <dd>&#x8FD4;&#x56DE;&#x7531;&#xA0;<code>Uint8Array</code>&#x5F15;&#x7528;&#x7684; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x62E5;&#x6709;&#x6307;&#x5B9A;&#x5927;&#x5C0F;&#x7684;ArrayBuffer&#x5BF9;&#x8C61;&#x3002;&#x5B83;&#x7684;&#x5185;&#x5BB9;&#x90FD;&#x88AB;&#x521D;&#x59CB;&#x5316;&#x4E3A;0&#x3002;"><code>ArrayBuffer</code></a> &#xFF0C;&#x5728;&#x6784;&#x9020;&#x65F6;&#x671F;&#x56FA;&#x5B9A;&#xFF0C;&#x6240;&#x4EE5;&#x662F;<strong>&#x53EA;&#x8BFB;</strong>&#x7684;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteLength" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Uint8Array.prototype.byteLength</code></a> <span class="inlineIndicator readOnly readOnlyInline" title="&#x8BE5;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x65E0;&#x6CD5;&#x66F4;&#x6539;">&#x53EA;&#x8BFB; </span></dt>
 <dd>&#x8FD4;&#x56DE;<code>Uint8Array</code>&#x957F;&#x5EA6;&#xFF08;&#x5B57;&#x8282;&#x6570;&#xFF09;&#x3002;&#x5728;&#x6784;&#x9020;&#x65F6;&#x671F;&#x56FA;&#x5B9A;&#xFF0C;&#x6240;&#x4EE5;&#x662F; <strong>&#x53EA;&#x8BFB;&#x7684;</strong>&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Uint8Array.prototype.byteOffset</code></a> <span class="inlineIndicator readOnly readOnlyInline" title="&#x8BE5;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x65E0;&#x6CD5;&#x66F4;&#x6539;">&#x53EA;&#x8BFB; </span></dt>
 <dd>&#x8FD4;&#x56DE;<code>Uint8Array</code> &#x8DDD;&#x79BB;&#x5176; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x62E5;&#x6709;&#x6307;&#x5B9A;&#x5927;&#x5C0F;&#x7684;ArrayBuffer&#x5BF9;&#x8C61;&#x3002;&#x5B83;&#x7684;&#x5185;&#x5BB9;&#x90FD;&#x88AB;&#x521D;&#x59CB;&#x5316;&#x4E3A;0&#x3002;"><code>ArrayBuffer</code></a> &#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x7684;&#x504F;&#x79FB;&#xFF08;&#x5B57;&#x8282;&#x6570;&#xFF09;&#x3002;&#x5728;&#x6784;&#x9020;&#x65F6;&#x671F;&#x56FA;&#x5B9A;&#xFF0C;&#x6240;&#x4EE5;&#x662F; <strong>&#x53EA;&#x8BFB;&#x7684;</strong>&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Uint8Array.prototype.length</code></a> <span class="inlineIndicator readOnly readOnlyInline" title="&#x8BE5;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x65E0;&#x6CD5;&#x66F4;&#x6539;">&#x53EA;&#x8BFB; </span></dt>
 <dd>&#x8FD4;&#x56DE;&#x4FDD;&#x5B58;&#x5728; <code>Uint8Array</code>&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x6570;&#x91CF;&#x3002; &#x5728;&#x6784;&#x9020;&#x65F6;&#x671F;&#x56FA;&#x5B9A;&#xFF0C;&#x6240;&#x4EE5;&#x662F; <strong>&#x53EA;&#x8BFB;&#x7684;</strong>&#x3002;</dd>
</dl>

<h3 id="&#x65B9;&#x6CD5;_2">&#x65B9;&#x6CD5;</h3>

<dl>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Uint8Array.prototype.copyWithin()</code></a></dt>
 <dd>&#x590D;&#x5236;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x5E8F;&#x5217;&#xFF0C;&#x8BF7;&#x53C2;&#x89C1; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin" title="copyWithin() &#x65B9;&#x6CD5;&#x4F1A;&#x6D45;&#x62F7;&#x8D1D;&#x6570;&#x7EC4;&#x7684;&#x90E8;&#x5206;&#x5143;&#x7D20;&#x5230;&#x540C;&#x4E00;&#x6570;&#x7EC4;&#x7684;&#x4E0D;&#x540C;&#x4F4D;&#x7F6E;&#xFF0C;&#x4E14;&#x4E0D;&#x6539;&#x53D8;&#x6570;&#x7EC4;&#x7684;&#x5927;&#x5C0F;&#xFF0C;&#x8FD4;&#x56DE;&#x8BE5;&#x6570;&#x7EC4;&#x3002;"><code>Array.prototype.copyWithin()</code></a>&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/entries" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Uint8Array.prototype.entries()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x65B0;&#x7684;<code>Array Iterator</code> &#x5BF9;&#x8C61;&#xFF0C;&#x542B;&#x6709;&#x6570;&#x7EC4;&#x4E2D;&#x6BCF;&#x4E2A;&#x4E0B;&#x6807;&#x5904;&#x7684;&#x952E;&#x503C;&#x5BF9;&#x3002;&#x8BF7;&#x53C2;&#x89C1;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/entries" title="entries() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#xA0;Array Iterator &#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x5305;&#x542B;&#x6570;&#x7EC4;&#x4E2D;&#x6BCF;&#x4E00;&#x4E2A;&#x7D22;&#x5F15;&#x7684;&#x952E;&#x503C;&#x5BF9;&#x3002;"><code>Array.prototype.entries()</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/every" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Uint8Array.prototype.every()</code></a></dt>
 <dd>&#x6D4B;&#x8BD5;&#x6570;&#x7EC4;&#x4E2D;&#x6240;&#x6709;&#x5143;&#x7D20;&#x662F;&#x5426;&#x90FD;&#x80FD;&#x901A;&#x8FC7;&#x7531;&#x51FD;&#x6570;&#x63D0;&#x4F9B;&#x7684;&#x6D4B;&#x8BD5;&#x3002;&#x8BF7;&#x53C2;&#x89C1; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every" title="every() &#x65B9;&#x6CD5;&#x6D4B;&#x8BD5;&#x6570;&#x7EC4;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x662F;&#x5426;&#x90FD;&#x901A;&#x8FC7;&#x4E86;&#x6307;&#x5B9A;&#x51FD;&#x6570;&#x7684;&#x6D4B;&#x8BD5;&#x3002;"><code>Array.prototype.every()</code></a>&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/fill" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Uint8Array.prototype.fill()</code></a></dt>
 <dd>&#x4F7F;&#x7528;&#x9759;&#x6001;&#x503C;&#x586B;&#x5145;&#x4ECE;&#x8D77;&#x59CB;&#x4E0B;&#x6807;&#x5230;&#x7EC8;&#x6B62;&#x4E0B;&#x6807;&#x7684;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x3002;&#x8BF7;&#x53C2;&#x89C1; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill" title="The&#xA0;fill()&#xA0;&#x65B9;&#x6CD5;&#x5C06;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x4ECE;&#x5F00;&#x59CB;&#x7D22;&#x5F15;&#x586B;&#x5145;&#x5230;&#x5177;&#x6709;&#x9759;&#x6001;&#x503C;&#x7684;&#x7ED3;&#x675F;&#x7D22;&#x5F15;"><code>Array.prototype.fill()</code></a>&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/filter" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Uint8Array.prototype.filter()</code></a></dt>
 <dd>&#x521B;&#x5EFA;&#x65B0;&#x7684;&#x6570;&#x7EC4;&#xFF0C;&#x542B;&#x6709;&#x6570;&#x7EC4;&#x4E2D;&#x7ED9;&#x5B9A;&#x8FC7;&#x6EE4;&#x5668;&#x8FD4;&#x56DE; true &#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x3002;&#x8BF7;&#x53C2;&#x89C1;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" title="filter()&#xA0;&#x65B9;&#x6CD5;&#x4F7F;&#x7528;&#x6307;&#x5B9A;&#x7684;&#x51FD;&#x6570;&#x6D4B;&#x8BD5;&#x6240;&#x6709;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x6240;&#x6709;&#x901A;&#x8FC7;&#x6D4B;&#x8BD5;&#x7684;&#x5143;&#x7D20;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x3002;"><code>Array.prototype.filter()</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/find" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Uint8Array.prototype.find()</code></a></dt>
 <dd>&#x5982;&#x679C;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x6EE1;&#x8DB3;&#x63D0;&#x4F9B;&#x7684;&#x6D4B;&#x8BD5;&#x51FD;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x627E;&#x5230;&#x7684;&#x503C;&#xFF0C;&#x5982;&#x679C;&#x6CA1;&#x6709;&#x627E;&#x5230;&#x5219;&#x8FD4;&#x56DE; <code>undefined</code>&#x3002;&#x8BF7;&#x53C2;&#x89C1; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find" title="find()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x4E2D;&#x6EE1;&#x8DB3;&#x63D0;&#x4F9B;&#x7684;&#x6D4B;&#x8BD5;&#x51FD;&#x6570;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x503C;&#x3002;&#x5426;&#x5219;&#x8FD4;&#x56DE;&#xA0;undefined&#x3002;"><code>Array.prototype.find()</code></a>&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Uint8Array.prototype.findIndex()</code></a></dt>
 <dd>&#x5982;&#x679C;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x6EE1;&#x8DB3;&#x63D0;&#x4F9B;&#x7684;&#x6D4B;&#x8BD5;&#x51FD;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x627E;&#x5230;&#x7684;&#x4E0B;&#x6807;&#xFF0C;&#x5982;&#x679C;&#x6CA1;&#x6709;&#x627E;&#x5230;&#x5219;&#x8FD4;&#x56DE; -1&#x3002;&#x8BF7;&#x53C2;&#x89C1; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex" title="findIndex()&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x4E2D;&#x6EE1;&#x8DB3;&#x63D0;&#x4F9B;&#x7684;&#x6D4B;&#x8BD5;&#x51FD;&#x6570;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x7D22;&#x5F15;&#x3002;&#x5426;&#x5219;&#x8FD4;&#x56DE;-1&#x3002;"><code>Array.prototype.findIndex()</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/forEach" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Uint8Array.prototype.forEach()</code></a></dt>
 <dd>&#x5BF9;&#x6570;&#x7EC4;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x8C03;&#x7528;&#x5B57;&#x7B26;&#x4E32; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" title="forEach() &#x65B9;&#x6CD5;&#x5BF9;&#x6570;&#x7EC4;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x63D0;&#x4F9B;&#x7684;&#x51FD;&#x6570;(&#x56DE;&#x8C03;&#x51FD;&#x6570;)&#x3002;"><code>Array.prototype.forEach()</code></a>&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Uint8Array.prototype.includes()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></dt>
 <dd>&#x5224;&#x65AD;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x662F;&#x5426;&#x5305;&#x542B;&#x7279;&#x5B9A;&#x503C;&#xFF0C;&#x5982;&#x679C;&#x5305;&#x542B;&#x8FD4;&#x56DE; <code>true</code>&#xFF0C;&#x5426;&#x5219;&#x8FD4;&#x56DE;<code>false</code>&#x3002;&#x53E6;&#x89C1;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes" title="includes() &#x65B9;&#x6CD5;&#x7528;&#x6765;&#x5224;&#x65AD;&#x5F53;&#x524D;&#x6570;&#x7EC4;&#x662F;&#x5426;&#x5305;&#x542B;&#x67D0;&#x6307;&#x5B9A;&#x7684;&#x503C;&#xFF0C;&#x5982;&#x679C;&#x662F;&#xFF0C;&#x5219;&#x8FD4;&#x56DE; true&#xFF0C;&#x5426;&#x5219;&#x8FD4;&#x56DE; false&#x3002;"><code>Array.prototype.includes()</code></a>&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf" title="indexOf() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x5728;&#x7C7B;&#x578B;&#x6570;&#x7EC4;&#x4E2D;&#x53EF;&#x4EE5;&#x627E;&#x5230;&#x7ED9;&#x5B9A;&#x5143;&#x7D20;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x7D22;&#x5F15;&#xFF0C;&#x5982;&#x679C;&#x4E0D;&#x5B58;&#x5728;&#xFF0C;&#x5219;&#x8FD4;&#x56DE;-1&#x3002; &#x65B9;&#x6CD5;&#x5177;&#x6709;&#x4E0E; Array.prototype.indexOf() &#x76F8;&#x540C;&#x7684;&#x7B97;&#x6CD5;&#x3002; TypedArray&#x662F;&#x8FD9;&#x91CC;&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x7C7B;&#x578B;&#x4E4B;&#x4E00;&#x3002;"><code>Uint8Array.prototype.indexOf()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x4E2D;&#x7B49;&#x4E8E;&#x7279;&#x5B9A;&#x503C;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#xFF08;&#x4E0B;&#x6807;&#x6700;&#x5C0F;&#xFF09;&#xFF0C;&#x5982;&#x679C;&#x6CA1;&#x6709;&#x627E;&#x5230;&#x5219;&#x8FD4;&#x56DE; -1&#xFF0C;&#x8BF7;&#x53C2;&#x89C1; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf" title="indexOf()&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x5728;&#x6570;&#x7EC4;&#x4E2D;&#x53EF;&#x4EE5;&#x627E;&#x5230;&#x7ED9;&#x5B9A;&#x5143;&#x7D20;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x7D22;&#x5F15;&#xFF0C;&#x5982;&#x679C;&#x4E0D;&#x5B58;&#x5728;&#xFF0C;&#x5219;&#x8FD4;&#x56DE;-1&#x3002;"><code>Array.prototype.indexOf()</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/join" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Uint8Array.prototype.join()</code></a></dt>
 <dd>&#x5C06;&#x6570;&#x7EC4;&#x4E2D;&#x6240;&#x6709;&#x5143;&#x7D20;&#x8FDE;&#x63A5;&#x4E3A;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x8BF7;&#x53C2;&#x89C1; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join" title="join() &#x65B9;&#x6CD5;&#x5C06;&#x6570;&#x7EC4;&#xFF08;&#x6216;&#x4E00;&#x4E2A;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#xFF09;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x8FDE;&#x63A5;&#x5230;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x3002;"><code>Array.prototype.join()</code></a>&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/keys" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Uint8Array.prototype.keys()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x65B0;&#x7684;<code>Array Iterator</code> &#xFF0C;&#x542B;&#x6709;&#x6570;&#x7EC4;&#x4E2D;&#x6BCF;&#x4E2A;&#x4E0B;&#x6807;&#x7684;&#x952E;&#xFF0C;&#x8BF7;&#x53C2;&#x89C1; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys" title="keys()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684;Array&#x8FED;&#x4EE3;&#x5668;&#xFF0C;&#x5B83;&#x5305;&#x542B;&#x6570;&#x7EC4;&#x4E2D;&#x6BCF;&#x4E2A;&#x7D22;&#x5F15;&#x7684;&#x952E;&#x3002;"><code>Array.prototype.keys()</code></a>&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Uint8Array.prototype.lastIndexOf()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x4E2D;&#x7B49;&#x4E8E;&#x7279;&#x5B9A;&#x503C;&#x7684;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#xFF08;&#x4E0B;&#x6807;&#x6700;&#x5927;&#xFF09;&#xFF0C;&#x5982;&#x679C;&#x6CA1;&#x6709;&#x627E;&#x5230;&#x5219;&#x8FD4;&#x56DE; -1&#xFF0C;&#x8BF7;&#x53C2;&#x89C1; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf" title="lastIndexOf() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x5143;&#x7D20;&#xFF08;&#x4E5F;&#x5373;&#x6709;&#x6548;&#x7684; JavaScript &#x503C;&#x6216;&#x53D8;&#x91CF;&#xFF09;&#x5728;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x7684;&#x7D22;&#x5F15;&#xFF0C;&#x5982;&#x679C;&#x4E0D;&#x5B58;&#x5728;&#x5219;&#x8FD4;&#x56DE; -1&#x3002;&#x4ECE;&#x6570;&#x7EC4;&#x7684;&#x540E;&#x9762;&#x5411;&#x524D;&#x67E5;&#x627E;&#xFF0C;&#x4ECE; fromIndex &#x5904;&#x5F00;&#x59CB;&#x3002;"><code>Array.prototype.lastIndexOf()</code></a>&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Uint8Array.prototype.map()</code></a></dt>
 <dd>&#x4F7F;&#x7528;&#x5728;&#x8BE5;&#x6570;&#x7EC4;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x4E0A;&#x8C03;&#x7528;&#x51FD;&#x6570;&#x7684;&#x7ED3;&#x679C;&#x521B;&#x5EFA;&#x65B0;&#x6570;&#x7EC4;&#xFF0C;&#x8BF7;&#x53C2;&#x89C1;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map" title="map() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7531;&#x539F;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x65B9;&#x6CD5;&#x540E;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x7EC4;&#x6210;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x3002;"><code>Array.prototype.map()</code></a>&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/move" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Uint8Array.prototype.move()</code></a> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> <span class="inlineIndicator unimplemented unimplementedInline">&#x672A;&#x5B9E;&#x73B0;</span></dt>
 <dd><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Uint8Array.prototype.copyWithin()</code></a>&#x7684;&#x4E4B;&#x524D;&#x7684;&#x975E;&#x6807;&#x51C6;&#x7248;&#x672C;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduce" title="reduce()&#xA0;&#x65B9;&#x6CD5;&#x63A5;&#x53D7;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x4F5C;&#x4E3A;&#x53C2;&#x6570;&#xFF0C;&#x8FD9;&#x4E2A;&#x51FD;&#x6570;&#x4F5C;&#x4E3A;&#x4E00;&#x4E2A;&#x7D2F;&#x52A0;&#x5668;&#xFF0C;&#x4ECE;&#x5DE6;&#x5230;&#x53F3;&#x904D;&#x5386;&#x6574;&#x4E2A;&#x7C7B;&#x578B;&#x6570;&#x7EC4;&#xFF0C;&#x6700;&#x540E;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5355;&#x4E00;&#x7684;&#x503C;. &#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x548C;Array.prototype.reduce()&#x4F7F;&#x7528;&#x4E86;&#x540C;&#x6837;&#x7684;&#x7B97;&#x6CD5;. TypedArray&#xA0;&#x662F;&#x4E00;&#x4E2A;&#xA0;&#x7C7B;&#x578B;&#x6570;&#x7EC4;."><code>Uint8Array.prototype.reduce()</code></a></dt>
 <dd>&#x5BF9;&#x7D2F;&#x52A0;&#x5668;&#x548C;&#x6570;&#x7EC4;&#x7684;&#x6BCF;&#x4E2A;&#x503C;&#x5E94;&#x7528;&#x51FD;&#x6570;&#xFF08;&#x4ECE;&#x5DE6;&#x5230;&#x53F3;&#xFF09;&#xFF0C;&#x4F7F;&#x5176;&#x5F52;&#x7EA6;&#x4E3A;&#x5355;&#x4E00;&#x7684;&#x503C;&#xFF0C; &#x53E6;&#x89C1; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" title="reduce()&#xA0;&#x65B9;&#x6CD5;&#x5BF9;&#x7D2F;&#x52A0;&#x5668;&#x548C;&#x6570;&#x7EC4;&#x7684;&#x6BCF;&#x4E2A;&#x503C;&#x5E94;&#x7528;&#x4E00;&#x4E2A;&#x51FD;&#x6570; (&#x4ECE;&#x5DE6;&#x5230;&#x53F3;)&#xFF0C;&#x4EE5;&#x5C06;&#x5176;&#x51CF;&#x5C11;&#x4E3A;&#x5355;&#x4E2A;&#x503C;&#x3002;"><code>Array.prototype.reduce()</code></a>&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduceRight" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Uint8Array.prototype.reduceRight()</code></a></dt>
 <dd>&#x5BF9;&#x7D2F;&#x52A0;&#x5668;&#x548C;&#x6570;&#x7EC4;&#x7684;&#x6BCF;&#x4E2A;&#x503C;&#x5E94;&#x7528;&#x51FD;&#x6570;&#xFF08;&#x4ECE;&#x53F3;&#x5230;&#x5DE6;&#xFF09;&#xFF0C;&#x4F7F;&#x5176;&#x5F52;&#x7EA6;&#x4E3A;&#x5355;&#x4E00;&#x7684;&#x503C;&#xFF0C; &#x53E6;&#x89C1; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight" title="reduceRight()&#xA0;&#x65B9;&#x6CD5;&#x63A5;&#x53D7;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x4F5C;&#x4E3A;&#x7D2F;&#x52A0;&#x5668;&#xFF08;accumulator&#xFF09;&#xFF0C;&#x8BA9;&#x6BCF;&#x4E2A;&#x503C;&#xFF08;&#x4ECE;&#x53F3;&#x5230;&#x5DE6;&#xFF0C;&#x4EA6;&#x5373;&#x4ECE;&#x5C3E;&#x5230;&#x5934;&#xFF09;&#x7F29;&#x51CF;&#x4E3A;&#x4E00;&#x4E2A;&#x503C;&#x3002;&#xFF08;&#x4E0E; reduce() &#x7684;&#x6267;&#x884C;&#x65B9;&#x5411;&#x76F8;&#x53CD;&#xFF09;"><code>Array.prototype.reduceRight()</code></a>&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reverse" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Uint8Array.prototype.reverse()</code></a></dt>
 <dd>&#x7FFB;&#x8F6C;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x987A;&#x5E8F;&#xA0;&#x2014; &#x7B2C;&#x4E00;&#x4E2A;&#x53D8;&#x4E3A;&#x6700;&#x540E;&#xFF0C;&#x6700;&#x540E;&#x53D8;&#x4E3A;&#x7B2C;&#x4E00;&#x4E2A;&#x3002;&#x53E6;&#x89C1; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse" title="reverse()&#xA0;&#x65B9;&#x6CD5;&#x98A0;&#x5012;&#x6570;&#x7EC4;&#x4E2D;&#x5143;&#x7D20;&#x7684;&#x4F4D;&#x7F6E;&#x3002;&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x4F1A;&#x6210;&#x4E3A;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#xFF0C;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x4F1A;&#x6210;&#x4E3A;&#x7B2C;&#x4E00;&#x4E2A;&#x3002;"><code>Array.prototype.reverse()</code></a>&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Uint8Array.prototype.set()</code></a></dt>
 <dd>&#x5728;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x4E2D;&#x50A8;&#x5B58;&#x591A;&#x4E2A;&#x503C;&#xFF0C;&#x4ECE;&#x7279;&#x5B9A;&#x6570;&#x7EC4;&#x4E2D;&#x8BFB;&#x53D6;&#x8F93;&#x5165;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/slice" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Uint8Array.prototype.slice()</code></a></dt>
 <dd>&#x63D0;&#x53D6;&#x6570;&#x7EC4;&#x7684;&#x67D0;&#x4E2A;&#x90E8;&#x5206;&#x5E76;&#x8FD4;&#x56DE;&#x65B0;&#x7684;&#x6570;&#x7EC4;&#xFF0C;&#x8BF7;&#x53C2;&#x89C1; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" title="slice()&#xA0;&#x65B9;&#x6CD5;&#x5C06;&#x6570;&#x7EC4;&#x7684;&#x4E00;&#x90E8;&#x5206;&#x7684;&#x6D45;&#x62F7;&#x8D1D;, &#x8FD4;&#x56DE;&#x5230;&#x4ECE;&#x5F00;&#x59CB;&#x5230;&#x7ED3;&#x675F;&#xFF08;&#x7ED3;&#x675F;&#x4E0D;&#x5305;&#x62EC;&#xFF09;&#x9009;&#x62E9;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x3002;&#x539F;&#x59CB;&#x6570;&#x7EC4;&#x4E0D;&#x4F1A;&#x88AB;&#x4FEE;&#x6539;&#x3002;"><code>Array.prototype.slice()</code></a>&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/some" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Uint8Array.prototype.some()</code></a></dt>
 <dd>&#x5982;&#x679C;&#x6570;&#x7EC4;&#x4E2D;&#x81F3;&#x5C11;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x6EE1;&#x8DB3;&#x7ED9;&#x5B9A;&#x7684;&#x6D4B;&#x8BD5;&#x51FD;&#x6570;&#xFF0C;&#x5219;&#x8FD4;&#x56DE;<code>true</code>&#x3002;&#x8BF7;&#x53C2;&#x89C1;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some" title="some()&#xA0;&#x65B9;&#x6CD5;&#x6D4B;&#x8BD5;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x67D0;&#x4E9B;&#x5143;&#x7D20;&#x662F;&#x5426;&#x901A;&#x8FC7;&#x4E86;&#x6307;&#x5B9A;&#x51FD;&#x6570;&#x7684;&#x6D4B;&#x8BD5;&#x3002;"><code>Array.prototype.some()</code></a>&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/sort" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Uint8Array.prototype.sort()</code></a></dt>
 <dd>&#x539F;&#x5730;&#x6392;&#x5E8F;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x8BE5;&#x6570;&#x7EC4;&#xFF0C;&#x8BF7;&#x53C2;&#x89C1; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" title="sort() &#x65B9;&#x6CD5;&#x5728;&#x9002;&#x5F53;&#x7684;&#x4F4D;&#x7F6E;&#x5BF9;&#x6570;&#x7EC4;&#x7684;&#x5143;&#x7D20;&#x8FDB;&#x884C;&#x6392;&#x5E8F;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x3002; sort &#x6392;&#x5E8F;&#x4E0D;&#x4E00;&#x5B9A;&#x662F;&#x7A33;&#x5B9A;&#x7684;&#x3002;&#x9ED8;&#x8BA4;&#x6392;&#x5E8F;&#x987A;&#x5E8F;&#x662F;&#x6839;&#x636E;&#x5B57;&#x7B26;&#x4E32;Unicode&#x7801;&#x70B9;&#x3002;"><code>Array.prototype.sort()</code></a>&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Uint8Array.prototype.subarray()</code></a></dt>
 <dd><code>&#x4ECE;&#x7ED9;&#x5B9A;&#x7684;&#x5143;&#x7D20;&#x8D77;&#x59CB;&#x548C;&#x7EC8;&#x6B62;&#x4E0B;&#x6807;&#x8FD4;&#x56DE;&#x65B0;&#x7684;&#xA0;Uint8Array</code>&#xA0;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/values" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Uint8Array.prototype.values()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x65B0;&#x7684;&#xA0;<code>Array Iterator</code>&#xA0;&#x5BF9;&#x8C61;&#xFF0C;&#x542B;&#x6709;&#x6570;&#x7EC4;&#x6BCF;&#x4E2A;&#x4E0B;&#x6807;&#x5904;&#x7684;&#x503C;&#xFF0C;&#x8BF7;&#x53C2;&#x89C1;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/values" title="values() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#xA0;Array Iterator&#xA0;&#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x5305;&#x542B;&#x6570;&#x7EC4;&#x6BCF;&#x4E2A;&#x7D22;&#x5F15;&#x7684;&#x503C;&#x3002;"><code>Array.prototype.values()</code></a>&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toLocaleString" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Uint8Array.prototype.toLocaleString()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x8868;&#x793A;&#x6570;&#x7EC4;&#x53CA;&#x5176;&#x5143;&#x7D20;&#x7684;&#x672C;&#x5730;&#x5316;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8BF7;&#x53C2;&#x89C1;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString" title="toLocaleString() &#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x3002;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x5C06;&#x4F7F;&#x7528;&#x5404;&#x81EA;&#x7684;&#xA0;toLocaleString &#x65B9;&#x6CD5;&#x8F6C;&#x6210;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8FD9;&#x4E9B;&#x5B57;&#x7B26;&#x4E32;&#x5C06;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x7279;&#x5B9A;&#x8BED;&#x8A00;&#x73AF;&#x5883;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF08;&#x4F8B;&#x5982;&#x4E00;&#x4E2A;&#x9017;&#x53F7; &quot;,&quot;&#xFF09;&#x9694;&#x5F00;&#x3002;"><code>Array.prototype.toLocaleString()</code></a>&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toString" title="toString()&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x8868;&#x793A;&#x6307;&#x5B9A;&#x6570;&#x7EC4;&#x53CA;&#x5176;&#x5143;&#x7D20;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x7684;&#x7B97;&#x6CD5;&#x548C;Array.prototype.toString()&#x4E00;&#x6837;&#x3002;TypedArray &#x5728;&#x8FD9;&#x662F;typed array types &#x4E4B;&#x4E00;&#x3002;"><code>Uint8Array.prototype.toString()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x8868;&#x793A;&#x6570;&#x7EC4;&#x53CA;&#x5176;&#x5143;&#x7D20;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x8BF7;&#x53C2;&#x89C1;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toString" title="toString() &#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8868;&#x793A;&#x6307;&#x5B9A;&#x7684;&#x6570;&#x7EC4;&#x53CA;&#x5176;&#x5143;&#x7D20;&#x3002;"><code>Array.prototype.toString()</code></a>&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Uint8Array.prototype[@@iterator]()</code></a></dt>
 <dd><code>&#x8FD4;&#x56DE;&#x65B0;&#x7684; Array Iterator</code>&#xA0;&#x5BF9;&#x8C61;&#xFF0C;&#x5305;&#x542B;&#x6570;&#x7EC4;&#x4E2D;&#x6BCF;&#x4E2A;&#x4E0B;&#x6807;&#x5904;&#x7684;&#x503C;&#x3002;</dd>
</dl>

<h2 id="&#x4F8B;&#x5B50;">&#x4F8B;&#x5B50;</h2>

<pre class="brush: js">// &#x6765;&#x81EA;&#x957F;&#x5EA6;
var uint8 = new Uint8Array(2);
uint8[0] = 42;
console.log(uint8[0]); // 42
console.log(uint8.length); // 2
console.log(uint8.BYTES_PER_ELEMENT); // 1

// &#x6765;&#x81EA;&#x6570;&#x7EC4;
var arr = new Uint8Array([21,31]);
console.log(arr[1]); // 31

// &#x6765;&#x81EA;&#x53E6;&#x4E00;&#x4E2A; TypedArray
var x = new Uint8Array([21, 31]);
var y = new Uint8Array(x);
console.log(y[0]); // 21

// &#x6765;&#x81EA; ArrayBuffer
var buffer = new ArrayBuffer(8);
var z = new Uint8Array(buffer, 1, 4);
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
   <td><a href="https://www.khronos.org/registry/typedarray/specs/latest/#7" class="external">&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x89C4;&#x8303;</a></td>
   <td>Obsolete</td>
   <td><span><span>&#x7531; ECMAScript 6 &#x53D6;&#x4EE3;&#x3002;</span></span></td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#table-45" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">TypedArray constructors</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>ECMA &#x6807;&#x51C6;&#x4E2D;&#x7684;&#x521D;&#x59CB;&#x5B9A;&#x4E49;&#x3002;</td>
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
   <td>7.0</td>
   <td><a href="/en-US/Firefox/Releases/4" title="Released on 2011-03-22.">4.0</a> (2)</td>
   <td>10</td>
   <td>11.6</td>
   <td>5.1</td>
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
   <td>4.0</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>4.0 (2)</td>
   <td>10</td>
   <td>11.6</td>
   <td>4.2</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x5185;&#x5BB9;">&#x76F8;&#x5173;&#x5185;&#x5BB9;</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Typed_arrays" title="en/JavaScript typed arrays">JavaScript&#xA0;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;</a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x62E5;&#x6709;&#x6307;&#x5B9A;&#x5927;&#x5C0F;&#x7684;ArrayBuffer&#x5BF9;&#x8C61;&#x3002;&#x5B83;&#x7684;&#x5185;&#x5BB9;&#x90FD;&#x88AB;&#x521D;&#x59CB;&#x5316;&#x4E3A;0&#x3002;"><code>ArrayBuffer</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView" title="DataView&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x4E0E;&#x5E73;&#x53F0;&#x4E2D;&#x5B57;&#x8282;&#x5728;&#x5185;&#x5B58;&#x4E2D;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;(&#x5B57;&#x8282;&#x5E8F;)&#x65E0;&#x5173;&#x7684;&#x4ECE;ArrayBuffer&#x8BFB;&#x5199;&#x591A;&#x6570;&#x5B57;&#x7C7B;&#x578B;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;."><code>DataView</code></a></li>
</ul>
                  
                
              