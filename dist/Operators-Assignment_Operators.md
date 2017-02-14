
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="Summary" name="Summary">&#x6982;&#x8FF0;</h2>

<p>&#x8D4B;&#x503C;&#x8FD0;&#x7B97;&#x7B26;&#xFF08;<strong>assignment operator</strong>&#xFF09;&#x57FA;&#x4E8E;&#x53F3;&#x503C;&#xFF08;right operand&#xFF09;&#x7684;&#x503C;&#xFF0C;&#x7ED9;&#x5DE6;&#x503C;&#xFF08;left operand&#xFF09;&#x8D4B;&#x503C;&#x3002;</p>

<h2 id=".E6.8F.8F.E8.BF.B0">&#x63CF;&#x8FF0;</h2>

<p>&#x57FA;&#x672C;&#x7684;&#x8D4B;&#x503C;&#x8FD0;&#x7B97;&#x7B26;&#x662F;&#x7B49;&#x53F7;&#xFF08;<code>=</code>&#xFF09;&#xFF0C;&#x8BE5;&#x8FD0;&#x7B97;&#x7B26;&#x628A;&#x5B83;&#x53F3;&#x8FB9;&#x7684;&#x8FD0;&#x7B97;&#x503C;&#x8D4B;&#x7ED9;&#x5DE6;&#x8FB9;&#x3002;&#x5373;&#xFF0C;<code>x = y</code>&#xA0;&#x628A;&#xA0;<code>y</code> &#x7684;&#x503C;&#x8D4B;&#x7ED9;&#xA0;<code>x</code>&#x3002; &#x5176;&#x4ED6;&#x7684;&#x8D4B;&#x503C;&#x8FD0;&#x7B97;&#x7B26;&#x901A;&#x5E38;&#x662F;&#x6807;&#x51C6;&#x8FD0;&#x7B97;&#x7B26;&#x7684;&#x7B80;&#x5199;&#x5F62;&#x5F0F;&#xFF0C;&#x5982;&#x4E0B;&#x9762;&#x7684;&#x5B9A;&#x4E49;&#x4E0E;&#x793A;&#x4F8B;&#x3002;&#xA0;</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th>&#x540D;&#x79F0;</th>
   <th>&#x7B80;&#x5199;&#x5F62;&#x5F0F;</th>
   <th>&#x542B;&#x4E49;</th>
  </tr>
  <tr>
   <td><a href="#Assignment">&#x8D4B;&#x503C;&#xFF08;Assignment&#xFF09;</a></td>
   <td><code>x = y</code></td>
   <td><code>x = y</code></td>
  </tr>
  <tr>
   <td><a href="#Addition_assignment">&#x52A0;&#x8D4B;&#x503C;&#xFF08;Addition assignment&#xFF09;</a></td>
   <td><code>x += y</code></td>
   <td><code>x = x + y</code></td>
  </tr>
  <tr>
   <td><a href="#Subtraction_assignment">&#x51CF;&#x8D4B;&#x503C;&#xFF08;Subtraction assignment&#xFF09;</a></td>
   <td><code>x -= y</code></td>
   <td><code>x = x - y</code></td>
  </tr>
  <tr>
   <td><a href="#Multiplication_assignment">&#x4E58;&#x8D4B;&#x503C;&#xFF08;Multiplication assigment&#xFF09;</a></td>
   <td><code>x *= y</code></td>
   <td><code>x = x * y</code></td>
  </tr>
  <tr>
   <td><a href="#Division_assignment">&#x9664;&#x8D4B;&#x503C;&#xFF08;Division assignment&#xFF09;</a></td>
   <td><code>x /= y</code></td>
   <td><code>x = x / y</code></td>
  </tr>
  <tr>
   <td><a href="#Remainder_assignment">&#x6A21;&#x8D4B;&#x503C;&#xFF08;Remainder assignment&#xFF09;</a></td>
   <td><code>x&#xA0;%= y</code></td>
   <td><code>x = x&#xA0;% y</code></td>
  </tr>
  <tr>
   <td><a href="#Left_shift_assignment">&#x5DE6;&#x79FB;&#x8D4B;&#x503C;&#xFF08;Left shift assignment&#xFF09;</a></td>
   <td><code>x &lt;&lt;= y</code></td>
   <td><code>x = x &lt;&lt; y</code></td>
  </tr>
  <tr>
   <td><a href="#Right_shift_assignment">&#x53F3;&#x79FB;&#x8D4B;&#x503C;&#xFF08;Right shift assignment&#xFF09;</a></td>
   <td><code>x &gt;&gt;= y</code></td>
   <td><code>x = x &gt;&gt; y</code></td>
  </tr>
  <tr>
   <td><a href="#Unsigned_right_shift_assignment">&#x65E0;&#x7B26;&#x53F7;&#x53F3;&#x79FB;&#x8D4B;&#x503C;&#xFF08;Unsigned right shift assignment&#xFF09;</a></td>
   <td><code>x &gt;&gt;&gt;= y</code></td>
   <td><code>x = x &gt;&gt;&gt; y</code></td>
  </tr>
  <tr>
   <td><a href="#Bitwise_AND_assignment">&#x6309;&#x4F4D;&#x4E0E;&#x8D4B;&#x503C;&#xFF08;Bitwise AND assignment&#xFF09;</a></td>
   <td><code>x &amp;= y</code></td>
   <td><code>x = x &amp; y</code></td>
  </tr>
  <tr>
   <td><a href="#Bitwise_XOR_assignment">&#x6309;&#x4F4D;&#x5F02;&#x6216;&#x8D4B;&#x503C;&#xFF08;Bitwise XOR assignment&#xFF09;</a></td>
   <td><code>x ^= y</code></td>
   <td><code>x = x ^ y</code></td>
  </tr>
  <tr>
   <td><a href="#Bitwise_OR_assignment">&#x6309;&#x4F4D;&#x6216;&#x8D4B;&#x503C;&#xFF08;Bitwise OR assignment&#xFF09;</a></td>
   <td><code>x |= y</code></td>
   <td><code>x = x | y</code></td>
  </tr>
 </tbody>
