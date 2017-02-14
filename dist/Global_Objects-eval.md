
                
                  
                    <div>
<div>
<div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>
</div>
</div>

<h2 name="Summary" id="Summary">&#x6458;&#x8981;</h2>

<p>&#x5C06;&#x4E00;&#x4E2A;JavaScript&#x4EE3;&#x7801;&#x5B57;&#x7B26;&#x4E32;&#x6C42;&#x503C;&#x6210;&#x7279;&#x5B9A;&#x7684;&#x5BF9;&#x8C61;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>eval(<em>string</em>)</code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>string</code></dt>
 <dd>&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x4E86;&#x4E00;&#x4E2A;JavaScript&#x8868;&#x8FBE;&#x5F0F;&#xFF0C;&#x58F0;&#x660E;&#xFF0C;&#xA0;&#x6216;&#x58F0;&#x660E;&#x7684;&#x5E8F;&#x5217;&#x3002;&#x8868;&#x8FBE;&#x5F0F;&#x53EF;&#x4EE5;&#x5305;&#x62EC;&#x53D8;&#x91CF;&#x548C;&#x5DF2;&#x5B58;&#x5728;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#x3002;</dd>
 <dt><code>object</code></dt>
 <dd><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></dd>
 <dd>An optional argument; if specified, the evaluation is restricted to the context of the specified object.</dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p><code>eval()</code>&#x662F;&#x4E00;&#x4E2A;&#x9876;&#x7EA7;&#x51FD;&#x6570;&#x5E76;&#x4E14;&#x8DDF;&#x4EFB;&#x4F55;&#x5BF9;&#x8C61;&#x65E0;&#x5173;&#x3002;</p>

<p><code>eval()</code>&#x7684;&#x53C2;&#x6570;&#x662F;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x5982;&#x679C;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x4E86;&#x4E00;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;&#xFF0C;<span style="font-family: consolas,monaco,andale mono,monospace;">eval()</span>&#x4F1A;&#x5BF9;&#x8868;&#x8FBE;&#x5F0F;&#x6C42;&#x503C;&#x3002;&#x5982;&#x679C;&#x53C2;&#x6570;&#x8868;&#x793A;&#x4E86;&#x4E00;&#x4E2A;&#x6216;&#x591A;&#x4E2A;JavaScript&#x58F0;&#x660E;&#xFF0C;&#xA0;&#x90A3;&#x4E48;<span style="font-family: consolas,monaco,andale mono,monospace;">eval()</span>&#x4F1A;&#x6267;&#x884C;&#x58F0;&#x660E;&#x3002;&#x4E0D;&#x8981;&#x8C03;&#x7528;<span style="font-family: consolas,monaco,andale mono,monospace;">eval()</span>&#x6765;&#x4E3A;&#x7B97;&#x6570;&#x8868;&#x8FBE;&#x5F0F;&#x6C42;&#x503C;&#xFF1B;&#xA0;JavaScript &#x4F1A;&#x81EA;&#x52A8;&#x4E3A;&#x7B97;&#x6570;&#x8868;&#x8FBE;&#x5F0F;&#x6C42;&#x503C;&#x3002;</p>

<p>&#x5982;&#x679C;&#x8981;&#x5C06;&#x7B97;&#x6570;&#x8868;&#x8FBE;&#x5F0F;&#x6784;&#x9020;&#x6210;&#x4E3A;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x7528;<span style="font-family: consolas,monaco,andale mono,monospace;">eval()</span>&#x5728;&#x968F;&#x540E;&#x5BF9;&#x5176;&#x6C42;&#x503C;&#x3002;&#x6BD4;&#x5982;&#xFF0C;&#x4F60;&#x6709;&#x4E00;&#x4E2A;&#x53D8;&#x91CF; x &#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x8FBE;&#x5F0F;&#x6765;&#x5BF9;&#x6D89;&#x53CA;x&#x7684;&#x8868;&#x8FBE;&#x5F0F;&#x5EF6;&#x8FDF;&#x6C42;&#x503C;&#xFF0C;&#x5C06;&#xA0;&quot;<code>3 * x + 2</code>&quot;&#xFF0C;&#x5F53;&#x4F5C;&#x53D8;&#x91CF;&#xFF0C;&#x901A;&#x8FC7;&#x5728;&#x811A;&#x672C;&#x4E2D;&#x8C03;&#x7528;<span style="font-family: consolas,monaco,andale mono,monospace;">eval()</span>&#xFF0C;&#x968F;&#x540E;&#x6C42;&#x503C;&#x3002;</p>

