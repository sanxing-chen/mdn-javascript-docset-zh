
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><strong><code>flags</code></strong>&#x5C5E;&#x6027;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x7531;&#x5F53;&#x524D;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5BF9;&#x8C61;&#x7684;&#x6807;&#x5FD7;&#x7EC4;&#x6210;&#x3002;</p>

<div><table class="standard-table">
  <thead>
    <tr>
      <th class="header" colspan="2"><code>RegExp.prototype.flags</code> &#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x7279;&#x6027;&#xFF1A;</th>
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

<p><code>flags</code>&#x5C5E;&#x6027;&#x4E2D;&#x7684;&#x6807;&#x5FD7;&#x4EE5;&#x5B57;&#x5178;&#x5E8F;&#x6392;&#x5E8F;&#xFF08;&#x4ECE;&#x5DE6;&#x5230;&#x53F3;&#xFF0C;&#x5373;<code>&quot;gimuy&quot;</code>&#xFF09;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;flags">&#x4F7F;&#x7528;<code>flags</code></h3>

<pre class="brush: js">/foo/ig.flags;   // &quot;gi&quot;
/bar/myu.flags;  // &quot;muy&quot;
</pre>

<h2 id="Polyfill">Polyfill</h2>

<pre class="brush: js">if (RegExp.prototype.flags === undefined) {
  Object.defineProperty(RegExp.prototype, &apos;flags&apos;, {
    configurable: true,
    get: function() {
      return this.toString().match(/[gimuy]*$/)[0];
    }
  });
}
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
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-get-regexp.prototype.flags" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">RegExp.prototype.flags</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;&#x3002;</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">RegExp.prototype.flags</small></a></td>
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
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><a href="/en-US/Firefox/Releases/37" title="Released on 2015-04-07.">37</a> (37)</td>
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
   <td>37.0 (37)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x53E6;&#x89C1;">&#x53E6;&#x89C1;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source" title="source &#x5C5E;&#x6027;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x503C;&#x4E3A;&#x5F53;&#x524D;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5BF9;&#x8C61;&#x7684;&#x6A21;&#x5F0F;&#x6587;&#x672C;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x4E0D;&#x4F1A;&#x5305;&#x542B;&#x6B63;&#x5219;&#x5B57;&#x9762;&#x91CF;&#x4E24;&#x8FB9;&#x7684;&#x659C;&#x6760;&#x4EE5;&#x53CA;&#x4EFB;&#x4F55;&#x7684;&#x6807;&#x5FD7;&#x5B57;&#x7B26;&#x3002;"><code>RegExp.prototype.source</code></a></li>
</ul>
                  
                
              