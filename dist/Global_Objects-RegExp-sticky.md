
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><strong><code>sticky</code></strong>&#xA0;&#x5C5E;&#x6027;&#x53CD;&#x6620;&#x4E86;&#x641C;&#x7D22;&#x662F;&#x5426;&#x5177;&#x6709;&#x7C98;&#x6027;&#xFF08;&#xA0;&#x4EC5;&#x4ECE;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x7684; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex" title="lastIndex&#xA0;&#x662F;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x7684;&#x4E00;&#x4E2A;&#x53EF;&#x8BFB;&#x53EF;&#x5199;&#x7684;&#x6574;&#x578B;&#x5C5E;&#x6027;&#xFF0C;&#x7528;&#x6765;&#x6307;&#x5B9A;&#x4E0B;&#x4E00;&#x6B21;&#x5339;&#x914D;&#x7684;&#x8D77;&#x59CB;&#x7D22;&#x5F15;&#x3002;"><code>lastIndex</code></a> &#x5C5E;&#x6027;&#x8868;&#x793A;&#x7684;&#x7D22;&#x5F15;&#x5904;&#x641C;&#x7D22; &#xFF09;&#x3002;<code>sticky</code>&#xA0;&#x662F;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5BF9;&#x8C61;&#x7684;&#x53EA;&#x8BFB;&#x5C5E;&#x6027;&#x3002;</p>

<div><table class="standard-table">
  <thead>
    <tr>
      <th class="header" colspan="2"><code>RegExp.prototype.sticky</code> &#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x7279;&#x6027;&#xFF1A;</th>
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
      <td>true</td>
    </tr>
  </tbody>
</table></div>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>sticky</code>&#xA0;&#x7684;&#x503C;&#x662F;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Boolean" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Boolean</code></a> &#xFF0C;&#x5E76;&#x5728;&#x201C;<code>y</code>&#x201D;&#x6807;&#x5FD7;&#x4F7F;&#x7528;&#x65F6;&#x4E3A;&#x771F;; &#x5426;&#x5219;&#x4E3A;&#x5047;&#x3002;&quot;<code>y</code>&quot; &#x6807;&#x5FD7;&#x6307;&#x793A;&#xFF0C;&#x4EC5;&#x4ECE;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x7684;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex" title="lastIndex&#xA0;&#x662F;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x7684;&#x4E00;&#x4E2A;&#x53EF;&#x8BFB;&#x53EF;&#x5199;&#x7684;&#x6574;&#x578B;&#x5C5E;&#x6027;&#xFF0C;&#x7528;&#x6765;&#x6307;&#x5B9A;&#x4E0B;&#x4E00;&#x6B21;&#x5339;&#x914D;&#x7684;&#x8D77;&#x59CB;&#x7D22;&#x5F15;&#x3002;"><code>lastIndex</code></a> &#x5C5E;&#x6027;&#x8868;&#x793A;&#x7684;&#x7D22;&#x5F15;&#x5904;&#x4E3A;&#x76EE;&#x6807;&#x5B57;&#x7B26;&#x4E32;&#x5339;&#x914D;&#xFF08;&#x5E76;&#x4E14;&#x4E0D;&#x4F1A;&#x5C1D;&#x8BD5;&#x4ECE;&#x540E;&#x7EED;&#x7D22;&#x5F15;&#x5339;&#x914D;&#xFF09;&#x3002;</p>

<p>&#x4F60;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x66F4;&#x6539;&#x8FD9;&#x4E2A;&#x5C5E;&#x6027;&#xFF0C;&#x5B83;&#x662F;&#x53EA;&#x8BFB;&#x7684;&#x3002;</p>

<h2 id="&#x4F8B;&#x5B50;">&#x4F8B;&#x5B50;</h2>

<h3 id="&#x4F7F;&#x7528;&#x5E26;_sticky_&#x6807;&#x5FD7;&#x7684;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;">&#x4F7F;&#x7528;&#x5E26; sticky &#x6807;&#x5FD7;&#x7684;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;</h3>

