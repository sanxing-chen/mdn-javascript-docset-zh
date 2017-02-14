
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="&#x4FE1;&#x606F;">&#x4FE1;&#x606F;</h2>

<pre class="syntaxbox">SyntaxError: JSON.parse: unterminated string literal
SyntaxError: JSON.parse: bad control character in string literal
SyntaxError: JSON.parse: bad character in string literal
SyntaxError: JSON.parse: bad Unicode escape
SyntaxError: JSON.parse: bad escape character
SyntaxError: JSON.parse: unterminated string
SyntaxError: JSON.parse: no number after minus sign
SyntaxError: JSON.parse: unexpected non-digit
SyntaxError: JSON.parse: missing digits after decimal point
SyntaxError: JSON.parse: unterminated fractional number
SyntaxError: JSON.parse: missing digits after exponent indicator
SyntaxError: JSON.parse: missing digits after exponent sign
SyntaxError: JSON.parse: exponent part is missing a number
SyntaxError: JSON.parse: unexpected end of data
SyntaxError: JSON.parse: unexpected keyword
SyntaxError: JSON.parse: unexpected character
SyntaxError: JSON.parse: end of data while reading object contents
SyntaxError: JSON.parse: expected property name or &apos;}&apos;
SyntaxError: JSON.parse: end of data when &apos;,&apos; or &apos;]&apos; was expected
SyntaxError: JSON.parse: expected &apos;,&apos; or &apos;]&apos; after array element
SyntaxError: JSON.parse: end of data when property name was expected
SyntaxError: JSON.parse: expected double-quoted property name
SyntaxError: JSON.parse: end of data after property name when &apos;:&apos; was expected
SyntaxError: JSON.parse: expected &apos;:&apos; after property name in object
SyntaxError: JSON.parse: end of data after property value in object
SyntaxError: JSON.parse: expected &apos;,&apos; or &apos;}&apos; after property value in object
SyntaxError: JSON.parse: expected &apos;,&apos; or &apos;}&apos; after property-value pair in object literal
SyntaxError: JSON.parse: property names must be double-quoted strings
SyntaxError: JSON.parse: expected property name or &apos;}&apos;
SyntaxError: JSON.parse: unexpected character
SyntaxError: JSON.parse: unexpected non-whitespace character after JSON data
</pre>

<h2 id="&#x9519;&#x8BEF;&#x7C7B;&#x578B;">&#x9519;&#x8BEF;&#x7C7B;&#x578B;</h2>

<p><a title="SyntaxError&#xA0;&#x5BF9;&#x8C61;&#x4EE3;&#x8868;&#x5C1D;&#x8BD5;&#x89E3;&#x6790;&#x8BED;&#x6CD5;&#x4E0A;&#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x4EE3;&#x7801;&#x7684;&#x9519;&#x8BEF;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError"><code>SyntaxError</code></a></p>

<h2 id="&#x54EA;&#x91CC;&#x51FA;&#x9519;&#x4E86;">&#x54EA;&#x91CC;&#x51FA;&#x9519;&#x4E86;?</h2>

<p><a title="JSON.parse() &#x65B9;&#x6CD5;&#x5C06;&#x4E00;&#x4E2A;&#x7B26;&#x5408;JSON&#x8BED;&#x6CD5;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x89E3;&#x6790;&#x6210;&#x4E00;&#x4E2A;&#x5BF9;&#x5E94;&#x7C7B;&#x578B;&#x7684;&#x503C;&#x6216;&#x5BF9;&#x8C61;&#x3002;&#x5728;&#x89E3;&#x6790;&#x8FC7;&#x7A0B;&#x4E2D;&#xFF0C;&#x8FD8;&#x53EF;&#x4EE5;&#x9009;&#x62E9;&#x6027;&#x7684;&#x4FEE;&#x6539;&#x67D0;&#x4E9B;&#x5C5E;&#x6027;&#x7684;&#x539F;&#x59CB;&#x89E3;&#x6790;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse"><code>JSON.parse()</code></a> &#x4F1A;&#x628A;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x89E3;&#x6790;&#x6210;&#xA0;JSON &#x5BF9;&#x8C61;&#x3002;&#x5982;&#x679C;&#x5B57;&#x7B26;&#x4E32;&#x4E66;&#x5199;&#x6B63;&#x786E;&#xFF0C;&#x90A3;&#x4E48;&#x5176;&#x5C06;&#x4F1A;&#x88AB;&#x89E3;&#x6790;&#x6210;&#x4E00;&#x4E2A;&#x6709;&#x6548;&#x7684; JSON&#xFF0C;&#x4F46;&#x662F;&#x8FD9;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x88AB;&#x68C0;&#x6D4B;&#x51FA;&#x9519;&#x8BEF;&#x8BED;&#x6CD5;&#x7684;&#x65F6;&#x5019;&#x5C06;&#x4F1A;&#x629B;&#x51FA;&#x9519;&#x8BEF;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="JSON.parse()_&#x4E0D;&#x5141;&#x8BB8;&#x5728;&#x672B;&#x5C3E;&#x6DFB;&#x52A0;&#x591A;&#x4F59;&#x7684;&#x9017;&#x53F7;"><code>JSON.parse()</code>&#xA0;&#x4E0D;&#x5141;&#x8BB8;&#x5728;&#x672B;&#x5C3E;&#x6DFB;&#x52A0;&#x591A;&#x4F59;&#x7684;&#x9017;&#x53F7;</h3>

