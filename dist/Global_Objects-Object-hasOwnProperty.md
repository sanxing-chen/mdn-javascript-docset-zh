
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>hasOwnProperty()</strong></code> &#x65B9;&#x6CD5;&#x4F1A;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5E03;&#x5C14;&#x503C;&#xFF0C;&#x5176;&#x7528;&#x6765;&#x5224;&#x65AD;&#x67D0;&#x4E2A;&#x5BF9;&#x8C61;&#x662F;&#x5426;&#x542B;&#x6709;&#x6307;&#x5B9A;&#x7684;&#x5C5E;&#x6027;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><em>obj</em>.hasOwnProperty(<em>prop</em>)</code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>prop</code></dt>
 <dd>&#x8981;&#x68C0;&#x6D4B;&#x7684;&#x5C5E;&#x6027; &#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/String" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>&#x5B57;&#x7B26;&#x4E32;</code></a>&#xA0;&#x540D;&#x79F0;&#x6216;&#x8005; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol" title="Symbol &#x662F;&#x4E00;&#x79CD;&#x7279;&#x6B8A;&#x7684;&#x3001;&#x4E0D;&#x53EF;&#x53D8;&#x7684;&#x6570;&#x636E;&#x7C7B;&#x578B;&#xFF0C;&#x53EF;&#x4EE5;&#x4F5C;&#x4E3A;&#x5BF9;&#x8C61;&#x5C5E;&#x6027;&#x7684;&#x6807;&#x8BC6;&#x7B26;&#x4F7F;&#x7528;&#x3002;Symbol &#x5BF9;&#x8C61;&#x662F;&#x4E00;&#x4E2A; symbol primitive data type &#x7684;&#x9690;&#x5F0F;&#x5BF9;&#x8C61;&#x5305;&#x88C5;&#x5668;&#x3002;"><code>Symbol</code></a>&#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x7528;&#x6765;&#x5224;&#x65AD;&#x67D0;&#x4E2A;&#x5BF9;&#x8C61;&#x662F;&#x5426;&#x542B;&#x6709;&#x6307;&#x5B9A;&#x7684;&#x5C5E;&#x6027;&#x7684; <a href="/zh-CN/docs/Web/JavaScript/Reference/Boolean" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Boolean</code></a>&#xA0;&#x3002;</p>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x6240;&#x6709;&#x7EE7;&#x627F;&#x4E86; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object &#x6784;&#x9020;&#x51FD;&#x6570;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5305;&#x88C5;&#xFF08;object wrapper&#xFF09;&#x3002;"><code>Object</code></a> &#x7684;&#x5BF9;&#x8C61;&#x90FD;&#x4F1A;&#x7EE7;&#x627F;&#x5230; <code>hasOwnProperty</code> &#x65B9;&#x6CD5;&#x3002;&#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x7528;&#x6765;&#x68C0;&#x6D4B;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x662F;&#x5426;&#x542B;&#x6709;&#x7279;&#x5B9A;&#x7684;&#x81EA;&#x8EAB;&#x5C5E;&#x6027;&#xFF1B;&#x548C; <a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/in" title="&#x5982;&#x679C;&#x6307;&#x5B9A;&#x7684;&#x5C5E;&#x6027;&#x5B58;&#x5728;&#x4E8E;&#x6307;&#x5B9A;&#x7684;&#x5BF9;&#x8C61;&#x4E2D;&#xFF0C;&#x5219;&#xA0;in&#xA0;&#x8FD0;&#x7B97;&#x7B26;&#x4F1A;&#x8FD4;&#x56DE;&#xA0;true&#x3002;"><code>in</code></a> &#x8FD0;&#x7B97;&#x7B26;&#x4E0D;&#x540C;&#xFF0C;&#x8BE5;&#x65B9;&#x6CD5;&#x4F1A;&#x5FFD;&#x7565;&#x6389;&#x90A3;&#x4E9B;&#x4ECE;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x7EE7;&#x627F;&#x5230;&#x7684;&#x5C5E;&#x6027;&#x3002;</p>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<h3 name="Example:_Using_hasOwnProperty_to_test_for_a_property.27s_existence" id="Example:_Using_hasOwnProperty_to_test_for_a_property.27s_existence">&#x4F7F;&#x7528; <code>hasOwnProperty</code> &#x65B9;&#x6CD5;&#x5224;&#x65AD;&#x5C5E;&#x6027;&#x662F;&#x5426;&#x5B58;&#x5728;</h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x68C0;&#x6D4B;&#x4E86;&#x5BF9;&#x8C61; <code>o</code> &#x662F;&#x5426;&#x542B;&#x6709;&#x81EA;&#x8EAB;&#x5C5E;&#x6027; <code>prop&#xFF1A;</code></p>

