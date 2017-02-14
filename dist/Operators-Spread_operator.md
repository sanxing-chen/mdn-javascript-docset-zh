
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>&#xA0;&#x6269;&#x5C55;&#x8BED;&#x6CD5;&#x5141;&#x8BB8;&#x5728;&#x9700;&#x8981;&#x591A;&#x4E2A;&#x53C2;&#x6570;&#xFF08;&#x7528;&#x4E8E;&#x51FD;&#x6570;&#x8C03;&#x7528;&#xFF09;&#x6216;&#x591A;&#x4E2A;&#x5143;&#x7D20;&#xFF08;&#x7528;&#x4E8E;&#x6570;&#x7EC4;&#x6587;&#x672C;&#xFF09;&#x6216;&#x591A;&#x4E2A;&#x53D8;&#x91CF;&#xFF08;&#x7528;&#x4E8E;&#x89E3;&#x6784;&#x5206;&#x914D;&#xFF09;&#x7684;&#x4F4D;&#x7F6E;&#x6269;&#x5C55;&#x8868;&#x8FBE;&#x5F0F;&#x3002;</p>

<p>&#xA0;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<p>&#x7528;&#x4E8E;&#x51FD;&#x6570;&#x8C03;&#x7528;:</p>

<pre class="syntax">myFunction(...iterableObj);</pre>

<p>&#x7528;&#x4E8E;&#x6570;&#x7EC4;&#x5B57;&#x9762;&#x91CF;:</p>

<pre class="syntax">[...iterableObj, 4, 5, 6]
</pre>

<h2 name="Example" id="Example">&#x8303;&#x4F8B;</h2>

<h3 id="&#x66F4;&#x597D;&#x7684;_apply_&#x65B9;&#x6CD5;">&#x66F4;&#x597D;&#x7684; apply &#x65B9;&#x6CD5;</h3>

<p>&#x5728;&#x9700;&#x8981;&#x4F7F;&#x7528;&#x6570;&#x7EC4;&#x4F5C;&#x4E3A;&#x51FD;&#x6570;&#x7684;&#x53C2;&#x6570;&#x7684;&#x60C5;&#x51B5;&#x4E0B;,&#x901A;&#x5E38;&#x4F7F;&#x7528; <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply " class="new"><code>Function.prototype.apply </code></a>&#x65B9;&#x6CD5;:</p>

<pre class="brush: js">function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction.apply(null, args);</pre>

<p>&#x5982;&#x679C;&#x4F7F;&#x7528;&#x4E86;ES6&#x7684;&#x5C55;&#x5F00;&#x8FD0;&#x7B97;&#x7B26;,&#x4F60;&#x53EF;&#x4EE5;&#x8FD9;&#x4E48;&#x5199;:</p>

<pre class="brush: js">function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction(...args);</pre>

<p>&#x8FD8;&#x53EF;&#x4EE5;&#x540C;&#x65F6;&#x5C55;&#x5F00;&#x591A;&#x4E2A;&#x6570;&#x7EC4;:</p>

<pre class="brush: js">function myFunction(v, w, x, y, z) { }
var args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);</pre>

<h3 id="&#x66F4;&#x5F3A;&#x5927;&#x7684;&#x6570;&#x7EC4;&#x5B57;&#x9762;&#x91CF;">&#x66F4;&#x5F3A;&#x5927;&#x7684;&#x6570;&#x7EC4;&#x5B57;&#x9762;&#x91CF;</h3>

