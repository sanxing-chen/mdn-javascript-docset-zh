
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section> <div class="overheadIndicator" style="background: #9CF49C;"> 
    <p><strong>&#x8BE5;&#x65B0;&#x7279;&#x6027;&#x5C5E;&#x4E8E; ECMAScript 2015&#xFF08;ES6&#xFF09;&#x89C4;&#x8303;&#xFF0C;&#x5728;&#x4F7F;&#x7528;&#x65F6;&#x8BF7;&#x6CE8;&#x610F;&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;&#x3002;</strong></p> 
</div></div>

<h2 id="&#x6982;&#x8FF0;">&#x6982;&#x8FF0;</h2>

<p>&#x4E00;&#x4E2A;&#xA0;<strong><code>WeakSet</code></strong>&#xA0;&#x5BF9;&#x8C61;&#x662F;&#x4E00;&#x4E2A;&#x65E0;&#x5E8F;&#x7684;&#x96C6;&#x5408;, &#x53EF;&#x4EE5;&#x7528;&#x5B83;&#x6765;&#x5B58;&#x50A8;&#x4EFB;&#x610F;&#x7684;&#x5BF9;&#x8C61;&#x503C;, &#x5E76;&#x4E14;&#x5BF9;&#x8FD9;&#x4E9B;&#x5BF9;&#x8C61;&#x503C;&#x4FDD;&#x6301;&#x5F31;&#x5F15;&#x7528;.</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"> new WeakSet([iterable]);</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt>iterable</dt>
 <dd>&#x5982;&#x679C;&#x4F20;&#x5165;&#x4E00;&#x4E2A;<a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of">&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;</a>&#x4F5C;&#x4E3A;&#x53C2;&#x6570;, &#x5219;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x6240;&#x6709;&#x8FED;&#x4EE3;&#x503C;&#x90FD;&#x4F1A;&#x88AB;&#x81EA;&#x52A8;&#x6DFB;&#x52A0;&#x8FDB;&#x751F;&#x6210;&#x7684;&#xA0;<code>WeakSet</code>&#xA0;&#x5BF9;&#x8C61;&#x4E2D;.</dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>WeakSet</code> &#x5BF9;&#x8C61;&#x662F;&#x4E00;&#x4E9B;&#x5BF9;&#x8C61;&#x503C;&#x7684;&#x96C6;&#x5408;, &#x5E76;&#x4E14;&#x5176;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5BF9;&#x8C61;&#x503C;&#x90FD;&#x53EA;&#x80FD;&#x51FA;&#x73B0;&#x4E00;&#x6B21;.</p>

<p>&#x5B83;&#x548C; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Set</code></a> &#x5BF9;&#x8C61;&#x7684;&#x533A;&#x522B;&#x6709;&#x4E24;&#x70B9;:</p>

<ul>
 <li><code>WeakSet</code>&#xA0;&#x5BF9;&#x8C61;&#x4E2D;&#x53EA;&#x80FD;&#x5B58;&#x653E;&#x5BF9;&#x8C61;&#x503C;, &#x4E0D;&#x80FD;&#x5B58;&#x653E;&#x539F;&#x59CB;&#x503C;, &#x800C;&#xA0;<code>Set</code>&#xA0;&#x5BF9;&#x8C61;&#x90FD;&#x53EF;&#x4EE5;.</li>
 <li><code>WeakSet</code>&#xA0;&#x5BF9;&#x8C61;&#x4E2D;&#x5B58;&#x50A8;&#x7684;&#x5BF9;&#x8C61;&#x503C;&#x90FD;&#x662F;&#x88AB;&#x5F31;&#x5F15;&#x7528;&#x7684;, &#x5982;&#x679C;&#x6CA1;&#x6709;&#x5176;&#x4ED6;&#x7684;&#x53D8;&#x91CF;&#x6216;&#x5C5E;&#x6027;&#x5F15;&#x7528;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x503C;, &#x5219;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x503C;&#x4F1A;&#x88AB;&#x5F53;&#x6210;&#x5783;&#x573E;&#x56DE;&#x6536;&#x6389;.&#xA0;&#x6B63;&#x56E0;&#x4E3A;&#x8FD9;&#x6837;,&#xA0;<code>WeakSet</code>&#xA0;&#x5BF9;&#x8C61;&#x662F;&#x65E0;&#x6CD5;&#x88AB;&#x679A;&#x4E3E;&#x7684;, &#x6CA1;&#x6709;&#x529E;&#x6CD5;&#x62FF;&#x5230;&#x5B83;&#x5305;&#x542B;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;.</li>
</ul>

<h2 name="Properties" id="Properties">&#x5C5E;&#x6027;</h2>

<dl>
 <dt><code>WeakSet.length</code></dt>
 <dd><code>length</code>&#xA0;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x4E3A; 0.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/prototype" title="The WeakSet.prototype property represents the prototype for the WeakSet constructor."><code>WeakSet.prototype</code></a></dt>
 <dd><span><code>WeakSet</code>&#xA0;&#x5B9E;&#x4F8B;&#x7684;&#x6240;&#x6709;&#x7EE7;&#x627F;&#x5C5E;&#x6027;&#x548C;&#x7EE7;&#x627F;&#x65B9;&#x6CD5;&#x90FD;&#x5728;&#x8BE5;&#x5BF9;&#x8C61;&#x4E0A;.</span></dd>
</dl>

<h2 name="Boolean_instances" id="Boolean_instances"><code>WeakSet</code> &#x5B9E;&#x4F8B;</h2>

<p>&#x6240;&#x6709; <code>WeakSet</code>&#xA0;&#x5B9E;&#x4F8B;&#x90FD;&#x7EE7;&#x627F;&#x81EA; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/prototype" title="The WeakSet.prototype property represents the prototype for the WeakSet constructor."><code>WeakSet.prototype</code></a>.</p>

