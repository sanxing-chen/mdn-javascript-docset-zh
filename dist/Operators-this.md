
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>&#x4E0E;&#x5176;&#x4ED6;&#x8BED;&#x8A00;&#x76F8;&#x6BD4;&#xFF0C;<strong>&#x51FD;&#x6570;&#x7684; this &#x5173;&#x952E;&#x5B57;</strong>&#x5728;JavaScript&#x4E2D;&#x7684;&#x884C;&#x4E3A;&#x7565;&#x6709;&#x4E0D;&#x540C;&#x3002;&#x5B83;&#x5728;<a href="/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode" class="new">&#x4E25;&#x683C;&#x6A21;&#x5F0F;</a>&#x548C;&#x975E;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E4B;&#x95F4;&#x4E5F;&#x6709;&#x4E00;&#x4E9B;&#x533A;&#x522B;&#x3002;</p>

<p>&#x5728;&#x7EDD;&#x5927;&#x591A;&#x6570;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x51FD;&#x6570;&#x7684;&#x8C03;&#x7528;&#x65B9;&#x5F0F;&#x51B3;&#x5B9A;&#x4E86;this&#x7684;&#x503C;&#x3002;this&#x4E0D;&#x80FD;&#x5728;&#x6267;&#x884C;&#x671F;&#x95F4;&#x88AB;&#x8D4B;&#x503C;&#xFF0C;&#x5728;&#x6BCF;&#x6B21;&#x51FD;&#x6570;&#x88AB;&#x8C03;&#x7528;&#x65F6;this&#x7684;&#x503C;&#x4E5F;&#x53EF;&#x80FD;&#x4F1A;&#x4E0D;&#x540C;&#x3002;ES5&#x5F15;&#x5165;&#x4E86;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind">bind</a>&#x65B9;&#x6CD5;&#x6765;&#x8BBE;&#x7F6E;&#x51FD;&#x6570;&#x7684;this&#x503C;&#xFF0C;&#x800C;&#x4E0D;&#x7528;&#x8003;&#x8651;&#x51FD;&#x6570;&#x5982;&#x4F55;&#x88AB;&#x8C03;&#x7528;&#x7684;&#x3002;</p>

<h2 id="&#x5168;&#x5C40;&#x4E0A;&#x4E0B;&#x6587;">&#x5168;&#x5C40;&#x4E0A;&#x4E0B;&#x6587;</h2>

<p>&#x5728;&#x5168;&#x5C40;&#x8FD0;&#x884C;&#x4E0A;&#x4E0B;&#x6587;&#x4E2D;&#xFF08;&#x5728;&#x4EFB;&#x4F55;&#x51FD;&#x6570;&#x4F53;&#x5916;&#x90E8;&#xFF09;&#xFF0C;this&#x6307;&#x4EE3;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#xFF0C;&#x65E0;&#x8BBA;&#x662F;&#x5426;&#x5728;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E0B;&#x3002;</p>

<pre class="brush:js">console.log(this.document === document); // true

// &#x5728;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#xFF0C;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x4E3A; window &#x5BF9;&#x8C61;&#xFF1A;
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37
</pre>

<h2 id="&#x51FD;&#x6570;&#x4E0A;&#x4E0B;&#x6587;">&#x51FD;&#x6570;&#x4E0A;&#x4E0B;&#x6587;</h2>

<p>&#x5728;&#x51FD;&#x6570;&#x5185;&#x90E8;&#xFF0C;this&#x7684;&#x503C;&#x53D6;&#x51B3;&#x4E8E;&#x51FD;&#x6570;&#x662F;&#x5982;&#x4F55;&#x8C03;&#x7528;&#x7684;&#x3002;</p>

<h3 id="&#x76F4;&#x63A5;&#x8C03;&#x7528;">&#x76F4;&#x63A5;&#x8C03;&#x7528;</h3>

<p>&#x56E0;&#x4E3A;&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x4E0D;&#x662F;&#x5728;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E0B;&#x6267;&#x884C;&#xFF0C;&#x5E76;&#x4E14;this&#x7684;&#x503C;&#x4E0D;&#x4F1A;&#x5728;&#x51FD;&#x6570;&#x6267;&#x884C;&#x65F6;&#x88AB;&#x8BBE;&#x7F6E;&#xFF0C;&#x6B64;&#x65F6;&#x7684;this&#x7684;&#x503C;&#x4F1A;&#x9ED8;&#x8BA4;&#x8BBE;&#x7F6E;&#x4E3A;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x3002;</p>

