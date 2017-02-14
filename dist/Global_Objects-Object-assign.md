
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>Object.assign()</strong></code> &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x628A;&#x4EFB;&#x610F;&#x591A;&#x4E2A;&#x7684;<strong>&#x6E90;&#x5BF9;&#x8C61;</strong><strong>&#x81EA;&#x8EAB;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;</strong>&#x62F7;&#x8D1D;&#x7ED9;&#x76EE;&#x6807;&#x5BF9;&#x8C61;&#xFF0C;&#x7136;&#x540E;&#x8FD4;&#x56DE;&#x76EE;&#x6807;&#x5BF9;&#x8C61;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>Object.assign(<var>target</var>, ...<var>sources</var>)</code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>target</code></dt>
 <dd>&#x76EE;&#x6807;&#x5BF9;&#x8C61;&#x3002;</dd>
 <dt><code>sources</code></dt>
 <dd>&#x4EFB;&#x610F;&#x591A;&#x4E2A;&#x6E90;&#x5BF9;&#x8C61;&#x3002;</dd>
</dl>

<h3 name="Return_value" id="Return_value">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x76EE;&#x6807;&#x5BF9;&#x8C61;&#x4F1A;&#x88AB;&#x8FD4;&#x56DE;&#x3002;</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>Object.assign</code> &#x65B9;&#x6CD5;&#x53EA;&#x4F1A;&#x62F7;&#x8D1D;&#x6E90;&#x5BF9;&#x8C61;<strong>&#x81EA;&#x8EAB;&#x7684;</strong>&#x5E76;&#x4E14;<strong>&#x53EF;&#x679A;&#x4E3E;&#x7684;</strong>&#x5C5E;&#x6027;&#x5230;&#x76EE;&#x6807;&#x5BF9;&#x8C61;&#x8EAB;&#x4E0A;&#x3002;&#x8BE5;&#x65B9;&#x6CD5;&#x4F7F;&#x7528;&#x6E90;&#x5BF9;&#x8C61;&#x7684; [ [ Get ] ] &#x548C;&#x76EE;&#x6807;&#x5BF9;&#x8C61;&#x7684; [ [ Set ] ]&#xFF0C;&#x6240;&#x4EE5;&#x5B83;&#x4F1A;&#x8C03;&#x7528;&#x76F8;&#x5173; getter &#x548C; setter&#x3002;&#x56E0;&#x6B64;&#xFF0C;&#x5B83;&#x5206;&#x914D;&#x5C5E;&#x6027;&#x800C;&#x4E0D;&#x662F;&#x590D;&#x5236;&#x6216;&#x5B9A;&#x4E49;&#x65B0;&#x7684;&#x5C5E;&#x6027;&#x3002;&#x5982;&#x679C;&#x5408;&#x5E76;&#x6E90;&#x5305;&#x542B;&#x4E86; getter&#xFF0C;&#x90A3;&#x4E48;&#x8BE5;&#x65B9;&#x6CD5;&#x5C31;&#x4E0D;&#x9002;&#x5408;&#x5C06;&#x65B0;&#x5C5E;&#x6027;&#x5408;&#x5E76;&#x5230;&#x539F;&#x578B;&#x91CC;&#x3002;&#x5047;&#x5982;&#x662F;&#x62F7;&#x8D1D;&#x5C5E;&#x6027;&#x5B9A;&#x4E49;&#x5230;&#x539F;&#x578B;&#x91CC;&#xFF0C;&#x5305;&#x62EC;&#x5B83;&#x4EEC;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x6027;&#xFF0C;&#x90A3;&#x4E48;&#x5E94;&#x8BE5;&#x4F7F;&#x7528;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor" title="Object.getOwnPropertyDescriptor() &#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x4E0A;&#x4E00;&#x4E2A;&#x81EA;&#x6709;&#x5C5E;&#x6027;&#x5BF9;&#x5E94;&#x7684;&#x5C5E;&#x6027;&#x63CF;&#x8FF0;&#x7B26;&#x3002;&#xFF08;&#x81EA;&#x6709;&#x5C5E;&#x6027;&#x6307;&#x7684;&#x662F;&#x76F4;&#x63A5;&#x8D4B;&#x4E88;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x4ECE;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x8FDB;&#x884C;&#x67E5;&#x627E;&#x7684;&#x5C5E;&#x6027;&#xFF09;"><code>Object.getOwnPropertyDescriptor()</code></a> &#x548C;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" title="Object.defineProperty() &#x65B9;&#x6CD5;&#x4F1A;&#x76F4;&#x63A5;&#x5728;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4E0A;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x65B0;&#x5C5E;&#x6027;&#xFF0C;&#x6216;&#x8005;&#x4FEE;&#x6539;&#x4E00;&#x4E2A;&#x5DF2;&#x7ECF;&#x5B58;&#x5728;&#x7684;&#x5C5E;&#x6027;&#xFF0C; &#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x3002;"><code>Object.defineProperty()</code></a> &#x3002;</p>

