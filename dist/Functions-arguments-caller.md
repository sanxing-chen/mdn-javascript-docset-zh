
                
                  
                    <p></p><section class="Quick_links" id="Quick_Links"><!-- --></section><p></p>

<p><code><font face="Open Sans, Arial, sans-serif">&#x5E9F;&#x5F03;&#x7684;&#xA0;</font><strong>arguments.caller</strong></code>&#xA0;&#x5C5E;&#x6027;&#x539F;&#x5148;&#x7528;&#x5728;&#x51FD;&#x6570;&#x6267;&#x884C;&#x7684;&#x65F6;&#x5019;&#x8C03;&#x7528;&#x81EA;&#x8EAB;&#x3002;&#x672C;&#x5C5E;&#x6027;&#x5DF2;&#x88AB;&#x79FB;&#x9664;&#x4E14;&#x4E0D;&#x518D;&#x6709;&#x7528;&#x3002;</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>arguments.caller &#x5DF2;&#x7ECF;&#x4E0D;&#x53EF;&#x4F7F;&#x7528;&#x4E86;&#xFF0C;&#x4F46;&#x662F;&#x4F60;&#x8FD8;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;</code>&#xA0;<a title="&#x8FD4;&#x56DE;&#x8C03;&#x7528;&#x6307;&#x5B9A;&#x51FD;&#x6570;&#x7684;&#x51FD;&#x6570;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/caller"><code>Function.caller</code></a>&#x3002;</p>

<pre>function whoCalled() {
   if (whoCalled.caller == null)
      console.log(&apos;I was called from the global scope.&apos;);
   else
      console.log(whoCalled.caller + &apos; called me!&apos;);
}
</pre>

<h3 name="Examples" id="Examples">&#x793A;&#x4F8B;</h3>

<p>&#x4E0B;&#x4F8B;&#x6F14;&#x793A;&#x4E86;<code>arguments.caller</code>&#x5C5E;&#x6027;&#x7684;&#x4F5C;&#x7528;.</p>

<pre class="brush: js example-bad">function whoCalled() {
&#xA0;&#xA0; if (arguments.caller == null)
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; console.log(&apos;&#x8BE5;&#x51FD;&#x6570;&#x5728;&#x5168;&#x5C40;&#x4F5C;&#x7528;&#x57DF;&#x5185;&#x88AB;&#x8C03;&#x7528;.&apos;);
&#xA0;&#xA0; else
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; console.log(arguments.caller + &apos;&#x8C03;&#x7528;&#x4E86;&#x6211;!&apos;);
}</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<p> &#x65E0;&#x76F8;&#x5173;&#x6807;&#x51C6;&#x3002;JavaScript 1.1 &#x5B9E;&#x73B0;&#xFF0C;<a title="FIXED: Remove support for &quot;caller&quot; property" href="https://bugzilla.mozilla.org/show_bug.cgi?id=7224" class="external">bug&#xA0;7224</a> &#x79FB;&#x9664; caller&#xFF0C;&#x56E0;&#x4E3A;&#x6F5C;&#x5728;&#x7684;&#x4E0D;&#x5B89;&#x5168;&#x6027;&#x3002;</p>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Function"><code>Function</code></a></li>
</ul>
                  
                
              