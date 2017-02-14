
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section> <div class="overheadIndicator" style="background: #9CF49C;"> 
    <p><strong>&#x8BE5;&#x65B0;&#x7279;&#x6027;&#x5C5E;&#x4E8E; ECMAScript 2015&#xFF08;ES6&#xFF09;&#x89C4;&#x8303;&#xFF0C;&#x5728;&#x4F7F;&#x7528;&#x65F6;&#x8BF7;&#x6CE8;&#x610F;&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;&#x3002;</strong></p> 
</div></div>

<h2 name="Summary" style="line-height: 30px;" id="Summary">&#x6982;&#x8FF0;</h2>

<p><strong>catch()</strong>&#xA0;&#x65B9;&#x6CD5;<span style="font-family: Consolas,Monaco,&apos;Andale Mono&apos;,monospace;">&#x53EA;&#x5904;&#x7406; Promise &#x5931;&#x8D25;&#x65F6;&#x7684;&#x60C5;&#x51B5;&#xFF0C;&#x5B83;</span>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#xA0;<code>Promise&#x3002;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x884C;&#x4E3A;&#x4E0E;&#x8C03;&#x7528;&#xA0;</code><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then" title="then()&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;Promise&#x3002;&#x5B83;&#x6709;&#x4E24;&#x4E2A;&#x53C2;&#x6570;&#xFF0C;&#x5206;&#x522B;&#x4E3A;Promise&#x5728; success &#x548C; failure &#x60C5;&#x51B5;&#x4E0B;&#x7684;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x3002;"><code>Promise.prototype.then(undefined, onRejected)</code></a> &#x76F8;&#x540C;&#x3002;</p>

<h2 name="Syntax" style="line-height: 30px;" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox" style="font-size: 14px;"><var>p.catch(onRejected)</var>;

p.catch(function(reason) {
   // &#x5931;&#x8D25;
});
</pre>

<h3 id="&#x53C2;&#x6570;" style="line-height: 24px;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><strong>onRejected</strong></dt>
 <dd>&#x5F53; <code>Promise &#x5931;&#x8D25;&#x65F6;&#xFF0C;&#x8C03;&#x7528;</code>&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Function" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Function</code></a> &#x3002;&#xA0;&#x8BE5;&#x51FD;&#x6570;&#x62E5;&#x6709;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#xFF1A;</dd>
 <dt><code>reason</code></dt>
 <dd>&#x5931;&#x8D25;&#x7684;&#x539F;&#x56E0;&#x3002;</dd>
 <dd>
 <p>&#xA0;&#x5982;&#x679C;&#xA0;<code>onRejected</code>&#xA0;&#x629B;&#x51FA;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#x6216;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5931;&#x8D25;&#x7684; Promise &#xFF0C;Promise &#xA0;&#x901A;&#x8FC7;&#xA0;<code>catch()</code>&#xA0;&#x8FD4;&#x56DE;&#x5931;&#x8D25;&#x7ED3;&#x679C;&#xFF1B;&#x5426;&#x5219;&#xFF0C;&#x5B83;&#x5C06;&#x663E;&#x793A;&#x4E3A;&#x6210;&#x529F;&#x3002;&#xA0;</p>
 </dd>
</dl>

<h2 name="Description" style="line-height: 30px;" id="Description">&#x63CF;&#x8FF0;</h2>

<p><code>catch &#x65B9;&#x6CD5;&#x4E3B;&#x8981;&#x5E94;&#x7528;&#x4E8E;&#xA0;promise &#x7EC4;&#x5408;&#x7684;&#x9519;&#x8BEF;&#x5904;&#x7406;&#x4E2D;&#x3002;</code></p>

<h2 id="&#x793A;&#x4F8B;" style="line-height: 30px;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;&#x94FE;&#x5F0F;&#x8BED;&#x53E5;&#x7684;_catch&#x65B9;&#x6CD5;" style="line-height: 24px;">&#x4F7F;&#x7528;&#x94FE;&#x5F0F;&#x8BED;&#x53E5;&#x7684;&#xA0;<code>catch</code>&#x65B9;&#x6CD5;</h3>

<pre class="brush: js"><code>var p1 = new Promise(function(resolve, reject) {
  resolve(&apos;Success&apos;);
});</code>

p1.then(function(value) {
  console.log(value); // &quot;Success!&quot;
  throw &apos;oh, no!&apos;;
}).catch(function(e) {
  console.log(e); // &quot;oh, no!&quot;
}).then(function(){
  console.log(&apos;after a catch the chain is restored&apos;);
}, function () {
  console.log(&apos;Not fired due to the catch&apos;);
});

// The following behaves the same as above
p1.then(function(value) {
  console.log(value); // &quot;Success!&quot;
  return Promise.reject(&apos;oh, no!&apos;);
}).catch(function(e) {
  console.log(e); // &quot;oh, no!&quot;
}).then(function(){
  console.log(&apos;after a catch the chain is restored&apos;);
}, function () {
  console.log(&apos;Not fired due to the catch&apos;);
});</pre>

