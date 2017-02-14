
                
                  
                    <p></p><section id="Quick_Links" class="Quick_links"><!-- --></section><p></p>
<h2 id="&#x6458;&#x8981;">&#x6458;&#x8981;</h2>
<p><br>
 <span style="line-height: 1.5;">&#x903B;&#x8F91;&#x8FD0;&#x7B97;&#x7B26;&#x901A;&#x5E38;&#x7528;&#x4E8E;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean">&#x5E03;&#x5C14;</a>&#x578B;&#xFF08;&#x903B;&#x8F91;&#xFF09;&#x503C;&#xFF1B;&#x8FD9;&#x79CD;&#x60C5;&#x51B5;&#xFF0C;&#x5B83;&#x4EEC;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5E03;&#x5C14;&#x578B;&#x503C;&#x3002;&#x7136;&#x800C;&#xFF0C;&amp;&amp;&#x548C;||&#x8FD0;&#x7B97;&#x7B26;&#x5B9E;&#x9645;&#x4E0A;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x64CD;&#x4F5C;&#x6570;&#x7684;&#x503C;&#xFF0C;&#x56E0;&#x6B64;&#x8FD9;&#x4E9B;&#x8FD0;&#x7B97;&#x7B26;&#x4E5F;&#x7528;&#x4E8E;&#x975E;&#x5E03;&#x5C14;&#x578B;&#xFF0C;&#x5B83;&#x4EEC;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x975E;&#x5E03;&#x5C14;&#x578B;&#x503C;&#x3002;</span></p>
<h2 id="&#x63CF;&#x8FF0;" style="margin-bottom: 20px; line-height: 30px; font-size: 2.14285714285714rem;">&#x63CF;&#x8FF0;</h2>
<p>&#x4E0B;&#x9762;&#x662F;&#x903B;&#x8F91;&#x8FD0;&#x7B97;&#x7B26;&#x7684;&#x8BF4;&#x660E;:</p>
<table class="fullwidth-table">
 <tbody>
  <tr>
   <th>&#x8FD0;&#x7B97;&#x7B26;</th>
   <th>&#x793A;&#x4F8B;</th>
   <th>&#x8BF4;&#x660E;</th>
  </tr>
  <tr>
   <td>&#x903B;&#x8F91;&#x4E0E; (<code>&amp;&amp;</code>)</td>
   <td><code><em>expr1</em> &amp;&amp; <em>expr2</em></code></td>
   <td>&#x5982;&#x679C;<em>expr1</em><span style="font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace;">&#xA0;</span>&#x80FD;&#x8F6C;&#x6362;&#x6210;false&#x5219;&#x8FD4;&#x56DE;expr1,&#x5426;&#x5219;&#x8FD4;&#x56DE;expr2. &#x56E0;&#x6B64;,&#xA0;&#x5728;Boolean&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x65F6;, &#x4E24;&#x4E2A;&#x64CD;&#x4F5C;&#x7ED3;&#x679C;&#x90FD;&#x4E3A;true&#x65F6;&#x8FD4;&#x56DE;true,&#x5426;&#x5219;&#x8FD4;&#x56DE;false.</td>
  </tr>
  <tr>
   <td>&#x903B;&#x8F91;&#x6216; (<code>||</code>)</td>
   <td><code><em>expr1</em> || <em>expr2</em></code></td>
   <td>&#x5982;&#x679C;expr1&#x80FD;&#x8F6C;&#x6362;&#x6210;true&#x5219;&#x8FD4;&#x56DE;expr1,&#x5426;&#x5219;&#x8FD4;&#x56DE;expr2.&#xA0;&#x56E0;&#x6B64;,&#x5728;boolean&#x73AF;&#x5883;(&#x5728;if&#x7684;&#x6761;&#x4EF6;&#x5224;&#x65AD;&#x4E2D;)&#x4E2D;&#x4F7F;&#x7528;&#x65F6;, &#x4E8C;&#x8005;&#x64CD;&#x4F5C;&#x7ED3;&#x679C;&#x4E2D;&#x53EA;&#x8981;&#x6709;&#x4E00;&#x4E2A;&#x4E3A;true,&#x8FD4;&#x56DE;true;&#x4E8C;&#x8005;&#x64CD;&#x4F5C;&#x7ED3;&#x679C;&#x90FD;&#x4E3A;false&#x65F6;&#x8FD4;&#x56DE;false.</td>
  </tr>
  <tr>
   <td>&#x903B;&#x8F91;&#x975E;(<code>!</code>)</td>
   <td><code>!<em>expr</em></code></td>
   <td>&#x5982;&#x679C;&#x5355;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;&#x80FD;&#x8F6C;&#x6362;&#x4E3A;true&#x7684;&#x8BDD;&#x8FD4;&#x56DE;false,&#x5426;&#x5219;&#x8FD4;&#x56DE;true.</td>
  </tr>
 </tbody>
