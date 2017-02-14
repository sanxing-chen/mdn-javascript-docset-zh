
                
                  
                    <p></p><section id="Quick_Links" class="Quick_links"><!-- --></section><p></p>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p>&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x4E3A;&#x4E00;&#x4E2A;&#x6708;&#x4E2D;&#x7684;&#x7B2C;&#x51E0;&#x5929;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox  language-html" style="margin-bottom: 0px; padding: 1em; border-left-width: 6px; border-left-style: solid; font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; font-size: 14px; text-shadow: none; direction: ltr; white-space: normal; background-color: rgba(212, 221, 228, 0.498039);"><code class="language-html" style="font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; color: inherit; text-shadow: none; direction: ltr;">dateObj.getDate()</code></pre>

<h2 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h2>

<p>&#x65E0;</p>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p><code>getDate()&#xA0;</code>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;1 &#x5230; 31&#x7684;&#x6574;&#x6570;&#x503C;&#x3002;</p>

<h2 name="Examples" id="Examples">&#x4F8B;&#x5B50;</h2>

<h3 name="Example:_Using_getDate" id="Example:_Using_getDate">&#x4F8B;&#x5B50;: &#x4F7F;&#x7528;getDate()<code>&#x65B9;&#x6CD5;</code></h3>

<p>&#x4E0B;&#x9762;&#x7B2C;&#x4E8C;&#x6761;&#x8BED;&#x53E5;&#x5C06;&#x503C;25&#x8D4B;&#x7ED9; day &#x53D8;&#x91CF;&#xFF0C;&#x8BE5;&#x503C;<span style="line-height: 1.5;">&#x57FA;&#x4E8E;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#xA0;</span><code style="font-style: normal; line-height: 1.5;">Xmax95</code><span style="line-height: 1.5;">&#x7684;&#x503C;&#x3002;</span></p>

<pre class="brush:js  language-js" style="padding: 1em 0px 1em 30px; border-left-width: 6px; border-left-style: solid; font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; font-size: 14px; text-shadow: none; direction: ltr; white-space: normal; background-color: rgba(234, 239, 242, 0.247059);"><code class="language-js" style="font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; color: inherit; text-shadow: none; direction: ltr; white-space: pre;"><span class="token keyword" style="color: rgb(0, 119, 170);">var</span> Xmas95 <span class="token operator" style="color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">=</span> <span class="token keyword" style="color: rgb(0, 119, 170);">new</span> <span class="token class-name">Date</span><span class="token punctuation" style="color: rgb(153, 153, 153);">(</span><span class="token string" style="color: rgb(102, 153, 0);">&quot;December 25, 1995 23:15:00&quot;</span><span class="token punctuation" style="color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="color: rgb(153, 153, 153);">;</span>
<span class="token keyword" style="color: rgb(0, 119, 170);">var</span> day <span class="token operator" style="color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">=</span> Xmas95<span class="token punctuation" style="color: rgb(153, 153, 153);">.</span><span class="token function">getDate<span class="token punctuation" style="color: rgb(153, 153, 153);">(</span></span><span class="token punctuation" style="color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="color: rgb(153, 153, 153);">;</span>

<span class="token function">alert<span class="token punctuation" style="color: rgb(153, 153, 153);">(</span></span>day<span class="token punctuation" style="color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="color: rgb(153, 153, 153);">;</span><span class="token comment" style="display: inherit; color: rgb(112, 128, 144);"> // 25</span></code></pre>

<h2 id="&#x89C4;&#x8303;" style="margin-bottom: 20px; line-height: 30px;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x7248;&#x672C;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x89E3;</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition. Implemented in JavaScript 1.1</td>
   <td>Standard</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5.14" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Date.prototype.getDate</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.getdate" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Date.prototype.getDate</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>
    <p>&#xA0;</p>
   </td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;" style="margin-bottom: 20px; line-height: 30px;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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

<h2 name="See_Also" style="margin-bottom: 20px; line-height: 30px;" id="See_Also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDate" title="getUTCDate() &#x65B9;&#x6CD5;&#x4EE5;&#x4E16;&#x754C;&#x65F6;&#x4E3A;&#x6807;&#x51C6;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x4E3A;&#x4E00;&#x4E2A;&#x6708;&#x4E2D;&#x7684;&#x7B2C;&#x51E0;&#x5929;"><code>Date.prototype.getUTCDate()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay" title="getUTCDay() &#x65B9;&#x6CD5;&#x4EE5;&#x4E16;&#x754C;&#x65F6;&#x4E3A;&#x6807;&#x51C6;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x4E3A;&#x4E00;&#x661F;&#x671F;&#x4E2D;&#x7684;&#x7B2C;&#x51E0;&#x5929;&#xFF0C;&#x5176;&#x4E2D; 0 &#x4EE3;&#x8868;&#x661F;&#x671F;&#x5929;&#x3002;"><code>Date.prototype.getUTCDay()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate" title="setDate() &#x65B9;&#x6CD5;&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x6765;&#x6307;&#x5B9A;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x5929;&#x6570;&#x3002;"><code>Date.prototype.setDate()</code></a></li>
</ul>
                  
                
              