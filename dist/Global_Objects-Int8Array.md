
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p><strong><code>Int8Array</code></strong> &#x7C7B;&#x578B;&#x6570;&#x7EC4;&#x4E3A;8&#x4F4D;&#x4E8C;&#x8FDB;&#x5236;&#x8865;&#x7801;&#x6709;&#x7B26;&#x53F7;&#x6574;&#x6570;&#x7684;&#x6570;&#x7EC4;. &#x521D;&#x59CB;&#x5316;&#x5185;&#x5BB9;&#x4E3A;0. &#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x6784;&#x9020;&#x5BF9;&#x8C61;&#x6765;&#x521D;&#x59CB;&#x5316;&#x4E00;&#x4E2A;Int8Array&#x5BF9;&#x8C61;, &#x4E5F;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x6807;&#x51C6;&#x7684;&#x6570;&#x7EC4;&#x8BED;&#x6CD5; (&#x5927;&#x62EC;&#x53F7;&#x8BED;&#x6CD5;&#x521D;&#x59CB;&#x5316;).</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">new Int8Array(length);
new Int8Array(typedArray);
new Int8Array(object);
new Int8Array(buffer [, byteOffset [, length]]);</pre>

<p>&#x83B7;&#x5F97;&#x6784;&#x9020;&#x5668;&#x8BED;&#x6CD5;&#x4E0E;&#x53C2;&#x6570;&#x7684;&#x66F4;&#x591A;&#x4FE1;&#x606F;&#xFF0C;&#x8BF7;&#x8BBF;&#x95EE;&#xA0;<em><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax">TypedArray</a></em>.</p>

<h2 id="&#x5C5E;&#x6027;">&#x5C5E;&#x6027;</h2>

<dl>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT" title="TypedArray.BYTES_PER_ELEMENT&#xA0;&#x5C5E;&#x6027;&#x4EE3;&#x8868;&#x4E86;&#x5F3A;&#x7C7B;&#x578B;&#x6570;&#x7EC4;&#x4E2D;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x6240;&#x5360;&#x7528;&#x7684;&#x5B57;&#x8282;&#x6570;&#x3002;"><code>Int8Array.BYTES_PER_ELEMENT</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x4E2D;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x5927;&#x5C0F;. &#x5728;<code>Int8Array&#x4E2D;&#x8FD9;&#x4E2A;&#x503C;&#x4E3A;1</code>.</dd>
 <dt>Int8Array.length</dt>
 <dd>&#x6B64;&#x5C5E;&#x6027;&#x4E3A;&#x56FA;&#x5B9A;&#x503C;&#x5C5E;&#x6027;&#xFF0C;&#x503C;&#x4E3A;3.&#x67E5;&#x770B; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype.length</code></a>&#x83B7;&#x5F97;&#x83B7;&#x53D6;&#x6570;&#x7EC4;&#x5185;&#x5143;&#x7D20;&#x4E2A;&#x6570;&#x65B9;&#x6CD5;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/name" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.name</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x6784;&#x9020;&#x5668;&#x65B9;&#x6CD5;&#x540D;&#x79F0;.&#x5728;Int8Array&#x7C7B;&#x578B;&#x4E2D;&#x6B64;&#x503C;&#x4E3A;&#xA0;&quot;Int8Array&quot;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/prototype" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype</code></a></dt>
 <dd><em>TypedArray</em>&#xA0;&#x5BF9;&#x8C61;&#x7684;&#x6784;&#x9020;&#x539F;&#x578B;&#x3002;</dd>
</dl>

<h2 id="&#x65B9;&#x6CD5;">&#x65B9;&#x6CD5;</h2>

