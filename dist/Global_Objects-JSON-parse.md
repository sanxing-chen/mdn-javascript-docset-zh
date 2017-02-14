
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p><code><strong>JSON.parse()</strong></code> &#x65B9;&#x6CD5;&#x89E3;&#x6790;&#x4E00;&#x4E2A;JSON&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x6784;&#x9020;&#x7531;&#x5B57;&#x7B26;&#x4E32;&#x63CF;&#x8FF0;&#x7684;JavaScript&#x503C;&#x6216;&#x5BF9;&#x8C61;&#x3002;&#x53EF;&#x4EE5;&#x63D0;&#x4F9B;&#x53EF;&#x9009;&#x7684;reviver&#x51FD;&#x6570;&#x4EE5;&#x5728;&#x8FD4;&#x56DE;&#x4E4B;&#x524D;&#x5BF9;&#x6240;&#x5F97;&#x5230;&#x7684;&#x5BF9;&#x8C61;&#x6267;&#x884C;&#x53D8;&#x6362;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">JSON.parse(<em>text</em>[, <em>reviver</em>])</pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>text</code></dt>
 <dd>&#x8981;&#x88AB;&#x89E3;&#x6790;&#x6210;JavaSctipt&#x503C;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x67E5;&#x770B; <a title="JSON&#xA0;&#x5BF9;&#x8C61;&#x5305;&#x542B;&#x4E86;&#x4E24;&#x4E2A;&#x65B9;&#x6CD5;&#xFF0C;&#x4E00;&#x662F;&#x89E3;&#x6790;&#xA0;JavaScript Object Notation (JSON)&#xFF0C;&#x4E8C;&#x662F;&#x5C06;&#x503C;&#x8F6C;&#x6362;&#x4E3A; JSON&#x3002;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x672C;&#x8EAB;&#x4E0D;&#x80FD;&#x88AB;&#x8C03;&#x7528;&#x6216;&#x8005;&#x4F5C;&#x4E3A;&#x6784;&#x9020;&#x51FD;&#x6570;&#xFF0C;&#x9664;&#x4E86;&#x5B83;&#x7684;&#x8FD9;&#x4E24;&#x4E2A;&#x65B9;&#x6CD5;&#x5C5E;&#x6027;&#x5916; JSON &#x5BF9;&#x8C61;&#x672C;&#x8EAB;&#x5E76;&#x6CA1;&#x6709;&#x4EC0;&#x4E48;&#x6709;&#x7528;&#x7684;&#x529F;&#x80FD;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON"><code>JSON</code></a> &#x5BF9;&#x8C61;&#x5B66;&#x4E60;&#x7684;JSON &#x8BED;&#x6CD5;&#x7684;&#x8BF4;&#x660E;&#x3002;</dd>
 <dt><code>reviver</code> <span class="inlineIndicator optional optionalInline">&#x53EF;&#x9009;</span></dt>
 <dd>&#x5982;&#x679C;&#x662F;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#xFF0C;&#x5219;&#x89C4;&#x5B9A;&#x4E86;&#x539F;&#x59CB;&#x503C;&#x5982;&#x4F55;&#x88AB;&#x89E3;&#x6790;&#x6539;&#x9020;&#xFF0C;&#x5728;&#x88AB;&#x8FD4;&#x56DE;&#x4E4B;&#x524D;&#x3002;</dd>
</dl>

<h3 name="Returns" id="Returns">&#x8FD4;&#x56DE;&#x503C;</h3>

<p><a title="Object &#x6784;&#x9020;&#x51FD;&#x6570;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5305;&#x88C5;&#xFF08;object wrapper&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object"><code>Object</code></a>&#x5BF9;&#x5E94;&#x7ED9;&#x5B9A;&#x7684;JSON&#x6587;&#x672C;&#x3002;</p>

<h3 name="Throws" id="Throws">&#x5F02;&#x5E38;</h3>

<p>&#x82E5;&#x88AB;&#x89E3;&#x6790;&#x7684; JSON &#x5B57;&#x7B26;&#x4E32;&#x662F;&#x975E;&#x6CD5;&#x7684;&#xFF0C;&#x5219;&#x4F1A;&#x629B;&#x51FA; &#x4E00;&#x4E2A;<a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/&#x8BED;&#x6CD5;&#x9519;&#x8BEF;" class="new"><code>&#x8BED;&#x6CD5;&#x9519;&#x8BEF;</code></a> &#x5F02;&#x5E38;&#x3002;</p>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<h3 name="Example:_Using_JSON.parse" id="Example:_Using_JSON.parse">&#x4F7F;&#x7528; <code>JSON.parse()</code></h3>

