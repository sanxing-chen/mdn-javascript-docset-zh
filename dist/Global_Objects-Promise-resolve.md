
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div style="background: #9CF49C;" class="overheadIndicator"> 
    <p><strong>&#x8BE5;&#x65B0;&#x7279;&#x6027;&#x5C5E;&#x4E8E; ECMAScript 2015&#xFF08;ES6&#xFF09;&#x89C4;&#x8303;&#xFF0C;&#x5728;&#x4F7F;&#x7528;&#x65F6;&#x8BF7;&#x6CE8;&#x610F;&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;&#x3002;</strong></p> 
</div></div>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p><code><strong>Promise.resolve(value)</strong>&#x65B9;&#x6CD5;</code>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x4EE5;&#x7ED9;&#x5B9A;&#x503C;&#x89E3;&#x6790;&#x540E;&#x7684;Promise&#x5BF9;&#x8C61;&#x3002;&#x4F46;&#x5982;&#x679C;&#x8FD9;&#x4E2A;&#x503C;&#x662F;&#x4E2A;thenable&#xFF08;&#x5373;&#x5E26;&#x6709;then&#x65B9;&#x6CD5;&#xFF09;&#xFF0C;&#x8FD4;&#x56DE;&#x7684;promise&#x4F1A;&#x201C;&#x8DDF;&#x968F;&#x201D;&#x8FD9;&#x4E2A;thenable&#x7684;&#x5BF9;&#x8C61;&#xFF0C;&#x91C7;&#x7528;&#x5B83;&#x7684;&#x6700;&#x7EC8;&#x72B6;&#x6001;&#xFF08;&#x6307;resolved/rejected/pending/settled&#xFF09;&#xFF1B;&#x5426;&#x5219;&#x4EE5;&#x8BE5;&#x503C;&#x4E3A;&#x6210;&#x529F;&#x72B6;&#x6001;&#x8FD4;&#x56DE;promise&#x5BF9;&#x8C61;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><var>Promise.resolve(value)</var>;
Promise.resolve(promise);
Promise.resolve(thenable);</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt>value</dt>
 <dd>&#x7528;&#x6765;&#x89E3;&#x6790;&#x5F85;&#x8FD4;&#x56DE;promise&#x5BF9;&#x8C61;&#x7684;&#x53C2;&#x6570;&#x3002;&#x65E2;&#x53EF;&#x4EE5;&#x662F;&#x4E00;&#x4E2A;promise&#x5BF9;&#x8C61;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x662F;&#x4E00;&#x4E2A;thenable&#x3002;</dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x9759;&#x6001;&#x65B9;&#x6CD5; <code>Promise.resolve&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;promise&#x5BF9;&#x8C61;&#xFF0C;&#x8FD9;&#x4E2A;promise&#x5BF9;&#x8C61;&#x662F;&#x88AB;</code>&#x89E3;&#x6790;&#x540E;&#xFF08;<code>resolved&#xFF09;&#x7684;&#x3002;</code></p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;&#x9759;&#x6001;&#x65B9;&#x6CD5;Promise.resolve">&#x4F7F;&#x7528;&#x9759;&#x6001;&#x65B9;&#x6CD5;<code>Promise.resolve</code></h3>

<pre class="brush: js">Promise.resolve(&quot;Success&quot;).then(function(value) {
  console.log(value); // &quot;Success&quot;
}, function(value) {
  // &#x4E0D;&#x4F1A;&#x88AB;&#x8C03;&#x7528;
});
</pre>

<h3 id="&#x5BF9;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x8FDB;&#x884C;resolve">&#x5BF9;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x8FDB;&#x884C;resolve</h3>

<pre class="brush: js">var p = Promise.resolve([1,2,3]);
p.then(function(v) {
  console.log(v[0]); // 1
});
</pre>

<h3 id="Resolve&#x53E6;&#x4E00;&#x4E2A;promise&#x5BF9;&#x8C61;">Resolve&#x53E6;&#x4E00;&#x4E2A;promise&#x5BF9;&#x8C61;</h3>

<pre class="brush: js">var original = Promise.resolve(true);
var cast = Promise.resolve(original);
cast.then(function(v) {
  console.log(v); // true
});
</pre>

<h3 id="resolve_thenable&#x7684;&#x5BF9;&#x8C61;&#x4EEC;&#x5E76;&#x629B;&#x51FA;&#x9519;&#x8BEF;">resolve thenable&#x7684;&#x5BF9;&#x8C61;&#x4EEC;&#x5E76;&#x629B;&#x51FA;&#x9519;&#x8BEF;</h3>

<pre class="brush: js">// Resolve&#x4E00;&#x4E2A;thennable&#x5BF9;&#x8C61;
var p1 = Promise.resolve({ 
  then: function(onFulfill, onReject) { onFulfill(&quot;fulfilled!&quot;); }
});
console.log(p1 instanceof Promise) // true, &#x8FD9;&#x662F;&#x4E00;&#x4E2A;Promise&#x5BF9;&#x8C61;

p1.then(function(v) {
    console.log(v); // &#x8F93;&#x51FA;&quot;fulfilled!&quot;
  }, function(e) {
    // &#x4E0D;&#x4F1A;&#x88AB;&#x8C03;&#x7528;
});

