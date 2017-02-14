
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section>&#xA0;</div>

<p>The&#xA0;<code><strong>fill()</strong></code>&#xA0;&#x65B9;&#x6CD5;&#x5C06;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x4ECE;&#x5F00;&#x59CB;&#x7D22;&#x5F15;&#x586B;&#x5145;&#x5230;&#x5177;&#x6709;&#x9759;&#x6001;&#x503C;&#x7684;&#x7ED3;&#x675F;&#x7D22;&#x5F15;</p>

<pre><code>var numbers = [1, 2, 3]
numbers.fill(1);

// results in [1, 1, 1]</code></pre>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre><var>arr</var>.fill(<var>value</var><var><var>)</var></var>&#xA0;
<var>arr</var>.fill(<var>value</var>,&#xA0;<var>start<var>)&#xA0;
</var>arr</var>.fill(<var>value</var>,&#xA0;<var>start<var>,&#xA0;<var>end</var>)</var></var>
</pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt>value</dt>
 <dd>&#x7528;&#x6765;&#x586B;&#x5145;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x7684;&#x503C;&#x3002;</dd>
 <dt>start</dt>
 <dd>&#x53EF;&#x9009;&#xFF0C;&#x5F00;&#x59CB;&#x7D22;&#x5F15;&#x3002;</dd>
 <dt>end</dt>
 <dd>&#x53EF;&#x9009;&#xFF0C;&#x7ED3;&#x675F;&#x7D22;&#x5F15;&#x3002;</dd>
 <dt>
 <h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

 <p>&#x4FEE;&#x6539;&#x540E;&#x7684;&#x6570;&#x7EC4;&#x3002;</p>
 </dt>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x5177;&#x4F53;&#x8981;&#x586B;&#x5145;&#x7684;&#x5143;&#x7D20;&#x533A;&#x95F4;&#x662F; [<code>start</code>, <code>end</code>) , &#x4E00;&#x4E2A;&#x534A;&#x5F00;&#x534A;&#x95ED;&#x533A;&#x95F4;.</p>

<p><strong><code>fill</code></strong> &#x65B9;&#x6CD5;&#x63A5;&#x53D7;&#x4E09;&#x4E2A;&#x53C2;&#x6570;&#xA0;<code>value</code>, <code>start</code> &#x4EE5;&#x53CA; <code>end</code>.<span>&#xA0;<code>start</code> &#x548C; <code>end</code> &#x53C2;&#x6570;&#x662F;&#x53EF;&#x9009;&#x7684;, &#x5176;&#x9ED8;&#x8BA4;&#x503C;&#x5206;&#x522B;&#x4E3A;&#xA0;<code>0</code>&#xA0;&#x548C; <code>this</code> &#x5BF9;&#x8C61;&#x7684;&#xA0;<code>length &#x5C5E;&#x6027;&#x503C;</code>.</span></p>

<p><span>&#x5982;&#x679C;&#xA0;<code>start</code>&#xA0;&#x662F;&#x4E2A;&#x8D1F;&#x6570;, &#x5219;&#x5F00;&#x59CB;&#x7D22;&#x5F15;&#x4F1A;&#x88AB;&#x81EA;&#x52A8;&#x8BA1;&#x7B97;&#x6210;&#x4E3A;&#xA0;<code>length+start, &#x5176;&#x4E2D;</code>&#xA0;<code>length</code>&#xA0;&#x662F;&#xA0;</span><code>this</code><span>&#xA0;&#x5BF9;&#x8C61;&#x7684;&#xA0;</span><code>length &#x5C5E;&#x6027;&#x503C;</code><span>. &#x5982;&#x679C; </span><code>end</code><span>&#xA0;&#x662F;&#x4E2A;&#x8D1F;&#x6570;, &#x5219;&#x7ED3;&#x675F;&#x7D22;&#x5F15;&#x4F1A;&#x88AB;&#x81EA;&#x52A8;&#x8BA1;&#x7B97;&#x6210;&#x4E3A;&#xA0;</span><code>length+end</code><span>.</span></p>

<p><span><strong>fill</strong>&#xA0;&#x65B9;&#x6CD5;&#x6545;&#x610F;&#x88AB;&#x8BBE;&#x8BA1;&#x6210;&#x901A;&#x7528;&#x65B9;&#x6CD5;, &#x4E5F;&#x5C31;&#x662F;&#x8BF4;&#x5B83;&#x4E0D;&#x9700;&#x8981;&#xA0;<code>this</code>&#xA0;&#x503C;&#x5FC5;&#x987B;&#x662F;&#x4E2A;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;, &#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x4E5F;&#x662F;&#x53EF;&#x4EE5;&#x8C03;&#x7528;&#x8BE5;&#x65B9;&#x6CD5;&#x7684; .</span></p>

<p><strong style="line-height: 1.5;">fill</strong><span style="line-height: 1.5;">&#xA0;&#x65B9;&#x6CD5;&#x662F;&#x4E2A;&#x53EF;&#x53D8;&#x65B9;&#x6CD5;, &#x5B83;&#x4F1A;&#x6539;&#x53D8;&#x8C03;&#x7528;&#x5B83;&#x7684; <code>this</code> &#x5BF9;&#x8C61;&#x672C;&#x8EAB;, &#x7136;&#x540E;&#x8FD4;&#x56DE;&#x5B83;, &#x800C;&#x5E76;&#x4E0D;&#x662F;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x526F;&#x672C;.</span></p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<pre class="brush: js">[1, 2, 3].fill(4)            // [4, 4, 4]
[1, 2, 3].fill(4, 1)         // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2)      // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1)      // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2)    // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN)  // [1, 2, 3]
Array(3).fill(4);            // [4, 4, 4]
[].fill.call({length: 3}, 4) // {0: 4, 1: 4, 2: 4, length: 3}</pre>

<h2 name="Compatibility" id="Compatibility">Polyfill</h2>

<pre class="brush: js">if (!Array.prototype.fill) {
  Array.prototype.fill = function(value) {

    // Steps 1-2.
&#xA0; &#xA0; if (this == null) {
&#xA0; &#xA0; &#xA0; throw new TypeError(&apos;this is null or not defined&apos;);
&#xA0; &#xA0; }

    var O = Object(this);

    // Steps 3-5.
    var len = O.length &gt;&gt;&gt; 0; // parseInt(O.length)

    // Steps 6-7.
    var start = arguments[1];
    var relativeStart = start &gt;&gt; 0;

    // Step 8.
    var k = relativeStart &lt; 0 ?
&#xA0;     Math.max(len + relativeStart, 0) :
&#xA0;     Math.min(relativeStart, len);

    // Steps 9-10.
    var end = arguments[2];
    var relativeEnd = end === undefined ?
&#xA0;     len : 
&#xA0;     end &gt;&gt; 0;

    // Step 11.
    var final = relativeEnd &lt; 0 ?
&#xA0;     Math.max(len + relativeEnd, 0) :
&#xA0;     Math.min(relativeEnd, len);

    // Step 12.
    while(k &lt; final) {
        O[k] = value;
&#xA0;       k++;
    }

    // Step 13.
    return O;
  };
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
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.fill" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Array.prototype.fill</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-array.prototype.fill" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Array.prototype.fill</small></a></td>
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
   <td>Basic support</td>
   <td>45 [1]</td>
   <td><a title="Released on 2014-07-22." href="/en-US/Firefox/Releases/31">31</a> (31)</td>
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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>31.0 (31)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>8.0</td>
  </tr>
 </tbody>
</table>

<p>[1] &#x4ECE;Chrome36&#x5F00;&#x59CB;&#xFF0C;&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x53EF;&#x8BBE;&#x7F6E;&#x7684;&#x3002;&#xA0;In chrome://flags, activate the entry &#x201C;Enable Experimental JavaScript&#x201D;.</p>
</div>

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;</h2>

<ul>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Array"><code>Array</code></a></li>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/fill" class="new"><code>TypedArray.prototype.fill()</code></a></li>
</ul>
                  
                
              