</table>

<h3 id=".E8.B5.8B.E5.80.BC"><a name="Assignment">&#x8D4B;&#x503C;</a></h3>

<p>&#x7B80;&#x5355;&#x7684;&#x8D4B;&#x503C;&#x8FD0;&#x7B97;&#x7B26;&#xFF0C;&#x628A;&#x4E00;&#x4E2A;&#x503C;&#x8D4B;&#x7ED9;&#x4E00;&#x4E2A;&#x53D8;&#x91CF;&#x3002;&#x4E3A;&#x4E86;&#x628A;&#x4E00;&#x4E2A;&#x503C;&#x8D4B;&#x7ED9;&#x591A;&#x4E2A;&#x53D8;&#x91CF;&#xFF0C;&#x53EF;&#x4EE5;&#x4EE5;&#x94FE;&#x5F0F;&#x4F7F;&#x7528;&#x8D4B;&#x503C;&#x8FD0;&#x7B97;&#x7B26;&#x3002;&#x53C2;&#x8003;&#x4E0B;&#x4F8B;&#xFF1A;</p>

<h4 id=".E8.AF.AD.E6.B3.95">&#x8BED;&#x6CD5;</h4>

<pre class="syntaxbox"><strong>Operator:</strong> x = y
</pre>

<h4 id=".E7.A4.BA.E4.BE.8B">&#x793A;&#x4F8B;</h4>

<pre class="brush: js">// Assuming the following variables
//  x = 5
//  y = 10
//  z = 25

x = y     // x is 10
x = y = z // x, y and z are all 25
</pre>

<h3 id=".E5.8A.A0.E8.B5.8B.E5.80.BC.EF.BC.88Addition_assignment.EF.BC.89"><a name="Addition_assignment">&#x52A0;&#x8D4B;&#x503C;&#xFF08;Addition assignment&#xFF09;</a></h3>

<p>&#x52A0;&#x8D4B;&#x503C;&#x8FD0;&#x7B97;&#x7B26;&#x628A;&#x4E00;&#x4E2A;&#x53F3;&#x503C;&#x4E0E;&#x4E00;&#x4E2A;&#x53D8;&#x91CF;&#x76F8;&#x52A0;&#xFF0C;&#x7136;&#x540E;&#x628A;&#x76F8;&#x52A0;&#x7684;&#x7ED3;&#x679C;&#x8D4B;&#x7ED9;&#x8BE5;&#x53D8;&#x91CF;&#x3002;&#x4E24;&#x4E2A;&#x64CD;&#x4F5C;&#x6570;&#x7684;&#x7C7B;&#x578B;&#x51B3;&#x5B9A;&#x4E86;&#x52A0;&#x8D4B;&#x503C;&#x8FD0;&#x7B97;&#x7B26;&#x7684;&#x884C;&#x4E3A;&#x3002;&#x7B97;&#x672F;&#x76F8;&#x52A0;&#x6216;&#x5B57;&#x7B26;&#x4E32;&#x8FDE;&#x63A5;&#x90FD;&#x6709;&#x53EF;&#x80FD;&#x3002;&#x66F4;&#x591A;&#x7EC6;&#x8282;&#x53C2;&#x8003;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition" title="&#x7B97;&#x672F;&#x8FD0;&#x7B97;&#x7B26;&#xFF08;Arithmetic operators&#xFF09;&#x628A;&#x6570;&#x503C;&#xFF08;&#x539F;&#x59CB;&#x503C;&#x6216;&#x53D8;&#x91CF;&#xFF09;&#x4F5C;&#x4E3A;&#x5B83;&#x4EEC;&#x7684;&#x64CD;&#x4F5C;&#x6570;&#xFF08;operand&#xFF09;&#xFF0C;&#x7136;&#x540E;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5355;&#x6570;&#x503C;&#x3002;&#x6807;&#x51C6;&#x7684;&#x7B97;&#x672F;&#x8FD0;&#x7B97;&#x7B26;&#x6709;&#x52A0;&#xA0;(+)&#xFF0C;&#x51CF; (-)&#xFF0C;&#x4E58;(*)&#xFF0C;&#x9664;(/)&#x3002;">addition operator</a>&#x3002;</p>

<h4 id=".E8.AF.AD.E6.B3.95_2">&#x8BED;&#x6CD5;</h4>

<pre class="syntaxbox"><strong>Operator:</strong> x += y 
<strong>Meaning:</strong>  x  = x + y
</pre>

<h4 id=".E7.A4.BA.E4.BE.8B_2">&#x793A;&#x4F8B;</h4>

<pre class="brush: js">// &#x5047;&#x5B9A;&#x5B9A;&#x4E49;&#x4E86;&#x4E0B;&#x5217;&#x53D8;&#x91CF;
//  foo = &quot;foo&quot;
//  bar = 5
//  baz = true


// Number + Number -&gt; addition
bar += 2 // 7

// Boolean + Number -&gt; addition
baz += 1 // 2

// Boolean + Boolean -&gt; addition
baz += false // 0

