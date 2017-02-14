
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>JavaScript &#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x662F;&#x4E00;&#x4E2A;&#x7528;&#x4E8E;&#x6784;&#x9020;&#x6570;&#x7EC4;&#x7684;&#x5168;&#x5C40;&#x5BF9;&#x8C61;; &#x5B83;&#x4EEC;&#x662F;&#x9AD8;&#x7EA7;&#x7684;&#xFF0C;&#x5217;&#x8868;&#x5F0F;&#x7684;&#x5BF9;&#x8C61;&#x3002;</p>

<p><strong>&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;</strong></p>

<pre class="brush: js">var fruits = [&quot;Apple&quot;, &quot;Banana&quot;];

console.log(fruits.length);
// 2</pre>

<p><strong>&#x901A;&#x8FC7;&#x7D22;&#x5F15;&#x8BBF;&#x95EE;&#x6570;&#x7EC4;&#x5143;&#x7D20;</strong></p>

<pre class="brush: js">var first = fruits[0];
// Apple

var last = fruits[fruits.length - 1];
// Banana</pre>

<p><strong>&#x904D;&#x5386;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;</strong></p>

<pre class="brush: js">fruits.forEach(function (item, index, array) {
  console.log(item, index);
});
// Apple 0
// Banana 1</pre>

<p><strong>&#x6DFB;&#x52A0;&#x5143;&#x7D20;&#x5230;&#x6570;&#x7EC4;&#x7684;&#x672B;&#x5C3E;</strong></p>

<pre class="brush: js">var newLength = fruits.push(&quot;Orange&quot;);
// [&quot;Apple&quot;, &quot;Banana&quot;, &quot;Orange&quot;]</pre>

<p><strong>&#x5220;&#x9664;&#x6570;&#x7EC4;&#x672B;&#x5C3E;&#x7684;&#x5143;&#x7D20;</strong></p>

<pre class="brush: js">var last = fruits.pop(); // remove Orange (from the end)
// [&quot;Apple&quot;, &quot;Banana&quot;];</pre>

<p><strong>&#x5220;&#x9664;&#x6570;&#x7EC4;&#x6700;&#x524D;&#x9762;&#xFF08;&#x5934;&#x90E8;&#xFF09;&#x7684;&#x5143;&#x7D20;</strong></p>

<pre class="brush: js">var first = fruits.shift(); // remove Apple from the front
// [&quot;Banana&quot;];</pre>

<p><strong>&#x6DFB;&#x52A0;&#x5230;&#x6570;&#x7EC4;&#x7684;&#x524D;&#x9762;&#xFF08;&#x5934;&#x90E8;&#xFF09;</strong></p>

<pre class="brush: js">var newLength = fruits.unshift(&quot;Strawberry&quot;) // add to the front
// [&quot;Strawberry&quot;, &quot;Banana&quot;];</pre>

<p><strong>&#x6DFB;&#x52A0;&#x5230;&#x6570;&#x7EC4;&#x7684;&#x540E;&#x8FB9; (&#x5C3E;&#x90E8;)</strong></p>

<pre>fruits.push(&quot;Mango&quot;);
// [&quot;Strawberry&quot;, &quot;Banana&quot;, &quot;Mango&quot;]</pre>

<p><strong>&#x627E;&#x5230;&#x67D0;&#x4E2A;&#x5143;&#x7D20;&#x5728;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x7D22;&#x5F15;</strong></p>

<pre class="brush: js">var pos = fruits.indexOf(&quot;Banana&quot;);
// 1</pre>

<p><strong>&#x901A;&#x8FC7;&#x7D22;&#x5F15;&#x5220;&#x9664;&#x67D0;&#x4E2A;&#x5143;&#x7D20;</strong></p>

<pre class="brush: js">var removedItem = fruits.splice(pos, 1); // this is how to remove an item
// [&quot;Strawberry&quot;, &quot;Mango&quot;]</pre>

<p><strong>&#x590D;&#x5236;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;</strong></p>

<pre class="brush: js">var shallowCopy = fruits.slice(); // this is how to make a copy
// [&quot;Strawberry&quot;, &quot;Mango&quot;]</pre>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">[<var>element0</var>, <var>element1</var>, ..., <var>elementN</var>]
new Array(<var>element0</var>, <var>element1</var>[, ...[, <var>elementN</var>]])
new Array(<var>arrayLength</var>)
</pre>

<dl>
 <dt>&#x5143;&#x7D20;&#x5217; &#x2014;&#x2014; <code>element<em>N</em></code></dt>
 <dd><code>Array</code> &#x6784;&#x9020;&#x5668;&#x5C06;&#x4F1A;&#x6839;&#x636E;&#x7ED9;&#x51FA;&#x7684;&#x5143;&#x7D20;&#x521B;&#x5EFA;&#x4E00;&#x4E2A; JavaScript &#x6570;&#x7EC4;&#xFF0C;&#x4F46;&#x662F;&#x5F53;&#x53C2;&#x6570;&#x4EC5;&#x6709;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#x4E14;&#x5176;&#x4E3A;&#x6570;&#x5B57;&#x65F6;&#x9664;&#x5916;&#xFF0C;&#x53C2;&#x8003;&#x4E0B;&#x9762;&#x7684; <code>arrayLength</code>&#x3002;&#x503C;&#x5F97;&#x6CE8;&#x610F;&#x7684;&#x662F;&#xFF0C;&#x8FD9;&#x79CD;&#x60C5;&#x51B5;&#x4EC5;&#x5728;&#x4F7F;&#x7528; <code>Array</code> &#x6784;&#x9020;&#x5668;&#x65F6;&#x51FA;&#x73B0;&#xFF0C;&#x4F7F;&#x7528;&#x5E26;&#x65B9;&#x62EC;&#x53F7;&#x7684;&#x6570;&#x7EC4;&#x5B57;&#x9762;&#x91CF;&#x5219;&#x4E0D;&#x4F1A;&#x3002;</dd>
 <dt>&#x6570;&#x7EC4;&#x957F;&#x5EA6; &#x2014;&#x2014; arrayLength</dt>
 <dd>&#x5411; <code>Array</code> &#x6784;&#x9020;&#x51FD;&#x6570;&#x4F20;&#x5165;&#x4E00;&#x4E2A;&#x5728; 0 &#x5230; 2<sup>32</sup>-1 &#x4E4B;&#x95F4;&#x7684;&#x6574;&#x6570;&#xFF0C;&#x5C06;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x4EE5;&#x6B64;&#x4E3A;&#x957F;&#x5EA6;&#x7684;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x3002;&#x901A;&#x8FC7; length &#x5C5E;&#x6027;&#x53EF;&#x4EE5;&#x8BBF;&#x95EE;&#x8FD9;&#x4E2A;&#x503C;&#x3002;&#x5982;&#x679C;&#x4F20;&#x5165;&#x7684;&#x53C2;&#x6570;&#x4E0D;&#x662F;&#x6709;&#x6548;&#x7684;&#x6570;&#x503C;&#xFF0C;&#x5219;&#x629B;&#x51FA; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError" title="RangeError&#x5BF9;&#x8C61;&#x6807;&#x660E;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#xFF0C;&#x5F53;&#x4E00;&#x4E2A;&#x503C;&#x4E0D;&#x5728;&#x5176;&#x6240;&#x5141;&#x8BB8;&#x7684;&#x8303;&#x56F4;&#x6216;&#x8005;&#x96C6;&#x5408;&#x4E2D;&#x3002;"><code>RangeError</code></a> &#x5F02;&#x5E38;&#x3002;</dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x6570;&#x7EC4;&#x662F;&#x7C7B;&#x4F3C;&#x5217;&#x8868;&#x7684;&#x5BF9;&#x8C61;&#xFF0C;&#x5728;&#x539F;&#x578B;&#x4E2D;&#x63D0;&#x4F9B;&#x4E86;&#x904D;&#x5386;&#x4EE5;&#x53CA;&#x6539;&#x53D8;&#x5176;&#x4E2D;&#x5143;&#x7D20;&#x7684;&#x5F88;&#x591A;&#x65B9;&#x6CD5;&#x3002; &#x6570;&#x7EC4;&#x7684;&#x957F;&#x5EA6;&#x53CA;&#x5176;&#x4E2D;&#x5143;&#x7D20;&#x7684;&#x7C7B;&#x578B;&#x90FD;&#x662F;&#x4E0D;&#x56FA;&#x5B9A;&#x7684;&#x3002;&#x56E0;&#x4E3A;&#x6570;&#x7EC4;&#x7684;&#x957F;&#x5EA6;&#x53EF;&#x8BFB;&#x53EF;&#x5199;&#xFF0C;&#x6709;&#x65F6;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x4E5F;&#x4E0D;&#x662F;&#x5728;&#x8FDE;&#x7EED;&#x7684;&#x4F4D;&#x7F6E;&#xFF0C;&#x6240;&#x4EE5;JavaScript &#x6570;&#x7EC4;&#x4E0D;&#x4E00;&#x5B9A;&#x662F;&#x5BC6;&#x96C6;&#x7684;&#x3002;&#x901A;&#x5E38;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x8FD9;&#x662F;&#x4E00;&#x4E9B;&#x65B9;&#x4FBF;&#x7684;&#x7279;&#x6027;&#xFF1B;&#x5982;&#x679C;&#x8FD9;&#x4E9B;&#x7279;&#x6027;&#x4E0D;&#x9002;&#x7528;&#x4E8E;&#x4F60;&#x7684;&#x7279;&#x5B9A;&#x4F7F;&#x7528;&#x573A;&#x666F;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x8003;&#x8651;&#x4F7F;&#x7528;&#x56FA;&#x5B9A;&#x7C7B;&#x578B;&#x6570;&#x7EC4;&#x3002;</p>

<p>&#x6709;&#x4E9B;&#x4EBA;&#x8BA4;&#x4E3A;&#xA0;<a href="http://www.andrewdupont.net/2006/05/18/javascript-associative-arrays-considered-harmful/" class="external-icon external">you shouldn&apos;t use an array as an associative array</a>&#x3002;&#x5728;&#x4EFB;&#x4F55;&#x60C5;&#x51B5;&#x4E0B;, &#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x4E00;&#x822C;&#x7684;&#x5BF9;&#x8C61;&#x6765;&#x4EE3;&#x66FF;&#xFF0C;&#x4E0D;&#x8FC7;&#x8FD9;&#x6837;&#x505A;&#x4F1A;&#x51FA;&#x73B0;&#x9700;&#x8981;&#x6CE8;&#x610F;&#x7684;&#x5730;&#x65B9;&#x3002;&#x8BF7;&#x770B;&#x4F8B;&#x5B50;&#xFF1A;&#xA0;<a href="http://www.less-broken.com/blog/2010/12/lightweight-javascript-dictionaries.html" class="external-icon external">Lightweight JavaScript dictionaries with arbitrary keys</a>&#xA0;.</p>

<h3 name="Accessing_array_elements" id="Accessing_array_elements" style="line-height: 24px; font-size: 1.71428571428571rem;">&#x8BBF;&#x95EE;&#x6570;&#x7EC4;&#x91CC;&#x7684;&#x5143;&#x7D20;</h3>

<p>JavaScript &#x6570;&#x7EC4;&#x7684;&#x7D22;&#x5F15;&#x503C;&#xFF08;index&#xFF09;&#x4ECE;0&#x5F00;&#x59CB;&#xFF0C;&#x5373;&#x6570;&#x7EC4;&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x7D22;&#x5F15;&#x503C;&#x4E3A;0&#x3002;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x7D22;&#x5F15;&#x503C;&#x7B49;&#x4E8E;&#x8BE5;&#x6570;&#x7EC4;&#x7684;&#x957F;&#x5EA6;&#x51CF;1&#xFF08;Array.length -1&#xFF09;&#x3002;</p>

