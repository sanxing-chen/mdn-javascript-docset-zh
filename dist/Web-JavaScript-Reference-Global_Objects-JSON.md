
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><strong><code>JSON&#xA0;</code></strong>&#x5BF9;&#x8C61;&#x5305;&#x542B;&#x7528;&#x4E8E;&#x89E3;&#x6790;&#xA0;<a href="http://json.org/" class="external">JavaScript Object Notation</a>&#xA0; (<a href="/en-US/docs/Glossary/JSON" class="glossaryLink" title="JSON: The JavaScript Object Notation&#xA0;(JSON) is a data-interchange format.&#xA0; Although not a strict subset, JSON closely resembles a subset of JavaScript syntax. Though many programming languages support JSON, JSON is especially useful for JavaScript-based apps, including websites and browser extensions.">JSON</a>)&#xA0;&#x7684;&#x65B9;&#x6CD5;&#xFF0C;&#x5E76;&#x5C06;&#x503C;&#x8F6C;&#x6362;&#x4E3A;JSON&#x3002;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x672C;&#x8EAB;&#x4E0D;&#x80FD;&#x88AB;&#x8C03;&#x7528;&#x6216;&#x8005;&#x4F5C;&#x4E3A;&#x6784;&#x9020;&#x51FD;&#x6570;&#xFF0C;&#x9664;&#x4E86;&#x5B83;&#x7684;&#x4E24;&#x4E2A;&#x65B9;&#x6CD5;&#x5C5E;&#x6027;&#xFF0C;&#x5B83;&#x6CA1;&#x6709;&#x672C;&#x8EAB;&#x6CA1;&#x6709;&#x4EC0;&#x4E48;&#x6709;&#x7528;&#x7684;&#x529F;&#x80FD;&#x3002;</p>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<h3 name="JavaScript_Object_Notation" id="JavaScript_Object_Notation">JavaScript&#x5BF9;&#x8C61;&#x6CE8;&#x91CA;</h3>

<p>JSON &#x662F;&#x4E00;&#x79CD;&#x7528;&#x6765;&#x5E8F;&#x5217;&#x5316;&#x5BF9;&#x8C61;&#x3001;&#x6570;&#x7EC4;&#x3001;&#x6570;&#x503C;&#x3001;&#x5B57;&#x7B26;&#x4E32;&#x3001;&#x5E03;&#x5C14;&#x503C;&#x548C; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null" title="&#x503C;&#xA0;null&#xA0;&#x662F;&#x4E00;&#x4E2A; JavaScript &#x5B57;&#x9762;&#x91CF;&#xFF0C;&#x8868;&#x793A;&#x7A7A;&#x503C;&#xFF08;null or an &quot;empty&quot; value&#xFF09;&#xFF0C;&#x5373;&#x6CA1;&#x6709;&#x5BF9;&#x8C61;&#x88AB;&#x5448;&#x73B0;&#xFF08;no object value is present&#xFF09;&#x3002;&#x5B83;&#x662F; JavaScript &#x539F;&#x59CB;&#x503C; &#x4E4B;&#x4E00;&#x3002;"><code>null</code></a> &#x7684;&#x8BED;&#x6CD5;&#x3002;&#x5B83;&#x57FA;&#x4E8E; JavaScript &#x8BED;&#x6CD5;&#xFF0C;&#x4F46;&#x662F;&#x53C8;&#x6709;&#x533A;&#x522B;&#xFF1A;&#x4E00;&#x4E9B; JavaScript &#x503C;&#x4E0D;&#x662F; JSON&#xFF0C;&#x800C;&#x67D0;&#x4E9B; JSON &#x4E0D;&#x662F; JavaScript &#x503C;&#x3002;<span style="line-height: 1.5;">&#x53C2;&#x8003;&#xA0;</span><a href="http://timelessrepo.com/json-isnt-a-javascript-subset" class="external" style="line-height: 1.5; text-decoration: underline;">JSON: The JavaScript subset that isn&apos;t</a>&#x3002;</p>

