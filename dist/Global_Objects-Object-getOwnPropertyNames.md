
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><strong style="font-family: courier new,andale mono,monospace; line-height: 1.5;">Object.getOwnPropertyNames()</strong>&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7531;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x6240;&#x6709;&#x81EA;&#x8EAB;&#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x540D;&#xFF08;&#x5305;&#x62EC;&#x4E0D;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#xFF09;&#x7EC4;&#x6210;&#x7684;&#x6570;&#x7EC4;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">Object.getOwnPropertyNames(<em>obj</em>)</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt>obj</dt>
 <dd>&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#xFF0C;&#x5176;&#x81EA;&#x8EAB;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x548C;&#x4E0D;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#x7684;&#x540D;&#x79F0;&#x88AB;&#x8FD4;&#x56DE;&#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x5728;&#x7ED9;&#x5B9A;&#x5BF9;&#x8C61;&#x4E0A;&#x627E;&#x5230;&#x7684;&#x5C5E;&#x6027;&#x5BF9;&#x5E94;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x6570;&#x7EC4;&#x3002;</p>

<h2 style="margin-bottom: 20px; line-height: 30px;" name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p><code>Object.getOwnPropertyNames</code>&#xA0;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#xFF0C;&#x8BE5;&#x6570;&#x7EC4;&#x5BF9;&#x5143;&#x7D20;&#x662F; <code>obj </code>&#x81EA;&#x8EAB;&#x62E5;&#x6709;&#x7684;&#x679A;&#x4E3E;&#x6216;&#x4E0D;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#x540D;&#x79F0;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#xA0;&#x6570;&#x7EC4;&#x4E2D;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#x7684;&#x987A;&#x5E8F;&#x4E0E;&#x901A;&#x8FC7;&#xA0;<a title="&#x4EE5;&#x4EFB;&#x610F;&#x5E8F;&#x8FED;&#x4EE3;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#x3002;&#x6BCF;&#x4E2A;&#x4E0D;&#x540C;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x8BED;&#x53E5;&#x90FD;&#x4F1A;&#x88AB;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in"><code>for...in</code></a> &#x5FAA;&#x73AF;&#xFF08;&#x6216; <a title="Object.keys() &#x65B9;&#x6CD5;&#x4F1A;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7531;&#x7ED9;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x6240;&#x6709;&#x53EF;&#x679A;&#x4E3E;&#x81EA;&#x8EAB;&#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x7EC4;&#x6210;&#x7684;&#x6570;&#x7EC4;&#xFF0C;&#x6570;&#x7EC4;&#x4E2D;&#x5C5E;&#x6027;&#x540D;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;&#x548C;&#x4F7F;&#x7528;for-in&#x5FAA;&#x73AF;&#x904D;&#x5386;&#x8BE5;&#x5BF9;&#x8C61;&#x65F6;&#x8FD4;&#x56DE;&#x7684;&#x987A;&#x5E8F;&#x4E00;&#x81F4; (&#x987A;&#x5E8F;&#x4E00;&#x81F4;&#x4E0D;&#x5305;&#x62EC;&#x6570;&#x5B57;&#x5C5E;&#x6027;)&#xFF08;&#x4E24;&#x8005;&#x7684;&#x4E3B;&#x8981;&#x533A;&#x522B;&#x662F; for-in &#x8FD8;&#x4F1A;&#x904D;&#x5386;&#x51FA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4ECE;&#x5176;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x7EE7;&#x627F;&#x5230;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"><code>Object.keys</code></a>&#xFF09;&#x8FED;&#x4EE3;&#x8BE5;&#x5BF9;&#x8C61;&#x5C5E;&#x6027;&#x65F6;&#x4E00;&#x81F4;&#x3002; &#x6570;&#x7EC4;&#x4E2D;&#x4E0D;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#x7684;&#x987A;&#x5E8F;&#x672A;&#x5B9A;&#x4E49;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;_Object.getOwnPropertyNames()">&#x4F7F;&#x7528;&#xA0;<code>Object.getOwnPropertyNames()</code></h3>