</table>
<p>&#x80FD;&#x591F;&#x8F6C;&#x6362;&#x4E3A;false&#x7684;&#x8868;&#x8FBE;&#x5F0F;&#x6709;:null,0,&quot;&quot;&#x548C;undefined.</p>
<p>&#x5C3D;&#x7BA1;&#xA0;<code>&amp;&amp;</code> &#x548C; <code>||</code>&#xA0;&#x8FD0;&#x7B97;&#x7B26;&#x80FD;&#x591F;&#x5728;&#x975E;Boolean&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;, &#x4F46;&#x5982;&#x679C;&#x4ED6;&#x4EEC;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x80FD;&#x591F;&#x8F6C;&#x6362;&#x6210;Boolean&#x503C;&#x7684;&#x8BDD;,&#x4E5F;&#x53EF;&#x4EE5;&#x8BA4;&#x4E3A;&#x662F;Boolean&#x8FD0;&#x7B97;.</p>
<h3 name="Short-Circuit_Evaluation" id="Short-Circuit_Evaluation">&#x77ED;&#x8DEF;&#x8BA1;&#x7B97;</h3>
<p>&#x7531;&#x4E8E;&#x903B;&#x8F91;&#x8868;&#x8FBE;&#x5F0F;&#x7684;&#x8FD0;&#x7B97;&#x7684;&#x987A;&#x5E8F;&#x662F;&#x4ECE;&#x5DE6;&#x5230;&#x53F3;,&#x4E5F;&#x53EF;&#x4EE5;&#x7528;&#x4EE5;&#x4E0B;&#x89C4;&#x5219;&#x8FDB;&#x884C;&quot;&#x77ED;&#x8DEF;&quot;&#x8BA1;&#x7B97;:</p>
<ul>
 <li><code>false &amp;&amp; (<em>anything)</em></code>&#xA0; &#x77ED;&#x8DEF;&#x8BA1;&#x7B97;&#x7684;&#x7ED3;&#x679C;&#x4E3A;false.</li>
 <li><code>true || <em>(anything)&#xA0;</em></code> &#x77ED;&#x8DEF;&#x8BA1;&#x7B97;&#x7684;&#x7ED3;&#x679C;&#x4E3A; true.</li>
</ul>
<p>&#x8BE5;&#x89C4;&#x5219;&#x786E;&#x4FDD;&#x8FD9;&#x4E9B;&#x8BA1;&#x7B97;&#x7684;&#x51C6;&#x786E;&#x6027;. &#x6CE8;&#x610F;&#x5982;&#x679C;&#x4E0A;&#x8FF0;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#x7684; anything &#x90E8;&#x5206;&#x4E0D;&#x80FD;&#x88AB;&#x8BA1;&#x7B97;&#x7684;&#x8BDD;, &#xA0;&#x4E24;&#x8FB9;&#x90FD;&#x4E0D;&#x4F1A;&#x751F;&#x6548;.&#x8FD8;&#x9700;&#x8981;&#x6CE8;&#x610F;&#x7684;&#x662F;,&#x4E0A;&#x8FF0;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#x7684; anything &#x90E8;&#x5206;&#x662F;&#x4EFB;&#x610F;&#x7684;&#x5355;&#x4E2A;&#x903B;&#x8F91;&#x8868;&#x8FBE;&#x5F0F;(&#x5C0F;&#x62EC;&#x53F7;&#x4E2D;).</p>
<p>&#x4E0B;&#x9762;&#x793A;&#x4F8B;&#x4EE3;&#x7801;&#x4E2D;&#x7684;&#x4E24;&#x4E2A;&#x51FD;&#x6570;&#x662F;&#x76F8;&#x7B49;&#x7684;.</p>
<pre>function shortCircuitEvaluation() {
&#xA0;&#xA0;doSomething() || doSomethingElse()
}

