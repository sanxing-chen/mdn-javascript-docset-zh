
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><strong><code>DataView</code></strong>&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x4E0E;&#x5E73;&#x53F0;&#x4E2D;&#x5B57;&#x8282;&#x5728;&#x5185;&#x5B58;&#x4E2D;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;(&#x5B57;&#x8282;&#x5E8F;)&#x65E0;&#x5173;&#x7684;&#x4ECE;<a title="ArrayBuffer&#x5BF9;&#x8C61;&#x662F;&#x7528;&#x6765;&#x8868;&#x793A;&#x4E00;&#x4E2A;&#x901A;&#x7528;&#x7684;&#xFF0C;&#x56FA;&#x5B9A;&#x957F;&#x5EA6;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#x7F13;&#x51B2;&#x533A;&#x3002;&#x4F60;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x64CD;&#x7EB5;ArrayBuffer&#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x800C;&#x662F;,&#x4F60;&#x5E94;&#x8BE5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x8868;&#x793A;&#x7279;&#x5B9A;&#x683C;&#x5F0F;&#x7684;buffer&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;(typed array objects)&#x6216;&#x6570;&#x636E;&#x89C6;&#x56FE;&#x5BF9;&#x8C61;DataView &#x6765;&#x5BF9;buffer&#x7684;&#x5185;&#x5BB9;&#x8FDB;&#x884C;&#x8BFB;&#x53D6;&#x548C;&#x5199;&#x5165;&#x64CD;&#x4F5C;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"><code>ArrayBuffer</code></a>&#x8BFB;&#x5199;&#x591A;&#x6570;&#x5B57;&#x7C7B;&#x578B;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;.</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">new DataView(buffer [, byteOffset [, byteLength]])</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>buffer</code></dt>
 <dd>&#x4E00;&#x4E2A;&#x73B0;&#x6709;&#x7684;<a title="ArrayBuffer&#x5BF9;&#x8C61;&#x662F;&#x7528;&#x6765;&#x8868;&#x793A;&#x4E00;&#x4E2A;&#x901A;&#x7528;&#x7684;&#xFF0C;&#x56FA;&#x5B9A;&#x957F;&#x5EA6;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#x7F13;&#x51B2;&#x533A;&#x3002;&#x4F60;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x64CD;&#x7EB5;ArrayBuffer&#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x800C;&#x662F;,&#x4F60;&#x5E94;&#x8BE5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x8868;&#x793A;&#x7279;&#x5B9A;&#x683C;&#x5F0F;&#x7684;buffer&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;(typed array objects)&#x6216;&#x6570;&#x636E;&#x89C6;&#x56FE;&#x5BF9;&#x8C61;DataView &#x6765;&#x5BF9;buffer&#x7684;&#x5185;&#x5BB9;&#x8FDB;&#x884C;&#x8BFB;&#x53D6;&#x548C;&#x5199;&#x5165;&#x64CD;&#x4F5C;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"><code>ArrayBuffer</code></a>&#xFF0C;&#x7528; &#x4F5C;<code>DataView</code>&#xA0;&#x5B9E;&#x4F8B;&#x7684;&#x5B58;&#x50A8;&#x7A7A;&#x95F4;.</dd>
 <dt><code>byteOffset</code> <span class="inlineIndicator optional optionalInline">&#x53EF;&#x9009;</span></dt>
 <dd>&#x89C6;&#x56FE;&#x5B9E;&#x4F8B;&#x5F15;&#x7528;&#x7684;buffer&#x7684;&#x5B57;&#x8282;&#x504F;&#x79FB;&#x91CF;.&#x5982;&#x679C;&#x6CA1;&#x6709;&#x6307;&#x5B9A;,buffer&#x89C6;&#x56FE;&#x4F1A;&#x4EE5;&#x9996;&#x5B57;&#x8282;&#x4F5C;&#x4E3A;&#x5F00;&#x59CB;&#x3002;</dd>
 <dt><code>byteLength</code> <span class="inlineIndicator optional optionalInline">&#x53EF;&#x9009;</span></dt>
 <dd>&#x5B57;&#x8282;&#x6570;&#x7EC4;&#x4E2D;&#x5143;&#x7D20;&#x7684;&#x4E2A;&#x6570;&#x3002;&#x5982;&#x679C;&#x672A;&#x6307;&#x5B9A;&#xFF0C;&#x89C6;&#x56FE;&#x7684;&#x957F;&#x5EA6;&#x5C06;&#x4F1A;&#x4EE5;buffer&#x7684;&#x957F;&#x5EA6;&#x5339;&#x914D;&#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x4E00;&#x4E2A;&#x8868;&#x793A;&#x6307;&#x5B9A;data&#xA0;buffer&#x7684;<code>DataView&#x5B9E;&#x4F8B;</code> &#x3002;</p>

