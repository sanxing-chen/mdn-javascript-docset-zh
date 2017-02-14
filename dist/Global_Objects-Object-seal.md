
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p><code><strong>Object.seal()</strong></code> &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x8BA9;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5BC6;&#x5C01;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x88AB;&#x5BC6;&#x5C01;&#x540E;&#x7684;&#x5BF9;&#x8C61;&#x3002;&#x5BC6;&#x5C01;&#x5BF9;&#x8C61;&#x662F;&#x6307;&#x90A3;&#x4E9B;&#x4E0D;&#x80FD;&#x6DFB;&#x52A0;&#x65B0;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x4E0D;&#x80FD;&#x5220;&#x9664;&#x5DF2;&#x6709;&#x5C5E;&#x6027;&#xFF0C;&#x4EE5;&#x53CA;&#x4E0D;&#x80FD;&#x4FEE;&#x6539;&#x5DF2;&#x6709;&#x5C5E;&#x6027;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x6027;&#x3001;&#x53EF;&#x914D;&#x7F6E;&#x6027;&#x3001;&#x53EF;&#x5199;&#x6027;&#xFF0C;&#x4F46;&#x53EF;&#x80FD;&#x53EF;&#x4EE5;&#x4FEE;&#x6539;&#x5DF2;&#x6709;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x7684;&#x5BF9;&#x8C61;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>Object.seal(<em>obj</em>)</code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt>obj</dt>
 <dd>&#x5C06;&#x8981;&#x88AB;&#x5BC6;&#x5C01;&#x7684;&#x5BF9;&#x8C61;</dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x901A;&#x5E38;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x662F;<a title="JavaScript/Reference/Global Objects/Object/isExtensible" href="/zh-CN/docs/JavaScript/Reference/Global_Objects/Object/isExtensible">&#x53EF;&#x6269;&#x5C55;&#x7684;</a>&#xFF08;&#x53EF;&#x4EE5;&#x6DFB;&#x52A0;&#x65B0;&#x7684;&#x5C5E;&#x6027;&#xFF09;&#x3002;&#x5BC6;&#x5C01;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4F1A;&#x8BA9;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x53D8;&#x7684;&#x4E0D;&#x80FD;&#x6DFB;&#x52A0;&#x65B0;&#x5C5E;&#x6027;&#xFF0C;&#x4E14;&#x6240;&#x6709;&#x5DF2;&#x6709;&#x5C5E;&#x6027;&#x4F1A;&#x53D8;&#x7684;&#x4E0D;&#x53EF;&#x914D;&#x7F6E;&#x3002;&#x5C5E;&#x6027;&#x4E0D;&#x53EF;&#x914D;&#x7F6E;&#x7684;&#x6548;&#x679C;&#x5C31;&#x662F;&#x5C5E;&#x6027;&#x53D8;&#x7684;&#x4E0D;&#x53EF;&#x5220;&#x9664;&#xFF0C;&#x4EE5;&#x53CA;&#x4E00;&#x4E2A;&#x6570;&#x636E;&#x5C5E;&#x6027;&#x4E0D;&#x80FD;&#x88AB;&#x91CD;&#x65B0;&#x5B9A;&#x4E49;&#x6210;&#x4E3A;&#x8BBF;&#x95EE;&#x5668;&#x5C5E;&#x6027;&#xFF0C;&#x6216;&#x8005;&#x53CD;&#x4E4B;&#x3002;&#x4F46;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x4ECD;&#x7136;&#x53EF;&#x4EE5;&#x4FEE;&#x6539;&#x3002;&#x5C1D;&#x8BD5;&#x5220;&#x9664;&#x4E00;&#x4E2A;&#x5BC6;&#x5C01;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#x6216;&#x8005;&#x5C06;&#x67D0;&#x4E2A;&#x5BC6;&#x5C01;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#x4ECE;&#x6570;&#x636E;&#x5C5E;&#x6027;&#x8F6C;&#x6362;&#x6210;&#x8BBF;&#x95EE;&#x5668;&#x5C5E;&#x6027;&#xFF0C;&#x7ED3;&#x679C;&#x4F1A;&#x9759;&#x9ED8;&#x5931;&#x8D25;&#x6216;&#x629B;&#x51FA;<code>TypeError</code>&#xA0;<code>&#x5F02;&#x5E38;&#xFF08;</code><a title="JavaScript/Strict mode" href="/zh-CN/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode" class="new">&#x4E25;&#x683C;&#x6A21;&#x5F0F;</a>&#xFF09;&#x3002;</p>

