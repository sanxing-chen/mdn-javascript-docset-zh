
                
                  
                    <p></p><section class="Quick_links" id="Quick_Links"><!-- --></section><p></p>

<p>ECMAScript 5 &#x5F15;&#x5165;&#x4E86; <a title="/zh-CN/docs/JavaScript/Strict_mode" href="/zh-CN/docs/JavaScript/Strict_mode">strict mode</a>&#xA0;,&#x73B0;&#x5728;&#x5DF2;&#x7ECF;&#x88AB;&#x5927;&#x591A;&#x6D4F;&#x89C8;&#x5668;&#x5B9E;&#x73B0;(&#x5305;&#x62EC;IE10. &#x4F1A;&#x4F7F;web&#x6D4F;&#x89C8;&#x5668;&#x66F4;&#x5BB9;&#x6613;&#x7684;&#x89E3;&#x6790;&#x4EE3;&#x7801;(&#x53EA;&#x9700;&#x8981;&#x6DFB;&#x52A0;&#xA0;<code>&quot;use strict&quot;;</code> &#x5728;&#x6E90;&#x7801;&#x7684;&#x6700;&#x4E0A;&#x9762;), &#x7531;&#x73B0;&#x6709;&#x7684;&#x4EE3;&#x7801;&#x5230;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x7684;&#x8FC7;&#x6E21;&#x9700;&#x8981;&#x4E00;&#x4E9B;&#x4E8B;&#x505A;.</p>

<p>&#x8BE5;&#x6587;&#x7AE0;&#x65E8;&#x5728;&#x4E3A;&#x5F00;&#x53D1;&#x8005;&#x63D0;&#x4F9B;&#x6307;&#x5357;.</p>

<h2 id="&#x9010;&#x6B65;&#x8FC7;&#x6E21;">&#x9010;&#x6B65;&#x8FC7;&#x6E21;</h2>

<p>&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x88AB;&#x4ED4;&#x7EC6;&#x8BBE;&#x8BA1;&#x8FC7;&#xFF0C;&#x56E0;&#x6B64;&#x53EF;&#x4EE5;&#x9010;&#x6E10;&#x5730;&#x8FDB;&#x884C;&#x8FC1;&#x79FB;&#x3002;&#x4F60;&#x53EF;&#x4EE5;&#x5206;&#x522B;&#x6539;&#x53D8;&#x5404;&#x4E2A;&#x6587;&#x4EF6;&#xFF0C;&#x751A;&#x81F3;&#x4EE5;&#x51FD;&#x6570;&#x7EA7;&#x7684;&#x7C92;&#x5EA6;&#x8FC1;&#x79FB;&#x81F3;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x3002;</p>

<h2 id="&#x975E;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x5230;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x7684;&#x533A;&#x522B;">&#x975E;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x5230;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x7684;&#x533A;&#x522B;</h2>

<h3 id="&#x8BED;&#x6CD5;&#x9519;&#x8BEF;">&#x8BED;&#x6CD5;&#x9519;&#x8BEF;</h3>

<p>&#x5982;&#x679C;&#x4EE3;&#x7801;&#x4E2D;&#x4F7F;&#x7528;<code>&quot;use strict&quot;&#x5F00;&#x542F;&#x4E86;&#x4E25;&#x683C;&#x6A21;&#x5F0F;</code>,&#x5219;&#x4E0B;&#x9762;&#x7684;&#x60C5;&#x51B5;&#x90FD;&#x4F1A;&#x5728;&#x811A;&#x672C;&#x8FD0;&#x884C;&#x4E4B;&#x524D;&#x629B;&#x51FA;<a title="/zh-CN/docs/Core_JavaScript_1.5_Guide/SyntaxError" href="/zh-CN/docs/Core_JavaScript_1.5_Guide/SyntaxError" class="new">SyntaxError</a>&#x5F02;&#x5E38;:</p>