<pre class="brush: js">var arr = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;];
console.log(Object.getOwnPropertyNames(arr).sort()); // [&quot;0&quot;, &quot;1&quot;, &quot;2&quot;, &quot;length&quot;]

// &#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;
var obj = { 0: &quot;a&quot;, 1: &quot;b&quot;, 2: &quot;c&quot;};
console.log(Object.getOwnPropertyNames(obj).sort()); // [&quot;0&quot;, &quot;1&quot;, &quot;2&quot;]

// &#x4F7F;&#x7528;Array.forEach&#x8F93;&#x51FA;&#x5C5E;&#x6027;&#x540D;&#x548C;&#x5C5E;&#x6027;&#x503C;
Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {
  console.log(val + &quot; -&gt; &quot; + obj[val]);
});
// &#x8F93;&#x51FA;
// 0 -&gt; a
// 1 -&gt; b
// 2 -&gt; c

//&#x4E0D;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;
var my_obj = Object.create({}, {
  getFoo: {
    value: function() { return this.foo; },
    enumerable: false
  }
});
my_obj.foo = 1;

console.log(Object.getOwnPropertyNames(my_obj).sort()); // [&quot;foo&quot;, &quot;getFoo&quot;]
</pre>

<p>&#x5982;&#x679C;&#x4F60;&#x53EA;&#x8981;&#x83B7;&#x53D6;&#x5230;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#xFF0C;&#x67E5;&#x770B;&#xA0;<a title="Object.keys() &#x65B9;&#x6CD5;&#x4F1A;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7531;&#x7ED9;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x6240;&#x6709;&#x53EF;&#x679A;&#x4E3E;&#x81EA;&#x8EAB;&#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x7EC4;&#x6210;&#x7684;&#x6570;&#x7EC4;&#xFF0C;&#x6570;&#x7EC4;&#x4E2D;&#x5C5E;&#x6027;&#x540D;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;&#x548C;&#x4F7F;&#x7528;for-in&#x5FAA;&#x73AF;&#x904D;&#x5386;&#x8BE5;&#x5BF9;&#x8C61;&#x65F6;&#x8FD4;&#x56DE;&#x7684;&#x987A;&#x5E8F;&#x4E00;&#x81F4; (&#x987A;&#x5E8F;&#x4E00;&#x81F4;&#x4E0D;&#x5305;&#x62EC;&#x6570;&#x5B57;&#x5C5E;&#x6027;)&#xFF08;&#x4E24;&#x8005;&#x7684;&#x4E3B;&#x8981;&#x533A;&#x522B;&#x662F; for-in &#x8FD8;&#x4F1A;&#x904D;&#x5386;&#x51FA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4ECE;&#x5176;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x7EE7;&#x627F;&#x5230;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"><code>Object.keys</code></a>&#xA0;&#x6216;&#x7528;&#xA0;<a title="zh-CN/Reference/Statements/for...in" href="/zh-CN/JavaScript/Reference/Statements/for...in">for...in&#x5FAA;&#x73AF;</a>&#xFF08;&#x8FD8;&#x4F1A;&#x83B7;&#x53D6;&#x5230;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#xFF0C;&#x4E0D;&#x8FC7;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;<code>hasOwnProperty()</code>&#x65B9;&#x6CD5;&#x8FC7;&#x6EE4;&#x6389;&#xFF09;&#x3002;</p>

<p>&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x6F14;&#x793A;&#x4E86;&#x8BE5;&#x65B9;&#x6CD5;&#x4E0D;&#x4F1A;&#x83B7;&#x53D6;&#x5230;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x7684;&#x5C5E;&#x6027;&#xFF1A;</p>

<pre class="brush: js">function ParentClass() {}
ParentClass.prototype.inheritedMethod = function() {};

