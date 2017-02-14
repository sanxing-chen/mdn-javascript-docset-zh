
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>&#x4E00;&#x4E2A;<strong>TypedArray </strong>&#x5BF9;&#x8C61;&#x63CF;&#x8FF0;&#x4E00;&#x4E2A;&#x8868;&#x793A;&#x5E95;&#x5C42;&#x7684;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer">&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#x7F13;&#x5B58;&#x533A;</a>&#x7684;&#x7C7B;&#x4F3C;&#x6570;&#x7EC4;(array-like)&#x89C6;&#x56FE;&#x3002;&#x6CA1;&#x6709;&#x540D;&#x4E3A;TypedArray&#x7684;&#x5168;&#x5C40;&#x5C5E;&#x6027;&#xFF0C;&#x4E5F;&#x6CA1;&#x6709;&#x76F4;&#x63A5;&#x53EF;&#x89C1;&#x7684;TypedArray&#x6784;&#x9020;&#x51FD;&#x6570;&#x3002;&#x76F8;&#x53CD;&#xFF0C;&#x6709;&#x8BB8;&#x591A;&#x4E0D;&#x540C;&#x7684;&#x5168;&#x5C40;&#x5C5E;&#x6027;&#xFF0C;&#x5176;&#x503C;&#x662F;&#x4E0B;&#x9762;&#x5217;&#x51FA;&#x7684;&#x7279;&#x5B9A;&#x5143;&#x7D20;&#x7C7B;&#x578B;&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x6784;&#x9020;&#x51FD;&#x6570;&#x3002;&#x5728;&#x4E0B;&#x9762;&#x7684;&#x9875;&#x9762;&#x4E2D;&#xFF0C;&#x4F60;&#x4F1A;&#x627E;&#x5230;&#x53EF;&#x7528;&#x4E8E;&#x5305;&#x542B;&#x4EFB;&#x4F55;&#x7C7B;&#x578B;&#x7684;&#x5143;&#x7D20;&#x7684;&#x4EFB;&#x4F55;&#x7C7B;&#x578B;&#x6570;&#x7EC4;&#x7684;&#x5E38;&#x89C1;&#x5C5E;&#x6027;&#x548C;&#x65B9;&#x6CD5;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">new<em>&#xA0;TypedArray</em>(length); 
new&#xA0;<em>TypedArray</em>(typedArray); 
new <em>TypedArray</em>(object); 
new&#xA0;<em>TypedArray</em>(buffer [, byteOffset [, length]]); 

&#x4EE5;&#x4E0B;&#x7686;&#x662F; <em>TypedArray() </em>: 

Int8Array(); 
Uint8Array(); 
Uint8ClampedArray();
Int16Array(); 
Uint16Array();
Int32Array(); 
Uint32Array(); 
Float32Array(); 
Float64Array();</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt>length</dt>
 <dd>&#x5F53;&#x4F20;&#x5165;lengch&#x53C2;&#x6570;&#x65F6;,&#x4E00;&#x4E2A;&#x5185;&#x90E8;&#x6570;&#x7EC4;&#x7F13;&#x51B2;&#x533A;&#x88AB;&#x521B;&#x5EFA;,&#x8BE5;&#x7F13;&#x5B58;&#x533A;&#x7684;&#x5927;&#x5C0F;&#x662F;&#x4F20;&#x5165;&#x7684;length&#x4E58;&#x4EE5;&#x6570;&#x7EC4;&#x4E2D;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x5B57;&#x8282;&#x6570;,&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x503C;&#x90FD;&#x4E3A;0.(&#x8BD1;&#x8005;&#x6CE8;:&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x5B57;&#x8282;&#x6570;&#x662F;&#x7531;&#x5177;&#x4F53;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;&#x51B3;&#x5B9A;&#x7684;,&#x6BD4;&#x5982;Int16Array&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x5B57;&#x8282;&#x6570;&#x4E3A;2,Int32Array&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x5B57;&#x8282;&#x6570;&#x4E3A;4)</dd>
 <dt>typedArray</dt>
 <dd>&#x5F53;&#x4F20;&#x5165;&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x4EFB;&#x610F;&#x7C7B;&#x578B;&#x5143;&#x7D20;&#x7684;&#x4EFB;&#x610F;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;(<code>typedArray)</code>&#xA0;(&#x6BD4;&#x5982; <strong>Int32Array)</strong>&#x4F5C;&#x4E3A;&#x53C2;&#x6570;&#x65F6;,typeArray&#x88AB;&#x590D;&#x5236;&#x5230;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x7C7B;&#x578B;&#x6570;&#x7EC4;&#x3002;typeArray&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x503C;&#x4F1A;&#x5728;&#x590D;&#x5236;&#x5230;&#x65B0;&#x7684;&#x6570;&#x7EC4;&#x4E4B;&#x524D;&#x6839;&#x636E;&#x6784;&#x9020;&#x5668;&#x8FDB;&#x884C;&#x8F6C;&#x5316;.&#x65B0;&#x7684;&#x751F;&#x6210;&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x5C06;&#x4F1A;&#x6709;&#x8DDF;&#x4F20;&#x5165;&#x7684;&#x6570;&#x7EC4;&#x76F8;&#x540C;&#x7684;length(&#x8BD1;&#x8005;&#x6CE8;:&#x6BD4;&#x5982;&#x539F;&#x6765;&#x7684;typeArray.length==2,&#x90A3;&#x4E48;&#x65B0;&#x751F;&#x6210;&#x7684;&#x6570;&#x7EC4;&#x7684;length&#x4E5F;&#x662F;2,&#x53EA;&#x662F;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E00;&#x9879;&#x8FDB;&#x884C;&#x4E86;&#x8F6C;&#x5316;)</dd>
 <dt>object</dt>
 <dd>&#x5F53;&#x4F20;&#x5165;&#x4E00;&#x4E2A; <font face="Consolas, Liberation Mono, Courier, monospace">object &#x4F5C;&#x4E3A;&#x53C2;&#x6570;&#x65F6;&#xFF0C;&#x5982;&#x540C;&#x901A;&#x8FC7;</font>&#xA0;<code><em>TypedArray</em>.from()</code>&#xA0;&#x65B9;&#x6CD5;&#x4E00;&#x6837;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x7C7B;&#x578B;&#x6570;&#x7EC4;&#x3002;</dd>
 <dt>buffer, byteOffset, length</dt>
 <dd>&#x5F53;&#x4F20;&#x5165;arrayBuffer&#x548C;&#x53EF;&#x9009;&#x53C2;&#x6570;byteOffset,&#x53EF;&#x9009;&#x53C2;&#x6570;length&#x65F6;,&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x89C6;&#x56FE;&#x5C06;&#x4F1A;&#x88AB;&#x521B;&#x5EFA;,&#x8BE5;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x89C6;&#x56FE;&#x7528;&#x4E8E;&#x5448;&#x73B0;&#x4F20;&#x5165;&#x7684;<code><a title="The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. You cannot directly manipulate the contents of an ArrayBuffer; instead, you create one of the typed array objects or a DataView object which represents the buffer in a specific format, and use that to read and write the contents of the buffer." href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer">ArrayBuffer</a>&#x5B9E;&#x4F8B;&#x3002;byteOffset&#x548C;length&#x6307;&#x5B9A;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x89C6;&#x56FE;&#x66B4;&#x9732;&#x7684;&#x5185;&#x5B58;&#x8303;&#x56F4;,&#x5982;&#x679C;&#x4E24;&#x8005;&#x90FD;&#x672A;&#x4F20;&#x5165;,&#x90A3;&#x4E48;&#x6574;&#x4E2A;buffer&#x90FD;&#x4F1A;&#x88AB;&#x5448;&#x73B0;,&#x5982;&#x679C;&#x4EC5;&#x4EC5;&#x5FFD;&#x7565;length,&#x90A3;&#x4E48;buffer&#x4E2D;&#x504F;&#x79FB;(byteOffset)&#x540E;&#x5269;&#x4E0B;&#x7684;buffer&#x5C06;&#x4F1A;&#x88AB;&#x5448;&#x73B0;</code>.</dd>
 <dt>
 <h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>
 </dt>
</dl>

