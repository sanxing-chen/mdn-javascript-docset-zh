
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section> <div class="overheadIndicator nonStandard nonStandardHeader"> 
      <p><strong><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> &#x975E;&#x6807;&#x51C6;</strong><br> 
      &#x8BE5;&#x7279;&#x6027;&#x662F;&#x975E;&#x6807;&#x51C6;&#x7684;&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#xFF01;</p> 
      </div></div>

<p><strong><code>toSource()</code></strong>&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x4EE3;&#x8868;&#x5BF9;&#x8C61;&#x7684;&#x6E90;&#x4EE3;&#x7801;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>String.toSource()
<var>str</var>.toSource()
</code></pre>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>toSource()</code> &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4EE5;&#x4E0B;&#x503C;&#xFF1A;</p>

<p>&#x5BF9;&#x4E8E;&#x5185;&#x5EFA;&#x5BF9;&#x8C61; <a href="/zh-CN/docs/Web/JavaScript/Reference/String" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>String</code></a> , <code>toSource()&#x8FD4;&#x56DE;&#x4EE5;&#x4E0B;&#x503C;&#x8BF4;&#x660E;&#x6E90;&#x7801;&#x4E0D;&#x53EF;&#x7528;&#xFF1A;</code></p>

<pre class="brush: js">function String() {
    [native code]
}
</pre>

<p>&#x5BF9;&#x4E8E;&#x5B9E;&#x4F8B;<a href="/zh-CN/docs/Web/JavaScript/Reference/String" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>String</code></a> &#x6216;&#x8005;&#x5B57;&#x7B26;&#x4E32;, <code>toSource()</code> &#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x6E90;&#x7801;.</p>

<p>&#x8FD9;&#x79CD;&#x65B9;&#x6CD5;&#x901A;&#x5E38;&#x5728;&#x5185;&#x90E8;&#x88AB;JavaScript&#x8C03;&#x7528;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x660E;&#x786E;&#x7684;&#x4EE3;&#x7801;&#x3002;.</p>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<p>&#x4E0D;&#x5C5E;&#x4E8E;&#x4EFB;&#x4F55;&#x6807;&#x51C6;. &#x5728; JavaScript 1.3&#x5B9E;&#x73B0;&#x4E86;.</p>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x9002;&#x914D;">&#x6D4F;&#x89C8;&#x5668;&#x9002;&#x914D;</h2>

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
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
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
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x53C2;&#x89C1;">&#x53C2;&#x89C1;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource" title="&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x6E90;&#x4EE3;&#x7801;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;."><code>Object.prototype.toSource()</code></a></li>
</ul>
                  
                
              