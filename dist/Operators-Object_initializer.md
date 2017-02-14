
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>&#x5BF9;&#x8C61;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object"><code>new Object()</code></a>,<code> <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create">Object.create()</a>&#xA0;&#x65B9;&#x6CD5;</code>&#xFF0C; &#x6216;&#x8005;&#x4F7F;&#x7528;<em>&#x5B57;&#x9762;&#xA0;</em>&#x6807;&#x8BB0;&#xA0;(<em>&#x521D;&#x59CB;&#x5316;</em>&#xA0;&#x6807;&#x8BB0;)&#x521D;&#x59CB;&#x5316;&#x3002; &#x5BF9;&#x8C61;&#x521D;&#x59CB;&#x5316;&#xFF0C;&#x7531;&#x82B1;&#x62EC;&#x53F7;{}&#x5305;&#x542B;&#x7684;&#x4E00;&#x4E2A;&#x7531;0&#x4E2A;&#x6216;&#x8005;&#x591A;&#x4E2A;&#x5BF9;&#x8C61;&#x5C5E;&#x6027;&#x540D;&#x548C;&#x5173;&#x8054;&#x503C;&#x7EC4;&#x6210;&#x7684;&#x5217;&#x8868;&#x6784;&#x6210;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="brush: js">var o = {};
var o = { a: &quot;foo&quot;, b: 42, c: {} };

var a = &quot;foo&quot;, b = 42, c = {};
var o = { a: a, b: b, c: c };

var o = {
  <var>property: function </var>([<var>parameters</var>]) {},
  get <var>property</var>() {},
  set <var>property</var>(<var>value</var>) {},
};
</pre>

<h3 id="ECMAScript_6&#x65B0;&#x6807;&#x8BB0;">ECMAScript 6&#x65B0;&#x6807;&#x8BB0;</h3>

<p>&#x8BF7;&#x53C2;&#x8003;&#x517C;&#x5BB9;&#x6027;&#x8868;&#x683C;&#x83B7;&#x53D6;&#x8FD9;&#x4E9B;&#x6807;&#x8BB0;&#x7684;&#x652F;&#x6301;&#x4FE1;&#x606F;&#x3002;&#x5728;&#x4E0D;&#x88AB;&#x652F;&#x6301;&#x7684;&#x73AF;&#x5883;&#x4E2D;&#xFF0C;&#x8FD9;&#x4E9B;&#x6807;&#x8BB0;&#x5C06;&#x9020;&#x6210;&#x8BED;&#x6CD5;&#x9519;&#x8BEF;&#x3002;</p>

<pre class="brush: js">// Shorthand property names (ES6)
var a = &quot;foo&quot;, b = 42, c = {};
var o = { a, b, c };

// Shorthand method names (ES6)
var o = {
  <var>property</var>([<var>parameters</var>]) {},
  get <var>property</var>() {},
  set <var>property</var>(<var>value</var>) {},
  * <var>generator</var>() {}
};

// Computed property names (ES6)
var prop = &quot;foo&quot;;
var o = {
  [prop]: &quot;hey&quot;,
  [&quot;b&quot; + &quot;ar&quot;]: &quot;there&quot;,
};</pre>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x5BF9;&#x8C61;&#x521D;&#x59CB;&#x5316;&#x662F;&#x4E00;&#x4E2A;&#x63CF;&#x8FF0;<a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/&#x5BF9;&#x8C61;" class="new"><code>&#x5BF9;&#x8C61;</code></a>&#x521D;&#x59CB;&#x5316;&#x8FC7;&#x7A0B;&#x7684;&#x8868;&#x8FBE;&#x5F0F;&#x3002;&#x5BF9;&#x8C61;&#x521D;&#x59CB;&#x5316;&#x662F;&#x7531;&#x4E00;&#x7EC4;&#x63CF;&#x8FF0;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#x7EC4;&#x6210;&#x3002;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x53EF;&#x4EE5;&#x662F;<a title="The definition of that term (&#x56FA;&#x6709;) has not been written yet; please consider contributing it!" href="/zh-CN/docs/Glossary/&#x56FA;&#x6709;" class="new glossaryLink">&#x56FA;&#x6709;</a>&#x7C7B;&#x578B;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x662F;&#x5176;&#x4ED6;&#x5BF9;&#x8C61;&#x3002;</p>

