
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p><code><strong>Object.isFrozen()</strong></code> &#x65B9;&#x6CD5;&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x662F;&#x5426;&#x88AB;&#x51BB;&#x7ED3;&#xFF08;frozen&#xFF09;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox language-html" style="margin-bottom: 0px; padding: 1em; border-left-width: 6px; border-left-style: solid; font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; font-size: 14px; direction: ltr; white-space: normal; text-shadow: none; background-color: rgba(212, 221, 228, 0.498039);">Object.isFrozen(<em>obj</em>)</pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt>obj</dt>
 <dd>&#x88AB;&#x68C0;&#x6D4B;&#x7684;&#x5BF9;&#x8C61;</dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x662F;&#x51BB;&#x7ED3;&#x7684;&#xFF08;frozen&#xFF09;&#x662F;&#x6307;&#x5B83;&#x4E0D;&#x53EF;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible" title="Object.isExtensible() &#x65B9;&#x6CD5;&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x662F;&#x5426;&#x662F;&#x53EF;&#x6269;&#x5C55;&#x7684;&#xFF08;&#x662F;&#x5426;&#x53EF;&#x4EE5;&#x5728;&#x5B83;&#x4E0A;&#x9762;&#x6DFB;&#x52A0;&#x65B0;&#x7684;&#x5C5E;&#x6027;&#xFF09;&#x3002;"><code>&#x6269;&#x5C55;</code></a>&#xFF0C;&#x6240;&#x6709;&#x5C5E;&#x6027;&#x90FD;&#x662F;&#x4E0D;&#x53EF;&#x914D;&#x7F6E;&#x7684;&#xFF08;non-configurable&#xFF09;&#xFF0C;&#x4E14;&#x6240;&#x6709;&#x6570;&#x636E;&#x5C5E;&#x6027;&#xFF08;data properties&#xFF09;&#x90FD;&#x662F;&#x4E0D;&#x53EF;&#x5199;&#x7684;&#xFF08;non-writable&#xFF09;&#x3002;&#x6570;&#x636E;&#x5C5E;&#x6027;&#x662F;&#x6307;&#x90A3;&#x4E9B;&#x6CA1;&#x6709;&#x53D6;&#x503C;&#x5668;&#xFF08;getter&#xFF09;&#x6216;&#x8D4B;&#x503C;&#x5668;&#xFF08;setter&#xFF09;&#x7684;&#x5C5E;&#x6027;&#x3002;</p>

<h2 name="Examples" id="Examples">&#x4F8B;&#x5B50;</h2>

<pre class="brush: js">// &#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x9ED8;&#x8BA4;&#x662F;&#x53EF;&#x6269;&#x5C55;&#x7684;,&#x6240;&#x4EE5;&#x5B83;&#x4E5F;&#x662F;&#x975E;&#x51BB;&#x7ED3;&#x7684;.
assert(Object.isFrozen({}) === false);

// &#x4E00;&#x4E2A;&#x4E0D;&#x53EF;&#x6269;&#x5C55;&#x7684;&#x7A7A;&#x5BF9;&#x8C61;&#x540C;&#x65F6;&#x4E5F;&#x662F;&#x4E00;&#x4E2A;&#x51BB;&#x7ED3;&#x5BF9;&#x8C61;.
var vacuouslyFrozen = Object.preventExtensions({});
assert(Object.isFrozen(vacuouslyFrozen) === true);

// &#x4E00;&#x4E2A;&#x975E;&#x7A7A;&#x5BF9;&#x8C61;&#x9ED8;&#x8BA4;&#x4E5F;&#x662F;&#x975E;&#x51BB;&#x7ED3;&#x7684;.
var oneProp = { p: 42 };
assert(Object.isFrozen(oneProp) === false);

// &#x8BA9;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x53D8;&#x7684;&#x4E0D;&#x53EF;&#x6269;&#x5C55;,&#x5E76;&#x4E0D;&#x610F;&#x5473;&#x7740;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x53D8;&#x6210;&#x4E86;&#x51BB;&#x7ED3;&#x5BF9;&#x8C61;,
// &#x56E0;&#x4E3A;p&#x5C5E;&#x6027;&#x4ECD;&#x7136;&#x662F;&#x53EF;&#x4EE5;&#x914D;&#x7F6E;&#x7684;(&#x800C;&#x4E14;&#x53EF;&#x5199;&#x7684;).
Object.preventExtensions(oneProp);
assert(Object.isFrozen(oneProp) === false);

// ...&#x5982;&#x679C;&#x5220;&#x9664;&#x4E86;&#x8FD9;&#x4E2A;&#x5C5E;&#x6027;,&#x5219;&#x5B83;&#x4F1A;&#x6210;&#x4E3A;&#x4E00;&#x4E2A;&#x51BB;&#x7ED3;&#x5BF9;&#x8C61;.
delete oneProp.p;
assert(Object.isFrozen(oneProp) === true);

