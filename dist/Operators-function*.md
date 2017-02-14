
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p><strong><code>function*</code></strong><code>&#x5173;&#x952E;&#x5B57;</code><code>&#x53EF;&#x4EE5;&#x5728;&#x8868;&#x8FBE;&#x5F0F;&#x5185;&#x90E8;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;&#x3002;</code></p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">function* [<em>name</em>]([<em>param1</em>[, <em>param2[</em>, ..., <em>paramN</em>]]]) {
   <em>statements</em>
}</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>name</code></dt>
 <dd>&#x51FD;&#x6570;&#x540D;&#x3002;&#x5728;&#x58F0;&#x660E;<em>&#x533F;&#x540D;&#x51FD;&#x6570;</em>&#x65F6;&#x53EF;&#x4EE5;&#x7701;&#x7565;&#x3002;&#x51FD;&#x6570;&#x540D;&#x79F0;&#x53EA;&#x662F;&#x51FD;&#x6570;&#x4F53;&#x4E2D;&#x7684;&#x4E00;&#x4E2A;&#x672C;&#x5730;&#x53D8;&#x91CF;&#x3002;</dd>
 <dt><code>paramN</code></dt>
 <dd>&#x4F20;&#x5165;&#x51FD;&#x6570;&#x7684;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#x540D;&#x3002;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x6700;&#x591A;&#x6709;255&#x4E2A;&#x53C2;&#x6570;&#x3002;</dd>
 <dt><code>statements</code></dt>
 <dd>&#x51FD;&#x6570;&#x4F53;&#x3002;</dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>function*&#x8868;&#x8FBE;&#x5F0F;&#x548C;</code><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/function*" title="function* &#x58F0;&#x660E;&#xFF08;function&#x5173;&#x952E;&#x5B57;&#x540E;&#x8DDF;&#x4E00;&#x4E2A;&#x661F;&#x53F7;&#xFF09;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;generator&#xFF08;&#x751F;&#x6210;&#x5668;&#xFF09;&#x51FD;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;Generator&#x5BF9;&#x8C61;&#x3002;"><code>function* &#x58F0;&#x660E;</code></a>&#x6BD4;&#x8F83;&#x76F8;&#x4F3C;&#xFF0C;&#x5E76;&#x5177;&#x6709;&#x51E0;&#x4E4E;&#x76F8;&#x540C;&#x7684;&#x8BED;&#x6CD5;&#x3002;<code>function*&#x8868;&#x8FBE;&#x5F0F;&#x548C;function*&#x58F0;&#x660E;&#x4E4B;&#x95F4;&#x4E3B;&#x8981;&#x533A;&#x522B;&#x5C31;&#x662F;<em>&#x51FD;&#x6570;&#x540D;</em>&#xFF0C;&#x5373;&#x5728;&#x521B;&#x5EFA;<em>&#x533F;&#x540D;</em>&#x51FD;&#x6570;&#x65F6;&#xFF0C;</code>function*&#x8868;&#x8FBE;&#x5F0F;&#x53EF;&#x4EE5;&#x7701;&#x7565;&#x51FD;&#x6570;&#x540D;&#x3002;&#x9605;&#x8BFB;<a href="/zh-CN/docs/Web/JavaScript/Reference/Function" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>&#x51FD;&#x6570;</code></a>&#x7AE0;&#x8282;&#x4E86;&#x89E3;&#x66F4;&#x591A;&#x4FE1;&#x606F;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<p>&#x4E0B;&#x9762;&#x7684;&#x793A;&#x4F8B;&#x5B9A;&#x4E49;&#x4E86;&#x4E00;&#x4E2A;&#x672A;&#x547D;&#x540D;&#x7684;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;&#x5E76;&#x628A;&#x5B83;&#x8D4B;&#x503C;&#x7ED9;<code>x&#x3002;&#x51FD;&#x6570;&#x4EA7;&#x51FA;(yield)&#x5B83;&#x7684;&#x4F20;&#x5165;&#x53C2;&#x6570;&#x7684;&#x5E73;&#x65B9;&#xFF1A;</code></p>

<pre class="brush: js">var x = function*(y) {
   yield y * y;
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
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">function*</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
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
   <td><a href="/en-US/Firefox/Releases/26" title="Released on 2013-12-10.">26.0</a> (26.0)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
  <tr>
   <td><code>yield*</code></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><a href="/en-US/Firefox/Releases/27" title="Released on 2014-02-04.">27.0</a> (27.0)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
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
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>26.0 (26.0)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
  <tr>
   <td><code>yield*</code></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>27.0 (27.0)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/function*" title="function* &#x58F0;&#x660E;&#xFF08;function&#x5173;&#x952E;&#x5B57;&#x540E;&#x8DDF;&#x4E00;&#x4E2A;&#x661F;&#x53F7;&#xFF09;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;generator&#xFF08;&#x751F;&#x6210;&#x5668;&#xFF09;&#x51FD;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;Generator&#x5BF9;&#x8C61;&#x3002;"><code>function* statement</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/GeneratorFunction" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>GeneratorFunction</code></a> &#x5BF9;&#x8C61;</li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/The_Iterator_protocol">The Iterator protocol</a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/yield" title="yield &#x5173;&#x952E;&#x5B57;&#x7528;&#x6765;&#x6682;&#x505C;&#x548C;&#x7EE7;&#x7EED;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570; (function* or legacy generator)."><code>yield</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/yield*" title="&#x5728;&#x751F;&#x6210;&#x5668;&#x4E2D;&#xFF0C;yield*&#xA0;&#x53EF;&#x4EE5;&#x628A;&#x9700;&#x8981; yield &#x7684;&#x503C;&#x59D4;&#x6258;&#x7ED9;&#x53E6;&#x5916;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x6216;&#x8005;&#x5176;&#x4ED6;&#x4EFB;&#x610F;&#x7684;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#x3002;"><code>yield*</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Function" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Function</code></a> &#x5BF9;&#x8C61;</li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/function" title="&#x51FD;&#x6570;&#x58F0;&#x660E;&#x7528;&#x6307;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x58F0;&#x660E;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x3002;"><code>function statement</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/function" title="function &#x5173;&#x952E;&#x5B57;&#x53EF;&#x7528;&#x6765;&#x5728;&#x4E00;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x3002;"><code>function expression</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Functions and function scope</code></a></li>
</ul>
                  
                
              