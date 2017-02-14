
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p><strong><code>void</code> &#x8FD0;&#x7B97;&#x7B26;</strong>&#x4F1A;&#x5BF9;&#x7ED9;&#x5B9A;&#x7684;&#x8868;&#x8FBE;&#x5F0F;&#x8FDB;&#x884C;&#x6C42;&#x503C;&#xFF0C;&#x7136;&#x540E;&#x76F4;&#x63A5;&#x8FD4;&#x56DE; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined" title="undefined&#x6709;&#x591A;&#x91CD;&#x89D2;&#x8272;,&#x901A;&#x5E38;&#x60C5;&#x51B5;&#x4E0B;,&#x6211;&#x4EEC;&#x6240;&#x8BF4;&#x7684;undefined&#x90FD;&#x6307;&#x7684;&#x662F;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&quot;undefined&quot;."><code>undefined</code></a>&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">void <em>expression</em></pre>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x8FD9;&#x4E2A;&#x8FD0;&#x7B97;&#x7B26;&#x80FD;&#x5411;&#x671F;&#x671B;&#x4E00;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;&#x7684;&#x503C;&#x662F;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined" title="undefined&#x6709;&#x591A;&#x91CD;&#x89D2;&#x8272;,&#x901A;&#x5E38;&#x60C5;&#x51B5;&#x4E0B;,&#x6211;&#x4EEC;&#x6240;&#x8BF4;&#x7684;undefined&#x90FD;&#x6307;&#x7684;&#x662F;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&quot;undefined&quot;."><code>undefined</code></a>&#x7684;&#x5730;&#x65B9;&#x63D2;&#x5165;&#x4F1A;&#x4EA7;&#x751F;&#x526F;&#x4F5C;&#x7528;&#x7684;&#x8868;&#x8FBE;&#x5F0F;&#x3002;</p>

<p>void &#x8FD0;&#x7B97;&#x7B26;&#x901A;&#x5E38;&#x53EA;&#x7528;&#x4E8E;&#x83B7;&#x53D6;&#xA0;<code>undefined &#x7684;</code>&#x539F;&#x59CB;&#x503C;&#xFF0C;&#x4E00;&#x822C;&#x4F7F;&#x7528;&#xA0;<code>void(0)<font face="Open Sans, Arial, sans-serif">&#xFF08;&#x7B49;&#x540C;&#x4E8E;&#xA0;</font></code><code>void 0</code>&#xFF09;&#x3002;&#x5728;&#x4E0A;&#x8FF0;&#x60C5;&#x51B5;&#x4E2D;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x5168;&#x5C40;&#x53D8;&#x91CF;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined" title="undefined&#x6709;&#x591A;&#x91CD;&#x89D2;&#x8272;,&#x901A;&#x5E38;&#x60C5;&#x51B5;&#x4E0B;,&#x6211;&#x4EEC;&#x6240;&#x8BF4;&#x7684;undefined&#x90FD;&#x6307;&#x7684;&#x662F;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&quot;undefined&quot;."><code>undefined</code></a> &#x6765;&#x4EE3;&#x66FF;&#xFF08;&#x5047;&#x5B9A;&#x5176;&#x4ECD;&#x662F;&#x9ED8;&#x8BA4;&#x503C;&#xFF09;&#x3002;</p>

<h2 id="&#x7ACB;&#x5373;&#x8C03;&#x7528;&#x7684;&#x51FD;&#x6570;&#x8868;&#x8FBE;&#x5F0F;">&#x7ACB;&#x5373;&#x8C03;&#x7528;&#x7684;&#x51FD;&#x6570;&#x8868;&#x8FBE;&#x5F0F;</h2>

<p>&#x5728;&#x4F7F;&#x7528;<a href="/zh-CN/docs/Glossary/IIFE" class="new">&#x7ACB;&#x5373;&#x6267;&#x884C;&#x7684;&#x51FD;&#x6570;&#x8868;&#x8FBE;&#x5F0F;</a>&#x65F6;&#xFF0C;&#x53EF;&#x4EE5;&#x5229;&#x7528; <code>void</code> &#x8FD0;&#x7B97;&#x7B26;&#x8BA9; JavaScript &#x5F15;&#x64CE;&#x628A;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x8BC6;&#x522B;&#x6210;&#x51FD;&#x6570;&#x8868;&#x8FBE;&#x5F0F;&#x800C;&#x4E0D;&#x662F;&#x51FD;&#x6570;&#x58F0;&#x660E;&#xFF08;&#x8BED;&#x53E5;&#xFF09;&#x3002;</p>

<pre class="brush: js">void function iife() {
    var bar = function () {};
    var baz = function () {};
    var foo = function () {
        bar();
        baz();
     };
    var biz = function () {};

    foo();
    biz();
}();
</pre>

<h2 id="JavaScript_URIs">JavaScript URIs</h2>

