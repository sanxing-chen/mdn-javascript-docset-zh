
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><strong><code>toJSON()</code></strong> &#x65B9;&#x6CD5;&#x8FD4;&#x56DE; <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Date"><code>Date</code></a> &#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x5F62;&#x5F0F;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>dateObj</var>.toJSON()</code>
</pre>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Date"><code>Date</code></a> &#x5B9E;&#x4F8B;&#x5F15;&#x7528;&#x4E00;&#x4E2A;&#x5177;&#x4F53;&#x7684;&#x65F6;&#x95F4;&#x70B9;&#x3002; &#x8C03;&#x7528;&#xA0;<code>toJSON()</code> &#x8FD4;&#x56DE;&#x4E00;&#x4E2A; JSON &#x683C;&#x5F0F;&#x5B57;&#x7B26;&#x4E32;(&#x4F7F;&#x7528; <a title="toISOString()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A; ISO&#xFF08;ISO 8601 Extended Format&#xFF09;&#x683C;&#x5F0F;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF1A;&#xA0;YYYY-MM-DDTHH:mm:ss.sssZ&#x3002;&#x65F6;&#x533A;&#x603B;&#x662F;UTC&#xFF08;&#x534F;&#x8C03;&#x4E16;&#x754C;&#x65F6;&#xFF09;&#xFF0C;&#x52A0;&#x4E00;&#x4E2A;&#x540E;&#x7F00;&#x201C;Z&#x201D;&#x6807;&#x8BC6;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString"><code>toISOString()</code></a>)&#xFF0C;&#x8868;&#x793A;&#x8BE5;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x503C;&#x3002;&#x9ED8;&#x8BA4;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x5E38;&#x7528;&#x4E8E; <a title="JSON: The JavaScript Object Notation&#xA0;(JSON) is a data-interchange format.&#xA0; Although not a strict subset, JSON closely resembles a subset of JavaScript syntax. Though many programming languages support JSON, JSON is especially useful for JavaScript-based apps, including websites and browser extensions." href="/en-US/docs/Glossary/JSON" class="glossaryLink">JSON</a>&#x5E8F;&#x5217;&#x5316;<a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Date"><code>Date</code></a>&#x5BF9;&#x8C61;&#x3002;</p>

<h2 name="Example" id="Example">&#x6837;&#x4F8B;</h2>

<h3 name="Example:_Using_toJSON" id="Example:_Using_toJSON"><code>toJSON()</code> &#x6837;&#x4F8B;</h3>

<pre class="brush:js">var jsonDate = (new Date()).toJSON();
var backToDate = new Date(jsonDate);

console.log(&quot;Serialized date object: &quot; + jsonDate);
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x8BF4;&#x660E;</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5.44" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Date.prototype.toJSON</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x9996;&#x6B21;&#x5B9A;&#x4E49;&#xFF0C;&#x4E8E; JavaScript 1.8.5 &#x7248;&#x672C;&#x5B9E;&#x73B0;&#x3002;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.tojson" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Date.prototype.toJSON</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<div><div class="htab">
    <a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>
    <ul>
        <li class="selected"><a>Desktop</a></li>
        <li><a>Mobile</a></li>
    </ul>
</div></div>

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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>8</td>
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

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="toLocaleDateString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x8BE5;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x65E5;&#x671F;&#x90E8;&#x5206;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x683C;&#x5F0F;&#x56E0;&#x4E0D;&#x540C;&#x8BED;&#x8A00;&#x800C;&#x4E0D;&#x540C;&#x3002;&#x65B0;&#x589E;&#x7684;&#x53C2;&#x6570;&#xA0;locales&#xA0;&#x548C;&#xA0;options &#x4F7F;&#x7A0B;&#x5E8F;&#x80FD;&#x591F;&#x6307;&#x5B9A;&#x4F7F;&#x7528;&#x54EA;&#x79CD;&#x8BED;&#x8A00;&#x683C;&#x5F0F;&#x5316;&#x89C4;&#x5219;&#xFF0C;&#x5141;&#x8BB8;&#x5B9A;&#x5236;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x8868;&#x73B0;&#xFF08;behavior&#xFF09;&#x3002;&#x5728;&#x65E7;&#x7248;&#x672C;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#xFF0C;&#xA0;locales &#x548C; options &#x53C2;&#x6570;&#x88AB;&#x5FFD;&#x7565;&#xFF0C;&#x4F7F;&#x7528;&#x7684;&#x8BED;&#x8A00;&#x73AF;&#x5883;&#x548C;&#x8FD4;&#x56DE;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x683C;&#x5F0F;&#x662F;&#x5404;&#x81EA;&#x72EC;&#x7ACB;&#x5B9E;&#x73B0;&#x7684;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString"><code>Date.prototype.toLocaleDateString()</code></a></li>
 <li><a title="toTimeString()&#xA0;&#x65B9;&#x6CD5;&#x4EE5;&#x4EBA;&#x7C7B;&#x6613;&#x8BFB;&#x5F62;&#x5F0F;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x65F6;&#x95F4;&#x90E8;&#x5206;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x4EE5;&#x7F8E;&#x5F0F;&#x82F1;&#x8BED;&#x683C;&#x5F0F;&#x5316;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString"><code>Date.prototype.toTimeString()</code></a></li>
 <li><a title="toUTCString()&#xA0;&#x65B9;&#x6CD5;&#x628A;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x8F6C;&#x6362;&#x4E3A;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x4F7F;&#x7528;UTC&#x65F6;&#x533A;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString"><code>Date.prototype.toUTCString()</code></a></li>
</ul>
                  
                
              