<h3 id="&#x629B;&#x51FA;&#x9519;&#x8BEF;">&#x629B;&#x51FA;&#x9519;&#x8BEF;</h3>

<dl>
 <dt><code><a title="RangeError&#x5BF9;&#x8C61;&#x6807;&#x660E;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#xFF0C;&#x5F53;&#x4E00;&#x4E2A;&#x503C;&#x4E0D;&#x5728;&#x5176;&#x6240;&#x5141;&#x8BB8;&#x7684;&#x8303;&#x56F4;&#x6216;&#x8005;&#x96C6;&#x5408;&#x4E2D;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError"><code>RangeError</code></a></code></dt>
 <dd>&#x5982;&#x679C; <code>byteOffset</code> &#x548C; <code>byteLength</code>&#xA0;&#x5BFC;&#x81F4;&#x6307;&#x5B9A;&#x89C6;&#x56FE;&#x5BF9;&#x5E94;&#x7684; buffer &#x8BBF;&#x95EE;&#x8D8A;&#x754C;&#xFF0C;&#x5219;&#x4F1A;&#x629B;&#x51FA;&#x6B64;&#x9519;&#x8BEF;.</dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<h3 id="&#x5B57;&#x8282;&#x987A;&#x5E8F;">&#x5B57;&#x8282;&#x987A;&#x5E8F;</h3>

<p>&#x591A;&#x5B57;&#x8282;&#x6570;&#x5B57;&#x5728;&#x5185;&#x5B58;&#x4E2D;&#x7684;&#x89E3;&#x91CA;&#x4F1A;&#x6839;&#x636E;&#x7CFB;&#x7EDF;&#x67B6;&#x6784;&#x8868;&#x73B0;&#x51FA;&#x4E0D;&#x540C;&#x7684;&#x683C;&#x5F0F;&#xFF0C;&#x8FDB;&#x4E00;&#x6B65;&#x89E3;&#x91CA;&#x53C2;&#x7167;<a title="Endianness: &quot;Endian&quot; and &quot;endianness&quot; (or &quot;byte-order&quot;) describe how computers organize the bytes that make up numbers." href="/en-US/docs/Glossary/Endianness" class="glossaryLink">Endianness</a>&#x3002;DataView&#x7684;&#x8BBF;&#x95EE;&#x51FD;&#x6570;&#x63D0;&#x4F9B;&#x4E00;&#x4E2A;&#x4E0D;&#x9700;&#x8981;&#x8003;&#x8651;&#x5E73;&#x53F0;&#x67B6;&#x6784;&#x5B57;&#x8282;&#x987A;&#x5E8F;&#x7684;&#x7B80;&#x5355;&#x8BBF;&#x95EE;&#x63A7;&#x5236;&#x3002;</p>

<pre class="brush: js"><code>var littleEndian = (function() {
  var buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true /* littleEndian */);
  // Int16Array &#x4F7F;&#x7528;&#x7CFB;&#x7EDF;&#x81EA;&#x5E26;&#x7684;&#x5B57;&#x8282;&#x987A;&#x5E8F;
  return new Int16Array(buffer)[0] === 256;
})();
console.log(littleEndian); // true or false</code></pre>

<h2 id="&#x5C5E;&#x6027;">&#x5C5E;&#x6027;</h2>

<h2 id="&#x6240;&#x6709;DataView&#x5B9E;&#x4F8B;&#x7EE7;&#x627F;&#x81EA;_DataView.prototype&#x5E76;&#x5141;&#x8BB8;&#x5411;DataView_&#x5BF9;&#x8C61;&#x6DFB;&#x52A0;&#x5C5E;&#x6027;&#x3002;"><span style="font-size: 14px; font-weight: normal; line-height: 1.5;">&#x6240;&#x6709;DataView&#x5B9E;&#x4F8B;&#x7EE7;&#x627F;&#x81EA;&#xA0;<a title="DataView.prototype&#xA0;&#x662F;DataView &#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/prototype"><code>DataView.prototype</code></a>,&#x5E76;&#x5141;&#x8BB8;&#x5411;DataView &#x5BF9;&#x8C61;&#x6DFB;&#x52A0;&#x5C5E;&#x6027;</span><span style="font-size: 14px; font-weight: normal; line-height: 1.5;">&#x3002;</span></h2>