function ChildClass() {
&#xA0; this.prop = 5;
&#xA0; this.method = function() {};
}

ChildClass.prototype = new ParentClass;
ChildClass.prototype.prototypeMethod = function() {};

console.log(
&#xA0; Object.getOwnPropertyNames(
&#xA0;   new ChildClass()  // [&quot;prop&quot;, &quot;method&quot;]
&#xA0; )
);
</pre>

<h3 id="&#x53EA;&#x83B7;&#x53D6;&#x4E0D;&#x53EF;&#x679A;&#x4E3E;&#x7684;&#x5C5E;&#x6027;">&#x53EA;&#x83B7;&#x53D6;&#x4E0D;&#x53EF;&#x679A;&#x4E3E;&#x7684;&#x5C5E;&#x6027;</h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x4F7F;&#x7528;&#x4E86; <a title="filter()&#xA0;&#x65B9;&#x6CD5;&#x4F7F;&#x7528;&#x6307;&#x5B9A;&#x7684;&#x51FD;&#x6570;&#x6D4B;&#x8BD5;&#x6240;&#x6709;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x6240;&#x6709;&#x901A;&#x8FC7;&#x6D4B;&#x8BD5;&#x7684;&#x5143;&#x7D20;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"><code>Array.prototype.filter()</code></a> &#x65B9;&#x6CD5;&#xFF0C;&#x4ECE;&#x6240;&#x6709;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x6570;&#x7EC4;&#xFF08;&#x4F7F;&#x7528;&#xA0;&#xA0;<code>Object.getOwnPropertyNames() &#x65B9;&#x6CD5;&#x83B7;&#x5F97;</code>&#xFF09;&#x4E2D;&#x53BB;&#x9664;&#x53EF;&#x679A;&#x4E3E;&#x7684;&#x5C5E;&#x6027;&#xFF08;&#x4F7F;&#x7528;&#xA0;&#xA0;<a title="Object.keys() &#x65B9;&#x6CD5;&#x4F1A;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7531;&#x7ED9;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x6240;&#x6709;&#x53EF;&#x679A;&#x4E3E;&#x81EA;&#x8EAB;&#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x7EC4;&#x6210;&#x7684;&#x6570;&#x7EC4;&#xFF0C;&#x6570;&#x7EC4;&#x4E2D;&#x5C5E;&#x6027;&#x540D;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;&#x548C;&#x4F7F;&#x7528;for-in&#x5FAA;&#x73AF;&#x904D;&#x5386;&#x8BE5;&#x5BF9;&#x8C61;&#x65F6;&#x8FD4;&#x56DE;&#x7684;&#x987A;&#x5E8F;&#x4E00;&#x81F4; (&#x987A;&#x5E8F;&#x4E00;&#x81F4;&#x4E0D;&#x5305;&#x62EC;&#x6570;&#x5B57;&#x5C5E;&#x6027;)&#xFF08;&#x4E24;&#x8005;&#x7684;&#x4E3B;&#x8981;&#x533A;&#x522B;&#x662F; for-in &#x8FD8;&#x4F1A;&#x904D;&#x5386;&#x51FA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4ECE;&#x5176;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x7EE7;&#x627F;&#x5230;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"><code>Object.keys()</code></a><code>&#xA0;&#x65B9;&#x6CD5;&#x83B7;&#x5F97;</code>&#xFF09;&#xFF0C;&#x5269;&#x4F59;&#x7684;&#x5C5E;&#x6027;&#x4FBF;&#x662F;&#x4E0D;&#x53EF;&#x679A;&#x4E3E;&#x7684;&#x5C5E;&#x6027;&#x4E86;&#xFF1A;</p>

