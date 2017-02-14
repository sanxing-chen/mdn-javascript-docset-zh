
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>copyWithin()</strong></code> &#x65B9;&#x6CD5;&#x4F1A;&#x6D45;&#x62F7;&#x8D1D;&#x6570;&#x7EC4;&#x7684;&#x90E8;&#x5206;&#x5143;&#x7D20;&#x5230;&#x540C;&#x4E00;&#x6570;&#x7EC4;&#x7684;&#x4E0D;&#x540C;&#x4F4D;&#x7F6E;&#xFF0C;&#x4E14;&#x4E0D;&#x6539;&#x53D8;&#x6570;&#x7EC4;&#x7684;&#x5927;&#x5C0F;&#xFF0C;&#x8FD4;&#x56DE;&#x8BE5;&#x6570;&#x7EC4;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>arr</var></code>.copyWithin(<var>target</var>[, <var>start</var>[, <var>end</var>]])</pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>target</code></dt>
 <dd>0 &#x4E3A;&#x57FA;&#x5E95;&#x7684;&#x7D22;&#x5F15;&#xFF0C;&#x590D;&#x5236;&#x5E8F;&#x5217;&#x5230;&#x8BE5;&#x4F4D;&#x7F6E;&#x3002;&#x5982;&#x679C;&#x662F;&#x8D1F;&#x6570;&#xFF0C;<code>target</code>&#xA0;&#x5C06;&#x4ECE;&#x672B;&#x5C3E;&#x5F00;&#x59CB;&#x8BA1;&#x7B97;&#x3002;</dd>
 <dd>&#x5982;&#x679C; <code>target</code> &#x5927;&#x4E8E;&#x7B49;&#x4E8E; <code>arr.length</code>&#xFF0C;&#x5C06;&#x4F1A;&#x4E0D;&#x53D1;&#x751F;&#x62F7;&#x8D1D;&#x3002;&#x5982;&#x679C; <code>target</code> &#x5728; <code>start</code> &#x4E4B;&#x540E;&#xFF0C;&#x590D;&#x5236;&#x7684;&#x5E8F;&#x5217;&#x5C06;&#x88AB;&#x4FEE;&#x6539;&#x4EE5;&#x7B26;&#x5408; <code>arr.length</code>&#x3002;</dd>
 <dt><code>start</code></dt>
 <dd>0 &#x4E3A;&#x57FA;&#x5E95;&#x7684;&#x7D22;&#x5F15;&#xFF0C;&#x5F00;&#x59CB;&#x590D;&#x5236;&#x5143;&#x7D20;&#x7684;&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x3002;&#x5982;&#x679C;&#x662F;&#x8D1F;&#x6570;&#xFF0C;<code>start</code>&#xA0;&#x5C06;&#x4ECE;&#x672B;&#x5C3E;&#x5F00;&#x59CB;&#x8BA1;&#x7B97;&#x3002;</dd>
 <dd>&#x5982;&#x679C;&#xA0;<code>start</code>&#xA0;&#x88AB;&#x5FFD;&#x7565;&#xFF0C;<code>copyWithin</code>&#xA0;&#x5C06;&#x4F1A;&#x4ECE;0&#x5F00;&#x59CB;&#x590D;&#x5236;&#x3002;</dd>
 <dt><code>end</code></dt>
 <dd>0 &#x4E3A;&#x57FA;&#x5E95;&#x7684;&#x7D22;&#x5F15;&#xFF0C;&#x5F00;&#x59CB;&#x590D;&#x5236;&#x5143;&#x7D20;&#x7684;&#x7ED3;&#x675F;&#x4F4D;&#x7F6E;&#x3002;<code>copyWithin</code>&#xA0;&#x5C06;&#x4F1A;&#x62F7;&#x8D1D;&#x5230;&#x8BE5;&#x4F4D;&#x7F6E;&#xFF0C;&#x4F46;&#x4E0D;&#x5305;&#x62EC; <code>end</code> <font face="Consolas, Liberation Mono, Courier, monospace">&#x8FD9;&#x4E2A;&#x4F4D;&#x7F6E;&#x7684;&#x5143;&#x7D20;&#x3002;</font>&#x5982;&#x679C;&#x662F;&#x8D1F;&#x6570;&#xFF0C;&#xA0;<code>end</code>&#xA0;&#x5C06;&#x4ECE;&#x672B;&#x5C3E;&#x5F00;&#x59CB;&#x8BA1;&#x7B97;&#x3002;</dd>
 <dd>&#x5982;&#x679C; <code>end &#x88AB;&#x5FFD;&#x7565;&#xFF0C;</code>copyWithin&#xA0;&#x5C06;&#x4F1A;&#x590D;&#x5236;&#x5230; <code>arr.length</code>&#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x6539;&#x53D8;&#x4E86;&#x7684;&#x6570;&#x7EC4;&#x3002;</p>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x53C2;&#x6570;target,start&#x548C;end &#x5FC5;&#x987B;&#x4E3A;&#x6574;&#x6570;&#x3002;</p>

