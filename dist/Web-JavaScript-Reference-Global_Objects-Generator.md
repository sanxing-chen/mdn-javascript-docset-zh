
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section>&#xA0;</div>

<p>&#x8FD9;&#x4E2A;<strong>&#x751F;&#x6210;&#x5668;</strong>&#x5BF9;&#x8C61;&#x662F;&#x7531;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570; <a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/function*" title="function* &#x58F0;&#x660E;&#xFF08;function&#x5173;&#x952E;&#x5B57;&#x540E;&#x8DDF;&#x4E00;&#x4E2A;&#x661F;&#x53F7;&#xFF09;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;generator&#xFF08;&#x751F;&#x6210;&#x5668;&#xFF09;&#x51FD;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;Generator&#x5BF9;&#x8C61;&#x3002;">generator function</a>&#xA0;&#x8FD4;&#x56DE;&#x7684;&#x3002;&#x5E76;&#x4E14;&#x5B83;&#x662F;&#x540C;&#x65F6;&#x9075;&#x5B88;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#iterable">The iterable protocol</a>&#xA0;&#x53EF;&#x904D;&#x5386;&#x534F;&#x8BAE;&#x548C;<a href="/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#iterator">The&#xA0;iterator protocol&#xA0;</a>&#x8FED;&#x4EE3;&#x5668;&#x6A21;&#x5F0F;&#x534F;&#x8BAE; .</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">function* gen() { 
  yield 1;
  yield 2;
  yield 3;
}

var g = gen(); // &quot;Generator { }&quot;</pre>

<h2 id="&#x65B9;&#x6CD5;">&#x65B9;&#x6CD5;</h2>

<dl>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator/next" title="next() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x5C5E;&#x6027; done &#x548C; value &#x7684;&#x5BF9;&#x8C61;. &#x8BE5;&#x65B9;&#x6CD5;&#x4E5F;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x63A5;&#x53D7;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#x7528;&#x4EE5;&#x5411;&#x751F;&#x6210;&#x5668;&#x4F20;&#x503C;."><code>Generator.prototype.next()</code></a></dt>
 <dd>&#x8FD4;&#x56DE; <a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/yield" title="yield &#x5173;&#x952E;&#x5B57;&#x7528;&#x6765;&#x6682;&#x505C;&#x548C;&#x7EE7;&#x7EED;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570; (function* or legacy generator)."><code>yield</code></a> &#x8868;&#x8FBE;&#x5F0F;&#x4EA7;&#x751F;&#x7684;&#x503C;.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator/return" title="return() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x7ED9;&#x5B9A;&#x7684;&#x503C;&#x5E76;&#x7ED3;&#x675F;&#x751F;&#x6210;&#x5668;&#x3002;"><code>Generator.prototype.return()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x7ED9;&#x5B9A;&#x7684;&#x503C;&#x5E76;&#x7ED3;&#x675F;&#x751F;&#x6210;&#x5668;.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator/throw" title="throw() &#x65B9;&#x6CD5;&#x7528;&#x6765;&#x5411;&#x751F;&#x6210;&#x5668;&#x629B;&#x51FA;&#x5F02;&#x5E38;&#xFF0C;&#x5E76;&#x6062;&#x590D;&#x751F;&#x6210;&#x5668;&#x7684;&#x6267;&#x884C;&#xFF0C;&#x8FD4;&#x56DE;&#x5E26;&#x6709; done &#x53CA; value &#x4E24;&#x4E2A;&#x5C5E;&#x6027;&#x7684;&#x5BF9;&#x8C61;&#x3002;"><code>Generator.prototype.throw()</code></a></dt>
 <dd>&#x5411;&#x751F;&#x6210;&#x5668;&#x629B;&#x51FA;&#x9519;&#x8BEF;.</dd>
</dl>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x65E0;&#x7A77;&#x8FED;&#x4EE3;&#x5668;">&#x65E0;&#x7A77;&#x8FED;&#x4EE3;&#x5668;</h3>

<pre class="brush: js">function* idMaker(){
    var index = 0;
    while(true)
        yield index++;
}

var gen = idMaker(); // &quot;Generator { }&quot;

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
// ...</pre>

<h2 id="&#x65E7;&#x751F;&#x6210;&#x5668;&#x5BF9;&#x8C61;">&#x65E7;&#x751F;&#x6210;&#x5668;&#x5BF9;&#x8C61;</h2>

