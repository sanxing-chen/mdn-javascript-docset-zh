
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section> <div class="overheadIndicator" style="background: #9CF49C;"> 
    <p><strong>&#x8BE5;&#x65B0;&#x7279;&#x6027;&#x5C5E;&#x4E8E; ECMAScript 2015&#xFF08;ES6&#xFF09;&#x89C4;&#x8303;&#xFF0C;&#x5728;&#x4F7F;&#x7528;&#x65F6;&#x8BF7;&#x6CE8;&#x610F;&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;&#x3002;</strong></p> 
</div></div>

<p><code><strong>forEach()</strong></code> &#x65B9;&#x6CD5;&#x5C06;&#x4F1A;&#x4EE5;&#x63D2;&#x5165;&#x987A;&#x5E8F;&#x5BF9; Map &#x5BF9;&#x8C61;&#x4E2D;&#x7684;&#x6BCF;&#x4E00;&#x4E2A;&#x952E;&#x503C;&#x5BF9;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x53C2;&#x6570;&#x4E2D;&#x63D0;&#x4F9B;&#x7684;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><em>myMap</em>.forEach(<em>callback</em>[, <em>thisArg</em>])</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>&#x5FC5;&#x8981;&#xFF0C;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x6240;&#x8981;&#x6267;&#x884C;&#x7684;&#x51FD;&#x6570;&#x3002;</dd>
 <dt><code>thisArg</code></dt>
 <dd>&#x53EF;&#x9009;&#xFF0C;<code>callback</code> &#x6267;&#x884C;&#x65F6;&#x5176;&#xA0;<code>this</code> &#x7684;&#x503C;&#x3002;</dd>
</dl>

<h2 id="&#x6982;&#x8FF0;">&#x6982;&#x8FF0;</h2>

<p><code>forEach</code>&#xA0;&#x65B9;&#x6CD5;&#x5C06;&#x5BF9; <code>Map</code> &#x4E2D;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x7684;&#x6BCF;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x53C2;&#x6570;&#x4E2D;&#x63D0;&#x4F9B;&#x7684;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#xFF0C;&#x5B83;&#x4E0D;&#x4F1A;&#x5BF9;&#x4EFB;&#x4F55;&#x5DF2;&#x7ECF;&#x88AB;&#x5220;&#x9664;&#x7684;&#x5143;&#x7D20;&#x6267;&#x884C;&#x8C03;&#x7528;&#x3002;&#x7136;&#x800C;&#xFF0C;&#x5B83;&#x8FD8;&#x4F1A;&#x5BF9;&#x952E;&#x5B58;&#x5728;&#x800C;&#x503C;&#x4E3A;&#xA0;<code>undefined &#x7684;&#x5143;&#x7D20;&#x6267;&#x884C;&#x8C03;&#x7528;&#x3002;</code></p>

<p><font face="Consolas, Liberation Mono, Courier, monospace"><code>callback</code> &#x51FD;&#x6570;&#x6709;<strong>&#x4E09;&#x4E2A;&#x53C2;&#x6570;</strong></font>:</p>

<ul>
 <li><strong><code>value</code></strong> - &#x5143;&#x7D20;&#x7684;&#x503C;</li>
 <li><strong><code>key</code></strong> -&#xA0;&#x5143;&#x7D20;&#x7684;&#x952E;</li>
 <li><strong><code>Map</code></strong>&#xA0;-&#xA0;&#x5F53;&#x524D;&#x6B63;&#x5728;&#x88AB;&#x904D;&#x5386;&#x7684;<code>&#x5BF9;&#x8C61;</code></li>
</ul>

<p>&#x5982;&#x679C;&#x53C2;&#x6570; <code>forEach</code> &#x5E26;&#x6709;&#x4E00;&#x4E2A;&#xA0;<code>thisArg &#x53C2;&#x6570;&#xFF0C;</code>&#x5728;&#x8C03;&#x7528;&#x7684;&#x65F6;&#x5019;&#xFF0C;&#x8FD9;&#x4E2A;&#x53C2;&#x6570;&#x5C06;&#x4F20;&#x7ED9; <code>callback</code> &#x51FD;&#x6570;&#x4F5C;&#x4E3A;&#x5176;&#xA0;this &#x7684;&#x503C;&#x3002;&#x5426;&#x5219;&#xFF0C;&#x51FD;&#x6570;&#x5C06;&#x9ED8;&#x8BA4;&#x4F7F;&#x7528;&#xA0;<code>undefined</code> &#x4F20;&#x7ED9; <code>callback</code> &#x51FD;&#x6570;&#x4F5C;&#x4E3A;&#x5176;&#xA0;<code>this</code> &#x503C;&#x3002;&#x6700;&#x7EC8;&#xFF0C;&#x8FD9;&#x91CC;&#x7684; this &#x7684;&#x503C;&#x5C06;&#x4F9D;&#x7167; <a href="/en-US/docs/Web/JavaScript/Reference/Operators/this">&#x51FD;&#x6570;&#x89C2;&#x6D4B;&#x5E76;&#x786E;&#x5B9A;&#xA0;<code>this</code>&#xA0;&#x7684;&#x76F8;&#x5173;&#x89C4;&#x5219;</a>&#xA0;&#x7531;&#xA0;<code>callback</code> &#x51FD;&#x6570;&#x6700;&#x7EC8;&#x89C2;&#x5BDF;&#x5230;&#x7684;&#x503C;&#x51B3;&#x5B9A;&#x3002;</p>