<p>&#x5982;&#x679C;start&#x4E3A;&#x8D1F;&#xFF0C;&#x5219;&#x5176;&#x6307;&#x5B9A;&#x7684;&#x7D22;&#x5F15;&#x4F4D;&#x7F6E;&#x7B49;&#x540C;&#x4E8E;length+start&#xFF0C;length&#x4E3A;&#x6570;&#x7EC4;&#x7684;&#x957F;&#x5EA6;&#x3002;end&#x4E5F;&#x662F;&#x5982;&#x6B64;&#x3002;</p>

<p>copyWithin&#x65B9;&#x6CD5;&#x4E0D;&#x8981;&#x6C42;&#x5176;this&#x503C;&#x5FC5;&#x987B;&#x662F;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#xFF1B;&#x9664;&#x6B64;&#x4E4B;&#x5916;&#xFF0C;copyWithin&#x662F;&#x4E00;&#x4E2A;&#x53EF;&#x53D8;&#x65B9;&#x6CD5;&#xFF0C;&#x5B83;&#x53EF;&#x4EE5;&#x6539;&#x53D8;this&#x5BF9;&#x8C61;&#x672C;&#x8EAB;&#xFF0C;&#x5E76;&#x4E14;&#x8FD4;&#x56DE;&#x5B83;&#xFF0C;&#x800C;&#x4E0D;&#x4EC5;&#x4EC5;&#x662F;&#x5B83;&#x7684;&#x62F7;&#x8D1D;&#x3002;</p>

<p><strong>copyWithin</strong>&#xA0;&#x5C31;&#x50CF;&#xA0;C &#x548C; C++ &#x7684;&#xA0;<code>memcpy &#x51FD;&#x6570;&#x4E00;&#x6837;&#xFF0C;&#x4E14;&#x5B83;&#x662F;&#x7528;&#x6765;&#x79FB;&#x52A8;&#xA0;</code><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Array"><code>Array</code></a> &#x6216;&#x8005;&#xA0;<a title="TypedArray &#x5BF9;&#x8C61;&#x63CF;&#x8FF0;&#x8868;&#x793A;&#x5E95;&#x5C42;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#x7F13;&#x5B58;&#x533A;&#x7684;&#x7C7B;&#x6570;&#x7EC4;(array-like)&#x89C6;&#x56FE;. &#x6CA1;&#x6709;&#x540D;&#x4E3A; TypedArray &#x7684;&#x5168;&#x5C40;&#x5C5E;&#x6027;&#xFF0C;&#x4E5F;&#x4E0D;&#x5B58;&#x5728;&#x76F4;&#x63A5;&#x53EF;&#x89C1;&#x7684; TypedArray &#x6784;&#x9020;&#x5668;&#x3002;&#x800C;&#x662F;&#xFF0C;&#x6709;&#x82E5;&#x5E72;&#x4E0D;&#x540C;&#x7684;&#x5168;&#x5C40;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x662F;&#x7C7B;&#x578B;&#x6570;&#x7EC4;&#x7684;&#x7279;&#x6B8A;&#x6784;&#x9020;&#x5668;&#xFF08;typed array constructors for specific element types&#xFF09;&#xFF0C;&#x7528;&#x4E8E;&#x7279;&#x5B9A;&#x7684;&#x5143;&#x7D20;&#x7C7B;&#x578B;&#xFF0C;&#x8FD9;&#x4E9B;&#x5728;&#x4E0B;&#x6587;&#x6709;&#x5217;&#x51FA;&#x3002;&#x4E0B;&#x6587;&#x4E2D;&#x4F60;&#x4F1A;&#x770B;&#x5230;&#x7528;&#x4E8E;&#x5305;&#x542B;&#x4EFB;&#x610F;&#x7C7B;&#x578B;&#x5143;&#x7D20;&#x7684;&#x4EFB;&#x610F;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x7684;&#x901A;&#x7528;&#x5C5E;&#x6027;&#x548C;&#x901A;&#x7528;&#x65B9;&#x6CD5;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray"><code>TypedArray</code></a>&#xA0;<code>&#x6570;&#x636E;&#x7684;&#x4E00;&#x4E2A;&#x9AD8;&#x6027;&#x80FD;&#x7684;&#x65B9;&#x6CD5;&#x3002;&#x590D;&#x5236;&#x4EE5;&#x53CA;&#x7C98;&#x8D34;&#x5E8F;&#x5217;&#x8FD9;&#x4E24;&#x8005;&#x662F;&#x4E3A;&#x4E00;&#x4F53;&#x7684;&#x64CD;&#x4F5C;;&#x5373;&#x4F7F;&#x590D;&#x5236;&#x548C;&#x7C98;&#x8D34;&#x533A;&#x57DF;&#x91CD;&#x53E0;&#xFF0C;&#x7C98;&#x8D34;&#x7684;&#x5E8F;&#x5217;&#x4E5F;&#x4F1A;&#x6709;&#x62F7;&#x8D1D;&#x6765;&#x7684;&#x503C;&#x3002;</code></p>

