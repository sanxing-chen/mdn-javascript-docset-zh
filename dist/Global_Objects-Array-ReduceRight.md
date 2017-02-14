
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<h2 id="&#x6982;&#x8FF0;">&#x6982;&#x8FF0;</h2>

<p><code><strong>reduceRight()</strong></code>&#xA0;&#x65B9;&#x6CD5;&#x63A5;&#x53D7;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x4F5C;&#x4E3A;&#x7D2F;&#x52A0;&#x5668;&#xFF08;accumulator&#xFF09;&#xFF0C;&#x8BA9;&#x6BCF;&#x4E2A;&#x503C;&#xFF08;&#x4ECE;&#x53F3;&#x5230;&#x5DE6;&#xFF0C;&#x4EA6;&#x5373;&#x4ECE;&#x5C3E;&#x5230;&#x5934;&#xFF09;&#x7F29;&#x51CF;&#x4E3A;&#x4E00;&#x4E2A;&#x503C;&#x3002;&#xFF08;&#x4E0E; <code>reduce()</code> &#x7684;&#x6267;&#x884C;&#x65B9;&#x5411;&#x76F8;&#x53CD;&#xFF09;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><em>arr</em>.reduceRight(<em>callback</em>[, <em>initialValue</em>])</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>&#x4E00;&#x4E2A;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#xFF0C;&#x7528;&#x6765;&#x64CD;&#x4F5C;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x53EF;&#x63A5;&#x53D7;&#x56DB;&#x4E2A;&#x53C2;&#x6570;&#xFF1A;
 <dl>
  <dt><code>previousValue</code></dt>
  <dd>&#x4E0A;&#x4E00;&#x6B21;&#x8C03;&#x7528;&#x56DE;&#x8C03;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#xFF0C;&#x6216;&#x63D0;&#x4F9B;&#x7684;&#xA0;<code>initialValue</code></dd>
  <dt><code>currentValue</code></dt>
  <dd>&#x5F53;&#x524D;&#x88AB;&#x5904;&#x7406;&#x7684;&#x5143;&#x7D20;</dd>
  <dt><code>index</code></dt>
  <dd>&#x5F53;&#x524D;&#x5904;&#x7406;&#x5143;&#x7D20;&#x7684;&#x7D22;&#x5F15;</dd>
  <dt><code>array</code></dt>
  <dd>&#x8C03;&#x7528; <code>reduce</code> &#x7684;&#x6570;&#x7EC4;</dd>
 </dl>
 </dd>
 <dt><code>initialValue</code></dt>
 <dd>&#x53EF;&#x4F5C;&#x4E3A;&#x7B2C;&#x4E00;&#x6B21;&#x8C03;&#x7528;&#x56DE;&#x8C03;&#xA0;<code>callback</code>&#xA0;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x53C2;&#x6570;</dd>
 <dt>
 <h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>
 </dt>
 <dd>
 <p>&#x6267;&#x884C;&#x4E4B;&#x540E;&#x7684;&#x8FD4;&#x56DE;&#x503C;</p>
 </dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>reduceRight</code> &#x4E3A;&#x6570;&#x7EC4;&#x4E2D;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x8C03;&#x7528;&#x4E00;&#x6B21; <code>callback</code> &#x56DE;&#x8C03;&#x51FD;&#x6570;&#xFF0C;&#x4F46;&#x662F;&#x6570;&#x7EC4;&#x4E2D;&#x88AB;&#x5220;&#x9664;&#x7684;&#x7D22;&#x5F15;&#x6216;&#x4ECE;&#x672A;&#x88AB;&#x8D4B;&#x503C;&#x7684;&#x7D22;&#x5F15;&#x4F1A;&#x8DF3;&#x8FC7;&#x3002;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x63A5;&#x53D7;&#x56DB;&#x4E2A;&#x53C2;&#x6570;&#xFF1A;&#x521D;&#x59CB;&#x503C;&#xFF08;&#x6216;&#x4E0A;&#x6B21;&#x8C03;&#x7528;&#x56DE;&#x8C03;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#xFF09;&#x3001;&#x5F53;&#x524D;&#x5143;&#x7D20;&#x503C;&#x3001;&#x5F53;&#x524D;&#x7D22;&#x5F15;&#xFF0C;&#x4EE5;&#x53CA;&#x8C03;&#x7528; <code>reduce</code> &#x7684;&#x6570;&#x7EC4;&#x3002;</p>

<p>&#x53EF;&#x4EE5;&#x50CF;&#x4E0B;&#x9762;&#x8FD9;&#x6837;&#x8C03;&#x7528; <code>reduceRight</code> &#x7684;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#xA0;<code>callback</code>&#xFF1A;</p>