<p>&#x5F53;&#x7528;&#x6237;&#x70B9;&#x51FB;&#x4E00;&#x4E2A;&#x4EE5; <code>javascript:</code>&#xA0;URI &#x65F6;&#xFF0C;&#x6D4F;&#x89C8;&#x5668;&#x4F1A;&#x5BF9;&#x5192;&#x53F7;&#x540E;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x8FDB;&#x884C;&#x6C42;&#x503C;&#xFF0C;&#x7136;&#x540E;&#x628A;&#x6C42;&#x503C;&#x7684;&#x7ED3;&#x679C;&#x663E;&#x793A;&#x5728;&#x9875;&#x9762;&#x4E0A;&#xFF0C;&#x8FD9;&#x65F6;&#x9875;&#x9762;&#x57FA;&#x672C;&#x4E0A;&#x662F;&#x4E00;&#x5927;&#x7247;&#x7A7A;&#x767D;&#xFF0C;&#x8FD9;&#x901A;&#x5E38;&#x4E0D;&#x662F;&#x6211;&#x4EEC;&#x60F3;&#x8981;&#x7684;&#x3002;&#x53EA;&#x6709;&#x5F53;&#x8FD9;&#x6BB5;&#x4EE3;&#x7801;&#x7684;&#x6C42;&#x503C;&#x7ED3;&#x679C;&#x662F; <code>undefined</code> &#x7684;&#x65F6;&#x5019;&#xFF0C;&#x6D4F;&#x89C8;&#x5668;&#x624D;&#x4E0D;&#x4F1A;&#x53BB;&#x505A;&#x8FD9;&#x4EF6;&#x50BB;&#x4E8B;&#xFF0C;&#x6240;&#x4EE5;&#x6211;&#x4EEC;&#x7ECF;&#x5E38;&#x4F1A;&#x7528; <code>void</code> &#x8FD0;&#x7B97;&#x7B26;&#x6765;&#x5B9E;&#x73B0;&#x8FD9;&#x4E2A;&#x9700;&#x6C42;&#x3002;&#x50CF;&#x4E0B;&#x9762;&#x8FD9;&#x6837;&#xFF1A;</p>

<pre class="brush: html">&lt;a href=&quot;javascript:void(0);&quot;&gt;
  &#x8FD9;&#x4E2A;&#x94FE;&#x63A5;&#x70B9;&#x51FB;&#x4E4B;&#x540E;&#x4E0D;&#x4F1A;&#x505A;&#x4EFB;&#x4F55;&#x4E8B;&#x60C5;&#xFF0C;&#x5982;&#x679C;&#x53BB;&#x6389; void()&#xFF0C;
  &#x70B9;&#x51FB;&#x4E4B;&#x540E;&#x6574;&#x4E2A;&#x9875;&#x9762;&#x4F1A;&#x88AB;&#x66FF;&#x6362;&#x6210;&#x4E00;&#x4E2A;&#x5B57;&#x7B26; 0&#x3002;
&lt;/a&gt;

&lt;a href=&quot;javascript:void(document.body.style.backgroundColor=&apos;green&apos;);&quot;&gt;
  &#x70B9;&#x51FB;&#x8FD9;&#x4E2A;&#x94FE;&#x63A5;&#x4F1A;&#x8BA9;&#x9875;&#x9762;&#x80CC;&#x666F;&#x53D8;&#x6210;&#x7EFF;&#x8272;&#x3002;
&lt;/a&gt;
</pre>

<p>&#x6CE8;&#x610F;&#xFF0C;&#x867D;&#x7136;&#x8FD9;&#x4E48;&#x505A;&#x662F;&#x53EF;&#x884C;&#x7684;&#xFF0C;&#x4F46;&#x5229;&#x7528; <code>javascript:</code> &#x4F2A;&#x534F;&#x8BAE;&#x6765;&#x6267;&#x884C; JavaScript &#x4EE3;&#x7801;&#x662F;&#x4E0D;&#x63A8;&#x8350;&#x7684;&#xFF0C;&#x63A8;&#x8350;&#x7684;&#x505A;&#x6CD5;&#x662F;&#x4E3A;&#x94FE;&#x63A5;&#x5143;&#x7D20;&#x7ED1;&#x5B9A; <code>click</code> &#x4E8B;&#x4EF6;&#x3002;</p>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-void-operator" class="external" lang="en" hreflang="en">ECMAScript 2016 Draft (7th Edition, ECMA-262)<br><small lang="zh-CN">The void Operator</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-void-operator" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">The void Operator</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-11.4.2" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">The void Operator</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf#sec-11.4.2" class="external" lang="en" hreflang="en">ECMAScript 3rd Edition (ECMA-262)<br><small lang="zh-CN">The void Operator</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf#sec-11.4.2" class="external" lang="en" hreflang="en">ECMAScript 1st Edition (ECMA-262)<br><small lang="zh-CN">The void Operator</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition. Implemented in JavaScript 1.1</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<p></p><div class="htab"> 
    <a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a> 
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

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><code><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined">undefined</a></code></li>
</ul>
                  
                
              