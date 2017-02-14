
                
                  
                    <p></p><section class="Quick_links" id="Quick_Links"><!-- --></section><p></p>

<p><code><strong>toString()</strong></code> &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x8868;&#x793A;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><em>object</em>.toString()</code></pre>

<h2 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h2>

<p>&#x4E00;&#x4E2A;&#x8868;&#x793A;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;</p>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x6BCF;&#x4E2A;&#x5BF9;&#x8C61;&#x90FD;&#x6709;&#x4E00;&#x4E2A; toString() &#x65B9;&#x6CD5;&#xFF0C;&#x5F53;&#x5BF9;&#x8C61;&#x88AB;&#x8868;&#x793A;&#x4E3A;&#x6587;&#x672C;&#x503C;&#x65F6;&#x6216;&#x8005;&#x5F53;&#x4EE5;&#x671F;&#x671B;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x65B9;&#x5F0F;&#x5F15;&#x7528;&#x5BF9;&#x8C61;&#x65F6;&#xFF0C;&#x8BE5;&#x65B9;&#x6CD5;&#x88AB;&#x81EA;&#x52A8;&#x8C03;&#x7528;&#x3002;&#x9ED8;&#x8BA4;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;toString() &#x65B9;&#x6CD5;&#x88AB;&#x6BCF;&#x4E2A;&#x7EE7;&#x627F;&#x81EA;<code>Object</code>&#x7684;&#x5BF9;&#x8C61;&#x7EE7;&#x627F;&#x3002;&#x5982;&#x679C;&#x6B64;&#x65B9;&#x6CD5;&#x5728;&#x81EA;&#x5B9A;&#x4E49;&#x5BF9;&#x8C61;&#x4E2D;&#x672A;&#x88AB;&#x8986;&#x76D6;&#xFF0C;<code>toString()</code>&#xA0;&#x8FD4;&#x56DE;&#xA0;&quot;[object&#xA0;<em>type</em>]&quot;,&#x5176;&#x4E2D;type&#x662F;&#x5BF9;&#x8C61;&#x7C7B;&#x578B;&#x3002;&#x4EE5;&#x4E0B;&#x4EE3;&#x7801;&#x8BF4;&#x660E;&#x4E86;&#x8FD9;&#x4E00;&#x70B9;&#xFF1A;</p>

<pre class="brush:js">var o = new Object();
o.toString();           // &#x8FD4;&#x56DE;&#x4E86;[object Object]</pre>

<div class="note"><strong>Note:</strong>&#xA0;&#x4ECE;JavaScript 1.8.5&#x5F00;&#x59CB;&#xFF0C;&#x7528;<code>null&#x8C03;&#x7528;</code><code>toString()&#x65B9;&#x6CD5;&#x4F1A;&#x8FD4;&#x56DE;</code><code>[object <em>Null</em>]&#xFF0C;</code>&#x7C7B;&#x4F3C;&#x7684;&#x7528;<code>undefined&#x8C03;&#x7528;</code>&#x4F1A;&#x8FD4;&#x56DE;<code>[object <em>Undefined</em>], </code>&#x5982;&#x5728;ECMAScript&#x7684;&#x7B2C;5&#x7248;&#x4E2D;&#x5B9A;&#x4E49;&#x7684;&#x548C;&#x540E;&#x7EED;&#x7684;&#x52D8;&#x8BEF;&#x8868;&#x3002;&#x67E5;&#x770B;<a title="JavaScript/Reference/Global Objects/Object/toString#Using toString to detect object type" href="/zh-CN/docs/JavaScript/Reference/Global_Objects/Object/toString#Using_toString_to_detect_object_type">&#x4F7F;&#x7528;toString&#x65B9;&#x6CD5;&#x68C0;&#x6D4B;&#x5BF9;&#x8C61;&#x7C7B;&#x578B;</a>&#x4E00;&#x6587;&#x4E86;&#x89E3;&#x8BE6;&#x60C5;.</div>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<h3 name="Overriding_the_default_toString_method" id="Overriding_the_default_toString_method">&#x8986;&#x76D6;(&#x906E;&#x853D;)&#x9ED8;&#x8BA4;&#x7684;<code>toString</code>&#x65B9;&#x6CD5;</h3>

