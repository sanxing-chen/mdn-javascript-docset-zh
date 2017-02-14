
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>filter()</strong></code>&#xA0;&#x65B9;&#x6CD5;&#x4F7F;&#x7528;&#x6307;&#x5B9A;&#x7684;&#x51FD;&#x6570;&#x6D4B;&#x8BD5;&#x6240;&#x6709;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x6240;&#x6709;&#x901A;&#x8FC7;&#x6D4B;&#x8BD5;&#x7684;&#x5143;&#x7D20;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x3002;</p>

<pre class="brush: js">function isBigEnough(value) {
  return value &gt;= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]</pre>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><em>var new_arrary = arr</em>.filter(<em>callback</em>[, <em>thisArg</em>])</code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>&#x7528;&#x6765;&#x6D4B;&#x8BD5;&#x6570;&#x7EC4;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x51FD;&#x6570;&#x3002;&#x8C03;&#x7528;&#x65F6;&#x4F7F;&#x7528;&#x53C2;&#x6570;&#xA0;(element, index, array)&#x3002;<br>
 &#x8FD4;&#x56DE;true&#x8868;&#x793A;&#x4FDD;&#x7559;&#x8BE5;&#x5143;&#x7D20;&#xFF08;&#x901A;&#x8FC7;&#x6D4B;&#x8BD5;&#xFF09;&#xFF0C;false&#x5219;&#x4E0D;&#x4FDD;&#x7559;&#x3002;</dd>
 <dt><code>thisArg</code></dt>
 <dd>&#x53EF;&#x9009;&#x3002;&#x6267;&#x884C; <code>callback</code> &#x65F6;&#x7684;&#x7528;&#x4E8E;&#xA0;<code>this</code>&#xA0;&#x7684;&#x503C;&#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#xA0; &#xA0; &#xA0; &#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x901A;&#x8FC7;&#x6D4B;&#x8BD5;&#x7684;&#x5143;&#x7D20;&#x7684;&#x96C6;&#x5408;&#x7684;&#x6570;&#x7EC4;</p>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p><code>filter</code> &#x4E3A;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x8C03;&#x7528;&#x4E00;&#x6B21;&#xA0;<code>callback</code> &#x51FD;&#x6570;&#xFF0C;&#x5E76;&#x5229;&#x7528;&#x6240;&#x6709;&#x4F7F;&#x5F97; <code>callback</code> &#x8FD4;&#x56DE; true &#x6216;&#xA0;<a href="https://developer.mozilla.org/en-US/docs/Glossary/Truthy">&#x7B49;&#x4EF7;&#x4E8E; true&#xA0;&#x7684;&#x503C;</a>&#xA0;&#x7684;&#x5143;&#x7D20;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x6570;&#x7EC4;&#x3002;<code>callback</code>&#xA0;&#x53EA;&#x4F1A;&#x5728;&#x5DF2;&#x7ECF;&#x8D4B;&#x503C;&#x7684;&#x7D22;&#x5F15;&#x4E0A;&#x88AB;&#x8C03;&#x7528;&#xFF0C;&#x5BF9;&#x4E8E;&#x90A3;&#x4E9B;&#x5DF2;&#x7ECF;&#x88AB;&#x5220;&#x9664;&#x6216;&#x8005;&#x4ECE;&#x672A;&#x88AB;&#x8D4B;&#x503C;&#x7684;&#x7D22;&#x5F15;&#x4E0D;&#x4F1A;&#x88AB;&#x8C03;&#x7528;&#x3002;&#x90A3;&#x4E9B;&#x6CA1;&#x6709;&#x901A;&#x8FC7;&#xA0;<code>callback</code> &#x6D4B;&#x8BD5;&#x7684;&#x5143;&#x7D20;&#x4F1A;&#x88AB;&#x8DF3;&#x8FC7;&#xFF0C;&#x4E0D;&#x4F1A;&#x88AB;&#x5305;&#x542B;&#x5728;&#x65B0;&#x6570;&#x7EC4;&#x4E2D;&#x3002;</p>

<p><code>callback</code> &#x88AB;&#x8C03;&#x7528;&#x65F6;&#x4F20;&#x5165;&#x4E09;&#x4E2A;&#x53C2;&#x6570;&#xFF1A;</p>

<ol style="margin-left: 40px;">
 <li>&#x5143;&#x7D20;&#x7684;&#x503C;</li>
 <li>&#x5143;&#x7D20;&#x7684;&#x7D22;&#x5F15;</li>
 <li>&#x88AB;&#x904D;&#x5386;&#x7684;&#x6570;&#x7EC4;</li>
</ol>