<dl>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.from()</code></a></dt>
 <dd>&#x4ECE;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x6216;&#x8FED;&#x4EE3;&#x5668;&#x751F;&#x6210;int8Array&#x6570;&#x7EC4;&#x5BF9;&#x8C61;. &#x53C2;&#x7167;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from" title="Array.from() &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x5C06;&#x4E00;&#x4E2A;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x6216;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#x8F6C;&#x6362;&#x6210;&#x771F;&#x6B63;&#x7684;&#x6570;&#x7EC4;&#x3002;"><code>Array.from()</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/of" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.of()</code></a></dt>
 <dd>&#x4EE5;&#x591A;&#x4E2A;&#x53C2;&#x6570;&#x6784;&#x9020;Int8Array&#x5BF9;&#x8C61;&#xFF0C;&#xA0;&#x53C2;&#x7167; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/of" title="Array.of() &#x65B9;&#x6CD5;&#x4F1A;&#x5C06;&#x5B83;&#x7684;&#x4EFB;&#x610F;&#x7C7B;&#x578B;&#x7684;&#x591A;&#x4E2A;&#x53C2;&#x6570;&#x653E;&#x5728;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x91CC;&#x5E76;&#x8FD4;&#x56DE;&#x3002;"><code>Array.of()</code></a>.</dd>
</dl>

<h2 id="Int8Array_&#x539F;&#x578B;&#x65B9;&#x6CD5;"><code>Int8Array</code> &#x539F;&#x578B;&#x65B9;&#x6CD5;</h2>

<p><code>Int8Array&#x6240;&#x6709;&#x65B9;&#x6CD5;&#x7EE7;&#x627F;&#x81EA;</code>&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/prototype" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>%TypedArray%.prototype</code></a>.</p>

<h3 id="&#x5C5E;&#x6027;_2">&#x5C5E;&#x6027;</h3>

<dl>
 <dt><code>Int8Array.prototype.constructor</code></dt>
 <dd>&#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x4F1A;&#x8FD4;&#x56DE;&#x5BF9;&#x8C61;&#x7684;&#x6784;&#x9020;&#x539F;&#x578B;. &#x9ED8;&#x8BA4;&#x4E3A;<code>Int8Array&#x6784;&#x9020;&#x51FD;&#x6570;</code>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/buffer" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype.buffer</code></a> <span class="inlineIndicator readOnly readOnlyInline" title="&#x8BE5;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x65E0;&#x6CD5;&#x66F4;&#x6539;">&#x53EA;&#x8BFB; </span></dt>
 <dd>Returns the <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="ArrayBuffer&#xA0;&#xFF08;&#x7F13;&#x51B2;&#x6570;&#x7EC4;&#xFF09;&#x662F;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5448;&#x73B0;&#x901A;&#x7528;&#x3001;&#x56FA;&#x5B9A;&#x957F;&#x5EA6;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#x7684;&#x7C7B;&#x578B;&#x3002;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x6784;&#x9020;&#x5E76;&#x586B;&#x5145;&#xA0;ArrayBuffer &#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x800C;&#x5E94;&#x8BE5;&#x5148;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#xA0;ArrayBufferView&#xA0;&#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x7528;&#x5177;&#x4F53;&#x7684;&#x683C;&#x5F0F;&#x6765;&#x5448;&#x73B0;&#xA0;ArrayBuffer&#xA0;&#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x6B64;&#x5BF9;&#x8C61;&#x6765;&#x8BFB;&#x5199;&#xA0;ArrayBuffer&#xA0;&#x7684;&#x5185;&#x5BB9;&#x3002;"><code>ArrayBuffer</code></a> referenced by the <code>Int8Array</code> Fixed at construction time and thus <strong>read only</strong>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteLength" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype.byteLength</code></a> <span class="inlineIndicator readOnly readOnlyInline" title="&#x8BE5;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x65E0;&#x6CD5;&#x66F4;&#x6539;">&#x53EA;&#x8BFB; </span></dt>
 <dd>Returns the length (in bytes) of the <code>Int8Array</code> from the start of its <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="ArrayBuffer&#xA0;&#xFF08;&#x7F13;&#x51B2;&#x6570;&#x7EC4;&#xFF09;&#x662F;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5448;&#x73B0;&#x901A;&#x7528;&#x3001;&#x56FA;&#x5B9A;&#x957F;&#x5EA6;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#x7684;&#x7C7B;&#x578B;&#x3002;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x6784;&#x9020;&#x5E76;&#x586B;&#x5145;&#xA0;ArrayBuffer &#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x800C;&#x5E94;&#x8BE5;&#x5148;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#xA0;ArrayBufferView&#xA0;&#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x7528;&#x5177;&#x4F53;&#x7684;&#x683C;&#x5F0F;&#x6765;&#x5448;&#x73B0;&#xA0;ArrayBuffer&#xA0;&#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x6B64;&#x5BF9;&#x8C61;&#x6765;&#x8BFB;&#x5199;&#xA0;ArrayBuffer&#xA0;&#x7684;&#x5185;&#x5BB9;&#x3002;"><code>ArrayBuffer</code></a>. Fixed at construction time and thus <strong>read only.</strong></dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype.byteOffset</code></a> <span class="inlineIndicator readOnly readOnlyInline" title="&#x8BE5;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x65E0;&#x6CD5;&#x66F4;&#x6539;">&#x53EA;&#x8BFB; </span></dt>
 <dd>Returns the offset (in bytes) of the <code>Int8Array</code> from the start of its <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="ArrayBuffer&#xA0;&#xFF08;&#x7F13;&#x51B2;&#x6570;&#x7EC4;&#xFF09;&#x662F;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5448;&#x73B0;&#x901A;&#x7528;&#x3001;&#x56FA;&#x5B9A;&#x957F;&#x5EA6;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#x7684;&#x7C7B;&#x578B;&#x3002;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x6784;&#x9020;&#x5E76;&#x586B;&#x5145;&#xA0;ArrayBuffer &#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x800C;&#x5E94;&#x8BE5;&#x5148;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#xA0;ArrayBufferView&#xA0;&#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x7528;&#x5177;&#x4F53;&#x7684;&#x683C;&#x5F0F;&#x6765;&#x5448;&#x73B0;&#xA0;ArrayBuffer&#xA0;&#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x6B64;&#x5BF9;&#x8C61;&#x6765;&#x8BFB;&#x5199;&#xA0;ArrayBuffer&#xA0;&#x7684;&#x5185;&#x5BB9;&#x3002;"><code>ArrayBuffer</code></a>. Fixed at construction time and thus <strong>read only.</strong></dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype.length</code></a> <span class="inlineIndicator readOnly readOnlyInline" title="&#x8BE5;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x65E0;&#x6CD5;&#x66F4;&#x6539;">&#x53EA;&#x8BFB; </span></dt>
 <dd>Returns the number of elements hold in the <code>Int8Array</code>. Fixed at construction time and thus <strong>read only.</strong></dd>