<pre class="brush: js  language-js">var arr = [&apos;this is the first element&apos;, &apos;this is the second element&apos;];
console.log(arr[0]);              // logs &apos;this is the first element&apos;
console.log(arr[1]);              // logs &apos;this is the second element&apos;
console.log(arr[arr.length - 1]); // logs &apos;this is the second element&apos;
</pre>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 0px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 19px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 38px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 57px; background: 0px 0px;">&#xA0;</div>

<p>&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x50CF;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4EE5;&#x7D22;&#x5F15;&#x4E3A;&#x5C5E;&#x6027;&#x540D;,&#x5143;&#x7D20;&#x4E3A;&#x5C5E;&#x6027;&#x503C;&#xFF0C;&#x6216;&#x8005;arr=[&apos;a&apos;,&apos;b&apos;]&#x6709;&#x70B9;&#x50CF;arrObj={0:&apos;a&apos;,1:&apos;b&apos;},&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#x662F;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&quot;.&quot;&#x6765;&#x8BBF;&#x95EE;,&#x4F46;&#x662F;&#x4F7F;&#x7528;&#x4E0B;&#x9762;&#x8FD9;&#x6837;&#x4F7F;&#x7528;&#x4F1A;&#x629B;&#x51FA;&#x8BED;&#x6CD5;&#x9519;&#x8BEF;&#xFF0C;&#x56E0;&#x4E3A;&#x5C5E;&#x6027;&#x540D;&#x79F0;&#x662F;&#x975E;&#x6CD5;&#x7684;&#xFF1A;</p>

<pre class="brush: js  language-js">console.log(arr.0); // a syntax error
</pre>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 0px; background: 0px 0px;">&#xA0;</div>

<p>&#x8FD9;&#x662F;&#x7531;&#x975E;&#x6CD5;&#x5C5E;&#x6027;&#x9020;&#x6210;&#x7684;&#xFF0C;&#x4E0D;&#x662F; Array &#x7279;&#x6709;&#x7684;&#x3002;JavaScript &#x4E2D;&#x6570;&#x5B57;&#x5F00;&#x5934;&#x7684;&#x5C5E;&#x6027;&#x4E0D;&#x80FD;&#x8DDF;&#x5728;&#x70B9;&#x53F7;&#x540E;&#x9762;&#xFF1B;&#x5FC5;&#x987B;&#x5728;&#x65B9;&#x62EC;&#x53F7;&#x4E2D;&#x4F7F;&#x7528;&#x3002;&#x6BD4;&#x5982;&#x8BF4;&#xFF0C;&#x5982;&#x679C;&#x4F60;&#x6709;&#x4E00;&#x4E2A;&#x540D;&#x4E3A; &#x2018;3d&#x2019; &#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x5B83;&#x53EA;&#x80FD;&#x901A;&#x8FC7;&#x65B9;&#x62EC;&#x53F7;&#x7684;&#x5F62;&#x5F0F;&#x8FDB;&#x884C;&#x8BBF;&#x95EE;&#x3002; &#x6362;&#x8A00;&#x4E4B;&#x8BBF;&#x95EE;&#x5408;&#x6CD5;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x53EF;&#x4EE5;&#x7528;&quot;.&quot;&#x6216;&#x8005;&quot;[ ]&quot;,&#x4F46;&#x662F;&#x8BBF;&#x95EE;&#x975E;&#x6CD5;&#x7684;&#x5C5E;&#x6027;&#x53EA;&#x80FD;&#x7528;&quot;[ ]&quot;,&#x5982;&#x4E0B;&#x6240;&#x793A;&#xFF1A;</p>

<pre class="brush: js  language-js">var years = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
console.log(years.0);   // a syntax error
console.log(years[0]);  // works properly
</pre>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 0px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 19px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 38px; background: 0px 0px;">&#xA0;</div>

<pre class="brush: js  language-js">renderer.3d.setTexture(model, &apos;character.png&apos;);     // a syntax error
renderer[&apos;3d&apos;].setTexture(model, &apos;character.png&apos;);  // works properly
</pre>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 0px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 19px; background: 0px 0px;">&#xA0;</div>

<p>&#x5728;3d&#x7684;&#x4F8B;&#x5B50;&#x4E2D;&#xFF0C;&apos;3d&apos;&#x7684;&#x5F15;&#x53F7;&#x662F;&#x5FC5;&#x987B;&#x7684;&#x3002;&#x8BE5;&#x65B9;&#x6CD5;&#x4E5F;&#x53EF;&#x4EE5;&#x7528;&#x5728; JavaScript &#x6570;&#x7EC4;&#x4E2D;&#xFF08;&#x5982;&#xFF1A;years[&apos;2&apos;] &#x53EF;&#x4EE5;&#x4EE3;&#x66FF; years[2]&#xFF09;&#xFF0C;&#x4E0D;&#x8FC7;&#x8FD9;&#x4E0D;&#x662F;&#x5FC5;&#x9700;&#x7684;&#x3002;&#x5728; years[2] &#x4E2D;&#xFF0C;2&#x4F1A;&#x88AB;Javascript &#x5F15;&#x64CE;&#x81EA;&#x52A8;&#x8C03;&#x7528; toString &#x8F6C;&#x6362;&#x6210;&#x4E00;&#x4E2A; string &#x7C7B;&#x578B;&#x7684;&#x53D8;&#x91CF;&#x3002;&#x6B63;&#x56E0;&#x4E3A;&#x5982;&#x6B64;&#xFF0C;&apos;2&apos; &#x548C; &apos;02&apos; &#x5728;years &#x5BF9;&#x8C61;&#x4E2D;&#x5C06;&#x4F1A;&#x6307;&#x5411;&#x4E0D;&#x540C;&#x7684;&#x4F4D;&#x7F6E;&#xFF0C;&#x4E0B;&#x9762;&#x8FD9;&#x4E2A;&#x4F8B;&#x5B50;&#x5C06;&#x4F1A;&#x6253;&#x5370; true&#xFF1A;</p>

<pre class="brush: js  language-js">console.log(years[&apos;2&apos;] != years[&apos;02&apos;]);
</pre>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 0px; background: 0px 0px;">&#xA0;</div>

<p>&#x7C7B;&#x4F3C;&#x7684;&#xFF0C;&#x60F3;&#x8981;&#x4F7F;&#x7528;&#x4FDD;&#x7559;&#x5B57;&#x4F5C;&#x4E3A;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x79F0;&#x7684;&#xFF0C;&#x53EA;&#x80FD;&#x901A;&#x8FC7;&#x4EE5;&#x5355;&#x5F15;&#x53F7;&#x5305;&#x88F9;&#x5176;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x5F62;&#x5F0F;&#x8BBF;&#x95EE;&#xFF1A;</p>

<pre class="brush: js  language-js">var promise = {
  &apos;var&apos;  : &apos;text&apos;,
  &apos;array&apos;: [1, 2, 3, 4]
};

console.log(promise[&apos;array&apos;]);
</pre>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 0px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 19px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 38px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 57px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 76px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 95px; background: 0px 0px;">&#xA0;</div>

<h3 name="Relationship_between_length_and_numerical_properties" id="Relationship_between_length_and_numerical_properties" style="line-height: 24px; font-size: 1.71428571428571rem;">&#x957F;&#x5EA6;&#x548C;&#x6570;&#x503C;&#x4E0B;&#x6807;&#x5C5E;&#x6027;&#x6027;&#x8D28;&#x4E4B;&#x95F4;&#x7684;&#x5173;&#x7CFB;</h3>

<p>JavaScript array &#x7684;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length" title="length &#x5C5E;&#x6027;&#x8868;&#x793A;&#x4E00;&#x4E2A;&#x65E0;&#x7B26;&#x53F7; 32-bit &#x6574;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x4E2A;&#x6570;&#x3002;"><code>length</code></a> &#x5C5E;&#x6027;&#x548C;&#x5176;&#x6570;&#x5B57;&#x4E0B;&#x6807;&#x662F;&#x6709;&#x5173;&#x7CFB;&#x7684;&#x3002;&#x51E0;&#x4E2A;&#x5185;&#x7F6E;&#x6570;&#x7EC4;&#x7684;&#x65B9;&#x6CD5;&#xA0;(&#x4F8B;&#x5982;, <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join" title="join() &#x65B9;&#x6CD5;&#x5C06;&#x6570;&#x7EC4;&#xFF08;&#x6216;&#x4E00;&#x4E2A;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#xFF09;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x8FDE;&#x63A5;&#x5230;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x3002;"><code>join</code></a>, <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" title="slice()&#xA0;&#x65B9;&#x6CD5;&#x5C06;&#x6570;&#x7EC4;&#x7684;&#x4E00;&#x90E8;&#x5206;&#x7684;&#x6D45;&#x62F7;&#x8D1D;, &#x8FD4;&#x56DE;&#x5230;&#x4ECE;&#x5F00;&#x59CB;&#x5230;&#x7ED3;&#x675F;&#xFF08;&#x7ED3;&#x675F;&#x4E0D;&#x5305;&#x62EC;&#xFF09;&#x9009;&#x62E9;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x3002;&#x539F;&#x59CB;&#x6570;&#x7EC4;&#x4E0D;&#x4F1A;&#x88AB;&#x4FEE;&#x6539;&#x3002;"><code>slice</code></a>, <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf" title="indexOf()&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x5728;&#x6570;&#x7EC4;&#x4E2D;&#x53EF;&#x4EE5;&#x627E;&#x5230;&#x7ED9;&#x5B9A;&#x5143;&#x7D20;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x7D22;&#x5F15;&#xFF0C;&#x5982;&#x679C;&#x4E0D;&#x5B58;&#x5728;&#xFF0C;&#x5219;&#x8FD4;&#x56DE;-1&#x3002;"><code>indexOf</code></a>, &#x7B49;) &#x88AB;&#x8C03;&#x7528;&#x7684;&#x65F6;&#x5019;&#x4F1A;&#x4F7F;&#x7528; &#x5230;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length" title="length &#x5C5E;&#x6027;&#x8868;&#x793A;&#x4E00;&#x4E2A;&#x65E0;&#x7B26;&#x53F7; 32-bit &#x6574;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x4E2A;&#x6570;&#x3002;"><code>length</code></a> &#x5C5E;&#x6027;&#x3002; &#x6709;&#x4E9B;&#x522B;&#x7684;&#x65B9;&#x6CD5;&#xA0;(&#x4F8B;&#x5982;, <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push" title="push()&#xA0;&#x65B9;&#x6CD5;&#x6DFB;&#x52A0;&#x4E00;&#x4E2A;&#x6216;&#x591A;&#x4E2A;&#x5143;&#x7D20;&#x5230;&#x6570;&#x7EC4;&#x7684;&#x672B;&#x5C3E;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x65B0;&#x7684;&#x957F;&#x5EA6;&#xFF08;length &#x5C5E;&#x6027;&#x503C;&#xFF09;&#x3002;"><code>push</code></a>, <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice" title="splice() &#x65B9;&#x6CD5;&#x901A;&#x8FC7;&#x5220;&#x9664;&#x73B0;&#x6709;&#x5143;&#x7D20;&#x548C;/&#x6216;&#x6DFB;&#x52A0;&#x65B0;&#x5143;&#x7D20;&#x6765;&#x66F4;&#x6539;&#x6570;&#x7EC4;&#x7684;&#x5185;&#x5BB9;&#x3002;"><code>splice</code></a>, &#x7B49;) &#x4F1A;&#x6539;&#x53D8;array&#x7684; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length" title="length &#x5C5E;&#x6027;&#x8868;&#x793A;&#x4E00;&#x4E2A;&#x65E0;&#x7B26;&#x53F7; 32-bit &#x6574;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x4E2A;&#x6570;&#x3002;"><code>length</code></a> &#x5C5E;&#x6027;&#x3002;</p>

<pre class="brush: js  language-js">var fruits = [];
fruits.push(&apos;banana&apos;, &apos;apple&apos;, &apos;peach&apos;);

