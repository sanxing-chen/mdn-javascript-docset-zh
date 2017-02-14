
                
                  
                    <div class="warning"><code><font face="Open Sans, Arial, sans-serif">&#x4E0D;&#x63A8;&#x8350;&#x4F7F;&#x7528;</font>with&#x8BED;&#x53E5;&#xFF0C;&#x56E0;&#x4E3A;&#x53EF;&#x80FD;&#x9020;&#x6210;bug&#x6216;&#x8005;&#x6027;&#x80FD;&#x635F;&#x5931;&#x3002;&#x8BE6;&#x89C1;</code>&quot;Description&quot;&#x7684;&quot;Ambiguity Con&quot;&#x90E8;&#x5206;&#x3002;</div>

<div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<h2 name="Summary" id="Summary">&#x6982;&#x8981;</h2>

<p><strong>with&#x8BED;&#x53E5;</strong>&#x7684;&#x4F5C;&#x7528;&#x662F;&#x6269;&#x5C55;&#x4F5C;&#x7528;&#x57DF;&#x94FE;&#xFF08;scope chain&#xFF09;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">with (expression) {
  <em>statement</em>
}
</pre>

<dl>
 <dt><code>expression</code></dt>
 <dd>&#x5C06;expression&#x6DFB;&#x52A0;&#x5230;&#x4F5C;&#x7528;&#x57DF;&#x94FE;&#xFF0C;&#x4EE5;&#x4FBF;&#x5728;statement&#x8FD0;&#x884C;&#x65F6;&#x4F7F;&#x7528;&#x3002;expression &#x5916;&#x9762;&#x9700;&#x52A0;&#x62EC;&#x53F7;&#x3002;</dd>
 <dt><code>statement</code></dt>
 <dd>&#x4EFB;&#x4F55;&#x8BED;&#x53E5;&#x90FD;&#x884C;&#x3002;&#x5982;&#x679C;&#x4E0D;&#x6B62;&#x4E00;&#x53E5;&#xFF0C;&#x5219;&#x9700;&#x7528;<a href="/en-US/docs/Web/JavaScript/Reference/Statements/block" title="JavaScript/Reference/Statements/block">block</a>&#x7B26;&#x53F7;({ ... })&#x5C06;&#x5176;&#x62EC;&#x8D77;&#x4F86;&#x3002;</dd>
</dl>

<h2 name="Description" id="Description">&#x8BF4;&#x660E;</h2>

<p>JavaScript&#x67E5;&#x627E;&#x67D0;&#x4E2A;&#x672A;&#x4F7F;&#x7528;&#x547D;&#x540D;&#x7A7A;&#x95F4;&#x7684;&#x53D8;&#x91CF;&#x65F6;&#xFF0C;&#x4F1A;&#x901A;&#x8FC7;&#x4F5C;&#x7528;&#x57DF;&#x94FE;&#x6765;&#x67E5;&#x627E;&#xFF0C;&#x4F5C;&#x7528;&#x57DF;&#x94FE;&#x662F;&#x8DDF;&#x6267;&#x884C;&#x4EE3;&#x7801;&#x7684;context&#x6216;&#x8005;&#x5305;&#x542B;&#x8FD9;&#x4E2A;&#x53D8;&#x91CF;&#x7684;&#x51FD;&#x6570;&#x6709;&#x5173;&#x3002;&apos;with&apos;&#x8BED;&#x53E5;&#x5C07;&#x67D0;&#x4E2A;&#x5BF9;&#x8C61;&#x6DFB;&#x52A0;&#x7684;&#x4F5C;&#x7528;&#x57DF;&#x94FE;&#x7684;&#x9876;&#x90E8;&#xFF0C;&#x5982;&#x679C;&#x5728;statement&#x4E2D;&#x6709;&#x67D0;&#x4E2A;&#x672A;&#x4F7F;&#x7528;&#x547D;&#x540D;&#x7A7A;&#x95F4;&#x7684;&#x53D8;&#x91CF;&#xFF0C;&#x8DDF;&#x4F5C;&#x7528;&#x57DF;&#x94FE;&#x4E2D;&#x7684;&#x67D0;&#x4E2A;&#x5C5E;&#x6027;&#x540C;&#x540D;&#xFF0C;&#x5219;&#x8FD9;&#x4E2A;&#x53D8;&#x91CF;&#x5C06;&#x6307;&#x5411;&#x8FD9;&#x4E2A;&#x5C5E;&#x6027;&#x503C;&#x3002;&#x5982;&#x679C;&#x6C92;&#x6709;&#x540C;&#x540D;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x5219;&#x5C06;&#x62CB;&#x51FA;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError" title="ReferenceError&#xFF08;&#x5F15;&#x7528;&#x9519;&#x8BEF;&#xFF09; &#x5BF9;&#x8C61;&#x8868;&#x660E;&#x4E00;&#x4E2A;&#x4E0D;&#x5B58;&#x5728;&#x7684;&#x53D8;&#x91CF;&#x88AB;&#x5F15;&#x7528;&#x3002;"><code>ReferenceError</code></a>&#x5F02;&#x5E38;&#x3002;</p>