</dl>

<h3 id="&#x65B9;&#x6CD5;_2">&#x65B9;&#x6CD5;</h3>

<dl>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype.copyWithin()</code></a></dt>
 <dd>Copies a sequence of array elements within the array. See also <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin" title="copyWithin() &#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x5728;&#x6570;&#x7EC4;&#x5185;&#x7684;&#x66FF;&#x6362;&#x64CD;&#x4F5C;&#xFF0C;&#x5373;&#x66FF;&#x6362;&#x5143;&#x7D20;&#x4E0E;&#x88AB;&#x66FF;&#x6362;&#x5143;&#x7D20;&#x90FD;&#x662F;&#x6570;&#x7EC4;&#x5185;&#x7684;&#x5143;&#x7D20;&#x3002;"><code>Array.prototype.copyWithin()</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/entries" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype.entries()</code></a></dt>
 <dd>Returns a new <code>Array Iterator</code> object that contains the key/value pairs for each index in the array. See also <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/entries" title="entries() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#xA0;Array Iterator &#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x5305;&#x542B;&#x6570;&#x7EC4;&#x4E2D;&#x6BCF;&#x4E00;&#x4E2A;&#x7D22;&#x5F15;&#x7684;&#x952E;&#x503C;&#x5BF9;&#x3002;"><code>Array.prototype.entries()</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/every" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype.every()</code></a></dt>
 <dd>Tests whether all elements in the array pass the test provided by a function. See also <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every" title="every() &#x65B9;&#x6CD5;&#x6D4B;&#x8BD5;&#x6570;&#x7EC4;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x662F;&#x5426;&#x90FD;&#x901A;&#x8FC7;&#x4E86;&#x6307;&#x5B9A;&#x51FD;&#x6570;&#x7684;&#x6D4B;&#x8BD5;&#x3002;"><code>Array.prototype.every()</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/fill" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype.fill()</code></a></dt>
 <dd>Fills all the elements of an array from a start index to an end index with a static value. See also <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill" title="&#x4F7F;&#x7528;&#xA0;fill() &#x65B9;&#x6CD5;&#xFF0C;&#x53EF;&#x4EE5;&#x5C06;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x4E2D;&#x6307;&#x5B9A;&#x533A;&#x95F4;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x7684;&#x503C;, &#x90FD;&#x66FF;&#x6362;&#x6210;&#x6216;&#x8005;&#x8BF4;&#x586B;&#x5145;&#x6210;&#x4E3A;&#x67D0;&#x4E2A;&#x56FA;&#x5B9A;&#x7684;&#x503C;&#x3002;"><code>Array.prototype.fill()</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/filter" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype.filter()</code></a></dt>
 <dd>Creates a new array with all of the elements of this array for which the provided filtering function returns true. See also <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" title="filter()&#xA0;&#x65B9;&#x6CD5;&#x4F7F;&#x7528;&#x6307;&#x5B9A;&#x7684;&#x51FD;&#x6570;&#x6D4B;&#x8BD5;&#x6240;&#x6709;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x6240;&#x6709;&#x901A;&#x8FC7;&#x6D4B;&#x8BD5;&#x7684;&#x5143;&#x7D20;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x3002;"><code>Array.prototype.filter()</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/find" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype.find()</code></a></dt>
 <dd>Returns the found value in the array, if an element in the array satisfies the provided testing function or <code>undefined</code> if not found. See also <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find" title="find()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x4E2D;&#x6EE1;&#x8DB3;&#x6D4B;&#x8BD5;&#x6761;&#x4EF6;&#x7684;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x5982;&#x679C;&#x6CA1;&#x6709;&#x6EE1;&#x8DB3;&#x6761;&#x4EF6;&#x7684;&#x5143;&#x7D20;&#xFF0C;&#x5219;&#x8FD4;&#x56DE;&#xA0;"><code>Array.prototype.find()</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype.findIndex()</code></a></dt>
 <dd>Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found. See also <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex" title="findIndex()&#x65B9;&#x6CD5;&#x7528;&#x6765;&#x67E5;&#x627E;&#x6570;&#x7EC4;&#x4E2D;&#x67D0;&#x6307;&#x5B9A;&#x5143;&#x7D20;&#x7684;&#x7D22;&#x5F15;, &#x5982;&#x679C;&#x627E;&#x4E0D;&#x5230;&#x6307;&#x5B9A;&#x7684;&#x5143;&#x7D20;, &#x5219;&#x8FD4;&#x56DE; -1."><code>Array.prototype.findIndex()</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/forEach" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype.forEach()</code></a></dt>
 <dd>Calls a function for each element in the array. See also <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" title="forEach() &#x65B9;&#x6CD5;&#x8BA9;&#x6570;&#x7EC4;&#x7684;&#x6BCF;&#x4E00;&#x9879;&#x90FD;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x7ED9;&#x5B9A;&#x7684;&#x51FD;&#x6570;&#x3002;"><code>Array.prototype.forEach()</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype.includes()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></dt>
 <dd>Determines whether a typed array includes a certain element, returning <code>true</code> or <code>false</code> as appropriate. See also <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes" title="includes() &#x65B9;&#x6CD5;&#x7528;&#x6765;&#x5224;&#x65AD;&#x5F53;&#x524D;&#x6570;&#x7EC4;&#x662F;&#x5426;&#x5305;&#x542B;&#x67D0;&#x6307;&#x5B9A;&#x7684;&#x503C;&#xFF0C;&#x5982;&#x679C;&#x662F;&#xFF0C;&#x5219;&#x8FD4;&#x56DE; true&#xFF0C;&#x5426;&#x5219;&#x8FD4;&#x56DE; false&#x3002;"><code>Array.prototype.includes()</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype.indexOf()</code></a></dt>
 <dd>Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found. See also <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf" title="indexOf()&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x7ED9;&#x5B9A;&#x5143;&#x7D20;&#x80FD;&#x627E;&#x5728;&#x6570;&#x7EC4;&#x4E2D;&#x627E;&#x5230;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x7D22;&#x5F15;&#x503C;&#xFF0C;&#x5426;&#x5219;&#x8FD4;&#x56DE;-1&#x3002;"><code>Array.prototype.indexOf()</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/join" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype.join()</code></a></dt>
 <dd>Joins all elements of an array into a string. See also <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join" title="join() &#x65B9;&#x6CD5;&#x5C06;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x8FDE;&#x63A5;&#x6210;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x3002;"><code>Array.prototype.join()</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/keys" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype.keys()</code></a></dt>
 <dd>Returns a new <code>Array Iterator</code> that contains the keys for each index in the array. See also <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys" title="&#x6570;&#x7EC4;&#x7684; keys() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x7D22;&#x5F15;&#x7684;&#x8FED;&#x4EE3;&#x5668;&#x3002;"><code>Array.prototype.keys()</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype.lastIndexOf()</code></a></dt>
 <dd>Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found. See also <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf" title="lastIndexOf() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x5143;&#x7D20;&#xFF08;&#x4E5F;&#x5373;&#x6709;&#x6548;&#x7684; JavaScript &#x503C;&#x6216;&#x53D8;&#x91CF;&#xFF09;&#x5728;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x7684;&#x7D22;&#x5F15;&#xFF0C;&#x5982;&#x679C;&#x4E0D;&#x5B58;&#x5728;&#x5219;&#x8FD4;&#x56DE; -1&#x3002;&#x4ECE;&#x6570;&#x7EC4;&#x7684;&#x540E;&#x9762;&#x5411;&#x524D;&#x67E5;&#x627E;&#xFF0C;&#x4ECE; fromIndex &#x5904;&#x5F00;&#x59CB;&#x3002;"><code>Array.prototype.lastIndexOf()</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype.map()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7531;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x7EC4;&#x6210;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x3002;. See also <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map" title="map() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7531;&#x539F;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x65B9;&#x6CD5;&#x540E;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x7EC4;&#x6210;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x3002;"><code>Array.prototype.map()</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/move" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype.move()</code></a> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> <span class="inlineIndicator unimplemented unimplementedInline">&#x672A;&#x5B9E;&#x73B0;</span></dt>
 <dd><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype.copyWithin()</code></a> &#x65E9;&#x671F;&#x7684;&#x4E0D;&#x6807;&#x51C6;&#x5B9A;&#x4E49;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduce" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype.reduce()</code></a></dt>
 <dd>&#x4ECE;&#x5DE6;&#x5230;&#x53F3;&#x4E3A;&#x6BCF;&#x4E2A;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#xFF0C;&#x5E76;&#x628A;&#x4E0A;&#x6B21;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x653E;&#x5728;&#x4E00;&#x4E2A;&#x6682;&#x5B58;&#x5668;&#x4E2D;&#x4F20;&#x7ED9;&#x4E0B;&#x6B21;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x6700;&#x540E;&#x4E00;&#x6B21;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x3002;&#x53C2;&#x7167; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" title="reduce()&#xA0;&#x65B9;&#x6CD5;&#x63A5;&#x6536;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x4F5C;&#x4E3A;&#x7D2F;&#x52A0;&#x5668;&#xFF08;accumulator&#xFF09;&#xFF0C;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x503C;&#xFF08;&#x4ECE;&#x5DE6;&#x5230;&#x53F3;&#xFF09;&#x5F00;&#x59CB;&#x5408;&#x5E76;&#xFF0C;&#x6700;&#x7EC8;&#x4E3A;&#x4E00;&#x4E2A;&#x503C;&#x3002;"><code>Array.prototype.reduce()</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduceRight" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype.reduceRight()</code></a></dt>
 <dd>&#x4ECE;&#x53F3;&#x5230;&#x5DE6;&#x4E3A;&#x6BCF;&#x4E2A;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#xFF0C;&#x5E76;&#x628A;&#x4E0A;&#x6B21;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x653E;&#x5728;&#x4E00;&#x4E2A;&#x6682;&#x5B58;&#x5668;&#x4E2D;&#x4F20;&#x7ED9;&#x4E0B;&#x6B21;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x6700;&#x540E;&#x4E00;&#x6B21;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x3002;&#x53C2;&#x7167; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight" title="reduceRight()&#xA0;&#x65B9;&#x6CD5;&#x63A5;&#x53D7;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x4F5C;&#x4E3A;&#x7D2F;&#x52A0;&#x5668;&#xFF08;accumulator&#xFF09;&#xFF0C;&#x8BA9;&#x6BCF;&#x4E2A;&#x503C;&#xFF08;&#x4ECE;&#x53F3;&#x5230;&#x5DE6;&#xFF0C;&#x4EA6;&#x5373;&#x4ECE;&#x5C3E;&#x5230;&#x5934;&#xFF09;&#x7F29;&#x51CF;&#x4E3A;&#x4E00;&#x4E2A;&#x503C;&#x3002;&#xFF08;&#x4E0E; reduce() &#x7684;&#x6267;&#x884C;&#x65B9;&#x5411;&#x76F8;&#x53CD;&#xFF09;"><code>Array.prototype.reduceRight()</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reverse" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype.reverse()</code></a></dt>
 <dd>&#x98A0;&#x5012;&#x6570;&#x7EC4;&#x4E2D;&#x5143;&#x7D20;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;&#xFF0C;&#x5373;&#x539F;&#x5148;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x53D8;&#x4E3A;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#xFF0C;&#x539F;&#x5148;&#x7684;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x53D8;&#x4E3A;&#x7B2C;&#x4E00;&#x4E2A;&#x3002;&#x53C2;&#x7167;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse" title="reverse()&#xA0;&#x65B9;&#x6CD5;&#x98A0;&#x5012;&#x6570;&#x7EC4;&#x4E2D;&#x5143;&#x7D20;&#x7684;&#x4F4D;&#x7F6E;&#x3002;&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x4F1A;&#x6210;&#x4E3A;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#xFF0C;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x4F1A;&#x6210;&#x4E3A;&#x7B2C;&#x4E00;&#x4E2A;&#x3002;"><code>Array.prototype.reverse()</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype.set()</code></a></dt>
 <dd>Stores multiple values in the typed array, reading input values from a specified array.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/slice" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype.slice()</code></a></dt>
 <dd>&#x62BD;&#x53D6;&#x5F53;&#x524D;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x4E00;&#x6BB5;&#x5143;&#x7D20;&#x7EC4;&#x5408;&#x6210;&#x4E00;&#x4E2A;&#x65B0;&#x6570;&#x7EC4;&#x3002;&#x53C2;&#x7167;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" title="slice() &#x65B9;&#x6CD5;&#x628A;&#x6570;&#x7EC4;&#x4E2D;&#x4E00;&#x90E8;&#x5206;&#x7684;&#x6D45;&#x590D;&#x5236;&#xFF08;shallow copy&#xFF09;&#x5B58;&#x5165;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x4E2D;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x65B0;&#x7684;&#x6570;&#x7EC4;&#x3002;"><code>Array.prototype.slice()</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/some" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype.some()</code></a></dt>
 <dd>&#x5982;&#x679C;&#x6570;&#x7EC4;&#x4E2D;&#x81F3;&#x5C11;&#x6709;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x6EE1;&#x8DB3;&#x6D4B;&#x8BD5;&#x51FD;&#x6570;&#xFF0C;&#x5219;&#x8FD4;&#x56DE; true&#xFF0C;&#x5426;&#x5219;&#x8FD4;&#x56DE; false&#x3002;&#x53C2;&#x7167; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some" title="some()&#xA0;&#x65B9;&#x6CD5;&#x6D4B;&#x8BD5;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x67D0;&#x4E9B;&#x5143;&#x7D20;&#x662F;&#x5426;&#x901A;&#x8FC7;&#x4E86;&#x6307;&#x5B9A;&#x51FD;&#x6570;&#x7684;&#x6D4B;&#x8BD5;&#x3002;"><code>Array.prototype.some()</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/sort" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype.sort()</code></a></dt>
 <dd>&#x5BF9;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x8FDB;&#x884C;&#x6392;&#x5E8F;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x5F53;&#x524D;&#x6570;&#x7EC4;. &#x53C2;&#x7167;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" title="sort() &#x65B9;&#x6CD5;&#x5BF9;&#x6570;&#x7EC4;&#x7684;&#x5143;&#x7D20;&#x505A;&#x539F;&#x5730;&#x7684;&#x6392;&#x5E8F;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x6570;&#x7EC4;&#x3002; sort &#x53EF;&#x80FD;&#x4E0D;&#x662F;&#x7A33;&#x5B9A;&#x7684;&#x3002;&#x9ED8;&#x8BA4;&#x6309;&#x7167;&#x5B57;&#x7B26;&#x4E32;&#x7684;Unicode&#x7801;&#x4F4D;&#x70B9;&#xFF08;code point&#xFF09;&#x6392;&#x5E8F;&#x3002;"><code>Array.prototype.sort()</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype.subarray()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x4EE5;&#x7ED9;&#x5B9A;&#x7684;&#x521D;&#x59CB;&#x7ED3;&#x675F;&#x4F4D;&#x7F6E;&#x88C1;&#x526A;&#x7684;Int8Array&#x6570;&#x7EC4;.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/values" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype.values()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x8FED;&#x4EE3;&#x5668;&#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x8FED;&#x4EE3;&#x5668;&#x4F1A;&#x5305;&#x542B;&#x6240;&#x6709;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x7684;&#x503C;&#x3002;. &#x53C2;&#x7167; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/values" title="values() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#xA0;Array Iterator&#xA0;&#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x5305;&#x542B;&#x6570;&#x7EC4;&#x6BCF;&#x4E2A;&#x7D22;&#x5F15;&#x7684;&#x503C;&#x3002;"><code>Array.prototype.values()</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toLocaleString" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype.toLocaleString()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7531;&#x6240;&#x6709;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x7EC4;&#x5408;&#x800C;&#x6210;&#x7684;&#x672C;&#x5730;&#x5316;&#x540E;&#x7684;&#x5B57;&#x7B26;&#x4E32;. See also <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString" title="toLocaleString() &#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x3002;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x5C06;&#x4F7F;&#x7528;&#x5404;&#x81EA;&#x7684;&#xA0;toLocaleString &#x65B9;&#x6CD5;&#x8F6C;&#x6210;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8FD9;&#x4E9B;&#x5B57;&#x7B26;&#x4E32;&#x5C06;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x7279;&#x5B9A;&#x8BED;&#x8A00;&#x73AF;&#x5883;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF08;&#x4F8B;&#x5982;&#x4E00;&#x4E2A;&#x9017;&#x53F7; &quot;,&quot;&#xFF09;&#x9694;&#x5F00;&#x3002;"><code>Array.prototype.toLocaleString()</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toString" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype.toString()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7531;&#x6240;&#x6709;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x7EC4;&#x5408;&#x800C;&#x6210;&#x7684;&#x5B57;&#x7B26;&#x4E32;.&#x53C2;&#x7167; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toString" title="toString() &#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8868;&#x793A;&#x6307;&#x5B9A;&#x7684;&#x6570;&#x7EC4;&#x53CA;&#x5176;&#x5143;&#x7D20;&#x3002;"><code>Array.prototype.toString()</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Int8Array.prototype[@@iterator]()</code></a></dt>
 <dd>&#x6B64;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5E26;&#x6709;&#x6570;&#x7EC4;&#x5185;&#x6240;&#x6709;&#x5143;&#x7D20;&#x7684;&#x8FED;&#x4EE3;&#x5668;&#x5BF9;&#x8C61;&#xFF0C;&#x540C;Int8Array.prototype.values&#xA0;&#x3002;</dd>