<pre class="brush:js">function f1(){
  return this;
}

f1() === window; // true
</pre>

<p>&#x7136;&#x800C;&#xFF0C;&#x5728;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E0B;&#xFF0C;this&#x5C06;&#x4FDD;&#x6301;&#x4ED6;&#x8FDB;&#x5165;&#x6267;&#x884C;&#x73AF;&#x5883;&#x65F6;&#x7684;&#x503C;&#xFF0C;&#x6240;&#x4EE5;&#x4E0B;&#x9762;&#x7684;this&#x5C06;&#x4F1A;&#x9ED8;&#x8BA4;&#x4E3A;undefined</p>

<pre class="brush:js">function f2(){
  &quot;use strict&quot;; // &#x8FD9;&#x91CC;&#x662F;&#x4E25;&#x683C;&#x6A21;&#x5F0F;
  return this;
}

f2() === undefined; // true
</pre>

<p>&#x5728;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E0B;&#xFF0C;&#x5982;&#x679C;this&#x672A;&#x88AB;&#x6267;&#x884C;&#x7684;&#x4E0A;&#x4E0B;&#x6587;&#x73AF;&#x5883;&#x5B9A;&#x4E49;&#xFF0C;&#x90A3;&#x4E48;&#x5B83;&#x5C06;&#x4F1A;&#x9ED8;&#x8BA4;&#x4E3A;undefined&#x3002;</p>

<div class="note">&#x5728;&#x7B2C;&#x4E8C;&#x4E2A;&#x4F8B;&#x5B50;&#x4E2D;&#xFF0C;this&#x5E94;&#x8BE5;&#x662F;undefined&#x3002;&#x56E0;&#x4E3A;f2&#x4E0D;&#x662F;&#x4F5C;&#x4E3A;&#x65B9;&#x6CD5;&#x8C03;&#x7528;&#x7684;&#xFF08;&#x89C1;&#x4E0B;&#x6587;&#xFF09;&#x3002;&#x8FD9;&#x4E2A;&#x529F;&#x80FD;&#x5E76;&#x672A;&#x5728;&#x6240;&#x6709;&#x7B2C;&#x4E00;&#x6B21;&#x5F00;&#x59CB;&#x652F;&#x6301;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x7684;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#x90FD;&#x5F97;&#x5230;&#x4E86;&#x5B9E;&#x73B0;&#x3002;&#x56E0;&#x6B64;&#x6709;&#x4E9B;&#x6D4F;&#x89C8;&#x5668;&#x8FD4;&#x56DE;&#x4E86;&#x9519;&#x8BEF;&#x7684;&#x7ED3;&#x679C; &#xFF1A;window &#x5BF9;&#x8C61;&#x3002;</div>

<h3 id="&#x5BF9;&#x8C61;&#x65B9;&#x6CD5;&#x4E2D;&#x7684;_this">&#x5BF9;&#x8C61;&#x65B9;&#x6CD5;&#x4E2D;&#x7684;&#xA0;this</h3>

<p>&#x5F53;&#x4EE5;&#x5BF9;&#x8C61;&#x91CC;&#x7684;&#x65B9;&#x6CD5;&#x7684;&#x65B9;&#x5F0F;&#x8C03;&#x7528;&#x51FD;&#x6570;&#x65F6;&#xFF0C;&#x5B83;&#x4EEC;&#x7684; this &#x662F;&#x8C03;&#x7528;&#x8BE5;&#x51FD;&#x6570;&#x7684;&#x5BF9;&#x8C61;.</p>

<p>&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x4E2D;&#xFF0C;&#x5F53; <code>o.f()</code> &#x88AB;&#x8C03;&#x7528;&#x65F6;&#xFF0C;&#x51FD;&#x6570;&#x5185;&#x7684;this&#x5C06;&#x7ED1;&#x5B9A;&#x5230;o&#x5BF9;&#x8C61;&#x3002;</p>

<pre class="brush:js">var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};

console.log(o.f()); // logs 37
</pre>

