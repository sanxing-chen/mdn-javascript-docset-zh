
                
                  
                    <p></p><section class="Quick_links" id="Quick_Links"><!-- --></section><p></p>

<h2 id="Summary" name="Summary">&#x6982;&#x8FF0;</h2>

<p><code style="font-style: normal; line-height: 19.0909080505371px;"><strong>name</strong></code><span style="line-height: 19.0909080505371px;">&#xA0;</span>&#x5C5E;&#x6027;&#x8868;&#x793A;error&#x7C7B;&#x578B;&#x7684;&#x540D;&#x79F0;.&#x521D;&#x59CB;&#x503C;&#x4E3A;&quot;Error&quot;.</p>

<h2 id="Description" name="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x9ED8;&#x8BA4;&#x60C5;&#x51B5;&#x4E0B;,<span style="line-height: 19.0909080505371px;"><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error" title="&#x521B;&#x5EFA;&#x4E00;&#x4E2A;error&#x5BF9;&#x8C61;&#x3002;&#x5F53;&#x53D1;&#x751F;&#x8FD0;&#x884C;&#x65F6;&#x5F02;&#x5E38;&#x65F6;,&#x5176;&#x5B9E;&#x4F8B;&#x4F1A;&#x88AB;&#x629B;&#x51FA;.Error&#x5BF9;&#x8C61;&#x53EF;&#x4F5C;&#x4E3A;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x5F02;&#x5E38;&#x7684;&#x57FA;&#x5BF9;&#x8C61;.&#x4E0B;&#x9762;&#x662F;&#x5173;&#x4E8E;&#x6807;&#x51C6;&#x5185;&#x7F6E;error&#x7C7B;&#x578B;&#x7684;&#x8BF4;&#x660E;."><code>Error</code></a></span>&#x5BF9;&#x8C61;&#x7684;<code>name</code>&#x5C5E;&#x6027;&#x503C;&#x4E3A;&quot;Error&quot;.<code>name&#x5C5E;&#x6027;&#x548C;</code><span style="line-height: 19.0909080505371px;"><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/message" title="message &#x5C5E;&#x6027;&#x662F;&#x6709;&#x5173;&#x9519;&#x8BEF;&#x4FE1;&#x606F;&#xFF0C;&#x4EBA;&#x7C7B;&#x6613;&#x8BFB;&#x7684;&#xFF08;human-readable&#xFF09;&#x63CF;&#x8FF0;&#x3002;"><code>message</code></a></span>&#x5C5E;&#x6027;&#x4E00;&#x8D77;,&#x901A;&#x8FC7;&#x8C03;&#x7528;<span style="line-height: 19.0909080505371px;"><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/toString" title="toString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x9519;&#x8BEF;&#x5BF9;&#x8C61;&#xFF08;Error object&#xFF09;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x3002;"><code>Error.prototype.toString()</code></a></span>&#x65B9;&#x6CD5;,&#x4F1A;&#x4F5C;&#x4E3A;&#x6700;&#x540E;&#x5F02;&#x5E38;&#x4FE1;&#x606F;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;.</p>

<h2 id="Examples" name="Examples">&#x793A;&#x4F8B;</h2>

<h3 id="Example:_Throwing_a_custom_error" name="Example:_Throwing_a_custom_error">&#x4F8B;&#x5B50;: &#x629B;&#x51FA;&#x4E00;&#x4E2A;&#x81EA;&#x5B9A;&#x4E49;&#x9519;&#x8BEF;</h3>

<pre class="brush:js">var e = new Error(&quot;Malformed input&quot;); // e.name&#x9ED8;&#x8BA4;&#x662F;&quot;Error&quot;

e.name = &quot;ParseError&quot;;                // &#x4FEE;&#x6539;&#x4E4B;&#x540E;,e.toString()&#x4F1A;&#x6210;&#x4E3A;&#x4E0B;&#x9762;&#x8FD9;&#x6837;&#x7684;&#x5B57;&#x7B26;&#x4E32;
throw e;                              // &quot;ParseError: Malformed input&quot;
</pre>

<h2 id=".E8.A7.84.E8.8C.83" style="margin-bottom: 20px; line-height: 30px; font-size: 2.14285714285714rem;">&#x89C4;&#x8303;</h2>

<table class="standard-table" style="line-height: 19.0909080505371px;">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition.</td>
   <td>Standard</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a class="external" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.11.4.2" hreflang="en" lang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Error.prototype.name</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a class="external" href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-error.prototype.name" hreflang="en" lang="en">ECMAScript 6 (ECMA-262)<br><small lang="zh-CN">Error.prototype.name</small></a></td>
   <td><span class="spec-RC">Release Candidate</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id=".E6.B5.8F.E8.A7.88.E5.99.A8.E5.85.BC.E5.AE.B9.E6.80.A7" style="margin-bottom: 20px; line-height: 30px; font-size: 2.14285714285714rem;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<div style="line-height: 19.0909080505371px;"><div class="htab"> 
    <a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a> 
    <ul> 
        <li class="selected"><a>Desktop</a></li> 
        <li><a>Mobile</a></li> 
    </ul> 
</div></div>

<div id="compat-desktop" style="line-height: 19.0909080505371px;">
<table class="compat-table" style="border-color: transparent;">
 <tbody>
  <tr>
   <th style="line-height: 16px;">Feature</th>
   <th style="line-height: 16px;">Chrome</th>
   <th style="line-height: 16px;">Firefox (Gecko)</th>
   <th style="line-height: 16px;">Internet Explorer</th>
   <th style="line-height: 16px;">Opera</th>
   <th style="line-height: 16px;">Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<div id="compat-mobile" style="line-height: 19.0909080505371px;">
<table class="compat-table" style="border-color: transparent;">
 <tbody>
  <tr>
   <th style="line-height: 16px;">Feature</th>
   <th style="line-height: 16px;">Android</th>
   <th style="line-height: 16px;">Chrome for Android</th>
   <th style="line-height: 16px;">Firefox Mobile (Gecko)</th>
   <th style="line-height: 16px;">IE Mobile</th>
   <th style="line-height: 16px;">Opera Mobile</th>
   <th style="line-height: 16px;">Safari Mobile</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also" name="See_also" style="margin-bottom: 20px; line-height: 30px; font-size: 2.14285714285714rem;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul style="line-height: 19.0909080505371px;">
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/message" title="message &#x5C5E;&#x6027;&#x662F;&#x6709;&#x5173;&#x9519;&#x8BEF;&#x4FE1;&#x606F;&#xFF0C;&#x4EBA;&#x7C7B;&#x6613;&#x8BFB;&#x7684;&#xFF08;human-readable&#xFF09;&#x63CF;&#x8FF0;&#x3002;"><code>Error.prototype.message</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/toString" title="toString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x9519;&#x8BEF;&#x5BF9;&#x8C61;&#xFF08;Error object&#xFF09;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x3002;"><code>Error.prototype.toString()</code></a></li>
</ul>
                  
                
              