<p>&#x5982;&#x679C;&#x4E3A; <code>filter</code> &#x63D0;&#x4F9B;&#x4E00;&#x4E2A;&#xA0;<code>thisArg</code>&#xA0;&#x53C2;&#x6570;&#xFF0C;&#x5219;&#x5B83;&#x4F1A;&#x88AB;&#x4F5C;&#x4E3A; <code>callback</code> &#x88AB;&#x8C03;&#x7528;&#x65F6;&#x7684; <code>this</code> &#x503C;&#x3002;&#x5426;&#x5219;&#xFF0C;<code>callback</code> &#x7684; <code>this</code> &#x503C;&#x5728;&#x975E;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E0B;&#x5C06;&#x662F;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#xFF0C;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E0B;&#x4E3A; <code>undefined</code>&#x3002;<br>
 The&#xA0;<code>this</code>value ultimately observable by&#xA0;<code>callback</code>&#xA0;is determined according to&#xA0;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this">the usual rules for determining the<code>this</code>&#xA0;seen by a function</a>.</p>

<p><code>filter</code> &#x4E0D;&#x4F1A;&#x6539;&#x53D8;&#x539F;&#x6570;&#x7EC4;&#x3002;</p>

<p><code>filter</code>&#xA0;&#x904D;&#x5386;&#x7684;&#x5143;&#x7D20;&#x8303;&#x56F4;&#x5728;&#x7B2C;&#x4E00;&#x6B21;&#x8C03;&#x7528; <code>callback</code> &#x4E4B;&#x524D;&#x5C31;&#x5DF2;&#x7ECF;&#x786E;&#x5B9A;&#x4E86;&#x3002;&#x5728;&#x8C03;&#x7528; <code>filter</code> &#x4E4B;&#x540E;&#x88AB;&#x6DFB;&#x52A0;&#x5230;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x4E0D;&#x4F1A;&#x88AB; <code>filter</code> &#x904D;&#x5386;&#x5230;&#x3002;&#x5982;&#x679C;&#x5DF2;&#x7ECF;&#x5B58;&#x5728;&#x7684;&#x5143;&#x7D20;&#x88AB;&#x6539;&#x53D8;&#x4E86;&#xFF0C;&#x5219;&#x4ED6;&#x4EEC;&#x4F20;&#x5165; <code>callback</code> &#x7684;&#x503C;&#x662F; <code>filter</code> &#x904D;&#x5386;&#x5230;&#x5B83;&#x4EEC;&#x90A3;&#x4E00;&#x523B;&#x7684;&#x503C;&#x3002;&#x88AB;&#x5220;&#x9664;&#x6216;&#x4ECE;&#x6765;&#x672A;&#x88AB;&#x8D4B;&#x503C;&#x7684;&#x5143;&#x7D20;&#x4E0D;&#x4F1A;&#x88AB;&#x904D;&#x5386;&#x5230;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 name="Example:_Filtering_out_all_small_values" id="Example:_Filtering_out_all_small_values">&#x4F8B;&#x5B50;&#xFF1A;&#x7B5B;&#x9009;&#x6392;&#x9664;&#x6389;&#x6240;&#x6709;&#x7684;&#x5C0F;&#x503C;</h3>

<p>&#x4E0B;&#x4F8B;&#x4F7F;&#x7528;&#xA0;<code>filter</code>&#xA0;&#x521B;&#x5EFA;&#x4E86;&#x4E00;&#x4E2A;&#x65B0;&#x6570;&#x7EC4;&#xFF0C;&#x8BE5;&#x6570;&#x7EC4;&#x7684;&#x5143;&#x7D20;&#x7531;&#x539F;&#x6570;&#x7EC4;&#x4E2D;&#x503C;&#x5927;&#x4E8E; 10 &#x7684;&#x5143;&#x7D20;&#x7EC4;&#x6210;&#x3002;</p>

<pre class="brush: js">function isBigEnough(element) {
  return element &gt;= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44] 
</pre>

<h2 name="Compatibility" id="Compatibility">&#x517C;&#x5BB9;&#x65E7;&#x73AF;&#x5883;&#xFF08;Polyfill&#xFF09;</h2>

