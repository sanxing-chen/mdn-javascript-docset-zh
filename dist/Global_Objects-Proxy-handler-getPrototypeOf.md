
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="overheadIndicator" style="background: #9CF49C;"> 
    <p><strong>&#x8BE5;&#x7279;&#x6027;&#x5904;&#x4E8E; ECMAScript 6 &#x89C4;&#x8303;&#x8349;&#x6848;&#x4E2D;&#xFF0C;&#x76EE;&#x524D;&#x7684;&#x5B9E;&#x73B0;&#x5728;&#x672A;&#x6765;&#x53EF;&#x80FD;&#x4F1A;&#x53D1;&#x751F;&#x5FAE;&#x8C03;&#xFF0C;&#x8BF7;&#x8C28;&#x614E;&#x4F7F;&#x7528;&#x3002;</strong></p> 
</div></div>

<h2 id="Summary" name="Summary">&#x6982;&#x8FF0;</h2>

<p><strong><code>handler.getPrototypeOf()</code></strong> &#x662F;&#x4E00;&#x4E2A;&#x4EE3;&#x7406;&#x65B9;&#x6CD5;&#xFF0C;&#x5F53;&#x8BFB;&#x53D6;&#x4EE3;&#x7406;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;&#x65F6;&#xFF0C;&#x8BE5;&#x65B9;&#x6CD5;&#x5C31;&#x4F1A;&#x88AB;&#x8C03;&#x7528;&#x3002;</p>

<h2 id="Syntax" name="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="brush: js">var p = new Proxy(obj, {
  getPrototypeOf(target) {
  ...
  }
});
</pre>

<h3 id="Parameters" name="Parameters">&#x53C2;&#x6570;</h3>

<p>&#x5F53; <code>getPrototypeOf</code> &#x65B9;&#x6CD5;&#x88AB;&#x8C03;&#x7528;&#x65F6;&#xFF0C;<code>this</code> &#x6307;&#x5411;&#x7684;&#x662F;&#x5B83;&#x6240;&#x5C5E;&#x7684;&#x5904;&#x7406;&#x5668;&#x5BF9;&#x8C61;&#x3002;</p>

<dl>
 <dt><code>target</code></dt>
 <dd>&#x88AB;&#x4EE3;&#x7406;&#x7684;&#x76EE;&#x6807;&#x5BF9;&#x8C61;&#x3002;</dd>
</dl>

<h3 id="Return_value" name="Return_value">&#x8FD4;&#x56DE;&#x503C;</h3>

<p><code>getPrototypeOf</code> &#x65B9;&#x6CD5;&#x5FC5;&#x987B;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x503C;&#x6216;&#x8005;&#x8FD4;&#x56DE; <code>null&#xFF0C;&#x4E0D;&#x80FD;&#x8FD4;&#x56DE;&#x5176;&#x5B83;&#x7C7B;&#x578B;&#x7684;&#x539F;&#x59CB;&#x503C;</code>&#x3002;</p>

<h2 id=".E6.8F.8F.E8.BF.B0">&#x63CF;&#x8FF0;</h2>

