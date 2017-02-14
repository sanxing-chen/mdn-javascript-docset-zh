
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<div><strong><code>new.target</code></strong><code>&#x5C5E;&#x6027;&#x5141;&#x8BB8;&#x4F60;&#x68C0;&#x6D4B;&#x51FD;&#x6570;&#x6216;&#x6784;&#x9020;&#x65B9;&#x6CD5;&#x662F;&#x5426;&#x901A;&#x8FC7;&#x662F;&#x901A;&#x8FC7;</code><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/new">new</a>&#x8FD0;&#x7B97;&#x7B26;&#x88AB;&#x8C03;&#x7528;&#x7684;&#x3002;&#x5728;&#x901A;&#x8FC7;<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/new">new</a>&#x8FD0;&#x7B97;&#x7B26;&#x88AB;&#x521D;&#x59CB;&#x5316;&#x7684;&#x51FD;&#x6570;&#x6216;&#x6784;&#x9020;&#x65B9;&#x6CD5;&#x4E2D;&#xFF0C;<code>new.target&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5411;&#x6784;&#x9020;&#x65B9;&#x6CD5;&#x6216;&#x51FD;&#x6570;&#x7684;&#x5F15;&#x7528;&#x3002;&#x5728;&#x666E;&#x901A;&#x7684;&#x51FD;&#x6570;&#x8C03;&#x7528;&#x4E2D;&#xFF0C;new.target</code>&#xA0;&#x7684;&#x503C;&#x662F;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined" title="undefined&#x6709;&#x591A;&#x91CD;&#x89D2;&#x8272;,&#x901A;&#x5E38;&#x60C5;&#x51B5;&#x4E0B;,&#x6211;&#x4EEC;&#x6240;&#x8BF4;&#x7684;undefined&#x90FD;&#x6307;&#x7684;&#x662F;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&quot;undefined&quot;."><code>undefined</code></a>&#x3002;</div>

<div>&#xA0;</div>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">new.target</pre>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>new.target&#x8BED;&#x6CD5;&#x7531;&#x4E00;&#x4E2A;&#x5173;&#x952E;&#x5B57;</code>&quot;<code>new</code>&quot;<code>&#xFF0C;&#x4E00;&#x4E2A;&#x70B9;&#xFF0C;&#x548C;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&#x540D;</code>&quot;<font face="Consolas, Liberation Mono, Courier, monospace">target</font>&quot;<code>&#x7EC4;&#x6210;&#x3002;&#x901A;&#x5E38;</code>&quot;<code>new.</code>&quot;<code>&#x7684;&#x4F5C;&#x7528;&#x662F;&#x63D0;&#x4F9B;&#x5C5E;&#x6027;&#x8BBF;&#x95EE;&#x7684;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x4F46;&#x8FD9;&#x91CC;</code>&quot;<code>new.</code>&quot;<code>&#x5176;&#x5B9E;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x771F;&#x6B63;&#x7684;&#x5BF9;&#x8C61;&#x3002;&#x4E0D;&#x8FC7;&#x5728;&#x6784;&#x9020;&#x65B9;&#x6CD5;&#x8C03;&#x7528;&#x4E2D;&#xFF0C;new.target&#x6307;&#x5411;&#x88AB;new&#x8C03;&#x7528;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;&#xFF0C;&#x6240;&#x4EE5;</code>&quot;<code>new.</code>&quot;&#x6210;&#x4E3A;&#x4E86;&#x4E00;&#x4E2A;&#x865A;&#x62DF;&#x4E0A;&#x4E0B;&#x6587;&#x3002;</p>

<p><code>new.target&#x5C5E;&#x6027;&#x662F;&#x4E00;&#x4E2A;&#x53EF;&#x4EE5;&#x88AB;&#x6240;&#x6709;&#x51FD;&#x6570;&#x8BBF;&#x95EE;&#x7684;&#x5143;&#x5C5E;&#x6027;&#x3002;&#x5728;</code><a href="/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions">&#x7BAD;&#x5934;&#x51FD;&#x6570;</a>&#x4E2D;&#xFF0C;<code>new.target&#x6307;&#x5411;&#x5916;&#x56F4;&#x51FD;&#x6570;&#x7684;</code> <code>new.target&#x3002;</code></p>

