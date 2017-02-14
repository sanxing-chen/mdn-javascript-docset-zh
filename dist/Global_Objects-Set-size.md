
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section> <div class="overheadIndicator" style="background: #9CF49C;"> 
    <p><strong>&#x8BE5;&#x65B0;&#x7279;&#x6027;&#x5C5E;&#x4E8E; ECMAScript 2015&#xFF08;ES6&#xFF09;&#x89C4;&#x8303;&#xFF0C;&#x5728;&#x4F7F;&#x7528;&#x65F6;&#x8BF7;&#x6CE8;&#x610F;&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;&#x3002;</strong></p> 
</div></div>

<p><strong>Size</strong>&#x5C5E;&#x6027;&#x5C06;&#x4F1A;&#x8FD4;&#x56DE;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Set</code></a>&#x5BF9;&#x8C61;&#x4E2D;&#x5143;&#x7D20;&#x7684;&#x4E2A;&#x6570;&#x3002;</p>

<h2 id="&#x8BF4;&#x660E;">&#x8BF4;&#x660E;</h2>

<p>Size&#x7684;&#x503C;&#x8868;&#x793A;<font face="Consolas, Liberation Mono, Courier, monospace">Set&#x5BF9;&#x8C61;&#x62E5;&#x6709;&#x591A;&#x5C11;&#x4E2A;&#x5143;&#x7D20;&#x3002;&#x901A;&#x8FC7;&#x8C03;&#x7528;&#x51FD;&#x6570;&#x7684;&#x5F62;&#x5F0F;&#x8BBF;&#x95EE;Size&#x4F1A;&#x63D0;&#x793A;&#x4E3A;undefined&#xFF1B;</font>&#x5E76;&#x4E14;&#x8BE5;&#x503C;&#x4E0D;&#x80FD;&#x591F;&#x88AB;&#x66F4;&#x6539;&#x3002;</p>

<h2 id="&#x4F8B;&#x5B50;">&#x4F8B;&#x5B50;</h2>

<h3 id="&#x4F7F;&#x7528;">&#x4F7F;&#x7528;</h3>

<pre class="brush:js">var mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add(&quot;some text&quot;)

mySet.size; // 3
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
   <td>
    <p><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-get-set.prototype.size" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Set.prototype.size</small></a></p>
   </td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;</td>
  </tr>
  <tr>
   <td>
    <p><a href="https://tc39.github.io/ecma262/#sec-get-set.prototype.size" class="external" lang="en" hreflang="en">ECMAScript 2016 Draft (7th Edition, ECMA-262)<br><small lang="zh-CN">Set.prototype.size</small></a></p>
   </td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;</h2>

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
   <td>38</td>
   <td><a href="/en-US/Firefox/Releases/19" title="Released on 2013-02-19.">19</a> (19) [1]</td>
   <td>11</td>
   <td>25</td>
   <td>7.1</td>
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
   <td>38</td>
   <td>19.0 (19)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>8</td>
  </tr>
 </tbody>
</table>
</div>

<p>[1] From Gecko 13 (Firefox 13 / Thunderbird 13 / SeaMonkey 2.10) to Gecko 18 (Firefox 18 / Thunderbird 18 / SeaMonkey 2.15 / Firefox OS 1.0.1 / Firefox OS 1.1) the size property was implemented as a <code>Set.prototype.size()</code> method, this has been changed to a property in later versions conform to the ECMAScript 6 specification (<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=807001" class="external">bug 807001</a>).</p>

<h2 id="&#x770B;&#x8FD9;&#x91CC;">&#x770B;&#x8FD9;&#x91CC;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Set</code></a></li>
</ul>
                  
                
              