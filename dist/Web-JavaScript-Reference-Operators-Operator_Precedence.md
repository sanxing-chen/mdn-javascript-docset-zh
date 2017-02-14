
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><span class="st">&#x8FD0;&#x7B97;&#x7B26;&#x7684;&#x4F18;&#x5148;&#x7EA7;&#x51B3;&#x5B9A;&#x4E86;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#x8FD0;&#x7B97;&#x6267;&#x884C;&#x7684;&#x5148;&#x540E;&#x987A;&#x5E8F;</span>&#xFF0C;&#x4F18;&#x5148;&#x7EA7;&#x9AD8;&#x7684;&#x8FD0;&#x7B97;&#x7B26;&#x6700;&#x5148;&#x88AB;&#x6267;&#x884C;&#x3002;</p>

<p>&#x4E0B;&#x9762;&#x662F;&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x7684;&#x4F8B;&#x5B50;&#xFF1A;</p>

<pre>3 + 4 * 5 // &#x8BA1;&#x7B97;&#x7ED3;&#x679C;&#x4E3A;23	 
</pre>

<p>&#x4E58;&#x6CD5;&#x8FD0;&#x7B97;&#x7B26; (&quot;<code>*</code>&quot;)&#x6BD4;&#x8D77;&#x52A0;&#x6CD5;&#x8FD0;&#x7B97;&#x7B26;(&quot;<code>+</code>&quot;)&#x6709;&#x7740;&#x66F4;&#x9AD8;&#x7684;&#x4F18;&#x5148;&#x7EA7;&#xFF0C;&#x6240;&#x4EE5;&#x5B83;&#x4F1A;&#x88AB;&#x6700;&#x5148;&#x6267;&#x884C;&#x3002;</p>

<h2 name="Associativity" id="Associativity">&#x7ED3;&#x5408;&#x6027;</h2>

<p>&#x7ED3;&#x5408;&#x6027;&#x51B3;&#x5B9A;&#x4E86;&#x62E5;&#x6709;&#x76F8;&#x540C;&#x4F18;&#x5148;&#x7EA7;&#x7684;&#x8FD0;&#x7B97;&#x7B26;&#x7684;&#x6267;&#x884C;&#x987A;&#x5E8F;&#x3002;&#x8003;&#x8651;&#x4E0B;&#x9762;&#x8FD9;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;&#xFF1A;</p>

<pre>a OP b OP c
</pre>

<p>&#x5DE6;&#x7ED3;&#x5408;(&#x4ECE;&#x5DE6;&#x5230;&#x53F3;&#x8BA1;&#x7B97;)&#x76F8;&#x5F53;&#x4E8E;&#x628A;&#x5DE6;&#x8FB9;&#x7684;&#x5B50;&#x8868;&#x8FBE;&#x5F0F;&#x52A0;&#x4E0A;&#x5C0F;&#x62EC;&#x53F7;<code>(a OP b) OP c</code>&#xFF0C;&#x7C7B;&#x4F3C;&#x7684;&#xFF0C;&#x53F3;&#x5173;&#x8054;(&#x4ECE;&#x53F3;&#x5230;&#x5DE6;&#x8BA1;&#x7B97;)&#x76F8;&#x5F53;&#x4E8E;<code>a OP (b OP c)</code>&#x3002;&#x8D4B;&#x503C;&#x8FD0;&#x7B97;&#x7B26;&#x662F;&#x53F3;&#x5173;&#x8054;&#x7684;,&#x6240;&#x4EE5;&#x4F60;&#x53EF;&#x4EE5;&#x8FD9;&#x4E48;&#x5199;&#xFF1A;</p>

<pre>a = b = 5; 
</pre>

<p>&#x7ED3;&#x679C;&#xA0;<code>a</code> &#x548C;&#xA0;<code>b</code>&#xA0;&#x7684;&#x503C;&#x90FD;&#x4F1A;&#x6210;&#x4E3A;5&#x3002;&#x8FD9;&#x662F;&#x56E0;&#x4E3A;&#x8D4B;&#x503C;&#x8FD0;&#x7B97;&#x7B26;&#x7684;&#x8FD4;&#x56DE;&#x7ED3;&#x679C;&#x5C31;&#x662F;&#x8D4B;&#x503C;&#x8FD0;&#x7B97;&#x7B26;&#x53F3;&#x8FB9;&#x7684;&#x90A3;&#x4E2A;&#x503C;&#xFF0C;&#x5177;&#x4F53;&#x8FC7;&#x7A0B;&#x662F;&#xFF1A;<code>b</code>&#x88AB;&#x8D4B;&#x503C;&#x4E3A;5&#xFF0C;&#x7136;&#x540E;<code>a</code>&#x4E5F;&#x88AB;&#x8D4B;&#x503C;&#x4E3A;&#xA0;<code>b=5</code>&#xA0;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#xFF0C;&#x4E5F;&#x5C31;&#x662F;5&#x3002;</p>