// Number + String -&gt; concatenation
bar += &quot;foo&quot; // &quot;5foo&quot;

// String + Boolean -&gt; concatenation
foo += false // &quot;foofalse&quot;

// String + String -&gt; concatenation
foo += &quot;bar&quot; // &quot;foobar&quot;
</pre>

<h3 id=".E5.87.8F.E8.B5.8B.E5.80.BC.EF.BC.88Subtraction_assignment.EF.BC.89"><a name="Subtraction_assignment">&#x51CF;&#x8D4B;&#x503C;&#xFF08;Subtraction assignment&#xFF09;</a></h3>

<p>&#x51CF;&#x8D4B;&#x503C;&#x8FD0;&#x7B97;&#x7B26;&#x4F7F;&#x4E00;&#x4E2A;&#x53D8;&#x91CF;&#x51CF;&#x53BB;&#x53F3;&#x503C;&#xFF0C;&#x7136;&#x540E;&#x628A;&#x7ED3;&#x679C;&#x8D4B;&#x7ED9;&#x8BE5;&#x53D8;&#x91CF;&#x3002;&#x66F4;&#x591A;&#x7EC6;&#x8282;&#x67E5;&#x770B;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Subtraction" title="&#x7B97;&#x672F;&#x8FD0;&#x7B97;&#x7B26;&#xFF08;Arithmetic operators&#xFF09;&#x628A;&#x6570;&#x503C;&#xFF08;&#x539F;&#x59CB;&#x503C;&#x6216;&#x53D8;&#x91CF;&#xFF09;&#x4F5C;&#x4E3A;&#x5B83;&#x4EEC;&#x7684;&#x64CD;&#x4F5C;&#x6570;&#xFF08;operand&#xFF09;&#xFF0C;&#x7136;&#x540E;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5355;&#x6570;&#x503C;&#x3002;&#x6807;&#x51C6;&#x7684;&#x7B97;&#x672F;&#x8FD0;&#x7B97;&#x7B26;&#x6709;&#x52A0;&#xA0;(+)&#xFF0C;&#x51CF; (-)&#xFF0C;&#x4E58;(*)&#xFF0C;&#x9664;(/)&#x3002;">subtraction operator</a> &#x3002;</p>

<h4 id=".E8.AF.AD.E6.B3.95_3">&#x8BED;&#x6CD5;</h4>

<pre class="syntaxbox"><strong>Operator:</strong> x -= y 
<strong>Meaning:</strong>  x  = x - y
</pre>

<h4 id=".E7.A4.BA.E4.BE.8B_3">&#x793A;&#x4F8B;</h4>

<pre class="brush: js">// &#x5047;&#x5B9A;&#x5DF2;&#x5B9A;&#x4E49;&#x4E86;&#x4E0B;&#x9762;&#x7684;&#x53D8;&#x91CF;
//  bar = 5

bar -= 2     // 3
bar -= &quot;foo&quot; // NaN
</pre>

<h3 id=".E4.B9.98.E8.B5.8B.E5.80.BC.EF.BC.88Multiplication_assignment.EF.BC.89"><a name="Multiplication_assignment">&#x4E58;&#x8D4B;&#x503C;&#xFF08;Multiplication assignment&#xFF09;</a></h3>

<p>&#x4E58;&#x8D4B;&#x503C;&#x8FD0;&#x7B97;&#x7B26;&#x4F7F;&#x4E00;&#x4E2A;&#x53D8;&#x91CF;&#x4E58;&#x4EE5;&#x53F3;&#x503C;&#xFF0C;&#x7136;&#x540E;&#x628A;&#x76F8;&#x6210;&#x7684;&#x7ED3;&#x679C;&#x8D4B;&#x7ED9;&#x8BE5;&#x53D8;&#x91CF;&#x3002;&#x66F4;&#x591A;&#x7EC6;&#x8282;&#x67E5;&#x770B;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Multiplication" title="&#x7B97;&#x672F;&#x8FD0;&#x7B97;&#x7B26;&#xFF08;Arithmetic operators&#xFF09;&#x628A;&#x6570;&#x503C;&#xFF08;&#x539F;&#x59CB;&#x503C;&#x6216;&#x53D8;&#x91CF;&#xFF09;&#x4F5C;&#x4E3A;&#x5B83;&#x4EEC;&#x7684;&#x64CD;&#x4F5C;&#x6570;&#xFF08;operand&#xFF09;&#xFF0C;&#x7136;&#x540E;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5355;&#x6570;&#x503C;&#x3002;&#x6807;&#x51C6;&#x7684;&#x7B97;&#x672F;&#x8FD0;&#x7B97;&#x7B26;&#x6709;&#x52A0;&#xA0;(+)&#xFF0C;&#x51CF; (-)&#xFF0C;&#x4E58;(*)&#xFF0C;&#x9664;(/)&#x3002;">multiplication operator</a>&#x3002;</p>

<h4 id=".E8.AF.AD.E6.B3.95_4">&#x8BED;&#x6CD5;</h4>

<pre class="syntaxbox"><strong>Operator:</strong> x *= y 
<strong>Meaning:</strong>  x  = x * y
</pre>

<h4 id=".E7.A4.BA.E4.BE.8B_4">&#x793A;&#x4F8B;</h4>

<pre class="brush: js">// &#x5047;&#x5B9A;&#x5DF2;&#x5B9A;&#x4E49;&#x4E86;&#x4E0B;&#x9762;&#x7684;&#x53D8;&#x91CF;
//  bar = 5

bar *= 2     // 10
bar *= &quot;foo&quot; // NaN
</pre>