<pre class="brush: js">var str = &apos;#foo#&apos;;
var regex = /foo/y;

regex.lastIndex = 1;
regex.test(str); // true &#xFF08;&#x8BD1;&#x6CE8;&#xFF1A;&#x6B64;&#x4F8B;&#x4EC5;&#x5F53; lastIndex = 1 &#x65F6;&#x5339;&#x914D;&#x6210;&#x529F;&#xFF0C;&#x8FD9;&#x5C31;&#x662F; sticky &#x7684;&#x4F5C;&#x7528;&#xFF09;
regex.lastIndex = 5;
regex.test(str); // false &#xFF08;lastIndex &#x88AB; sticky &#x6807;&#x5FD7;&#x8003;&#x8651;&#x5230;&#xFF0C;&#x4ECE;&#x800C;&#x5BFC;&#x81F4;&#x5339;&#x914D;&#x5931;&#x8D25;&#xFF09;
regex.lastIndex; // 0 &#xFF08;&#x5339;&#x914D;&#x5931;&#x8D25;&#x540E;&#x91CD;&#x7F6E;&#xFF09;
</pre>

<h3 id="&#x951A;&#x5B9A;&#x7684;_sticky_&#x6807;&#x5FD7;">&#x951A;&#x5B9A;&#x7684; sticky &#x6807;&#x5FD7;</h3>

<p>&#x706B;&#x72D0;&#x7684; SpiderMonkey &#x5F15;&#x64CE;&#x7684;&#x51E0;&#x4E2A;&#x7248;&#x672C;&#x6709;&#x4E00;&#x4E2A;&#xA0;<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=773687" class="external">bug</a>&#xFF0C;&#x5904;&#x7406;&#xA0;<code>^</code>&#xA0;&#x65AD;&#x8A00;&#x548C; sticky &#x6807;&#x5FD7;&#x65F6;&#xFF0C;&#x4F1A;&#x5141;&#x8BB8;&#x4F7F;&#x7528;&#x4E86; sticky &#x6807;&#x5FD7;&#x7684;&#x8868;&#x8FBE;&#x5F0F;&#x4ECE;&#xA0;<code>^</code> &#x65AD;&#x8A00;&#x5F00;&#x59CB;&#x5339;&#x914D;&#xFF0C;&#x8FD9;&#x662F;&#x4E0D;&#x5E94;&#x8BE5;&#x7684;&#x3002;&#x8FD9;&#x4E2A; bug &#x662F;&#x5728; Firefox 3.6 &#x4E4B;&#x540E;&#x7684;&#x67D0;&#x4E2A;&#x7248;&#x672C;&#x5F15;&#x5165;&#x7684;&#xFF08;which had the sticky flag but not the bug&#xFF09;&#x5E76;&#x4E8E;2015&#x5E74;&#x4FEE;&#x590D;&#x3002; &#x53EF;&#x80FD;&#x6B63;&#x56E0;&#x4E3A;&#x8FD9;&#x4E2A; bug&#xFF0C; ES2015 &#x89C4;&#x8303;&#xA0;<a href="http://www.ecma-international.org/ecma-262/7.0/index.html#sec-assertion" class="external">&#x7279;&#x522B;&#x6307;&#x51FA;</a>&#xFF1A;</p>

<blockquote>
<p>When the <code>y</code> flag is used with a pattern, ^ always matches only at the beginning of the input, or (if <code>multiline</code> is <code>true</code>) at the beginning of a line.</p>
</blockquote>

<p>&#x6B63;&#x786E;&#x884C;&#x4E3A;&#x7684;&#x793A;&#x4F8B;&#xFF1A;</p>

<pre class="brush: js">var regex = /^foo/y;
regex.lastIndex = 2;
regex.test(&quot;..foo&quot;);   // false - &#x7D22;&#x5F15;2&#x4E0D;&#x662F;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x5F00;&#x59CB;

