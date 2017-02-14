
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>The initial value of the <code><strong>@@iterator</strong></code> property is the same function object as the initial value of the <a title="values()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A; Iterator &#xA0;&#x5BF9;&#x8C61;&#xFF0C;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x4EE5;&#x63D2;&#x5165;Set&#xA0;&#x5BF9;&#x8C61;&#x7684;&#x987A;&#x5E8F;&#x5305;&#x542B;&#x4E86;&#x539F; Set &#x5BF9;&#x8C61;&#x91CC;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/values"><code>values</code></a> property.</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><em>mySet</em>[Symbol.iterator]</code></pre>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>The <code>Set</code> <strong>iterator</strong> function, which is the <a title="values()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A; Iterator &#xA0;&#x5BF9;&#x8C61;&#xFF0C;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x4EE5;&#x63D2;&#x5165;Set&#xA0;&#x5BF9;&#x8C61;&#x7684;&#x987A;&#x5E8F;&#x5305;&#x542B;&#x4E86;&#x539F; Set &#x5BF9;&#x8C61;&#x91CC;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/values"><code>values()</code></a> function by default.</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="Using_iterator()">Using <code>[@@iterator]()</code></h3>

<pre class="brush:js">var mySet = new Set();
mySet.add(&quot;0&quot;);
mySet.add(1);
mySet.add({});

var setIter = mySet[Symbol.iterator]();

console.log(setIter.next().value); // &quot;0&quot;
console.log(setIter.next().value); // 1
console.log(setIter.next().value); // Object
</pre>

<h3 id="Using_iterator()_with_for..of">Using <code>[@@iterator]()</code> with <code>for..of</code></h3>

<pre class="brush:js">var mySet = new Set();
mySet.add(&quot;0&quot;);
mySet.add(1);
mySet.add({});

for (var v of mySet) {
  console.log(v);
}
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
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-set.prototype-@@iterator" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Set.prototype[@@iterator]</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-set.prototype-@@iterator" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Set.prototype[@@iterator]</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x517C;&#x5BB9;&#x6027;">&#x517C;&#x5BB9;&#x6027;</h2>

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
   <td><a title="Released on 2015-02-24." href="/en-US/Firefox/Releases/36">36</a> (36) [1]</td>
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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>36.0 (36) [1]</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<p>[1] From Gecko 17 (Firefox 17 / Thunderbird 17 / SeaMonkey 2.14) to Gecko 26 (Firefox 26 / Thunderbird 26 / SeaMonkey 2.23 / Firefox OS 1.2) the <code>iterator</code> property was used (<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=907077" class="external">bug 907077</a>), and from Gecko 27 to Gecko 35 the <code>&quot;@@iterator&quot;</code> placeholder was used. In Gecko 36 (Firefox 36 / Thunderbird 36 / SeaMonkey 2.33), the <code>@@iterator</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol">symbol</a> got implemented (<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=918828" class="external">bug 918828</a>).</p>

<h2 id="&#x8BF7;&#x53C2;&#x9605;">&#x8BF7;&#x53C2;&#x9605;</h2>

<ul>
 <li><a title="entries() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684; Iterator&#xA0;&#x5BF9;&#x8C61; &#xFF0C;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x5143;&#x7D20;&#x662F;&#x7C7B;&#x4F3C; [value, value] &#x5F62;&#x5F0F;&#x7684;&#x6570;&#x7EC4;&#xFF0C;value &#x662F;&#x96C6;&#x5408;&#x5BF9;&#x8C61;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;Iterator &#x5BF9;&#x8C61;&#x5143;&#x7D20;&#x7684;&#x987A;&#x5E8F;&#x5373;&#x96C6;&#x5408;&#x5BF9;&#x8C61;&#x4E2D;&#x5143;&#x7D20;&#x63D2;&#x5165;&#x7684;&#x987A;&#x5E8F;&#x3002;&#x7531;&#x4E8E;&#x96C6;&#x5408;&#x5BF9;&#x8C61;&#x4E0D;&#x50CF; Map &#x5BF9;&#x8C61;&#x90A3;&#x6837;&#x62E5;&#x6709; key&#xFF0C;&#x7136;&#x800C;&#xFF0C;&#x4E3A;&#x4E86;&#x4E0E; Map &#x5BF9;&#x8C61;&#x7684; API &#x5F62;&#x5F0F;&#x4FDD;&#x6301;&#x4E00;&#x81F4;&#xFF0C;&#x6545;&#x4F7F;&#x5F97;&#x6BCF;&#x4E00;&#x4E2A; entry &#x7684; key &#x548C; value &#x90FD;&#x62E5;&#x6709;&#x76F8;&#x540C;&#x7684;&#x503C;&#xFF0C;&#x56E0;&#x800C;&#x6700;&#x7EC8;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A; [value, value] &#x5F62;&#x5F0F;&#x7684;&#x6570;&#x7EC4;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/entries"><code>Set.prototype.entries()</code></a></li>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/keys" class="new"><code>Set.prototype.keys()</code></a></li>
 <li><a title="values()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A; Iterator &#xA0;&#x5BF9;&#x8C61;&#xFF0C;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x4EE5;&#x63D2;&#x5165;Set&#xA0;&#x5BF9;&#x8C61;&#x7684;&#x987A;&#x5E8F;&#x5305;&#x542B;&#x4E86;&#x539F; Set &#x5BF9;&#x8C61;&#x91CC;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/values"><code>Set.prototype.values()</code></a></li>
</ul>
                  
                
              