<h3 id=".E9.99.A4.E8.B5.8B.E5.80.BC.EF.BC.88Division_assignment.EF.BC.89"><a name="Division_assignment">&#x9664;&#x8D4B;&#x503C;&#xFF08;Division assignment&#xFF09;</a></h3>

<p>&#x9664;&#x8D4B;&#x503C;&#x8FD0;&#x7B97;&#x7B26;&#x4F7F;&#x4E00;&#x4E2A;&#x53D8;&#x91CF;&#x9664;&#x4EE5;&#x53F3;&#x503C;&#xFF0C;&#x7136;&#x540E;&#x628A;&#x7ED3;&#x679C;&#x8D4B;&#x7ED9;&#x8BE5;&#x53D8;&#x91CF;&#x3002;&#x66F4;&#x591A;&#x7EC6;&#x8282;&#x67E5;&#x770B;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Division" title="&#x7B97;&#x672F;&#x8FD0;&#x7B97;&#x7B26;&#xFF08;Arithmetic operators&#xFF09;&#x628A;&#x6570;&#x503C;&#xFF08;&#x539F;&#x59CB;&#x503C;&#x6216;&#x53D8;&#x91CF;&#xFF09;&#x4F5C;&#x4E3A;&#x5B83;&#x4EEC;&#x7684;&#x64CD;&#x4F5C;&#x6570;&#xFF08;operand&#xFF09;&#xFF0C;&#x7136;&#x540E;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5355;&#x6570;&#x503C;&#x3002;&#x6807;&#x51C6;&#x7684;&#x7B97;&#x672F;&#x8FD0;&#x7B97;&#x7B26;&#x6709;&#x52A0;&#xA0;(+)&#xFF0C;&#x51CF; (-)&#xFF0C;&#x4E58;(*)&#xFF0C;&#x9664;(/)&#x3002;">division operator</a>&#x3002;</p>

<h4 id=".E8.AF.AD.E6.B3.95_5">&#x8BED;&#x6CD5;</h4>

<pre class="syntaxbox"><strong>Operator:</strong> x /= y 
<strong>Meaning:</strong>  x  = x / y
</pre>

<h4 id=".E7.A4.BA.E4.BE.8B_5">&#x793A;&#x4F8B;</h4>

<pre class="brush: js">// &#x5047;&#x5B9A;&#x5DF2;&#x5B9A;&#x4E49;&#x4E86;&#x4E0B;&#x9762;&#x7684;&#x53D8;&#x91CF;
//  bar = 5

bar /= 2     // 2.5
bar /= &quot;foo&quot; // NaN
bar /= 0     // Infinity
</pre>

<h3 id=".E6.A8.A1.E8.B5.8B.E5.80.BC.EF.BC.88Remainder_assignment.EF.BC.89"><a name="Remainder_assignment">&#x6A21;&#x8D4B;&#x503C;&#xFF08;Remainder assignment&#xFF09;</a></h3>

<p>&#x6A21;&#x8D4B;&#x503C;&#x8FD0;&#x7B97;&#x7B26;&#x4F7F;&#x4E00;&#x4E2A;&#x53D8;&#x91CF;&#x9664;&#x4EE5;&#x53F3;&#x503C;&#xFF0C;&#x7136;&#x540E;&#x628A;&#x4F59;&#x6570;&#x8D4B;&#x7ED9;&#x8BE5;&#x53D8;&#x91CF;&#x3002;&#x66F4;&#x591A;&#x7EC6;&#x8282;&#x67E5;&#x770B;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder" title="&#x7B97;&#x672F;&#x8FD0;&#x7B97;&#x7B26;&#xFF08;Arithmetic operators&#xFF09;&#x628A;&#x6570;&#x503C;&#xFF08;&#x539F;&#x59CB;&#x503C;&#x6216;&#x53D8;&#x91CF;&#xFF09;&#x4F5C;&#x4E3A;&#x5B83;&#x4EEC;&#x7684;&#x64CD;&#x4F5C;&#x6570;&#xFF08;operand&#xFF09;&#xFF0C;&#x7136;&#x540E;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5355;&#x6570;&#x503C;&#x3002;&#x6807;&#x51C6;&#x7684;&#x7B97;&#x672F;&#x8FD0;&#x7B97;&#x7B26;&#x6709;&#x52A0;&#xA0;(+)&#xFF0C;&#x51CF; (-)&#xFF0C;&#x4E58;(*)&#xFF0C;&#x9664;(/)&#x3002;">remainder operator</a>&#x3002;</p>

<h4 id=".E8.AF.AD.E6.B3.95_6">&#x8BED;&#x6CD5;</h4>

<pre class="syntaxbox"><strong>Operator:</strong> x %= y 
<strong>Meaning:</strong>  x  = x % y
</pre>

<h4 id=".E7.A4.BA.E4.BE.8B_6">&#x793A;&#x4F8B;</h4>

<pre class="brush: js">// Assuming the following variable
//  bar = 5

bar %= 2     // 1
bar %= &quot;foo&quot; // NaN
bar %= 0     // NaN
</pre>

<h3 id=".E5.B7.A6.E7.A7.BB.E8.B5.8B.E5.80.BC.EF.BC.88Left_shift_assignment.EF.BC.89"><a name="Left_shift_assignment">&#x5DE6;&#x79FB;&#x8D4B;&#x503C;&#xFF08;Left shift assignment&#xFF09;</a></h3>

