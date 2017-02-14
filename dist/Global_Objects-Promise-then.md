
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section> <div class="overheadIndicator" style="background: #9CF49C;"> 
    <p><strong>&#x8BE5;&#x65B0;&#x7279;&#x6027;&#x5C5E;&#x4E8E; ECMAScript 2015&#xFF08;ES6&#xFF09;&#x89C4;&#x8303;&#xFF0C;&#x5728;&#x4F7F;&#x7528;&#x65F6;&#x8BF7;&#x6CE8;&#x610F;&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;&#x3002;</strong></p> 
</div></div>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p><code><strong>then()</strong></code>&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#xA0;<a href="/zh-CN/docs/Web/API/Promise" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Promise</code></a><code>&#x3002;</code>&#x5B83;&#x6709;&#x4E24;&#x4E2A;&#x53C2;&#x6570;&#xFF1A;&#x5206;&#x522B;&#x4E3A;&#xA0;<span style="font-family: consolas,monaco,andale mono,monospace;">Promise&#xA0;</span>&#x5728;&#x6210;&#x529F;&#x548C;&#x5931;&#x8D25;&#x60C5;&#x51B5;&#x4E0B;&#x7684;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x3002;</p>

<p>&#x6CE8;&#x610F;&#x4E8B;&#x9879;&#xFF1A;&#x5982;&#x679C;&#x4E24;&#x4E2A;&#x53C2;&#x6570;&#x90FD;&#x88AB;&#x7701;&#x7565;&#xFF0C;&#x6216;&#x63D0;&#x4F9B;&#x7684;&#x4E0D;&#x662F;&#x51FD;&#x6570;&#xFF0C;&#x90A3;&#x4E48;&#x5C06;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x6CA1;&#x6709;&#x5176;&#x4ED6;&#x5904;&#x7406;&#x7A0B;&#x5E8F;&#x7684;&#x65B0; Promise&#xFF0C;&#x53EA;&#x9700;&#x91C7;&#x7528; Promise &#x7684;&#x6700;&#x7EC8;&#x72B6;&#x6001;&#xFF0C;&#x7136;&#x540E;&#x518D;&#x8C03;&#x7528;&#x3002;&#x5982;&#x679C;&#x7701;&#x7565;&#x7B2C;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#x6216;&#x63D0;&#x4F9B;&#x7684;&#x4E0D;&#x662F;&#x51FD;&#x6570;&#xFF0C;&#x521B;&#x5EFA;&#x7684;&#x65B0; Promise &#x7B80;&#x5355;&#x5730;&#x91C7;&#x7528; Promise &#x7684;&#x5B8C;&#x6210;&#x72B6;&#x6001;&#xFF0C;&#x7136;&#x540E;&#x8C03;&#x7528;&#x5B83;&#xFF08;&#x5982;&#x679C;&#x5B83;&#x53D8;&#x4E3A;&#x5B8C;&#x6210;&#xFF09;&#x3002;&#x5982;&#x679C;&#x7701;&#x7565;&#x7B2C;&#x4E8C;&#x4E2A;&#x53C2;&#x6570;&#x6216;&#x63D0;&#x4F9B;&#x7684;&#x4E0D;&#x662F;&#x51FD;&#x6570;&#xFF0C;&#x521B;&#x5EFA;&#x7684;&#x65B0; Promise &#x7B80;&#x5355;&#x5730;&#x91C7;&#x7528; Promise &#x7684;&#x5931;&#x8D25;&#x72B6;&#x6001;&#xFF0C;&#x7136;&#x540E;&#x8C03;&#x7528;&#x5B83;&#xFF08;&#x5982;&#x679C;&#x5B83;&#x53D8;&#x4E3A;&#x5931;&#x8D25;&#xFF09;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><var>p.then(onFulfilled, onRejected)</var>;

