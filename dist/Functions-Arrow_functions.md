
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section>&#xA0;</div>

<p>&#x7BAD;&#x5934;&#x51FD;&#x6570;&#x8868;&#x8FBE;&#x5F0F;&#x7684;&#x8BED;&#x6CD5;&#x6BD4;<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/function">&#x51FD;&#x6570;&#x8868;&#x8FBE;&#x5F0F;</a>&#x77ED;&#xFF0C;&#x5E76;&#x4E14;&#x4E0D;&#x7ED1;&#x5B9A;&#x81EA;&#x5DF1;&#x7684; <a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/this">this</a>&#xFF0C;<a href="/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments">arguments</a>&#xFF0C;<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/super">super</a>&#x6216;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/new.target">new.target</a>&#x3002;&#x6B64;&#x5916;&#xFF0C;&#x7BAD;&#x5934;&#x51FD;&#x6570;&#x603B;&#x662F;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/name">&#x533F;&#x540D;&#x7684;</a>&#x3002;&#x8FD9;&#x4E9B;&#x51FD;&#x6570;&#x8868;&#x8FBE;&#x5F0F;&#x6700;&#x9002;&#x5408;&#x975E;&#x65B9;&#x6CD5;&#x51FD;&#x6570;&#xFF0C;&#x5B83;&#x4EEC;&#x4E0D;&#x80FD;&#x7528;&#x4F5C;&#x6784;&#x9020;&#x51FD;&#x6570;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<h3 id="&#x57FA;&#x7840;&#x8BED;&#x6CD5;">&#x57FA;&#x7840;&#x8BED;&#x6CD5;</h3>