<p>&#x6CE8;&#x610F;&#xFF0C;&#x5728;&#x4F55;&#x5904;&#x6216;&#x8005;&#x5982;&#x4F55;&#x5B9A;&#x4E49;&#x8C03;&#x7528;&#x51FD;&#x6570;&#x5B8C;&#x5168;&#x4E0D;&#x4F1A;&#x5F71;&#x54CD;&#x5230;this&#x7684;&#x884C;&#x4E3A;&#x3002;&#x5728;&#x4E0A;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x4E2D;&#xFF0C;&#x6211;&#x4EEC;&#x5728;&#x5B9A;&#x4E49;o&#x7684;&#x65F6;&#x5019;&#x4E3A;&#x5176;&#x6210;&#x5458;f&#x5B9A;&#x4E49;&#x4E86;&#x4E00;&#x4E2A;&#x533F;&#x540D;&#x51FD;&#x6570;&#x3002;&#x4F46;&#x662F;&#xFF0C;&#x6211;&#x4EEC;&#x4E5F;&#x53EF;&#x4EE5;&#x9996;&#x5148;&#x5B9A;&#x4E49;&#x51FD;&#x6570;&#x7136;&#x540E;&#x518D;&#x5C06;&#x5176;&#x9644;&#x5C5E;&#x5230;<code>o.f</code>&#x3002;&#x8FD9;&#x6837;&#x505A;this&#x7684;&#x884C;&#x4E3A;&#x4E5F;&#x4E00;&#x81F4;&#xFF1A;</p>

<pre class="brush:js">var o = {prop: 37};

function independent() {
  return this.prop;
}

o.f = independent;

console.log(o.f()); // logs 37
</pre>

<p>&#x8FD9;&#x8BF4;&#x660E;this&#x7684;&#x503C;&#x53EA;&#x4E0E;&#x51FD;&#x6570; f &#x4F5C;&#x4E3A; o &#x7684;&#x6210;&#x5458;&#x88AB;&#x8C03;&#x7528;&#x6709;&#x5173;&#x7CFB;&#x3002;</p>

<p>&#x7C7B;&#x4F3C;&#x7684;&#xFF0C;this &#x7684;&#x7ED1;&#x5B9A;&#x53EA;&#x53D7;&#x6700;&#x9760;&#x8FD1;&#x7684;&#x6210;&#x5458;&#x5F15;&#x7528;&#x7684;&#x5F71;&#x54CD;&#x3002;&#x5728;&#x4E0B;&#x9762;&#x7684;&#x8FD9;&#x4E2A;&#x4F8B;&#x5B50;&#x4E2D;&#xFF0C;&#x6211;&#x4EEC;&#x628A;&#x4E00;&#x4E2A;&#x65B9;&#x6CD5;g&#x5F53;&#x4F5C;&#x5BF9;&#x8C61;<code>o.b</code>&#x7684;&#x51FD;&#x6570;&#x8C03;&#x7528;&#x3002;&#x5728;&#x8FD9;&#x6B21;&#x6267;&#x884C;&#x671F;&#x95F4;&#xFF0C;&#x51FD;&#x6570;&#x4E2D;&#x7684;this&#x5C06;&#x6307;&#x5411;<code>o.b</code>&#x3002;&#x4E8B;&#x5B9E;&#x4E0A;&#xFF0C;&#x8FD9;&#x4E0E;&#x5BF9;&#x8C61;&#x672C;&#x8EAB;&#x7684;&#x6210;&#x5458;&#x6CA1;&#x6709;&#x591A;&#x5927;&#x5173;&#x7CFB;&#xFF0C;&#x6700;&#x9760;&#x8FD1;&#x7684;&#x5F15;&#x7528;&#x624D;&#x662F;&#x6700;&#x91CD;&#x8981;&#x7684;&#x3002;</p>

<pre class="brush:js">o.b = {
&#xA0; g: independent,
&#xA0; prop: 42
};
console.log(o.b.g()); // logs 42
</pre>

<h4 id="&#x539F;&#x578B;&#x94FE;&#x4E2D;&#x7684;_this">&#x539F;&#x578B;&#x94FE;&#x4E2D;&#x7684;&#xA0;<strong>this</strong></h4>

