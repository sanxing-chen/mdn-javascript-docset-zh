
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>charCodeAt()</strong></code>&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;0&#x5230;65535&#x4E4B;&#x95F4;&#x7684;&#x6574;&#x6570;&#xFF0C;&#x8868;&#x793A;&#x7ED9;&#x5B9A;&#x7D22;&#x5F15;&#x5904;&#x7684;UTF-16&#x4EE3;&#x7801;&#x5355;&#x5143; (&#x5728; Unicode &#x7F16;&#x7801;&#x5355;&#x5143;&#x8868;&#x793A;&#x4E00;&#x4E2A;&#x5355;&#x4E00;&#x7684; UTF-16 &#x7F16;&#x7801;&#x5355;&#x5143;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;UTF-16 &#x7F16;&#x7801;&#x5355;&#x5143;&#x5339;&#x914D; Unicode &#x7F16;&#x7801;&#x5355;&#x5143;&#x3002;&#x4F46;&#x5728;&#x2014;&#x2014;&#x4F8B;&#x5982; Unicode &#x7F16;&#x7801;&#x5355;&#x5143; &gt; 0x10000 &#x7684;&#x8FD9;&#x79CD;&#x2014;&#x2014;&#x4E0D;&#x80FD;&#x88AB;&#x4E00;&#x4E2A;&#xA0;UTF-16&#xA0;&#x7F16;&#x7801;&#x5355;&#x5143;&#x5355;&#x72EC;&#x8868;&#x793A;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x53EA;&#x80FD;&#x5339;&#x914D; Unicode &#x4EE3;&#x7406;&#x5BF9;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x7F16;&#x7801;&#x5355;&#x5143;) &#x3002;&#x5982;&#x679C;&#x4F60;&#x60F3;&#x8981;&#x6574;&#x4E2A;&#x4EE3;&#x7801;&#x70B9;&#x7684;&#x503C;&#xFF0C;&#x4F7F;&#x7528; <strong><code>codePointAt</code></strong>()&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><em>str</em>.charCodeAt(<em>index</em>)</code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>index</code></dt>
</dl>

<p>&#x4E00;&#x4E2A;&#x5927;&#x4E8E;&#x7B49;&#x4E8E; 0&#xFF0C;&#x5C0F;&#x4E8E;&#x5B57;&#x7B26;&#x4E32;&#x957F;&#x5EA6;&#x7684;&#x6574;&#x6570;&#x3002;&#x5982;&#x679C;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x6570;&#x503C;&#xFF0C;&#x5219;&#x9ED8;&#x8BA4;&#x4E3A; 0&#x3002;</p>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x8FD4;&#x56DE;&#x503C;&#x662F;&#x4E00;&#x8868;&#x793A;&#x7ED9;&#x5B9A;&#x7D22;&#x5F15;&#x5904;&#x5B57;&#x7B26;&#x7684; UTF-16 &#x4EE3;&#x7801;&#x5355;&#x5143;&#x503C;&#x7684;&#x6570;&#x5B57;&#xFF1B;&#x5982;&#x679C;&#x7D22;&#x5F15;&#x8D85;&#x51FA;&#x8303;&#x56F4;&#xFF0C;&#x5219;&#x8FD4;&#x56DE; <a title="&#x5168;&#x5C40;&#x5C5E;&#x6027; NaN &#x8868;&#x793A; Not-A-Number &#x7684;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN"><code>NaN</code></a>&#x3002;</p>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>Unicode &#x7F16;&#x7801;&#x5355;&#x5143;&#xFF08;code points&#xFF09;&#x7684;&#x8303;&#x56F4;&#x4ECE; 0 &#x5230; 1,114,111&#xFF08;0x10FFFF&#xFF09;&#x3002;&#x5F00;&#x5934;&#x7684; 128 &#x4E2A; Unicode &#x7F16;&#x7801;&#x5355;&#x5143;&#x548C; ASCII &#x5B57;&#x7B26;&#x7F16;&#x7801;&#x4E00;&#x6837;&#x3002;&#x5173;&#x4E8E; Unicode &#x7684;&#x66F4;&#x591A;&#x4FE1;&#x606F;&#xFF0C;&#x53EF;&#x67E5;&#x770B;&#xA0;<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Unicode">JavaScript Guide</a>&#x3002;</p>

