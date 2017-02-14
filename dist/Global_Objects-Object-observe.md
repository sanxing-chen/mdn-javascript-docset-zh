
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="overheadIndicator obsolete obsoleteHeader"><p><strong><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span> &#x5DF2;&#x5E9F;&#x5F03;</strong><br>This feature is obsolete. Although it may still work in some browsers, its use is discouraged since it could be removed at any time. Try to avoid using it.</p></div></div>

<h2 id="&#x6982;&#x8FF0;">&#x6982;&#x8FF0;</h2>

<p><strong><code>Object.observe()</code></strong>&#xA0;&#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x5F02;&#x6B65;&#x5730;&#x76D1;&#x89C6;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x4FEE;&#x6539;&#x3002;&#x5F53;&#x5BF9;&#x8C61;&#x5C5E;&#x6027;&#x88AB;&#x4FEE;&#x6539;&#x65F6;&#xFF0C;&#x65B9;&#x6CD5;&#x7684;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x4F1A;&#x63D0;&#x4F9B;&#x4E00;&#x4E2A;&#x6709;&#x5E8F;&#x7684;&#x4FEE;&#x6539;&#x6D41;&#x3002;&#x7136;&#x800C;&#xFF0C;&#x8FD9;&#x4E2A;&#x63A5;&#x53E3;&#x5DF2;&#x7ECF;&#x88AB;&#x5E9F;&#x5F03;&#x5E76;&#x4ECE;&#x5404;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#x79FB;&#x9664;&#x3002;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x66F4;&#x901A;&#x7528;&#x7684;&#xA0;<a title="Editorial review completed." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy"><code>Proxy</code></a> &#x5BF9;&#x8C61;&#x66FF;&#x4EE3;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>Object.observe(<var>obj</var>, <var>callback</var></code>[, <var>acceptList</var>])</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>obj</code></dt>
 <dd>&#x88AB;&#x76D1;&#x63A7;&#x7684;&#x5BF9;&#x8C61;.</dd>
 <dt><code>callback</code></dt>
 <dd>&#x5F53;&#x5BF9;&#x8C61;&#x88AB;&#x4FEE;&#x6539;&#x65F6;&#x89E6;&#x53D1;&#x7684;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#xFF0C;&#x5176;&#x53C2;&#x6570;&#x4E3A;:&#xA0;
 <dl>
  <dt><code>changes</code></dt>
  <dd>&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#xFF0C;&#x5176;&#x4E2D;&#x5305;&#x542B;&#x7684;&#x6BCF;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4EE3;&#x8868;&#x4E00;&#x4E2A;&#x4FEE;&#x6539;&#x884C;&#x4E3A;&#x3002;&#x6BCF;&#x4E2A;&#x4FEE;&#x6539;&#x884C;&#x4E3A;&#x7684;&#x5BF9;&#x8C61;&#x5305;&#x542B;:&#xA0;
  <ul>
   <li><strong><code>name</code></strong>: &#x88AB;&#x4FEE;&#x6539;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x79F0;<span style="font-family: consolas,monaco,andale mono,monospace;">&#x3002;</span></li>
   <li><strong><code>object</code></strong>: &#x4FEE;&#x6539;&#x540E;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x503C;<span style="font-family: consolas,monaco,andale mono,monospace;">&#x3002;</span></li>
   <li><strong><code>type</code></strong>: &#x8868;&#x793A;&#x5BF9;&#x8BE5;&#x5BF9;&#x8C61;&#x505A;&#x4E86;&#x4F55;&#x79CD;&#x7C7B;&#x578B;&#x7684;&#x4FEE;&#x6539;&#xFF0C;&#x53EF;&#x80FD;&#x7684;&#x503C;&#x4E3A;<code>&quot;add&quot;</code>, <code>&quot;update&quot;</code>, or <code>&quot;delete&quot;</code><span style="font-family: consolas,monaco,andale mono,monospace;">&#x3002;</span></li>
   <li><strong><code>oldValue</code></strong>: &#x5BF9;&#x8C61;&#x4FEE;&#x6539;&#x524D;&#x7684;&#x503C;&#x3002;&#x8BE5;&#x503C;&#x53EA;&#x5728;<code>&quot;update&quot;<font face="Open Sans, sans-serif">&#x4E0E;</font></code><code>&quot;delete&quot;&#x6709;&#x6548;&#x3002;</code></li>
   <li>&#xA0;</li>
  </ul>
  </dd>
  <dt><font face="Consolas">acceptList</font></dt>
  <dd>&#x5728;&#x7ED9;&#x5B9A;&#x5BF9;&#x8C61;&#x4E0A;&#x7ED9;&#x5B9A;&#x56DE;&#x8C03;&#x4E2D;&#x8981;&#x76D1;&#x89C6;&#x7684;&#x53D8;&#x5316;&#x7C7B;&#x578B;&#x5217;&#x8868;&#x3002;&#x5982;&#x679C;&#x7701;&#x7565;&#xFF0C;&#xA0;<code><font face="Courier New">[&quot;add&quot;, &quot;update&quot;, &quot;delete&quot;, &quot;reconfigure&quot;, &quot;setPrototype&quot;, &quot;preventExtensions&quot;]</font></code> &#x5C06;&#x4F1A;&#x88AB;&#x4F7F;&#x7528;&#x3002;</dd>
 </dl>
 </dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code style="font-style: normal;">callback</code>&#xA0;&#x51FD;&#x6570;&#x4F1A;&#x5728;<code>&#x5BF9;&#x8C61;&#x88AB;&#x6539;&#x53D8;&#x65F6;&#x88AB;&#x8C03;&#x7528;&#xFF0C;&#x5176;&#x53C2;&#x6570;&#x4E3A;&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x6240;&#x6709;&#x4FEE;&#x6539;&#x4FE1;&#x606F;&#x7684;&#x6709;&#x5E8F;&#x7684;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x3002;</code></p>

