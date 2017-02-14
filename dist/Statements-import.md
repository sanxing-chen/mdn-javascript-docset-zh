
                
                  
                    <p></p><section class="Quick_links" id="Quick_Links"><!-- --></section><p></p>

<p><strong>import</strong> &#x8BED;&#x53E5;&#x7528;&#x4E8E;&#x5BFC;&#x5165;&#x4ECE;&#x5916;&#x90E8;&#x6A21;&#x5757;&#xFF0C;&#x53E6;&#x4E00;&#x4E2A;&#x811A;&#x672C;&#x7B49;&#x5BFC;&#x51FA;&#x7684;&#x51FD;&#x6570;&#xFF0C;&#x5BF9;&#x8C61;&#x6216;&#x539F;&#x8BED;&#x3002;</p>

<div class="note">
<p>&#x6CE8;&#x610F;&#xFF1A;&#x6B64;&#x529F;&#x80FD;&#x76EE;&#x524D;&#x65E0;&#x6CD5;&#x5728;&#x4EFB;&#x4F55;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#x5B9E;&#x73B0;&#x3002;&#x5B83;&#x5728;&#x8BB8;&#x591A;&#x8F6C;&#x6362;&#x5668;&#x4E2D;&#x5B9E;&#x73B0;&#xFF0C;&#x4F8B;&#x5982;&#xA0;<a class="external" href="https://github.com/google/traceur-compiler">Traceur Compiler</a>&#xA0;&#xFF0C;&#xA0;<a class="external" href="http://babeljs.io/">Babel</a>&#xA0;&#xFF0C;&#xA0;<a class="external" href="https://github.com/rollup/rollup">Rollup</a>&#xA0;&#x6216;&#xA0;<a class="external" href="https://webpack.js.org/">Webpack</a>&#x3002;</p>
</div>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre>import&#xA0;<em>defaultMember</em>&#xA0;from &quot;<em>module-name</em>&quot;; 
import * as <em>name</em>&#xA0;from &quot;<em>module-name</em>&quot;; 
import {&#xA0;<em>member&#xA0;</em>} from &quot;<em>module-name</em>&quot;; 
import {&#xA0;<em>member</em>&#xA0;as&#xA0;<em>alias&#xA0;</em>} from &quot;<em>module-name</em>&quot;; 
import {&#xA0;<em>member1 , member2</em>&#xA0;} from &quot;<em>module-name</em>&quot;; 
import {&#xA0;<em>member1 , member2</em>&#xA0;as&#xA0;<em>alias2</em>&#xA0;,&#xA0;<em>[...]</em>&#xA0;} from &quot;<em>module-name</em>&quot;; 
import&#xA0;<em>defaultMember</em>, {&#xA0;<em>member</em>&#xA0;[ ,&#xA0;<em>[...]</em>&#xA0;] } from &quot;<em>module-name</em>&quot;; 
import&#xA0;<em>defaultMember</em>, * as&#xA0;<em>name</em>&#xA0;from &quot;<em>module-name</em>&quot;; 
import &quot;<em>module-name</em>&quot;;</pre>

<dl>
 <dt><font face="Courier New, Andale Mono, monospace">name</font></dt>
 <dd>&#x5BFC;&#x5165;&#x5C06;&#x4F1A;&#x5F15;&#x7528;&#x7684;&#x5BF9;&#x8C61;&#x7684;&#x540D;&#x79F0;&#x3002;&#x3002;</dd>
</dl>

<dl>
 <dt><code>member, memberN</code></dt>
 <dd>&#x5C06;&#x8981;&#x5BFC;&#x5165;&#x7684;&#x5BFC;&#x51FA;&#x6210;&#x5458;&#x7684;&#x540D;&#x79F0;&#x3002;</dd>
 <dt><code>defaultMember</code></dt>
 <dd>&#x5C06;&#x5F15;&#x7528;&#x4ECE;&#x6A21;&#x5757;&#x9ED8;&#x8BA4;&#x5BFC;&#x51FA;&#x7684;&#x540D;&#x79F0;&#x3002;</dd>
 <dt><code>alias, aliasN</code></dt>
 <dd>&#x5C06;&#x5F15;&#x7528;&#x547D;&#x540D;&#x5BFC;&#x5165;&#x7684;&#x540D;&#x79F0;&#x3002;</dd>
 <dt><code>module-name</code></dt>
 <dd>&#x8981;&#x5BFC;&#x5165;&#x7684;&#x6A21;&#x5757;&#x7684;&#x540D;&#x79F0;&#x3002;</dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>name &#x53C2;&#x6570;&#x662F;&#x5C06;&#x5F15;&#x7528;&#x5BFC;&#x51FA;&#x6210;&#x5458;&#x7684;&#x540D;&#x79F0;&#x3002;<code>member&#x53C2;&#x6570;&#x6307;&#x5B9A;&#x72EC;&#x7ACB;&#x6210;&#x5458;&#xFF0C;&#x800C;name&#x53C2;&#x6570;&#x5BFC;&#x5165;&#x6240;&#x6709;&#x6210;&#x5458;&#x3002;&#x5982;&#x679C;&#x6A21;&#x5757;&#x5BFC;&#x51FA;&#x5355;&#x4E2A;&#x9ED8;&#x8BA4;&#x53C2;&#x6570;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4E00;&#x7CFB;&#x5217;&#x6210;&#x5458;&#xFF0C;</code><font face="Courier New, Andale Mono, monospace">name&#x4E5F;&#x53EF;&#x4EE5;&#x662F;&#x51FD;&#x6570;&#x3002;</font><br>
 &#x4E0B;&#x9762;&#x63D0;&#x4F9B;&#x4E00;&#x4E9B;&#x793A;&#x4F8B;&#x8BF4;&#x660E;&#x8BED;&#x6CD5;&#x3002;</p>

<p>&#x5BFC;&#x5165;&#x6574;&#x4E2A;&#x6A21;&#x5757;&#x7684;&#x5185;&#x5BB9;&#x3002;&#x4EE5;&#x4E0B;&#x4EE3;&#x7801;&#x5C06;<code>myModule&#x6DFB;&#x52A0;&#x5230;&#x5F53;&#x524D;&#x4F5C;&#x7528;&#x57DF;&#xFF0C;&#x5176;&#x4E2D;&#x5305;&#x62EC;&#x6240;&#x6709;&#x5BFC;&#x51FA;&#x7ED1;&#x5B9A;&#x3002;</code></p>

<pre>import  * as myModule from &quot;my-module&quot;;
</pre>

<p>&#x5BFC;&#x5165;&#x6A21;&#x5757;&#x7684;&#x5355;&#x4E2A;&#x6210;&#x5458;&#x3002;&#x4EE5;&#x4E0B;&#x4EE3;&#x7801;&#x5C06;<code>myMember&#x6DFB;&#x52A0;&#x5230;&#x5F53;&#x524D;&#x4F5C;&#x7528;&#x57DF;&#x3002;</code></p>

<pre>import {myMember} from &quot;my-module&quot;;</pre>

<p>&#x5BFC;&#x5165;&#x6A21;&#x5757;&#x7684;&#x591A;&#x4E2A;&#x6210;&#x5458;&#x3002;&#x4EE5;&#x4E0B;&#x4EE3;&#x7801;&#x4F1A;&#x5C06;<code>foo<font face="Open Sans, Arial, sans-serif">&#x548C;</font></code><code>bar&#x90FD;&#x6DFB;&#x52A0;&#x5230;&#x5F53;&#x524D;&#x4F5C;&#x7528;&#x57DF;</code>&#x3002;</p>

<pre>import {foo, bar} from &quot;my-module&quot;;</pre>

<p>&#x5BFC;&#x5165;&#x6574;&#x4E2A;&#x6A21;&#x5757;&#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x5176;&#x4E2D;&#x4E00;&#x4E9B;&#x88AB;&#x663E;&#x5F0F;&#x547D;&#x540D;&#x3002;<br>
 &#x4EE5;&#x4E0B;&#x4EE3;&#x7801;&#x5C06;<code>myModule</code>&#xFF0C;<code>foo&#xFF0C;</code><code>bar&#x63D2;&#x5165;&#x5230;&#x5F53;&#x524D;&#x4F5C;&#x7528;&#x57DF;&#x3002;<font face="Open Sans, Arial, sans-serif">&#x6CE8;&#x610F;&#xFF0C;</font></code><code>foo</code>&#x548C;<code>myModule.foo</code>&#x662F;&#x5B8C;&#x5168;&#x76F8;&#x540C;&#x7684;&#xFF0C;<code>bar</code>&#x548C;<code>myModule.bar&#x4E5F;&#x662F;&#x5982;&#x6B64;&#x3002;</code></p>

<pre>import MyModule, {foo, bar} from &quot;my-module&quot;;</pre>

<p>&#x5BFC;&#x5165;&#x6210;&#x5458;&#x5E76;&#x6307;&#x5B9A;&#x4E00;&#x4E2A;&#x65B9;&#x4FBF;&#x7684;&#x522B;&#x540D;&#x3002;&#x4EE5;&#x4E0B;&#x4EE3;&#x7801;&#x5C06;<code>shortName&#x6DFB;&#x52A0;&#x5230;&#x5F53;&#x524D;&#x4F5C;&#x7528;&#x57DF;&#x3002;</code></p>

<pre>import {reallyReallyLongModuleMemberName as shortName} from &quot;my-module&quot;;</pre>

<p>&#x5BFC;&#x5165;&#x6574;&#x4E2A;&#x6A21;&#x5757; &#x4F7F;&#x7528;&#x6A21;&#x5757;&#x526F;&#x4F5C;&#x7528;&#xFF0C;&#x4E0D;&#x5BFC;&#x5165;&#x4EFB;&#x4F55;&#x7ED1;&#x5B9A;&#x3002;</p>

<pre>import &quot;my-module&quot;;</pre>

<p>&#x4F7F;&#x7528;&#x522B;&#x540D;&#x5BFC;&#x5165;&#x6A21;&#x5757;&#x7684;&#x591A;&#x4E2A;&#x6210;&#x5458;&#x3002;</p>

<pre><code>import {reallyReallyLongModuleMemberName as shortName, anotherLongModuleName as short} from &quot;my-module&quot;;</code>
</pre>

<p>&#xA0;</p>

<h3 id="&#x5BFC;&#x5165;&#x9ED8;&#x8BA4;&#x503C;">&#x5BFC;&#x5165;&#x9ED8;&#x8BA4;&#x503C;</h3>

<p>&#x53EF;&#x4EE5;&#x5BFC;&#x51FA;&#x9ED8;&#x8BA4;&#x9009;&#x9879;&#xFF0C;&#x65E0;&#x8BBA;&#x662F;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#xFF0C;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x6216;&#x4E00;&#x4E2A; class&#x3002;&#x76F8;&#x5BF9;&#x5730;&#xFF0C; &#x4E5F;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#xA0;<code>import &#x5BFC;&#x5165;&#x9ED8;&#x8BA4;&#x6210;&#x5458;&#x3002;</code></p>

<p><code>&#x6700;&#x7B80;&#x5355;&#x7248;&#x672C;&#xFF0C;&#x76F4;&#x63A5;&#x5BFC;&#x5165;&#x9ED8;&#x8BA4;&#x3002;</code></p>

<pre><code>import myDefault from &quot;my-module&quot;;</code></pre>

<p>&#x4E5F;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x4E0A;&#x9762;&#x63D0;&#x5230;&#x7684;&#x65B9;&#x5F0F;&#x5BFC;&#x5165;&#x547D;&#x540D;&#x7A7A;&#x95F4;&#x3002;</p>

<pre><code>import myDefault, * as myModule from &quot;my-module&quot;;
// myModule used as a namespace</code></pre>

<p><font face="Consolas, Liberation Mono, Courier, monospace">&#x6216;&#x8005;&#x5BFC;&#x5165;&#x5DF2;&#x6709;&#x547D;&#x540D;&#x7684;&#x9ED8;&#x8BA4;&#x9879;&#x3002;&#x8FD9;&#x4E24;&#x79CD;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x9ED8;&#x8BA4;&#x5BFC;&#x5165;&#x9879;&#x5FC5;&#x987B;&#x6700;&#x5148;&#x58F0;&#x660E;&#x3002;</font></p>

<pre><code>import myDefault, {foo, bar} from &quot;my-module&quot;;
// specific, named imports</code></pre>

<h2 id="sect1">&#xA0;</h2>

<h2 id="&#x8303;&#x4F8B;">&#x8303;&#x4F8B;</h2>

<p>&#x5BFC;&#x5165;&#x4E00;&#x4E2A;&#x8F85;&#x52A9;&#x6587;&#x4EF6;&#x4EE5;&#x534F;&#x52A9;&#x5904;&#x7406; AJAX JSON &#x8BF7;&#x6C42;&#x3002;</p>

<pre>// --file.js--
function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () { 
&#xA0;   callback(this.responseText) 
&#xA0; };
  xhr.open(&quot;GET&quot;, url, true);
  xhr.send();
}

export function getUsefulContents(url, callback) {
  getJSON(url, data =&gt; callback(JSON.parse(data)));
}

// --main.js--
import { getUsefulContents } from &quot;file&quot;;
getUsefulContents(&quot;http://www.example.com&quot;, data =&gt; {
  doSomethingUseful(data);
});</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table>
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x89E3;</th>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-imports">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Imports</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="https://tc39.github.io/ecma262/#sec-imports">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Imports</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
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

<table>
 <tbody>
  <tr>
   <th>&#x7279;&#x6027;</th>
   <th>Chrome</th>
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>&#x57FA;&#x672C;&#x652F;&#x6301;</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span>[2]</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span>[1]</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>

<table>
 <tbody>
  <tr>
   <th>&#x7279;&#x6027;</th>
   <th>Android</th>
   <th>Chrome for Android</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>&#x57FA;&#x672C;&#x652F;&#x6301;</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>

<p>[1] &#x67E5;&#x770B;&#xA0;<a title="ES6 modules" class="external" href="https://bugzilla.mozilla.org/show_bug.cgi?id=568953">bug&#xA0;568953</a>.</p>

<p>[2] &#x67E5;&#x770B;&#xA0;<a class="external" href="https://bugs.chromium.org/p/v8/issues/detail?id=1569">Chromium bug 1569</a></p>

<p>[3] &#xA0;&quot;&#x542F;&#x7528;&#x5B9E;&#x9A8C;&#x6027;JavaScript&#x529F;&#x80FD;&quot; &#x6807;&#x8BB0;&#x7684;&#x80CC;&#x540E;</p>

<h2 id="&#x4E5F;&#x53EF;&#x4EE5;&#x770B;&#x770B;">&#x4E5F;&#x53EF;&#x4EE5;&#x770B;&#x770B;</h2>

<ul>
 <li><a title="export&#xA0;&#x8BED;&#x53E5;&#x7528;&#x4E8E;&#x4ECE;&#x7ED9;&#x5B9A;&#x7684;&#x6587;&#x4EF6; (&#x6216;&#x6A21;&#x5757;) &#x4E2D;&#x5BFC;&#x51FA;&#x51FD;&#x6570;&#xFF0C;&#x5BF9;&#x8C61;&#x6216;&#x539F;&#x8BED;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Statements/export"><code>export</code></a></li>
 <li><a class="external" href="https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/">Previewing ES6 Modules and more from ES2015, ES2016 and beyond</a></li>
 <li><a class="external" href="https://hacks.mozilla.org/2015/08/es6-in-depth-modules/">ES6 in Depth: Modules</a>, Hacks blog post by Jason Orendorff</li>
 <li><a class="external" href="http://exploringjs.com/es6/ch_modules.html">Axel Rauschmayer&apos;s book: &quot;Exploring JS: Modules&quot;</a></li>
</ul>

<p>&#xA0;</p>
                  
                
              