
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><strong><code>Object.freeze()</code></strong> &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x51BB;&#x7ED3;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#xFF0C;&#x51BB;&#x7ED3;&#x6307;&#x7684;&#x662F;&#x4E0D;&#x80FD;&#x5411;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x6DFB;&#x52A0;&#x65B0;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x4E0D;&#x80FD;&#x4FEE;&#x6539;&#x5176;&#x5DF2;&#x6709;&#x5C5E;&#x6027;&#x7684;&#x503C;&#xFF0C;&#x4E0D;&#x80FD;&#x5220;&#x9664;&#x5DF2;&#x6709;&#x5C5E;&#x6027;&#xFF0C;&#x4EE5;&#x53CA;&#x4E0D;&#x80FD;&#x4FEE;&#x6539;&#x8BE5;&#x5BF9;&#x8C61;&#x5DF2;&#x6709;&#x5C5E;&#x6027;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x6027;&#x3001;&#x53EF;&#x914D;&#x7F6E;&#x6027;&#x3001;&#x53EF;&#x5199;&#x6027;&#x3002;&#x4E5F;&#x5C31;&#x662F;&#x8BF4;&#xFF0C;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x6C38;&#x8FDC;&#x662F;&#x4E0D;&#x53EF;&#x53D8;&#x7684;&#x3002;&#x8BE5;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x88AB;&#x51BB;&#x7ED3;&#x7684;&#x5BF9;&#x8C61;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>Object.freeze(<em>obj</em>)</code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>obj</code></dt>
 <dd>&#x5C06;&#x8981;&#x88AB;&#x51BB;&#x7ED3;&#x7684;&#x5BF9;&#x8C61;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x88AB;&#x51BB;&#x7ED3;&#x7684;&#x5BF9;&#x8C61;&#x3002;</p>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x51BB;&#x7ED3;&#x5BF9;&#x8C61;&#x7684;&#x6240;&#x6709;&#x81EA;&#x8EAB;&#x5C5E;&#x6027;&#x90FD;&#x4E0D;&#x53EF;&#x80FD;&#x4EE5;&#x4EFB;&#x4F55;&#x65B9;&#x5F0F;&#x88AB;&#x4FEE;&#x6539;&#x3002;&#x4EFB;&#x4F55;&#x5C1D;&#x8BD5;&#x4FEE;&#x6539;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x64CD;&#x4F5C;&#x90FD;&#x4F1A;&#x5931;&#x8D25;&#xFF0C;&#x53EF;&#x80FD;&#x662F;&#x9759;&#x9ED8;&#x5931;&#x8D25;&#xFF0C;&#x4E5F;&#x53EF;&#x80FD;&#x4F1A;&#x629B;&#x51FA;&#x5F02;&#x5E38;&#xFF08;<a title="JavaScript/Strict mode" href="/zh-CN/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode" class="new">&#x4E25;&#x683C;&#x6A21;&#x5F0F;</a>&#x4E2D;&#xFF09;&#x3002;</p>

<p>&#x6570;&#x636E;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x4E0D;&#x53EF;&#x66F4;&#x6539;&#xFF0C;&#x8BBF;&#x95EE;&#x5668;&#x5C5E;&#x6027;&#xFF08;&#x6709;getter&#x548C;setter&#xFF09;&#x4E5F;&#x540C;&#x6837;&#xFF08;&#x4F46;&#x7531;&#x4E8E;&#x662F;&#x51FD;&#x6570;&#x8C03;&#x7528;&#xFF0C;&#x7ED9;&#x4EBA;&#x7684;&#x9519;&#x89C9;&#x662F;&#x8FD8;&#x662F;&#x53EF;&#x4EE5;&#x4FEE;&#x6539;&#x8FD9;&#x4E2A;&#x5C5E;&#x6027;&#xFF09;&#x3002;&#x5982;&#x679C;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x662F;&#x4E2A;&#x5BF9;&#x8C61;&#xFF0C;&#x5219;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x4E2D;&#x7684;&#x5C5E;&#x6027;&#x662F;&#x53EF;&#x4EE5;&#x4FEE;&#x6539;&#x7684;&#xFF0C;&#x9664;&#x975E;&#x5B83;&#x4E5F;&#x662F;&#x4E2A;&#x51BB;&#x7ED3;&#x5BF9;&#x8C61;&#x3002;</p>

