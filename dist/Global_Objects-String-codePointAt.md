
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p><strong><code>codePointAt()</code></strong> &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#xA0;&#x4E00;&#x4E2A;&#xA0;Unicode &#x7F16;&#x7801;&#x70B9;&#x503C;&#x7684;&#x975E;&#x8D1F;&#x6574;&#x6570;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>str</var>.codePointAt(<var>pos</var>)</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>pos</code></dt>
 <dd>&#x8FD9;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x9700;&#x8981;&#x8F6C;&#x7801;&#x7684;&#x5143;&#x7D20;&#x7684;&#x4F4D;&#x7F6E;&#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x8FD4;&#x56DE;&#x503C;&#x662F;&#x5728;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x7684;&#x7ED9;&#x5B9A;&#x7D22;&#x5F15;&#x7684;&#x7F16;&#x7801;&#x5355;&#x5143;&#x4F53;&#x73B0;&#x7684;&#x6570;&#x5B57;&#xFF0C;&#x5982;&#x679C;&#x5728;&#x7D22;&#x5F15;&#x5904;&#x6CA1;&#x627E;&#x5230;&#x5143;&#x7D20;&#x5219;&#x8FD4;&#x56DE;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined" title="undefined&#x6709;&#x591A;&#x91CD;&#x89D2;&#x8272;,&#x901A;&#x5E38;&#x60C5;&#x51B5;&#x4E0B;,&#x6211;&#x4EEC;&#x6240;&#x8BF4;&#x7684;undefined&#x90FD;&#x6307;&#x7684;&#x662F;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&quot;undefined&quot;."><code>undefined</code></a> &#x3002;</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x5982;&#x679C;&#x5728;&#x6307;&#x5B9A;&#x7684;&#x4F4D;&#x7F6E;&#x6CA1;&#x6709;&#x5143;&#x7D20;&#x5219;&#x8FD4;&#x56DE;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined" title="undefined&#x6709;&#x591A;&#x91CD;&#x89D2;&#x8272;,&#x901A;&#x5E38;&#x60C5;&#x51B5;&#x4E0B;,&#x6211;&#x4EEC;&#x6240;&#x8BF4;&#x7684;undefined&#x90FD;&#x6307;&#x7684;&#x662F;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&quot;undefined&quot;."><code>undefined</code></a>&#xA0;&#x3002;&#x5982;&#x679C;&#x5728;&#x7D22;&#x5F15;&#x5904;&#x5F00;&#x59CB;&#x6CA1;&#x6709;UTF-16 &#x4EE3;&#x7406;&#x5BF9;&#xFF0C;&#x5C06;&#x76F4;&#x63A5;&#x8FD4;&#x56DE;&#x5728;&#x90A3;&#x4E2A;&#x7D22;&#x5F15;&#x5904;&#x7684;&#x7F16;&#x7801;&#x5355;&#x5143;&#x3002;</p>

<p>Surrogate Pair&#x662F;UTF-16&#x4E2D;&#x7528;&#x4E8E;&#x6269;&#x5C55;&#x5B57;&#x7B26;&#x800C;&#x4F7F;&#x7528;&#x7684;&#x7F16;&#x7801;&#x65B9;&#x5F0F;&#xFF0C;&#x662F;&#x4E00;&#x79CD;&#x91C7;&#x7528;&#x56DB;&#x4E2A;&#x5B57;&#x8282;(&#x4E24;&#x4E2A;UTF-16&#x7F16;&#x7801;)&#x6765;&#x8868;&#x793A;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#xFF0C;&#x79F0;&#x4F5C;&#x4EE3;&#x7406;&#x5BF9;&#x3002;</p>

<h2 id="&#x4F8B;&#x5B50;">&#x4F8B;&#x5B50;</h2>

<h3 id="&#x4F7F;&#x7528;_codePointAt()">&#x4F7F;&#x7528; <code>codePointAt()</code></h3>

<pre class="brush: js">&apos;ABC&apos;.codePointAt(1);          // 66
&apos;\uD800\uDC00&apos;.codePointAt(0); // 65536

&apos;XYZ&apos;.codePointAt(42); // undefined
</pre>

<h2 id="&#x66FF;&#x8865;&#x652F;&#x6301;(Polyfill)">&#x66FF;&#x8865;&#x652F;&#x6301;(Polyfill)</h2>

<p>&#x7ED9;&#x539F;&#x751F;&#x4E0D;&#x652F;&#x6301; ECMAScript 6 &#x7684;&#x6D4F;&#x89C8;&#x5668;&#x4F7F;&#x7528;<code>codePointAt()&#x65B9;&#x6CD5;&#x7684;</code>&#x7684;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x6269;&#x5C55;&#x65B9;&#x6CD5;&#x3002;</p>