<p>&#x53EF;&#x4EE5;&#x81EA;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x65B9;&#x6CD5;&#x6765;&#x53D6;&#x4EE3;&#x9ED8;&#x8BA4;&#x7684;<span>&#xA0;</span><code>toString()</code><span>&#xA0;&#x65B9;&#x6CD5;&#x3002;&#x8BE5;</span><span>&#xA0;</span><code>toString()</code><span>&#xA0;&#x65B9;&#x6CD5;&#x4E0D;&#x80FD;&#x4F20;&#x5165;&#x53C2;&#x6570;&#x5E76;&#x4E14;&#x5FC5;&#x987B;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x81EA;&#x5B9A;&#x4E49;&#x7684;</span><span>&#xA0;</span><code>toString()</code><span>&#xA0;&#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x662F;&#x4EFB;&#x4F55;&#x6211;&#x4EEC;&#x9700;&#x8981;&#x7684;&#x503C;&#xFF0C;&#x4F46;&#x5982;&#x679C;&#x5B83;&#x9644;&#x5E26;&#x6709;&#x5173;&#x5BF9;&#x8C61;&#x7684;&#x4FE1;&#x606F;&#xFF0C;&#x5B83;&#x5C06;&#x53D8;&#x7684;&#x975E;&#x5E38;&#x6709;&#x7528;&#x3002;</span></p>

<p>&#x5728;&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x4E2D;&#xFF0C;&#x5B9A;&#x4E49;&#x4E86;&#x4E00;&#x4E2A;&#xA0;<code>Dog</code><span>&#xA0;</span><span>&#xA0;&#x5BF9;&#x8C61;&#x6570;&#x636E;&#x7C7B;&#x578B;&#xFF0C;&#x5E76;&#x4E14;&#x521B;&#x5EFA;&#x4E86;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x4E00;&#x4E2A;&#x5B9E;&#x4F8B;&#xFF1A;</span></p>

<pre class="brush: js">function Dog(name,breed,color,sex) {
   this.name=name;
   this.breed=breed;
   this.color=color;
   this.sex=sex;
}

var theDog = new Dog(&quot;Gabby&quot;,&quot;Lab&quot;,&quot;chocolate&quot;,&quot;female&quot;);</pre>

<p>&#x5982;&#x679C;&#x5F53;&#x524D;&#x7684;&#x5BF9;&#x8C61;&#x8C03;&#x7528;&#x4E86;<span>&#xA0;</span><code>toString()</code><span>&#xA0;&#x65B9;&#x6CD5;&#xFF0C;&#x5B83;&#x5C06;&#x4F1A;&#x8FD4;&#x56DE;&#x4ECE;</span><span>&#xA0;</span><code>Object &#x7EE7;&#x627F;&#x4E0B;&#x6765;&#x7684;</code><span>&#xA0;</span><code>toString()</code><span>&#xA0;&#x65B9;&#x6CD5;</span><span>&#x7684;&#x8FD4;&#x56DE;&#x9ED8;&#x8BA4;&#x503C;&#xFF1A;</span></p>

<pre>theDog.toString(); // &#x8FD4;&#x56DE; [object Object]</pre>

<p>&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x4E2D;&#x5B9A;&#x4E49;&#x4E86;&#x4E00;&#x4E2A;&#x53EB;&#x505A;<span>&#xA0;</span><code>dogToString()</code><span>&#xA0;&#x7684;&#x65B9;&#x6CD5;&#x6765;&#x8986;&#x76D6;&#x9ED8;&#x8BA4;&#x7684;</span><span>&#xA0;</span><code>toString()</code><span>&#xA0;&#x65B9;&#x6CD5;&#x3002;&#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x751F;&#x6210;&#x4E00;&#x4E2A; &quot;</span><span>property = value&quot;&#xA0;</span><span>&#x5F62;&#x5F0F;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x5305;&#x542B;&#x4E86;&#x5F53;&#x524D;&#x5BF9;&#x8C61;&#x7684;&#xA0;</span><span>name&#xFF0C; breed&#xFF0C;color &#x548C; sex&#x7684;&#x503C;&#x3002;</span></p>

<pre class="brush: js">Dog.prototype.toString = function dogToString() {
  var ret = &quot;Dog &quot; + this.name + &quot; is a &quot; + this.sex + &quot; &quot; + this.color + &quot; &quot; + this.breed;
  return ret;
}</pre>

<p>&#x6709;&#x4E86;&#x4E0A;&#x9762;&#x7684;&#x8FD9;&#x6BB5;&#x4EE3;&#x7801;&#x4E4B;&#x540E;&#xFF0C;&#x5728;&#x4E0A;&#x4E0B;&#x6587;&#x4E2D;&#x4EFB;&#x4F55;&#x65F6;&#x5019;&#x4F7F;&#x7528;<span>&#xA0;</span><code>theDog</code><span>&#xA0;&#xFF0C;</span><span>JavaScript &#x90FD;&#x4F1A;&#x81EA;&#x52A8;&#x8C03;&#x7528;</span><span>&#xA0;</span><code>dogToString()</code><span>&#xA0;&#x65B9;&#x6CD5;&#xFF0C;&#x5E76;&#x4E14;&#x8FD4;&#x56DE;&#x4E0B;&#x9762;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x5185;&#x5BB9;&#xFF1A;</span></p>

