
                
                  
                    <div>
<div>&#xA0;<section class="Quick_links" id="Quick_Links"><!-- --></section></div>
</div>

<h2 name="Summary" id="Summary">&#x6982;&#x89C8;</h2>

<p><span style="line-height: 19.0909080505371px;">&#x5F53;&#x6307;&#x5B9A;&#x6761;&#x4EF6;&#x4E3A; true &#x65F6;&#xFF0C;</span><strong>if &#x8BED;&#x53E5;</strong>&#xA0;&#x4F1A;&#x6267;&#x884C;&#x4E00;&#x6761;&#x8BED;&#x53E5;&#x3002;&#x5982;&#x679C;&#x8BE5;&#x6761;&#x4EF6;&#x4E3A; false&#xFF0C;&#x5219;&#x6267;&#x884C;&#x53E6;&#x4E00;&#x6761;&#x8BED;&#x53E5;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">if (<em>condition</em>)
   <em>statement1</em>
[else
   <em>statement2</em>]
</pre>

<dl>
 <dt><code>condition</code></dt>
 <dd>&#x503C;&#x4E3A; true &#x6216; false &#x7684;&#x8868;&#x8FBE;&#x5F0F;</dd>
</dl>

<dl>
 <dt><code>statement1</code></dt>
 <dd>&#x5982;&#x679C;&#x6761;&#x4EF6;&#x503C;&#x4E3A; true &#x65F6;&#x6267;&#x884C;&#x7684;&#x8BED;&#x53E5;&#x3002;&#x53EF;&#x4E3A;&#x4EFB;&#x610F;&#x8BED;&#x53E5;&#xFF0C;&#x5305;&#x62EC;&#x66F4;&#x6DF1;&#x5C42;&#x7684;&#x5185;&#x90E8; if &#x8BED;&#x53E5;&#x3002;&#x8981;&#x6267;&#x884C;&#x591A;&#x6761;&#x8BED;&#x53E5;&#xFF0C;&#x4F7F;&#x7528;&#x8BED;&#x53E5;&#x5757; ({ ... }) &#x5C06;&#x8FD9;&#x4E9B;&#x8BED;&#x53E5;&#x5206;&#x7EC4;&#xFF1B;&#x82E5;&#x4E0D;&#x60F3;&#x6267;&#x884C;&#x8BED;&#x53E5;&#xFF0C;&#x5219;&#x4F7F;&#x7528;&#x7A7A;&#x8BED;&#x53E5;&#x3002;</dd>
</dl>

<dl>
 <dt><code>statement2</code></dt>
 <dd>&#x5982;&#x679C;&#x6761;&#x4EF6;&#x503C;&#x4E3A; false &#x4E14; else &#x4ECE;&#x53E5;&#x5B58;&#x5728;&#x65F6;&#x6267;&#x884C;&#x7684;&#x8BED;&#x53E5;&#x3002;<span style="line-height: 19.0909080505371px;">&#x53EF;&#x4E3A;&#x4EFB;&#x610F;&#x8BED;&#x53E5;&#xFF0C;&#x5305;&#x62EC;&#x8BED;&#x53E5;&#x5757;&#x548C;</span>&#x66F4;&#x6DF1;&#x5C42;&#x7684;&#x5185;&#x90E8; if &#x8BED;&#x53E5;<span style="line-height: 19.0909080505371px;">&#x3002;</span></dd>
</dl>

<h2 name="Description" id="Description">&#x8BF4;&#x660E;</h2>

<p>&#x591A;&#x5C42; <code>if...else</code>&#xA0;&#x8BED;&#x53E5;&#x53EF;&#x4F7F;&#x7528; else if &#x4ECE;&#x53E5;&#x3002;&#x6CE8;&#x610F;&#xFF1A;&#x5728; Javascript &#x4E2D;&#x6CA1;&#x6709;&#xA0;<code>elseif</code> (&#x4E00;&#x4E2A;&#x5355;&#x8BCD;)&#x5173;&#x952E;&#x5B57;&#x3002;</p>