<ul>
 <li>&#x516B;&#x8FDB;&#x5236;&#x8BED;&#x6CD5;<code>:var n = 023&#x548C;var s = &quot;\047&quot;</code></li>
 <li><a title="/zh-CN/docs/JavaScript/Reference/Statements/with" href="https://developer.mozilla.org/zh-CN/docs/JavaScript/Reference/Statements/with" class="new"><code>with</code></a>&#x8BED;&#x53E5;</li>
 <li>&#x4F7F;&#x7528;<a title="/zh-CN/docs/JavaScript/Reference/Operators/delete" href="https://developer.mozilla.org/zh-CN/docs/JavaScript/Reference/Operators/delete">delete</a>&#x5220;&#x9664;&#x4E00;&#x4E2A;&#x53D8;&#x91CF;&#x540D;(&#x800C;&#x4E0D;&#x662F;&#x5C5E;&#x6027;&#x540D;)<code>:delete myVariable</code></li>
 <li>&#x4F7F;&#x7528;<code>eval</code>&#x6216;<code>arguments</code>&#x4F5C;&#x4E3A;&#x53D8;&#x91CF;&#x540D;&#x6216;&#x51FD;&#x6570;&#x540D;</li>
 <li>&#x4F7F;&#x7528;&#x672A;&#x6765;&#x4FDD;&#x7559;&#x5B57;(&#x4E5F;&#x8BB8;&#x4F1A;&#x5728;ECMAScript 6&#x4E2D;&#x4F7F;&#x7528;):<code>implements</code>, <code>interface</code>, <code>let</code>, <code>package</code>, <code>private</code>, <code>protected</code>, <code>public</code>, <code>static</code>,&#x548C;<code>yield</code>&#x4F5C;&#x4E3A;&#x53D8;&#x91CF;&#x540D;&#x6216;&#x51FD;&#x6570;&#x540D;</li>
 <li>&#x5728;&#x8BED;&#x53E5;&#x5757;&#x4E2D;&#x4F7F;&#x7528;&#x51FD;&#x6570;&#x58F0;&#x660E;:<code>if(a&lt;b){ function f(){} }</code></li>
 <li>&#x5176;&#x4ED6;&#x9519;&#x8BEF;
  <ul>
   <li>&#x5BF9;&#x8C61;&#x5B50;&#x9762;&#x91CF;&#x4E2D;&#x4F7F;&#x7528;&#x4E24;&#x4E2A;&#x76F8;&#x540C;&#x7684;&#x5C5E;&#x6027;&#x540D;:<code>{a: 1, b: 3, a: 7}</code></li>
   <li>&#x51FD;&#x6570;&#x5F62;&#x53C2;&#x4E2D;&#x4F7F;&#x7528;&#x4E24;&#x4E2A;&#x76F8;&#x540C;&#x7684;&#x53C2;&#x6570;&#x540D;:<code>function f(a, b, b){}</code></li>
  </ul>
 </li>
</ul>

<p>&#x8FD9;&#x4E9B;&#x9519;&#x8BEF;&#x662F;&#x6709;&#x5229;&#x7684;&#xFF0C;&#x56E0;&#x4E3A;&#x53EF;&#x4EE5;&#x63ED;&#x793A;&#x7B80;&#x964B;&#x7684;&#x9519;&#x8BEF;&#x548C;&#x574F;&#x7684;&#x5B9E;&#x8DF5;&#xFF0C;&#x8FD9;&#x4E9B;&#x9519;&#x8BEF;&#x4F1A;&#x5728;&#x4EE3;&#x7801;&#x8FD0;&#x884C;&#x524D;&#x88AB;&#x629B;&#x51FA;</p>

<h3 id="&#x65B0;&#x7684;&#x8FD0;&#x884C;&#x65F6;&#x9519;&#x8BEF;">&#x65B0;&#x7684;&#x8FD0;&#x884C;&#x65F6;&#x9519;&#x8BEF;</h3>