console.log(fruits.length); // 3
</pre>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 0px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 19px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 38px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 57px; background: 0px 0px;">&#xA0;</div>

<p>&#x5F53;&#x4F60;&#x5728; array &#x4E0A;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x5408;&#x6CD5;&#x7684;&#x6570;&#x7EC4;&#x4E0B;&#x6807;&#xFF0C;&#x800C;&#x4E14;&#x8BE5;&#x4E0B;&#x6807;&#x8D85;&#x51FA;&#x4E86;&#x5F53;&#x524D;&#x6570;&#x7EC4;&#x7684;&#x5927;&#x5C0F;&#x7684;&#x65F6;&#x5019;&#xFF0C;&#x5F15;&#x64CE;&#x4F1A;&#x6839;&#x636E;&#x5176;&#x503C;&#x81EA;&#x52A8;&#x66F4;&#x65B0; array &#x7684;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length" title="length &#x5C5E;&#x6027;&#x8868;&#x793A;&#x4E00;&#x4E2A;&#x65E0;&#x7B26;&#x53F7; 32-bit &#x6574;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x4E2A;&#x6570;&#x3002;"><code>length</code></a>&#x5C5E;&#x6027;&#xFF1A;</p>

<pre class="brush: js  language-js">fruits[5] = &apos;mango&apos;;
console.log(fruits[5]); // &apos;mango&apos;
console.log(Object.keys(fruits));  // [&apos;0&apos;, &apos;1&apos;, &apos;2&apos;, &apos;5&apos;]
console.log(fruits.length); // 6
</pre>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 0px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 19px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 38px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 57px; background: 0px 0px;">&#xA0;</div>

<p>&#x589E;&#x5927; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length" title="length &#x5C5E;&#x6027;&#x8868;&#x793A;&#x4E00;&#x4E2A;&#x65E0;&#x7B26;&#x53F7; 32-bit &#x6574;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x4E2A;&#x6570;&#x3002;"><code>length</code></a>&#x3002;</p>

<pre class="brush: js  language-js">fruits.length = 10;
console.log(Object.keys(fruits)); // [&apos;0&apos;, &apos;1&apos;, &apos;2&apos;, &apos;5&apos;]
console.log(fruits.length); // 10
</pre>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 0px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 19px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 38px; background: 0px 0px;">&#xA0;</div>

<p>&#x51CF;&#x5C0F; array &#x7684;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length" title="length &#x5C5E;&#x6027;&#x8868;&#x793A;&#x4E00;&#x4E2A;&#x65E0;&#x7B26;&#x53F7; 32-bit &#x6574;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x4E2A;&#x6570;&#x3002;"><code>length</code></a>&#x5C5E;&#x6027;&#x4F1A;&#x5220;&#x6389;&#x8D85;&#x51FA;&#x7684;&#x5143;&#x7D20;&#x3002;</p>

<pre class="brush: js  language-js">fruits.length = 2;
console.log(Object.keys(fruits)); // [&apos;0&apos;, &apos;1&apos;]
console.log(fruits.length); // 2
</pre>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 0px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 19px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 38px; background: 0px 0px;">&#xA0;</div>

<h3 name=".E4.BD.BF.E7.94.A8.E6.AD.A3.E5.88.99.E5.8C.B9.E9.85.8D.E7.9A.84.E7.BB.93.E6.9E.9C.E6.9D.A5.E5.88.9B.E5.BB.BA.E6.95.B0.E7.BB.84" id=".E4.BD.BF.E7.94.A8.E6.AD.A3.E5.88.99.E5.8C.B9.E9.85.8D.E7.9A.84.E7.BB.93.E6.9E.9C.E6.9D.A5.E5.88.9B.E5.BB.BA.E6.95.B0.E7.BB.84">&#x4F7F;&#x7528;&#x6B63;&#x5219;&#x5339;&#x914D;&#x7684;&#x7ED3;&#x679C;&#x6765;&#x521B;&#x5EFA;&#x6570;&#x7EC4;</h3>

<p>&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x4E0E;&#x5B57;&#x7B26;&#x4E32;&#x4E4B;&#x95F4;&#x7684;&#x5339;&#x914D;&#x7ED3;&#x679C;&#x53EF;&#x4EE5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x3002;&#x8FD9;&#x4E2A;&#x6570;&#x7EC4;&#x5305;&#x542B;&#x4E86;&#x6B63;&#x5219;&#x5339;&#x914D;&#x7684;&#x5C5E;&#x6027;&#x4E0E;&#x5339;&#x914D;&#x7ED3;&#x679C;&#x3002;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec" title="exec() &#x65B9;&#x6CD5;&#x4E3A;&#x6307;&#x5B9A;&#x7684;&#x4E00;&#x6BB5;&#x5B57;&#x7B26;&#x4E32;&#x6267;&#x884C;&#x641C;&#x7D22;&#x5339;&#x914D;&#x64CD;&#x4F5C;&#x3002;&#x5B83;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x662F;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x6216;&#x8005; null&#x3002;"><code>RegExp.exec</code></a>&#xFF0C;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match" title="&#x5F53;&#x5B57;&#x7B26;&#x4E32;&#x5339;&#x914D;&#x5230;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#xFF08;regular expression&#xFF09;&#x65F6;&#xFF0C;match() &#x65B9;&#x6CD5;&#x4F1A;&#x63D0;&#x53D6;&#x5339;&#x914D;&#x9879;&#x3002;"><code>String.match</code></a>&#xFF0C;&#xA0;&#x4E0E;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace" title="replace() &#x65B9;&#x6CD5;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x66FF;&#x6362;&#x503C;&#xFF08;replacement&#xFF09;&#x66FF;&#x6362;&#x6389;&#x4E00;&#x4E2A;&#x5339;&#x914D;&#x6A21;&#x5F0F;&#xFF08;pattern&#xFF09;&#x5728;&#x539F;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x67D0;&#x4E9B;&#x6216;&#x6240;&#x6709;&#x7684;&#x5339;&#x914D;&#x9879;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x66FF;&#x6362;&#x540E;&#x7684;&#x65B0;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x8FD9;&#x4E2A;&#x66FF;&#x6362;&#x6A21;&#x5F0F;&#x53EF;&#x4EE5;&#x662F;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x6216;&#x8005;&#x4E00;&#x4E2A;&#xA0;RegExp&#xFF0C;&#x66FF;&#x6362;&#x503C;&#x53EF;&#x4EE5;&#x662F;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x6216;&#x8005;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x3002;"><code>String.replace</code></a>&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x5C31;&#x662F;&#x8FD9;&#x6837;&#x7684;&#x6570;&#x7EC4;&#x3002;&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x53EF;&#x4EE5;&#x5E2E;&#x52A9;&#x7406;&#x89E3;&#x8FD9;&#x4E9B;&#x5C5E;&#x6027;&#x548C;&#x5143;&#x7D20;&#x3002;</p>

<pre class="brush: js">// Match one d followed by one or more b&apos;s followed by one d
// Remember matched b&apos;s and the following d
// &#x5FFD;&#x7565;&#x5927;&#x5C0F;&#x5199;

myRe = /d(b+)(d)/i;
myArray = myRe.exec(&quot;cdbBdbsbz&quot;);
</pre>

<p>&#x8BE5;&#x6B63;&#x5219;&#x5339;&#x914D;&#x8FD4;&#x56DE;&#x7684;&#x5C5E;&#x6027;/&#x5143;&#x7D20;&#x5217;&#x8868;&#xFF1A;</p>

<table class="fullwidth-table">
 <tbody>
  <tr>
   <td class="header">Property/Element</td>
   <td class="header">&#x8BF4;&#x660E;</td>
   <td class="header">&#x4F8B;&#x5B50;</td>
  </tr>
  <tr>
   <td><code>input</code></td>
   <td>&#x539F;&#x59CB;&#x7684;&#x8F93;&#x5165;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x53EA;&#x8BFB;&#x5C5E;&#x6027;&#x3002;</td>
   <td>cdbBdbsbz</td>
  </tr>
  <tr>
   <td><code>index</code></td>
   <td>&#x5339;&#x914D;&#x7684;&#x5B50;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x5728;&#x539F;&#x59CB;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x7684;&#x4F4D;&#x7F6E;&#xFF08;&#x4ECE;0&#x5F00;&#x59CB;&#x7684;&#x7D22;&#x5F15;&#xFF0C;&#x53EA;&#x8BFB;&#xFF09;&#x3002;</td>
   <td>1</td>
  </tr>
  <tr>
   <td>[0]</td>
   <td>&#x6700;&#x540E;&#x4E00;&#x6B21;&#x5339;&#x914D;&#x7684;&#x5143;&#x7D20;,&#x53EA;&#x8BFB;&#x3002;</td>
   <td>dbBd</td>
  </tr>
  <tr>
   <td><code>[1], ...[n]</code></td>
   <td>&#x51FA;&#x73B0;&#x5728;&#x6B63;&#x5219;&#x5339;&#x914D;&#x4E2D;&#x7684;&#x5B50;&#x5339;&#x914D;&#xFF08;&#x5982;&#x679C;&#x6709;&#xFF09;&#x3002;</td>
   <td>[1]: bB<br>
    [2]: d</td>
  </tr>
 </tbody>
</table>

<h2 name=".E5.85.88.E5.89.8D.E7.9A.84.E7.89.88.E6.9C.AC.E4.B8.AD.E7.9A.84.E8.A1.8C.E4.B8.BA" id=".E5.85.88.E5.89.8D.E7.9A.84.E7.89.88.E6.9C.AC.E4.B8.AD.E7.9A.84.E8.A1.8C.E4.B8.BA">&#x5C5E;&#x6027;</h2>

<div><small><em>For properties available on <code>Array</code> instances, see <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Properties">Properties of Array instances</a>.</em></small></div>

<dl>
 <dt><code>Array.length</code></dt>
 <dd><code>Array</code>&#xA0;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684; length &#x5C5E;&#x6027;&#xFF0C;&#x5176;&#x503C;&#x4E3A;1&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype" title="&#x6240;&#x6709;&#x7684;&#x6570;&#x7EC4;&#x5B9E;&#x4F8B;&#x90FD;&#x7EE7;&#x627F;&#x4E8E; Array.prototype&#x3002;"><code>Array.prototype</code></a></dt>
 <dd>&#x5141;&#x8BB8;&#x4E3A;&#x6240;&#x6709;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x9644;&#x52A0;&#x5C5E;&#x6027;&#x3002;</dd>
</dl>

<h2 name="Mutator_.E6.96.B9.E6.B3.95" id="Mutator_.E6.96.B9.E6.B3.95">&#x65B9;&#x6CD5;</h2>

<p><small><em>For methods available on <code>Array</code> instances, see <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Methods">Methods of Array instances</a>.</em></small></p>