<table>
 <caption>JavaScript &#x4E0E; JSON &#x7684;&#x533A;&#x522B;</caption>
 <thead>
  <tr>
   <th scope="col">JavaScript&#x7C7B;&#x578B;</th>
   <th scope="col">JSON&#x4E0E;&#x4E4B;&#x533A;&#x522B;</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>&#x5BF9;&#x8C61;&#x548C;&#x6570;&#x7EC4;</td>
   <td>&#x5C5E;&#x6027;&#x540D;&#x79F0;&#x5FC5;&#x987B;&#x7528;&#x53CC;&#x5F15;&#x53F7;&#x5305;&#x88F9;&#xFF1B;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&#x540E;&#x9762;&#x4E0D;&#x80FD;&#x6709;&#x9017;&#x53F7;&#x3002;</td>
  </tr>
  <tr>
   <td>&#x6570;&#x503C;</td>
   <td>&#x524D;&#x5BFC;0&#x4E0D;&#x80FD;&#x4F7F;&#x7528;&#xFF08;&#x5728; JSON.stringify &#x4E2D;&#x5C06;&#x4F1A;&#x88AB;&#x5FFD;&#x7565;&#xFF0C;&#x5728; JSON.parse &#x4F1A;&#x629B;&#x51FA;&#x9519;&#x8BEF;&#xFF09;&#xFF1B;&#x5C0F;&#x6570;&#x70B9;&#x540E;&#x9762;&#x81F3;&#x5C11;&#x6709;&#x4E00;&#x4E2A;&#x6570;&#x5B57;&#x3002;</td>
  </tr>
  <tr>
   <td>&#x5B57;&#x7B26;&#x4E32;</td>
   <td>
    <p>&#x53EA;&#x6709;&#x6709;&#x9650;&#x7684;&#x5B57;&#x7B26;&#x80FD;&#x591F;&#x88AB;&#x8F6C;&#x4E49;&#xFF1B;&#x4E0D;&#x5141;&#x8BB8;&#x67D0;&#x4E9B;&#x63A7;&#x5236;&#x5B57;&#x7B26;&#xFF1B;&#x4F46;&#x5141;&#x8BB8;&#x4F7F;&#x7528;Unicode &#x884C;&#x5206;&#x9694;&#x7B26; (<a href="http://unicode-table.com/cn/2028/" class="external">U+2028</a>) &#x548C;&#x6BB5;&#x843D;&#x5206;&#x9694;&#x7B26; (<a href="http://unicode-table.com/cn/2029/" class="external">U+2029</a>) ; &#x5B57;&#x7B26;&#x4E32;&#x5FC5;&#x987B;&#x7528;&#x53CC;&#x5F15;&#x53F7;&#x62EC;&#x8D77;&#x6765;&#x3002;&#xA0;&#x5728; Javascript &#x4E2D;,&#x4E0B;&#x9762;&#x7684;&#x793A;&#x4F8B;&#x4E2D; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse" title="JSON.parse() &#x65B9;&#x6CD5;&#x89E3;&#x6790;&#x4E00;&#x4E2A;JSON&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x6784;&#x9020;&#x7531;&#x5B57;&#x7B26;&#x4E32;&#x63CF;&#x8FF0;&#x7684;JavaScript&#x503C;&#x6216;&#x5BF9;&#x8C61;&#x3002;&#x53EF;&#x4EE5;&#x63D0;&#x4F9B;&#x53EF;&#x9009;&#x7684;reviver&#x51FD;&#x6570;&#x4EE5;&#x5728;&#x8FD4;&#x56DE;&#x4E4B;&#x524D;&#x5BF9;&#x6240;&#x5F97;&#x5230;&#x7684;&#x5BF9;&#x8C61;&#x6267;&#x884C;&#x53D8;&#x6362;&#x3002;"><code>JSON.parse()</code></a> &#x80FD;&#x591F;&#x6B63;&#x5E38;&#x89E3;&#x6790;&#xFF0C;&#x4F46;&#x628A;&#x5B83;&#x5F53;&#x4F5C;JavaScript&#x89E3;&#x6790;&#x65F6;&#x4F1A;&#x629B;&#x51FA;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError" title="SyntaxError&#xA0;&#x5BF9;&#x8C61;&#x4EE3;&#x8868;&#x5C1D;&#x8BD5;&#x89E3;&#x6790;&#x8BED;&#x6CD5;&#x4E0A;&#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x4EE3;&#x7801;&#x7684;&#x9519;&#x8BEF;&#x3002;"><code>SyntaxError</code></a> &#x9519;&#x8BEF;:</p>

    <pre class="brush: js">
