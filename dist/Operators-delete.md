
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>&#xA0;<strong><code>delete</code> &#x64CD;&#x4F5C;&#x7B26;</strong>&#x7528;&#x6765;&#x5220;&#x9664;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">delete <em>expression</em>
</pre>

<p>&#xA0;<em>expression</em>&#xA0;&#x5E94;&#x8BE5;&#x662F;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#x5F15;&#x7528;&#xFF0C;&#x4F8B;&#x5982;&#xFF1A;</p>

<pre class="syntaxbox">delete&#xA0;<em>object.property</em>&#xA0;

delete&#xA0;<em>object</em>[&apos;<em>property</em>&apos;]
</pre>

<p>&#x5982;&#x679C; <em>expression</em> &#x7684;&#x8BA1;&#x7B97;&#x7ED3;&#x679C;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#x5F15;&#x7528;&#xFF0C;&#x90A3;&#x4E48;<code>&#xFF0C;delete&#x4E0D;&#x4F1A;&#x8D77;&#x4EFB;&#x4F55;&#x4F5C;&#x7528;&#x3002;</code></p>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>objectName</code></dt>
 <dd>&#x5BF9;&#x8C61;&#x540D;.</dd>
</dl>

<dl>
 <dt><code>property</code></dt>
 <dd>&#x9700;&#x8981;&#x5220;&#x9664;&#x7684;&#x5C5E;&#x6027;.</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x5728;<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode" class="new">&#x4E25;&#x683C;&#x6A21;&#x5F0F;</a>&#x4E2D;&#xFF0C;&#x5982;&#x679C;&#x5C5E;&#x6027;&#x662F;&#x4E00;&#x4E2A;&#x4E0D;&#x53EF;&#x914D;&#x7F6E;&#xFF08;non-configurable&#xFF09;&#x5C5E;&#x6027;&#xFF0C;&#x5220;&#x9664;&#x65F6;&#x4F1A;&#x629B;&#x51FA;&#x5F02;&#x5E38;&#xFF0C;&#x975E;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E0B;&#x8FD4;&#x56DE;&#xA0;<code>false</code>&#x3002;&#x5176;&#x4ED6;&#x60C5;&#x51B5;&#x90FD;&#x8FD4;&#x56DE; <code>true</code>&#x3002;</p>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>delete &#x64CD;&#x4F5C;&#x7B26;&#x4E0E;&#x76F4;&#x63A5;&#x91CA;&#x653E;&#x5185;&#x5B58;&#xFF08;&#x53EA;&#x80FD;&#x901A;&#x8FC7;&#x89E3;&#x9664;&#x5F15;&#x7528;&#x6765;&#x95F4;&#x63A5;&#x91CA;&#x653E;&#xFF09;&#x6CA1;&#x6709;&#x5173;&#x7CFB;&#x3002;&#x53EF;&#x67E5;&#x770B;<a href="https://developer.mozilla.org/zh-CNdocs/Web/JavaScript/Memory_Management">&#x5185;&#x5B58;&#x7BA1;&#x7406;</a>&#x9875;&#x9762;&#x3002;</p>

<p>&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; <code>delete</code> &#x64CD;&#x4F5C;&#x7B26;&#x6765;&#x5220;&#x9664;&#x4E00;&#x4E2A;&#x9690;&#x5F0F;&#x58F0;&#x660E;&#x7684;&#x5168;&#x5C40;&#x53D8;&#x91CF;,&#x4E5F;&#x5C31;&#x662F;&#x6CA1;&#x6709;&#x4F7F;&#x7528; <code>var</code> &#x5B9A;&#x4E49;&#x7684;&#x5168;&#x5C40;&#x53D8;&#x91CF;.&#x5168;&#x5C40;&#x53D8;&#x91CF;&#x5176;&#x5B9E;&#x662F;global&#x5BF9;&#x8C61;(window)&#x7684;&#x5C5E;&#x6027;.</p>

