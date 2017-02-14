
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>WeakMap &#x5BF9;&#x8C61;&#x662F;&#x952E;/&#x503C;&#x5BF9;&#x7684;&#x96C6;&#x5408;&#xFF0C;&#x4E14;&#x5176;&#x4E2D;&#x7684;&#x952E;&#x662F;&#x5F31;&#x5F15;&#x7528;&#x7684;&#x3002;&#x5176;&#x952E;&#x53EA;&#x80FD;&#x662F;&#x5BF9;&#x8C61;&#xFF0C;&#x800C;&#x503C;&#x5219;&#x53EF;&#x4EE5;&#x662F;&#x4EFB;&#x610F;&#x7684;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre>new WeakMap([iterable])</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>iterable</code></dt>
 <dd>Iterable &#x662F;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#xFF08;2&#x5143;&#x6570;&#x7EC4;&#xFF09;&#x6216;&#x8005;&#x53EF;&#x904D;&#x5386;&#x7684;&#x4E14;&#x5176;&#x5143;&#x7D20;&#x662F;&#x952E;&#x503C;&#x5BF9;&#x7684;&#x5BF9;&#x8C61;&#x3002;&#x6BCF;&#x4E2A;&#x952E;&#x503C;&#x5BF9;&#x4F1A;&#x88AB;&#x52A0;&#x5230;&#x65B0;&#x7684;&#xA0;WeakMap &#x91CC;&#x3002;</dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>WeakMap &#x7684; key &#x53EA;&#x80FD;&#x662F;&#x5BF9;&#x8C61;&#x7C7B;&#x578B;&#x3002;&#xA0;<a title="&#x539F;&#x59CB;&#x6570;&#x636E;&#x7C7B;&#x578B;: Editorial review completed." href="/en-US/docs/Glossary/Primitive" class="glossaryLink">&#x539F;&#x59CB;&#x6570;&#x636E;&#x7C7B;&#x578B;</a> &#x662F;&#x4E0D;&#x80FD;&#x4F5C;&#x4E3A; key &#x7684;&#xFF08;&#x6BD4;&#x5982; <a title="Symbol &#x662F;&#x4E00;&#x79CD;&#x7279;&#x6B8A;&#x7684;&#x3001;&#x4E0D;&#x53EF;&#x53D8;&#x7684;&#x6570;&#x636E;&#x7C7B;&#x578B;&#xFF0C;&#x53EF;&#x4EE5;&#x4F5C;&#x4E3A;&#x5BF9;&#x8C61;&#x5C5E;&#x6027;&#x7684;&#x6807;&#x8BC6;&#x7B26;&#x4F7F;&#x7528;&#x3002;Symbol &#x5BF9;&#x8C61;&#x662F;&#x4E00;&#x4E2A; symbol primitive data type &#x7684;&#x9690;&#x5F0F;&#x5BF9;&#x8C61;&#x5305;&#x88C5;&#x5668;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol"><code>Symbol</code></a>&#xFF09;&#x3002;</p>

<h3 id="Why_WeakMap">Why <em>WeakMap</em>?</h3>