<h2 id="&#x4F8B;&#x5B50;">&#x4F8B;&#x5B50;</h2>

<h3 id="&#x4F8B;&#x5B50;_&#x6253;&#x5370;&#x51FA;&#x4E09;&#x79CD;&#x4E0D;&#x540C;&#x64CD;&#x4F5C;&#x7C7B;&#x578B;&#x7684;&#x65E5;&#x5FD7;">&#x4F8B;&#x5B50;: &#x6253;&#x5370;&#x51FA;&#x4E09;&#x79CD;&#x4E0D;&#x540C;&#x64CD;&#x4F5C;&#x7C7B;&#x578B;&#x7684;&#x65E5;&#x5FD7;</h3>

<pre class="brush: js">var obj = {
  foo: 0,
  bar: 1
};

Object.observe(obj, function(changes) {
  console.log(changes);
});

obj.baz = 2;
// [{name: &apos;baz&apos;, object: &lt;obj&gt;, type: &apos;add&apos;}]

obj.foo = &apos;hello&apos;;
// [{name: &apos;foo&apos;, object: &lt;obj&gt;, type: &apos;update&apos;, oldValue: 0}]

delete obj.baz;
// [{name: &apos;baz&apos;, object: &lt;obj&gt;, type: &apos;delete&apos;, oldValue: 2}]
</pre>

<h3 id="&#x4F8B;&#x5B50;_&#x6570;&#x636E;&#x7ED1;&#x5B9A;">&#x4F8B;&#x5B50;: &#x6570;&#x636E;&#x7ED1;&#x5B9A;</h3>

<pre class="brush: js">// &#x4E00;&#x4E2A;&#x6570;&#x636E;&#x6A21;&#x578B;
var user = {
  id: 0,
  name: &apos;Brendan Eich&apos;,
  title: &apos;Mr.&apos;
};

// &#x521B;&#x5EFA;&#x7528;&#x6237;&#x7684;greeting
function updateGreeting() {
  user.greeting = &apos;Hello, &apos; + user.title + &apos; &apos; + user.name + &apos;!&apos;;
}
updateGreeting();

Object.observe(user, function(changes) {
  changes.forEach(function(change) {
    // &#x5F53;name&#x6216;title&#x5C5E;&#x6027;&#x6539;&#x53D8;&#x65F6;, &#x66F4;&#x65B0;greeting
    if (change.name === &apos;name&apos; || change.name === &apos;title&apos;) {
      updateGreeting();
    }
  });
});
</pre>

<h2 name="Specifications" id="Specifications">&#x89C4;&#x8303;</h2>

<p><a href="https://github.com/arv/ecmascript-object-observe" class="external">Strawman proposal for ECMAScript 7</a>.</p>

<h2 name="Browser_compatibility" id="Browser_compatibility">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
   <td>36</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>23</td>
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
   <td>36</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>23</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="Object.unobserve()&#xA0;&#x662F;&#x7528;&#x6765;&#x79FB;&#x9664;&#x901A;&#x8FC7; Object.observe()&#x8BBE;&#x7F6E;&#x7684;&#x89C2;&#x5BDF;&#x8005;&#x7684;&#x65B9;&#x6CD5;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/unobserve"><code>Object.unobserve()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></li>
 <li><a title="Array.observe() &#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x5F02;&#x6B65;&#x76D1;&#x89C6;&#x6570;&#x7EC4;&#x53D1;&#x751F;&#x7684;&#x53D8;&#x5316;&#xFF0C;&#x7C7B;&#x4F3C;&#x4E8E;&#x9488;&#x5BF9;&#x5BF9;&#x8C61;&#x7684; Object.observe() &#x3002;&#x5F53;&#x6570;&#x7EC4;&#x7684;&#x503C;&#x53D1;&#x751F;&#x53D8;&#x5316;&#x65F6;&#xFF0C;&#x5B83;&#x6309;&#x53D1;&#x751F;&#x987A;&#x5E8F;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x53D8;&#x5316;&#x6D41;&#x3002;&#x4E0E; Object.observe() &#x7C7B;&#x4F3C;&#xFF0C;&#x5B83;&#x7531;&#x5982;&#x4E0B;&#x53EF;&#x63A5;&#x53D7;&#x7684;&#x53D8;&#x5316;&#x7C7B;&#x578B;&#x5217;&#x8868;[&quot;add&quot;&#x3001;&quot;update&quot;&#x3001;&quot;delete&quot;&#x3001;&quot;splice&quot;]&#x89E6;&#x53D1;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/observe"><code>Array.observe()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></li>
</ul>
                  
                
              