<h3 id="&#x521B;&#x5EFA;&#x5BF9;&#x8C61;">&#x521B;&#x5EFA;&#x5BF9;&#x8C61;</h3>

<p>&#x6CA1;&#x6709;&#x5C5E;&#x6027;&#x7684;&#x7A7A;&#x5BF9;&#x8C61;&#x53EF;&#x4EE5;&#x7528;&#x4EE5;&#x4E0B;&#x65B9;&#x5F0F;&#x521B;&#x5EFA;&#xFF1A;</p>

<pre class="brush: js">var object = {};</pre>

<p>&#x4E0D;&#x8FC7;&#xFF0C;<em>&#x5B57;&#x9762;&#xA0;</em>&#x548C;<em>&#x521D;&#x59CB;&#x5316;&#xA0;</em>&#x6807;&#x8BB0;&#x7684;&#x4F18;&#x52BF;&#x5728;&#x4E8E;&#xFF0C;&#x53EF;&#x4EE5;&#x7528;&#x5185;&#x542B;&#x5C5E;&#x6027;&#x7684;&#x82B1;&#x62EC;&#x53F7;&#x5FEB;&#x901F;&#x521B;&#x5EFA;&#x5BF9;&#x8C61;&#x3002;&#x7B80;&#x5355;&#x5730;&#x7F16;&#x5199;&#x4E00;&#x4E2A;&#x9017;&#x53F7;&#x5206;&#x9694;&#x7684;&#x952E;:&#x503C;&#x5BF9;&#x7684;&#x7C7B;&#x522B;&#x3002;&#x5982;&#x4E0B;&#x4EE3;&#x7801;&#x521B;&#x5EFA;&#x4E86;&#x4E00;&#x4E2A;&#x542B;&#x4E09;&#x4E2A;&#x5C5E;&#x6027;&#x7684;&#x5BF9;&#x8C61;&#xFF0C;&#x952E;&#x5206;&#x522B;&#x4E3A;&#xA0;&quot;foo&quot;, &quot;age&quot; &#x548C; &quot;baz&quot;&#x3002;&#x8FD9;&#x4E9B;&#x952E;&#x5BF9;&#x5E94;&#x7684;&#x503C;&#xFF0C;&#x5206;&#x522B;&#x662F;&#x5B57;&#x7B26;&#x4E32;&#x201C;bar&#x201D;&#xFF0C;&#x6570;&#x5B57;42&#x548C;&#x53E6;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x3002;</p>

<pre class="brush: js">var object = {
  foo: &quot;bar&quot;,
  age: 42,
  baz: { myProp: 12 },
}</pre>

<h3 id="&#x5C5E;&#x6027;&#x8BBF;&#x95EE;">&#x5C5E;&#x6027;&#x8BBF;&#x95EE;</h3>

<p>&#x521B;&#x5EFA;&#x5BF9;&#x8C61;&#x540E;&#xFF0C;&#x53EF;&#x4EE5;&#x8BFB;&#x53D6;&#x6216;&#x8005;&#x4FEE;&#x6539;&#x5B83;&#x3002;&#x5BF9;&#x8C61;&#x5C5E;&#x6027;&#x53EF;&#x4EE5;&#x7528;&#x4E0B;&#x6807;&#x5C0F;&#x5706;&#x70B9;&#x6807;&#x8BB0;&#x6216;&#x8005;&#x65B9;&#x62EC;&#x53F7;&#x6807;&#x8BB0;&#x8BBF;&#x95EE;&#x3002;&#x53C2;&#x8003;<a href="/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors">&#x5C5E;&#x6027;&#x8BBF;&#x95EE;</a>&#xA0;&#x83B7;&#x53D6;&#x66F4;&#x591A;&#x4FE1;&#x606F;&#x3002;</p>

<pre class="brush: js">object.foo; // &quot;bar&quot;
object[&quot;age&quot;]; // 42

object.foo = &quot;baz&quot;;
</pre>

<h3 id="&#x5C5E;&#x6027;&#x5B9A;&#x4E49;">&#x5C5E;&#x6027;&#x5B9A;&#x4E49;</h3>

