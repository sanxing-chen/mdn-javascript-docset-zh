
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><strong>Symbol.iterator&#xA0;</strong>&#x4E3A;&#x6BCF;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5B9A;&#x4E49;&#x4E86;&#x9ED8;&#x8BA4;&#x7684;&#x8FED;&#x4EE3;&#x5668;&#x3002;&#x8BE5;&#x8FED;&#x4EE3;&#x5668;&#x53EF;&#x4EE5;&#x88AB; <code><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of">for...of</a></code> &#x5FAA;&#x73AF;&#x7ED3;&#x6784;&#x4F7F;&#x7528;&#x3002;</p>

<div><table class="standard-table"> 
  <thead> 
    <tr> 
      <th colspan="2" class="header"><code>Symbol.iterator</code> &#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x7279;&#x6027;&#xFF1A;</th> 
    </tr> 
  </thead> 
  <tbody> 
    <tr> 
      <td>writable</td> 
      <td>false</td> 
    </tr> 
    <tr> 
      <td>enumerable</td> 
      <td>false</td> 
    </tr> 
    <tr> 
      <td>configurable</td> 
      <td>false</td> 
    </tr> 
  </tbody> 
</table></div>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x5F53;&#x9700;&#x8981;&#x8FED;&#x4EE3;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x65F6;&#x5019;&#xFF08;&#x6BD4;&#x5982;&#x5728; <code>for...of</code> &#x5FAA;&#x73AF;&#x7684;&#x5F00;&#x59CB;&#x65F6;&#xFF09;&#xFF0C;&#x5B83;&#x7684; <code>@@iterator</code> &#x65B9;&#x6CD5;&#x5C31;&#x4F1A;&#x88AB;&#x8C03;&#x7528;&#x4E00;&#x6B21;&#xFF08;0 &#x4E2A;&#x53C2;&#x6570;&#xFF09;&#xFF0C;&#x540C;&#x65F6;&#x8FD4;&#x56DE;&#x7684;&#x8FED;&#x4EE3;&#x5668;&#x5C06;&#x88AB;&#x7528;&#x6765;&#x83B7;&#x53D6;&#x88AB;&#x8FED;&#x4EE3;&#x51FA;&#x6765;&#x7684;&#x503C;&#x3002;</p>

<p>&#x4E00;&#x4E9B;&#x5185;&#x5EFA;&#x7C7B;&#x578B;&#x62E5;&#x6709;&#x9ED8;&#x8BA4;&#x7684;&#x8FED;&#x4EE3;&#x5668;&#x884C;&#x4E3A;&#xFF0C;&#x5176;&#x4ED6;&#x7C7B;&#x578B;&#xFF08;&#x5982; <a title="Object &#x6784;&#x9020;&#x51FD;&#x6570;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5305;&#x88C5;&#xFF08;object wrapper&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object"><code>Object</code></a> &#xFF09;&#x5219;&#x6CA1;&#x6709;&#x3002;&#x4E0B;&#x8868;&#x4E2D;&#x7684;&#x5185;&#x5EFA;&#x7C7B;&#x578B;&#x62E5;&#x6709;&#x9ED8;&#x8BA4;&#x7684;<span style="font-family: consolas,monaco,andale mono,monospace;"><code>@@iterator</code>&#x65B9;&#x6CD5;&#xFF1A;</span></p>

<ul>
 <li><a title="@@iterator&#x5C5E;&#x6027;&#x548C; values() &#x5C5E;&#x6027;&#x7684;&#x521D;&#x59CB;&#x503C;&#x5747;&#x4E3A;&#x540C;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x5BF9;&#x8C61;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator"><code>Array.prototype[@@iterator]()</code></a></li>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator" class="new"><code>TypedArray.prototype[@@iterator]()</code></a></li>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator" class="new"><code>String.prototype[@@iterator]()</code></a></li>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator" class="new"><code>Map.prototype[@@iterator]()</code></a></li>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator" class="new"><code>Set.prototype[@@iterator]()</code></a></li>
</ul>

<p>&#x66F4;&#x591A;&#x4FE1;&#x606F;&#x8BF7;&#x53C2;&#x89C1;<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols">&#x8FED;&#x4EE3;&#x5668;&#x534F;&#x8BAE;</a>&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x8FED;&#x4EE3;&#x5668;">&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x8FED;&#x4EE3;&#x5668;</h3>

<p>&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x50CF;&#x4E0B;&#x9762;&#x8FD9;&#x6837;&#x521B;&#x5EFA;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#x8FED;&#x4EE3;&#x5668;&#xFF1A;</p>

<pre class="brush: js">var myIterable = {}
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
[...myIterable] // [1, 2, 3]
</pre>

<h3 id="&#x4E0D;&#x7B26;&#x5408;&#x6807;&#x51C6;&#x7684;&#x8FED;&#x4EE3;&#x5668;">&#x4E0D;&#x7B26;&#x5408;&#x6807;&#x51C6;&#x7684;&#x8FED;&#x4EE3;&#x5668;</h3>

<p>&#x5982;&#x679C;&#x4E00;&#x4E2A;&#x8FED;&#x4EE3;&#x5668; <code>@@iterator</code> &#x6CA1;&#x6709;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x8FED;&#x4EE3;&#x5668;&#x5BF9;&#x8C61;&#xFF0C;&#x90A3;&#x4E48;&#x5B83;&#x5C31;&#x662F;&#x4E00;&#x4E2A;&#x4E0D;&#x7B26;&#x5408;&#x6807;&#x51C6;&#x7684;&#x8FED;&#x4EE3;&#x5668;&#xFF0C;&#x8FD9;&#x6837;&#x7684;&#x8FED;&#x4EE3;&#x5668;&#x5C06;&#x4F1A;&#x5728;&#x8FD0;&#x884C;&#x671F;&#x629B;&#x51FA;&#x5F02;&#x5E38;&#xFF0C;&#x751A;&#x81F3;&#x975E;&#x5E38;&#x8BE1;&#x5F02;&#x7684; Bug&#x3002;</p>

<pre class="brush: js">var nonWellFormedIterable = {}
nonWellFormedIterable[Symbol.iterator] = () =&gt; 1
[...nonWellFormedIterable] // TypeError: [] is not a function
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
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-symbol.iterator" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Symbol.iterator</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-symbol.iterator" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Symbol.iterator</small></a></td>
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
   <td>43</td>
   <td><a title="Released on 2015-02-24." href="/en-US/Firefox/Releases/36">36</a> (36)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>30</td>
   <td>10</td>
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
   <td>36.0 (36)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols">&#x8FED;&#x4EE3;&#x5668;&#x534F;&#x8BAE;</a></li>
 <li><a title="@@iterator&#x5C5E;&#x6027;&#x548C; values() &#x5C5E;&#x6027;&#x7684;&#x521D;&#x59CB;&#x503C;&#x5747;&#x4E3A;&#x540C;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x5BF9;&#x8C61;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator"><code>Array.prototype[@@iterator]()</code></a></li>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator" class="new"><code>TypedArray.prototype[@@iterator]()</code></a></li>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator" class="new"><code>String.prototype[@@iterator]()</code></a></li>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator" class="new"><code>Map.prototype[@@iterator]()</code></a></li>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator" class="new"><code>Set.prototype[@@iterator]()</code></a></li>
</ul>
                  
                
              