<p>&#x4E0D;&#x4F1A;&#x5F71;&#x54CD;&#x4ECE;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x7EE7;&#x627F;&#x7684;&#x5C5E;&#x6027;&#x3002;&#x4F46;&#xA0;<a title="&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;__proto__ &#x5C5E;&#x6027;&#x548C;&#x81EA;&#x5DF1;&#x7684;&#x5185;&#x90E8;&#x5C5E;&#x6027;[[Prototype]]&#x6307;&#x5411;&#x4E00;&#x4E2A;&#x76F8;&#x540C;&#x7684;&#x503C; (&#x901A;&#x5E38;&#x79F0;&#x8FD9;&#x4E2A;&#x503C;&#x4E3A;&#x539F;&#x578B;),&#x539F;&#x578B;&#x7684;&#x503C;&#x53EF;&#x4EE5;&#x662F;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x503C;&#x4E5F;&#x53EF;&#x4EE5;&#x662F;null(&#x6BD4;&#x5982;&#x8BF4;Object.prototype.__proto__&#x7684;&#x503C;&#x5C31;&#x662F;null).&#x8BE5;&#x5C5E;&#x6027;&#x53EF;&#x80FD;&#x4F1A;&#x5F15;&#x53D1;&#x4E00;&#x4E9B;&#x9519;&#x8BEF;,&#x56E0;&#x4E3A;&#x7528;&#x6237;&#x53EF;&#x80FD;&#x4F1A;&#x4E0D;&#x77E5;&#x9053;&#x8BE5;&#x5C5E;&#x6027;&#x7684;&#x7279;&#x6B8A;&#x6027;,&#x800C;&#x7ED9;&#x5B83;&#x8D4B;&#x503C;,&#x4ECE;&#x800C;&#x6539;&#x53D8;&#x4E86;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;. &#x5982;&#x679C;&#x9700;&#x8981;&#x8BBF;&#x95EE;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;,&#x5E94;&#x8BE5;&#x4F7F;&#x7528;&#x65B9;&#x6CD5;Object.getPrototypeOf." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto"><code>__proto__</code></a> ( <span title="This deprecated API should no longer be used, but will probably still work."><i class="icon-thumbs-down-alt"> </i></span> )&#xA0;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x4E5F;&#x4F1A;&#x4E0D;&#x80FD;&#x4FEE;&#x6539;&#x3002;</p>

<h2 name="Examples" id="Examples">&#x4F8B;&#x5B50;</h2>

<pre class="brush: js">var obj = {
    prop: function () {},
    foo: &quot;bar&quot;
  };

// &#x53EF;&#x4EE5;&#x6DFB;&#x52A0;&#x65B0;&#x7684;&#x5C5E;&#x6027;,&#x5DF2;&#x6709;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x53EF;&#x4EE5;&#x4FEE;&#x6539;,&#x53EF;&#x4EE5;&#x5220;&#x9664;
obj.foo = &quot;baz&quot;;
obj.lumpy = &quot;woof&quot;;
delete obj.prop;

var o = Object.seal(obj);

assert(o === obj);
assert(Object.isSealed(obj) === true);

// &#x4ECD;&#x7136;&#x53EF;&#x4EE5;&#x4FEE;&#x6539;&#x5BC6;&#x5C01;&#x5BF9;&#x8C61;&#x4E0A;&#x7684;&#x5C5E;&#x6027;&#x7684;&#x503C;.
obj.foo = &quot;quux&quot;;

// &#x4F46;&#x4F60;&#x4E0D;&#x80FD;&#x628A;&#x4E00;&#x4E2A;&#x6570;&#x636E;&#x5C5E;&#x6027;&#x91CD;&#x5B9A;&#x4E49;&#x6210;&#x8BBF;&#x95EE;&#x5668;&#x5C5E;&#x6027;.
Object.defineProperty(obj, &quot;foo&quot;, { get: function() { return &quot;g&quot;; } }); // &#x629B;&#x51FA;TypeError&#x5F02;&#x5E38;

// &#x73B0;&#x5728;,&#x4EFB;&#x4F55;&#x5C5E;&#x6027;&#x503C;&#x4EE5;&#x5916;&#x7684;&#x4FEE;&#x6539;&#x64CD;&#x4F5C;&#x90FD;&#x4F1A;&#x5931;&#x8D25;.
obj.quaxxor = &quot;the friendly duck&quot;; // &#x9759;&#x9ED8;&#x5931;&#x8D25;,&#x65B0;&#x5C5E;&#x6027;&#x6CA1;&#x6709;&#x6210;&#x529F;&#x6DFB;&#x52A0;
delete obj.foo; // &#x9759;&#x9ED8;&#x5931;&#x8D25;,&#x5C5E;&#x6027;&#x6CA1;&#x6709;&#x5220;&#x9664;&#x6210;&#x529F;

