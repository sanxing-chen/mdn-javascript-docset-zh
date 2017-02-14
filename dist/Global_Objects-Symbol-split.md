
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>Symbol.split</strong></code>&#xA0;&#x6307;&#x5411;&#xA0;&#x4E00;&#x4E2A;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x7684;&#x7D22;&#x5F15;&#x5904;&#x5206;&#x5272;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x65B9;&#x6CD5;&#x3002;&#xA0;&#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x901A;&#x8FC7; <a title="split()&#xA0;&#x65B9;&#x6CD5;&#x901A;&#x8FC7;&#x628A;&#x5B57;&#x7B26;&#x4E32;&#x5206;&#x5272;&#x6210;&#x5B50;&#x5B57;&#x7B26;&#x4E32;&#x6765;&#x628A;&#x4E00;&#x4E2A;&#xA0;String &#x5BF9;&#x8C61;&#x5206;&#x5272;&#x6210;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x6570;&#x7EC4;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split"><code>String.prototype.split()</code></a> &#x8C03;&#x7528;&#x3002;</p>

<p>&#x8BE6;&#x60C5;&#x8BF7;&#x53C2;&#x9605;<a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@split" class="new"><code>RegExp.prototype[@@split]()</code></a> &#x548C;<a title="split()&#xA0;&#x65B9;&#x6CD5;&#x901A;&#x8FC7;&#x628A;&#x5B57;&#x7B26;&#x4E32;&#x5206;&#x5272;&#x6210;&#x5B50;&#x5B57;&#x7B26;&#x4E32;&#x6765;&#x628A;&#x4E00;&#x4E2A;&#xA0;String &#x5BF9;&#x8C61;&#x5206;&#x5272;&#x6210;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x6570;&#x7EC4;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split"><code>String.prototype.split()</code></a>.</p>

<div><table class="standard-table"> 
  <thead> 
    <tr> 
      <th colspan="2" class="header"><code>Symbol.split</code> &#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x7279;&#x6027;&#xFF1A;</th> 
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

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<p>[Symbol.split]&#x6307;&#x5411;&#x2018;aba&#x2019;.split(/a/)</p>

<pre class="brush: js">/a/[Symbol.split](&apos;aba&apos;,3)</pre>

<p>&quot;dayinlove&quot;.split(exp)&#x8C03;&#x7528;[Symbol.split](str)&#x5904;&#x7406;&#xFF0C;&#x5E76;&#x628A;&#x5B9E;&#x53C2;&quot;dayinlove&quot;&#x4F20;&#x7ED9;&#x5F62;&#x53C2;str</p>

<pre class="brush: js">var exp =  {
        pat:&apos;in&apos;,
        [Symbol.split](str) {
          return str.split(this.pat);
          }
    }

    &quot;dayinlove&quot;.split(exp); 
//[&quot;day&quot;, &quot;love&quot;]</pre>

<h2 id="&#x6280;&#x672F;&#x6807;&#x51C6;">&#x6280;&#x672F;&#x6807;&#x51C6;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x6587;&#x6863;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x5907;&#x6CE8;</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-symbol.split" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Symbol.split</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-symbol.split" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Symbol.split</small></a></td>
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
   <td>50</td>
   <td><a title="Released on 2016-09-13." href="/en-US/Firefox/Releases/49">49</a> (49)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
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
   <td>49.0 (49)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x53C2;&#x9605;">&#x53C2;&#x9605;</h2>

<ul>
 <li><a title="Symbol.match&#xA0;&#x6307;&#x5B9A;&#x4E86;&#x5339;&#x914D;&#x7684;&#x662F;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x800C;&#x4E0D;&#x662F;&#x5B57;&#x7B26;&#x4E32;&#x3002;String.prototype.match() &#x65B9;&#x6CD5;&#x4F1A;&#x8C03;&#x7528;&#x6B64;&#x51FD;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match"><code>Symbol.match</code></a></li>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace" class="new"><code>Symbol.replace</code></a></li>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/search" class="new"><code>Symbol.search</code></a></li>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@split" class="new"><code>RegExp.prototype[@@split]()</code></a></li>
</ul>
                  
                
              