<pre class="brush: js">var target = myObject;
var enum_and_nonenum = Object.getOwnPropertyNames(target);
var enum_only = Object.keys(target);
var nonenum_only = enum_and_nonenum.filter(function(key) {
&#xA0; &#xA0; var indexInEnum = enum_only.indexOf(key);
&#xA0; &#xA0; if (indexInEnum == -1) {
&#xA0; &#xA0; &#xA0; &#xA0; // not found in enum_only keys mean the key is non-enumerable,
&#xA0; &#xA0; &#xA0; &#xA0; // so return true so we keep this in the filter
&#xA0; &#xA0; &#xA0; &#xA0; return true;
&#xA0; &#xA0; } else {
&#xA0; &#xA0; &#xA0; &#xA0; return false;
&#xA0; &#xA0; }
});

console.log(nonenum_only);
</pre>

<h2 name="Notes" id="Notes">&#x6CE8;:</h2>

<p>&#x5728; ES5 &#x4E2D;&#xFF0C;&#x5982;&#x679C;&#x53C2;&#x6570;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7C7B;&#x578B;&#xFF0C;&#x5C06;&#x629B;&#x51FA;&#x4E00;&#x4E2A;&#xA0;<a title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a>&#xA0; &#x5F02;&#x5E38;&#x3002;&#x5728;&#xA0;ES6 &#x4E2D;&#xFF0C;&#xA0;non-object&#xA0;&#x53C2;&#x6570;&#x88AB;&#x5F3A;&#x5236;&#x8F6C;&#x6362;&#x4E3A; object&#xA0;<strong>&#x3002;</strong></p>

<pre class="brush: js">Object.getOwnPropertyNames(&apos;foo&apos;);
// TypeError: &quot;foo&quot; is not an object (ES5 code)

Object.getOwnPropertyNames(&apos;foo&apos;);
// [&apos;length&apos;, &apos;0&apos;, &apos;1&apos;, &apos;2&apos;]  (ES6 code)
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
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.2.3.4" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Object.getOwnPropertyNames</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.<br>
    Implemented in JavaScript 1.8.5</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-object.getownpropertynames" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Object.getOwnPropertyNames</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-object.getownpropertynames" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Object.getOwnPropertyNames</small></a></td>
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
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>5</td>
   <td><a title="Released on 2011-03-22." href="/en-US/Firefox/Releases/4">4.0</a> (2)</td>
   <td>9</td>
   <td>12</td>
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
   <th>Firefox Mobile (Gecko)</th>
   <th>Android</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<p>Based on&#xA0;<a href="http://kangax.github.com/es5-compat-table/" class="external">Kangax&apos;s compat table</a>.</p>

<h3 style="line-height: 24px;" id="SpiderMonkey-specific_notes">SpiderMonkey-specific notes</h3>

<p>&#xA0;SpiderMonkey 28 (Firefox 28 / Thunderbird 28 / SeaMonkey 2.25 / Firefox OS 1.3) &#x7248;&#x672C;&#x4E4B;&#x524D;&#xFF0C;<code>Object.getOwnPropertyNames</code>&#xA0;&#x4E0D;&#x4F1A;&#x83B7;&#x53D6;&#x5230; <a title="&#x901A;&#x8FC7;Error&#x7684;&#x6784;&#x9020;&#x5668;&#x53EF;&#x4EE5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#x5BF9;&#x8C61;&#x3002;&#x5F53;&#x8FD0;&#x884C;&#x65F6;&#x9519;&#x8BEF;&#x4EA7;&#x751F;&#x65F6;&#xFF0C;Error&#x7684;&#x5B9E;&#x4F8B;&#x5BF9;&#x8C61;&#x4F1A;&#x88AB;&#x629B;&#x51FA;&#x3002;Error&#x5BF9;&#x8C61;&#x53EF;&#x7528;&#x4E8E;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#x5F02;&#x5E38;&#x7684;&#x57FA;&#x7840;&#x5BF9;&#x8C61;&#x3002;&#x4E0B;&#x9762;&#x5217;&#x51FA;&#x4E86;&#x5404;&#x79CD;&#x5185;&#x5EFA;&#x7684;&#x6807;&#x51C6;&#x9519;&#x8BEF;&#x7C7B;&#x578B;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error"><code>Error</code></a> &#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#x3002;&#x8BE5; bug &#x5728;&#x540E;&#x9762;&#x7684;&#x7248;&#x672C;&#x4FEE;&#x590D;&#x4E86;&#xA0;(<a title="FIXED: Object.getOwnPropertyNames does not see unresolved properties of Error objects" href="https://bugzilla.mozilla.org/show_bug.cgi?id=724768" class="external">bug&#xA0;724768</a>)&#x3002;</p>

