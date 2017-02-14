
                
                  
                    <p></p><section class="Quick_links" id="Quick_Links"><!-- --></section><p></p>

<h2 id="&#x6982;&#x8FF0;">&#x6982;&#x8FF0;</h2>

<p><strong>Object.keys()</strong> &#x65B9;&#x6CD5;&#x4F1A;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7531;&#x7ED9;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x6240;&#x6709;&#x53EF;&#x679A;&#x4E3E;&#x81EA;&#x8EAB;&#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x7EC4;&#x6210;&#x7684;&#x6570;&#x7EC4;&#xFF0C;&#x6570;&#x7EC4;&#x4E2D;&#x5C5E;&#x6027;&#x540D;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;&#x548C;&#x4F7F;&#x7528;<a title="zh-cn/JavaScript/Reference/Statements/for...in" href="../../../../../../zh-cn/JavaScript/Reference/Statements/for...in"><code>for-in</code></a>&#x5FAA;&#x73AF;&#x904D;&#x5386;&#x8BE5;&#x5BF9;&#x8C61;&#x65F6;&#x8FD4;&#x56DE;&#x7684;&#x987A;&#x5E8F;&#x4E00;&#x81F4; (&#x987A;&#x5E8F;&#x4E00;&#x81F4;&#x4E0D;&#x5305;&#x62EC;&#x6570;&#x5B57;&#x5C5E;&#x6027;)&#xFF08;&#x4E24;&#x8005;&#x7684;&#x4E3B;&#x8981;&#x533A;&#x522B;&#x662F; for-in &#x8FD8;&#x4F1A;&#x904D;&#x5386;&#x51FA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4ECE;&#x5176;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x7EE7;&#x627F;&#x5230;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#xFF09;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre style="margin-bottom: 0px; padding: 1em; border-left-width: 6px; border-left-style: solid; font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; font-size: 14px; direction: ltr; white-space: normal; text-shadow: none; background-color: rgba(212, 221, 228, 0.498039);" class="syntaxbox  language-html"><code style="font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; direction: ltr; color: inherit; text-shadow: none;" class="language-html">Object.keys(obj)</code></pre>

<h2 name="Parameters" id="Parameters">&#xA0;</h2>

<h2 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h2>

<dl>
 <dt>obj</dt>
 <dd>&#x8FD4;&#x56DE;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x6240;&#x6709;&#x53EF;&#x679A;&#x4E3E;&#x81EA;&#x8EAB;&#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x3002;</dd>
</dl>

<h2 style="margin-bottom: 20px; line-height: 30px;" name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p><code>Object.keys</code>&#xA0;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6240;&#x6709;&#x5143;&#x7D20;&#x4E3A;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x6570;&#x7EC4;&#xFF0C;&#x5176;&#x5143;&#x7D20;&#x6765;&#x81EA;&#x4E8E;&#x4ECE;&#x7ED9;&#x5B9A;&#x7684;&#x5BF9;&#x8C61;&#x4E0A;&#x9762;&#x53EF;&#x76F4;&#x63A5;&#x679A;&#x4E3E;&#x7684;&#x5C5E;&#x6027;&#x3002;&#x8FD9;&#x4E9B;&#x5C5E;&#x6027;&#x7684;&#x987A;&#x5E8F;&#x4E0E;&#x624B;&#x52A8;&#x904D;&#x5386;&#x8BE5;&#x5BF9;&#x8C61;&#x5C5E;&#x6027;&#x65F6;&#x7684;&#x4E00;&#x81F4;&#x3002;</p>

<h2 id="&#x4F8B;&#x5B50;">&#x4F8B;&#x5B50;</h2>

<pre class="brush: js">var arr = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;];
alert(Object.keys(arr)); // &#x5F39;&#x51FA;&quot;0,1,2&quot;

// &#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;
var obj = { 0 : &quot;a&quot;, 1 : &quot;b&quot;, 2 : &quot;c&quot;};
alert(Object.keys(obj)); // &#x5F39;&#x51FA;&quot;0,1,2&quot;
</pre>