<p><code>forEach</code> &#x51FD;&#x6570;&#x5904;&#x7406;&#x7684;&#x5143;&#x7D20;&#x7684;&#x8303;&#x56F4;&#x4E3A;&#x7B2C;&#x4E00;&#x6B21;&#x6267;&#x884C; callback &#x51FD;&#x6570;&#x65F6; Map &#x5BF9;&#x8C61;&#x4E2D;&#x7684;&#x952E;&#x503C;&#x5BF9;&#x96C6;&#x5408;&#x3002;&#x5728; <code>Map</code> &#x5BF9;&#x8C61;&#x8C03;&#x7528; <code>forEach</code> &#x4E4B;&#x540E;&#x52A0;&#x5165;&#x7684;&#x5143;&#x7D20;&#x5C06;&#x4E0D;&#x4F1A;&#x88AB;&#x8C03;&#x7528; <code>callback</code> &#x51FD;&#x6570;&#x3002;&#x5982;&#x679C;&#x5728;&#x8C03;&#x7528; <code>forEach</code> &#x4E4B;&#x540E; <code>Map</code> &#x5BF9;&#x8C61;&#x4E2D;&#x7684;&#x88AB;&#x6539;&#x53D8;&#x6216;&#x8005;&#x5220;&#x9664;&#x4E86;&#xFF0C;&#x5B83;&#x4EEC;&#x4F20;&#x7ED9; <code>callback</code> &#x51FD;&#x6570;&#x7684;&#x503C;&#x5C06;&#x4F1A;&#x53D8;&#x6210; <code>forEach</code> &#x51FD;&#x6570;&#x8BBF;&#x95EE;&#x5B83;&#x4EEC;&#x65F6;&#x7684;&#x503C;&#xFF1B;<code>callback</code> &#x4E0D;&#x4F1A;&#x8BBF;&#x95EE;&#x5176;&#x8C03;&#x7528;&#x5176;&#x95F4;&#x88AB;&#x5220;&#x9664;&#x7684;&#x5143;&#x7D20;&#x3002;</p>

<p><code>forEach &#x4EC5;&#x4EC5;&#x662F;&#x5BF9;</code>&#xA0;<code>Map</code> &#x5BF9;&#x8C61;&#x4E2D;&#x7684;<code>&#x6BCF;&#x4E00;&#x4E2A;</code>&#x5143;&#x7D20;&#x6267;&#x884C;&#x4E00;&#x904D; <code>callback</code> &#x51FD;&#x6570;&#xFF0C;&#x7136;&#x540E;&#x76F4;&#x63A5;&#x8FD4;&#x56DE; <code>undefined</code>&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x6253;&#x5370;&#x4E00;&#x4E2A;_Map_&#x5BF9;&#x8C61;&#x4E2D;&#x7684;&#x5143;&#x7D20;">&#x6253;&#x5370;&#x4E00;&#x4E2A; Map &#x5BF9;&#x8C61;&#x4E2D;&#x7684;&#x5143;&#x7D20;</h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x5728;&#x4E00;&#x884C;&#x4E2D;&#x6253;&#x5370;&#x4E00;&#x4E2A; <code>Map</code> &#x5BF9;&#x8C61;&#x7684;&#x6BCF;&#x4E00;&#x4E2A;&#x5143;&#x7D20;:</p>

<pre class="brush:js">function logMapElements(value, key, map) {
    console.log(&quot;m[&quot; + key + &quot;] = &quot; + value);
}
Map([[&quot;foo&quot;, 3], [&quot;bar&quot;, {}], [&quot;baz&quot;, undefined]]).forEach(logMapElements);
// logs:
// &quot;m[foo] = 3&quot;
// &quot;m[bar] = [object Object]&quot;
// &quot;m[baz] = undefined&quot;
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
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-map.prototype.foreach" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Map.prototype.forEach</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
   <td><a href="/en-US/Firefox/Releases/25" title="Released on 2013-10-29.">25.0</a> (25.0)</td>
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
   <td>25.0 (25.0)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>8</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" title="forEach() &#x65B9;&#x6CD5;&#x8BA9;&#x6570;&#x7EC4;&#x7684;&#x6BCF;&#x4E00;&#x9879;&#x90FD;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x7ED9;&#x5B9A;&#x7684;&#x51FD;&#x6570;&#x3002;"><code>Array.prototype.forEach()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach" title="The forEach() method executes a provided function once per each value in the Set object, in insertion order."><code>Set.prototype.forEach()</code></a></li>
</ul>
                  
                
              