<div class="note">&#x4E0D;&#x63A8;&#x8350;&#x4F7F;&#x7528;with&#xFF0C;&#x5728;ECMAScript 5 <a href="/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode" title="JavaScript/Strict mode">strict mode</a>&#x4E2D;&#x8BE5;&#x6807;&#x7B7E;&#x5DF2;&#x88AB;&#x7981;&#x6B62;&#x3002;&#xA0;&#x63A8;&#x8350;&#x7684;&#x66FF;&#x4EE3;&#x65B9;&#x6848;&#x662F;&#x58F0;&#x660E;&#x4E00;&#x4E2A;&#x4E34;&#x65F6;&#x53D8;&#x91CF;&#x6765;&#x627F;&#x8F7D;&#x4F60;&#x6240;&#x9700;&#x8981;&#x7684;&#x5C5E;&#x6027;&#x3002;</div>

<h3 id="&#x6027;&#x80FD;&#x65B9;&#x9762;&#x7684;&#x5229;&#x4E0E;&#x5F0A;">&#x6027;&#x80FD;&#x65B9;&#x9762;&#x7684;&#x5229;&#x4E0E;&#x5F0A;</h3>

<p><strong>&#x5229;&#xFF1A;</strong><code>with&#x8A9E;&#x53E5;&#x53EF;&#x4EE5;&#x5728;&#x4E0D;&#x9020;&#x6210;&#x6027;&#x80FD;&#x640D;&#x5931;&#x7684;&#x60C5;&#x6CC1;&#x4E0B;&#xFF0C;&#x6E1B;&#x5C11;&#x8B8A;&#x91CF;&#x7684;&#x9577;&#x5EA6;&#x3002;&#x5176;&#x9020;&#x6210;&#x7684;&#x9644;&#x52A0;&#x8A08;&#x7B97;&#x91CF;&#x5F88;&#x5C11;&#x3002;&#x4F7F;&#x7528;</code>&apos;with&apos;&#x53EF;&#x4EE5;&#x6E1B;&#x5C11;&#x4E0D;&#x5FC5;&#x8981;&#x7684;&#x6307;&#x91DD;&#x8DEF;&#x5F91;&#x89E3;&#x6790;&#x904B;&#x7B97;&#x3002;&#x9700;&#x8981;&#x6CE8;&#x610F;&#x7684;&#x662F;&#xFF0C;&#x5F88;&#x591A;&#x60C5;&#x6CC1;&#x4E0B;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x4E0D;&#x4F7F;&#x7528;with&#x8A9E;&#x53E5;&#xFF0C;&#x800C;&#x662F;&#x4F7F;&#x7528;&#x4E00;&#x500B;&#x81E8;&#x6642;&#x8B8A;&#x91CF;&#x4F86;&#x4FDD;&#x5B58;&#x6307;&#x91DD;&#xFF0C;&#x4F86;&#x9054;&#x5230;&#x540C;&#x6A23;&#x7684;&#x6548;&#x679C;&#x3002;</p>

<p><strong>&#x5F0A;&#xFF1A;</strong><code>with&#x8A9E;&#x53E5;&#x4F7F;&#x5F97;&#x7A0B;&#x5E8F;&#x5728;&#x67E5;&#x627E;&#x8B8A;&#x91CF;&#x503C;&#x6642;&#xFF0C;&#x90FD;&#x662F;&#x5148;&#x5728;&#x6307;&#x5B9A;&#x7684;&#x5C0D;&#x8C61;&#x4E2D;&#x67E5;&#x627E;&#x3002;&#x6240;&#x4EE5;&#x90A3;&#x4E9B;&#x672C;&#x4F86;&#x4E0D;&#x662F;&#x9019;&#x500B;&#x5C0D;&#x8C61;&#x7684;&#x5C6C;&#x6027;&#x7684;&#x8B8A;&#x91CF;&#xFF0C;&#x67E5;&#x627E;&#x8D77;&#x4F86;&#x5C07;&#x6703;&#x5F88;&#x6162;&#x3002;&#x5982;&#x679C;&#x662F;&#x5728;&#x5C0D;&#x6027;&#x80FD;&#x8981;&#x6C42;&#x8F03;&#x9AD8;&#x7684;&#x5834;&#x5408;&#xFF0C;</code>&apos;with&apos;&#x4E0B;&#x9762;&#x7684;statement&#x8A9E;&#x53E5;&#x4E2D;&#x7684;&#x8B8A;&#x91CF;&#xFF0C;&#x53EA;&#x61C9;&#x8A72;&#x5305;&#x542B;&#x9019;&#x500B;&#x6307;&#x5B9A;&#x5C0D;&#x8C61;&#x7684;&#x5C6C;&#x6027;&#x3002;</p>

