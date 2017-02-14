
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section> <div class="overheadIndicator obsolete obsoleteHeader"><p><strong><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span> &#x5DF2;&#x5E9F;&#x5F03;</strong><br>This feature is obsolete. Although it may still work in some browsers, its use is discouraged since it could be removed at any time. Try to avoid using it.</p></div></div>

<p><strong><code>Object.getNotifer()</code></strong> &#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x521B;&#x5EFA;&#x53EF;&#x4EBA;&#x5DE5;&#x89E6;&#x53D1; change&#xA0;&#x4E8B;&#x4EF6;&#x7684;&#x5BF9;&#x8C61;&#xFF0C;&#x4F46;&#x8BE5;&#x65B9;&#x6CD5;&#x5728;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#x5DF2;&#x88AB;&#x5E9F;&#x5F03;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">Object.getNotifier(<em>obj</em>)</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>obj</code></dt>
 <dd>&#x83B7;&#x53D6;&#x901A;&#x77E5;&#x7684;&#x5BF9;&#x8C61;&#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x4E0E;&#x4F20;&#x5165;&#x5BF9;&#x8C61;&#x76F8;&#x5173;&#x8054;&#x7684;&#x901A;&#x77E5;&#x5BF9;&#x8C61;&#x3002;</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code><font face="Open Sans, Arial, sans-serif">&#x901A;&#x77E5;&#x5BF9;&#x8C61;&#x53EF;&#x89E6;&#x53D1;&#xA0;</font>Object.observe()&#xA0;&#x6240;&#x89C2;&#x5BDF;&#x5230;&#x7684;&#x4EBA;&#x5DE5;&#x53D8;&#x52A8;&#x3002;</code></p>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<p><a href="https://github.com/arv/ecmascript-object-observe" class="external">Strawman proposal specification.</a></p>

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
   <td>36 [1]</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>23</td>
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
   <td>36 [1]</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>23</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<p>[1] Deprecated in Chrome 49.</p>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/observe" title="Object.observe()&#xA0;&#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x5F02;&#x6B65;&#x5730;&#x76D1;&#x89C6;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x4FEE;&#x6539;&#x3002;&#x5F53;&#x5BF9;&#x8C61;&#x5C5E;&#x6027;&#x88AB;&#x4FEE;&#x6539;&#x65F6;&#xFF0C;&#x65B9;&#x6CD5;&#x7684;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x4F1A;&#x63D0;&#x4F9B;&#x4E00;&#x4E2A;&#x6709;&#x5E8F;&#x7684;&#x4FEE;&#x6539;&#x6D41;&#x3002;&#x7136;&#x800C;&#xFF0C;&#x8FD9;&#x4E2A;&#x63A5;&#x53E3;&#x5DF2;&#x7ECF;&#x88AB;&#x5E9F;&#x5F03;&#x5E76;&#x4ECE;&#x5404;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#x79FB;&#x9664;&#x3002;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x66F4;&#x901A;&#x7528;&#x7684;&#xA0;Proxy &#x5BF9;&#x8C61;&#x66FF;&#x4EE3;&#x3002;"><code>Object.observe()</code></a> <span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/unobserve" title="Object.unobserve()&#xA0;&#x662F;&#x7528;&#x6765;&#x79FB;&#x9664;&#x901A;&#x8FC7; Object.observe()&#x8BBE;&#x7F6E;&#x7684;&#x89C2;&#x5BDF;&#x8005;&#x7684;&#x65B9;&#x6CD5;&#x3002;"><code>Object.unobserve()</code></a> <span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/observe" title="Array.observe() &#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x5F02;&#x6B65;&#x76D1;&#x89C6;&#x6570;&#x7EC4;&#x53D1;&#x751F;&#x7684;&#x53D8;&#x5316;&#xFF0C;&#x7C7B;&#x4F3C;&#x4E8E;&#x9488;&#x5BF9;&#x5BF9;&#x8C61;&#x7684; Object.observe() &#x3002;&#x5F53;&#x6570;&#x7EC4;&#x7684;&#x503C;&#x53D1;&#x751F;&#x53D8;&#x5316;&#x65F6;&#xFF0C;&#x5B83;&#x6309;&#x53D1;&#x751F;&#x987A;&#x5E8F;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x53D8;&#x5316;&#x6D41;&#x3002;&#x4E0E; Object.observe() &#x7C7B;&#x4F3C;&#xFF0C;&#x5B83;&#x7531;&#x5982;&#x4E0B;&#x53EF;&#x63A5;&#x53D7;&#x7684;&#x53D8;&#x5316;&#x7C7B;&#x578B;&#x5217;&#x8868;[&quot;add&quot;&#x3001;&quot;update&quot;&#x3001;&quot;delete&quot;&#x3001;&quot;splice&quot;]&#x89E6;&#x53D1;&#x3002;"><code>Array.observe()</code></a> <span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span></li>
</ul>
                  
                
              