// &#x4E00;&#x4E2A;&#x4E0D;&#x53EF;&#x6269;&#x5C55;&#x7684;&#x5BF9;&#x8C61;,&#x62E5;&#x6709;&#x4E00;&#x4E2A;&#x4E0D;&#x53EF;&#x5199;&#x4F46;&#x53EF;&#x914D;&#x7F6E;&#x7684;&#x5C5E;&#x6027;,&#x5219;&#x5B83;&#x4ECD;&#x7136;&#x662F;&#x975E;&#x51BB;&#x7ED3;&#x7684;.
var nonWritable = { e: &quot;plep&quot; };
Object.preventExtensions(nonWritable);
Object.defineProperty(nonWritable, &quot;e&quot;, { writable: false }); // &#x53D8;&#x5F97;&#x4E0D;&#x53EF;&#x5199;
assert(Object.isFrozen(nonWritable) === false);

// &#x628A;&#x8FD9;&#x4E2A;&#x5C5E;&#x6027;&#x6539;&#x4E3A;&#x4E0D;&#x53EF;&#x914D;&#x7F6E;,&#x4F1A;&#x8BA9;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x6210;&#x4E3A;&#x51BB;&#x7ED3;&#x5BF9;&#x8C61;.
Object.defineProperty(nonWritable, &quot;e&quot;, { configurable: false }); // &#x53D8;&#x5F97;&#x4E0D;&#x53EF;&#x914D;&#x7F6E;
assert(Object.isFrozen(nonWritable) === true);

// &#x4E00;&#x4E2A;&#x4E0D;&#x53EF;&#x6269;&#x5C55;&#x7684;&#x5BF9;&#x8C61;,&#x62E5;&#x6709;&#x4E00;&#x4E2A;&#x4E0D;&#x53EF;&#x914D;&#x7F6E;&#x4F46;&#x53EF;&#x5199;&#x7684;&#x5C5E;&#x6027;,&#x5219;&#x5B83;&#x4ECD;&#x7136;&#x662F;&#x975E;&#x51BB;&#x7ED3;&#x7684;.
var nonConfigurable = { release: &quot;the kraken!&quot; };
Object.preventExtensions(nonConfigurable);
Object.defineProperty(nonConfigurable, &quot;release&quot;, { configurable: false });
assert(Object.isFrozen(nonConfigurable) === false);

// &#x628A;&#x8FD9;&#x4E2A;&#x5C5E;&#x6027;&#x6539;&#x4E3A;&#x4E0D;&#x53EF;&#x5199;,&#x4F1A;&#x8BA9;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x6210;&#x4E3A;&#x51BB;&#x7ED3;&#x5BF9;&#x8C61;.
Object.defineProperty(nonConfigurable, &quot;release&quot;, { writable: false });
assert(Object.isFrozen(nonConfigurable) === true);

// &#x4E00;&#x4E2A;&#x4E0D;&#x53EF;&#x6269;&#x5C55;&#x7684;&#x5BF9;&#x8C61;,&#x503C;&#x62E5;&#x6709;&#x4E00;&#x4E2A;&#x8BBF;&#x95EE;&#x5668;&#x5C5E;&#x6027;,&#x5219;&#x5B83;&#x4ECD;&#x7136;&#x662F;&#x975E;&#x51BB;&#x7ED3;&#x7684;.
var accessor = { get food() { return &quot;yum&quot;; } };
Object.preventExtensions(accessor);
assert(Object.isFrozen(accessor) === false);

// ...&#x4F46;&#x628A;&#x8FD9;&#x4E2A;&#x5C5E;&#x6027;&#x6539;&#x4E3A;&#x4E0D;&#x53EF;&#x914D;&#x7F6E;,&#x4F1A;&#x8BA9;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x6210;&#x4E3A;&#x51BB;&#x7ED3;&#x5BF9;&#x8C61;.
Object.defineProperty(accessor, &quot;food&quot;, { configurable: false });
assert(Object.isFrozen(accessor) === true);

// &#x4F7F;&#x7528;Object.freeze&#x662F;&#x51BB;&#x7ED3;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x6700;&#x65B9;&#x4FBF;&#x7684;&#x65B9;&#x6CD5;.
var frozen = { 1: 81 };
assert(Object.isFrozen(frozen) === false);
Object.freeze(frozen);
assert(Object.isFrozen(frozen) === true);

// &#x4E00;&#x4E2A;&#x51BB;&#x7ED3;&#x5BF9;&#x8C61;&#x4E5F;&#x662F;&#x4E00;&#x4E2A;&#x5BC6;&#x5C01;&#x5BF9;&#x8C61;.
assert(Object.isSealed(frozen) === true);

// &#x5F53;&#x7136;,&#x66F4;&#x662F;&#x4E00;&#x4E2A;&#x4E0D;&#x53EF;&#x6269;&#x5C55;&#x7684;&#x5BF9;&#x8C61;.
assert(Object.isExtensible(frozen) === false);

</pre>

<h2 id="&#x6CE8;&#x610F;">&#x6CE8;&#x610F;</h2>

