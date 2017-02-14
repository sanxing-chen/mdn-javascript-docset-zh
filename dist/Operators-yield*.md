
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div style="background: #9CF49C;" class="overheadIndicator"> 
    <p><strong>&#x8BE5;&#x65B0;&#x7279;&#x6027;&#x5C5E;&#x4E8E; ECMAScript 2015&#xFF08;ES6&#xFF09;&#x89C4;&#x8303;&#xFF0C;&#x5728;&#x4F7F;&#x7528;&#x65F6;&#x8BF7;&#x6CE8;&#x610F;&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;&#x3002;</strong></p> 
</div></div>

<h2 id="&#x6982;&#x8FF0;">&#x6982;&#x8FF0;</h2>

<p>&#x5728;&#x751F;&#x6210;&#x5668;&#x4E2D;&#xFF0C;<code>yield*</code>&#xA0;&#x53EF;&#x4EE5;&#x628A;&#x9700;&#x8981; <code>yield</code> &#x7684;&#x503C;&#x59D4;&#x6258;&#x7ED9;&#x53E6;&#x5916;&#x4E00;&#x4E2A;<a title="function* &#x58F0;&#x660E;&#xFF08;function&#x5173;&#x952E;&#x5B57;&#x540E;&#x8DDF;&#x4E00;&#x4E2A;&#x661F;&#x53F7;&#xFF09;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;generator&#xFF08;&#x751F;&#x6210;&#x5668;&#xFF09;&#x51FD;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;Generator&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Statements/function*"><code>&#x751F;&#x6210;&#x5668;</code></a>&#x6216;&#x8005;&#x5176;&#x4ED6;&#x4EFB;&#x610F;&#x7684;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox language-html"> yield* [[expression]];</pre>

<dl>
 <dt><code>expression</code></dt>
 <dd>&#x4EFB;&#x610F;&#x7684;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;</dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>yield*</code> &#x4E00;&#x4E2A;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#xFF0C;&#x5C31;&#x76F8;&#x5F53;&#x4E8E;&#x628A;&#x8FD9;&#x4E2A;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#x7684;&#x6240;&#x6709;&#x8FED;&#x4EE3;&#x503C;&#x5206;&#x6B21; <code>yield</code> &#x51FA;&#x53BB;&#x3002;</p>

<p><code>yield*</code>&#xA0;&#x8868;&#x8FBE;&#x5F0F;&#x672C;&#x8EAB;&#x7684;&#x503C;&#x5C31;&#x662F;&#x5F53;&#x524D;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#x8FED;&#x4EE3;&#x5B8C;&#x6BD5;&#xFF08;&#x5F53;done&#x4E3A;true&#x65F6;&#xFF09;&#x65F6;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x3002;</p>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F8B;&#x5B50;&#xFF1A;&#x59D4;&#x6258;&#x7ED9;&#x5176;&#x4ED6;&#x751F;&#x6210;&#x5668;">&#x4F8B;&#x5B50;&#xFF1A;&#x59D4;&#x6258;&#x7ED9;&#x5176;&#x4ED6;&#x751F;&#x6210;&#x5668;</h3>

<p>&#x4EE5;&#x4E0B;&#x4EE3;&#x7801;&#x4E2D;&#xFF0C;<code>g1()</code>&#xA0;<code>yield</code> &#x51FA;&#x53BB;&#x7684;&#x6BCF;&#x4E2A;&#x503C;&#x90FD;&#x4F1A;&#x5728; <code>g2()</code>&#xA0;&#x7684; <code>next()</code> &#x65B9;&#x6CD5;&#x4E2D;&#x8FD4;&#x56DE;&#xFF0C;&#x5C31;&#x50CF;&#x90A3;&#x4E9B; <code>yield</code> &#x8BED;&#x53E5;&#x662F;&#x5199;&#x5728; <code>g2()</code>&#xA0;&#x91CC;&#x4E00;&#x6837;&#x3002;</p>

<pre class="brush: js">function* g1() {
  yield 2;
  yield 3;
  yield 4;
}

function* g2() {
  yield 1;
  yield* g1();
  yield 5;
}

var iterator = g2();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
</pre>

<h3 id="&#x4F8B;&#x5B50;&#xFF1A;&#x59D4;&#x6258;&#x7ED9;&#x5176;&#x4ED6;&#x7C7B;&#x578B;&#x7684;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;">&#x4F8B;&#x5B50;&#xFF1A;&#x59D4;&#x6258;&#x7ED9;&#x5176;&#x4ED6;&#x7C7B;&#x578B;&#x7684;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;</h3>