<pre class="brush: js">o = new Object();
o.prop = &apos;exists&apos;;

function changeO() {
  o.newprop = o.prop;
  delete o.prop;
}

o.hasOwnProperty(&apos;prop&apos;);   // &#x8FD4;&#x56DE; true
changeO();
o.hasOwnProperty(&apos;prop&apos;);   // &#x8FD4;&#x56DE; false</pre>

<h3 name="Example:_Direct_versus_inherited_properties" id="Example:_Direct_versus_inherited_properties">&#x81EA;&#x8EAB;&#x5C5E;&#x6027;&#x4E0E;&#x7EE7;&#x627F;&#x5C5E;&#x6027;</h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x6F14;&#x793A;&#x4E86; <code>hasOwnProperty</code> &#x65B9;&#x6CD5;&#x5BF9;&#x5F85;&#x81EA;&#x8EAB;&#x5C5E;&#x6027;&#x548C;&#x7EE7;&#x627F;&#x5C5E;&#x6027;&#x7684;&#x533A;&#x522B;&#xFF1A;</p>

<pre class="brush: js">o = new Object();
o.prop = &apos;exists&apos;;
o.hasOwnProperty(&apos;prop&apos;);             // &#x8FD4;&#x56DE; true
o.hasOwnProperty(&apos;toString&apos;);         // &#x8FD4;&#x56DE; false
o.hasOwnProperty(&apos;hasOwnProperty&apos;);   // &#x8FD4;&#x56DE; false</pre>

<h3 name="Example:_Itarate_over_properties_not_considering_inherited_properties" id="Example:_Itarate_over_properties_not_considering_inherited_properties">&#x904D;&#x5386;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x6240;&#x6709;&#x81EA;&#x8EAB;&#x5C5E;&#x6027;</h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x6F14;&#x793A;&#x4E86;&#x5982;&#x4F55;&#x5728;&#x904D;&#x5386;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x6240;&#x6709;&#x5C5E;&#x6027;&#x65F6;&#x5FFD;&#x7565;&#x6389;&#x7EE7;&#x627F;&#x5C5E;&#x6027;&#xFF0C;&#x6CE8;&#x610F;&#x8FD9;&#x91CC; <a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in" title="&#x4EE5;&#x4EFB;&#x610F;&#x5E8F;&#x8FED;&#x4EE3;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#x3002;&#x6BCF;&#x4E2A;&#x4E0D;&#x540C;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x8BED;&#x53E5;&#x90FD;&#x4F1A;&#x88AB;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x3002;"><code>for...in</code></a>&#xA0; &#x5FAA;&#x73AF;&#x53EA;&#x4F1A;&#x904D;&#x5386;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#xFF0C;&#x6240;&#x4EE5;&#x4E0D;&#x5E94;&#x8BE5;&#x57FA;&#x4E8E;&#x8FD9;&#x4E2A;&#x5FAA;&#x73AF;&#x4E2D;&#x6CA1;&#x6709;&#x4E0D;&#x53EF;&#x679A;&#x4E3E;&#x7684;&#x5C5E;&#x6027;&#x800C;&#x5F97;&#x51FA;&#xA0;<code>hasOwnProperty &#x662F;&#x4E25;&#x683C;&#x9650;&#x5236;&#x4E8E;&#x53EF;&#x679A;&#x4E3E;&#x9879;&#x76EE;&#x7684;&#xFF08;&#x5982;&#x540C;&#xA0;</code><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames" title="Object.getOwnPropertyNames()&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7531;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x6240;&#x6709;&#x81EA;&#x8EAB;&#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x540D;&#xFF08;&#x5305;&#x62EC;&#x4E0D;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#xFF09;&#x7EC4;&#x6210;&#x7684;&#x6570;&#x7EC4;&#x3002;"><code>Object.getOwnPropertyNames()</code></a>&#xFF09;&#x3002;</p>

<pre class="brush: js">var buz = {
    fog: &apos;stack&apos;
};

for (var name in buz) {
    if (buz.hasOwnProperty(name)) {
        alert(&quot;this is fog (&quot; + name + &quot;) for sure. Value: &quot; + buz[name]);
    }
    else {
        alert(name); // toString or something else
    }
}</pre>

