
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p><code><strong>every()</strong></code> &#x65B9;&#x6CD5;&#x6D4B;&#x8BD5;&#x6570;&#x7EC4;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x662F;&#x5426;&#x90FD;&#x901A;&#x8FC7;&#x4E86;&#x6307;&#x5B9A;&#x51FD;&#x6570;&#x7684;&#x6D4B;&#x8BD5;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><em>arr</em>.every(<em>callback</em>[, <em>thisArg</em>])</code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>&#x7528;&#x6765;&#x6D4B;&#x8BD5;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x51FD;&#x6570;&#x3002;</dd>
 <dt><code>thisArg</code></dt>
 <dd>&#x6267;&#x884C; <code>callback</code> &#x65F6;&#x4F7F;&#x7528;&#x7684;&#xA0;<code>this</code>&#xA0;&#x503C;&#x3002;</dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p><code>every</code> &#x65B9;&#x6CD5;&#x4E3A;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x6267;&#x884C;&#x4E00;&#x6B21;&#xA0;<code>callback</code> &#x51FD;&#x6570;&#xFF0C;&#x76F4;&#x5230;&#x5B83;&#x627E;&#x5230;&#x4E00;&#x4E2A;&#x4F7F;&#xA0;<code>callback</code> &#x8FD4;&#x56DE;&#xA0;<em>false</em>&#xFF08;&#x8868;&#x793A;&#x53EF;&#x8F6C;&#x6362;&#x4E3A;&#x5E03;&#x5C14;&#x503C; false &#x7684;&#x503C;&#xFF09;&#x7684;&#x5143;&#x7D20;&#x3002;&#x5982;&#x679C;&#x53D1;&#x73B0;&#x4E86;&#x4E00;&#x4E2A;&#x8FD9;&#x6837;&#x7684;&#x5143;&#x7D20;&#xFF0C;<code>every</code> &#x65B9;&#x6CD5;&#x5C06;&#x4F1A;&#x7ACB;&#x5373;&#x8FD4;&#x56DE;&#xA0;<code>false</code>&#x3002;&#x5426;&#x5219;&#xFF0C;<code>callback</code> &#x4E3A;&#x6BCF;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x8FD4;&#x56DE; <code>true</code>&#xFF0C;<code>every</code>&#xA0;&#x5C31;&#x4F1A;&#x8FD4;&#x56DE;&#xA0;<code>true</code>&#x3002;<code>callback</code> &#x53EA;&#x4F1A;&#x4E3A;&#x90A3;&#x4E9B;&#x5DF2;&#x7ECF;&#x88AB;&#x8D4B;&#x503C;&#x7684;&#x7D22;&#x5F15;&#x8C03;&#x7528;&#x3002;&#x4E0D;&#x4F1A;&#x4E3A;&#x90A3;&#x4E9B;&#x88AB;&#x5220;&#x9664;&#x6216;&#x4ECE;&#x6765;&#x6CA1;&#x88AB;&#x8D4B;&#x503C;&#x7684;&#x7D22;&#x5F15;&#x8C03;&#x7528;&#x3002;</p>

<p><code>callback</code> &#x88AB;&#x8C03;&#x7528;&#x65F6;&#x4F20;&#x5165;&#x4E09;&#x4E2A;&#x53C2;&#x6570;&#xFF1A;&#x5143;&#x7D20;&#x503C;&#xFF0C;&#x5143;&#x7D20;&#x7684;&#x7D22;&#x5F15;&#xFF0C;&#x539F;&#x6570;&#x7EC4;&#x3002;</p>

<p>&#x5982;&#x679C;&#x4E3A; <code>every</code> &#x63D0;&#x4F9B;&#x4E00;&#x4E2A;&#xA0;<code>thisArg</code>&#xA0;&#x53C2;&#x6570;&#xFF0C;&#x5728;&#x8BE5;&#x53C2;&#x6570;&#x4E3A;&#x8C03;&#x7528; <code>callback</code> &#x65F6;&#x7684; <code>this</code> &#x503C;&#x3002;&#x5982;&#x679C;&#x7701;&#x7565;&#x8BE5;&#x53C2;&#x6570;&#xFF0C;&#x5219; <code>callback</code> &#x88AB;&#x8C03;&#x7528;&#x65F6;&#x7684; <code>this</code> &#x503C;&#xFF0C;&#x5728;&#x975E;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E0B;&#x4E3A;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#xFF0C;&#x5728;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E0B;&#x4F20;&#x5165; <code>undefined</code>&#x3002;</p>

