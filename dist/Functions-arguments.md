
                
                  
                    <div>
<div>
<div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>
</div>
</div>

<p><strong><code>arguments</code></strong>&#xA0;&#x662F;&#x4E00;&#x4E2A;&#x7C7B;&#x4F3C;&#x6570;&#x7EC4;&#x7684;&#x5BF9;&#x8C61;, &#x5BF9;&#x5E94;&#x4E8E;&#x4F20;&#x9012;&#x7ED9;&#x51FD;&#x6570;&#x7684;&#x53C2;&#x6570;&#x3002;</p>

<h3 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h3>

<pre class="syntaxbox">arguments</pre>

<h2 id="Description" name="Description">&#x63CF;&#x8FF0;</h2>

<p>arguments&#x5BF9;&#x8C61;&#x662F;&#x6240;&#x6709;&#x51FD;&#x6570;&#x4E2D;&#x53EF;&#x7528;&#x7684;&#x5C40;&#x90E8;&#x53D8;&#x91CF;&#x3002;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;arguments&#x5BF9;&#x8C61;&#x5728;&#x51FD;&#x6570;&#x4E2D;&#x5F15;&#x7528;&#x51FD;&#x6570;&#x7684;&#x53C2;&#x6570;&#x3002;&#x6B64;&#x5BF9;&#x8C61;&#x5305;&#x542B;&#x4F20;&#x9012;&#x7ED9;&#x51FD;&#x6570;&#x7684;&#x6BCF;&#x4E2A;&#x53C2;&#x6570;&#x7684;&#x6761;&#x76EE;&#xFF0C;&#x7B2C;&#x4E00;&#x4E2A;&#x6761;&#x76EE;&#x7684;&#x7D22;&#x5F15;&#x4ECE;0&#x5F00;&#x59CB;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x5982;&#x679C;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x4F20;&#x9012;&#x4E86;&#x4E09;&#x4E2A;&#x53C2;&#x6570;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x53C2;&#x8003;&#x5B83;&#x4EEC;&#x5982;&#x4E0B;&#xFF1A;</p>

<pre class="brush: js">arguments[0]
arguments[1]
arguments[2]
</pre>

<p>&#x53C2;&#x6570;&#x4E5F;&#x53EF;&#x4EE5;&#x88AB;&#x8BBE;&#x7F6E;:</p>

<pre class="brush: js">arguments[1] = &apos;new value&apos;;</pre>

<p>arguments&#x5BF9;&#x8C61;&#x4E0D;&#x662F;&#x4E00;&#x4E2A; <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Array"><code>Array</code></a>&#xA0;&#x3002;&#x5B83;&#x7C7B;&#x4F3C;&#x4E8E;&#x6570;&#x7EC4;&#xFF0C;&#x4F46;&#x9664;&#x4E86;&#xA0;<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/length">&#x957F;&#x5EA6;</a>&#x4E4B;&#x5916;&#x6CA1;&#x6709;&#x4EFB;&#x4F55;&#x6570;&#x7EC4;&#x5C5E;&#x6027;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x5B83;&#x6CA1;&#x6709;&#xA0;<a title="JavaScript/Reference/Global_Objects/Array/pop" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop">pop</a>&#xA0;&#x65B9;&#x6CD5;&#x3002;&#x4F46;&#x662F;&#x5B83;&#x53EF;&#x4EE5;&#x88AB;&#x8F6C;&#x6362;&#x4E3A;&#x4E00;&#x4E2A;&#x771F;&#x6B63;&#x7684;&#x6570;&#x7EC4;&#xFF1A;&#xFF1A;</p>

<pre class="brush: js">var args = Array.prototype.slice.call(arguments); 

var args = [].slice.call(arguments);
</pre>

<p>&#x4F60;&#x8FD8;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; &#xA0;<a title="Array.from() &#x65B9;&#x6CD5;&#x4ECE;&#x7C7B;&#x4F3C;&#x6570;&#x7EC4;&#x6216;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x6570;&#x7EC4;&#x5B9E;&#x4F8B;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from"><code>Array.from()</code></a>&#x65B9;&#x6CD5;&#x6216; <a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_operator">spread &#x8FD0;&#x7B97;&#x7B26;</a>&#x5C06; arguments &#x8F6C;&#x6362;&#x4E3A;&#x771F;&#x6B63;&#x7684;&#x6570;&#x7EC4;&#xFF1A;</p>