<p>&#x5DE6;&#x79FB;&#x8D4B;&#x503C;&#x8FD0;&#x7B97;&#x7B26;&#x4F7F;&#x53D8;&#x91CF;&#x5411;&#x5DE6;&#x79FB;&#x52A8;&#x6307;&#x5B9A;&#x4F4D;&#x6570;&#x7684;&#x6BD4;&#x7279;&#x4F4D;&#xFF0C;&#x7136;&#x540E;&#x628A;&#x7ED3;&#x679C;&#x8D4B;&#x7ED9;&#x8BE5;&#x53D8;&#x91CF;&#x3002;&#x66F4;&#x591A;&#x7EC6;&#x8282;&#x67E5;&#x770B; <a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Left_shift" title="&#x6309;&#x4F4D;&#x64CD;&#x4F5C;&#x7B26;&#xFF08;Bitwise operators&#xFF09;&#xA0;&#x5C06;&#x5176;&#x64CD;&#x4F5C;&#x6570;&#xFF08;operands&#xFF09;&#x5F53;&#x4F5C;32&#x4F4D;&#x7684;&#x6BD4;&#x7279;&#x5E8F;&#x5217;&#xFF08;&#x7531;0&#x548C;1&#x7EC4;&#x6210;&#xFF09;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x5341;&#x8FDB;&#x5236;&#x3001;&#x5341;&#x516D;&#x8FDB;&#x5236;&#x6216;&#x516B;&#x8FDB;&#x5236;&#x6570;&#x503C;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x5341;&#x8FDB;&#x5236;&#x6570;9&#xFF0C;&#x7528;&#x4E8C;&#x8FDB;&#x5236;&#x8868;&#x793A;&#x5219;&#x4E3A;1001&#x3002;&#x6309;&#x4F4D;&#x64CD;&#x4F5C;&#x7B26;&#x64CD;&#x4F5C;&#x6570;&#x5B57;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x5F62;&#x5F0F;&#xFF0C;&#x4F46;&#x662F;&#x8FD4;&#x56DE;&#x503C;&#x4F9D;&#x7136;&#x662F;&#x6807;&#x51C6;&#x7684;JavaScript&#x6570;&#x503C;&#x3002;">left shift operator</a>&#x3002;</p>

<h4 id=".E8.AF.AD.E6.B3.95_7">&#x8BED;&#x6CD5;</h4>

<pre class="syntaxbox"><strong>Operator:</strong> x &lt;&lt;= y 
<strong>Meaning:</strong>  x   = x &lt;&lt; y
</pre>

<h4 id=".E7.A4.BA.E4.BE.8B_7">&#x793A;&#x4F8B;</h4>

<pre class="brush: js">var bar = 5; //  (00000000000000000000000000000101)
bar &lt;&lt;= 2; // 20 (00000000000000000000000000010100)
</pre>

<h3 id=".E5.8F.B3.E7.A7.BB.E8.B5.8B.E5.80.BC.EF.BC.88Right_shift_assignment.EF.BC.89"><a name="Right_shift_assignment">&#x53F3;&#x79FB;&#x8D4B;&#x503C;&#xFF08;Right shift assignment&#xFF09;</a></h3>

<p>&#x53F3;&#x79FB;&#x8D4B;&#x503C;&#x8FD0;&#x7B97;&#x7B26;&#x4F7F;&#x53D8;&#x91CF;&#x5411;&#x53F3;&#x79FB;&#x6307;&#x5B9A;&#x4F4D;&#x6570;&#x7684;&#x6BD4;&#x7279;&#x4F4D;&#xFF0C;&#x7136;&#x540E;&#x628A;&#x7ED3;&#x679C;&#x8D4B;&#x7ED9;&#x8BE5;&#x53D8;&#x91CF;&#x3002;&#x66F4;&#x591A;&#x7EC6;&#x8282;&#x67E5;&#x770B; <a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Right_shift" title="&#x6309;&#x4F4D;&#x64CD;&#x4F5C;&#x7B26;&#xFF08;Bitwise operators&#xFF09;&#xA0;&#x5C06;&#x5176;&#x64CD;&#x4F5C;&#x6570;&#xFF08;operands&#xFF09;&#x5F53;&#x4F5C;32&#x4F4D;&#x7684;&#x6BD4;&#x7279;&#x5E8F;&#x5217;&#xFF08;&#x7531;0&#x548C;1&#x7EC4;&#x6210;&#xFF09;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x5341;&#x8FDB;&#x5236;&#x3001;&#x5341;&#x516D;&#x8FDB;&#x5236;&#x6216;&#x516B;&#x8FDB;&#x5236;&#x6570;&#x503C;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x5341;&#x8FDB;&#x5236;&#x6570;9&#xFF0C;&#x7528;&#x4E8C;&#x8FDB;&#x5236;&#x8868;&#x793A;&#x5219;&#x4E3A;1001&#x3002;&#x6309;&#x4F4D;&#x64CD;&#x4F5C;&#x7B26;&#x64CD;&#x4F5C;&#x6570;&#x5B57;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x5F62;&#x5F0F;&#xFF0C;&#x4F46;&#x662F;&#x8FD4;&#x56DE;&#x503C;&#x4F9D;&#x7136;&#x662F;&#x6807;&#x51C6;&#x7684;JavaScript&#x6570;&#x503C;&#x3002;">right shift operator</a>&#x3002;</p>

<h4 id=".E8.AF.AD.E6.B3.95_8">&#x8BED;&#x6CD5;</h4>

<pre class="syntaxbox"><strong>Operator:</strong> x &gt;&gt;= y 
<strong>Meaning:</strong>  x   = x &gt;&gt; y
</pre>

<h4 id=".E7.A4.BA.E4.BE.8B_8">&#x793A;&#x4F8B;</h4>

