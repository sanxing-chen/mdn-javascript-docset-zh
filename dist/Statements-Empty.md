
                
                  
                    <div>
<div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>
</div>

<h2 id="&#x6982;&#x89C8;">&#x6982;&#x89C8;</h2>

<p><strong>empty &#x8BED;&#x53E5;</strong>&#xA0;&#x7528;&#x6765;&#x8868;&#x660E;&#x6CA1;&#x6709;&#x8BED;&#x53E5;, &#x5C3D;&#x7BA1;JavaScript&#x8BED;&#x6CD5;&#x5E0C;&#x671B;&#x6709;&#x8BED;&#x53E5;&#x4F1A;&#x88AB;&#x6267;&#x884C;.</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">;
</pre>

<h2 id="&#x8BF4;&#x660E;">&#x8BF4;&#x660E;</h2>

<p>empty&#x8BED;&#x53E5; &#x7528;&#x5206;&#x53F7;&#x8868;&#x793A;&#xA0;(;) ,&#x7528;&#x6765;&#x6307;&#x660E;&#x6CA1;&#x6709;&#x8BED;&#x53E5;&#x4F1A;&#x88AB;&#x6267;&#x884C;, &#x5C3D;&#x7BA1;&#x6B64;&#x65F6;JavaScript&#x8BED;&#x6CD5;&#x9700;&#x8981;&#x6267;&#x884C;&#x8BED;&#x53E5;. &#x76F8;&#x5BF9;&#x7684;&#x662F;,&#x5F53;&#x4F60;&#x9700;&#x8981;&#x591A;&#x884C;&#x8BED;&#x53E5;,&#x4F46;JavaScript&#x53EA;&#x5141;&#x8BB8;&#x4E00;&#x4E2A;&#x65F6;,&#x53EF;&#x4EE5;&#x4F7F;&#x7528;<a href="/en-US/docs/Web/JavaScript/Reference/Statements/block">&#xA0;&#x8BED;&#x53E5;&#x5757;</a>; &#x8BED;&#x53E5;&#x5757;&#x53EF;&#x4EE5;&#x5C06;&#x591A;&#x6761;&#x8BED;&#x53E5;&#x5408;&#x5E76;&#x4E3A;&#x4E00;&#x4E2A;.</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<p>empty&#x8BED;&#x53E5; &#x6709;&#x65F6;&#x7528;&#x4F5C;&#x5FAA;&#x73AF;&#x8BED;&#x53E5;&#x4E2D;. &#x5982;:</p>

<pre class="brush: js">var arr = [1, 2, 3];

// Assign all array values to 0
for (let i = 0; i &lt; arr.length; arr[i++] = 0) /* empty statement */ ;

console.log(arr)
// [0, 0, 0]
</pre>

<p><strong>&#x6CE8;&#x610F;:</strong>&#xA0;&#x5728;&#x4F7F;&#x7528; empty&#x8BED;&#x53E5;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#x4E13;&#x95E8;&#x5199;&#x4E0A;&#x6CE8;&#x91CA;&#x662F;&#x4E2A;&#x4E0D;&#x9519;&#x7684;&#x4E3B;&#x610F;, &#x56E0;&#x4E3A;&#x4E0D;&#x662F;&#x5F88;&#x5BB9;&#x6613;&#x533A;&#x5206;empty&#x8BED;&#x53E5; &#x548C;&#x666E;&#x901A;&#x7684;&#x5206;&#x53F7;. &#x4E0B;&#x9762;&#x7684;&#x793A;&#x4F8B;&#x53EF;&#x80FD;&#x4E0D;&#x662F;&#x6545;&#x610F;&#x52A0;&#x4E0A;&#x5206;&#x53F7;&#x7684;:</p>

<pre class="brush: js">if (condition);       // Caution, this &quot;if&quot; does nothing!
   killTheUniverse()  // So this gets always executed!!!
</pre>

<p>&#x53E6;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;: &#xA0;<a href="/en-US/docs/Web/JavaScript/Reference/Statements/if...else"><code>if...else</code></a>&#xA0;&#x8BED;&#x53E5;&#x4E0D;&#x5E26;&#x82B1;&#x62EC;&#x53F7;&#xA0;(<code>{}</code>). &#x5982;&#x679C;three&#x4E3A;true, &#x4E0D;&#x4F1A;&#x53D1;&#x751F;&#x4EFB;&#x4F55;&#x4E8B;, <code>four</code> &#x4E0D;&#x4F1A;&#x6267;&#x884C;, &#x540C;&#x65F6;else&#x4ECE;&#x53E5;&#x4E2D;&#x7684;<code>launchRocket()&#x51FD;&#x6570;&#x4E5F;&#x4E0D;&#x4F1A;&#x6267;&#x884C;</code>.</p>

<pre class="brush: js">if (one)
  doOne();
else if (two)
  doTwo();
else if (three)
  ; // nothing here
else if (four)
  doFour();
else
  launchRocket();</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition.</td>
   <td>Standard</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-12.3" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Empty statement</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-empty-statement" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Empty statement</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="&#x8BED;&#x53E5;&#x5757; (&#x6216;&#x5176;&#x4ED6;&#x8BED;&#x8A00;&#x4E2D;&#x7684;&#xA0;&#x590D;&#x5408;&#x8BED;&#x53E5;) &#x7528;&#x6765;&#x7EC4;&#x7EC7;&#x96F6;&#x4E2A;&#x6216;&#x591A;&#x6761;&#x8BED;&#x53E5;. &#x7528;&#x4E00;&#x5BF9;&#x82B1;&#x62EC;&#x53F7;&#x754C;&#x5B9A;&#x8BED;&#x53E5;&#x5757;." href="/zh-CN/docs/Web/JavaScript/Reference/Statements/block"><code>Block statement</code></a></li>
</ul>
                  
                
              