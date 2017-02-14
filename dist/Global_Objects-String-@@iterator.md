
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p><strong><code>[@@iterator]()</code></strong>&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684;Iterator&#x5BF9;&#x8C61;&#xFF0C;&#x5B83;&#x904D;&#x5386;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x4EE3;&#x7801;&#x70B9;&#xFF0C;&#x8FD4;&#x56DE;&#x6BCF;&#x4E00;&#x4E2A;&#x4EE3;&#x7801;&#x70B9;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x503C;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>string</var>[Symbol.iterator]</code></pre>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x4E00;&#x4E2A;&#x65B0;&#x7684;Iterator&#x5BF9;&#x8C61;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;iterator()"><code>&#x4F7F;&#x7528;[@@iterator]()</code></h3>

<pre class="brush:js">var string = &apos;A\uD835\uDC68&apos;;

var strIter = string[Symbol.iterator]();

console.log(strIter.next().value); // &quot;A&quot;
console.log(strIter.next().value); // &quot;\uD835\uDC68&quot;
</pre>

<h3 id="&#x901A;&#x8FC7;_for..of_&#x4F7F;&#x7528;iterator()"><code>&#x901A;&#x8FC7;</code>&#xA0;<code>for..of &#x4F7F;&#x7528;[@@iterator]()</code></h3>

<pre class="brush:js">var string = &apos;A\uD835\uDC68B\uD835\uDC69C\uD835\uDC6A&apos;;

for (var v of string) {
  console.log(v);
}
// &quot;A&quot;
// &quot;\uD835\uDC68&quot;
// &quot;B&quot;
// &quot;\uD835\uDC69&quot;
// &quot;C&quot;
// &quot;\uD835\uDC6A&quot;
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
   <td><a hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype-@@iterator">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">String.prototype[@@iterator]()</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">String.prototype[@@iterator]()</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

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
   <td>&#x57FA;&#x672C;&#x652F;&#x6301;</td>
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
   <td>&#x57FA;&#x672C;&#x652F;&#x6301;</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>36.0 (36) [1]</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<p>[1] From Gecko 17 (Firefox 17 / Thunderbird 17 / SeaMonkey 2.14) to Gecko 26 (Firefox 26 / Thunderbird 26 / SeaMonkey 2.23 / Firefox OS 1.2) the&#xA0;<code>iterator</code>&#xA0;property was used (<a class="external" href="https://bugzilla.mozilla.org/show_bug.cgi?id=907077">bug 907077</a>), and from Gecko 27 to Gecko 35 the&#xA0;<code>&quot;@@iterator&quot;</code>&#xA0;placeholder was used. In Gecko 36 (Firefox 36 / Thunderbird 36 / SeaMonkey 2.33), the&#xA0;<code>@@iterator</code>&#xA0;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol">symbol</a>&#xA0;got implemented (<a class="external" href="https://bugzilla.mozilla.org/show_bug.cgi?id=918828">bug 918828</a>).</p>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Iteration_protocols">Iteration protocols</a></li>
</ul>
                  
                
              