<p>ECMAScript 6&#x5B9A;&#x4E49;TypeArray&#x6784;&#x9020;&#x5668;&#x4F5C;&#x4E3A;&#x6240;&#x6709;&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x6784;&#x9020;&#x5668;(Int8Array,Int16Array&#x7B49;)&#x7684;&#x539F;&#x578B;.&#x8BE5;&#x6784;&#x9020;&#x5668;&#x4E0D;&#x4F1A;&#x76F4;&#x63A5;&#x66B4;&#x9732;:&#x6CA1;&#x6709;&#x5168;&#x5C40;&#x7684;%TypedArray%&#x548C;TypeArray&#x5C5E;&#x6027;.&#x53EA;&#x80FD;&#x901A;&#x8FC7;&#x4F7F;&#x7528;&#x7C7B;&#x4F3C;Object.getPrototypeOf(<code>Int8Array.prototype</code>)&#x7684;&#x65B9;&#x5F0F;&#x8FDB;&#x884C;&#x8BBF;&#x95EE;.&#x6240;&#x6709;&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x6784;&#x9020;&#x5668;(Int8Array,Int16Array&#x7B49;)&#x90FD;&#x4F1A;&#x7EE7;&#x627F;TypeArray&#x6784;&#x9020;&#x5668;&#x7684;&#x901A;&#x7528;&#x5C5E;&#x6027;&#x548C;&#x65B9;&#x6CD5;.&#x6B64;&#x5916;,&#x6240;&#x6709;&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x539F;&#x578B;(Int8Array.prototype,Int16Array.prototype&#x7B49;)&#x7684;&#x539F;&#x578B;&#x90FD;&#x4EE5;TypeArray.prototype&#x4F5C;&#x4E3A;&#x539F;&#x578B;.</p>

<p>TypedArray&#x6784;&#x9020;&#x5668;&#x81EA;&#x8EAB;&#x4E0D;&#x662F;&#x7279;&#x522B;&#x6709;&#x7528;.&#x8C03;&#x7528;&#x6216;&#x5728;&#x4E00;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x90FD;&#x4F1A;&#x629B;&#x51FA;&#x4E00;&#x4E2A;TypeError&#x5F02;&#x5E38;,&#x9664;&#x975E;&#x5728;&#x652F;&#x6301;&#x901A;&#x8FC7;&#x7EE7;&#x627F;&#x521B;&#x5EFA;&#x5BF9;&#x8C61;&#x7684;JS&#x5F15;&#x64CE;&#x4E0B;&#x8FD0;&#x884C;.&#x4F46;&#x76F4;&#x5230;&#x73B0;&#x5728;&#x8FD8;&#x6CA1;&#x6709;&#x8FD9;&#x6837;&#x7684;JS&#x5F15;&#x64CE;&#x51FA;&#x73B0;,&#x56E0;&#x6B64;TypeArray&#x4EC5;&#x4EC5;&#x662F;&#x5BF9;&#x6240;&#x6709;&#x7684;&#x7C7B;&#x578B;&#x5316;&#x7C7B;&#x6784;&#x9020;&#x5668;(Int8Array,Int16Array&#x7B49;)&#x7684;&#x65B9;&#x6CD5;&#x548C;&#x5C5E;&#x6027;&#x8FDB;&#x884C;polyfill&#x7684;&#x65F6;&#x5019;&#x6BD4;&#x8F83;&#x6709;&#x7528;.</p>

<h3 id="&#x5C5E;&#x6027;&#x8BBF;&#x95EE;">&#x5C5E;&#x6027;&#x8BBF;&#x95EE;</h3>

<p>&#x4F60;&#x53EF;&#x4EE5;&#x53C2;&#x8003;&#x4F7F;&#x7528;&#x6807;&#x51C6;&#x6570;&#x7EC4;&#x7D22;&#x5F15;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x7684;&#x65B9;&#x6CD5;(&#x5176;&#x5B9E;&#x5C31;&#x662F;&#x65B9;&#x62EC;&#x53F7;&#x91CC;&#x9762;&#x5199;&#x4E0B;&#x6807;).&#x7136;&#x800C;,&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x9762;&#x5B9A;&#x4E49;&#x7684;&#x7D22;&#x5F15;&#x5C5E;&#x6027;(&#x8BD1;&#x8005;&#x6CE8;:&#x5373;&#x7528;&#x6570;&#x5B57;&#x4F5C;&#x4E3A;&#x5C5E;&#x6027;,&#x4F8B;&#x5982;Int16Array.prototype[0]=12;),&#x5728;&#x5B9E;&#x4F8B;&#x5316;&#x7684;&#x5BF9;&#x8C61;&#x4E0A;&#x9762;&#x662F;&#x83B7;&#x53D6;&#x4E0D;&#x5230;&#x8BE5;&#x5C5E;&#x6027;&#x7684;(int16Array[0]==undefined).&#x901A;&#x8FC7;&#x67E5;&#x8BE2;&#xA0;<a title="&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x62E5;&#x6709;&#x6307;&#x5B9A;&#x5927;&#x5C0F;&#x7684;ArrayBuffer&#x5BF9;&#x8C61;&#x3002;&#x5B83;&#x7684;&#x5185;&#x5BB9;&#x90FD;&#x88AB;&#x521D;&#x59CB;&#x5316;&#x4E3A;0&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"><code>ArrayBuffer</code></a> &#x662F;&#x627E;&#x4E0D;&#x5230;&#x7D22;&#x5F15;&#x5C5E;&#x6027;&#x7684;.&#x4F46;&#x60A8;&#x4ECD;&#x7136;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x547D;&#x540D;&#x5C5E;&#x6027;(&#x8BD1;&#x8005;&#x6CE8;:&#x5C31;&#x662F;&#x952E;&#x4E0D;&#x662F;&#x6570;&#x5B57;&#x7684;),&#x5C31;&#x50CF;&#x6240;&#x6709;&#x5BF9;&#x8C61;&#x4E00;&#x6837;&#x3002;</p>

<pre class="brush: js">// &#x8BBE;&#x7F6E;&#x548C;&#x4F7F;&#x7528;&#x6807;&#x51C6;&#x6570;&#x7EC4;&#x8BED;&#x6CD5;
var int16 = new Int16Array(2);
int16[0] = 42;
console.log(int16[0]); // 42

// Indexed properties on prototypes are not consulted (Fx 25)
Int8Array.prototype[20] = &quot;foo&quot;;
(new Int8Array(32))[20]; // 0
// even when out of bound
Int8Array.prototype[20] = &quot;foo&quot;;
(new Int8Array(8))[20]; // undefined
// or with negative integers
Int8Array.prototype[-1] = &quot;foo&quot;;
(new Int8Array(8))[-1]; // undefined

// Named properties are allowed, though (Fx 30)
Int8Array.prototype.foo = &quot;bar&quot;;
(new Int8Array(32)).foo; // &quot;bar&quot;</pre>

