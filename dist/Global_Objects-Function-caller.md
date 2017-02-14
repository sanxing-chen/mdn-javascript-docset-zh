
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section> <div class="overheadIndicator nonStandard nonStandardHeader"> 
      <p><strong><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> &#x975E;&#x6807;&#x51C6;</strong><br> 
      &#x8BE5;&#x7279;&#x6027;&#x662F;&#x975E;&#x6807;&#x51C6;&#x7684;&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#xFF01;</p> 
      </div></div>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p>&#x8FD4;&#x56DE;&#x8C03;&#x7528;&#x6307;&#x5B9A;&#x51FD;&#x6570;&#x7684;&#x51FD;&#x6570;.</p>

<p>&#x8BE5;&#x5C5E;&#x6027;&#x4E0D;&#x662F;ECMA-262&#x7B2C;3&#x7248;&#x6807;&#x51C6;&#x7684;&#x4E00;&#x90E8;&#x5206;.&#x4E0D;&#x8FC7;, <a href="/zh-cn/SpiderMonkey" title="zh-cn/SpiderMonkey">SpiderMonkey</a> (Mozilla&#x7684;JavaScript&#x5F15;&#x64CE;) (&#x67E5;&#x770B;<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=65683" class="external" title="FIXED: Function objects should have a caller property">bug&#xA0;65683</a>), V8 (Chrome&#x7684;JavaScript&#x5F15;&#x64CE;) &#x548C; JScript(IE&#x7684;ECMAScript&#x5B9E;&#x73B0;)&#x90FD;&#x5DF2;&#x7ECF;&#x652F;&#x6301;&#x4E86;&#x5B83;.</p>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x5982;&#x679C;&#x4E00;&#x4E2A;&#x51FD;&#x6570;<code>f</code>&#x662F;&#x5728;&#x5168;&#x5C40;&#x4F5C;&#x7528;&#x57DF;&#x5185;&#x88AB;&#x8C03;&#x7528;&#x7684;,&#x5219;<code>f.caller&#x4E3A;</code><code>null</code>,&#x76F8;&#x53CD;,&#x5982;&#x679C;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x662F;&#x5728;&#x53E6;&#x5916;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x4F5C;&#x7528;&#x57DF;&#x5185;&#x88AB;&#x8C03;&#x7528;&#x7684;,&#x5219;<code>f.caller&#x6307;&#x5411;&#x8C03;&#x7528;&#x5B83;&#x7684;&#x90A3;&#x4E2A;&#x51FD;&#x6570;.</code></p>

<p>&#x8BE5;&#x5C5E;&#x6027;&#x7684;&#x5E38;&#x7528;&#x5F62;&#x5F0F;<code>arguments.callee.caller</code>&#x66FF;&#x4EE3;&#x4E86;&#x88AB;&#x5E9F;&#x5F03;&#x7684; <a href="/zh-cn/JavaScript/Reference/Functions_and_function_scope/arguments/caller" title="zh-cn/JavaScript/Reference/Functions_and_function_scope/arguments/caller">arguments.caller</a>.</p>

<h3 name="Notes" id="Notes">&#x5907;&#x6CE8;</h3>

<p>&#x6CE8;&#x610F;,&#x5728;&#x4F7F;&#x7528;&#x9012;&#x5F52;&#x8C03;&#x7528;&#x65F6;, &#x4F60;&#x4E0D;&#x80FD;&#x4F7F;&#x7528;&#x6B64;&#x5C5E;&#x6027;&#x6765;&#x91CD;&#x73B0;&#x51FA;&#x8C03;&#x7528;&#x6808;.&#x8BF7;&#x8003;&#x8651;&#x4EE5;&#x4E0B;&#x4EE3;&#x7801;:</p>

<pre class="brush: js">function f(n) { g(n-1) }
function g(n) { if(n&gt;0) f(n); else stop() }
f(2)
</pre>

<p>&#x5F53;<code>stop()&#x51FD;&#x6570;&#x88AB;&#x8C03;&#x7528;&#x65F6;,&#x8C03;&#x7528;&#x6808;&#x662F;&#x8FD9;&#x6837;&#x7684;</code>:</p>

<pre class="brush: js">f(2) -&gt; g(1) -&gt; f(1) -&gt; g(0) -&gt; stop()
</pre>

