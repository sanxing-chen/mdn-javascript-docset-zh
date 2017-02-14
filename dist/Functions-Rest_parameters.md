
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p><strong>&#x5269;&#x4F59;&#x53C2;&#x6570;&#xFF08;rest parameter&#xFF09;</strong>&#x5141;&#x8BB8;&#x957F;&#x5EA6;&#x4E0D;&#x786E;&#x5B9A;&#x7684;&#x5B9E;&#x53C2;&#x8868;&#x793A;&#x4E3A;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="brush: js">function(a, b, ...theArgs) {
  // ...
}
</pre>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x5982;&#x679C;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x7684;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x5F62;&#x53C2;&#x662F;&#x4EE5; <code>... &#x4E3A;&#x524D;&#x7F00;&#x7684;&#xFF0C;</code>&#x5219;&#x5728;&#x51FD;&#x6570;&#x88AB;&#x8C03;&#x7528;&#x65F6;,&#x8BE5;&#x5F62;&#x53C2;&#x4F1A;&#x6210;&#x4E3A;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;,&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x90FD;&#x662F;&#x4F20;&#x9012;&#x7ED9;&#x8BE5;&#x51FD;&#x6570;&#x7684;&#x591A;&#x51FA;&#x6765;&#x7684;&#x5B9E;&#x53C2;&#x7684;&#x503C;&#x3002;</p>

<p>&#x5728;&#x4E0A;&#x4F8B;&#x4E2D;&#xFF0C;<code>theArgs &#x4F1A;&#x5305;&#x542B;&#x4F20;&#x9012;&#x7ED9;&#x51FD;&#x6570;&#x7684;&#x4ECE;&#x7B2C;&#x4E09;&#x4E2A;&#x5B9E;&#x53C2;</code><code>&#x5F00;&#x59CB;&#x5230;&#x6700;&#x540E;&#x6240;&#x6709;&#x7684;&#x5B9E;&#x53C2;&#xA0;</code>(&#x7B2C;&#x4E00;&#x4E2A;&#x5B9E;&#x53C2;&#x6620;&#x5C04;&#x5230; <code>a</code>, &#x7B2C;&#x4E8C;&#x4E2A;&#x5B9E;&#x53C2;&#x6620;&#x5C04;&#x5230; <code>b</code>)&#x3002;</p>

<h3 id="&#x5269;&#x4F59;&#x53C2;&#x6570;&#x548C;_arguments_&#x5BF9;&#x8C61;&#x7684;&#x533A;&#x522B;">&#x5269;&#x4F59;&#x53C2;&#x6570;&#x548C;&#xA0;<code>arguments&#xA0;</code>&#x5BF9;&#x8C61;&#x7684;&#x533A;&#x522B;</h3>

<p>&#x5269;&#x4F59;&#x53C2;&#x6570;&#x548C;&#xA0;<code><a href="../../../../zh-cn/JavaScript/Reference/Functions_and_function_scope/arguments" title="arguments">arguments</a>&#xA0;</code>&#x5BF9;&#x8C61;&#x4E4B;&#x95F4;&#x7684;&#x533A;&#x522B;&#x4E3B;&#x8981;&#x6709;&#x4E09;&#x4E2A;&#xFF1A;</p>