<pre class="brush: js">var bar = 5; //   (00000000000000000000000000000101)
bar &gt;&gt;= 2;   // 1 (00000000000000000000000000000001)

var bar -5; //    (-00000000000000000000000000000101)
bar &gt;&gt;= 2;  // -2 (-00000000000000000000000000000010)
</pre>

<h3 id=".E6.97.A0.E7.AC.A6.E5.8F.B7.E5.8F.B3.E7.A7.BB.E8.B5.8B.E5.80.BC.EF.BC.88Unsigned_right_shift_assignment.EF.BC.89"><a name="Unsigned_right_shift_assignment">&#x65E0;&#x7B26;&#x53F7;&#x53F3;&#x79FB;&#x8D4B;&#x503C;&#xFF08;Unsigned right shift assignment&#xFF09;</a></h3>

<p>&#x65E0;&#x7B26;&#x53F7;&#x53F3;&#x79FB;&#x8D4B;&#x503C;&#x8FD0;&#x7B97;&#x7B26;&#x5411;&#x53F3;&#x79FB;&#x52A8;&#x6307;&#x5B9A;&#x6570;&#x91CF;&#x7684;&#x6BD4;&#x7279;&#x4F4D;&#xFF0C;&#x7136;&#x540E;&#x628A;&#x7ED3;&#x679C;&#x8D4B;&#x7ED9;&#x53D8;&#x91CF;&#x3002;&#x66F4;&#x591A;&#x7EC6;&#x8282;&#x67E5;&#x770B; <a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Unsigned_right_shift" title="&#x6309;&#x4F4D;&#x64CD;&#x4F5C;&#x7B26;&#xFF08;Bitwise operators&#xFF09;&#xA0;&#x5C06;&#x5176;&#x64CD;&#x4F5C;&#x6570;&#xFF08;operands&#xFF09;&#x5F53;&#x4F5C;32&#x4F4D;&#x7684;&#x6BD4;&#x7279;&#x5E8F;&#x5217;&#xFF08;&#x7531;0&#x548C;1&#x7EC4;&#x6210;&#xFF09;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x5341;&#x8FDB;&#x5236;&#x3001;&#x5341;&#x516D;&#x8FDB;&#x5236;&#x6216;&#x516B;&#x8FDB;&#x5236;&#x6570;&#x503C;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x5341;&#x8FDB;&#x5236;&#x6570;9&#xFF0C;&#x7528;&#x4E8C;&#x8FDB;&#x5236;&#x8868;&#x793A;&#x5219;&#x4E3A;1001&#x3002;&#x6309;&#x4F4D;&#x64CD;&#x4F5C;&#x7B26;&#x64CD;&#x4F5C;&#x6570;&#x5B57;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x5F62;&#x5F0F;&#xFF0C;&#x4F46;&#x662F;&#x8FD4;&#x56DE;&#x503C;&#x4F9D;&#x7136;&#x662F;&#x6807;&#x51C6;&#x7684;JavaScript&#x6570;&#x503C;&#x3002;"> unsigned right shift operator</a>&#x3002;</p>

<h4 id=".E8.AF.AD.E6.B3.95_9">&#x8BED;&#x6CD5;</h4>

<pre class="syntaxbox"><strong>Operator:</strong> x &gt;&gt;&gt;= y 
<strong>Meaning:</strong>  x    = x &gt;&gt;&gt; y
</pre>

<h4 id=".E7.A4.BA.E4.BE.8B_9">&#x793A;&#x4F8B;</h4>

<pre class="brush: js">var bar = 5; //   (00000000000000000000000000000101)
bar &gt;&gt;&gt;= 2;  // 1 (00000000000000000000000000000001)

var bar = -5; // (-00000000000000000000000000000101)
bar &gt;&gt;&gt;= 2; // 1073741822 (00111111111111111111111111111110)</pre>

<h3 id=".E6.8C.89.E4.BD.8D.E4.B8.8E.E8.B5.8B.E5.80.BC.EF.BC.88Bitwise_AND_assignment.EF.BC.89"><a name="Bitwise_AND_assignment">&#x6309;&#x4F4D;&#x4E0E;&#x8D4B;&#x503C;&#xFF08;Bitwise AND assignment&#xFF09;</a></h3>

<p>&#x6309;&#x4F4D;&#x4E0E;&#x8D4B;&#x503C;&#x8FD0;&#x7B97;&#x7B26;&#x4F7F;&#x7528;&#x4E24;&#x4E2A;&#x64CD;&#x4F5C;&#x503C;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x8868;&#x793A;&#xFF0C;&#x6267;&#x884C;&#x6309;&#x4F4D;&#x4E0E;&#x8FD0;&#x7B97;&#xFF0C;&#x5E76;&#x628A;&#x7ED3;&#x679C;&#x8D4B;&#x7ED9;&#x53D8;&#x91CF;&#x3002;&#x66F4;&#x591A;&#x7EC6;&#x8282;&#x67E5;&#x770B; <a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND" title="&#x6309;&#x4F4D;&#x64CD;&#x4F5C;&#x7B26;&#xFF08;Bitwise operators&#xFF09;&#xA0;&#x5C06;&#x5176;&#x64CD;&#x4F5C;&#x6570;&#xFF08;operands&#xFF09;&#x5F53;&#x4F5C;32&#x4F4D;&#x7684;&#x6BD4;&#x7279;&#x5E8F;&#x5217;&#xFF08;&#x7531;0&#x548C;1&#x7EC4;&#x6210;&#xFF09;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x5341;&#x8FDB;&#x5236;&#x3001;&#x5341;&#x516D;&#x8FDB;&#x5236;&#x6216;&#x516B;&#x8FDB;&#x5236;&#x6570;&#x503C;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x5341;&#x8FDB;&#x5236;&#x6570;9&#xFF0C;&#x7528;&#x4E8C;&#x8FDB;&#x5236;&#x8868;&#x793A;&#x5219;&#x4E3A;1001&#x3002;&#x6309;&#x4F4D;&#x64CD;&#x4F5C;&#x7B26;&#x64CD;&#x4F5C;&#x6570;&#x5B57;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x5F62;&#x5F0F;&#xFF0C;&#x4F46;&#x662F;&#x8FD4;&#x56DE;&#x503C;&#x4F9D;&#x7136;&#x662F;&#x6807;&#x51C6;&#x7684;JavaScript&#x6570;&#x503C;&#x3002;">bitwise AND operator</a>&#x3002;</p>

