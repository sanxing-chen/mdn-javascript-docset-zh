
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>isNaN()</strong></code> &#x51FD;&#x6570;&#x7528;&#x6765;&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x503C;&#x662F;&#x5426;&#x4E3A; <a title="&#x5168;&#x5C40;&#x5C5E;&#x6027; NaN &#x8868;&#x793A; Not-A-Number &#x7684;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN"><code>NaN</code></a>&#x3002;&#x6CE8;&#xFF1A;<code>isNaN</code>&#x51FD;&#x6570;&#x5305;&#x542B;&#x4E00;&#x4E9B;&#x975E;&#x5E38;&#x6709;&#x610F;&#x601D;&#x7684;&#x5F3A;&#x5236;&#x8F6C;&#x6362;<a href="#Description">&#x89C4;&#x5219;</a>&#xFF1B;&#x4F60;&#x4E5F;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#xA0;ECMAScript 6 &#x4E2D;&#x5B9A;&#x4E49;&#x7684;&#xA0;<a title="Number.isNaN() &#x65B9;&#x6CD5;&#x7528;&#x6765;&#x68C0;&#x6D4B;&#x4F20;&#x5165;&#x7684;&#x503C;&#x662F;&#x5426;&#x662F; NaN&#x3002;&#x8BE5;&#x65B9;&#x6CD5;&#x6BD4;&#x4F20;&#x7EDF;&#x7684;&#x5168;&#x5C40;&#x51FD;&#x6570; isNaN() &#x66F4;&#x53EF;&#x9760;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN"><code>Number.isNaN()</code></a> &#x6216;&#x8005;&#xA0;<code><a href="/en-US/docs/Web/JavaScript/Reference/Operators/typeof">typeof</a></code> &#x6765;&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x503C;&#x662F;&#x5426;&#x4E3A;&#x975E;&#x6570;&#x503C;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>isNaN(<em>testValue</em>)</code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>testValue</code></dt>
 <dd>&#x8981;&#x88AB;&#x68C0;&#x6D4B;&#x7684;&#x503C;&#x3002;</dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<h3 name="The_necessity_of_an_isNaN_function" id="The_necessity_of_an_isNaN_function"><code>isNaN</code> &#x51FD;&#x6570;&#x7684;&#x5FC5;&#x8981;&#x6027;</h3>

<p>&#x4E0E; JavaScript &#x4E2D;&#x5176;&#x4ED6;&#x7684;&#x503C;&#x4E0D;&#x540C;&#xFF0C;<a title="&#x5168;&#x5C40;&#x5C5E;&#x6027; NaN &#x8868;&#x793A; Not-A-Number &#x7684;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN"><code>NaN</code></a>&#x4E0D;&#x80FD;&#x901A;&#x8FC7;&#x76F8;&#x7B49;&#x64CD;&#x4F5C;&#x7B26;&#xFF08;== &#x548C; ===&#xFF09;&#x6765;&#x5224;&#x65AD; &#xFF0C;&#x56E0;&#x4E3A;&#xA0;<code>NaN == NaN</code> &#x548C; <code>NaN === NaN</code> &#x90FD;&#x4F1A;&#x8FD4;&#x56DE;&#xA0;<code>false</code>&#x3002; &#x56E0;&#x6B64;&#xFF0C;<code>isNaN</code> &#x5C31;&#x5F88;&#x6709;&#x5FC5;&#x8981;&#x4E86;&#x3002;</p>

<h3 name="Origin_of_NaN_values" id="Origin_of_NaN_values"><code>NaN&#x503C;</code>&#x7684;&#x4EA7;&#x751F;</h3>