<dl>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from" title="Array.from() &#x65B9;&#x6CD5;&#x4ECE;&#x7C7B;&#x4F3C;&#x6570;&#x7EC4;&#x6216;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x6570;&#x7EC4;&#x5B9E;&#x4F8B;&#x3002;"><code>Array.from()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></dt>
 <dd>&#x4ECE;&#x7C7B;&#x6570;&#x7EC4;&#x6216;&#x8005;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#xFF08;iterable object&#xFF09;&#x4E2D;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x6570;&#x7EC4;&#x5B9E;&#x4F8B;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray" title="Array.isArray()&#xA0;&#x8BE5;&#x65B9;&#x6CD5;&#x9002;&#x7528;&#x4E8E;&#x786E;&#x5B9A;&#x4F20;&#x9012;&#x7684;&#x503C;&#x662F;&#x5426;&#x4E3A;Array&#x3002;"><code>Array.isArray()</code></a></dt>
 <dd>&#x5047;&#x5982;&#x4E00;&#x4E2A;&#x53D8;&#x91CF;&#x662F;&#x6570;&#x7EC4;&#x5219;&#x8FD4;&#x56DE;<code>true</code>&#xFF0C;&#x5426;&#x5219;&#x8FD4;&#x56DE;<code>false</code>&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/observe" title="Array.observe() &#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x5F02;&#x6B65;&#x76D1;&#x89C6;&#x6570;&#x7EC4;&#x53D1;&#x751F;&#x7684;&#x53D8;&#x5316;&#xFF0C;&#x7C7B;&#x4F3C;&#x4E8E;&#x9488;&#x5BF9;&#x5BF9;&#x8C61;&#x7684; Object.observe() &#x3002;&#x5F53;&#x6570;&#x7EC4;&#x7684;&#x503C;&#x53D1;&#x751F;&#x53D8;&#x5316;&#x65F6;&#xFF0C;&#x5B83;&#x6309;&#x53D1;&#x751F;&#x987A;&#x5E8F;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x53D8;&#x5316;&#x6D41;&#x3002;&#x4E0E; Object.observe() &#x7C7B;&#x4F3C;&#xFF0C;&#x5B83;&#x7531;&#x5982;&#x4E0B;&#x53EF;&#x63A5;&#x53D7;&#x7684;&#x53D8;&#x5316;&#x7C7B;&#x578B;&#x5217;&#x8868;[&quot;add&quot;&#x3001;&quot;update&quot;&#x3001;&quot;delete&quot;&#x3001;&quot;splice&quot;]&#x89E6;&#x53D1;&#x3002;"><code>Array.observe()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></dt>
 <dd>&#x5F02;&#x6B65;&#x76D1;&#x89C6;&#x6570;&#x7EC4;&#x7684;&#x4FEE;&#x6539;&#x60C5;&#x51B5;&#xFF0C;&#x4E0E;&#x5BF9;&#x8C61;&#x7684;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/observe" title="Object.observe()&#xA0;&#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x5F02;&#x6B65;&#x5730;&#x76D1;&#x89C6;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x4FEE;&#x6539;&#x3002;&#x5F53;&#x5BF9;&#x8C61;&#x5C5E;&#x6027;&#x88AB;&#x4FEE;&#x6539;&#x65F6;&#xFF0C;&#x65B9;&#x6CD5;&#x7684;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x4F1A;&#x63D0;&#x4F9B;&#x4E00;&#x4E2A;&#x6709;&#x5E8F;&#x7684;&#x4FEE;&#x6539;&#x6D41;&#x3002;&#x7136;&#x800C;&#xFF0C;&#x8FD9;&#x4E2A;&#x63A5;&#x53E3;&#x5DF2;&#x7ECF;&#x88AB;&#x5E9F;&#x5F03;&#x5E76;&#x4ECE;&#x5404;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#x79FB;&#x9664;&#x3002;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x66F4;&#x901A;&#x7528;&#x7684;&#xA0;Proxy &#x5BF9;&#x8C61;&#x66FF;&#x4EE3;&#x3002;"><code>Object.observe()</code></a>&#x65B9;&#x6CD5;&#x7C7B;&#x4F3C;&#x3002;&#x8BE5;&#x65B9;&#x6CD5;&#x4F1A;&#x6839;&#x636E;&#x4FEE;&#x6539;&#x4E8B;&#x4EF6;&#x53D1;&#x751F;&#x987A;&#x5E8F;&#x63D0;&#x4F9B;&#x4E00;&#x4E2A;&#x4FEE;&#x6539;&#x6D41;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/of" title="Array.of() &#x65B9;&#x6CD5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5177;&#x6709;&#x53EF;&#x53D8;&#x6570;&#x91CF;&#x53C2;&#x6570;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x5B9E;&#x4F8B;&#xFF0C;&#x800C;&#x4E0D;&#x8003;&#x8651;&#x53C2;&#x6570;&#x7684;&#x6570;&#x91CF;&#x6216;&#x7C7B;&#x578B;&#x3002;"><code>Array.of()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></dt>
 <dd>&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x6709;&#x53EF;&#x53D8;&#x6570;&#x91CF;&#x7684;&#x53C2;&#x6570;&#x7684;&#x65B0;&#x7684;&#x6570;&#x7EC4;&#x5B9E;&#x4F8B;&#xFF0C;&#x65E0;&#x8BBA;&#x53C2;&#x6570;&#x6709;&#x591A;&#x5C11;&#x6570;&#x91CF;&#xFF0C;&#x800C;&#x4E14;&#x53EF;&#x4EE5;&#x662F;&#x4EFB;&#x610F;&#x7C7B;&#x578B;&#x3002;</dd>
</dl>

<h2 id="&#x6570;&#x7EC4;&#x5B9E;&#x4F8B;"><font face="Consolas, Liberation Mono, Courier, monospace">&#x6570;&#x7EC4;&#x5B9E;&#x4F8B;</font></h2>

<p>&#x6240;&#x6709;&#x6570;&#x7EC4;&#x5B9E;&#x4F8B;&#x7EE7;&#x627F;&#x81EA; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype" title="&#x6240;&#x6709;&#x7684;&#x6570;&#x7EC4;&#x5B9E;&#x4F8B;&#x90FD;&#x7EE7;&#x627F;&#x4E8E; Array.prototype&#x3002;"><code>Array.prototype</code></a>&#x3002;Array &#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x539F;&#x578B;&#x5BF9;&#x8C61;&#x662F;&#x53EF;&#x4FEE;&#x6539;&#x7684;&#xFF0C;&#x5176;&#x4F1A;&#x5F71;&#x54CD;&#x6240;&#x6709;&#x7684;&#x6570;&#x7EC4;&#x5B9E;&#x4F8B;&#x3002;</p>

<h3 id="&#x5C5E;&#x6027;">&#x5C5E;&#x6027;</h3>

<div><dl><dt><code>Array.prototype.constructor</code></dt>
 <dd>&#x6240;&#x6709;&#x7684;&#x6570;&#x7EC4;&#x5B9E;&#x4F8B;&#x90FD;&#x7EE7;&#x627F;&#x4E86;&#x8FD9;&#x4E2A;&#x5C5E;&#x6027;&#xFF0C;&#x5B83;&#x7684;&#x503C;&#x5C31;&#x662F; <a href="/zh-CN/docs/Web/JavaScript/Reference/Array" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Array</code></a>&#xFF0C;&#x8868;&#x660E;&#x4E86;&#x6240;&#x6709;&#x7684;&#x6570;&#x7EC4;&#x90FD;&#x662F;&#x7531; <a href="/zh-CN/docs/Web/JavaScript/Reference/Array" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Array</code></a> &#x6784;&#x9020;&#x51FA;&#x6765;&#x7684;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length" title="length &#x5C5E;&#x6027;&#x8868;&#x793A;&#x4E00;&#x4E2A;&#x65E0;&#x7B26;&#x53F7; 32-bit &#x6574;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x4E2A;&#x6570;&#x3002;"><code>Array.prototype.length</code></a></dt>
 <dd>&#x4E0A;&#x9762;&#x8BF4;&#x4E86;&#xFF0C;&#x56E0;&#x4E3A; <code>Array.prototype</code> &#x4E5F;&#x662F;&#x4E2A;&#x6570;&#x7EC4;&#xFF0C;&#x6240;&#x6709;&#x5B83;&#x4E5F;&#x6709; <code>length</code> &#x5C5E;&#x6027;&#xFF0C;&#x8FD9;&#x4E2A;&#x503C;&#x4E3A; <code>0</code>&#xFF0C;&#x56E0;&#x4E3A;&#x5B83;&#x662F;&#x4E2A;&#x7A7A;&#x6570;&#x7EC4;&#x3002;</dd>
</dl></div>

<h3 id="&#x65B9;&#x6CD5;">&#x65B9;&#x6CD5;</h3>

<h4 id="Mutator_&#x65B9;&#x6CD5;">Mutator &#x65B9;&#x6CD5;</h4>

<p></p><p>&#x4E0B;&#x9762;&#x7684;&#x8FD9;&#x4E9B;&#x65B9;&#x6CD5;&#x4F1A;&#x6539;&#x53D8;&#x8C03;&#x7528;&#x5B83;&#x4EEC;&#x7684;&#x5BF9;&#x8C61;&#x81EA;&#x8EAB;&#x7684;&#x503C;&#xFF1A;</p>

<dl><dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin" title="copyWithin() &#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x5728;&#x6570;&#x7EC4;&#x5185;&#x7684;&#x66FF;&#x6362;&#x64CD;&#x4F5C;&#xFF0C;&#x5373;&#x66FF;&#x6362;&#x5143;&#x7D20;&#x4E0E;&#x88AB;&#x66FF;&#x6362;&#x5143;&#x7D20;&#x90FD;&#x662F;&#x6570;&#x7EC4;&#x5185;&#x7684;&#x5143;&#x7D20;&#x3002;"><code>Array.prototype.copyWithin()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></dt>
 <dd>&#x5728;&#x6570;&#x7EC4;&#x5185;&#x90E8;&#xFF0C;&#x5C06;&#x4E00;&#x6BB5;&#x5143;&#x7D20;&#x5E8F;&#x5217;&#x62F7;&#x8D1D;&#x5230;&#x53E6;&#x4E00;&#x6BB5;&#x5143;&#x7D20;&#x5E8F;&#x5217;&#x4E0A;&#xFF0C;&#x8986;&#x76D6;&#x539F;&#x6709;&#x7684;&#x503C;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill" title="&#x4F7F;&#x7528;&#xA0;fill() &#x65B9;&#x6CD5;&#xFF0C;&#x53EF;&#x4EE5;&#x5C06;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x4E2D;&#x6307;&#x5B9A;&#x533A;&#x95F4;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x7684;&#x503C;, &#x90FD;&#x66FF;&#x6362;&#x6210;&#x6216;&#x8005;&#x8BF4;&#x586B;&#x5145;&#x6210;&#x4E3A;&#x67D0;&#x4E2A;&#x56FA;&#x5B9A;&#x7684;&#x503C;&#x3002;"><code>Array.prototype.fill()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></dt>
 <dd>&#x5C06;&#x6570;&#x7EC4;&#x4E2D;&#x6307;&#x5B9A;&#x533A;&#x95F4;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x7684;&#x503C;&#xFF0C;&#x90FD;&#x66FF;&#x6362;&#x6210;&#x67D0;&#x4E2A;&#x56FA;&#x5B9A;&#x7684;&#x503C;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop" title="pop() &#x65B9;&#x6CD5;&#x5220;&#x9664;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6700;&#x540E;&#x7684;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x4E14;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x5143;&#x7D20;&#x3002;"><code>Array.prototype.pop()</code></a></dt>
 <dd>&#x5220;&#x9664;&#x6570;&#x7EC4;&#x7684;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x5143;&#x7D20;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push" title="push()&#xA0;&#x65B9;&#x6CD5;&#x6DFB;&#x52A0;&#x4E00;&#x4E2A;&#x6216;&#x591A;&#x4E2A;&#x5143;&#x7D20;&#x5230;&#x6570;&#x7EC4;&#x7684;&#x672B;&#x5C3E;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x65B0;&#x7684;&#x957F;&#x5EA6;&#xFF08;length &#x5C5E;&#x6027;&#x503C;&#xFF09;&#x3002;"><code>Array.prototype.push()</code></a></dt>
 <dd>&#x5728;&#x6570;&#x7EC4;&#x7684;&#x672B;&#x5C3E;&#x589E;&#x52A0;&#x4E00;&#x4E2A;&#x6216;&#x591A;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x7684;&#x65B0;&#x957F;&#x5EA6;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse" title="reverse()&#xA0;&#x65B9;&#x6CD5;&#x98A0;&#x5012;&#x6570;&#x7EC4;&#x4E2D;&#x5143;&#x7D20;&#x7684;&#x4F4D;&#x7F6E;&#x3002;&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x4F1A;&#x6210;&#x4E3A;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#xFF0C;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x4F1A;&#x6210;&#x4E3A;&#x7B2C;&#x4E00;&#x4E2A;&#x3002;"><code>Array.prototype.reverse()</code></a></dt>
 <dd>&#x98A0;&#x5012;&#x6570;&#x7EC4;&#x4E2D;&#x5143;&#x7D20;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;&#xFF0C;&#x5373;&#x539F;&#x5148;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x53D8;&#x4E3A;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#xFF0C;&#x539F;&#x5148;&#x7684;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x53D8;&#x4E3A;&#x7B2C;&#x4E00;&#x4E2A;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift" title="shift() &#x65B9;&#x6CD5;&#x5220;&#x9664;&#x6570;&#x7EC4;&#x7684; &#x7B2C;&#x4E00;&#x4E2A; &#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x5143;&#x7D20;&#x3002;&#x8BE5;&#x65B9;&#x6CD5;&#x4F1A;&#x6539;&#x53D8;&#x6570;&#x7EC4;&#x7684;&#x957F;&#x5EA6;&#x3002;"><code>Array.prototype.shift()</code></a></dt>
 <dd>&#x5220;&#x9664;&#x6570;&#x7EC4;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x5143;&#x7D20;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" title="sort() &#x65B9;&#x6CD5;&#x5BF9;&#x6570;&#x7EC4;&#x7684;&#x5143;&#x7D20;&#x505A;&#x539F;&#x5730;&#x7684;&#x6392;&#x5E8F;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x6570;&#x7EC4;&#x3002; sort &#x53EF;&#x80FD;&#x4E0D;&#x662F;&#x7A33;&#x5B9A;&#x7684;&#x3002;&#x9ED8;&#x8BA4;&#x6309;&#x7167;&#x5B57;&#x7B26;&#x4E32;&#x7684;Unicode&#x7801;&#x4F4D;&#x70B9;&#xFF08;code point&#xFF09;&#x6392;&#x5E8F;&#x3002;"><code>Array.prototype.sort()</code></a></dt>
 <dd>&#x5BF9;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x8FDB;&#x884C;&#x6392;&#x5E8F;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x5F53;&#x524D;&#x6570;&#x7EC4;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice" title="splice() &#x65B9;&#x6CD5;&#x7528;&#x65B0;&#x5143;&#x7D20;&#x66FF;&#x6362;&#x65E7;&#x5143;&#x7D20;&#xFF0C;&#x4EE5;&#x6B64;&#x4FEE;&#x6539;&#x6570;&#x7EC4;&#x7684;&#x5185;&#x5BB9;&#x3002;"><code>Array.prototype.splice()</code></a></dt>
 <dd>&#x5728;&#x4EFB;&#x610F;&#x7684;&#x4F4D;&#x7F6E;&#x7ED9;&#x6570;&#x7EC4;&#x6DFB;&#x52A0;&#x6216;&#x5220;&#x9664;&#x4EFB;&#x610F;&#x4E2A;&#x5143;&#x7D20;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift" title="unshift() &#x65B9;&#x6CD5;&#x5728;&#x6570;&#x7EC4;&#x7684;&#x5F00;&#x5934;&#x6DFB;&#x52A0;&#x4E00;&#x4E2A;&#x6216;&#x8005;&#x591A;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x65B0;&#x7684; length &#x503C;&#x3002;"><code>Array.prototype.unshift()</code></a></dt>
 <dd>&#x5728;&#x6570;&#x7EC4;&#x7684;&#x5F00;&#x5934;&#x589E;&#x52A0;&#x4E00;&#x4E2A;&#x6216;&#x591A;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x7684;&#x65B0;&#x957F;&#x5EA6;&#x3002;</dd>