<p>&#x5728; ES5 &#x4E2D;&#xFF0C;&#x5982;&#x679C;&#x53C2;&#x6570;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7C7B;&#x578B;&#xFF0C;&#x5C06;&#x629B;&#x51FA;&#x4E00;&#x4E2A; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;"><code>TypeError</code></a>&#xA0;&#xA0;&#x5F02;&#x5E38;&#x3002;&#x5728; ES6 &#x4E2D;&#xFF0C; non-object &#x53C2;&#x6570;&#x5C06;&#x88AB;&#x89C6;&#x4E3A;&#x4E00;&#x4E2A;&#x51BB;&#x7ED3;&#x7684;&#x666E;&#x901A;&#x5BF9;&#x8C61;&#xFF0C;&#x56E0;&#x6B64;&#x4F1A;&#x8FD4;&#x56DE;&#xA0;true&#x3002;</p>

<pre class="brush: js">Object.isSealed(1);
// TypeError: 1 is not an object (ES5 code)

Object.isSealed(1);
// true                          (ES6 code)
</pre>

<h2 id="&#x89C4;&#x8303;" style="margin-bottom: 20px; line-height: 30px;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.2.3.12" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Object.isFrozen</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.<br>
    Implemented in JavaScript 1.8.5</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-object.isfrozen" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Object.isFrozen</small></a></td>
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
   <td>6</td>
   <td>9</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>5.1</td>
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
 <li><strong><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze" title="Object.freeze() &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x51BB;&#x7ED3;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x3002;&#x51BB;&#x7ED3;&#x5BF9;&#x8C61;&#x662F;&#x6307;&#x90A3;&#x4E9B;&#x4E0D;&#x80FD;&#x6DFB;&#x52A0;&#x65B0;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x4E0D;&#x80FD;&#x4FEE;&#x6539;&#x5DF2;&#x6709;&#x5C5E;&#x6027;&#x7684;&#x503C;&#xFF0C;&#x4E0D;&#x80FD;&#x5220;&#x9664;&#x5DF2;&#x6709;&#x5C5E;&#x6027;&#xFF0C;&#x4EE5;&#x53CA;&#x4E0D;&#x80FD;&#x4FEE;&#x6539;&#x5DF2;&#x6709;&#x5C5E;&#x6027;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x6027;&#x3001;&#x53EF;&#x914D;&#x7F6E;&#x6027;&#x3001;&#x53EF;&#x5199;&#x6027;&#x7684;&#x5BF9;&#x8C61;&#x3002;&#x4E5F;&#x5C31;&#x662F;&#x8BF4;&#xFF0C;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x6C38;&#x8FDC;&#x662F;&#x4E0D;&#x53EF;&#x53D8;&#x7684;&#x3002;&#x8BE5;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x88AB;&#x51BB;&#x7ED3;&#x7684;&#x5BF9;&#x8C61;&#x3002;"><code>Object.freeze</code></a></strong></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible" title="Object.isExtensible() &#x65B9;&#x6CD5;&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x662F;&#x5426;&#x662F;&#x53EF;&#x6269;&#x5C55;&#x7684;&#xFF08;&#x662F;&#x5426;&#x53EF;&#x4EE5;&#x5728;&#x5B83;&#x4E0A;&#x9762;&#x6DFB;&#x52A0;&#x65B0;&#x7684;&#x5C5E;&#x6027;&#xFF09;&#x3002;"><code>Object.isExtensible</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/seal" title="Object.seal() &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x8BA9;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5BC6;&#x5C01;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x88AB;&#x5BC6;&#x5C01;&#x540E;&#x7684;&#x5BF9;&#x8C61;&#x3002;&#x5BC6;&#x5C01;&#x5BF9;&#x8C61;&#x662F;&#x6307;&#x90A3;&#x4E9B;&#x4E0D;&#x80FD;&#x6DFB;&#x52A0;&#x65B0;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x4E0D;&#x80FD;&#x5220;&#x9664;&#x5DF2;&#x6709;&#x5C5E;&#x6027;&#xFF0C;&#x4EE5;&#x53CA;&#x4E0D;&#x80FD;&#x4FEE;&#x6539;&#x5DF2;&#x6709;&#x5C5E;&#x6027;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x6027;&#x3001;&#x53EF;&#x914D;&#x7F6E;&#x6027;&#x3001;&#x53EF;&#x5199;&#x6027;&#xFF0C;&#x4F46;&#x53EF;&#x80FD;&#x53EF;&#x4EE5;&#x4FEE;&#x6539;&#x5DF2;&#x6709;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x7684;&#x5BF9;&#x8C61;&#x3002;"><code>Object.seal</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed" title="Object.isSealed() &#x65B9;&#x6CD5;&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x662F;&#x5426;&#x662F;&#x5BC6;&#x5C01;&#x7684;&#xFF08;sealed&#xFF09;&#x3002;"><code>Object.isSealed</code></a></li>
</ul>
                  
                
              