<h2 style="margin-bottom: 20px; line-height: 30px;" name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="Enumerability_and_ownership_of_properties" href="https://developer.mozilla.org/en-US/docs/Enumerability_and_ownership_of_properties">Enumerability and ownership of properties</a></li>
 <li><a title="hasOwnProperty() &#x65B9;&#x6CD5;&#x4F1A;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5E03;&#x5C14;&#x503C;&#xFF0C;&#x5176;&#x7528;&#x6765;&#x5224;&#x65AD;&#x67D0;&#x4E2A;&#x5BF9;&#x8C61;&#x662F;&#x5426;&#x542B;&#x6709;&#x6307;&#x5B9A;&#x7684;&#x5C5E;&#x6027;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"><code>Object.prototype.hasOwnProperty</code></a></li>
 <li><a title="propertyIsEnumerable() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5E03;&#x5C14;&#x503C;&#xFF0C;&#x8868;&#x660E;&#x6307;&#x5B9A;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x662F;&#x5426;&#x662F;&#x5F53;&#x524D;&#x5BF9;&#x8C61;&#x53EF;&#x679A;&#x4E3E;&#x7684;&#x81EA;&#x8EAB;&#x5C5E;&#x6027;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"><code>Object.prototype.propertyIsEnumerable</code></a></li>
 <li><a title="Object.create() &#x65B9;&#x6CD5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x62E5;&#x6709;&#x6307;&#x5B9A;&#x539F;&#x578B;&#x548C;&#x82E5;&#x5E72;&#x4E2A;&#x6307;&#x5B9A;&#x5C5E;&#x6027;&#x7684;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create"><code>Object.create</code></a></li>
 <li><a title="Object.keys() &#x65B9;&#x6CD5;&#x4F1A;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7531;&#x7ED9;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x6240;&#x6709;&#x53EF;&#x679A;&#x4E3E;&#x81EA;&#x8EAB;&#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x7EC4;&#x6210;&#x7684;&#x6570;&#x7EC4;&#xFF0C;&#x6570;&#x7EC4;&#x4E2D;&#x5C5E;&#x6027;&#x540D;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;&#x548C;&#x4F7F;&#x7528;for-in&#x5FAA;&#x73AF;&#x904D;&#x5386;&#x8BE5;&#x5BF9;&#x8C61;&#x65F6;&#x8FD4;&#x56DE;&#x7684;&#x987A;&#x5E8F;&#x4E00;&#x81F4; (&#x987A;&#x5E8F;&#x4E00;&#x81F4;&#x4E0D;&#x5305;&#x62EC;&#x6570;&#x5B57;&#x5C5E;&#x6027;)&#xFF08;&#x4E24;&#x8005;&#x7684;&#x4E3B;&#x8981;&#x533A;&#x522B;&#x662F; for-in &#x8FD8;&#x4F1A;&#x904D;&#x5386;&#x51FA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4ECE;&#x5176;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x7EE7;&#x627F;&#x5230;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"><code>Object.keys</code></a></li>
 <li><a title="forEach() &#x65B9;&#x6CD5;&#x5BF9;&#x6570;&#x7EC4;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x63D0;&#x4F9B;&#x7684;&#x51FD;&#x6570;(&#x56DE;&#x8C03;&#x51FD;&#x6570;)&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"><code>Array.forEach()</code></a></li>
</ul>
                  
                
              