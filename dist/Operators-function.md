
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p><code>function</code> &#x5173;&#x952E;&#x5B57;&#x53EF;&#x7528;&#x6765;&#x5728;&#x4E00;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">function [<em>name</em>]([<em>param1</em>[, <em>param2[</em>, ..., <em>paramN</em>]]]) {
   <em>statements</em>
}</pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>name</code></dt>
 <dd>&#x51FD;&#x6570;&#x540D;&#x79F0;&#x3002;&#x53EF;&#x88AB;&#x5FFD;&#x7565;&#xFF0C;&#x6B64;&#x79CD;&#x60C5;&#x51B5;&#x4E0B;&#x7684;&#x51FD;&#x6570;&#x662F;&#x533F;&#x540D;&#x51FD;&#x6570;&#xFF08;<em>anonymous</em>&#xFF09;&#x3002; &#x51FD;&#x6570;&#x540D;&#x79F0;&#x53EA;&#x662F;&#x51FD;&#x6570;&#x4F53;&#x4E2D;&#x7684;&#x4E00;&#x4E2A;&#x672C;&#x5730;&#x53D8;&#x91CF;&#x3002;</dd>
 <dt><code>paramN</code></dt>
 <dd>&#x88AB;&#x4F20;&#x9012;&#x7ED9;&#x51FD;&#x6570;&#x7684;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#x540D;&#x79F0;&#x3002;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x81F3;&#x591A;&#x62E5;&#x6709; 255 &#x4E2A;&#x53C2;&#x6570;&#x3002;</dd>
 <dt><code>statements</code></dt>
 <dd>&#x6784;&#x6210;&#x51FD;&#x6570;&#x4F53;&#x7684;&#x8BED;&#x53E5;&#x3002;</dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x51FD;&#x6570;&#x8868;&#x8FBE;&#x5F0F;&#xFF08;function expression&#xFF09;&#x975E;&#x5E38;&#x7C7B;&#x4F3C;&#x4E8E;&#x51FD;&#x6570;&#x58F0;&#x660E;&#xFF08;function statement&#xFF09;<span style="line-height: 1.5;">&#xFF08;&#x8BE6;&#x60C5;&#x67E5;&#x770B;</span><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/function" style="line-height: 1.5;">&#x51FD;&#x6570;&#x58F0;&#x660E;</a><span style="line-height: 1.5;">&#xFF09;</span><span style="line-height: 1.5;">&#xFF0C;&#x5E76;&#x4E14;&#x62E5;&#x6709;&#x51E0;&#x4E4E;&#x76F8;&#x540C;&#x7684;&#x8BED;&#x6CD5;&#x3002;</span><span style="line-height: 1.5;">&#x51FD;&#x6570;&#x8868;&#x8FBE;&#x5F0F;&#x4E0E;&#x51FD;&#x6570;&#x58F0;&#x660E;&#x7684;&#x6700;&#x4E3B;&#x8981;&#x533A;&#x522B;&#x662F;&#x51FD;&#x6570;&#x540D;&#x79F0;&#xFF08;</span><em>function name</em><span style="line-height: 1.5;">&#xFF09;&#xFF0C;&#x5728;&#x51FD;&#x6570;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#x53EF;&#x5FFD;&#x7565;&#x5B83;&#xFF0C;&#x4ECE;&#x800C;&#x521B;&#x5EFA;&#x533F;&#x540D;&#x51FD;&#x6570;&#xFF08;</span><em>anonymous</em><span style="line-height: 1.5;"> functions&#xFF09;&#x3002;&#x66F4;&#x591A;&#x4FE1;&#x606F;&#x8BF7;&#x67E5;&#x770B;</span><a href="/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope" style="line-height: 1.5;">&#x51FD;&#x6570;&#x548C;&#x51FD;&#x6570;&#x4F5C;&#x7528;&#x57DF;</a><span style="line-height: 1.5;">&#x3002;</span></p>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<p>&#x4E0B;&#x4F8B;&#x5B9A;&#x4E49;&#x4E86;&#x4E00;&#x4E2A;&#x672A;&#x547D;&#x540D;&#x7684;&#x51FD;&#x6570;&#xFF0C;&#x5E76;&#x628A;&#x5B83;&#x8D4B;&#x503C;&#x7ED9;&#xA0;<code>x</code>&#x3002;&#x8BE5;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x5B83;&#x7684;&#x53C2;&#x6570;&#x7684;&#x5E73;&#x65B9;&#xFF1A;</p>