<p>&#x76F8;&#x540C;&#x7684;&#x6982;&#x5FF5;&#x5728;&#x5B9A;&#x4E49;&#x5728;&#x539F;&#x578B;&#x94FE;&#x4E2D;&#x7684;&#x65B9;&#x6CD5;&#x4E5F;&#x662F;&#x4E00;&#x81F4;&#x7684;&#x3002;&#x5982;&#x679C;&#x8BE5;&#x65B9;&#x6CD5;&#x5B58;&#x5728;&#x4E8E;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#xFF0C;&#x90A3;&#x4E48;this&#x6307;&#x5411;&#x7684;&#x662F;&#x8C03;&#x7528;&#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x7684;&#x5BF9;&#x8C61;&#xFF0C;&#x8868;&#x73B0;&#x5F97;&#x597D;&#x50CF;&#x662F;&#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x5C31;&#x5B58;&#x5728;&#x4E8E;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x4E0A;&#x4E00;&#x6837;&#x3002;</p>

<pre class="brush:js">var o = {
&#xA0; f : function(){ 
&#xA0;   return this.a + this.b; 
&#xA0; }
};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f()); // 5
</pre>

<p>&#x5728;&#x8FD9;&#x4E2A;&#x4F8B;&#x5B50;&#x4E2D;&#xFF0C;&#x5BF9;&#x8C61;p&#x6CA1;&#x6709;&#x5C5E;&#x4E8E;&#x5B83;&#x81EA;&#x5DF1;&#x7684;f&#x5C5E;&#x6027;&#xFF0C;&#x5B83;&#x7684;f&#x5C5E;&#x6027;&#x7EE7;&#x627F;&#x81EA;&#x5B83;&#x7684;&#x539F;&#x578B;&#x3002;&#x4F46;&#x662F;&#x8FD9;&#x5BF9;&#x4E8E;&#x6700;&#x7EC8;&#x5728;o&#x4E2D;&#x627E;&#x5230;f&#x5C5E;&#x6027;&#x7684;&#x67E5;&#x627E;&#x8FC7;&#x7A0B;&#x6765;&#x8BF4;&#x6CA1;&#x6709;&#x5173;&#x7CFB;&#xFF1B;&#x67E5;&#x627E;&#x8FC7;&#x7A0B;&#x9996;&#x5148;&#x4ECE;p.f&#x7684;&#x5F15;&#x7528;&#x5F00;&#x59CB;&#xFF0C;&#x6240;&#x4EE5;&#x51FD;&#x6570;&#x4E2D;&#x7684;this&#x6307;&#x5411;p&#x3002;&#x4E5F;&#x5C31;&#x662F;&#x8BF4;&#xFF0C;&#x56E0;&#x4E3A;f&#x662F;&#x4F5C;&#x4E3A;p&#x7684;&#x65B9;&#x6CD5;&#x8C03;&#x7528;&#x7684;&#xFF0C;&#x6240;&#x4EE5;&#x5B83;&#x7684;this&#x6307;&#x5411;&#x4E86;p&#x3002;&#x8FD9;&#x662F;JavaScript&#x7684;&#x539F;&#x578B;&#x7EE7;&#x627F;&#x4E2D;&#x7684;&#x4E00;&#x4E2A;&#x6709;&#x8DA3;&#x7684;&#x7279;&#x6027;&#x3002;</p>

<h4 id="getter_&#x4E0E;_setter_&#x4E2D;&#x7684;_this">&#xA0;getter &#x4E0E; setter &#x4E2D;&#x7684; this</h4>

<p>&#x518D;&#x6B21;&#xFF0C;&#x76F8;&#x540C;&#x7684;&#x6982;&#x5FF5;&#x4E5F;&#x9002;&#x7528;&#x65F6;&#x7684;&#x51FD;&#x6570;&#x4F5C;&#x4E3A;&#x4E00;&#x4E2A; getter &#x6216;&#x8005;&#xA0;&#x4E00;&#x4E2A;setter&#x8C03;&#x7528;&#x3002;&#x4F5C;&#x4E3A;getter&#x6216;setter&#x51FD;&#x6570;&#x90FD;&#x4F1A;&#x7ED1;&#x5B9A; this &#x5230;&#x4ECE;&#x8BBE;&#x7F6E;&#x5C5E;&#x6027;&#x6216;&#x5F97;&#x5230;&#x5C5E;&#x6027;&#x7684;&#x90A3;&#x4E2A;&#x5BF9;&#x8C61;&#x3002;</p>