<p><font face="Courier New, Andale Mono, monospace">&#x5F53;&#x7B97;&#x672F;&#x8FD0;&#x7B97;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x672A;&#x5B9A;&#x4E49;&#x7684;&#x6216;&#x65E0;&#x6CD5;&#x8868;&#x793A;&#x7684;&#x503C;&#x65F6;&#xFF0C;NaN&#x5C31;&#x4EA7;&#x751F;&#x4E86;&#x3002;&#x4F46;&#x662F;&#xFF0C;<code>NaN</code>&#x5E76;&#x4E0D;&#x4E00;&#x5B9A;&#x7528;&#x4E8E;&#x8868;&#x793A;&#x67D0;&#x4E9B;&#x503C;&#x8D85;&#x51FA;&#x8868;&#x793A;&#x8303;&#x56F4;&#x7684;&#x60C5;&#x51B5;&#x3002;</font><font face="Consolas, Monaco, &apos;Andale Mono&apos;, monospace">&#x5C06;&#x67D0;&#x4E9B;&#x4E0D;&#x80FD;&#x5F3A;&#x5236;&#x8F6C;&#x6362;&#x4E3A;&#x6570;&#x503C;&#x7684;&#x975E;&#x6570;&#x503C;&#x8F6C;&#x6362;&#x4E3A;&#x6570;&#x503C;&#x7684;&#x65F6;&#x5019;&#xFF0C;&#x4E5F;&#x4F1A;&#x5F97;&#x5230;<code>NaN</code></font>&#x3002;</p>

<p>&#x4F8B;&#x5982;&#xFF0C;0 &#x9664;&#x4EE5;0&#x4F1A;&#x8FD4;&#x56DE;<code>NaN </code>&#x2014;&#x2014; &#x4F46;&#x662F;&#x5176;&#x4ED6;&#x6570;&#x9664;&#x4EE5;0&#x5219;&#x4E0D;&#x4F1A;&#x8FD4;&#x56DE;<code>NaN</code>&#x3002;</p>

<h3 id="&#x4EE4;&#x4EBA;&#x8D39;&#x89E3;&#x7684;&#x602A;&#x5F02;&#x884C;&#x4E3A;">&#x4EE4;&#x4EBA;&#x8D39;&#x89E3;&#x7684;&#x602A;&#x5F02;&#x884C;&#x4E3A;</h3>

