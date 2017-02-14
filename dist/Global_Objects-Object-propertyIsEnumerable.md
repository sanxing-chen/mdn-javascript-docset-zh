
                
                  
                    <p></p><section class="Quick_links" id="Quick_Links"><!-- --></section><p></p>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p><code><strong>propertyIsEnumerable()</strong></code> &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5E03;&#x5C14;&#x503C;&#xFF0C;&#x8868;&#x660E;&#x6307;&#x5B9A;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x662F;&#x5426;&#x662F;&#x5F53;&#x524D;&#x5BF9;&#x8C61;&#x53EF;&#x679A;&#x4E3E;&#x7684;&#x81EA;&#x8EAB;&#x5C5E;&#x6027;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><em>obj</em>.propertyIsEnumerable(<em>prop</em>)</code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>prop</code></dt>
 <dd>&#x9700;&#x8981;&#x6D4B;&#x8BD5;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x3002;</dd>
 <dt>
 <h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

 <p>&#x4E00;&#x4E2A; <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Boolean"><code>Boolean</code></a> &#x7528;&#x6765;&#x8868;&#x660E;&#x6307;&#x5B9A;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x662F;&#x5426;&#x53EF;&#x679A;&#x4E3E;</p>
 </dt>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x6BCF;&#x4E2A;&#x5BF9;&#x8C61;&#x90FD;&#x6709;&#xA0;<code>propertyIsEnumerable&#xA0;</code>&#x65B9;&#x6CD5;&#x3002;&#x8BE5;&#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x5224;&#x65AD;&#x51FA;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x91CC;&#x7684;&#x5C5E;&#x6027;&#x662F;&#x5426;&#x53EF;&#x679A;&#x4E3E;&#xFF0C;&#x4E5F;&#x5C31;&#x662F;&#x8BF4;&#x8BE5;&#x5C5E;&#x6027;&#x662F;&#x5426;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#xA0;<a title="JavaScript/Reference/Statements/for...in" href="/zh-CN/docs/JavaScript/Reference/Statements/for...in"><code>for...in</code></a>&#xA0;&#x5FAA;&#x73AF;&#x7B49;&#x904D;&#x5386;&#x5230;&#xFF0C;&#x4E0D;&#x8FC7;&#x6709;&#x4E9B;&#x5C5E;&#x6027;&#x867D;&#x7136;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#xA0;<code>for...in&#xA0;</code>&#x5FAA;&#x73AF;&#x904D;&#x5386;&#x5230;&#xFF0C;&#x4F46;&#x56E0;&#x4E3A;&#x5B83;&#x4EEC;&#x4E0D;&#x662F;&#x81EA;&#x8EAB;&#x5C5E;&#x6027;&#xFF0C;&#x800C;&#x662F;&#x4ECE;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x7EE7;&#x627F;&#x7684;&#x5C5E;&#x6027;,&#x6240;&#x4EE5;&#x8BE5;&#x65B9;&#x6CD5;&#x4E5F;&#x4F1A;&#x8FD4;&#x56DE;<code>false</code>&#x3002;&#x5982;&#x679C;&#x5BF9;&#x8C61;&#x6CA1;&#x6709;&#x6307;&#x5B9A;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x8BE5;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE; <code>false</code>&#x3002;</p>

<h2 name="Examples" id="Examples">&#x4F8B;&#x5B50;</h2>

<h3 name="Example:_A_basic_use_of_propertyIsEnumerable" id="Example:_A_basic_use_of_propertyIsEnumerable"><code>propertyIsEnumerable</code>&#x65B9;&#x6CD5;&#x7684;&#x57FA;&#x672C;&#x7528;&#x6CD5;</h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x6F14;&#x793A;&#x4E86;<code>propertyIsEnumerable</code>&#x65B9;&#x6CD5;&#x5728;&#x666E;&#x901A;&#x5BF9;&#x8C61;&#x548C;&#x6570;&#x7EC4;&#x4E0A;&#x7684;&#x57FA;&#x672C;&#x7528;&#x6CD5;:</p>

<pre><code>var o = {};
var a = [];
o.prop = &apos;is enumerable&apos;;
a[0] = &apos;is enumerable&apos;;

o.propertyIsEnumerable(&apos;prop&apos;);   //  &#x8FD4;&#x56DE; true
a.propertyIsEnumerable(0);        // &#x8FD4;&#x56DE; true</code></pre>

<h3 name="Example:_User-defined_versus_built-in_objects" id="Example:_User-defined_versus_built-in_objects">&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x5BF9;&#x8C61;&#x548C;&#x5F15;&#x64CE;&#x5185;&#x7F6E;&#x5BF9;&#x8C61;</h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x6F14;&#x793A;&#x4E86;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x5BF9;&#x8C61;&#x548C;&#x5F15;&#x64CE;&#x5185;&#x7F6E;&#x5BF9;&#x8C61;&#x4E0A;&#x5C5E;&#x6027;&#x53EF;&#x679A;&#x4E3E;&#x6027;&#x7684;&#x533A;&#x522B;.</p>

<pre><code>var a = [&apos;is enumerable&apos;];

a.propertyIsEnumerable(0);          // &#x8FD4;&#x56DE; true
a.propertyIsEnumerable(&apos;length&apos;);   // &#x8FD4;&#x56DE; false

Math.propertyIsEnumerable(&apos;random&apos;);   // &#x8FD4;&#x56DE; false
this.propertyIsEnumerable(&apos;Math&apos;);     // &#x8FD4;&#x56DE; false</code></pre>

<h3 name="Example:_Direct_versus_inherited_properties" id="Example:_Direct_versus_inherited_properties">&#x81EA;&#x8EAB;&#x5C5E;&#x6027;&#x548C;&#x7EE7;&#x627F;&#x5C5E;&#x6027;</h3>

