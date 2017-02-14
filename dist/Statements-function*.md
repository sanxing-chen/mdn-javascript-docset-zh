
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>function*</strong></code> &#x58F0;&#x660E; (<code style="font-style: normal;">function</code>&#x5173;&#x952E;&#x5B57;&#x540E;&#x8DDF;&#x4E00;&#x4E2A;&#x661F;&#x53F7;&#xFF09;&#x5B9A;&#x4E49;&#x4E86;&#x4E00;&#x4E2A;<strong><em>&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;</em> (</strong><em>generator function</em><strong>)</strong>&#xFF0C;&#x5B83;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A; &#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator" title="&#x8FD9;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x5BF9;&#x8C61;&#x662F;&#x7531;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570; generator function&#xA0;&#x8FD4;&#x56DE;&#x7684;&#x3002;&#x5E76;&#x4E14;&#x5B83;&#x662F;&#x540C;&#x65F6;&#x9075;&#x5B88;&#xA0;The iterable protocol&#xA0;&#x53EF;&#x904D;&#x5386;&#x534F;&#x8BAE;&#x548C;The&#xA0;iterator protocol&#xA0;&#x8FED;&#x4EE3;&#x5668;&#x6A21;&#x5F0F;&#x534F;&#x8BAE; ."><code>Generator</code></a>&#xA0;&#xA0;&#x5BF9;&#x8C61;&#x3002;</p>

<div class="noinclude">
<p>&#x4F60;&#x4E5F;&#x53EF;&#x4EE5;&#x5B9A;&#x4E49;&#xA0;<strong><em>&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;</em> &#xA0;</strong>&#x4F7F;&#x7528;&#x6784;&#x9020;&#x51FD;&#x6570; &#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/GeneratorFunction" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>GeneratorFunction</code></a> &#x548C;&#x4E00;&#x4E2A; &#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/function*" title="function*&#x5173;&#x952E;&#x5B57;&#x53EF;&#x4EE5;&#x5728;&#x8868;&#x8FBE;&#x5F0F;&#x5185;&#x90E8;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;&#x3002;"><code>function* expression</code></a>&#xA0;&#x3002;</p>
</div>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">function* <em>name</em>([<em>param</em>[, <em>param</em>[, ... <em>param</em>]]]) { <em>statements</em> }
</pre>

<dl>
 <dt><code>name</code></dt>
 <dd>&#x51FD;&#x6570;&#x540D;</dd>
</dl>

<dl>
 <dt><code>param</code></dt>
 <dd>&#x8981;&#x4F20;&#x9012;&#x7ED9;&#x51FD;&#x6570;&#x7684;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#x7684;&#x540D;&#x79F0;&#x3002;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x6700;&#x591A;&#x53EF;&#x4EE5;&#x6709;255&#x4E2A;&#x53C2;&#x6570;&#x3002;</dd>
</dl>

<dl>
 <dt><code>statements</code></dt>
 <dd>&#x5305;&#x542B;&#x51FD;&#x6570;&#x4F53;&#x7684;&#x8BED;&#x53E5;&#x3002;</dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><strong>&#x751F;&#x6210;&#x5668;</strong>&#x662F;&#x4E00;&#x79CD;&#x53EF;&#x4EE5;&#x4ECE;&#x4E2D;&#x9000;&#x51FA;&#x5E76;&#x5728;&#x4E4B;&#x540E;&#x91CD;&#x65B0;&#x8FDB;&#x5165;&#x7684;&#x51FD;&#x6570;&#x3002;&#x751F;&#x6210;&#x5668;&#x7684;&#x73AF;&#x5883;&#xFF08;&#x7ED1;&#x5B9A;&#x7684;&#x53D8;&#x91CF;&#xFF09;&#x4F1A;&#x5728;&#x6BCF;&#x6B21;&#x6267;&#x884C;&#x540E;&#x88AB;&#x4FDD;&#x5B58;&#xFF0C;&#x4E0B;&#x6B21;&#x8FDB;&#x5165;&#x65F6;&#x53EF;&#x7EE7;&#x7EED;&#x4F7F;&#x7528;&#x3002;</p>

