
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><strong><code>includes() </code></strong><code>&#x65B9;&#x6CD5;&#x7528;&#x4E8E;</code>&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x662F;&#x5426;&#x5305;&#x542B;&#x5728;&#x53E6;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#xFF0C;&#x6839;&#x636E;&#x60C5;&#x51B5;&#x8FD4;&#x56DE;true&#x6216;false&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>str</var>.includes(<var>searchString</var>[,&#xA0;<var>position</var>])</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>searchString</code></dt>
 <dd>&#x8981;&#x5728;&#x6B64;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x641C;&#x7D22;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x3002;</dd>
 <dt><code>position</code></dt>
 <dd>&#x53EF;&#x9009;&#x3002;&#x4ECE;&#x5F53;&#x524D;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x54EA;&#x4E2A;&#x7D22;&#x5F15;&#x4F4D;&#x7F6E;&#x5F00;&#x59CB;&#x641C;&#x5BFB;&#x5B50;&#x5B57;&#x7B26;&#x4E32;&#xFF1B;&#x9ED8;&#x8BA4;&#x503C;&#x4E3A;0&#x3002;</dd>
 <dt>
 <h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>
 </dt>
 <dd>&#x5982;&#x679C;&#x5F53;&#x524D;&#x5B57;&#x7B26;&#x4E32;&#x5305;&#x542B;&#x88AB;&#x641C;&#x5BFB;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x5C31;&#x8FD4;&#x56DE;true&#xFF1B;&#x5426;&#x5219;&#xFF0C;&#x8FD4;&#x56DE;false&#x3002;</dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x5E2E;&#x4F60;&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x662F;&#x5426;&#x5305;&#x542B;&#x53E6;&#x5916;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x3002;</p>

<h3 id="&#x533A;&#x5206;&#x5927;&#x5C0F;&#x5199;">&#x533A;&#x5206;&#x5927;&#x5C0F;&#x5199;</h3>

<p><code>includes() &#x65B9;&#x6CD5;</code>&#x662F;&#x533A;&#x5206;&#x5927;&#x5C0F;&#x5199;&#x7684;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x4E0B;&#x9762;&#x7684;&#x8868;&#x8FBE;&#x5F0F;&#x4F1A;&#x8FD4;&#x56DE; <code>false</code> &#xFF1A;</p>

<pre><code>&apos;Blue Whale&apos;.includes(&apos;blue&apos;); // returns false</code></pre>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;_includes()">&#x4F7F;&#x7528; includes()</h3>

<pre><code>var str = &apos;To be, or not to be, that is the question.&apos;;

console.log(str.includes(&apos;To be&apos;));       // true
console.log(str.includes(&apos;question&apos;));    // true
console.log(str.includes(&apos;nonexistent&apos;)); // false
console.log(str.includes(&apos;To be&apos;, 1));    // false
console.log(str.includes(&apos;TO BE&apos;));       // false</code></pre>

<h2 id="&#x586B;&#x5145;">&#x586B;&#x5145;</h2>

<p>&#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x5DF2;&#x7ECF;&#x88AB;&#x52A0;&#x5165;&#x5230; ECMAScript 6 &#x6807;&#x51C6;&#x4E2D;&#xFF0C;&#x4F46;&#x672A;&#x5FC5;&#x5728;&#x6240;&#x6709;&#x7684; JavaScript &#x5B9E;&#x73B0;&#x4E2D;&#x90FD;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x3002;&#x7136;&#x800C;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x8F7B;&#x677E;&#x5730;polyfill&#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#xFF1A;</p>

<pre><code>if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    &apos;use strict&apos;;
    if (typeof start !== &apos;number&apos;) {
      start = 0;
    }
    
    if (start + search.length &gt; this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}</code></pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table>
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x8BF4;&#x660E;</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.includes" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">String.prototype.includes</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-string.prototype.includes" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">String.prototype.includes</small></a></td>
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

<table>
 <tbody>
  <tr>
   <th>&#x7279;&#x5F81;</th>
   <th>Chrome</th>
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>41</td>
   <td><a href="/en-US/Firefox/Releases/40" title="Released on 2015-08-11.">40</a> (40)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>9</td>
  </tr>
 </tbody>
</table>

<table>
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

<h2 id="String.prototype.contains()">String.prototype.contains()</h2>

