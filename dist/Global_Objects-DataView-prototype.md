
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p><code><strong>DataView</strong></code><strong><code>.prototype</code></strong>&#xA0;&#x8868;&#x793A;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView" title="DataView&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x4E0E;&#x5E73;&#x53F0;&#x4E2D;&#x5B57;&#x8282;&#x5728;&#x5185;&#x5B58;&#x4E2D;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;(&#x5B57;&#x8282;&#x5E8F;)&#x65E0;&#x5173;&#x7684;&#x4ECE;ArrayBuffer&#x8BFB;&#x5199;&#x591A;&#x6570;&#x5B57;&#x7C7B;&#x578B;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;."><code>DataView</code></a>&#x7684;&#x539F;&#x578B;</p>

<div><table class="standard-table"> 
  <thead> 
    <tr> 
      <th class="header" colspan="2"><code>DataView.prototype</code> &#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x7279;&#x6027;&#xFF1A;</th> 
    </tr> 
  </thead> 
  <tbody> 
    <tr> 
      <td>writable</td> 
      <td>false</td> 
    </tr> 
    <tr> 
      <td>enumerable</td> 
      <td>false</td> 
    </tr> 
    <tr> 
      <td>configurable</td> 
      <td>false</td> 
    </tr> 
  </tbody> 
</table></div>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>DataView</code> &#x7684;&#x5B9E;&#x4F8B;&#x4ECE;<font face="Consolas, Liberation Mono, Courier, monospace">DataView.prototype</font>&#x7EE7;&#x627F;&#x3002;&#x5C31;&#x50CF;&#x6240;&#x6709;&#x7684;&#x6784;&#x9020;&#x5668;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x4FEE;&#x6539;&#x539F;&#x578B;&#x6765;&#x6539;&#x53D8;&#x751F;&#x6210;&#x7684;<code>DataView</code>&#x5B9E;&#x4F8B;&#x3002;</p>

<h2 id="&#x5C5E;&#x6027;">&#x5C5E;&#x6027;</h2>

