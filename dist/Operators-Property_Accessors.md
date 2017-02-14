
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p>&#x5C5E;&#x6027;&#x8BBF;&#x95EE;&#x5668;&#x63D0;&#x4F9B;&#x4E86;&#x4E24;&#x79CD;&#x65B9;&#x5F0F;&#x7528;&#x4E8E;&#x8BBF;&#x95EE;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x5B83;&#x4EEC;&#x5206;&#x522B;&#x662F;&#x70B9;&#x7B26;&#x53F7;&#x548C;&#x62EC;&#x53F7;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">object.property
object[&quot;property&quot;]
</pre>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x5C06;&#x5BF9;&#x8C61;&#x770B;&#x505A;&#x662F;&#x4E00;&#x4E2A;&#x5173;&#x8054;&#x6570;&#x7EC4;&#xFF0C;&#x6216;&#x6620;&#x5C04;&#xFF0C;&#x5B57;&#x5178;&#xFF0C;&#x54C8;&#x5E0C;&#x8868;&#xFF0C;&#x67E5;&#x627E;&#x8868;&#x3002;&#x8FD9;&#x4E2A;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x952E;&#x5C31;&#x662F;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x4E2D;&#x5C5E;&#x6027;&#x7684;&#x540D;&#x79F0;&#x3002;&#x901A;&#x5E38;&#xFF0C;&#x5F53;&#x6211;&#x4EEC;&#x63D0;&#x53CA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#x65F6;&#xFF0C;&#x4F1A;&#x5BF9;&#x5C5E;&#x6027;&#x4E0E;&#x65B9;&#x6CD5;&#x4E4B;&#x95F4;&#x505A;&#x4E2A;&#x5BF9;&#x6BD4;&#x3002;&#x7136;&#x800C;&#xFF0C;&#x5C5E;&#x6027;&#x4E0E;&#x65B9;&#x6CD5;&#x4E4B;&#x95F4;&#x7684;&#x533A;&#x522B;&#x5E76;&#x4E0D;&#x5927;&#x3002;&#x4E00;&#x4E2A;&#x65B9;&#x6CD5;&#x5C31;&#x662F;&#x4E00;&#x4E2A;&#x53EF;&#x4EE5;&#x88AB;&#x8C03;&#x7528;&#x7684;&#x5C5E;&#x6027;&#x800C;&#x5DF2;&#xFF0C;&#x4F8B;&#x5982;&#x4E00;&#x4E2A;&#x6307;&#x5411;<a href="/en-US/docs/Web/JavaScript/Reference/Functions">Function</a>&#x5B9E;&#x4F8B;&#x7684;&#x5F15;&#x7528;&#x53EF;&#x4EE5;&#x4F5C;&#x4E3A;&#x5BF9;&#x8C61;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x3002;</p>

<p>&#x8BBF;&#x95EE;&#x5BF9;&#x8C61;&#x5C5E;&#x6027;&#x6709;&#x4E24;&#x79CD;&#x65B9;&#x5F0F;&#xFF1A;&#x70B9;&#x7B26;&#x53F7;&#x8868;&#x793A;&#x6CD5;&#x548C;&#x62EC;&#x53F7;&#x8868;&#x793A;&#x6CD5;.</p>

<h3 id="&#x70B9;&#x7B26;&#x53F7;&#x8868;&#x793A;&#x6CD5;">&#x70B9;&#x7B26;&#x53F7;&#x8868;&#x793A;&#x6CD5;</h3>

<pre class="brush: js">get = object.property;
object.property = set;
</pre>

<p>&#x4EE5;&#x4E0A;&#x4EE3;&#x7801;&#x4E2D;&#xFF0C;<code>&#x5C5E;&#x6027;&#x540D;&#x5FC5;&#x987B;&#x662F;&#x4E00;&#x4E2A;&#x6709;&#x6548;&#x7684;JavaScript&#x6807;&#x8BC6;&#x7B26;&#xFF0C;&#x4F8B;&#x5982;&#xFF0C;&#x4E00;&#x4E32;&#x5B57;&#x6BCD;&#x6570;&#x5B57;&#x5B57;&#x7B26;&#xFF0C;&#x4E5F;&#x5305;&#x62EC;&#x4E0B;&#x5212;&#x7EBF;&#x53CA;&#x7F8E;&#x5143;&#x7B26;&#x53F7;&#xFF0C;&#x4F46;&#x4E0D;&#x80FD;&#x4EE5;&#x6570;&#x5B57;&#x4F5C;&#x4E3A;&#x5F00;&#x5934;&#x3002;&#x6BD4;&#x5982;<font face="Open Sans, Arial, sans-serif">&#xFF0C;</font></code><code>object.$1&#x662F;&#x5408;&#x6CD5;&#x7684;&#xFF0C;&#x800C;</code>&#xA0;<code>object.1&#x662F;&#x65E0;&#x6548;&#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x3002;</code></p>