<p><strong>&#x4F8B;&#x5B50;:</strong>&#xA0;&#xA0;&#x5982;&#x679C;&#x5DF2;&#x7ECF;&#x6709;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#xFF0C;&#x6B64;&#x65F6;&#x8FD8;&#x9700;&#x8981;&#x518D;&#x65B0;&#x5EFA;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#xFF0C;&#x8981;&#x6C42;&#x65B0;&#x6570;&#x7EC4;&#x5305;&#x542B;&#x5DF2;&#x6709;&#x6570;&#x7EC4;&#x7684;&#x6570;&#x7EC4;&#x9879;&#x7684;&#x8BDD;&#xFF0C;&#x5C31;&#x8981;&#x7528;&#x5230;<code>push<font face="Open Sans, Arial, sans-serif">&#xFF0C;</font></code><code>splice<font face="Open Sans, Arial, sans-serif">&#xFF0C;</font></code><code>concat&#xA0;</code>&#x7B49;&#x6570;&#x7EC4;&#x65B9;&#x6CD5;&#x3002;&#x6709;&#x4E86;&#x6269;&#x5C55;&#x8FD0;&#x7B97;&#x7B26;&#x4F1A;&#x8BA9;&#x4EE3;&#x7801;&#x66F4;&#x7B80;&#x6D01;:</p>

<pre class="brush: js">var parts = [&apos;shoulder&apos;, &apos;knees&apos;];
var lyrics = [&apos;head&apos;, ...parts, &apos;and&apos;, &apos;toes&apos;]; // [&quot;head&quot;, &quot;shoulders&quot;, &quot;knees&quot;, &quot;and&quot;, &quot;toes&quot;]</pre>

<p>&#x548C;&#x51FD;&#x6570;&#x8C03;&#x7528;&#x4E00;&#x6837;,&#x6570;&#x7EC4;&#x5B57;&#x9762;&#x91CF;&#x4E2D;&#x4E5F;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;<code>...</code>&#x591A;&#x6B21;.</p>

<h3 id="&#x914D;&#x5408;new&#x8FD0;&#x7B97;&#x7B26;">&#x914D;&#x5408;new&#x8FD0;&#x7B97;&#x7B26;</h3>

<p><strong>&#x4F8B;&#x5B50;:</strong> &#x5728;ES5&#x4E2D;,&#x6211;&#x4EEC;&#x65E0;&#x6CD5;&#x540C;&#x65F6;&#x4F7F;&#x7528;&#xA0;<code>new&#xA0;</code>&#x8FD0;&#x7B97;&#x7B26;&#x548C;&#xA0;<code>apply&#xA0;</code>&#x65B9;&#x6CD5;(<code>apply</code>&#x65B9;&#x6CD5;&#x8C03;&#x7528;<code>[[Call]]</code>&#x800C;&#x4E0D;&#x662F;<code>[[Construct]]</code>)&#x3002;&#x5728;ES6&#x4E2D;&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x6269;&#x5C55;&#x8FD0;&#x7B97;&#x7B26;&#xFF0C;&#x548C;&#x666E;&#x901A;&#x7684;&#x51FD;&#x6570;&#x8C03;&#x7528;&#x4E00;&#x6837;&#x3002;</p>

<pre class="brush: js">var dataFields = readDateFields(database);
var d = new Date(...dateFields);</pre>

<h3 id="&#x66F4;&#x597D;&#x7684;_push_&#x65B9;&#x6CD5;">&#x66F4;&#x597D;&#x7684; push &#x65B9;&#x6CD5;</h3>

<p><strong>&#x4F8B;&#x5B50;:</strong> &#x5728;ES5&#x4E2D;&#xFF0C;&#x6211;&#x4EEC;&#x901A;&#x5E38;&#x4F7F;&#x7528; <a title="push()&#xA0;&#x65B9;&#x6CD5;&#x6DFB;&#x52A0;&#x4E00;&#x4E2A;&#x6216;&#x591A;&#x4E2A;&#x5143;&#x7D20;&#x5230;&#x6570;&#x7EC4;&#x7684;&#x672B;&#x5C3E;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x65B0;&#x7684;&#x957F;&#x5EA6;&#xFF08;length &#x5C5E;&#x6027;&#x503C;&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push"><code>push</code></a> &#x65B9;&#x6CD5;&#x5C06;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x6DFB;&#x52A0;&#x5230;&#x53E6;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x7684;&#x672B;&#x5C3E;:</p>

<pre class="brush: js">var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// &#x5C06;arr2&#x4E2D;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x6DFB;&#x52A0;&#x5230;arr1&#x4E2D;
Array.prototype.push.apply(arr1, arr2);</pre>

