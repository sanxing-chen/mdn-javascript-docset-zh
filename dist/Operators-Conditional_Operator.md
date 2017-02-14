
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p>&#x6761;&#x4EF6;&#xFF08;&#x4E09;&#x5143;&#xFF09;&#x8FD0;&#x7B97;&#x7B26;&#x662F; JavaScript&#xA0;&#x4EC5;&#x6709;&#x7684;&#x4F7F;&#x7528;&#x4E09;&#x4E2A;&#x64CD;&#x4F5C;&#x6570;&#x7684;&#x8FD0;&#x7B97;&#x7B26;&#x3002;&#x672C;&#x8FD0;&#x7B97;&#x7B26;&#x7ECF;&#x5E38;&#x4F5C;&#x4E3A;&#xA0;<code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/if...else">if</a>&#xA0;&#x8BED;&#x53E5;&#x7684;&#x7B80;&#x77ED;&#x5F62;&#x5F0F;&#x6765;&#x4F7F;&#x7528;&#x3002;</code></p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><em>condition</em> ? <em>expr1</em> : <em>expr2</em> </pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>condition</code></dt>
 <dd>&#x8BA1;&#x7B97;&#x7ED3;&#x679C;&#x4E3A;true&#x6216;false&#x7684;&#x8868;&#x8FBE;&#x5F0F;&#x3002;</dd>
</dl>

<dl>
 <dt><code>expr1</code>, <code>expr2</code></dt>
 <dd>&#x503C;&#x53EF;&#x4EE5;&#x662F;&#x4EFB;&#x4F55;&#x7C7B;&#x578B;&#x7684;&#x8868;&#x8FBE;&#x5F0F;&#x3002;</dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x5982;&#x679C;&#x6761;&#x4EF6;&#x503C;&#x4E3A;&#x771F;&#x503C;&#xFF08;true&#xFF09;&#xFF0C;&#x8FD0;&#x7B97;&#x7B26;&#x5C31;&#x4F1A;&#x8FD4;&#x56DE;<font face="Consolas, Liberation Mono, Courier, monospace">&#xA0;expr1 &#x7684;&#x503C;&#xFF1B;&#x5426;&#x5219;&#xFF0C;</font>&#xA0;&#x5C31;&#x4F1A;&#x8FD4;&#x56DE;&#xA0;<code>expr2 &#x7684;&#x503C;&#x3002;&#x4F8B;&#x5982;&#xFF0C;</code>&#xA0;&#x6839;&#x636E; isMember &#x53D8;&#x91CF;&#x7684;&#x503C;&#x663E;&#x793A;&#x4E0D;&#x540C;&#x7684;&#x4FE1;&#x606F;&#xFF0C;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x4E0B;&#x9762;&#x7684;&#x8868;&#x8FBE;&#x5F0F;&#xFF1A;</p>

<pre class="brush: js">&quot;The fee is &quot; + (isMember ? &quot;$2.00&quot; : &quot;$10.00&quot;)
</pre>

<p>&#x540C;&#x6837;&#x4E5F;&#x53EF;&#x4EE5;&#x628A;&#x4E09;&#x5143;&#x8FD0;&#x7B97;&#x7B26;&#x7684;&#x503C;&#x8D4B;&#x503C;&#x7ED9;&#x4E00;&#x4E2A;&#x53D8;&#x91CF;:</p>

<pre class="brush: js">var elvisLives = Math.PI &gt; 4 ? &quot;Yep&quot; : &quot;Nope&quot;;</pre>

<p>&#x591A;&#x4E2A;&#x4E09;&#x5143;&#x64CD;&#x4F5C;&#x7B26;&#x4E5F;&#x662F;&#x53EF;&#x80FD;&#x7684;&#xFF08;&#x6CE8;&#xFF1A;&#x6761;&#x4EF6;&#x8FD0;&#x7B97;&#x7B26;&#x662F;&#x53F3;&#x7ED3;&#x5408;&#xFF09;&#xFF1A;</p>