<p>&#x5728; Firefox 18 - 39&#x4E2D;&#xFF0C;&#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x7684;&#x540D;&#x79F0;&#x53EB;<code>contains()</code>&#x3002;&#x7531;&#x4E8E;&#x4E0B;&#x9762;&#x7684;&#x7406;&#x7531;&#xFF0C;&#x5728;<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1102219" class="external" title="FIXED: Rename String.prototype.contains to String.prototype.includes">bug&#xA0;1102219</a>&#x4E2D;&#xFF0C;&#x5B83;&#x88AB;&#x91CD;&#x547D;&#x540D;&#x4E3A;<code>includes()</code>&#xA0;&#xFF1A;</p>

<p>&#x636E;&#x62A5;&#x9053;&#xFF0C;&#x5728;Firefox 17&#x4E0A;&#xFF0C;&#x4E00;&#x4E9B;&#x4F7F;&#x7528;<a href="http://mootools.net/" class="external">MooTools</a> 1.2&#x7684;&#x7F51;&#x7AD9;&#x4F1A;&#x5D29;&#x6E83;&#x6389;&#x3002;&#x8FD9;&#x4E2A;&#x7248;&#x672C;&#x7684;MooTools&#x4F1A;&#x68C0;&#x67E5;&#x51FD;&#x6570;<code>String.prototype.contains()&#x662F;&#x5426;&#x5B58;&#x5728;&#xFF0C;&#x5982;&#x679C;&#x4E0D;&#x5B58;&#x5728;&#x7684;&#x8BDD;&#xFF0C;MooTools&#x5C31;&#x6DFB;&#x52A0;&#x5B83;&#x81EA;&#x5DF1;&#x7684;&#x51FD;&#x6570;&#x3002;</code>&#xA0;&#x901A;&#x8FC7;&#x5728;Firefox 17&#x4E2D;&#x5F15;&#x5165;&#x8FD9;&#x4E2A;&#x51FD;&#x6570;&#xFF0C;&#x68C0;&#x67E5;&#x66F4;&#x6539;&#x7684;&#x884C;&#x4E3A;&#x5728;&#x4E00;&#x5B9A;&#x7A0B;&#x5EA6;&#x4E0A;&#x5BFC;&#x81F4;&#x4E86;&#x57FA;&#x4E8E;MooTools&#x7684;<code>String.prototype.contains()&#x51FD;&#x6570;&#x7684;&#x4EE3;&#x7801;&#x5B9E;&#x73B0;&#x4E2D;&#x65AD;&#x3002;&#x7ED3;&#x679C;&#x662F;&#xFF0C;&#x5F53;</code><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=789036#c32" class="external">MooTools&#x7684;&#x62D3;&#x5C55;</a><code>&#x5BFC;&#x81F4;</code><a href="http://mootools.net/blog/2013/02/19/mootools-1-2-6-released" class="external">MooTools 1.2.6</a>&#x7248;&#x672C;&#x7684;&#x53D1;&#x5E03;&#xFF0C;<code>&#x6B64;&#x5B9E;&#x73B0;&#x5728;</code>Firefox 17&#x4E2D;&#x4E0D;&#x53EF;&#x7528;&#x548C;<code>String.prototype.contains()</code>&#x5728;&#x968F;&#x540E;&#x4E00;&#x4E2A;&#x7248;&#x672C;Firefox 18&#x4E0A;&#x662F;&#x53EF;&#x7528;&#x7684;&#x3002;</p>

