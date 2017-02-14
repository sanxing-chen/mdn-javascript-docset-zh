
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><strong>throw </strong>&#x8BED;&#x53E5;&#x7528;&#x6765;&#x629B;&#x51FA;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x5F02;&#x5E38;&#x3002;&#x5F53;&#x524D;&#x51FD;&#x6570;&#x7684;&#x6267;&#x884C;&#x5C06;&#x4F1A;&#x88AB;&#x4E2D;&#x6B62;&#xFF08;throw&#x4E4B;&#x540E;&#x7684;&#x8BED;&#x53E5;&#x5C06;&#x4F1A;&#x5F97;&#x4E0D;&#x5230;&#x6267;&#x884C;&#xFF09;&#xFF0C;&#x63A5;&#x7740;&#x6267;&#x884C;&#x6D41;&#x7A0B;&#x4F1A;&#x8F6C;&#x79FB;&#x5230;&#x7B2C;&#x4E00;&#x4E2A;&#xA0;<a href="/en-US/docs/Web/JavaScript/Reference/Statements/try...catch"><code>catch</code></a>&#xA0;&#x8BED;&#x53E5;&#x5757;&#x3002;&#x5982;&#x679C;&#x5728;&#x8C03;&#x7528;&#x65B9;&#x51FD;&#x6570;&#x4E2D;&#x6CA1;&#x6709;&#x4EFB;&#x4F55;catch&#x8BED;&#x53E5;&#x5757;&#xFF0C;&#x90A3;&#x4E48;&#x7A0B;&#x5E8F;&#x5C06;&#x4F1A;&#x88AB;&#x4E2D;&#x6B62;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">throw <em>expression</em>; </pre>

<dl>
 <dt><code>expression</code></dt>
 <dd>&#x8981;&#x629B;&#x51FA;&#x7684;&#x8868;&#x8FBE;&#x5F0F;&#x3002;</dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x4F7F;&#x7528;throw&#x8BED;&#x53E5;&#x6765;&#x629B;&#x51FA;&#x4E00;&#x4E2A;&#x5F02;&#x5E38;&#x3002;&#x5F53;&#x4F60;&#x629B;&#x51FA;&#x5F02;&#x5E38;&#x65F6;&#xFF0C;expression &#x6307;&#x5B9A;&#x4E86;&#x5F02;&#x5E38;&#x7684;&#x5185;&#x5BB9;&#x3002;&#x4E0B;&#x9762;&#x7684;&#x6BCF;&#x884C;&#x90FD;&#x629B;&#x51FA;&#x4E86;&#x4E00;&#x4E2A;&#x5F02;&#x5E38;&#xFF1A;</p>

<pre class="brush: js">throw &quot;Error2&quot;; // &#x629B;&#x51FA;&#x4E86;&#x4E00;&#x4E2A;&#x503C;&#x4E3A;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x5F02;&#x5E38;
throw 42;       // &#x629B;&#x51FA;&#x4E86;&#x4E00;&#x4E2A;&#x503C;&#x4E3A;&#x6574;&#x6570;42&#x7684;&#x5F02;&#x5E38;
throw true;     // &#x629B;&#x51FA;&#x4E86;&#x4E00;&#x4E2A;&#x503C;&#x4E3A;true&#x7684;&#x5F02;&#x5E38;</pre>

<p>&#x6CE8;&#x610F;throw&#x8BED;&#x53E5;&#x540C;&#x6837;&#x53D7;&#x5230;&#xA0;<a href="/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion">&#x81EA;&#x52A8;&#x5206;&#x53F7;&#x63D2;&#x5165;&#xA0;(ASI)</a>&#xA0;&#x673A;&#x5236;&#x7684;&#x63A7;&#x5236;&#xFF0C;&#x5728;&#x5173;&#x952E;&#x5B57;&#x548C;&#x503C;&#x4E4B;&#x95F4;&#x4E0D;&#x5141;&#x8BB8;&#x6709;&#x884C;&#x7EC8;&#x6B62;&#x7B26;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x629B;&#x51FA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;">&#x629B;&#x51FA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;</h3>

<p>&#x4F60;&#x53EF;&#x4EE5;&#x5728;&#x629B;&#x51FA;&#x5F02;&#x5E38;&#x65F6;&#x6307;&#x5B9A;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x3002;&#x5728;catch&#x8BED;&#x53E5;&#x4E2D;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x67E5;&#x9605;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#x5E76;&#x68C0;&#x67E5;&#x72B6;&#x6001;&#x3002;&#x4E0B;&#x9762;&#x7684;&#x793A;&#x4F8B;&#x521B;&#x5EFA;&#x4E86;&#x4E00;&#x4E2A;&#x7C7B;&#x578B;&#x4E3A; UserException &#x7684;&#x5F02;&#x5E38;&#x5BF9;&#x8C61; myUserException&#xFF0C;&#x5E76;&#x5728; throw &#x8BED;&#x53E5;&#x4E2D;&#x4F7F;&#x7528;&#x3002;</p>