<p>&#x4ECE;&#x6700;&#x65E9;&#x7248;&#x672C;&#x7684;<code>isNaN&#x51FD;&#x6570;&#x89C4;&#x8303;&#x5F00;&#x59CB;&#xFF0C;</code>&#xA0;&#x5176;&#x9488;&#x5BF9;&#x975E;&#x6570;&#x503C;&#x53C2;&#x6570;&#x6240;&#x8868;&#x73B0;&#x7684;&#x884C;&#x4E3A;&#x5C31;&#x4E00;&#x76F4;&#x4EE4;&#x4EBA;&#x8D39;&#x89E3;&#x3002;&#xA0;&#x5982;&#x679C;<code>isNaN&#x51FD;&#x6570;</code>&#x7684;&#x53C2;&#x6570;&#x4E0D;&#x662F;<a title="http://es5.github.com/#x8.5" href="http://es5.github.com/#x8.5" class="external">Number</a>&#x7C7B;&#x578B;, <code>isNaN()</code>&#x4F1A;&#x9996;&#x5148;&#x5C1D;&#x8BD5;&#x5C06;&#x8FD9;&#x4E2A;&#x53C2;&#x6570;&#x8F6C;&#x6362;&#x4E3A;&#x6570;&#x503C;&#xFF0C;&#x7136;&#x540E;&#x624D;&#x4F1A;&#x5BF9;&#x8F6C;&#x6362;&#x540E;&#x7684;&#x7ED3;&#x679C;&#x662F;&#x5426;&#x662F;<a title="&#x5168;&#x5C40;&#x5C5E;&#x6027; NaN &#x8868;&#x793A; Not-A-Number &#x7684;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN"><code>NaN</code></a>&#x8FDB;&#x884C;&#x5224;&#x65AD;&#x3002;&#x56E0;&#x6B64;&#xFF0C;&#x5BF9;&#x4E8E;&#x80FD;&#x88AB;&#x5F3A;&#x5236;&#x8F6C;&#x6362;&#x4E3A;&#x6709;&#x6548;&#x7684;&#x975E;<code>NaN</code>&#x6570;&#x503C;&#x6765;&#x8BF4;&#xFF08;&#xA0;&#x503C;&#x5F97;&#x4E00;&#x63D0;&#x7684;&#x662F;&#xFF0C;&#x7A7A;&#x5B57;&#x7B26;&#x4E32;&#x548C;&#x5E03;&#x5C14;&#x503C;&#x4F1A;&#x88AB;&#x5F3A;&#x5236;&#x8F6C;&#x6362;&#x4E3A;&#x6570;&#x503C;0&#x6216;1&#xFF09;&#xFF0C;&#x8FD4;&#x56DE;false&#x503C;&#x4E5F;&#x8BB8;&#x4F1A;&#x8BA9;&#x4EBA;&#x611F;&#x89C9;&#x83AB;&#x540D;&#x5176;&#x5999;&#x3002;&#x6BD4;&#x5982;&#x8BF4;&#xFF0C;&#x7A7A;&#x5B57;&#x7B26;&#x4E32;&#x5C31;&#x660E;&#x663E;&#x201D;&#x4E0D;&#x662F;&#x6570;&#x503C;&#x201C;&#xFF08;not a number&#xFF09;&#x3002;&#x8FD9;&#x79CD;&#x602A;&#x5F02;&#x884C;&#x4E3A;&#x8D77;&#x6E90;&#x4E8E;&#xFF1A;&#x201C;&#x4E0D;&#x662F;&#x6570;&#x503C;&#x201D;&#xFF08;not a number&#xFF09;&#x5728;&#x57FA;&#x4E8E;IEEE-794&#x6570;&#x503C;&#x7684;&#x6D6E;&#x70B9;&#x8BA1;&#x7B97;&#x4F53;&#x5236;&#x4E2D;&#x4EE3;&#x8868;&#x4E86;&#x4E00;&#x79CD;&#x7279;&#x5B9A;&#x7684;&#x542B;&#x4E49;&#x3002;<span style="font-family: consolas,monaco,andale mono,monospace;">isNaN&#x51FD;&#x6570;&#x5176;&#x5B9E;&#x7B49;&#x540C;&#x4E8E;&#x56DE;&#x7B54;&#x4E86;&#x8FD9;&#x6837;&#x4E00;&#x4E2A;&#x95EE;&#x9898;&#xFF1A;&#x8FD9;&#x4E2A;&#x503C;&#x88AB;&#x5F3A;&#x5236;&#x8F6C;&#x6362;&#x6210;&#x6570;&#x503C;&#x65F6;&#x4F1A;&#x4E0D;&#x4F1A;&#x8FD4;&#x56DE;</span>IEEE-754&#x200B;&#x4E2D;&#x6240;&#x8C13;&#x7684;&#x201D;&#x4E0D;&#x662F;&#x6570;&#x503C;&#x201C;&#xFF08;not a number&#xFF09;&#x3002;</p>

<p>&#x4E0B;&#x4E00;&#x4E2A;&#x7248;&#x672C;&#x7684;ECMAScript (ES6)&#x5305;&#x542B;<a title="Number.isNaN() &#x65B9;&#x6CD5;&#x7528;&#x6765;&#x68C0;&#x6D4B;&#x4F20;&#x5165;&#x7684;&#x503C;&#x662F;&#x5426;&#x662F; NaN&#x3002;&#x8BE5;&#x65B9;&#x6CD5;&#x6BD4;&#x4F20;&#x7EDF;&#x7684;&#x5168;&#x5C40;&#x51FD;&#x6570; isNaN() &#x66F4;&#x53EF;&#x9760;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN"><code>Number.isNaN()</code></a>&#x51FD;&#x6570;&#x3002;&#x901A;&#x8FC7;<code>Number.isNaN(x)&#x6765;&#x68C0;&#x6D4B;&#x53D8;&#x91CF;x&#x662F;&#x5426;&#x662F;&#x4E00;&#x4E2A;&#x975E;&#x6570;&#x503C;<font face="&apos;Open Sans&apos;, sans-serif">&#x5C06;&#x4F1A;&#x662F;&#x4E00;&#x79CD;&#x53EF;&#x9760;&#x7684;&#x505A;&#x6CD5;</font>&#x3002;&#x7136;&#x800C;&#xFF0C;</code>&#x5728;&#x7F3A;&#x5C11;<code>Number.isNaN&#x51FD;&#x6570;&#x7684;&#x60C5;&#x51B5;&#x4E0B;</code>, &#x901A;&#x8FC7;&#x8868;&#x8FBE;&#x5F0F;<code>(x != x)</code>&#xA0;&#x6765;&#x68C0;&#x6D4B;&#x53D8;&#x91CF;<code>x&#x662F;&#x5426;&#x662F;</code><code>NaN&#x4F1A;&#x66F4;&#x52A0;&#x53EF;&#x9760;&#x3002;</code></p>