<p>JavaScript&#x66FE;&#x7ECF;&#x4F1A;&#x5728;&#x4E00;&#x4E9B;&#x4E0A;&#x4E0B;&#x6587;&#x7684;&#x67D0;&#x4E9B;&#x60C5;&#x51B5;&#x4E2D;&#x9759;&#x9ED8;&#x7684;&#x5931;&#x8D25;&#xFF0C;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4F1A;&#x5728;&#x8FD9;&#x4E9B;&#x60C5;&#x51B5;&#x4E0B;&#x629B;&#x51FA;&#x9519;&#x8BEF;&#x3002;&#x5982;&#x679C;&#x4F60;&#x7684;&#x4EE3;&#x7801;&#x5305;&#x542B;&#x8FD9;&#x6837;&#x7684;&#x573A;&#x666F;&#xFF0C;&#x8BF7;&#x52A1;&#x5FC5;&#x6D4B;&#x8BD5;&#x4EE5;&#x786E;&#x4FDD;&#x6CA1;&#x6709;&#x4EE3;&#x7801;&#x53D7;&#x5230;&#x5F71;&#x54CD;&#x3002;&#x518D;&#x8BF4;&#x4E00;&#x6B21;&#xFF0C;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x662F;&#x53EF;&#x4EE5;&#x8BBE;&#x7F6E;&#x5728;&#x4EE3;&#x7801;&#x7C92;&#x5EA6;&#x4E0B;&#x7684;&#x3002;</p>

<h4 id="&#x7ED9;&#x4E00;&#x4E2A;&#x672A;&#x58F0;&#x660E;&#x7684;&#x53D8;&#x91CF;&#x8D4B;&#x503C;">&#x7ED9;&#x4E00;&#x4E2A;&#x672A;&#x58F0;&#x660E;&#x7684;&#x53D8;&#x91CF;&#x8D4B;&#x503C;</h4>

<pre class="brush: js">function f(x){
  &quot;use strict&quot;;
  var a = 12;
  b = a + x*35; // error!
}
f();
</pre>

<p>&#x6539;&#x53D8;&#x4E00;&#x4E2A;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x503C;&#x53EF;&#x80FD;&#x4F1A;&#x9020;&#x6210;&#x4E0D;&#x53EF;&#x9884;&#x671F;&#x7684;&#x540E;&#x679C;&#x3002;&#x5982;&#x679C;&#x4F60;&#x771F;&#x7684;&#x60F3;&#x8BBE;&#x7F6E;&#x4E00;&#x4E2A;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x503C;&#xFF0C;&#x628A;&#x4ED6;&#x4F5C;&#x4E3A;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#x5E76;&#x4E14;&#x660E;&#x786E;&#x7684;&#x628A;&#x5B83;&#x4F5C;&#x4E3A;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&#xFF1A;</p>

<pre class="brush: js">var global = this; // in the top-level context, &quot;this&quot; always refers the global object
function f(){
  &quot;use strict&quot;;
  var a = 12;
  global.b = a + x*35;
}
f();
</pre>

<h4 id="&#x5C1D;&#x8BD5;&#x5220;&#x9664;&#x4E00;&#x4E2A;&#x4E0D;&#x53EF;&#x914D;&#x7F6E;&#x7684;&#x5C5E;&#x6027;">&#x5C1D;&#x8BD5;&#x5220;&#x9664;&#x4E00;&#x4E2A;&#x4E0D;&#x53EF;&#x914D;&#x7F6E;&#x7684;&#x5C5E;&#x6027;</h4>

<pre class="brush: js">&quot;use strict&quot;;
delete Object.prototype; // error!
</pre>