<pre class="eval">if (<em>condition1</em>)
   <em>statement1</em>
else if (<em>condition2</em>)
   <em>statement2</em>
else if (<em>condition3</em>)
   <em>statement3</em>
...
else
   <em>statementN</em>
</pre>

<p>&#x4E0B;&#x9762;&#x662F;&#x5408;&#x7406;&#x6392;&#x7248;&#x7684;&#x5D4C;&#x5957; if &#x8BED;&#x53E5;&#xFF1A;</p>

<pre class="eval">if (<em>condition1</em>)
   <em>statement1</em>
else
   if (<em>condition2</em>)
      <em>statement2</em>
   else
      if (<em>condition3</em>)
...
</pre>

<p>&#x8981;&#x5728;&#x4E00;&#x4E2A;&#x4ECE;&#x53E5;&#x4E2D;&#x6267;&#x884C;&#x591A;&#x6761;&#x8BED;&#x53E5;&#xFF0C;&#x53EF;&#x4F7F;&#x7528;&#x8BED;&#x53E5;&#x5757; (<code>{ ... }</code>) &#x3002;&#x901A;&#x5E38;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x4E00;&#x76F4;&#x4F7F;&#x7528;&#x8BED;&#x53E5;&#x5757;&#x662F;&#x4E2A;&#x597D;&#x4E60;&#x60EF;&#xFF0C;&#x7279;&#x522B;&#x662F;&#x6709;&#x5185;&#x90E8; if &#x8BED;&#x53E5;&#x7684;&#x5D4C;&#x5957;&#x7684;&#x60C5;&#x51B5;&#xFF1A;</p>

<pre class="eval">if (<em>condition</em>) {
   <em>statements1</em>
} else {
   <em>statements2</em>
}
</pre>

<p>&#x4E0D;&#x8981;&#x88AB;&#x539F;&#x751F;boolean&#x503C;&#x7684;value&#x548C;false&#xA0;&#x4E0E;&#xA0;<a title="en/JavaScript/Reference/Global_Objects/Boolean" href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</a>&#x5BF9;&#x8C61;&#x7684;true&#x548C;false&#x503C;&#x8FF7;&#x60D1;.&#x3002;&#x6240;&#x6709;&#x4E0D;&#x662F;&#xA0;<code>undefined<font face="Open Sans, Arial, sans-serif">&#x3001;</font></code><code>null&#x3001;</code>&#xA0;<code>0<font face="Open Sans, Arial, sans-serif">&#x3001;</font></code><code>NaN&#x3001;</code>&#x7A7A;&#x5B57;&#x7B26;&#x4E32; (<code>&quot;&quot;</code>)&#xFF0C;&#xA0;&#x4EE5;&#x53CA;&#x4EFB;&#x610F;&#x5BF9;&#x8C61;&#xFF0C;&#x5305;&#x62EC;&#x503C;&#x4E3A;false&#x7684;Boolean&#x5BF9;&#x8C61;&#xFF0C;&#xA0;&#x5728;&#x6761;&#x4EF6;&#x8BED;&#x53E5;&#x4E2D;&#x90FD;&#x4E3A;true&#x3002;&#x4F8B;&#x5982;:</p>

<pre class="brush: js">var b = new Boolean(false);
if (b) //&#x8868;&#x8FBE;&#x5F0F;&#x7684;&#x503C;&#x4E3A;true
</pre>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<h3 name="Example:_Using_if...else" id="Example:_Using_if...else">&#x4F8B;&#x5B50;: &#x4F7F;&#x7528; <code>if...else</code></h3>

<pre class="brush: js">if (cipher_char === from_char) {
   result = result + to_char;
   x++;
} else {
   result = result + clear_char;
}
</pre>

<h3 id="&#x4F8B;&#x5B50;_&#x4F7F;&#x7528;_else_if">&#x4F8B;&#x5B50;: &#x4F7F;&#x7528; <code>else if</code></h3>