<p>&#x4E0B;&#x9762;&#x4E24;&#x884C;&#x4EE3;&#x7801;&#x90FD;&#x4F1A;&#x629B;&#x51FA;&#x9519;&#x8BEF;:</p>

<pre class="brush: js example-bad">JSON.parse(&apos;[1, 2, 3, 4, ]&apos;);
JSON.parse(&apos;{&quot;foo&quot; : 1, }&apos;);
// SyntaxError JSON.parse: unexpected character 
// at line 1 column 14 of the JSON data
</pre>

<p>&#x7701;&#x7565;&#x672B;&#x5C3E;&#x591A;&#x4F59;&#x7684;&#x9017;&#x53F7;&#x89E3;&#x6790; JSON &#x5C31;&#x662F;&#x6B63;&#x786E;:</p>

<pre class="brush: js example-good">JSON.parse(&apos;[1, 2, 3, 4 ]&apos;);
JSON.parse(&apos;{&quot;foo&quot; : 1 }&apos;);</pre>

<h3 id="JSON_&#x7684;&#x5C5E;&#x6027;&#x540D;&#x5FC5;&#x987B;&#x4F7F;&#x7528;&#x53CC;&#x5F15;&#x53F7;">JSON &#x7684;&#x5C5E;&#x6027;&#x540D;&#x5FC5;&#x987B;&#x4F7F;&#x7528;&#x53CC;&#x5F15;&#x53F7;</h3>

<p>&#x5C5E;&#x6027;&#x540D;&#x4E0A;&#x4E0D;&#x80FD;&#x4F7F;&#x7528;&#x5355;&#x5F15;&#x53F7;&#xFF0C;&#x4F8B;&#x5982;&#xFF1A;&#xA0;&apos;foo&apos;&#x3002;</p>

<pre class="brush: js example-bad">JSON.parse(&quot;{&apos;foo&apos; : 1 }&quot;);
// SyntaxError: JSON.parse: expected property name or &apos;}&apos; 
// at line 1 column 2 of the JSON data</pre>

<p>&#x53D6;&#x800C;&#x4EE3;&#x4E4B;&#xFF0C;&#x5199;&#x6210;&#xA0;&quot;foo&quot;&#xFF1A;</p>

<pre class="brush: js example-good">JSON.parse(&apos;{&quot;foo&quot; : 1 }&apos;);</pre>

<h3 id="&#x524D;&#x5BFC;_0_&#x548C;&#x5C0F;&#x6570;&#x70B9;">&#x524D;&#x5BFC; 0 &#x548C;&#x5C0F;&#x6570;&#x70B9;</h3>

<p>&#x6570;&#x5B57;&#x4E0D;&#x80FD;&#x7528; 0 &#x5F00;&#x5934;&#xFF0C;&#x6BD4;&#x5982;01&#xFF0C;&#x5E76;&#x4E14;&#x4F60;&#x7684;&#x5C0F;&#x6570;&#x70B9;&#x540E;&#x9762;&#x5FC5;&#x987B;&#x8DDF;&#x7740;&#x81F3;&#x5C11;&#x4E00;&#x4E2A;&#x6570;&#x5B57;&#x3002;</p>

<pre class="brush: js example-bad">JSON.parse(&apos;{&quot;foo&quot; : 01 }&apos;);
// SyntaxError: JSON.parse: expected &apos;,&apos; or &apos;}&apos; after property value 
// in object at line 1 column 2 of the JSON data

JSON.parse(&apos;{&quot;foo&quot; : 1. }&apos;); 
// SyntaxError: JSON.parse: unterminated fractional number 
// at line 1 column 2 of the JSON data
</pre>