<p></p><dl><dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/constructor" class="new"><code>DataView.prototype.constructor</code></a></dt>
 <dd>Specifies the function that creates an object&apos;s prototype. The initial value is the standard built-in&#xA0;<code>DataView</code>&#xA0;constructor.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/buffer" class="new"><code>DataView.prototype.buffer</code></a> <span title="&#x8BE5;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x65E0;&#x6CD5;&#x66F4;&#x6539;" class="inlineIndicator readOnly readOnlyInline">&#x53EA;&#x8BFB; </span></dt>
 <dd>The <a title="ArrayBuffer&#xA0;&#xFF08;&#x7F13;&#x51B2;&#x6570;&#x7EC4;&#xFF09;&#x662F;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5448;&#x73B0;&#x901A;&#x7528;&#x3001;&#x56FA;&#x5B9A;&#x957F;&#x5EA6;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#x7684;&#x7C7B;&#x578B;&#x3002;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x6784;&#x9020;&#x5E76;&#x586B;&#x5145;&#xA0;ArrayBuffer &#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x800C;&#x5E94;&#x8BE5;&#x5148;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#xA0;ArrayBufferView&#xA0;&#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x7528;&#x5177;&#x4F53;&#x7684;&#x683C;&#x5F0F;&#x6765;&#x5448;&#x73B0;&#xA0;ArrayBuffer&#xA0;&#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x6B64;&#x5BF9;&#x8C61;&#x6765;&#x8BFB;&#x5199;&#xA0;ArrayBuffer&#xA0;&#x7684;&#x5185;&#x5BB9;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"><code>ArrayBuffer</code></a> referenced by this view. Fixed at construction time and thus <strong>read only.</strong></dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/byteLength" class="new"><code>DataView.prototype.byteLength</code></a> <span title="&#x8BE5;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x65E0;&#x6CD5;&#x66F4;&#x6539;" class="inlineIndicator readOnly readOnlyInline">&#x53EA;&#x8BFB; </span></dt>
 <dd>The length (in bytes) of this view from the start of its <a title="ArrayBuffer&#xA0;&#xFF08;&#x7F13;&#x51B2;&#x6570;&#x7EC4;&#xFF09;&#x662F;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5448;&#x73B0;&#x901A;&#x7528;&#x3001;&#x56FA;&#x5B9A;&#x957F;&#x5EA6;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#x7684;&#x7C7B;&#x578B;&#x3002;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x6784;&#x9020;&#x5E76;&#x586B;&#x5145;&#xA0;ArrayBuffer &#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x800C;&#x5E94;&#x8BE5;&#x5148;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#xA0;ArrayBufferView&#xA0;&#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x7528;&#x5177;&#x4F53;&#x7684;&#x683C;&#x5F0F;&#x6765;&#x5448;&#x73B0;&#xA0;ArrayBuffer&#xA0;&#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x6B64;&#x5BF9;&#x8C61;&#x6765;&#x8BFB;&#x5199;&#xA0;ArrayBuffer&#xA0;&#x7684;&#x5185;&#x5BB9;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"><code>ArrayBuffer</code></a>. Fixed at construction time and thus <strong>read only.</strong></dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/byteOffset" class="new"><code>DataView.prototype.byteOffset</code></a> <span title="&#x8BE5;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x65E0;&#x6CD5;&#x66F4;&#x6539;" class="inlineIndicator readOnly readOnlyInline">&#x53EA;&#x8BFB; </span></dt>
 <dd>The offset (in bytes) of this view from the start of its <a title="ArrayBuffer&#xA0;&#xFF08;&#x7F13;&#x51B2;&#x6570;&#x7EC4;&#xFF09;&#x662F;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5448;&#x73B0;&#x901A;&#x7528;&#x3001;&#x56FA;&#x5B9A;&#x957F;&#x5EA6;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#x7684;&#x7C7B;&#x578B;&#x3002;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x6784;&#x9020;&#x5E76;&#x586B;&#x5145;&#xA0;ArrayBuffer &#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x800C;&#x5E94;&#x8BE5;&#x5148;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#xA0;ArrayBufferView&#xA0;&#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x7528;&#x5177;&#x4F53;&#x7684;&#x683C;&#x5F0F;&#x6765;&#x5448;&#x73B0;&#xA0;ArrayBuffer&#xA0;&#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x6B64;&#x5BF9;&#x8C61;&#x6765;&#x8BFB;&#x5199;&#xA0;ArrayBuffer&#xA0;&#x7684;&#x5185;&#x5BB9;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"><code>ArrayBuffer</code></a>. Fixed at construction time and thus <strong>read only.</strong></dd>