<h2 id="&#x5B9E;&#x4F8B;">&#x5B9E;&#x4F8B;</h2>

<h3 id="&#x51FD;&#x6570;&#x8C03;&#x7528;&#x4E2D;&#x7684;new.target">&#x51FD;&#x6570;&#x8C03;&#x7528;&#x4E2D;&#x7684;new.target</h3>

<p>&#x5728;&#x666E;&#x901A;&#x7684;&#x51FD;&#x6570;&#x8C03;&#x7528;&#x4E2D;&#xFF08;&#x548C;&#x4F5C;&#x4E3A;&#x6784;&#x9020;&#x51FD;&#x6570;&#x6765;&#x8C03;&#x7528;&#x76F8;&#x5BF9;&#xFF09;&#xFF0C;<code>new.target&#x7684;&#x503C;&#x662F;</code><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined" title="undefined&#x6709;&#x591A;&#x91CD;&#x89D2;&#x8272;,&#x901A;&#x5E38;&#x60C5;&#x51B5;&#x4E0B;,&#x6211;&#x4EEC;&#x6240;&#x8BF4;&#x7684;undefined&#x90FD;&#x6307;&#x7684;&#x662F;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&quot;undefined&quot;."><code>undefined</code></a>&#x3002;&#x8FD9;&#x4F7F;&#x5F97;&#x4F60;&#x53EF;&#x4EE5;&#x68C0;&#x6D4B;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x662F;&#x5426;&#x662F;&#x4F5C;&#x4E3A;&#x6784;&#x9020;&#x51FD;&#x6570;&#x901A;&#x8FC7;<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/new">new</a>&#x88AB;&#x8C03;&#x7528;&#x7684;&#x3002;</p>

<pre class="brush: js">function Foo() {
  if (!new.target) throw &quot;Foo() must be called with new&quot;;
  console.log(&quot;Foo instantiated with new&quot;);
}

Foo(); // throws &quot;Foo() must be called with new&quot;
new Foo(); // logs &quot;Foo instantiated with new&quot;
</pre>

<h3 id="&#x6784;&#x9020;&#x65B9;&#x6CD5;&#x4E2D;&#x7684;new.target">&#x6784;&#x9020;&#x65B9;&#x6CD5;&#x4E2D;&#x7684;new.target</h3>

<p>&#x5728;&#x7C7B;&#x7684;&#x6784;&#x9020;&#x65B9;&#x6CD5;&#x4E2D;&#xFF0C;<code>new.target&#x6307;&#x5411;&#x76F4;&#x63A5;&#x88AB;new&#x6267;&#x884C;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;&#x3002;&#x5E76;&#x4E14;&#x5F53;&#x4E00;&#x4E2A;&#x7236;&#x7C7B;&#x6784;&#x9020;&#x65B9;&#x6CD5;&#x5728;&#x5B50;&#x7C7B;&#x6784;&#x9020;&#x65B9;&#x6CD5;&#x4E2D;&#x88AB;&#x8C03;&#x7528;&#x65F6;&#xFF0C;&#x60C5;&#x51B5;&#x4E0E;&#x4E4B;&#x76F8;&#x540C;&#x3002;</code></p>

<pre class="brush: js">class A {
  constructor() {
    console.log(new.target.name);
  }
}

class B extends A { constructor() { super(); } }

var a = new A(); // logs &quot;A&quot;
var b = new B(); // logs &quot;B&quot;
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-built-in-function-objects" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Built-in Function Objects</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-built-in-function-objects" class="external" lang="en" hreflang="en">ECMAScript 2016 Draft (7th Edition, ECMA-262)<br><small lang="zh-CN">Built-in Function Objects</small></a></td>
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
   <td>46.0</td>
   <td><a href="/en-US/Firefox/Releases/41" title="Released on 2015-09-22.">41</a> (41)</td>
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
   <th>Android Webview</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
   <th>Chrome for Android</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>46.0</td>
   <td>41.0 (41)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>46.0</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Functions">Functions</a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Classes">Classes</a></li>
 <li><code><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/new">new</a></code></li>
 <li><code><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/this">this</a></code></li>
</ul>
                  
                
              