<pre><code>var args = Array.from(arguments);
var args = [...arguments];</code></pre>

<div class="warning">
<p>&#x4E0D;&#x5E94;&#x5728;&#xA0;arguments &#x5BF9;&#x8C61;&#x4E0A;&#x4F7F;&#x7528; slice &#x65B9;&#x6CD5;&#xFF0C;&#x8FD9;&#x4F1A;&#x963B;&#x788D; JavaScript &#x5F15;&#x64CE;&#x7684;&#x4F18;&#x5316;&#xA0;(&#x6BD4;&#x5982; V8 &#x5F15;&#x64CE;)&#x3002;&#x4F5C;&#x4E3A;&#x66FF;&#x4EE3;&#xFF0C;&#x5E94;&#x901A;&#x8FC7;&#x904D;&#x5386;&#xA0;arguments &#x5BF9;&#x8C61;&#x7684;&#x65B9;&#x5F0F;&#x6765;&#x6784;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x6570;&#x7EC4;&#x3002;<a class="external" href="https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments">&#x66F4;&#x591A;&#x4FE1;&#x606F;</a>&#x3002;</p>
</div>

<p>&#x5982;&#x679C;&#xA0;<a title="https://developer.mozilla.org/zh-CN/docs/JavaScript/Reference/Global_Objects/Array#Array_generic_methods" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#Array_generic_methods">Array generics</a> &#x53EF;&#x7528;&#x7684;&#x8BDD;&#xFF0C;&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x53EF;&#x4EE5;&#x4F5C;&#x4E3A;&#x66FF;&#x4EE3;:</p>

<pre class="brush: js">var args = Array.slice(arguments);</pre>

<p><code>arguments</code>&#xA0;&#x5BF9;&#x8C61;&#x4EC5;&#x5728;&#x51FD;&#x6570;&#x5185;&#x90E8;&#x6709;&#x6548;&#xFF0C;&#x5728;&#x51FD;&#x6570;&#x5916;&#x90E8;&#x8C03;&#x7528; arguments &#x5BF9;&#x8C61;&#x4F1A;&#x51FA;&#x73B0;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#x3002;</p>

<p>&#x5982;&#x679C;&#x4F60;&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#xFF0C;&#x5F53;&#x8FD9;&#x4E2A;&#x51FD;&#x6570;&#x7684;&#x53C2;&#x6570;&#x6570;&#x91CF;&#x6BD4;&#x5B83;&#x663E;&#x5F0F;&#x58F0;&#x660E;&#x7684;&#x53C2;&#x6570;&#x6570;&#x91CF;&#x66F4;&#x591A;&#x7684;&#x65F6;&#x5019;&#xFF0C;&#x4F60;&#x5C31;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#xA0;<code>arguments</code> &#x5BF9;&#x8C61;&#x3002;&#x8FD9;&#x4E2A;&#x6280;&#x672F;&#x5BF9;&#x4E8E;&#x53C2;&#x6570;&#x6570;&#x91CF;&#x662F;&#x4E00;&#x4E2A;&#x53EF;&#x53D8;&#x91CF;&#x7684;&#x51FD;&#x6570;&#x6765;&#x8BF4;&#x6BD4;&#x8F83;&#x6709;&#x7528;&#x3002;&#xA0;&#x4F60;&#x53EF;&#x4EE5;&#x7528;&#xA0;<code><a title="JavaScript/Reference/Functions_and_function_scope/arguments/length" href="/zh-CN/docs/JavaScript/Reference/Functions_and_function_scope/arguments/length">arguments.length</a></code> &#x6765;&#x5F97;&#x5230;&#x53C2;&#x6570;&#x7684;&#x6570;&#x91CF;&#xFF0C;&#x7136;&#x540E;&#x53EF;&#x4EE5;&#x7528;&#xA0;<code>arguments</code> object &#x6765;&#x5BF9;&#x6BCF;&#x4E2A;&#x53C2;&#x6570;&#x8FDB;&#x884C;&#x5904;&#x7406;&#x3002;&#xA0;(&#x60F3;&#x8981;&#x5F97;&#x5230;&#x51FD;&#x6570;&#x7B7E;&#x540D;&#x7684;&#x53C2;&#x6570;&#x6570;&#x91CF;, &#x8BF7;&#x4F7F;&#x7528;&#xA0;<code><a title="JavaScript/Reference/Global_Objects/Function/length" href="/zh-CN/docs/JavaScript/Reference/Global_Objects/Function/length">Function.length</a></code> &#x5C5E;&#x6027;&#x3002;)</p>