<pre class="brush: js">array.reduceRight(function(previousValue, currentValue, index, array) {
    // ...
});
</pre>

<p>&#x9996;&#x6B21;&#x8C03;&#x7528;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x65F6;&#xFF0C;<code>previousValue</code> &#x548C; <code>currentValue</code>&#xA0;&#x53EF;&#x4EE5;&#x662F;&#x4E24;&#x4E2A;&#x503C;&#x4E4B;&#x4E00;&#x3002;&#x5982;&#x679C;&#x8C03;&#x7528; <code>reduceRight</code> &#x65F6;&#x63D0;&#x4F9B;&#x4E86;&#xA0;<code>initialValue</code>&#xA0;&#x53C2;&#x6570;&#xFF0C;&#x5219;&#xA0;<code>previousValue</code>&#xA0;&#x7B49;&#x4E8E;&#xA0;<code>initialValue</code>&#xFF0C;<code>currentValue</code>&#xA0;&#x7B49;&#x4E8E;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x503C;&#x3002;&#x5982;&#x679C;&#x6CA1;&#x6709;&#x63D0;&#x4F9B;&#xA0;<code>initialValue</code>&#xA0;&#x53C2;&#x6570;&#xFF0C;&#x5219;&#xA0;<code>previousValue</code> &#x7B49;&#x4E8E;&#x6570;&#x7EC4;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x503C;&#xFF0C;&#xA0;<code>currentValue</code> &#x7B49;&#x4E8E;&#x6570;&#x7EC4;&#x4E2D;&#x5012;&#x6570;&#x7B2C;&#x4E8C;&#x4E2A;&#x503C;&#x3002;</p>

<p>&#x5982;&#x679C;&#x6570;&#x7EC4;&#x4E3A;&#x7A7A;&#xFF0C;&#x4E14;&#x6CA1;&#x6709;&#x63D0;&#x4F9B;&#xA0;<code>initialValue</code> &#x53C2;&#x6570;&#xFF0C;&#x5C06;&#x4F1A;&#x629B;&#x51FA;&#x4E00;&#x4E2A;&#xA0;<code>TypeError &#x9519;&#x8BEF;&#x3002;&#x5982;&#x679C;&#x6570;&#x7EC4;&#x53EA;&#x6709;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x4E14;&#x6CA1;&#x6709;&#x63D0;&#x4F9B;</code>&#xA0;<code>initialValue </code>&#x53C2;&#x6570;&#xFF0C;&#x6216;&#x8005;&#x63D0;&#x4F9B;&#x4E86;&#xA0;<code>initialValue</code> &#x53C2;&#x6570;&#xFF0C;&#x4F46;&#x662F;&#x6570;&#x7EC4;&#x4E3A;&#x7A7A;&#x5C06;&#x4F1A;&#x76F4;&#x63A5;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x90A3;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x6216; <code>initialValue</code> &#x53C2;&#x6570;&#xFF0C;&#x800C;&#x4E0D;&#x4F1A;&#x8C03;&#x7528;&#xA0;<code>callback</code>&#x3002;</p>

<p>&#x8BE5;&#x51FD;&#x6570;&#x7684;&#x5B8C;&#x6574;&#x6267;&#x884C;&#x8FC7;&#x7A0B;&#x89C1;&#x4E0B;&#x4F8B;&#xFF1A;</p>

<pre class="brush: js">[0, 1, 2, 3, 4].reduceRight(function(previousValue, currentValue, index, array) {
    return previousValue + currentValue;
});
</pre>

<p>&#x56DE;&#x8C03;&#x5C06;&#x4F1A;&#x88AB;&#x8C03;&#x7528;&#x56DB;&#x6B21;&#xFF0C;&#x6BCF;&#x6B21;&#x8C03;&#x7528;&#x7684;&#x53C2;&#x6570;&#x53CA;&#x8FD4;&#x56DE;&#x503C;&#x5982;&#x4E0B;&#xFF1A;</p>