<pre class="brush: js">function UserException(message) {
   this.message = message;
   this.name = &quot;UserException&quot;;
}
function getMonthName(mo) {
   mo = mo-1; // &#x8C03;&#x6574;&#x6708;&#x4EFD;&#x6570;&#x5B57;&#x5230;&#x6570;&#x7EC4;&#x7D22;&#x5F15; (1=Jan, 12=Dec)
   var months = [&quot;Jan&quot;, &quot;Feb&quot;, &quot;Mar&quot;, &quot;Apr&quot;, &quot;May&quot;, &quot;Jun&quot;, &quot;Jul&quot;,
      &quot;Aug&quot;, &quot;Sep&quot;, &quot;Oct&quot;, &quot;Nov&quot;, &quot;Dec&quot;];
   if (months[mo] !== undefined) {
      return months[mo];
   } else {
      throw new UserException(&quot;InvalidMonthNo&quot;);
   }
}

try {
   // statements to try
   var myMonth = 15; // 15 &#x8D85;&#x51FA;&#x8FB9;&#x754C;&#x5E76;&#x5F15;&#x53D1;&#x5F02;&#x5E38;
   var monthName = getMonthName(myMonth);
} catch (e) {
   var monthName = &quot;unknown&quot;;
   console.log(e.message, e.name); // &#x4F20;&#x9012;&#x5F02;&#x5E38;&#x5BF9;&#x8C61;&#x5230;&#x9519;&#x8BEF;&#x5904;&#x7406;
}
</pre>

<h3 id="&#x53E6;&#x4E00;&#x4E2A;&#x629B;&#x51FA;&#x5F02;&#x5E38;&#x5BF9;&#x8C61;&#x7684;&#x793A;&#x4F8B;">&#x53E6;&#x4E00;&#x4E2A;&#x629B;&#x51FA;&#x5F02;&#x5E38;&#x5BF9;&#x8C61;&#x7684;&#x793A;&#x4F8B;</h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x793A;&#x4F8B;&#x4E2D;&#x6D4B;&#x8BD5;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x662F;&#x5426;&#x662F;&#x7F8E;&#x56FD;&#x90AE;&#x653F;&#x7F16;&#x7801;&#x3002;&#x5982;&#x679C;&#x90AE;&#x653F;&#x7F16;&#x7801;&#x662F;&#x65E0;&#x6548;&#x7684;&#xFF0C;&#x90A3;&#x4E48; throw &#x8BED;&#x53E5;&#x5C06;&#x4F1A;&#x629B;&#x51FA;&#x4E00;&#x4E2A;&#x7C7B;&#x578B;&#x4E3A; ZipCodeFormatException &#x7684;&#x5F02;&#x5E38;&#x5BF9;&#x8C61;&#x5B9E;&#x4F8B;&#x3002;</p>

<pre class="brush: js">/*
 * &#x521B;&#x5EFA; ZipCode &#x793A;&#x4F8B;.
 *
 * &#x53EF;&#x88AB;&#x63A5;&#x53D7;&#x7684;&#x90AE;&#x653F;&#x7F16;&#x7801;&#x683C;&#x5F0F;:
 *    12345
 *    12345-6789
 *    123456789
 *    12345 6789
 *
 * &#x5982;&#x679C;&#x6784;&#x9020;&#x51FD;&#x6570;&#x53C2;&#x6570;&#x4F20;&#x5165;&#x7684;&#x683C;&#x5F0F;&#x4E0D;&#x7B26;&#x5408;&#x4EE5;&#x4E0A;&#x4EFB;&#x4F55;&#x4E00;&#x4E2A;&#x683C;&#x5F0F;&#xFF0C;&#x5C06;&#x4F1A;&#x629B;&#x51FA;&#x5F02;&#x5E38;&#x3002;
 */

function ZipCode(zip) {
   zip = new String(zip);
   pattern = /[0-9]{5}([- ]?[0-9]{4})?/;
   if (pattern.test(zip)) {
      // zip code value will be the first match in the string
      this.value = zip.match(pattern)[0];
      this.valueOf = function() {
         return this.value
      };
      this.toString = function() {
         return String(this.value)
      };
   } else {
      throw new ZipCodeFormatException(zip);
   }
}