<p><a href="/zh-CN/docs/Web/JavaScript/Reference/String" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>String</code></a>&#x7C7B;&#x578B;&#x548C; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol" title="Symbol &#x662F;&#x4E00;&#x79CD;&#x7279;&#x6B8A;&#x7684;&#x3001;&#x4E0D;&#x53EF;&#x53D8;&#x7684;&#x6570;&#x636E;&#x7C7B;&#x578B;&#xFF0C;&#x53EF;&#x4EE5;&#x4F5C;&#x4E3A;&#x5BF9;&#x8C61;&#x5C5E;&#x6027;&#x7684;&#x6807;&#x8BC6;&#x7B26;&#x4F7F;&#x7528;&#x3002;Symbol &#x5BF9;&#x8C61;&#x662F;&#x4E00;&#x4E2A; symbol primitive data type &#x7684;&#x9690;&#x5F0F;&#x5BF9;&#x8C61;&#x5305;&#x88C5;&#x5668;&#x3002;"><code>Symbol</code></a> &#x7C7B;&#x578B;&#x7684;&#x5C5E;&#x6027;&#x90FD;&#x4F1A;&#x88AB;&#x62F7;&#x8D1D;&#x3002;</p>

<p>&#x6CE8;&#x610F;&#xFF0C;&#x5728;&#x5C5E;&#x6027;&#x62F7;&#x8D1D;&#x8FC7;&#x7A0B;&#x4E2D;&#x53EF;&#x80FD;&#x4F1A;&#x4EA7;&#x751F;&#x5F02;&#x5E38;&#xFF0C;&#x6BD4;&#x5982;&#x76EE;&#x6807;&#x5BF9;&#x8C61;&#x7684;&#x67D0;&#x4E2A;&#x53EA;&#x8BFB;&#x5C5E;&#x6027;&#x548C;&#x6E90;&#x5BF9;&#x8C61;&#x7684;&#x67D0;&#x4E2A;&#x5C5E;&#x6027;&#x540C;&#x540D;&#xFF0C;&#x8FD9;&#x65F6;&#x8BE5;&#x65B9;&#x6CD5;&#x4F1A;&#x629B;&#x51FA;&#x4E00;&#x4E2A; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;"><code>TypeError</code></a> &#x5F02;&#x5E38;&#xFF0C;&#x62F7;&#x8D1D;&#x8FC7;&#x7A0B;&#x4E2D;&#x65AD;&#xFF0C;&#x5DF2;&#x7ECF;&#x62F7;&#x8D1D;&#x6210;&#x529F;&#x7684;&#x5C5E;&#x6027;&#x4E0D;&#x4F1A;&#x53D7;&#x5230;&#x5F71;&#x54CD;&#xFF0C;&#x8FD8;&#x672A;&#x62F7;&#x8D1D;&#x7684;&#x5C5E;&#x6027;&#x5C06;&#x4E0D;&#x4F1A;&#x518D;&#x88AB;&#x62F7;&#x8D1D;&#x3002;</p>

<p>&#x6CE8;&#x610F;&#xFF0C; <code>Object.assign</code> &#x4F1A;&#x8DF3;&#x8FC7;&#x90A3;&#x4E9B;&#x503C;&#x4E3A; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null" title="&#x503C;&#xA0;null&#xA0;&#x662F;&#x4E00;&#x4E2A; JavaScript &#x5B57;&#x9762;&#x91CF;&#xFF0C;&#x8868;&#x793A;&#x7A7A;&#x503C;&#xFF08;null or an &quot;empty&quot; value&#xFF09;&#xFF0C;&#x5373;&#x6CA1;&#x6709;&#x5BF9;&#x8C61;&#x88AB;&#x5448;&#x73B0;&#xFF08;no object value is present&#xFF09;&#x3002;&#x5B83;&#x662F; JavaScript &#x539F;&#x59CB;&#x503C; &#x4E4B;&#x4E00;&#x3002;"><code>null</code></a> &#x6216; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined" title="undefined&#x6709;&#x591A;&#x91CD;&#x89D2;&#x8272;,&#x901A;&#x5E38;&#x60C5;&#x51B5;&#x4E0B;,&#x6211;&#x4EEC;&#x6240;&#x8BF4;&#x7684;undefined&#x90FD;&#x6307;&#x7684;&#x662F;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&quot;undefined&quot;."><code>undefined</code></a> &#x7684;&#x6E90;&#x5BF9;&#x8C61;&#x3002;</p>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<h3 name="Example:_Cloning_an_object" id="Example:_Cloning_an_object">&#x590D;&#x5236;&#x4E00;&#x4E2A; object</h3>