<p>&#x5982;&#x679C; <code>delete</code> &#x64CD;&#x4F5C;&#x7B26;&#x5220;&#x9664;&#x6210;&#x529F;&#xFF0C;&#x5219;&#x88AB;&#x5220;&#x9664;&#x7684;&#x5C5E;&#x6027;&#x5C06;&#x4ECE;&#x6240;&#x5C5E;&#x7684;&#x5BF9;&#x8C61;&#x4E0A;&#x5F7B;&#x5E95;&#x6D88;&#x5931;&#x3002;&#x7136;&#x540E;&#xFF0C;&#x5982;&#x679C;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x6709;&#x4E00;&#x4E2A;&#x540C;&#x540D;&#x5C5E;&#x6027;&#xFF0C;&#x5219;&#x8BE5;&#x5BF9;&#x8C61;&#x4F1A;&#x4ECE;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x7EE7;&#x627F;&#x8BE5;&#x540C;&#x540D;&#x5C5E;&#x6027;&#x3002;</p>

<h3 style="line-height: 24px; font-size: 1.71428571428571rem;" id="Temporal_dead_zone">Temporal dead zone</h3>

<p>&#x5728;ECMAScript 6&#x4E2D;&#xFF0C;&#x901A;&#x8FC7; <a style="font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace;" href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/const">const</a> &#x6216; <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let"><code>let</code></a> &#x58F0;&#x660E;&#x6307;&#x5B9A;&#x7684;&#xA0;&quot;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone_and_errors_with_let">temporal dead zone&quot;</a>&#xA0;(TDZ) &#x5BF9; delete &#x64CD;&#x4F5C;&#x7B26;&#x4E5F;&#x4F1A;&#x8D77;&#x4F5C;&#x7528;&#x3002;&#x56E0;&#x6B64;&#xFF0C;&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x5C06;&#x4F1A;&#x629B;&#x51FA;&#xA0;<a title="ReferenceError&#xFF08;&#x5F15;&#x7528;&#x9519;&#x8BEF;&#xFF09; &#x5BF9;&#x8C61;&#x8868;&#x660E;&#x4E00;&#x4E2A;&#x4E0D;&#x5B58;&#x5728;&#x7684;&#x53D8;&#x91CF;&#x88AB;&#x5F15;&#x7528;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError"><code>ReferenceError</code></a>&#x3002;</p>

<pre class="brush: js  language-js">function foo(){ 
  delete x;
  let x;
}

function bar() { 
  delete y; 
  const y; 
}</pre>

<p>&#x4E00;&#x4E9B;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#x4E0D;&#x80FD;&#x88AB;delete.&#xA0; ECMA 262 &#x89C4;&#x8303;&#x4E2D;&#x628A;&#x8FD9;&#x4E9B;&#x5C5E;&#x6027;&#x6807;&#x8BB0;&#x4E3A; <em>DontDelete</em>.</p>

<pre class="brush: js">x = 42;        // &#x9690;&#x5F0F;&#x58F0;&#x660E;&#x7684;&#x5168;&#x5C40;&#x53D8;&#x91CF;
var y = 43;    // &#x663E;&#x5F0F;&#x58F0;&#x660E;&#x7684;&#x5168;&#x5C40;&#x53D8;&#x91CF;
myobj = {
&#xA0; h: 4,    
  k: 5
}    

// &#x9690;&#x5F0F;&#x58F0;&#x660E;&#x7684;&#x5168;&#x5C40;&#x53D8;&#x91CF;&#x53EF;&#x4EE5;&#x88AB;&#x5220;&#x9664;
delete x;       // &#x8FD4;&#x56DE; true 

// &#x663E;&#x5F0F;&#x58F0;&#x660E;&#x7684;&#x5168;&#x5C40;&#x53D8;&#x91CF;&#x4E0D;&#x80FD;&#x88AB;&#x5220;&#x9664;,&#x8BE5;&#x5C5E;&#x6027;&#x4E0D;&#x53EF;&#x914D;&#x7F6E;&#xFF08;not configurable&#xFF09;
delete y;       // &#x8FD4;&#x56DE; false 

//&#x5185;&#x7F6E;&#x5BF9;&#x8C61;&#x7684;&#x5185;&#x7F6E;&#x5C5E;&#x6027;&#x4E0D;&#x80FD;&#x88AB;&#x5220;&#x9664;
delete Math.PI; // &#x8FD4;&#x56DE; false

