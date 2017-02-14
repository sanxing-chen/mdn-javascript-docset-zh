
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div style="background: #9CF49C;" class="overheadIndicator">
    <p><strong>&#x8BE5;&#x65B0;&#x7279;&#x6027;&#x5C5E;&#x4E8E; ECMAScript 2015&#xFF08;ES6&#xFF09;&#x89C4;&#x8303;&#xFF0C;&#x5728;&#x4F7F;&#x7528;&#x65F6;&#x8BF7;&#x6CE8;&#x610F;&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;&#x3002;</strong></p>
</div></div>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p>&#x5C06;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;(&#x5373;&#x5BF9;&#x8C61;&#x7684;<code>[[Prototype]]</code>&#x5185;&#x90E8;&#x5C5E;&#x6027;)&#x8BBE;&#x7F6E;&#x4E3A;&#x53E6;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x6216;&#x8005;<a title="&#x503C;&#xA0;null&#xA0;&#x662F;&#x4E00;&#x4E2A; JavaScript &#x5B57;&#x9762;&#x91CF;&#xFF0C;&#x8868;&#x793A;&#x7A7A;&#x503C;&#xFF08;null or an &quot;empty&quot; value&#xFF09;&#xFF0C;&#x5373;&#x6CA1;&#x6709;&#x5BF9;&#x8C61;&#x88AB;&#x5448;&#x73B0;&#xFF08;no object value is present&#xFF09;&#x3002;&#x5B83;&#x662F; JavaScript &#x539F;&#x59CB;&#x503C; &#x4E4B;&#x4E00;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null"><code>null</code></a>&#x3002;</p>