<pre><code>//&#x5177;&#x6709;&#x968F;&#x673A;&#x952E;&#x6392;&#x5E8F;&#x7684;&#x6570;&#x7EC4;&#x7C7B;&#x5BF9;&#x8C61;
var an_obj = { 100: &apos;a&apos;, 2: &apos;b&apos;, 7: &apos;c&apos; };
console.log(Object.keys(an_obj)); // console: [&apos;2&apos;, &apos;7&apos;, &apos;100&apos;]</code></pre>

<pre class="brush: js">// getFoo&#x662F;&#x4E2A;&#x4E0D;&#x53EF;&#x679A;&#x4E3E;&#x7684;&#x5C5E;&#x6027;
var my_obj = Object.create({}, { getFoo : { value : function () { return this.foo } } });
my_obj.foo = 1;

alert(Object.keys(my_obj)); // &#x53EA;&#x5F39;&#x51FA;foo
</pre>

<p>&#x5982;&#x679C;&#x4F60;&#x60F3;&#x83B7;&#x53D6;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x6240;&#x6709;&#x5C5E;&#x6027;,&#xFF0C;&#x751A;&#x81F3;&#x5305;&#x62EC;&#x4E0D;&#x53EF;&#x679A;&#x4E3E;&#x7684;&#xFF0C;&#x8BF7;&#x67E5;&#x770B;<a title="Object.getOwnPropertyNames()&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7531;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x6240;&#x6709;&#x81EA;&#x8EAB;&#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x540D;&#xFF08;&#x5305;&#x62EC;&#x4E0D;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#xFF09;&#x7EC4;&#x6210;&#x7684;&#x6570;&#x7EC4;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"><code>Object.getOwnPropertyNames</code></a>&#x3002;</p>

<h2 id="&#x6CE8;&#x610F;">&#x6CE8;&#x610F;</h2>

<p>&#x5728;ES5&#xFF0C;&#x5982;&#x679C;&#x6B64;&#x65B9;&#x6CD5;&#x7684;&#x53C2;&#x6570;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#xFF08;&#x539F;&#x59CB;&#x7684;&#xFF09;&#xFF0C;&#x90A3;&#x4E48;&#x5B83;&#x4F1A;&#x9020;&#x6210; TypeError&#x3002;&#x5728;ES6&#xFF0C;&#x975E;&#x5BF9;&#x8C61;&#x7684;&#x53C2;&#x6570;&#x5C06;&#x88AB;&#x5F3A;&#x5236;&#x8F6C;&#x6362;&#x4E3A;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x3002;</p>

<pre><code>Object.keys(&quot;foo&quot;);
// TypeError: &quot;foo&quot; is not an object (ES5 code)

Object.keys(&quot;foo&quot;);
// [&quot;0&quot;, &quot;1&quot;, &quot;2&quot;]                   (ES6 code)</code></pre>

<h2 id="&#x517C;&#x5BB9;&#x65E7;&#x73AF;&#x5883;">&#x517C;&#x5BB9;&#x65E7;&#x73AF;&#x5883;</h2>

<p>&#x8FD0;&#x884C;&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x53EF;&#x4EE5;&#x517C;&#x5BB9;&#x90A3;&#x4E9B;&#x6CA1;&#x6709;&#x539F;&#x751F;&#x652F;&#x6301;Object.key&#x65B9;&#x6CD5;&#x7684;JavaScript&#x73AF;&#x5883;&#x3002;</p>

<pre class="brush: js">if (!Object.keys) {
  Object.keys = (function () {
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({toString: null}).propertyIsEnumerable(&apos;toString&apos;),
        dontEnums = [
          &apos;toString&apos;,
          &apos;toLocaleString&apos;,
          &apos;valueOf&apos;,
          &apos;hasOwnProperty&apos;,
          &apos;isPrototypeOf&apos;,
          &apos;propertyIsEnumerable&apos;,
          &apos;constructor&apos;
        ],
        dontEnumsLength = dontEnums.length;

    return function (obj) {
      if (typeof obj !== &apos;object&apos; &amp;&amp; typeof obj !== &apos;function&apos; || obj === null) throw new TypeError(&apos;Object.keys called on non-object&apos;);

      var result = [];

      for (var prop in obj) {
        if (hasOwnProperty.call(obj, prop)) result.push(prop);
      }

      if (hasDontEnumBug) {
        for (var i=0; i &lt; dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i]);
        }
      }
      return result;
    }
  })()
};
</pre>

