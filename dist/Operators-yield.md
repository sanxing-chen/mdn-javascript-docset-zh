
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="&#x6982;&#x8FF0;">&#x6982;&#x8FF0;</h2>

<p><code>yield</code> &#x5173;&#x952E;&#x5B57;&#x7528;&#x6765;&#x6682;&#x505C;&#x548C;&#x7EE7;&#x7EED;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570; (<a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/function*" title="function* &#x58F0;&#x660E;&#xFF08;function&#x5173;&#x952E;&#x5B57;&#x540E;&#x8DDF;&#x4E00;&#x4E2A;&#x661F;&#x53F7;&#xFF09;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;generator&#xFF08;&#x751F;&#x6210;&#x5668;&#xFF09;&#x51FD;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;Generator&#x5BF9;&#x8C61;&#x3002;"><code>function*</code></a> or <a href="/zh-CN/docs/JavaScript/Guide/Iterators_and_Generators#Generators.3A_a_better_way_to_build_Iterators" title="/zh-CN/docs/JavaScript/Guide/Iterators_and_Generators">legacy generator</a>).</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox language-html"> yield [[expression]];</pre>

<dl>
 <dt><code>expression</code></dt>
 <dd>&#x7528;&#x4F5C;&#x8FD4;&#x56DE;&#x503C;. &#xA0;&#x5982;&#x679C;&#x5FFD;&#x7565;, &#x5C06;&#x8FD4;&#x56DE;&#xA0;<code>undefined</code>&#xA0;.</dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>yield</code>&#xA0;&#x5173;&#x952E;&#x5B57;&#x4F7F;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;&#x6682;&#x505C;&#x6267;&#x884C;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x8DDF;&#x5728;&#x5B83;&#x540E;&#x9762;&#x7684;&#x8868;&#x8FBE;&#x5F0F;&#x7684;&#x5F53;&#x524D;&#x503C;. &#x53EF;&#x4EE5;&#x628A;&#x5B83;&#x60F3;&#x6210;&#x662F;<span style="line-height: 1.5;">&#xA0;</span><code style="font-style: normal; line-height: 1.5;">return</code><span style="line-height: 1.5;">&#xA0;&#x5173;&#x952E;&#x5B57;&#x7684;</span><span style="line-height: 1.5;">&#x4E00;&#x4E2A;&#x57FA;&#x4E8E;&#x751F;&#x6210;&#x5668;&#x7684;&#x7248;&#x672C;</span><span style="line-height: 1.5;">.</span></p>

<p><code>yield</code>&#xA0;&#x5173;&#x952E;&#x5B57;&#x5B9E;&#x9645;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#xFF0C;&#x5305;&#x542B;&#x4E24;&#x4E2A;&#x5C5E;&#x6027;, <code>value</code>&#xA0;&#x548C;&#xA0;<code>done</code>. &#xA0;<code>value</code>&#xA0;&#x5C5E;&#x6027;&#x4E3A;&#xA0;<code>yield</code> expression &#x7684;&#x503C;, &#xA0;<code>done</code>&#xA0;&#x662F;&#x4E00;&#x4E2A;&#x5E03;&#x5C14;&#x503C;&#x7528;&#x6765;&#x6307;&#x793A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;&#x662F;&#x5426;&#x5DF2;&#x7ECF;&#x5168;&#x90E8;&#x5B8C;&#x6210;.</p>

<p>&#x4E00;&#x65E6;&#x5728;&#xA0;<code>yield</code> expression &#x5904;&#x6682;&#x505C;, &#xA0;&#x9664;&#x975E;&#x5916;&#x90E8;&#x8C03;&#x7528;&#x751F;&#x6210;&#x5668;&#x7684;&#xA0;<code>next()</code>&#xA0;&#x65B9;&#x6CD5;&#xFF0C;&#x5426;&#x5219;&#x751F;&#x6210;&#x5668;&#x7684;&#x4EE3;&#x7801;&#x5C06;&#x4E0D;&#x80FD;&#x7EE7;&#x7EED;&#x6267;&#x884C;. &#x8FD9;&#x4F7F;&#x5F97;&#x53EF;&#x4EE5;&#x5BF9;&#x751F;&#x6210;&#x5668;&#x7684;&#x6267;&#x884C;&#x4EE5;&#x53CA;&#x6E10;&#x8FDB;&#x5F0F;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x8FDB;&#x884C;&#x76F4;&#x63A5;&#x63A7;&#x5236;.</p>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<p>&#x4EE5;&#x4E0B;&#x4EE3;&#x7801;&#x662F;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;&#x7684;&#x58F0;&#x660E;, along with a helper function.</p>

<pre class="brush: js">function* foo(){
  var index = 0;
  while (index &lt;= 2) // when index reaches 3, 
                     // yield&apos;s done will be true 
                     // and its value will be undefined;
    yield index++;
}</pre>

<p>&#x4E00;&#x65E6;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;&#x5DF2;&#x5B9A;&#x4E49;&#xFF0C;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x6784;&#x9020;&#x4E00;&#x4E2A;&#x8FED;&#x4EE3;&#x5668;&#x6765;&#x4F7F;&#x7528;&#x5B83;.</p>

<pre class="brush: js">var iterator = foo();
console.log(iterator.next()); // { value:0, done:false }
console.log(iterator.next()); // { value:1, done:false }
console.log(iterator.next()); // { value:2, done:false }
console.log(iterator.next()); // { value:undefined, done:true }
</pre>

<h2 name="Specifications" id="Specifications">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Yield</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 name="Browser_compatibility" id="Browser_compatibility">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
   <th>Safari (WebKit)</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>39</td>
   <td><a href="/en-US/Firefox/Releases/26" title="Released on 2013-12-10.">26.0</a> (26.0)</td>
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
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>yes (when?)</td>
   <td>26.0 (26.0)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Guide/The_Iterator_protocol">Iterators</a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/function*" title="function* &#x58F0;&#x660E;&#xFF08;function&#x5173;&#x952E;&#x5B57;&#x540E;&#x8DDF;&#x4E00;&#x4E2A;&#x661F;&#x53F7;&#xFF09;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;generator&#xFF08;&#x751F;&#x6210;&#x5668;&#xFF09;&#x51FD;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;Generator&#x5BF9;&#x8C61;&#x3002;"><code>function*</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/yield*" title="&#x5728;&#x751F;&#x6210;&#x5668;&#x4E2D;&#xFF0C;yield*&#xA0;&#x53EF;&#x4EE5;&#x628A;&#x9700;&#x8981; yield &#x7684;&#x503C;&#x59D4;&#x6258;&#x7ED9;&#x53E6;&#x5916;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x6216;&#x8005;&#x5176;&#x4ED6;&#x4EFB;&#x610F;&#x7684;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#x3002;"><code>yield*</code></a></li>
</ul>
                  
                
              