<div class="warning">
<p><strong>&#x8B66;&#x544A;:</strong> &#x7531;&#x4E8E;&#x73B0;&#x4EE3; JavaScript &#x5F15;&#x64CE;&#x4F18;&#x5316;&#x5C5E;&#x6027;&#x8BBF;&#x95EE;&#x6240;&#x5E26;&#x6765;&#x7684;&#x7279;&#x6027;&#x7684;&#x5173;&#x7CFB;&#xFF0C;&#x66F4;&#x6539;&#x5BF9;&#x8C61;&#x7684; <code>[[Prototype]]</code>&#x5728;<em><strong>&#x5404;&#x4E2A;</strong></em>&#x6D4F;&#x89C8;&#x5668;&#x548C; JavaScript &#x5F15;&#x64CE;&#x4E0A;&#x90FD;&#x662F;&#x4E00;&#x4E2A;&#x5F88;&#x6162;&#x7684;&#x64CD;&#x4F5C;&#x3002;&#x5176;&#x5728;&#x66F4;&#x6539;&#x7EE7;&#x627F;&#x7684;&#x6027;&#x80FD;&#x4E0A;&#x7684;&#x5F71;&#x54CD;&#x662F;&#x5FAE;&#x5999;&#x800C;&#x53C8;&#x5E7F;&#x6CDB;&#x7684;&#xFF0C;&#x8FD9;&#x4E0D;&#x4EC5;&#x4EC5;&#x9650;&#x4E8E; <code>obj.__proto__ = ...</code> &#x8BED;&#x53E5;&#x4E0A;&#x7684;&#x65F6;&#x95F4;&#x82B1;&#x8D39;&#xFF0C;&#x800C;&#x4E14;&#x53EF;&#x80FD;&#x4F1A;&#x5EF6;&#x4F38;&#x5230;<em><strong>&#x4EFB;&#x4F55;</strong></em>&#x4EE3;&#x7801;&#xFF0C;&#x90A3;&#x4E9B;&#x53EF;&#x4EE5;&#x8BBF;&#x95EE;<em><strong>&#x4EFB;&#x4F55;</strong></em><code>[[Prototype]]</code>&#x5DF2;&#x88AB;&#x66F4;&#x6539;&#x7684;&#x5BF9;&#x8C61;&#x7684;&#x4EE3;&#x7801;&#x3002;&#x5982;&#x679C;&#x4F60;&#x5173;&#x5FC3;&#x6027;&#x80FD;&#xFF0C;&#x4F60;&#x5E94;&#x8BE5;&#x907F;&#x514D;&#x8BBE;&#x7F6E;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684; <code>[[Prototype]]</code>&#x3002;&#x76F8;&#x53CD;&#xFF0C;&#x4F60;&#x5E94;&#x8BE5;&#x4F7F;&#x7528; <a title="Object.create() &#x65B9;&#x6CD5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x62E5;&#x6709;&#x6307;&#x5B9A;&#x539F;&#x578B;&#x548C;&#x82E5;&#x5E72;&#x4E2A;&#x6307;&#x5B9A;&#x5C5E;&#x6027;&#x7684;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create"><code>Object.create()</code></a>&#x6765;&#x521B;&#x5EFA;&#x5E26;&#x6709;&#x4F60;&#x60F3;&#x8981;&#x7684;<code>[[Prototype]]</code>&#x7684;&#x65B0;&#x5BF9;&#x8C61;&#x3002;</p>
</div>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>Object.setPrototypeOf(<em>obj, prototype</em>)</code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt>obj</dt>
 <dd>&#x5C06;&#x88AB;&#x8BBE;&#x7F6E;&#x539F;&#x578B;&#x7684;&#x5BF9;&#x8C61;.</dd>
 <dt>prototype</dt>
 <dd>&#x8BE5;&#x5BF9;&#x8C61;&#x65B0;&#x7684;&#x539F;&#x578B;(&#x53EF;&#x4EE5;&#x662F;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x6216;&#x8005;<a title="&#x503C;&#xA0;null&#xA0;&#x662F;&#x4E00;&#x4E2A; JavaScript &#x5B57;&#x9762;&#x91CF;&#xFF0C;&#x8868;&#x793A;&#x7A7A;&#x503C;&#xFF08;null or an &quot;empty&quot; value&#xFF09;&#xFF0C;&#x5373;&#x6CA1;&#x6709;&#x5BF9;&#x8C61;&#x88AB;&#x5448;&#x73B0;&#xFF08;no object value is present&#xFF09;&#x3002;&#x5B83;&#x662F; JavaScript &#x539F;&#x59CB;&#x503C; &#x4E4B;&#x4E00;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null"><code>null</code></a>).</dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x5982;&#x679C;&#x5BF9;&#x8C61;&#x7684;[[Prototype]]&#x88AB;&#x4FEE;&#x6539;&#x6210;&#x4E0D;&#x53EF;&#x6269;&#x5C55;(&#x901A;&#x8FC7;&#xA0;<a title="Object.isExtensible() &#x65B9;&#x6CD5;&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x662F;&#x5426;&#x662F;&#x53EF;&#x6269;&#x5C55;&#x7684;&#xFF08;&#x662F;&#x5426;&#x53EF;&#x4EE5;&#x5728;&#x5B83;&#x4E0A;&#x9762;&#x6DFB;&#x52A0;&#x65B0;&#x7684;&#x5C5E;&#x6027;&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible"><code>Object.isExtensible()</code></a>&#x67E5;&#x770B;)&#xFF0C;&#x5C31;&#x4F1A;&#x629B;&#x51FA;&#xA0;<a title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a>&#x5F02;&#x5E38;&#x3002;&#x5982;&#x679C;<code>prototype</code>&#x53C2;&#x6570;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x6216;&#x8005;<a title="&#x503C;&#xA0;null&#xA0;&#x662F;&#x4E00;&#x4E2A; JavaScript &#x5B57;&#x9762;&#x91CF;&#xFF0C;&#x8868;&#x793A;&#x7A7A;&#x503C;&#xFF08;null or an &quot;empty&quot; value&#xFF09;&#xFF0C;&#x5373;&#x6CA1;&#x6709;&#x5BF9;&#x8C61;&#x88AB;&#x5448;&#x73B0;&#xFF08;no object value is present&#xFF09;&#x3002;&#x5B83;&#x662F; JavaScript &#x539F;&#x59CB;&#x503C; &#x4E4B;&#x4E00;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null"><code>null</code></a>(&#x4F8B;&#x5982;&#xFF0C;&#x6570;&#x5B57;&#xFF0C;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;boolean&#xFF0C;&#x6216;&#x8005;&#xA0;<a title="undefined&#x6709;&#x591A;&#x91CD;&#x89D2;&#x8272;,&#x901A;&#x5E38;&#x60C5;&#x51B5;&#x4E0B;,&#x6211;&#x4EEC;&#x6240;&#x8BF4;&#x7684;undefined&#x90FD;&#x6307;&#x7684;&#x662F;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&quot;undefined&quot;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined"><code>undefined</code></a>)&#xFF0C;&#x5219;&#x4EC0;&#x4E48;&#x90FD;&#x4E0D;&#x505A;&#x3002;&#x5426;&#x5219;&#xFF0C;&#x8BE5;&#x65B9;&#x6CD5;&#x5C06;<code>obj</code>&#x7684;<code>[[Prototype]]</code>&#x4FEE;&#x6539;&#x4E3A;&#x65B0;&#x7684;&#x503C;&#x3002;</p>

<p><code>Object.setPrototypeOf()&#x662F;</code>ECMAScript 6&#x6700;&#x65B0;&#x8349;&#x6848;&#x4E2D;&#x7684;&#x65B9;&#x6CD5;&#xFF0C;&#x76F8;&#x5BF9;&#x4E8E;&#xA0;<a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__proto__" class="new"><code>Object.prototype.__proto__</code></a> &#xFF0C;&#x5B83;&#x88AB;&#x8BA4;&#x4E3A;&#x662F;&#x4FEE;&#x6539;&#x5BF9;&#x8C61;&#x539F;&#x578B;&#x66F4;&#x5408;&#x9002;&#x7684;&#x65B9;&#x6CD5;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<pre><code>var dict = Object.setPrototypeOf({}, null);</code></pre>