<pre class="brush: js">JSON.parse(&apos;{}&apos;);              // {}
JSON.parse(&apos;true&apos;);            // true
JSON.parse(&apos;&quot;foo&quot;&apos;);           // &quot;foo&quot;
JSON.parse(&apos;[1, 5, &quot;false&quot;]&apos;); // [1, 5, &quot;false&quot;]
JSON.parse(&apos;null&apos;);            // null
</pre>

<h3 name="Example:_Using_the_reviver_parameter" id="Example:_Using_the_reviver_parameter">&#x4F7F;&#x7528; <code>reviver</code>&#xA0;&#x51FD;&#x6570;</h3>

<p>&#x5982;&#x679C;&#x6307;&#x5B9A;&#x4E86; <code>reviver</code>&#xA0;&#x51FD;&#x6570;&#xFF0C;&#x5219;&#x89E3;&#x6790;&#x51FA;&#x7684; JavaScript &#x503C;&#xFF08;&#x89E3;&#x6790;&#x503C;&#xFF09;&#x4F1A;&#x7ECF;&#x8FC7;&#x4E00;&#x6B21;&#x8F6C;&#x6362;&#x540E;&#x624D;&#x5C06;&#x88AB;&#x6700;&#x7EC8;&#x8FD4;&#x56DE;&#xFF08;&#x8FD4;&#x56DE;&#x503C;&#xFF09;&#x3002;&#x66F4;&#x5177;&#x4F53;&#x70B9;&#x8BB2;&#x5C31;&#x662F;&#xFF1A;&#x89E3;&#x6790;&#x503C;&#x672C;&#x8EAB;&#x4EE5;&#x53CA;&#x5B83;&#x6240;&#x5305;&#x542B;&#x7684;&#x6240;&#x6709;&#x5C5E;&#x6027;&#xFF0C;&#x4F1A;&#x6309;&#x7167;&#x4E00;&#x5B9A;&#x7684;&#x987A;&#x5E8F;&#xFF08;&#x4ECE;&#x6700;&#x6700;&#x91CC;&#x5C42;&#x7684;&#x5C5E;&#x6027;&#x5F00;&#x59CB;&#xFF0C;&#x4E00;&#x7EA7;&#x7EA7;&#x5F80;&#x5916;&#xFF0C;&#x6700;&#x7EC8;&#x5230;&#x8FBE;&#x9876;&#x5C42;&#xFF0C;&#x4E5F;&#x5C31;&#x662F;&#x89E3;&#x6790;&#x503C;&#x672C;&#x8EAB;&#xFF09;&#x5206;&#x522B;&#x7684;&#x53BB;&#x8C03;&#x7528; <code>reviver</code> &#x51FD;&#x6570;&#xFF0C;&#x5728;&#x8C03;&#x7528;&#x8FC7;&#x7A0B;&#x4E2D;&#xFF0C;&#x5F53;&#x524D;&#x5C5E;&#x6027;&#x6240;&#x5C5E;&#x7684;&#x5BF9;&#x8C61;&#x4F1A;&#x4F5C;&#x4E3A; <code>this</code> &#x503C;&#xFF0C;&#x5F53;&#x524D;&#x5C5E;&#x6027;&#x540D;&#x548C;&#x5C5E;&#x6027;&#x503C;&#x4F1A;&#x5206;&#x522B;&#x4F5C;&#x4E3A;&#x7B2C;&#x4E00;&#x4E2A;&#x548C;&#x7B2C;&#x4E8C;&#x4E2A;&#x53C2;&#x6570;&#x4F20;&#x5165; <code>reviver</code> &#x4E2D;&#x3002;&#x5982;&#x679C; <code>reviver</code> &#x8FD4;&#x56DE; <code>undefined</code>&#xFF0C;&#x5219;&#x5F53;&#x524D;&#x5C5E;&#x6027;&#x4F1A;&#x4ECE;&#x6240;&#x5C5E;&#x5BF9;&#x8C61;&#x4E2D;&#x5220;&#x9664;&#xFF0C;&#x5982;&#x679C;&#x8FD4;&#x56DE;&#x4E86;&#x5176;&#x4ED6;&#x503C;&#xFF0C;&#x5219;&#x8FD4;&#x56DE;&#x7684;&#x503C;&#x4F1A;&#x6210;&#x4E3A;&#x5F53;&#x524D;&#x5C5E;&#x6027;&#x65B0;&#x7684;&#x5C5E;&#x6027;&#x503C;&#x3002;</p>