//&#x7528;&#x6237;&#x5B9A;&#x4E49;&#x7684;&#x5C5E;&#x6027;&#x53EF;&#x4EE5;&#x88AB;&#x5220;&#x9664;
delete myobj.h; // &#x8FD4;&#x56DE; true 

// myobj &#x662F;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x53D8;&#x91CF;
//&#x56E0;&#x6B64;&#x53EF;&#x4EE5;&#x88AB;&#x5220;&#x9664;
delete myobj;   // &#x8FD4;&#x56DE; true

function f() {
  var z = 44;

  // delete doesn&apos;t affect local variable names
  delete z;     // returns false
}
</pre>

<p>&#x4F60;&#x4E0D;&#x80FD;&#x5220;&#x9664;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4ECE;&#x539F;&#x578B;&#x7EE7;&#x627F;&#x800C;&#x6765;&#x7684;&#x5C5E;&#x6027;(&#x4E0D;&#x8FC7;&#x4F60;&#x53EF;&#x4EE5;&#x4ECE;&#x539F;&#x578B;&#x4E0A;&#x76F4;&#x63A5;&#x5220;&#x6389;&#x5B83;).</p>

<pre class="brush: js"> function Foo(){}
 Foo.prototype.bar = 42;
 var foo = new Foo();

 // &#x65E0;&#x6548;&#x7684;&#x64CD;&#x4F5C;
 delete foo.bar;       
   
 // logs 42&#xFF0C;&#x7EE7;&#x627F;&#x7684;&#x5C5E;&#x6027;
 console.log(foo.bar);       
    
 // &#x76F4;&#x63A5;&#x5220;&#x9664;&#x539F;&#x578B;&#x4E0A;&#x7684;&#x5C5E;&#x6027;
 delete Foo.prototype.bar;
 
 // logs &quot;undefined&quot;&#xFF0C;&#x5DF2;&#x7ECF;&#x6CA1;&#x6709;&#x7EE7;&#x627F;&#x7684;&#x5C5E;&#x6027;
 console.log(foo.bar);           
</pre>

<h3 name="Deleting_array_elements" id="Deleting_array_elements">&#x5220;&#x9664;&#x6570;&#x7EC4;&#x5143;&#x7D20;</h3>

<p>&#x5F53;&#x4F60;&#x5220;&#x9664;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x65F6;&#xFF0C;&#x6570;&#x7EC4;&#x7684; length &#x5C5E;&#x6027;&#x5E76;&#x4E0D;&#x4F1A;&#x53D8;&#x5C0F;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x5982;&#x679C;&#x4F60;&#x5220;&#x9664;&#x4E86;a[3], a[4]&#x4ECD;&#x7136;&#x662F;a[4], a[3]&#x6210;&#x4E3A;undefined. &#x5373;&#x4FBF;&#x4F60;&#x5220;&#x9664;&#x4E86;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x4E5F;&#x662F;&#x5982;&#x6B64; (<code>delete a[a.length-1]</code>).</p>

<p>&#x5F53;&#x7528;&#xA0;<code>delete</code> &#x64CD;&#x4F5C;&#x7B26;&#x5220;&#x9664;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x65F6;&#xFF0C;&#x88AB;&#x5220;&#x9664;&#x7684;&#x5143;&#x7D20;&#x5DF2;&#x7ECF;&#x5B8C;&#x5168;&#x4E0D;&#x5C5E;&#x4E8E;&#x8BE5;&#x6570;&#x7EC4;&#x3002;&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x4E2D;&#xFF0C; trees[3] &#x88AB;&#x4F7F;&#x7528;<code>delete&#x5F7B;&#x5E95;&#x5220;&#x9664;</code>&#x3002;</p>

<pre class="brush: js">var trees = [&quot;redwood&quot;,&quot;bay&quot;,&quot;cedar&quot;,&quot;oak&quot;,&quot;maple&quot;];
delete trees[3];
if (3 in trees) {
   // &#x8FD9;&#x91CC;&#x4E0D;&#x4F1A;&#x88AB;&#x6267;&#x884C;
}
</pre>