</dl><p></p>

<h2 id="&#x65B9;&#x6CD5;">&#x65B9;&#x6CD5;</h2>

<p></p><h3 id="&#x8BFB;">&#x8BFB;</h3>

<dl><dt><a title="getInt8()&#x65B9;&#x6CD5;&#x4ECE;DataView&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x83B7;&#x53D6;&#x4E00;&#x4E2A;&#x6709;&#x7B26;&#x53F7;&#x7684;8-bit&#x6574;&#x6570;(&#x4E00;&#x4E2A;&#x5B57;&#x8282;)." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/getInt8"><code>DataView.prototype.getInt8()</code></a></dt>
 <dd><code>&#x4ECE;</code><a title="DataView&#xA0;&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5411; ArrayBuffer &#x8BFB;&#x5199;&#x6570;&#x636E;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView"><code>DataView</code></a>&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x83B7;&#x53D6;&#x4E00;&#x4E2A;8-bit&#x6570;(&#x4E00;&#x4E2A;&#x5B57;&#x8282;).</dd>
 <dt><a title="getUint8()&#x65B9;&#x6CD5;&#x4ECE;DataView&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x83B7;&#x53D6;&#x4E00;&#x4E2A;&#x65E0;&#x7B26;&#x53F7;&#x7684;8-bit&#x6574;&#x6570;(&#x4E00;&#x4E2A;&#x5B57;&#x8282;)." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/getUint8"><code>DataView.prototype.getUint8()</code></a></dt>
 <dd><code>&#x4ECE;</code><a title="DataView&#xA0;&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5411; ArrayBuffer &#x8BFB;&#x5199;&#x6570;&#x636E;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView"><code>DataView</code></a>&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x83B7;&#x53D6;&#x4E00;&#x4E2A;8-bit&#x6570;(&#x65E0;&#x7B26;&#x53F7;&#x5B57;&#x8282;).</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/getInt16"><code>DataView.prototype.getInt16()</code></a></dt>
 <dd><code>&#x4ECE;</code><a title="DataView&#xA0;&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5411; ArrayBuffer &#x8BFB;&#x5199;&#x6570;&#x636E;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView"><code>DataView</code></a>&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x83B7;&#x53D6;&#x4E00;&#x4E2A;16-bit&#x6570;(&#x77ED;&#x6574;&#x578B;).</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/getUint16"><code>DataView.prototype.getUint16()</code></a></dt>
 <dd><code>&#x4ECE;</code><a title="DataView&#xA0;&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5411; ArrayBuffer &#x8BFB;&#x5199;&#x6570;&#x636E;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView"><code>DataView</code></a>&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x83B7;&#x53D6;&#x4E00;&#x4E2A;16-bit&#x6570;(&#x65E0;&#x7B26;&#x53F7;&#x77ED;&#x6574;&#x578B;).</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/getInt32"><code>DataView.prototype.getInt32()</code></a></dt>
 <dd><code>&#x4ECE;</code><a title="DataView&#xA0;&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5411; ArrayBuffer &#x8BFB;&#x5199;&#x6570;&#x636E;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView"><code>DataView</code></a>&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x83B7;&#x53D6;&#x4E00;&#x4E2A;32-bit&#x6570;(&#x957F;&#x6574;&#x578B;).</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/getUint32"><code>DataView.prototype.getUint32()</code></a></dt>
 <dd><code>&#x4ECE;</code><a title="DataView&#xA0;&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5411; ArrayBuffer &#x8BFB;&#x5199;&#x6570;&#x636E;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView"><code>DataView</code></a>&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x83B7;&#x53D6;&#x4E00;&#x4E2A;32-bit&#x6570;(&#x65E0;&#x7B26;&#x53F7;&#x957F;&#x6574;&#x578B;).</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/getFloat32"><code>DataView.prototype.getFloat32()</code></a></dt>
 <dd><code>&#x4ECE;</code><a title="DataView&#xA0;&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5411; ArrayBuffer &#x8BFB;&#x5199;&#x6570;&#x636E;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView"><code>DataView</code></a>&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x83B7;&#x53D6;&#x4E00;&#x4E2A;32-bit&#x6570;(&#x6D6E;&#x70B9;&#x578B;).</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/getFloat64"><code>DataView.prototype.getFloat64()</code></a></dt>
 <dd><code>&#x4ECE;</code><a title="DataView&#xA0;&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5411; ArrayBuffer &#x8BFB;&#x5199;&#x6570;&#x636E;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView"><code>DataView</code></a>&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x83B7;&#x53D6;&#x4E00;&#x4E2A;64-bit&#x6570;(&#x53CC;&#x7CBE;&#x5EA6;&#x6D6E;&#x70B9;&#x578B;).</dd>