// Thenable&#x5728;callback&#x4E4B;&#x524D;&#x629B;&#x51FA;&#x5F02;&#x5E38;
// Promise rejects
var thenable = { then: function(resolve) {
  throw new TypeError(&quot;Throwing&quot;);
  resolve(&quot;Resolving&quot;);
}};

var p2 = Promise.resolve(thenable);
p2.then(function(v) {
  // &#x4E0D;&#x4F1A;&#x88AB;&#x8C03;&#x7528;
}, function(e) {
  console.log(e); // TypeError: Throwing
});

// Thenable&#x5728;callback&#x4E4B;&#x540E;&#x629B;&#x51FA;&#x5F02;&#x5E38;
// Promise resolves
var thenable = { then: function(resolve) {
  resolve(&quot;Resolving&quot;);
  throw new TypeError(&quot;Throwing&quot;);
}};

var p3 = Promise.resolve(thenable);
p3.then(function(v) {
  console.log(v); // &#x8F93;&#x51FA;&quot;Resolving&quot;
}, function(e) {
  // &#x4E0D;&#x4F1A;&#x88AB;&#x8C03;&#x7528;
});
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
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-promise.resolve" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Promise.resolve</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>ECMA&#x6807;&#x51C6;&#x4E2D;&#x7684;&#x9996;&#x6B21;&#x5B9A;&#x4E49;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-promise.resolve" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Promise.resolve</small></a></td>
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
   <td>32 [2]</td>
   <td><a title="Released on 2013-09-17." href="/en-US/Firefox/Releases/24">24.0</a> (24.0) as <code>Future</code><br>
    <a title="Released on 2013-10-29." href="/en-US/Firefox/Releases/25">25.0</a> (25.0) as <code>Promise</code> behind a flag[1]<br>
    <a title="Released on 2014-04-29." href="/en-US/Firefox/Releases/29">29.0</a> (29.0) by default</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>19</td>
   <td>7.1</td>
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
   <th>Chrome for Android</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>24.0 (24.0) as <code>Future</code><br>
    25.0 (25.0) as <code>Promise</code> behind a flag[1]<br>
    29.0 (29.0) by default</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>iOS 8</td>
   <td>32</td>
  </tr>
 </tbody>
</table>
</div>

<p>[1] Chrome/v8 &#x4E5F;&#x652F;&#x6301;&#x4E00;&#x4E2A;&#x975E;&#x6807;&#x51C6;&#x65B9;&#x6CD5; <code>Promise.accept()&#x3002;</code>&#xA0;&#x7136;&#x800C;, &#x8FD8;&#x662F;&#x63A8;&#x8350;&#x4F7F;&#x7528;&#x6807;&#x51C6;&#x7684; <code>Promise.resolve()</code>&#xA0;&#x65B9;&#x6CD5;&#xFF0C;&#x56E0;&#x4E3A;&#xA0;<code>accept &#x65B9;&#x6CD5;&#x5C06;&#x5728;&#x672A;&#x6765;&#x88AB;&#x79FB;&#x9664;</code>&#xA0;(<a href="https://code.google.com/p/v8/issues/detail?id=3238" class="external">issue 3238</a>)&#x3002;</p>

<p></p><div class="bc-api hidden"> 
Less than 80% of macro strings have been translated. Falling back to wiki table. 
</div><p></p>

<h2 id="&#x53C2;&#x89C1;">&#x53C2;&#x89C1;</h2>

<ul>
 <li><a title="&#x6240;&#x8C13;Promise&#xFF0C;&#x7B80;&#x5355;&#x8BF4;&#x5C31;&#x662F;&#x4E00;&#x4E2A;&#x5BB9;&#x5668;&#xFF0C;&#x91CC;&#x9762;&#x4FDD;&#x5B58;&#x7740;&#x67D0;&#x4E2A;&#x672A;&#x6765;&#x624D;&#x4F1A;&#x7ED3;&#x675F;&#x7684;&#x4E8B;&#x4EF6;&#xFF08;&#x901A;&#x5E38;&#x662F;&#x4E00;&#x4E2A;&#x5F02;&#x6B65;&#x64CD;&#x4F5C;&#xFF09;&#x7684;&#x7ED3;&#x679C;&#x3002;&#xFF08;&#x8FD9;&#x91CC;&#x7684;&#x7FFB;&#x8BD1;&#x6E90;&#x81EA;ECMAScript 2015&#x5173;&#x4E8E;Promise&#x7684;&#x89E3;&#x91CA;&#xFF0C;&#x6CA1;&#x6709;&#x539F;&#x6587;&#x7FFB;&#x8BD1;MDN&#x7684;&#x539F;&#x8BDD;&#xFF0C;&#x5982;&#x679C;&#x60A8;&#x6709;&#x7591;&#x95EE;&#xFF0C;&#x53EF;&#x4EE5;&#x53C2;&#x770B;&#x82F1;&#x6587;&#x7684;&#x8BF4;&#x660E;&#x6587;&#x6863;&#xFF1A;https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise---&#x8BD1;&#x8005;&#x6CE8;&#xFF09;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>Promise</code></a></li>
</ul>
                  
                
              