<p>&#x6CE8;&#x610F;&#xFF0C;<code>charCodeAt</code> &#x603B;&#x662F;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5C0F;&#x4E8E; 65,536 &#x7684;&#x503C;&#x3002;&#x8FD9;&#x662F;&#x56E0;&#x4E3A;&#x9AD8;&#x4F4D;&#x7F16;&#x7801;&#x5355;&#x5143;&#xFF08;higher code point&#xFF09;&#x4F7F;&#x7528;&#x4E00;&#x5BF9;&#xFF08;&#x4F4E;&#x4F4D;&#x7F16;&#x7801;&#xFF08;lower valued&#xFF09;&#xFF09;&#x4EE3;&#x7406;&#x4F2A;&#x5B57;&#x7B26;&#xFF08;&quot;surrogate&quot; pseudo-characters&#xFF09;&#x6765;&#x8868;&#x793A;&#xFF0C;&#x4ECE;&#x800C;&#x6784;&#x6210;&#x4E00;&#x4E2A;&#x771F;&#x6B63;&#x7684;&#x5B57;&#x7B26;&#x3002;&#x56E0;&#x6B64;&#xFF0C;&#x4E3A;&#x4E86;&#x67E5;&#x770B;&#x6216;&#x590D;&#x5236;&#xFF08;reproduce&#xFF09;65536 &#x53CA;&#x4EE5;&#x4E0A;&#x7F16;&#x7801;&#x5B57;&#x7B26;&#x7684;&#x5B8C;&#x6574;&#x5B57;&#x7B26;&#xFF0C;&#x9700;&#x8981;&#x5728;&#x83B7;&#x53D6;&#xA0;<code>charCodeAt(i)</code>&#xA0;&#x7684;&#x503C;&#x7684;&#x540C;&#x65F6;&#x83B7;&#x53D6;&#xA0;<code>charCodeAt(i+1)</code>&#xA0;&#x7684;&#x503C;&#xFF08;&#x5982;&#x540C;&#x67E5;&#x770B;/reproducing &#x62E5;&#x6709;&#x4E24;&#x4E2A;&#x5B57;&#x7B26;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x4E00;&#x6837;&#xFF09;&#xFF0C;&#x6216;&#x8005;&#x6539;&#x4E3A;&#x83B7;&#x53D6;&#xA0;codePointAt(i)<strong> &#x7684;&#x503C;</strong>&#x3002;&#x53C2;&#x770B;&#x4E0B;&#x9762;&#x4F8B; 2 &#x548C;&#x4F8B; 3&#x3002;</p>

<p>&#x5982;&#x679C;&#x6307;&#x5B9A;&#x7684; index &#x5C0F;&#x4E8E; 0 &#x6216;&#x4E0D;&#x5C0F;&#x4E8E;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x957F;&#x5EA6;&#xFF0C;&#x5219;&#xA0;<code>charCodeAt</code> &#x8FD4;&#x56DE; <a title="&#x5168;&#x5C40;&#x5C5E;&#x6027; NaN &#x8868;&#x793A; Not-A-Number &#x7684;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN"><code>NaN</code></a>&#x3002;</p>

<p>&#x5411;&#x540E;&#x517C;&#x5BB9;&#xFF1A;&#x5728;&#x5386;&#x53F2;&#x7248;&#x672C;&#x4E2D;&#xFF08;&#x5982; JavaScript 1.2&#xFF09;&#xFF0C;<code>charCodeAt</code> &#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x5B57;&#xFF0C;&#x8868;&#x793A;&#x7ED9;&#x5B9A; index &#x5904;&#x5B57;&#x7B26;&#x7684; ISO-Latin-1 &#x7F16;&#x7801;&#x503C;&#x3002;ISO-Latin-1 &#x7F16;&#x7801;&#x96C6;&#x8303;&#x56F4;&#x4ECE; 0 &#x5230; 255&#x3002;&#x5F00;&#x5934;&#x7684; 0 &#x5230; 127 &#x76F4;&#x63A5;&#x5339;&#x914D; ASCII &#x5B57;&#x7B26;&#x96C6;&#x3002;</p>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<h3 name="Example:_Using_charCodeAt" id="Example:_Using_charCodeAt">&#x4F7F;&#x7528;&#xA0;<code>charCodeAt()</code></h3>

<p>&#x4E0B;&#x4F8B;&#x8FD4;&#x56DE; 65&#xFF0C;&#x5373; A &#x7684; Unicode &#x503C;&#xFF1A;</p>

<pre class="brush: js">&quot;ABC&quot;.charCodeAt(0) // returns 65
</pre>

<h3 id="&#x4F7F;&#x7528;charCodeAt()&#x4FEE;&#x590D;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x51FA;&#x73B0;&#x7684;&#x672A;&#x77E5;&#x7684;&#x975E;&#x57FA;&#x672C;&#x591A;&#x8BED;&#x8A00;&#x8303;&#x56F4;&#xFF08;&#x975E;BMP&#xFF0C;non-Basic-Multilingual-Plane&#xFF09;&#x5B57;&#x7B26;">&#x4F7F;&#x7528;<code>charCodeAt()&#x4FEE;&#x590D;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x51FA;&#x73B0;&#x7684;&#x672A;&#x77E5;</code>&#x7684;&#x975E;&#x57FA;&#x672C;&#x591A;&#x8BED;&#x8A00;&#x8303;&#x56F4;&#xFF08;&#x975E;BMP&#xFF0C;non-Basic-Multilingual-Plane&#xFF09;&#x5B57;&#x7B26;</h3>

