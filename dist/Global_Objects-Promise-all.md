
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="overheadIndicator" style="background: #9CF49C;">
    <p><strong>&#x8BE5;&#x65B0;&#x7279;&#x6027;&#x5C5E;&#x4E8E; ECMAScript 2015&#xFF08;ES6&#xFF09;&#x89C4;&#x8303;&#xFF0C;&#x5728;&#x4F7F;&#x7528;&#x65F6;&#x8BF7;&#x6CE8;&#x610F;&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;&#x3002;</strong></p>
</div></div>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p><code><strong>Promise.all(iterable)</strong></code>&#xA0;&#x65B9;&#x6CD5;&#x6307;&#x5F53;&#x6240;&#x6709;&#x5728;&#x53EF;&#x8FED;&#x4EE3;&#x53C2;&#x6570;&#x4E2D;&#x7684;&#xA0;promises &#x5DF2;&#x5B8C;&#x6210;&#xFF0C;&#x6216;&#x8005;&#x7B2C;&#x4E00;&#x4E2A;&#x4F20;&#x9012;&#x7684;&#xA0;promise&#xFF08;&#x6307; reject&#xFF09;&#x5931;&#x8D25;&#x65F6;&#xFF0C;&#x8FD4;&#x56DE;&#xA0;promise&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><var>Promise.all(iterable)</var>;</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt>iterable</dt>
 <dd>&#x4E00;&#x4E2A;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#xFF0C;&#x4F8B;&#x5982; <a href="/zh-CN/docs/Web/JavaScript/Reference/Array" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Array</code></a>&#x3002;&#x53C2;&#x89C1;&#xA0;<a href="/en-US/docs/Web/JavaScript/Guide/iterable">iterable</a>.</dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p><strong>Promise.all </strong>&#x662F;&#x5F53;&#x6240;&#x6709;&#x7ED9;&#x5B9A;&#x7684;&#x53EF;&#x8FED;&#x4EE3;&#x5B8C;&#x6210;&#x65F6;&#x6267;&#x884C; resolve&#xFF0C;&#x6216;&#x8005;&#x4EFB;&#x4F55;<strong>&#xA0;</strong>&#xA0;promises&#xA0;&#x5931;&#x8D25;&#x65F6;&#x6267;&#x884C; reject&#x3002;</p>

<p>&#x5982;&#x679C;&#x4F20;&#x9012;&#x4EFB;&#x4F55;&#x7684;&#xA0;promises rejects &#xFF0C;&#x6240;&#x6709;&#x7684;&#xA0;Promise &#x7684;&#x503C;&#x7ACB;&#x5373;&#x5931;&#x8D25;&#xFF0C;&#x4E22;&#x5F03;&#x6240;&#x6709;&#x7684;&#x5176;&#x4ED6;&#xA0;promises&#xFF0C;&#x5982;&#x679C;&#x5B83;&#x4EEC;&#x672A;&#xA0;resolved&#x3002;&#x5982;&#x679C;&#x4F20;&#x9012;&#x4EFB;&#x610F;&#x7684;&#x7A7A;&#x6570;&#x7EC4;&#xFF0C;&#x90A3;&#x4E48;&#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x5C06;&#x7ACB;&#x523B;&#x5B8C;&#x6210;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;_Promise.all"><strong>&#x4F7F;&#x7528; Promise.all</strong></h3>

<p>Promise.all &#x7B49;&#x5F85;&#x6240;&#x6709;&#x4EE3;&#x7801;&#x7684;&#x5B8C;&#x6210;&#xFF08;&#x6216;&#x7B2C;&#x4E00;&#x4E2A;&#x4EE3;&#x7801;&#x7684;&#x5931;&#x8D25;&#xFF09;&#x3002;</p>

<pre class="brush: js"><code>var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) =&gt; {
  setTimeout(resolve, 100, &quot;foo&quot;);
}); 

Promise.all([p1, p2, p3]).then(values =&gt; { 
  console.log(values); // [3, 1337, &quot;foo&quot;] 
});</code></pre>

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
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-promise.all" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Promise.all</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x4E8E;&#x5F02;&#x6B65;&#x8BA1;&#x7B97;. &#x4E00;&#x4E2A;Promise&#x5BF9;&#x8C61;&#x4EE3;&#x8868;&#x4E00;&#x4E2A;&#x503C;, &#x8BE5;&#x503C;&#x53EF;&#x4EE5;&#x5728;&#x5F53;&#x524D;&#x6216;&#x672A;&#x6765;&#x53EF;&#x7528;, &#x6216;&#x6C38;&#x8FDC;&#x4E0D;&#x53EF;&#x7528;."><code>Promise</code></a></li>
</ul>
                  
                
              