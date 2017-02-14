
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><strong><code>String.fromCodePoint()&#xA0;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4F7F;&#x7528;&#x6307;&#x5B9A;&#x7684;&#x4EE3;&#x7801;&#x70B9;&#x5E8F;&#x5217;&#x521B;&#x5EFA;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;</code></strong></p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>String.fromCodePoint(<var>num1</var>[, ...[, <var>numN</var>]])</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>num1, ..., num<em>N</em></code></dt>
 <dd>&#x4E00;&#x4E32; Unicode &#x7F16;&#x7801;&#x3002;</dd>
</dl>

<h3 id="&#x5F02;&#x5E38;">&#x5F02;&#x5E38;</h3>

<dl>
 <dt><a title="RangeError&#x5BF9;&#x8C61;&#x6807;&#x660E;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#xFF0C;&#x5F53;&#x4E00;&#x4E2A;&#x503C;&#x4E0D;&#x5728;&#x5176;&#x6240;&#x5141;&#x8BB8;&#x7684;&#x8303;&#x56F4;&#x6216;&#x8005;&#x96C6;&#x5408;&#x4E2D;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError"><code>RangeError</code></a></dt>
 <dd>&#x5982;&#x679C;&#x4F20;&#x5165;&#x65E0;&#x6548;&#x7684; Unicode &#x7F16;&#x7801;&#xFF0C;&#x5C06;&#x4F1A;&#x629B;&#x51FA;&#x4E00;&#x4E2A;<a title="RangeError&#x5BF9;&#x8C61;&#x6807;&#x660E;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#xFF0C;&#x5F53;&#x4E00;&#x4E2A;&#x503C;&#x4E0D;&#x5728;&#x5176;&#x6240;&#x5141;&#x8BB8;&#x7684;&#x8303;&#x56F4;&#x6216;&#x8005;&#x96C6;&#x5408;&#x4E2D;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError"><code>RangeError</code></a> (&#x4F8B;&#x5982;&#xFF1A; &quot;RangeError: NaN is not a valid code point&quot;)&#x3002;</dd>
</dl>

<h2 id="&#x8BF4;&#x660E;">&#x8BF4;&#x660E;</h2>

<p>&#x56E0;&#x4E3A;&#xA0;<code>fromCodePoint()</code>&#xA0; &#x662F;&#xA0;<a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/String"><code>String</code></a> &#x7684;&#x4E00;&#x4E2A;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#xFF0C;&#x6240;&#x4EE5;&#x53EA;&#x80FD;&#x901A;&#x8FC7;&#xA0;<code>String.fromCodePoint() &#x8FD9;&#x6837;&#x7684;&#x65B9;&#x5F0F;&#x6765;&#x4F7F;&#x7528;&#xFF0C;&#x4E0D;&#x80FD;&#x5728;&#x4F60;&#x521B;&#x5EFA;&#x7684;&#xA0;</code><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/String"><code>String</code></a> &#x5BF9;&#x8C61;&#x5B9E;&#x4F8B;&#x4E0A;&#x76F4;&#x63A5;&#x8C03;&#x7528;&#x3002;</p>

<h2 id="&#x4F8B;&#x5B50;">&#x4F8B;&#x5B50;</h2>

<h3 id="&#x4F7F;&#x7528;_fromCodePoint()"><code><font face="Open Sans, Arial, sans-serif">&#x4F7F;&#x7528;&#xA0;</font>fromCodePoint()</code></h3>

<pre class="brush: js">String.fromCodePoint(42);       // &quot;*&quot;
String.fromCodePoint(65, 90);   // &quot;AZ&quot;
String.fromCodePoint(0x404);    // &quot;\u0404&quot;
String.fromCodePoint(0x2F804);  // &quot;\uD87E\uDC04&quot;
String.fromCodePoint(194564);   // &quot;\uD87E\uDC04&quot;
String.fromCodePoint(0x1D306, 0x61, 0x1D307) // &quot;\uD834\uDF06a\uD834\uDF07&quot;