<p>&#x5728; JavaScript &#x4E2D;&#xFF0C;&#x6709;&#x4E0B;&#x9762;&#x8FD9;&#x4E94;&#x79CD;&#x64CD;&#x4F5C;&#xFF08;&#x65B9;&#x6CD5;/&#x5C5E;&#x6027;/&#x8FD0;&#x7B97;&#x7B26;&#xFF09;&#x53EF;&#x4EE5;&#x89E6;&#x53D1; JS &#x5F15;&#x64CE;&#x8BFB;&#x53D6;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;&#xFF0C;&#x4E5F;&#x5C31;&#x662F;&#x53EF;&#x4EE5;&#x89E6;&#x53D1; <code>getPrototypeOf()</code>&#xA0;&#x4EE3;&#x7406;&#x65B9;&#x6CD5;&#x7684;&#x8FD0;&#x884C;&#xFF1A;</p>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf" title="Object.getPrototypeOf() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;&#xFF08;&#x4E5F;&#x5C31;&#x662F;&#x8BE5;&#x5BF9;&#x8C61;&#x5185;&#x90E8;&#x5C5E;&#x6027;[[Prototype]]&#x7684;&#x503C;&#xFF09;&#x3002;"><code>Object.getPrototypeOf()</code></a></li>
 <li><a class="new" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Reflect.getPrototypeOf()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto" title="&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;__proto__ &#x5C5E;&#x6027;&#x548C;&#x81EA;&#x5DF1;&#x7684;&#x5185;&#x90E8;&#x5C5E;&#x6027;[[Prototype]]&#x6307;&#x5411;&#x4E00;&#x4E2A;&#x76F8;&#x540C;&#x7684;&#x503C; (&#x901A;&#x5E38;&#x79F0;&#x8FD9;&#x4E2A;&#x503C;&#x4E3A;&#x539F;&#x578B;),&#x539F;&#x578B;&#x7684;&#x503C;&#x53EF;&#x4EE5;&#x662F;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x503C;&#x4E5F;&#x53EF;&#x4EE5;&#x662F;null(&#x6BD4;&#x5982;&#x8BF4;Object.prototype.__proto__&#x7684;&#x503C;&#x5C31;&#x662F;null).&#x8BE5;&#x5C5E;&#x6027;&#x53EF;&#x80FD;&#x4F1A;&#x5F15;&#x53D1;&#x4E00;&#x4E9B;&#x9519;&#x8BEF;,&#x56E0;&#x4E3A;&#x7528;&#x6237;&#x53EF;&#x80FD;&#x4F1A;&#x4E0D;&#x77E5;&#x9053;&#x8BE5;&#x5C5E;&#x6027;&#x7684;&#x7279;&#x6B8A;&#x6027;,&#x800C;&#x7ED9;&#x5B83;&#x8D4B;&#x503C;,&#x4ECE;&#x800C;&#x6539;&#x53D8;&#x4E86;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;. &#x5982;&#x679C;&#x9700;&#x8981;&#x8BBF;&#x95EE;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;,&#x5E94;&#x8BE5;&#x4F7F;&#x7528;&#x65B9;&#x6CD5;Object.getPrototypeOf."><code>__proto__</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf" title="isPrototypeOf() &#x65B9;&#x6CD5;&#x6D4B;&#x8BD5;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x662F;&#x5426;&#x5B58;&#x5728;&#x4E8E;&#x53E6;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x3002;"><code>Object.prototype.isPrototypeOf()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof" title="instanceof&#xA0;&#x8FD0;&#x7B97;&#x7B26;&#x53EF;&#x4EE5;&#x7528;&#x6765;&#x5224;&#x65AD;&#x67D0;&#x4E2A;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;prototype&#x5C5E;&#x6027;&#x662F;&#x5426;&#x5B58;&#x5728;&#x53E6;&#x5916;&#x4E00;&#x4E2A;&#x8981;&#x68C0;&#x6D4B;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x3002;"><code>instanceof</code></a></li>
</ul>

<p>&#x5982;&#x679C;&#x9047;&#x5230;&#x4E86;&#x4E0B;&#x9762;&#x4E24;&#x79CD;&#x60C5;&#x51B5;&#xFF0C;JS &#x5F15;&#x64CE;&#x4F1A;&#x629B;&#x51FA; <a class="new" href="/zh-CN/docs/Web/JavaScript/Reference/TypeError" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>TypeError</code></a> &#x5F02;&#x5E38;&#xFF1A;</p>

<ul>
 <li><code>getPrototypeOf()</code> &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x7684;&#x4E0D;&#x662F;&#x5BF9;&#x8C61;&#x4E5F;&#x4E0D;&#x662F; <code>null&#x3002;</code></li>
 <li>&#x76EE;&#x6807;&#x5BF9;&#x8C61;&#x662F;&#x4E0D;&#x53EF;&#x6269;&#x5C55;&#x7684;&#xFF0C;&#x4E14; <code>getPrototypeOf()</code> &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x7684;&#x539F;&#x578B;&#x4E0D;&#x662F;&#x76EE;&#x6807;&#x5BF9;&#x8C61;&#x672C;&#x8EAB;&#x7684;&#x539F;&#x578B;&#x3002;</li>
</ul>

<h2 id=".E7.A4.BA.E4.BE.8B">&#x793A;&#x4F8B;</h2>

<h3 id=".E4.BE.8B.E5.AD.90.EF.BC.9A.E5.9F.BA.E6.9C.AC.E7.94.A8.E6.B3.95">&#x4F8B;&#x5B50;&#xFF1A;&#x57FA;&#x672C;&#x7528;&#x6CD5;</h3>

