
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>var&#x58F0;&#x660E;&#x4E86;&#x4E00;&#x4E2A;&#x53D8;&#x91CF;&#xFF0C;&#x5E76;&#x4E14;&#x53EF;&#x4EE5;&#x540C;&#x65F6;&#x521D;&#x59CB;&#x5316;&#x8BE5;&#x53D8;&#x91CF;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">var <em>varname1 [</em>= <em>value1 [</em>, <em>varname2 [</em>, <em>varname3 ... [</em>, <em>varnameN]]]]</em>;</pre>

<dl>
 <dt><code>varnameN</code></dt>
 <dd>&#x53D8;&#x91CF;&#x540D;&#x3002;&#x53D8;&#x91CF;&#x540D;&#x53EF;&#x4EE5;&#x5B9A;&#x4E49;&#x4E3A;&#x4EFB;&#x4F55;&#x5408;&#x6CD5;&#x6807;&#x8BC6;&#x7B26;&#x3002;</dd>
</dl>

<dl>
 <dt><code>valueN</code></dt>
 <dd>&#x53D8;&#x91CF;&#x7684;&#x521D;&#x59CB;&#x5316;&#x503C;&#x3002;&#x8BE5;&#x503C;&#x53EF;&#x4EE5;&#x4E3A;&#x4EFB;&#x4F55;&#x5408;&#x6CD5;&#x8868;&#x8FBE;&#x5F0F;&#x3002;</dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x53D8;&#x91CF;&#x58F0;&#x660E;&#x65E0;&#x8BBA;&#x51FA;&#x73B0;&#x5728;&#x4EE3;&#x7801;&#x7684;&#x4EFB;&#x4F55;&#x4F4D;&#x7F6E;&#xFF0C;&#x90FD;&#x4F1A;&#x5728;&#x4EFB;&#x4F55;&#x4EE3;&#x7801;&#x6267;&#x884C;&#x4E4B;&#x524D;&#x5904;&#x7406;&#x3002;&#x4F7F;&#x7528;var&#x8BED;&#x53E5;&#x58F0;&#x660E;&#x7684;&#x53D8;&#x91CF;&#x7684;&#x4F5C;&#x7528;&#x57DF;&#x662F;&#x5F53;&#x524D;&#x6267;&#x884C;&#x4F4D;&#x7F6E;&#x7684;&#x4E0A;&#x4E0B;&#x6587;&#xFF1A;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x7684;&#x5185;&#x90E8;&#xFF08;&#x58F0;&#x660E;&#x5728;&#x51FD;&#x6570;&#x5185;&#xFF09;&#x6216;&#x8005;&#x5168;&#x5C40;&#xFF08;&#x58F0;&#x660E;&#x5728;&#x51FD;&#x6570;&#x5916;&#xFF09;&#x3002;</p>

<p>&#x7ED9;&#x4E00;&#x4E2A;&#x975E;&#x58F0;&#x660E;&#x53D8;&#x91CF;&#x8D4B;&#x503C;&#x4F1A;&#x9690;&#x5F0F;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5168;&#x5C40;&#x53D8;&#x91CF;&#xFF08;&#x5168;&#x5C40;object&#x7684;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&#xFF09;&#x3002;&#x58F0;&#x660E;&#x53D8;&#x91CF;&#xFF08;Declared Variable&#xFF09;&#x548C;&#x975E;&#x58F0;&#x660E;&#x53D8;&#x91CF;&#xFF08;Undeclared Variable&#xFF09;&#x7684;&#x533A;&#x522B;&#x662F;&#xFF1A;</p>

<p>1. &#x58F0;&#x660E;&#x53D8;&#x91CF;&#x7684;&#x4F5C;&#x7528;&#x57DF;&#x9650;&#x5236;&#x5728;&#x5176;&#x58F0;&#x660E;&#x4F4D;&#x7F6E;&#x7684;&#x4E0A;&#x4E0B;&#x6587;&#x4E2D;&#xFF0C;&#x800C;&#x975E;&#x58F0;&#x660E;&#x53D8;&#x91CF;&#x603B;&#x662F;&#x5168;&#x5C40;&#x7684;&#x3002;</p>

<pre class="brush: js">function x() {
  y = 1;   // &#x5728;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#xFF08;strict mode&#xFF09;&#x4E0B;&#x4F1A;&#x629B;&#x51FA;ReferenceError&#x5F02;&#x5E38;&#x3002;
  var z = 2;
}