function equivalentEvaluation() {
&#xA0; var flag = doSomething();
&#xA0; if (!flag) {
&#xA0; &#xA0; doSomethingElse();
&#xA0; }
}
</pre>
<p>&#x4F46;,&#x7531;&#x4E8E;<a href="/docs/Web/JavaScript/Reference/Operators/Operator_Precedence">&#x8FD0;&#x7B97;&#x7B26;&#x4F18;&#x5148;&#x7EA7;</a>&#x7684;&#x5B58;&#x5728;,&#x4E0B;&#x9762;&#x7684;&#x8868;&#x8FBE;&#x5F0F;&#x7684;&#x7ED3;&#x679C;&#x5374;&#x4E0D;&#x76F8;&#x540C;.&#x53F3;&#x4FA7;&#x88AB;&#x5C0F;&#x62EC;&#x53F7;&#x62EC;&#x8D77;&#x6765;&#x7684;&#x64CD;&#x4F5C;&#x53D8;&#x6210;&#x4E86;&#x72EC;&#x7ACB;&#x7684;&#x8868;&#x8FBE;&#x5F0F;.</p>
<pre class="brush: js  language-js" style="padding: 1em 0px 1em 30px; font-size: 14px; white-space: normal; color: rgb(77, 78, 83);"><code class="language-js" style="direction: ltr; white-space: pre;"><span class="token keyword" style="color: rgb(0, 119, 170);">false</span> <span class="token operator" style="color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">&amp;&amp;</span> <span class="token keyword" style="color: rgb(0, 119, 170);">true</span>  <span class="token operator" style="color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">||</span> <span class="token keyword" style="color: rgb(0, 119, 170);">true</span>     <span class="token comment" style="color: rgb(112, 128, 144);"> // &#x7ED3;&#x679C;&#x4E3A; true
</span><span class="token keyword" style="color: rgb(0, 119, 170);">false</span> <span class="token operator" style="color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">&amp;&amp;</span> <span class="token punctuation" style="color: rgb(153, 153, 153);">(</span><span class="token keyword" style="color: rgb(0, 119, 170);">true</span> <span class="token operator" style="color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">||</span> <span class="token keyword" style="color: rgb(0, 119, 170);">true</span><span class="token punctuation" style="color: rgb(153, 153, 153);">)</span>    <span class="token comment" style="color: rgb(112, 128, 144);"> // &#x7ED3;&#x679C;&#x4E3A; false</span></code></pre>
<h3 id="&#x903B;&#x8F91;&#x4E0E;_()">&#x903B;&#x8F91;&#x4E0E; (&amp;&amp;)</h3>
<p>&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x662F;&#xA0;<font face="Consolas, Monaco, Andale Mono, monospace">&amp;&amp;</font>&#xA0;(&#x903B;&#x8F91;&#x4E0E;) &#x8FD0;&#x7B97;&#x7B26;&#x7684;&#x793A;&#x4F8B;.</p>
<pre style="font-size: 14px;">a1=true &amp;&amp; true       // t &amp;&amp; t &#x7ED3;&#x679C;&#x4E3A; true
a2=true &amp;&amp; false      // t &amp;&amp; f &#x7ED3;&#x679C;&#x4E3A;<span style="font-size: 1rem;"> false</span>
a3=false &amp;&amp; true      // f &amp;&amp; t &#x7ED3;&#x679C;&#x4E3A; <span style="font-size: 1rem;">false</span>
a4=false &amp;&amp; (3 == 4)  // f &amp;&amp; f &#x7ED3;&#x679C;&#x4E3A;<span style="font-size: 1rem;"> false</span>
a5=&quot;Cat&quot; &amp;&amp; &quot;Dog&quot;     // t &amp;&amp; t &#x7ED3;&#x679C;&#x4E3A;<span style="font-size: 1rem;"> Dog</span>
a6=false &amp;&amp; &quot;Cat&quot;     // f &amp;&amp; t &#x7ED3;&#x679C;&#x4E3A;<span style="font-size: 1rem;"> false</span>
a7=&quot;Cat&quot; &amp;&amp; false     // t &amp;&amp; f &#x7ED3;&#x679C;&#x4E3A;<span style="font-size: 1rem;"> false</span>
</pre>
<h3 id="&#x903B;&#x8F91;&#x6216;_()">&#x903B;&#x8F91;&#x6216; (||)</h3>
<p>&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x662F;&#xA0;<font face="Consolas, Monaco, Andale Mono, monospace">||</font>&#xA0;(&#x903B;&#x8F91;&#x6216;) &#x8FD0;&#x7B97;&#x7B26;&#x7684;&#x793A;&#x4F8B;.</p>
<pre style="font-size: 14px;">o1=true || true       // t || t &#x7ED3;&#x679C;&#x4E3A;<span style="font-size: 1rem;"> true</span>
o2=false || true      // f || t &#x7ED3;&#x679C;&#x4E3A;<span style="font-size: 1rem;"> true</span>
o3=true || false      // t || f &#x7ED3;&#x679C;&#x4E3A;<span style="font-size: 1rem;"> true</span>
o4=false || (3 == 4)  // f || f &#x7ED3;&#x679C;&#x4E3A;<span style="font-size: 1rem;"> false</span>
o5=&quot;Cat&quot; || &quot;Dog&quot;     // t || t &#x7ED3;&#x679C;&#x4E3A;<span style="font-size: 1rem;"> Cat</span>
o6=false || &quot;Cat&quot;     // f || t &#x7ED3;&#x679C;&#x4E3A;<span style="font-size: 1rem;"> Cat</span>
o7=&quot;Cat&quot; || false     // t || f &#x7ED3;&#x679C;&#x4E3A;<span style="font-size: 1rem;"> Cat</span>
</pre>
<h3 id="&#x903B;&#x8F91;&#x975E;_(!)">&#x903B;&#x8F91;&#x975E; (!)</h3>
<p>&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x662F;&#xA0;<code>!</code>&#xA0;(&#x903B;&#x8F91;&#x975E;) &#x8FD0;&#x7B97;&#x7B26;&#x7684;&#x793A;&#x4F8B;.</p>
<pre style="font-size: 14px;">n1=!true              //&#xA0;!t &#x7ED3;&#x679C;&#x4E3A;<span style="font-size: 1rem;"> false</span>
n2=!false             //&#xA0;!f &#x7ED3;&#x679C;&#x4E3A;<span style="font-size: 1rem;"> true</span>
n3=!&quot;Cat&quot;             //&#xA0;!t &#x7ED3;&#x679C;&#x4E3A;<span style="font-size: 1rem;"> false</span></pre>
<h3 id="&#x8F6C;&#x6362;&#x89C4;&#x5219;" style="line-height: 24px; font-size: 1.71428571428571rem;">&#x8F6C;&#x6362;&#x89C4;&#x5219;</h3>
<h4 id="&#x5C06;_AND_&#x8F6C;&#x6362;&#x4E3A;_OR" style="line-height: 18px; font-size: 1.28571428571429rem;">&#x5C06;&#xA0;<span style="font-size: 1.28571428571429rem;">AND&#xA0;</span><span style="font-size: 1.28571428571429rem;">&#xA0;&#x8F6C;&#x6362;&#x4E3A; OR</span></h4>
<p>&#x4E0B;&#x9762;&#x6D89;&#x53CA;&#x5230;Boolean&#x8FD0;&#x7B97;&#x7684;&#x6DF7;&#x5408;&#x7684;&#x64CD;&#x4F5C;:</p>
<pre class="brush: js">bCondition1 &amp;&amp; bCondition2</pre>
<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 0px; background: 0px 0px;">
 &#xA0;</div>
