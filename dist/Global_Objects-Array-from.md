
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>Array.from()</strong></code> &#x65B9;&#x6CD5;&#x4ECE;&#x7C7B;&#x4F3C;&#x6570;&#x7EC4;&#x6216;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x6570;&#x7EC4;&#x5B9E;&#x4F8B;&#x3002;</p>

<div class="note">
<p>&#x5728; ES6 &#x4E2D;&#xFF0C;&#xA0;<code>Class</code> &#x8BED;&#x6CD5;&#x5141;&#x8BB8;&#x6211;&#x4EEC;&#x4E3A;&#x5185;&#x7F6E;&#x7C7B;&#x578B;&#xFF08;&#x6BD4;&#x5982; <code>Array</code>&#xFF09;&#x548C;&#x81EA;&#x5B9A;&#x4E49;&#x7C7B;&#x65B0;&#x5EFA;&#x5B50;&#x7C7B;&#xFF08;&#x6BD4;&#x5982;&#x53EB; <code>SubArray</code>&#xFF09;&#x3002;&#x8FD9;&#x4E9B;&#x5B50;&#x7C7B;&#x4E5F;&#x4F1A;&#x7EE7;&#x627F;&#x7236;&#x7C7B;&#x7684;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#xFF0C;&#x6BD4;&#x5982; <code>SubArray.from()</code>&#xFF0C;&#x8C03;&#x7528;&#x8BE5;&#x65B9;&#x6CD5;&#x540E;&#x4F1A;&#x8FD4;&#x56DE;&#x5B50;&#x7C7B; <code>SubArray</code> &#x7684;&#x4E00;&#x4E2A;&#x5B9E;&#x4F8B;&#xFF0C;&#x800C;&#x4E0D;&#x662F; <code>Array</code> &#x7684;&#x5B9E;&#x4F8B;&#x3002;</p>
</div>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>Array.from(arrayLike[, mapFn[, thisArg]])
</code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt>arrayLike</dt>
 <dd>&#x60F3;&#x8981;&#x8F6C;&#x6362;&#x6210;&#x771F;&#x5B9E;&#x6570;&#x7EC4;&#x7684;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x6216;&#x53EF;&#x904D;&#x5386;&#x5BF9;&#x8C61;&#x3002;</dd>
 <dt>mapFn</dt>
 <dd>&#x53EF;&#x9009;&#x53C2;&#x6570;&#xFF0C;&#x5982;&#x679C;&#x6307;&#x5B9A;&#x4E86;&#x8BE5;&#x53C2;&#x6570;&#xFF0C;&#x5219;&#x6700;&#x540E;&#x751F;&#x6210;&#x7684;&#x6570;&#x7EC4;&#x4F1A;&#x7ECF;&#x8FC7;&#x8BE5;&#x51FD;&#x6570;&#x7684;&#x52A0;&#x5DE5;&#x5904;&#x7406;&#x540E;&#x518D;&#x8FD4;&#x56DE;&#x3002;</dd>
 <dt>thisArg</dt>
 <dd>&#x53EF;&#x9009;&#x53C2;&#x6570;&#xFF0C;&#x6267;&#x884C;&#xA0;<code>mapFn</code>&#xA0;&#x51FD;&#x6570;&#x65F6;&#xA0;<code>this</code> &#x7684;&#x503C;&#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x4E00;&#x4E2A;&#x65B0;&#x7684;<a href="/zh-CN/docs/Web/JavaScript/Reference/Array" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Array</code></a>&#x5B9E;&#x4F8B;</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>Array.from()</code>&#xA0;&#x5141;&#x8BB8;&#x4F60;&#x521B;&#x5EFA;&#x6570;&#x7EC4;&#x4ECE;&#xFF1A;</p>

<ul>
 <li>&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#xFF08;&#x62E5;&#x6709;&#x4E00;&#x4E2A;&#xA0;<code>length</code> &#x5C5E;&#x6027;&#x548C;&#x82E5;&#x5E72;&#x7D22;&#x5F15;&#x5C5E;&#x6027;&#x7684;&#x4EFB;&#x610F;&#x5BF9;&#x8C61;&#xFF09;</li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Guide/iterable">&#x53EF;&#x904D;&#x5386;&#x5BF9;&#x8C61;</a>&#xFF08;&#x4F60;&#x53EF;&#x4EE5;&#x4ECE;&#x5B83;&#x8EAB;&#x4E0A;&#x8FED;&#x4EE3;&#x51FA;&#x82E5;&#x5E72;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x5BF9;&#x8C61;&#xFF0C;&#x6BD4;&#x5982;&#x6709; <a href="/zh-CN/docs/Web/JavaScript/Reference/Map" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Map</code></a> &#x548C; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set" title="&#x96C6;&#x5408;&#xFF08;Set&#xFF09;&#x5BF9;&#x8C61;&#x5141;&#x8BB8;&#x4F60;&#x5B58;&#x50A8;&#x4EFB;&#x610F;&#x7C7B;&#x578B;&#x7684;&#x552F;&#x4E00;&#x503C;&#xFF08;&#x4E0D;&#x80FD;&#x91CD;&#x590D;&#xFF09;&#xFF0C;&#x65E0;&#x8BBA;&#x5B83;&#x662F;&#x539F;&#x59CB;&#x503C;&#x6216;&#x8005;&#x662F;&#x5BF9;&#x8C61;&#x5F15;&#x7528;&#x3002;"><code>Set</code></a> &#x7B49;&#xFF09;</li>