x();

console.log(y); // &#x6253;&#x5370;&quot;1&quot; &#x3002;
console.log(z); // &#x629B;&#x51FA;ReferenceError: z&#x672A;&#x5728;x&#x5916;&#x90E8;&#x58F0;&#x660E;&#x3002;
</pre>

<p>2. &#x58F0;&#x660E;&#x53D8;&#x91CF;&#x5728;&#x4EFB;&#x4F55;&#x4EE3;&#x7801;&#x6267;&#x884C;&#x524D;&#x521B;&#x5EFA;&#xFF0C;&#x800C;&#x975E;&#x58F0;&#x660E;&#x53D8;&#x91CF;&#x53EA;&#x6709;&#x5728;&#x6267;&#x884C;&#x8D4B;&#x503C;&#x64CD;&#x4F5C;&#x7684;&#x65F6;&#x5019;&#x624D;&#x4F1A;&#x88AB;&#x521B;&#x5EFA;&#x3002;</p>

<pre class="brush: js">console.log(a);                // &#x629B;&#x51FA;ReferenceError&#x3002;
console.log(&apos;still going...&apos;); // &#x6C38;&#x4E0D;&#x6267;&#x884C;&#x3002;</pre>

<pre class="brush: js">var a;
console.log(a);                // &#x6253;&#x5370;&quot;undefined&quot;&#x6216;&quot;&quot;&#xFF08;&#x4E0D;&#x540C;&#x6D4F;&#x89C8;&#x5668;&#x5B9E;&#x73B0;&#x4E0D;&#x540C;&#xFF09;&#x3002;
console.log(&apos;still going...&apos;); // &#x6253;&#x5370;&quot;still going...&quot;&#x3002;</pre>

<p>3. &#x58F0;&#x660E;&#x53D8;&#x91CF;&#x662F;&#x5B83;&#x6240;&#x5728;&#x4E0A;&#x4E0B;&#x6587;&#x73AF;&#x5883;&#x7684;&#x4E0D;&#x53EF;&#x914D;&#x7F6E;&#x5C5E;&#x6027;&#xFF08;non-configurable property&#xFF09;&#xFF0C;&#x975E;&#x58F0;&#x660E;&#x53D8;&#x91CF;&#x662F;&#x53EF;&#x914D;&#x7F6E;&#x7684;&#xFF08;&#x4F8B;&#x5982;&#x975E;&#x58F0;&#x660E;&#x53D8;&#x91CF;&#x53EF;&#x4EE5;&#x88AB;&#x5220;&#x9664;&#xFF09;&#x3002;</p>

<pre class="brush: js">var a = 1;
b = 2;

delete this.a; // &#x5728;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#xFF08;strict mode&#xFF09;&#x4E0B;&#x629B;&#x51FA;TypeError&#xFF0C;&#x5176;&#x4ED6;&#x60C5;&#x51B5;&#x4E0B;&#x6267;&#x884C;&#x5931;&#x8D25;&#x5E76;&#x65E0;&#x4EFB;&#x4F55;&#x63D0;&#x793A;&#x3002;
delete this.b;

console.log(a, b); // &#x629B;&#x51FA;ReferenceError&#x3002;
// &apos;b&apos;&#x5C5E;&#x6027;&#x5DF2;&#x7ECF;&#x88AB;&#x5220;&#x9664;&#x3002;</pre>

<p>&#x7531;&#x4E8E;&#x4EE5;&#x4E0A;&#x4E09;&#x4E2A;&#x533A;&#x522B;&#xFF0C;&#x58F0;&#x660E;&#x53D8;&#x91CF;&#x7684;&#x9519;&#x8BEF;&#x4F1A;&#x5BFC;&#x81F4;&#x4E0D;&#x53EF;&#x9884;&#x6D4B;&#x7684;&#x7ED3;&#x679C;&#x3002;&#x4E8E;&#x662F;&#xFF0C;<strong>&#x65E0;&#x8BBA;&#x662F;&#x5426;&#x5728;&#x51FD;&#x6570;&#x4E2D;&#xFF0C;&#x6211;&#x4EEC;&#x603B;&#x662F;&#x63A8;&#x8350;&#x4F7F;&#x7528;&#x58F0;&#x660E;&#x53D8;&#x91CF;</strong>&#x3002;&#x5728;ECMAScript 5&#x7684;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#xFF08;<a href="/zh-CN/docs/Web/JavaScript/Reference/Strict_mode">strict mode</a>&#xFF09;&#x4E0B;&#xFF0C;&#x7ED9;&#x4E00;&#x4E2A;&#x672A;&#x58F0;&#x660E;&#x7684;&#x53D8;&#x91CF;&#x8D4B;&#x503C;&#x4F1A;&#x629B;&#x51FA;&#x9519;&#x8BEF;&#x3002;</p>

