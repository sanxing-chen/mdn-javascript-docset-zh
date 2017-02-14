
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section> <div class="overheadIndicator deprecated deprecatedHeader"> 
            <p><strong><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span> &#x5DF2;&#x5E9F;&#x5F03;</strong><br>&#x8BE5;&#x7279;&#x6027;&#x5DF2;&#x7ECF;&#x4ECE; Web &#x6807;&#x51C6;&#x4E2D;&#x5220;&#x9664;&#xFF0C;&#x867D;&#x7136;&#x4E00;&#x4E9B;&#x6D4F;&#x89C8;&#x5668;&#x76EE;&#x524D;&#x4ECD;&#x7136;&#x652F;&#x6301;&#x5B83;&#xFF0C;&#x4F46;&#x4E5F;&#x8BB8;&#x4F1A;&#x5728;&#x672A;&#x6765;&#x7684;&#x67D0;&#x4E2A;&#x65F6;&#x95F4;&#x505C;&#x6B62;&#x652F;&#x6301;&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x4F7F;&#x7528;&#x8BE5;&#x7279;&#x6027;&#x3002;</p> 
        </div></div>

<div><code><strong>__lookupSetter__</strong></code> &#x65B9;&#x6CD5;&#x662F;&#x7528;&#x6765;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x67D0;&#x4E2A;&#x5C5E;&#x6027;&#x4E0A;&#x7ED1;&#x5B9A;&#x4E86;&#xA0;setter &#xFF08;&#x8BBE;&#x7F6E;&#x5668;&#xFF09;&#x7684;&#x94A9;&#x5B50;&#x51FD;&#x6570;&#x7684;&#x5F15;&#x7528;&#x3002;</div>

<div>&#xA0;</div>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>obj</var>.__lookupSetter__(<var>sprop</var>)</code></pre>

<h3 id="&#x53C2;&#x6570;&#x8BF4;&#x660E;">&#x53C2;&#x6570;&#x8BF4;&#x660E;</h3>

<dl>
 <dt><code>sprop</code></dt>
 <dd>&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x7C7B;&#x578B;&#xFF0C;&#x8868;&#x793A;&#x8981;&#x8FD4;&#x56DE;&#x7684; setter &#x94A9;&#x5B50;&#x7684;&#x51FD;&#x6570;&#x540D;&#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x4E00;&#x4E2A;&#x7ED1;&#x5B9A;&#x4E86;setter&#x7684;&#x7279;&#x6B8A;&#x5C5E;&#x6027;&#x7684;&#x51FD;&#x6570;&#x5F15;&#x7528;&#x3002;</p>

<h2 id="&#x8BE6;&#x7EC6;&#x63CF;&#x8FF0;">&#x8BE6;&#x7EC6;&#x63CF;&#x8FF0;</h2>

<p>&#x5982;&#x679C;&#x4E00;&#x4E2A; setter &#x88AB;&#x5B9A;&#x4E49;&#x5728;&#x4E86;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#x4E0A;&#xFF0C;&#x5219;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x901A;&#x8FC7;&#x8BE5;&#x5C5E;&#x6027;&#x6765;&#x83B7;&#x53D6;&#x5F15;&#x7528; setter &#x6240;&#x8BBE;&#x7F6E;&#x7684;&#x94A9;&#x5B50;&#x7684;&#x51FD;&#x6570;&#xFF0C;&#x56E0;&#x4E3A;&#x8BE5;&#x5C5E;&#x6027;&#x662F;&#x8BE5;&#x51FD;&#x6570;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#xFF0C;&#x4F46;&#xFF0C;__lookupSetter__ &#x53EF;&#x4EE5;&#x88AB;&#x7528;&#x6765;&#x83B7;&#x53D6;&#x5BF9; setter &#x51FD;&#x6570;&#x7684;&#x5F15;&#x7528;&#x3002;</p>

<p>&#x4E0D;&#x8FC7;&#x73B0;&#x5728;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x6807;&#x51C6;&#x7684;&#x65B9;&#x6CD5;&#xFF1A;</p>

<p><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor" title="Object.getOwnPropertyDescriptor() &#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x4E0A;&#x4E00;&#x4E2A;&#x81EA;&#x6709;&#x5C5E;&#x6027;&#x5BF9;&#x5E94;&#x7684;&#x5C5E;&#x6027;&#x63CF;&#x8FF0;&#x7B26;&#x3002;&#xFF08;&#x81EA;&#x6709;&#x5C5E;&#x6027;&#x6307;&#x7684;&#x662F;&#x76F4;&#x63A5;&#x8D4B;&#x4E88;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x4ECE;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x8FDB;&#x884C;&#x67E5;&#x627E;&#x7684;&#x5C5E;&#x6027;&#xFF09;"><code>Object.getOwnPropertyDescriptor()</code></a>.</p>

<h2 id="&#x4E3E;&#x4E2A;&#x6817;&#x5B50;">&#x4E3E;&#x4E2A;&#x6817;&#x5B50;</h2>

<pre class="brush: js">var obj = {
  set foo(value) {
    this.bar = value;
  }
};


// &#x975E;&#x6807;&#x51C6;&#xFF0C;&#x5E76;&#x4E14;&#x4E0D;&#x63A8;&#x8350;&#x4F7F;&#x7528;&#x3002;
obj.__lookupSetter__(&apos;foo&apos;)
// (function(value) { this.bar = value; })


// &#x6807;&#x51C6;&#x4E14;&#x63A8;&#x8350;&#x4F7F;&#x7528;&#x7684;&#x65B9;&#x5F0F;&#x3002;
Object.getOwnPropertyDescriptor(obj, &quot;foo&quot;).set;
// (function(value) { this.bar = value; })
</pre>