</dl>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<pre class="brush: js">// &#x4EE5;&#x957F;&#x5EA6;&#x53C2;&#x6570;&#x6784;&#x9020;&#x5BF9;&#x8C61;
var int8 = new Int8Array(2);
int8[0] = 42;
console.log(int8[0]); // 42
console.log(int8.length); // 2
console.log(int8.BYTES_PER_ELEMENT); // 1

// &#x4EE5;&#x6570;&#x7EC4;&#x6784;&#x9020;&#x5BF9;&#x8C61;
var arr = new Int8Array([21,31]);
console.log(arr[1]); // 31

// &#x4ECE;&#x53E6;&#x4E00;&#x6570;&#x7EC4;&#x6784;&#x9020;&#x5BF9;&#x8C61;
var x = new Int8Array([21, 31]);
var y = new Int8Array(x);
console.log(y[0]); // 21

// &#x4ECE;ArrayBuffer&#x6784;&#x9020;&#x5BF9;&#x8C61;
var buffer = new ArrayBuffer(8);
var z = new Int8Array(buffer, 1, 4);
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x8BC4;&#x8BBA;</th>
  </tr>
  <tr>
   <td><a href="https://www.khronos.org/registry/typedarray/specs/latest/" class="external" lang="en" title="Typed Array Specification" hreflang="en">Typed Array Specification</a></td>
   <td><span class="spec-Obsolete">Obsolete</span></td>
   <td>&#x5DF2;&#x88AB; ECMAScript 6&#x53D6;&#x4EE3;&#x3002;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#table-49" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">TypedArray constructors</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>ECMA &#x6807;&#x51C6;&#x4E2D;&#x6784;&#x9020;&#x5BF9;&#x8C61;&#x65F6; new &#x5173;&#x952E;&#x5B57;&#x4E3A;&#x5FC5;&#x9700;&#x3002;</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#table-49" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">TypedArray constructors</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x652F;&#x6301;">&#x6D4F;&#x89C8;&#x5668;&#x652F;&#x6301;</h2>

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
   <th>&#x529F;&#x80FD;</th>
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
  <tr>
   <td><code>new</code> is required</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><a href="/en-US/Firefox/Releases/44" title="Released on 2016-01-26.">44</a> (44)</td>
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
   <td>4.0</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>4.0 (2)</td>
   <td>10</td>
   <td>11.6</td>
   <td>4.2</td>
  </tr>
  <tr>
   <td><code>new</code> is required</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>44.0 (44)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x517C;&#x5BB9;&#x6027;&#x8BF4;&#x660E;">&#x517C;&#x5BB9;&#x6027;&#x8BF4;&#x660E;</h2>