<h2 name="Examples" id="Examples">&#x4F8B;&#x5B50;</h2>

<pre class="brush: js">var obj = {
  prop: function (){},
  foo: &quot;bar&quot;
};

// &#x53EF;&#x4EE5;&#x6DFB;&#x52A0;&#x65B0;&#x7684;&#x5C5E;&#x6027;,&#x5DF2;&#x6709;&#x7684;&#x5C5E;&#x6027;&#x53EF;&#x4EE5;&#x88AB;&#x4FEE;&#x6539;&#x6216;&#x5220;&#x9664;
obj.foo = &quot;baz&quot;;
obj.lumpy = &quot;woof&quot;;
delete obj.prop;

var o = Object.freeze(obj);

assert(Object.isFrozen(obj) === true);

// &#x73B0;&#x5728;&#x4EFB;&#x4F55;&#x4FEE;&#x6539;&#x64CD;&#x4F5C;&#x90FD;&#x4F1A;&#x5931;&#x8D25;
obj.foo = &quot;quux&quot;; // &#x9759;&#x9ED8;&#x5931;&#x8D25;
obj.quaxxor = &quot;the friendly duck&quot;; // &#x9759;&#x9ED8;&#x5931;&#x8D25;,&#x5E76;&#x6CA1;&#x6709;&#x6210;&#x529F;&#x6DFB;&#x52A0;&#x4E0A;&#x65B0;&#x7684;&#x5C5E;&#x6027;

// ...&#x5728;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E2D;&#x4F1A;&#x629B;&#x51FA;TypeError&#x5F02;&#x5E38;
function fail(){
  &quot;use strict&quot;;
  obj.foo = &quot;sparky&quot;; // &#x629B;&#x51FA;TypeError&#x5F02;&#x5E38;
  delete obj.quaxxor; // &#x629B;&#x51FA;TypeError&#x5F02;&#x5E38;
  obj.sparky = &quot;arf&quot;; // &#x629B;&#x51FA;TypeError&#x5F02;&#x5E38;
}

fail();

// &#x4F7F;&#x7528;Object.defineProperty&#x65B9;&#x6CD5;&#x540C;&#x6837;&#x4F1A;&#x629B;&#x51FA;TypeError&#x5F02;&#x5E38;
Object.defineProperty(obj, &quot;ohai&quot;, { value: 17 }); // &#x629B;&#x51FA;TypeError&#x5F02;&#x5E38;
Object.defineProperty(obj, &quot;foo&quot;, { value: &quot;eit&quot; }); // &#x629B;&#x51FA;TypeError&#x5F02;&#x5E38;</pre>

<p>&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x6F14;&#x793A;&#x4E86;&#x4E00;&#x4E2A;&#x51BB;&#x7ED3;&#x5BF9;&#x8C61;&#x4E2D;&#x7684;&#x975E;&#x51BB;&#x7ED3;&#x5BF9;&#x8C61;&#x662F;&#x53EF;&#x4EE5;&#x88AB;&#x4FEE;&#x6539;&#x7684;&#xFF08;&#x6D45;&#x51BB;&#x7ED3;&#xFF09;&#x3002;</p>

<pre class="brush: js">obj = {
  internal : {}
};

Object.freeze(obj);
obj.internal.a = &quot;aValue&quot;;

obj.internal.a // &quot;aValue&quot;

// &#x60F3;&#x8BA9;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x53D8;&#x7684;&#x5B8C;&#x5168;&#x51BB;&#x7ED3;,&#x51BB;&#x7ED3;&#x6240;&#x6709;&#x5BF9;&#x8C61;&#x4E2D;&#x7684;&#x5BF9;&#x8C61;,&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x4E0B;&#x9762;&#x7684;&#x51FD;&#x6570;.