<pre class="brush: js">var x = function(y) {
   return y * y;
};
</pre>

<h3 id="&#x547D;&#x540D;&#x51FD;&#x6570;&#x8868;&#x8FBE;&#x5F0F;&#xFF08;Named_function_expression&#xFF09;">&#x547D;&#x540D;&#x51FD;&#x6570;&#x8868;&#x8FBE;&#x5F0F;&#xFF08;Named function expression&#xFF09;</h3>

<p>&#x5982;&#x679C;&#x4F60;&#x60F3;&#x5728;&#x51FD;&#x6570;&#x4F53;&#x5185;&#x90E8;&#x5F15;&#x7528;&#x5F53;&#x524D;&#x51FD;&#x6570;&#xFF0C;&#x5219;&#x9700;&#x8981;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x547D;&#x540D;&#x51FD;&#x6570;&#x8868;&#x8FBE;&#x5F0F;&#x3002;&#x7136;&#x540E;&#x51FD;&#x6570;&#x540D;&#x79F0;&#x5C06;&#x4F1A;&#xFF08;&#x4E14;&#x53EA;&#x4F1A;&#xFF09;&#x4F5C;&#x4E3A;&#x51FD;&#x6570;&#x4F53;&#xFF08;&#x4F5C;&#x7528;&#x57DF;&#x5185;&#xFF09;&#x7684;&#x672C;&#x5730;&#x53D8;&#x91CF;&#x3002;&#x8FD9;&#x6837;&#x4E5F;&#x53EF;&#x4EE5;&#x907F;&#x514D;&#x4F7F;&#x7528;&#x975E;&#x6807;&#x51C6;&#x7684;&#xA0;<a href="/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments/callee">arguments.callee</a>&#xA0;&#x5C5E;&#x6027;&#x3002;</p>

<pre class="brush: js">var math = {
  &apos;factorial&apos;: function factorial(n) {
    if (n &lt;= 1)
      return 1;
    return n * factorial(n - 1);
  }
};
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x8BF4;&#x660E;</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf#sec-13" class="external" lang="en" hreflang="en">ECMAScript 3rd Edition (ECMA-262)<br><small lang="zh-CN">Function definition</small></a></td>
   <td>Standard</td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;&#x3002;JavaScript 1.5 &#x5B9E;&#x73B0;&#x3002;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-13" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Function definition</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-function-definitions" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Function defintions</small></a></td>
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
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Functions and function scope</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Function" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Function</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/function" title="&#x51FD;&#x6570;&#x58F0;&#x660E;&#x7528;&#x6307;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x58F0;&#x660E;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x3002;"><code>function statement</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/function*" title="function* &#x58F0;&#x660E;&#xFF08;function&#x5173;&#x952E;&#x5B57;&#x540E;&#x8DDF;&#x4E00;&#x4E2A;&#x661F;&#x53F7;&#xFF09;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;generator&#xFF08;&#x751F;&#x6210;&#x5668;&#xFF09;&#x51FD;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;Generator&#x5BF9;&#x8C61;&#x3002;"><code>function* statement</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/function*" title="function*&#x5173;&#x952E;&#x5B57;&#x53EF;&#x4EE5;&#x5728;&#x8868;&#x8FBE;&#x5F0F;&#x5185;&#x90E8;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;&#x3002;"><code>function* expression</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/GeneratorFunction" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>GeneratorFunction</code></a></li>
</ul>
                  
                
              