<pre class="syntaxbox"><strong>(</strong><em>param1</em>, <em>param2</em>, &#x2026;, <em>paramN</em><strong>) =&gt; {</strong> <em>statements</em> <strong>}</strong>
<strong>(</strong><em>param1</em>, <em>param2</em>, &#x2026;, <em>paramN</em><strong>) =&gt;</strong> <em>expression</em>
         // equivalent to:&#xA0; =&gt; { return expression; }

// &#x5982;&#x679C;&#x53EA;&#x6709;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#xFF0C;&#x5706;&#x62EC;&#x53F7;&#x662F;&#x53EF;&#x9009;&#x7684;:
<em>(singleParam)</em> <strong>=&gt; {</strong> <em>statements</em> <strong>}</strong>
<em>singleParam</em> <strong>=&gt;</strong> { <em>statements }</em>

// &#x65E0;&#x53C2;&#x6570;&#x7684;&#x51FD;&#x6570;&#x9700;&#x8981;&#x4F7F;&#x7528;&#x5706;&#x62EC;&#x53F7;:
<strong>() =&gt; {</strong> <em>statements</em> <strong>}</strong>
</pre>

<h3 id="&#x9AD8;&#x7EA7;&#x8BED;&#x6CD5;">&#x9AD8;&#x7EA7;&#x8BED;&#x6CD5;</h3>

<pre class="syntaxbox">// &#x8FD4;&#x56DE;&#x5BF9;&#x8C61;&#x5B57;&#x9762;&#x91CF;&#x65F6;&#x5E94;&#x5F53;&#x7528;&#x5706;&#x62EC;&#x53F7;&#x5C06;&#x5176;&#x5305;&#x8D77;&#x6765;:
<em>params</em> =&gt; ({<em>foo: bar</em>})

// &#x652F;&#x6301; <a href="/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters">Rest parameters</a> &#x548C; <a href="/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters">default parameters</a>:
(<em>param1</em>, <em>param2</em>, <strong>...rest</strong>) =&gt; { <em>statements</em> }
(<em>param1</em> <strong>= defaultValue1</strong>, <em>param2</em>, &#x2026;, paramN <strong>= defaultValueN</strong>) =&gt; { <em>statements</em> }

// <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">Destructuring</a> within the parameter list is also supported
var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) =&gt; a + b + c;
f();  // 6
</pre>

<p>&#x8BE6;&#x7EC6;&#x7684;&#x8BED;&#x6CD5;&#x4F8B;&#x5B50;&#x53EF;&#x4EE5;&#x53C2;&#x8003;&#xA0;<a href="http://wiki.ecmascript.org/doku.php?id=harmony:arrow_function_syntax" class="external" title="http://wiki.ecmascript.org/doku.php?id=harmony:arrow_function_syntax">&#x8FD9;&#x91CC;</a>&#x3002;</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x53E6;&#x89C1;&#xA0;<a href="https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/" class="external">&quot;ES6 In Depth: Arrow functions&quot; on hacks.mozilla.org</a>.</p>

<p>&#x7BAD;&#x5934;&#x51FD;&#x6570;&#x7684;&#x5F15;&#x5165;&#x6709;&#x4E24;&#x4E2A;&#x65B9;&#x9762;&#x7684;&#x5F71;&#x54CD;&#xFF1A;&#x4E00;&#x662F;&#x66F4;&#x7B80;&#x77ED;&#x7684;&#x51FD;&#x6570;&#x4E66;&#x5199;&#xFF0C;&#x4E8C;&#x662F;&#x5BF9;&#xA0;<code>this </code>&#x7684;&#x8BCD;&#x6CD5;&#x89E3;&#x6790;<code>&#x3002;</code></p>

<h3 id="&#x66F4;&#x77ED;&#x7684;&#x51FD;&#x6570;">&#x66F4;&#x77ED;&#x7684;&#x51FD;&#x6570;</h3>

<p>&#x5728;&#x4E00;&#x4E9B;&#x51FD;&#x6570;&#x5F0F;&#x7F16;&#x7A0B;&#x6A21;&#x5F0F;&#x91CC;&#xFF0C;&#x66F4;&#x77ED;&#x7684;&#x51FD;&#x6570;&#x4E66;&#x5199;&#x65B9;&#x5F0F;&#x5F88;&#x53D7;&#x6B22;&#x8FCE;&#x3002;&#x8BD5;&#x6BD4;&#x8F83;&#xFF1A;</p>

<pre class="brush: js">var a = [
  &quot;Hydrogen&quot;,
  &quot;Helium&quot;,
  &quot;Lithium&quot;,
  &quot;Beryl&#xAD;lium&quot;
];

var a2 = a.map(function(s){ return s.length });

var a3 = a.map( s =&gt; s.length );</pre>

<h3 id="&#x4E0D;&#x7ED1;&#x5B9A;_this"><code>&#x4E0D;&#x7ED1;&#x5B9A; this</code></h3>

<p>&#x5728;&#x7BAD;&#x5934;&#x51FD;&#x6570;&#x51FA;&#x73B0;&#x4E4B;&#x524D;&#xFF0C;&#x6BCF;&#x4E2A;&#x65B0;&#x5B9A;&#x4E49;&#x7684;&#x51FD;&#x6570;&#x90FD;&#x6709;&#x5176;&#x81EA;&#x5DF1;&#x7684;&#xA0;&#xA0;<code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this">this</a></code>&#xA0;&#x503C;&#xFF08;&#x4F8B;&#x5982;&#xFF0C;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684; this &#x6307;&#x5411;&#x4E86;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x5BF9;&#x8C61;&#xFF1B;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode">&#x4E25;&#x683C;&#x6A21;&#x5F0F;</a>&#x4E0B;&#x7684;&#x51FD;&#x6570;&#x7684; <code>this</code> &#x503C;&#x4E3A; <code>undefined</code>&#xFF1B;&#x5982;&#x679C;&#x51FD;&#x6570;&#x662F;&#x4F5C;&#x4E3A;&#x5BF9;&#x8C61;&#x7684;&#x65B9;&#x6CD5;&#x88AB;&#x8C03;&#x7528;&#x7684;&#xFF0C;&#x5219;&#x5176; this &#x6307;&#x5411;&#x4E86;&#x90A3;&#x4E2A;&#x8C03;&#x7528;&#x5B83;&#x7684;&#x5BF9;&#x8C61;&#xFF09;&#x3002;&#x5728;&#x9762;&#x5411;&#x5BF9;&#x8C61;&#x98CE;&#x683C;&#x7684;&#x7F16;&#x7A0B;&#x4E2D;&#xFF0C;&#x8FD9;&#x88AB;&#x8BC1;&#x660E;&#x662F;&#x975E;&#x5E38;&#x607C;&#x4EBA;&#x7684;&#x4E8B;&#x60C5;&#x3002;</p>

<pre class="brush: js">function Person() {
  // &#x6784;&#x9020;&#x51FD;&#x6570; Person() &#x5B9A;&#x4E49;&#x7684; `<code>this` &#x5C31;&#x662F;&#x65B0;&#x5B9E;&#x4F8B;&#x5BF9;&#x8C61;&#x81EA;&#x5DF1;</code>
&#xA0; this.age = 0;
&#xA0; setInterval(function growUp() {
&#xA0;   // &#x5728;&#x975E;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E0B;&#xFF0C;growUp() &#x51FD;&#x6570;&#x5B9A;&#x4E49;&#x4E86;&#x5176;&#x5185;&#x90E8;&#x7684; `this`
&#xA0;   // &#x4E3A;&#x5168;&#x5C40;&#x5BF9;&#x8C61;, &#x4E0D;&#x540C;&#x4E8E;&#x6784;&#x9020;&#x51FD;&#x6570;Person()&#x7684;&#x5B9A;&#x4E49;&#x7684; `this`
 &#xA0;  this.age++; 
&#xA0; }, 1000);
}

var p = new Person();</pre>

<p>&#x5728; ECMAScript 3/5 &#x4E2D;&#xFF0C;&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x65B0;&#x589E;&#x4E00;&#x4E2A;&#x53D8;&#x91CF;&#x6765;&#x6307;&#x5411;&#x671F;&#x671B;&#x7684;&#xA0;<code>this </code>&#x5BF9;&#x8C61;&#xFF0C;&#x7136;&#x540E;&#x5C06;&#x8BE5;&#x53D8;&#x91CF;&#x653E;&#x5230;&#x95ED;&#x5305;&#x4E2D;&#x6765;&#x89E3;&#x51B3;&#x3002;</p>

<pre class="brush: js">function Person() {
  var self = this; // &#x4E5F;&#x6709;&#x4EBA;&#x9009;&#x62E9;&#x4F7F;&#x7528; `that` &#x800C;&#x975E; `self`. 
                   // &#x53EA;&#x8981;&#x4FDD;&#x8BC1;&#x4E00;&#x81F4;&#x5C31;&#x597D;.
  self.age = 0;

  setInterval(function growUp() {
    // &#x56DE;&#x8C03;&#x91CC;&#x9762;&#x7684; `self` &#x53D8;&#x91CF;&#x5C31;&#x6307;&#x5411;&#x4E86;&#x671F;&#x671B;&#x7684;&#x90A3;&#x4E2A;&#x5BF9;&#x8C61;&#x4E86;
    self.age++;
  }, 1000);
}</pre>

<p>&#x9664;&#x6B64;&#x4E4B;&#x5916;&#xFF0C;&#x8FD8;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind">bind &#x51FD;&#x6570;</a>&#xFF0C;&#x628A;&#x671F;&#x671B;&#x7684;&#xA0;<code>this </code>&#x503C;&#x4F20;&#x9012;&#x7ED9;&#xA0;<code>growUp()</code>&#xA0;&#x51FD;&#x6570;&#x3002;</p>

<p>&#x7BAD;&#x5934;&#x51FD;&#x6570;&#x5219;&#x4F1A;&#x6355;&#x83B7;&#x5176;&#x6240;&#x5728;&#x4E0A;&#x4E0B;&#x6587;&#x7684; &#xA0;<code>this</code> &#x503C;&#xFF0C;&#x4F5C;&#x4E3A;&#x81EA;&#x5DF1;&#x7684; <code>this</code> &#x503C;&#xFF0C;&#x56E0;&#x6B64;&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x5C06;&#x5982;&#x671F;&#x8FD0;&#x884C;&#x3002;</p>

<pre class="brush: js">function Person(){
  this.age = 0;

  setInterval(() =&gt; {
    this.age++; // |this| &#x6B63;&#x786E;&#x5730;&#x6307;&#x5411;&#x4E86; person &#x5BF9;&#x8C61;
  }, 1000);
}

var p = new Person();</pre>

<h4 id="&#x4E0E;_strict_mode_&#x7684;&#x5173;&#x7CFB;">&#x4E0E; strict mode &#x7684;&#x5173;&#x7CFB;</h4>

<p>&#x8003;&#x8651;&#x5230;&#xA0;<code>this</code>&#xA0;&#x662F;&#x8BCD;&#x6CD5;&#x5C42;&#x9762;&#x4E0A;&#x7684;&#xFF0C;<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode">&#x4E25;&#x683C;&#x6A21;&#x5F0F;</a>&#x4E2D;&#x4E0E;&#xA0;<code>this</code>&#xA0;&#x76F8;&#x5173;&#x7684;&#x89C4;&#x5219;&#x90FD;&#x5C06;&#x88AB;&#x5FFD;&#x7565;&#x3002;</p>

<pre class="brush: js">var f = () =&gt; {&apos;use strict&apos;; return this};
f() === window; // &#x6216;&#x5168;&#x5C40;&#x5BF9;&#x8C61;</pre>

<p>&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x7684;&#x5176;&#x4ED6;&#x89C4;&#x5219;&#x4F9D;&#x7136;&#x4E0D;&#x53D8;.</p>

<h4 id="&#x4F7F;&#x7528;_call_&#x6216;_apply_&#x8C03;&#x7528;">&#x4F7F;&#x7528; call &#x6216;&#xA0;apply &#x8C03;&#x7528;</h4>

<p>&#x7531;&#x4E8E;&#xA0;<code>this</code><em>&#xA0;</em>&#x5DF2;&#x7ECF;&#x5728;&#x8BCD;&#x6CD5;&#x5C42;&#x9762;&#x5B8C;&#x6210;&#x4E86;&#x7ED1;&#x5B9A;&#xFF0C;&#x901A;&#x8FC7;&#xA0;<code>call()</code><em>&#xA0;&#x6216;</em>&#xA0;<code>apply()</code>&#xA0;&#x65B9;&#x6CD5;&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x65F6;&#xFF0C;&#x53EA;&#x662F;&#x4F20;&#x5165;&#x4E86;&#x53C2;&#x6570;&#x800C;&#x5DF2;&#xFF0C;&#x5BF9;&#xA0;<code>this</code>&#xA0;&#x5E76;&#x6CA1;&#x6709;&#x4EC0;&#x4E48;&#x5F71;&#x54CD;&#xFF1A;</p>

<pre class="brush: js">var adder = {
  base : 1,
    
  add : function(a) {
    var f = v =&gt; v + this.base;
    return f(a);
  },

  addThruCall: function(a) {
    var f = v =&gt; v + this.base;
    var b = {
      base : 2
    };
            
    return f.call(b, a);
  }
};

console.log(adder.add(1));         // &#x8F93;&#x51FA; 2
console.log(adder.addThruCall(1)); // &#x4ECD;&#x7136;&#x8F93;&#x51FA; 2&#xFF08;&#x800C;&#x4E0D;&#x662F;3 &#x2014;&#x2014;&#x8BD1;&#x8005;&#x6CE8;&#xFF09;</pre>

<h3 id="&#x4E0D;&#x7ED1;&#x5B9A;_arguments"><code>&#x4E0D;&#x7ED1;&#x5B9A; arguments</code></h3>

<p>&#x7BAD;&#x5934;&#x51FD;&#x6570;&#x4E0D;&#x4F1A;&#x5728;&#x5176;&#x5185;&#x90E8;&#x66B4;&#x9732;&#x51FA;&#xA0;&#xA0;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments"><code>arguments</code></a>&#xA0;&#x5BF9;&#x8C61;&#xFF1A;&#xA0;<code>arguments.length</code>,&#xA0;<code>arguments[0]</code>,&#xA0;<code>arguments[1]</code> &#x7B49;&#x7B49;&#xFF0C;&#x90FD;&#x4E0D;&#x4F1A;&#x6307;&#x5411;&#x7BAD;&#x5934;&#x51FD;&#x6570;&#x7684; arguments&#xFF0C;&#x800C;&#x662F;&#x6307;&#x5411;&#x4E86;&#x7BAD;&#x5934;&#x51FD;&#x6570;&#x6240;&#x5728;&#x4F5C;&#x7528;&#x57DF;&#x7684;&#x4E00;&#x4E2A;&#x540D;&#x4E3A; arguments &#x7684;&#x503C;&#xFF08;&#x5982;&#x679C;&#x6709;&#x7684;&#x8BDD;&#xFF0C;&#x5426;&#x5219;&#xFF0C;&#x5C31;&#x662F; undefined&#x3002;&#x2014;&#x2014;&#x8BD1;&#x8005;&#x6CE8;&#xFF09;&#x3002;</p>

<pre class="brush: js">var arguments = 42;
var arr = () =&gt; arguments;

arr(); // 42

function foo() {
  var f = () =&gt; arguments[0]; // foo&apos;s implicit arguments binding
  return f(2);
}

foo(1); // 1</pre>

<p>&#x7BAD;&#x5934;&#x51FD;&#x6570;&#x6CA1;&#x6709;&#x81EA;&#x5DF1;&#x7684;&#xA0;<code>arguments</code>&#xA0;&#x5BF9;&#x8C61;&#xFF0C;&#x4E0D;&#x8FC7;&#x5728;&#x5927;&#x591A;&#x6570;&#x60C5;&#x5F62;&#x4E0B;&#xFF0C;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters">rest&#x53C2;&#x6570;</a>&#x53EF;&#x4EE5;&#x7ED9;&#x51FA;&#x4E00;&#x4E2A;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#xFF1A;</p>

<pre class="brush: js">function foo() { 
  var f = (...args) =&gt; args[0]; 
  return f(2); 
}

foo(1); // 2</pre>

<h3 id="&#x50CF;&#x65B9;&#x6CD5;&#x4E00;&#x6837;&#x4F7F;&#x7528;&#x7BAD;&#x5934;&#x51FD;&#x6570;">&#x50CF;&#x65B9;&#x6CD5;&#x4E00;&#x6837;&#x4F7F;&#x7528;&#x7BAD;&#x5934;&#x51FD;&#x6570;</h3>

<p>&#x5982;&#x4E0A;&#x6240;&#x8FF0;, &#x7BAD;&#x5934;&#x51FD;&#x6570;&#x8868;&#x8FBE;&#x5F0F;&#x5BF9;&#x6CA1;&#x6709;&#x65B9;&#x6CD5;&#x540D;&#x7684;&#x51FD;&#x6570;&#x662F;&#x6700;&#x5408;&#x9002;&#x7684;.&#x8BA9;&#x6211;&#x4EEC;&#x770B;&#x770B;&#x5F53;&#x6211;&#x4EEC;&#x8BD5;&#x7740;&#x628A;&#x5B83;&#x4EEC;&#x4F5C;&#x4E3A;&#x65B9;&#x6CD5;&#x65F6;&#x53D1;&#x751F;&#x4E86;&#x4EC0;&#x4E48;.</p>

<pre class="brush: js">&apos;use strict&apos;;
var obj = {
  i: 10,
  b: () =&gt; console.log(this.i, this),
  c: function() {
    console.log( this.i, this)
  }
}
obj.b(); // prints undefined, Window
obj.c(); // prints 10, Object {...}
</pre>

<p>&#x7BAD;&#x5934;&#x51FD;&#x6570;&#x6CA1;&#x6709;&#x5B9A;&#x4E49;this&#x7ED1;&#x5B9A;&#x3002; &#x53E6;&#x4E00;&#x4E2A;&#x6D89;&#x53CA;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" title="Object.defineProperty() &#x65B9;&#x6CD5;&#x4F1A;&#x76F4;&#x63A5;&#x5728;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4E0A;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x65B0;&#x5C5E;&#x6027;&#xFF0C;&#x6216;&#x8005;&#x4FEE;&#x6539;&#x4E00;&#x4E2A;&#x5DF2;&#x7ECF;&#x5B58;&#x5728;&#x7684;&#x5C5E;&#x6027;&#xFF0C; &#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x3002;"><code>Object.defineProperty()</code></a>:&#x7684;&#x793A;&#x4F8B;&#xFF1A;</p>

<pre class="brush: js">&apos;use strict&apos;;
var obj = {
  a: 10
};

Object.defineProperty(obj, &quot;b&quot;, {
  get: () =&gt; {
    console.log(this.a, typeof this.a, this);
    return this.a+10; // represents global object &apos;Window&apos;, therefore &apos;this.a&apos; returns &apos;undefined&apos;
  }
});</pre>

<h3 id="&#x4F7F;&#x7528;_new_&#x64CD;&#x4F5C;&#x7B26;">&#x4F7F;&#x7528;&#xA0;<code>new</code>&#xA0;&#x64CD;&#x4F5C;&#x7B26;</h3>

<p>&#x7BAD;&#x5934;&#x51FD;&#x6570;&#x4E0D;&#x80FD;&#x7528;&#x4F5C;&#x6784;&#x9020;&#x5668;&#xFF0C;&#x548C; new &#x4E00;&#x8D77;&#x7528;&#x5C31;&#x4F1A;&#x629B;&#x51FA;&#x9519;&#x8BEF;&#x3002;</p>

<h3 id="&#x4F7F;&#x7528;_yield_&#x5173;&#x952E;&#x5B57;">&#x4F7F;&#x7528;&#xA0;<code>yield</code>&#xA0;&#x5173;&#x952E;&#x5B57;</h3>

<p>&#xA0;<code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield">yield</a></code>&#xA0;&#x5173;&#x952E;&#x5B57;&#x901A;&#x5E38;&#x4E0D;&#x80FD;&#x5728;&#x7BAD;&#x5934;&#x51FD;&#x6570;&#x4E2D;&#x4F7F;&#x7528;&#xFF08;except when permitted within functions further nested within it&#xFF09;&#x3002;&#x56E0;&#x6B64;&#xFF0C;&#x7BAD;&#x5934;&#x51FD;&#x6570;&#x4E0D;&#x80FD;&#x7528;&#x4F5C;Generator&#x51FD;&#x6570;&#x3002;</p>

<h2 id="&#x8FD4;&#x56DE;&#x5BF9;&#x8C61;&#x5B57;&#x9762;&#x91CF;">&#x8FD4;&#x56DE;&#x5BF9;&#x8C61;&#x5B57;&#x9762;&#x91CF;</h2>

<p>&#x8BF7;&#x7262;&#x8BB0;&#xFF0C;&#x7528;&#xA0;<code>params =&gt; {object:literal}&#xA0;</code>&#x8FD9;&#x79CD;&#x7B80;&#x5355;&#x7684;&#x8BED;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5B57;&#x9762;&#x91CF;&#x662F;&#x884C;&#x4E0D;&#x901A;&#x7684;&#xFF1A;</p>

<pre class="brush: js">var func = () =&gt; {  foo: 1  };
// Calling func() returns undefined!

var func = () =&gt; {  foo: function() {}  };
// SyntaxError: function statement requires a name</pre>

<p>&#x8FD9;&#x662F;&#x56E0;&#x4E3A;&#x82B1;&#x62EC;&#x53F7;&#xFF08;&#x5373;&#xA0;<code>{}</code> &#xFF09;&#x91CC;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x88AB;&#x89E3;&#x6790;&#x4E3A;&#x58F0;&#x660E;&#x5E8F;&#x5217;&#x4E86;&#xFF08;&#x4F8B;&#x5982;&#xFF0C;&#xA0;<code>foo</code>&#xA0;&#x88AB;&#x8BA4;&#x4E3A;&#x662F;&#x4E00;&#x4E2A; label, &#x800C;&#x975E;&#x5BF9;&#x8C61;&#x5B57;&#x9762;&#x91CF;&#x91CC;&#x7684;&#x952E;&#xFF09;&#x3002;</p>

<p>&#x6240;&#x4EE5;&#xFF0C;&#x8BB0;&#x5F97;&#x7528;&#x5706;&#x62EC;&#x53F7;&#x628A;&#x5BF9;&#x8C61;&#x5B57;&#x9762;&#x91CF;&#x5305;&#x8D77;&#x6765;&#xFF1A;</p>

<pre class="brush: js"><code>var func = () =&gt; ({ foo: 1 });</code></pre>

<h2 id="&#x6362;&#x884C;"><code>&#x6362;&#x884C;</code></h2>

<p>&#x7BAD;&#x5934;&#x51FD;&#x6570;&#x5728;&#x53C2;&#x6570;&#x548C;&#x7BAD;&#x5934;&#x4E4B;&#x95F4;&#x4E0D;&#x80FD;&#x6362;&#x884C;&#x54E6;</p>

<pre class="brush: js"><code>var func = ()
           =&gt; 1; </code><code>// SyntaxError: expected expression, got &apos;=&gt;&apos;</code></pre>

<h2 id="&#x89E3;&#x6790;&#x987A;&#x5E8F;">&#x89E3;&#x6790;&#x987A;&#x5E8F;</h2>

<p>&#x5728;&#x7BAD;&#x5934;&#x51FD;&#x6570;&#x4E2D;&#x7684;&#x7BAD;&#x5934;&#x4E0D;&#x662F;&#x64CD;&#x4F5C;&#x7B26;(&#x6216;&#x8005;&#x8FD0;&#x7B97;&#x7B26;,&#x5C31;&#x50CF;&apos;+ -&apos;&#x90A3;&#x4E9B;), &#x4F46;&#x662F; &#x7BAD;&#x5934;&#x51FD;&#x6570;&#x6709;&#x7279;&#x6B8A;&#x7684;&#x89E3;&#x6790;&#x89C4;&#x5219;&#x5C31;&#x662F;:&#x76F8;&#x6BD4;&#x666E;&#x901A;&#x7684;&#x51FD;&#x6570;, &#x968F;&#x7740;&#x64CD;&#x4F5C;&#x7B26;&#x4F18;&#x5148;&#x7EA7;&#x4E0D;&#x540C;&#x4EA4;&#x4E92;&#x4E5F;&#x4E0D;&#x540C;(&#x5EFA;&#x8BAE;&#x770B;&#x82F1;&#x6587;&#x7248;)</p>

<pre><code>let callback;

callback = callback || function() {}; // ok
callback = callback || () =&gt; {};      // SyntaxError: invalid arrow-function arguments
callback = callback || (() =&gt; {});    // ok</code></pre>

<h3 id="sect1">&#xA0;</h3>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<pre class="brush: js"><span class="co1">// &#x4E00;&#x4E2A;&#x7A7A;&#x7BAD;&#x5934;&#x51FD;&#x6570;,&#x8FD4;&#x56DE; undefined</span>
let empty = () =&gt; {};

(() =&gt; &quot;foobar&quot;)() // &#x8FD4;&#x56DE; &quot;foobar&quot; 

var simple = a =&gt; a &gt; 15 ? 15 : a; 
simple(16); // 15
simple(10); // 10

let max = (a, b) =&gt; a &gt; b ? a : b;

// Easy array filtering, mapping, ...

var arr = [5, 6, 13, 0, 1, 18, 23];
var sum = arr.reduce((a, b) =&gt; a + b);  // 66
var even = arr.filter(v =&gt; v % 2 == 0); // [6, 0, 18]
var double = arr.map(v =&gt; v * 2);       // [10, 12, 26, 0, 2, 36, 46]

<code>// &#x66F4;&#x591A;&#x7B80;&#x660E;&#x7684;promise&#x94FE;
promise.then(a =&gt; {
  // ...
}).then(b =&gt; {
   // ...
});</code></pre>

<p>&#xA0;</p>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-arrow-function-definitions" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Arrow Function Definitions</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-arrow-function-definitions" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Arrow Function Definitions</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 name="Browser_Compatibility" id="Browser_Compatibility">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
   <th>Edge</th>
   <th>IE</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>45.0</td>
   <td><a href="/en-US/Firefox/Releases/22" title="Released on 2013-06-25.">22.0</a> (22.0)</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>
    <p><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></p>
   </td>
   <td>32</td>
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
   <th>Android Webview</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
   <th>Chrome for Android</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>45.0</td>
   <td>22.0 (22.0)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>45.0</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="sect2">&#xA0;</h2>

<h2 id="&#x706B;&#x72D0;&#x89C4;&#x8303;&#x6CE8;&#x610F;&#x4E8B;&#x9879;">&#x706B;&#x72D0;&#x89C4;&#x8303;&#x6CE8;&#x610F;&#x4E8B;&#x9879;</h2>

<ul>
 <li>The initial implementation of arrow functions in Firefox made them automatically strict. This has been changed as of&#xA0;<a href="https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/24" title="/en-US/docs/Mozilla/Firefox/Releases/24">Firefox 24</a>. The use of&#xA0;<code>&quot;use strict&quot;;</code>&#xA0;is now required.</li>
 <li>Arrow functions are semantically different from the non-standard <a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Expression_Closures" title="&#x8868;&#x8FBE;&#x5F0F;&#x95ED;&#x5305;&#x662F;&#x5B9A;&#x4E49;&#x7B80;&#x5355;&#x51FD;&#x6570;&#x7684;&#x4E00;&#x79CD;&#x4FBF;&#x6377;&#x65B9;&#x5F0F;&#x3002;">expression closures</a> added in&#xA0;<a href="https://developer.mozilla.org/en-US/Firefox/Releases/3">Firefox 3</a>&#xA0;(details:&#xA0;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/1.8">JavaScript 1.8</a>), for <a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Expression_Closures" title="&#x8868;&#x8FBE;&#x5F0F;&#x95ED;&#x5305;&#x662F;&#x5B9A;&#x4E49;&#x7B80;&#x5355;&#x51FD;&#x6570;&#x7684;&#x4E00;&#x79CD;&#x4FBF;&#x6377;&#x65B9;&#x5F0F;&#x3002;">expression closures</a> do not bind<code>this</code>&#xA0;lexically.</li>
 <li>Prior to&#xA0;<a href="https://developer.mozilla.org/en-US/Firefox/Releases/39">Firefox 39</a>, a line terminator (<code>\n</code>) was incorrectly allowed after arrow function arguments. This has been fixed to conform to the ES6 specification and code like&#xA0;<code>() \n =&gt; {}</code>&#xA0;will now throw a <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError" title="SyntaxError&#xA0;&#x5BF9;&#x8C61;&#x4EE3;&#x8868;&#x5C1D;&#x8BD5;&#x89E3;&#x6790;&#x8BED;&#x6CD5;&#x4E0A;&#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x4EE3;&#x7801;&#x7684;&#x9519;&#x8BEF;&#x3002;"><code>SyntaxError</code></a> in this and later versions.</li>
</ul>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/" class="external">&quot;ES6 In Depth: Arrow functions&quot; on hacks.mozilla.org</a></li>
</ul>

<p>&#xA0;</p>
                  
                
              