</dl><h3 id="&#x5199;">&#x5199;</h3>

<dl><dt><a title="setInt8()&#x5C06;&#x4E00;&#x4E2A;8-bit&#x7684;&#x6574;&#x6570; (&#x4E00;&#x4E2A;&#x5B57;&#x8282;)&#x4EE5;&#x4E00;&#x5B9A;&#x7684;&#x8DDD;&#x5934;&#x4F4D;&#x7F6E;&#x504F;&#x79FB;&#x91CF;&#xFF08;offset&#xFF09;&#x50A8;&#x5B58;&#x5728;DataView&#x5F53;&#x4E2D;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/setInt8"><code>DataView.prototype.setInt8()</code></a></dt>
 <dd><code>&#x4ECE;</code><a title="DataView&#xA0;&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5411; ArrayBuffer &#x8BFB;&#x5199;&#x6570;&#x636E;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView"><code>DataView</code></a>&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x50A8;&#x5B58;&#x4E00;&#x4E2A;8-bit&#x6570;(&#x4E00;&#x4E2A;&#x5B57;&#x8282;).</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/setUint8"><code>DataView.prototype.setUint8()</code></a></dt>
 <dd><code>&#x4ECE;</code><a title="DataView&#xA0;&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5411; ArrayBuffer &#x8BFB;&#x5199;&#x6570;&#x636E;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView"><code>DataView</code></a>&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x50A8;&#x5B58;&#x4E00;&#x4E2A;8-bit&#x6570;(&#x65E0;&#x7B26;&#x53F7;&#x5B57;&#x8282;).</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/setInt16"><code>DataView.prototype.setInt16()</code></a></dt>
 <dd><code>&#x4ECE;</code><a title="DataView&#xA0;&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5411; ArrayBuffer &#x8BFB;&#x5199;&#x6570;&#x636E;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView"><code>DataView</code></a>&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x50A8;&#x5B58;&#x4E00;&#x4E2A;16-bit&#x6570;(&#x77ED;&#x6574;&#x578B;).</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/setUint16"><code>DataView.prototype.setUint16()</code></a></dt>
 <dd><code>&#x4ECE;</code><a title="DataView&#xA0;&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5411; ArrayBuffer &#x8BFB;&#x5199;&#x6570;&#x636E;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView"><code>DataView</code></a>&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x50A8;&#x5B58;&#x4E00;&#x4E2A;16-bit&#x6570;(&#x65E0;&#x7B26;&#x53F7;&#x77ED;&#x6574;&#x578B;).</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/setInt32"><code>DataView.prototype.setInt32()</code></a></dt>
 <dd><code>&#x4ECE;</code><a title="DataView&#xA0;&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5411; ArrayBuffer &#x8BFB;&#x5199;&#x6570;&#x636E;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView"><code>DataView</code></a>&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x50A8;&#x5B58;&#x4E00;&#x4E2A;32-bit&#x6570;(&#x957F;&#x6574;&#x578B;).</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/setUint32"><code>DataView.prototype.setUint32()</code></a></dt>
 <dd><code>&#x4ECE;</code><a title="DataView&#xA0;&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5411; ArrayBuffer &#x8BFB;&#x5199;&#x6570;&#x636E;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView"><code>DataView</code></a>&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x50A8;&#x5B58;&#x4E00;&#x4E2A;32-bit&#x6570;(&#x65E0;&#x7B26;&#x53F7;&#x957F;&#x6574;&#x578B;).</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/setFloat32"><code>DataView.prototype.setFloat32()</code></a></dt>
 <dd><code>&#x4ECE;</code><a title="DataView&#xA0;&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5411; ArrayBuffer &#x8BFB;&#x5199;&#x6570;&#x636E;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView"><code>DataView</code></a>&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x50A8;&#x5B58;&#x4E00;&#x4E2A;32-bit&#x6570;(&#x6D6E;&#x70B9;&#x578B;).</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/setFloat64"><code>DataView.prototype.setFloat64()</code></a></dt>
 <dd><code>&#x4ECE;</code><a title="DataView&#xA0;&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5411; ArrayBuffer &#x8BFB;&#x5199;&#x6570;&#x636E;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView"><code>DataView</code></a>&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x50A8;&#x5B58;&#x4E00;&#x4E2A;64-bit&#x6570;(&#x53CC;&#x7CBE;&#x5EA6;&#x6D6E;&#x70B9;&#x578B;).</dd>