<h4 id=".E8.AF.AD.E6.B3.95_10">&#x8BED;&#x6CD5;</h4>

<pre class="syntaxbox"><strong>Operator:</strong> x &amp;= y 
<strong>Meaning:</strong>  x  = x &amp; y
</pre>

<h4 id=".E7.A4.BA.E4.BE.8B_10">&#x793A;&#x4F8B;</h4>

<pre class="brush: js">var bar = 5;
// 5:     00000000000000000000000000000101
// 2:     00000000000000000000000000000010
bar &amp;= 2; // 0
</pre>

<h3 id=".E6.8C.89.E4.BD.8D.E5.BC.82.E6.88.96.E8.B5.8B.E5.80.BC.EF.BC.88Bitwise_XOR_assignment.EF.BC.89"><a name="Bitwise_XOR_assignment">&#x6309;&#x4F4D;&#x5F02;&#x6216;&#x8D4B;&#x503C;&#xFF08;Bitwise XOR assignment&#xFF09;</a></h3>

<p>&#x6309;&#x4F4D;&#x5F02;&#x6216;&#x8D4B;&#x503C;&#x8FD0;&#x7B97;&#x7B26;&#x4F7F;&#x7528;&#x4E24;&#x4E2A;&#x64CD;&#x4F5C;&#x503C;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x8868;&#x793A;&#xFF0C;&#x6267;&#x884C;&#x4E8C;&#x8FDB;&#x5236;&#x5F02;&#x6216;&#x8FD0;&#x7B97;&#xFF0C;&#x5E76;&#x628A;&#x7ED3;&#x679C;&#x8D4B;&#x7ED9;&#x53D8;&#x91CF;&#x3002;&#x66F4;&#x591A;&#x7EC6;&#x8282;&#x67E5;&#x770B; <a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR" title="&#x6309;&#x4F4D;&#x64CD;&#x4F5C;&#x7B26;&#xFF08;Bitwise operators&#xFF09;&#xA0;&#x5C06;&#x5176;&#x64CD;&#x4F5C;&#x6570;&#xFF08;operands&#xFF09;&#x5F53;&#x4F5C;32&#x4F4D;&#x7684;&#x6BD4;&#x7279;&#x5E8F;&#x5217;&#xFF08;&#x7531;0&#x548C;1&#x7EC4;&#x6210;&#xFF09;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x5341;&#x8FDB;&#x5236;&#x3001;&#x5341;&#x516D;&#x8FDB;&#x5236;&#x6216;&#x516B;&#x8FDB;&#x5236;&#x6570;&#x503C;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x5341;&#x8FDB;&#x5236;&#x6570;9&#xFF0C;&#x7528;&#x4E8C;&#x8FDB;&#x5236;&#x8868;&#x793A;&#x5219;&#x4E3A;1001&#x3002;&#x6309;&#x4F4D;&#x64CD;&#x4F5C;&#x7B26;&#x64CD;&#x4F5C;&#x6570;&#x5B57;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x5F62;&#x5F0F;&#xFF0C;&#x4F46;&#x662F;&#x8FD4;&#x56DE;&#x503C;&#x4F9D;&#x7136;&#x662F;&#x6807;&#x51C6;&#x7684;JavaScript&#x6570;&#x503C;&#x3002;">bitwise XOR operator</a>&#x3002;</p>

<h4 id=".E8.AF.AD.E6.B3.95_11">&#x8BED;&#x6CD5;</h4>

<pre class="syntaxbox"><strong>Operator:</strong> x ^= y 
<strong>Meaning:</strong>  x  = x ^ y
</pre>

<h4 id=".E7.A4.BA.E4.BE.8B_11">&#x793A;&#x4F8B;</h4>

<pre class="brush: js">var bar = 5;
bar ^= 2; // 7
// 5: 00000000000000000000000000000101
// 2: 00000000000000000000000000000010
// -----------------------------------
// 7: 00000000000000000000000000000111
</pre>

<h3 id=".E6.8C.89.E4.BD.8D.E6.88.96.E8.B5.8B.E5.80.BC.EF.BC.88Bitwise_OR_assignment.EF.BC.89"><a name="Bitwise_OR_assignment">&#x6309;&#x4F4D;&#x6216;&#x8D4B;&#x503C;&#xFF08;Bitwise OR assignment&#xFF09;</a></h3>

