
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div style="background: #9CF49C;" class="overheadIndicator">
    <p><strong>&#x8BE5;&#x65B0;&#x7279;&#x6027;&#x5C5E;&#x4E8E; ECMAScript 2015&#xFF08;ES6&#xFF09;&#x89C4;&#x8303;&#xFF0C;&#x5728;&#x4F7F;&#x7528;&#x65F6;&#x8BF7;&#x6CE8;&#x610F;&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;&#x3002;</strong></p>
</div></div>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p><code><strong>Promise.race(iterable)&#xA0;</strong>&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A; promise&#xFF0C;&#x5728;&#x53EF;&#x8FED;&#x4EE3;&#x7684;&#xA0;</code>resolves &#x6216;&#xA0;rejects&#xA0;&#x4E2D;&#xA0;promises&#xA0;&#x6709;&#x4E00;&#x4E2A;&#x5B8C;&#x6210;&#x6216;&#x5931;&#x8D25;&#xFF0C;&#x5C06;&#x663E;&#x793A;&#x5176;&#x503C;&#x6216;&#x539F;&#x56E0;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><var>Promise.race(iterable)</var>;</pre>

<h3 id="&#x53C2;&#x6570;"><strong>&#x53C2;&#x6570;</strong></h3>

<dl>
 <dt>iterable</dt>
 <dd>&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#xFF0C;&#x4F8B;&#x5982; <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Array"><code>Array</code></a>&#x3002;&#x8BE6;&#x60C5;&#x53EF;&#x89C1;&#xA0;<a href="/en-US/docs/Web/JavaScript/Guide/iterable">iterable</a>&#x3002;</dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p><code>race</code>&#xA0;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#xA0;<code>Promise&#xFF0C;&#x5B83;&#x5C06;&#x4E0E;&#x7B2C;&#x4E00;&#x4E2A;&#x4F20;&#x9012;&#x7684; promise &#x76F8;&#x540C;&#x7684;&#x5B8C;&#x6210;&#x65B9;&#x5F0F;&#x88AB;&#x5B8C;&#x6210;&#x3002;&#x5B83;&#x53EF;&#x4EE5;&#x662F;&#x5B8C;&#x6210;&#xFF08;</code>&#xA0;resolves<code>&#xFF09;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x662F;&#x5931;&#x8D25;&#xFF08;</code>rejects<code>&#xFF09;&#xFF0C;&#x8FD9;&#x8981;&#x53D6;&#x51B3;&#x4E8E;&#x7B2C;&#x4E00;&#x4E2A;&#x5B8C;&#x6210;&#x7684;&#x65B9;&#x5F0F;&#x662F;&#x4E24;&#x4E2A;&#x4E2D;&#x7684;&#x54EA;&#x4E2A;&#x3002;</code></p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;_Promise.race_&#x2013;_setTimeout_&#x7684;&#x793A;&#x4F8B;"><code><font face="Open Sans, sans-serif">&#x4F7F;&#x7528;&#xA0;</font>Promise.race</code> &#x2013; &#xA0;<code>setTimeout &#x7684;&#x793A;&#x4F8B;</code></h3>

<pre class="brush: js">var p1 = new Promise(function(resolve, reject) { 
    setTimeout(resolve, 500, &quot;one&quot;); 
});
var p2 = new Promise(function(resolve, reject) { 
    setTimeout(resolve, 100, &quot;two&quot;); 
});

Promise.race([p1, p2]).then(function(value) {
  console.log(value); // &quot;two&quot;
  // &#x4E24;&#x4E2A;&#x90FD;&#x5B8C;&#x6210;&#xFF0C;&#x4F46; p2 &#x66F4;&#x5FEB;
});

var p3 = new Promise(function(resolve, reject) { 
    setTimeout(resolve, 100, &quot;three&quot;);
});
var p4 = new Promise(function(resolve, reject) { 
    setTimeout(reject, 500, &quot;four&quot;); 
});

Promise.race([p3, p4]).then(function(value) {
  console.log(value); // &quot;three&quot;
  // p3 &#x66F4;&#x5FEB;&#xFF0C;&#x6240;&#x4EE5;&#x5B83;&#x5B8C;&#x6210;&#x4E86; &#xA0; &#xA0; &#xA0; &#xA0; &#xA0; &#xA0; &#xA0;
}, function(reason) {
  // &#x672A;&#x88AB;&#x8C03;&#x7528;
});

var p5 = new Promise(function(resolve, reject) { 
    setTimeout(resolve, 500, &quot;five&quot;); 
});
var p6 = new Promise(function(resolve, reject) { 
    setTimeout(reject, 100, &quot;six&quot;);
});

Promise.race([p5, p6]).then(function(value) {
  // &#x672A;&#x88AB;&#x8C03;&#x7528;&#xA0; &#xA0; &#xA0; &#xA0; &#xA0; &#xA0; &#xA0;
}, function(reason) {
  console.log(reason); // &quot;six&quot;
  // p6 &#x66F4;&#x5FEB;&#xFF0C;&#x6240;&#x4EE5;&#x5B83;&#x5931;&#x8D25;&#x4E86;
});
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

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
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-promise.race" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Promise.race</small></a></td>
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
   <td>32</td>
   <td><a title="Released on 2014-04-29." href="/en-US/Firefox/Releases/29">29.0</a> (29.0)</td>
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
   <td>iOS 8</td>
   <td>32</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="Promise&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x4E8E;&#x5F02;&#x6B65;&#x8BA1;&#x7B97;. &#x4E00;&#x4E2A;Promise&#x5BF9;&#x8C61;&#x4EE3;&#x8868;&#x4E00;&#x4E2A;&#x503C;, &#x8BE5;&#x503C;&#x53EF;&#x4EE5;&#x5728;&#x5F53;&#x524D;&#x6216;&#x672A;&#x6765;&#x53EF;&#x7528;, &#x6216;&#x6C38;&#x8FDC;&#x4E0D;&#x53EF;&#x7528;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>Promise</code></a></li>
</ul>
                  
                
              