<p>&#x4E0E;&#x4E0B;&#x9762;&#x7684;&#x76F8;&#x7B49;:</p>
<pre class="brush: js">!(!bCondition1 || !bCondition2)</pre>
<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 0px; background: 0px 0px;">
 &#xA0;</div>
<h4 id="&#x5C06;_OR_&#x8F6C;&#x6362;&#x4E3A;_AND" style="line-height: 18px; font-size: 1.28571428571429rem;">&#x5C06; OR &#x8F6C;&#x6362;&#x4E3A; AND</h4>
<p>&#x4E0B;&#x9762;&#x6D89;&#x53CA;&#x5230;Boolean&#x8FD0;&#x7B97;&#x7684;&#x6DF7;&#x5408;&#x7684;&#x64CD;&#x4F5C;:</p>
<pre class="brush: js">bCondition1 || bCondition2</pre>
<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 0px; background: 0px 0px;">
 &#xA0;</div>
<p>&#x4E0E;&#x4E0B;&#x9762;&#x7684;&#x76F8;&#x7B49;:</p>
<pre class="brush: js">!(!bCondition1 &amp;&amp; !bCondition2)</pre>
<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 0px; background: 0px 0px;">
 &#xA0;</div>
<h3 id="&#x5220;&#x9664;&#x5D4C;&#x5957;&#x7684;&#x5C0F;&#x62EC;&#x53F7;" style="line-height: 24px; font-size: 1.71428571428571rem;">&#x5220;&#x9664;&#x5D4C;&#x5957;&#x7684;&#x5C0F;&#x62EC;&#x53F7;</h3>
<p>&#x7531;&#x4E8E;&#x903B;&#x8F91;&#x8868;&#x8FBE;&#x5F0F;&#x662F;&#x4ECE;&#x5DE6;&#x5F80;&#x53F3;&#x8BA1;&#x7B97;&#x7684;,&#x6240;&#x4EE5;&#x901A;&#x5E38;&#x53EF;&#x4EE5;&#x6309;&#x7167;&#x4E0B;&#x9762;&#x7684;&#x89C4;&#x5219;&#x5220;&#x9664;&#x5C0F;&#x62EC;&#x53F7;.</p>
<h4 id="&#x5220;&#x9664;&#x5D4C;&#x5957;&#x7684;_AND" style="line-height: 18px; font-size: 1.28571428571429rem;">&#x5220;&#x9664;&#x5D4C;&#x5957;&#x7684; AND</h4>
<p>&#x4E0B;&#x9762;&#x6D89;&#x53CA;&#x5230;Boolean&#x8FD0;&#x7B97;&#x7684;&#x6DF7;&#x5408;&#x7684;&#x64CD;&#x4F5C;:</p>
<pre class="brush: js">bCondition1 || (bCondition2 &amp;&amp; bCondition3)</pre>
<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 0px; background: 0px 0px;">
 &#xA0;</div>