<table style="width: 100%;">
 <thead>
  <tr>
   <th scope="col">&#xA0;</th>
   <th scope="col"><code>previousValue</code></th>
   <th scope="col"><code>currentValue</code></th>
   <th scope="col"><code>index</code></th>
   <th scope="col"><code>array</code></th>
   <th scope="col">return value</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row">first call</th>
   <td>4</td>
   <td>3</td>
   <td>3</td>
   <td><code>[0,1,2,3,4]</code></td>
   <td><font face="Courier New, Andale Mono, monospace"><span style="line-height: normal;">7</span></font></td>
  </tr>
  <tr>
   <th scope="row">second call</th>
   <td>7</td>
   <td><code>2</code></td>
   <td><code>2</code></td>
   <td><code>[0,1,2,3,4]</code></td>
   <td><font face="Courier New, Andale Mono, monospace"><span style="line-height: normal;">9</span></font></td>
  </tr>
  <tr>
   <th scope="row">third call</th>
   <td>9</td>
   <td>1</td>
   <td>1</td>
   <td><code>[0,1,2,3,4]</code></td>
   <td><font face="Courier New, Andale Mono, monospace"><span style="line-height: normal;">10</span></font></td>
  </tr>
  <tr>
   <th scope="row">fourth call</th>
   <td>10</td>
   <td>0</td>
   <td>0</td>
   <td><code>[0,1,2,3,4]</code></td>
   <td><code>10</code></td>
  </tr>
 </tbody>
</table>

<p><code>reduceRight</code> &#x8FD4;&#x56DE;&#x503C;&#x662F;&#x6700;&#x540E;&#x4E00;&#x6B21;&#x8C03;&#x7528;&#x56DE;&#x8C03;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#xFF08;<code>10&#xFF09;&#x3002;</code></p>

<p>&#x5982;&#x679C;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#xA0;<code>initialValue</code>&#xA0;&#x53C2;&#x6570;&#xFF0C;&#x5219;&#x7ED3;&#x679C;&#x5982;&#x4E0B;&#xFF1A;</p>

<pre class="brush: js">[0, 1, 2, 3, 4].reduceRight(function(previousValue, currentValue, index, array) {
    return previousValue + currentValue;
}, 10);
</pre>

<table style="width: 100%;">
 <thead>
  <tr>
   <th scope="col">&#xA0;</th>
   <th scope="col"><code>previousValue</code></th>
   <th scope="col"><code>currentValue</code></th>
   <th scope="col"><code>index</code></th>
   <th scope="col"><code>array</code></th>
   <th scope="col">return value</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row">first call</th>
   <td><code>10</code></td>
   <td>4</td>
   <td>4</td>
   <td><code>[0,1,2,3,4]</code></td>
   <td><code>14</code></td>
  </tr>
  <tr>
   <th scope="row">second call</th>
   <td>14</td>
   <td>3</td>
   <td>3</td>
   <td><code>[0,1,2,3,4]</code></td>
   <td><code>17</code></td>
  </tr>
  <tr>
   <th scope="row">third call</th>
   <td>17</td>
   <td><code>2</code></td>
   <td><code>2</code></td>
   <td><code>[0,1,2,3,4]</code></td>
   <td><code>19</code></td>
  </tr>
  <tr>
   <th scope="row">fourth call</th>
   <td>19</td>
   <td>1</td>
   <td>1</td>
   <td><code>[0,1,2,3,4]</code></td>
   <td><font face="Courier New, Andale Mono, monospace"><span style="line-height: normal;">20</span></font></td>
  </tr>
  <tr>
   <th scope="row">fifth call</th>
   <td>20</td>
   <td>0</td>
   <td>0</td>
   <td><code>[0,1,2,3,4]</code></td>
   <td><code>20</code></td>
  </tr>
 </tbody>
</table>

<p><code>reduceRight</code> &#x8FD4;&#x56DE;&#x503C;&#x4E3A; 20&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F8B;&#x5B50;&#xFF1A;&#x6C42;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x4E2D;&#x6240;&#x6709;&#x503C;&#x7684;&#x548C;">&#x4F8B;&#x5B50;&#xFF1A;&#x6C42;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x4E2D;&#x6240;&#x6709;&#x503C;&#x7684;&#x548C;</h3>

<pre class="brush: js">var total = [0, 1, 2, 3].reduceRight(function(a, b) {
    return a + b;
});
// total == 6
</pre>

<h3 id="&#x4F8B;&#x5B50;&#xFF1A;&#x6241;&#x5E73;&#x5316;&#xFF08;flatten&#xFF09;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x4E3A;&#x6570;&#x7EC4;&#x7684;&#x6570;&#x7EC4;">&#x4F8B;&#x5B50;&#xFF1A;&#x6241;&#x5E73;&#x5316;&#xFF08;flatten&#xFF09;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x4E3A;&#x6570;&#x7EC4;&#x7684;&#x6570;&#x7EC4;</h3>

<pre class="brush: js">var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
    return a.concat(b);
}, []);
// flattened is [4, 5, 2, 3, 0, 1]
</pre>