<p><code>every</code> &#x4E0D;&#x4F1A;&#x6539;&#x53D8;&#x539F;&#x6570;&#x7EC4;&#x3002;</p>

<p><code>every</code>&#xA0;&#x904D;&#x5386;&#x7684;&#x5143;&#x7D20;&#x8303;&#x56F4;&#x5728;&#x7B2C;&#x4E00;&#x6B21;&#x8C03;&#x7528; <code>callback</code> &#x4E4B;&#x524D;&#x5C31;&#x5DF2;&#x786E;&#x5B9A;&#x4E86;&#x3002;&#x5728;&#x8C03;&#x7528; <code>every</code> &#x4E4B;&#x540E;&#x6DFB;&#x52A0;&#x5230;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x4E0D;&#x4F1A;&#x88AB; <code>callback</code> &#x8BBF;&#x95EE;&#x5230;&#x3002;&#x5982;&#x679C;&#x6570;&#x7EC4;&#x4E2D;&#x5B58;&#x5728;&#x7684;&#x5143;&#x7D20;&#x88AB;&#x66F4;&#x6539;&#xFF0C;&#x5219;&#x4ED6;&#x4EEC;&#x4F20;&#x5165; <code>callback</code> &#x7684;&#x503C;&#x662F; <code>every</code> &#x8BBF;&#x95EE;&#x5230;&#x4ED6;&#x4EEC;&#x90A3;&#x4E00;&#x523B;&#x7684;&#x503C;&#x3002;&#x90A3;&#x4E9B;&#x88AB;&#x5220;&#x9664;&#x7684;&#x5143;&#x7D20;&#x6216;&#x4ECE;&#x6765;&#x672A;&#x88AB;&#x8D4B;&#x503C;&#x7684;&#x5143;&#x7D20;&#x5C06;&#x4E0D;&#x4F1A;&#x88AB;&#x8BBF;&#x95EE;&#x5230;&#x3002;</p>

<p><code>every</code> acts like the &quot;for all&quot; quantifier in mathematics. In particular, for an empty array, it returns true. (It is <a href="http://en.wikipedia.org/wiki/Vacuous_truth#Vacuous_truths_in_mathematics" class="external">vacuously true</a> that all elements of the <a href="http://en.wikipedia.org/wiki/Empty_set#Common_problems" class="external">empty set</a> satisfy any given condition.)</p>

<h2 name="Examples" id="Examples">&#x5B9E;&#x4F8B;</h2>

<h3 name="Example:_Testing_size_of_all_array_elements" id="Example:_Testing_size_of_all_array_elements">&#x4F8B;&#x5B50;&#xFF1A;&#x68C0;&#x6D4B;&#x6240;&#x6709;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x7684;&#x5927;&#x5C0F;</h3>

<p>&#x4E0B;&#x4F8B;&#x68C0;&#x6D4B;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x662F;&#x5426;&#x90FD;&#x5927;&#x4E8E; 10&#x3002;</p>

<pre class="brush: js">function isBigEnough(element, index, array) {
  return (element &gt;= 10);
}
var passed = [12, 5, 8, 130, 44].every(isBigEnough);
// passed is false
passed = [12, 54, 18, 130, 44].every(isBigEnough);
// passed is true
</pre>

<h2 name="Compatibility" id="Compatibility">&#x517C;&#x5BB9;&#x65E7;&#x73AF;&#x5883;&#xFF08;Polyfill&#xFF09;</h2>