<p>&#x4E0A;&#x9762;&#x5B66;&#x4E60;&#x4E86;&#x5982;&#x4F55;&#x7528;&#x521D;&#x59CB;&#x5316;&#x6807;&#x8BB0;&#x5BF9;&#x8C61;&#x5C5E;&#x6027;&#x3002;&#x7ECF;&#x5E38;&#x80FD;&#x9047;&#x5230;&#x5E0C;&#x671B;&#x5C06;&#x4EE3;&#x7801;&#x4E2D;&#x7684;&#x53D8;&#x91CF;&#x653E;&#x5230;&#x5BF9;&#x8C61;&#x4E2D;&#x7684;&#x60C5;&#x51B5;&#x3002;&#x53EF;&#x80FD;&#x9047;&#x5230;&#x5982;&#x4E0B;&#x4EE3;&#x7801;&#xFF1A;</p>

<pre class="brush: js">var a = &quot;foo&quot;, 
    b = 42,
    c = {};

var o = { 
  a: a,
  b: b,
  c: c
};</pre>

<p>&#x5728; ECMAScript 2015&#x4E2D;&#xFF0C;&#x6709;&#x66F4;&#x7B80;&#x77ED;&#x7684;&#x6807;&#x8BB0;&#x53EF;&#x4EE5;&#x5B9E;&#x73B0;&#x540C;&#x6837;&#x7684;&#x6548;&#x679C;&#xFF1A;</p>

<pre class="brush: js">var a = &quot;foo&quot;, 
    b = 42, 
    c = {};

// Shorthand property names (ES6)
var o = { a, b, c };</pre>

<h4 id="&#x91CD;&#x590D;&#x5C5E;&#x6027;&#x540D;">&#x91CD;&#x590D;&#x5C5E;&#x6027;&#x540D;</h4>

<p>&#x5C5E;&#x6027;&#x4F7F;&#x7528;&#x4E86;&#x540C;&#x6837;&#x7684;&#x540D;&#x79F0;&#x65F6;&#xFF0C;&#x540E;&#x9762;&#x7684;&#x5C5E;&#x6027;&#x4F1A;&#x8986;&#x76D6;&#x524D;&#x9762;&#x7684;&#x5C5E;&#x6027;&#x3002;</p>

<pre class="brush: js">var a = {x: 1, x: 2};
console.log(a); // { x: 2}
</pre>

<p>&#x5728; ECMAScript 5 strict &#x6A21;&#x5F0F;&#x7684;&#x4EE3;&#x7801;&#x4E2D;&#xFF0C; &#x91CD;&#x590D;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x4F1A;&#x88AB;&#x5F53;&#x505A;<a title="SyntaxError&#xA0;&#x5BF9;&#x8C61;&#x4EE3;&#x8868;&#x5C1D;&#x8BD5;&#x89E3;&#x6790;&#x8BED;&#x6CD5;&#x4E0A;&#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x4EE3;&#x7801;&#x7684;&#x9519;&#x8BEF;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError"><code>SyntaxError</code></a>&#x3002;&#x5F15;&#x5165;&#x8BA1;&#x7B97;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x4EE5;&#x540E;&#xFF0C;&#x5C5E;&#x6027;&#x540D;&#x4F1A;&#x5728;&#x8FD0;&#x884C;&#x65F6;&#x51FA;&#x73B0;&#x91CD;&#x590D;&#x3002;ECMAScript 2015&#xA0;&#x79FB;&#x9664;&#x4E86;&#x8FD9;&#x4E2A;&#x9650;&#x5236;&#x3002;</p>

<pre class="brush: js">function haveES6DuplicatePropertySemantics(){
  &quot;use strict&quot;;
  try {
    ({ prop: 1, prop: 2 });

    // No error thrown, duplicate property names allowed in strict mode
    return true;
  } catch (e) {
    // Error thrown, duplicates prohibited in strict mode
    return false;
  }
}</pre>

<h3 id="&#x65B9;&#x6CD5;&#x5B9A;&#x4E49;">&#x65B9;&#x6CD5;&#x5B9A;&#x4E49;</h3>