<pre class="brush: js">/*! http://mths.be/codepointat v0.1.0 by @mathias */
if (!String.prototype.codePointAt) {
  (function() {
    &apos;use strict&apos;; // &#x4E25;&#x683C;&#x6A21;&#x5F0F;&#xFF0C;needed to support `apply`/`call` with `undefined`/`null`
    var codePointAt = function(position) {
      if (this == null) {
        throw TypeError();
      }
      var string = String(this);
      var size = string.length;
      // &#x53D8;&#x6210;&#x6574;&#x6570;
      var index = position ? Number(position) : 0;
      if (index != index) { // better `isNaN`
        index = 0;
      }
      // &#x8FB9;&#x754C;
      if (index &lt; 0 || index &gt;= size) {
        return undefined;
      }
      // &#x7B2C;&#x4E00;&#x4E2A;&#x7F16;&#x7801;&#x5355;&#x5143;
      var first = string.charCodeAt(index);
      var second;
      if ( // &#x68C0;&#x67E5;&#x662F;&#x5426;&#x5F00;&#x59CB; surrogate pair
        first &gt;= 0xD800 &amp;&amp; first &lt;= 0xDBFF &amp;&amp; // high surrogate
        size &gt; index + 1 // &#x4E0B;&#x4E00;&#x4E2A;&#x7F16;&#x7801;&#x5355;&#x5143;
      ) {
        second = string.charCodeAt(index + 1);
        if (second &gt;= 0xDC00 &amp;&amp; second &lt;= 0xDFFF) { // low surrogate
          // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
          return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
        }
      }
      return first;
    };
    if (Object.defineProperty) {
      Object.defineProperty(String.prototype, &apos;codePointAt&apos;, {
        &apos;value&apos;: codePointAt,
        &apos;configurable&apos;: true,
        &apos;writable&apos;: true
      });
    } else {
      String.prototype.codePointAt = codePointAt;
    }
  }());
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
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.codepointat" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">String.prototype.codePointAt</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-string.prototype.codepointat" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">String.prototype.codePointAt</small></a></td>
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
   <th>&#x7279;&#x6027;</th>
   <th>Chrome</th>
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>&#x57FA;&#x672C;&#x652F;&#x6301;</td>
   <td>41</td>
   <td><a href="/en-US/Firefox/Releases/29" title="Released on 2014-04-29.">29</a> (29)</td>
   <td>11</td>
   <td>28</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<div id="compat-mobile">
<table class="compat-table">
 <tbody>
  <tr>
   <th>&#x7279;&#x6027;</th>
   <th>Android</th>
   <th>Chrome for Android</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>&#x57FA;&#x672C;&#x652F;&#x6301;</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>29.0 (29)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint" title="String.fromCodePoint()&#x662F;String&#x7684;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#xFF0C;&#x8BE5;&#x65B9;&#x6CD5;&#x4F7F;&#x7528;&#x6307;&#x5B9A;&#x7684;unicode&#x53C2;&#x6570;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;primitive&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x4E0E;fromCharCode&#x529F;&#x80FD;&#x7C7B;&#x4F3C;&#xFF0C;&#x4F46;&#x662F;&#x652F;&#x6301;&#x7684;Unicode&#x5B57;&#x7B26;&#x66F4;&#x5168;&#xFF0C;&#x4F46;&#x662F;&#x6D4F;&#x89C8;&#x5668;&#x652F;&#x6301;&#x60C5;&#x51B5;&#x4E0D;&#x662F;&#x592A;&#x597D;&#xFF0C;&#x76EE;&#x524D;ie&#x4EE5;&#x53CA;safari&#x8FD8;&#x4E0D;&#x652F;&#x6301;&#x3002;&#x53E6;&#x5916;&#xFF0C;&#x6027;&#x80FD;&#x5E76;&#x6CA1;&#x6709;fromCharCode&#x5FEB;&#x3002;&#x56E0;&#x4E3A;&#x662F;ES6&#x5F53;&#x4E2D;&#x7684;&#x65B0;&#x5B9A;&#x4E49;&#x7684;&#x7279;&#x6027;&#xFF0C;&#x6240;&#x4EE5;&#x76EE;&#x524D;&#x8FD8;&#x4E0D;&#x9002;&#x5408;&#x653E;&#x5230;&#x6B63;&#x5F0F;&#x4EA7;&#x54C1;&#x73AF;&#x5883;&#x4E2D;&#x53BB;&#x4F7F;&#x7528;&#x3002;"><code>String.fromCodePoint()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode" title="String.fromCharCode() &#x9759;&#x6001;&#x65B9;&#x6CD5;&#x6839;&#x636E;&#x6307;&#x5B9A;&#x7684; Unicode &#x7F16;&#x7801;&#x4E2D;&#x7684;&#x5E8F;&#x53F7;&#x503C;&#x6765;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x3002;"><code>String.fromCharCode()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt" title="charCodeAt()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;0&#x5230;65535&#x4E4B;&#x95F4;&#x7684;&#x6574;&#x6570;&#xFF0C;&#x4EE3;&#x8868;&#x7D22;&#x5F15;&#x5904;&#x5B57;&#x7B26;&#x7684;UTF-16&#x7F16;&#x7801;&#x5355;&#x5143;&#xFF08;&#x5728;Unicode&#x7F16;&#x7801;&#x5355;&#x5143;&#x8868;&#x793A;&#x4E00;&#x4E2A;&#x5355;&#x4E00;&#x7684;UTF-16&#x7F16;&#x7801;&#x5355;&#x5143;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;UTF-16&#x7F16;&#x7801;&#x5355;&#x5143;&#x5339;&#x914D;Unicode&#x7F16;&#x7801;&#x5355;&#x5143;&#x3002;&#x5426;&#x5219;&#xFF0C;&#x6BD4;&#x5982;Unicode &#x7F16;&#x7801;&#x5355;&#x5143; &gt; 0x10000 &#x7684;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x53EA;&#x80FD;&#x5339;&#x914D;Unicode&#x4EE3;&#x7406;&#x5BF9;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x7F16;&#x7801;&#x5355;&#x5143;&#xFF09;&#x3002;&#x5982;&#x679C;&#x4F60;&#x5E0C;&#x671B;&#x5F97;&#x5230;&#x6574;&#x70B9;&#x7F16;&#x7801;&#x503C;&#xFF0C;&#x4F7F;&#x7528;codePointAt()"><code>String.prototype.charCodeAt()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt" title="charAt() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x6307;&#x5B9A;&#x4F4D;&#x7F6E;&#x7684;&#x5B57;&#x7B26;&#x3002;"><code>String.prototype.charAt()</code></a></li>
</ul>
                  
                
              