<p>&#x8FD9;&#x6BB5;&#x4EE3;&#x7801;&#x53EF;&#x4EE5;&#x88AB;&#x7528;&#x5728;&#xA0;for&#xA0;&#x5FAA;&#x73AF;&#x548C;&#x5176;&#x4ED6;&#x7C7B;&#x4F3C;&#x8BED;&#x53E5;&#x4E2D;&#xFF0C;&#x5F53;&#x5728;&#x6307;&#x5B9A;&#x5F15;&#x7D22;&#x4E4B;&#x524D;&#x4E0D;&#x786E;&#x5B9A;&#x662F;&#x5426;&#x6709;&#x975E;BMP&#x5B57;&#x7B26;&#x5B58;&#x5728;&#x65F6;&#x3002;</p>

<p>&#xA0;</p>

<pre class="brush:js">function fixedCharCodeAt (str, idx) {
    // ex. fixedCharCodeAt (&apos;\uD800\uDC00&apos;, 0); // 65536
    // ex. fixedCharCodeAt (&apos;\uD800\uDC00&apos;, 1); // false
    idx = idx || 0;
    var code = str.charCodeAt(idx);
    var hi, low;
    
    // High surrogate (could change last hex to 0xDB7F to treat high
    // private surrogates as single characters)
    if (0xD800 &lt;= code &amp;&amp; code &lt;= 0xDBFF) {
        hi = code;
        low = str.charCodeAt(idx+1);
        if (isNaN(low)) {
            throw &apos;High surrogate not followed by low surrogate in fixedCharCodeAt()&apos;;
        }
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
    }
    if (0xDC00 &lt;= code &amp;&amp; code &lt;= 0xDFFF) { // Low surrogate
        // We return false to allow loops to skip this iteration since should have
        // already handled high surrogate above in the previous iteration
        return false;
        /*hi = str.charCodeAt(idx-1);
        low = code;
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;*/
    }
    return code;
} 
</pre>

<h3 id="&#x4F7F;&#x7528;_charCodeAt()&#x4FEE;&#x590D;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x51FA;&#x73B0;&#x7684;&#x5DF2;&#x77E5;&#x7684;&#x975E;BMP&#x5B57;&#x7B26;">&#x4F7F;&#x7528;&#xA0;<code>charCodeAt()&#x4FEE;&#x590D;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x51FA;&#x73B0;&#x7684;&#x5DF2;&#x77E5;</code>&#x7684;&#x975E;BMP&#x5B57;&#x7B26;</h3>

<pre class="brush:js">function knownCharCodeAt (str, idx) {
    str += &apos;&apos;;
    var code,
        end = str.length;

    var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    while ((surrogatePairs.exec(str)) != null) {
        var li = surrogatePairs.lastIndex;
        if (li - 2 &lt; idx) {
            idx++;
        }
        else {
            break;
        }
    }

    if (idx &gt;= end || idx &lt; 0) {
        return NaN;
    }

    code = str.charCodeAt(idx);

    var hi, low;
    if (0xD800 &lt;= code &amp;&amp; code &lt;= 0xDBFF) {
        hi = code;
        low = str.charCodeAt(idx+1);
        // Go one further, since one of the &quot;characters&quot; is part of a surrogate pair
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
    }
    return code;
}

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
   <td>ECMAScript 1st Edition.</td>
   <td>Standard</td>
   <td>Initial definition.<br>
    Implemented in JavaScript 1.2</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.5.4.5" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">String.prototype.charCodeAt</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.charcodeat" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">String.prototype.charCodeAt</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
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
   <td>Basic support</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="String.fromCharCode() &#x9759;&#x6001;&#x65B9;&#x6CD5;&#x6839;&#x636E;&#x6307;&#x5B9A;&#x7684; Unicode &#x7F16;&#x7801;&#x4E2D;&#x7684;&#x5E8F;&#x53F7;&#x503C;&#x6765;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode"><code>String.fromCharCode()</code></a></li>
 <li><a title="charAt() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x6307;&#x5B9A;&#x4F4D;&#x7F6E;&#x7684;&#x5B57;&#x7B26;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt"><code>String.prototype.charAt()</code></a></li>
 <li><a title="String.fromCodePoint()&#xA0;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4F7F;&#x7528;&#x6307;&#x5B9A;&#x7684;&#x4EE3;&#x7801;&#x70B9;&#x5E8F;&#x5217;&#x521B;&#x5EFA;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint"><code>String.fromCodePoint()</code></a></li>
 <li><a title="codePointAt() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#xA0;&#x4E00;&#x4E2A;&#xA0;Unicode &#x7F16;&#x7801;&#x70B9;&#x503C;&#x7684;&#x975E;&#x8D1F;&#x6574;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt"><code>String.prototype.codePointAt()</code></a></li>
</ul>
                  
                
              