<p>&#x5BF9;&#x8C61;&#x5C5E;&#x6027;&#x4E5F;&#x53EF;&#x4EE5;&#x662F;&#x4E00;&#x4E2A;<a href="/en-US/docs/Web/JavaScript/Reference/Functions">&#x51FD;&#x6570;</a>&#x3001;<a href="/en-US/docs/Web/JavaScript/Reference/Functions/get">getter</a>&#x3001;<a href="/en-US/docs/Web/JavaScript/Reference/Functions/set">setter</a>&#x65B9;&#x6CD5;&#x3002;</p>

<pre class="brush: js">var o = {
  <var>property: function </var>([<var>parameters</var>]) {},
  get <var>property</var>() {},
  set <var>property</var>(<var>value</var>) {},
};</pre>

<p>ECMAScript 2015&#x5F15;&#x5165;&#x4E86;&#x4E00;&#x4E2D;&#x7B80;&#x77ED;&#x5199;&#x6CD5;&#xFF0C;&#xA0;&quot;function&quot; &#x5173;&#x952E;&#x5B57;&#x4E5F;&#x53EF;&#x4EE5;&#x4E22;&#x6389;&#x3002;</p>

<pre class="brush: js">// Shorthand method names (ES6)
var o = {
  <var>property</var>([<var>parameters</var>]) {},
  get <var>property</var>() {},
  set <var>property</var>(<var>value</var>) {},
  * <var>generator</var>() {}
};</pre>

<p>ECMAScript 2015&#xA0;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x79CD;&#x7B80;&#x660E;&#x5730;&#x5B9A;&#x4E49;&#x4EE5;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;&#x4F5C;&#x4E3A;&#x503C;&#x7684;&#x5C5E;&#x6027;&#x7684;&#x65B9;&#x6CD5;&#x3002;</p>

<pre class="brush: js">var o = {
  * <var>generator</var>() {
    ...........
  }
};</pre>

<p>ECMAScript 5 &#x4E2D;&#x53EF;&#x4EE5;&#x8FD9;&#x6837;&#x4E66;&#x5199;&#xA0;(&#x9700;&#x8981;&#x6CE8;&#x610F;&#x7684;&#x65F6; ES5 &#x6CA1;&#x6709;&#x751F;&#x6210;&#x5668;)&#xFF1A;</p>

<pre class="brush: js">var o = {
  generator<var>Method: function *</var>() {
    ...........
  }
};</pre>

<p>&#x83B7;&#x53D6;&#x66F4;&#x591A;&#x4FE1;&#x606F;&#x548C;&#x8303;&#x4F8B;&#xFF0C;&#x8BF7;&#x53C2;&#x8003;&#xA0;<a href="/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions">method definitions</a>&#x3002;</p>

<h3 id="&#x8BA1;&#x7B97;&#x7684;&#x5C5E;&#x6027;&#x540D;">&#x8BA1;&#x7B97;&#x7684;&#x5C5E;&#x6027;&#x540D;</h3>

<p>&#x4ECE;ECMAScript 2015&#x5F00;&#x59CB;&#xFF0C;&#x5BF9;&#x8C61;&#x521D;&#x59CB;&#x5316;&#x8BED;&#x6CD5;&#x5F00;&#x59CB;&#x652F;&#x6301;&#x8BA1;&#x7B97;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x3002;&#x5176;&#x5141;&#x8BB8;&#x5728;[]&#x4E2D;&#x653E;&#x5165;&#x8868;&#x8FBE;&#x5F0F;&#xFF0C;&#x8BA1;&#x7B97;&#x7ED3;&#x679C;&#x53EF;&#x4EE5;&#x5F53;&#x505A;&#x5C5E;&#x6027;&#x540D;&#x3002;&#x8FD9;&#x79CD;&#x7528;&#x6CD5;&#x548C;&#x7528;&#x65B9;&#x62EC;&#x53F7;&#x8BBF;&#x95EE;<a href="/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors">&#x5C5E;&#x6027;</a>&#x975E;&#x5E38;&#x7C7B;&#x4F3C;&#xFF0C;&#x4E5F;&#x8BB8;&#x4F60;&#x5DF2;&#x7ECF;&#x7528;&#x6765;&#x8BFB;&#x53D6;&#x548C;&#x8BBE;&#x7F6E;&#x5C5E;&#x6027;&#x4E86;&#x3002;&#x73B0;&#x5728;&#x540C;&#x6837;&#x7684;&#x8BED;&#x6CD5;&#x4E5F;&#x53EF;&#x4EE5;&#x7528;&#x4E8E;&#x5BF9;&#x8C61;&#x5B57;&#x9762;&#x503C;&#x4E86;&#xFF1A;</p>