<dl>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/constructor" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>DataView.prototype.constructor</code></a></dt>
 <dd>&#x6307;&#x5B9A;&#x7528;&#x6765;&#x751F;&#x6210;&#x539F;&#x578B;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;.&#x521D;&#x59CB;&#x5316;&#x503C;&#x662F;&#x6807;&#x51C6;&#x5185;&#x7F6E;DataView&#x6784;&#x9020;&#x5668;.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/buffer" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>DataView.prototype.buffer</code></a> <span class="inlineIndicator readOnly readOnlyInline" title="&#x8BE5;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x65E0;&#x6CD5;&#x66F4;&#x6539;">&#x53EA;&#x8BFB; </span></dt>
 <dd>&#x88AB;&#x89C6;&#x56FE;&#x5F15;&#x5165;&#x7684;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="ArrayBuffer&#x5BF9;&#x8C61;&#x662F;&#x7528;&#x6765;&#x8868;&#x793A;&#x4E00;&#x4E2A;&#x901A;&#x7528;&#x7684;&#xFF0C;&#x56FA;&#x5B9A;&#x957F;&#x5EA6;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#x7F13;&#x51B2;&#x533A;&#x3002;&#x4F60;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x64CD;&#x7EB5;ArrayBuffer&#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x800C;&#x662F;,&#x4F60;&#x5E94;&#x8BE5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x8868;&#x793A;&#x7279;&#x5B9A;&#x683C;&#x5F0F;&#x7684;buffer&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;(typed array objects)&#x6216;&#x6570;&#x636E;&#x89C6;&#x56FE;&#x5BF9;&#x8C61;DataView &#x6765;&#x5BF9;buffer&#x7684;&#x5185;&#x5BB9;&#x8FDB;&#x884C;&#x8BFB;&#x53D6;&#x548C;&#x5199;&#x5165;&#x64CD;&#x4F5C;."><code>ArrayBuffer</code></a>.&#x521B;&#x5EFA;&#x5B9E;&#x4F8B;&#x7684;&#x65F6;&#x5019;&#x5DF2;&#x56FA;&#x5316;&#x56E0;&#x6B64;&#x662F;&#x53EA;&#x8BFB;&#x7684;.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/byteLength" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>DataView.prototype.byteLength</code></a> <span class="inlineIndicator readOnly readOnlyInline" title="&#x8BE5;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x65E0;&#x6CD5;&#x66F4;&#x6539;">&#x53EA;&#x8BFB; </span></dt>
 <dd>&#x4ECE; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="ArrayBuffer&#x5BF9;&#x8C61;&#x662F;&#x7528;&#x6765;&#x8868;&#x793A;&#x4E00;&#x4E2A;&#x901A;&#x7528;&#x7684;&#xFF0C;&#x56FA;&#x5B9A;&#x957F;&#x5EA6;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#x7F13;&#x51B2;&#x533A;&#x3002;&#x4F60;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x64CD;&#x7EB5;ArrayBuffer&#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x800C;&#x662F;,&#x4F60;&#x5E94;&#x8BE5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x8868;&#x793A;&#x7279;&#x5B9A;&#x683C;&#x5F0F;&#x7684;buffer&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;(typed array objects)&#x6216;&#x6570;&#x636E;&#x89C6;&#x56FE;&#x5BF9;&#x8C61;DataView &#x6765;&#x5BF9;buffer&#x7684;&#x5185;&#x5BB9;&#x8FDB;&#x884C;&#x8BFB;&#x53D6;&#x548C;&#x5199;&#x5165;&#x64CD;&#x4F5C;."><code>ArrayBuffer</code></a>&#x4E2D;&#x8BFB;&#x53D6;&#x7684;&#x5B57;&#x8282;&#x957F;&#x5EA6;. &#x521B;&#x5EFA;&#x5B9E;&#x4F8B;&#x7684;&#x65F6;&#x5019;&#x5DF2;&#x56FA;&#x5316;&#x56E0;&#x6B64;&#x662F;&#x53EA;&#x8BFB;&#x7684;.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/byteOffset" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>DataView.prototype.byteOffset</code></a> <span class="inlineIndicator readOnly readOnlyInline" title="&#x8BE5;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x65E0;&#x6CD5;&#x66F4;&#x6539;">&#x53EA;&#x8BFB; </span></dt>
 <dd>&#x4ECE; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="ArrayBuffer&#x5BF9;&#x8C61;&#x662F;&#x7528;&#x6765;&#x8868;&#x793A;&#x4E00;&#x4E2A;&#x901A;&#x7528;&#x7684;&#xFF0C;&#x56FA;&#x5B9A;&#x957F;&#x5EA6;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#x7F13;&#x51B2;&#x533A;&#x3002;&#x4F60;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x64CD;&#x7EB5;ArrayBuffer&#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x800C;&#x662F;,&#x4F60;&#x5E94;&#x8BE5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x8868;&#x793A;&#x7279;&#x5B9A;&#x683C;&#x5F0F;&#x7684;buffer&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;(typed array objects)&#x6216;&#x6570;&#x636E;&#x89C6;&#x56FE;&#x5BF9;&#x8C61;DataView &#x6765;&#x5BF9;buffer&#x7684;&#x5185;&#x5BB9;&#x8FDB;&#x884C;&#x8BFB;&#x53D6;&#x548C;&#x5199;&#x5165;&#x64CD;&#x4F5C;."><code>ArrayBuffer</code></a>&#x8BFB;&#x53D6;&#x65F6;&#x7684;&#x504F;&#x79FB;&#x5B57;&#x8282;&#x957F;&#x5EA6;. &#x521B;&#x5EFA;&#x5B9E;&#x4F8B;&#x7684;&#x65F6;&#x5019;&#x5DF2;&#x56FA;&#x5316;&#x56E0;&#x6B64;&#x662F;&#x53EA;&#x8BFB;&#x7684;.</dd>
</dl>

<h2 id="&#x65B9;&#x6CD5;">&#x65B9;&#x6CD5;</h2>

<h3 id="&#x8BFB;">&#x8BFB;</h3>