<p>&#x7ECF;&#x9A8C;&#x4E30;&#x5BCC;&#x7684; JavaScript &#x7A0B;&#x5E8F;&#x5458;&#x4F1A;&#x6CE8;&#x610F;&#x5230;&#xFF0C;WeakMap &#x5B8C;&#x5168;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x4E24;&#x4E2A;&#x6570;&#x7EC4;(&#x4E00;&#x4E2A;&#x5B58;&#x653E;&#x952E;,&#x4E00;&#x4E2A;&#x5B58;&#x653E;&#x503C;)&#x6765;&#x5B9E;&#x73B0;&#x3002;&#x4F46;&#x8FD9;&#x6837;&#x7684;&#x5B9E;&#x73B0;&#x4F1A;&#x6709;&#x4E24;&#x4E2A;&#x5F88;&#x5927;&#x7684;&#x7F3A;&#x70B9;&#xFF0C;&#x9996;&#x5148;&#x662F;O(n)&#x7684;&#x65F6;&#x95F4;&#x590D;&#x6742;&#x5EA6;(n&#x662F;&#x952E;&#x503C;&#x5BF9;&#x7684;&#x4E2A;&#x6570;)&#x3002;&#x53E6;&#x5916;&#x4E00;&#x4E2A;&#x5219;&#x53EF;&#x80FD;&#x4F1A;&#x5BFC;&#x81F4;&#x5185;&#x5B58;&#x6CC4;&#x6F0F;:&#x5728;&#x8FD9;&#x79CD;&#x81EA;&#x5DF1;&#x5B9E;&#x73B0;&#x7684; WeakMap &#x4E2D;,&#x5B58;&#x653E;&#x952E;&#x7684;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x7D22;&#x5F15;&#x5C06;&#x4F1A;&#x4FDD;&#x6301;&#x5BF9;&#x6240;&#x5F15;&#x7528;&#x5BF9;&#x8C61;&#x7684;&#x5F15;&#x7528;,&#x963B;&#x6B62;&#x4ED6;&#x4EEC;&#x88AB;&#x5F53;&#x4F5C;&#x5783;&#x573E;&#x56DE;&#x6536;.&#x800C;&#x5728;&#x539F;&#x751F;&#x7684;WeakMap&#x4E2D;,&#x6BCF;&#x4E2A;&#x952E;&#x5BF9;&#x81EA;&#x5DF1;&#x6240;&#x5F15;&#x7528;&#x5BF9;&#x8C61;&#x7684;&#x5F15;&#x7528;&#x662F; &quot;&#x5F31;&#x5F15;&#x7528;&quot;, &#x8FD9;&#x610F;&#x5473;&#x7740;,&#x5982;&#x679C;&#x6CA1;&#x6709;&#x5176;&#x4ED6;&#x5F15;&#x7528;&#x548C;&#x8BE5;&#x952E;&#x5F15;&#x7528;&#x540C;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;,&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x5C06;&#x4F1A;&#x88AB;&#x5F53;&#x4F5C;&#x5783;&#x573E;&#x56DE;&#x6536;.</p>

<p>&#x6B63;&#x7531;&#x4E8E;&#x8FD9;&#x6837;&#x7684;&#x5F31;&#x5F15;&#x7528;&#xFF0C;<code>WeakMap</code> &#x7684; key&#xA0;&#x662F;&#x975E;&#x679A;&#x4E3E;&#x7684; (&#x6CA1;&#x6709;&#x65B9;&#x6CD5;&#x80FD;&#x7ED9;&#x51FA;&#x6240;&#x6709;&#x7684; key)&#x3002;&#x5982;&#x679C;key &#x662F;&#x53EF;&#x679A;&#x4E3E;&#x7684;&#x8BDD;&#xFF0C;&#x5176;&#x5217;&#x8868;&#x5C06;&#x4F1A;&#x53D7;&#x5783;&#x573E;&#x56DE;&#x6536;&#x673A;&#x5236;&#x7684;&#x5F71;&#x54CD;&#xFF0C;&#x4ECE;&#x800C;&#x5F97;&#x5230;&#x4E0D;&#x786E;&#x5B9A;&#x7684;&#x7ED3;&#x679C;. &#x56E0;&#x6B64;,&#x5982;&#x679C;&#x4F60;&#x60F3;&#x8981;&#x8FD9;&#x79CD;&#x7C7B;&#x578B;&#x5BF9;&#x8C61;&#x7684;&#xA0;key &#x503C;&#x7684;&#x5217;&#x8868;&#xFF0C;&#x4F60;&#x5E94;&#x8BE5;&#x4F7F;&#x7528; <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Map"><code>Map</code></a>&#x3002;</p>

<h2 id="&#x5C5E;&#x6027;">&#x5C5E;&#x6027;</h2>