<p>Firefox (SpiderMonkey) &#x5728;&#xA0;<a href="/en-US/docs/Web/JavaScript/New_in_JavaScript/1.7">JavaScript 1.7</a>&#xA0;&#x4E2D;&#x4E5F;&#x5B9E;&#x73B0;&#x4E86;&#x751F;&#x6210;&#x5668;&#x7684;&#x4E00;&#x4E2A;&#x65E9;&#x671F;&#x7248;&#x672C;&#xFF0C;&#x8BE5;&#x7248;&#x672C;&#x7684;&#x751F;&#x6210;&#x5668;&#x4E0D;&#x9700;&#x8981;&#x5728;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;&#x58F0;&#x660E;&#x65F6;&#x4F7F;&#x7528;&#x661F;&#x53F7;(*)&#xFF0C;&#x53EA;&#x9700;&#x5728;&#x51FD;&#x6570;&#x4F53;&#x4E2D;&#x4F7F;&#x7528;<code style="font-style: normal;">yield</code>&#xA0;&#x5173;&#x952E;&#x5B57;&#x5373;&#x53EF;&#xFF0C;&#x5C3D;&#x7BA1;&#x5982;&#x6B64;&#xFF0C;&#x8BE5;&#x751F;&#x6210;&#x5668;&#x5DF2;&#x88AB;&#x5E9F;&#x5F03;&#xFF0C;&#x5728;&#x5C06;&#x6765;&#x4F1A;&#x88AB;&#x79FB;&#x9664;&#xFF0C;&#x8BF7;&#x52FF;&#x4F7F;&#x7528;&#xA0;(<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1083482" class="external" title="Remove SpiderMonkey support for JS1.7 legacy generators">bug&#xA0;1083482</a>).</p>

<h3 id="&#x65E7;&#x751F;&#x6210;&#x5668;&#x65B9;&#x6CD5;">&#x65E7;&#x751F;&#x6210;&#x5668;&#x65B9;&#x6CD5;</h3>

<dl>
 <dt><code>Generator.prototype.next() </code><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></dt>
 <dd>&#x8FD4;&#x56DE; <a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/yield" title="yield &#x5173;&#x952E;&#x5B57;&#x7528;&#x6765;&#x6682;&#x505C;&#x548C;&#x7EE7;&#x7EED;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570; (function* or legacy generator)."><code>yield</code></a> &#x8868;&#x8FBE;&#x5F0F;&#x4EA7;&#x751F;&#x7684;&#x503C;. &#x4E0E;ES6 &#x751F;&#x6210;&#x5668;&#x5BF9;&#x8C61;&#x7684;<span style="font-family: courier,andale mono,monospace;">next()&#x65B9;&#x6CD5;&#x5BF9;&#x5E94;</span>.</dd>
 <dt><code>Generator.prototype.close()</code> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></dt>
 <dd>&#x5173;&#x95ED;&#x751F;&#x6210;&#x5668;&#xFF0C;&#x56E0;&#x6B64;&#x6267;&#x884C;&#x8BE5;&#x51FD;&#x6570;&#x540E;&#x8C03;&#x7528;<code>next()&#x51FD;&#x6570;&#x65F6;&#x5C06;&#x4F1A;&#x629B;&#x51FA;</code>&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/StopIteration" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>StopIteration</code></a> &#x9519;&#x8BEF;. &#x4E0E;ES6 &#x751F;&#x6210;&#x5668;&#x5BF9;&#x8C61;&#x7684;<span style="font-family: courier,andale mono,monospace;">return()&#x65B9;&#x6CD5;&#x5BF9;&#x5E94;</span>..</dd>
 <dt><code>Generator.prototype.send()</code> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></dt>
 <dd>&#x7528;&#x4E8E;&#x5C06;&#x503C;&#x53D1;&#x9001;&#x5230;&#x751F;&#x6210;&#x5668;Used to send a value to a generator. &#x8BE5;&#x503C;&#x7531;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/yield" title="yield &#x5173;&#x952E;&#x5B57;&#x7528;&#x6765;&#x6682;&#x505C;&#x548C;&#x7EE7;&#x7EED;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570; (function* or legacy generator)."><code>yield</code></a> &#x8868;&#x8FBE;&#x5F0F;&#x8FD4;&#x56DE;, &#x5E76;&#x4E14;&#x8FD4;&#x56DE;&#x4E0B;&#x4E00;&#x4E2A;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/yield" title="yield &#x5173;&#x952E;&#x5B57;&#x7528;&#x6765;&#x6682;&#x505C;&#x548C;&#x7EE7;&#x7EED;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570; (function* or legacy generator)."><code>yield</code></a> &#x8868;&#x8FBE;&#x5F0F;&#x4EA7;&#x751F;&#x7684;&#x503C;. <code>send(x)</code> &#x5BF9;&#x5E94;&#x4E8E;ES6&#x751F;&#x6210;&#x5668;&#x5BF9;&#x8C61;&#x4E2D;&#x7684;&#xA0;<code>next(x)</code></dd>
 <dt><strong><code>Generator.</code></strong><code>prototype.</code><strong><code>throw()</code> </strong> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></dt>
 <dd>&#x5411;&#x751F;&#x6210;&#x5668;&#x629B;&#x51FA;&#x9519;&#x8BEF;. &#x4E0E;ES6 &#x751F;&#x6210;&#x5668;&#x5BF9;&#x8C61;&#x7684;<span style="font-family: courier,andale mono,monospace;">throw()&#x65B9;&#x6CD5;&#x5BF9;&#x5E94;</span>.</dd>
