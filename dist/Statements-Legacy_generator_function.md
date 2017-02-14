
                
                  
                    <div class="warning">legacy generator &#x51FD;&#x6570;&#x5B9E;&#x9A8C;&#x6027;&#x8D28;&#x7684;&#x7279;&#x6027;&#xFF0C;&#x5728;&#x67D0;&#x4E9B;&#x70B9;&#x4E0A;&#x4F1A;&#x88AB;&#x4FEE;&#x6539;&#x3002;&#x4E3A;&#x4E86;&#x672A;&#x6765;&#x9762;&#x4E16;&#x7684;&#x4F7F;&#x7528;&#xA0;&#xFF0C;&#xA0;&#x8003;&#x7565;&#x4F7F;&#x7528;&#xA0;<a title="function* &#x58F0;&#x660E;&#xFF08;function&#x5173;&#x952E;&#x5B57;&#x540E;&#x8DDF;&#x4E00;&#x4E2A;&#x661F;&#x53F7;&#xFF09;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;generator&#xFF08;&#x751F;&#x6210;&#x5668;&#xFF09;&#x51FD;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;Generator&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Statements/function*"><code>function*</code></a>.</div>

<div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><strong>legacy generator &#x51FD;&#x6570;&#x8BED;&#x53E5; </strong>&#x4F7F;&#x7528;&#x7279;&#x6B8A;&#x53C2;&#x6570;&#x58F0;&#x660E;legacy generator&#x51FD;&#x6570;&#x3002;</p>

<p>&#x4F60;&#x4E5F;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; &#x6784;&#x9020;<a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/&#x51FD;&#x6570;" class="new"><code>&#x51FD;&#x6570;</code></a>&#x5B9A;&#x4E49;&#x51FD;&#x6570; &#xFF0C;&#x4F7F;&#x7528;<code>functionBody</code> &#x548C;&#x81F3;&#x5C11;&#x4E00;&#x4E2A; <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/&#x8FD0;&#x7B97;&#x7B26;/yield" class="new"><code>yield</code></a> &#x8868;&#x8FBE;&#x5F0F;&#xFF0C;&#x548C;<a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/&#x8FD0;&#x7B97;&#x7B26;/Legacy_generator_function" class="new">legacy generator &#x51FD;&#x6570;&#x8868;&#x8FBE;&#x5F0F;</a>.</p>

<h2 id="Syntax&#x8BED;&#x6CD5;">Syntax&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">function <em>name</em>([<em>param</em>,[, <em>param</em>,[..., <em>param</em>]]]) {
   [<em>statements</em>]
}
</pre>

<dl>
 <dt><code>name</code></dt>
 <dd>&#x51FD;&#x6570;&#x540D;&#x3002;</dd>
</dl>

<dl>
 <dt><code>param</code></dt>
 <dd>&#x4F20;&#x5165;&#x51FD;&#x6570;&#x7684;&#x53C2;&#x6570;&#x540D;&#xFF0C;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x6700;&#x591A;&#x6709;255&#x4E2A;&#x53C2;&#x6570;&#x3002;</dd>
</dl>

<dl>
 <dt><code>statements</code></dt>
 <dd>The statements which comprise the body of the function. This should contain at least one <a title="yield &#x5173;&#x952E;&#x5B57;&#x7528;&#x6765;&#x6682;&#x505C;&#x548C;&#x7EE7;&#x7EED;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570; (function* or legacy generator)." href="/zh-CN/docs/Web/JavaScript/Reference/Operators/yield"><code>yield</code></a> expression.</dd>
</dl>

<h2 id="Description&#x63CF;&#x8FF0;">Description&#x63CF;&#x8FF0;</h2>

<p>An overview of the usage is available on the <a href="/en-US/docs/JavaScript/Guide/Iterators_and_Generators">Iterators and Generators</a> page.</p>

<h2 id="Browser_compatibility&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">Browser compatibility&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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

<h2 id="See_also&#x53C2;&#x8003;">See also&#x53C2;&#x8003;</h2>

<ul>
 <li><a title="&#x8FD9;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x5BF9;&#x8C61;&#x662F;&#x7531;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570; generator function&#xA0;&#x8FD4;&#x56DE;&#x7684;&#x3002;&#x5E76;&#x4E14;&#x5B83;&#x662F;&#x540C;&#x65F6;&#x9075;&#x5B88;&#xA0;The iterable protocol&#xA0;&#x53EF;&#x904D;&#x5386;&#x534F;&#x8BAE;&#x548C;The&#xA0;iterator protocol&#xA0;&#x8FED;&#x4EE3;&#x5668;&#x6A21;&#x5F0F;&#x534F;&#x8BAE; ." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator"><code>Generator</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Legacy_generator_function">The legacy generator function expression</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/The_legacy_Iterator_protocol">The legacy Iterator protocol</a></li>
 <li><a title="yield &#x5173;&#x952E;&#x5B57;&#x7528;&#x6765;&#x6682;&#x505C;&#x548C;&#x7EE7;&#x7EED;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570; (function* or legacy generator)." href="/zh-CN/docs/Web/JavaScript/Reference/Operators/yield"><code>yield</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope">Functions and function scope</a></li>
 <li><a title="&#x51FD;&#x6570;&#x58F0;&#x660E;&#x7528;&#x6307;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x58F0;&#x660E;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Statements/function"><code>function</code></a></li>
 <li><a title="function &#x5173;&#x952E;&#x5B57;&#x53EF;&#x7528;&#x6765;&#x5728;&#x4E00;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Operators/function"><code>function expression</code></a></li>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Function"><code>Function</code></a></li>
 <li><a title="function* &#x58F0;&#x660E;&#xFF08;function&#x5173;&#x952E;&#x5B57;&#x540E;&#x8DDF;&#x4E00;&#x4E2A;&#x661F;&#x53F7;&#xFF09;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;generator&#xFF08;&#x751F;&#x6210;&#x5668;&#xFF09;&#x51FD;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;Generator&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Statements/function*"><code>function*</code></a></li>
 <li><a title="function*&#x5173;&#x952E;&#x5B57;&#x53EF;&#x4EE5;&#x5728;&#x8868;&#x8FBE;&#x5F0F;&#x5185;&#x90E8;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Operators/function*"><code>function* expression</code></a></li>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/GeneratorFunction" class="new"><code>GeneratorFunction</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/The_Iterator_protocol">The Iterator protocol</a></li>
</ul>
                  
                
              