<p>&#x5728;ES6&#x4E2D;&#xFF0C;&#x4F7F;&#x7528;&#x6269;&#x5C55;&#x8FD0;&#x7B97;&#x7B26;&#xFF1A;</p>

<pre class="brush: js">var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2);
</pre>

<h3 id="&#x4EC5;&#x53EF;&#x904D;&#x5386;&#x5BF9;&#x8C61;(iterables)&#x53EF;&#x7528;">&#x4EC5;&#x53EF;&#x904D;&#x5386;&#x5BF9;&#x8C61;(iterables)&#x53EF;&#x7528;</h3>

<pre class="brush: js">var obj = {&quot;key1&quot;:&quot;value1&quot;};
function myFunction(x) {
&#xA0;&#xA0; &#xA0;console.log(x); // undefined
}
myFunction(...obj);
var args = [...obj];
console.log(args, args.length) //[] 0</pre>

<h3 id="&#x5C06;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x8F6C;&#x6362;&#x6210;&#x6570;&#x7EC4;">&#x5C06;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x8F6C;&#x6362;&#x6210;&#x6570;&#x7EC4;</h3>

<p>&#x6269;&#x5C55;&#x8FD0;&#x7B97;&#x7B26;&#x53EF;&#x4EE5;&#x5C06;&#x4E00;&#x4E2A;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x4E2D;&#x7D22;&#x5F15;&#x8303;&#x56F4;&#x5728;[<code>0</code>,<code>length)</code>&#x4E4B;&#x95F4;&#x7684;&#x6240;&#x6709;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x6DFB;&#x52A0;&#x5230;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x4E2D;,&#x8FD9;&#x6837;&#x5C31;&#x53EF;&#x4EE5;&#x5F97;&#x5230;&#x4E00;&#x4E2A;&#x771F;&#x6B63;&#x7684;<code>&#x6570;&#x7EC4;</code>:</p>

<pre class="brush: js">var nodeList = document.querySelectorAll(&apos;div&apos;);
var array = [...nodeList];</pre>

<h2 id="&#x5269;&#x4F59;&#x64CD;&#x4F5C;&#x7B26;">&#x5269;&#x4F59;&#x64CD;&#x4F5C;&#x7B26;</h2>

<p>&#x8FD8;&#x6709;&#x4E00;&#x79CD;&#x64CD;&#x4F5C;&#x7B26;&#x53EB;&#x505A;&#x5269;&#x4F59;&#x64CD;&#x4F5C;&#x7B26;&#xFF08;<a href="/zh-CN/docs/Web/JavaScript/Reference/Functions/Rest_parameters">the rest operator</a>&#xFF09;&#xFF0C;&#x5B83;&#x7684;&#x6837;&#x5B50;&#x770B;&#x8D77;&#x6765;&#x548C;&#x5C55;&#x5F00;&#x64CD;&#x4F5C;&#x7B26;&#x4E00;&#x6837;&#xFF0C;&#x4F46;&#x662F;&#x5B83;&#x662F;&#x7528;&#x4E8E;&#x89E3;&#x6784;&#x6570;&#x7EC4;&#x548C;&#x5BF9;&#x8C61;&#x3002;&#x5728;&#x67D0;&#x79CD;&#x7A0B;&#x5EA6;&#x4E0A;&#xFF0C;&#x5269;&#x4F59;&#x5143;&#x7D20;&#x548C;&#x5C55;&#x5F00;&#x5143;&#x7D20;&#x76F8;&#x53CD;&#xFF0C;&#x5C55;&#x5F00;&#x5143;&#x7D20;&#x4F1A;&#x201C;&#x5C55;&#x5F00;&#x201D;&#x6570;&#x7EC4;&#x53D8;&#x6210;&#x591A;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x5269;&#x4F59;&#x5143;&#x7D20;&#x4F1A;&#x6536;&#x96C6;&#x591A;&#x4E2A;&#x5143;&#x7D20;&#x548C;&#x201C;&#x538B;&#x7F29;&#x201D;&#x6210;&#x4E00;&#x4E2A;&#x5355;&#x4E00;&#x7684;&#x5143;&#x7D20;&#x3002;</p>