<pre class="brush: js">var firstCheck = false,
    secondCheck = false,
    access = firstCheck ? &quot;Access denied&quot; : secondCheck ? &quot;Access denied&quot; : &quot;Access granted&quot;;
  
console.log( access ); // logs &quot;Access granted&quot;</pre>

<p>&#x8FD8;&#x53EF;&#x4EE5;&#x628A;&#x4E09;&#x5143;&#x64CD;&#x4F5C;&#x7B26;&#x7528;&#x5728;&#x7B49;&#x5F0F;&#x7684;&#x5DE6;&#x8FB9;&#xFF1A;</p>

<pre>var stop = false, age = 16;

age &gt; 18 ? location.assign(&quot;continue.html&quot;) : stop = true;
stop; // true</pre>

<p>&#x4F60;&#x4E5F;&#x53EF;&#x4EE5;&#x5728; expr1&#x3001;expr2 &#x91CC;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x6216;&#x591A;&#x4E2A;&#x7684;&#x64CD;&#x4F5C;&#xFF08;&#x7528;&#x9017;&#x53F7;&#x5206;&#x9694;&#xFF09;:</p>

<pre class="brush: js">var stop = false, age = 23;

age &gt; 18 ? (
    alert(&quot;OK, you can go.&quot;),
    location.assign(&quot;continue.html&quot;)
) : (
    stop = true,
    alert(&quot;Sorry, you are much too young!&quot;)
);
</pre>

<p>&#x540C;&#x6837;&#x4E5F;&#x53EF;&#x4EE5;&#x5728;&#x8D4B;&#x503C;&#x8FC7;&#x7A0B;&#x4E2D;&#x505A;&#x591A;&#x4E2A;&#x64CD;&#x4F5C;&#x3002; &#x5982;&#x4E0B;&#x6240;&#x793A;&#xFF0C;<strong>&#x62EC;&#x53F7;&#x91CC;&#x7684;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x9017;&#x53F7;&#x5206;&#x9694;&#x503C;</strong>&#x662F;&#x5C06;&#x88AB;&#x8D4B;&#x503C;&#x7684;&#x3002;</p>

<pre class="brush: js">var age = 16;

var url = age &gt; 18 ? (
    alert(&quot;OK, you can go.&quot;), 
    // alert &#x8FD4;&#x56DE;&#x7684;&#x503C;&#x662F; &quot;undefined&quot;&#xFF0C; &#x4F46;&#x5B83;&#x4F1A;&#x88AB;&#x5FFD;&#x7565;&#xFF0C;&#x56E0;&#x4E3A;
    // &#x4E0D;&#x662F;&#x62EC;&#x53F7;&#x7684;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x9017;&#x53F7;&#x5206;&#x9694;&#x503C;
    &quot;continue.html&quot; // &#x5982;&#x679C; age &gt; 18&#xFF0C;&#x5219;&#x8FD9;&#x4E2A;&#x503C;&#x8D4B;&#x503C;&#x7ED9; url
) : (
    alert(&quot;You are much too young!&quot;),
    alert(&quot;Sorry :-(&quot;),
    // &#x7B49;&#x7B49;
    &quot;stop.html&quot; // &#x5982;&#x679C; !(age &gt; 18) &#x4E3A;&#x771F;&#xFF0C;&#x5219;&#x8FD9;&#x4E2A;&#x503C;&#x8D4B;&#x503C;&#x7ED9; url
);

location.assign(url); // &quot;stop.html&quot;</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x8BF4;&#x660E;</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition.</td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;&#x3002;JavaScript 1.0 &#x5B9E;&#x73B0;&#x3002;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-11.12" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">The conditional operator</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-conditional-operator" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Conditional Operator</small></a></td>
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

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else">if &#x8BED;&#x53E5;</a></li>
</ul>
                  
                
              