<dl>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/getInt8" title="getInt8()&#x65B9;&#x6CD5;&#x4ECE;DataView&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x83B7;&#x53D6;&#x4E00;&#x4E2A;&#x6709;&#x7B26;&#x53F7;&#x7684;8-bit&#x6574;&#x6570;(&#x4E00;&#x4E2A;&#x5B57;&#x8282;)."><code>DataView.prototype.getInt8()</code></a></dt>
 <dd><code>&#x4ECE;</code><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView" title="DataView&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x4E0E;&#x5E73;&#x53F0;&#x4E2D;&#x5B57;&#x8282;&#x5728;&#x5185;&#x5B58;&#x4E2D;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;(&#x5B57;&#x8282;&#x5E8F;)&#x65E0;&#x5173;&#x7684;&#x4ECE;ArrayBuffer&#x8BFB;&#x5199;&#x591A;&#x6570;&#x5B57;&#x7C7B;&#x578B;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;."><code>DataView</code></a>&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x83B7;&#x53D6;&#x4E00;&#x4E2A;8-bit&#x6570;(&#x4E00;&#x4E2A;&#x5B57;&#x8282;).</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/getUint8" title="getUint8()&#x65B9;&#x6CD5;&#x4ECE;DataView&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x83B7;&#x53D6;&#x4E00;&#x4E2A;&#x65E0;&#x7B26;&#x53F7;&#x7684;8-bit&#x6574;&#x6570;(&#x4E00;&#x4E2A;&#x5B57;&#x8282;)."><code>DataView.prototype.getUint8()</code></a></dt>
 <dd><code>&#x4ECE;</code><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView" title="DataView&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x4E0E;&#x5E73;&#x53F0;&#x4E2D;&#x5B57;&#x8282;&#x5728;&#x5185;&#x5B58;&#x4E2D;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;(&#x5B57;&#x8282;&#x5E8F;)&#x65E0;&#x5173;&#x7684;&#x4ECE;ArrayBuffer&#x8BFB;&#x5199;&#x591A;&#x6570;&#x5B57;&#x7C7B;&#x578B;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;."><code>DataView</code></a>&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x83B7;&#x53D6;&#x4E00;&#x4E2A;8-bit&#x6570;(&#x65E0;&#x7B26;&#x53F7;&#x5B57;&#x8282;).</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/getInt16" title="getInt16()&#x65B9;&#x6CD5;&#x4ECE;DataView&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x83B7;&#x53D6;&#x4E00;&#x4E2A;16-bit&#x6570;(&#x77ED;&#x6574;&#x578B;)."><code>DataView.prototype.getInt16()</code></a></dt>
 <dd><code>&#x4ECE;</code><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView" title="DataView&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x4E0E;&#x5E73;&#x53F0;&#x4E2D;&#x5B57;&#x8282;&#x5728;&#x5185;&#x5B58;&#x4E2D;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;(&#x5B57;&#x8282;&#x5E8F;)&#x65E0;&#x5173;&#x7684;&#x4ECE;ArrayBuffer&#x8BFB;&#x5199;&#x591A;&#x6570;&#x5B57;&#x7C7B;&#x578B;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;."><code>DataView</code></a>&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x83B7;&#x53D6;&#x4E00;&#x4E2A;16-bit&#x6570;(&#x77ED;&#x6574;&#x578B;).</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/getUint16" title="getUint16()&#x65B9;&#x6CD5;&#x4ECE;DataView&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x83B7;&#x53D6;&#x4E00;&#x4E2A;16-bit&#x6570;(&#x65E0;&#x7B26;&#x53F7;&#x77ED;&#x6574;&#x578B;)."><code>DataView.prototype.getUint16()</code></a></dt>
 <dd><code>&#x4ECE;</code><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView" title="DataView&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x4E0E;&#x5E73;&#x53F0;&#x4E2D;&#x5B57;&#x8282;&#x5728;&#x5185;&#x5B58;&#x4E2D;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;(&#x5B57;&#x8282;&#x5E8F;)&#x65E0;&#x5173;&#x7684;&#x4ECE;ArrayBuffer&#x8BFB;&#x5199;&#x591A;&#x6570;&#x5B57;&#x7C7B;&#x578B;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;."><code>DataView</code></a>&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x83B7;&#x53D6;&#x4E00;&#x4E2A;16-bit&#x6570;(&#x65E0;&#x7B26;&#x53F7;&#x77ED;&#x6574;&#x578B;).</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/getInt32" title="getInt32()&#x65B9;&#x6CD5;&#x4ECE;DataView&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x83B7;&#x53D6;&#x4E00;&#x4E2A;32-bit&#x6570;(&#x957F;&#x6574;&#x578B;)."><code>DataView.prototype.getInt32()</code></a></dt>
 <dd><code>&#x4ECE;</code><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView" title="DataView&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x4E0E;&#x5E73;&#x53F0;&#x4E2D;&#x5B57;&#x8282;&#x5728;&#x5185;&#x5B58;&#x4E2D;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;(&#x5B57;&#x8282;&#x5E8F;)&#x65E0;&#x5173;&#x7684;&#x4ECE;ArrayBuffer&#x8BFB;&#x5199;&#x591A;&#x6570;&#x5B57;&#x7C7B;&#x578B;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;."><code>DataView</code></a>&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x83B7;&#x53D6;&#x4E00;&#x4E2A;32-bit&#x6570;(&#x957F;&#x6574;&#x578B;).</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/getUint32" title="getUint32()&#x65B9;&#x6CD5;&#x4ECE;DataView&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x83B7;&#x53D6;&#x4E00;&#x4E2A;32-bit&#x6570;(&#x65E0;&#x7B26;&#x53F7;&#x957F;&#x6574;&#x578B;)."><code>DataView.prototype.getUint32()</code></a></dt>
 <dd><code>&#x4ECE;</code><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView" title="DataView&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x4E0E;&#x5E73;&#x53F0;&#x4E2D;&#x5B57;&#x8282;&#x5728;&#x5185;&#x5B58;&#x4E2D;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;(&#x5B57;&#x8282;&#x5E8F;)&#x65E0;&#x5173;&#x7684;&#x4ECE;ArrayBuffer&#x8BFB;&#x5199;&#x591A;&#x6570;&#x5B57;&#x7C7B;&#x578B;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;."><code>DataView</code></a>&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x83B7;&#x53D6;&#x4E00;&#x4E2A;32-bit&#x6570;(&#x65E0;&#x7B26;&#x53F7;&#x957F;&#x6574;&#x578B;).</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/getFloat32" title="getFloat32()&#x65B9;&#x6CD5;&#x4ECE;DataView&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x83B7;&#x53D6;&#x4E00;&#x4E2A;32-bit&#x6570;(&#x6D6E;&#x70B9;&#x578B;)."><code>DataView.prototype.getFloat32()</code></a></dt>
 <dd><code>&#x4ECE;</code><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView" title="DataView&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x4E0E;&#x5E73;&#x53F0;&#x4E2D;&#x5B57;&#x8282;&#x5728;&#x5185;&#x5B58;&#x4E2D;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;(&#x5B57;&#x8282;&#x5E8F;)&#x65E0;&#x5173;&#x7684;&#x4ECE;ArrayBuffer&#x8BFB;&#x5199;&#x591A;&#x6570;&#x5B57;&#x7C7B;&#x578B;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;."><code>DataView</code></a>&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x83B7;&#x53D6;&#x4E00;&#x4E2A;32-bit&#x6570;(&#x6D6E;&#x70B9;&#x578B;).</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/getFloat64" title="getFloat64()&#x65B9;&#x6CD5;&#x4ECE;DataView&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x83B7;&#x53D6;&#x4E00;&#x4E2A;64-bit&#x6570;(&#x53CC;&#x7CBE;&#x5EA6;&#x6D6E;&#x70B9;&#x578B;)."><code>DataView.prototype.getFloat64()</code></a></dt>
 <dd><code>&#x4ECE;</code><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView" title="DataView&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x4E0E;&#x5E73;&#x53F0;&#x4E2D;&#x5B57;&#x8282;&#x5728;&#x5185;&#x5B58;&#x4E2D;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;(&#x5B57;&#x8282;&#x5E8F;)&#x65E0;&#x5173;&#x7684;&#x4ECE;ArrayBuffer&#x8BFB;&#x5199;&#x591A;&#x6570;&#x5B57;&#x7C7B;&#x578B;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;."><code>DataView</code></a>&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x83B7;&#x53D6;&#x4E00;&#x4E2A;64-bit&#x6570;(&#x53CC;&#x7CBE;&#x5EA6;&#x6D6E;&#x70B9;&#x578B;).</dd>
