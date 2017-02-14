
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section> <div class="overheadIndicator" style="background: #9CF49C;"> 
    <p><strong>&#x8BE5;&#x65B0;&#x7279;&#x6027;&#x5C5E;&#x4E8E; ECMAScript 2015&#xFF08;ES6&#xFF09;&#x89C4;&#x8303;&#xFF0C;&#x5728;&#x4F7F;&#x7528;&#x65F6;&#x8BF7;&#x6CE8;&#x610F;&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;&#x3002;</strong></p> 
</div></div>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p><code><strong>Promise.reject(reason)</strong></code>&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7528;reason&#x62D2;&#x7EDD;&#x7684;Promise&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><var>Promise.reject(reason)</var>;</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt>reason</dt>
 <dd><code>Promise</code>&#x88AB;&#x62D2;&#x7EDD;&#x7684;&#x539F;&#x56E0;&#x3002;</dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p><code><font face="Open Sans, sans-serif">&#x9759;&#x6001;&#x51FD;&#x6570;</font>Promise.reject&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x88AB;&#x62D2;&#x7EDD;&#x7684;Promise&#x3002;&#x4F7F;&#x7528;&#x662F;</code><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error" title="&#x901A;&#x8FC7;Error&#x7684;&#x6784;&#x9020;&#x5668;&#x53EF;&#x4EE5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#x5BF9;&#x8C61;&#x3002;&#x5F53;&#x8FD0;&#x884C;&#x65F6;&#x9519;&#x8BEF;&#x4EA7;&#x751F;&#x65F6;&#xFF0C;Error&#x7684;&#x5B9E;&#x4F8B;&#x5BF9;&#x8C61;&#x4F1A;&#x88AB;&#x629B;&#x51FA;&#x3002;Error&#x5BF9;&#x8C61;&#x53EF;&#x7528;&#x4E8E;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#x5F02;&#x5E38;&#x7684;&#x57FA;&#x7840;&#x5BF9;&#x8C61;&#x3002;&#x4E0B;&#x9762;&#x5217;&#x51FA;&#x4E86;&#x5404;&#x79CD;&#x5185;&#x5EFA;&#x7684;&#x6807;&#x51C6;&#x9519;&#x8BEF;&#x7C7B;&#x578B;&#x3002;"><code>Error</code></a>&#x5B9E;&#x4F8B;&#x7684;<span style="font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace;">reason</span><code>&#x5BF9;&#x8C03;&#x8BD5;&#x548C;&#x9009;&#x62E9;&#x6027;&#x9519;&#x8BEF;&#x6355;&#x6349;&#x5F88;&#x6709;&#x5E2E;&#x52A9;</code>&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;&#x9759;&#x6001;Promise.reject&#x65B9;&#x6CD5;">&#x4F7F;&#x7528;&#x9759;&#x6001;<code>Promise.reject</code>&#x65B9;&#x6CD5;</h3>

<pre class="brush: js">Promise.reject(&quot;Testing static reject&quot;).then(function(reason) {
  // &#x672A;&#x88AB;&#x8C03;&#x7528;
}, function(reason) {
  console.log(reason); // &quot;&#x6D4B;&#x8BD5;&#x9759;&#x6001;&#x62D2;&#x7EDD;&quot;
});

Promise.reject(new Error(&quot;fail&quot;)).then(function(error) {
  // &#x672A;&#x88AB;&#x8C03;&#x7528;
}, function(error) {
  console.log(error); // &#x5806;&#x6808;&#x8DDF;&#x8E2A;
});</pre>

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
   <td>&#x8349;&#x7A3F;</td>
   <td>&#x6807;&#x51C6;&#x5316;&#x5DE5;&#x4F5C;&#x5728;&#x8FD9;&#x91CC;&#x8FDB;&#x884C;&#x4E2D;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-promise.reject" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Promise.reject</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>ECMA&#x89C4;&#x8303;&#x7684;&#x9996;&#x6B21;&#x5B9A;&#x4E49;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<h2 id="Desktop_Mobile"><span style="font-size: 14px; font-weight: normal; line-height: 1.5;"><div class="htab"> 
    <a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a> 
    <ul> 
        <li class="selected"><a>Desktop</a></li> 
        <li><a>Mobile</a></li> 
    </ul> 