var regex2 = /^foo/my;
regex2.lastIndex = 2;
regex2.test(&quot;..foo&quot;);  // false - &#x7D22;&#x5F15;2&#x4E0D;&#x662F;&#x5B57;&#x7B26;&#x4E32;&#x6216;&#x884C;&#x7684;&#x5F00;&#x59CB;
regex2.lastIndex = 2;
regex2.test(&quot;.\nfoo&quot;); // true - &#x7D22;&#x5F15;2&#x662F;&#x884C;&#x7684;&#x5F00;&#x59CB;
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
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-get-regexp.prototype.sticky" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">RegExp.prototype.sticky</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-get-regexp.prototype.sticky" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">RegExp.prototype.sticky</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
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
   <th>Edge</th>
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><a href="/en-US/Firefox/Releases/3" title="Released on 2008-06-17.">3.0</a> (1.9)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
  <tr>
   <td>Prototype accessor property</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><a href="/en-US/Firefox/Releases/38" title="Released on 2015-05-19.">38</a> (38)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
  <tr>
   <td>Anchored sticky(y) flag behavior per ES2015</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><a href="/en-US/Firefox/Releases/44" title="Released on 2016-01-26.">44</a> (44)</td>
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
   <td>1.0 (1.9)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
  <tr>
   <td>Prototype accessor property</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>38.0 (38)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
  <tr>
   <td>Anchored sticky(y) flag behavior per ES2015</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>44.0 (44)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex" title="lastIndex&#xA0;&#x662F;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x7684;&#x4E00;&#x4E2A;&#x53EF;&#x8BFB;&#x53EF;&#x5199;&#x7684;&#x6574;&#x578B;&#x5C5E;&#x6027;&#xFF0C;&#x7528;&#x6765;&#x6307;&#x5B9A;&#x4E0B;&#x4E00;&#x6B21;&#x5339;&#x914D;&#x7684;&#x8D77;&#x59CB;&#x7D22;&#x5F15;&#x3002;"><code>RegExp.lastIndex</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global" title="global &#x5C5E;&#x6027;&#x8868;&#x660E;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x662F;&#x5426;&#x4F7F;&#x7528;&#x4E86; &quot;g&quot; &#x6807;&#x5FD7;&#x3002;global &#x662F;&#x4E00;&#x4E2A;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5B9E;&#x4F8B;&#x7684;&#x53EA;&#x8BFB;&#x5C5E;&#x6027;&#x3002;"><code>RegExp.prototype.global</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase" title="ignoreCase &#x5C5E;&#x6027;&#x8868;&#x660E;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x662F;&#x5426;&#x4F7F;&#x7528;&#x4E86; &quot;i&quot; &#x6807;&#x5FD7;&#x3002;ignoreCase&#xA0;&#x662F;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5B9E;&#x4F8B;&#x7684;&#x53EA;&#x8BFB;&#x5C5E;&#x6027;&#x3002;"><code>RegExp.prototype.ignoreCase</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline" title="multiline &#x5C5E;&#x6027;&#x8868;&#x660E;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x662F;&#x5426;&#x4F7F;&#x7528;&#x4E86; &quot;m&quot; &#x6807;&#x5FD7;&#x3002;multiline&#xA0;&#x662F;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5B9E;&#x4F8B;&#x7684;&#x4E00;&#x4E2A;&#x53EA;&#x8BFB;&#x5C5E;&#x6027;&#x3002;"><code>RegExp.prototype.multiline</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source" title="source &#x5C5E;&#x6027;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x503C;&#x4E3A;&#x5F53;&#x524D;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5BF9;&#x8C61;&#x7684;&#x6A21;&#x5F0F;&#x6587;&#x672C;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x4E0D;&#x4F1A;&#x5305;&#x542B;&#x6B63;&#x5219;&#x5B57;&#x9762;&#x91CF;&#x4E24;&#x8FB9;&#x7684;&#x659C;&#x6760;&#x4EE5;&#x53CA;&#x4EFB;&#x4F55;&#x7684;&#x6807;&#x5FD7;&#x5B57;&#x7B26;&#x3002;"><code>RegExp.prototype.source</code></a></li>
</ul>
                  
                
              