<p>&#x81EA; ECMAScript 2015 (ES6)&#x65BD;&#x884C;, <code>Int8Array</code> &#x9700;&#x8981;&#x4F7F;&#x7528;<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/new" title="new&#x8FD0;&#x7B97;&#x7B26;&#x7684;&#x4F5C;&#x7528;&#x662F;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5B9E;&#x4F8B;&#x3002;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x53EF;&#x4EE5;&#x662F;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x662F;&#x4E00;&#x4E9B;&#x7CFB;&#x7EDF;&#x81EA;&#x5E26;&#x7684;&#x5E26;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x5BF9;&#x8C61;&#x3002;"><code>new</code></a> &#x6784;&#x9020;. &#x4ECE;&#x5F53;&#x524D;&#x7248;&#x672C;&#x5F00;&#x59CB;&#xFF0C;&#x4E0D;&#x52A0;new&#x800C;&#x4FBF;&#x8C03;&#x7528;<code>Int8Array</code>&#xA0;&#x6784;&#x9020;&#x5668;&#x65B9;&#x6CD5;, &#x5C06;&#x62A5;&#x51FA; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;"><code>TypeError</code></a> &#x9519;&#x8BEF;.</p>

<pre class="brush: js example-bad">var dv = Int8Array([1, 2, 3]);
// TypeError: calling a builtin Int8Array constructor 
// without new is forbidden</pre>