<pre>Dog Gabby is a female chocolate Lab</pre>

<h3 name="Using_toString_to_detect_object_type" id="Using_toString_to_detect_object_type">&#x4F7F;&#x7528;toString()&#x65B9;&#x6CD5;&#x6765;&#x68C0;&#x6D4B;&#x5BF9;&#x8C61;&#x7C7B;&#x578B;</h3>

<p>&#x53EF;&#x4EE5;&#x901A;&#x8FC7;<code>toString()</code><span>&#xA0;&#x6765;&#x83B7;&#x53D6;&#x6BCF;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x7C7B;&#x578B;&#x3002;&#x4E3A;&#x4E86;&#x6BCF;&#x4E2A;&#x5BF9;&#x8C61;&#x90FD;&#x80FD;&#x901A;&#x8FC7;</span><span>&#xA0;</span><code>Object.prototype.toString()</code><span>&#xA0;&#x6765;&#x68C0;&#x6D4B;&#xFF0C;&#x9700;&#x8981;&#x4EE5;</span><span>&#xA0;</span><code>Function.prototype.call()</code><span>&#xA0;&#x6216;&#x8005;&#xA0;</span><code>Function.prototype.apply()</code><span>&#xA0;&#x7684;&#x5F62;&#x5F0F;&#x6765;&#x8C03;&#x7528;&#xFF0C;&#x628A;&#x9700;&#x8981;&#x68C0;&#x6D4B;&#x7684;&#x5BF9;&#x8C61;&#x4F5C;&#x4E3A;&#x7B2C;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#x4F20;&#x5165;&#x3002;</span></p>

<pre class="brush: js">var toString = Object.prototype.toString;

toString.call(new Date); // [object Date]
toString.call(new String); // [object String]
toString.call(Math); // [object Math]

//Since JavaScript 1.8.5
toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]
</pre>

<h2 style="margin-bottom: 20px; line-height: 30px;" id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x7248;&#x672C;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x89E3;</th>
  </tr>
  <tr>
   <td>ECMAScript &#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x7248;&#x672C;&#x3002;&#x5728; JavaScript 1.0 &#x4E2D;&#x5B9E;&#x73B0;&#x3002;</td>
   <td>Standard</td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;&#x3002;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.2.4.2" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Object.prototype.toString</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>
    <p>&#x5728;&#xA0;<code>null</code>&#xA0;&#x4E0A;&#x8C03;&#x7528;&#x8FD4;&#x56DE;&#xA0;<code>[object&#xA0;<em>Null</em>]&#xFF0C;</code><br>
     &#x5728;&#xA0;<code style="font-style: normal; line-height: 1.5;">undefined</code>&#xA0;&#x4E0A;&#x8C03;&#x7528;&#x8FD4;&#x56DE;&#xA0;<code style="font-style: normal; line-height: 1.5;">[object&#xA0;<em>Undefined</em>]</code>&#x3002;</p>
   </td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Object.prototype.toString</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 style="margin-bottom: 20px; line-height: 30px;" id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
   <th style="line-height: 16px;">Feature</th>
   <th style="line-height: 16px;">Chrome</th>
   <th style="line-height: 16px;">Firefox (Gecko)</th>
   <th style="line-height: 16px;">Internet Explorer</th>
   <th style="line-height: 16px;">Opera</th>
   <th style="line-height: 16px;">Safari</th>
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
   <th style="line-height: 16px;">Feature</th>
   <th style="line-height: 16px;">Android</th>
   <th style="line-height: 16px;">Chrome for Android</th>
   <th style="line-height: 16px;">Firefox Mobile (Gecko)</th>
   <th style="line-height: 16px;">IE Mobile</th>
   <th style="line-height: 16px;">Opera Mobile</th>
   <th style="line-height: 16px;">Safari Mobile</th>
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

<h2 style="margin-bottom: 20px; line-height: 30px;" name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x6E90;&#x4EE3;&#x7801;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource"><code>Object.prototype.toSource()</code></a></li>
 <li><a title="valueOf()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x59CB;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf"><code>Object.prototype.valueOf()</code></a></li>
</ul>
                  
                
              