function deepFreeze (o) {
  var prop, propKey;
  Object.freeze(o); // &#x9996;&#x5148;&#x51BB;&#x7ED3;&#x7B2C;&#x4E00;&#x5C42;&#x5BF9;&#x8C61;.
  for (propKey in o) {
    prop = o[propKey];
    if (!o.hasOwnProperty(propKey) || !(typeof prop === &quot;object&quot;) || Object.isFrozen(prop)) {
      // &#x8DF3;&#x8FC7;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x7684;&#x5C5E;&#x6027;&#x548C;&#x5DF2;&#x51BB;&#x7ED3;&#x7684;&#x5BF9;&#x8C61;.
      continue;
    }

    deepFreeze(prop); //&#x9012;&#x5F52;&#x8C03;&#x7528;.
  }
}

obj2 = {
  internal : {}
};

deepFreeze(obj2);
obj2.internal.a = &quot;anotherValue&quot;;
obj2.internal.a; // undefined</pre>

<h2 style="margin-bottom: 20px; line-height: 30px;" id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.2.3.9" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Object.freeze</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.<br>
    Implemented in JavaScript 1.8.5</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-object.freeze" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Object.freeze</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-object.freeze" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Object.freeze</small></a></td>
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
   <th>Firefox (Gecko)</th>
   <th>Chrome</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><a title="Released on 2011-03-22." href="/en-US/Firefox/Releases/4">4.0</a> (2)</td>
   <td>6</td>
   <td>9</td>
   <td>12</td>
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
 <li><a title="Object.isFrozen() &#x65B9;&#x6CD5;&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x662F;&#x5426;&#x88AB;&#x51BB;&#x7ED3;&#xFF08;frozen&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen"><code>Object.isFrozen</code></a></li>
 <li><a title="Object.preventExtensions() &#x65B9;&#x6CD5;&#x8BA9;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x53D8;&#x7684;&#x4E0D;&#x53EF;&#x6269;&#x5C55;&#xFF0C;&#x4E5F;&#x5C31;&#x662F;&#x6C38;&#x8FDC;&#x4E0D;&#x80FD;&#x518D;&#x6DFB;&#x52A0;&#x65B0;&#x7684;&#x5C5E;&#x6027;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions"><code>Object.preventExtensions</code></a></li>
 <li><a title="Object.isExtensible() &#x65B9;&#x6CD5;&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x662F;&#x5426;&#x662F;&#x53EF;&#x6269;&#x5C55;&#x7684;&#xFF08;&#x662F;&#x5426;&#x53EF;&#x4EE5;&#x5728;&#x5B83;&#x4E0A;&#x9762;&#x6DFB;&#x52A0;&#x65B0;&#x7684;&#x5C5E;&#x6027;&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible"><code>Object.isExtensible</code></a></li>
 <li><a title="Object.seal() &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x8BA9;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5BC6;&#x5C01;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x88AB;&#x5BC6;&#x5C01;&#x540E;&#x7684;&#x5BF9;&#x8C61;&#x3002;&#x5BC6;&#x5C01;&#x5BF9;&#x8C61;&#x662F;&#x6307;&#x90A3;&#x4E9B;&#x4E0D;&#x80FD;&#x6DFB;&#x52A0;&#x65B0;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x4E0D;&#x80FD;&#x5220;&#x9664;&#x5DF2;&#x6709;&#x5C5E;&#x6027;&#xFF0C;&#x4EE5;&#x53CA;&#x4E0D;&#x80FD;&#x4FEE;&#x6539;&#x5DF2;&#x6709;&#x5C5E;&#x6027;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x6027;&#x3001;&#x53EF;&#x914D;&#x7F6E;&#x6027;&#x3001;&#x53EF;&#x5199;&#x6027;&#xFF0C;&#x4F46;&#x53EF;&#x80FD;&#x53EF;&#x4EE5;&#x4FEE;&#x6539;&#x5DF2;&#x6709;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x7684;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/seal"><code>Object.seal</code></a></li>
 <li><a title="Object.isSealed() &#x65B9;&#x6CD5;&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x662F;&#x5426;&#x662F;&#x5BC6;&#x5C01;&#x7684;&#xFF08;sealed&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed"><code>Object.isSealed</code></a></li>
</ul>
                  
                
              