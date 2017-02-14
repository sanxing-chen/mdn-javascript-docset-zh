
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p><code><strong>Symbol.match&#xA0;</strong></code>&#x6307;&#x5B9A;&#x4E86;&#x5339;&#x914D;&#x7684;&#x662F;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x800C;&#x4E0D;&#x662F;&#x5B57;&#x7B26;&#x4E32;&#x3002;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match" title="&#x5F53;&#x5B57;&#x7B26;&#x4E32;&#x5339;&#x914D;&#x5230;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#xFF08;regular expression&#xFF09;&#x65F6;&#xFF0C;match() &#x65B9;&#x6CD5;&#x4F1A;&#x63D0;&#x53D6;&#x5339;&#x914D;&#x9879;&#x3002;"><code>String.prototype.match()</code></a> &#x65B9;&#x6CD5;&#x4F1A;&#x8C03;&#x7528;&#x6B64;&#x51FD;&#x6570;&#x3002;</p>

<div><table class="standard-table"> 
  <thead> 
    <tr> 
      <th class="header" colspan="2"><code>Symbol.match</code> &#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x7279;&#x6027;&#xFF1A;</th> 
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

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x6B64;&#x51FD;&#x6570;&#x8FD8;&#x7528;&#x4E8E;&#x6807;&#x8BC6;&#x5BF9;&#x8C61;&#x662F;&#x5426;&#x5177;&#x6709;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x7684;&#x884C;&#x4E3A;&#x3002;&#x6BD4;&#x5982;&#xFF0C;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith" title="startsWith()&#x65B9;&#x6CD5;&#x7528;&#x6765;&#x5224;&#x65AD;&#x5F53;&#x524D;&#x5B57;&#x7B26;&#x4E32;&#x662F;&#x5426;&#x662F;&#x4EE5;&#x53E6;&#x5916;&#x4E00;&#x4E2A;&#x7ED9;&#x5B9A;&#x7684;&#x5B50;&#x5B57;&#x7B26;&#x4E32;&#x201C;&#x5F00;&#x5934;&#x201D;&#x7684;&#xFF0C;&#x6839;&#x636E;&#x5224;&#x65AD;&#x7ED3;&#x679C;&#x8FD4;&#x56DE; true &#x6216; false&#x3002;"><code>String.prototype.startsWith()</code></a>&#xFF0C;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith" title="endsWith()&#x65B9;&#x6CD5;&#x7528;&#x6765;&#x5224;&#x65AD;&#x5F53;&#x524D;&#x5B57;&#x7B26;&#x4E32;&#x662F;&#x5426;&#x662F;&#x4EE5;&#x53E6;&#x5916;&#x4E00;&#x4E2A;&#x7ED9;&#x5B9A;&#x7684;&#x5B50;&#x5B57;&#x7B26;&#x4E32;&#x201C;&#x7ED3;&#x5C3E;&#x201D;&#x7684;&#xFF0C;&#x6839;&#x636E;&#x5224;&#x65AD;&#x7ED3;&#x679C;&#x8FD4;&#x56DE; true &#x6216; false&#x3002;"><code>String.prototype.endsWith()</code></a> &#x548C; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/includes" title="includes() &#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x662F;&#x5426;&#x88AB;&#x5305;&#x542B;&#x5728;&#x53E6;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#xFF0C;&#x5982;&#x679C;&#x5305;&#x542B;&#xFF0C;&#x5C31;&#x8FD4;&#x56DE;true&#xFF1B;&#x5426;&#x5219;&#xFF0C;&#x8FD4;&#x56DE;false&#x3002;"><code>String.prototype.includes()</code></a> &#x8FD9;&#x4E9B;&#x65B9;&#x6CD5;&#x4F1A;&#x68C0;&#x67E5;&#x5176;&#x7B2C;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#x662F;&#x5426;&#x662F;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#xFF0C;&#x662F;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5C31;&#x629B;&#x51FA;&#x4E00;&#x4E2A;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;"><code>TypeError</code></a>&#x3002;&#x73B0;&#x5728;&#xFF0C;&#x5982;&#x679C;&#xA0;<code>match</code> symbol &#x8BBE;&#x7F6E;&#x4E3A;&#xA0;<code>false</code>&#xFF08;&#x6216;&#x8005;&#x4E00;&#x4E2A; <a href="/en-US/docs/Glossary/Falsy" class="glossaryLink" title="&#x5047;&#x503C;: A falsy&#xA0;value is a&#xA0;value that&#xA0;translates to false when evaluated in a Boolean context.">&#x5047;&#x503C;</a>&#xFF09;&#xFF0C;&#x5C31;&#x8868;&#x793A;&#x8BE5;&#x5BF9;&#x8C61;&#x4E0D;&#x6253;&#x7B97;&#x7528;&#x4F5C;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5BF9;&#x8C61;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x7981;&#x6B62;&#x8868;&#x8FBE;&#x5F0F;&#x68C0;&#x67E5;">&#x7981;&#x6B62;&#x8868;&#x8FBE;&#x5F0F;&#x68C0;&#x67E5;</h3>