<p>&#x4E0E;&#x4E0B;&#x9762;&#x7684;&#x76F8;&#x7B49;:</p>
<pre class="brush: js">bCondition1 || bCondition2 &amp;&amp; bCondition3</pre>
<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 0px; background: 0px 0px;">
 &#xA0;</div>
<h4 id="&#x5220;&#x9664;&#x5D4C;&#x5957;&#x7684;_OR" style="line-height: 18px; font-size: 1.28571428571429rem;">&#x5220;&#x9664;&#x5D4C;&#x5957;&#x7684; OR</h4>
<p>&#x4E0B;&#x9762;&#x6D89;&#x53CA;&#x5230;Boolean&#x8FD0;&#x7B97;&#x7684;&#x6DF7;&#x5408;&#x7684;&#x64CD;&#x4F5C;:</p>
<pre class="brush: js">bCondition1 &amp;&amp; (bCondition2 || bCondition3)</pre>
<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 0px; background: 0px 0px;">
 &#xA0;</div>
<p>&#x4E0E;&#x4E0B;&#x9762;&#x7684;&#x76F8;&#x7B49;:</p>
<pre><span class="brush: js" style="font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; font-style: inherit; font-weight: inherit; white-space: pre; line-height: 1.5; color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">!</span><span class="token punctuation" style="font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; font-style: inherit; font-weight: inherit; white-space: pre; line-height: 1.5; color: rgb(153, 153, 153);">(</span><span class="token operator" style="font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; font-style: inherit; font-weight: inherit; white-space: pre; line-height: 1.5; color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">!</span><span style="color: inherit; font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; font-style: inherit; font-weight: inherit; white-space: pre; line-height: 1.5; background-color: rgb(250, 251, 252);">bCondition1 </span><span class="token operator" style="font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; font-style: inherit; font-weight: inherit; white-space: pre; line-height: 1.5; color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">||</span><span style="color: inherit; font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; font-style: inherit; font-weight: inherit; white-space: pre; line-height: 1.5; background-color: rgb(250, 251, 252);"> </span><span class="token operator" style="font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; font-style: inherit; font-weight: inherit; white-space: pre; line-height: 1.5; color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">!</span><span style="color: inherit; font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; font-style: inherit; font-weight: inherit; white-space: pre; line-height: 1.5; background-color: rgb(250, 251, 252);">bCondition2 </span><span class="token operator" style="font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; font-style: inherit; font-weight: inherit; white-space: pre; line-height: 1.5; color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">&amp;&amp;</span><span style="color: inherit; font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; font-style: inherit; font-weight: inherit; white-space: pre; line-height: 1.5; background-color: rgb(250, 251, 252);"> </span><span class="token operator" style="font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; font-style: inherit; font-weight: inherit; white-space: pre; line-height: 1.5; color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">!</span><span style="color: inherit; font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; font-style: inherit; font-weight: inherit; white-space: pre; line-height: 1.5; background-color: rgb(250, 251, 252);">bCondition3</span><span class="token punctuation" style="font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; font-style: inherit; font-weight: inherit; white-space: pre; line-height: 1.5; color: rgb(153, 153, 153);">)</span></pre>
<h2 id="&#x89C4;&#x8303;" style="margin-bottom: 20px; line-height: 30px; font-size: 2.14285714285714rem;">&#x89C4;&#x8303;</h2>
<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x8BF4;&#x660E;</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition.</td>
   <td>Standard</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-11.4.9" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Logical NOT Operator</small></a><br>
    <a href="http://www.ecma-international.org/ecma-262/5.1/#sec-11.11" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Binary Logical Operators</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-logical-not-operator" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Logical NOT operator</small></a><br>
    <a href="http://www.ecma-international.org/ecma-262/6.0/#sec-binary-logical-operators" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Binary Logical Operators</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>