<dl>
 <dt><code>WeakMap.length</code></dt>
 <dd><code>length &#x5C5E;&#x6027;&#x7684;&#x503C;&#x4E3A;</code>&#xA0;0&#x3002;</dd>
 <dt><a title="WeakMap.prototype&#x5C5E;&#x6027;&#x8868;&#x73B0;&#x4E3A; WeakMap&#x7684;&#x6784;&#x9020;&#x5668;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/prototype"><code>WeakMap.prototype</code></a></dt>
 <dd><code>WeakMap &#x6784;&#x9020;&#x5668;&#x7684;&#x539F;&#x578B;&#x3002;</code>&#xA0;&#x5141;&#x8BB8;&#x6DFB;&#x52A0;&#x5C5E;&#x6027;&#x5230;&#x6240;&#x6709;&#x7684; WeakMap &#x5BF9;&#x8C61;&#x3002;</dd>
</dl>

<h2 id="WeakMap_&#x5B9E;&#x4F8B;"><code>WeakMap</code>&#xA0;&#x5B9E;&#x4F8B;</h2>

<p>&#x6240;&#x6709;&#xA0;<code>WeakMap</code>&#xA0;&#x5B9E;&#x4F8B;&#x7EE7;&#x627F;&#x81EA;&#xA0;<a title="WeakMap.prototype&#x5C5E;&#x6027;&#x8868;&#x73B0;&#x4E3A; WeakMap&#x7684;&#x6784;&#x9020;&#x5668;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/prototype"><code>WeakMap.prototype</code></a>.</p>

<h3 id="&#x5C5E;&#x6027;_2">&#x5C5E;&#x6027;</h3>

<p></p><dl><dt><code>WeakMap.prototype.constructor</code></dt>
 <dd>&#x8FD4;&#x56DE;&#x521B;&#x5EFA;WeakMap&#x5B9E;&#x4F8B;&#x7684;&#x539F;&#x578B;&#x51FD;&#x6570;&#x3002; <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/WeakMap"><code>WeakMap</code></a>&#x51FD;&#x6570;&#x662F;&#x9ED8;&#x8BA4;&#x7684;&#x3002;</dd>
</dl><p></p>

<h3 id="&#x65B9;&#x6CD5;">&#x65B9;&#x6CD5;</h3>

<p></p><dl><dt><a title="delete() &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x4ECE;&#x4E00;&#x4E2A; WeakMap &#x5BF9;&#x8C61;&#x4E2D;&#x5220;&#x9664;&#x6307;&#x5B9A;&#x7684;&#x5143;&#x7D20;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/delete"><code>WeakMap.prototype.delete(key)</code></a></dt>
 <dd>&#x79FB;&#x9664;key&#x7684;&#x5173;&#x8054;&#x5BF9;&#x8C61;&#x3002;&#x6267;&#x884C;&#x540E; <code>WeakMap.prototype.has(key)&#x8FD4;&#x56DE;</code><code>false&#x3002;</code></dd>
 <dt><a title="get()&#xA0;&#x8FD4;&#x56DE; &#xA0;WeakMap&#xA0;&#x6307;&#x5B9A;&#x7684;&#x5143;&#x7D20;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/get"><code>WeakMap.prototype.get(key)</code></a></dt>
 <dd>&#x8FD4;&#x56DE;<code>key&#x5173;&#x8054;&#x5BF9;&#x8C61;</code>, &#x6216;&#x8005; <code>undefined</code>(&#x6CA1;&#x6709;key&#x5173;&#x8054;&#x5BF9;&#x8C61;&#x65F6;)&#x3002;</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/has"><code>WeakMap.prototype.has(key)</code></a></dt>
 <dd>&#x6839;&#x636E;&#x662F;&#x5426;&#x6709;key&#x5173;&#x8054;&#x5BF9;&#x8C61;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;Boolean&#x503C;&#x3002;</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/set"><code>WeakMap.prototype.set(key, value)</code></a></dt>
 <dd>&#x5728;WeakMap&#x4E2D;&#x8BBE;&#x7F6E;&#x4E00;&#x7EC4;key&#x5173;&#x8054;&#x5BF9;&#x8C61;&#xFF0C;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A; <code>WeakMap</code>&#x5BF9;&#x8C61;&#x3002;</dd>
 <dt><s class="obsoleteElement"><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/clear"><code>WeakMap.prototype.clear()</code></a> <span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span></s></dt>
 <dd><s class="obsoleteElement">&#x4ECE;<code>WeakMap&#x4E2D;&#x79FB;&#x9664;&#x6240;&#x6709;&#x7684;</code> key/value &#x3002; &#x6CE8;&#x610F;&#xFF0C; &#x8FD9;&#x662F;&#x4E00;&#x4E2A;WeakMap&#x7C7B;&#x578B;&#x5BF9;&#x8C61;&#x9700;&#x8981;&#x7684;&#x65B9;&#x6CD5;&#xFF0C;&#x96BE;&#x9053;&#x4E0D;&#x662F;&#x5417;&#xFF1F; (&#x53C2;&#x770B; <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/WeakMap"><code>WeakMap</code></a>)</s></dd>