<p>&#x5728;&#x975E;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E2D;,&#x8FD9;&#x6837;&#x7684;&#x4EE3;&#x7801;&#x53EA;&#x4F1A;&#x9759;&#x9ED8;&#x5931;&#x8D25;,&#x8FD9;&#x6837;&#x53EF;&#x80FD;&#x4F1A;&#x5BFC;&#x81F4;&#x7528;&#x6237;&#x8BEF;&#x4EE5;&#x4E3A;&#x5220;&#x9664;&#x64CD;&#x4F5C;&#x6210;&#x529F;&#x4E86;.</p>

<h4 id="arguments&#x5BF9;&#x8C61;&#x548C;&#x51FD;&#x6570;&#x5C5E;&#x6027;">arguments&#x5BF9;&#x8C61;&#x548C;&#x51FD;&#x6570;&#x5C5E;&#x6027;</h4>

<p>&#x5728;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E0B;,&#x8BBF;&#x95EE;<code>arguments.callee</code>, <code>arguments.caller</code>, <code>anyFunction.caller</code>&#x4EE5;&#x53CA;<code>anyFunction.arguments</code>&#x90FD;&#x4F1A;&#x629B;&#x51FA;&#x5F02;&#x5E38;.&#x552F;&#x4E00;&#x5408;&#x6CD5;&#x7684;&#x4F7F;&#x7528;&#x5E94;&#x8BE5;&#x662F;&#x5728;&#x5176;&#x4E2D;&#x547D;&#x540D;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x5E76;&#x4E14;&#x91CD;&#x7528;&#x4E4B;</p>

<pre class="brush: js">// example taken from vanillajs: http://vanilla-js.com/
var s = document.getElementById(&apos;thing&apos;).style;
s.opacity = 1;
(function(){ 
  if((s.opacity-=.1) &lt; 0)
    s.display=&quot;none&quot;;
  else
    setTimeout(arguments.callee, 40);
})();</pre>

<p>&#x53EF;&#x4EE5;&#x91CD;&#x65B0;&#x5199;&#x6210;:</p>

<pre class="brush: js">&quot;use strict&quot;;
var s = document.getElementById(&apos;thing&apos;).style;
s.opacity = 1;
(function fadeOut(){ // name the function
  if((s.opacity-=.1) &lt; 0)
    s.display=&quot;none&quot;;
  else
    setTimeout(fadeOut, 40); // use the name of the function
})();</pre>

<h3 id="&#x8BED;&#x4E49;&#x5DEE;&#x5F02;">&#x8BED;&#x4E49;&#x5DEE;&#x5F02;</h3>

<p>&#x8FD9;&#x4E9B;&#x5DEE;&#x5F02;&#x90FD;&#x662F;&#x4E00;&#x4E9B;&#x5FAE;&#x5C0F;&#x7684;&#x5DEE;&#x5F02;&#x3002;&#x6709;&#x53EF;&#x80FD;&#x5355;&#x5143;&#x6D4B;&#x8BD5;&#x6CA1;&#x529E;&#x6CD5;&#x6355;&#x83B7;&#x8FD9;&#x79CD;&#x5FAE;&#x5C0F;&#x7684;&#x5DEE;&#x5F02;&#x3002;&#x4F60;&#x5F88;&#x6709;&#x5FC5;&#x8981;&#x53BB;&#x5C0F;&#x5FC3;&#x5730;&#x5BA1;&#x67E5;&#x4F60;&#x7684;&#x4EE3;&#x7801;&#xFF0C;&#x6765;&#x786E;&#x4FDD;&#x8FD9;&#x4E9B;&#x5DEE;&#x5F02;&#x4E0D;&#x4F1A;&#x5F71;&#x54CD;&#x4F60;&#x4EE3;&#x7801;&#x7684;&#x8BED;&#x4E49;&#x3002;&#x5E78;&#x8FD0;&#x7684;&#x662F;&#xFF0C;&#x8FD9;&#x79CD;&#x5C0F;&#x5FC3;&#x5730;&#x4EE3;&#x7801;&#x5BA1;&#x67E5;&#x53EF;&#x4EE5;&#x9010;&#x51FD;&#x6570;&#x5730;&#x5B8C;&#x6210;&#x3002;</p>