</dl>

<h3 id="&#x5199;">&#x5199;</h3>

<dl>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/setInt8" title="setInt8()&#x4ECE;DataView&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x50A8;&#x5B58;&#x4E00;&#x4E2A;8-bit&#x6570;(&#x4E00;&#x4E2A;&#x5B57;&#x8282;)."><code>DataView.prototype.setInt8()</code></a></dt>
 <dd><code>&#x4ECE;</code><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView" title="DataView&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x4E0E;&#x5E73;&#x53F0;&#x4E2D;&#x5B57;&#x8282;&#x5728;&#x5185;&#x5B58;&#x4E2D;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;(&#x5B57;&#x8282;&#x5E8F;)&#x65E0;&#x5173;&#x7684;&#x4ECE;ArrayBuffer&#x8BFB;&#x5199;&#x591A;&#x6570;&#x5B57;&#x7C7B;&#x578B;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;."><code>DataView</code></a>&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x50A8;&#x5B58;&#x4E00;&#x4E2A;8-bit&#x6570;(&#x4E00;&#x4E2A;&#x5B57;&#x8282;).</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/setUint8" title="setUint8()&#x4ECE;DataView&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x50A8;&#x5B58;&#x4E00;&#x4E2A;8-bit&#x6570;(&#x65E0;&#x7B26;&#x53F7;&#x5B57;&#x8282;)."><code>DataView.prototype.setUint8()</code></a></dt>
 <dd><code>&#x4ECE;</code><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView" title="DataView&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x4E0E;&#x5E73;&#x53F0;&#x4E2D;&#x5B57;&#x8282;&#x5728;&#x5185;&#x5B58;&#x4E2D;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;(&#x5B57;&#x8282;&#x5E8F;)&#x65E0;&#x5173;&#x7684;&#x4ECE;ArrayBuffer&#x8BFB;&#x5199;&#x591A;&#x6570;&#x5B57;&#x7C7B;&#x578B;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;."><code>DataView</code></a>&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x50A8;&#x5B58;&#x4E00;&#x4E2A;8-bit&#x6570;(&#x65E0;&#x7B26;&#x53F7;&#x5B57;&#x8282;).</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/setInt16" title="setInt16()&#x4ECE;DataView&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x50A8;&#x5B58;&#x4E00;&#x4E2A;16-bit&#x6570;(&#x77ED;&#x6574;&#x578B;)."><code>DataView.prototype.setInt16()</code></a></dt>
 <dd><code>&#x4ECE;</code><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView" title="DataView&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x4E0E;&#x5E73;&#x53F0;&#x4E2D;&#x5B57;&#x8282;&#x5728;&#x5185;&#x5B58;&#x4E2D;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;(&#x5B57;&#x8282;&#x5E8F;)&#x65E0;&#x5173;&#x7684;&#x4ECE;ArrayBuffer&#x8BFB;&#x5199;&#x591A;&#x6570;&#x5B57;&#x7C7B;&#x578B;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;."><code>DataView</code></a>&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x50A8;&#x5B58;&#x4E00;&#x4E2A;16-bit&#x6570;(&#x77ED;&#x6574;&#x578B;).</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/setUint16" title="setUint16()&#x4ECE;DataView&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x50A8;&#x5B58;&#x4E00;&#x4E2A;16-bit&#x6570;(&#x65E0;&#x7B26;&#x53F7;&#x77ED;&#x6574;&#x578B;)."><code>DataView.prototype.setUint16()</code></a></dt>
 <dd><code>&#x4ECE;</code><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView" title="DataView&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x4E0E;&#x5E73;&#x53F0;&#x4E2D;&#x5B57;&#x8282;&#x5728;&#x5185;&#x5B58;&#x4E2D;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;(&#x5B57;&#x8282;&#x5E8F;)&#x65E0;&#x5173;&#x7684;&#x4ECE;ArrayBuffer&#x8BFB;&#x5199;&#x591A;&#x6570;&#x5B57;&#x7C7B;&#x578B;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;."><code>DataView</code></a>&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x50A8;&#x5B58;&#x4E00;&#x4E2A;16-bit&#x6570;(&#x65E0;&#x7B26;&#x53F7;&#x77ED;&#x6574;&#x578B;).</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/setInt32" title="setInt32()&#x4ECE;DataView&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x50A8;&#x5B58;&#x4E00;&#x4E2A;32-bit&#x6570;(&#x957F;&#x6574;&#x578B;)."><code>DataView.prototype.setInt32()</code></a></dt>
 <dd><code>&#x4ECE;</code><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView" title="DataView&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x4E0E;&#x5E73;&#x53F0;&#x4E2D;&#x5B57;&#x8282;&#x5728;&#x5185;&#x5B58;&#x4E2D;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;(&#x5B57;&#x8282;&#x5E8F;)&#x65E0;&#x5173;&#x7684;&#x4ECE;ArrayBuffer&#x8BFB;&#x5199;&#x591A;&#x6570;&#x5B57;&#x7C7B;&#x578B;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;."><code>DataView</code></a>&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x50A8;&#x5B58;&#x4E00;&#x4E2A;32-bit&#x6570;(&#x957F;&#x6574;&#x578B;).</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/setUint32" title="setUint32()&#x4ECE;DataView&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x50A8;&#x5B58;&#x4E00;&#x4E2A;32-bit&#x6570;(&#x65E0;&#x7B26;&#x53F7;&#x957F;&#x6574;&#x578B;)."><code>DataView.prototype.setUint32()</code></a></dt>
 <dd><code>&#x4ECE;</code><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView" title="DataView&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x4E0E;&#x5E73;&#x53F0;&#x4E2D;&#x5B57;&#x8282;&#x5728;&#x5185;&#x5B58;&#x4E2D;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;(&#x5B57;&#x8282;&#x5E8F;)&#x65E0;&#x5173;&#x7684;&#x4ECE;ArrayBuffer&#x8BFB;&#x5199;&#x591A;&#x6570;&#x5B57;&#x7C7B;&#x578B;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;."><code>DataView</code></a>&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x50A8;&#x5B58;&#x4E00;&#x4E2A;32-bit&#x6570;(&#x65E0;&#x7B26;&#x53F7;&#x957F;&#x6574;&#x578B;).</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/setFloat32" title="setFloat32()&#x4ECE;DataView&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x50A8;&#x5B58;&#x4E00;&#x4E2A;32-bit&#x6570;(&#x6D6E;&#x70B9;&#x578B;)."><code>DataView.prototype.setFloat32()</code></a></dt>
 <dd><code>&#x4ECE;</code><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView" title="DataView&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x4E0E;&#x5E73;&#x53F0;&#x4E2D;&#x5B57;&#x8282;&#x5728;&#x5185;&#x5B58;&#x4E2D;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;(&#x5B57;&#x8282;&#x5E8F;)&#x65E0;&#x5173;&#x7684;&#x4ECE;ArrayBuffer&#x8BFB;&#x5199;&#x591A;&#x6570;&#x5B57;&#x7C7B;&#x578B;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;."><code>DataView</code></a>&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x50A8;&#x5B58;&#x4E00;&#x4E2A;32-bit&#x6570;(&#x6D6E;&#x70B9;&#x578B;).</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/setFloat64" title="setFloat64()&#x4ECE;DataView&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x50A8;&#x5B58;&#x4E00;&#x4E2A;64-bit&#x6570;(&#x53CC;&#x7CBE;&#x5EA6;&#x6D6E;&#x70B9;&#x578B;)."><code>DataView.prototype.setFloat64()</code></a></dt>
 <dd><code>&#x4ECE;</code><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView" title="DataView&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x4E0E;&#x5E73;&#x53F0;&#x4E2D;&#x5B57;&#x8282;&#x5728;&#x5185;&#x5B58;&#x4E2D;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;(&#x5B57;&#x8282;&#x5E8F;)&#x65E0;&#x5173;&#x7684;&#x4ECE;ArrayBuffer&#x8BFB;&#x5199;&#x591A;&#x6570;&#x5B57;&#x7C7B;&#x578B;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;."><code>DataView</code></a>&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x50A8;&#x5B58;&#x4E00;&#x4E2A;64-bit&#x6570;(&#x53CC;&#x7CBE;&#x5EA6;&#x6D6E;&#x70B9;&#x578B;).</dd>
</dl>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-dataview.prototype" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">DataView.prototype</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
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
   <td>9.0</td>
   <td><a href="/en-US/Firefox/Releases/15" title="Released on 2012-08-28.">15.0</a> (15.0)</td>
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
   <td>Basic support</td>
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

<h2 id="&#x53E6;&#x89C1;">&#x53E6;&#x89C1;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView" title="DataView&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x4E0E;&#x5E73;&#x53F0;&#x4E2D;&#x5B57;&#x8282;&#x5728;&#x5185;&#x5B58;&#x4E2D;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;(&#x5B57;&#x8282;&#x5E8F;)&#x65E0;&#x5173;&#x7684;&#x4ECE;ArrayBuffer&#x8BFB;&#x5199;&#x591A;&#x6570;&#x5B57;&#x7C7B;&#x578B;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;."><code>DataView</code></a></li>
</ul>
                  
                
              