<p>&#x4E0A;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x5728;IE7&#xFF08;&#x4E5F;&#x8BB8;IE8&#x4E5F;&#x662F;&#xFF09;&#x4E0B;&#x6709;&#x4E2A;&#x95EE;&#x9898;&#xFF0C;&#x5C31;&#x662F;&#x5982;&#x679C;&#x4F20;&#x5165;&#x4E00;&#x4E2A;&#x6765;&#x81EA;&#x5176;&#x4ED6; window &#x5BF9;&#x8C61;&#x4E0B;&#x7684;&#x5BF9;&#x8C61;&#x65F6;&#xFF0C;&#x4E0D;&#x53EF;&#x679A;&#x4E3E;&#x7684;&#x5C5E;&#x6027;&#x4E5F;&#x4F1A;&#x83B7;&#x53D6;&#x5230;&#x3002;</p>

<p>&#x53E6;&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x70B9;&#x7684;&#x5B9E;&#x73B0;&#x65B9;&#x6CD5;&#xFF0C;&#x6765;&#x81EA; <a href="http://tokenposts.blogspot.com.au/2012/04/javascript-objectkeys-browser.html" class="external">Javascript - Object.keys Browser Compatibility</a></p>

<pre class="deki-transform">if (!Object.keys) Object.keys = function(o) {
&#xA0; if (o !== Object(o))
&#xA0;&#xA0;&#xA0; throw new TypeError(&apos;Object.keys called on a non-object&apos;);
&#xA0; var k=[],p;
&#xA0; for (p in o) if (Object.prototype.hasOwnProperty.call(o,p)) k.push(p);
&#xA0; return k;
}
</pre>

<h2 style="margin-bottom: 20px; line-height: 30px;" id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.2.3.14" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Object.keys</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.<br>
    Implemented in JavaScript 1.8.5</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-object.keys" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Object.keys</small></a></td>
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
   <th>Firefox (Gecko)</th>
   <th>Chrome</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>4 (2.0)</td>
   <td>5</td>
   <td>9</td>
   <td>12</td>
   <td>5</td>
  </tr>
 </tbody>
</table>
</div>

<div id="compat-mobile">
<table class="compat-table">
 <tbody>
  <tr>
   <th>Feature</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>Android</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="/zh-CN/docs/Enumerability_and_ownership_of_properties" href="/zh-CN/docs/Enumerability_and_ownership_of_properties">Enumerability and ownership of properties</a></li>
 <li><a title="propertyIsEnumerable() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5E03;&#x5C14;&#x503C;&#xFF0C;&#x8868;&#x660E;&#x6307;&#x5B9A;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x662F;&#x5426;&#x662F;&#x5F53;&#x524D;&#x5BF9;&#x8C61;&#x53EF;&#x679A;&#x4E3E;&#x7684;&#x81EA;&#x8EAB;&#x5C5E;&#x6027;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"><code>Object.prototype.propertyIsEnumerable</code></a></li>
 <li><a title="Object.create() &#x65B9;&#x6CD5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x62E5;&#x6709;&#x6307;&#x5B9A;&#x539F;&#x578B;&#x548C;&#x82E5;&#x5E72;&#x4E2A;&#x6307;&#x5B9A;&#x5C5E;&#x6027;&#x7684;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create"><code>Object.create</code></a></li>
 <li><a title="Object.getOwnPropertyNames()&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7531;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x6240;&#x6709;&#x81EA;&#x8EAB;&#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x540D;&#xFF08;&#x5305;&#x62EC;&#x4E0D;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#xFF09;&#x7EC4;&#x6210;&#x7684;&#x6570;&#x7EC4;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"><code>Object.getOwnPropertyNames</code></a></li>
 <li><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=307791" class="external link-https">Bug 307791</a> -<span id="summary_alias_container"> <span id="short_desc_nonedit_display">Implement ES5&apos;s Object.keys(O)</span> </span></li>
</ul>
                  
                
              