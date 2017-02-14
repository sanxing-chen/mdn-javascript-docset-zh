
                
                  
                    <p></p><section class="Quick_links" id="Quick_Links"><!-- --></section><p></p>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p><strong><code>getDay()</code></strong> &#x65B9;&#x6CD5;&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5177;&#x4F53;&#x65E5;&#x671F;&#x4E2D;&#x4E00;&#x5468;&#x7684;&#x7B2C;&#x51E0;&#x5929;&#xFF0C;0 &#x8868;&#x793A;&#x661F;&#x671F;&#x5929;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre style="margin-bottom: 0px; padding: 1em; border-left-width: 6px; border-left-style: solid; font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; font-size: 14px; text-shadow: none; direction: ltr; white-space: normal; background-color: rgba(212, 221, 228, 0.498039);" class="syntaxbox  language-html"><code style="font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; color: inherit; text-shadow: none; direction: ltr;" class="language-html">dateObj.getDay()</code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<p>&#x65E0;</p>

<h3 name="Description" id="Description">&#x8FD4;&#x56DE;&#x503C;</h3>

<p><code>getDay()&#xA0;</code>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6574;&#x6570;&#x503C;&#xFF1A; 0 &#x4EE3;&#x8868;&#x661F;&#x671F;&#x65E5;&#xFF0C; 1 &#x4EE3;&#x8868;&#x661F;&#x671F;&#x4E00;&#xFF0C;2 &#x4EE3;&#x8868;&#x661F;&#x671F;&#x4E8C;&#xFF0C; &#x4F9D;&#x6B21;&#x7C7B;&#x63A8;&#x3002;</p>

<h2 name="Examples" id="Examples">&#x4F8B;&#x5B50;</h2>

<h3 name="Example:_Using_getDay" id="Example:_Using_getDay">&#x4F8B;&#x5B50;&#xFF1A;&#x4F7F;&#x7528;<code>getDay</code>&#x65B9;&#x6CD5;</h3>

<p>&#x4E0B;&#x9762;&#x7B2C;&#x4E8C;&#x6761;&#x8BED;&#x53E5;&#xFF0C;&#x57FA;&#x4E8E;&#x65E5;&#x671F;&#x5BF9;&#x8C61; <code>Xmas95</code> &#x7684;&#x503C;&#xFF0C;&#x628A; 1 &#x8D4B;&#x503C;&#x7ED9; <code>weekday</code>&#x3002;&#x4E5F;&#x5C31;&#x662F;&#x8BF4;1995&#x5E74;12&#x6708;25&#x65E5;&#x662F;&#x661F;&#x671F;&#x4E00;&#x3002;</p>

<pre style="padding: 1em 0px 1em 30px; border-left-width: 6px; border-left-style: solid; font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; font-size: 14px; text-shadow: none; direction: ltr; white-space: normal; background-color: rgba(234, 239, 242, 0.247059);" class="brush:js  language-js"><code style="font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; color: inherit; text-shadow: none; direction: ltr; white-space: pre;" class="language-js"><span style="color: rgb(0, 119, 170);" class="token keyword">var</span> Xmas95 <span style="color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);" class="token operator">=</span> <span style="color: rgb(0, 119, 170);" class="token keyword">new</span> <span class="token class-name">Date</span><span style="color: rgb(153, 153, 153);" class="token punctuation">(</span><span style="color: rgb(102, 153, 0);" class="token string">&quot;December 25, 1995 23:15:00&quot;</span><span style="color: rgb(153, 153, 153);" class="token punctuation">)</span><span style="color: rgb(153, 153, 153);" class="token punctuation">;</span>
<span style="color: rgb(0, 119, 170);" class="token keyword">var</span> weekday <span style="color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);" class="token operator">=</span> Xmas95<span style="color: rgb(153, 153, 153);" class="token punctuation">.</span><span class="token function">getDay<span style="color: rgb(153, 153, 153);" class="token punctuation">(</span></span><span style="color: rgb(153, 153, 153);" class="token punctuation">)</span><span style="color: rgb(153, 153, 153);" class="token punctuation">;</span>

<span class="token function">alert<span style="color: rgb(153, 153, 153);" class="token punctuation">(</span></span>weekday<span style="color: rgb(153, 153, 153);" class="token punctuation">)</span><span style="color: rgb(153, 153, 153);" class="token punctuation">;</span><span style="display: inherit; color: rgb(112, 128, 144);" class="token comment"> // 1</span></code></pre>

<h2 style="margin-bottom: 20px; line-height: 30px;" id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x7248;&#x672C;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x89E3;</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition. Implemented in JavaScript 1.0</td>
   <td>Standard</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5.16" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Date.prototype.getDay</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.getday" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Date.prototype.getDay</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 style="margin-bottom: 20px; line-height: 30px;" id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
   <th style="line-height: 16px;">Feature</th>
   <th style="line-height: 16px;">Chrome</th>
   <th style="line-height: 16px;">Firefox (Gecko)</th>
   <th style="line-height: 16px;">Internet Explorer</th>
   <th style="line-height: 16px;">Opera</th>
   <th style="line-height: 16px;">Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<div id="compat-mobile">
<table class="compat-table">
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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 style="margin-bottom: 20px; line-height: 30px;" name="See_Also" id="See_Also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="getUTCDate() &#x65B9;&#x6CD5;&#x4EE5;&#x4E16;&#x754C;&#x65F6;&#x4E3A;&#x6807;&#x51C6;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x4E3A;&#x4E00;&#x4E2A;&#x6708;&#x4E2D;&#x7684;&#x7B2C;&#x51E0;&#x5929;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDate"><code>Date.prototype.getUTCDate()</code></a></li>
 <li><a title="getUTCDay() &#x65B9;&#x6CD5;&#x4EE5;&#x4E16;&#x754C;&#x65F6;&#x4E3A;&#x6807;&#x51C6;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x4E3A;&#x4E00;&#x661F;&#x671F;&#x4E2D;&#x7684;&#x7B2C;&#x51E0;&#x5929;&#xFF0C;&#x5176;&#x4E2D; 0 &#x4EE3;&#x8868;&#x661F;&#x671F;&#x5929;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay"><code>Date.prototype.getUTCDay()</code></a></li>
 <li><a title="setDate() &#x65B9;&#x6CD5;&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x6765;&#x6307;&#x5B9A;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x5929;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate"><code>Date.prototype.setDate()</code></a></li>
</ul>
                  
                
              