
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="&#x4FE1;&#x606F;">&#x4FE1;&#x606F;</h2>

<pre class="syntaxbox">RangeError: repeat count must be non-negative (Firefox)
RangeError: Invalid count value (Chrome)
</pre>

<h2 id="&#x9519;&#x8BEF;&#x7C7B;&#x578B;">&#x9519;&#x8BEF;&#x7C7B;&#x578B;</h2>

<p><a title="RangeError&#x5BF9;&#x8C61;&#x6807;&#x660E;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#xFF0C;&#x5F53;&#x4E00;&#x4E2A;&#x503C;&#x4E0D;&#x5728;&#x5176;&#x6240;&#x5141;&#x8BB8;&#x7684;&#x8303;&#x56F4;&#x6216;&#x8005;&#x96C6;&#x5408;&#x4E2D;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError"><code>RangeError</code></a></p>

<h2 id="&#x53D1;&#x751F;&#x4E86;&#x4EC0;&#x4E48;">&#x53D1;&#x751F;&#x4E86;&#x4EC0;&#x4E48;?</h2>

<p>&#x4EE3;&#x7801;&#x4E2D;&#x4F7F;&#x7528;&#x4E86; <a title="repeat()&#xA0;&#x6784;&#x9020;&#x5E76;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x5305;&#x542B;&#x88AB;&#x8FDE;&#x63A5;&#x5728;&#x4E00;&#x8D77;&#x7684;&#x6307;&#x5B9A;&#x6570;&#x91CF;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x526F;&#x672C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/repeat"><code>String.prototype.repeat()</code></a>&#x65B9;&#x6CD5;&#x3002;<span lang="zh-CN" class="short_text" id="result_box"><span>&#x5B83;&#x6709;&#x4E00;&#x4E2A;&#x8BA1;&#x6570;&#x53C2;&#x6570;&#xFF0C;&#x8868;&#x793A;&#x91CD;&#x590D;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x6B21;&#x6570;</span></span>&#x3002;&#x8BE5;&#x53C2;&#x6570;&#x5FC5;&#x987B;&#x5728; 0 &#x53CA;&#x6B63; <a title="&#x5168;&#x5C40;&#x5C5E;&#x6027;&#xA0;Infinity &#x662F;&#x4E00;&#x4E2A;&#x6570;&#x503C;&#xFF0C;&#x8868;&#x793A;&#x65E0;&#x7A77;&#x5927;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Infinity"><code>Infinity</code></a> &#x4E4B;&#x95F4;&#xFF0C;&#x4E14;&#x4E0D;&#x80FD;&#x4E3A;&#x8D1F;&#x6570;&#x3002;&#x8BE5;&#x503C;&#x7684;&#x5408;&#x6CD5;&#x8303;&#x56F4;&#x53EF;&#x4EE5;&#x8FD9;&#x6837;&#x8868;&#x793A;&#xFF1A; [0, +&#x221E;)&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x65E0;&#x6548;&#x7684;">&#x65E0;&#x6548;&#x7684;</h3>

<pre class="brush: js example-bad">&apos;abc&apos;.repeat(-1); // RangeError </pre>

<h3 id="&#x6709;&#x6548;&#x7684;">&#x6709;&#x6548;&#x7684;</h3>

<pre class="brush: js example-good">&apos;abc&apos;.repeat(0);    // &apos;&apos;
&apos;abc&apos;.repeat(1);    // &apos;abc&apos;
&apos;abc&apos;.repeat(2);    // &apos;abcabc&apos;
&apos;abc&apos;.repeat(3.5);  // &apos;abcabcabc&apos; (count will be converted to integer)
</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li><a title="repeat()&#xA0;&#x6784;&#x9020;&#x5E76;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x5305;&#x542B;&#x88AB;&#x8FDE;&#x63A5;&#x5728;&#x4E00;&#x8D77;&#x7684;&#x6307;&#x5B9A;&#x6570;&#x91CF;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x526F;&#x672C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/repeat"><code>String.prototype.repeat()</code></a></li>
</ul>
                  
                
              