<pre class="brush: js">document.createElement(&apos;pre&apos;);
</pre>

<p>&#x5728;&#x4E0A;&#x8FF0;&#x4EE3;&#x7801;&#x5757;&#x4E2D;&#xFF0C;&#x5BF9;&#x8C61;document&#x4E2D;&#x5B58;&#x5728;&#x4E00;&#x4E2A;&#x540D;&#x4E3A;&quot;createElement&quot;&#x7684;&#x65B9;&#x6CD5;&#x5E76;&#x4E14;&#x88AB;&#x8C03;&#x7528;&#x4E86;&#x3002;</p>

<h3 id="&#x62EC;&#x53F7;&#x8868;&#x793A;&#x6CD5;">&#x62EC;&#x53F7;&#x8868;&#x793A;&#x6CD5;</h3>

<pre class="brush: js">get = object[property_name];
object[property_name] = set;
</pre>

<p><code>property_name</code> &#x662F;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x4E0D;&#x4E00;&#x5B9A;&#x662F;&#x4E00;&#x4E2A;&#x5408;&#x6CD5;&#x7684;&#x6807;&#x8BC6;&#x7B26;&#xFF1B;&#x5B83;&#x53EF;&#x4EE5;&#x662F;&#x4EFB;&#x610F;&#x503C;&#xFF0C;&#x4F8B;&#x5982;&#xFF0C;&quot;1foo&quot;&#xFF0C;&quot;!bar!&quot;&#xFF0C;&#xA0;&#x751A;&#x81F3;&#x662F;&#x4E00;&#x4E2A;&#x7A7A;&#x683C;&#x3002;</p>

<pre class="brush: js">document[&apos;createElement&apos;](&apos;pre&apos;);
</pre>

<p>&#x8FD9;&#x91CC;&#x7684;&#x4EE3;&#x7801;&#x7684;&#x529F;&#x80FD;&#x8DDF;&#x4E0A;&#x4E00;&#x4E2A;&#x5217;&#x5B50;&#x7684;&#x4F5C;&#x7528;&#x662F;&#x76F8;&#x540C;&#x7684;&#x3002;</p>

<h3 id="&#x5C5E;&#x6027;&#x540D;">&#x5C5E;&#x6027;&#x540D;</h3>

<p>&#x5C5E;&#x6027;&#x540D;&#x5FC5;&#x987B;&#x662F;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x8FD9;&#x610F;&#x5473;&#x7740;&#x975E;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#x4E0D;&#x80FD;&#x7528;&#x6765;&#x4F5C;&#x4E3A;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5C5E;&#x6027;&#x7684;&#x952E;&#x3002;&#x4EFB;&#x4F55;&#x975E;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#xFF0C;&#x5305;&#x62EC;number&#xFF0C;&#x53EF;&#x901A;&#x8FC7;<a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString">toString</a>&#x65B9;&#x6CD5;&#xFF0C;&#x7C7B;&#x578B;&#x8F6C;&#x6362;&#x6210;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x3002;</p>

<pre class="brush: js">var object = {};
object[&apos;1&apos;] = &apos;value&apos;;
console.log(object[1]);
</pre>

<p>&#x4E0A;&#x8FF0;&#x4EE3;&#x7801;&#x7684;&#x8F93;&#x51FA;&#x4E3A;&quot;value&quot;&#xFF0C;&#x56E0;&#x4E3A;1&#x88AB;&#x7C7B;&#x578B;&#x8F6C;&#x6362;&#x4E3A;&apos;1&apos;&#x3002;</p>

<pre class="brush: js">var foo = {unique_prop: 1}, bar = {unique_prop: 2}, object = {};
object[foo] = &apos;value&apos;;
console.log(object[bar]);
</pre>

<p>&#x4E0A;&#x8FF0;&#x7684;&#x4EE3;&#x7801;&#x7684;&#x8F93;&#x51FA;&#x4E5F;&#x662F;&quot;value&quot;&#xFF0C;&#x7531;&#x4E8E;&#x5BF9;&#x8C61;foo&#x548C;bar &#x90FD;&#x4F1A;&#x88AB;&#x8F6C;&#x6210;&#x76F8;&#x540C;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x5728;<a href="/en-US/docs/Mozilla/Projects/SpiderMonkey">SpiderMonkey</a> JavaScript &#x5F15;&#x64CE;&#x4E2D;&#xFF0C;&#x8FD9;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x5C06;&#x4F1A;&#x662F;&quot;[&apos;object Object&apos;]&quot;&#x3002;</p>