<ul>
 <li>&#x5269;&#x4F59;&#x53C2;&#x6570;&#x53EA;&#x5305;&#x542B;&#x90A3;&#x4E9B;&#x6CA1;&#x6709;&#x5BF9;&#x5E94;&#x5F62;&#x53C2;&#x7684;&#x5B9E;&#x53C2;&#xFF0C;&#x800C; <code>arguments</code> &#x5BF9;&#x8C61;&#x5305;&#x542B;&#x4E86;&#x4F20;&#x7ED9;&#x51FD;&#x6570;&#x7684;&#x6240;&#x6709;&#x5B9E;&#x53C2;&#x3002;</li>
 <li><code>arguments</code> &#x5BF9;&#x8C61;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x771F;&#x5B9E;&#x7684;&#x6570;&#x7EC4;,&#x800C;&#x5269;&#x4F59;&#x53C2;&#x6570;&#x662F;&#x771F;&#x5B9E;&#x7684;&#xA0;<code><a href="../../../../zh-cn/JavaScript/Reference/Global_Objects/Array" title="Array">Array&#x5B9E;&#x4F8B;</a>&#xFF0C;</code>&#x4E5F;&#x5C31;&#x662F;&#x8BF4;&#x4F60;&#x80FD;&#x591F;&#x5728;&#x5B83;&#x4E0A;&#x9762;&#x76F4;&#x63A5;&#x4F7F;&#x7528;&#x6240;&#x6709;&#x7684;&#x6570;&#x7EC4;&#x65B9;&#x6CD5;&#xFF0C;&#x6BD4;&#x5982;&#xA0;<code><a href="../../../../zh-cn/JavaScript/Reference/Global_Objects/Array/sort" title="Array sort method">sort</a><font face="Open Sans, Arial, sans-serif">&#xFF0C;</font></code><code><a href="../../../../zh-cn/JavaScript/Reference/Global_Objects/Array/map" title="Array map method">map</a><font face="Open Sans, Arial, sans-serif">&#xFF0C;</font></code><code><a href="../../../../zh-cn/JavaScript/Reference/Global_Objects/Array/forEach" title="Array forEach method">forEach</a><font face="Open Sans, Arial, sans-serif">&#xFF0C;</font></code><code><a href="../../../../zh-cn/JavaScript/Reference/Global_Objects/Array/pop" title="Array pop method">pop</a>&#x3002;</code></li>
 <li><code>arguments &#x5BF9;&#x8C61;&#x5BF9;&#x8C61;&#x8FD8;&#x6709;&#x4E00;&#x4E9B;&#x9644;&#x52A0;&#x7684;&#x5C5E;&#x6027;</code> (&#x6BD4;&#x5982;<code>callee&#x5C5E;&#x6027;</code>)&#x3002;</li>
</ul>

<h3 id="arguments&#x5BF9;&#x8C61;&#x8F6C;&#x6362;&#x4E3A;&#x5269;&#x4F59;&#x53C2;&#x6570;">arguments&#x5BF9;&#x8C61;&#x8F6C;&#x6362;&#x4E3A;&#x5269;&#x4F59;&#x53C2;&#x6570;</h3>

<p>&#x4F7F;&#x7528;&#x5269;&#x4F59;&#x53C2;&#x6570;&#x53EF;&#x4EE5;&#x907F;&#x514D;&#x5C06;<code>arguments</code>&#x8F6C;&#x4E3A;&#x6570;&#x7EC4;&#x7684;&#x9EBB;&#x70E6;</p>

<pre class="brush: js">// &#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x6A21;&#x62DF;&#x4E86;&#x5269;&#x4F59;&#x6570;&#x7EC4;
function f(a, b){
&#xA0; var args = Array.prototype.slice.call(arguments, f.length);
&#xA0; // ...
}
&#xA0;
// &#x73B0;&#x5728;&#x4EE3;&#x7801;&#x53EF;&#x4EE5;&#x7B80;&#x5316;&#x4E3A;&#x8FD9;&#x6837;&#x4E86;
function(a, b, ...args) {
&#xA0; &#xA0;
}</pre>

<h2 name="Example" id="Example">&#x793A;&#x4F8B;</h2>

<p>&#x56E0;&#x4E3A;<code>theArgs</code>&#x662F;&#x4E2A;&#x6570;&#x7EC4;,&#x6240;&#x4EE5;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;<code>length&#x5C5E;&#x6027;</code>&#x5F97;&#x5230;&#x5269;&#x4F59;&#x53C2;&#x6570;&#x7684;&#x4E2A;&#x6570;:</p>

<pre class="brush: js">function fun1(...theArgs) {
&#xA0; alert(theArgs.length);
}
&#xA0;
fun1();&#xA0; // &#x5F39;&#x51FA; &quot;0&quot;, &#x56E0;&#x4E3A;theArgs&#x6CA1;&#x6709;&#x5143;&#x7D20;
fun1(5); // &#x5F39;&#x51FA; &quot;1&quot;, &#x56E0;&#x4E3A;theArgs&#x53EA;&#x6709;&#x4E00;&#x4E2A;&#x5143;&#x7D20;
fun1(5, 6, 7); // &#x5F39;&#x51FA; &quot;3&quot;, &#x56E0;&#x4E3A;theArgs&#x6709;&#x4E09;&#x4E2A;&#x5143;&#x7D20;</pre>