<h3 id="&#x53D8;&#x91CF;&#x58F0;&#x660E;&#x63D0;&#x5347;&#xFF08;var_hoisting&#xFF09;">&#x53D8;&#x91CF;&#x58F0;&#x660E;&#x63D0;&#x5347;&#xFF08;var hoisting&#xFF09;</h3>

<p>&#x7531;&#x4E8E;&#x53D8;&#x91CF;&#x58F0;&#x660E;&#xFF08;&#x4EE5;&#x53CA;&#x5176;&#x4ED6;&#x58F0;&#x660E;&#xFF09;&#x603B;&#x662F;&#x5728;&#x4EFB;&#x610F;&#x4EE3;&#x7801;&#x6267;&#x884C;&#x4E4B;&#x524D;&#x5904;&#x7406;&#x7684;&#xFF0C;&#x6240;&#x4EE5;&#x5728;&#x4EE3;&#x7801;&#x4E2D;&#x7684;&#x4EFB;&#x610F;&#x4F4D;&#x7F6E;&#x58F0;&#x660E;&#x53D8;&#x91CF;&#x603B;&#x662F;&#x7B49;&#x6548;&#x4E8E;&#x5728;&#x4EE3;&#x7801;&#x5F00;&#x5934;&#x58F0;&#x660E;&#x3002;&#x8FD9;&#x610F;&#x5473;&#x7740;&#x53D8;&#x91CF;&#x53EF;&#x4EE5;&#x5728;&#x58F0;&#x660E;&#x4E4B;&#x524D;&#x4F7F;&#x7528;&#xFF0C;&#x8FD9;&#x4E2A;&#x884C;&#x4E3A;&#x53EB;&#x505A;&#x201C;hoisting&#x201D;&#x3002;&#x201C;hoisting&#x201D;&#x5C31;&#x50CF;&#x662F;&#x628A;&#x6240;&#x6709;&#x7684;&#x53D8;&#x91CF;&#x58F0;&#x660E;&#x79FB;&#x52A8;&#x5230;&#x51FD;&#x6570;&#x6216;&#x8005;&#x5168;&#x5C40;&#x4EE3;&#x7801;&#x7684;&#x5F00;&#x5934;&#x4F4D;&#x7F6E;&#x3002;</p>

<pre class="brush: js">bla = 2
var bla;
// ...

// &#x53EF;&#x4EE5;&#x7406;&#x89E3;&#x4E3A;&#xFF1A;

var bla;
bla = 2;
</pre>

<p>&#x7531;&#x4E8E;&#x8FD9;&#x4E2A;&#x539F;&#x56E0;&#xFF0C;&#x6211;&#x4EEC;&#x5EFA;&#x8BAE;&#x603B;&#x662F;&#x5728;&#x4F5C;&#x7528;&#x57DF;&#x7684;&#x6700;&#x5F00;&#x59CB;&#xFF08;&#x51FD;&#x6570;&#x6216;&#x8005;&#x5168;&#x5C40;&#x4EE3;&#x7801;&#x7684;&#x5F00;&#x5934;&#xFF09;&#x58F0;&#x660E;&#x53D8;&#x91CF;&#x3002;&#x8FD9;&#x6837;&#x53EF;&#x4EE5;&#x4F7F;&#x53D8;&#x91CF;&#x7684;&#x4F5C;&#x7528;&#x57DF;&#x53D8;&#x5F97;&#x6E05;&#x6670;&#x3002;</p>

<h2 name="Examples" id="Examples">&#x4F8B;&#x5B50;</h2>

<h3 id="&#x58F0;&#x660E;&#x5E76;&#x521D;&#x59CB;&#x5316;&#x4E24;&#x4E2A;&#x53D8;&#x91CF;&#xFF1A;">&#x58F0;&#x660E;&#x5E76;&#x521D;&#x59CB;&#x5316;&#x4E24;&#x4E2A;&#x53D8;&#x91CF;&#xFF1A;</h3>

