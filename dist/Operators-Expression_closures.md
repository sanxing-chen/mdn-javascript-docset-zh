
                
                  
                    <div class="warning"><strong>&#x975E;&#x6807;&#x51C6;&#xFF0C;&#x4E0D;&#x8981;&#x4F7F;&#x7528;&#xFF01;</strong><br>
&#x95ED;&#x5305;&#x8868;&#x8FBE;&#x5F0F;&#x8BED;&#x6CD5;&#x662F;&#x5E9F;&#x5F03;&#x7684; SpiderMonkey &#x7279;&#x5B9A;&#x7684;&#x7279;&#x6027;&#xFF0C;&#x5E76;&#x4E14;<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1083458" class="external">&#x5373;&#x5C06;&#x88AB;&#x79FB;&#x9664;</a>&#x3002;&#x4E3A;&#x4E86;&#x957F;&#x8FDC;&#x4F7F;&#x7528;&#xFF0C;&#x8003;&#x8651;&#x4F7F;&#x7528;<a href="/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">&#x7BAD;&#x5934;&#x51FD;&#x6570;</a>&#x3002;</div>

<div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>&#x8868;&#x8FBE;&#x5F0F;&#x95ED;&#x5305;&#x662F;&#x5B9A;&#x4E49;&#x7B80;&#x5355;&#x51FD;&#x6570;&#x7684;&#x4E00;&#x79CD;&#x4FBF;&#x6377;&#x65B9;&#x5F0F;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">function [<em>name</em>]([<em>param1</em>[, <em>param2[</em>, ..., <em>paramN</em>]]])
   <em>expression</em>
</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>name</code></dt>
 <dd>&#x51FD;&#x6570;&#x540D;&#x3002;&#x51FD;&#x6570;&#x540D;&#x53EF;&#x4EE5;&#x7701;&#x7565;&#x4E0D;&#x5199;&#xFF0C;&#x79F0;&#x4E3A;&#x533F;&#x540D;&#x51FD;&#x6570;&#x3002;&#x51FD;&#x6570;&#x540D;&#x4EC5;&#x5728;&#x51FD;&#x6570;&#x4F53;&#x6709;&#x6548;&#x3002;</dd>
 <dt><code>paramN</code></dt>
 <dd>&#x5F62;&#x53C2;&#x540D;&#x3002;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x6700;&#x591A;&#x53EF;&#x4EE5;&#x6709;255&#x4E2A;&#x53C2;&#x6570;&#x3002;</dd>
 <dt><code>expression</code></dt>
 <dd>&#x6784;&#x6210;&#x51FD;&#x6570;&#x4F53;&#x7684;&#x8868;&#x8FBE;&#x5F0F;&#x3002;</dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x8FD9;&#x4E00;&#x9644;&#x52A0;&#x7279;&#x6027;&#x53EA;&#x662F;&#x7F16;&#x5199;&#x7B80;&#x5355;&#x51FD;&#x6570;&#x7684;&#x5FEB;&#x6377;&#x65B9;&#x5F0F;&#xFF0C;&#x8BA9;&#x8BED;&#x8A00;&#x66F4;&#x7C7B;&#x4F3C;&#x901A;&#x5E38;&#x7684; <a href="http://en.wikipedia.org/wiki/Lambda_calculus#Lambda_calculus_and_programming_languages" class="external">Lambda &#x6807;&#x8BB0;</a>&#x3002;</p>

<p>JavaScript 1.7 &#x4EE5;&#x4E0A;:</p>

<pre class="brush: js">function(x) { return x * x; }</pre>

<p>JavaScript 1.8:</p>

<pre class="brush: js">function(x) x * x</pre>

<p>&#x8BE5;&#x8BED;&#x6CD5;&#x652F;&#x6301;&#x7701;&#x7565;&#x82B1;&#x62EC;&#x53F7;&#x548C;&apos;return&apos;&#x8BED;&#x53E5;&#x3002;&#x4F7F;&#x7528;&#x8FD9;&#x79CD;&#x7F16;&#x7801;&#x7684;&#x76EE;&#x7684;&#x53EA;&#x662F;&#x4E3A;&#x4E86;&#x5728;&#x53E5;&#x6CD5;&#x4E0A;&#x4F7F;&#x5F97;&#x4EE3;&#x7801;&#x66F4;&#x52A0;&#x7B80;&#x5316;&#xFF0C;&#x4F46;&#x9664;&#x6B64;&#x4E4B;&#x5916;&#x6CA1;&#x6709;&#x5176;&#x4ED6;&#x597D;&#x5904;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<p>&#x4E00;&#x79CD;&#x7ED1;&#x5B9A;&#x4E8B;&#x4EF6;&#x76D1;&#x542C;&#x5668;&#x7684;&#x4FBF;&#x6377;&#x65B9;&#x5F0F;&#xFF1A;</p>

<pre class="brush: js"> document.addEventListener(&quot;click&quot;, function() false, true);
</pre>

<p>&#x5728; JavaScript 1.6 &#x4E2D;&#x7684;&#x4E00;&#x4E9B;&#x6570;&#x7EC4;&#x51FD;&#x6570;&#x4E2D;&#x4F7F;&#x7528;&#x8BE5;&#x6807;&#x8BB0;&#xFF1A;</p>

<pre class="brush: js">elems.some(function(elem) elem.type == &quot;text&quot;);
</pre>

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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="Gecko_&#x7279;&#x5B9A;&#x6CE8;&#x89E3;">Gecko &#x7279;&#x5B9A;&#x6CE8;&#x89E3;</h2>

<p>&#x81EA; Gecko / SpiderMonkey 45 (Firefox 45 / Thunderbird 45 / SeaMonkey 2.42)&#x8D77;&#xFF0C;&#x4F7F;&#x7528;&#x8868;&#x8FBE;&#x5F0F;&#x95ED;&#x5305;&#x65F6;&#x4F1A;&#x6DFB;&#x52A0;&#x63A7;&#x5236;&#x53F0;&#x8B66;&#x544A;&#xFF08;<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=995610" class="external" title="FIXED: Add console warnings for expression closures (shorthand function syntax)">bug&#xA0;995610</a>&#xFF09;&#x3002;</p>

<h2 id="&#x53E6;&#x89C1;">&#x53E6;&#x89C1;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Functions and function scope</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Function" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Function</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/function" title="&#x51FD;&#x6570;&#x58F0;&#x660E;&#x7528;&#x6307;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x58F0;&#x660E;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x3002;"><code>function statement</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/function" title="function &#x5173;&#x952E;&#x5B57;&#x53EF;&#x7528;&#x6765;&#x5728;&#x4E00;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x3002;"><code>function expression</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/function*" title="function* &#x58F0;&#x660E;&#xFF08;function&#x5173;&#x952E;&#x5B57;&#x540E;&#x8DDF;&#x4E00;&#x4E2A;&#x661F;&#x53F7;&#xFF09;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;generator&#xFF08;&#x751F;&#x6210;&#x5668;&#xFF09;&#x51FD;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;Generator&#x5BF9;&#x8C61;&#x3002;"><code>function* statement</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/function*" title="function*&#x5173;&#x952E;&#x5B57;&#x53EF;&#x4EE5;&#x5728;&#x8868;&#x8FBE;&#x5F0F;&#x5185;&#x90E8;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;&#x3002;"><code>function* expression</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/GeneratorFunction" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>GeneratorFunction</code></a></li>
</ul>
                  
                
              