p.then(function(value) {
   // fulfillment
  }, function(reason) {
  // rejection
});
</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt>onFulfilled</dt>
 <dd>&#x4E00;&#x4E2A; <a href="/zh-CN/docs/Web/JavaScript/Reference/Function" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Function</code></a>&#xFF0C;&#xA0;&#x5F53;&#xA0;<code>Promise</code>&#xA0;&#x4E3A;&#xA0;fulfilled &#x65F6;&#x8C03;&#x7528;. &#x8BE5;&#x51FD;&#x6570;&#x6709;&#x4E00;&#x4E2A;&#x53C2;&#x6570;, &#x4E3A;&#x6210;&#x529F;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x3002;</dd>
 <dt>onRejected</dt>
 <dd>&#x4E00;&#x4E2A; <a href="/zh-CN/docs/Web/JavaScript/Reference/Function" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Function</code></a>&#xFF0C;&#xA0;&#x5F53;&#xA0;<code>Promise</code>&#xA0;&#x4E3A;&#xA0;rejected &#x65F6;&#x8C03;&#x7528;. &#x8BE5;&#x51FD;&#x6570;&#x6709;&#x4E00;&#x4E2A;&#x53C2;&#x6570;, &#x4E3A;&#x5931;&#x8D25;&#x7684;&#x539F;&#x56E0;&#x3002;</dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x7531;&#x4E8E;&#xA0;<code>then</code>&#xA0;&#x548C;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch" title="catch()&#xA0;&#x65B9;&#x6CD5;&#x53EA;&#x5904;&#x7406; Promise &#x5931;&#x8D25;&#x65F6;&#x7684;&#x60C5;&#x51B5;&#xFF0C;&#x5B83;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#xA0;Promise&#x3002;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x884C;&#x4E3A;&#x4E0E;&#x8C03;&#x7528;&#xA0;Promise.prototype.then(undefined, onRejected) &#x76F8;&#x540C;&#x3002;"><code>Promise.prototype.catch()</code></a> &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;promise, &#x5B83;&#x4EEC;&#x53EF;&#x4EE5;&#x88AB;&#x94FE;&#x5F0F;&#x8C03;&#x7528;&#xA0;&#x2014; &#x4E00;&#x79CD;&#x79F0;&#x4E3A;&#xA0;<em>composition&#xA0;</em>&#x7684;&#x64CD;&#x4F5C;.</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;then&#x65B9;&#x6CD5;"><code><font face="Open Sans, sans-serif">&#x4F7F;&#x7528;</font>then&#x65B9;&#x6CD5;</code></h3>

<pre class="brush: js">var p1 = new Promise(function(resolve, reject) {
  resolve(&quot;Success!&quot;);
  // or
  // reject (&quot;Error!&quot;);
});

p1.then(function(value) {
  console.log(value); // Success!
}, function(reason) {
  console.log(reason); // Error!
});
</pre>

<h3 id="&#x94FE;&#x5F0F;&#x8C03;&#x7528;">&#x94FE;&#x5F0F;&#x8C03;&#x7528;</h3>

<p><font face="Open Sans, sans-serif">then &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#xA0;</font>Promise&#xA0;&#x5BF9;&#x8C61;&#xFF0C;&#x5E76;&#x5141;&#x8BB8;&#x5176;&#x65B9;&#x6CD5;&#x8FDB;&#x884C;&#x94FE;&#x5F0F;&#x4E66;&#x5199;&#x3002;</p>

<p>&#x4F60;&#x53EF;&#x4EE5;&#x4F20;&#x9012;&#x4E00;&#x4E2A; lambda &#x7ED9; then &#x5E76;&#x4E14;&#x5982;&#x679C;&#x5B83;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A; promise&#xFF0C;&#x4E00;&#x4E2A;&#x7B49;&#x4EF7;&#x7684; Promise &#x5C06;&#x66B4;&#x9732;&#x7ED9;&#x540E;&#x7EED;&#x7684;&#x65B9;&#x6CD5;&#x94FE;&#x3002;&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x7247;&#x6BB5;&#x4F7F;&#x7528; setTimout &#x51FD;&#x6570;&#x6765;&#x6A21;&#x62DF;&#x5F02;&#x6B65;&#x4EE3;&#x7801;&#x64CD;&#x4F5C;&#x3002;</p>

<pre class="brush: js"><code>Promise.resolve(&quot;foo&quot;)
  // 1. Receive &quot;foo&quot; concatinate &quot;bar&quot; to it and resolve that to the next then
  .then(function(string) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        string += &apos;bar&apos;;
        resolve(string);
      }, 1);
    });
  })
  // 2. receive &quot;foobar&quot;, register a callback function to work on that string
  // and print it to the console, but not before return the unworked on
  // string to the next then
  .then(function(string) {
    setTimeout(function() {
      string += &apos;baz&apos;;
      console.log(string);
    }, 1)
    return string;
  })
  // 3. print helpful messages about how the code in this section will be run
  // before string is actually processed by the mocked asynchronous code in the
  // prior then block.  
  .then(function(string) {
    console.log(&quot;Last Then:  oops... didn&apos;t bother to instantiate and return &quot; +
                &quot;a promise in the prior then so the sequence may be a bit &quot; +
                &quot;surprising&quot;);

    // Note that `string` will not have the &apos;baz&apos; bit of it at this point. This 
    // is because we mocked that to happen asynchronously with a setTimeout function
    console.log(string);
});</code></pre>