<pre class="brush: js">var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
</pre>

<h3 name="Deep_Clone" id="Deep_Clone">&#x6DF1;&#x5EA6;&#x62F7;&#x8D1D;&#x95EE;&#x9898;</h3>

<p>&#x5047;&#x5982;&#x9700;&#x8981;&#x6DF1;&#x5EA6;&#x62F7;&#x8D1D;&#x7684;&#x8BDD;&#xFF0C;&#x4ECD;&#x65E7;&#x9700;&#x8981;&#x4F7F;&#x7528;&#x522B;&#x7684;&#x800C;&#x4E0D;&#x662F;&#x672C;&#x65B9;&#x6CD5;&#x3002;&#x56E0;&#x4E3A;&#xA0;<code>Object.assign() &#x62F7;&#x8D1D;&#x7684;&#x662F;&#x5728; source &#x91CC;&#x662F;</code>&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#x7684;&#x5F15;&#x7528;&#x800C;&#x4E0D;&#x662F;&#x5BF9;&#x8C61;&#x672C;&#x8EAB;&#x3002;</p>

<pre><code>function test() {
  let a = { b: {c:4} , d: { e: {f:1}} }
  let g = Object.assign({},a)
  let h = JSON.parse(JSON.stringify(a));
  console.log(g.d) // { e: { f: 1 } }
  g.d.e = 32
  console.log(&apos;g.d.e set to 32.&apos;) // g.d.e set to 32.
  console.log(g) // { b: { c: 4 }, d: { e: 32 } }
  console.log(a) // { b: { c: 4 }, d: { e: 32 } }
  console.log(h) // { b: { c: 4 }, d: { e: { f: 1 } } }
  h.d.e = 54
  console.log(&apos;h.d.e set to 54.&apos;) // h.d.e set to 54.
  console.log(g) // { b: { c: 4 }, d: { e: 32 } }
  console.log(a) // { b: { c: 4 }, d: { e: 32 } }
  console.log(h) // { b: { c: 4 }, d: { e: 54 } }
}
test();</code></pre>

<h3 name="Example:_Merging_objects" id="Example:_Merging_objects">&#x5408;&#x5E76;&#xA0;objects</h3>

<pre class="brush: js">var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, &#x6CE8;&#x610F;&#x76EE;&#x6807;&#x5BF9;&#x8C61;&#x81EA;&#x8EAB;&#x4E5F;&#x4F1A;&#x6539;&#x53D8;&#x3002;
</pre>

<h3 name="Example:_Symbol_properties" id="Example:_Symbol_properties">&#x62F7;&#x8D1D; symbol &#x7C7B;&#x578B;&#x7684;&#x5C5E;&#x6027;</h3>

<pre class="brush: js">var o1 = { a: 1 };
var o2 = { [Symbol(&quot;foo&quot;)]: 2 };

var obj = Object.assign({}, o1, o2);
console.log(obj); // { a: 1, [Symbol(&quot;foo&quot;)]: 2 }</pre>

<h3 name="Example:_Only_own_enumerable_properties" id="Example:_Only_own_enumerable_properties">&#x7EE7;&#x627F;&#x5C5E;&#x6027;&#x548C;&#x4E0D;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#x662F;&#x4E0D;&#x80FD;&#x62F7;&#x8D1D;&#x7684;</h3>

<pre class="brush: js">var obj = Object.create({foo: 1}, { // foo &#x662F;&#x4E2A;&#x7EE7;&#x627F;&#x5C5E;&#x6027;&#x3002;
    bar: {
        value: 2  // bar &#x662F;&#x4E2A;&#x4E0D;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#x3002;
    },
    baz: {
        value: 3,
        enumerable: true  // baz &#x662F;&#x4E2A;&#x81EA;&#x8EAB;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#x3002;
    }
});

var copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }
</pre>

<h3 name="Example:_Primitives" id="Example:_Primitives">&#x539F;&#x59CB;&#x7C7B;&#x578B;&#x4F1A;&#x88AB;&#x5305;&#x88C5;&#x4E3A; object</h3>

<pre class="brush: js">var v1 = &quot;abc&quot;;
var v2 = true;
var v3 = 10;
var v4 = Symbol(&quot;foo&quot;)

var obj = Object.assign({}, v1, null, v2, undefined, v3, v4); 
// &#x539F;&#x59CB;&#x7C7B;&#x578B;&#x4F1A;&#x88AB;&#x5305;&#x88C5;&#xFF0C;null &#x548C; undefined &#x4F1A;&#x88AB;&#x5FFD;&#x7565;&#x3002;
// &#x6CE8;&#x610F;&#xFF0C;&#x53EA;&#x6709;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x5305;&#x88C5;&#x5BF9;&#x8C61;&#x624D;&#x53EF;&#x80FD;&#x6709;&#x81EA;&#x8EAB;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#x3002;
console.log(obj); // { &quot;0&quot;: &quot;a&quot;, &quot;1&quot;: &quot;b&quot;, &quot;2&quot;: &quot;c&quot; }</pre>

<h3 name="Example:_Exceptions" id="Example:_Exceptions">&#x5F02;&#x5E38;&#x4F1A;&#x6253;&#x65AD;&#x63A5;&#x4E0B;&#x6765;&#x7684;&#x62F7;&#x8D1D;&#x4EFB;&#x52A1;</h3>

<pre class="brush: js">var target = Object.defineProperty({}, &quot;foo&quot;, {
    value: 1,
    writable: false
}); // target &#x7684; foo &#x5C5E;&#x6027;&#x662F;&#x4E2A;&#x53EA;&#x8BFB;&#x5C5E;&#x6027;&#x3002;

Object.assign(target, {bar: 2}, {foo2: 3, foo: 3, foo3: 3}, {baz: 4});
// TypeError: &quot;foo&quot; is read-only
// &#x6CE8;&#x610F;&#x8FD9;&#x4E2A;&#x5F02;&#x5E38;&#x662F;&#x5728;&#x62F7;&#x8D1D;&#x7B2C;&#x4E8C;&#x4E2A;&#x6E90;&#x5BF9;&#x8C61;&#x7684;&#x7B2C;&#x4E8C;&#x4E2A;&#x5C5E;&#x6027;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x3002;

console.log(target.bar);  // 2&#xFF0C;&#x8BF4;&#x660E;&#x7B2C;&#x4E00;&#x4E2A;&#x6E90;&#x5BF9;&#x8C61;&#x62F7;&#x8D1D;&#x6210;&#x529F;&#x4E86;&#x3002;
console.log(target.foo2); // 3&#xFF0C;&#x8BF4;&#x660E;&#x7B2C;&#x4E8C;&#x4E2A;&#x6E90;&#x5BF9;&#x8C61;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&#x4E5F;&#x62F7;&#x8D1D;&#x6210;&#x529F;&#x4E86;&#x3002;
console.log(target.foo);  // 1&#xFF0C;&#x53EA;&#x8BFB;&#x5C5E;&#x6027;&#x4E0D;&#x80FD;&#x88AB;&#x8986;&#x76D6;&#xFF0C;&#x6240;&#x4EE5;&#x7B2C;&#x4E8C;&#x4E2A;&#x6E90;&#x5BF9;&#x8C61;&#x7684;&#x7B2C;&#x4E8C;&#x4E2A;&#x5C5E;&#x6027;&#x62F7;&#x8D1D;&#x5931;&#x8D25;&#x4E86;&#x3002;
console.log(target.foo3); // undefined&#xFF0C;&#x5F02;&#x5E38;&#x4E4B;&#x540E; assign &#x65B9;&#x6CD5;&#x5C31;&#x9000;&#x51FA;&#x4E86;&#xFF0C;&#x7B2C;&#x4E09;&#x4E2A;&#x5C5E;&#x6027;&#x662F;&#x4E0D;&#x4F1A;&#x88AB;&#x62F7;&#x8D1D;&#x5230;&#x7684;&#x3002;
console.log(target.baz);  // undefined&#xFF0C;&#x7B2C;&#x4E09;&#x4E2A;&#x6E90;&#x5BF9;&#x8C61;&#x66F4;&#x662F;&#x4E0D;&#x4F1A;&#x88AB;&#x62F7;&#x8D1D;&#x5230;&#x7684;&#x3002;
</pre>