<h3 id="&#x4F8B;&#x5B50;&#xFF1A;reduce_&#x4E0E;_reduceRight_&#x4E4B;&#x95F4;&#x7684;&#x533A;&#x522B;">&#x4F8B;&#x5B50;&#xFF1A;reduce &#x4E0E; reduceRight &#x4E4B;&#x95F4;&#x7684;&#x533A;&#x522B;</h3>

<pre><code>var a = [&quot;1&quot;, &quot;2&quot;, &quot;3&quot;, &quot;4&quot;, &quot;5&quot;]; 
var left  = a.reduce(function(prev, cur)      { return prev + cur; }); 
var right = a.reduceRight(function(prev, cur) { return prev + cur; }); 

console.log(left);  // &quot;12345&quot;
console.log(right); // &quot;54321&quot;</code></pre>

<h2 id="&#x517C;&#x5BB9;&#x6027;&#x65E7;&#x73AF;&#x5883;&#xFF08;Polyfill&#xFF09;">&#x517C;&#x5BB9;&#x6027;&#x65E7;&#x73AF;&#x5883;&#xFF08;Polyfill&#xFF09;</h2>

<p><code>reduceRight</code> &#x88AB;&#x6DFB;&#x52A0;&#x5230; ECMA-262 &#x6807;&#x51C6;&#x7B2C; 5 &#x7248;&#xFF0C;&#x56E0;&#x6B64;&#x5B83;&#x5728;&#x67D0;&#x4E9B;&#x5B9E;&#x73B0;&#x73AF;&#x5883;&#x4E2D;&#x53EF;&#x80FD;&#x4E0D;&#x88AB;&#x652F;&#x6301;&#x3002;&#x628A;&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x6DFB;&#x52A0;&#x5230;&#x811A;&#x672C;&#x5F00;&#x5934;&#x53EF;&#x4EE5;&#x89E3;&#x51B3;&#x6B64;&#x95EE;&#x9898;&#xFF0C;&#x4ECE;&#x800C;&#x5141;&#x8BB8;&#x5728;&#x90A3;&#x4E9B;&#x6CA1;&#x6709;&#x539F;&#x751F;&#x652F;&#x6301; <code>reduceRight</code> &#x7684;&#x5B9E;&#x73B0;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;</p>

<pre><code>// Production steps of ECMA-262, Edition 5, 15.4.4.22
// Reference: http://es5.github.io/#x15.4.4.22
if (&apos;function&apos; !== typeof Array.prototype.reduceRight) {
  Array.prototype.reduceRight = function(callback /*, initialValue*/) {
    &apos;use strict&apos;;
    if (null === this || &apos;undefined&apos; === typeof this) {
      throw new TypeError(&apos;Array.prototype.reduce called on null or undefined&apos; );
    }
    if (&apos;function&apos; !== typeof callback) {
      throw new TypeError(callback + &apos; is not a function&apos;);
    }
    var t = Object(this), len = t.length &gt;&gt;&gt; 0, k = len - 1, value;
    if (arguments.length &gt;= 2) {
      value = arguments[1];
    } else {
      while (k &gt;= 0 &amp;&amp; !(k in t)) {
        k--;
      }
      if (k &lt; 0) {
        throw new TypeError(&apos;Reduce of empty array with no initial value&apos;);
      }
      value = t[k--];
    }
    for (; k &gt;= 0; k--) {
      if (k in t) {
        value = callback(value, t[k], k, t);
      }
    }
    return value;
  };
}</code></pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.22" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Array.prototype.reduceRight</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.<br>
    Implemented in JavaScript 1.8</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.reduceright" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Array.prototype.reduceRight</small></a></td>
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
   <td><a href="/en-US/Firefox/Releases/3" title="Released on 2008-06-17.">3.0</a> (1.9)</td>
   <td>9</td>
   <td>10.5</td>
   <td>4.0</td>
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
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" title="reduce()&#xA0;&#x65B9;&#x6CD5;&#x63A5;&#x6536;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x4F5C;&#x4E3A;&#x7D2F;&#x52A0;&#x5668;&#xFF08;accumulator&#xFF09;&#xFF0C;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x503C;&#xFF08;&#x4ECE;&#x5DE6;&#x5230;&#x53F3;&#xFF09;&#x5F00;&#x59CB;&#x5408;&#x5E76;&#xFF0C;&#x6700;&#x7EC8;&#x4E3A;&#x4E00;&#x4E2A;&#x503C;&#x3002;"><code>Array.prototype.reduce()</code></a></li>
</ul>
                  
                
              