<h3 id="&#x8BED;&#x4E49;&#x4E0D;&#x660E;&#x7684;&#x5F0A;&#x7AEF;">&#x8BED;&#x4E49;&#x4E0D;&#x660E;&#x7684;&#x5F0A;&#x7AEF;</h3>

<p><strong>&#x5F0A;&#x7AEF;&#xFF1A;</strong><code>with&#x8BED;&#x53E5;&#x4F7F;&#x5F97;&#x4EE3;&#x7801;&#x4E0D;&#x6613;&#x9605;&#x8BFB;&#xFF0C;&#x540C;&#x65F6;&#x4F7F;&#x5F97;</code>JavaScript&#x7F16;&#x8BD1;&#x5668;&#x4E0D;&#x6613;&#x5728;&#x4F5C;&#x7528;&#x57DF;&#x94FE;&#x4E0A;&#x67E5;&#x627E;&#x67D0;&#x4E2A;&#x53D8;&#x91CF;&#xFF0C;&#x4E0D;&#x6613;&#x6C7A;&#x5B9A;&#x5E94;&#x8BE5;&#x5728;&#x54EA;&#x4E2A;&#x5BF9;&#x8C61;&#x4E0A;&#x4F86;&#x53D6;&#x503C;&#x3002;&#x8BF7;&#x770B;&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#xFF1A;</p>

<pre class="brush: js">function f(x, o) {
  with (o) 
    print(x);
}</pre>

<p><code>f&#x88AB;&#x8C03;&#x7528;&#x65F6;&#xFF0C;</code><code>x&#x6709;&#x53EF;&#x80FD;&#x80FD;&#x53D6;&#x5230;&#x503C;&#xFF0C;&#x4E5F;&#x53EF;&#x80FD;&#x662F;undefined</code>&#xFF0C;&#x5982;&#x679C;&#x80FD;&#x53D6;&#x5230;, &#x6709;&#x53EF;&#x80FD;&#x662F;&#x5728;o&#x4E0A;&#x53D6;&#x7684;&#x503C;&#xFF0C;&#x4E5F;&#x53EF;&#x80FD;&#x662F;&#x51FD;&#x6578;&#x7684;&#x7B2C;&#x4E00;&#x500B;&#x53C3;&#x6578;x&#x7684;&#x503C;&#xFF08;&#x5982;&#x679C;o&#x4E2D;&#x6C92;&#x6709;&#x9019;&#x500B;&#x5C6C;&#x6027;&#x7684;&#x8A71;&#xFF09;&#x3002;&#x5982;&#x679C;&#x4F60;&#x5FD8;&#x8A18;&#x5728;&#x4F5C;&#x70BA;&#x7B2C;&#x4E8C;&#x500B;&#x53C3;&#x6578;&#x7684;&#x5C0D;&#x8C61;o&#x4E2D;&#x5B9A;&#x7FA9;<code>x&#x9019;&#x500B;&#x5C6C;&#x6027;</code>&#xFF0C;&#x7A0B;&#x5E8F;&#x4E26;&#x4E0D;&#x6703;&#x5831;&#x932F;&#xFF0C;&#x53EA;&#x662F;&#x53D6;&#x5230;&#x53E6;&#x4E00;&#x500B;&#x503C;&#x800C;&#x5DF2;&#x3002;</p>

<p><strong>&#x5F0A;&#x7AEF;&#xFF1A;</strong><code>&#x4F7F;&#x7528;</code><code>with&#x8A9E;&#x53E5;&#x7684;&#x4EE3;&#x78BC;&#xFF0C;&#x7121;&#x6CD5;&#x5411;&#x524D;&#x517C;&#x5BB9;&#xFF0C;&#x7279;&#x5225;&#x662F;&#x5728;&#x4F7F;&#x7528;&#x4E00;&#x4E9B;&#x539F;&#x751F;&#x6578;&#x64DA;&#x985E;&#x578B;&#x7684;&#x6642;&#x5019;&#x3002;&#x770B;&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#xFF1A;</code></p>

<div>
<pre class="brush:js">function f(foo, values) {
    with (foo) {
        console.log(values)
    }
}
</pre>