<p>&#x6309;&#x4F4D;&#x6216;&#x8D4B;&#x503C;&#x8FD0;&#x7B97;&#x7B26;&#x4F7F;&#x7528;&#x4E24;&#x4E2A;&#x64CD;&#x4F5C;&#x503C;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x8868;&#x793A;&#xFF0C;&#x6267;&#x884C;&#x6309;&#x4F4D;&#x6216;&#x8FD0;&#x7B97;&#xFF0C;&#x5E76;&#x628A;&#x7ED3;&#x679C;&#x8D4B;&#x7ED9;&#x53D8;&#x91CF;&#x3002;&#x66F4;&#x591A;&#x7EC6;&#x8282;&#x67E5;&#x770B; <a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_OR" title="&#x6309;&#x4F4D;&#x64CD;&#x4F5C;&#x7B26;&#xFF08;Bitwise operators&#xFF09;&#xA0;&#x5C06;&#x5176;&#x64CD;&#x4F5C;&#x6570;&#xFF08;operands&#xFF09;&#x5F53;&#x4F5C;32&#x4F4D;&#x7684;&#x6BD4;&#x7279;&#x5E8F;&#x5217;&#xFF08;&#x7531;0&#x548C;1&#x7EC4;&#x6210;&#xFF09;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x5341;&#x8FDB;&#x5236;&#x3001;&#x5341;&#x516D;&#x8FDB;&#x5236;&#x6216;&#x516B;&#x8FDB;&#x5236;&#x6570;&#x503C;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x5341;&#x8FDB;&#x5236;&#x6570;9&#xFF0C;&#x7528;&#x4E8C;&#x8FDB;&#x5236;&#x8868;&#x793A;&#x5219;&#x4E3A;1001&#x3002;&#x6309;&#x4F4D;&#x64CD;&#x4F5C;&#x7B26;&#x64CD;&#x4F5C;&#x6570;&#x5B57;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x5F62;&#x5F0F;&#xFF0C;&#x4F46;&#x662F;&#x8FD4;&#x56DE;&#x503C;&#x4F9D;&#x7136;&#x662F;&#x6807;&#x51C6;&#x7684;JavaScript&#x6570;&#x503C;&#x3002;">bitwise OR operator</a>&#x3002;</p>

<h4 id=".E8.AF.AD.E6.B3.95_12">&#x8BED;&#x6CD5;</h4>

<pre class="syntaxbox"><strong>Operator:</strong> x |= y 
<strong>Meaning:</strong>  x  = x | y
</pre>

<h4 id=".E7.A4.BA.E4.BE.8B_12">&#x793A;&#x4F8B;</h4>

<pre class="brush: js">var bar = 5;
bar |= 2; // 7
// 5: 00000000000000000000000000000101
// 2: 00000000000000000000000000000010
// -----------------------------------
// 7: 00000000000000000000000000000111
</pre>

<h2 id=".E7.A4.BA.E4.BE.8B_13">&#x793A;&#x4F8B;</h2>

<h3 id=".E5.B8.A6.E6.9C.89.E8.B5.8B.E5.80.BC.E8.BF.90.E7.AE.97.E7.AC.A6.E7.9A.84.E5.B7.A6.E5.80.BC.EF.BC.88Left_operand.EF.BC.89">&#x5E26;&#x6709;&#x8D4B;&#x503C;&#x8FD0;&#x7B97;&#x7B26;&#x7684;&#x5DE6;&#x503C;&#xFF08;Left operand&#xFF09;</h3>

<p>&#x5728;&#x67D0;&#x4E9B;&#x4E0D;&#x5E38;&#x89C1;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x8D4B;&#x503C;&#x8FD0;&#x7B97;&#x7B26;&#xFF08;&#x5982;<code>&#xA0;x += y</code>&#xFF09;&#x5E76;&#x4E0D;&#x7B49;&#x540C;&#x4E8E;&#x8868;&#x8FBE;&#x5F0F;&#xFF08;&#x8FD9;&#x662F;&#x662F;&#xA0;<code>x = x + y</code>&#xFF09;&#x3002;&#x5F53;&#x4E00;&#x4E2A;&#x8D4B;&#x503C;&#x8FD0;&#x7B97;&#x7B26;&#x7684;&#x5DE6;&#x503C;&#x5305;&#x542B;&#x6709;&#x4E00;&#x4E2A;&#x8D4B;&#x503C;&#x8FD0;&#x7B97;&#x7B26;&#x65F6;&#xFF0C;&#x5DE6;&#x503C;&#x53EA;&#x4F1A;&#x88AB;&#x6C42;&#x503C;&#x4E00;&#x6B21;&#x3002;&#x4F8B;&#x5982;&#xFF1A;</p>

<pre class="brush: js">a[i++] += 5         // i &#x6267;&#x884C;&#x4E00;&#x6B21;&#x6C42;&#x503C;
a[i++] = a[i++] + 5 // i &#x6267;&#x884C;&#x4E24;&#x6B21;&#x6C42;&#x503C;
</pre>

<h2 id=".E8.A7.84.E8.8C.83">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition.</td>
   <td>Standard</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a class="external" href="http://www.ecma-international.org/ecma-262/5.1/#sec-11.13" hreflang="en" lang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Assignment operators</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a class="external" href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-assignment-operators" hreflang="en" lang="en">ECMAScript 6 (ECMA-262)<br><small lang="zh-CN">Assignment operators</small></a></td>
   <td><span class="spec-RC">Release Candidate</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id=".E6.B5.8F.E8.A7.88.E5.99.A8.E5.85.BC.E5.AE.B9.E6.80.A7">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<p></p><div class="htab"> 
    <a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a> 
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
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
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
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id=".E7.9B.B8.E5.85.B3.E9.93.BE.E6.8E.A5">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators">&#x7B97;&#x672F;&#x8FD0;&#x7B97;&#x7B26;</a></li>
</ul>
                  
                
              