<p>&#x5F53;&#x904D;&#x5386;&#x5230;&#x6700;&#x9876;&#x5C42;&#x7684;&#x503C;&#xFF08;&#x89E3;&#x6790;&#x503C;&#xFF09;&#x65F6;&#xFF0C;&#x4F20;&#x5165; <code>reviver</code> &#x51FD;&#x6570;&#x7684;&#x53C2;&#x6570;&#x4F1A;&#x662F;&#x7A7A;&#x5B57;&#x7B26;&#x4E32; <code>&quot;&quot;</code>&#xFF08;&#x56E0;&#x4E3A;&#x6B64;&#x65F6;&#x5DF2;&#x7ECF;&#x6CA1;&#x6709;&#x771F;&#x6B63;&#x7684;&#x5C5E;&#x6027;&#xFF09;&#x548C;&#x5F53;&#x524D;&#x7684;&#x89E3;&#x6790;&#x503C;&#xFF08;&#x6709;&#x53EF;&#x80FD;&#x5DF2;&#x7ECF;&#x88AB;&#x4FEE;&#x6539;&#x8FC7;&#x4E86;&#xFF09;&#xFF0C;&#x5F53;&#x524D;&#x7684; <code>this</code> &#x503C;&#x4F1A;&#x662F; <code>{&quot;&quot;: &#x4FEE;&#x6539;&#x8FC7;&#x7684;&#x89E3;&#x6790;&#x503C;}</code>&#xFF0C;&#x5728;&#x7F16;&#x5199; <code>reviver</code> &#x51FD;&#x6570;&#x65F6;&#xFF0C;&#x8981;&#x6CE8;&#x610F;&#x5230;&#x8FD9;&#x4E2A;&#x7279;&#x4F8B;&#x3002;&#xFF08;&#x8BD1;&#x8005;&#x6309;&#xFF1A;&#x8FD9;&#x4E2A;&#x51FD;&#x6570;&#x7684;&#x904D;&#x5386;&#x987A;&#x5E8F;&#x6309;&#x6DF1;&#x5EA6;&#x4F18;&#x5148;&#x904D;&#x5386;&#xFF09;</p>

<pre class="brush: js">JSON.parse(&apos;{&quot;p&quot;: 5}&apos;, function (k, v) {
    if(k === &apos;&apos;) return v;     // &#x5982;&#x679C;&#x5230;&#x4E86;&#x6700;&#x9876;&#x5C42;&#xFF0C;&#x5219;&#x76F4;&#x63A5;&#x8FD4;&#x56DE;&#x5C5E;&#x6027;&#x503C;&#xFF0C;
    return v * 2;              // &#x5426;&#x5219;&#x5C06;&#x5C5E;&#x6027;&#x503C;&#x53D8;&#x4E3A;&#x539F;&#x6765;&#x7684; 2 &#x500D;&#x3002;
});                            // { p: 10 }

JSON.parse(&apos;{&quot;1&quot;: 1, &quot;2&quot;: 2,&quot;3&quot;: {&quot;4&quot;: 4, &quot;5&quot;: {&quot;6&quot;: 6}}}&apos;, function (k, v) {
    console.log(k); // &#x8F93;&#x51FA;&#x5F53;&#x524D;&#x7684;&#x5C5E;&#x6027;&#x540D;&#xFF0C;&#x4ECE;&#x800C;&#x5F97;&#x77E5;&#x904D;&#x5386;&#x987A;&#x5E8F;&#x662F;&#x4ECE;&#x5185;&#x5411;&#x5916;&#x7684;&#xFF0C;
                    // &#x6700;&#x540E;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&#x540D;&#x4F1A;&#x662F;&#x4E2A;&#x7A7A;&#x5B57;&#x7B26;&#x4E32;&#x3002;
    return v;       // &#x8FD4;&#x56DE;&#x539F;&#x59CB;&#x5C5E;&#x6027;&#x503C;&#xFF0C;&#x76F8;&#x5F53;&#x4E8E;&#x6CA1;&#x6709;&#x4F20;&#x9012; reviver &#x53C2;&#x6570;&#x3002;
});

// 1
// 2
// 4
// 6
// 5
// 3 
// &quot;&quot;
</pre>