<p>&#x4E0B;&#x4F8B;&#x4E2D;, &#x5269;&#x4F59;&#x53C2;&#x6570;&#x5305;&#x542B;&#x4E86;&#x4ECE;&#x7B2C;&#x4E8C;&#x4E2A;&#x5230;&#x6700;&#x540E;&#x7684;&#x6240;&#x6709;&#x5B9E;&#x53C2;. &#x7136;&#x540E;&#x7528;&#x7B2C;&#x4E00;&#x4E2A;&#x5B9E;&#x53C2;&#x4F9D;&#x6B21;&#x4E58;&#x4EE5;&#x5B83;&#x4EEC;:</p>

<pre class="brush: js">function multiply(multiplier, ...theArgs) {
  return theArgs.map(function (element) {
    return multiplier * element;
  });
}

var arr = multiply(2, 1, 2, 3); 
// [2, 4, 6]
console.log(arr); 
</pre>

<p>&#x4E0B;&#x4F8B;&#x6F14;&#x793A;&#x4E86;&#x4F60;&#x53EF;&#x4EE5;&#x5728;&#x5269;&#x4F59;&#x53C2;&#x6570;&#x4E0A;&#x4F7F;&#x7528;&#x4EFB;&#x610F;&#x7684;&#x6570;&#x7EC4;&#x65B9;&#x6CD5;,&#x800C;<code>arguments&#x5BF9;&#x8C61;&#x4E0D;&#x53EF;&#x4EE5;</code>:</p>

<pre class="brush: js">function sortRestArgs(...theArgs) {
&#xA0; var sortedArgs = theArgs.sort();
&#xA0; return sortedArgs;
}
&#xA0;
alert(sortRestArgs(5,3,7,1)); // &#x5F39;&#x51FA; 1,3,5,7
&#xA0;
function sortArguments() {
&#xA0; var sortedArgs = arguments.sort();
&#xA0; return sortedArgs; // &#x4E0D;&#x4F1A;&#x6267;&#x884C;&#x5230;&#x8FD9;&#x91CC;
}
&#xA0;
alert(sortArguments(5,3,7,1)); // &#x629B;&#x51FA;TypeError&#x5F02;&#x5E38;:arguments.sort is not a function</pre>

<p>&#x5982;&#x679C;&#x60F3;&#x5728;<code>arguments</code>&#x5BF9;&#x8C61;&#x4E0A;&#x4F7F;&#x7528;&#x6570;&#x7EC4;&#x65B9;&#x6CD5;,&#x4F60;&#x9996;&#x5148;&#x5F97;&#x5C06;&#x5B83;&#x8F6C;&#x6362;&#x4E3A;&#x771F;&#x5B9E;&#x7684;&#x6570;&#x7EC4;,&#x6BD4;&#x5982;&#x4F7F;&#x7528; <code>[].slice.call(arguments)</code></p>

<h2 name="Specifications" id="Specifications">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-function-definitions" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Function Definitions</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-function-definitions" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Function Definitions</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
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
   <th>Edge</th>
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari (WebKit)</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>47</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><a href="/en-US/Firefox/Releases/15" title="Released on 2012-08-28.">15</a> (15)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>34</td>
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
   <th>Android Webview</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
   <th>Chrome for Android</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>47</td>
   <td>15.0 (15.0)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>47</td>
  </tr>
 </tbody>
</table>
</div>

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li>the <a href="/zh-CN/JavaScript/Reference/Functions_and_function_scope/arguments" title="arguments">arguments</a> object</li>
 <li><a href="/zh-CN/JavaScript/Reference/Global_Objects/Array" title="Array">Array</a></li>
 <li><a href="/zh-CN/JavaScript/Reference/Functions_and_function_scope" title="Functions and function scope">Functions and function scope</a></li>
 <li><a href="http://wiki.ecmascript.org/doku.php?id=harmony:rest_parameters" class="external">original proposal at ecmascript.org</a></li>
 <li><a href="http://javascriptweblog.wordpress.com/2011/01/18/javascripts-arguments-object-and-beyond/" class="external">JavaScript arguments object and beyond</a></li>
</ul>
                  
                
              