var code = &apos;&quot;\u2028\u2029&quot;&apos;;
JSON.parse(code); // works fine
eval(code); // fails
</pre>
   </td>
  </tr>
 </tbody>
</table>

<p>&#x5B8C;&#x6574;&#x7684;JSON&#x8BED;&#x6CD5;&#x5982;&#x4E0B;&#xFF1A;</p>

<pre><var>JSON</var> = <strong>null</strong>
    <em>or</em> <strong>true</strong> <em>or</em> <strong>false</strong>
    <em>or</em> <var>JSONNumber</var>
    <em>or</em> <var>JSONString</var>
    <em>or</em> <var>JSONObject</var>
    <em>or</em> <var>JSONArray</var>

<var>JSONNumber</var> = <strong>-</strong> <var>PositiveNumber</var>
          <em>or</em> <var>PositiveNumber</var>
<var>PositiveNumber</var> = DecimalNumber
              or <var>DecimalNumber</var> <strong>.</strong> <var>Digits</var>
              or <var>DecimalNumber</var> <strong>.</strong> <var>Digits</var> <var>ExponentPart</var>
              or <var>DecimalNumber</var> <var>ExponentPart</var>
<var>DecimalNumber</var> = <strong>0</strong>
             <em>or</em> <var>OneToNine</var> <var>Digits</var>
<var>ExponentPart</var> = <strong>e</strong> <var>Exponent</var>
            <em>or</em> <strong>E</strong> <var>Exponent</var>
<var>Exponent</var> = <var>Digits</var>
        <em>or</em> <strong>+</strong> <var>Digits</var>
        <em>or</em> <strong>-</strong> <var>Digits</var>
<var>Digits</var> = <var>Digit</var>
      <em>or</em> <var>Digits</var> <var>Digit</var>
<var>Digit</var> = <strong>0</strong> through <strong>9</strong>
<var>OneToNine</var> = <strong>1</strong> through <strong>9</strong>

<var>JSONString</var> = <strong>&quot;&quot;</strong>
          <em>or</em> <strong>&quot;</strong> <var>StringCharacters</var> <strong>&quot;</strong>
<var>StringCharacters</var> = <var>StringCharacter</var>
                <em>or</em> <var>StringCharacters</var> <var>StringCharacter</var>
<var>StringCharacter</var> = any character
                  <em>except</em> <strong>&quot;</strong> <em>or</em> <strong>\</strong> <em>or</em> U+0000 through U+001F
               <em>or</em> <var>EscapeSequence</var>
<var>EscapeSequence</var> = <strong>\&quot; </strong><em>or</em> <strong>\/ </strong><em>or</em> <strong>\\ </strong><em>or</em> <strong>\b </strong><em>or</em> <strong>\f </strong><em>or</em> <strong>\n </strong><em>or</em> <strong>\r </strong><em>or</em> <strong>\t</strong>
              <em>or</em> <strong>\u</strong> <var>HexDigit</var> <var>HexDigit</var> <var>HexDigit</var> <var>HexDigit</var>
<var>HexDigit</var> = <strong>0</strong> through <strong>9</strong>
        <em>or</em> <strong>A</strong> through <strong>F</strong>
        <em>or</em> <strong>a</strong> through <strong>f</strong>

<var>JSONObject</var> = <strong>{</strong> <strong>}</strong>
          <em>or</em> <strong>{</strong> <var>Members</var> <strong>}</strong>
<var>Members</var> = <var>JSONString</var> <strong>:</strong> <var>JSON</var>
       <em>or</em> <var>Members</var> <strong>,</strong> <var>JSONString</var> <strong>:</strong> <var>JSON</var>