<pre class="brush: js example-good">var dv = new Int8Array([1, 2, 3]);</pre>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Typed_arrays" title="en/JavaScript typed arrays">JavaScript typed arrays</a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="ArrayBuffer&#xA0;&#xFF08;&#x7F13;&#x51B2;&#x6570;&#x7EC4;&#xFF09;&#x662F;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5448;&#x73B0;&#x901A;&#x7528;&#x3001;&#x56FA;&#x5B9A;&#x957F;&#x5EA6;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#x7684;&#x7C7B;&#x578B;&#x3002;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x6784;&#x9020;&#x5E76;&#x586B;&#x5145;&#xA0;ArrayBuffer &#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x800C;&#x5E94;&#x8BE5;&#x5148;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#xA0;ArrayBufferView&#xA0;&#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x7528;&#x5177;&#x4F53;&#x7684;&#x683C;&#x5F0F;&#x6765;&#x5448;&#x73B0;&#xA0;ArrayBuffer&#xA0;&#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x6B64;&#x5BF9;&#x8C61;&#x6765;&#x8BFB;&#x5199;&#xA0;ArrayBuffer&#xA0;&#x7684;&#x5185;&#x5BB9;&#x3002;"><code>ArrayBuffer</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView" title="DataView&#xA0;&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5411; ArrayBuffer &#x8BFB;&#x5199;&#x6570;&#x636E;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;&#x3002;"><code>DataView</code></a></li>
</ul>
                  
                
              