<p><code>&#x53EF;&#x4EE5;&#x628A;isNaN&#x770B;&#x505A;&#xFF1A;</code></p>

<pre class="brush: js">isNaN = function(value) {
    Number.isNaN(Number(value));
}</pre>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<pre class="brush: js">isNaN(NaN);       // true
isNaN(undefined); // true
isNaN({});        // true

isNaN(true);      // false
isNaN(null);      // false
isNaN(37);        // false

// strings
isNaN(&quot;37&quot;);      // false: &#x53EF;&#x4EE5;&#x88AB;&#x8F6C;&#x6362;&#x6210;&#x6570;&#x503C;37
isNaN(&quot;37.37&quot;);   // false: &#x53EF;&#x4EE5;&#x88AB;&#x8F6C;&#x6362;&#x6210;&#x6570;&#x503C;37.37
isNaN(&quot;&quot;);        // false: &#x7A7A;&#x5B57;&#x7B26;&#x4E32;&#x88AB;&#x8F6C;&#x6362;&#x6210;0
isNaN(&quot; &quot;);       // false: &#x5305;&#x542B;&#x7A7A;&#x683C;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x88AB;&#x8F6C;&#x6362;&#x6210;0

// dates
isNaN(new Date());                // false
isNaN(new Date().toString());     // true

isNaN(&quot;blabla&quot;)   // true: &quot;blabla&quot;&#x4E0D;&#x80FD;&#x8F6C;&#x6362;&#x6210;&#x6570;&#x503C;

</pre>

<h3 id="&#x6709;&#x7528;&#x7684;&#x7279;&#x6B8A;&#x884C;&#x4E3A;">&#x6709;&#x7528;&#x7684;&#x7279;&#x6B8A;&#x884C;&#x4E3A;</h3>

<p>&#x6709;&#x8BB8;&#x591A;&#x65B9;&#x5F0F;&#x6765;&#x770B;&#x5F85;isNaN()&#xFF1A;&#x5982;&#x679C;isNaN(x)&#x8FD4;&#x56DE;false&#xFF0C;&#x90A3;&#x4E48;x&#x5728;&#x4EFB;&#x4F55;&#x7B97;&#x6570;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#x90FD;&#x4E0D;&#x4F1A;&#x4F7F;&#x8868;&#x8FBE;&#x5F0F;&#x7B49;&#x4E8E;NaN&#xFF1B;&#x5982;&#x679C;&#x8FD4;&#x56DE;true&#xFF0C;x&#x4F1A;&#x4F7F;&#x6240;&#x6709;&#x7B97;&#x6570;&#x8868;&#x8FBE;&#x5F0F;&#x8FD4;&#x56DE;NaN&#x3002;&#x8FD9;&#x5C31;&#x610F;&#x5473;&#x7740;&#xFF0C;&#x5728;JavaScript&#x4E2D;&#xFF0C;isNaN(x)==true&#x7B49;&#x4EF7;&#x4E8E;x-0=NaN(&#x5728;JavaScript&#x4E2D; x-0 == NaN &#x603B;&#x662F;&#x8FD4;&#x56DE;false&#xFF0C;&#x6240;&#x4EE5;&#x4F60;&#x4E0D;&#x7528;&#x53BB;&#x6D4B;&#x8BD5;&#x5B83;)&#x3002;&#x5B9E;&#x9645;&#x4E0A;&#xFF0C;&#xA0;<code>isNaN(x)</code>,&#xA0;<code>isNaN(x - 0)</code>,<code>isNaN(Number(x))</code>,&#xA0;<code>Number.isNaN(x - 0)</code>,&#x548C;<code>Number.isNaN(Number(x))</code>&#xA0;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x90FD;&#x662F;&#x4E00;&#x6837;&#x7684; &#x5E76;&#x4E14;&#x5728;JavaScript&#x4E2D;isNaN(x)&#x662F;&#x8FD9;&#x4E9B;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#x6700;&#x77ED;&#x7684;&#x8868;&#x8FBE;&#x3002;</p>