<p>&#x5728;&#x7B2C; 5 &#x7248;&#x65F6;&#xFF0C;<code>every</code> &#x88AB;&#x6DFB;&#x52A0;&#x8FDB; ECMA-262 &#x6807;&#x51C6;&#xFF1B;&#x56E0;&#x6B64;&#x5728;&#x67D0;&#x4E9B;&#x5B9E;&#x73B0;&#x73AF;&#x5883;&#x4E2D;&#x4E0D;&#x88AB;&#x652F;&#x6301;&#x3002;&#x4F60;&#x53EF;&#x4EE5;&#x628A;&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x653E;&#x5230;&#x811A;&#x672C;&#x7684;&#x5F00;&#x5934;&#x6765;&#x89E3;&#x51B3;&#x6B64;&#x95EE;&#x9898;&#xFF0C;&#x8BE5;&#x4EE3;&#x7801;&#x5141;&#x8BB8;&#x5728;&#x90A3;&#x4E9B;&#x6CA1;&#x6709;&#x539F;&#x751F;&#x652F;&#x6301; <code>every</code> &#x7684;&#x5B9E;&#x73B0;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;&#x8BE5;&#x7B97;&#x6CD5;&#x662F;&#xA0;ECMA-262 &#x7B2C;5&#x7248;&#x4E2D;&#x6307;&#x5B9A;&#x7684;&#x7B97;&#x6CD5;&#xFF0C;&#x5047;&#x5B9A;&#xA0;<code>Object</code>&#xA0;&#x548C;&#xA0;<code>TypeError</code>&#xA0;&#x62E5;&#x6709;&#x5B83;&#x4EEC;&#x7684;&#x521D;&#x59CB;&#x503C;&#xFF0C;&#x4E14;&#xA0;<code>fun.call</code>&#xA0;&#x7B49;&#x4EF7;&#x4E8E; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call" title="call() &#x65B9;&#x6CD5;&#x5728;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;this&#x503C;&#x548C;&#x82E5;&#x5E72;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x503C;&#x7684;&#x524D;&#x63D0;&#x4E0B;&#x8C03;&#x7528;&#x67D0;&#x4E2A;&#x51FD;&#x6570;&#x6216;&#x65B9;&#x6CD5;."><code>Function.prototype.call</code></a>&#x3002;</p>


<pre class="brush: js">if (!Array.prototype.every)
{
&#xA0; Array.prototype.every = function(fun /*, thisArg */)
  {
&#xA0;&#xA0;&#xA0; &apos;use strict&apos;;

&#xA0;&#xA0;&#xA0; if (this === void 0 || this === null)
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; throw new TypeError();

&#xA0;&#xA0;&#xA0; var t = Object(this);
&#xA0;&#xA0;&#xA0; var len = t.length &gt;&gt;&gt; 0;
&#xA0;&#xA0;&#xA0; if (typeof fun !== &apos;function&apos;)
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; throw new TypeError();

&#xA0;&#xA0;&#xA0; var thisArg = arguments.length &gt;= 2 ? arguments[1] : void 0;
&#xA0;&#xA0;&#xA0; for (var i = 0; i &lt; len; i++)
    {
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; if (i in t &amp;&amp; !fun.call(<span style="line-height: normal;">thisArg</span><span style="line-height: normal;">, t[i], i, t))</span>
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; return false;
&#xA0;&#xA0;&#xA0; }

&#xA0;&#xA0;&#xA0; return true;
&#xA0; };
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
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.16" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Array.prototype.every</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.<br>
    Implemented in JavaScript 1.6</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.every" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Array.prototype.every</small></a></td>
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
   <td><a href="/en-US/Firefox/Releases/1.5" title="Released on 2005-11-25.">1.5</a> (1.8)</td>
   <td>9</td>
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
   <td>1.0 (1.8)</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" title="forEach() &#x65B9;&#x6CD5;&#x5BF9;&#x6570;&#x7EC4;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x63D0;&#x4F9B;&#x7684;&#x51FD;&#x6570;(&#x56DE;&#x8C03;&#x51FD;&#x6570;)&#x3002;"><code>Array.prototype.forEach()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some" title="some()&#xA0;&#x65B9;&#x6CD5;&#x6D4B;&#x8BD5;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x67D0;&#x4E9B;&#x5143;&#x7D20;&#x662F;&#x5426;&#x901A;&#x8FC7;&#x4E86;&#x6307;&#x5B9A;&#x51FD;&#x6570;&#x7684;&#x6D4B;&#x8BD5;&#x3002;"><code>Array.prototype.some()</code></a></li>
</ul>
                  
                
              