<h3 id="&#x6355;&#x83B7;&#x629B;&#x51FA;&#x7684;&#x9519;&#x8BEF;" style="line-height: 30px;">&#x6355;&#x83B7;&#x629B;&#x51FA;&#x7684;&#x9519;&#x8BEF;</h3>

<pre class="brush: js"><code>// Throwing an error will call the catch method most of the time
var p1 = new Promise(function(resolve, reject) {
  throw &apos;Uh-oh!&apos;;
});

p1.catch(function(e) {
  console.log(e); // &quot;Uh-oh!&quot;
});

// Errors thrown inside asynchronous functions will act like uncaught errors
var p2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    throw &apos;Uncaught Exception!&apos;;
  }, 1000);
});

p2.catch(function(e) {
  console.log(e); // This is never called
});

// Errors thrown after resolve is called will be silenced
var p3 = new Promise(function(resolve, reject) {
  resolve();
  throw &apos;Silenced Exception!&apos;;
});

p3.catch(function(e) {
   console.log(e); // This is never called
});</code></pre>

<h2 id="&#x89C4;&#x8303;" style="line-height: 30px;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x5907;&#x6CE8;</th>
  </tr>
  <tr>
   <td><a href="https://github.com/domenic/promises-unwrapping" class="external">domenic/promises-unwrapping</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition in an ECMA standard.</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-promise.prototype.catch" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Promise.prototype.catch</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;" style="line-height: 30px;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<p></p><div class="htab"><a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a><ul><li class="selected"><a>Desktop</a></li><li><a>Mobile</a></li></ul></div><div id="compat-desktop"><table class="compat-table">  <thead>    <tr>      <th>Feature</th>      <th>Chrome</th>
      <th>Edge</th>
      <th>Firefox</th>
      <th>Internet Explorer</th>
      <th>Opera</th>
      <th>Safari</th>
      <th>Servo</th>
    </tr>  </thead><tbody><tr><td>Basic Support</td><td>32.0</td><td><span style="color: #888;">(Yes)</span></td><td>29.0</td><td><span style="color: #f00;">No support</span></td><td>19</td><td>7.1</td><td><span style="color: #f00;">No support</span></td></tr></tbody></table></div><div id="compat-mobile"><table class="compat-table">  <thead>    <tr>      <th>Feature</th>      <th>Android</th>
      <th>Chrome for Android</th>
      <th>Edge Mobile</th>
      <th>Firefox for Android</th>
      <th>IE Mobile</th>
      <th>Opera Mobile</th>
      <th>Safari Mobile</th>
    </tr>  </thead><tbody><tr><td>Basic Support</td><td>4.4.4</td><td>32.0</td><td><span style="color: #888;">(Yes)</span></td><td>29</td><td><span style="color: #f00;">No support</span></td><td><span style="color: #888;">(Yes)</span></td><td>8.0</td></tr></tbody></table></div><p></p>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;" style="line-height: 30px;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="&#x6240;&#x8C13;Promise&#xFF0C;&#x7B80;&#x5355;&#x8BF4;&#x5C31;&#x662F;&#x4E00;&#x4E2A;&#x5BB9;&#x5668;&#xFF0C;&#x91CC;&#x9762;&#x4FDD;&#x5B58;&#x7740;&#x67D0;&#x4E2A;&#x672A;&#x6765;&#x624D;&#x4F1A;&#x7ED3;&#x675F;&#x7684;&#x4E8B;&#x4EF6;&#xFF08;&#x901A;&#x5E38;&#x662F;&#x4E00;&#x4E2A;&#x5F02;&#x6B65;&#x64CD;&#x4F5C;&#xFF09;&#x7684;&#x7ED3;&#x679C;&#x3002;&#xFF08;&#x8FD9;&#x91CC;&#x7684;&#x7FFB;&#x8BD1;&#x6E90;&#x81EA;ECMAScript 2015&#x5173;&#x4E8E;Promise&#x7684;&#x89E3;&#x91CA;&#xFF0C;&#x6CA1;&#x6709;&#x539F;&#x6587;&#x7FFB;&#x8BD1;MDN&#x7684;&#x539F;&#x8BDD;&#xFF0C;&#x5982;&#x679C;&#x60A8;&#x6709;&#x7591;&#x95EE;&#xFF0C;&#x53EF;&#x4EE5;&#x53C2;&#x770B;&#x82F1;&#x6587;&#x7684;&#x8BF4;&#x660E;&#x6587;&#x6863;&#xFF1A;https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise---&#x8BD1;&#x8005;&#x6CE8;&#xFF09;"><code>Promise</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then" title="then()&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;Promise&#x3002;&#x5B83;&#x6709;&#x4E24;&#x4E2A;&#x53C2;&#x6570;&#xFF0C;&#x5206;&#x522B;&#x4E3A;Promise&#x5728; success &#x548C; failure &#x60C5;&#x51B5;&#x4E0B;&#x7684;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x3002;"><code>Promise.prototype.then()</code></a></li>
</ul>
                  
                
              