<h3 id="&#x4F7F;&#x7528;_hasOwnProperty_&#x4F5C;&#x4E3A;&#x5C5E;&#x6027;&#x540D;"><code>&#x4F7F;&#x7528; hasOwnProperty</code> &#x4F5C;&#x4E3A;&#x5C5E;&#x6027;&#x540D;</h3>

<p>JavaScript &#x5E76;&#x6CA1;&#x6709;&#x4FDD;&#x62A4; hasOwnProperty &#x5C5E;&#x6027;&#x540D;&#xFF0C;&#x56E0;&#x6B64;&#x67D0;&#x4E2A;&#x5BF9;&#x8C61;&#x662F;&#x6709;&#x53EF;&#x80FD;&#x5B58;&#x5728;&#x4F7F;&#x7528;&#x8FD9;&#x4E2A;&#x5C5E;&#x6027;&#x540D;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x4F7F;&#x7528;<strong>&#x5916;&#x90E8;</strong>&#x7684;&#xA0;<code>hasOwnProperty &#x83B7;&#x5F97;&#x6B63;&#x786E;&#x7684;&#x7ED3;&#x679C;&#x662F;&#x9700;&#x8981;&#x7684;&#xFF1A;</code></p>

<pre class="brush: js">var foo = {
    hasOwnProperty: function() {
        return false;
    },
    bar: &apos;Here be dragons&apos;
};

foo.hasOwnProperty(&apos;bar&apos;); // &#x59CB;&#x7EC8;&#x8FD4;&#x56DE; false

// &#x5982;&#x679C;&#x62C5;&#x5FC3;&#x8FD9;&#x79CD;&#x60C5;&#x51B5;&#xFF0C;&#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x4F7F;&#x7528;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x771F;&#x6B63;&#x7684; hasOwnProperty &#x65B9;&#x6CD5;
({}).hasOwnProperty.call(foo, &apos;bar&apos;); // true

// &#x4E5F;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; Object &#x539F;&#x578B;&#x4E0A;&#x7684; hasOwnProperty &#x5C5E;&#x6027;
Object.prototype.hasOwnProperty.call(foo, &apos;bar&apos;); // true</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf" class="external" lang="en" hreflang="en" title="ECMAScript 3rd Edition (ECMA-262)">ECMAScript 3rd Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition. Implemented in JavaScript 1.5.</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.2.4.5" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Object.prototype.hasOwnProperty</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-object.prototype.hasownproperty" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Object.prototype.hasOwnProperty</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-object.prototype.hasownproperty" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Object.prototype.hasOwnProperty</small></a></td>
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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 name="See_Also" id="See_Also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Enumerability_and_ownership_of_properties" title="/zh-CN/docs/Enumerability_and_ownership_of_properties">&#x5C5E;&#x6027;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x6027;&#x548C;&#x6240;&#x6709;&#x6743;</a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames" title="Object.getOwnPropertyNames()&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7531;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x6240;&#x6709;&#x81EA;&#x8EAB;&#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x540D;&#xFF08;&#x5305;&#x62EC;&#x4E0D;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#xFF09;&#x7EC4;&#x6210;&#x7684;&#x6570;&#x7EC4;&#x3002;"><code>Object.getOwnPropertyNames()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in" title="&#x4EE5;&#x4EFB;&#x610F;&#x5E8F;&#x8FED;&#x4EE3;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#x3002;&#x6BCF;&#x4E2A;&#x4E0D;&#x540C;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x8BED;&#x53E5;&#x90FD;&#x4F1A;&#x88AB;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x3002;"><code>for...in</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/in" title="&#x5982;&#x679C;&#x6307;&#x5B9A;&#x7684;&#x5C5E;&#x6027;&#x5B58;&#x5728;&#x4E8E;&#x6307;&#x5B9A;&#x7684;&#x5BF9;&#x8C61;&#x4E2D;&#xFF0C;&#x5219;&#xA0;in&#xA0;&#x8FD0;&#x7B97;&#x7B26;&#x4F1A;&#x8FD4;&#x56DE;&#xA0;true&#x3002;"><code>in</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Guide/Inheritance_Revisited">JavaScript &#x6559;&#x7A0B;: &#x518D;&#x8C08;&#x7EE7;&#x627F;</a></li>
</ul>
                  
                
              