<h2 name="Notes" id="Notes">Polyfill</h2>

<p><span lang="en" class="short_text" id="result_box"><span>&#x6211;&#x4EEC;&#x5FC5;&#x987B;&#x501F;&#x52A9;&#x975E;&#x6807;&#x51C6;&#x7684;</span> </span>&#xA0;<a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__proto__" class="new"><code>Object.prototype.__proto__</code></a>&#x624D;&#x80FD;&#x5B9E;&#x73B0;&#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;.</p>

<pre class="brush: js">//chrome&#x548C;&#x706B;&#x72D0;&#x4E2D;&#x6709;&#x6548;&#xFF0C;IE&#x65E0;&#x6548;
Object.setPrototypeOf = Object.setPrototypeOf || function (obj, proto) {
  obj.__proto__ = proto;
  return obj; 
}</pre>

<h2 name="Notes" id="Notes">&#xA0;</h2>

<h2 id="&#x6DFB;&#x52A0;&#x539F;&#x578B;&#x94FE;">&#x6DFB;&#x52A0;&#x539F;&#x578B;&#x94FE;</h2>

<p>&#x901A;&#x8FC7;<code>Object.getPrototypeOf()&#x548C;</code>&#xA0;<a title="Object.prototype&#x7684;__proto__&#x5C5E;&#x6027;&#x662F;&#x4E00;&#x4E2A;&#x8BBF;&#x95EE;&#x5668;&#x5C5E;&#x6027;&#xFF08;&#x4E00;&#x4E2A;getter&#x51FD;&#x6570;&#x548C;&#x4E00;&#x4E2A;setter&#x51FD;&#x6570;&#xFF09;&#xFF0C;&#x5B83;&#x516C;&#x5F00;&#x8BBF;&#x95EE;&#x5B83;&#x7684;&#x5BF9;&#x8C61;&#x7684;&#x5185;&#x90E8;[[Prototype]]&#xFF08;&#x5BF9;&#x8C61;&#x6216;null&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto"><code>Object.prototype.__proto__</code></a>&#x7684;&#x7EC4;&#x5408;&#xFF0C;&#x53EF;&#x4EE5;&#x7ED9;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x539F;&#x578B;&#x5BF9;&#x8C61;&#x6DFB;&#x52A0;&#x5B8C;&#x6574;&#x7684;&#x539F;&#x578B;&#x94FE;</p>

<pre class="brush: js">/**
*** Object.appendChain(@object, @prototype)
*
* Appends the first non-native prototype of a chain to a new prototype.
* Returns @object (if it was a primitive value it will transformed into an object).
*
*** Object.appendChain(@object [, &quot;@arg_name_1&quot;, &quot;@arg_name_2&quot;, &quot;@arg_name_3&quot;, &quot;...&quot;], &quot;@function_body&quot;)
*** Object.appendChain(@object [, &quot;@arg_name_1, @arg_name_2, @arg_name_3, ...&quot;], &quot;@function_body&quot;)
*
* Appends the first non-native prototype of a chain to the native Function.prototype object, then appends a
* new Function([&quot;@arg&quot;(s)], &quot;@function_body&quot;) to that chain.
* Returns the function.
*
**/

Object.appendChain = function(oChain, oProto) {
  if (arguments.length &lt; 2) { 
    throw new TypeError(&apos;Object.appendChain - Not enough arguments&apos;);
  }
  if (typeof oProto === &apos;number&apos; || typeof oProto === &apos;boolean&apos;) {
    throw new TypeError(&apos;second argument to Object.appendChain must be an object or a string&apos;);
  }

  var oNewProto = oProto,
&#xA0;     oReturn, 
&#xA0;     o2nd, 
&#xA0;     oLast;
      
  oReturn = o2nd = oLast = oChain instanceof this ? oChain : new oChain.constructor(oChain);

  for (var o1st = this.getPrototypeOf(o2nd);
    o1st !== Object.prototype &amp;&amp; o1st !== Function.prototype;
    o1st = this.getPrototypeOf(o2nd)
  ) {
    o2nd = o1st;
  }

  if (oProto.constructor === String) {
    oNewProto = Function.prototype;
    oReturn = Function.apply(null, Array.prototype.slice.call(arguments, 1));
    this.setPrototypeOf(oReturn, oLast);
  }

  this.setPrototypeOf(o2nd, oNewProto);
  return oReturn;
}</pre>

<h2 id="&#x4F7F;&#x7528;">&#x4F7F;&#x7528;</h2>