<p>&#x6CE8;&#x610F;&#xFF1A;Javascript&#x4E2D;&#x6CA1;&#x6709; elseif &#x8BED;&#x53E5;&#x3002;&#xA0;&#x4F46;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; else &#x548C; if &#x4E2D;&#x95F4;&#x6709;&#x7A7A;&#x683C;&#x7684;&#x8BED;&#x53E5;&#xFF1A;</p>

<pre class="brush: js">if (x &gt; 5) {

} else if (x &gt; 50) {

} else {

}</pre>

<h3 name="Example:_Assignment_within_the_conditional_expression" id="Example:_Assignment_within_the_conditional_expression">&#x4F8B;&#x5B50;: &#x6761;&#x4EF6;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#x7684;&#x8D4B;&#x503C;&#x8BED;&#x53E5;</h3>

<p>&#x5EFA;&#x8BAE;&#x4E0D;&#x8981;&#x5728;&#x6761;&#x4EF6;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#x5355;&#x7EAF;&#x7684;&#x4F7F;&#x7528;&#x8D4B;&#x503C;&#x8BED;&#x53E5;&#xFF0C;&#x56E0;&#x4E3A;&#x7C97;&#x770B;&#x4E0B;&#x8D4B;&#x503C;&#x8BED;&#x53E5;&#x7684;&#x4EE3;&#x7801;&#x5F88;&#x5BB9;&#x6613;&#x8BA9;&#x4EBA;&#x8BEF;&#x8BA4;&#x4E3A;&#x662F;&#x7B49;&#x6027;&#x8BED;&#x53E5;&#x3002;&#x6BD4;&#x5982;&#xFF0C;&#x4E0D;&#x8981;&#x4F7F;&#x7528;&#x4E0B;&#x9762;&#x793A;&#x4F8B;&#x7684;&#x4EE3;&#x7801;&#xFF1A;</p>

<pre class="brush: js">if (x = y) {
   /* do the right thing */
}
</pre>

<p>&#x5982;&#x679C;&#x4F60;&#x9700;&#x8981;&#x5728;&#x6761;&#x4EF6;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#x4F7F;&#x7528;&#x8D4B;&#x503C;&#x8BED;&#x53E5;&#xFF0C;&#x7528;&#x5706;&#x62EC;&#x53F7;&#x5305;&#x88F9;&#x8D4B;&#x503C;&#x8BED;&#x53E5;&#x3002;&#x6BD4;&#x5982;&#xFF1A;</p>

<pre class="brush: js">if ((x = y)) {
   /* do the right thing */
}
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
   <td>ECMAScript 1st Edition.</td>
   <td>Standard</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-12.5" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">if statement</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-if-statement" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">if statement</small></a></td>
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
 <li><a title="&#x8BED;&#x53E5;&#x5757; (&#x6216;&#x5176;&#x4ED6;&#x8BED;&#x8A00;&#x4E2D;&#x7684;&#xA0;&#x590D;&#x5408;&#x8BED;&#x53E5;) &#x7528;&#x6765;&#x7EC4;&#x7EC7;&#x96F6;&#x4E2A;&#x6216;&#x591A;&#x6761;&#x8BED;&#x53E5;. &#x7528;&#x4E00;&#x5BF9;&#x82B1;&#x62EC;&#x53F7;&#x754C;&#x5B9A;&#x8BED;&#x53E5;&#x5757;." href="/zh-CN/docs/Web/JavaScript/Reference/Statements/block"><code>block</code></a></li>
 <li><a title="switch&#x8BED;&#x53E5;&#x5BF9;&#x4E00;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;&#x6C42;&#x503C;&#xFF0C;&#x5C06;&#x7ED3;&#x679C;&#x4E0E; case &#x5B50;&#x8BED;&#x53E5;&#x6BD4;&#x8F83;&#xFF0C;&#x5982;&#x679C;&#x5339;&#x914D;&#xFF0C;&#x5219;&#x4ECE; case &#x5904;&#x7684;&#x8BED;&#x53E5;&#x5411;&#x4E0B;&#x6267;&#x884C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Statements/switch"><code>switch</code></a></li>
</ul>
                  
                
              