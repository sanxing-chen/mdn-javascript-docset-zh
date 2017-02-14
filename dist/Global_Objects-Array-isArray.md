
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code>Array.isArray()</code>&#xA0;&#x8BE5;&#x65B9;&#x6CD5;&#x9002;&#x7528;&#x4E8E;&#x786E;&#x5B9A;&#x4F20;&#x9012;&#x7684;&#x503C;&#x662F;&#x5426;&#x4E3A;<a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Array"><code>Array</code></a>&#x3002;</p>

<pre class="brush: js">Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray(&quot;foobar&quot;);   // false
Array.isArray(undefined);  // false</pre>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>Array.isArray(obj)</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>obj</code></dt>
 <dd>&#x9700;&#x8981;&#x68C0;&#x6D4B;&#x7684;&#x503C;&#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x5982;&#x679C;&#x5BF9;&#x8C61;&#x662F; <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Array"><code>Array</code></a>&#xFF0C;&#x5219;&#x4E3A;true; &#x5426;&#x5219;&#x4E3A;false&#x3002;</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x5982;&#x679C;&#x5BF9;&#x8C61;&#x662F; <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Array"><code>Array</code></a>&#xA0;&#xFF0C;&#x5219;&#x8FD4;&#x56DE;true&#xFF0C;&#x5426;&#x5219;&#x4E3A;false&#x3002;</p>

<p>&#x6709;&#x5173;&#x66F4;&#x591A;&#x8BE6;&#x7EC6;&#x4FE1;&#x606F;&#xFF0C;&#x8BF7;&#x53C2;&#x9605;&#x6587;&#x7AE0;<a href="http://web.mit.edu/jwalden/www/isArray.html" class="external">&#x4EE5;&#x7EDD;&#x5BF9;&#x7CBE;&#x786E;&#x5EA6;&#x786E;&#x5B9A;JavaScript&#x5BF9;&#x8C61;&#x662F;&#x5426;&#x4E3A;&#x6570;&#x7EC4;</a>&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<pre class="brush: js">// &#x4E0B;&#x9762;&#x7684;&#x51FD;&#x6570;&#x8C03;&#x7528;&#x90FD;&#x8FD4;&#x56DE; true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
// &#x9C9C;&#x4E3A;&#x4EBA;&#x77E5;&#x7684;&#x4E8B;&#x5B9E;&#xFF1A;&#x5176;&#x5B9E; Array.prototype &#x4E5F;&#x662F;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x3002;
Array.isArray(Array.prototype); 

// &#x4E0B;&#x9762;&#x7684;&#x51FD;&#x6570;&#x8C03;&#x7528;&#x90FD;&#x8FD4;&#x56DE; false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray(&apos;Array&apos;);
Array.isArray(true);
Array.isArray(false);
Array.isArray({ __proto__: Array.prototype });
</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>&#x5047;&#x5982;&#x4E0D;&#x5B58;&#x5728; Array.isArray()&#xFF0C;&#x5219;&#x5728;&#x5176;&#x4ED6;&#x4EE3;&#x7801;&#x4E4B;&#x524D;&#x8FD0;&#x884C;&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x5C06;&#x521B;&#x5EFA;&#x8BE5;&#x65B9;&#x6CD5;&#x3002;</p>

<pre class="brush: js">if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === &apos;[object Array]&apos;;
  };
}
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.3.2" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Array.isArray</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition. Implemented in JavaScript 1.8.5.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-array.isarray" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Array.isArray</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-array.isarray" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Array.isArray</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

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
   <td>5</td>
   <td><a title="Released on 2011-03-22." href="/en-US/Firefox/Releases/4">4.0</a> (2.0)</td>
   <td>9</td>
   <td>10.5</td>
   <td>5</td>
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
   <td>4.0 (2.0)</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Array"><code>Array</code></a></li>
</ul>
                  
                
              