</ul>

<p><code>Array.from()</code>&#xA0;&#x65B9;&#x6CD5;&#x6709;&#x4E00;&#x4E2A;&#x53EF;&#x9009;&#x53C2;&#x6570;&#xA0;<code>mapFn</code>&#xFF0C;&#x8BA9;&#x4F60;&#x53EF;&#x4EE5;&#x5728;&#x6700;&#x540E;&#x751F;&#x6210;&#x7684;&#x6570;&#x7EC4;&#x4E0A;&#x518D;&#x6267;&#x884C;&#x4E00;&#x6B21; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map" title="map() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7531;&#x539F;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x65B9;&#x6CD5;&#x540E;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x7EC4;&#x6210;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x3002;"><code>map</code></a> &#x65B9;&#x6CD5;&#x540E;&#x518D;&#x8FD4;&#x56DE;&#x3002;&#x4E5F;&#x5C31;&#x662F;&#x8BF4;<code>&#xA0;Array.from(obj, mapFn, thisArg) </code>&#x5C31;&#x76F8;&#x5F53;&#x4E8E;<code>&#xA0;Array.from(obj).map(mapFn, thisArg),</code>&#xA0;&#x9664;&#x975E;&#x521B;&#x5EFA;&#x7684;&#x4E0D;&#x662F;&#x53EF;&#x7528;&#x7684;&#x4E2D;&#x95F4;&#x6570;&#x7EC4;&#x3002; &#x8FD9;&#x5BF9;&#x4E00;&#x4E9B;&#x6570;&#x7EC4;&#x7684;&#x5B50;&#x7C7B;<code>,</code>&#x5982;&#xA0;&#xA0;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays">typed arrays</a><font face="Consolas, Liberation Mono, Courier, monospace">&#xA0;&#x6765;&#x8BF4;&#x5F88;&#x91CD;&#x8981;,</font>&#xA0;&#x56E0;&#x4E3A;&#x4E2D;&#x95F4;&#x6570;&#x7EC4;&#x7684;&#x503C;&#x5728;&#x8C03;&#x7528; map() &#x65F6;&#x9700;&#x8981;&#x662F;&#x9002;&#x5F53;&#x7684;&#x7C7B;&#x578B;&#x3002;</p>

<p><code>from()</code> &#x7684; <code>length</code> &#x5C5E;&#x6027;&#x4E3A; 1 &#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<pre class="brush: js">// &#x5C06;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#xFF08;arguments&#xFF09;&#x8F6C;&#x6362;&#x6210;&#x6570;&#x7EC4;
(function () {
    var args = Array.from(arguments);
    return args;
})(1, 2, 3);                            // [1, 2, 3]

// &#x5C06;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#xFF08;Set &#x5BF9;&#x8C61;&#xFF09;&#x8F6C;&#x6362;&#x6210;&#x6570;&#x7EC4;
Array.from(new Set([&quot;foo&quot;, window]));       // [&quot;foo&quot;, window]

// Map &#x5BF9;&#x8C61;&#x4E5F;&#x53EF;&#x4EE5;
var m = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(m);                          // [[1, 2], [2, 4], [4, 8]]  

// &#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#x65E2;&#x662F;&#x7C7B;&#x6570;&#x7EC4;&#x53C8;&#x662F;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;
Array.from(&quot;foo&quot;);                      // [&quot;f&quot;, &quot;o&quot;, &quot;o&quot;]

// &#x4F7F;&#x7528; map &#x51FD;&#x6570;&#x8F6C;&#x6362;&#x6570;&#x7EC4;&#x5143;&#x7D20;
Array.from([1, 2, 3], x =&gt; x + x);      // [2, 4, 6]

// &#x751F;&#x6210;&#x4E00;&#x4E2A;&#x6570;&#x5B57;&#x5E8F;&#x5217;
Array.from({length:5}, (v, k) =&gt; k);    // [0, 1, 2, 3, 4]

