
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<div class="warning">
<p><strong>&#x8B66;&#x544A; :</strong>&#xA0;&#x8BF7;&#x5C3D;&#x91CF;&#x907F;&#x514D;&#x4F7F;&#x7528; unwatch() &#x548C;&#xA0;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/watch" title="&#x76D1;&#x89C6;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x67D0;&#x4E2A;&#x5C5E;&#x6027;&#x662F;&#x5426;&#x53D1;&#x751F;&#x53D8;&#x5316;,&#x5728;&#x8BE5;&#x5C5E;&#x6027;&#x53D8;&#x5316;&#x65F6;&#x7ACB;&#x5373;&#x89E6;&#x53D1;&#x6307;&#x5B9A;&#x7684;&#x56DE;&#x8C03;&#x51FD;&#x6570;."><code>watch()</code></a> . &#x8FD9;&#x4E24;&#x4E2A;&#x65B9;&#x6CD5;&#x4EC5;&#x5728;&#xA0;Gecko &#x4E2D;&#x5B9E;&#x73B0; , &#x5E76;&#x4E14;&#x4ED6;&#x4EEC;&#x8FC7;&#x53BB;&#x4E3B;&#x8981;&#x4F5C;&#x8C03;&#x8BD5;&#x7528;. &#x53E6;&#x5916;, &#x4F7F;&#x7528; watchpoints &#x5BF9;&#x6027;&#x80FD;&#x6709;&#x4E00;&#x7CFB;&#x5217;&#x7684;&#x526F;&#x9762;&#x5F71;&#x54CD;&#xA0;&#xFF0C;&#x7279;&#x522B;&#x662F;&#x5F53;&#x4F7F;&#x7528;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#xFF0C;&#x5982;&#xA0;<code>window</code>. &#x4F60;&#x5E94;&#x8BE5;&#x4F7F;&#x7528; &#xA0;<a href="/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters">setters and getters</a>&#xA0;&#x6216;&#xA0;proxies &#x6765;&#x66FF;&#x4EE3;. &#x67E5;&#x9605;&#xA0;<a href="#Browser_compatibility">Browser compatibility</a> &#x4EE5;&#x83B7;&#x53D6;&#x66F4;&#x591A;&#x4FE1;&#x606F;.</p>
</div>

<p><code><strong>unwatch()</strong></code> &#x5220;&#x9664;&#x4E00;&#x4E2A;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/watch" title="&#x76D1;&#x89C6;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x67D0;&#x4E2A;&#x5C5E;&#x6027;&#x662F;&#x5426;&#x53D1;&#x751F;&#x53D8;&#x5316;,&#x5728;&#x8BE5;&#x5C5E;&#x6027;&#x53D8;&#x5316;&#x65F6;&#x7ACB;&#x5373;&#x89E6;&#x53D1;&#x6307;&#x5B9A;&#x7684;&#x56DE;&#x8C03;&#x51FD;&#x6570;."><code>watch()</code></a> &#x8BBE;&#x7F6E;&#x7684;&#xA0;watchpoint.</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>obj</var>.unwatch(<var>prop</var>)</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>prop</code></dt>
 <dd>&#x60F3;&#x8981;&#x505C;&#x6B62;&#x76D1;&#x89C6;&#x7684;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#x540D;</dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>JavaScript&#x8C03;&#x8BD5;&#x5668;&#x5177;&#x6709;&#x7C7B;&#x4F3C;&#x7684;&#x529F;&#x80FD;&#xFF0C;&#x4EE5;&#x53CA;&#x5176;&#x4ED6;&#x8C03;&#x8BD5;&#x9009;&#x9879;&#x3002;&#x6709;&#x5173;&#x8C03;&#x8BD5;&#x5668;&#x7684;&#x4FE1;&#x606F;&#xA0;&#xA0;<a href="/en-US/docs/Venkman">Venkman</a>.</p>

<p>&#x9ED8;&#x8BA4;&#x5730;, &#x8FD9;&#x4E2A;&#x65B9;&#x6CD5; &#x88AB;&#x6BCF;&#x4E00;&#x4E2A; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object &#x6784;&#x9020;&#x51FD;&#x6570;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5305;&#x88C5;&#xFF08;object wrapper&#xFF09;&#x3002;"><code>Object</code></a>&#xA0;&#x7684;&#x5B50;&#x7C7B;&#x7EE7;&#x627F;&#xA0;</p>

<div class="note">
<p><strong>Note:</strong> The reason for <code>unwatch()</code> to take the property name <em>prop</em> as its only parameter is due to the &quot;single handler allowing&quot; behavior of the <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/watch" title="&#x76D1;&#x89C6;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x67D0;&#x4E2A;&#x5C5E;&#x6027;&#x662F;&#x5426;&#x53D1;&#x751F;&#x53D8;&#x5316;,&#x5728;&#x8BE5;&#x5C5E;&#x6027;&#x53D8;&#x5316;&#x65F6;&#x7ACB;&#x5373;&#x89E6;&#x53D1;&#x6307;&#x5B9A;&#x7684;&#x56DE;&#x8C03;&#x51FD;&#x6570;."><code>watch()</code></a> method.</p>
</div>

<h2 id="&#x4F8B;&#x5B50;">&#x4F8B;&#x5B50;</h2>

<p>See <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/watch" title="&#x76D1;&#x89C6;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x67D0;&#x4E2A;&#x5C5E;&#x6027;&#x662F;&#x5426;&#x53D1;&#x751F;&#x53D8;&#x5316;,&#x5728;&#x8BE5;&#x5C5E;&#x6027;&#x53D8;&#x5316;&#x65F6;&#x7ACB;&#x5373;&#x89E6;&#x53D1;&#x6307;&#x5B9A;&#x7684;&#x56DE;&#x8C03;&#x51FD;&#x6570;."><code>watch()</code></a>.</p>

<h2 id="&#x8BF4;&#x660E;">&#x8BF4;&#x660E;</h2>

<p>Not part of any specifications. Implemented in JavaScript 1.2.</p>

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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="Compatibility_notes">Compatibility notes</h2>

<ul>
 <li>&#x4ECE;&#xA0;Firefox&#xA0;23 (<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=903332" class="external" title="FIXED: document.watch() results in &quot;TypeError: can&apos;t watch non-native objects of class Proxy&quot;">bug&#xA0;903332</a>) &#x5F00;&#x59CB;,&#xA0;&#x5728; <a href="/zh-CN/docs/Web/API/Document" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Document</code></a> &#x5BF9;&#x8C61;&#x4E0A;&#x8C03;&#x7528;&#xA0;<code>unwatch()</code>&#xA0;&#x629B;&#x51FA;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;"><code>TypeError</code></a> . This regression has been fixed with Firefox&#xA0;27.</li>
</ul>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/watch" title="&#x76D1;&#x89C6;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x67D0;&#x4E2A;&#x5C5E;&#x6027;&#x662F;&#x5426;&#x53D1;&#x751F;&#x53D8;&#x5316;,&#x5728;&#x8BE5;&#x5C5E;&#x6027;&#x53D8;&#x5316;&#x65F6;&#x7ACB;&#x5373;&#x89E6;&#x53D1;&#x6307;&#x5B9A;&#x7684;&#x56DE;&#x8C03;&#x51FD;&#x6570;."><code>Object.watch()</code></a></li>
</ul>
                  
                
              