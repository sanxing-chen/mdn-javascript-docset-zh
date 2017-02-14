
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>next</strong></code><strong><code>()</code></strong> &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x5C5E;&#x6027; <code>done</code> &#x548C; <code>value</code> &#x7684;&#x5BF9;&#x8C61;. &#x8BE5;&#x65B9;&#x6CD5;&#x4E5F;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x63A5;&#x53D7;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#x7528;&#x4EE5;&#x5411;&#x751F;&#x6210;&#x5668;&#x4F20;&#x503C;.</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>gen</var>.next(value)</code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>value</code></dt>
 <dd>&#x5411;&#x751F;&#x6210;&#x5668;&#x4F20;&#x9012;&#x7684;&#x503C;.</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x8FD4;&#x56DE;&#x7684;<code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">&#x5BF9;&#x8C61;</a>&#x5305;&#x542B;&#x4E24;&#x4E2A;&#x5C5E;&#x6027;</code>:</p>

<ul>
 <li><code>done</code> (&#x5E03;&#x5C14;&#x7C7B;&#x578B;)

  <ul>
   <li>&#x5F53;&#x8FED;&#x4EE3;&#x5668;&#x904D;&#x5386;&#x5230;&#x8FED;&#x4EE3;&#x5E8F;&#x5217;&#x672B;&#x7AEF;&#x65F6;&#x8FD4;&#x56DE;&#x503C;&#xA0;<code>true</code>&#xA0;.&#xA0;In this case&#xA0;<code>value</code>&#xA0;optionally specifies the&#xA0;<em>return value</em>&#xA0;of the iterator.</li>
   <li>&#x5F53;&#x8FED;&#x4EE3;&#x5668;&#x4ECD;&#x53EF;&#x7EE7;&#x7EED;&#x5728;&#x8FED;&#x4EE3;&#x5E8F;&#x5217;&#x4E2D;&#x5411;&#x524D;&#x904D;&#x5386;&#x65F6;&#x8FD4;&#x56DE;&#x503C;&#xA0;<code>false.</code>&#xA0;This is equivalent of not specifying the <code>done</code> property altogether.</li>
  </ul>
 </li>
 <li><code>value</code> - &#x8FED;&#x4EE3;&#x5668;&#x8FD4;&#x56DE;&#x7684;&#x4EFB;&#x610F;&#x7684;Javascript&#x503C;. &#x5F53; <code>done</code>&#xA0;&#x7684;&#x503C;&#x4E3A;&#xA0;<code>true &#x65F6;&#x53EF;&#x4EE5;&#x5FFD;&#x7565;&#x8BE5;&#x503C;</code>.</li>
</ul>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 name="Example:_Using_test" id="Example:_Using_test">&#x4F7F;&#x7528; <code>next()&#x65B9;&#x6CD5;</code></h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x5C55;&#x793A;&#x4E86;&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x7684;&#x751F;&#x6210;&#x5668;, &#x4EE5;&#x53CA;&#x8C03;&#x7528;&#xA0;<code>next</code>&#xA0;&#x540E;&#x65B9;&#x6CD5;&#x7684;&#x8FD4;&#x56DE;&#x503C;:</p>

<pre class="brush: js">function* gen() { 
  yield 1;
  yield 2;
  yield 3;
}

var g = gen(); // &quot;Generator { }&quot;
g.next();      // &quot;Object { value: 1, done: false }&quot;
g.next();      // &quot;Object { value: 2, done: false }&quot;
g.next();      // &quot;Object { value: 3, done: false }&quot;
g.next();      // &quot;Object { value: undefined, done: true }&quot;
</pre>

<h3 id="&#x5411;&#x751F;&#x6210;&#x5668;&#x4F20;&#x503C;">&#x5411;&#x751F;&#x6210;&#x5668;&#x4F20;&#x503C;</h3>

<p>&#x5728;&#x8BE5;&#x793A;&#x4F8B;&#x4E2D;&#xFF0C;&#x8C03;&#x7528;&#xA0;<code>next</code>&#xA0;&#x65B9;&#x6CD5;&#x5E76;&#x4F20;&#x5165;&#x4E86;&#x53C2;&#x6570;&#xFF0C;&#x8BF7;&#x6CE8;&#x610F;&#xFF0C;&#x9996;&#x6B21;&#x8C03;&#x7528;&#xA0;<code style="font-style: normal;">next</code>&#xA0;&#x65B9;&#x6CD5;&#x65F6;&#x6CA1;&#x6709;&#x51FA;&#x4EFB;&#x4F55;&#x8F93;&#x51FA;, &#x8FD9;&#x662F;&#x56E0;&#x4E3A;&#x521D;&#x59CB;&#x72B6;&#x6001;&#x65F6;&#x751F;&#x6210;&#x5668;&#x901A;&#x8FC7;<span style="font-family: courier,andale mono,monospace;">yield</span>&#xA0;&#x8FD4;&#x56DE;&#x4E86;null.</p>

<pre class="brush: js">function* gen() {
  while(true) {
    var value = yield null;
    console.log(value);
  }
}

var g = gen();
g.next(1); 
// &quot;{ value: null, done: false }&quot;
g.next(2); 
// &quot;{ value: null, done: false }&quot;
// 2
</pre>

<h2 name="Specifications" id="Specifications">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-generator.prototype.next" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Generator.prototype.next</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-generator.prototype.next" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Generator.prototype.next</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 name="Browser_compatibility" id="Browser_compatibility">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><a title="Released on 2013-12-10." href="/en-US/Firefox/Releases/26">26</a> (26)</td>
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
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>26.0 (26)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/function*">function*</a></code></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators">Iterators and generators</a></li>
</ul>
                  
                
              