<var>JSONArray</var> = <strong>[</strong> <strong>]</strong>
         <em>or</em> <strong>[</strong> <var>ArrayElements</var> <strong>]</strong>
<var>ArrayElements</var> = <var>JSON</var>
             <em>or</em> <var>ArrayElements</var> <strong>,</strong> <var>JSON</var>
</pre>

<p>&#x7A7A;&#x767D;&#x5B57;&#x7B26;&#x53EF;&#x4EE5;&#x51FA;&#x73B0;&#x5728;&#x4EFB;&#x610F;&#x4F4D;&#x7F6E;&#xFF0C;&#x4F46;&#x662F;&#x6570;&#x503C;&#x7C7B;&#x578B;&#x7684;&#x6570;&#x5B57;&#x4E2D;&#x95F4;&#x4E0D;&#x80FD;&#x6709;&#x7A7A;&#x767D;&#x5B57;&#x7B26;&#xFF0C;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x95F4;&#x4E0D;&#x80FD;&#x968F;&#x610F;&#x6DFB;&#x52A0;&#x7A7A;&#x767D;&#x5B57;&#x7B26;&#xFF0C;&#x56E0;&#x4E3A;&#x6DFB;&#x52A0;&#x7684;&#x7A7A;&#x767D;&#x5B57;&#x7B26;&#x4F1A;&#x88AB;&#x89E3;&#x91CA;&#x4E3A;&#x76F8;&#x5E94;&#x7684;&#x5B57;&#x7B26;&#x503C;&#xFF0C;&#x4ECE;&#x800C;&#x5F15;&#x8D77;&#x9519;&#x8BEF;(&#x8BD1;&#x8005;&#x6CE8;:&#x56E0;&#x6B64;&#x5728;&#x89E3;&#x6790;JSONString&#x5B57;&#x7B26;&#x4E32;&#x5E38;&#x89C1;&#x7684;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#x5C31;&#x662F;&#x5F53;&#x8981;&#x89E3;&#x6790;&#x7684;JSONString&#x4E2D;&#x51FA;&#x73B0;&#x5B57;&#x7B26;\f\n\r\t\v&#x662F;&#x4F1A;&#x62A5;&#x9519;&#x7684;,&#x5728;&#x89E3;&#x6790;&#x51FA;&#x73B0;&#x4E0A;&#x8FF0;&#x5B57;&#x7B26;&#x7684;JSONString&#x7684;&#x65F6;&#x5019;&#x8BF7;&#x9996;&#x5148;&#x5C06;&#x5176;&#x8F6C;&#x5316;&#x4E3A;&#x5176;&#x4ED6;&#x7F16;&#x7801;&#x683C;&#x5F0F;&#x5982;HTML-code&#x7F16;&#x7801;&#x683C;&#x5F0F;(&#x4F8B;&#x5982;&amp;#32;&#xA0;&#x4E0D;&#x5B8C;&#x5168;&#x652F;&#x6301;),&#x6216;&#x8005;&#x5E72;&#x8106;&#x76F4;&#x63A5;&#x5C06;&#x4E0A;&#x8FF0;&#x5B57;&#x7B26;&#x53BB;&#x6389;)&#x3002;&#x6709;&#x6548;&#x7A7A;&#x767D;&#x5B57;&#x7B26;&#x53EA;&#x5305;&#x62EC;&#x5236;&#x8868;&#x7B26; (U+0009)&#x3001;&#x56DE;&#x8F66;&#x7B26; (U+000D)&#x3001;&#x6362;&#x884C;&#x7B26; (U+000A) &#x548C;&#x7A7A;&#x683C; (U+0020) &#x3002;</p>

<h2 name="Methods" id="Methods">&#x65B9;&#x6CD5;</h2>

