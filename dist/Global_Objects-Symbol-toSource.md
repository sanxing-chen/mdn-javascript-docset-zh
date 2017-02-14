
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section> <div class="overheadIndicator nonStandard nonStandardHeader"> 
      <p><strong><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> &#x975E;&#x6807;&#x51C6;</strong><br> 
      &#x8BE5;&#x7279;&#x6027;&#x662F;&#x975E;&#x6807;&#x51C6;&#x7684;&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#xFF01;</p> 
      </div></div>

<p><code><strong>toSource()</strong></code> &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4EE3;&#x8868;&#x8BE5;&#x5BF9;&#x8C61;&#x6E90;&#x7801;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;</p>

<p>&#x8BE5;&#x65B9;&#x6CD5;&#x901A;&#x5E38;&#x7531;JavaScript&#x5185;&#x90E8;&#x8C03;&#x7528;&#x3002;</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><var>Symbol</var>.toSource()

var sym = Symbol()
sym.toSource()</pre>

<h2 id="Description">Description</h2>

<p><code>toSource</code>&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4EE5;&#x4E0B;&#x503C;&#xFF1A;</p>

<p>&#x5BF9;&#x4E8E;&#x5185;&#x5EFA;<code>Symbol&#x5BF9;&#x8C61;</code>, <code>toSource</code> &#x8FD4;&#x56DE;&#x4EE5;&#x4E0B;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8868;&#x660E;&#x6E90;&#x4EE3;&#x7801;&#x4E0D;&#x53EF;&#x89C1;&#xFF1A;</p>

<pre class="brush:js">&quot;function Symbol() {
   [native code]
}&quot;</pre>

<p>&#x5BF9;&#x4E8E;<code>Symbol&#x5B9E;&#x4F8B;</code>, <code>toSource</code>&#xA0;&#x8FD4;&#x56DE;&#x4EE3;&#x8868;&#x6E90;&#x7801;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;</p>

<pre class="brush: js">&quot;Symbol()&quot;</pre>

<h2 id="Specifications">Specifications</h2>

<p>&#x8FD8;&#x672A;&#x6210;&#x4E3A;&#x4EFB;&#x4F55;&#x6807;&#x51C6;&#x7684;&#x4E00;&#x90E8;&#x5206;</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><a href="/en-US/Firefox/Releases/36" title="Released on 2015-02-24.">36.0</a> (36.0)</td>
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
   <td>36.0 (36.0)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource" title="&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x6E90;&#x4EE3;&#x7801;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;."><code>Object.prototype.toSource()</code></a> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></li>
</ul>
                  
                
              