</div></span></h2>

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
   <td><a href="/en-US/Firefox/Releases/24" title="Released on 2013-09-17.">24.0</a> (24.0) as <code>Future</code><br>
    <a href="/en-US/Firefox/Releases/25" title="Released on 2013-10-29.">25.0</a> (25.0) as <code>Promise</code> behind a flag[1]<br>
    <a href="/en-US/Firefox/Releases/29" title="Released on 2014-04-29.">29.0</a> (29.0) by default</td>
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

<p>[1] Gecko 24<span style="font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace;">&#x5B9E;&#x9A8C;&#x6027;&#x5730;&#x5B9E;&#x65BD;&#x4E86;</span><code style="font-style: normal;">Promise&#x7C7B;&#xFF0C;&#x5B83;</code>&#x6700;&#x521D;&#x88AB;&#x547D;&#x540D;&#x4E3A;<code style="font-style: normal;">Future&#xFF0C;</code>&#x5728;Gecko 25&#x88AB;&#x91CD;&#x65B0;&#x547D;&#x540D;&#x4E3A;&#x73B0;&#x5728;&#x7684;&#x540D;&#x5B57;&#xFF0C;&#xA0;&#x4F46;&#x5728;<code style="font-style: normal;">dom.promise.enabled&#x8BBE;&#x7F6E;&#x4E2D;&#x88AB;&#x9ED8;&#x8BA4;&#x7981;&#x7528;&#x3002;</code>&#xA0;<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=918806" class="external-icon external">Bug 918806</a>&#xA0;Gecko 29&#x5F00;&#x59CB;&#x9ED8;&#x8BA4;&#x542F;&#x7528;Promise&#x3002;</p>

<h2 id="&#x53C2;&#x89C1;">&#x53C2;&#x89C1;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="&#x6240;&#x8C13;Promise&#xFF0C;&#x7B80;&#x5355;&#x8BF4;&#x5C31;&#x662F;&#x4E00;&#x4E2A;&#x5BB9;&#x5668;&#xFF0C;&#x91CC;&#x9762;&#x4FDD;&#x5B58;&#x7740;&#x67D0;&#x4E2A;&#x672A;&#x6765;&#x624D;&#x4F1A;&#x7ED3;&#x675F;&#x7684;&#x4E8B;&#x4EF6;&#xFF08;&#x901A;&#x5E38;&#x662F;&#x4E00;&#x4E2A;&#x5F02;&#x6B65;&#x64CD;&#x4F5C;&#xFF09;&#x7684;&#x7ED3;&#x679C;&#x3002;&#xFF08;&#x8FD9;&#x91CC;&#x7684;&#x7FFB;&#x8BD1;&#x6E90;&#x81EA;ECMAScript 2015&#x5173;&#x4E8E;Promise&#x7684;&#x89E3;&#x91CA;&#xFF0C;&#x6CA1;&#x6709;&#x539F;&#x6587;&#x7FFB;&#x8BD1;MDN&#x7684;&#x539F;&#x8BDD;&#xFF0C;&#x5982;&#x679C;&#x60A8;&#x6709;&#x7591;&#x95EE;&#xFF0C;&#x53EF;&#x4EE5;&#x53C2;&#x770B;&#x82F1;&#x6587;&#x7684;&#x8BF4;&#x660E;&#x6587;&#x6863;&#xFF1A;https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise---&#x8BD1;&#x8005;&#x6CE8;&#xFF09;"><code>Promise</code></a></li>
 <li><a href="https://github.com/petkaantonov/bluebird#error-handling" class="external">&#x4F7F;&#x7528;BlueBird Promise&#x5E93;&#x8FDB;&#x884C;&#x9009;&#x62E9;&#x6027;&#x9519;&#x8BEF;&#x6355;&#x6349;</a></li>
</ul>
                  
                
              