function ZipCodeFormatException(value) {
   this.value = value;
   this.message = &quot;&#x4E0D;&#x662F;&#x6B63;&#x786E;&#x7684;&#x90AE;&#x653F;&#x7F16;&#x7801;&quot;;
   this.toString = function() {
      return this.value + this.message
   };
}

/*
 * &#x8FD9;&#x53EF;&#x80FD;&#x662F;&#x4E00;&#x4E2A;&#x9A8C;&#x8BC1;&#x7F8E;&#x56FD;&#x5730;&#x533A;&#x4E2D;&#x7684;&#x811A;&#x672C;
 */

const ZIPCODE_INVALID = -1;
const ZIPCODE_UNKNOWN_ERROR = -2;

function verifyZipCode(z) {
   try {
      z = new ZipCode(z);
   } catch (e) {
      if (e instanceof ZipCodeFormatException) {
         return ZIPCODE_INVALID;
      } else {
         return ZIPCODE_UNKNOWN_ERROR;
      }
   }
   return z;
}

a = verifyZipCode(95060);         // &#x8FD4;&#x56DE; 95060
b = verifyZipCode(9560);          // &#x8FD4;&#x56DE; -1
c = verifyZipCode(&quot;a&quot;);           // &#x8FD4;&#x56DE; -1
d = verifyZipCode(&quot;95060&quot;);       // &#x8FD4;&#x56DE; 95060
e = verifyZipCode(&quot;95060 1234&quot;);  // &#x8FD4;&#x56DE; 95060 1234
</pre>

<h3 id="&#x91CD;&#x65B0;&#x629B;&#x51FA;&#x5F02;&#x5E38;">&#x91CD;&#x65B0;&#x629B;&#x51FA;&#x5F02;&#x5E38;</h3>

<p>&#x4F60;&#x53EF;&#x4EE5;&#x5728;&#x6355;&#x6349;&#x5F02;&#x5E38;&#x540E;&#x91CD;&#x65B0;&#x629B;&#x51FA;&#x5F02;&#x5E38;&#x3002;&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x6355;&#x6349;&#x4E86;&#x4E00;&#x4E2A;&#x5F02;&#x5E38;&#x503C;&#x4E3A;&#x6570;&#x5B57;&#x7684;&#x5F02;&#x5E38;&#xFF0C;&#x5E76;&#x5728;&#x5176;&#x503C;&#x5927;&#x4E8E;50&#x540E;&#x91CD;&#x65B0;&#x629B;&#x51FA;&#x5F02;&#x5E38;&#x3002;&#x91CD;&#x65B0;&#x629B;&#x51FA;&#x7684;&#x5F02;&#x5E38;&#x5C06;&#x4F1A;&#x5411;&#x4E0A;&#x5192;&#x6CE1;&#x5230;&#x95ED;&#x5305;&#x7684;&#x51FD;&#x6570;&#x8C03;&#x7528;&#x76F4;&#x5230;&#x6700;&#x9876;&#x5C42;&#x88AB;&#x7528;&#x6237;&#x770B;&#x5230;&#x3002;</p>

<pre class="brush: js">try {
   throw n; // &#x629B;&#x51FA;&#x4E00;&#x4E2A;&#x6570;&#x503C;&#x5F02;&#x5E38;
} catch (e) {
   if (e &lt;= 50) {
      // &#x5F02;&#x5E38;&#x5728; 1-50 &#x4E4B;&#x95F4;&#x65F6;&#xFF0C;&#x76F4;&#x63A5;&#x5904;&#x7406;
   } else {
      // &#x5F02;&#x5E38;&#x65E0;&#x6CD5;&#x5904;&#x7406;&#xFF0C;&#x91CD;&#x65B0;&#x629B;&#x51FA;
      throw e;
   }
}
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x5907;&#x6CE8;</th>
  </tr>
  <tr>
   <td>ECMAScript 3rd Edition</td>
   <td>&#x6807;&#x51C6;</td>
   <td>&#x6700;&#x521D;&#x5B9A;&#x4E49;.<br>
    &#x5728; JavaScript 1.4 &#x4E2D;&#x5B9E;&#x73B0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-12.13" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">throw statement</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-throw-statement" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">throw statement</small></a></td>
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
   <th>&#x529F;&#x80FD;</th>
   <th>Chrome</th>
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>&#x57FA;&#x672C;&#x652F;&#x6301;</td>
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
   <th>&#x529F;&#x80FD;</th>
   <th>Android</th>
   <th>Chrome for Android</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>&#x57FA;&#x672C;&#x652F;&#x6301;</td>
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

<h2 id="&#x53C2;&#x89C1;">&#x53C2;&#x89C1;</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Statements/try...catch"><code>try...catch</code></a></li>
</ul>
                  
                
              