<h3 id="&#x5C5E;&#x6027;">&#x5C5E;&#x6027;</h3>

<p></p><dl><dt><code>WeakSet.prototype.constructor</code></dt>
 <dd>&#x8FD4;&#x56DE;&#x6784;&#x9020;&#x51FD;&#x6570;&#x5373; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet" title="&#x4E00;&#x4E2A;&#xA0;WeakSet&#xA0;&#x5BF9;&#x8C61;&#x662F;&#x4E00;&#x4E2A;&#x65E0;&#x5E8F;&#x7684;&#x96C6;&#x5408;, &#x53EF;&#x4EE5;&#x7528;&#x5B83;&#x6765;&#x5B58;&#x50A8;&#x4EFB;&#x610F;&#x7684;&#x5BF9;&#x8C61;&#x503C;, &#x5E76;&#x4E14;&#x5BF9;&#x8FD9;&#x4E9B;&#x5BF9;&#x8C61;&#x503C;&#x4FDD;&#x6301;&#x5F31;&#x5F15;&#x7528;."><code>WeakSet</code></a> &#x672C;&#x8EAB;.</dd>
</dl><p></p>

<h3 id="&#x65B9;&#x6CD5;">&#x65B9;&#x6CD5;</h3>

<p></p><dl><dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/add" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>WeakSet.prototype.add(value)</code></a></dt>
 <dd>&#xA0;&#x5728;<span style="line-height: 1.5;">&#x8BE5;&#xA0;</span><code style="font-size: 14px;">WeakSet</code><span style="line-height: 1.5;">&#xA0;&#x5BF9;&#x8C61;&#x4E2D;&#x6DFB;&#x52A0;&#x4E00;&#x4E2A;&#x65B0;&#x5143;&#x7D20; <code>value</code>.</span></dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/clear" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>WeakSet.prototype.clear()</code></a></dt>
 <dd>&#x6E05;&#x7A7A;&#x8BE5;&#xA0;<code>WeakSet</code>&#xA0;&#x5BF9;&#x8C61;&#x4E2D;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/delete" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>WeakSet.prototype.delete(value)</code></a></dt>
 <dd>&#x4ECE;<span style="line-height: 1.5;">&#x8BE5;&#xA0;</span><code style="font-size: 14px;">WeakSet</code><span style="line-height: 1.5;">&#xA0;&#x5BF9;&#x8C61;&#x4E2D;&#x5220;&#x9664;</span><span style="line-height: 1.5;">&#xA0;</span><code style="font-size: 14px;">value&#xA0;</code><span style="line-height: 1.5;">&#x8FD9;&#x4E2A;&#x5143;&#x7D20;, &#x4E4B;&#x540E;&#xA0;</span><code style="font-size: 14px;">WeakSet.prototype.has(value)</code><span style="line-height: 1.5;">&#xA0;&#x65B9;&#x6CD5;&#x4FBF;&#x4F1A;&#x8FD4;&#x56DE; </span><code style="font-size: 14px;">false</code><span style="line-height: 1.5;">.</span></dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/has" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>WeakSet.prototype.has(value)</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5E03;&#x5C14;&#x503C;, &#xA0;&#x8868;&#x793A;&#x7ED9;&#x5B9A;&#x7684;&#x503C; <code>value</code> &#x662F;&#x5426;&#x5B58;&#x5728;&#x4E8E;&#x8FD9;&#x4E2A;&#xA0;<code>WeakSet</code> &#x4E2D;.</dd>
</dl><p></p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F8B;1_&#x4F7F;&#x7528;_WeakSet">&#x4F8B;1: &#x4F7F;&#x7528;&#xA0;<code>WeakSet</code></h3>

<pre class="brush: js">var ws = new WeakSet();
var obj = {};
var foo = {};

ws.add(window);
ws.add(obj);

ws.has(window); // true
ws.has(foo);    // false, &#x5BF9;&#x8C61; foo &#x5E76;&#x6CA1;&#x6709;&#x88AB;&#x6DFB;&#x52A0;&#x8FDB; ws &#x4E2D; 

ws.delete(window); // &#x4ECE;&#x96C6;&#x5408;&#x4E2D;&#x5220;&#x9664; window &#x5BF9;&#x8C61;
ws.has(window);    // false, window &#x5BF9;&#x8C61;&#x5DF2;&#x7ECF;&#x88AB;&#x5220;&#x9664;&#x4E86;

ws.clear(); // &#x6E05;&#x7A7A;&#x6574;&#x4E2A; WeakSet &#x5BF9;&#x8C61;
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x94FE;&#x63A5;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x5907;&#x6CE8;</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-weakset-objects" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">WeakSet</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x65E0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span> <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=792439" class="external" title="FIXED: Implement ES6 WeakSet">bug&#xA0;792439</a></td>
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
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span> <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=792439" class="external" title="FIXED: Implement ES6 WeakSet">bug&#xA0;792439</a></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h3 id="Chrome_&#x5907;&#x6CE8;">Chrome &#x5907;&#x6CE8;</h3>

<ul>
 <li>&#x9700;&#x5728;&#xA0;<code>chrome://flags &#x4E2D;&#x5F00;&#x542F;</code>&#xA0;&#x201C;&#x542F;&#x7528;&#x5B9E;&#x9A8C;&#x6027; JavaScript&#x201D; &#x624D;&#x80FD;&#x4F7F;&#x7528;&#x8BE5;&#x7279;&#x6027;.</li>
</ul>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Set</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/WeakMap" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>WeakMap</code></a></li>
</ul>
                  
                
              