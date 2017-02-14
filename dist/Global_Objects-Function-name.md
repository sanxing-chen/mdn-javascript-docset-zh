
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="overheadIndicator nonStandard nonStandardHeader"> 
      <p><strong><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> &#x975E;&#x6807;&#x51C6;</strong><br> 
      &#x8BE5;&#x7279;&#x6027;&#x662F;&#x975E;&#x6807;&#x51C6;&#x7684;&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#xFF01;</p> 
      </div></div>

<h2 id="&#x6982;&#x8FF0;">&#x6982;&#x8FF0;</h2>

<p><strong><code>name</code></strong> &#x5C5E;&#x6027;&#x8FD4;&#x56DE;&#x6240;&#x5C5E;&#x51FD;&#x6570;&#x7684;&#x51FD;&#x6570;&#x540D;&#x79F0;.</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>name&#xA0;</code>&#x5C5E;&#x6027;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x7684;&#x540D;&#x79F0;, &#x5982;&#x679C;&#x662F;&#x533F;&#x540D;&#x51FD;&#x6570;, &#x5219;&#x8FD4;&#x56DE;&#x7A7A;&#x5B57;&#x7B26;&#x4E32;:</p>

<pre class="brush:js">function doSomething() { }

alert(doSomething.name); // &#x5F39;&#x51FA; &quot;doSomething&quot;&#xA0;</pre>

<p><span style="line-height: 1.5; color: rgb(77, 78, 83);">&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x521B;&#x5EFA;&#x4E86;&#x4E24;&#x4E2A;&#x533F;&#x540D;&#x51FD;&#x6570;, &#x5B83;&#x4EEC;&#x7684;&#xA0;</span><code>name&#xA0;</code><span style="line-height: 1.5; color: rgb(77, 78, 83);">&#x5C5E;&#x6027;&#x90FD;&#x8FD4;&#x56DE;&#x7A7A;&#x5B57;&#x7B26;&#x4E32;.</span>:</p>

<pre class="brush:js">var f = function() { };
var object = {
  someMethod: function() {}
};

alert(f.name == &quot;&quot;); // true
alert(object.someMethod.name == &quot;&quot;); // true
</pre>

<p style="color: rgb(77, 78, 83);">&#x4F7F;&#x7528;&#x8BED;&#x6CD5;<code style="font-size: 14px;">new&#xA0;<a title="Function" href="https://developer.mozilla.org/zh-cn/JavaScript/Reference/Global_Objects/Function">Function</a>(...)</code>&#x6216;&#x8005;&#x76F4;&#x63A5;&#xA0;<code style="font-size: 14px;"><a title="Function" href="https://developer.mozilla.org/zh-cn/JavaScript/Reference/Global_Objects/Function">Function</a></code><code style="font-size: 14px;">(...)</code>&#xA0;&#x53EF;&#x4EE5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x533F;&#x540D;&#x51FD;&#x6570;, &#x5728;Firefox &#x548C; Safari&#x4E0A;, &#x8BE5;&#x51FD;&#x6570;&#x7684;&#xA0;<code style="font-size: 14px;">name&#xA0;</code>&#x5C5E;&#x6027;&#x8D4B;&#x503C;&#x4E3A;<code> &quot;anonymous&quot;</code>, &#x5728; Chrome &#x548C; Opera &#x4E0A;,&#x8BE5;&#x51FD;&#x6570;&#x7684;&#xA0;<code style="font-size: 14px;">name&#xA0;</code>&#x5C5E;&#x6027;&#x4E3A;&#x4E00;&#x4E2A;&#x7A7A;&#x5B57;&#x7B26;&#x4E32;, IE&#x4E0D;&#x652F;&#x6301;&#xA0;<code>name&#xA0;</code>&#x5C5E;&#x6027;.</p>

<p>&#x5728; <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope"><code>&#x51FD;&#x6570;&#x8868;&#x8FBE;&#x5F0F;</code></a> &#x4E2D;, &#x4F60;&#x53EF;&#x4EE5;&#x6307;&#x5B9A;&#x51FD;&#x6570;&#x7684;&#x540D;&#x79F0;:</p>

<pre class="brush:js">var object = {
  someMethod: function object_someMethod() {}
};
alert(object.someMethod.name); // &#x5F39;&#x51FA; &quot;object_someMethod&quot;

try { object_someMethod } catch(e) { alert(e); }
// ReferenceError: object_someMethod is not defined
</pre>

<p>&#x4F60;&#x4E0D;&#x80FD;&#x6539;&#x53D8;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x7684; <code>name</code> &#x5C5E;&#x6027;&#x7684;&#x503C;, &#x56E0;&#x4E3A;&#x8BE5;&#x5C5E;&#x6027;&#x662F;&#x53EA;&#x8BFB;&#x7684;:</p>

<pre class="brush:js">var object = {
  // someMethod &#x5C5E;&#x6027;&#x6307;&#x5411;&#x4E00;&#x4E2A;&#x533F;&#x540D;&#x51FD;&#x6570;
  someMethod: function() { }
};

object.someMethod.name = &quot;someMethod&quot;;
alert(object.someMethod.name); // &#x5F39;&#x51FA;&#x7A7A;&#x5B57;&#x7B26;&#x4E32;, name&#x5C5E;&#x6027;&#x662F;&#x53EA;&#x8BFB;&#x7684;.
</pre>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<p><span style="line-height: 1.5;">&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;<code> obj.constructor.name</code> &#x6765;&#x67E5;&#x770B;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x6240;&#x5C5E;&#x7684;&quot;&#x7C7B;&quot;&#x7684;&#x540D;&#x79F0;:</span></p>

<pre class="brush:js">function A() { }

var b = new A();

alert(b.constructor.name); //Alerts &quot;A&quot;
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<p>&#x4E0D;&#x5728;&#x4EFB;&#x4F55;&#x89C4;&#x8303;&#x4E2D;.</p>

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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<p>&#xA0;</p>
                  
                
              