<p>&#x8C03;&#x7528;&#x4E00;&#x4E2A;<strong>&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;</strong>&#x5E76;&#x4E0D;&#x9A6C;&#x4E0A;&#x6267;&#x884C;&#x5B83;&#x7684;&#x4E3B;&#x4F53;&#xFF0C;&#x800C;&#x662F;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x8FD9;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;&#x7684;<strong>&#x8FED;&#x4EE3;&#x5668;&#xFF08;iterator&#xFF09;&#x5BF9;&#x8C61;</strong>&#x3002;&#x5F53;&#x8FD9;&#x4E2A;&#x8FED;&#x4EE3;&#x5668;&#x7684;<code>next()&#x65B9;&#x6CD5;&#x88AB;&#x8C03;&#x7528;&#x65F6;&#xFF0C;<strong>&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;</strong>&#x7684;&#x4E3B;&#x4F53;&#x4F1A;&#x88AB;&#x6267;&#x884C;&#x76F4;&#x81F3;&#x7B2C;&#x4E00;&#x4E2A;</code><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/yield" title="yield &#x5173;&#x952E;&#x5B57;&#x7528;&#x6765;&#x6682;&#x505C;&#x548C;&#x7EE7;&#x7EED;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570; (function* or legacy generator)."><code>yield</code></a>&#x8868;&#x8FBE;&#x5F0F;&#xFF0C;&#x8BE5;&#x8868;&#x8FBE;&#x5F0F;&#x5B9A;&#x4E49;&#x4E86;&#x8FED;&#x4EE3;&#x5668;&#x8FD4;&#x56DE;&#x7684;&#x503C;&#xFF0C;&#x6216;&#x8005;&#xFF0C;&#x88AB;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/yield*" title="&#x5728;&#x751F;&#x6210;&#x5668;&#x4E2D;&#xFF0C;yield*&#xA0;&#x53EF;&#x4EE5;&#x628A;&#x9700;&#x8981; yield &#x7684;&#x503C;&#x59D4;&#x6258;&#x7ED9;&#x53E6;&#x5916;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x6216;&#x8005;&#x5176;&#x4ED6;&#x4EFB;&#x610F;&#x7684;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#x3002;"><code>yield*</code></a>&#x59D4;&#x6D3E;&#x81F3;&#x53E6;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;&#x3002;<code>next()&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x6709;&#x4E00;&#x4E2A;</code><span style="font-family: consolas,monaco,andale mono,monospace;">value&#x5C5E;&#x6027;&#xFF0C;&#x8868;&#x793A;</span><code>&#x4EA7;&#x51FA;&#x7684;&#x503C;&#xFF0C;&#x548C;&#x4E00;&#x4E2A;done&#x5C5E;&#x6027;&#xFF0C;&#x8868;&#x793A;&#x751F;&#x6210;&#x5668;&#x662F;&#x5426;&#x5DF2;&#x7ECF;&#x4EA7;&#x51FA;&#x4E86;&#x5B83;&#x6700;&#x540E;&#x7684;&#x503C;&#x3002;</code></p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x7B80;&#x5355;&#x793A;&#x4F8B;">&#x7B80;&#x5355;&#x793A;&#x4F8B;</h3>