</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>ECMA-262 &#x7B2C;&#x516D;&#x7248;&#x6807;&#x51C6;&#x6DFB;&#x52A0;&#x4E86; <code>Array.from</code> &#x3002;&#x6709;&#x4E9B;&#x5B9E;&#x73B0;&#x4E2D;&#x53EF;&#x80FD;&#x5C1A;&#x672A;&#x5305;&#x62EC;&#x5728;&#x5176;&#x4E2D;&#x3002;&#x4F60;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x5728;&#x811A;&#x672C;&#x524D;&#x6DFB;&#x52A0;&#x5982;&#x4E0B;&#x5185;&#x5BB9;&#x4F5C;&#x4E3A;&#x66FF;&#x4EE3;&#x65B9;&#x6CD5;&#xFF0C;&#x4EE5;&#x4F7F;&#x7528;&#x672A;&#x539F;&#x751F;&#x652F;&#x6301;&#x7684; <code>Array.from</code> &#x65B9;&#x6CD5;&#x3002;&#x8BE5;&#x7B97;&#x6CD5;&#x6309;&#x7167;&#xA0; ECMA-262 &#x7B2C;&#x516D;&#x7248;&#x4E2D;&#x7684;&#x89C4;&#x8303;&#x5B9E;&#x73B0;&#xFF0C;&#x5E76;&#x5047;&#x5B9A; <code>Object</code> &#x548C; <code>TypeError</code> &#x6709;&#x5176;&#x672C;&#x8EAB;&#x7684;&#x503C;&#xFF0C;&#xA0; <code>callback.call</code> &#x5BF9;&#x5E94; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call" title="call() &#x65B9;&#x6CD5;&#x5728;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;this&#x503C;&#x548C;&#x82E5;&#x5E72;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x503C;&#x7684;&#x524D;&#x63D0;&#x4E0B;&#x8C03;&#x7528;&#x67D0;&#x4E2A;&#x51FD;&#x6570;&#x6216;&#x65B9;&#x6CD5;."><code>Function.prototype.call</code></a> &#x3002;&#x6B64;&#x5916;&#xFF0C;&#x9274;&#x4E8E;&#x65E0;&#x6CD5;&#x4F7F;&#x7528; Polyfill &#x5B9E;&#x73B0;&#x771F;&#x6B63;&#x7684;&#x7684;&#x8FED;&#x4EE3;&#x5668;&#xFF0C;&#x8BE5;&#x5B9E;&#x73B0;&#x4E0D;&#x652F;&#x6301;&#x89C4;&#x8303;&#x4E2D;&#x5B9A;&#x4E49;&#x7684;&#x6CDB;&#x578B;&#x53EF;&#x8FED;&#x4EE3;&#x5143;&#x7D20;&#x3002;</p>

<pre class="brush: js">// Production steps of ECMA-262, Edition 6, 22.1.2.1
// Reference: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from
if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === &apos;function&apos; || toStr.call(fn) === &apos;[object Function]&apos;;
    };
    var toInteger = function (value) {
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; var number = Number(value);
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; if (isNaN(number)) { return 0; }
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; if (number === 0 || !isFinite(number)) { return number; }
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; return (number &gt; 0 ? 1 : -1) * Math.floor(Math.abs(number));
&#xA0;&#xA0;  };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
&#xA0;&#xA0;&#xA0; };

    // The length property of the from method is 1.
    return function from(arrayLike/*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError(&quot;Array.from requires an array-like object - not null or undefined&quot;);
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length &gt; 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== &apos;undefined&apos;) {
        // 5. else      
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError(&apos;Array.from: when provided, the second argument must be a function&apos;);
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
&#xA0;&#xA0;  &#xA0;   if (arguments.length &gt; 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, &quot;length&quot;).
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k &lt; len&#x2026; (also steps a - h)
      var kValue;
      while (k &lt; len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === &apos;undefined&apos; ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, &quot;length&quot;, len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }());
}
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table>
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-array.from" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Array.from</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-array.from" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Array.from</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
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

<table>
 <tbody>
  <tr>
   <th>Feature</th>
   <th>Chrome</th>
   <th>Firefox (Gecko)</th>
   <th>Edge</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>45</td>
   <td><a href="/en-US/Firefox/Releases/32" title="Released on 2014-09-02.">32</a> (32)</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>9.0</td>
  </tr>
 </tbody>
</table>

<table>
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

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Array" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Array</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map" title="map() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7531;&#x539F;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x65B9;&#x6CD5;&#x540E;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x7EC4;&#x6210;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x3002;"><code>Array.prototype.map()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>TypedArray.from()</code></a></li>
</ul>
                  
                
              