<p><code>filter</code> &#x88AB;&#x6DFB;&#x52A0;&#x5230; ECMA-262 &#x6807;&#x51C6;&#x7B2C; 5 &#x7248;&#x4E2D;&#xFF0C;&#x56E0;&#x6B64;&#x5728;&#x67D0;&#x4E9B;&#x5B9E;&#x73B0;&#x73AF;&#x5883;&#x4E2D;&#x4E0D;&#x88AB;&#x652F;&#x6301;&#x3002;&#x53EF;&#x4EE5;&#x628A;&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x63D2;&#x5165;&#x5230;&#x811A;&#x672C;&#x7684;&#x5F00;&#x5934;&#x6765;&#x89E3;&#x51B3;&#x6B64;&#x95EE;&#x9898;&#xFF0C;&#x8BE5;&#x4EE3;&#x7801;&#x5141;&#x8BB8;&#x5728;&#x90A3;&#x4E9B;&#x6CA1;&#x6709;&#x539F;&#x751F;&#x652F;&#x6301; <code>filter</code> &#x7684;&#x5B9E;&#x73B0;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;&#x8BE5;&#x7B97;&#x6CD5;&#x662F;&#xA0;ECMA-262 &#x7B2C; 5 &#x7248;&#x4E2D;&#x6307;&#x5B9A;&#x7684;&#x7B97;&#x6CD5;&#xFF0C;&#x5047;&#x5B9A;&#xA0;<code>fn.call</code>&#xA0;&#x7B49;&#x4EF7;&#x4E8E;&#xA0;<code><a title="call() &#x65B9;&#x6CD5;&#x5728;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;this&#x503C;&#x548C;&#x82E5;&#x5E72;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x503C;&#x7684;&#x524D;&#x63D0;&#x4E0B;&#x8C03;&#x7528;&#x67D0;&#x4E2A;&#x51FD;&#x6570;&#x6216;&#x65B9;&#x6CD5;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call"><code>Function.prototype.call</code></a></code>&#xA0;&#x7684;&#x521D;&#x59CB;&#x503C;&#xFF0C;&#x4E14;&#xA0;<code><a title="push()&#xA0;&#x65B9;&#x6CD5;&#x6DFB;&#x52A0;&#x4E00;&#x4E2A;&#x6216;&#x591A;&#x4E2A;&#x5143;&#x7D20;&#x5230;&#x6570;&#x7EC4;&#x7684;&#x672B;&#x5C3E;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x65B0;&#x7684;&#x957F;&#x5EA6;&#xFF08;length &#x5C5E;&#x6027;&#x503C;&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push"><code>Array.prototype.push</code></a></code>&#xA0;&#x62E5;&#x6709;&#x5B83;&#x7684;&#x521D;&#x59CB;&#x503C;&#x3002;</p>

<pre class="brush: js">if (!Array.prototype.filter)
{
  Array.prototype.filter = function(fun /*, thisArg */)
  {
    &quot;use strict&quot;;

    if (this === void 0 || this === null)
      throw new TypeError();

    var t = Object(this);
    var len = t.length &gt;&gt;&gt; 0;
    if (typeof fun !== &quot;function&quot;)
      throw new TypeError();

    var res = [];
    var thisArg = arguments.length &gt;= 2 ? arguments[1] : void 0;
    for (var i = 0; i &lt; len; i++)
    {
      if (i in t)
      {
        var val = t[i];

        // NOTE: Technically this should Object.defineProperty at
        //       the next index, as push can be affected by
        //       properties on Object.prototype and Array.prototype.
        //       But that method&apos;s new, and collisions should be
        //       rare, so use the more-compatible alternative.
        if (fun.call(<span style="line-height: normal;">thisArg</span><span style="line-height: normal;">, val, i, t))</span>
          res.push(val);
      }
    }

    return res;
  };
}</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.20" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Array.prototype.filter</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.<br>
    Implemented in JavaScript 1.6</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.filter" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Array.prototype.filter</small></a></td>
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
   <td><a title="Released on 2005-11-25." href="/en-US/Firefox/Releases/1.5">1.5</a> (1.8)</td>
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
 <li><a title="forEach() &#x65B9;&#x6CD5;&#x5BF9;&#x6570;&#x7EC4;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x63D0;&#x4F9B;&#x7684;&#x51FD;&#x6570;(&#x56DE;&#x8C03;&#x51FD;&#x6570;)&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"><code>Array.prototype.forEach()</code></a></li>
 <li><a title="every() &#x65B9;&#x6CD5;&#x6D4B;&#x8BD5;&#x6570;&#x7EC4;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x662F;&#x5426;&#x90FD;&#x901A;&#x8FC7;&#x4E86;&#x6307;&#x5B9A;&#x51FD;&#x6570;&#x7684;&#x6D4B;&#x8BD5;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every"><code>Array.prototype.every()</code></a></li>
 <li><a title="some()&#xA0;&#x65B9;&#x6CD5;&#x6D4B;&#x8BD5;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x67D0;&#x4E9B;&#x5143;&#x7D20;&#x662F;&#x5426;&#x901A;&#x8FC7;&#x4E86;&#x6307;&#x5B9A;&#x51FD;&#x6570;&#x7684;&#x6D4B;&#x8BD5;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some"><code>Array.prototype.some()</code></a></li>
</ul>
                  
                
              