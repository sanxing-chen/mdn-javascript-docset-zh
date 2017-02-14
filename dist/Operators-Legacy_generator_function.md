
                
                  
                    <div class="warning">.&#x65E7;&#x5F0F;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;&#x662F;&#x4E00;&#x4E2A;SpiderMonkey&#x4E13;&#x6709;&#x7279;&#x6027;&#xFF0C;&#x5C06;&#x5728;&#x672A;&#x6765;&#x79FB;&#x9664;&#x3002;&#x4ECE;&#x672A;&#x6765;&#x8003;&#x8651;&#xFF0C;&#x5EFA;&#x8BAE;&#x4F7F;&#x7528;<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/function*" title="function*&#x5173;&#x952E;&#x5B57;&#x53EF;&#x4EE5;&#x5728;&#x8868;&#x8FBE;&#x5F0F;&#x5185;&#x90E8;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;&#x3002;"><code>function* &#x8868;&#x8FBE;&#x5F0F;</code></a></div>

<div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p><strong><code>function</code></strong> &#x5173;&#x952E;&#x5B57;&#x53EF;&#x4EE5;&#x7528;&#x4E8E;&#x5728;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#x5B9A;&#x4E49;&#x65E7;&#x5F0F;&#x7684;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;&#x3002;&#x4E3A;&#x4F7F;&#x5B9A;&#x4E49;&#x7684;&#x51FD;&#x6570;&#x4E3A;&#x4E00;&#x4E2A;&#x65E7;&#x5F0F;&#x7684;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;&#xFF0C;&#x8BE5;&#x51FD;&#x6570;&#x7684;&#x51FD;&#x6570;&#x4F53;&#x4E2D;&#x9700;&#x8981;&#x81F3;&#x5C11;&#x5305;&#x542B;&#x4E00;&#x4E2A;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/yield" title="yield &#x5173;&#x952E;&#x5B57;&#x7528;&#x6765;&#x6682;&#x505C;&#x548C;&#x7EE7;&#x7EED;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570; (function* or legacy generator)."><code>yield</code></a> &#x8868;&#x8FBE;&#x5F0F;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">function [<em>name</em>]([<em>param1</em>[, <em>param2[</em>, ..., <em>paramN</em>]]]) {
   <em>statements</em>
}</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>name</code></dt>
 <dd>&#x51FD;&#x6570;&#x540D;&#x3002;&#xA0;&#x8BE5;&#x53C2;&#x6570;&#x53EF;&#x4EE5;&#x88AB;&#x7701;&#x7565;, &#x8FD9;&#x79CD;&#x60C5;&#x51B5;&#x4E0B;&#x5C06;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;<em>&#x533F;&#x540D;&#x51FD;&#x6570; (anonymous)</em>. &#x6B64;&#x540D;&#x5B57;&#x4EC5;&#x53EF;&#x5728;&#x51FD;&#x6570;&#x4F53;&#x5185;&#x90E8;&#x5F15;&#x7528;&#x3002;</dd>
 <dt><code>paramN</code></dt>
 <dd>&#x5C06;&#x88AB;&#x4F20;&#x5165;&#x6B64;&#x51FD;&#x6570;&#x7684;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#x3002;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x53EF;&#x4EE5;&#x6700;&#x591A;&#x62E5;&#x6709;255&#x4E2A;&#x53C2;&#x6570;&#x3002;</dd>
 <dt><code>statements</code></dt>
 <dd>&#x6784;&#x6210;&#x51FD;&#x6570;&#x4F53;&#x7684;&#x8868;&#x8FBE;&#x5F0F;&#x3002;&#x5728;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#x9700;&#x8981;&#x81F3;&#x5C11;&#x5305;&#x542B;&#x4E00;&#x4E2A;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/yield" title="yield &#x5173;&#x952E;&#x5B57;&#x7528;&#x6765;&#x6682;&#x505C;&#x548C;&#x7EE7;&#x7EED;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570; (function* or legacy generator)."><code>yield</code></a> &#x8868;&#x8FBE;&#x5F0F;&#x3002;</dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x5173;&#x4E8E;&#x6B64;&#x8BED;&#x6CD5;&#x7684;&#x7528;&#x6CD5;&#x8BF4;&#x660E;&#xFF0C;&#x53C2;&#x89C1;&#xA0;<a href="/en-US/docs/JavaScript/Guide/Iterators_and_Generators">&#x8FED;&#x4EE3;&#x5668; (Iterators)&#xA0;&#x4E0E;&#x751F;&#x6210;&#x5668; (Generators)</a>&#xA0;&#x9875;&#x9762;&#x3002;</p>

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
   <th>&#x7279;&#x6027;</th>
   <th>Chrome</th>
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>&#x57FA;&#x672C;&#x652F;&#x6301;</td>
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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator" title="&#x8FD9;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x5BF9;&#x8C61;&#x662F;&#x7531;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;generator function&#xA0;&#x8FD4;&#x56DE;&#x7684;&#x3002;&#x5E76;&#x4E14;&#x5B83;&#x662F;&#x540C;&#x65F6;&#x9075;&#x5B88;The iterable protocol&#x53EF;&#x904D;&#x5386;&#x534F;&#x8BAE;&#x548C;The&#xA0;iterator protocol&#xA0;&#x8FED;&#x4EE3;&#x5668;&#x6A21;&#x5F0F;&#x534F;&#x8BAE; ."><code>&#x751F;&#x6210;&#x5668; (Generator)</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Statements/Legacy_generator_function">&#x65E7;&#x5F0F;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/The_legacy_Iterator_protocol">&#x65E7;&#x5F0F;&#x8FED;&#x4EE3;&#x5668;&#x534F;&#x8BAE;</a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/yield" title="yield &#x5173;&#x952E;&#x5B57;&#x7528;&#x6765;&#x6682;&#x505C;&#x548C;&#x7EE7;&#x7EED;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570; (function* or legacy generator)."><code>yield</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope">&#x51FD;&#x6570;&#x4E0E;&#x51FD;&#x6570;&#x4F5C;&#x7528;&#x57DF;</a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/function" title="&#x51FD;&#x6570;&#x58F0;&#x660E;&#x7528;&#x6307;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x58F0;&#x660E;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x3002;"><code>function</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/function" title="function &#x5173;&#x952E;&#x5B57;&#x53EF;&#x7528;&#x6765;&#x5728;&#x4E00;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x3002;"><code>function &#x8868;&#x8FBE;&#x5F0F;</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Function" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>&#x51FD;&#x6570;</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/function*" title="function* &#x58F0;&#x660E;&#xFF08;function&#x5173;&#x952E;&#x5B57;&#x540E;&#x8DDF;&#x4E00;&#x4E2A;&#x661F;&#x53F7;&#xFF09;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;generator&#xFF08;&#x751F;&#x6210;&#x5668;&#xFF09;&#x51FD;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;Generator&#x5BF9;&#x8C61;&#x3002;"><code>function*</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/function*" title="function*&#x5173;&#x952E;&#x5B57;&#x53EF;&#x4EE5;&#x5728;&#x8868;&#x8FBE;&#x5F0F;&#x5185;&#x90E8;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;&#x3002;"><code>function* &#x8868;&#x8FBE;&#x5F0F;</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/GeneratorFunction" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>&#x751F;&#x6210;&#x5668; (Generator) &#x51FD;&#x6570;</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/The_Iterator_protocol">&#x8FED;&#x4EE3;&#x5668; (Iterator) &#x534F;&#x8BAE;&#xA0;</a></li>
</ul>
                  
                
              