<pre class="brush: js">// Computed property names (ES6)
var i = 0;
var a = {
  [&quot;foo&quot; + ++i]: i,
  [&quot;foo&quot; + ++i]: i,
  [&quot;foo&quot; + ++i]: i
};

console.log(a.foo1); // 1
console.log(a.foo2); // 2
console.log(a.foo3); // 3

var param = &apos;size&apos;;
var config = {
  [param]: 12,
  [&quot;mobile&quot; + param.charAt(0).toUpperCase() + param.slice(1)]: 4
};

console.log(config); // { size: 12, mobileSize: 4 }</pre>

<h3 id="&#x53D8;&#x66F4;&#x539F;&#x578B;">&#x53D8;&#x66F4;&#x539F;&#x578B;</h3>

<p>&#x5B9A;&#x4E49;&#x5C5E;&#x6027;&#x4E3A;<code>__proto__: &#x503C;</code> &#x6216; <code>&quot;__proto__&quot;: &#x503C;</code>&#xA0;&#x65F6;&#xFF0C;&#x4E0D;&#x4F1A;&#x521B;&#x5EFA;&#x540D;&#x4E3A;<code>__proto__&#x5C5E;&#x6027;&#x3002;&#x5982;&#x679C;&#x7ED9;&#x51FA;&#x7684;&#x503C;&#x662F;&#x5BF9;&#x8C61;&#x6216;&#x8005;</code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"><code>null</code></a><code>&#xFF0C;&#x90A3;&#x4E48;&#x5BF9;&#x8C61;&#x7684;[[Prototype]]&#x4F1A;&#x88AB;&#x8BBE;&#x7F6E;&#x4E3A;&#x7ED9;&#x51FA;&#x7684;&#x503C;&#x3002;&#xFF08;&#x5982;&#x679C;&#x7ED9;&#x51FA;&#x7684;&#x503C;&#x4E0D;&#x662F;&#x5BF9;&#x8C61;&#x4E5F;&#x4E0D;&#x662F;null&#xFF0C;&#x90A3;&#x4E48;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;&#x4E0D;&#x4F1A;&#x6539;&#x53D8;&#x3002;&#xFF09;</code></p>

<pre class="brush: js">var obj1 = {};
assert(Object.getPrototypeOf(obj1) === Object.prototype);

var obj2 = { __proto__: null };
assert(Object.getPrototypeOf(obj2) === null);

var protoObj = {};
var obj3 = { &quot;__proto__&quot;: protoObj };
assert(Object.getPrototypeOf(obj3) === protoObj);

var obj4 = { __proto__: &quot;not an object or null&quot; };
assert(Object.getPrototypeOf(obj4) === Object.prototype);
assert(!obj4.hasOwnProperty(&quot;__proto__&quot;));
</pre>

<p>&#x5728;&#x5BF9;&#x8C61;&#x5B57;&#x9762;&#x503C;&#x4E2D;&#xFF0C;&#x4EC5;&#x6709;&#x4E00;&#x6B21;&#x53D8;&#x66F4;&#x539F;&#x578B;&#x7684;&#x673A;&#x4F1A;&#xFF1B;&#x591A;&#x6B21;&#x53D8;&#x66F4;&#x539F;&#x578B;&#xFF0C;&#x4F1A;&#x88AB;&#x89C6;&#x4E3A;&#x8BED;&#x6CD5;&#x9519;&#x8BEF;&#x3002;</p>

<p>&#x4E0D;&#x4F7F;&#x7528;&#x5192;&#x53F7;&#x6807;&#x8BB0;&#x7684;&#x5C5E;&#x6027;&#x5B9A;&#x4E49;&#xFF0C;&#x4E0D;&#x4F1A;&#x53D8;&#x66F4;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;&#xFF1B;&#x800C;&#x662F;&#x548C;&#x5176;&#x4ED6;&#x5177;&#x6709;&#x4E0D;&#x540C;&#x540D;&#x5B57;&#x7684;&#x5C5E;&#x6027;&#x4E00;&#x6837;&#x662F;&#x666E;&#x901A;&#x5C5E;&#x6027;&#x5B9A;&#x4E49;&#x3002;</p>