<p>MooTools 1.3&#x4F1A;&#x5F3A;&#x5236;&#x4F7F;&#x7528;&#x5B83;&#x81EA;&#x5DF1;&#x7248;&#x672C;&#x7684;&#x51FD;&#x6570;<code>String.prototype.contains()&#xFF0C;&#x56E0;&#x6B64;&#xFF0C;&#x4F9D;&#x8D56;&#x5B83;&#x7684;&#x7F51;&#x7AD9;&#x4E0D;&#x4F1A;&#x5D29;&#x6E83;&#x6389;&#x3002;&#x7136;&#x800C;&#xFF0C;&#x4F60;&#x5E94;&#x8BE5;&#x6CE8;&#x610F;&#x6B64;&#x65B9;&#x6CD5;&#x5728;</code><a href="http://mootools.net/core/docs/1.3.2/Types/String#String-method:-contains" class="external">MooTools 1.3 </a>&#x7B7E;&#x540D;&#x548C;ECMAScript 6 &#x7B7E;&#x540D;&#x4E2D;&#x7684;&#x4E0D;&#x540C;&#xFF08;&#x5728;&#x7B2C;&#x4E8C;&#x4E2A;&#x53C2;&#x6570;&#xFF09;&#x3002;&#x540E;&#x6765;&#xFF0C;<a href="https://github.com/mootools/mootools-core/blob/master/Docs/Types/String.md#note" class="external">&#x4E3A;&#x4E86;&#x4E0E;ES6&#x6807;&#x51C6;&#x4E00;&#x81F4;&#x5728;MooTools 1.5&#x7248;&#x672C;&#x53CA;&#x4EE5;&#x4E0A;&#x66F4;&#x6539;&#x4E86;&#x7B7E;&#x540D;</a>&#x3002;</p>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes" title="includes() &#x65B9;&#x6CD5;&#x7528;&#x6765;&#x5224;&#x65AD;&#x5F53;&#x524D;&#x6570;&#x7EC4;&#x662F;&#x5426;&#x5305;&#x542B;&#x67D0;&#x6307;&#x5B9A;&#x7684;&#x503C;&#xFF0C;&#x5982;&#x679C;&#x662F;&#xFF0C;&#x5219;&#x8FD4;&#x56DE; true&#xFF0C;&#x5426;&#x5219;&#x8FD4;&#x56DE; false&#x3002;"><code>Array.prototype.includes()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>TypedArray.prototype.includes()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf" title="indexOf()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x503C;&#x5728;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#x4E2D;&#x9996;&#x6B21;&#x51FA;&#x73B0;&#x7684;&#x4F4D;&#x7F6E;&#x3002;&#x4ECE;&#xA0;fromIndex&#xA0;&#x4F4D;&#x7F6E;&#x5F00;&#x59CB;&#x67E5;&#x627E;&#xFF0C;&#x5982;&#x679C;&#x4E0D;&#x5B58;&#x5728;&#xFF0C;&#x5219;&#x8FD4;&#x56DE; -1&#x3002;"><code>String.prototype.indexOf()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf" title="lastIndexOf()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x503C;&#x5728;&#x8C03;&#x7528;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x6700;&#x540E;&#x51FA;&#x73B0;&#x7684;&#x4F4D;&#x7F6E;&#xFF0C;&#x5982;&#x679C;&#x6CA1;&#x627E;&#x5230;&#x5219;&#x8FD4;&#x56DE;&#xA0;-1&#x3002;&#x4ECE;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x540E;&#x9762;&#x5411;&#x524D;&#x67E5;&#x627E;&#xFF0C;&#x4ECE; fromIndex &#x5904;&#x5F00;&#x59CB;&#x3002;"><code>String.prototype.lastIndexOf()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith" title="startsWith()&#x65B9;&#x6CD5;&#x7528;&#x6765;&#x5224;&#x65AD;&#x5F53;&#x524D;&#x5B57;&#x7B26;&#x4E32;&#x662F;&#x5426;&#x662F;&#x4EE5;&#x53E6;&#x5916;&#x4E00;&#x4E2A;&#x7ED9;&#x5B9A;&#x7684;&#x5B50;&#x5B57;&#x7B26;&#x4E32;&#x201C;&#x5F00;&#x5934;&#x201D;&#x7684;&#xFF0C;&#x6839;&#x636E;&#x5224;&#x65AD;&#x7ED3;&#x679C;&#x8FD4;&#x56DE; true &#x6216; false&#x3002;"><code>String.prototype.startsWith()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith" title="endsWith()&#x65B9;&#x6CD5;&#x7528;&#x6765;&#x5224;&#x65AD;&#x5F53;&#x524D;&#x5B57;&#x7B26;&#x4E32;&#x662F;&#x5426;&#x662F;&#x4EE5;&#x53E6;&#x5916;&#x4E00;&#x4E2A;&#x7ED9;&#x5B9A;&#x7684;&#x5B50;&#x5B57;&#x7B26;&#x4E32;&#x201C;&#x7ED3;&#x5C3E;&#x201D;&#x7684;&#xFF0C;&#x6839;&#x636E;&#x5224;&#x65AD;&#x7ED3;&#x679C;&#x8FD4;&#x56DE; true &#x6216; false&#x3002;"><code>String.prototype.endsWith()</code></a></li>
</ul>
                  
                
              