<p>&#x5F53;&#x4E00;&#x4E2A;&#x503C;&#x53EA;&#x662F;&#x4ECE;&#x4E00;&#x4E2A; lambda &#x5185;&#x90E8;&#x8FD4;&#x56DE;&#x65F6;&#xFF0C;&#x5B83;&#x5C06;&#x6709;&#x6548;&#x5730;&#x8FD4;&#x56DE; Promise.resolve&#xFF08;&lt;&#x7531;&#x88AB;&#x8C03;&#x7528;&#x7684;&#x5904;&#x7406;&#x7A0B;&#x5E8F;&#x8FD4;&#x56DE;&#x7684;&#x503C;&gt;&#xFF09;&#x3002;</p>

<pre><code>var p2 = new Promise(function(resolve, reject) {
  resolve(1);
});

p2.then(function(value) {
  console.log(value); // 1
  return value + 1;
}).then(function(value) {
  console.log(value + &quot;- This synchronous usage is virtually pointless&quot;); // 2- This synchronous usage is virtually pointless
});

p2.then(function(value) {
  console.log(value); // 1
});</code></pre>

<p>&#x5982;&#x679C;&#x51FD;&#x6570;&#x629B;&#x51FA;&#x9519;&#x8BEF;&#x6216;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x62D2;&#x7EDD;&#x7684;&#x627F;&#x8BFA;&#xFF0C;&#x5219;&#x8C03;&#x7528;&#x5C06;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x62D2;&#x7EDD;&#x7684;&#x627F;&#x8BFA;&#x3002;</p>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x5907;&#x6CE8;</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-promise.prototype.then" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Promise.prototype.then</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>ECMA&#x6807;&#x51C6;&#x7684;&#x9996;&#x6B21;&#x5B9A;&#x4E49;</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-promise.prototype.then" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Promise.prototype.then</small></a></td>
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
   <td>32</td>
   <td><a href="/en-US/Firefox/Releases/29" title="Released on 2014-04-29.">29.0</a> (29.0)</td>
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
   <td>29.0 (29.0)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>8</td>
   <td>32</td>
  </tr>
 </tbody>
</table>
</div>

<p><br>
 <strong style="font-size: 2.143rem; font-weight: 700; letter-spacing: -1px; line-height: 1;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</strong></p>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="&#x6240;&#x8C13;Promise&#xFF0C;&#x7B80;&#x5355;&#x8BF4;&#x5C31;&#x662F;&#x4E00;&#x4E2A;&#x5BB9;&#x5668;&#xFF0C;&#x91CC;&#x9762;&#x4FDD;&#x5B58;&#x7740;&#x67D0;&#x4E2A;&#x672A;&#x6765;&#x624D;&#x4F1A;&#x7ED3;&#x675F;&#x7684;&#x4E8B;&#x4EF6;&#xFF08;&#x901A;&#x5E38;&#x662F;&#x4E00;&#x4E2A;&#x5F02;&#x6B65;&#x64CD;&#x4F5C;&#xFF09;&#x7684;&#x7ED3;&#x679C;&#x3002;&#xFF08;&#x8FD9;&#x91CC;&#x7684;&#x7FFB;&#x8BD1;&#x6E90;&#x81EA;ECMAScript 2015&#x5173;&#x4E8E;Promise&#x7684;&#x89E3;&#x91CA;&#xFF0C;&#x6CA1;&#x6709;&#x539F;&#x6587;&#x7FFB;&#x8BD1;MDN&#x7684;&#x539F;&#x8BDD;&#xFF0C;&#x5982;&#x679C;&#x60A8;&#x6709;&#x7591;&#x95EE;&#xFF0C;&#x53EF;&#x4EE5;&#x53C2;&#x770B;&#x82F1;&#x6587;&#x7684;&#x8BF4;&#x660E;&#x6587;&#x6863;&#xFF1A;https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise---&#x8BD1;&#x8005;&#x6CE8;&#xFF09;"><code>Promise</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch" title="catch()&#xA0;&#x65B9;&#x6CD5;&#x53EA;&#x5904;&#x7406; Promise &#x5931;&#x8D25;&#x65F6;&#x7684;&#x60C5;&#x51B5;&#xFF0C;&#x5B83;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#xA0;Promise&#x3002;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x884C;&#x4E3A;&#x4E0E;&#x8C03;&#x7528;&#xA0;Promise.prototype.then(undefined, onRejected) &#x76F8;&#x540C;&#x3002;"><code>Promise.prototype.catch()</code></a></li>
</ul>
                  
                
              