</dl><p></p>

<h4 id="Accessor_&#x65B9;&#x6CD5;">Accessor &#x65B9;&#x6CD5;</h4>

<p></p><p>&#x4E0B;&#x9762;&#x7684;&#x8FD9;&#x4E9B;&#x65B9;&#x6CD5;&#x7EDD;&#x5BF9;&#x4E0D;&#x4F1A;&#x6539;&#x53D8;&#x8C03;&#x7528;&#x5B83;&#x4EEC;&#x7684;&#x5BF9;&#x8C61;&#x7684;&#x503C;&#xFF0C;&#x53EA;&#x4F1A;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x6570;&#x7EC4;&#x6216;&#x8005;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5176;&#x5B83;&#x7684;&#x671F;&#x671B;&#x503C;&#x3002;</p>

<dl><dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat" title="&#x5C06;&#x4F20;&#x5165;&#x7684;&#x6570;&#x7EC4;&#x6216;&#x975E;&#x6570;&#x7EC4;&#x503C;&#x4E0E;&#x539F;&#x6570;&#x7EC4;&#x5408;&#x5E76;,&#x7EC4;&#x6210;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x6570;&#x7EC4;&#x5E76;&#x8FD4;&#x56DE;."><code>Array.prototype.concat()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7531;&#x5F53;&#x524D;&#x6570;&#x7EC4;&#x548C;&#x5176;&#x5B83;&#x82E5;&#x5E72;&#x4E2A;&#x6570;&#x7EC4;&#x6216;&#x8005;&#x82E5;&#x5E72;&#x4E2A;&#x975E;&#x6570;&#x7EC4;&#x503C;&#x7EC4;&#x5408;&#x800C;&#x6210;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes" title="includes() &#x65B9;&#x6CD5;&#x7528;&#x6765;&#x5224;&#x65AD;&#x5F53;&#x524D;&#x6570;&#x7EC4;&#x662F;&#x5426;&#x5305;&#x542B;&#x67D0;&#x6307;&#x5B9A;&#x7684;&#x503C;&#xFF0C;&#x5982;&#x679C;&#x662F;&#xFF0C;&#x5219;&#x8FD4;&#x56DE; true&#xFF0C;&#x5426;&#x5219;&#x8FD4;&#x56DE; false&#x3002;"><code>Array.prototype.includes()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></dt>
 <dd>&#x5224;&#x65AD;&#x5F53;&#x524D;&#x6570;&#x7EC4;&#x662F;&#x5426;&#x5305;&#x542B;&#x67D0;&#x6307;&#x5B9A;&#x7684;&#x503C;&#xFF0C;&#x5982;&#x679C;&#x662F;&#x8FD4;&#x56DE; <code>true</code>&#xFF0C;&#x5426;&#x5219;&#x8FD4;&#x56DE; <code>false</code>&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join" title="join() &#x65B9;&#x6CD5;&#x5C06;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x8FDE;&#x63A5;&#x6210;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x3002;"><code>Array.prototype.join()</code></a></dt>
 <dd>&#x8FDE;&#x63A5;&#x6240;&#x6709;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x7EC4;&#x6210;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" title="slice() &#x65B9;&#x6CD5;&#x628A;&#x6570;&#x7EC4;&#x4E2D;&#x4E00;&#x90E8;&#x5206;&#x7684;&#x6D45;&#x590D;&#x5236;&#xFF08;shallow copy&#xFF09;&#x5B58;&#x5165;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x4E2D;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x65B0;&#x7684;&#x6570;&#x7EC4;&#x3002;"><code>Array.prototype.slice()</code></a></dt>
 <dd>&#x62BD;&#x53D6;&#x5F53;&#x524D;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x4E00;&#x6BB5;&#x5143;&#x7D20;&#x7EC4;&#x5408;&#x6210;&#x4E00;&#x4E2A;&#x65B0;&#x6570;&#x7EC4;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toSource" title="&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;,&#x4EE3;&#x8868;&#x8BE5;&#x6570;&#x7EC4;&#x7684;&#x6E90;&#x4EE3;&#x7801;."><code>Array.prototype.toSource()</code></a> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x8868;&#x793A;&#x5F53;&#x524D;&#x6570;&#x7EC4;&#x5B57;&#x9762;&#x91CF;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x906E;&#x853D;&#x4E86;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x7684; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource" title="&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x6E90;&#x4EE3;&#x7801;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;."><code>Object.prototype.toSource()</code></a> &#x65B9;&#x6CD5;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toString" title="toString() &#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8868;&#x793A;&#x6307;&#x5B9A;&#x7684;&#x6570;&#x7EC4;&#x53CA;&#x5176;&#x5143;&#x7D20;&#x3002;"><code>Array.prototype.toString()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7531;&#x6240;&#x6709;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x7EC4;&#x5408;&#x800C;&#x6210;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x906E;&#x853D;&#x4E86;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x7684; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString" title="toString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x4EE3;&#x8868;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;"><code>Object.prototype.toString()</code></a> &#x65B9;&#x6CD5;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString" title="toLocaleString() &#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x3002;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x5C06;&#x4F7F;&#x7528;&#x5404;&#x81EA;&#x7684;&#xA0;toLocaleString &#x65B9;&#x6CD5;&#x8F6C;&#x6210;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8FD9;&#x4E9B;&#x5B57;&#x7B26;&#x4E32;&#x5C06;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x7279;&#x5B9A;&#x8BED;&#x8A00;&#x73AF;&#x5883;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF08;&#x4F8B;&#x5982;&#x4E00;&#x4E2A;&#x9017;&#x53F7; &quot;,&quot;&#xFF09;&#x9694;&#x5F00;&#x3002;"><code>Array.prototype.toLocaleString()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7531;&#x6240;&#x6709;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x7EC4;&#x5408;&#x800C;&#x6210;&#x7684;&#x672C;&#x5730;&#x5316;&#x540E;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x906E;&#x853D;&#x4E86;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x7684; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString" title="toLocaleString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x3002;&#x8BE5;&#x65B9;&#x6CD5;&#x4E3B;&#x8981;&#x7528;&#x4E8E;&#x88AB;&#x672C;&#x5730;&#x5316;&#x76F8;&#x5173;&#x5BF9;&#x8C61;&#x8986;&#x76D6;&#x3002;"><code>Object.prototype.toLocaleString()</code></a> &#x65B9;&#x6CD5;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf" title="indexOf()&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x7ED9;&#x5B9A;&#x5143;&#x7D20;&#x80FD;&#x627E;&#x5728;&#x6570;&#x7EC4;&#x4E2D;&#x627E;&#x5230;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x7D22;&#x5F15;&#x503C;&#xFF0C;&#x5426;&#x5219;&#x8FD4;&#x56DE;-1&#x3002;"><code>Array.prototype.indexOf()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x4E2D;&#x7B2C;&#x4E00;&#x4E2A;&#x4E0E;&#x6307;&#x5B9A;&#x503C;&#x76F8;&#x7B49;&#x7684;&#x5143;&#x7D20;&#x7684;&#x7D22;&#x5F15;&#xFF0C;&#x5982;&#x679C;&#x627E;&#x4E0D;&#x5230;&#x8FD9;&#x6837;&#x7684;&#x5143;&#x7D20;&#xFF0C;&#x5219;&#x8FD4;&#x56DE; -1&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf" title="lastIndexOf() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x5143;&#x7D20;&#xFF08;&#x4E5F;&#x5373;&#x6709;&#x6548;&#x7684; JavaScript &#x503C;&#x6216;&#x53D8;&#x91CF;&#xFF09;&#x5728;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x7684;&#x7D22;&#x5F15;&#xFF0C;&#x5982;&#x679C;&#x4E0D;&#x5B58;&#x5728;&#x5219;&#x8FD4;&#x56DE; -1&#x3002;&#x4ECE;&#x6570;&#x7EC4;&#x7684;&#x540E;&#x9762;&#x5411;&#x524D;&#x67E5;&#x627E;&#xFF0C;&#x4ECE; fromIndex &#x5904;&#x5F00;&#x59CB;&#x3002;"><code>Array.prototype.lastIndexOf()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x4E2D;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#xFF08;&#x4ECE;&#x53F3;&#x8FB9;&#x6570;&#x7B2C;&#x4E00;&#x4E2A;&#xFF09;&#x4E0E;&#x6307;&#x5B9A;&#x503C;&#x76F8;&#x7B49;&#x7684;&#x5143;&#x7D20;&#x7684;&#x7D22;&#x5F15;&#xFF0C;&#x5982;&#x679C;&#x627E;&#x4E0D;&#x5230;&#x8FD9;&#x6837;&#x7684;&#x5143;&#x7D20;&#xFF0C;&#x5219;&#x8FD4;&#x56DE; -1&#x3002;</dd>