<p><code><font face="Open Sans, Arial, sans-serif">&#x5982;&#x679C;&#x53C2;&#x6570;&#x4E0D;&#x662F;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;</font></code><span style="font-family: consolas,monaco,andale mono,monospace;">eval()</span><code>&#x5C06;&#x4F1A;&#x5C06;&#x53C2;&#x6570;&#x539F;&#x5C01;&#x4E0D;&#x52A8;&#x7684;&#x8FD4;&#x56DE;&#x3002;</code>&#x5728;&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x4E2D;&#xFF0C;&#x5B57;&#x7B26;&#x4E32;&#x6784;&#x9020;&#x5668;&#x662F;&#x6307;&#x5B9A;&#x7684;&#xFF0C;<span style="font-family: consolas,monaco,andale mono,monospace;">eval()</span>&#x8FD4;&#x56DE;&#x4E86;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#x800C;&#x4E0D;&#x662F;&#x5BF9;&#x5B57;&#x7B26;&#x4E32;&#x6C42;&#x503C;&#x3002;</p>

<pre class="brush: js">eval(new String(&quot;2 + 2&quot;)); // &#x8FD4;&#x56DE;&#x4E86;&#x5305;&#x542B;&quot;2 + 2&quot;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;
eval(&quot;2 + 2&quot;);             // returns 4
</pre>

<p>&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x53D8;&#x901A;&#x7684;&#x65B9;&#x6CD5;&#x6765;&#x5E94;&#x5BF9;&#x8FD9;&#x4E2A;&#x9650;&#x5236;&#xFF0C;&#x5982;&#x4F7F;&#x7528;<code>toString()</code></p>

<pre class="brush: js">var expression = new String(&quot;2 + 2&quot;);
eval(expression.toString());
</pre>

<p>&#x4F60;&#x53EF;&#x4EE5;&#x95F4;&#x63A5;&#x7684;&#x4F7F;&#x7528;&#xA0;<span style="font-family: consolas,monaco,andale mono,monospace;">eval()</span>, &#x5982;&#x4F7F;&#x7528;&#x53D8;&#x91CF;&#x6765;&#x5F15;&#x7528;&#xA0;<code>eval()</code>&#xFF0C;&#x7136;&#x540E;&#x8C03;&#x7528;&#x5B83;&#x3002;&#xA0;&#x5982;&#x679C;&#x4F60;&#x8FD9;&#x4E48;&#x505A;&#x4E86;&#xFF0C;&#x90A3;&#x4E48;&#x8FD9;&#x4E2A;&#x65F6;&#x5019;&#x76EE;&#x6807;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x7684; javascript &#x4EE3;&#x7801;&#x5C06;&#x88AB;&#x76F4;&#x63A5;&#x89C6;&#x4E3A;&#x5728;&#x5168;&#x5C40;&#x4F5C;&#x7528;&#x57DF;&#x4E0B;&#x6267;&#x884C;, &#x8FD9;&#x662F;&#x56E0;&#x4E3A; ES &#x89C4;&#x8303;&#x91CC;&#x660E;&#x786E;&#x89C4;&#x5B9A;&#x4E86;&#x5BF9; eval &#x7684; &#x76F4;&#x63A5;&#x8C03;&#x7528;&#x548C;&#x95F4;&#x63A5;&#x8C03;&#x7528;&#x4F1A;&#x88AB;&#x533A;&#x522B;&#x5BF9;&#x5F85;&#x3002;&#x56E0;&#x6B64;, &#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x4E2D;&#x4FBF;&#x51FA;&#x73B0;&#x4E86; x &#x672A;&#x5B9A;&#x4E49; &#x7684;&#x72B6;&#x51B5;:</p>

<pre class="brush: js">function test() {
  var x = 2, y = 4;
  console.log(eval(&quot;x + y&quot;));  // &#x76F4;&#x63A5;&#x8C03;&#x7528;&#xFF0C;&#x4F7F;&#x7528;&#x672C;&#x5730;&#x4F5C;&#x7528;&#x57DF;&#xFF0C;&#x7ED3;&#x679C;&#x662F; 6
  var geval = eval;
  console.log(geval(&quot;x + y&quot;)); // &#x95F4;&#x63A5;&#x8C03;&#x7528;&#xFF0C;&#x4F7F;&#x7528;&#x5168;&#x5C40;&#x4F5C;&#x7528;&#x57DF;&#xFF0C;throws ReferenceError &#x56E0;&#x4E3A;`x`&#x672A;&#x5B9A;&#x4E49;
}</pre>

