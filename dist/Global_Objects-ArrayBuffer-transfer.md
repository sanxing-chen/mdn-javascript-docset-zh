
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="notice experimental">
    <p><span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span> <strong>&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x4E2D;&#x7684;&#x529F;&#x80FD;</strong><br>&#x6B64;&#x529F;&#x80FD;&#x67D0;&#x4E9B;&#x6D4F;&#x89C8;&#x5668;&#x5C1A;&#x5728;&#x5F00;&#x53D1;&#x4E2D;&#xFF0C;&#x8BF7;&#x53C2;&#x8003;<a href="#Browser_compatibility">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;&#x8868;&#x683C;</a>&#x4EE5;&#x5F97;&#x5230;&#x5728;&#x4E0D;&#x540C;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#x9002;&#x5408;&#x4F7F;&#x7528;&#x7684;&#x524D;&#x7F00;&#x3002;&#x7531;&#x4E8E;&#x8BE5;&#x529F;&#x80FD;&#x5BF9;&#x5E94;&#x7684;&#x6807;&#x51C6;&#x6587;&#x6863;&#x53EF;&#x80FD;&#x88AB;&#x91CD;&#x65B0;&#x4FEE;&#x8BA2;&#xFF0C;&#x6240;&#x4EE5;&#x5728;&#x672A;&#x6765;&#x7248;&#x672C;&#x7684;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#x8BE5;&#x529F;&#x80FD;&#x7684;&#x8BED;&#x6CD5;&#x548C;&#x884C;&#x4E3A;&#x53EF;&#x80FD;&#x968F;&#x4E4B;&#x6539;&#x53D8;&#x3002;</p>
</div></div>

<p>&#xA0;&#x9759;&#x6001;<code><strong>ArrayBuf</strong></code><strong>fer.transfer()</strong> &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684;ArrayBuffer&#xFF0C; &#x5176;&#x5185;&#x5BB9;&#x53D6;&#x81EA;oldBuffer&#x7684;&#x6570;&#x636E;&#xFF0C;&#x5E76;&#x4E14;&#x6839;&#x636E; newByteLength &#x7684;&#x5927;&#x5C0F;&#x6765;&#x5BF9;&#x6570;&#x636E;&#x8FDB;&#x884C;&#x622A;&#x53D6;&#x6216;&#x8005;&#x4EE5;0&#x6269;&#x5C55;&#x3002; &#x5982;&#x679C; newByteLength &#x672A;&#x5B9A;&#x4E49;&#xFF0C;&#x5219;&#x4F7F;&#x7528; oldBuffer &#x7684;byteLength&#x3002;&#x8FD9;&#x4E2A;&#x64CD;&#x4F5C;&#x4F7F;&#x5F97; oldBuffer &#x5904;&#x4E8E;&#x88AB;&#x79FB;&#x9664;&#x7684;&#x72B6;&#x6001;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">ArrayBuffer.transfer(oldBuffer [, newByteLength]);</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>oldBuffer</code></dt>
 <dd>&#xA0;&#x8981;&#x8F6C;&#x79FB;&#x7684;<a title="ArrayBuffer&#x5BF9;&#x8C61;&#x662F;&#x7528;&#x6765;&#x8868;&#x793A;&#x4E00;&#x4E2A;&#x901A;&#x7528;&#x7684;&#xFF0C;&#x56FA;&#x5B9A;&#x957F;&#x5EA6;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#x7F13;&#x51B2;&#x533A;&#x3002;&#x4F60;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x64CD;&#x7EB5;ArrayBuffer&#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x800C;&#x662F;,&#x4F60;&#x5E94;&#x8BE5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x8868;&#x793A;&#x7279;&#x5B9A;&#x683C;&#x5F0F;&#x7684;buffer&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;(typed array objects)&#x6216;&#x6570;&#x636E;&#x89C6;&#x56FE;&#x5BF9;&#x8C61;DataView &#x6765;&#x5BF9;buffer&#x7684;&#x5185;&#x5BB9;&#x8FDB;&#x884C;&#x8BFB;&#x53D6;&#x548C;&#x5199;&#x5165;&#x64CD;&#x4F5C;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"><code>ArrayBuffer</code></a>&#x5BF9;&#x8C61;&#x3002;</dd>
 <dt>newByteLength</dt>
 <dd>&#x65B0; <code>ArrayBuffer</code> &#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x8282;&#x957F;&#x5EA6;&#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x4E00;&#x4E2A;&#x65B0;&#x7684;ArrayBuffer&#x5BF9;&#x8C61;&#x3002;</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>ArrayBuffer.transfer()</code>&#x65B9;&#x6CD5;&#x5141;&#x8BB8;&#x4F60;&#x589E;&#x957F;&#x548C;&#x79FB;&#x9664; <code>ArrayBuffer</code> &#x5BF9;&#x8C61;&#x3002;&#x4E0D;&#x9700;&#x590D;&#x5236;&#x5C31;&#x80FD;&#x589E;&#x957F;&#x4E00;&#x4E2A;ArrayBuffer&#x7684;&#x529F;&#x80FD;&#xFF0C;&#x5BF9;&#x4E8E;&#x5927;&#x7684;&#x7F13;&#x51B2;&#x533A;&#x6765;&#x8BF4;&#xFF0C;&#x6709;&#x901F;&#x5EA6;&#x4F18;&#x52BF; (&#x7C7B;&#x4F3C;realloc) &#x3002;&#x5F53;&#x91CA;&#x653E;&#x5E95;&#x5C42;&#x5185;&#x5B58;&#x65F6;&#xFF0C;&#x79FB;&#x9664;ArrayBuffer&#x7684;&#x529F;&#x80FD;&#x7ED9;&#x5F00;&#x53D1;&#x8005;&#x63D0;&#x4F9B;&#x4E86;&#x663E;&#x5F0F;&#x63A7;&#x5236;&#x3002;&#x8FD9;&#x907F;&#x514D;&#x4E86;&#x5FC5;&#x987B;&#x4E22;&#x5F03;&#x6240;&#x6709;&#x5F15;&#x7528;&#x548C;&#x7B49;&#x5F85;&#x5783;&#x573E;&#x56DE;&#x6536;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<pre class="brush: js">var buf1 = new ArrayBuffer(40);