<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;" style="margin-bottom: 20px; line-height: 30px; font-size: 2.14285714285714rem;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>
<p></p><div class="htab"> 
    <a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a> 
    <ul> 
        <li class="selected"><a>Desktop</a></li> 
        <li><a>Mobile</a></li> 
    </ul> 
</div><p></p>
<div id="compat-desktop">
 <table class="compat-table" style="border-color: transparent;">
  <tbody>
   <tr>
    <th style="line-height: 16px;">Feature</th>
    <th style="line-height: 16px;">Chrome</th>
    <th style="line-height: 16px;">Firefox (Gecko)</th>
    <th style="line-height: 16px;">Internet Explorer</th>
    <th style="line-height: 16px;">Opera</th>
    <th style="line-height: 16px;">Safari</th>
   </tr>
   <tr>
    <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_Operators$edit#Logical_AND" class="new">&#x903B;&#x8F91;&#x4E0E; (<code>&amp;&amp;</code>)</a></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   </tr>
   <tr>
    <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_Operators$edit#Logical_OR" class="new">&#x903B;&#x8F91;&#x6216; (<code>||</code>)</a></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   </tr>
   <tr>
    <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_Operators$edit#Logical_NOT" class="new">&#x903B;&#x8F91;&#x975E; (<code>!</code>)</a></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   </tr>
  </tbody>
 </table>
