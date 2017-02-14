
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section> <div class="overheadIndicator nonStandard nonStandardHeader"> 
      <p><strong><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> &#x975E;&#x6807;&#x51C6;</strong><br> 
      &#x8BE5;&#x7279;&#x6027;&#x662F;&#x975E;&#x6807;&#x51C6;&#x7684;&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#xFF01;</p> 
      </div> <div class="overheadIndicator deprecated deprecatedHeader"> 
            <p><strong><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span> &#x5DF2;&#x5E9F;&#x5F03;</strong><br>&#x8BE5;&#x7279;&#x6027;&#x5DF2;&#x7ECF;&#x4ECE; Web &#x6807;&#x51C6;&#x4E2D;&#x5220;&#x9664;&#xFF0C;&#x867D;&#x7136;&#x4E00;&#x4E9B;&#x6D4F;&#x89C8;&#x5668;&#x76EE;&#x524D;&#x4ECD;&#x7136;&#x652F;&#x6301;&#x5B83;&#xFF0C;&#x4F46;&#x4E5F;&#x8BB8;&#x4F1A;&#x5728;&#x672A;&#x6765;&#x7684;&#x67D0;&#x4E2A;&#x65F6;&#x95F4;&#x505C;&#x6B62;&#x652F;&#x6301;&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x4F7F;&#x7528;&#x8BE5;&#x7279;&#x6027;&#x3002;</p> 
        </div></div>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p><code><strong>__lookupGetter__</strong></code> &#x65B9;&#x6CD5;&#x4F1A;&#x8FD4;&#x56DE;&#x5F53;&#x524D;&#x5BF9;&#x8C61;&#x4E0A;&#x6307;&#x5B9A;&#x5C5E;&#x6027;&#x7684;<strong>&#x5C5E;&#x6027;&#x8BFB;&#x53D6;&#x8BBF;&#x95EE;&#x5668;&#x51FD;&#x6570;&#xFF08;getter&#xFF09;&#x3002;</strong></p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><em>obj</em>.__lookupGetter__(<em>sprop</em>)</code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>sprop</code></dt>
 <dd>&#x5C5E;&#x6027;&#x540D;</dd>
</dl>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<pre class="brush: js">var obj = {
    get foo() {
        return Math.random() &gt; 0.5 ? &quot;foo&quot; : &quot;bar&quot;;
    }
};

obj.__lookupGetter__(&quot;foo&quot;) 
// (function (){return Math.random() &gt; 0.5 ? &quot;foo&quot; : &quot;bar&quot;}) </pre>

<h2 name="Description" id="Description">&#x9644;&#x6CE8;</h2>

<p><code><strong>__lookupGetter__</strong></code> &#x65B9;&#x6CD5;&#x662F;&#x975E;&#x6807;&#x51C6;&#x7684;&#xFF0C;&#x6211;&#x4EEC;&#x5E94;&#x8BE5;&#x4F7F;&#x7528;&#x6807;&#x51C6;&#x4E2D;&#x5B9A;&#x4E49;&#x7684;&#x65B9;&#x6CD5;&#x6765;&#x5B8C;&#x6210;&#x540C;&#x6837;&#x7684;&#x4E8B;&#x60C5;&#xFF0C;&#x90A3;&#x5C31;&#x662F; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor" title="Object.getOwnPropertyDescriptor() &#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x4E0A;&#x4E00;&#x4E2A;&#x81EA;&#x6709;&#x5C5E;&#x6027;&#x5BF9;&#x5E94;&#x7684;&#x5C5E;&#x6027;&#x63CF;&#x8FF0;&#x7B26;&#x3002;&#xFF08;&#x81EA;&#x6709;&#x5C5E;&#x6027;&#x6307;&#x7684;&#x662F;&#x76F4;&#x63A5;&#x8D4B;&#x4E88;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x4ECE;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x8FDB;&#x884C;&#x67E5;&#x627E;&#x7684;&#x5C5E;&#x6027;&#xFF09;"><code>Object.getOwnPropertyDescriptor()</code></a> &#x65B9;&#x6CD5;&#xFF1A;</p>

<pre class="brush: js">var obj = {
    get foo() {
        return Math.random() &gt; 0.5 ? &quot;foo&quot; : &quot;bar&quot;;
    }
};

Object.getOwnPropertyDescriptor(obj, &quot;foo&quot;).get
// (function (){return Math.random() &gt; 0.5 ? &quot;foo&quot; : &quot;bar&quot;})
</pre>