<dl>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse" title="JSON.parse() &#x65B9;&#x6CD5;&#x89E3;&#x6790;&#x4E00;&#x4E2A;JSON&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x6784;&#x9020;&#x7531;&#x5B57;&#x7B26;&#x4E32;&#x63CF;&#x8FF0;&#x7684;JavaScript&#x503C;&#x6216;&#x5BF9;&#x8C61;&#x3002;&#x53EF;&#x4EE5;&#x63D0;&#x4F9B;&#x53EF;&#x9009;&#x7684;reviver&#x51FD;&#x6570;&#x4EE5;&#x5728;&#x8FD4;&#x56DE;&#x4E4B;&#x524D;&#x5BF9;&#x6240;&#x5F97;&#x5230;&#x7684;&#x5BF9;&#x8C61;&#x6267;&#x884C;&#x53D8;&#x6362;&#x3002;"><code>JSON.parse()</code></a></dt>
 <dd>&#x89E3;&#x6790;JSON&#x5B57;&#x7B26;&#x4E32;, &#x53EF;&#x4EE5;&#x9009;&#x62E9;&#x6539;&#x53D8;&#x524D;&#x9762;&#x89E3;&#x6790;&#x540E;&#x7684;&#x503C;&#x53CA;&#x5176;&#x5C5E;&#x6027;&#xFF0C;&#x7136;&#x540E;&#x8FD4;&#x56DE;&#x89E3;&#x6790;&#x7684;&#x503C;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify" title="JSON.stringify() &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x5C06;&#x4EFB;&#x610F;&#x7684; JavaScript &#x503C;&#x5E8F;&#x5217;&#x5316;&#x6210; &#x7B26;&#x5408;JSON&#x8BED;&#x6CD5;&#x7684;&#xA0;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x82E5;&#x8F6C;&#x6362;&#x7684;&#x51FD;&#x6570;&#x88AB;&#x6307;&#x5B9A;&#xFF0C;&#x5219;&#x88AB;&#x5E8F;&#x5217;&#x5316;&#x7684;&#x503C;&#x7684;&#x6BCF;&#x4E2A;&#x5C5E;&#x6027;&#x90FD;&#x4F1A;&#x7ECF;&#x8FC7;&#x8BE5;&#x51FD;&#x6570;&#x7684;&#x8F6C;&#x6362;&#x548C;&#x5904;&#x7406;&#xFF1B;&#x82E5;&#x8F6C;&#x6362;&#x7684;&#x6570;&#x7EC4;&#x88AB;&#x6307;&#x5B9A;&#xFF0C;&#x53EA;&#x6709;&#x5305;&#x542B;&#x5728;&#x8FD9;&#x4E2A;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x624D;&#x4F1A;&#x88AB;&#x5E8F;&#x5217;&#x5316;&#x5230;&#x6700;&#x7EC8;&#x7684; JSON &#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x3002;"><code>JSON.stringify()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x503C;&#x7684; JSON &#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x53EF;&#x4EE5;&#x81EA;&#x5B9A;&#x4E49;&#x53EA;&#x5305;&#x542B;&#x67D0;&#x4E9B;&#x7279;&#x5B9A;&#x7684;&#x5C5E;&#x6027;&#x6216;&#x66FF;&#x6362;&#x5C5E;&#x6027;&#x503C;&#x3002;</dd>
</dl>

<h2 name="Polyfill" id="Polyfill">Polyfill</h2>

<p><code>JSON</code> &#x5BF9;&#x8C61;&#x4E0D;&#x88AB;&#x65E7;&#x7248;&#x672C;&#x6D4F;&#x89C8;&#x5668;&#x652F;&#x6301;&#x3002;&#x4F60;&#x53EF;&#x4EE5;&#x628A;&#x4E0B;&#x9762;&#x4EE3;&#x7801;&#x653E;&#x5230;&#x811A;&#x672C;&#x7684;&#x5F00;&#x59CB;&#x4F4D;&#x7F6E;&#xFF0C;&#x8FD9;&#x6837;&#x5C31;&#x53EF;&#x4EE5;&#x5728;&#x90A3;&#x4E9B;&#x6CA1;&#x6709;&#x539F;&#x751F;&#x652F;&#x6301; JSON &#x5BF9;&#x8C61;&#x7684;&#x6D4F;&#x89C8;&#x5668;&#xFF08;&#x6BD4;&#x5982;IE6&#xFF09;&#x4E2D;&#x4F7F;&#x7528; JSON &#x5BF9;&#x8C61;&#x3002;</p>