</div>
<p id=".E6.A0.87.E5.87.86" style="margin-bottom: 20px; line-height: 30px; font-size: 2.14285714285714rem;">&#xA0;</p>
<div id="compat-mobile">
 <table class="compat-table" style="border-color: transparent;">
  <tbody>
   <tr>
    <th style="line-height: 16px;">Feature</th>
    <th style="line-height: 16px;">Android</th>
    <th style="line-height: 16px;">Chrome for Android</th>
    <th style="line-height: 16px;">Firefox Mobile (Gecko)</th>
    <th style="line-height: 16px;">IE Mobile</th>
    <th style="line-height: 16px;">Opera Mobile</th>
    <th style="line-height: 16px;">Safari Mobile</th>
   </tr>
   <tr>
    <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_Operators$edit#Logical_AND" class="new">&#x903B;&#x8F91;&#x4E0E; (<code>&amp;&amp;</code>)</a></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   </tr>
   <tr>
    <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_Operators$edit#Logical_OR" class="new">&#x903B;&#x8F91;&#x6216; (<code>||</code>)</a></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   </tr>
   <tr>
    <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_Operators$edit#Logical_NOT" class="new">&#x903B;&#x8F91;&#x975E; (<code>!</code>)</a></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   </tr>
  </tbody>
 </table>
</div>
<h3 name="JavaScript_1.0_and_1.1" style="line-height: 24px; font-size: 1.71428571428571rem;" id="JavaScript_1.0_and_1.1">&#x5411;&#x540E;&#x517C;&#x5BB9;: &#x5728; JavaScript 1.0 &#x548C; 1.1 &#x4E2D;&#x7684;&#x8868;&#x73B0;</h3>
<p><span style="line-height: 1.5;">&amp;&amp; &#x548C;|| &#x8868;&#x8FBE;&#x5F0F;&#x7684;&#x884C;&#x4E3A;&#x5982;&#x4E0B;</span>:</p>
<table class="fullwidth-table">
 <tbody>
  <tr>
   <th>&#x8FD0;&#x7B97;&#x7B26;</th>
   <th>&#x793A;&#x4F8B;</th>
   <th>&#x8BF4;&#x660E;</th>
  </tr>
  <tr>
   <td><code>&amp;&amp;</code></td>
   <td><code><em>expr1</em> &amp;&amp; <em>expr2</em></code></td>
   <td>&#x5982;&#x679C;&#x7B2C;&#x4E00;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;(expr1) &#x80FD;&#x8F6C;&#x6362;&#x6210;false, &#x90A3;&#x4E48;&amp;&amp; &#x8FD0;&#x7B97;&#x4F1A;&#x8FD4;&#x56DE;false,&#x800C;&#x4E0D;&#x662F;<em>expr1</em>&#x7684;&#x503C;.</td>
  </tr>
  <tr>
   <td><code>||</code></td>
   <td><code><em>expr1</em> || <em>expr2</em></code></td>
   <td>&#x5982;&#x679C;&#x7B2C;&#x4E00;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;(expr1) &#x80FD;&#x8F6C;&#x6362;&#x6210;true, &#x90A3;&#x4E48;|| &#x8FD0;&#x7B97;&#x4F1A;&#x8FD4;&#x56DE;true,&#x800C;&#x4E0D;&#x662F;expr1&#x7684;&#x503C;.</td>
  </tr>
 </tbody>
</table>
<h2 name="See_also" style="margin-bottom: 20px; line-height: 30px; font-size: 2.14285714285714rem;" id="See_also">&#x53C2;&#x8003;&#x8D44;&#x6599;</h2>
<ul>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators">&#x4F4D;&#x8FD0;&#x7B97;&#x7B26;</a></li>
</ul>
                  
                
              