String.fromCodePoint(&apos;_&apos;);      // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1);       // RangeError
String.fromCodePoint(3.14);     // RangeError
String.fromCodePoint(3e-2);     // RangeError
String.fromCodePoint(NaN);      // RangeError
</pre>

<pre class="brush: js">// String.fromCharCode() &#x65B9;&#x6CD5;&#x4E0D;&#x80FD;&#x5355;&#x72EC;&#x83B7;&#x53D6;&#x5728;&#x9AD8;&#x4EE3;&#x7801;&#x70B9;&#x4F4D;&#x4E0A;&#x7684;&#x5B57;&#x7B26;
// &#x53E6;&#x4E00;&#x65B9;&#x9762;&#xFF0C;&#x4E0B;&#x5217;&#x7684;&#x793A;&#x4F8B;&#x4E2D;&#xFF0C;&#x53EF;&#x4EE5;&#x8FD4;&#x56DE; 4 &#x5B57;&#x8282;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x8FD4;&#x56DE; 2 &#x5B57;&#x8282;&#x7684;&#x5B57;&#x7B26;
// (&#x5373;&#xFF0C;&#x5B83;&#x53EF;&#x4EE5;&#x8FD4;&#x56DE;&#x5355;&#x72EC;&#x7684;&#x5B57;&#x7B26;&#xFF0C;&#x4F7F;&#x7528;&#x957F;&#x5EA6; 2 &#x4EE3;&#x66FF; 1!&#xFF09; 
console.log(String.fromCodePoint(0x2F804)); // or 194564 in decimal
</pre>

<h2 id="Polyfill-&#x6D4F;&#x89C8;&#x5668;&#x8865;&#x4E01;">Polyfill-&#x6D4F;&#x89C8;&#x5668;&#x8865;&#x4E01;</h2>

<p>String.fromCodePoint &#x65B9;&#x6CD5;&#x662F; ECMAScript2015&#xFF08;ES6&#xFF09;&#x65B0;&#x589E;&#x52A0;&#x7684;&#x7279;&#x6027;&#xFF0C;&#x6240;&#x4EE5;&#x4E00;&#x4E9B;&#x8001;&#x7684;&#x6D4F;&#x89C8;&#x5668;&#x53EF;&#x80FD;&#x8FD8;&#x4E0D;&#x652F;&#x6301;&#x3002;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x4F7F;&#x7528;&#x4E0B;&#x9762;&#x7684; polyfill &#x4EE3;&#x7801;&#x6765;&#x4FDD;&#x8BC1;&#x6D4F;&#x89C8;&#x5668;&#x7684;&#x652F;&#x6301;&#xFF1A;</p>

<p>&#xA0;</p>