</dl>

<h3 id="&#x65E7;&#x751F;&#x6210;&#x5668;&#x5BF9;&#x8C61;&#x793A;&#x4F8B;">&#x65E7;&#x751F;&#x6210;&#x5668;&#x5BF9;&#x8C61;&#x793A;&#x4F8B;</h3>

<pre class="brush: js">function fibonacci() {
  var a = yield 1;
  yield a * 2;
}

var it = fibonacci();
console.log(it);          // &quot;Generator {  }&quot;
console.log(it.next());   // 1
console.log(it.send(10)); // 20
console.log(it.close());  // undefined
console.log(it.next());   // throws StopIteration (as the generator is now closed)
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-generator-objects" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Generator objects</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-generator-objects" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Generator objects</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
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
   <td>39.0</td>
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
   <td>39.0</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<h3 id="Legacy_generators">Legacy generators</h3>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/Legacy_generator_function" title="legacy generator &#x51FD;&#x6570;&#x8BED;&#x53E5; &#x4F7F;&#x7528;&#x7279;&#x6B8A;&#x53C2;&#x6570;&#x58F0;&#x660E;legacy generator&#x51FD;&#x6570;&#x3002;">The legacy generator function</a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Legacy_generator_function" title="function &#x5173;&#x952E;&#x5B57;&#x53EF;&#x4EE5;&#x7528;&#x4E8E;&#x5728;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#x5B9A;&#x4E49;&#x65E7;&#x5F0F;&#x7684;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;&#x3002;&#x4E3A;&#x4F7F;&#x5B9A;&#x4E49;&#x7684;&#x51FD;&#x6570;&#x4E3A;&#x4E00;&#x4E2A;&#x65E7;&#x5F0F;&#x7684;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;&#xFF0C;&#x8BE5;&#x51FD;&#x6570;&#x7684;&#x51FD;&#x6570;&#x4F53;&#x4E2D;&#x9700;&#x8981;&#x81F3;&#x5C11;&#x5305;&#x542B;&#x4E00;&#x4E2A;&#xA0;yield &#x8868;&#x8FBE;&#x5F0F;&#x3002;">The legacy generator function expression</a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/StopIteration" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>StopIteration</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features/The_legacy_Iterator_protocol">The legacy Iterator protocol</a></li>
</ul>

<h3 id="ES6_generators">ES6 generators</h3>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Functions" title="&#x901A;&#x5E38;&#x6765;&#x8BF4;&#xFF0C;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x5C31;&#x662F;&#x4E00;&#x4E2A;&#x53EF;&#x4EE5;&#x88AB;&#x5916;&#x90E8;&#x4EE3;&#x7801;&#x8C03;&#x7528;(&#x6216;&#x8005;&#x51FD;&#x6570;&#x672C;&#x8EAB;&#x9012;&#x5F52;&#x8C03;&#x7528;)&#x7684;&quot;&#x5B50;&#x7A0B;&#x5E8F;&quot;&#x3002;&#x548C;&#x7A0B;&#x5E8F;&#x672C;&#x8EAB;&#x4E00;&#x6837;&#xFF0C;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x7684;&#x51FD;&#x6570;&#x4F53;&#x662F;&#x7531;&#x4E00;&#x7CFB;&#x5217;&#x7684;&#x8BED;&#x53E5;&#x7EC4;&#x6210;&#x7684;&#x3002;&#x51FD;&#x6570;&#x53EF;&#x4EE5;&#x63A5;&#x6536;&#x4F20;&#x5165;&#x53C2;&#x6570;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x503C;&#x3002;">Functions</a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/function" title="&#x51FD;&#x6570;&#x58F0;&#x660E;&#x7528;&#x6307;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x58F0;&#x660E;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x3002;"><code>function</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/function" title="function &#x5173;&#x952E;&#x5B57;&#x53EF;&#x7528;&#x6765;&#x5728;&#x4E00;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x3002;"><code>function expression</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Function" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Function</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/function*" title="function* &#x58F0;&#x660E;&#xFF08;function&#x5173;&#x952E;&#x5B57;&#x540E;&#x8DDF;&#x4E00;&#x4E2A;&#x661F;&#x53F7;&#xFF09;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;generator&#xFF08;&#x751F;&#x6210;&#x5668;&#xFF09;&#x51FD;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;Generator&#x5BF9;&#x8C61;&#x3002;"><code>function*</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/function*" title="function*&#x5173;&#x952E;&#x5B57;&#x53EF;&#x4EE5;&#x5728;&#x8868;&#x8FBE;&#x5F0F;&#x5185;&#x90E8;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;&#x3002;"><code>function* expression</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/GeneratorFunction" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>GeneratorFunction</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/The_Iterator_protocol">The Iterator protocol</a></li>
</ul>
                  
                
              