<h2 name="Table" id="Table">&#x6C47;&#x603B;&#x8868;</h2>

<p>&#x4E0B;&#x9762;&#x7684;&#x8868;&#x5C06;&#x6240;&#x6709;&#x8FD0;&#x7B97;&#x7B26;&#x6309;&#x7167;&#x4F18;&#x5148;&#x7EA7;&#x7684;&#x4E0D;&#x540C;&#x4ECE;&#x9AD8;&#x5230;&#x4F4E;&#x6392;&#x5217;&#x3002;</p>

<table class="fullwidth-table">
 <tbody>
  <tr>
   <th>&#x4F18;&#x5148;&#x7EA7;</th>
   <th>&#x8FD0;&#x7B97;&#x7C7B;&#x578B;</th>
   <th>&#x5173;&#x8054;&#x6027;</th>
   <th>&#x8FD0;&#x7B97;&#x7B26;</th>
  </tr>
  <tr>
   <td>19</td>
   <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Grouping" title="&#x5706;&#x62EC;&#x53F7;&#x8FD0;&#x7B97;&#x7B26;( )&#xA0;&#x7528;&#x6765;&#x63A7;&#x5236;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#x7684;&#x8FD0;&#x7B97;&#x4F18;&#x5148;&#x7EA7;."><code>&#x5706;&#x62EC;&#x53F7;</code></a></td>
   <td>n/a</td>
   <td><code>( &#x2026; )</code></td>
  </tr>
  <tr>
   <td rowspan="3">18</td>
   <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_Accessors#&#x70B9;&#x7B26;&#x53F7;&#x8868;&#x793A;&#x6CD5;" title="&#x5C5E;&#x6027;&#x8BBF;&#x95EE;&#x5668;&#x63D0;&#x4F9B;&#x4E86;&#x4E24;&#x79CD;&#x65B9;&#x5F0F;&#x7528;&#x4E8E;&#x8BBF;&#x95EE;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x5B83;&#x4EEC;&#x5206;&#x522B;&#x662F;&#x70B9;&#x7B26;&#x53F7;&#x548C;&#x62EC;&#x53F7;&#x3002;"><code>&#x6210;&#x5458;&#x8BBF;&#x95EE;</code></a></td>
   <td>&#x4ECE;&#x5DE6;&#x5230;&#x53F3;</td>
   <td><code>&#x2026; . &#x2026;</code></td>
  </tr>
  <tr>
   <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_Accessors#&#x62EC;&#x53F7;&#x8868;&#x793A;&#x6CD5;" title="&#x5C5E;&#x6027;&#x8BBF;&#x95EE;&#x5668;&#x63D0;&#x4F9B;&#x4E86;&#x4E24;&#x79CD;&#x65B9;&#x5F0F;&#x7528;&#x4E8E;&#x8BBF;&#x95EE;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x5B83;&#x4EEC;&#x5206;&#x522B;&#x662F;&#x70B9;&#x7B26;&#x53F7;&#x548C;&#x62EC;&#x53F7;&#x3002;"><code>&#x9700;&#x8BA1;&#x7B97;&#x7684;&#x6210;&#x5458;&#x8BBF;&#x95EE;</code></a></td>
   <td>&#x4ECE;&#x5DE6;&#x5230;&#x53F3;</td>
   <td><code>&#x2026; [ &#x2026; ]</code></td>
  </tr>
  <tr>
   <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/new" title="new&#x8FD0;&#x7B97;&#x7B26;&#x7684;&#x4F5C;&#x7528;&#x662F;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5B9E;&#x4F8B;&#x3002;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x53EF;&#x4EE5;&#x662F;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x662F;&#x4E00;&#x4E9B;&#x7CFB;&#x7EDF;&#x81EA;&#x5E26;&#x7684;&#x5E26;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x5BF9;&#x8C61;&#x3002;"><code>new</code></a> (&#x5E26;&#x53C2;&#x6570;&#x5217;&#x8868;)</td>
   <td>n/a</td>
   <td><code>new &#x2026; ( &#x2026; )</code></td>
  </tr>
  <tr>
   <td rowspan="2">17</td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions" title="JavaScript/Reference/Operators/Special_Operators/function_call">&#x51FD;&#x6570;&#x8C03;&#x7528;</a></td>
   <td>&#x4ECE;&#x5DE6;&#x5230;&#x53F3;</td>
   <td><code>&#x2026; (&#xA0;<var>&#x2026;&#xA0;</var>)</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new" title="JavaScript/Reference/Operators/Special_Operators/new_Operator">new</a>&#xA0;(&#x65E0;&#x53C2;&#x6570;&#x5217;&#x8868;)</td>
   <td>&#x4ECE;&#x53F3;&#x5230;&#x5DE6;</td>
   <td><code>new &#x2026;</code></td>
  </tr>
  <tr>
   <td rowspan="2">16</td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment" title="JavaScript/Reference/Operators/Arithmetic_Operators">&#x540E;&#x7F6E;&#x9012;&#x589E;</a>(&#x8FD0;&#x7B97;&#x7B26;&#x5728;&#x540E;)</td>
   <td>n/a</td>
   <td><code>&#x2026; ++</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Decrement" title="JavaScript/Reference/Operators/Arithmetic_Operators">&#x540E;&#x7F6E;&#x9012;&#x51CF;</a>(&#x8FD0;&#x7B97;&#x7B26;&#x5728;&#x540E;)</td>
   <td>n/a</td>
   <td><code>&#x2026; --</code></td>
  </tr>
  <tr>
   <td rowspan="9">15</td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_NOT">&#x903B;&#x8F91;&#x975E;</a></td>
   <td>&#x4ECE;&#x53F3;&#x5230;&#x5DE6;</td>
   <td><code>! &#x2026;</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_NOT" title="JavaScript/Reference/Operators/Bitwise_Operators">&#x6309;&#x4F4D;&#x975E;</a></td>
   <td>&#x4ECE;&#x53F3;&#x5230;&#x5DE6;</td>
   <td><code>~ &#x2026;</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_plus" title="JavaScript/Reference/Operators/Arithmetic_Operators">&#x4E00;&#x5143;&#x52A0;&#x6CD5;</a></td>
   <td>&#x4ECE;&#x53F3;&#x5230;&#x5DE6;</td>
   <td><code>+ &#x2026;</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_negation" title="JavaScript/Reference/Operators/Arithmetic_Operators">&#x4E00;&#x5143;&#x51CF;&#x6CD5;</a></td>
   <td>&#x4ECE;&#x53F3;&#x5230;&#x5DE6;</td>
   <td><code>- &#x2026;</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment" title="JavaScript/Reference/Operators/Arithmetic_Operators">&#x524D;&#x7F6E;&#x9012;&#x589E;</a></td>
   <td>&#x4ECE;&#x53F3;&#x5230;&#x5DE6;</td>
   <td><code>++ &#x2026;</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Decrement" title="JavaScript/Reference/Operators/Arithmetic_Operators">&#x524D;&#x7F6E;&#x9012;&#x51CF;</a></td>
   <td>&#x4ECE;&#x53F3;&#x5230;&#x5DE6;</td>
   <td><code>-- &#x2026;</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof" title="JavaScript/Reference/Operators/Special_Operators/typeof_Operator">typeof</a></td>
   <td>&#x4ECE;&#x53F3;&#x5230;&#x5DE6;</td>
   <td><code>typeof &#x2026;</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void" title="JavaScript/Reference/Operators/Special_Operators/void_Operator">void</a></td>
   <td>&#x4ECE;&#x53F3;&#x5230;&#x5DE6;</td>
   <td><code>void &#x2026;</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete" title="JavaScript/Reference/Operators/Special_Operators/delete_Operator">delete</a></td>
   <td>&#x4ECE;&#x53F3;&#x5230;&#x5DE6;</td>
   <td><code>delete &#x2026;</code></td>
  </tr>
  <tr>
   <td rowspan="3">14</td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Multiplication" title="JavaScript/Reference/Operators/Arithmetic_Operators">&#x4E58;&#x6CD5;</a></td>
   <td>&#x4ECE;&#x5DE6;&#x5230;&#x53F3;</td>
   <td><code>&#x2026; *&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Division" title="JavaScript/Reference/Operators/Arithmetic_Operators">&#x9664;&#x6CD5;</a></td>
   <td>&#x4ECE;&#x5DE6;&#x5230;&#x53F3;</td>
   <td><code>&#x2026; /&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder" title="JavaScript/Reference/Operators/Arithmetic_Operators">&#x53D6;&#x6A21;</a></td>
   <td>&#x4ECE;&#x5DE6;&#x5230;&#x53F3;</td>
   <td><code>&#x2026; %&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td rowspan="2">13</td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition" title="JavaScript/Reference/Operators/Arithmetic_Operators">&#x52A0;&#x6CD5;</a></td>
   <td>&#x4ECE;&#x5DE6;&#x5230;&#x53F3;</td>
   <td><code>&#x2026; +&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Subtraction" title="JavaScript/Reference/Operators/Arithmetic_Operators">&#x51CF;&#x6CD5;</a></td>
   <td>&#x4ECE;&#x5DE6;&#x5230;&#x53F3;</td>
   <td><code>&#x2026; -&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td rowspan="3">12</td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators" title="JavaScript/Reference/Operators/Bitwise_Operators">&#x6309;&#x4F4D;&#x5DE6;&#x79FB;</a></td>
   <td>&#x4ECE;&#x5DE6;&#x5230;&#x53F3;</td>
   <td><code>&#x2026; &lt;&lt;&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators" title="JavaScript/Reference/Operators/Bitwise_Operators">&#x6309;&#x4F4D;&#x53F3;&#x79FB;</a></td>
   <td>&#x4ECE;&#x5DE6;&#x5230;&#x53F3;</td>
   <td><code>&#x2026; &gt;&gt;&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators" title="JavaScript/Reference/Operators/Bitwise_Operators">&#x65E0;&#x7B26;&#x53F7;&#x53F3;&#x79FB;</a></td>
   <td>&#x4ECE;&#x5DE6;&#x5230;&#x53F3;</td>
   <td><code>&#x2026; &gt;&gt;&gt;&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td rowspan="6">11</td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Less_than_operator" title="JavaScript/Reference/Operators/Comparison_Operators">&#x5C0F;&#x4E8E;</a></td>
   <td>&#x4ECE;&#x5DE6;&#x5230;&#x53F3;</td>
   <td><code>&#x2026; &lt;&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Less_than__or_equal_operator" title="JavaScript/Reference/Operators/Comparison_Operators">&#x5C0F;&#x4E8E;&#x7B49;&#x4E8E;</a></td>
   <td>&#x4ECE;&#x5DE6;&#x5230;&#x53F3;</td>
   <td><code>&#x2026; &lt;=&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Greater_than_operator" title="JavaScript/Reference/Operators/Comparison_Operators">&#x5927;&#x4E8E;</a></td>
   <td>&#x4ECE;&#x5DE6;&#x5230;&#x53F3;</td>
   <td><code>&#x2026; &gt;&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Greater_than_or_equal_operator" title="JavaScript/Reference/Operators/Comparison_Operators">&#x5927;&#x4E8E;&#x7B49;&#x4E8E;</a></td>
   <td>&#x4ECE;&#x5DE6;&#x5230;&#x53F3;</td>
   <td><code>&#x2026; &gt;=&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in" title="JavaScript/Reference/Operators/Special_Operators/in_Operator">in</a></td>
   <td>&#x4ECE;&#x5DE6;&#x5230;&#x53F3;</td>
   <td><code>&#x2026; in&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof" title="JavaScript/Reference/Operators/Special_Operators/instanceof_Operator">instanceof</a></td>
   <td>&#x4ECE;&#x5DE6;&#x5230;&#x53F3;</td>
   <td><code>&#x2026; instanceof&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td rowspan="4">10</td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality" title="JavaScript/Reference/Operators/Comparison_Operators">&#x7B49;&#x53F7;</a></td>
   <td>&#x4ECE;&#x5DE6;&#x5230;&#x53F3;</td>
   <td><code>&#x2026; ==&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Inequality" title="JavaScript/Reference/Operators/Comparison_Operators">&#x975E;&#x7B49;&#x53F7;</a></td>
   <td>&#x4ECE;&#x5DE6;&#x5230;&#x53F3;</td>
   <td><code>&#x2026; !=&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity" title="JavaScript/Reference/Operators/Comparison_Operators">&#x5168;&#x7B49;&#x53F7;</a></td>
   <td>&#x4ECE;&#x5DE6;&#x5230;&#x53F3;</td>
   <td><code>&#x2026; ===&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Nonidentity" title="JavaScript/Reference/Operators/Comparison_Operators">&#x975E;&#x5168;&#x7B49;&#x53F7;</a></td>
   <td>&#x4ECE;&#x5DE6;&#x5230;&#x53F3;</td>
   <td><code>&#x2026; !==&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td>9</td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND" title="JavaScript/Reference/Operators/Bitwise_Operators">&#x6309;&#x4F4D;&#x4E0E;</a></td>
   <td>&#x4ECE;&#x5DE6;&#x5230;&#x53F3;</td>
   <td><code>&#x2026; &amp;&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td>8</td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR" title="JavaScript/Reference/Operators/Bitwise_Operators">&#x6309;&#x4F4D;&#x5F02;&#x6216;</a></td>
   <td>&#x4ECE;&#x5DE6;&#x5230;&#x53F3;</td>
   <td><code>&#x2026; ^&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td>7</td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_OR" title="JavaScript/Reference/Operators/Bitwise_Operators">&#x6309;&#x4F4D;&#x6216;</a></td>
   <td>&#x4ECE;&#x5DE6;&#x5230;&#x53F3;</td>
   <td><code>&#x2026; |&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td>6</td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_AND" title="JavaScript/Reference/Operators/Logical_Operators">&#x903B;&#x8F91;&#x4E0E;</a></td>
   <td>&#x4ECE;&#x5DE6;&#x5230;&#x53F3;</td>
   <td><code>&#x2026; &amp;&amp;&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td>5</td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_OR" title="JavaScript/Reference/Operators/Logical_Operators">&#x903B;&#x8F91;&#x6216;</a></td>
   <td>&#x4ECE;&#x5DE6;&#x5230;&#x53F3;</td>
   <td><code>&#x2026; ||&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td>4</td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator" title="JavaScript/Reference/Operators/Special_Operators/Conditional_Operator">&#x6761;&#x4EF6;&#x8FD0;&#x7B97;&#x7B26;</a></td>
   <td>&#x4ECE;&#x53F3;&#x5230;&#x5DE6;</td>
   <td><code>&#x2026; ? &#x2026; : &#x2026;</code></td>
  </tr>
  <tr>
   <td rowspan="12">3</td>
   <td rowspan="12"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators" title="JavaScript/Reference/Operators/Assignment_Operators">&#x8D4B;&#x503C;</a></td>
   <td rowspan="12">&#x4ECE;&#x53F3;&#x5230;&#x5DE6;</td>
   <td><code>&#x2026; =&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td><code>&#x2026; +=&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td><code>&#x2026; -=&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td><code>&#x2026; *=&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td><code>&#x2026; /=&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td><code>&#x2026; %=&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td><code>&#x2026; &lt;&lt;=&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td><code>&#x2026; &gt;&gt;=&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td><code>&#x2026; &gt;&gt;&gt;=&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td><code>&#x2026; &amp;=&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td><code>&#x2026; ^=&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td><code>&#x2026; |=&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td rowspan="2" colspan="1">2</td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield" title="JavaScript/Reference/Operators/yield">yield</a></td>
   <td>&#x4ECE;&#x53F3;&#x5230;&#x5DE6;</td>
   <td><code>yield&#xA0;&#x2026;</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*" title="JavaScript/Reference/Operators/yield">yield*</a></td>
   <td>&#x4ECE;&#x53F3;&#x5230;&#x5DE6;</td>
   <td>yield*&#xA0;&#x2026;</td>
  </tr>
  <tr>
   <td>1</td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator" title="JavaScript/Reference/Operators/Spread_operator">&#x5C55;&#x5F00;&#x8FD0;&#x7B97;&#x7B26;</a></td>
   <td>n/a</td>
   <td><code>...</code>&#xA0;&#x2026;</td>
  </tr>
  <tr>
   <td>0</td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator" title="JavaScript/Reference/Operators/Comma_Operator">&#x9017;&#x53F7;</a></td>
   <td>&#x4ECE;&#x5DE6;&#x5230;&#x53F3;</td>
   <td><code>&#x2026; ,&#xA0;&#x2026;</code></td>
  </tr>
 </tbody>
</table>

<p>&#xA0;</p>
                  
                
              