<h3 name="Example:_Copy_accessors" id="Example:_Copy_accessors">&#x62F7;&#x8D1D;&#x8BBF;&#x95EE;&#x5668;&#xFF08;accessor&#xFF09;</h3>

<pre class="brush: js">var obj = {
  foo: 1,
  get bar() {
    return 2;
  }
};

var copy = Object.assign({}, obj); 
// { foo: 1, bar: 2 }
// copy.bar&#x7684;&#x503C;&#x6765;&#x81EA;obj.bar&#x7684;getter&#x51FD;&#x6570;&#x7684;&#x8FD4;&#x56DE;&#x503C; 
console.log(copy); 

// &#x4E0B;&#x9762;&#x8FD9;&#x4E2A;&#x51FD;&#x6570;&#x4F1A;&#x62F7;&#x8D1D;&#x6240;&#x6709;&#x81EA;&#x6709;&#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x63CF;&#x8FF0;&#x7B26;
function completeAssign(target, ...sources) {
  sources.forEach(source =&gt; {
    let descriptors = Object.keys(source).reduce((descriptors, key) =&gt; {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {});

&#xA0;   // Object.assign &#x9ED8;&#x8BA4;&#x4E5F;&#x4F1A;&#x62F7;&#x8D1D;&#x53EF;&#x679A;&#x4E3E;&#x7684;Symbols
    Object.getOwnPropertySymbols(source).forEach(sym =&gt; {
      let descriptor = Object.getOwnPropertyDescriptor(source, sym);
      if (descriptor.enumerable) {
        descriptors[sym] = descriptor;
      }
    });
    Object.defineProperties(target, descriptors);
  });
  return target;
}

var copy = completeAssign({}, obj);
// { foo:1, get bar() { return 2 } }
console.log(copy);
</pre>

<h2 name="Polyfill" id="Polyfill">Polyfill</h2>

<p>&#x7531;&#x4E8E; ES5 &#x91CC;&#x538B;&#x6839;&#x5C31;&#x6CA1;&#x6709; symbol &#x8FD9;&#x79CD;&#x6570;&#x636E;&#x7C7B;&#x578B;&#xFF0C;&#x6240;&#x4EE5;&#x8FD9;&#x4E2A; <a href="/en-US/docs/Glossary/Polyfill" class="glossaryLink" title="polyfill: A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.">polyfill</a> &#x4E5F;&#x6CA1;&#x5FC5;&#x8981;&#x53BB;&#x652F;&#x6301; symbol &#x5C5E;&#x6027;&#xFF08;&#x610F;&#x601D;&#x5C31;&#x662F;&#x8BF4;&#xFF0C;&#x6709; symbol &#x7684;&#x73AF;&#x5883;&#x4E00;&#x5B9A;&#x6709;&#x539F;&#x751F;&#x7684; <code>Object.assign</code>&#xFF09;&#xFF1A;</p>

<pre class="brush: js">if (typeof Object.assign != &apos;function&apos;) {
  Object.assign = function(target) {
    &apos;use strict&apos;;
    if (target == null) {
      throw new TypeError(&apos;Cannot convert undefined or null to object&apos;);
    }

    target = Object(target);
    for (var index = 1; index &lt; arguments.length; index++) {
      var source = arguments[index];
      if (source != null) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  };
}</pre>

<h2 name="Specifications" id="Specifications">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x540D;&#x79F0;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x5907;&#x6CE8;</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-object.assign" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Object.assign</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-object.assign" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Object.assign</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 name="Browser_compatibility" id="Browser_compatibility">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
   <th>Edge</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>45</td>
   <td><a href="/en-US/Firefox/Releases/34" title="Released on 2014-12-01.">34</a> (34)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>32</td>
   <td>9</td>
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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>45</td>
   <td>34.0 (34)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties" title="Object.defineProperties() &#x65B9;&#x6CD5;&#x5728;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4E0A;&#x6DFB;&#x52A0;&#x6216;&#x4FEE;&#x6539;&#x4E00;&#x4E2A;&#x6216;&#x8005;&#x591A;&#x4E2A;&#x81EA;&#x6709;&#x5C5E;&#x6027;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x8BE5;&#x5BF9;&#x8C61;&#x3002;"><code>Object.defineProperties()</code></a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties">Enumerability and ownership of properties</a></li>
</ul>
                  
                
              