<h2 id="&#x89C4;&#x8303;&#x8BF4;&#x660E;">&#x89C4;&#x8303;&#x8BF4;&#x660E;</h2>

<table class="spectable standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x5907;&#x6CE8;</th>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-object.prototype.__lookupSetter__" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Object.prototype.__lookupSetter__()</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#x5305;&#x542B;&#x5728;&#xFF08;&#x89C4;&#x8303;&#x6027;&#xFF09;&#x9644;&#x4EF6;&#x4E2D;&#xFF0C;&#x7528;&#x4E8E;Web&#x6D4F;&#x89C8;&#x5668;&#x7684;&#x9644;&#x52A0;ECMAScript&#x9057;&#x7559;&#x529F;&#x80FD;&#xFF08;&#x8BF7;&#x6CE8;&#x610F;&#xFF0C;&#x8FD9;&#x4EFD;&#x89C4;&#x8303;&#x7F16;&#x64B0;&#x7684;&#x5185;&#x5BB9;&#x5DF2;&#x7ECF;&#x662F;&#x51C6;&#x5907;&#x5B9E;&#x73B0;&#x7684;&#x4E86;&#xFF09;&#x3002;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x60C5;&#x51B5;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x60C5;&#x51B5;</h2>

<div><div class="htab"> 
    <a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a> 
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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>11</td>
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

<h2 id="&#x66F4;&#x591A;&#x8BF7;&#x53C2;&#x8003;">&#x66F4;&#x591A;&#x8BF7;&#x53C2;&#x8003;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__" title="__lookupGetter__ &#x65B9;&#x6CD5;&#x4F1A;&#x8FD4;&#x56DE;&#x5F53;&#x524D;&#x5BF9;&#x8C61;&#x4E0A;&#x6307;&#x5B9A;&#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x8BFB;&#x53D6;&#x8BBF;&#x95EE;&#x5668;&#x51FD;&#x6570;&#xFF08;getter&#xFF09;&#x3002;"><code>Object.prototype.__lookupGetter__()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Functions/set" title="set &#x8BED;&#x6CD5;&#x53EF;&#x4EE5;&#x5C06;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x7ED1;&#x5B9A;&#x5728;&#x5F53;&#x524D;&#x5BF9;&#x8C61;&#x7684;&#x6307;&#x5B9A;&#x5C5E;&#x6027;&#x4E0A;&#xFF0C;&#x5F53;&#x90A3;&#x4E2A;&#x5C5E;&#x6027;&#x88AB;&#x8D4B;&#x503C;&#x65F6;&#xFF0C;&#x4F60;&#x6240;&#x7ED1;&#x5B9A;&#x7684;&#x51FD;&#x6570;&#x5C31;&#x4F1A;&#x88AB;&#x8C03;&#x7528;&#x3002;"><code>set</code></a> operator</li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor" title="Object.getOwnPropertyDescriptor() &#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x4E0A;&#x4E00;&#x4E2A;&#x81EA;&#x6709;&#x5C5E;&#x6027;&#x5BF9;&#x5E94;&#x7684;&#x5C5E;&#x6027;&#x63CF;&#x8FF0;&#x7B26;&#x3002;&#xFF08;&#x81EA;&#x6709;&#x5C5E;&#x6027;&#x6307;&#x7684;&#x662F;&#x76F4;&#x63A5;&#x8D4B;&#x4E88;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x4ECE;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x8FDB;&#x884C;&#x67E5;&#x627E;&#x7684;&#x5C5E;&#x6027;&#xFF09;"><code>Object.getOwnPropertyDescriptor()</code></a> and <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf" title="Object.getPrototypeOf() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;&#xFF08;&#x4E5F;&#x5C31;&#x662F;&#x8BE5;&#x5BF9;&#x8C61;&#x5185;&#x90E8;&#x5C5E;&#x6027;[[Prototype]]&#x7684;&#x503C;&#xFF09;&#x3002;"><code>Object.getPrototypeOf()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__" title="__defineGetter__ &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x5C06;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x7ED1;&#x5B9A;&#x5728;&#x5F53;&#x524D;&#x5BF9;&#x8C61;&#x7684;&#x6307;&#x5B9A;&#x5C5E;&#x6027;&#x4E0A;&#xFF0C;&#x5F53;&#x90A3;&#x4E2A;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x88AB;&#x8BFB;&#x53D6;&#x65F6;&#xFF0C;&#x4F60;&#x6240;&#x7ED1;&#x5B9A;&#x7684;&#x51FD;&#x6570;&#x5C31;&#x4F1A;&#x88AB;&#x8C03;&#x7528;&#x3002;"><code>Object.prototype.__defineGetter__()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__" title="__defineSetter__ &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x5C06;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x7ED1;&#x5B9A;&#x5728;&#x5F53;&#x524D;&#x5BF9;&#x8C61;&#x7684;&#x6307;&#x5B9A;&#x5C5E;&#x6027;&#x4E0A;&#xFF0C;&#x5F53;&#x90A3;&#x4E2A;&#x5C5E;&#x6027;&#x88AB;&#x8D4B;&#x503C;&#x65F6;&#xFF0C;&#x4F60;&#x6240;&#x7ED1;&#x5B9A;&#x7684;&#x51FD;&#x6570;&#x5C31;&#x4F1A;&#x88AB;&#x8C03;&#x7528;&#x3002;"><code>Object.prototype.__defineSetter__()</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters">JS Guide: Defining Getters and Setters</a></li>
</ul>
                  
                
              