<p>&#x5982;&#x679C;&#x4F60;&#x60F3;&#x8BA9;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x7684;&#x503C;&#x53D8;&#x4E3A; <code>undefined</code> &#x800C;&#x4E0D;&#x662F;&#x5220;&#x9664;&#x5B83;&#xFF0C;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#xA0;<code>undefined</code> <code>&#x7ED9;&#x5176;</code>&#x8D4B;&#x503C;&#x800C;&#x4E0D;&#x662F;&#x4F7F;&#x7528; <code>delete</code> &#x64CD;&#x4F5C;&#x7B26;&#x3002;&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x4E2D;&#xFF0C;trees[3] &#x88AB;&#x8D4B;&#x503C;&#x4E3A;<code>undefined</code>&#xFF0C;&#x4F46;&#x8BE5;&#x5143;&#x7D20;&#x4ECD;&#x7136;&#x5B58;&#x5728;&#x3002;</p>

<pre class="brush: js">var trees = [&quot;redwood&quot;,&quot;bay&quot;,&quot;cedar&quot;,&quot;oak&quot;,&quot;maple&quot;];
trees[3]=undefined;
if (3 in trees) {
   // &#x8FD9;&#x91CC;&#x4F1A;&#x88AB;&#x6267;&#x884C;
}
</pre>

<h2 style="margin-bottom: 20px; line-height: 30px; font-size: 2.14285714285714rem;" id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class=" standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-delete-operator" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">The delete Operator</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-delete-operator" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">The delete Operator</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-11.4.1" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">The delete Operator</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf#sec-11.4.1" class="external">ECMAScript 1st Edition (ECMA-262)<br><small lang="zh-CN">The delete Operator</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition. Implemented in JavaScript 1.2.</td>
  </tr>
 </tbody>
</table>

<h2 style="margin-bottom: 20px; line-height: 30px; font-size: 2.14285714285714rem;" id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<p></p><div class="htab"> 
    <a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a> 
    <ul> 
        <li class="selected"><a>Desktop</a></li> 
        <li><a>Mobile</a></li> 
    </ul> 
</div><p></p>

<div id="compat-desktop">
<table style="border-color: transparent;" class="compat-table">
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
  <tr>
   <td>Temporal dead zone</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><a title="Released on 2015-02-24." href="/en-US/Firefox/Releases/36">36</a> (36)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<div id="compat-mobile">
<table style="border-color: transparent;" class="compat-table">
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
  <tr>
   <td>Temporal dead zone</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>36.0 (36)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x8DE8;&#x6D4F;&#x89C8;&#x5668;&#x95EE;&#x9898;">&#x8DE8;&#x6D4F;&#x89C8;&#x5668;&#x95EE;&#x9898;</h2>