<h2 name="Don.27t_use_eval.21" id="Don.27t_use_eval.21">&#x907F;&#x514D;&#x5728;&#x4E0D;&#x5FC5;&#x8981;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#x4F7F;&#x7528;eval</h2>

<p><code>eval()</code>&#xA0;&#x662F;&#x4E00;&#x4E2A;&#x5371;&#x9669;&#x7684;&#x51FD;&#x6570;&#xFF0C;&#xA0;&#x5B83;&#x53EF;&#x4EE5;&#x50CF;&#x62E5;&#x6709;&#x8C03;&#x7528;&#x8005;&#x7684;&#x6743;&#x529B;&#x4E00;&#x6837;&#x8C03;&#x7528;&#x4EE3;&#x7801;&#x3002;&#x5982;&#x679C;&#x4F60;&#x4F7F;&#x7528;&#x4E86;&#x5B57;&#x7B26;&#x4E32;&#x6765;&#x8FD0;&#x884C;<span style="font-family: consolas,monaco,andale mono,monospace;">eval()</span>&#xFF0C;&#x90A3;&#x4E48;&#x4F60;&#x7684;&#x4EE3;&#x7801;&#x53EF;&#x80FD;&#x88AB;&#x6076;&#x610F;&#x65B9;&#xFF08;&#x4E0D;&#x6000;&#x597D;&#x610F;&#x7684;&#x4EBA;&#xFF09;&#x5F71;&#x54CD;, &#x901A;&#x8FC7;&#x5728;&#x4F7F;&#x7528;&#x65B9;&#x7684;&#x673A;&#x5668;&#x4E0A;&#x4F7F;&#x7528;&#x6076;&#x610F;&#x4EE3;&#x7801;&#xFF0C;&#x53EF;&#x80FD;&#x8BA9;&#x4F60;&#x5931;&#x53BB;&#x5728;&#x7F51;&#x9875;&#x6216;&#x8005;&#x6269;&#x5C55;&#x7A0B;&#x5E8F;&#x4E0A;&#x7684;&#x6743;&#x9650;&#x3002;</p>

<p>&#x5E38;&#x89C4;&#x7528;&#x4F8B;&#x7684;&#x5B89;&#x5168;&#x4F1A;&#x88AB;<span style="font-family: consolas,monaco,andale mono,monospace;">eval()</span>&#x6539;&#x53D8;&#x3002;</p>

<h3 name="Parsing_JSON" id="Parsing_JSON">&#x89E3;&#x6790; JSON</h3>

<p><a href="/zh-CN/docs/Downloading_JSON_and_JavaScript_in_extensions">&#x5728;&#x6269;&#x5C55;&#x4E2D;&#x4E0B;&#x8F7D;JSON&#x548C;JavaScript</a></p>

<h4 name="Accessing_member_properties" id="Accessing_member_properties">&#x8F6C;&#x5316;&#x6210;&#x5458;&#x5C5E;&#x6027;</h4>

<p>&#x4F60;&#x4E0D;&#x5E94;&#x8BE5;&#x5728;&#x5C5E;&#x6027;&#x91CC;&#x901A;&#x8FC7;eval&#x6765;&#x8F6C;&#x5316;&#x5C5E;&#x6027;&#x3002;&#x8003;&#x8651;&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#xFF1A;&#xA0;<code>getFieldName(n)</code> &#x51FD;&#x6570;&#x5C06;&#x6307;&#x5B9A;&#x7684;&#x8868;&#x5355;&#x5143;&#x7D20;&#x6309;&#x5B57;&#x7B26;&#x4E32;&#x8FD4;&#x56DE;&#xFF0C;&#xA0;&#x5C06;&#x8868;&#x5355;&#x7684;&#x7B2C;&#x4E09;&#x4E2A;&#x5143;&#x7D20;&#x8D4B;&#x503C;&#x7ED9;&#x4E86;&#x4E00;&#x4E2A;&#x53D8;&#x91CF;&#x58F0;&#x660E; field &#xFF0C;&#x7B2C;&#x4E8C;&#x53E5;&#x58F0;&#x660E;&#x4F7F;&#x7528;<span style="font-family: consolas,monaco,andale mono,monospace;">eval()</span>&#x6765;&#x5C55;&#x793A;&#x8868;&#x5355;&#x5143;&#x7D20;&#x7684;&#x503C;&#x3002;</p>