<p>&#x6B63;&#x786E;&#x7684;&#x5199;&#x6CD5;&#x5E94;&#x8BE5;&#x662F;&#x53EA;&#x5199;&#x4E00;&#x4E2A;1&#xFF0C;&#x4E0D;&#x4E66;&#x5199;&#x524D;&#x9762;&#x7684;0&#x3002;&#x5728;&#x5C0F;&#x6570;&#x70B9;&#x7684;&#x540E;&#x9762;&#x81F3;&#x5C11;&#x8981;&#x8DDF;&#x4E0A;&#x4E00;&#x4E2A;&#x6570;&#x5B57;:</p>

<pre class="brush: js example-good">JSON.parse(&apos;{&quot;foo&quot; : 1 }&apos;);
JSON.parse(&apos;{&quot;foo&quot; : 1.0 }&apos;);
</pre>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="JSON&#xA0;&#x5BF9;&#x8C61;&#x5305;&#x542B;&#x4E86;&#x4E24;&#x4E2A;&#x65B9;&#x6CD5;&#xFF0C;&#x4E00;&#x662F;&#x89E3;&#x6790;&#xA0;JavaScript Object Notation (JSON)&#xFF0C;&#x4E8C;&#x662F;&#x5C06;&#x503C;&#x8F6C;&#x6362;&#x4E3A; JSON&#x3002;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x672C;&#x8EAB;&#x4E0D;&#x80FD;&#x88AB;&#x8C03;&#x7528;&#x6216;&#x8005;&#x4F5C;&#x4E3A;&#x6784;&#x9020;&#x51FD;&#x6570;&#xFF0C;&#x9664;&#x4E86;&#x5B83;&#x7684;&#x8FD9;&#x4E24;&#x4E2A;&#x65B9;&#x6CD5;&#x5C5E;&#x6027;&#x5916; JSON &#x5BF9;&#x8C61;&#x672C;&#x8EAB;&#x5E76;&#x6CA1;&#x6709;&#x4EC0;&#x4E48;&#x6709;&#x7528;&#x7684;&#x529F;&#x80FD;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON"><code>JSON</code></a></li>
 <li><a title="JSON.parse() &#x65B9;&#x6CD5;&#x5C06;&#x4E00;&#x4E2A;&#x7B26;&#x5408;JSON&#x8BED;&#x6CD5;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x89E3;&#x6790;&#x6210;&#x4E00;&#x4E2A;&#x5BF9;&#x5E94;&#x7C7B;&#x578B;&#x7684;&#x503C;&#x6216;&#x5BF9;&#x8C61;&#x3002;&#x5728;&#x89E3;&#x6790;&#x8FC7;&#x7A0B;&#x4E2D;&#xFF0C;&#x8FD8;&#x53EF;&#x4EE5;&#x9009;&#x62E9;&#x6027;&#x7684;&#x4FEE;&#x6539;&#x67D0;&#x4E9B;&#x5C5E;&#x6027;&#x7684;&#x539F;&#x59CB;&#x89E3;&#x6790;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse"><code>JSON.parse()</code></a></li>
 <li><a title="JSON.stringify() &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x5C06;&#x4EFB;&#x610F;&#x7684; JavaScript &#x503C;&#x5E8F;&#x5217;&#x5316;&#x6210; &#x7B26;&#x5408;JSON&#x8BED;&#x6CD5;&#x7684;&#xA0;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x82E5;&#x8F6C;&#x6362;&#x7684;&#x51FD;&#x6570;&#x88AB;&#x6307;&#x5B9A;&#xFF0C;&#x5219;&#x88AB;&#x5E8F;&#x5217;&#x5316;&#x7684;&#x503C;&#x7684;&#x6BCF;&#x4E2A;&#x5C5E;&#x6027;&#x90FD;&#x4F1A;&#x7ECF;&#x8FC7;&#x8BE5;&#x51FD;&#x6570;&#x7684;&#x8F6C;&#x6362;&#x548C;&#x5904;&#x7406;&#xFF1B;&#x82E5;&#x8F6C;&#x6362;&#x7684;&#x6570;&#x7EC4;&#x88AB;&#x6307;&#x5B9A;&#xFF0C;&#x53EA;&#x6709;&#x5305;&#x542B;&#x5728;&#x8FD9;&#x4E2A;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x624D;&#x4F1A;&#x88AB;&#x5E8F;&#x5217;&#x5316;&#x5230;&#x6700;&#x7EC8;&#x7684; JSON &#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"><code>JSON.stringify()</code></a></li>
</ul>
                  
                
              