<h3 id="JSON.parse()_&#x4E0D;&#x5141;&#x8BB8;&#x7528;&#x9017;&#x53F7;&#x4F5C;&#x4E3A;&#x7ED3;&#x5C3E;"><code>JSON.parse()</code> &#x4E0D;&#x5141;&#x8BB8;&#x7528;&#x9017;&#x53F7;&#x4F5C;&#x4E3A;&#x7ED3;&#x5C3E;</h3>

<pre class="example-bad brush: js">// both will throw a SyntaxError
JSON.parse(&quot;[1, 2, 3, 4, ]&quot;);
JSON.parse(&apos;{&quot;foo&quot; : 1, }&apos;);
</pre>

<h2 name="Specifications" id="Specifications">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x540D;&#x79F0;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x5907;&#x6CE8;</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.12.2" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">JSON.parse</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x9996;&#x6B21;&#x5B9A;&#x4E49;&#xFF0C;&#x4E8E; JavaScript 1.7 &#x7248;&#x672C;&#x4E2D;&#x5B9E;&#x73B0;&#x3002;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-json.parse" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">JSON.parse</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 name="Browser_compatibility" id="Browser_compatibility">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
   <td><a title="Released on 2009-06-30." href="/en-US/Firefox/Releases/3.5">3.5</a> (1.9.1)</td>
   <td>8.0</td>
   <td>10.5</td>
   <td>4.0</td>
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

<h3 name="Gecko-specific_notes" id="Gecko-specific_notes">Gecko &#x5907;&#x6CE8;</h3>

<p>&#x4ECE; Gecko 29 (Firefox 29 / Thunderbird 29 / SeaMonkey 2.26) &#x5F00;&#x59CB;&#xFF0C;&#x5982;&#x679C;&#x88AB;&#x89E3;&#x6790;&#x7684; JSON &#x5B57;&#x7B26;&#x4E32;&#x542B;&#x6709;&#x8BED;&#x6CD5;&#x9519;&#x8BEF;&#xFF0C;&#x5219;&#x8BE5;&#x65B9;&#x6CD5;&#x629B;&#x51FA;&#x7684;&#x9519;&#x8BEF;&#x4FE1;&#x606F;&#x4E2D;&#x5C06;&#x5305;&#x542B;&#x9519;&#x8BEF;&#x53D1;&#x751F;&#x65F6;&#x5177;&#x4F53;&#x7684;&#x884C;&#x5217;&#x53F7;&#xFF0C;&#x8FD9;&#x4E2A;&#x7279;&#x6027;&#x5BF9;&#x4E8E;&#x8C03;&#x8BD5;&#x5927;&#x578B; JSON &#x6570;&#x636E;&#x6765;&#x8BF4;&#x662F;&#x5F88;&#x6709;&#x7528;&#x7684;&#x3002;</p>

<pre class="brush: js">JSON.parse(&apos;[1, 2, 3,]&apos;)
// SyntaxError: JSON.parse: unexpected character at 
// line 1 column 10 of the JSON data
</pre>

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="JSON.stringify() &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x5C06;&#x4EFB;&#x610F;&#x7684; JavaScript &#x503C;&#x5E8F;&#x5217;&#x5316;&#x6210; &#x7B26;&#x5408;JSON&#x8BED;&#x6CD5;&#x7684;&#xA0;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x82E5;&#x8F6C;&#x6362;&#x7684;&#x51FD;&#x6570;&#x88AB;&#x6307;&#x5B9A;&#xFF0C;&#x5219;&#x88AB;&#x5E8F;&#x5217;&#x5316;&#x7684;&#x503C;&#x7684;&#x6BCF;&#x4E2A;&#x5C5E;&#x6027;&#x90FD;&#x4F1A;&#x7ECF;&#x8FC7;&#x8BE5;&#x51FD;&#x6570;&#x7684;&#x8F6C;&#x6362;&#x548C;&#x5904;&#x7406;&#xFF1B;&#x82E5;&#x8F6C;&#x6362;&#x7684;&#x6570;&#x7EC4;&#x88AB;&#x6307;&#x5B9A;&#xFF0C;&#x53EA;&#x6709;&#x5305;&#x542B;&#x5728;&#x8FD9;&#x4E2A;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x624D;&#x4F1A;&#x88AB;&#x5E8F;&#x5217;&#x5316;&#x5230;&#x6700;&#x7EC8;&#x7684; JSON &#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"><code>JSON.stringify()</code></a></li>
</ul>
                  
                
              