<p>You can use this, for example, to test whether an argument to a function is arithmetically processable (usable &quot;like&quot; a number), or if it&apos;s not and you have to provide a default value or something else. This way you can have a function that makes use of the full versatility JavaScript provides by implicitly converting values depending on context.</p>

<h2 id="&#x4F8B;&#x5B50;">&#x4F8B;&#x5B50;</h2>

<pre class="brush: js">function increment(x) {
  if (isNaN(x)) x = 0;
  return x + 1;
};

// The same effect with Number.isNaN():
function increment(x) {
  if (Number.isNaN(Number(x))) x = 0;
  return x + 1;
};

// In the following cases for the function&apos;s argument x,
// isNaN(x) is always false, although x is indeed not a
// number, but can be used as such in arithmetical
// expressions
increment(&quot;&quot;);            // 1: &quot;&quot; is converted to 0
increment(new String());  // 1: String object representing an empty string is converted to 0
increment([]);            // 1: [] is converted to 0
increment(new Array());   // 1: Array object representing an empty array is converted to 0
increment(&quot;0&quot;);           // 1: &quot;0&quot; is converted to 0
increment(&quot;1&quot;);           // 2: &quot;1&quot; is converted to 1
increment(&quot;0.1&quot;);         // 1.1: &quot;0.1&quot; is converted to 0.1
increment(&quot;Infinity&quot;);    // Infinity: &quot;Infinity&quot; is converted to Infinity
increment(null);          // 1: null is converted to 0
increment(false);         // 1: false is converted to 0
increment(true);          // 2: true is converted to 1
increment(new Date());    // returns current date/time in milliseconds plus 1

// In the following cases for the function&apos;s argument x,
// isNaN(x) is always false and x is indeed a number
increment(-1);            // 0
increment(-0.1);          // 0.9
increment(0);             // 1
increment(1);             // 2
increment(2);             // 3
// ... and so on ...
increment(Infinity);      // Infinity

// In the following cases for the function&apos;s argument x,
// isNaN(x) is always true and x is really not a number,
// thus the function replaces it by 0 and returns 1
increment(String);            // 1
increment(Array);             // 1
increment(&quot;blabla&quot;);          // 1
increment(&quot;-blabla&quot;);         // 1
increment(0/0);               // 1
increment(&quot;0/0&quot;);             // 1
increment(Infinity/Infinity); // 1
increment(NaN);               // 1
increment(undefined);         // 1
increment();                  // 1

// isNaN(x) is always the same as isNaN(Number(x)),
// but the presence of x is mandatory here!
isNaN(x) == isNaN(Number(x)) // true for every value of x, including x == undefined,
                             // because isNaN(undefined) == true and Number(undefined) returns NaN,
                             // but ...
isNaN() == isNaN(Number())   // false, because i</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" class="external" href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf" title="ECMAScript 1st Edition (ECMA-262)">ECMAScript 1st Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.2.4" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">isNaN</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-isnan-number" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">isNaN</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
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

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="&#x5168;&#x5C40;&#x5C5E;&#x6027; NaN &#x8868;&#x793A; Not-A-Number &#x7684;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN"><code>NaN</code></a></li>
 <li><a title="Number.isNaN() &#x65B9;&#x6CD5;&#x7528;&#x6765;&#x68C0;&#x6D4B;&#x4F20;&#x5165;&#x7684;&#x503C;&#x662F;&#x5426;&#x662F; NaN&#x3002;&#x8BE5;&#x65B9;&#x6CD5;&#x6BD4;&#x4F20;&#x7EDF;&#x7684;&#x5168;&#x5C40;&#x51FD;&#x6570; isNaN() &#x66F4;&#x53EF;&#x9760;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN"><code>Number.isNaN()</code></a></li>
</ul>
                  
                
              