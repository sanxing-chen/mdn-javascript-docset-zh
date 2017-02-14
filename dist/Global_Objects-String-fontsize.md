
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="overheadIndicator deprecated deprecatedHeader"> 
            <p><strong><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span> &#x5DF2;&#x5E9F;&#x5F03;</strong><br>&#x8BE5;&#x7279;&#x6027;&#x5DF2;&#x7ECF;&#x4ECE; Web &#x6807;&#x51C6;&#x4E2D;&#x5220;&#x9664;&#xFF0C;&#x867D;&#x7136;&#x4E00;&#x4E9B;&#x6D4F;&#x89C8;&#x5668;&#x76EE;&#x524D;&#x4ECD;&#x7136;&#x652F;&#x6301;&#x5B83;&#xFF0C;&#x4F46;&#x4E5F;&#x8BB8;&#x4F1A;&#x5728;&#x672A;&#x6765;&#x7684;&#x67D0;&#x4E2A;&#x65F6;&#x95F4;&#x505C;&#x6B62;&#x652F;&#x6301;&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x4F7F;&#x7528;&#x8BE5;&#x7279;&#x6027;&#x3002;</p> 
        </div></div>

<p>The <strong><code>fontsize()</code></strong> method creates a <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/HTML/Element/font" class="new"><code>&lt;font&gt;</code></a> HTML element that causes a string to be displayed in the specified font size.</p>

<div class="note">
<p><strong>Usage note:</strong> The &lt;font&gt; element has been removed in <a href="/en-US/docs/Web/Guide/HTML/HTML5">HTML5</a> and shouldn&apos;t be used anymore. Instead web developers should use <a href="/en-US/docs/Web/CSS">CSS</a> properties.</p>
</div>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>str</var>.fontsize(<var>size</var>)</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>size</code></dt>
 <dd>An integer between 1 and 7, a string representing a signed integer between 1 and 7.</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>A string containing a <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/HTML/Element/font" class="new"><code>&lt;font&gt;</code></a> HTML element.</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>When you specify size as an integer, you set the font size of <code>str</code> to one of the 7 defined sizes. When you specify <code>size</code> as a string such as &quot;-2&quot;, you adjust the font size of <code>str</code> relative to the size set in the <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/HTML/Element/basefont" class="new"><code>&lt;basefont&gt;</code></a> tag.</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;fontsize()&#x65B9;&#x6CD5;"><code><font face="Open Sans, Arial, sans-serif">&#x4F7F;&#x7528;</font>fontsize()&#x65B9;&#x6CD5;</code></h3>

<p>The following example uses string methods to change the size of a string:</p>

<pre class="brush: js">var worldString = &apos;Hello, world&apos;;

console.log(worldString.small());     // &lt;small&gt;Hello, world&lt;/small&gt;
console.log(worldString.big());       // &lt;big&gt;Hello, world&lt;/big&gt;
console.log(worldString.fontsize(7)); // &lt;font size=&quot;7&quot;&gt;Hello, world&lt;/fontsize&gt;
</pre>

<p>With the <a title="HTMLElement.style&#xA0;&#x5C5E;&#x6027;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#xA0;CSSStyleDeclaration&#xA0;&#x5BF9;&#x8C61;&#xFF0C;&#x8868;&#x793A;&#x5143;&#x7D20;&#x7684; &#x5185;&#x8054;style&#xA0;&#x5C5E;&#x6027;&#xFF08;attribute&#xFF09;&#xFF0C;&#x4F46;&#x5FFD;&#x7565;&#x4EFB;&#x4F55;&#x6837;&#x5F0F;&#x8868;&#x5E94;&#x7528;&#x7684;&#x5C5E;&#x6027;&#x3002; &#x901A;&#x8FC7; style &#x53EF;&#x4EE5;&#x8BBF;&#x95EE;&#x7684; CSS &#x5C5E;&#x6027;&#x5217;&#x8868;&#xFF0C;&#x53EF;&#x4EE5;&#x67E5;&#x770B;&#xA0;CSS Properties Reference&#x3002;" href="/zh-CN/docs/Web/API/HTMLElement/style"><code>element.style</code></a> object you can get the element&apos;s <code>style</code> attribute and manipulate it more generically, for example:</p>

<pre class="brush: js">document.getElementById(&apos;yourElemId&apos;).style.fontSize = &apos;0.7em&apos;;
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.fontsize" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">String.prototype.fontsize</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition. Implemented in JavaScript 1.0. Defined in the (normative) Annex B for Additional ECMAScript Features for Web Browsers.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-string.prototype.fontsize" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">String.prototype.fontsize</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>Defined in the (normative) Annex B for Additional ECMAScript Features for Web Browsers.</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<div><div class="htab"> 
    <a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a> 
    <ul> 
        <li class="selected"><a>Desktop</a></li> 
        <li><a>Mobile</a></li> 
    </ul> 
</div></div>

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
   <td>1.0 (1.7 or earlier)</td>
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
   <td>1.0 (1.0)</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="big()&#x65B9;&#x6CD5;&#x7684;&#x4F5C;&#x7528;&#x662F;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x4F7F;&#x5B57;&#x7B26;&#x4E32;&#x663E;&#x793A;&#x5927;&#x53F7;&#x5B57;&#x4F53;&#x7684;&lt;big&gt;&#x6807;&#x7B7E;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/big"><code>String.prototype.big()</code></a></li>
 <li><a title="The small() method creates a &lt;small&gt; HTML element that causes a string to be displayed in a small font." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/small"><code>String.prototype.small()</code></a></li>
</ul>
                  
                
              