<pre class="brush: js">/*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
if (!String.fromCodePoint) {
  (function() {
    var defineProperty = (function() {
      // IE 8 only supports `Object.defineProperty` on DOM elements
      try {
        var object = {};
        var $defineProperty = Object.defineProperty;
        var result = $defineProperty(object, object, object) &amp;&amp; $defineProperty;
      } catch(error) {}
      return result;
    }());
    var stringFromCharCode = String.fromCharCode;
    var floor = Math.floor;
    var fromCodePoint = function() {
      var MAX_SIZE = 0x4000;
      var codeUnits = [];
      var highSurrogate;
      var lowSurrogate;
      var index = -1;
      var length = arguments.length;
      if (!length) {
        return &apos;&apos;;
      }
      var result = &apos;&apos;;
      while (++index &lt; length) {
        var codePoint = Number(arguments[index]);
        if (
          !isFinite(codePoint) ||       // `NaN`, `+Infinity`, or `-Infinity`
          codePoint &lt; 0 ||              // not a valid Unicode code point
          codePoint &gt; 0x10FFFF ||       // not a valid Unicode code point
          floor(codePoint) != codePoint // not an integer
        ) {
          throw RangeError(&apos;Invalid code point: &apos; + codePoint);
        }
        if (codePoint &lt;= 0xFFFF) { // BMP code point
          codeUnits.push(codePoint);
        } else { // Astral code point; split in surrogate halves
          // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
          codePoint -= 0x10000;
          highSurrogate = (codePoint &gt;&gt; 10) + 0xD800;
          lowSurrogate = (codePoint % 0x400) + 0xDC00;
          codeUnits.push(highSurrogate, lowSurrogate);
        }
        if (index + 1 == length || codeUnits.length &gt; MAX_SIZE) {
          result += stringFromCharCode.apply(null, codeUnits);
          codeUnits.length = 0;
        }
      }
      return result;
    };
    if (defineProperty) {
      defineProperty(String, &apos;fromCodePoint&apos;, {
        &apos;value&apos;: fromCodePoint,
        &apos;configurable&apos;: true,
        &apos;writable&apos;: true
      });
    } else {
      String.fromCodePoint = fromCodePoint;
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
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-string.fromcodepoint" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">String.fromCodePoint</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-string.fromcodepoint" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">String.fromCodePoint</small></a></td>
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
   <td>
    <p>41</p>
   </td>
   <td><a title="Released on 2014-04-29." href="/en-US/Firefox/Releases/29">29</a> (29)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
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
 <li><a title="String.fromCharCode() &#x9759;&#x6001;&#x65B9;&#x6CD5;&#x6839;&#x636E;&#x6307;&#x5B9A;&#x7684; Unicode &#x7F16;&#x7801;&#x4E2D;&#x7684;&#x5E8F;&#x53F7;&#x503C;&#x6765;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode"><code>String.fromCharCode()</code></a></li>
 <li><a title="charAt() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x6307;&#x5B9A;&#x4F4D;&#x7F6E;&#x7684;&#x5B57;&#x7B26;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt"><code>String.prototype.charAt()</code></a></li>
 <li><a title="codePointAt() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#xA0;&#x4E00;&#x4E2A;&#xA0;Unicode &#x7F16;&#x7801;&#x70B9;&#x503C;&#x7684;&#x975E;&#x8D1F;&#x6574;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt"><code>String.prototype.codePointAt()</code></a></li>
 <li><a title="charCodeAt()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;0&#x5230;65535&#x4E4B;&#x95F4;&#x7684;&#x6574;&#x6570;&#xFF0C;&#x4EE3;&#x8868;&#x7D22;&#x5F15;&#x5904;&#x5B57;&#x7B26;&#x7684;UTF-16&#x7F16;&#x7801;&#x5355;&#x5143;&#xFF08;&#x5728;Unicode&#x7F16;&#x7801;&#x5355;&#x5143;&#x8868;&#x793A;&#x4E00;&#x4E2A;&#x5355;&#x4E00;&#x7684;UTF-16&#x7F16;&#x7801;&#x5355;&#x5143;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;UTF-16&#x7F16;&#x7801;&#x5355;&#x5143;&#x5339;&#x914D;Unicode&#x7F16;&#x7801;&#x5355;&#x5143;&#x3002;&#x5426;&#x5219;&#xFF0C;&#x6BD4;&#x5982;Unicode &#x7F16;&#x7801;&#x5355;&#x5143; &gt; 0x10000 &#x7684;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x53EA;&#x80FD;&#x5339;&#x914D;Unicode&#x4EE3;&#x7406;&#x5BF9;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x7F16;&#x7801;&#x5355;&#x5143;&#xFF09;&#x3002;&#x5982;&#x679C;&#x4F60;&#x5E0C;&#x671B;&#x5F97;&#x5230;&#x6574;&#x70B9;&#x7F16;&#x7801;&#x503C;&#xFF0C;&#x4F7F;&#x7528;codePointAt()" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt"><code>String.prototype.charCodeAt()</code></a></li>
</ul>
                  
                
              