<pre class="brush: js">var a = 0, b = 0;
</pre>

<h3 id="&#x7ED9;&#x4E24;&#x4E2A;&#x53D8;&#x91CF;&#x8D4B;&#x503C;&#x6210;&#x5B57;&#x7B26;&#x4E32;&#x503C;&#xFF1A;">&#x7ED9;&#x4E24;&#x4E2A;&#x53D8;&#x91CF;&#x8D4B;&#x503C;&#x6210;&#x5B57;&#x7B26;&#x4E32;&#x503C;&#xFF1A;</h3>

<pre class="brush: js">var a = &quot;A&quot;;
var b = a;

// &#x7B49;&#x6548;&#x4E8E;&#xFF1A;

var a, b = a = &quot;A&quot;;
</pre>

<p>&#x7559;&#x610F;&#x5176;&#x4E2D;&#x7684;&#x987A;&#x5E8F;&#xFF1A;</p>

<pre class="brush: js">var x = y, y = &apos;A&apos;;
console.log(x + y); // undefinedA
</pre>

<p>&#x5728;&#x8FD9;&#x91CC;&#xFF0C;x&#x548C;y&#x5728;&#x4EE3;&#x7801;&#x6267;&#x884C;&#x524D;&#x5C31;&#x5DF2;&#x7ECF;&#x521B;&#x5EFA;&#x4E86;&#xFF0C;&#x800C;&#x8D4B;&#x503C;&#x64CD;&#x4F5C;&#x53D1;&#x751F;&#x5728;&#x521B;&#x5EFA;&#x4E4B;&#x540E;&#x3002;&#x5F53;&quot;<code>x = y</code>&quot;&#x6267;&#x884C;&#x65F6;&#xFF0C;y&#x5DF2;&#x7ECF;&#x5B58;&#x5728;&#xFF0C;&#x6240;&#x4EE5;&#x4E0D;&#x629B;&#x51FA;<code>ReferenceError&#xFF0C;&#x5E76;&#x4E14;&#x5B83;&#x7684;&#x503C;&#x662F;</code>&apos;<code>undefined</code>&apos;&#x3002;&#x6240;&#x4EE5;x&#x88AB;&#x8D4B;&#x4E88;undefined&#x503C;&#x3002;&#x7136;&#x540E;&#xFF0C;<code>y&#x88AB;&#x8D4B;&#x4E88;</code>&apos;A&apos;&#x3002;&#x4E8E;&#x662F;&#x5728;&#x6267;&#x884C;&#x5B8C;&#x7B2C;&#x4E00;&#x884C;&#x4E4B;&#x540E;&#xFF0C;<code>x === undefined &amp;&amp; y === &apos;A&apos;&#x624D;&#x5F62;&#x6210;&#x4E86;</code><span style="background-color: #f6f6f2; font-family: courier new,andale mono,monospace; font-size: 1rem; line-height: 19px;">undefinedA</span><span style="font-family: courier new,andale mono,monospace; font-style: inherit; font-weight: inherit; line-height: 1.5;">&#x8FD9;&#x6837;&#x7684;&#x7ED3;&#x679C;&#x3002;</span></p>

<h3 id="&#x591A;&#x4E2A;&#x53D8;&#x91CF;&#x7684;&#x521D;&#x59CB;&#x5316;">&#x591A;&#x4E2A;&#x53D8;&#x91CF;&#x7684;&#x521D;&#x59CB;&#x5316;</h3>

<pre class="brush: js">var x = 0;

function f(){
  var x = y = 1; // x&#x5728;&#x51FD;&#x6570;&#x5185;&#x90E8;&#x58F0;&#x660E;&#xFF0C;y&#x4E0D;&#x662F;&#xFF01;
}
f();

console.log(x, y); // 0, 1
// x&#x662F;&#x5168;&#x5C40;&#x53D8;&#x91CF;&#x3002;
// y&#x662F;&#x9690;&#x5F0F;&#x58F0;&#x660E;&#x7684;&#x5168;&#x5C40;&#x53D8;&#x91CF;&#x3002;&#xA0;</pre>