<pre class="brush: js">var field = getFieldName(3);
document.write(&quot;The field named &quot;, field, &quot; has value of &quot;,
   eval(field + &quot;.value&quot;));
</pre>

<p>&#x4E5F;&#x8BB8;&#xFF0C;&#x8FD9;&#x91CC;&#x7684;<span style="font-family: consolas,monaco,andale mono,monospace;">eval()&#x4E0D;&#x662F;&#x5FC5;&#x8981;&#x7684;&#xFF0C;</span>&#x4E8B;&#x5B9E;&#x4E0A;&#xFF0C;&#x8FD9;&#x91CC;&#x4F7F;&#x7528;<span style="font-family: consolas,monaco,andale mono,monospace;">eval()&#x662F;&#x4E0D;&#x9F13;&#x52B1;&#x7684;&#x3002;</span>&#xA0;&#x53D6;&#x800C;&#x4EE3;&#x4E4B;&#x7684;&#x662F;&#x4F7F;&#x7528;&#xA0;<a href="cn/Core_JavaScript_1.5_Reference/Operators/Member_Operators">member operators</a>, &#x90A3;&#x4F1A;&#x5FEB;&#x5F88;&#x591A;:</p>

<pre class="brush: js">var field = getFieldName(3);
document.write(&quot;The field named &quot;, field, &quot; has value of &quot;,
   field[value]);
</pre>

<h3 name="Cross-implementation_compatibility" id="Cross-implementation_compatibility">Cross-implementation compatibility</h3>

<p>&#x5E94;&#x8BE5;&#x88AB;&#x6CE8;&#x610F;&#x7684;&#x662F;&#xFF0C;eval&#x7684;&#x7B2C;&#x4E8C;&#x4E2A;&#x53C2;&#x6570;&#x662F;&#x975E;&#x6807;&#x51C6;&#x7684;&#xFF0C;&#x5728;JavaScript&#x5B9E;&#x73B0;&#x4E2D;&#x4E0D;&#x88AB;&#x652F;&#x6301;&#x7684;&#xFF1B;&#x5728;&#x5199;&#x8FD9;&#x7BC7;&#x6587;&#x7AE0;&#x7684;&#x65F6;&#x5019;&#xFF0C;<a href="cn/Rhino">Rhino</a>&#x6CA1;&#x6709;&#x63D0;&#x4F9B;&#x652F;&#x6301;&#xFF0C;&#x4E5F;&#x4E0D;&#x662F; Safari&apos;s &#x7684;&#x6838;&#x5FC3;JavaScript&#x4EE3;&#x7801;&#x3002;</p>

<p>&#x4E3A;&#x4E86;&#x7EF4;&#x6301;&#x517C;&#x5BB9;&#x6027;&#xFF0C;&#x91C7;&#x7528;&#x4EA4;&#x53C9;&#x5B9E;&#x73B0;&#xFF0C;&#x5B83;&#x88AB;&#x63A8;&#x8350;&#x7B2C;&#x4E8C;&#x4E2A;&#x53C2;&#x6570;&#x4E0D;&#x88AB;&#x4F7F;&#x7528;&#xFF0C;&#x4E3A;&#x4E86;&#x8FBE;&#x5230;&#x76F8;&#x540C;&#x7684;&#x6548;&#x679C;&#xFF0C;&#x4E0D;&#x5982;&#x4F7F;&#x7528; with &#x58F0;&#x660E; &#x3002;</p>

<pre class="brush: js">eval(<em>string</em>,<em>object</em>);
</pre>

<p>&#x4F7F;&#x7528;</p>

<pre class="brush: js">with (<em>object</em>) {
  eval(<em>string</em>);
}
</pre>

<h2 name="Examples" id="Examples">&#x4F8B;&#x5B50;</h2>

<p>&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x5C55;&#x793A;&#x4E86;&#x4F7F;&#x7528;&#xA0;<code>document.write&#x6765;&#x8F93;&#x51FA;&#x3002;</code>&#x5728;&#x670D;&#x52A1;&#x5668;&#x7AEF;&#x7684; JavaScript&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;write &#x51FD;&#x6570;&#x6765;&#x8FBE;&#x5230;document.write&#x7684;&#x6548;&#x679C;&#x3002;</p>