<h4 id="&#x51FD;&#x6570;&#x8C03;&#x7528;&#x4E2D;&#x7684;this">&#x51FD;&#x6570;&#x8C03;&#x7528;&#x4E2D;&#x7684;<code>this</code></h4>

<p>&#x5728;&#x666E;&#x901A;&#x7684;&#x51FD;&#x6570;&#x8C03;&#x7528;<code>f()&#x4E2D;</code>,<code>this</code>&#x7684;&#x503C;&#x4F1A;&#x6307;&#x5411;&#x5168;&#x5C40;&#x5BF9;&#x8C61;.&#x5728;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E2D;,<code>this</code>&#x7684;&#x503C;&#x4F1A;&#x6307;&#x5411;<code>undefined</code>.&#x5F53;&#x51FD;&#x6570;&#x901A;&#x8FC7;<a title="/zh-CN/docs/Core_JavaScript_1.5_Reference/Global_Objects/Function/call" href="/zh-CN/docs/Core_JavaScript_1.5_Reference/Global_Objects/Function/call" class="new">call</a>&#x548C;<a title="/zh-CN/docs/Core_JavaScript_1.5_Reference/Global_Objects/Function/apply" href="/zh-CN/docs/Core_JavaScript_1.5_Reference/Global_Objects/Function/apply" class="new">apply</a>&#x8C03;&#x7528;&#x65F6;,&#x5982;&#x679C;&#x4F20;&#x5165;&#x7684;<code>thisvalue</code>&#x53C2;&#x6570;&#x662F;&#x4E00;&#x4E2A;<code>null</code>&#x548C;<code>undefined</code>&#x9664;&#x5916;&#x7684;&#x539F;&#x59CB;&#x503C;(&#x5B57;&#x7B26;&#x4E32;,&#x6570;&#x5B57;,&#x5E03;&#x5C14;&#x503C;),&#x5219;<code>this&#x7684;&#x503C;&#x4F1A;&#x6210;&#x4E3A;&#x90A3;&#x4E2A;&#x539F;&#x59CB;&#x503C;&#x5BF9;&#x5E94;&#x7684;&#x5305;&#x88C5;&#x5BF9;&#x8C61;</code>,&#x5982;&#x679C;<code>thisvalue</code>&#x53C2;&#x6570;&#x7684;&#x503C;&#x662F;<code>undefined</code>&#x6216;<code>null</code>,&#x5219;<code>this&#x7684;&#x503C;&#x4F1A;&#x6307;&#x5411;&#x5168;&#x5C40;&#x5BF9;&#x8C61;</code>.&#x5728;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E2D;,<code>this&#x7684;&#x503C;&#x5C31;&#x662F;</code><code>thisvalue</code>&#x53C2;&#x6570;&#x7684;&#x503C;,&#x6CA1;&#x6709;&#x4EFB;&#x4F55;&#x7C7B;&#x578B;&#x8F6C;&#x6362;.</p>

<h4 id="arguments&#x5BF9;&#x8C61;&#x5C5E;&#x6027;&#x4E0D;&#x4E0E;&#x5BF9;&#x5E94;&#x7684;&#x5F62;&#x53C2;&#x53D8;&#x91CF;&#x540C;&#x6B65;&#x66F4;&#x65B0;"><code>arguments</code>&#x5BF9;&#x8C61;&#x5C5E;&#x6027;&#x4E0D;&#x4E0E;&#x5BF9;&#x5E94;&#x7684;&#x5F62;&#x53C2;&#x53D8;&#x91CF;&#x540C;&#x6B65;&#x66F4;&#x65B0;</h4>