<p>&#x9664;&#x4E86;&#x751F;&#x6210;&#x5668;&#x5BF9;&#x8C61;&#x8FD9;&#x4E00;&#x79CD;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#xFF0C;<code>yield* &#x8FD8;</code>&#x53EF;&#x4EE5; <code>yield</code>&#xA0;&#x5176;&#x5B83;&#x4EFB;&#x610F;&#x7684;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#xFF0C;&#x6BD4;&#x5982;&#x8BF4;&#x6570;&#x7EC4;&#x3001;&#x5B57;&#x7B26;&#x4E32;&#x3001;<code>arguments</code> &#x5BF9;&#x8C61;&#x7B49;&#x7B49;&#x3002;</p>

<pre class="brush: js">function* g3() {
  yield* [1, 2];
  yield* &quot;34&quot;;
  yield* arguments;
}

var iterator = g3(5, 6);

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: &quot;3&quot;, done: false }
console.log(iterator.next()); // { value: &quot;4&quot;, done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: 6, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
</pre>

<h3 id="&#x4F8B;&#x5B50;&#xFF1A;yield*_&#x8868;&#x8FBE;&#x5F0F;&#x7684;&#x503C;">&#x4F8B;&#x5B50;&#xFF1A;<code>yield*</code> &#x8868;&#x8FBE;&#x5F0F;&#x7684;&#x503C;</h3>

<p><code>yield*</code>&#xA0;&#x662F;&#x4E00;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;&#xFF0C;&#x4E0D;&#x662F;&#x8BED;&#x53E5;&#xFF0C;&#x6240;&#x4EE5;&#x5B83;&#x4F1A;&#x6709;&#x81EA;&#x5DF1;&#x7684;&#x503C;&#x3002;</p>

<pre class="brush: js">function* g4() {
  yield* [1, 2, 3];
  return &quot;foo&quot;;
}

var result;

function* g5() {
  result = yield* g4();
}

var iterator = g5();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }, 
&#xA0;                             // &#x6B64;&#x65F6; g4() &#x8FD4;&#x56DE;&#x4E86; { value: &quot;foo&quot;, done: true }

console.log(result);          // &quot;foo&quot;
</pre>

<h2 name="Specifications" id="Specifications">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x540D;&#x79F0;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x5907;&#x6CE8;</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Yield</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><a title="Released on 2014-02-04." href="/en-US/Firefox/Releases/27">27.0</a> (27.0)</td>
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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>27.0 (27.0)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<h3 id="Firefox_&#x5907;&#x6CE8;">Firefox&#xA0;&#x5907;&#x6CE8;</h3>

<ul>
 <li>&#x4ECE; Gecko 33 (Firefox 33 / Thunderbird 33 / SeaMonkey 2.30) &#x5F00;&#x59CB;&#xFF0C;&#x5728; <code>yield</code> &#x548C; <code>*</code> &#x4E4B;&#x95F4;&#x4E0D;&#x5141;&#x8BB8;&#x6709;&#x6362;&#x884C;&#x7B26;&#xFF0C;&#x5426;&#x5219;&#x4F1A;&#x629B;&#x51FA; <a title="SyntaxError&#xA0;&#x5BF9;&#x8C61;&#x4EE3;&#x8868;&#x5C1D;&#x8BD5;&#x89E3;&#x6790;&#x8BED;&#x6CD5;&#x4E0A;&#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x4EE3;&#x7801;&#x7684;&#x9519;&#x8BEF;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError"><code>SyntaxError</code></a> &#x5F02;&#x5E38;&#xFF08;<a title="FIXED: Update parsing of &apos;yield&apos; to match latest spec" href="https://bugzilla.mozilla.org/show_bug.cgi?id=981599" class="external">bug&#xA0;981599</a>&#xFF09;&#xFF1A;

  <pre class="brush: js">function* foo() {
  yield
  *[];
} // SyntaxError&#xFF01;</pre>
 </li>
</ul>

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Guide/The_Iterator_protocol">&#x8FED;&#x4EE3;&#x5668;&#x534F;&#x8BAE;</a></li>
 <li><a title="function* &#x58F0;&#x660E;&#xFF08;function&#x5173;&#x952E;&#x5B57;&#x540E;&#x8DDF;&#x4E00;&#x4E2A;&#x661F;&#x53F7;&#xFF09;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;generator&#xFF08;&#x751F;&#x6210;&#x5668;&#xFF09;&#x51FD;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;Generator&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Statements/function*"><code>function*</code></a></li>
 <li><a title="function*&#x5173;&#x952E;&#x5B57;&#x53EF;&#x4EE5;&#x5728;&#x8868;&#x8FBE;&#x5F0F;&#x5185;&#x90E8;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Operators/function*"><code>function* expression</code></a></li>
 <li><a title="yield &#x5173;&#x952E;&#x5B57;&#x7528;&#x6765;&#x6682;&#x505C;&#x548C;&#x7EE7;&#x7EED;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570; (function* or legacy generator)." href="/zh-CN/docs/Web/JavaScript/Reference/Operators/yield"><code>yield</code></a></li>
</ul>
                  
                
              