<p>&#x7531;&#x4E8E;&#x4E0B;&#x9762;&#x7684;&#x8868;&#x8FBE;&#x5F0F;&#x4E3A; true(&#x53EA;&#x4FDD;&#x7559;&#x51FD;&#x6570;&#x6700;&#x540E;&#x4E00;&#x6B21;&#x88AB;&#x8C03;&#x7528;&#x65F6;&#x7684;caller):</p>

<pre class="brush: js">stop.caller === g &amp;&amp; f.caller === g &amp;&amp; g.caller === f
</pre>

<p>&#x6240;&#x4EE5;&#x5982;&#x679C;&#x4F60;&#x5C1D;&#x8BD5;&#x5728;<code>stop()</code>&#x51FD;&#x6570;&#x4E2D;&#x83B7;&#x53D6;&#x8C03;&#x7528;&#x6808;&#x7684;&#x8BDD;:</p>

<pre class="brush: js">var f = stop;
var stack = &quot;&#x8C03;&#x7528;&#x6808;:&quot;;
while (f) {
  stack += &quot;\n&quot; + f.name;
  f = f.caller;
}
</pre>

<p>&#x5219;&#x4E0A;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x4F1A;&#x8FDB;&#x5165;&#x4E00;&#x4E2A;&#x6B7B;&#x5FAA;&#x73AF;.</p>

<p>&#x6709;&#x4E00;&#x4E2A;&#x7279;&#x6B8A;&#x5C5E;&#x6027; <code>__caller__</code>, &#x53EF;&#x4EE5;&#x8FD4;&#x56DE;&#x8C03;&#x7528;&#x5F53;&#x524D;&#x51FD;&#x6570;&#x7684;&#x51FD;&#x6570;&#x7684;&#x6D3B;&#x52A8;&#x5BF9;&#x8C61;(&#x53EF;&#x4EE5;&#x7528;&#x6765;&#x91CD;&#x73B0;&#x51FA;&#x6574;&#x4E2A;&#x8C03;&#x7528;&#x6808;), &#x4F46;&#x7531;&#x4E8E;&#x5B89;&#x5168;&#x539F;&#x56E0;&#x7684;&#x8003;&#x8651;,&#x8BE5;&#x5C5E;&#x6027;&#x5DF2;&#x88AB;&#x5220;&#x9664;.</p>

<h2 name="Examples" id="Examples">&#x4F8B;&#x5B50;</h2>

<h3 name="Example:_Checking_the_value_of_a_function.27s_caller_property" id="Example:_Checking_the_value_of_a_function.27s_caller_property">&#x4F8B;&#x5B50;: &#x68C0;&#x6D4B;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x7684;<code>caller</code>&#x5C5E;&#x6027;&#x7684;&#x503C;</h3>

<p>&#x4E0B;&#x4F8B;&#x7528;&#x6765;&#x5F97;&#x51FA;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x662F;&#x88AB;&#x8C01;&#x8C03;&#x7528;&#x7684;<code>.</code></p>

<pre class="brush: js">function myFunc() {
   if (myFunc.caller == null) {
      return (&quot;<span><span class="string">&#x8BE5;&#x51FD;&#x6570;&#x5728;&#x5168;&#x5C40;&#x4F5C;&#x7528;&#x57DF;&#x5185;&#x88AB;&#x8C03;&#x7528;</span></span>!&quot;);
   } else
      return (&quot;&#x8C03;&#x7528;&#x6211;&#x7684;&#x662F;&#x51FD;&#x6570;&#x662F;&quot; + myFunc.caller);
}
</pre>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<p>Function.caller&#x76EE;&#x524D;&#x88AB;&#x6240;&#x6709;&#x4E3B;&#x6D41;&#x6D4F;&#x89C8;&#x5668;&#x652F;&#x6301;: Firefox, Safari, Chrome, Opera &#x548C; IE. <a href="http://dl.dropbox.com/u/534786/callertest.html" class="external" title="http://dl.dropbox.com/u/534786/callertest.html"><span style="text-decoration: underline;">&#x67E5;&#x770B;&#x68C0;&#x6D4B;&#x7ED3;&#x679C;</span></a>.</p>
                  
                
              