<p>&#x5728;&#x975E;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E2D;,&#x4FEE;&#x6539;<code>arguments</code>&#x5BF9;&#x8C61;&#x4E2D;&#x67D0;&#x4E2A;&#x7D22;&#x5F15;&#x5C5E;&#x6027;&#x7684;&#x503C;,&#x548C;&#x8FD9;&#x4E2A;&#x5C5E;&#x6027;&#x5BF9;&#x5E94;&#x7684;&#x5F62;&#x53C2;&#x53D8;&#x91CF;&#x7684;&#x503C;&#x4E5F;&#x4F1A;&#x540C;&#x65F6;&#x53D8;&#x5316;,&#x53CD;&#x4E4B;&#x4EA6;&#x7136;.&#x8FD9;&#x4F1A;&#x8BA9;JavaScript&#x7684;&#x4EE3;&#x7801;&#x6DF7;&#x6DC6;&#x5F15;&#x64CE;&#x8BA9;&#x4EE3;&#x7801;&#x53D8;&#x5F97;&#x66F4;&#x96BE;&#x8BFB;&#x548C;&#x7406;&#x89E3;&#x3002;&#x5728;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E2D;<code><span style="font-family: courier,andale mono,monospace;">arguments &#x5BF9;&#x8C61;&#x4F1A;&#x4EE5;&#x5F62;&#x53C2;&#x53D8;&#x91CF;&#x7684;&#x62F7;&#x8D1D;&#x7684;&#x5F62;&#x5F0F;&#x88AB;&#x521B;&#x5EFA;&#x548C;&#x521D;&#x59CB;&#x5316;&#xFF0C;&#x56E0;&#x6B64;&#xA0;arguments &#x5BF9;&#x8C61;&#x7684;&#x6539;&#x53D8;&#x4E0D;&#x4F1A;&#x5F71;&#x54CD;&#x5F62;&#x53C2;&#x3002;</span></code></p>

<h4 id="eval&#x76F8;&#x5173;&#x7684;&#x533A;&#x522B;"><code>eval&#x76F8;&#x5173;&#x7684;&#x533A;&#x522B;</code></h4>

<p>&#x5728;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E2D;,<code>eval</code>&#x4E0D;&#x4F1A;&#x5728;&#x5F53;&#x524D;&#x7684;&#x4F5C;&#x7528;&#x57DF;&#x5185;&#x521B;&#x5EFA;&#x65B0;&#x7684;&#x53D8;&#x91CF;.&#x53E6;&#x5916;,&#x4F20;&#x5165;eval&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x53C2;&#x6570;&#x4E5F;&#x4F1A;&#x6309;&#x7167;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x6765;&#x89E3;&#x6790;.&#x4F60;&#x9700;&#x8981;&#x5168;&#x9762;&#x6D4B;&#x8BD5;&#x6765;&#x786E;&#x4FDD;&#x6CA1;&#x6709;&#x4EE3;&#x7801;&#x6536;&#x5230;&#x5F71;&#x54CD;&#x3002;&#x53E6;&#x5916;&#xFF0C;<span style="font-family: courier,andale mono,monospace;">&#x5982;&#x679C;&#x4F60;&#x5E76;&#x4E0D;&#x662F;&#x4E3A;&#x4E86;&#x89E3;&#x51B3;&#x4E00;&#x4E2A;&#x975E;&#x5E38;&#x5B9E;&#x9645;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x4E2D;&#xFF0C;</span>&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x4F7F;&#x7528;<code>eval&#x3002;</code></p>

<h2 id="&#x4E25;&#x683C;&#x4E2D;&#x7ACB;&#x7684;&#x4EE3;&#x7801;">&#x4E25;&#x683C;&#x4E2D;&#x7ACB;&#x7684;&#x4EE3;&#x7801;</h2>