</dl><p></p>

<h2 id="&#x4F8B;&#x5B50;"><span style="font-size: 2.143rem;">&#x4F8B;&#x5B50;</span></h2>

<h4 id="&#x4F7F;&#x7528;_WeakMap">&#x4F7F;&#x7528; <code>WeakMap</code></h4>

<pre class="brush: js">var wm1 = new WeakMap(),
    wm2 = new WeakMap(),
    wm3 = new WeakMap();
var o1 = {},
    o2 = function(){},
    o3 = window;

wm1.set(o1, 37);
wm1.set(o2, &quot;azerty&quot;);
wm2.set(o1, o2); // value&#x53EF;&#x4EE5;&#x662F;&#x4EFB;&#x610F;&#x503C;,&#x5305;&#x62EC;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // &#x952E;&#x548C;&#x503C;&#x53EF;&#x4EE5;&#x662F;&#x4EFB;&#x610F;&#x5BF9;&#x8C61;,&#x751A;&#x81F3;&#x53E6;&#x5916;&#x4E00;&#x4E2A;WeakMap&#x5BF9;&#x8C61;
wm1.get(o2); // &quot;azerty&quot;
wm2.get(o2); // undefined,wm2&#x4E2D;&#x6CA1;&#x6709;o2&#x8FD9;&#x4E2A;&#x952E;
wm2.get(o3); // undefined,&#x503C;&#x5C31;&#x662F;undefined

wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true (&#x5373;&#x4F7F;&#x503C;&#x662F;undefined)

wm3.set(o1, 37);
wm3.get(o1); // 37
wm3.clear();
wm3.get(o1); // undefined,wm3&#x5DF2;&#x88AB;&#x6E05;&#x7A7A;
wm1.has(o1);   // true
wm1.delete(o1);
wm1.has(o1);   // false
</pre>

<h3 id="&#x7528;_.clear()_&#x65B9;&#x6CD5;&#x5B9E;&#x73B0;&#x4F2A;_WeakMap">&#x7528; .clear() &#x65B9;&#x6CD5;&#x5B9E;&#x73B0;&#x4F2A;&#xA0;<code>WeakMap</code></h3>

<p>&#x4E3A;&#x4E86;&#x66F4;&#x597D;&#x7684;&#x8BF4;&#x660E;&#xFF0C;&#x4E0B;&#x9762;&#x4F7F;&#x7528;&#x4E86; ECMAScript6 &#x65B0;&#x589E;&#x7684; <code>class</code>&#xA0;&#x6784;&#x9020;&#x51FD;&#x6570;&#xFF0C;&#x5176;&#x76EE;&#x524D;&#x6CA1;&#x6709;&#x5E7F;&#x6CDB;&#x5B9E;&#x73B0;&#x3002;</p>

<pre class="brush: js">class ClearableWeakMap {
  constructor(init) {
    this._wm = new WeakMap(init)
  }
  clear() {
    this._wm = new WeakMap()
  }
  delete(k) {
    return this._wm.delete(k)
  }
  get(k) {
    return this._wm.get(k)
  }
  has(k) {
    return this._wm.has(k)
  }
  set(k, v) {
    this._wm.set(k, v)
    return this
  }
}</pre>

<h2 name="Specifications" id="Specifications">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-weakmap-objects" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">WeakMap</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-weakmap-objects" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">WeakMap</small></a></td>
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

<div id="compat-desktop">
<table class="compat-table">
 <tbody>
  <tr>
   <th>Feature</th>
   <th>Chrome</th>
   <th>Edge</th>
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>36</td>
   <td>12</td>
   <td><a title="Released on 2011-08-16." href="/en-US/Firefox/Releases/6">6.0</a> (6.0)</td>
   <td>11</td>
   <td>23</td>
   <td>7.1</td>
  </tr>
  <tr>
   <td><code>new WeakMap(iterable)</code></td>
   <td>38</td>
   <td>12</td>
   <td><a title="Released on 2015-02-24." href="/en-US/Firefox/Releases/36">36</a> (36)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>25</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
  <tr>
   <td>Obsolete clear() method removed</td>
   <td>43</td>
   <td>12</td>
   <td><a title="Released on 2016-04-26." href="/en-US/Firefox/Releases/46">46</a> (46)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>30</td>
   <td>9</td>
  </tr>
  <tr>
   <td>Constructor argument: <code>new WeakMap(null)</code></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>12</td>
   <td><a title="Released on 2015-04-07." href="/en-US/Firefox/Releases/37">37</a> (37)</td>
   <td>11</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
  <tr>
   <td>Monkey-patched <code>set()</code> in constructor</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>12</td>
   <td><a title="Released on 2015-04-07." href="/en-US/Firefox/Releases/37">37</a> (37)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
  <tr>
   <td><code>WeakMap()</code> without <code>new</code> throws</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>12</td>
   <td><a title="Released on 2015-11-03." href="/en-US/Firefox/Releases/42">42</a> (42)</td>
   <td>11</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
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
   <th>Chrome for Android</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>35</td>
   <td>6.0 (6.0)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>8</td>
  </tr>
  <tr>
   <td><code>new WeakMap(iterable)</code></td>
   <td>38</td>
   <td>36.0 (36)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
  <tr>
   <td>Obsolete clear() method removed</td>
   <td>43</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>30</td>
   <td>9</td>
  </tr>
  <tr>
   <td>Constructor argument: <code>new WeakMap(null)</code></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>37.0 (37)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
  <tr>
   <td>Monkey-patched <code>set()</code> in constructor</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>37.0 (37)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
  <tr>
   <td><code>WeakMap()</code> without <code>new</code> throws</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>42.0 (42)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=547941" class="external link-https">WeakMap bug at Mozilla</a></li>
 <li><a href="http://fitzgeraldnick.com/weblog/53/" class="external">Hiding Implementation Details with ECMAScript 6 WeakMaps</a></li>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Map"><code>Map</code></a></li>
 <li><a title="&#x96C6;&#x5408;&#xFF08;Set&#xFF09;&#x5BF9;&#x8C61;&#x5141;&#x8BB8;&#x4F60;&#x5B58;&#x50A8;&#x4EFB;&#x610F;&#x7C7B;&#x578B;&#x7684;&#x552F;&#x4E00;&#x503C;&#xFF08;&#x4E0D;&#x80FD;&#x91CD;&#x590D;&#xFF09;&#xFF0C;&#x65E0;&#x8BBA;&#x5B83;&#x662F;&#x539F;&#x59CB;&#x503C;&#x6216;&#x8005;&#x662F;&#x5BF9;&#x8C61;&#x5F15;&#x7528;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set"><code>Set</code></a></li>
 <li><a title="&#x4E00;&#x4E2A;&#xA0;WeakSet&#xA0;&#x5BF9;&#x8C61;&#x662F;&#x4E00;&#x4E2A;&#x65E0;&#x5E8F;&#x7684;&#x96C6;&#x5408;, &#x53EF;&#x4EE5;&#x7528;&#x5B83;&#x6765;&#x5B58;&#x50A8;&#x4EFB;&#x610F;&#x7684;&#x5BF9;&#x8C61;&#x503C;, &#x5E76;&#x4E14;&#x5BF9;&#x8FD9;&#x4E9B;&#x5BF9;&#x8C61;&#x503C;&#x4FDD;&#x6301;&#x5F31;&#x5F15;&#x7528;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet"><code>WeakSet</code></a></li>
</ul>
                  
                
              