<h2 id="Properties" name="Properties">&#x5C5E;&#x6027;</h2>

<dl>
 <dt><code><a title="JavaScript/Reference/Functions_and_function_scope/arguments/callee" href="/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/callee">arguments.callee</a></code></dt>
 <dd>&#x6307;&#x5411;&#x5F53;&#x524D;&#x6267;&#x884C;&#x7684;&#x51FD;&#x6570;&#x3002;</dd>
 <dt><code><a title="JavaScript/Reference/Functions_and_function_scope/arguments/caller" href="/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/caller">arguments.caller</a></code> <span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span></dt>
 <dd>&#x6307;&#x5411;&#x8C03;&#x7528;&#x5F53;&#x524D;&#x51FD;&#x6570;&#x7684;&#x51FD;&#x6570;&#x3002;</dd>
 <dt><code><a title="JavaScript/Reference/Functions_and_function_scope/arguments/length" href="/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/length">arguments.length</a></code></dt>
 <dd>&#x6307;&#x5411;&#x4F20;&#x9012;&#x7ED9;&#x5F53;&#x524D;&#x51FD;&#x6570;&#x7684;&#x53C2;&#x6570;&#x6570;&#x91CF;&#x3002;</dd>
</dl>

<h2 id="Examples" name="Examples">&#x4F8B;&#x5B50;</h2>

<h3 id="Example:_Defining_function_that_concatenates_several_strings" name="Example:_Defining_function_that_concatenates_several_strings">&#x4F8B;&#x5B50;: &#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x8FDE;&#x63A5;&#x51E0;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x51FD;&#x6570;</h3>

<p>&#x8FD9;&#x4E2A;&#x4F8B;&#x5B50;&#x5B9A;&#x4E49;&#x4E86;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x6765;&#x8FDE;&#x63A5;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x8FD9;&#x4E2A;&#x51FD;&#x6570;&#x552F;&#x4E00;&#x6B63;&#x5F0F;&#x58F0;&#x660E;&#x4E86;&#x7684;&#x53C2;&#x6570;&#x662F;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8BE5;&#x53C2;&#x6570;&#x6307;&#x5B9A;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4F5C;&#x4E3A;&#x8854;&#x63A5;&#x70B9;&#x6765;&#x8FDE;&#x63A5;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x8BE5;&#x51FD;&#x6570;&#x5B9A;&#x4E49;&#x5982;&#x4E0B;&#xFF1A;</p>

<pre class="brush:js">function myConcat(separator) {
  var args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}</pre>

<p>&#x4F60;&#x53EF;&#x4EE5;&#x4F20;&#x9012;&#x4EFB;&#x610F;&#x6570;&#x91CF;&#x7684;&#x53C2;&#x6570;&#x5230;&#x8BE5;&#x51FD;&#x6570;&#xFF0C;&#x7136;&#x540E;&#x8BE5;&#x51FD;&#x6570;&#x4F1A;&#x5C06;&#x6BCF;&#x4E2A;&#x53C2;&#x6570;&#x4F5C;&#x4E3A;&#x4E00;&#x4E2A;&#x6761;&#x76EE;&#x6765;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5217;&#x8868;&#x3002;</p>

<pre class="brush:js">// returns &quot;red, orange, blue&quot;
myConcat(&quot;, &quot;, &quot;red&quot;, &quot;orange&quot;, &quot;blue&quot;);