<h3 id="&#x9690;&#x5F0F;&#x5168;&#x5C40;&#x53D8;&#x91CF;&#x548C;&#x5916;&#x90E8;&#x51FD;&#x6570;&#x4F5C;&#x7528;&#x57DF;">&#x9690;&#x5F0F;&#x5168;&#x5C40;&#x53D8;&#x91CF;&#x548C;&#x5916;&#x90E8;&#x51FD;&#x6570;&#x4F5C;&#x7528;&#x57DF;</h3>

<p>&#x770B;&#x8D77;&#x6765;&#x50CF;&#x662F;&#x9690;&#x5F0F;&#x5168;&#x5C40;&#x4F5C;&#x7528;&#x57DF;&#x7684;&#x53D8;&#x91CF;&#x4E5F;&#x6709;&#x53EF;&#x80FD;&#x662F;&#x5176;&#x5916;&#x90E8;&#x51FD;&#x6570;&#x53D8;&#x91CF;&#x7684;&#x5F15;&#x7528;&#x3002;</p>

<pre class="brush: js">var x = 0;  // x&#x662F;&#x5168;&#x5C40;&#x53D8;&#x91CF;&#xFF0C;&#x5E76;&#x4E14;&#x8D4B;&#x503C;&#x4E3A;0&#x3002;

console.log(typeof z); // undefined&#xFF0C;&#x56E0;&#x4E3A;z&#x8FD8;&#x4E0D;&#x5B58;&#x5728;&#x3002;

function a() { // &#x5F53;a&#x88AB;&#x8C03;&#x7528;&#x65F6;&#xFF0C;
  var y = 2;   // y&#x88AB;&#x58F0;&#x660E;&#x6210;&#x51FD;&#x6570;a&#x4F5C;&#x7528;&#x57DF;&#x7684;&#x53D8;&#x91CF;&#xFF0C;&#x7136;&#x540E;&#x8D4B;&#x503C;&#x6210;2&#x3002;

  console.log(x, y);   // 0 2 

  function b() {       // &#x5F53;b&#x88AB;&#x8C03;&#x7528;&#x65F6;&#xFF0C;
    x = 3;  // &#x5168;&#x5C40;&#x53D8;&#x91CF;x&#x88AB;&#x8D4B;&#x503C;&#x4E3A;3&#xFF0C;&#x4E0D;&#x751F;&#x6210;&#x5168;&#x5C40;&#x53D8;&#x91CF;&#x3002;
    y = 4;  // &#x5DF2;&#x5B58;&#x5728;&#x7684;&#x5916;&#x90E8;&#x51FD;&#x6570;&#x7684;y&#x53D8;&#x91CF;&#x88AB;&#x8D4B;&#x503C;&#x4E3A;4&#xFF0C;&#x4E0D;&#x751F;&#x6210;&#x65B0;&#x7684;&#x5168;&#x5C40;&#x53D8;&#x91CF;&#x3002;
    z = 5;  // &#x521B;&#x5EFA;&#x65B0;&#x7684;&#x5168;&#x5C40;&#x53D8;&#x91CF;z&#xFF0C;&#x5E76;&#x4E14;&#x7ED9;z&#x8D4B;&#x503C;&#x4E3A;5&#x3002; 
  }         // (&#x5728;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E0B;&#xFF08;strict mode&#xFF09;&#x629B;&#x51FA;ReferenceError)

  b();     // &#x8C03;&#x7528;b&#x65F6;&#x521B;&#x5EFA;&#x4E86;&#x5168;&#x5C40;&#x53D8;&#x91CF;z&#x3002;
  console.log(x, y, z);  // 3 4 5
}

a();                   // &#x8C03;&#x7528;a&#x65F6;&#x540C;&#x65F6;&#x8C03;&#x7528;&#x4E86;b&#x3002;
console.log(x, z);     // 3 5
console.log(typeof y); // undefined&#xFF0C;&#x56E0;&#x4E3A;y&#x662F;a&#x51FD;&#x6570;&#x7684;&#x672C;&#x5730;&#xFF08;local&#xFF09;&#x53D8;&#x91CF;&#x3002;</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" title="ECMAScript 1st Edition (ECMA-262)" class="external" href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf" hreflang="en">ECMAScript 1st Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition. Implemented in JavaScript 1.0</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-12.2" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">var statement</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-variable-statement" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">variable statement</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-variable-statement" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">variable statement</small></a></td>
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
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/let"><code>let</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/const"><code>const</code></a></li>
</ul>
                  
                
              