<pre class="brush: js">var obj = {};
var proto = {};
var handler = {
    getPrototypeOf(target) {
&#xA0;       console.log(target === obj);   // true
&#xA0;       console.log(this === handler); // true
        return proto;
    }
};

var p = new Proxy(obj, handler);
console.log(Object.getPrototypeOf(p) === proto);    // true
</pre>

<h3 id=".E4.BE.8B.E5.AD.90.EF.BC.9A5_.E7.A7.8D.E8.A7.A6.E5.8F.91_getPrototypeOf_.E4.BB.A3.E7.90.86.E6.96.B9.E6.B3.95.E7.9A.84.E6.96.B9.E5.BC.8F">&#x4F8B;&#x5B50;&#xFF1A;5 &#x79CD;&#x89E6;&#x53D1; getPrototypeOf &#x4EE3;&#x7406;&#x65B9;&#x6CD5;&#x7684;&#x65B9;&#x5F0F;</h3>

<pre class="brush: js">var obj = {};
var p = new Proxy(obj, {
    getPrototypeOf(target) {
        return Array.prototype;
    }
});
console.log(
    Object.getPrototypeOf(p) === Array.prototype,  // true
    Reflect.getPrototypeOf(p) === Array.prototype, // true
    p.__proto__ === Array.prototype,               // true
    Array.prototype.isPrototypeOf(p),              // true
    p instanceof Array                             // true
);
</pre>

<h3 id=".E4.BE.8B.E5.AD.90.EF.BC.9A.E4.B8.A4.E7.A7.8D.E6.83.85.E5.86.B5.E4.B8.8B.E7.9A.84.E5.BC.82.E5.B8.B8">&#x4F8B;&#x5B50;&#xFF1A;&#x4E24;&#x79CD;&#x60C5;&#x51B5;&#x4E0B;&#x7684;&#x5F02;&#x5E38;</h3>

<pre class="brush: js">var obj = {};
var p = new Proxy(obj, {
    getPrototypeOf(target) {
        return &quot;foo&quot;;
    }
});
Object.getPrototypeOf(p); // TypeError: &quot;foo&quot; is not an object or null

var obj = Object.preventExtensions({});
var p = new Proxy(obj, {
    getPrototypeOf(target) {
        return {};
    }
});
Object.getPrototypeOf(p); // TypeError: expected same prototype value
</pre>

<h2 id="Specifications" name="Specifications">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x540D;&#x79F0;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x5907;&#x6CE8;</th>
  </tr>
  <tr>
   <td><a class="external" href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-proxy-object-internal-methods-and-internal-slots-getprototypeof" hreflang="en" lang="en">ECMAScript 6 (ECMA-262)<br><small lang="zh-CN">[[GetPrototypeOf]]</small></a></td>
   <td><span class="spec-RC">Release Candidate</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<div><div class="htab"> 
    <a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a> 
    <ul> 
        <li class="selected"><a>Desktop</a></li> 
        <li><a>Mobile</a></li> 
    </ul> 
</div></div>

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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span> (<a class="external" href="https://bugzilla.mozilla.org/show_bug.cgi?id=888969" title="Implement ES6 Proxy traps for getPrototypeOf and setPrototypeOf">bug&#xA0;888969</a>)</td>
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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span> (<a class="external" href="https://bugzilla.mozilla.org/show_bug.cgi?id=888969" title="Implement ES6 Proxy traps for getPrototypeOf and setPrototypeOf">bug&#xA0;888969</a>)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also" name="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy" title="The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc)."><code>Proxy</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler" title="&#x5904;&#x7406;&#x5668;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x81EA;&#x5B9A;&#x4E49;&#x4EE3;&#x7406;&#x5BF9;&#x8C61;&#x7684;&#x5404;&#x79CD;&#x53EF;&#x4EE3;&#x7406;&#x64CD;&#x4F5C;&#x3002;"><code>handler</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf" title="Object.getPrototypeOf() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;&#xFF08;&#x4E5F;&#x5C31;&#x662F;&#x8BE5;&#x5BF9;&#x8C61;&#x5185;&#x90E8;&#x5C5E;&#x6027;[[Prototype]]&#x7684;&#x503C;&#xFF09;&#x3002;"><code>Object.getPrototypeOf()</code></a></li>
 <li><a class="new" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Reflect.getPrototypeOf()</code></a></li>
</ul>
                  
                
              