<pre class="brush: js">function* idMaker(){
  var index = 0;
  while(index&lt;3)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined
// ...</pre>

<h3 id="yield*&#x7684;&#x793A;&#x4F8B;">yield*&#x7684;&#x793A;&#x4F8B;</h3>

<pre class="brush: js">function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i){
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

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
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">function*</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">function*</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
   <th>Safari (WebKit)</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>39.0</td>
   <td><a href="/en-US/Firefox/Releases/26" title="Released on 2013-12-10.">26.0</a> (26.0)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>26</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
  <tr>
   <td><code>yield*</code></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><a href="/en-US/Firefox/Releases/27" title="Released on 2014-02-04.">27.0</a> (27.0)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>26</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
  <tr>
   <td><code>IteratorResult</code> object instead of throwing</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><a href="/en-US/Firefox/Releases/29" title="Released on 2014-04-29.">29.0</a> (29.0)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
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
   <th>Android Webview</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
   <th>Chrome for Android</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>26.0 (26.0)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>39.0</td>
  </tr>
  <tr>
   <td><code>yield*</code></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>27.0 (27.0)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
  <tr>
   <td><code>IteratorResult</code> object instead of throwing</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>29.0 (29.0)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="Firefox-specific_notes">Firefox-specific notes</h2>

<h4 id="Firefox_26&#x4E4B;&#x524D;&#x7684;&#x751F;&#x6210;&#x5668;&#x548C;&#x8FED;&#x4EE3;&#x5668;">Firefox 26&#x4E4B;&#x524D;&#x7684;&#x751F;&#x6210;&#x5668;&#x548C;&#x8FED;&#x4EE3;&#x5668;</h4>

<p>&#x65E7;&#x7248;&#x672C;&#x7684;Firefox&#x5B9E;&#x65BD;&#x4E86;&#x65E7;&#x7248;&#x672C;&#x7684;&#x751F;&#x6210;&#x5668;&#x63D0;&#x6848;&#x3002;&#x65E7;&#x7248;&#x4E2D;&#x7528;&#x666E;&#x901A;&#x7684;<code>function&#x5173;&#x952E;&#x5B57;&#x5B9A;&#x4E49;</code>&#xFF08;&#x6CA1;&#x6709;&#x661F;&#x53F7;&#xFF09;.</p>

<h4 id="IteratorResult&#x4E0D;&#x518D;&#x629B;&#x51FA;&#x9519;&#x8BEF;"><code>IteratorResult</code>&#x4E0D;&#x518D;&#x629B;&#x51FA;&#x9519;&#x8BEF;</h4>

<p>&#x4ECE;Gecko 29 (Firefox 29 / Thunderbird 29 / SeaMonkey 2.26)&#x5F00;&#x59CB;&#xFF0C;&#x5B8C;&#x6210;&#x7684;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;&#x4E0D;&#x518D;&#x629B;&#x51FA;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;"><code>TypeError</code></a> &quot;generator has already finished&quot;. &#x800C;&#x662F;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;<code>IteratorResult</code>&#x5BF9;&#x8C61;&#xFF1A;<span style="font-family: consolas,monaco,andale mono,monospace;">{ value: undefined, done: true }</span>&#xA0;(<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=958951" class="external" title="FIXED: Return IteratorResult object for completed generators instead of throwing">bug&#xA0;958951</a>)&#x3002;</p>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/function*" title="function*&#x5173;&#x952E;&#x5B57;&#x53EF;&#x4EE5;&#x5728;&#x8868;&#x8FBE;&#x5F0F;&#x5185;&#x90E8;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;&#x3002;"><code>function* expression</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/GeneratorFunction" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>GeneratorFunction</code></a> object</li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Guide/The_Iterator_protocol">&#x8FED;&#x4EE3;&#x5668;&#x534F;&#x8BAE;</a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/yield" title="yield &#x5173;&#x952E;&#x5B57;&#x7528;&#x6765;&#x6682;&#x505C;&#x548C;&#x7EE7;&#x7EED;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570; (function* or legacy generator)."><code>yield</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/yield*" title="&#x5728;&#x751F;&#x6210;&#x5668;&#x4E2D;&#xFF0C;yield*&#xA0;&#x53EF;&#x4EE5;&#x628A;&#x9700;&#x8981; yield &#x7684;&#x503C;&#x59D4;&#x6258;&#x7ED9;&#x53E6;&#x5916;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x6216;&#x8005;&#x5176;&#x4ED6;&#x4EFB;&#x610F;&#x7684;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#x3002;"><code>yield*</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Function" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Function</code></a> object</li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/function" title="&#x51FD;&#x6570;&#x58F0;&#x660E;&#x7528;&#x6307;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x58F0;&#x660E;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x3002;"><code>function declaration</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/function" title="function &#x5173;&#x952E;&#x5B57;&#x53EF;&#x7528;&#x6765;&#x5728;&#x4E00;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x3002;"><code>function expression</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Functions and function scope</code></a></li>
 <li>&#x5176;&#x4ED6;&#x7F51;&#x7EDC;&#x8D44;&#x6E90;:
  <ul>
   <li><a href="http://facebook.github.io/regenerator/" class="external">Regenerator</a> an ES6 generator compiler to ES5</li>
   <li><a href="http://www.youtube.com/watch?v=qbKWsbJ76-s" class="external">Forbes Lindesay: Promises and Generators: control flow utopia -- JSConf EU 2013</a></li>
   <li><a href="https://www.youtube.com/watch?v=ZrgEZykBHVo&amp;list=PLuoyIZT5fPlG44bPq50Wgh0INxykdrYX7&amp;index=1" class="external">Hemanth.HM: The New gen of *gen(){}</a></li>
   <li><a href="http://taskjs.org/" class="external">Task.js</a></li>
  </ul>
 </li>
</ul>
                  
                
              