</dl><p></p>

<h4 id="Iteration_&#x65B9;&#x6CD5;">Iteration &#x65B9;&#x6CD5;</h4>

<p></p><p>&#x5728;&#x4E0B;&#x9762;&#x7684;&#x4F17;&#x591A;&#x904D;&#x5386;&#x65B9;&#x6CD5;&#x4E2D;&#xFF0C;&#x6709;&#x5F88;&#x591A;&#x65B9;&#x6CD5;&#x90FD;&#x9700;&#x8981;&#x6307;&#x5B9A;&#x4E00;&#x4E2A;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x4F5C;&#x4E3A;&#x53C2;&#x6570;&#x3002;&#x5728;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x6267;&#x884C;&#x4E4B;&#x524D;&#xFF0C;&#x6570;&#x7EC4;&#x7684;&#x957F;&#x5EA6;&#x4F1A;&#x88AB;&#x7F13;&#x5B58;&#x5728;&#x67D0;&#x4E2A;&#x5730;&#x65B9;&#xFF0C;&#x6240;&#x4EE5;&#xFF0C;&#x5982;&#x679C;&#x4F60;&#x5728;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x4E2D;&#x4E3A;&#x5F53;&#x524D;&#x6570;&#x7EC4;&#x6DFB;&#x52A0;&#x4E86;&#x65B0;&#x7684;&#x5143;&#x7D20;&#xFF0C;&#x90A3;&#x4E48;&#x90A3;&#x4E9B;&#x65B0;&#x6DFB;&#x52A0;&#x7684;&#x5143;&#x7D20;&#x662F;&#x4E0D;&#x4F1A;&#x88AB;&#x904D;&#x5386;&#x5230;&#x7684;&#x3002;&#x6B64;&#x5916;&#xFF0C;&#x5982;&#x679C;&#x5728;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x4E2D;&#x5BF9;&#x5F53;&#x524D;&#x6570;&#x7EC4;&#x8FDB;&#x884C;&#x4E86;&#x5176;&#x5B83;&#x4FEE;&#x6539;&#xFF0C;&#x6BD4;&#x5982;&#x6539;&#x53D8;&#x67D0;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x503C;&#x6216;&#x8005;&#x5220;&#x6389;&#x67D0;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x90A3;&#x4E48;&#x968F;&#x540E;&#x7684;&#x904D;&#x5386;&#x64CD;&#x4F5C;&#x53EF;&#x80FD;&#x4F1A;&#x53D7;&#x5230;&#x672A;&#x9884;&#x671F;&#x7684;&#x5F71;&#x54CD;&#x3002;&#x603B;&#x4E4B;&#xFF0C;&#x4E0D;&#x8981;&#x5C1D;&#x8BD5;&#x5728;&#x904D;&#x5386;&#x8FC7;&#x7A0B;&#x4E2D;&#x5BF9;&#x539F;&#x6570;&#x7EC4;&#x8FDB;&#x884C;&#x4EFB;&#x4F55;&#x4FEE;&#x6539;&#xFF0C;&#x867D;&#x7136;&#x89C4;&#x8303;&#x5BF9;&#x8FD9;&#x6837;&#x7684;&#x64CD;&#x4F5C;&#x8FDB;&#x884C;&#x4E86;&#x8BE6;&#x7EC6;&#x7684;&#x5B9A;&#x4E49;&#xFF0C;&#x4F46;&#x4E3A;&#x4E86;&#x53EF;&#x8BFB;&#x6027;&#x548C;&#x53EF;&#x7EF4;&#x62A4;&#x6027;&#xFF0C;&#x8BF7;&#x4E0D;&#x8981;&#x8FD9;&#x6837;&#x505A;&#x3002;</p>

<dl><dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" title="forEach() &#x65B9;&#x6CD5;&#x8BA9;&#x6570;&#x7EC4;&#x7684;&#x6BCF;&#x4E00;&#x9879;&#x90FD;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x7ED9;&#x5B9A;&#x7684;&#x51FD;&#x6570;&#x3002;"><code>Array.prototype.forEach()</code></a></dt>
 <dd>&#x4E3A;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/entries" title="entries() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#xA0;Array Iterator &#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x5305;&#x542B;&#x6570;&#x7EC4;&#x4E2D;&#x6BCF;&#x4E00;&#x4E2A;&#x7D22;&#x5F15;&#x7684;&#x952E;&#x503C;&#x5BF9;&#x3002;"><code>Array.prototype.entries()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x8FED;&#x4EE3;&#x5668;&#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x8FED;&#x4EE3;&#x5668;&#x4F1A;&#x5305;&#x542B;&#x6240;&#x6709;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x7684;&#x952E;&#x503C;&#x5BF9;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every" title="every() &#x65B9;&#x6CD5;&#x6D4B;&#x8BD5;&#x6570;&#x7EC4;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x662F;&#x5426;&#x90FD;&#x901A;&#x8FC7;&#x4E86;&#x6307;&#x5B9A;&#x51FD;&#x6570;&#x7684;&#x6D4B;&#x8BD5;&#x3002;"><code>Array.prototype.every()</code></a></dt>
 <dd>&#x5982;&#x679C;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x90FD;&#x6EE1;&#x8DB3;&#x6D4B;&#x8BD5;&#x51FD;&#x6570;&#xFF0C;&#x5219;&#x8FD4;&#x56DE; <code>true</code>&#xFF0C;&#x5426;&#x5219;&#x8FD4;&#x56DE; <code>false&#x3002;</code></dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some" title="some()&#xA0;&#x65B9;&#x6CD5;&#x6D4B;&#x8BD5;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x67D0;&#x4E9B;&#x5143;&#x7D20;&#x662F;&#x5426;&#x901A;&#x8FC7;&#x4E86;&#x6307;&#x5B9A;&#x51FD;&#x6570;&#x7684;&#x6D4B;&#x8BD5;&#x3002;"><code>Array.prototype.some()</code></a></dt>
 <dd>&#x5982;&#x679C;&#x6570;&#x7EC4;&#x4E2D;&#x81F3;&#x5C11;&#x6709;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x6EE1;&#x8DB3;&#x6D4B;&#x8BD5;&#x51FD;&#x6570;&#xFF0C;&#x5219;&#x8FD4;&#x56DE; true&#xFF0C;&#x5426;&#x5219;&#x8FD4;&#x56DE; false&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" title="filter()&#xA0;&#x65B9;&#x6CD5;&#x4F7F;&#x7528;&#x6307;&#x5B9A;&#x7684;&#x51FD;&#x6570;&#x6D4B;&#x8BD5;&#x6240;&#x6709;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x6240;&#x6709;&#x901A;&#x8FC7;&#x6D4B;&#x8BD5;&#x7684;&#x5143;&#x7D20;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x3002;"><code>Array.prototype.filter()</code></a></dt>
 <dd>&#x5C06;&#x6240;&#x6709;&#x5728;&#x8FC7;&#x6EE4;&#x51FD;&#x6570;&#x4E2D;&#x8FD4;&#x56DE; <code>true</code> &#x7684;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x653E;&#x8FDB;&#x4E00;&#x4E2A;&#x65B0;&#x6570;&#x7EC4;&#x4E2D;&#x5E76;&#x8FD4;&#x56DE;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find" title="find()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x4E2D;&#x6EE1;&#x8DB3;&#x6D4B;&#x8BD5;&#x6761;&#x4EF6;&#x7684;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x5982;&#x679C;&#x6CA1;&#x6709;&#x6EE1;&#x8DB3;&#x6761;&#x4EF6;&#x7684;&#x5143;&#x7D20;&#xFF0C;&#x5219;&#x8FD4;&#x56DE;&#xA0;"><code>Array.prototype.find()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></dt>
 <dd>&#x627E;&#x5230;&#x7B2C;&#x4E00;&#x4E2A;&#x6EE1;&#x8DB3;&#x6D4B;&#x8BD5;&#x51FD;&#x6570;&#x7684;&#x5143;&#x7D20;&#x5E76;&#x8FD4;&#x56DE;&#x90A3;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x503C;&#xFF0C;&#x5982;&#x679C;&#x627E;&#x4E0D;&#x5230;&#xFF0C;&#x5219;&#x8FD4;&#x56DE; <code>undefined</code>&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex" title="findIndex()&#x65B9;&#x6CD5;&#x7528;&#x6765;&#x67E5;&#x627E;&#x6570;&#x7EC4;&#x4E2D;&#x67D0;&#x6307;&#x5B9A;&#x5143;&#x7D20;&#x7684;&#x7D22;&#x5F15;, &#x5982;&#x679C;&#x627E;&#x4E0D;&#x5230;&#x6307;&#x5B9A;&#x7684;&#x5143;&#x7D20;, &#x5219;&#x8FD4;&#x56DE; -1."><code>Array.prototype.findIndex()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></dt>
 <dd>&#x627E;&#x5230;&#x7B2C;&#x4E00;&#x4E2A;&#x6EE1;&#x8DB3;&#x6D4B;&#x8BD5;&#x51FD;&#x6570;&#x7684;&#x5143;&#x7D20;&#x5E76;&#x8FD4;&#x56DE;&#x90A3;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x7D22;&#x5F15;&#xFF0C;&#x5982;&#x679C;&#x627E;&#x4E0D;&#x5230;&#xFF0C;&#x5219;&#x8FD4;&#x56DE; <code>-1</code>&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys" title="&#x6570;&#x7EC4;&#x7684; keys() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x7D22;&#x5F15;&#x7684;&#x8FED;&#x4EE3;&#x5668;&#x3002;"><code>Array.prototype.keys()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x8FED;&#x4EE3;&#x5668;&#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x8FED;&#x4EE3;&#x5668;&#x4F1A;&#x5305;&#x542B;&#x6240;&#x6709;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x7684;&#x952E;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map" title="map() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7531;&#x539F;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x65B9;&#x6CD5;&#x540E;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x7EC4;&#x6210;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x3002;"><code>Array.prototype.map()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7531;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x7EC4;&#x6210;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" title="reduce()&#xA0;&#x65B9;&#x6CD5;&#x63A5;&#x6536;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x4F5C;&#x4E3A;&#x7D2F;&#x52A0;&#x5668;&#xFF08;accumulator&#xFF09;&#xFF0C;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x503C;&#xFF08;&#x4ECE;&#x5DE6;&#x5230;&#x53F3;&#xFF09;&#x5F00;&#x59CB;&#x5408;&#x5E76;&#xFF0C;&#x6700;&#x7EC8;&#x4E3A;&#x4E00;&#x4E2A;&#x503C;&#x3002;"><code>Array.prototype.reduce()</code></a></dt>
 <dd>&#x4ECE;&#x5DE6;&#x5230;&#x53F3;&#x4E3A;&#x6BCF;&#x4E2A;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#xFF0C;&#x5E76;&#x628A;&#x4E0A;&#x6B21;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x653E;&#x5728;&#x4E00;&#x4E2A;&#x6682;&#x5B58;&#x5668;&#x4E2D;&#x4F20;&#x7ED9;&#x4E0B;&#x6B21;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x6700;&#x540E;&#x4E00;&#x6B21;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight" title="reduceRight()&#xA0;&#x65B9;&#x6CD5;&#x63A5;&#x53D7;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x4F5C;&#x4E3A;&#x7D2F;&#x52A0;&#x5668;&#xFF08;accumulator&#xFF09;&#xFF0C;&#x8BA9;&#x6BCF;&#x4E2A;&#x503C;&#xFF08;&#x4ECE;&#x53F3;&#x5230;&#x5DE6;&#xFF0C;&#x4EA6;&#x5373;&#x4ECE;&#x5C3E;&#x5230;&#x5934;&#xFF09;&#x7F29;&#x51CF;&#x4E3A;&#x4E00;&#x4E2A;&#x503C;&#x3002;&#xFF08;&#x4E0E; reduce() &#x7684;&#x6267;&#x884C;&#x65B9;&#x5411;&#x76F8;&#x53CD;&#xFF09;"><code>Array.prototype.reduceRight()</code></a></dt>
 <dd>&#x4ECE;&#x53F3;&#x5230;&#x5DE6;&#x4E3A;&#x6BCF;&#x4E2A;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#xFF0C;&#x5E76;&#x628A;&#x4E0A;&#x6B21;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x653E;&#x5728;&#x4E00;&#x4E2A;&#x6682;&#x5B58;&#x5668;&#x4E2D;&#x4F20;&#x7ED9;&#x4E0B;&#x6B21;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x6700;&#x540E;&#x4E00;&#x6B21;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/values" title="values() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#xA0;Array Iterator&#xA0;&#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x5305;&#x542B;&#x6570;&#x7EC4;&#x6BCF;&#x4E2A;&#x7D22;&#x5F15;&#x7684;&#x503C;&#x3002;"><code>Array.prototype.values()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x8FED;&#x4EE3;&#x5668;&#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x8FED;&#x4EE3;&#x5668;&#x4F1A;&#x5305;&#x542B;&#x6240;&#x6709;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x7684;&#x503C;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Array.prototype[@@iterator]()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></dt>
 <dd>&#x548C;&#x4E0A;&#x9762;&#x7684; <code>values() &#x65B9;&#x6CD5;&#x662F;&#x540C;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x3002;</code></dd>
