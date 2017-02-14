
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>export&#xA0;&#x8BED;&#x53E5;&#x7528;&#x4E8E;&#x4ECE;&#x7ED9;&#x5B9A;&#x7684;&#x6587;&#x4EF6; (&#x6216;&#x6A21;&#x5757;) &#x4E2D;&#x5BFC;&#x51FA;&#x51FD;&#x6570;&#xFF0C;&#x5BF9;&#x8C61;&#x6216;&#x539F;&#x8BED;&#x3002;</p>

<div class="note">
<p>&#x6CE8;&#x610F;<strong>:</strong>&#xA0;&#x6B64;&#x529F;&#x80FD;&#x76EE;&#x524D;&#x65E0;&#x6CD5;&#x5728;&#x4EFB;&#x4F55;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#x5B9E;&#x73B0;&#x3002;&#x5B83;&#x5728;&#x8BB8;&#x591A;&#x8F6C;&#x6362;&#x5668;&#x4E2D;&#x5B9E;&#x73B0;&#xFF0C;&#x4F8B;&#x5982;&#xA0;&#xA0;<a href="https://github.com/google/traceur-compiler" class="external">Traceur Compiler</a>,&#xA0;<a href="http://babeljs.io/" class="external">Babel</a>&#xA0;or&#xA0;<a href="https://github.com/rollup/rollup" class="external">Rollup</a>.</p>
</div>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">export { <var>name1</var>, <var>name2</var>, &#x2026;, <var>nameN</var> };
export { <var>variable1</var> as <var>name1</var>, <var>variable2</var> as <var>name2</var>, &#x2026;, <var>nameN</var> };
export let <var>name1</var>, <var>name2</var>, &#x2026;, <var>nameN</var>; // also var
export let <var>name1</var> = &#x2026;, <var>name2</var> = &#x2026;, &#x2026;, <var>nameN</var>; // also var, const

export default <em>expression</em>;
export default function (&#x2026;) { &#x2026; } // also class, function*
export default function name1(&#x2026;) { &#x2026; } // also class, function*
export { <var>name1</var> as default, &#x2026; };

export * from &#x2026;;
export { <var>name1</var>, <var>name2</var>, &#x2026;, <var>nameN</var> } from &#x2026;;
export { <var>import1</var> as <var>name1</var>, <var>import2</var> as <var>name2</var>, &#x2026;, <var>nameN</var> } from &#x2026;;</pre>

<dl>
 <dt><code>nameN</code></dt>
 <dd>&#x5BFC;&#x51FA;&#x7684;&#x6807;&#x8BC6;&#x7B26;&#xFF08;&#x7528;&#x6765;&#x88AB;&#x5176;&#x4ED6;&#x811A;&#x672C;&#x7684;&#xA0;<code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import">import</a></code>&#xA0;&#x5BFC;&#x5165;&#xFF09;</dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x6709;&#x4E24;&#x79CD;&#x4E0D;&#x540C;&#x7684;&#x5BFC;&#x51FA;&#x65B9;&#x5F0F;&#xFF0C;&#x6BCF;&#x79CD;&#x65B9;&#x5F0F;&#x5BF9;&#x5E94;&#x4E8E;&#x4E0A;&#x8FF0;&#x7684;&#x4E00;&#x79CD;&#x8BED;&#x6CD5;&#xFF1A;</p>

<ul>
 <li>&#x547D;&#x540D;&#x5BFC;&#x51FA;&#xFF1A;
  <pre class="brush: js">export { myFunction }; // &#x5BFC;&#x51FA;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x58F0;&#x660E;
export const foo = Math.sqrt(2); // &#x5BFC;&#x51FA;&#x4E00;&#x4E2A;&#x5E38;&#x91CF;</pre>
 </li>
 <li>&#x9ED8;&#x8BA4;&#x5BFC;&#x51FA; (&#x6BCF;&#x4E2A;&#x811A;&#x672C;&#x53EA;&#x80FD;&#x6709;&#x4E00;&#x4E2A;)&#xFF1A;
  <pre class="brush: js">export default myFunctionOrClass // &#x6216;&#x8005; &apos;export default class {}&apos;
// &#x8FD9;&#x91CC;&#x6CA1;&#x6709;&#x5206;&#x53F7;</pre>
 </li>
</ul>

<p>&#x5BF9;&#x4E8E;&#x53EA;&#x5BFC;&#x51FA;&#x4E00;&#x90E8;&#x5206;&#x503C;&#x6765;&#x8BF4;&#xFF0C;&#x547D;&#x540D;&#x5BFC;&#x51FA;&#x7684;&#x65B9;&#x5F0F;&#x5F88;&#x6709;&#x7528;&#x3002;&#x5728;&#x5BFC;&#x5165;&#x65F6;&#x5019;&#xFF0C;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x76F8;&#x540C;&#x7684;&#x540D;&#x79F0;&#x6765;&#x5F15;&#x7528;&#x5BF9;&#x5E94;&#x5BFC;&#x51FA;&#x7684;&#x503C;&#x3002;</p>

<p>&#x5173;&#x4E8E;&#x9ED8;&#x8BA4;&#x5BFC;&#x51FA;&#x65B9;&#x5F0F;&#xFF0C;&#x6BCF;&#x4E2A;&#x6A21;&#x5757;&#x53EA;&#x6709;&#x4E00;&#x4E2A;&#x9ED8;&#x8BA4;&#x5BFC;&#x51FA;&#x3002;&#x4E00;&#x4E2A;&#x9ED8;&#x8BA4;&#x5BFC;&#x51FA;&#x53EF;&#x4EE5;&#x662F;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#xFF0C;&#x4E00;&#x4E2A;&#x7C7B;&#xFF0C;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7B49;&#x3002;&#x5F53;&#x6700;&#x7B80;&#x5355;&#x5BFC;&#x5165;&#x7684;&#x65F6;&#x5019;&#xFF0C;&#x8FD9;&#x4E2A;&#x503C;&#x662F;&#x5C06;&#x88AB;&#x8BA4;&#x4E3A;&#x662F;&#x201D;&#x5165;&#x53E3;&#x201D;&#x5BFC;&#x51FA;&#x503C;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x547D;&#x540D;&#x5BFC;&#x51FA;">&#x547D;&#x540D;&#x5BFC;&#x51FA;</h3>

<p>&#x5728;&#x8FD9;&#x4E2A;&#x6A21;&#x5757;&#x91CC;&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x8FD9;&#x4E48;&#x5BFC;&#x51FA;&#xFF1A;</p>

<pre class="brush: js">// module &quot;my-module.js&quot;
export function cube(x) {
  return x * x * x;
}
const foo = Math.PI + Math.SQRT2;
export { foo };
</pre>

<p>&#x8FD9;&#x6837;&#x7684;&#x8BDD;&#xFF0C;&#x5728;&#x5176;&#x5B83;&#x811A;&#x672C; (cf.&#xA0;<code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import">import</a></code>)&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x8FD9;&#x6837;&#x4F7F;&#x7528;&#xFF1A;</p>

<pre class="brush: js">import { cube, foo } from &apos;my-module.js&apos;;
console.log(cube(3)); // 27
console.log(foo);    // 4.555806215962888</pre>

<h3 id="&#x9ED8;&#x8BA4;&#x5BFC;&#x51FA;">&#x9ED8;&#x8BA4;&#x5BFC;&#x51FA;</h3>

<p>&#x5982;&#x679C;&#x6211;&#x4EEC;&#x53EA;&#x60F3;&#x5BFC;&#x51FA;&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x7684;&#x503C;&#x6216;&#x8005;&#x60F3;&#x5728;&#x6A21;&#x5757;&#x4E2D;&#x4FDD;&#x7559;&#x4E00;&#x4E2A;&#x5019;&#x9009;&#x503C;&#xFF0C;&#x5C31;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x9ED8;&#x8BA4;&#x5BFC;&#x51FA;&#xFF1A;</p>

<pre class="brush: js">// module &quot;my-module.js&quot;
export default function cube(x) {
  return x * x * x;
}</pre>

<p>&#x7136;&#x540E;&#xFF0C;&#x5728;&#x53E6;&#x4E00;&#x4E2A;&#x811A;&#x672C;&#x4E2D;&#xFF0C;&#x9ED8;&#x8BA4;&#x7684;&#x5BFC;&#x51FA;&#x503C;&#x5C31;&#x53EF;&#x4EE5;&#x88AB;&#x7B80;&#x5355;&#x76F4;&#x63A5;&#x7684;&#x5BFC;&#x5165;&#xFF1A;</p>

<pre class="brush: js line-numbers  language-js">// module &quot;my-module.js&quot;
import cube from &apos;my-module&apos;;
console.log(cube(3)); // 27&#x200B;&#x200B;&#x200B;&#x200B;&#x200B;</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-exports" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Exports</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-exports" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Exports</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x652F;&#x6301;">&#x6D4F;&#x89C8;&#x5668;&#x652F;&#x6301;</h2>

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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span><br>
    (Netscape 4 until <a href="/en-US/Firefox/Releases/3.5">Firefox 3.5</a>)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x53C2;&#x89C1;">&#x53C2;&#x89C1;</h2>

<ul>
 <li><a title="name&#x53C2;&#x6570;&#x7528;&#x4E8E;&#x63A5;&#x6536;&#x5BFC;&#x51FA;&#x6210;&#x5458;&#x7684;&#x5BF9;&#x8C61;&#x540D;&#x79F0;&#x3002;member&#x53C2;&#x6570;&#x6307;&#x5B9A;&#x72EC;&#x7ACB;&#x6210;&#x5458;&#xFF0C;&#x800C;name&#x53C2;&#x6570;&#x5BFC;&#x5165;&#x6240;&#x6709;&#x6210;&#x5458;&#x3002;&#x5982;&#x679C;&#x6A21;&#x5757;&#x5BFC;&#x51FA;&#x5355;&#x4E2A;&#x9ED8;&#x8BA4;&#x53C2;&#x6570;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4E00;&#x7CFB;&#x5217;&#x6210;&#x5458;&#xFF0C;name&#x4E5F;&#x53EF;&#x4EE5;&#x662F;&#x51FD;&#x6570;&#x3002;
 &#x4E0B;&#x9762;&#x63D0;&#x4F9B;&#x4E00;&#x4E9B;&#x793A;&#x4F8B;&#x8BF4;&#x660E;&#x8BED;&#x6CD5;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Statements/import"><code>import</code></a></li>
 <li><a href="https://hacks.mozilla.org/2015/08/es6-in-depth-modules/" class="external">ES6 in Depth: Modules</a>, Hacks blog post by Jason Orendorff</li>
 <li><a href="http://exploringjs.com/es6/ch_modules.html" class="external">Axel Rauschmayer&apos;s book: &quot;Exploring JS: Modules&quot;</a></li>
</ul>
                  
                
              