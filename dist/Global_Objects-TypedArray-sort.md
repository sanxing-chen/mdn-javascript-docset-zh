
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>sort()</strong></code>&#x65B9;&#x6CD5;<em>&#x539F;&#x5730;</em>&#x6392;&#x5E8F;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x7684;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x4E14;&#x8FD4;&#x56DE;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x3002;&#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x7684;&#x7B97;&#x6CD5;&#x548C;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" title="sort() &#x65B9;&#x6CD5;&#x5728;&#x9002;&#x5F53;&#x7684;&#x4F4D;&#x7F6E;&#x5BF9;&#x6570;&#x7EC4;&#x7684;&#x5143;&#x7D20;&#x8FDB;&#x884C;&#x6392;&#x5E8F;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x3002; sort &#x6392;&#x5E8F;&#x4E0D;&#x4E00;&#x5B9A;&#x662F;&#x7A33;&#x5B9A;&#x7684;&#x3002;&#x9ED8;&#x8BA4;&#x6392;&#x5E8F;&#x987A;&#x5E8F;&#x662F;&#x6839;&#x636E;&#x5B57;&#x7B26;&#x4E32;Unicode&#x7801;&#x70B9;&#x3002;"><code>Array.prototype.sort()</code></a><em>&#x76F8;&#x540C;&#x3002;</em> <em>TypedArray</em> &#x662F;&#x8FD9;&#x91CC;&#x7684; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects">&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x7C7B;&#x578B;</a> &#x4E4B;&#x4E00;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><var>typedarray</var>.sort([<var>compareFunction</var>])</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>compareFunction</code> <span class="inlineIndicator optional optionalInline">&#x53EF;&#x9009;</span></dt>
 <dd>&#x6307;&#x5B9A;&#x5B9A;&#x4E49;&#x6392;&#x5E8F;&#x987A;&#x5E8F;&#x7684;&#x51FD;&#x6570;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x6392;&#x5E8F;&#x540E;&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<p>&#x66F4;&#x591A;&#x793A;&#x4F8B;&#x8BF7;&#x53C2;&#x8003; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" title="sort() &#x65B9;&#x6CD5;&#x5728;&#x9002;&#x5F53;&#x7684;&#x4F4D;&#x7F6E;&#x5BF9;&#x6570;&#x7EC4;&#x7684;&#x5143;&#x7D20;&#x8FDB;&#x884C;&#x6392;&#x5E8F;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x3002; sort &#x6392;&#x5E8F;&#x4E0D;&#x4E00;&#x5B9A;&#x662F;&#x7A33;&#x5B9A;&#x7684;&#x3002;&#x9ED8;&#x8BA4;&#x6392;&#x5E8F;&#x987A;&#x5E8F;&#x662F;&#x6839;&#x636E;&#x5B57;&#x7B26;&#x4E32;Unicode&#x7801;&#x70B9;&#x3002;"><code>Array.prototype.sort()</code></a> &#x65B9;&#x6CD5;&#x3002;</p>

<pre class="brush: js">var numbers = new Uint8Array([40, 1, 5, 200]);
numbers.sort();
// Uint8Array [ 1, 5, 40, 200 ] 
// &#x5728;&#x8FD9;&#x91CC;&#xFF0C;&#x6309;&#x6570;&#x503C;&#x6392;&#x5E8F;&#x6570;&#x503C;&#x65F6;&#xFF0C; 
// &#x4E0D;&#x9700;&#x8981;&#x6BD4;&#x8F83;&#x51FD;&#x6570;&#x3002;

var numbers = [40, 1, 5, 200];
numbers.sort();
// &#x5C06;&#x5143;&#x7D20;&#x4F5C;&#x4E3A;&#x5B57;&#x7B26;&#x4E32;&#x6765;&#x6392;&#x5E8F;&#x3002;
// [1, 200, 40, 5]

function compareNumbers(a, b) {
  return a - b;
}

numbers.sort(compareNumbers);
// [ 1, 5, 40, 200 ]
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
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-%typedarray%.prototype.sort" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">TypedArray.prototype.sort</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;&#x3002;</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.sort" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">TypedArray.prototype.sort</small></a></td>
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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><a href="/en-US/Firefox/Releases/46" title="Released on 2016-04-26.">46</a> (46)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
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
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>46.0 (46)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x53E6;&#x89C1;">&#x53E6;&#x89C1;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" title="sort() &#x65B9;&#x6CD5;&#x5728;&#x9002;&#x5F53;&#x7684;&#x4F4D;&#x7F6E;&#x5BF9;&#x6570;&#x7EC4;&#x7684;&#x5143;&#x7D20;&#x8FDB;&#x884C;&#x6392;&#x5E8F;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x3002; sort &#x6392;&#x5E8F;&#x4E0D;&#x4E00;&#x5B9A;&#x662F;&#x7A33;&#x5B9A;&#x7684;&#x3002;&#x9ED8;&#x8BA4;&#x6392;&#x5E8F;&#x987A;&#x5E8F;&#x662F;&#x6839;&#x636E;&#x5B57;&#x7B26;&#x4E32;Unicode&#x7801;&#x70B9;&#x3002;"><code>Array.prototype.sort()</code></a></li>
</ul>
                  
                
              