// returns &quot;elephant; giraffe; lion; cheetah&quot;
myConcat(&quot;; &quot;, &quot;elephant&quot;, &quot;giraffe&quot;, &quot;lion&quot;, &quot;cheetah&quot;);

// returns &quot;sage. basil. oregano. pepper. parsley&quot;
myConcat(&quot;. &quot;, &quot;sage&quot;, &quot;basil&quot;, &quot;oregano&quot;, &quot;pepper&quot;, &quot;parsley&quot;);</pre>

<h3 id="Example:_Defining_a_function_that_creates_HTML_lists" name="Example:_Defining_a_function_that_creates_HTML_lists">&#x4F8B;&#x5B50;: &#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x521B;&#x5EFA;HTML&#x5217;&#x8868;&#x7684;&#x65B9;&#x6CD5;</h3>

<p>&#x8FD9;&#x4E2A;&#x4F8B;&#x5B50;&#x5B9A;&#x4E49;&#x4E86;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x901A;&#x8FC7;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x6765;&#x521B;&#x5EFA;HTML&#x5217;&#x8868;&#x3002;&#x8FD9;&#x4E2A;&#x51FD;&#x6570;&#x552F;&#x4E00;&#x6B63;&#x5F0F;&#x58F0;&#x660E;&#x4E86;&#x7684;&#x53C2;&#x6570;&#x662F;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x3002;&#x5F53;&#x8BE5;&#x53C2;&#x6570;&#x4E3A;&#xA0;&quot;<code>u</code>&quot; &#x65F6;&#xFF0C;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65E0;&#x5E8F;&#x5217;&#x8868;&#xA0;(&#x9879;&#x76EE;&#x5217;&#x8868;)&#xFF1B;&#x5F53;&#x8BE5;&#x53C2;&#x6570;&#x4E3A;&#xA0;&quot;<code>o</code>&quot; &#x65F6;&#xFF0C;&#x5219;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x6709;&#x5E8F;&#x5217;&#x8868; (&#x7F16;&#x53F7;&#x5217;&#x8868;)&#x3002;&#x8BE5;&#x51FD;&#x6570;&#x5B9A;&#x4E49;&#x5982;&#x4E0B;&#xFF1A;</p>

<pre style="padding: 1em 0px 1em 30px; font-size: 14px; white-space: normal;" class="brush:js  language-js"><code style="direction: ltr; white-space: pre;" class="language-js"><span style="color: #0077aa;" class="keyword token">function</span> <span style="color: #dd4a68;" class="function token">list<span style="color: #999999;" class="punctuation token">(</span></span>type<span style="color: #999999;" class="punctuation token">)</span> <span style="color: #999999;" class="punctuation token">{</span>
  <span style="color: #0077aa;" class="keyword token">var</span> result <span style="background: rgba(255, 255, 255, 0.498039); color: #a67f59;" class="operator token">=</span> <span style="color: #669900;" class="string token">&quot;&lt;&quot;</span> <span style="background: rgba(255, 255, 255, 0.498039); color: #a67f59;" class="operator token">+</span> type <span style="background: rgba(255, 255, 255, 0.498039); color: #a67f59;" class="operator token">+</span> <span style="color: #669900;" class="string token">&quot;l&gt;&lt;li&gt;&quot;</span><span style="color: #999999;" class="punctuation token">;</span>
  <span style="color: #0077aa;" class="keyword token">var</span> args <span style="background: rgba(255, 255, 255, 0.498039); color: #a67f59;" class="operator token">=</span> Array<span style="color: #999999;" class="punctuation token">.</span>prototype<span style="color: #999999;" class="punctuation token">.</span>slice<span style="color: #999999;" class="punctuation token">.</span><span style="color: #dd4a68;" class="function token">call<span style="color: #999999;" class="punctuation token">(</span></span>arguments<span style="color: #999999;" class="punctuation token">,</span> <span style="color: #990055;" class="number token">1</span><span style="color: #999999;" class="punctuation token">)</span><span style="color: #999999;" class="punctuation token">;</span>
  result <span style="background: rgba(255, 255, 255, 0.498039); color: #a67f59;" class="operator token">+</span><span style="background: rgba(255, 255, 255, 0.498039); color: #a67f59;" class="operator token">=</span> args<span style="color: #999999;" class="punctuation token">.</span><span style="color: #dd4a68;" class="function token">join<span style="color: #999999;" class="punctuation token">(</span></span><span style="color: #669900;" class="string token">&quot;&lt;/li&gt;&lt;li&gt;&quot;</span><span style="color: #999999;" class="punctuation token">)</span><span style="color: #999999;" class="punctuation token">;</span>
  result <span style="background: rgba(255, 255, 255, 0.498039); color: #a67f59;" class="operator token">+</span><span style="background: rgba(255, 255, 255, 0.498039); color: #a67f59;" class="operator token">=</span> <span style="color: #669900;" class="string token">&quot;&lt;/li&gt;&lt;/&quot;</span> <span style="background: rgba(255, 255, 255, 0.498039); color: #a67f59;" class="operator token">+</span> type <span style="background: rgba(255, 255, 255, 0.498039); color: #a67f59;" class="operator token">+</span> <span style="color: #669900;" class="string token">&quot;l&gt;&quot;</span><span style="color: #999999;" class="punctuation token">;</span><span style="color: #708090;" class="comment token"> // end list
</span>
  <span style="color: #0077aa;" class="keyword token">return</span> result<span style="color: #999999;" class="punctuation token">;</span>
<span style="color: #999999;" class="punctuation token">}</span></code></pre>