<h3 id="&#x65B9;&#x6CD5;&#x7ED1;&#x5B9A;">&#x65B9;&#x6CD5;&#x7ED1;&#x5B9A;</h3>

<p>&#x4E00;&#x4E2A;&#x65B9;&#x6CD5;&#x6CA1;&#x6709;&#x7ED1;&#x5B9A;&#x5230;&#x5BF9;&#x8C61;&#x4E0A;&#xFF0C;&#x90A3;&#x5C31;&#x610F;&#x5473;&#x7740;&#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x662F;&#x4E0D;&#x8D77;&#x4F5C;&#x7528;&#x7684;&#x3002;&#x7279;&#x522B;&#x8981;&#x6CE8;&#x610F;&#x7684;&#x662F;&#xFF0C;&#x5728;&#x4E00;&#x4E2A;&#x65B9;&#x6CD5;&#x4E2D;<code>this&#x5BF9;&#x8C61;&#x5E76;&#x4E0D;&#x662F;&#x56FA;&#x5B9A;&#x7684;&#xFF0C;&#x4F8B;&#x5982;&#xFF0C;</code><code>this&#x4E0D;&#x9700;&#x8981;&#x6307;&#x5411;&#x5305;&#x542B;&#x5F53;&#x524D;&#x65B9;&#x6CD5;&#x7684;&#x5BF9;&#x8C61;&#x3002;</code>&#xA0;this&#x53EF;&#x901A;&#x8FC7;&#x51FD;&#x6570;&#x8C03;&#x7528;&#x88AB;&#x4F20;&#x9012;&#x8FC7;&#x53BB;&#x7684;&#x503C;&#x6240;&#x66FF;&#x6362;&#x3002;&#x8BE6;&#x89C1;<a href="/en-US/docs/Web/JavaScript/Reference/Operators/this#Method_binding">method binding</a>&#x3002;</p>

<h3 id="&#x6CE8;&#x610F;&#x4E8B;&#x9879;">&#x6CE8;&#x610F;&#x4E8B;&#x9879;</h3>

<p>JavaScript&#x65B0;&#x624B;&#x5728;&#x4F7F;&#x7528;<a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval">eval</a>&#x65F6;&#x4F1A;&#x72AF;&#x9519;&#xFF0C;&#x5728;&#x90A3;&#x4E9B;&#x53EF;&#x901A;&#x8FC7;&#x62EC;&#x53F7;&#x8868;&#x793A;&#x6CD5;&#x66FF;&#x6362;&#x7684;&#x573A;&#x666F;&#x4E0B;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x4E0B;&#x9762;&#x7684;&#x8BED;&#x6CD5;&#x7ECF;&#x5E38;&#x5728;&#x5F88;&#x591A;&#x4EE3;&#x7801;&#x4E2D;&#x627E;&#x5230;&#x3002;</p>

<pre class="brush: js">x = eval(&apos;document.forms.form_name.elements.&apos; + strFormControl + &apos;.value&apos;);
</pre>

<p><code>eval&#x7684;&#x6027;&#x80FD;&#x8F83;&#x5DEE;&#xFF0C;&#x5728;&#x4EFB;&#x4F55;&#x65F6;&#x5019;&#x90FD;&#x5E94;&#x8BE5;&#x907F;&#x514D;&#x4F7F;&#x7528;&#x3002;&#x800C;&#x4E14;&#xFF0C;&#x6B64;&#x65F6;</code><code>strFormControl</code>&#x5FC5;&#x987B;&#x662F;&#x4E00;&#x4E2A;&#x5408;&#x6CD5;&#x7684;&#x6807;&#x8BC6;&#x7B26;&#xFF0C; &#x8FD9;&#x5728;&#x4E00;&#x4E9B;names&#x3001;IDs&#x8868;&#x5355;&#x63A7;&#x4EF6;&#x4E2D;&#x5E76;&#x4E0D;&#x662F;&#x5FC5;&#x8981;&#x7684;&#x3002;&#x6240;&#x4EE5;&#xFF0C;&#x6700;&#x597D;&#x662F;&#x4F7F;&#x7528;&#x62EC;&#x53F7;&#x6765;&#x4EE3;&#x66FF;&#xFF1A;</p>

<pre class="brush: js">x = document.forms[&quot;form_name&quot;].elements[strFormControl].value;
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x8BF4;&#x660E;</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition.</td>
   <td>Standard</td>
   <td>Initial definition. Implemented in JavaScript 1.0</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-11.2.1" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Property Accessors</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-property-accessors" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Property Accessors</small></a></td>
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
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object &#x6784;&#x9020;&#x51FD;&#x6570;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5305;&#x88C5;&#xFF08;object wrapper&#xFF09;&#x3002;"><code>Object</code></a></li>
</ul>
                  
                
              