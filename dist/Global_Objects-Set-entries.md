
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p>entries() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x8FED;&#x4EE3;&#x5668;&#x5BF9;&#x8C61; &#xFF0C;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x5143;&#x7D20;&#x662F;&#x7C7B;&#x4F3C; [value, value] &#x5F62;&#x5F0F;&#x7684;&#x6570;&#x7EC4;&#xFF0C;value &#x662F;&#x96C6;&#x5408;&#x5BF9;&#x8C61;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x8FED;&#x4EE3;&#x5668;&#x5BF9;&#x8C61;&#x5143;&#x7D20;&#x7684;&#x987A;&#x5E8F;&#x5373;&#x96C6;&#x5408;&#x5BF9;&#x8C61;&#x4E2D;&#x5143;&#x7D20;&#x63D2;&#x5165;&#x7684;&#x987A;&#x5E8F;&#x3002;&#x7531;&#x4E8E;&#x96C6;&#x5408;&#x5BF9;&#x8C61;&#x4E0D;&#x50CF; Map &#x5BF9;&#x8C61;&#x90A3;&#x6837;&#x62E5;&#x6709; key&#xFF0C;&#x7136;&#x800C;&#xFF0C;&#x4E3A;&#x4E86;&#x4E0E; Map &#x5BF9;&#x8C61;&#x7684; API &#x5F62;&#x5F0F;&#x4FDD;&#x6301;&#x4E00;&#x81F4;&#xFF0C;&#x6545;&#x4F7F;&#x5F97;&#x6BCF;&#x4E00;&#x4E2A; entry &#x7684; key &#x548C; value &#x90FD;&#x62E5;&#x6709;&#x76F8;&#x540C;&#x7684;&#x503C;&#xFF0C;&#x56E0;&#x800C;&#x6700;&#x7EC8;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A; [value, value] &#x5F62;&#x5F0F;&#x7684;&#x6570;&#x7EC4;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><em>mySet</em>.entries()</code></pre>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x5305;&#x542B; [value, value] &#x5F62;&#x5F0F;&#x7684;&#x6570;&#x7EC4;&#x8FED;&#x4EE3;&#x5668;&#x5BF9;&#x8C61;&#xFF0C;value &#x662F;&#x7ED9;&#x5B9A;&#x96C6;&#x5408;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x8FED;&#x4EE3;&#x5668; &#x5BF9;&#x8C61;&#x5143;&#x7D20;&#x7684;&#x987A;&#x5E8F;&#x5373;&#x96C6;&#x5408;&#x5BF9;&#x8C61;&#x4E2D;&#x5143;&#x7D20;&#x63D2;&#x5165;&#x7684;&#x987A;&#x5E8F;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;_entries()">&#x4F7F;&#x7528;&#xA0;<code>entries()</code></h3>

<pre class="brush:js">var mySet = new Set();
mySet.add(&quot;foobar&quot;);
mySet.add(1);
mySet.add(&quot;baz&quot;);

var setIter = mySet.entries();

console.log(setIter.next().value); // [&quot;foobar&quot;, &quot;foobar&quot;]
console.log(setIter.next().value); // [1, 1]
console.log(setIter.next().value); // [&quot;baz&quot;, &quot;baz&quot;]
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x8BF4;&#x660E;</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-set.prototype.entries" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Set.prototype.entries</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;&#x3002;</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-set.prototype.entries" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Set.prototype.entries</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;&#xA0;</h2>

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
   <td><a href="/en-US/Firefox/Releases/24" title="Released on 2013-09-17.">24</a> (24)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
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
   <td>24.0 (24)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>8</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/keys" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Set.prototype.keys()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/values" title="values()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A; Iterator &#xA0;&#x5BF9;&#x8C61;&#xFF0C;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x4EE5;&#x63D2;&#x5165;Set&#xA0;&#x5BF9;&#x8C61;&#x7684;&#x987A;&#x5E8F;&#x5305;&#x542B;&#x4E86;&#x539F; Set &#x5BF9;&#x8C61;&#x91CC;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x3002;"><code>Set.prototype.values()</code></a></li>
</ul>
                  
                
              