<h2 style="margin-bottom: 20px; line-height: 30px;" id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x5907;&#x6CE8;</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><a lang="en" title="ECMAScript 2015 (6th Edition, ECMA-262)" class="external" href="http://www.ecma-international.org/ecma-262/6.0/#sec-array-initializer" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x89C4;&#x8303;&#x4E2D;&#x5B9A;&#x4E49;&#x7684;&#x51E0;&#x4E2A;&#x90E8;&#x5206;: <a href="http://www.ecma-international.org/ecma-262/6.0/#sec-array-initializer" class="external">Array Initializer</a>, <a href="http://www.ecma-international.org/ecma-262/6.0/#sec-argument-lists" class="external">Argument Lists</a></td>
  </tr>
  <tr>
   <td><a lang="en" title="ECMAScript 2017 Draft (ECMA-262)" class="external" href="https://tc39.github.io/ecma262/#sec-array-initializer" hreflang="en">ECMAScript 2017 Draft (ECMA-262)</a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 name="Specifications" id="Specifications">&#xA0;</h2>

<h2 name="Browser_Compatibility" id="Browser_Compatibility">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
   <th>Safari (WebKit)</th>
  </tr>
  <tr>
   <td>&#x6570;&#x7EC4;&#x5B57;&#x9762;&#x91CF;&#x4E2D;&#x7684;&#x5C55;&#x5F00;&#x64CD;&#x4F5C;</td>
   <td>46</td>
   <td><a title="Released on 2012-10-09." href="/en-US/Firefox/Releases/16">16</a> (16)</td>
   <td>Edge</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>7.1</td>
  </tr>
  <tr>
   <td>&#x51FD;&#x6570;&#x8C03;&#x7528;&#x4E2D;&#x7684;&#x5C55;&#x5F00;&#x64CD;&#x4F5C;</td>
   <td>46</td>
   <td><a title="Released on 2014-02-04." href="/en-US/Firefox/Releases/27">27</a> (27)</td>
   <td>Edge</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>7.1</td>
  </tr>
  <tr>
   <td>&#x89E3;&#x6784;&#x8D4B;&#x503C;&#x4E2D;&#x7684;&#x5C55;&#x5F00;&#x64CD;&#x4F5C;</td>
   <td>49</td>
   <td><a title="Released on 2014-12-01." href="/en-US/Firefox/Releases/34">34</a> (34)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
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
   <th>Android Webview</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
   <th>Chrome for Android</th>
  </tr>
  <tr>
   <td>&#x6570;&#x7EC4;&#x5B57;&#x9762;&#x91CF;&#x4E2D;&#x7684;&#x5C55;&#x5F00;&#x64CD;&#x4F5C;</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>46</td>
   <td>16.0 (16)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>8</td>
   <td>46</td>
  </tr>
  <tr>
   <td>&#x51FD;&#x6570;&#x8C03;&#x7528;&#x4E2D;&#x7684;&#x5C55;&#x5F00;&#x64CD;&#x4F5C;</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>46</td>
   <td>27.0 (27)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>8</td>
   <td>46</td>
  </tr>
  <tr>
   <td>&#x89E3;&#x6784;&#x8D4B;&#x503C;&#x4E2D;&#x7684;&#x5C55;&#x5F00;&#x64CD;&#x4F5C;</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><a title="Released on 2014-12-01." href="/en-US/Firefox/Releases/34">34</a> (34)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="rest parameters" href="/zh-CN/docs/Web/JavaScript/Reference/Functions/Rest_parameters">&#x5269;&#x4F59;&#x53C2;&#x6570;</a></li>
 <li><a href="http://exploringjs.com/es6/ch_destructuring.html#sec_rest-operator" class="external">&#x5269;&#x4F59;&#x64CD;&#x4F5C;&#x7B26;</a></li>
</ul>
                  
                
              