<p>&#x4F8B;&#x5B50;&#x4E00;&#xFF1A;&#x7ED9;&#x4E00;&#x4E2A;&#x539F;&#x578B;&#x6DFB;&#x52A0;&#x94FE;</p>

<pre class="brush: js">function Mammal() {
  this.isMammal = &apos;yes&apos;;
}

function MammalSpecies(sMammalSpecies) {
  this.species = sMammalSpecies;
}

MammalSpecies.prototype = new Mammal();
MammalSpecies.prototype.constructor = MammalSpecies;

var oCat = new MammalSpecies(&apos;Felis&apos;);

console.log(oCat.isMammal); // &apos;yes&apos;

function Animal() {
  this.breathing = &apos;yes&apos;;
}

Object.appendChain(oCat, new Animal());

console.log(oCat.breathing); // &apos;yes&apos;</pre>

<p>&#x4F8B;&#x5B50;&#x4E8C;&#xFF1A;&#x5C06;&#x4E00;&#x4E2A;&#x57FA;&#x672C;&#x7C7B;&#x578B;&#x8F6C;&#x5316;&#x4E3A;&#x5BF9;&#x5E94;&#x7684;&#x5BF9;&#x8C61;&#x7C7B;&#x578B;&#x5E76;&#x6DFB;&#x52A0;&#x5230;&#x539F;&#x578B;&#x94FE;&#x4E0A;</p>

<pre class="brush: js">function Symbol() {
  this.isSymbol = &apos;yes&apos;;
}

var nPrime = 17;

console.log(typeof nPrime); // &apos;number&apos;

var oPrime = Object.appendChain(nPrime, new Symbol());

console.log(oPrime); // &apos;17&apos;
console.log(oPrime.isSymbol); // &apos;yes&apos;
console.log(typeof oPrime); // &apos;object&apos;</pre>

<p>&#x4F8B;&#x5B50;&#x4E09;&#xFF1A;&#x7ED9;&#x51FD;&#x6570;&#x7C7B;&#x578B;&#x7684;&#x5BF9;&#x8C61;&#x6DFB;&#x52A0;&#x4E00;&#x4E2A;&#x94FE;&#xFF0C;&#x5E76;&#x6DFB;&#x52A0;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x65B9;&#x6CD5;&#x5230;&#x90A3;&#x4E2A;&#x94FE;&#x4E0A;</p>

<pre class="brush: js">function Person(sName) {
  this.identity = sName;
}

var george = Object.appendChain(new Person(&apos;George&apos;), &apos;console.log(&quot;Hello guys!!&quot;);&apos;);

console.log(george.identity); // &apos;George&apos;
george(); // &apos;Hello guys!!&apos;</pre>

<h2 id="&#x8BF4;&#x660E;&#x4E66;">&#x8BF4;&#x660E;&#x4E66;</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">&#x8BF4;&#x660E;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x5907;&#x6CE8;</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-object.setprototypeof" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Object.setProtoypeOf</small></a></td>
   <td>
    <table>
     <tbody>
      <tr>
       <td><span class="spec-Standard">Standard</span></td>
      </tr>
     </tbody>
    </table>
   </td>
   <td>Initial definition.</td>
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
   <td>34</td>
   <td><a title="Released on 2014-07-22." href="/en-US/Firefox/Releases/31">31</a> (31)</td>
   <td>11</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
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
   <td>31.0 (31)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="&#x9759;&#x6001;&#x65B9;&#x6CD5; Reflect.setPrototypeOf() &#x4E0E; Object.setPrototypeOf() &#x65B9;&#x6CD5;&#x662F;&#x4E00;&#x81F4;&#x7684;&#x3002;&#x5B83;&#x5C06;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B; &#xFF08;&#x5373;&#xFF0C;&#x5185;&#x90E8;&#x7684;[[Prototype]]&#xA0;&#x5C5E;&#x6027;&#xFF09;&#x8BBE;&#x7F6E;&#x4E3A;&#x53E6;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x6216;&#x4E3A;&#xA0;null&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf"><code>Reflect.setPrototypeOf()</code></a></li>
 <li><a title="isPrototypeOf() &#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x6D4B;&#x8BD5;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x662F;&#x5426;&#x5B58;&#x5728;&#x4E8E;&#x53E6;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf"><code>Object.prototype.isPrototypeOf()</code></a></li>
 <li><a title="Object.getPrototypeOf() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;&#xFF08;&#x4E5F;&#x5C31;&#x662F;&#x8BE5;&#x5BF9;&#x8C61;&#x5185;&#x90E8;&#x5C5E;&#x6027;[[Prototype]]&#x7684;&#x503C;&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf"><code>Object.getPrototypeOf()</code></a></li>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__proto__" class="new"><code>Object.prototype.__proto__</code></a>&#xA0;</li>
</ul>
                  
                
              