<p><strong>copyWithin </strong>&#x51FD;&#x6570;&#x662F;&#x8BBE;&#x8BA1;&#x4E3A;&#x901A;&#x7528;&#x7684;&#xFF0C;&#x5176;&#x4E0D;&#x8981;&#x6C42;&#x5176; <code>this</code> &#x503C;&#x5FC5;&#x987B;&#x662F;&#x4E00;&#x4E2A;<a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Array"><code>&#x6570;&#x7EC4;</code></a>&#x5BF9;&#x8C61;&#x3002;</p>

<p>The&#xA0;<strong>copyWithin</strong>&#xA0;&#x662F;&#x4E00;&#x4E2A;&#x53EF;&#x53D8;&#x65B9;&#x6CD5;&#xFF0C;&#x5B83;&#x4E0D;&#x4F1A;&#x6539;&#x53D8; this &#x7684; length&#xFF0C;&#x4F46;&#x662F;&#x4F1A;&#x6539;&#x53D8; this &#x672C;&#x8EAB;&#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x4E14;&#x9700;&#x8981;&#x65F6;&#x4F1A;&#x521B;&#x5EFA;&#x65B0;&#x7684;&#x5C5E;&#x6027;&#x3002;</p>

<h2 name="Examples" id="Examples">&#x4F8B;&#x5B50;</h2>

<pre class="brush: js"><code>[1, 2, 3, 4, 5].copyWithin(-2);
// [1, 2, 3, 1, 2]</code>

[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, -2, -1);
// [4, 2, 3, 4, 5]

[].copyWithin.call({length: 5, 3: 1}, 0, 3);
// {0: 1, 3: 1, length: 5}

// ES6 &#x7C7B;&#x578B;&#x6570;&#x7EC4;<code>Typed Arrays </code>&#x662F; Array &#x7684;&#x5B50;&#x96C6;
var i32a = new Int32Array([1, 2, 3, 4, 5]);

i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]

// On platforms that are not yet ES6 compliant: 
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]
</pre>

<h2 name="Polyfill" id="Polyfill">Polyfill</h2>

<pre class="brush: js">if (!Array.prototype.copyWithin) {
  Array.prototype.copyWithin = function(target, start/*, end*/) {
    // Steps 1-2.
    if (this == null) {
      throw new TypeError(&apos;this is null or not defined&apos;);
    }

    var O = Object(this);

    // Steps 3-5.
    var len = O.length &gt;&gt;&gt; 0;

    // Steps 6-8.
    var relativeTarget = target &gt;&gt; 0;

    var to = relativeTarget &lt; 0 ?
      Math.max(len + relativeTarget, 0) :
      Math.min(relativeTarget, len);

    // Steps 9-11.
    var relativeStart = start &gt;&gt; 0;

    var from = relativeStart &lt; 0 ?
      Math.max(len + relativeStart, 0) :
      Math.min(relativeStart, len);

    // Steps 12-14.
    var end = arguments[2];
    var relativeEnd = end === undefined ? len : end &gt;&gt; 0;

    var final = relativeEnd &lt; 0 ?
      Math.max(len + relativeEnd, 0) :
      Math.min(relativeEnd, len);

    // Step 15.
    var count = Math.min(final - from, len - to);

    // Steps 16-17.
    var direction = 1;

    if (from &lt; to &amp;&amp; to &lt; (from + count)) {
      direction = -1;
      from += count - 1;
      to += count - 1;
    }

    // Step 18.
    while (count &gt; 0) {
      if (from in O) {
        O[to] = O[from];
      } else {
        delete O[to];
      }

      from += direction;
      to += direction;
      count--;
    }

    // Step 19.
    return O;
  };
}
</pre>

<h2 name="Specifications" id="Specifications">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.copyWithin" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Array.prototype.copyWithin</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-array.prototype.copyWithin" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Array.prototype.copyWithin</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 name="Browser_compatibility" id="Browser_compatibility">&#x6D4F;&#x89C8;&#x5668;&#x652F;&#x6301;</h2>

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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><a title="Released on 2014-09-02." href="/en-US/Firefox/Releases/32">32</a> (32)</td>
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
   <td>32.0 (32)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Array"><code>Array</code></a></li>
</ul>
                  
                
              