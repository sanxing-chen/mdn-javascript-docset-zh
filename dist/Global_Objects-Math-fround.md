
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="overheadIndicator" style="background: #9CF49C;"> 
    <p><strong>&#x8BE5;&#x7279;&#x6027;&#x5904;&#x4E8E; ECMAScript 6 &#x89C4;&#x8303;&#x8349;&#x6848;&#x4E2D;&#xFF0C;&#x76EE;&#x524D;&#x7684;&#x5B9E;&#x73B0;&#x5728;&#x672A;&#x6765;&#x53EF;&#x80FD;&#x4F1A;&#x53D1;&#x751F;&#x5FAE;&#x8C03;&#xFF0C;&#x8BF7;&#x8C28;&#x614E;&#x4F7F;&#x7528;&#x3002;</strong></p> 
</div></div>

<h2 id="Summary" name="Summary">&#x6982;&#x8FF0;</h2>

<p><strong><code>Math.fround()</code></strong>&#xA0;&#x53EF;&#x4EE5;&#x5C06;&#x4EFB;&#x610F;&#x7684;&#x6570;&#x5B57;&#x8F6C;&#x6362;&#x4E3A;&#x79BB;&#x5B83;&#x6700;&#x8FD1;&#x7684;<a class="external" href="https://en.wikipedia.org/wiki/Single-precision_floating-point_format" title="link to the wikipedia page on single-precision floating-point format">&#x5355;&#x7CBE;&#x5EA6;&#x6D6E;&#x70B9;&#x6570;</a>&#x5F62;&#x5F0F;&#x7684;&#x6570;&#x5B57;&#x3002;</p>

<h2 id="Syntax" name="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>Math.fround(<var>x</var>)</code></pre>

<h3 id="Parameters" name="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>x</code></dt>
 <dd>&#x4EFB;&#x610F;&#x7684;&#x6570;&#x5B57;</dd>
</dl>

<h2 id="Examples" name="Examples">&#x793A;&#x4F8B;</h2>

<pre class="brush: js">Math.fround(0);     // 0
Math.fround(1);     // 1
Math.fround(1.337); // 1.3370000123977661
Math.fround(1.5);   // 1.5
Math.fround(NaN);   // NaN
</pre>

<h2 id="Polyfill" name="Polyfill">Polyfill</h2>

<p>&#x4E0B;&#x9762;&#x7684;&#x51FD;&#x6570;&#x53EF;&#x4EE5;&#x6A21;&#x62DF;&#x8FD9;&#x4E2A; API&#xFF0C;&#x4F46;&#x524D;&#x63D0;&#x662F;&#x6D4F;&#x89C8;&#x5668;&#x5FC5;&#x987B;&#x5DF2;&#x7ECF;&#x652F;&#x6301;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Float32Array" title="Float32Array &#x7C7B;&#x578B;&#x6570;&#x7EC4;&#x4EE3;&#x8868;&#x7684;&#x662F;&#x5E73;&#x53F0;&#x5B57;&#x8282;&#x987A;&#x5E8F;&#x4E3A;32&#x4F4D;&#x7684;&#x6D6E;&#x70B9;&#x6570;&#x578B;&#x6570;&#x7EC4;(&#x5BF9;&#x5E94;&#x4E8E; C&#xA0;&#x6D6E;&#x70B9;&#x6570;&#x636E;&#x7C7B;&#x578B;) &#x3002;&#xA0;&#x5982;&#x679C;&#x9700;&#x8981;&#x63A7;&#x5236;&#x5B57;&#x8282;&#x987A;&#x5E8F;, &#x4F7F;&#x7528; DataView&#xA0;&#x66FF;&#x4EE3;.&#xA0;&#x5185;&#x5BB9;&#x521D;&#x59CB;&#x5316;&#x4E3A;0&#x3002;&#x4E00;&#x65E6;&#x5EFA;&#x7ACB;&#x8D77;&#x6765;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x53C2;&#x8003;&#x4F7F;&#x7528;&#x5BF9;&#x8C61;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x7684;&#x65B9;&#x6CD5;&#xFF0C;&#x6216;&#x8005;&#x4F7F;&#x7528;&#x6807;&#x51C6;&#x6570;&#x7EC4;&#x7D22;&#x5F15;&#x8BED;&#x6CD5; (&#x8FD9;&#x5C31;&#x662F;&#x4F7F;&#x7528;&#x62EC;&#x53F7;)&#x3002;"><code>Float32Array</code></a>&#xFF1A;</p>

<pre class="brush: js">Math.fround = Math.fround || function(x) {
  return new Float32Array([x])[0];
};
</pre>

<h2 id="Specifications" name="Specifications">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x540D;&#x79F0;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
  </tr>
  <tr>
   <td><a class="external" href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.fround" hreflang="en" lang="en">ECMAScript 6 (ECMA-262)<br><small lang="zh-CN">Math.fround</small></a></td>
   <td><span class="spec-RC">Release Candidate</span></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<div><div class="htab"> 
    <a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a> 
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
   <td>38</td>
   <td><a href="/en-US/Firefox/Releases/26" title="Released on 2013-12-10.">26</a> (26)</td>
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
   <td><span style="color: rgb(255, 153, 0);" title="Compatibility unknown; please update this.">?</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>iOS 8</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also" name="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/round" title="Math.round() &#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x503C;&#x56DB;&#x820D;&#x4E94;&#x5165;&#x540E;&#x6700;&#x63A5;&#x8FD1;&#x7684;&#x6574;&#x6570;&#x503C;&#x3002;"><code>Math.round()</code></a></li>
</ul>
                  
                
              