<p>&#x867D;&#x7136; ECMAScript &#x89C4;&#x5B9A;&#x4E86;&#x5BF9;&#x8C61;&#x7684;&#x904D;&#x5386;&#x987A;&#x5E8F;&#x662F;<strong>&#x7531;&#x5BF9;&#x8C61;&#x5B9A;&#x4E49;&#x65F6;&#x5C5E;&#x6027;&#x7684;&#x4E66;&#x5199;&#x987A;&#x5E8F;&#x51B3;&#x5B9A;&#x7684;&#x3002;&#xFF08;</strong>&#x8BD1;&#x8005;&#x6CE8;:ES5&#x5DF2;&#x7ECF;&#x5BF9;&#x904D;&#x5386;&#x673A;&#x5236;&#x505A;&#x4E86;&#x8C03;&#x6574;&#xFF0C;&#x91CD;&#x65B0;&#x89C4;&#x5B9A;:<strong>&#x5C5E;&#x6027;&#x904D;&#x5386;&#x7684;&#x987A;&#x5E8F;&#x662F;&#x6CA1;&#x6709;&#x88AB;&#x89C4;&#x5B9A;&#x7684;&#xFF09;&#xFF0C;</strong>&#xA0;&#x5927;&#x90E8;&#x5206;&#x6D4F;&#x89C8;&#x5668;&#x90FD;&#x4F9D;&#x7167;&#x8FD9;&#x4E2A;&#x89C4;&#x5B9A;&#xFF0C;&#x5148;&#x6DFB;&#x52A0;&#x7684;&#x5C5E;&#x6027;&#x5148;&#x88AB;&#x904D;&#x5386;&#xFF08;&#x9664;&#x4E86;&#x4ECE;&#x539F;&#x578B;&#x4E0A;&#x7EE7;&#x627F;&#x7684;&#x5C5E;&#x6027;&#xFF09;&#xFF08;&#x8BD1;&#x8005;&#x6CE8;:Chrome&#x548C;Opera&#x5DF2;&#x7ECF;&#x9075;&#x5FAA;&#x4E86;ES5&#x7684;&#x65B0;&#x89C4;&#x5B9A;,&#x5177;&#x4F53;<a title="http://w3help.org/zh-cn/causes/SJ9011" href="http://w3help.org/zh-cn/causes/SJ9011" class="external">&#x8BF7;&#x770B;</a>)&#x3002;&#x4F46;&#x662F;&#xFF0C;&#x5728; Internet Explorer &#x4E2D;&#xFF0C;&#x4F7F;&#x7528; <code>delete</code> &#x5220;&#x9664;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&#x540E;&#xFF0C;&#x5947;&#x602A;&#x7684;&#x4E8B;&#x60C5;&#x53D1;&#x751F;&#x4E86;&#xFF0C;&#x5982;&#x679C;&#x88AB;&#x5220;&#x9664;&#x7684;&#x5C5E;&#x6027;&#x91CD;&#x65B0;&#x88AB;&#x6DFB;&#x52A0;&#xFF0C;&#x90A3;&#x4E48;&#x904D;&#x5386;&#x65F6;&#xFF0C;&#x8BE5;&#x5C5E;&#x6027;&#x7684;&#x987A;&#x5E8F;&#x4F1A;&#x662F;&#x4E0A;&#x6B21;&#x5220;&#x9664;&#x524D;&#x7684;&#x90A3;&#x4E2A;&#x4F4D;&#x7F6E;&#x6240;&#x5E94;&#x8BE5;&#x6709;&#x7684;&#x987A;&#x5E8F;,&#x800C;&#x4E0D;&#x662F;&#x51FA;&#x73B0;&#x5728;&#x904D;&#x5386;&#x7684;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x3002;</p>

<p>&#x6240;&#x4EE5;&#xFF0C;&#x5982;&#x679C;&#x4F60;&#x60F3;&#x8BA9;&#x5BF9;&#x8C61;&#x7684;&#x904D;&#x5386;&#x987A;&#x5E8F;&#x517C;&#x5BB9;&#x6240;&#x6709;&#x7684;&#x6D4F;&#x89C8;&#x5668;&#xFF0C;&#x90A3;&#x4E48;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x4E24;&#x4E2A;&#x6570;&#x7EC4;&#x6765;&#x6A21;&#x62DF; (&#x4E00;&#x4E2A;&#x505A;&#x4E3A;keys&#xFF0C;&#x4E00;&#x4E2A;&#x505A;&#x4E3A; values)&#xFF0C; &#x6216;&#x8005;&#x5EFA;&#x7ACB;<span lang="zh-CN" class="short_text" id="result_box"><span>&#x4E00;&#x4E2A;</span><span>&#x7531;&#x5355;&#x4E00;</span><span>&#x5C5E;&#x6027;</span><span>&#x7684;</span><span>&#x5BF9;&#x8C61;&#x7EC4;&#x6210;&#x7684;</span><span>&#x6570;&#x7EC4;</span></span>&#xFF0C;&#x7B49;&#x3002;</p>

<h2 style="margin-bottom: 20px; line-height: 30px; font-size: 2.14285714285714rem;" name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="http://perfectionkills.com/understanding-delete/" class="external">&#x6DF1;&#x5165;&#x5206;&#x6790; delete</a></li>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty" class="new"><code>Reflect.deleteProperty()</code></a></li>
</ul>
                  
                
              