new Int32Array(buf1)[0] = 42;

var buf2 = ArrayBuffer.transfer(buf1, 80);
buf1.byteLength; // 0 but if you use the polyfill then the value is still 40
buf2.byteLength; // 80
new Int32Array(buf2)[0]; // 42

var buf3 = ArrayBuffer.transfer(buf2, 0);
buf2.byteLength; // 0 but if you use the polyfill then the value is still 80
buf3.byteLength; // 0
</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>You can partially work around this by inserting the following code at the beginning of your scripts, allowing use of much of the functionality of transfer<font face="Consolas, Liberation Mono, Courier, monospace">()</font>&#xA0;in implementations that do not natively support it. This is not the exact equivalent of this API, but this function transfers data&#xA0;from one ArrayBuffer to another ArrayBuffer.</p>

<pre>if(!ArrayBuffer.transfer) {
    ArrayBuffer.transfer = function (source, length) {
        source = Object(source);
        var dest = new ArrayBuffer(length);
        if(!(source instanceof ArrayBuffer) || !(dest instanceof ArrayBuffer)) {
            throw new TypeError(&quot;Source and destination must be ArrayBuffer instances&quot;);
        }
        if(dest.byteLength &gt;= source.byteLength) {
            var nextOffset = 0;
            var leftBytes = source.byteLength;
            var wordSizes = [8, 4, 2, 1];
            wordSizes.forEach(function (_wordSize_) {
                if (leftBytes &gt;= _wordSize_) {
                    var done = transferWith(_wordSize_, source, dest, nextOffset, leftBytes);
                    nextOffset = done.nextOffset;
                    leftBytes = done.leftBytes;
                }
            });
        }
        return dest;
        function transferWith(wordSize, source, dest, nextOffset, leftBytes) {
            var ViewClass = Uint8Array;
            switch (wordSize)  {
                case 8:
                    ViewClass = Float64Array;
                    break;
                case 4:
                    ViewClass = Float32Array;
                    break;
                case 2:
                    ViewClass = Uint16Array;
                    break;
                case 1:
                    ViewClass = Uint8Array;
                    break;
                default:
                    ViewClass = Uint8Array;
                    break;
            }
            var view_source = new ViewClass(source, nextOffset, Math.trunc(leftBytes / wordSize));
            var view_dest = new ViewClass(dest, nextOffset, Math.trunc(leftBytes / wordSize));
            for(var i=0; i&lt;view_dest.length; i++) {
                view_dest[i] = view_source[i];
            }
            return {
                nextOffset : view_source.byteOffset + view_source.byteLength,
                leftBytes : source.byteLength - (view_source.byteOffset + view_source.byteLength)
            }
        }
    };
}</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<p>Not part of any current specification draft document, but <a href="https://esdiscuss.org/topic/sept-23-2014-meeting-notes" class="external">has been</a> <a href="https://gist.github.com/lukewagner/2735af7eea411e18cf20" class="external">proposed</a> for a future ECMA-262 edition.</p>

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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><em><a href="http://nightly.mozilla.org/" class="external">Nightly build</a></em></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><em><a href="http://nightly.mozilla.org/" class="external">Nightly build</a></em></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="en/JavaScript typed arrays" href="/en-US/docs/Web/JavaScript/Typed_arrays">JavaScript typed arrays</a></li>
</ul>
                  
                
              