<p>&#x4F60;&#x53EF;&#x4EE5;&#x4F20;&#x9012;&#x4EFB;&#x610F;&#x6570;&#x91CF;&#x7684;&#x53C2;&#x6570;&#x5230;&#x8BE5;&#x51FD;&#x6570;&#xFF0C;&#x7136;&#x540E;&#x8BE5;&#x51FD;&#x6570;&#x4F1A;&#x5C06;&#x6BCF;&#x4E2A;&#x53C2;&#x6570;&#x4F5C;&#x4E3A;&#x4E00;&#x4E2A;&#x6761;&#x76EE;&#x6DFB;&#x52A0;&#x5230;&#x7B2C;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#x6307;&#x5B9A;&#x7C7B;&#x578B;&#x7684;&#x5217;&#x8868;&#x5F53;&#x4E2D;&#x3002;</p>

<pre style="padding: 1em 0px 1em 30px; font-size: 14px; white-space: normal;" class="brush:js  language-js"><code style="direction: ltr; white-space: pre;" class="language-js"><span style="color: #0077aa;" class="keyword token">var</span> listHTML <span style="background: rgba(255, 255, 255, 0.498039); color: #a67f59;" class="operator token">=</span> <span style="color: #dd4a68;" class="function token">list<span style="color: #999999;" class="punctuation token">(</span></span><span style="color: #669900;" class="string token">&quot;u&quot;</span><span style="color: #999999;" class="punctuation token">,</span> <span style="color: #669900;" class="string token">&quot;One&quot;</span><span style="color: #999999;" class="punctuation token">,</span> <span style="color: #669900;" class="string token">&quot;Two&quot;</span><span style="color: #999999;" class="punctuation token">,</span> <span style="color: #669900;" class="string token">&quot;Three&quot;</span><span style="color: #999999;" class="punctuation token">)</span><span style="color: #999999;" class="punctuation token">;</span>

<span style="color: #708090;" class="comment token">/* listHTML is:

&quot;&lt;ul&gt;&lt;li&gt;One&lt;/li&gt;&lt;li&gt;Two&lt;/li&gt;&lt;li&gt;Three&lt;/li&gt;&lt;/ul&gt;&quot;

*/</span></code></pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x5F53;&#x524D;&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x91CA;</th>
  </tr>
  <tr>
   <td><a title="ECMAScript 1st Edition (ECMA-262)" hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf">ECMAScript 1st Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x521D;&#x6B21;&#x5B9A;&#x4E49;&#x3002; &#x5728;JavaScript 1.1&#x4E2D;&#x5B9E;&#x73B0;</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-10.6">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Arguments Object</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-arguments-exotic-objects">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Arguments Exotic Objects</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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

<h2 id="See_also" name="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Function"><code>Function</code></a></li>
</ul>
                  
                
              