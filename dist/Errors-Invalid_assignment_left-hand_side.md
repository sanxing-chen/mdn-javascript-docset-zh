
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">ReferenceError: invalid assignment left-hand side
</pre>

<h2 id="Error_type">Error type</h2>

<p><a title="ReferenceError&#xFF08;&#x5F15;&#x7528;&#x9519;&#x8BEF;&#xFF09; &#x5BF9;&#x8C61;&#x8868;&#x660E;&#x4E00;&#x4E2A;&#x4E0D;&#x5B58;&#x5728;&#x7684;&#x53D8;&#x91CF;&#x88AB;&#x5F15;&#x7528;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError"><code>ReferenceError</code></a>.</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>&#x6709;&#x65F6;&#x4F1A;&#x51FA;&#x73B0;&#x4E0D;&#x53EF;&#x9884;&#x6599;&#x7684;&#x8D4B;&#x503C;&#x60C5;&#x51B5;&#x3002;&#x8FD9;&#x53EF;&#x80FD;&#x662F;&#x56E0;&#x4E3A;<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators">&#x8D4B;&#x503C;&#x8FD0;&#x7B97;&#x7B26;</a>&#x6216;<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators">&#x6BD4;&#x8F83;&#x8FD0;&#x7B97;&#x7B26;</a>&#x4E0D;&#x5339;&#x914D;&#x7684;&#x7F18;&#x6545;&#x3002;&#x6B63;&#x786E;&#x7684;&#x662F;&#xFF0C;&#x4F7F;&#x7528;&#x201C;=&#x201D;&#x53F7;&#x5C06;&#x503C;&#x8D4B;&#x7ED9;&#x4E00;&#x4E2A;&#x53D8;&#x91CF;&#xFF0C;&#x4F7F;&#x7528;&#x201C;==&#x201D;&#x6216;&#x8005;&#x201C;===&#x201D;&#x6765;&#x6BD4;&#x8F83;&#x4E00;&#x4E2A;&#x503C;&#x3002;</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js example-bad">if (Math.PI = 3 || Math.PI = 4) { 
  console.log(&apos;no way!&apos;);
}
// ReferenceError: invalid assignment left-hand side

var str = &apos;Hello, &apos;
+= &apos;is it me &apos;
+= &apos;you\&apos;re looking for?&apos;;
// ReferenceError: invalid assignment left-hand side
</pre>

<p>&#x5728; <code>if</code> &#x8BED;&#x53E5;&#x4E2D;&#xFF0C;&#x4F60;&#x8981;&#x4F7F;&#x7528;&#x6BD4;&#x8F83;&#x8FD0;&#x7B97;&#x7B26;(&quot;==&quot;)&#xFF0C;&#x800C;&#x5728;&#x5B57;&#x7B26;&#x4E32;&#x8FDE;&#x63A5;&#x4E2D;&#xFF0C;&#x4F7F;&#x7528;&#x52A0;&#x53F7;&#x8FD0;&#x7B97;&#x7B26;(&quot;+&quot;)&#x3002;</p>

<pre class="brush: js example-good">if (Math.PI == 3 || Math.PI == 4) { 
  console.log(&apos;no way!&apos;); 
}

var str = &apos;Hello, &apos; 
+ &apos;from the &apos; 
+ &apos;other side!&apos;;
</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators">&#x8D4B;&#x503C;&#x8FD0;&#x7B97;&#x7B26;</a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators">&#x6BD4;&#x8F83;&#x8FD0;&#x7B97;&#x7B26;</a></li>
</ul>
                  
                
              