<p>&#x5982;&#x679C;&#x90A3;&#x4E2A;&#x8BBF;&#x95EE;&#x5668;&#x5C5E;&#x6027;&#x662F;&#x7EE7;&#x627F;&#x6765;&#x7684;&#xFF0C;&#x4F60;&#x8FD8;&#x9700;&#x8981;&#x4F7F;&#x7528; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf" title="Object.getPrototypeOf() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;&#xFF08;&#x4E5F;&#x5C31;&#x662F;&#x8BE5;&#x5BF9;&#x8C61;&#x5185;&#x90E8;&#x5C5E;&#x6027;[[Prototype]]&#x7684;&#x503C;&#xFF09;&#x3002;"><code>Object.getPrototypeOf()</code></a>&#xFF1A;</p>

<pre class="brush: js">var obj = {};
var prototype = Object.getPrototypeOf(obj);
Object.getOwnPropertyDescriptor(prototype, &quot;foo&quot;).get 
// function __proto__() {[native code]}
</pre>

<h2 name="Specifications" id="Specifications">&#x89C4;&#x8303;</h2>

<p>&#x4E0D;&#x5C5E;&#x4E8E;&#x4EFB;&#x4F55;&#x89C4;&#x8303;&#x3002;</p>

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
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
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
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Object.prototype.__lookupSetter__()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/get" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>get</code></a> &#x8FD0;&#x7B97;&#x7B26;</li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor" title="Object.getOwnPropertyDescriptor() &#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x4E0A;&#x4E00;&#x4E2A;&#x81EA;&#x6709;&#x5C5E;&#x6027;&#x5BF9;&#x5E94;&#x7684;&#x5C5E;&#x6027;&#x63CF;&#x8FF0;&#x7B26;&#x3002;&#xFF08;&#x81EA;&#x6709;&#x5C5E;&#x6027;&#x6307;&#x7684;&#x662F;&#x76F4;&#x63A5;&#x8D4B;&#x4E88;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x4ECE;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x8FDB;&#x884C;&#x67E5;&#x627E;&#x7684;&#x5C5E;&#x6027;&#xFF09;"><code>Object.getOwnPropertyDescriptor()</code></a> &#x548C; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf" title="Object.getPrototypeOf() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;&#xFF08;&#x4E5F;&#x5C31;&#x662F;&#x8BE5;&#x5BF9;&#x8C61;&#x5185;&#x90E8;&#x5C5E;&#x6027;[[Prototype]]&#x7684;&#x503C;&#xFF09;&#x3002;"><code>Object.getPrototypeOf()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__" title="__defineGetter__ &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x5C06;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x7ED1;&#x5B9A;&#x5728;&#x5F53;&#x524D;&#x5BF9;&#x8C61;&#x7684;&#x6307;&#x5B9A;&#x5C5E;&#x6027;&#x4E0A;&#xFF0C;&#x5F53;&#x90A3;&#x4E2A;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x88AB;&#x8BFB;&#x53D6;&#x65F6;&#xFF0C;&#x4F60;&#x6240;&#x7ED1;&#x5B9A;&#x7684;&#x51FD;&#x6570;&#x5C31;&#x4F1A;&#x88AB;&#x8C03;&#x7528;&#x3002;"><code>Object.prototype.__defineGetter__()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__" title="__defineSetter__ &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x5C06;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x7ED1;&#x5B9A;&#x5728;&#x5F53;&#x524D;&#x5BF9;&#x8C61;&#x7684;&#x6307;&#x5B9A;&#x5C5E;&#x6027;&#x4E0A;&#xFF0C;&#x5F53;&#x90A3;&#x4E2A;&#x5C5E;&#x6027;&#x88AB;&#x8D4B;&#x503C;&#x65F6;&#xFF0C;&#x4F60;&#x6240;&#x7ED1;&#x5B9A;&#x7684;&#x51FD;&#x6570;&#x5C31;&#x4F1A;&#x88AB;&#x8C03;&#x7528;&#x3002;"><code>Object.prototype.__defineSetter__()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters" title="JavaScript/Guide/Creating_New_Objects/Defining_Getters_and_Setters">JS &#x6307;&#x5357;&#xFF1A;&#x5B9A;&#x4E49;&#x8BBF;&#x95EE;&#x5668;&#x5C5E;&#x6027;</a></li>
</ul>
                  
                
              