<pre class="brush:js">function modulus(){
  return Math.sqrt(this.re * this.re + this.im * this.im);
}

var o = {
  re: 1,
  im: -1,
  get phase(){
    return Math.atan2(this.im, this.re);
  }
};

Object.defineProperty(o, &apos;modulus&apos;, {
&#xA0; get: modulus, enumerable:true, configurable:true});

console.log(o.phase, o.modulus); // logs -0.78 1.4142
</pre>

<h3 id="&#x6784;&#x9020;&#x51FD;&#x6570;&#x4E2D;&#x7684;_this">&#x6784;&#x9020;&#x51FD;&#x6570;&#x4E2D;&#x7684;&#xA0;this</h3>

<p>&#x5F53;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x88AB;&#x4F5C;&#x4E3A;&#x4E00;&#x4E2A;&#x6784;&#x9020;&#x51FD;&#x6570;&#x6765;&#x4F7F;&#x7528;&#xFF08;&#x4F7F;&#x7528;new&#x5173;&#x952E;&#x5B57;&#xFF09;&#xFF0C;&#x5B83;&#x7684;this&#x4E0E;&#x5373;&#x5C06;&#x88AB;&#x521B;&#x5EFA;&#x7684;&#x65B0;&#x5BF9;&#x8C61;&#x7ED1;&#x5B9A;&#x3002;</p>

<p><span style="line-height: 22.007999420166px;">&#x6CE8;&#x610F;&#xFF1A;&#x5F53;&#x6784;&#x9020;&#x5668;&#x8FD4;&#x56DE;&#x7684;&#x9ED8;&#x8BA4;&#x503C;&#x662F;&#x4E00;&#x4E2A;this&#x5F15;&#x7528;&#x7684;&#x5BF9;&#x8C61;&#x65F6;&#xFF0C;&#x53EF;&#x4EE5;&#x624B;&#x52A8;&#x8BBE;&#x7F6E;&#x8FD4;&#x56DE;&#x5176;&#x4ED6;&#x7684;&#x5BF9;&#x8C61;&#xFF0C;&#x5982;&#x679C;&#x8FD4;&#x56DE;&#x503C;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#xFF0C;&#x8FD4;&#x56DE;this&#x3002;</span></p>

<pre class="brush: js">/*
 * Constructors work like this:
 *
 * function MyConstructor(){
 *   // Actual function body code goes here.  
 *   // Create properties on |this| as
 *   // desired by assigning to them.  E.g.,
 *   this.fum = &quot;nom&quot;;
 *   // et cetera...
 *
 *   // If the function has a return statement that
 *   // returns an object, that object will be the
 *   // result of the |new| expression.  Otherwise,
 *   // the result of the expression is the object
 *   // currently bound to |this|
 *   // (i.e., the common case most usually seen).
 * }
 */

function C(){
  this.a = 37;
}

var o = new C();
console.log(o.a); // logs 37


function C2(){
  this.a = 37;
  return {a:38};
}

o = new C2();
console.log(o.a); // logs 38
</pre>

<p>&#x5728;&#x6700;&#x540E;&#x7684;&#x4F8B;&#x5B50;&#x4E2D;&#xFF08;C2&#xFF09;&#xFF0C;&#x56E0;&#x4E3A;&#x5728;&#x8C03;&#x7528;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x8FC7;&#x7A0B;&#x4E2D;&#xFF0C;&#x624B;&#x52A8;&#x7684;&#x8BBE;&#x7F6E;&#x4E86;&#x8FD4;&#x56DE;&#x5BF9;&#x8C61;&#xFF0C;&#x4E0E;this&#x7ED1;&#x5B9A;&#x7684;&#x9ED8;&#x8BA4;&#x5BF9;&#x8C61;&#x88AB;&#x53D6;&#x6D88;&#xFF08;&#x672C;&#x8D28;&#x4E0A;&#x8FD9;&#x4F7F;&#x5F97;&#x8BED;&#x53E5;&#x201C;<code>this.a = 37;</code>&#x201D;&#x6210;&#x4E86;&#x201C;&#x50F5;&#x5C38;&#x201D;&#x4EE3;&#x7801;&#xFF0C;&#x5B9E;&#x9645;&#x4E0A;&#x5E76;&#x4E0D;&#x662F;&#x771F;&#x6B63;&#x7684;&#x201C;&#x50F5;&#x5C38;&#x201D;&#xFF0C;&#x8FD9;&#x6761;&#x8BED;&#x53E5;&#x6267;&#x884C;&#x4E86;&#x4F46;&#x662F;&#x5BF9;&#x4E8E;&#x5916;&#x90E8;&#x6CA1;&#x6709;&#x4EFB;&#x4F55;&#x5F71;&#x54CD;&#xFF0C;&#x56E0;&#x6B64;&#x5B8C;&#x5168;&#x53EF;&#x4EE5;&#x5FFD;&#x7565;&#x5B83;&#xFF09;&#x3002;</p>

<h3 id="call_&#x548C;_apply"><code>call</code> &#x548C; <code>apply</code></h3>

<p>&#x5F53;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x7684;&#x51FD;&#x6570;&#x4F53;&#x4E2D;&#x4F7F;&#x7528;&#x4E86;this&#x5173;&#x952E;&#x5B57;&#x65F6;&#xFF0C;&#x901A;&#x8FC7;&#x6240;&#x6709;&#x51FD;&#x6570;&#x90FD;&#x4ECE;Function&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;&#x4E2D;&#x7EE7;&#x627F;&#x7684;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call">call()</a>&#x65B9;&#x6CD5;&#x548C;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply">apply()</a>&#x65B9;&#x6CD5;&#x8C03;&#x7528;&#x65F6;&#xFF0C;&#x5B83;&#x7684;&#x503C;&#x53EF;&#x4EE5;&#x7ED1;&#x5B9A;&#x5230;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x5BF9;&#x8C61;&#x4E0A;&#x3002;</p>

<pre class="brush:js">function add(c, d){
  return this.a + this.b + c + d;
}

var o = {a:1, b:3};

// The first parameter is the object to use as &apos;this&apos;, subsequent parameters are passed as 
// arguments in the function call
add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16

// The first parameter is the object to use as &apos;this&apos;, the second is an array whose
// members are used as the arguments in the function call
add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34
</pre>

<p>&#x4F7F;&#x7528;&#xA0;<code>call</code>&#xA0;&#x548C;&#xA0;<code>apply &#x51FD;&#x6570;&#x7684;&#x65F6;&#x5019;&#x8981;&#x6CE8;&#x610F;&#xFF0C;</code>&#x5982;&#x679C;&#x4F20;&#x9012;&#x7684; this&#xA0;&#x503C;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#xFF0C;JavaScript&#xA0;&#x5C06;&#x4F1A;&#x5C1D;&#x8BD5;&#x4F7F;&#x7528;&#x5185;&#x90E8; ToObject &#x64CD;&#x4F5C;&#x5C06;&#x5176;&#x8F6C;&#x6362;&#x4E3A;&#x5BF9;&#x8C61;&#x3002;&#x56E0;&#x6B64;&#xFF0C;&#x5982;&#x679C;&#x4F20;&#x9012;&#x7684;&#x503C;&#x662F;&#x4E00;&#x4E2A;&#x539F;&#x59CB;&#x503C;&#x6BD4;&#x5982;&#xA0;<code>7</code> &#x6216;<code> &apos;foo&apos; </code>&#xFF0C;&#x90A3;&#x4E48;&#x5C31;&#x4F1A;&#x4F7F;&#x7528;&#x76F8;&#x5173;&#x6784;&#x9020;&#x51FD;&#x6570;&#x5C06;&#x5B83;&#x8F6C;&#x6362;&#x4E3A;&#x5BF9;&#x8C61;&#xFF0C;&#x6240;&#x4EE5;&#x539F;&#x59CB;&#x503C;&#xA0;<code>7</code>&#xA0;&#x901A;&#x8FC7;<code>new Number(7)</code>&#x88AB;&#x8F6C;&#x6362;&#x4E3A;&#x5BF9;&#x8C61;&#xFF0C;&#x800C;&#x5B57;&#x7B26;&#x4E32;<code>&apos;foo&apos;&#x4F7F;&#x7528;&#xA0;new&#xA0;String(&apos;foo&apos;) </code>&#x8F6C;&#x5316;&#x4E3A;&#x5BF9;&#x8C61;&#xFF0C;&#x4F8B;&#x5982;&#xFF1A;</p>

<pre class="brush: js">function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7); // [object Number]
</pre>

<h3 id="bind_&#x65B9;&#x6CD5;"><code>bind</code>&#xA0;&#x65B9;&#x6CD5;</h3>

<p>ECMAScript 5 &#x5F15;&#x5165;&#x4E86; <code><a title="en-US/docs/JavaScript/Reference/Global Objects/Function/bind" href="/en-US/docs/JavaScript/Reference/Global_Objects/Function/bind">Function.prototype.bind</a></code>&#x3002;&#x8C03;&#x7528;<code>f.bind(someObject)&#x4F1A;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x4E0E;f&#x5177;&#x6709;&#x76F8;&#x540C;&#x51FD;&#x6570;&#x4F53;&#x548C;&#x4F5C;&#x7528;&#x57DF;&#x7684;&#x51FD;&#x6570;&#xFF0C;&#x4F46;&#x662F;&#x5728;&#x8FD9;&#x4E2A;&#x65B0;&#x51FD;&#x6570;&#x4E2D;&#xFF0C;this&#x5C06;&#x6C38;&#x4E45;&#x5730;&#x88AB;&#x7ED1;&#x5B9A;&#x5230;&#x4E86;bind&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#xFF0C;&#x65E0;&#x8BBA;&#x8FD9;&#x4E2A;&#x51FD;&#x6570;&#x662F;&#x5982;&#x4F55;&#x88AB;&#x8C03;&#x7528;&#x7684;&#x3002;</code></p>

<pre class="brush:js">function f(){
  return this.a;
}

var g = f.bind({a:&quot;azerty&quot;});
console.log(g()); // azerty

var o = {a:37, f:f, g:g};
console.log(o.f(), o.g()); // 37, azerty
</pre>

<h3 id="DOM&#x4E8B;&#x4EF6;&#x5904;&#x7406;&#x51FD;&#x6570;&#x4E2D;&#x7684;_this">DOM&#x4E8B;&#x4EF6;&#x5904;&#x7406;&#x51FD;&#x6570;&#x4E2D;&#x7684;&#xA0;this</h3>

<p>&#x5F53;&#x51FD;&#x6570;&#x88AB;&#x7528;&#x4F5C;&#x4E8B;&#x4EF6;&#x5904;&#x7406;&#x51FD;&#x6570;&#x65F6;&#xFF0C;&#x5B83;&#x7684;this&#x6307;&#x5411;&#x89E6;&#x53D1;&#x4E8B;&#x4EF6;&#x7684;&#x5143;&#x7D20;&#xFF08;&#x4E00;&#x4E9B;&#x6D4F;&#x89C8;&#x5668;&#x5728;&#x52A8;&#x6001;&#x6DFB;&#x52A0;&#x76D1;&#x542C;&#x5668;&#x65F6;&#x4E0D;&#x9075;&#x5B88;&#x8FD9;&#x4E2A;&#x7EA6;&#x5B9A;&#xFF0C;&#x9664;&#x975E;&#x4F7F;&#x7528;addEventListener &#x8FD9;&#x53E5;&#x4E0D;&#x592A;&#x786E;&#x5B9A;&#x7FFB;&#x8BD1;&#x7684;&#x662F;&#x5426;&#x6B63;&#x786E;&#xFF09;&#x3002;</p>

<pre class="brush:js">// &#x88AB;&#x8C03;&#x7528;&#x65F6;&#xFF0C;&#x5C06;&#x5173;&#x8054;&#x7684;&#x5143;&#x7D20;&#x53D8;&#x6210;&#x84DD;&#x8272;
function bluify(e){
  console.log(this === e.currentTarget); // &#x603B;&#x662F; true

  // &#x5F53; currentTarget &#x548C; target &#x662F;&#x540C;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x662F;&#x4E3A; true
  console.log(this === e.target);        
  this.style.backgroundColor = &apos;#A5D9F3&apos;;
}

// &#x83B7;&#x53D6;&#x6587;&#x6863;&#x4E2D;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x7684;&#x5217;&#x8868;
var elements = document.getElementsByTagName(&apos;*&apos;);

// &#x5C06;bluify&#x4F5C;&#x4E3A;&#x5143;&#x7D20;&#x7684;&#x70B9;&#x51FB;&#x76D1;&#x542C;&#x51FD;&#x6570;&#xFF0C;&#x5F53;&#x5143;&#x7D20;&#x88AB;&#x70B9;&#x51FB;&#x65F6;&#xFF0C;&#x5C31;&#x4F1A;&#x53D8;&#x6210;&#x84DD;&#x8272;
for(var i=0 ; i&lt;elements.length ; i++){
  elements[i].addEventListener(&apos;click&apos;, bluify, false);
}</pre>

<h3 id="&#x5185;&#x8054;&#x4E8B;&#x4EF6;&#x5904;&#x7406;&#x51FD;&#x6570;&#x4E2D;&#x7684;_this">&#x5185;&#x8054;&#x4E8B;&#x4EF6;&#x5904;&#x7406;&#x51FD;&#x6570;&#x4E2D;&#x7684; this</h3>

<p>&#x5F53;&#x4EE3;&#x7801;&#x88AB;&#x5185;&#x8054;&#x5904;&#x7406;&#x51FD;&#x6570;&#x8C03;&#x7528;&#x65F6;&#xFF0C;&#x5B83;&#x7684;this&#x6307;&#x5411;&#x76D1;&#x542C;&#x5668;&#x6240;&#x5728;&#x7684;DOM&#x5143;&#x7D20;&#xFF1A;</p>

<pre class="brush: html">&lt;button onclick=&quot;alert(this.tagName.toLowerCase());&quot;&gt;
&#xA0; Show this
&lt;/button&gt;
</pre>

<p>&#x4E0A;&#x9762;&#x7684;alert&#x4F1A;&#x663E;&#x793A;button&#x3002;&#x6CE8;&#x610F;&#x53EA;&#x6709;&#x5916;&#x5C42;&#x4EE3;&#x7801;&#x4E2D;&#x7684;this&#x662F;&#x8FD9;&#x6837;&#x8BBE;&#x7F6E;&#x7684;&#xFF1A;</p>

<pre class="brush: html">&lt;button onclick=&quot;alert((function(){return this})());&quot;&gt;
  Show inner this
&lt;/button&gt;
</pre>

<p>&#x5728;&#x8FD9;&#x79CD;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x6CA1;&#x6709;&#x8BBE;&#x7F6E;&#x5185;&#x90E8;&#x51FD;&#x6570;&#x7684;&#xA0;<code>this</code>&#xFF0C;&#x6240;&#x4EE5;&#x5B83;&#x6307;&#x5411;&#xA0;<code>global/window&#xA0;</code>&#x5BF9;&#x8C61;&#xFF08;&#x5373;&#x975E;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E0B;&#x8C03;&#x7528;&#x7684;&#x51FD;&#x6570;&#x672A;&#x8BBE;&#x7F6E; this&#xA0;&#x65F6;&#x6307;&#x5411;&#x7684;&#x9ED8;&#x8BA4;&#x5BF9;&#x8C61;&#xFF09;&#x3002;</p>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class=" standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x8BF4;&#x660E;</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-this-keyword" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">The this keyword</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-11.1.1" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">The this keyword</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf#sec-11.1.1" class="external">ECMAScript 3rd Edition (ECMA-262)<br><small lang="zh-CN">The this keyword</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf#sec-11.1.1" class="external">ECMAScript 1st Edition (ECMA-262)<br><small lang="zh-CN">The this keyword</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;&#x3002;&#x5728; JavaScript 1.0&#x4E2D;&#x5B9E;&#x73B0;</td>
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
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode">Strict mode</a></li>
 <li><a href="http://bjorn.tipling.com/all-this" class="external">All this</a>&#xFF0C;&#x4E00;&#x7BC7;&#x5173;&#x4E8E; this &#x4E0D;&#x540C;&#x573A;&#x666F;&#xFF08;contexts&#xFF09;&#x4E0B;&#x7684;&#x6587;&#x7AE0;</li>
</ul>
                  
                
              