<pre><code>var a = [];
a.propertyIsEnumerable(&apos;constructor&apos;);         // &#x8FD4;&#x56DE; false

function firstConstructor() {
  this.property = &apos;is not enumerable&apos;;
}

firstConstructor.prototype.firstMethod = function() {};

function secondConstructor() {
  this.method = function method() { return &apos;is enumerable&apos;; };
}

secondConstructor.prototype = new firstConstructor;
secondConstructor.prototype.constructor = secondConstructor;

var o = new secondConstructor();
o.arbitraryProperty = &apos;is enumerable&apos;;

o.propertyIsEnumerable(&apos;arbitraryProperty&apos;);   // &#x8FD4;&#x56DE; true
o.propertyIsEnumerable(&apos;method&apos;);              // &#x8FD4;&#x56DE; true
o.propertyIsEnumerable(&apos;property&apos;);            // &#x8FD4;&#x56DE; false

o.property = &apos;is enumerable&apos;;

o.propertyIsEnumerable(&apos;property&apos;);            // &#x8FD4;&#x56DE; true

// &#x8FD9;&#x4E9B;&#x8FD4;&#x56DE;fasle&#xFF0C;&#x662F;&#x56E0;&#x4E3A;&#xFF0C;&#x5728;&#x539F;&#x578B;&#x94FE;&#x4E0A;propertyIsEnumerable&#x4E0D;&#x88AB;&#x8003;&#x8651;
// (&#x5C3D;&#x7BA1;&#x6700;&#x540E;&#x4E24;&#x4E2A;&#x5728;for-in&#x5FAA;&#x73AF;&#x4E2D;&#x53EF;&#x4EE5;&#x88AB;&#x5FAA;&#x73AF;&#x51FA;&#x6765;)&#x3002;
o.propertyIsEnumerable(&apos;prototype&apos;);   // &#x8FD4;&#x56DE; false (&#x6839;&#x636E; JS 1.8.1/FF3.6)
o.propertyIsEnumerable(&apos;constructor&apos;); // &#x8FD4;&#x56DE; false
o.propertyIsEnumerable(&apos;firstMethod&apos;); // &#x8FD4;&#x56DE; false</code></pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table>
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" title="ECMAScript 3rd Edition (ECMA-262)" class="external" href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf" hreflang="en">ECMAScript 3rd Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.2.4.7" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Object.prototype.propertyIsEnumerable</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-object.prototype.propertyisenumerable" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Object.prototype.propertyIsEnumerable</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Object.prototype.propertyIsEnumerable</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 style="margin-bottom: 20px; line-height: 30px;" id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;"><span style="font-size: 2.142857142857143rem;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</span></h2>

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

<h3 style="line-height: 24px;" name="See_Also" id="See_Also">Gecko-specific notes</h3>

<ul>
 <li>&#x4ECE; JavaScript 1.8.1 (in Firefox 3.6) &#x5F00;&#x59CB;&#xFF0C;<code>propertyIsEnumerable(&quot;prototype&quot;)</code>&#x8FD4;&#x56DE; false&#xFF0C;&#x4E0D;&#x518D;&#x662F; true&#xFF1B;&#x8FD9;&#x4E0E; ECMAScript 5 &#x7684;&#x7ED3;&#x679C;&#x4E00;&#x81F4;&#x3002;</li>
</ul>

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="/zh-CN/docs/Enumerability_and_ownership_of_properties" href="/zh-CN/docs/Enumerability_and_ownership_of_properties">Enumerability and ownership of properties</a></li>
 <li><a title="JavaScript/Reference/Statements/for...in" href="/zh-CN/docs/JavaScript/Reference/Statements/for...in">for...in</a></li>
 <li><a title="Object.keys() &#x65B9;&#x6CD5;&#x4F1A;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7531;&#x7ED9;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x6240;&#x6709;&#x53EF;&#x679A;&#x4E3E;&#x81EA;&#x8EAB;&#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x7EC4;&#x6210;&#x7684;&#x6570;&#x7EC4;&#xFF0C;&#x6570;&#x7EC4;&#x4E2D;&#x5C5E;&#x6027;&#x540D;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;&#x548C;&#x4F7F;&#x7528;for-in&#x5FAA;&#x73AF;&#x904D;&#x5386;&#x8BE5;&#x5BF9;&#x8C61;&#x65F6;&#x8FD4;&#x56DE;&#x7684;&#x987A;&#x5E8F;&#x4E00;&#x81F4; (&#x987A;&#x5E8F;&#x4E00;&#x81F4;&#x4E0D;&#x5305;&#x62EC;&#x6570;&#x5B57;&#x5C5E;&#x6027;)&#xFF08;&#x4E24;&#x8005;&#x7684;&#x4E3B;&#x8981;&#x533A;&#x522B;&#x662F; for-in &#x8FD8;&#x4F1A;&#x904D;&#x5386;&#x51FA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4ECE;&#x5176;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x7EE7;&#x627F;&#x5230;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"><code>Object.keys()</code></a></li>
 <li><a title="Object.defineProperty() &#x65B9;&#x6CD5;&#x4F1A;&#x76F4;&#x63A5;&#x5728;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4E0A;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x65B0;&#x5C5E;&#x6027;&#xFF0C;&#x6216;&#x8005;&#x4FEE;&#x6539;&#x4E00;&#x4E2A;&#x5DF2;&#x7ECF;&#x5B58;&#x5728;&#x7684;&#x5C5E;&#x6027;&#xFF0C; &#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"><code>Object.defineProperty()</code></a></li>
</ul>
                  
                
              