<p><code><font face="Open Sans, Arial, sans-serif">&#x5982;&#x679C;&#x662F;&#x5728;</font></code>ECMAScript 5&#x74B0;&#x5883;<code><font face="Open Sans, Arial, sans-serif">&#x8ABF;&#x7528;</font>f([1,2,3], obj)&#xFF0C;<font face="Open Sans, Arial, sans-serif">&#x5247;with&#x8A9E;&#x53E5;&#x4E2D;&#x8B8A;&#x91CF;</font></code><code>values&#x5C07;&#x6307;&#x5411;&#x51FD;&#x6578;&#x7684;&#x7B2C;&#x4E8C;&#x500B;&#x53C3;&#x6578;values&#x3002;&#x4F46;&#x662F;&#xFF0C;</code>ECMAScript 6&#x6A19;&#x6E96;&#x7D66;<code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype">Array.prototype</a>&#x6DFB;&#x52A0;&#x4E86;&#x4E00;&#x500B;&#x65B0;&#x5C6C;&#x6027;values&#xFF0C;&#x6240;&#x6709;&#x6578;&#x7D44;&#x5BE6;&#x4F8B;&#x5C07;&#x7E7C;&#x627F;&#x9019;&#x500B;&#x5C6C;&#x6027;&#x3002;&#x6240;&#x4EE5;&#x5728;</code>ECMAScript 6&#x74B0;&#x5883;&#x4E2D;&#xFF0C;<code><font face="Open Sans, Arial, sans-serif">with&#x8A9E;&#x53E5;&#x4E2D;&#x8B8A;&#x91CF;</font></code><code>values&#x5C07;&#x6307;&#x5411;</code><code>[1,2,3].values</code>&#x3002;</p>
</div>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<h3 name="Example:_Using_with" id="Example:_Using_with">Example: Using <code>with</code></h3>

<p><code><font face="Open Sans, Arial, sans-serif">&#x4E0B;&#x9762;&#x7684;</font>with&#x8A9E;&#x53E5;<font face="Open Sans, Arial, sans-serif">&#x6307;&#x5B9A;</font></code><code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math" title="JavaScript/Reference/Global_Objects/Math">Math</a>&#x5BF9;&#x8C61;&#x4F5C;&#x4E3A;&#x9ED8;&#x8BA4;&#x5BF9;&#x8C61;</code>&#x3002;<code>with&#x8BED;&#x53E5;&#x91CC;&#x9762;&#x7684;&#x53D8;&#x91CF;&#xFF0C;&#x5206;&#x5225;&#x6307;&#x5411;Math&#x5BF9;&#x8C61;&#x7684;</code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI" title="JavaScript/Reference/Global_Objects/Math/PI"><code>PI</code></a>&#xA0;&#x3001;<code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cos" title="JavaScript/Reference/Global_Objects/Math/cos">cos</a><font face="Open Sans, Arial, sans-serif">&#x548C;</font></code><code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sin" title="JavaScript/Reference/Global_Objects/Math/sin">sin</a>&#x51FD;&#x6578;&#xFF0C;&#x4E0D;&#x7528;&#x5728;&#x524D;&#x9762;&#x6DFB;&#x52A0;&#x547D;&#x540D;&#x7A7A;&#x95F4;&#xFF08;Math.PI&#xFF09;</code>&#x3002;</p>

<pre class="brush:js">var a, x, y;
var r = 10;

with (Math) {
  a = PI * r * r;
  x = r * cos(PI);
  y = r * sin(PI / 2);
}</pre>

<h2 id="&#x6280;&#x672F;&#x89C4;&#x8303;">&#x6280;&#x672F;&#x89C4;&#x8303;</h2>

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
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-12.10" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">with statement</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Now forbidden in strict mode.</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-with-statement" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">with statement</small></a></td>
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

<h2 name="See_also" id="See_also">&#x53E6;&#x89C1;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/block" title="&#x8BED;&#x53E5;&#x5757; (&#x6216;&#x5176;&#x4ED6;&#x8BED;&#x8A00;&#x4E2D;&#x7684;&#xA0;&#x590D;&#x5408;&#x8BED;&#x53E5;) &#x7528;&#x6765;&#x7EC4;&#x7EC7;&#x96F6;&#x4E2A;&#x6216;&#x591A;&#x6761;&#x8BED;&#x53E5;. &#x7528;&#x4E00;&#x5BF9;&#x82B1;&#x62EC;&#x53F7;&#x754C;&#x5B9A;&#x8BED;&#x53E5;&#x5757;."><code>block</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode">Strict mode</a></li>
</ul>

                  
                
              