</dl><p></p>

<h2 name="Generic_.E8.BF.87.E7.A8.8B" id="Generic_.E8.BF.87.E7.A8.8B">&#x6570;&#x7EC4;&#x901A;&#x7528;&#x65B9;&#x6CD5;</h2>

<div class="warning">
<p><strong>generics&#x65B9;&#x6CD5;&#x662F;&#x975E;&#x6807;&#x51C6;&#x7684;&#xFF0C;&#x5DF2;&#x5F03;&#x7528;&#x7684;&#xFF0C;&#x672A;&#x6765;&#x5C06;&#x4F1A;&#x88AB;&#x79FB;&#x9664;&#x7684;&#x6570;&#x7EC4;&#x65B9;&#x6CD5;&#x3002;</strong>&#xA0;&#x9700;&#x6CE8;&#x610F;&#x7684;&#x662F;&#x6B64;&#x65B9;&#x6CD5;&#x540C;&#x65F6;&#x6709;&#x8DE8;&#x6D4F;&#x89C8;&#x5668;&#x95EE;&#x9898;. &#x4F46;&#x662F;&#xA0;<a href="https://github.com/plusdude/array-generics" class="external">Github&#x4E0A;&#x6709;&#x53EF;&#x7528;&#x7684;shim</a>&#x3002;</p>
</div>

<p>&#x6709;&#x65F6;&#x4F60;&#x60F3;&#x5BF9;&#x5B57;&#x7B26;&#x4E32;&#x6216;&#x5176;&#x4ED6;&#x7C7B;&#x4F3C;&#x6570;&#x7EC4;&#x7684;&#x5BF9;&#x8C61;&#x4F7F;&#x7528;&#x6570;&#x7EC4;&#x7684;&#x65B9;&#x6CD5;&#xFF08;&#x5982;&#x51FD;&#x6570;<a href="/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments" title="arguments&#xA0;&#x662F;&#x4E00;&#x4E2A;&#x7C7B;&#x4F3C;&#x6570;&#x7EC4;&#x7684;&#x5BF9;&#x8C61;, &#x5BF9;&#x5E94;&#x4E8E;&#x4F20;&#x9012;&#x7ED9;&#x51FD;&#x6570;&#x7684;&#x53C2;&#x6570;&#x3002;">arguments</a>&#xFF09;&#x3002;&#x901A;&#x8FC7;&#x8FD9;&#x6837;&#x505A;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x628A;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x4F5C;&#x4E3A;&#xFF08;&#x6216;&#x4EE5;&#x5176;&#x4ED6;&#x65B9;&#x5F0F;&#x628A;&#x975E;&#x6570;&#x7EC4;&#x4F5C;&#x4E3A;&#x6570;&#x7EC4;&#xFF09;&#x6570;&#x7EC4;&#x91CC;&#x7684;&#x5B57;&#x7B26;&#x6765;&#x4F7F;&#x7528;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x4E3A;&#x4E86;&#x68C0;&#x67E5;&#x53D8;&#x91CF;<code>str</code>&#x6BCF;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x662F;&#x5426;&#x662F;&#x5B57;&#x6BCD;&#xFF0C;&#x4F60;&#x4F1A;&#x8FD9;&#x6837;&#x5199;&#xFF1A;</p>

<pre class="brush: js">function isLetter(character) {
  return character &gt;= &apos;a&apos; &amp;&amp; character &lt;= &apos;z&apos;;
}

if (Array.prototype.every.call(str, isLetter)) {
  console.log(&quot;The string &apos;&quot; + str + &quot;&apos; contains only letters!&quot;);
}</pre>

<p>&#x8FD9;&#x79CD;&#x65B9;&#x6CD5;&#x662F;&#x76F8;&#x5F53;&#x8D39;&#x65F6;&#x7684;&#xFF0C;&#x5728;JavaScript1.6&#x4E2D;&#x5176;&#x5F15;&#x5165;&#x4E86;&#x4E00;&#x4E2A;&#x901A;&#x7528;&#x7684;&#x7B80;&#x5199;&#xFF1A;</p>

<pre class="brush: js">if (Array.every(str, isLetter)) {
  console.log(&quot;The string &apos;&quot; + str + &quot;&apos; contains only letters!&quot;);
}</pre>

<p><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#String_generic_methods" title="String&#xA0;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x662F;&#x7528;&#x6765;&#x6784;&#x9020;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#x6216;&#x5B57;&#x7B26;&#x5E8F;&#x5217;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;&#x3002;">Generics</a>&#x5728;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String" title="String&#xA0;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x662F;&#x7528;&#x6765;&#x6784;&#x9020;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#x6216;&#x5B57;&#x7B26;&#x5E8F;&#x5217;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;&#x3002;"><code>String</code></a>&#x4E5F;&#x53EF;&#x7528;&#x3002;</p>

<p>&#x8FD9;&#x5E76;&#x4E0D;&#x662F; ECMAScript &#x6807;&#x51C6;&#x7684;&#x4E00;&#x90E8;&#x5206;&#xFF08;&#x867D;&#x7136;&#xA0;ES6 &#x6807;&#x51C6;&#x4E2D;&#x7684;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from" title="Array.from() &#x65B9;&#x6CD5;&#x4ECE;&#x7C7B;&#x4F3C;&#x6570;&#x7EC4;&#x6216;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x6570;&#x7EC4;&#x5B9E;&#x4F8B;&#x3002;"><code>Array.from()</code></a> &#x53EF;&#x4EE5;&#x7528;&#x6765;&#x5B9E;&#x73B0;&#x8FD9;&#x4E2A;&#xFF09;&#x3002;&#xA0;&#x4E0B;&#x9762;&#x662F;&#x4E00;&#x4E2A;shim&#xFF0C;&#x5176;&#x53EF;&#x4EE5;&#x5728;&#x6240;&#x6709;&#x7684;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#x8FD0;&#x884C;&#xFF1A;</p>

<pre class="brush: js">// Assumes Array extras already present (one may use polyfills for these as well)
(function() {
  &apos;use strict&apos;;

  var i,
    // We could also build the array of methods with the following, but the
    //   getOwnPropertyNames() method is non-shimable:
    // Object.getOwnPropertyNames(Array).filter(function(methodName) {
    //   return typeof Array[methodName] === &apos;function&apos;
    // });
    methods = [
      &apos;join&apos;, &apos;reverse&apos;, &apos;sort&apos;, &apos;push&apos;, &apos;pop&apos;, &apos;shift&apos;, &apos;unshift&apos;,
      &apos;splice&apos;, &apos;concat&apos;, &apos;slice&apos;, &apos;indexOf&apos;, &apos;lastIndexOf&apos;,
      &apos;forEach&apos;, &apos;map&apos;, &apos;reduce&apos;, &apos;reduceRight&apos;, &apos;filter&apos;,
      &apos;some&apos;, &apos;every&apos;, &apos;find&apos;, &apos;findIndex&apos;, &apos;entries&apos;, &apos;keys&apos;,
      &apos;values&apos;, &apos;copyWithin&apos;, &apos;includes&apos;
    ],
    methodCount = methods.length,
    assignArrayGeneric = function(methodName) {
      if (!Array[methodName]) {
        var method = Array.prototype[methodName];
        if (typeof method === &apos;function&apos;) {
          Array[methodName] = function() {
            return method.call.apply(method, arguments);
          };
        }
      }
    };

  for (i = 0; i &lt; methodCount; i++) {
    assignArrayGeneric(methods[i]);
  }
}());
</pre>

<h2 name=".E4.BE.8B.E5.AD.90" id=".E4.BE.8B.E5.AD.90">&#x793A;&#x4F8B;</h2>

<h3 name=".E4.BE.8B.E5.AD.90.EF.BC.9A.E5.88.9B.E5.BB.BA.E6.95.B0.E7.BB.84" id=".E4.BE.8B.E5.AD.90.EF.BC.9A.E5.88.9B.E5.BB.BA.E6.95.B0.E7.BB.84">&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;</h3>

<p>&#x5728;&#x4E0B;&#x9762;&#x8FD9;&#x4E2A;&#x4F8B;&#x5B50;&#x91CC;&#xFF0C;&#x9996;&#x5148;&#x521B;&#x5EFA;&#x4E86;&#x4E00;&#x4E2A;&#x957F;&#x5EA6;&#x4E3A;0&#x7684;&#x7A7A;&#x6570;&#x7EC4; <code>msgArray</code>&#xFF0C;&#x63A5;&#x7740;&#x7ED9;&#xA0;<code>msgArray[0]</code>&#x8D4B;&#x503C;&#xFF0C;&#x7136;&#x540E;&#x7ED9;&#xA0;<code>msgArray[99]&#xA0;</code>&#x8D4B;&#x503C;&#xFF0C;&#x63A5;&#x7740;&#x6570;&#x7EC4;&#x957F;&#x5EA6;&#x5C31;&#x53D8;&#x6210;&#x4E86;100&#x3002;</p>

<pre class="brush: js">var msgArray = [];
msgArray[0] = &apos;Hello&apos;;
msgArray[99] = &apos;world&apos;;