<pre class="brush: js">var __proto__ = &quot;variable&quot;;

var obj1 = { __proto__ };
assert(Object.getPrototypeOf(obj1) === Object.prototype);
assert(obj1.hasOwnProperty(&quot;__proto__&quot;));
assert(obj1.__proto__ === &quot;variable&quot;);

var obj2 = { __proto__() { return &quot;hello&quot;; } };
assert(obj2.__proto__() === &quot;hello&quot;);

var obj3 = { [&quot;__prot&quot; + &quot;o__&quot;]: 17 };
assert(obj3.__proto__ === 17);
</pre>

<h2 id="&#x5BF9;&#x8C61;&#x5B57;&#x9762;&#x503C;&#x8BB0;&#x6CD5;&#x548C;JSON">&#x5BF9;&#x8C61;&#x5B57;&#x9762;&#x503C;&#x8BB0;&#x6CD5;&#x548C;JSON</h2>

<p>&#x5BF9;&#x8C61;&#x5B57;&#x9762;&#x503C;&#x8BB0;&#x6CD5;&#x548C;&#x548C;&#xA0;<strong>J</strong>ava<strong>S</strong>cript <strong>O</strong>bject <strong>N</strong>otation (<a href="/en-US/docs/Glossary/JSON">JSON</a>)&#x662F;&#x4E0D;&#x540C;&#x7684;&#x3002;&#x867D;&#x7136;&#x4ED6;&#x4EEC;&#x770B;&#x8D77;&#x6765;&#x76F8;&#x4F3C;&#xFF0C;&#x4E0D;&#x540C;&#x70B9;&#x6709;&#xFF1A;</p>

<ul>
 <li>JSON &#x53EA;&#x5141;&#x8BB8;<code>&quot;property&quot;: value</code> syntax&#x5F62;&#x5F0F;&#x7684;&#x5C5E;&#x6027;&#x5B9A;&#x4E49;&#x3002;&#x5C5E;&#x6027;&#x540D;&#x5FC5;&#x987B;&#x7528;&#x53CC;&#x5F15;&#x53F7;&#x62EC;&#x8D77;&#x6765;&#x3002;&#x4E14;&#x5C5E;&#x6027;&#x5B9A;&#x4E49;&#x4E0D;&#x5141;&#x8BB8;&#x4F7F;&#x7528;&#x7B80;&#x4FBF;&#x5199;&#x6CD5;&#x3002;</li>
 <li>JSON&#x4E2D;&#xFF0C;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x4EC5;&#x5141;&#x8BB8;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x6570;&#x5B57;&#xFF0C;&#x6570;&#x7EC4;&#xFF0C;true&#xFF0C;false&#xFF0C;&#x6216;&#x8005;&#x5176;&#x4ED6;JSON&#x5BF9;&#x8C61;&#x3002;&#xA0;</li>
 <li>JSON&#x4E2D;&#xFF0C;&#x4E0D;&#x5141;&#x8BB8;&#x5C06;&#x503C;&#x8BBE;&#x7F6E;&#x4E3A;&#x51FD;&#x6570;&#x3002;</li>
 <li>&#xA0;<a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Date"><code>Date</code></a> &#x7B49;&#x5BF9;&#x8C61;&#xFF0C;&#x7ECF;<a title="JSON.parse() &#x65B9;&#x6CD5;&#x5C06;&#x4E00;&#x4E2A;&#x7B26;&#x5408;JSON&#x8BED;&#x6CD5;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x89E3;&#x6790;&#x6210;&#x4E00;&#x4E2A;&#x5BF9;&#x5E94;&#x7C7B;&#x578B;&#x7684;&#x503C;&#x6216;&#x5BF9;&#x8C61;&#x3002;&#x5728;&#x89E3;&#x6790;&#x8FC7;&#x7A0B;&#x4E2D;&#xFF0C;&#x8FD8;&#x53EF;&#x4EE5;&#x9009;&#x62E9;&#x6027;&#x7684;&#x4FEE;&#x6539;&#x67D0;&#x4E9B;&#x5C5E;&#x6027;&#x7684;&#x539F;&#x59CB;&#x89E3;&#x6790;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse"><code>JSON.parse()</code></a>&#x5904;&#x7406;&#x540E;&#xFF0C;&#x4F1A;&#x53D8;&#x6210;&#x5B57;&#x7B26;&#x4E32;&#x3002;</li>
 <li><a title="JSON.parse() &#x65B9;&#x6CD5;&#x5C06;&#x4E00;&#x4E2A;&#x7B26;&#x5408;JSON&#x8BED;&#x6CD5;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x89E3;&#x6790;&#x6210;&#x4E00;&#x4E2A;&#x5BF9;&#x5E94;&#x7C7B;&#x578B;&#x7684;&#x503C;&#x6216;&#x5BF9;&#x8C61;&#x3002;&#x5728;&#x89E3;&#x6790;&#x8FC7;&#x7A0B;&#x4E2D;&#xFF0C;&#x8FD8;&#x53EF;&#x4EE5;&#x9009;&#x62E9;&#x6027;&#x7684;&#x4FEE;&#x6539;&#x67D0;&#x4E9B;&#x5C5E;&#x6027;&#x7684;&#x539F;&#x59CB;&#x89E3;&#x6790;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse"><code>JSON.parse()</code></a> &#x4E0D;&#x4F1A;&#x5904;&#x7406;&#x8BA1;&#x7B97;&#x7684;&#x5C5E;&#x6027;&#x540D;&#xFF0C;&#x4F1A;&#x5F53;&#x505A;&#x9519;&#x8BEF;&#x629B;&#x51FA;&#x3002;</li>