<p>&#x8FC1;&#x79FB;&#x4E25;&#x683C;&#x4EE3;&#x7801;&#x81F3;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x7684;&#x4E00;&#x4E2A;&#x6F5C;&#x5728;&#x6D88;&#x6781;&#x9762;&#x662F;&#xFF0C;&#x5728;&#x9057;&#x7559;&#x7684;&#x8001;&#x7248;&#x672C;&#x6D4F;&#x89C8;&#x5668;&#x4E0A;&#xFF0C;&#x7531;&#x4E8E;&#x6CA1;&#x6709;&#x5B9E;&#x73B0;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#xFF0C;javascript&#x8BED;&#x4E49;&#x53EF;&#x80FD;&#x4F1A;&#x6709;&#x6240;&#x4E0D;&#x540C;&#x3002;&#x5728;&#x4E00;&#x4E9B;&#x7F55;&#x89C1;&#x7684;&#x673A;&#x4F1A;&#x4E0B;&#xFF08;&#x6BD4;&#x5982;&#x5DEE;&#x52B2;&#x7684;&#x5173;&#x8054;&#x5173;&#x7CFB;&#x6216;&#x8005;&#x4EE3;&#x7801;&#x6700;&#x5C0F;&#x5316;&#xFF09;&#xFF0C;&#x4F60;&#x7684;&#x4EE3;&#x7801;&#x53EF;&#x80FD;&#x4E0D;&#x80FD;&#x6309;&#x7167;&#x4F60;&#x4E66;&#x5199;&#x6216;&#x8005;&#x6D4B;&#x8BD5;&#x91CC;&#x7684;&#x6A21;&#x5F0F;&#x90A3;&#x6837;&#x8FD0;&#x884C;&#x3002;&#x8FD9;&#x91CC;&#x6709;&#x4E00;&#x4E9B;&#x8BA9;&#x4F60;&#x7684;&#x4EE3;&#x7801;&#x4FDD;&#x6301;&#x4E2D;&#x7ACB;&#x7684;&#x89C4;&#x8303;&#xFF1A;</p>

<ol>
 <li>&#x6309;&#x7167;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E66;&#x5199;&#x4F60;&#x7684;&#x4EE3;&#x7801;&#xFF0C;&#x5E76;&#x4E14;&#x786E;&#x4FDD;&#x4F60;&#x7684;&#x4EE3;&#x7801;&#x4E0D;&#x4F1A;&#x53D1;&#x751F;&#x4EC5;&#x4EC5;&#x5728;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E0B;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#xFF08;&#x6BD4;&#x5982;&#x4E0A;&#x6587;&#x6240;&#x8BF4;&#x7684;<a href="#">&#x8FD0;&#x884C;&#x65F6;&#x9519;&#x8BEF;</a>&#xFF09;</li>
 <li>&#x8FDC;&#x79BB;&#x8BED;&#x4E49;&#x5DEE;&#x5F02;
  <ol>
   <li><code>eval</code>: &#x4EC5;&#x4EC5;&#x5728;&#x4F60;&#x77E5;&#x9053;&#x4F60;&#x5728;&#x5E72;&#x4EC0;&#x4E48;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#x4F7F;&#x7528;&#x5B83;</li>
   <li><code>arguments</code>: &#x603B;&#x662F;&#x901A;&#x8FC7;&#x5F62;&#x53C2;&#x7684;&#x540D;&#x5B57;&#x83B7;&#x53D6;&#x51FD;&#x6570;&#x53C2;&#x6570;&#xFF0C;&#x6216;&#x8005;&#x5728;&#x51FD;&#x6570;&#x7684;&#x7B2C;&#x4E00;&#x884C;&#x62F7;&#x8D1D;arguments&#xA0;<br>
    <code>var args = Array.prototype.slice.call(arguments)</code></li>
   <li><code>this</code>: &#x4EC5;&#x5728;this&#x6307;&#x5411;&#x4F60;&#x81EA;&#x5DF1;&#x521B;&#x5EFA;&#x7684;&#x5BF9;&#x8C61;&#x65F6;&#x4F7F;&#x7528;&#x5B83;&#xA0;</li>
  </ol>
 </li>
</ol>
                  
                
              