<h2 id="TypedArray_&#x5BF9;&#x8C61;">TypedArray &#x5BF9;&#x8C61;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <td class="header">&#x7C7B;&#x578B;</td>
   <td class="header">&#x5927;&#x5C0F;&#xFF08;&#x5B57;&#x8282;&#x5355;&#x4F4D;&#xFF09;</td>
   <td class="header">&#x63CF;&#x8FF0;</td>
   <td class="header">Web IDL type</td>
   <td class="header">C&#x8BED;&#x8A00;&#x4E2D;&#x7684;&#x7B49;&#x6548;&#x7C7B;&#x578B;</td>
  </tr>
  <tr>
   <td><a title="Int8Array &#x7C7B;&#x578B;&#x6570;&#x7EC4;&#x4E3A;8&#x4F4D;&#x4E8C;&#x8FDB;&#x5236;&#x8865;&#x7801;&#x6709;&#x7B26;&#x53F7;&#x6574;&#x6570;&#x7684;&#x6570;&#x7EC4;. &#x521D;&#x59CB;&#x5316;&#x5185;&#x5BB9;&#x4E3A;0. &#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x6784;&#x9020;&#x5BF9;&#x8C61;&#x6765;&#x521D;&#x59CB;&#x5316;&#x4E00;&#x4E2A;Int8Array&#x5BF9;&#x8C61;, &#x4E5F;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x6807;&#x51C6;&#x7684;&#x6570;&#x7EC4;&#x8BED;&#x6CD5; (&#x5927;&#x62EC;&#x53F7;&#x8BED;&#x6CD5;&#x521D;&#x59CB;&#x5316;)." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Int8Array"><code>Int8Array</code></a></td>
   <td>1</td>
   <td>8&#x4F4D;&#x4E8C;&#x8FDB;&#x5236;&#x5E26;&#x7B26;&#x53F7;&#x6574;&#x6570;&#xA0;-2^7~(2^7)&#xA0;-&#xA0;1</td>
   <td>byte</td>
   <td>int8_t</td>
  </tr>
  <tr>
   <td><a title="Uint8Array &#x6570;&#x7EC4;&#x7C7B;&#x578B;&#x8868;&#x793A;&#x4E00;&#x4E2A;8&#x4F4D;&#x65E0;&#x7B26;&#x53F7;&#x6574;&#x578B;&#x6570;&#x7EC4;&#xFF0C;&#x521B;&#x5EFA;&#x65F6;&#x5185;&#x5BB9;&#x88AB;&#x521D;&#x59CB;&#x5316;&#x4E3A;0&#x3002;&#x521B;&#x5EFA;&#x5B8C;&#x540E;&#xFF0C;&#x53EF;&#x4EE5;&#x4EE5;&#x5BF9;&#x8C61;&#x7684;&#x65B9;&#x5F0F;&#x6216;&#x4F7F;&#x7528;&#x6570;&#x7EC4;&#x4E0B;&#x6807;&#x7D22;&#x5F15;&#x7684;&#x65B9;&#x5F0F;&#x5F15;&#x7528;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array"><code>Uint8Array</code></a></td>
   <td>1</td>
   <td>8&#x4F4D;&#x65E0;&#x7B26;&#x53F7;&#x6574;&#x6570; 0~(2^8)&#xA0;-&#xA0;1</td>
   <td>octet</td>
   <td>uint8_t</td>
  </tr>
  <tr>
   <td><a title="The Int16Array typed array represents an array of twos-complement 16-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object&apos;s methods, or using standard array index syntax (that is, using bracket notation)." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Int16Array"><code>Int16Array</code></a></td>
   <td>2</td>
   <td>16&#x4F4D;&#x4E8C;&#x8FDB;&#x5236;&#x5E26;&#x7B26;&#x53F7;&#x6574;&#x6570; -2^15~(2^15)-1</td>
   <td><code>short</code></td>
   <td>int16_t</td>
  </tr>
  <tr>
   <td><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Uint16Array" class="new"><code>Uint16Array</code></a></td>
   <td>2</td>
   <td>16&#x4F4D;&#x65E0;&#x7B26;&#x53F7;&#x6574;&#x6570; 0~(2^16)&#xA0;-&#xA0;1</td>
   <td><code>unsigned short</code></td>
   <td>uint16_t</td>
  </tr>
  <tr>
   <td><a title="The Int32Array typed array represents an array of twos-complement 32-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object&apos;s methods, or using standard array index syntax (that is, using bracket notation)." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Int32Array"><code>Int32Array</code></a></td>
   <td>4</td>
   <td>32&#x4F4D;&#x4E8C;&#x8FDB;&#x5236;&#x5E26;&#x7B26;&#x53F7;&#x6574;&#x6570; -2^31~(2^31)-1</td>
   <td><font face="Consolas, Liberation Mono, Courier, monospace">long</font></td>
   <td>int32_t</td>
  </tr>
  <tr>
   <td><a title="Uint32Array&#x8868;&#x793A;&#x4E00;&#x4E2A;&#x7531;&#x57FA;&#x4E8E;&#x5E73;&#x53F0;&#x5B57;&#x8282;&#x5E8F;&#x7684;32&#x4F4D;&#x65E0;&#x7B26;&#x53F7;&#x5B57;&#x8282;&#x7EC4;&#x6210;&#x7684;&#x6570;&#x7EC4;.&#x5982;&#x679C;&#x9700;&#x8981;&#x5BF9;&#x5B57;&#x8282;&#x987A;&#x5E8F;&#x8FDB;&#x884C;&#x63A7;&#x5236;(&#x8BD1;&#x8005;&#x6CE8;:&#x5373;&#xA0;littleEndian &#x6216; bigEndian),&#x8BF7;&#x4F7F;&#x7528;DataView&#x4EE3;&#x66FF;.&#x6570;&#x7EC4;&#x4E2D;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x521D;&#x59CB;&#x503C;&#x90FD;&#x662F;0.&#x4E00;&#x65E6;&#x521B;&#x5EFA;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x7528;&#x5BF9;&#x8C61;&#x7684;&#x65B9;&#x6CD5;&#x5F15;&#x7528;&#x6570;&#x7EC4;&#x91CC;&#x7684;&#x5143;&#x7D20;&#xFF0C;&#x6216;&#x8005;&#x4F7F;&#x7528;&#x6807;&#x51C6;&#x7684;&#x6570;&#x7EC4;&#x7D22;&#x5F15;&#x8BED;&#x6CD5;&#xFF08;&#x5373;&#xFF0C;&#x4F7F;&#x7528;&#x4E2D;&#x62EC;&#x53F7;&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array"><code>Uint32Array</code></a></td>
   <td>4</td>
   <td>32&#x4F4D;&#x65E0;&#x7B26;&#x53F7;&#x6574;&#x6570; 0~(2^32)&#xA0;-&#xA0;1</td>
   <td><code>unsigned int</code></td>
   <td>uint32_t</td>
  </tr>
  <tr>
   <td><a title="Float32Array &#x7C7B;&#x578B;&#x6570;&#x7EC4;&#x4EE3;&#x8868;&#x7684;&#x662F;&#x5E73;&#x53F0;&#x5B57;&#x8282;&#x987A;&#x5E8F;&#x4E3A;32&#x4F4D;&#x7684;&#x6D6E;&#x70B9;&#x6570;&#x578B;&#x6570;&#x7EC4;(&#x5BF9;&#x5E94;&#x4E8E; C&#xA0;&#x6D6E;&#x70B9;&#x6570;&#x636E;&#x7C7B;&#x578B;) &#x3002;&#xA0;&#x5982;&#x679C;&#x9700;&#x8981;&#x63A7;&#x5236;&#x5B57;&#x8282;&#x987A;&#x5E8F;&#xFF0C;&#xA0;&#x4F7F;&#x7528; DataView&#xA0;&#x66FF;&#x4EE3;&#x3002;&#x5176;&#x5185;&#x5BB9;&#x521D;&#x59CB;&#x5316;&#x4E3A;0&#x3002;&#x4E00;&#x65E6;&#x5EFA;&#x7ACB;&#x8D77;&#x6765;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x65B9;&#x6CD5;&#x5BF9;&#x5176;&#x5143;&#x7D20;&#x8FDB;&#x884C;&#x64CD;&#x4F5C;&#xFF0C;&#x6216;&#x8005;&#x4F7F;&#x7528;&#x6807;&#x51C6;&#x6570;&#x7EC4;&#x7D22;&#x5F15;&#x8BED;&#x6CD5; (&#x4F7F;&#x7528;&#x65B9;&#x62EC;&#x53F7;)&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Float32Array"><code>Float32Array</code></a></td>
   <td>4</td>
   <td>32&#x4F4D;IEEE&#x6D6E;&#x70B9;&#x6570;</td>
   <td>unrestricted float</td>
   <td>float</td>
  </tr>
  <tr>
   <td><a title="Float64Array&#xA0;&#x7C7B;&#x578B;&#x6570;&#x7EC4;&#x4EE3;&#x8868;&#x7684;&#x662F;&#x5E73;&#x53F0;&#x5B57;&#x8282;&#x987A;&#x5E8F;&#x4E3A;64&#x4F4D;&#x7684;&#x6D6E;&#x70B9;&#x6570;&#x578B;&#x6570;&#x7EC4;(&#x5BF9;&#x5E94;&#x4E8E; C&#xA0;&#x6D6E;&#x70B9;&#x6570;&#x636E;&#x7C7B;&#x578B;) &#x3002;&#xA0;&#x5982;&#x679C;&#x9700;&#x8981;&#x63A7;&#x5236;&#x5B57;&#x8282;&#x987A;&#x5E8F;&#xFF0C;&#xA0;&#x4F7F;&#x7528; DataView&#xA0;&#x66FF;&#x4EE3;&#x3002;&#x5176;&#x5185;&#x5BB9;&#x521D;&#x59CB;&#x5316;&#x4E3A;0&#x3002;&#x4E00;&#x65E6;&#x5EFA;&#x7ACB;&#x8D77;&#x6765;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x65B9;&#x6CD5;&#x5BF9;&#x5176;&#x5143;&#x7D20;&#x8FDB;&#x884C;&#x64CD;&#x4F5C;&#xFF0C;&#x6216;&#x8005;&#x4F7F;&#x7528;&#x6807;&#x51C6;&#x6570;&#x7EC4;&#x7D22;&#x5F15;&#x8BED;&#x6CD5; (&#x4F7F;&#x7528;&#x65B9;&#x62EC;&#x53F7;)&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Float64Array"><code>Float64Array</code></a></td>
   <td>8</td>
   <td>64&#x4F4D;IEEE&#x6D6E;&#x70B9;&#x6570;</td>
   <td>unrestricted double</td>
   <td>double</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x5C5E;&#x6027;">&#x5C5E;&#x6027;</h2>

