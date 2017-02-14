
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section> <div class="overheadIndicator obsolete obsoleteHeader"><p><strong><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span> &#x5DF2;&#x5E9F;&#x5F03; Gecko 2 (Firefox 4 / Thunderbird 3.3 / SeaMonkey 2.1)</strong><br>This feature is obsolete. Although it may still work in some browsers, its use is discouraged since it could be removed at any time. Try to avoid using it.</p></div></div>

<p>&#xA0;<strong><code>__count__</code></strong>&#xA0;&#x5C5E;&#x6027;&#x66FE;&#x7ECF;&#x7528;&#x6765;&#x5B58;&#x653E;&#x5BF9;&#x8C61;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x7684;&#x5C5E;&#x6027;&#x7684;&#x4E2A;&#x6570;&#xFF0C;&#x4F46;&#x662F;&#x5DF2;&#x7ECF;&#x88AB;&#x5E9F;&#x9664;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>obj</var>.__count__</code></pre>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<pre class="brush: js">{ 1: 1 }.__count__              // 1
[].__count__                    // 0
[1].__count__                   // 1
[1, /* hole */, 2, 3].__count__ // 3
</pre>

<h2 id="&#x8BE6;&#x7EC6;&#x8BF4;&#x660E;">&#x8BE6;&#x7EC6;&#x8BF4;&#x660E;</h2>

<p>&#x65E0;&#x9700;&#x8BE6;&#x7EC6;&#x8BF4;&#x660E;</p>

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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x66F4;&#x591A;&#x8BF7;&#x53C2;&#x770B;">&#x66F4;&#x591A;&#x8BF7;&#x53C2;&#x770B;</h2>

<ul>
 <li><a class="external" href="http://whereswalden.com/2010/04/06/more-changes-coming-to-spidermonkey-the-magical-__count__-property-of-objects-is-being-removed/">[Blog post] More changes coming to SpiderMonkey: the magical __count__ property is being removed</a></li>
</ul>
                  
                
              