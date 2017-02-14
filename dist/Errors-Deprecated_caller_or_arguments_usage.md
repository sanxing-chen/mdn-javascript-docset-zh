
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="&#x4FE1;&#x606F;">&#x4FE1;&#x606F;</h2>

<pre class="syntaxbox">Warning: ReferenceError: deprecated caller usage (Firefox)
Warning: ReferenceError: deprecated arguments usage (Firefox)
TypeError: &apos;callee&apos; and &apos;caller&apos; cannot be accessed in strict mode. (Safari)
</pre>

<h2 id="&#x9519;&#x8BEF;&#x7C7B;&#x578B;">&#x9519;&#x8BEF;&#x7C7B;&#x578B;</h2>

<p>&#x4EC5;&#x5728;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E0B;&#x51FA;&#x73B0;&#x7684; <a title="ReferenceError&#xFF08;&#x5F15;&#x7528;&#x9519;&#x8BEF;&#xFF09; &#x5BF9;&#x8C61;&#x8868;&#x660E;&#x4E00;&#x4E2A;&#x4E0D;&#x5B58;&#x5728;&#x7684;&#x53D8;&#x91CF;&#x88AB;&#x5F15;&#x7528;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError"><code>ReferenceError</code></a> &#x8B66;&#x544A;&#x3002;<span lang="zh-CN" class="short_text" id="result_box"><span>JavaScript &#x7684;&#x6267;&#x884C;&#x5C06;&#x4E0D;&#x4F1A;&#x505C;&#x6B62;&#x3002;</span></span></p>

<h2 id="&#x53D1;&#x751F;&#x4E86;&#x4EC0;&#x4E48;">&#x53D1;&#x751F;&#x4E86;&#x4EC0;&#x4E48;?</h2>

<p>&#x5728; <a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">strict mode</a> &#x4E2D;&#xFF0C;<a title="&#x8FD4;&#x56DE;&#x8C03;&#x7528;&#x6307;&#x5B9A;&#x51FD;&#x6570;&#x7684;&#x51FD;&#x6570;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/caller"><code>Function.caller</code></a> &#x548C; <a title="function.arguments &#x5C5E;&#x6027;&#x4EE3;&#x8868;&#x4F20;&#x5165;&#x51FD;&#x6570;&#x7684;&#x5B9E;&#x53C2;&#xFF0C;&#x5B83;&#x662F;&#x4E00;&#x4E2A;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments"><code>Function.arguments</code></a> &#x5C5E;&#x6027;&#x662F;&#x4E0D;&#x8BE5;&#x4F7F;&#x7528;&#x7684;&#x3002;&#x5B83;&#x4EEC;&#x90FD;&#x662F;&#x5DF2;&#x7ECF;&#x88AB;&#x5E9F;&#x5F03;&#x7684;&#x4E86;&#xFF0C;&#x56E0;&#x4E3A;&#x8FD9;&#x4E24;&#x8005;&#x6CC4;&#x9732;&#x4E86;&#x51FD;&#x6570;&#x7684;&#x8C03;&#x7528;&#x8005;&#xFF0C;&#x662F;&#x4E0D;&#x6807;&#x51C6;&#x7684;&#xFF0C;&#x96BE;&#x4E8E;&#x4F18;&#x5316;&#x548C;&#x6709;&#x8FD9;&#x6F5C;&#x5728;&#x7684;&#x6027;&#x80FD;&#x95EE;&#x9898;&#x3002;</p>

<h2 id="&#x5B9E;&#x529B;">&#x5B9E;&#x529B;</h2>

<h3 id="&#x5E9F;&#x5F03;&#x7684;_function.caller_or_arguments.callee.caller">&#x5E9F;&#x5F03;&#x7684; <code>function.caller</code> or <code>arguments.callee.caller</code></h3>

<p><a title="&#x8FD4;&#x56DE;&#x8C03;&#x7528;&#x6307;&#x5B9A;&#x51FD;&#x6570;&#x7684;&#x51FD;&#x6570;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/caller"><code>Function.caller</code></a> &#x548C; <code><a href="/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee">arguments.callee.caller</a></code> &#x90FD;&#x662F;&#x5DF2;&#x5E9F;&#x5F03;&#x7684; (&#x8BE6;&#x89C1;&#x53C2;&#x8003;&#x6587;&#x7AE0;)&#x3002;</p>

<pre class="brush: js example-bad">&quot;use strict&quot;;

function myFunc() {
&#xA0; if (myFunc.caller == null) {
&#xA0;&#xA0;&#xA0; return &apos;The function was called from the top!&apos;;
&#xA0; } else {
&#xA0;&#xA0;&#xA0; return &apos;This function\&apos;s caller was &apos; + myFunc.caller;
&#xA0; }
}

myFunc();
// Warning: ReferenceError: deprecated caller usage
// &quot;The function was called from the top!&quot;</pre>

<h3 id="Function.arguments"><code>Function.arguments</code></h3>

<p><a title="function.arguments &#x5C5E;&#x6027;&#x4EE3;&#x8868;&#x4F20;&#x5165;&#x51FD;&#x6570;&#x7684;&#x5B9E;&#x53C2;&#xFF0C;&#x5B83;&#x662F;&#x4E00;&#x4E2A;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments"><code>Function.arguments</code></a> &#x5DF2;&#x88AB;&#x5E9F;&#x5F03;&#x3002; (&#x8BE6;&#x89C1;&#x53C2;&#x8003;&#x6587;&#x7AE0;)&#x3002;</p>

<pre class="brush: js example-bad">&quot;use strict&quot;;

function f(n) { g(n - 1); }

function g(n) {
  console.log(&apos;before: &apos; + g.arguments[0]);
  if (n &gt; 0) { f(n); }
  console.log(&apos;after: &apos; + g.arguments[0]);
}

f(2);

console.log(&apos;returned: &apos; + g.arguments);
// Warning: ReferenceError: deprecated arguments usage
</pre>

<h2 id="&#x76F8;&#x5173;">&#x76F8;&#x5173;</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features">Deprecated and obsolete features</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">Strict mode</a></li>
 <li><a title="function.arguments &#x5C5E;&#x6027;&#x4EE3;&#x8868;&#x4F20;&#x5165;&#x51FD;&#x6570;&#x7684;&#x5B9E;&#x53C2;&#xFF0C;&#x5B83;&#x662F;&#x4E00;&#x4E2A;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments"><code>Function.arguments</code></a></li>
 <li><a title="&#x8FD4;&#x56DE;&#x8C03;&#x7528;&#x6307;&#x5B9A;&#x51FD;&#x6570;&#x7684;&#x51FD;&#x6570;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/caller"><code>Function.caller</code></a> and <code><a href="/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee">arguments.callee.caller</a></code></li>
</ul>
                  
                
              