<dl>
 <dt><a title="TypedArray.BYTES_PER_ELEMENT&#xA0;&#x5C5E;&#x6027;&#x4EE3;&#x8868;&#x4E86;&#x5F3A;&#x7C7B;&#x578B;&#x6570;&#x7EC4;&#x4E2D;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x6240;&#x5360;&#x7528;&#x7684;&#x5B57;&#x8282;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT"><code>TypedArray.BYTES_PER_ELEMENT</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E0D;&#x540C;&#x7C7B;&#x578B;&#x7684;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x7684;&#x5143;&#x7D20;&#x5927;&#x5C0F;&#x7684;&#x6570;&#x5B57;&#x503C;&#x3002;</dd>
 <dt><em>TypedArray</em>.length</dt>
 <dd>Length property whose value is 3.(&#x8BD1;&#x8005;&#x6CE8;:&#x5E94;&#x8BE5;&#x662F;&#x6570;&#x7EC4;&#x7684;&#x957F;&#x5EA6;&#x5427;???)</dd>
 <dt><a title="TypedArray.name &#x5C5E;&#x6027;&#x662F;&#x63CF;&#x8FF0;&#x7C7B;&#x578B;&#x6570;&#x7EC4;&#x6784;&#x9020;&#x540D;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/name"><code>TypedArray.name</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x6784;&#x9020;&#x5668;&#x7684;&#x540D;&#x79F0;,&#x4F8B;&#x5982;&quot;Int8Array&quot;.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@species" class="new"><code>get TypedArray[@@species]</code></a></dt>
 <dd>&#x7528;&#x4E8E;&#x521B;&#x5EFA;&#x6D3E;&#x751F;&#x5BF9;&#x8C61;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;&#x51FD;&#x6570;.</dd>
 <dt><a title="TypedArray.prototype&#x5C5E;&#x6027;&#x8868;&#x793A;TypedArray&#x6784;&#x9020;&#x5668;&#x7684;&#x539F;&#x578B;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/prototype"><code>TypedArray.prototype</code></a></dt>
 <dd>TypedArray&#x7684;&#x539F;&#x578B;.</dd>
 <dt>
 <h2 id="&#x65B9;&#x6CD5;">&#x65B9;&#x6CD5;</h2>
 </dt>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from" class="new"><code>TypedArray.from()</code></a></dt>
 <dd>&#x4F7F;&#x7528;&#x7C7B;&#x6570;&#x7EC4;(array-like)&#x6216;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;.&#x53C2;&#x89C1; <a title="Array.from() &#x65B9;&#x6CD5;&#x4ECE;&#x7C7B;&#x4F3C;&#x6570;&#x7EC4;&#x6216;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x6570;&#x7EC4;&#x5B9E;&#x4F8B;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from"><code>Array.from()</code></a>.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/of"><code>TypedArray.of()</code></a></dt>
 <dd>&#x901A;&#x8FC7;&#x53EF;&#x53D8;&#x6570;&#x91CF;&#x7684;&#x53C2;&#x6570;&#x521B;&#x5EFA;&#x65B0;&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;.&#x53C2;&#x89C1;&#xA0;<a title="Array.of() &#x65B9;&#x6CD5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5177;&#x6709;&#x53EF;&#x53D8;&#x6570;&#x91CF;&#x53C2;&#x6570;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x5B9E;&#x4F8B;&#xFF0C;&#x800C;&#x4E0D;&#x8003;&#x8651;&#x53C2;&#x6570;&#x7684;&#x6570;&#x91CF;&#x6216;&#x7C7B;&#x578B;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/of"><code>Array.of()</code></a>.</dd>
 <dt>
 <h2 id="TypedArray_&#x539F;&#x578B;">TypedArray &#x539F;&#x578B;</h2>

 <p>&#x6240;&#x6709;&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x90FD;&#x662F;&#x7EE7;&#x627F;&#x81EA;<a title="TypedArray.prototype&#x5C5E;&#x6027;&#x8868;&#x793A;TypedArray&#x6784;&#x9020;&#x5668;&#x7684;&#x539F;&#x578B;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/prototype"><code>TypedArray.prototype</code></a>.</p>

 <h3 id="&#x5C5E;&#x6027;_2">&#x5C5E;&#x6027;</h3>

 <p></p><dl><dt><code>TypedArray.prototype.constructor</code></dt>
 <dd>&#x8FD4;&#x56DE;&#x521B;&#x5EFA;&#x5B9E;&#x4F8B;&#x539F;&#x578B;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;.&#x8FD9;&#x662F;&#x76F8;&#x5E94;&#x7684;<a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects">typed array type</a>&#x7684;&#x9ED8;&#x8BA4;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/buffer" class="new"><code>TypedArray.prototype.buffer</code></a> <span title="&#x8BE5;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x65E0;&#x6CD5;&#x66F4;&#x6539;" class="inlineIndicator readOnly readOnlyInline">&#x53EA;&#x8BFB; </span></dt>
 <dd>&#x8FD4;&#x56DE;&#x88AB;&#x683C;&#x5F0F;&#x5316;&#x6570;&#x7EC4;&#x5F15;&#x7528;&#x7684;<a title="ArrayBuffer&#xA0;&#xFF08;&#x7F13;&#x51B2;&#x6570;&#x7EC4;&#xFF09;&#x662F;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5448;&#x73B0;&#x901A;&#x7528;&#x3001;&#x56FA;&#x5B9A;&#x957F;&#x5EA6;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#x7684;&#x7C7B;&#x578B;&#x3002;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x6784;&#x9020;&#x5E76;&#x586B;&#x5145;&#xA0;ArrayBuffer &#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x800C;&#x5E94;&#x8BE5;&#x5148;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#xA0;ArrayBufferView&#xA0;&#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x7528;&#x5177;&#x4F53;&#x7684;&#x683C;&#x5F0F;&#x6765;&#x5448;&#x73B0;&#xA0;ArrayBuffer&#xA0;&#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x6B64;&#x5BF9;&#x8C61;&#x6765;&#x8BFB;&#x5199;&#xA0;ArrayBuffer&#xA0;&#x7684;&#x5185;&#x5BB9;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"><code>ArrayBuffer</code></a>. &#x521B;&#x5EFA;&#x65F6;&#x5DF2;&#x88AB;&#x56FA;&#x5316;,&#x56E0;&#x6B64;&#x662F;&#x53EA;&#x8BFB;&#x7684;.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteLength" class="new"><code>TypedArray.prototype.byteLength</code></a> <span title="&#x8BE5;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x65E0;&#x6CD5;&#x66F4;&#x6539;" class="inlineIndicator readOnly readOnlyInline">&#x53EA;&#x8BFB; </span></dt>
 <dd>&#x8FD4;&#x56DE;&#x4ECE;<a title="ArrayBuffer&#xA0;&#xFF08;&#x7F13;&#x51B2;&#x6570;&#x7EC4;&#xFF09;&#x662F;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5448;&#x73B0;&#x901A;&#x7528;&#x3001;&#x56FA;&#x5B9A;&#x957F;&#x5EA6;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#x7684;&#x7C7B;&#x578B;&#x3002;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x6784;&#x9020;&#x5E76;&#x586B;&#x5145;&#xA0;ArrayBuffer &#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x800C;&#x5E94;&#x8BE5;&#x5148;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#xA0;ArrayBufferView&#xA0;&#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x7528;&#x5177;&#x4F53;&#x7684;&#x683C;&#x5F0F;&#x6765;&#x5448;&#x73B0;&#xA0;ArrayBuffer&#xA0;&#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x6B64;&#x5BF9;&#x8C61;&#x6765;&#x8BFB;&#x5199;&#xA0;ArrayBuffer&#xA0;&#x7684;&#x5185;&#x5BB9;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"><code>ArrayBuffer</code></a>&#x8BFB;&#x53D6;&#x7684;&#x5B57;&#x8282;&#x957F;&#x5EA6;. &#x521B;&#x5EFA;&#x65F6;&#x5DF2;&#x88AB;&#x56FA;&#x5316;,&#x56E0;&#x6B64;&#x662F;&#x53EA;&#x8BFB;&#x7684;.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset" class="new"><code>TypedArray.prototype.byteOffset</code></a> <span title="&#x8BE5;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x65E0;&#x6CD5;&#x66F4;&#x6539;" class="inlineIndicator readOnly readOnlyInline">&#x53EA;&#x8BFB; </span></dt>
 <dd>&#x8FD4;&#x56DE;&#x4ECE;<a title="ArrayBuffer&#xA0;&#xFF08;&#x7F13;&#x51B2;&#x6570;&#x7EC4;&#xFF09;&#x662F;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5448;&#x73B0;&#x901A;&#x7528;&#x3001;&#x56FA;&#x5B9A;&#x957F;&#x5EA6;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#x7684;&#x7C7B;&#x578B;&#x3002;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x6784;&#x9020;&#x5E76;&#x586B;&#x5145;&#xA0;ArrayBuffer &#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x800C;&#x5E94;&#x8BE5;&#x5148;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#xA0;ArrayBufferView&#xA0;&#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x7528;&#x5177;&#x4F53;&#x7684;&#x683C;&#x5F0F;&#x6765;&#x5448;&#x73B0;&#xA0;ArrayBuffer&#xA0;&#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x6B64;&#x5BF9;&#x8C61;&#x6765;&#x8BFB;&#x5199;&#xA0;ArrayBuffer&#xA0;&#x7684;&#x5185;&#x5BB9;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"><code>ArrayBuffer</code></a>&#x8BFB;&#x53D6;&#x65F6;&#x7684;&#x5B57;&#x8282;&#x504F;&#x79FB;&#x91CF;<strong>.</strong>&#x521B;&#x5EFA;&#x65F6;&#x5DF2;&#x88AB;&#x56FA;&#x5316;,&#x56E0;&#x6B64;&#x662F;&#x53EA;&#x8BFB;&#x7684;.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length" class="new"><code>TypedArray.prototype.length</code></a> <span title="&#x8BE5;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x65E0;&#x6CD5;&#x66F4;&#x6539;" class="inlineIndicator readOnly readOnlyInline">&#x53EA;&#x8BFB; </span></dt>
 <dd>&#x8FD4;&#x56DE;&#x5728;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x7684;&#x6570;&#x91CF;<strong>.</strong>&#x521B;&#x5EFA;&#x65F6;&#x5DF2;&#x88AB;&#x56FA;&#x5316;,&#x56E0;&#x6B64;&#x662F;&#x53EA;&#x8BFB;&#x7684;.</dd>
</dl><p></p>

 <h3 id="&#x65B9;&#x6CD5;_2">&#x65B9;&#x6CD5;</h3>

 <p></p><dl><dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin" class="new"><code>TypedArray.prototype.copyWithin()</code></a></dt>
 <dd>&#x6D45;&#x62F7;&#x8D1D;&#x6570;&#x7EC4;&#x7684;&#x90E8;&#x5206;&#x5143;&#x7D20;&#x5230;&#x540C;&#x4E00;&#x6570;&#x7EC4;&#x7684;&#x4E0D;&#x540C;&#x4F4D;&#x7F6E;&#xFF0C;&#x4E14;&#x4E0D;&#x6539;&#x53D8;&#x6570;&#x7EC4;&#x7684;&#x5927;&#x5C0F;&#xFF0C;&#x8FD4;&#x56DE;&#x8BE5;&#x6570;&#x7EC4;.&#xA0;&#x53C2;&#x89C1;&#xA0;<a title="copyWithin() &#x65B9;&#x6CD5;&#x4F1A;&#x6D45;&#x62F7;&#x8D1D;&#x6570;&#x7EC4;&#x7684;&#x90E8;&#x5206;&#x5143;&#x7D20;&#x5230;&#x540C;&#x4E00;&#x6570;&#x7EC4;&#x7684;&#x4E0D;&#x540C;&#x4F4D;&#x7F6E;&#xFF0C;&#x4E14;&#x4E0D;&#x6539;&#x53D8;&#x6570;&#x7EC4;&#x7684;&#x5927;&#x5C0F;&#xFF0C;&#x8FD4;&#x56DE;&#x8BE5;&#x6570;&#x7EC4;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin"><code>Array.prototype.copyWithin()</code></a>.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/entries" class="new"><code>TypedArray.prototype.entries()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#xA0;<code><strong>Array Iterator</strong></code>&#xA0;&#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x5305;&#x542B;&#x6570;&#x7EC4;&#x4E2D;&#x6BCF;&#x4E00;&#x4E2A;&#x7D22;&#x5F15;&#x7684;&#x952E;&#x503C;&#x5BF9;.&#x53C2;&#x89C1;&#xA0;<a title="entries() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#xA0;Array Iterator &#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x5305;&#x542B;&#x6570;&#x7EC4;&#x4E2D;&#x6BCF;&#x4E00;&#x4E2A;&#x7D22;&#x5F15;&#x7684;&#x952E;&#x503C;&#x5BF9;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/entries"><code>Array.prototype.entries()</code></a>.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/every" class="new"><code>TypedArray.prototype.every()</code></a></dt>
 <dd>&#x6D4B;&#x8BD5;&#x6570;&#x7EC4;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x662F;&#x5426;&#x90FD;&#x901A;&#x8FC7;&#x4E86;&#x6307;&#x5B9A;&#x51FD;&#x6570;&#x7684;&#x6D4B;&#x8BD5;. &#x53C2;&#x89C1;<a title="every() &#x65B9;&#x6CD5;&#x6D4B;&#x8BD5;&#x6570;&#x7EC4;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x662F;&#x5426;&#x90FD;&#x901A;&#x8FC7;&#x4E86;&#x6307;&#x5B9A;&#x51FD;&#x6570;&#x7684;&#x6D4B;&#x8BD5;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every"><code>Array.prototype.every()</code></a>.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/fill" class="new"><code>TypedArray.prototype.fill()</code></a></dt>
 <dd>&#x5C06;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x4E2D;&#x6307;&#x5B9A;&#x533A;&#x95F4;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x7684;&#x503C;, &#x90FD;&#x66FF;&#x6362;&#x6210;&#x6216;&#x8005;&#x8BF4;&#x586B;&#x5145;&#x6210;&#x4E3A;&#x67D0;&#x4E2A;&#x56FA;&#x5B9A;&#x7684;&#x503C;. &#x53C2;&#x89C1;&#xA0;<a title="&#x4F7F;&#x7528;&#xA0;fill() &#x65B9;&#x6CD5;&#xFF0C;&#x53EF;&#x4EE5;&#x5C06;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x4E2D;&#x6307;&#x5B9A;&#x533A;&#x95F4;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x7684;&#x503C;, &#x90FD;&#x66FF;&#x6362;&#x6210;&#x6216;&#x8005;&#x8BF4;&#x586B;&#x5145;&#x6210;&#x4E3A;&#x67D0;&#x4E2A;&#x56FA;&#x5B9A;&#x7684;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill"><code>Array.prototype.fill()</code></a>.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/filter" class="new"><code>TypedArray.prototype.filter()</code></a></dt>
 <dd>&#x4F7F;&#x7528;&#x6307;&#x5B9A;&#x7684;&#x51FD;&#x6570;&#x6D4B;&#x8BD5;&#x6240;&#x6709;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x6240;&#x6709;&#x901A;&#x8FC7;&#x6D4B;&#x8BD5;&#x7684;&#x5143;&#x7D20;&#x7684;&#x65B0;&#x6570;&#x7EC4;. &#x53C2;&#x89C1; <a title="filter()&#xA0;&#x65B9;&#x6CD5;&#x4F7F;&#x7528;&#x6307;&#x5B9A;&#x7684;&#x51FD;&#x6570;&#x6D4B;&#x8BD5;&#x6240;&#x6709;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x6240;&#x6709;&#x901A;&#x8FC7;&#x6D4B;&#x8BD5;&#x7684;&#x5143;&#x7D20;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"><code>Array.prototype.filter()</code></a>.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/find" class="new"><code>TypedArray.prototype.find()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6EE1;&#x8DB3;&#x63D0;&#x4F9B;&#x7684;&#x51FD;&#x6570;&#x7684;&#x6D4B;&#x8BD5;&#x7684;&#x5143;&#x7D20;,&#x82E5;&#x662F;&#x6CA1;&#x6709;&#x6EE1;&#x8DB3;&#x7684;&#x5143;&#x7D20;&#x5219;&#x8FD4;&#x56DE;<code>undefined</code> . &#x53C2;&#x89C1; <a title="&#x5982;&#x679C;&#x6570;&#x7EC4;&#x4E2D;&#x67D0;&#x4E2A;&#x5143;&#x7D20;&#x6EE1;&#x8DB3;&#x6D4B;&#x8BD5;&#x6761;&#x4EF6;&#xFF0C;find()&#xA0;&#x65B9;&#x6CD5;&#x5C31;&#x4F1A;&#x8FD4;&#x56DE;&#x90A3;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x503C;&#xFF0C;&#x5982;&#x679C;&#x6CA1;&#x6709;&#x6EE1;&#x8DB3;&#x6761;&#x4EF6;&#x7684;&#x5143;&#x7D20;&#xFF0C;&#x5219;&#x8FD4;&#x56DE;&#xA0;undefined&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find"><code>Array.prototype.find()</code></a>.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex" class="new"><code>TypedArray.prototype.findIndex()</code></a></dt>
 <dd>&#x67E5;&#x627E;&#x6570;&#x7EC4;&#x4E2D;&#x67D0;&#x6307;&#x5B9A;&#x5143;&#x7D20;&#x7684;&#x7D22;&#x5F15;, &#x5982;&#x679C;&#x627E;&#x4E0D;&#x5230;&#x6307;&#x5B9A;&#x7684;&#x5143;&#x7D20;, &#x5219;&#x8FD4;&#x56DE; -1. &#x53C2;&#x89C1; <a title="findIndex()&#x65B9;&#x6CD5;&#x7528;&#x6765;&#x67E5;&#x627E;&#x6570;&#x7EC4;&#x4E2D;&#x67D0;&#x6307;&#x5B9A;&#x5143;&#x7D20;&#x7684;&#x7D22;&#x5F15;, &#x5982;&#x679C;&#x627E;&#x4E0D;&#x5230;&#x6307;&#x5B9A;&#x7684;&#x5143;&#x7D20;, &#x5219;&#x8FD4;&#x56DE; -1." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex"><code>Array.prototype.findIndex()</code></a>.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/forEach" class="new"><code>TypedArray.prototype.forEach()</code></a></dt>
 <dd>&#x5BF9;&#x6570;&#x7EC4;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x63D0;&#x4F9B;&#x7684;&#x51FD;&#x6570;(&#x56DE;&#x8C03;&#x51FD;&#x6570;). &#x53C2;&#x89C1;&#xA0;<a title="forEach() &#x65B9;&#x6CD5;&#x5BF9;&#x6570;&#x7EC4;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x63D0;&#x4F9B;&#x7684;&#x51FD;&#x6570;(&#x56DE;&#x8C03;&#x51FD;&#x6570;)&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"><code>Array.prototype.forEach()</code></a>.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes" class="new"><code>TypedArray.prototype.includes()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></dt>
 <dd>&#x786E;&#x5B9A;&#x4E00;&#x4E2A;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x662F;&#x5426;&#x5305;&#x62EC;&#x4E86;&#x67D0;&#x4E2A;&#x5143;&#x7D20;,&#x5305;&#x542B;&#x5C31;&#x8FD4;&#x56DE;true,&#x4E0D;&#x5305;&#x542B;&#x5C31;&#x8FD4;&#x56DE;false.&#x53C2;&#x89C1;&#xA0;<a title="includes() &#x65B9;&#x6CD5;&#x7528;&#x6765;&#x5224;&#x65AD;&#x5F53;&#x524D;&#x6570;&#x7EC4;&#x662F;&#x5426;&#x5305;&#x542B;&#x67D0;&#x6307;&#x5B9A;&#x7684;&#x503C;&#xFF0C;&#x5982;&#x679C;&#x662F;&#xFF0C;&#x5219;&#x8FD4;&#x56DE; true&#xFF0C;&#x5426;&#x5219;&#x8FD4;&#x56DE; false&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes"><code>Array.prototype.includes()</code></a>.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf" class="new"><code>TypedArray.prototype.indexOf()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x4E2D;&#x7B2C;&#x4E00;&#x4E2A;&#x7B49;&#x4E8E;&#x6307;&#x5B9A;&#x503C;&#x5F97;&#x5143;&#x7D20;&#x7684;&#x7D22;&#x5F15;,&#x5982;&#x679C;&#x627E;&#x4E0D;&#x5230;&#x5219;&#x8FD4;&#x56DE;-1. &#x53C2;&#x89C1;&#xA0;<a title="indexOf()&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x7ED9;&#x5B9A;&#x5143;&#x7D20;&#x80FD;&#x627E;&#x5728;&#x6570;&#x7EC4;&#x4E2D;&#x627E;&#x5230;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x7D22;&#x5F15;&#x503C;&#xFF0C;&#x5426;&#x5219;&#x8FD4;&#x56DE;-1&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf"><code>Array.prototype.indexOf()</code></a>.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/join" class="new"><code>TypedArray.prototype.join()</code></a></dt>
 <dd>&#x5C06;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x8FDE;&#x63A5;&#x6210;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;. &#x53C2;&#x89C1; <a title="join() &#x65B9;&#x6CD5;&#x5C06;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x8FDE;&#x63A5;&#x6210;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join"><code>Array.prototype.join()</code></a>.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/keys" class="new"><code>TypedArray.prototype.keys()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x5305;&#x542B;&#x6570;&#x7EC4;&#x7D22;&#x5F15;&#x7684;&#x6570;&#x7EC4;&#x8FED;&#x4EE3;&#x5668;. &#x53C2;&#x89C1; <a title="&#x6570;&#x7EC4;&#x7684; keys() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x7D22;&#x5F15;&#x7684;&#x8FED;&#x4EE3;&#x5668;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys"><code>Array.prototype.keys()</code></a>.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf" class="new"><code>TypedArray.prototype.lastIndexOf()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x4E2D;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x7B49;&#x4E8E;&#x6307;&#x5B9A;&#x503C;&#x5F97;&#x5143;&#x7D20;&#x7684;&#x7D22;&#x5F15;,&#x5982;&#x679C;&#x627E;&#x4E0D;&#x5230;&#x5219;&#x8FD4;&#x56DE;-1.&#x53C2;&#x89C1;&#xA0;<a title="lastIndexOf() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x5143;&#x7D20;&#xFF08;&#x4E5F;&#x5373;&#x6709;&#x6548;&#x7684; JavaScript &#x503C;&#x6216;&#x53D8;&#x91CF;&#xFF09;&#x5728;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x7684;&#x7D22;&#x5F15;&#xFF0C;&#x5982;&#x679C;&#x4E0D;&#x5B58;&#x5728;&#x5219;&#x8FD4;&#x56DE; -1&#x3002;&#x4ECE;&#x6570;&#x7EC4;&#x7684;&#x540E;&#x9762;&#x5411;&#x524D;&#x67E5;&#x627E;&#xFF0C;&#x4ECE; fromIndex &#x5904;&#x5F00;&#x59CB;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf"><code>Array.prototype.lastIndexOf()</code></a>.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map" class="new"><code>TypedArray.prototype.map()</code></a></dt>
 <dd>&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x7531;&#x539F;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x65B9;&#x6CD5;&#x540E;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x7EC4;&#x6210;&#x7684;&#x65B0;&#x6570;&#x7EC4;.&#x53C2;&#x89C1; <a title="map() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7531;&#x539F;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x65B9;&#x6CD5;&#x540E;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x7EC4;&#x6210;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map"><code>Array.prototype.map()</code></a>.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/move" class="new"><code>TypedArray.prototype.move()</code></a> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> <span class="inlineIndicator unimplemented unimplementedInline">&#x672A;&#x5B9E;&#x73B0;</span></dt>
 <dd>&#x4EE5;&#x524D;&#x7684;&#x4E0D;&#x6807;&#x51C6;&#x7248;&#x672C;&#x7684; <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin" class="new"><code>TypedArray.prototype.copyWithin()</code></a>.</dd>
 <dt><a title="reduce()&#xA0;&#x65B9;&#x6CD5;&#x63A5;&#x53D7;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x4F5C;&#x4E3A;&#x53C2;&#x6570;&#xFF0C;&#x8FD9;&#x4E2A;&#x51FD;&#x6570;&#x4F5C;&#x4E3A;&#x4E00;&#x4E2A;&#x7D2F;&#x52A0;&#x5668;&#xFF0C;&#x4ECE;&#x5DE6;&#x5230;&#x53F3;&#x904D;&#x5386;&#x6574;&#x4E2A;&#x7C7B;&#x578B;&#x6570;&#x7EC4;&#xFF0C;&#x6700;&#x540E;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5355;&#x4E00;&#x7684;&#x503C;. &#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x548C;Array.prototype.reduce()&#x4F7F;&#x7528;&#x4E86;&#x540C;&#x6837;&#x7684;&#x7B97;&#x6CD5;. TypedArray&#xA0;&#x662F;&#x4E00;&#x4E2A;&#xA0;&#x7C7B;&#x578B;&#x6570;&#x7EC4;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduce"><code>TypedArray.prototype.reduce()</code></a></dt>
 <dd>&#x63A5;&#x6536;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x4F5C;&#x4E3A;&#x7D2F;&#x52A0;&#x5668;&#xFF08;accumulator),&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x503C;&#xFF08;&#x4ECE;&#x5DE6;&#x5230;&#x53F3;&#xFF09;&#x5F00;&#x59CB;&#x5408;&#x5E76;&#xFF0C;&#x6700;&#x7EC8;&#x4E3A;&#x4E00;&#x4E2A;&#x503C;. &#x53C2;&#x89C1;<a title="reduce()&#xA0;&#x65B9;&#x6CD5;&#x63A5;&#x6536;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x4F5C;&#x4E3A;&#x7D2F;&#x52A0;&#x5668;&#xFF08;accumulator&#xFF09;&#xFF0C;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x503C;&#xFF08;&#x4ECE;&#x5DE6;&#x5230;&#x53F3;&#xFF09;&#x5F00;&#x59CB;&#x5408;&#x5E76;&#xFF0C;&#x6700;&#x7EC8;&#x4E3A;&#x4E00;&#x4E2A;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"><code>Array.prototype.reduce()</code></a>.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduceRight" class="new"><code>TypedArray.prototype.reduceRight()</code></a></dt>
 <dd>&#x63A5;&#x53D7;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x4F5C;&#x4E3A;&#x7D2F;&#x52A0;&#x5668;&#xFF08;accumulator&#xFF09;,&#x8BA9;&#x6BCF;&#x4E2A;&#x503C;&#xFF08;&#x4ECE;&#x53F3;&#x5230;&#x5DE6;&#xFF0C;&#x4EA6;&#x5373;&#x4ECE;&#x5C3E;&#x5230;&#x5934;&#xFF09;&#x7F29;&#x51CF;&#x4E3A;&#x4E00;&#x4E2A;&#x503C;.&#xFF08;&#x4E0E;&#xA0;<code>reduce()</code>&#xA0;&#x7684;&#x6267;&#x884C;&#x65B9;&#x5411;&#x76F8;&#x53CD;&#xFF09;. &#x53C2;&#x89C1;<a title="reduceRight()&#xA0;&#x65B9;&#x6CD5;&#x63A5;&#x53D7;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x4F5C;&#x4E3A;&#x7D2F;&#x52A0;&#x5668;&#xFF08;accumulator&#xFF09;&#xFF0C;&#x8BA9;&#x6BCF;&#x4E2A;&#x503C;&#xFF08;&#x4ECE;&#x53F3;&#x5230;&#x5DE6;&#xFF0C;&#x4EA6;&#x5373;&#x4ECE;&#x5C3E;&#x5230;&#x5934;&#xFF09;&#x7F29;&#x51CF;&#x4E3A;&#x4E00;&#x4E2A;&#x503C;&#x3002;&#xFF08;&#x4E0E; reduce() &#x7684;&#x6267;&#x884C;&#x65B9;&#x5411;&#x76F8;&#x53CD;&#xFF09;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight"><code>Array.prototype.reduceRight()</code></a>.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reverse" class="new"><code>TypedArray.prototype.reverse()</code></a></dt>
 <dd>&#x98A0;&#x5012;&#x6570;&#x7EC4;&#x4E2D;&#x5143;&#x7D20;&#x7684;&#x4F4D;&#x7F6E;&#x3002;&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x4F1A;&#x6210;&#x4E3A;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#xFF0C;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x4F1A;&#x6210;&#x4E3A;&#x7B2C;&#x4E00;&#x4E2A;. &#x53C2;&#x89C1; <a title="reverse()&#xA0;&#x65B9;&#x6CD5;&#x98A0;&#x5012;&#x6570;&#x7EC4;&#x4E2D;&#x5143;&#x7D20;&#x7684;&#x4F4D;&#x7F6E;&#x3002;&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x4F1A;&#x6210;&#x4E3A;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#xFF0C;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x4F1A;&#x6210;&#x4E3A;&#x7B2C;&#x4E00;&#x4E2A;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse"><code>Array.prototype.reverse()</code></a>.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set" class="new"><code>TypedArray.prototype.set()</code></a></dt>
 <dd>&#x8BFB;&#x53D6;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x4FDD;&#x5B58;&#x5230;&#x683C;&#x5F0F;&#x5316;&#x6570;&#x7EC4;&#x4E2D;.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/slice" class="new"><code>TypedArray.prototype.slice()</code></a></dt>
 <dd>&#x6D45;&#x590D;&#x5236;&#xFF08;shallow copy&#xFF09;&#x6570;&#x7EC4;&#x7684;&#x4E00;&#x90E8;&#x5206;&#x5230;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x6570;&#x7EC4;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x65B0;&#x6570;&#x7EC4;. &#x53C2;&#x89C1; <a title="slice() &#x65B9;&#x6CD5;&#x4F1A;&#x6D45;&#x590D;&#x5236;&#xFF08;shallow copy&#xFF09;&#x6570;&#x7EC4;&#x7684;&#x4E00;&#x90E8;&#x5206;&#x5230;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x6570;&#x7EC4;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x65B0;&#x6570;&#x7EC4;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"><code>Array.prototype.slice()</code></a>.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/some" class="new"><code>TypedArray.prototype.some()</code></a></dt>
 <dd>&#x6570;&#x7EC4;&#x4E2D;&#x53EA;&#x8981;&#x6709;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x6EE1;&#x8DB3;&#x63D0;&#x4F9B;&#x7684;&#x6D4B;&#x8BD5;&#x51FD;&#x6570;&#x7684;&#x6D4B;&#x8BD5;&#x5C31;&#x8FD4;&#x56DE;true,&#x5426;&#x5219;&#x8FD4;&#x56DE;false. &#x53C2;&#x89C1;&#xA0;<a title="some()&#xA0;&#x65B9;&#x6CD5;&#x6D4B;&#x8BD5;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x67D0;&#x4E9B;&#x5143;&#x7D20;&#x662F;&#x5426;&#x901A;&#x8FC7;&#x4E86;&#x6307;&#x5B9A;&#x51FD;&#x6570;&#x7684;&#x6D4B;&#x8BD5;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some"><code>Array.prototype.some()</code></a>.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/sort" class="new"><code>TypedArray.prototype.sort()</code></a></dt>
 <dd>&#x5BF9;&#x6570;&#x7EC4;&#x8FDB;&#x884C;&#x6392;&#x5E8F;,&#x5E76;&#x8FD4;&#x56DE;&#x539F;&#x6570;&#x7EC4;(&#x662F;&#x6539;&#x53D8;&#x539F;&#x6570;&#x7EC4;). &#x53C2;&#x89C1; <a title="sort() &#x65B9;&#x6CD5;&#x5BF9;&#x6570;&#x7EC4;&#x7684;&#x5143;&#x7D20;&#x505A;&#x539F;&#x5730;&#x7684;&#x6392;&#x5E8F;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x6570;&#x7EC4;&#x3002; sort &#x6392;&#x5E8F;&#x53EF;&#x80FD;&#x662F;&#x4E0D;&#x7A33;&#x5B9A;&#x7684;&#x3002;&#x9ED8;&#x8BA4;&#x6309;&#x7167;&#x5B57;&#x7B26;&#x4E32;&#x7684;Unicode&#x7801;&#x4F4D;&#x70B9;&#xFF08;code point&#xFF09;&#x6392;&#x5E8F;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"><code>Array.prototype.sort()</code></a>.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray" class="new"><code>TypedArray.prototype.subarray()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x7ED9;&#x5B9A;&#x7684;&#x8D77;&#x59CB;&#x548C;&#x7ED3;&#x675F;&#x7D22;&#x5F15;&#x4E4B;&#x95F4;&#x7684;&#x5143;&#x7D20;&#x7EC4;&#x6210;&#x7684;&#x65B0;&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/values" class="new"><code>TypedArray.prototype.values()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x6709;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x7EC4;&#x6210;&#x7684;&#x65B0;&#x7684;&#x6570;&#x7EC4;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;. &#x53C2;&#x89C1; <a title="values() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#xA0;Array Iterator&#xA0;&#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x5305;&#x542B;&#x6570;&#x7EC4;&#x6BCF;&#x4E2A;&#x7D22;&#x5F15;&#x7684;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/values"><code>Array.prototype.values()</code></a>.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toLocaleString" class="new"><code>TypedArray.prototype.toLocaleString()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5C06;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x672C;&#x5730;&#x5316;&#x540E;&#x7EC4;&#x6210;&#x7684;&#x5B57;&#x7B26;&#x4E32;. &#x53C2;&#x89C1; <a title="toLocaleString() &#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x3002;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x5C06;&#x4F7F;&#x7528;&#x5404;&#x81EA;&#x7684;&#xA0;toLocaleString &#x65B9;&#x6CD5;&#x8F6C;&#x6210;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8FD9;&#x4E9B;&#x5B57;&#x7B26;&#x4E32;&#x5C06;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x7279;&#x5B9A;&#x8BED;&#x8A00;&#x73AF;&#x5883;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF08;&#x4F8B;&#x5982;&#x4E00;&#x4E2A;&#x9017;&#x53F7; &quot;,&quot;&#xFF09;&#x9694;&#x5F00;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString"><code>Array.prototype.toLocaleString()</code></a>.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toString"><code>TypedArray.prototype.toString()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7531;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x5B57;&#x7B26;&#x4E32;&#x5316;&#x540E;&#x7EC4;&#x6210;&#x7684;&#x5B57;&#x7B26;&#x4E32;. &#x53C2;&#x89C1; <a title="toString() &#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8868;&#x793A;&#x6307;&#x5B9A;&#x7684;&#x6570;&#x7EC4;&#x53CA;&#x5176;&#x5143;&#x7D20;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toString"><code>Array.prototype.toString()</code></a>.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator" class="new"><code>TypedArray.prototype[@@iterator]()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x6570;&#x7EC4;&#x4E2D;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x65B0;&#x7684;&#x6570;&#x7EC4;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;.</dd>
</dl><p></p>
 </dt>
</dl>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x8BF4;&#x660E;</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" class="external" href="https://www.khronos.org/registry/typedarray/specs/latest/" title="Typed Array Specification">Typed Array Specification</a></td>
   <td><span class="spec-Obsolete">Obsolete</span></td>
   <td>Defined as <code>TypedArray</code> and <code>ArrayBufferView</code> interface with typed array view types. Superseded by ECMAScript 6.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-typedarray-objects" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">TypedArray Objects</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition in an ECMA standard. Specified behaviour for indexed and named properties. Specified that <code>new</code> is required.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-typedarray-objects" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">TypedArray Objects</small></a></td>
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
   <td><a title="Released on 2011-03-22." href="/en-US/Firefox/Releases/4">4.0</a> (2)</td>
   <td>10</td>
   <td>11.6</td>
   <td>5.1</td>
  </tr>
  <tr>
   <td>Indexed properties not consulting prototype</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span> [1]</td>
   <td><a title="Released on 2013-10-29." href="/en-US/Firefox/Releases/25">25</a> (25)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
  <tr>
   <td>Named properties</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><a title="Released on 2014-06-10." href="/en-US/Firefox/Releases/30">30</a> (30)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
  <tr>
   <td><code>new</code> is required</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><a title="Released on 2016-01-26." href="/en-US/Firefox/Releases/44">44</a> (44)</td>
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
   <th>Android Webview</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
   <th>Chrome for Android</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>4.0</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>4.0 (2)</td>
   <td>10</td>
   <td>11.6</td>
   <td>4.2</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
  <tr>
   <td>Indexed properties not consulting prototype</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span> [1]</td>
   <td>25.0 (25)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span> [1]</td>
  </tr>
  <tr>
   <td>Named properties</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>30.0 (30)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
  <tr>
   <td><code>new</code> is required</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>44.0 (44)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<p>[1] <code>-1</code> and similar are not considered as indexed properties and therefore return the value of the prototype property.</p>

<h2 id="&#x517C;&#x5BB9;&#x6027;&#x6CE8;&#x610F;&#x4E8B;&#x9879;">&#x517C;&#x5BB9;&#x6027;&#x6CE8;&#x610F;&#x4E8B;&#x9879;</h2>

<p>&#x4ECE;ECMAScript 2015 (ES6)&#x5F00;&#x59CB;,TypedArray &#x6784;&#x9020;&#x51FD;&#x6570;&#x4F7F;&#x7528;&#x7684;&#x65F6;&#x5019;&#x5FC5;&#x987B;&#x8981;&#x4F7F;&#x7528;new.&#x4ECE;&#x73B0;&#x5728;&#x5F00;&#x59CB;&#x4E0D;&#x4F7F;&#x7528;new&#x8C03;&#x7528;TypedArray&#x6784;&#x9020;&#x51FD;&#x6570;&#x5C06;&#x4F1A;&#x629B;&#x51FA;&#x5F02;&#x5E38;<a title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a></p>

<pre class="brush: js example-bad">var dv = Int8Array([1, 2, 3]);
// TypeError: &#x4E0D;&#x4F7F;&#x7528;new&#x8C03;&#x7528;&#x5185;&#x7F6E;&#x7684;Int8Array&#x6784;&#x9020;&#x51FD;&#x6570;&#x662F;&#x88AB;&#x7981;&#x6B62;&#x7684;
</pre>

<pre class="brush: js example-good">var dv = new Int8Array([1, 2, 3]);</pre>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="en/JavaScript typed arrays" href="/en-US/docs/Web/JavaScript/Typed_arrays">JavaScript typed arrays</a></li>
 <li><a title="&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x62E5;&#x6709;&#x6307;&#x5B9A;&#x5927;&#x5C0F;&#x7684;ArrayBuffer&#x5BF9;&#x8C61;&#x3002;&#x5B83;&#x7684;&#x5185;&#x5BB9;&#x90FD;&#x88AB;&#x521D;&#x59CB;&#x5316;&#x4E3A;0&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"><code>ArrayBuffer</code></a></li>
 <li><a title="DataView&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x4E0E;&#x5E73;&#x53F0;&#x4E2D;&#x5B57;&#x8282;&#x5728;&#x5185;&#x5B58;&#x4E2D;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;(&#x5B57;&#x8282;&#x5E8F;)&#x65E0;&#x5173;&#x7684;&#x4ECE;ArrayBuffer&#x8BFB;&#x5199;&#x591A;&#x6570;&#x5B57;&#x7C7B;&#x578B;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView"><code>DataView</code></a></li>
</ul>
                  
                
              