</dl><p></p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<pre class="brush: js">var buffer = new ArrayBuffer(16);
var dv = new DataView(buffer, 0);

dv.setInt16(1, 42);
dv.getInt16(1); //42
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x540D;&#x79F0;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x91CA;</th>
  </tr>
  <tr>
   <td><a lang="en" title="Typed Array Specification" class="external" href="https://www.khronos.org/registry/typedarray/specs/latest/" hreflang="en">Typed Array Specification</a></td>
   <td><span class="spec-Obsolete">Obsolete</span></td>
   <td><span><span>&#x88AB; ECMAScript 6&#xA0;&#x53D6;&#x4EE3;</span></span></td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-dataview-constructor" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">DataView</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition in an ECMA standard.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-dataview-constructor" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">DataView</small></a></td>
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
   <td>&#x57FA;&#x672C;&#x652F;&#x6301;</td>
   <td>9.0</td>
   <td><a title="Released on 2012-08-28." href="/en-US/Firefox/Releases/15">15.0</a> (15.0)</td>
   <td>10</td>
   <td>12.1</td>
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
   <td>&#x57FA;&#x672C;&#x652F;&#x6301;</td>
   <td>4.0</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>15.0 (15)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>12.0</td>
   <td>4.2</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="Firefox-specific_notes">Firefox-specific notes</h2>

<p>&#x4ECE; Gecko / SpiderMonkey 40 (Firefox 40 / Thunderbird 40 / SeaMonkey 2.37) &#x5F00;&#x59CB;&#xFF0C;&#xA0;<code>DataView</code> &#x8981;&#x6C42;&#x4F7F;&#x7528; <a title="new&#x8FD0;&#x7B97;&#x7B26;&#x7684;&#x4F5C;&#x7528;&#x662F;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5B9E;&#x4F8B;&#x3002;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x53EF;&#x4EE5;&#x662F;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x662F;&#x4E00;&#x4E9B;&#x7CFB;&#x7EDF;&#x81EA;&#x5E26;&#x7684;&#x5E26;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Operators/new"><code>new</code></a> &#x64CD;&#x4F5C;&#x7B26;&#x6784;&#x9020;&#x3002;&#xA0;&#x4EC5;&#x8C03;&#x7528;&#xA0;<code>DataView()</code>&#xA0;<font face="Consolas, Liberation Mono, Courier, monospace">&#x800C;&#x4E0D;&#x4F7F;&#x7528; new &#x64CD;&#x4F5C;&#x7B26;</font>&#x5C06;&#x4F1A;&#x629B;&#x51FA;&#x4E00;&#x4E2A; <a title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a>&#x3002;</p>

<pre class="brush: js example-bad">var dv = DataView(buffer, 0); 
// TypeError: calling a builtin DataView constructor without new is forbidden</pre>

<pre class="brush: js example-good">var dv = new DataView(buffer, 0);</pre>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="https://github.com/jDataView/jDataView" class="external link-https">jDataView</a>:&#xA0;&#x7528;&#x4E8E;&#x6269;&#x5C55; <code>DataView</code> API&#xA0;&#x5E76;&#x80FD;&#x9002;&#x914D;&#x6240;&#x6709;&#x6D4F;&#x89C8;&#x5668;&#x548C; Node.js.</li>
</ul>
                  
                
              