// ...&#x5728;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E2D;,&#x4F1A;&#x629B;&#x51FA;TypeError&#x5F02;&#x5E38;
function fail() {
  &quot;use strict&quot;;
  delete obj.foo; // &#x629B;&#x51FA;TypeError&#x5F02;&#x5E38;
  obj.sparky = &quot;arf&quot;; // &#x629B;&#x51FA;TypeError&#x5F02;&#x5E38;
}
fail();

// &#x4F7F;&#x7528;Object.defineProperty&#x65B9;&#x6CD5;&#x540C;&#x6837;&#x4F1A;&#x629B;&#x51FA;&#x5F02;&#x5E38;
Object.defineProperty(obj, &quot;ohai&quot;, { value: 17 }); // &#x629B;&#x51FA;TypeError&#x5F02;&#x5E38;
Object.defineProperty(obj, &quot;foo&quot;, { value: &quot;eit&quot; }); // &#x6210;&#x529F;&#x5C06;&#x539F;&#x6709;&#x503C;&#x6539;&#x53D8;</pre>

<h2 style="margin-bottom: 20px; line-height: 30px;" id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.2.3.8" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Object.seal</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.<br>
    Implemented in JavaScript 1.8.5</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-object.seal" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Object.seal</small></a></td>
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
 <li><strong><a title="Object.isSealed() &#x65B9;&#x6CD5;&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x662F;&#x5426;&#x662F;&#x5BC6;&#x5C01;&#x7684;&#xFF08;sealed&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed"><code>Object.isSealed</code></a></strong></li>
 <li><a title="Object.isFrozen() &#x65B9;&#x6CD5;&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x662F;&#x5426;&#x88AB;&#x51BB;&#x7ED3;&#xFF08;frozen&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen"><code>Object.isFrozen</code></a></li>
 <li><a title="Object.isExtensible() &#x65B9;&#x6CD5;&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x662F;&#x5426;&#x662F;&#x53EF;&#x6269;&#x5C55;&#x7684;&#xFF08;&#x662F;&#x5426;&#x53EF;&#x4EE5;&#x5728;&#x5B83;&#x4E0A;&#x9762;&#x6DFB;&#x52A0;&#x65B0;&#x7684;&#x5C5E;&#x6027;&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible"><code>Object.isExtensible</code></a></li>
 <li><a title="Object.preventExtensions() &#x65B9;&#x6CD5;&#x8BA9;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x53D8;&#x7684;&#x4E0D;&#x53EF;&#x6269;&#x5C55;&#xFF0C;&#x4E5F;&#x5C31;&#x662F;&#x6C38;&#x8FDC;&#x4E0D;&#x80FD;&#x518D;&#x6DFB;&#x52A0;&#x65B0;&#x7684;&#x5C5E;&#x6027;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions"><code>Object.preventExtensions</code></a></li>
 <li><a title="Object.freeze() &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x51BB;&#x7ED3;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#xFF0C;&#x51BB;&#x7ED3;&#x6307;&#x7684;&#x662F;&#x4E0D;&#x80FD;&#x5411;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x6DFB;&#x52A0;&#x65B0;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x4E0D;&#x80FD;&#x4FEE;&#x6539;&#x5176;&#x5DF2;&#x6709;&#x5C5E;&#x6027;&#x7684;&#x503C;&#xFF0C;&#x4E0D;&#x80FD;&#x5220;&#x9664;&#x5DF2;&#x6709;&#x5C5E;&#x6027;&#xFF0C;&#x4EE5;&#x53CA;&#x4E0D;&#x80FD;&#x4FEE;&#x6539;&#x8BE5;&#x5BF9;&#x8C61;&#x5DF2;&#x6709;&#x5C5E;&#x6027;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x6027;&#x3001;&#x53EF;&#x914D;&#x7F6E;&#x6027;&#x3001;&#x53EF;&#x5199;&#x6027;&#x3002;&#x4E5F;&#x5C31;&#x662F;&#x8BF4;&#xFF0C;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x6C38;&#x8FDC;&#x662F;&#x4E0D;&#x53EF;&#x53D8;&#x7684;&#x3002;&#x8BE5;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x88AB;&#x51BB;&#x7ED3;&#x7684;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze"><code>Object.freeze</code></a></li>
</ul>
                  
                
              