<p>&#x4E0B;&#x9762;&#x4EE3;&#x7801;&#x4F1A;&#x629B;&#x51FA;&#x4E00;&#x4E2A; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;"><code>TypeError</code></a>&#xFF1A;</p>

<pre class="brush: js">&quot;/bar/&quot;.startsWith(/bar/); 

// Throws TypeError, &#x56E0;&#x4E3A; /bar/ &#x662F;&#x4E00;&#x4E2A;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;
// &#x4E14; Symbol.match &#x6CA1;&#x6709;&#x4FEE;&#x6539;&#x3002;</pre>

<p>&#x4F46;&#x662F;&#xFF0C;&#x5982;&#x679C;&#x4F60;&#x5C06;&#xA0;<code>Symbol.match</code> &#x7F6E;&#x4E3A;&#xA0;<code>false&#xFF0C;&#x4F7F;&#x7528; match &#x5C5E;&#x6027;&#x7684;</code>&#x8868;&#x8FBE;&#x5F0F;&#x68C0;&#x67E5;&#x4F1A;&#x8BA4;&#x4E3A;&#x8BE5;&#x8C61;&#x4E0D;&#x662F;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5BF9;&#x8C61;&#x3002;<code>startsWith</code> &#x548C; <code>endsWith</code>&#xA0;&#x65B9;&#x6CD5;&#x5C06;&#x4E0D;&#x4F1A;&#x629B;&#x51FA;&#xA0;<code>TypeError</code>&#x3002;</p>

<pre class="brush: js">var re = /foo/;
re[Symbol.match] = false;
&quot;/foo/&quot;.startsWith(re); // true
&quot;/baz/&quot;.endsWith(re);   // false
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-symbol.match" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Symbol.match</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-symbol.match" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Symbol.match</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x652F;&#x6301;">&#x6D4F;&#x89C8;&#x5668;&#x652F;&#x6301;</h2>

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
   <td><a href="/en-US/Firefox/Releases/40" title="Released on 2015-08-11.">40</a> (40)</td>
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
   <td>40.0 (40)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Symbol.replace</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/search" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Symbol.search</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split" title="Symbol.split&#xA0;&#x6307;&#x5411;&#xA0; &#x4E00;&#x4E2A;&#x6B63;&#x5219;&#x5206;&#x5272;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x65B9;&#x6CD5;&#x3002;&#xA0;&#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x901A;&#x8FC7; String.prototype.split() &#x8C03;&#x7528;&#x3002;"><code>Symbol.split</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@match" title="The [@@match]() method retrieves the matches when matching a string against a regular expression."><code>RegExp.prototype[@@match]()</code></a></li>
</ul>
                  
                
              