<h4 name="Example:_Using_eval" id="Example:_Using_eval">&#x4E3E;&#x4F8B;: &#x4F7F;&#x7528; <code>eval</code></h4>

<p>&#x5728;&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x4E2D;&#xFF0C;&#x4E24;&#x79CD;&#x58F0;&#x660E;&#x90FD;&#x8FD4;&#x56DE;&#x4E86;42&#x3002;&#x7B2C;&#x4E00;&#x79CD;&#x662F;&#x5BF9;&#x5B57;&#x7B26;&#x4E32; &quot;<code>x + y + 1</code>&quot;&#x6C42;&#x503C;&#xFF1B;&#x7B2C;&#x4E8C;&#x79CD;&#x662F;&#x5BF9;&#x5B57;&#x7B26;&#x4E32; &quot;<code>42</code>&quot;&#x6C42;&#x503C;&#x3002;</p>

<pre class="brush: js">var x = 2;
var y = 39;
var z = &quot;42&quot;;
eval(&quot;x + y + 1&quot;); // returns 42
eval(z);           // returns 42 
</pre>

<h4 name="Example:_Using_eval_to_evaluate_a_string_of_JavaScript_statements" id="Example:_Using_eval_to_evaluate_a_string_of_JavaScript_statements">&#x4E3E;&#x4F8B;: &#x4F7F;&#x7528;&#xA0;<code>eval</code> &#x5BF9;JavaScript&#x58F0;&#x660E;&#x6C42;&#x503C;</h4>

<p>&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x4F7F;&#x7528;<code>eval()</code>&#xA0;&#x5BF9;str&#x5B57;&#x7B26;&#x4E32;&#x6C42;&#x503C;&#x3002;&#x8FD9;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x5305;&#x542B;&#x4E86;JavaScript&#x58F0;&#x660E;&#xFF0C;&#x5982;&#x679C;x&#x7B49;&#x4E8E;5&#xFF0C;&#x5C31;&#x6253;&#x5F00;&#x4E00;&#x4E2A;Alert &#x5BF9;&#x8BDD;&#x6846;&#xFF0C;&#x7136;&#x540E;&#x5BF9; z &#x8D4B;&#x503C;&#x3002;&#xA0;&#x5426;&#x5219;&#x5C31;&#x5BF9;z&#x8D4B;&#x503C;0&#x3002;&#xA0;&#x5F53;&#x7B2C;&#x4E8C;&#x4E2A;&#x58F0;&#x660E;&#x88AB;&#x6267;&#x884C;&#xFF0C;&#xA0;<code>eval &#x5C06;&#x4F1A;&#x5C06;str&#x8868;&#x8FBE;&#x5F0F;&#x6267;&#x884C;&#xFF0C;&#x7136;&#x540E;&#x4F1A;&#x5BF9;&#x58F0;&#x660E;&#x96C6;&#x5408;&#x6C42;&#x503C;&#xFF0C;&#x5E76;&#x5C06;&#x8FD4;&#x56DE;&#x503C;&#x8D4B;&#x503C;&#x7ED9;z&#x3002;</code></p>

<pre class="brush: js">var str = &quot;if (x == 5) {alert(&apos;z is 42&apos;); z = 42;} else z = 0; &quot;;
document.write(&quot;&lt;P&gt;z is &quot;, eval(str));
</pre>

<h3 name="Return_value" id="Return_value">&#x8FD4;&#x56DE;&#x503C;</h3>

<p><code>eval</code> &#x5C06;&#x4F1A;&#x8FD4;&#x56DE;&#x5BF9;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;&#x7684;&#x6C42;&#x503C;&#x7ED3;&#x679C;&#x3002;</p>

<pre class="brush: js">var str = &quot;if ( a ) { 1+1; } else { 1+2; }&quot;;
var a = true;
var b = eval(str);  // returns 2 
alert(&quot;b is&#xA0;: &quot; + b);
a = false;
b = eval(str);  // returns 3
alert(&quot;b is&#xA0;: &quot; + b);
</pre>

<h2 name="See_also" id="See_also">See also</h2>

<ul>
 <li><a href="cn/Core_JavaScript_1.5_Reference/Operators/Member_Operators">member operators</a></li>
</ul>
                  
                
              