</ul>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x5907;&#x6CE8;</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition.</td>
   <td>Standard</td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-11.1.5" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Object Initializer</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x589E;&#x52A0;<a href="/en-US/docs/Web/JavaScript/Reference/Functions/get">Getter</a> &#x548C; <a href="/en-US/docs/Web/JavaScript/Reference/Functions/set">setter</a>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-object-initializer" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Object Initializer</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x589E;&#x52A0;method/property &#x7B80;&#x5199;&#x65B9;&#x6CD5;&#x548C;&#x8BA1;&#x7B97;&#x7684;&#x5C5E;&#x6027;&#x540D;</td>
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
   <th>&#x7279;&#x6027;</th>
   <th>Chrome</th>
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>
    <p class="p1">1.0</p>
   </td>
   <td>1.0 (1.7 or earlier)</td>
   <td>1</td>
   <td>1</td>
   <td>1</td>
  </tr>
  <tr>
   <td>Computed property names</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><a title="Released on 2014-12-01." href="/en-US/Firefox/Releases/34">34</a> (34)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>7.1.3</td>
  </tr>
  <tr>
   <td>Shorthand property names</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><a title="Released on 2014-10-14." href="/en-US/Firefox/Releases/33">33</a> (33)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
  <tr>
   <td>Shorthand method names</td>
   <td>
    <p class="p1">42.0</p>
   </td>
   <td><a title="Released on 2014-12-01." href="/en-US/Firefox/Releases/34">34</a> (34)</td>
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
   <th>&#x7279;&#x6027;</th>
   <th>Android</th>
   <th>Android Webview</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
   <th>Chrome for Android</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>
    <p class="p1"><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></p>
   </td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>1.0 (1.0)</td>
   <td>1</td>
   <td>1</td>
   <td>1</td>
   <td>1.0</td>
  </tr>
  <tr>
   <td>Computed property names</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>34.0 (34)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
  <tr>
   <td>Shorthand property names</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>33.0 (33)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
  <tr>
   <td>Shorthand method names</td>
   <td>
    <p class="p1"><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></p>
   </td>
   <td>42.0</td>
   <td>34.0 (34)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>42.0</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x53C2;&#x89C1;">&#x53C2;&#x89C1;</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors">Property accessors</a></li>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Functions/get">get</a></code> / <code><a href="/en-US/docs/Web/JavaScript/Reference/Functions/set">set</a></code></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions">Method definitions</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Lexical_grammar">Lexical grammar</a></li>
</ul>
                  
                
              