if (msgArray.length === 100) {
  console.log(&apos;&#x6570;&#x7EC4;&#x957F;&#x5EA6;&#x4E3A;100&#x3002;&apos;);
}</pre>

<h3 name=".E4.BE.8B.E5.AD.90.EF.BC.9A.E4.BA.8C.E7.BB.B4.E6.95.B0.E7.BB.84" id=".E4.BE.8B.E5.AD.90.EF.BC.9A.E4.BA.8C.E7.BB.B4.E6.95.B0.E7.BB.84">&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x4E8C;&#x7EF4;&#x6570;&#x7EC4;</h3>

<p>&#x8FD9;&#x4E2A;&#x4F8B;&#x5B50;&#x521B;&#x5EFA;&#x4E86;&#x4E00;&#x4E2A;&#x4E8C;&#x7EF4;&#x6570;&#x7EC4;<code>myVar</code>&#xFF0C;&#x7136;&#x540E;&#x8D4B;&#x503C;&#x3002;</p>

<pre class="brush: js">var board = [ 
  [&apos;R&apos;,&apos;N&apos;,&apos;B&apos;,&apos;Q&apos;,&apos;K&apos;,&apos;B&apos;,&apos;N&apos;,&apos;R&apos;],
  [&apos;P&apos;,&apos;P&apos;,&apos;P&apos;,&apos;P&apos;,&apos;P&apos;,&apos;P&apos;,&apos;P&apos;,&apos;P&apos;],
  [&apos; &apos;,&apos; &apos;,&apos; &apos;,&apos; &apos;,&apos; &apos;,&apos; &apos;,&apos; &apos;,&apos; &apos;],
  [&apos; &apos;,&apos; &apos;,&apos; &apos;,&apos; &apos;,&apos; &apos;,&apos; &apos;,&apos; &apos;,&apos; &apos;],
  [&apos; &apos;,&apos; &apos;,&apos; &apos;,&apos; &apos;,&apos; &apos;,&apos; &apos;,&apos; &apos;,&apos; &apos;],
  [&apos; &apos;,&apos; &apos;,&apos; &apos;,&apos; &apos;,&apos; &apos;,&apos; &apos;,&apos; &apos;,&apos; &apos;],
  [&apos;p&apos;,&apos;p&apos;,&apos;p&apos;,&apos;p&apos;,&apos;p&apos;,&apos;p&apos;,&apos;p&apos;,&apos;p&apos;],
  [&apos;r&apos;,&apos;n&apos;,&apos;b&apos;,&apos;q&apos;,&apos;k&apos;,&apos;b&apos;,&apos;n&apos;,&apos;r&apos;] ];

console.log(board.join(&apos;\n&apos;) + &apos;\n\n&apos;);

// Move King&apos;s Pawn forward 2
board[4][4] = board[6][4];
board[6][4] = &apos; &apos;;
console.log(board.join(&apos;\n&apos;));
</pre>

<p>&#x4E0B;&#x9762;&#x662F;&#x8F93;&#x51FA;&#xFF1A;</p>

<pre class="brush: js">R,N,B,Q,K,B,N,R
P,P,P,P,P,P,P,P
 , , , , , , , 
 , , , , , , , 
 , , , , , , , 
 , , , , , , , 
p,p,p,p,p,p,p,p
r,n,b,q,k,b,n,r

R,N,B,Q,K,B,N,R
P,P,P,P,P,P,P,P
 , , , , , , , 
 , , , , , , , 
 , , , ,p, , , 
 , , , , , , , 
p,p,p,p, ,p,p,p
r,n,b,q,k,b,n,r
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class=" standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x8BF4;&#x660E;</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf" class="external" lang="en" hreflang="en" title="ECMAScript 1st Edition (ECMA-262)">ECMAScript 1st Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;&#x3002;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.4" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Array</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x65B0;&#x589E;&#x65B9;&#x6CD5;: <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray" title="Array.isArray()&#xA0;&#x8BE5;&#x65B9;&#x6CD5;&#x9002;&#x7528;&#x4E8E;&#x786E;&#x5B9A;&#x4F20;&#x9012;&#x7684;&#x503C;&#x662F;&#x5426;&#x4E3A;Array&#x3002;"><code>Array.isArray</code></a>, <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf" title="indexOf()&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x5728;&#x6570;&#x7EC4;&#x4E2D;&#x53EF;&#x4EE5;&#x627E;&#x5230;&#x7ED9;&#x5B9A;&#x5143;&#x7D20;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x7D22;&#x5F15;&#xFF0C;&#x5982;&#x679C;&#x4E0D;&#x5B58;&#x5728;&#xFF0C;&#x5219;&#x8FD4;&#x56DE;-1&#x3002;"><code>indexOf</code></a>, <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf" title="lastIndexOf() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x5143;&#x7D20;&#xFF08;&#x4E5F;&#x5373;&#x6709;&#x6548;&#x7684; JavaScript &#x503C;&#x6216;&#x53D8;&#x91CF;&#xFF09;&#x5728;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x7684;&#x7D22;&#x5F15;&#xFF0C;&#x5982;&#x679C;&#x4E0D;&#x5B58;&#x5728;&#x5219;&#x8FD4;&#x56DE; -1&#x3002;&#x4ECE;&#x6570;&#x7EC4;&#x7684;&#x540E;&#x9762;&#x5411;&#x524D;&#x67E5;&#x627E;&#xFF0C;&#x4ECE; fromIndex &#x5904;&#x5F00;&#x59CB;&#x3002;"><code>lastIndexOf</code></a>, <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every" title="every() &#x65B9;&#x6CD5;&#x6D4B;&#x8BD5;&#x6570;&#x7EC4;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x662F;&#x5426;&#x90FD;&#x901A;&#x8FC7;&#x4E86;&#x6307;&#x5B9A;&#x51FD;&#x6570;&#x7684;&#x6D4B;&#x8BD5;&#x3002;"><code>every</code></a>, <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some" title="some()&#xA0;&#x65B9;&#x6CD5;&#x6D4B;&#x8BD5;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x67D0;&#x4E9B;&#x5143;&#x7D20;&#x662F;&#x5426;&#x901A;&#x8FC7;&#x4E86;&#x6307;&#x5B9A;&#x51FD;&#x6570;&#x7684;&#x6D4B;&#x8BD5;&#x3002;"><code>some</code></a>, <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" title="forEach() &#x65B9;&#x6CD5;&#x5BF9;&#x6570;&#x7EC4;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x63D0;&#x4F9B;&#x7684;&#x51FD;&#x6570;(&#x56DE;&#x8C03;&#x51FD;&#x6570;)&#x3002;"><code>forEach</code></a>, <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map" title="map() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7531;&#x539F;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x65B9;&#x6CD5;&#x540E;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x7EC4;&#x6210;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x3002;"><code>map</code></a>, <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" title="filter()&#xA0;&#x65B9;&#x6CD5;&#x4F7F;&#x7528;&#x6307;&#x5B9A;&#x7684;&#x51FD;&#x6570;&#x6D4B;&#x8BD5;&#x6240;&#x6709;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x6240;&#x6709;&#x901A;&#x8FC7;&#x6D4B;&#x8BD5;&#x7684;&#x5143;&#x7D20;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x3002;"><code>filter</code></a>, <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" title="reduce()&#xA0;&#x65B9;&#x6CD5;&#x5BF9;&#x7D2F;&#x52A0;&#x5668;&#x548C;&#x6570;&#x7EC4;&#x7684;&#x6BCF;&#x4E2A;&#x503C;&#x5E94;&#x7528;&#x4E00;&#x4E2A;&#x51FD;&#x6570; (&#x4ECE;&#x5DE6;&#x5230;&#x53F3;)&#xFF0C;&#x4EE5;&#x5C06;&#x5176;&#x51CF;&#x5C11;&#x4E3A;&#x5355;&#x4E2A;&#x503C;&#x3002;"><code>reduce</code></a>, <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight" title="reduceRight()&#xA0;&#x65B9;&#x6CD5;&#x63A5;&#x53D7;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x4F5C;&#x4E3A;&#x7D2F;&#x52A0;&#x5668;&#xFF08;accumulator&#xFF09;&#xFF0C;&#x8BA9;&#x6BCF;&#x4E2A;&#x503C;&#xFF08;&#x4ECE;&#x53F3;&#x5230;&#x5DE6;&#xFF0C;&#x4EA6;&#x5373;&#x4ECE;&#x5C3E;&#x5230;&#x5934;&#xFF09;&#x7F29;&#x51CF;&#x4E3A;&#x4E00;&#x4E2A;&#x503C;&#x3002;&#xFF08;&#x4E0E; reduce() &#x7684;&#x6267;&#x884C;&#x65B9;&#x5411;&#x76F8;&#x53CD;&#xFF09;"><code>reduceRight</code></a></td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-array-objects" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Array</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>
    <p>&#x65B0;&#x589E;&#x65B9;&#x6CD5;&#xFF1A;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from" title="Array.from() &#x65B9;&#x6CD5;&#x4ECE;&#x7C7B;&#x4F3C;&#x6570;&#x7EC4;&#x6216;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x6570;&#x7EC4;&#x5B9E;&#x4F8B;&#x3002;"><code>Array.from</code></a>, <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/of" title="Array.of() &#x65B9;&#x6CD5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5177;&#x6709;&#x53EF;&#x53D8;&#x6570;&#x91CF;&#x53C2;&#x6570;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x5B9E;&#x4F8B;&#xFF0C;&#x800C;&#x4E0D;&#x8003;&#x8651;&#x53C2;&#x6570;&#x7684;&#x6570;&#x91CF;&#x6216;&#x7C7B;&#x578B;&#x3002;"><code>Array.of</code></a>, <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find" title="find()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x4E2D;&#x6EE1;&#x8DB3;&#x63D0;&#x4F9B;&#x7684;&#x6D4B;&#x8BD5;&#x51FD;&#x6570;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x503C;&#x3002;&#x5426;&#x5219;&#x8FD4;&#x56DE;&#xA0;undefined&#x3002;"><code>find</code></a>, <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex" title="findIndex()&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x4E2D;&#x6EE1;&#x8DB3;&#x63D0;&#x4F9B;&#x7684;&#x6D4B;&#x8BD5;&#x51FD;&#x6570;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x7D22;&#x5F15;&#x3002;&#x5426;&#x5219;&#x8FD4;&#x56DE;-1&#x3002;"><code>findIndex</code></a>, <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill" title="The&#xA0;fill()&#xA0;&#x65B9;&#x6CD5;&#x5C06;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x4ECE;&#x5F00;&#x59CB;&#x7D22;&#x5F15;&#x586B;&#x5145;&#x5230;&#x5177;&#x6709;&#x9759;&#x6001;&#x503C;&#x7684;&#x7ED3;&#x675F;&#x7D22;&#x5F15;"><code>fill</code></a>, <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin" title="copyWithin() &#x65B9;&#x6CD5;&#x4F1A;&#x6D45;&#x62F7;&#x8D1D;&#x6570;&#x7EC4;&#x7684;&#x90E8;&#x5206;&#x5143;&#x7D20;&#x5230;&#x540C;&#x4E00;&#x6570;&#x7EC4;&#x7684;&#x4E0D;&#x540C;&#x4F4D;&#x7F6E;&#xFF0C;&#x4E14;&#x4E0D;&#x6539;&#x53D8;&#x6570;&#x7EC4;&#x7684;&#x5927;&#x5C0F;&#xFF0C;&#x8FD4;&#x56DE;&#x8BE5;&#x6570;&#x7EC4;&#x3002;"><code>copyWithin</code></a></p>
   </td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-array-objects" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Array</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>
    <p>&#x65B0;&#x589E;&#x65B9;&#x6CD5;&#xFF1A;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes" title="includes() &#x65B9;&#x6CD5;&#x7528;&#x6765;&#x5224;&#x65AD;&#x5F53;&#x524D;&#x6570;&#x7EC4;&#x662F;&#x5426;&#x5305;&#x542B;&#x67D0;&#x6307;&#x5B9A;&#x7684;&#x503C;&#xFF0C;&#x5982;&#x679C;&#x662F;&#xFF0C;&#x5219;&#x8FD4;&#x56DE; true&#xFF0C;&#x5426;&#x5219;&#x8FD4;&#x56DE; false&#x3002;"><code>Array.prototype.includes()</code></a></p>
   </td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x652F;&#x6301;">&#x6D4F;&#x89C8;&#x5668;&#x652F;&#x6301;</h2>

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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Indexing_object_properties">JavaScript Guide: &#x201C;Indexing object properties&#x201D;</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Predefined_Core_Objects#Array_Object">JavaScript Guide: &#x201C;Predefined Core Objects:&#xA0;<code>Array</code>&#xA0;Object&#x201D;</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Array_comprehensions">Array comprehensions</a></li>
 <li><a href="https://github.com/plusdude/array-generics" class="external">Polyfill for JavaScript 1.8.5 Array Generics and ECMAScript 5 Array Extras</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript_typed_arrays">Typed Arrays</a></li>
</ul>
                  
                
              