<p>&#x4E0B;&#x9762;&#x7684;&#x7B97;&#x6CD5;&#x7528;&#x6765;&#x6A21;&#x62DF;&#x539F;&#x751F; JSON &#x5BF9;&#x8C61;&#xFF1A;</p>

<pre class="brush: js">if (!window.JSON) {
  window.JSON = {
    parse: function(sJSON) { return eval(&apos;(&apos; + sJSON + &apos;)&apos;); },
    stringify: (function () {
      var toString = Object.prototype.toString;
      var isArray = Array.isArray || function (a) { return toString.call(a) === &apos;[object Array]&apos;; };
      var escMap = {&apos;&quot;&apos;: &apos;\\&quot;&apos;, &apos;\\&apos;: &apos;\\\\&apos;, &apos;\b&apos;: &apos;\\b&apos;, &apos;\f&apos;: &apos;\\f&apos;, &apos;\n&apos;: &apos;\\n&apos;, &apos;\r&apos;: &apos;\\r&apos;, &apos;\t&apos;: &apos;\\t&apos;};
      var escFunc = function (m) { return escMap[m] || &apos;\\u&apos; + (m.charCodeAt(0) + 0x10000).toString(16).substr(1); };
      var escRE = /[\\&quot;\u0000-\u001F\u2028\u2029]/g;
      return function stringify(value) {
        if (value == null) {
          return &apos;null&apos;;
        } else if (typeof value === &apos;number&apos;) {
          return isFinite(value) ? value.toString() : &apos;null&apos;;
        } else if (typeof value === &apos;boolean&apos;) {
          return value.toString();
        } else if (typeof value === &apos;object&apos;) {
          if (typeof value.toJSON === &apos;function&apos;) {
            return stringify(value.toJSON());
          } else if (isArray(value)) {
            var res = &apos;[&apos;;
            for (var i = 0; i &lt; value.length; i++)
              res += (i ? &apos;, &apos; : &apos;&apos;) + stringify(value[i]);
            return res + &apos;]&apos;;
          } else if (toString.call(value) === &apos;[object Object]&apos;) {
            var tmp = [];
            for (var k in value) {
              if (value.hasOwnProperty(k))
                tmp.push(stringify(k) + &apos;: &apos; + stringify(value[k]));
            }
            return &apos;{&apos; + tmp.join(&apos;, &apos;) + &apos;}&apos;;
          }
        }
        return &apos;&quot;&apos; + value.toString().replace(escRE, escFunc) + &apos;&quot;&apos;;
      };
    })()
  };
}
</pre>

<p>&#x5173;&#x4E8E; <code>JSON</code> &#x5BF9;&#x8C61;&#x66F4;&#x590D;&#x6742;&#x4E14;&#x6709;&#x540D;&#x7684;&#xA0;<a href="http://remysharp.com/2010/10/08/what-is-a-polyfill/" class="external" title="http://remysharp.com/2010/10/08/what-is-a-polyfill/">polyfills</a>&#xA0;&#x662F;&#xA0;<a href="https://github.com/douglascrockford/JSON-js" class="external link-https" title="https://github.com/douglascrockford/JSON-js">JSON2</a>&#xA0;&#x548C;&#xA0;<a href="http://bestiejs.github.com/json3" class="external" title="http://bestiejs.github.com/json3">JSON3</a>&#x3002;</p>

<h2 name="Specifications" id="Specifications">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x8BF4;&#x660E;</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.12" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">JSON</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-json-object" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">JSON</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-json-object" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">JSON</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 name="Browser_compatibility" id="Browser_compatibility">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><a href="/en-US/Firefox/Releases/3.5" title="Released on 2009-06-30.">3.5</a> (1.9.1)</td>
   <td>8.0</td>
   <td>10.5</td>
   <td>4.0</td>
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
   <td>1.0 (1.0)</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON" title="toJSON() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE; Date &#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x5F62;&#x5F0F;&#x3002;"><code>Date.prototype.toJSON()</code></a></li>
</ul>
                  
                
              