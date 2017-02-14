
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section><div class="overheadIndicator obsolete obsoleteHeader"><p><strong><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span> &#x5DF2;&#x5E9F;&#x5F03;</strong><br>This feature is obsolete. Although it may still work in some browsers, its use is discouraged since it could be removed at any time. Try to avoid using it.</p></div></div>

<p><strong>Array.observe()</strong> &#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x5F02;&#x6B65;&#x76D1;&#x89C6;&#x6570;&#x7EC4;&#x53D1;&#x751F;&#x7684;&#x53D8;&#x5316;&#xFF0C;&#x7C7B;&#x4F3C;&#x4E8E;&#x9488;&#x5BF9;&#x5BF9;&#x8C61;&#x7684; <a title="Object.observe()&#xA0;&#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x5F02;&#x6B65;&#x5730;&#x76D1;&#x89C6;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x4FEE;&#x6539;&#x3002;&#x5F53;&#x5BF9;&#x8C61;&#x5C5E;&#x6027;&#x88AB;&#x4FEE;&#x6539;&#x65F6;&#xFF0C;&#x65B9;&#x6CD5;&#x7684;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x4F1A;&#x63D0;&#x4F9B;&#x4E00;&#x4E2A;&#x6709;&#x5E8F;&#x7684;&#x4FEE;&#x6539;&#x6D41;&#x3002;&#x7136;&#x800C;&#xFF0C;&#x8FD9;&#x4E2A;&#x63A5;&#x53E3;&#x5DF2;&#x7ECF;&#x88AB;&#x5E9F;&#x5F03;&#x5E76;&#x4ECE;&#x5404;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#x79FB;&#x9664;&#x3002;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x66F4;&#x901A;&#x7528;&#x7684;&#xA0;Proxy &#x5BF9;&#x8C61;&#x66FF;&#x4EE3;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/observe"><code>Object.observe()</code></a> &#x3002;&#x5F53;&#x6570;&#x7EC4;&#x7684;&#x503C;&#x53D1;&#x751F;&#x53D8;&#x5316;&#x65F6;&#xFF0C;&#x5B83;&#x6309;&#x53D1;&#x751F;&#x987A;&#x5E8F;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x53D8;&#x5316;&#x6D41;&#x3002;&#x4E0E; <code>Object.observe()</code> &#x7C7B;&#x4F3C;&#xFF0C;&#x5B83;&#x7531;&#x5982;&#x4E0B;&#x53EF;&#x63A5;&#x53D7;&#x7684;&#x53D8;&#x5316;&#x7C7B;&#x578B;&#x5217;&#x8868;<code>[&quot;add&quot;&#x3001;&quot;update&quot;&#x3001;&quot;delete&quot;&#x3001;&quot;splice&quot;]</code>&#x89E6;&#x53D1;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>Array.observe(<var>arr</var>, <var>callback</var>)</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>arr</code></dt>
 <dd>&#x7528;&#x4E8E;&#x88AB;&#x76D1;&#x89C6;&#x7684;&#x6570;&#x7EC4;</dd>
 <dt><code>callback</code></dt>
 <dd>&#x6BCF;&#x5F53;&#x6570;&#x7EC4;&#x53D1;&#x751F;&#x53D8;&#x5316;&#x65F6;&#xFF0C;&#x4F7F;&#x7528;&#x5982;&#x4E0B;&#x53C2;&#x6570;&#x8C03;&#x7528;&#x8BE5;&#x51FD;&#x6570;&#xFF1A;
 <dl>
  <dt><code>changes</code></dt>
  <dd>&#x7528;&#x4E8E;&#x8868;&#x793A;&#x53D8;&#x5316;&#x7684;&#x5BF9;&#x8C61;&#x6570;&#x7EC4;&#x3002;&#x6BCF;&#x4E2A;&#x53D8;&#x5316;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#x5982;&#x4E0B;&#xFF1A;
  <ul>
   <li><strong><code>name</code></strong>: &#x53D8;&#x5316;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x3002;</li>
   <li><strong><code>object</code></strong>: &#x53D8;&#x5316;&#x540E;&#x7684;&#x6570;&#x7EC4;&#x3002;</li>
   <li><strong><code>type</code></strong>: &#x7528;&#x4E8E;&#x8868;&#x793A;&#x53D8;&#x5316;&#x7C7B;&#x578B;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;<code>&#x5176;&#x53D6;&#x503C;&#x4E3A;&quot;add&quot;&#x3001;</code><code>&quot;update&quot;&#x3001;</code><code>&quot;delete&quot;</code>&#x6216; <code>&quot;splice&quot;</code>&#x4E4B;&#x4E00;&#x3002;</li>
   <li><strong><code>oldValue</code></strong>: &#x4EC5;&#x7528;&#x4E8E;<code>&quot;update&quot;</code>&#x548C;<code>&quot;delete&quot;&#x7C7B;&#x578B;&#x3002;&#x53D8;&#x5316;</code>&#x4E4B;&#x524D;&#x7684;&#x53D6;&#x503C;&#x3002;</li>
   <li><strong><code>index</code></strong>: <code>&#x4EC5;&#x7528;&#x4E8E;&quot;splice&quot;&#x7C7B;&#x578B;&#x3002;</code>&#x53D8;&#x5316;&#x53D1;&#x751F;&#x6240;&#x5728;&#x7D22;&#x5F15;&#x3002;</li>
   <li><strong><code>removed</code></strong>: &#x4EC5;&#x7528;&#x4E8E;<code>&quot;splice&quot;&#x7C7B;&#x578B;&#x3002;</code>&#x88AB;&#x5220;&#x9664;&#x5143;&#x7D20;&#x7EC4;&#x6210;&#x7684;&#x6570;&#x7EC4;&#x3002;</li>
   <li><strong><code>addedCount</code></strong>: &#x4EC5;&#x7528;&#x4E8E;<code>&quot;splice&quot;</code>&#x7C7B;&#x578B;&#x3002;&#x88AB;&#x6DFB;&#x52A0;&#x7684;&#x5143;&#x7D20;&#x6570;&#x91CF;&#x3002;</li>
  </ul>
  </dd>
 </dl>
 </dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x6BCF;&#x6B21; arr &#x53D1;&#x751F;&#x4EFB;&#x4F55;&#x53D8;&#x5316;&#x65F6;&#xFF0C;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x5C06;&#x88AB;&#x8C03;&#x7528;&#xFF0C;&#x8C03;&#x7528;&#x53C2;&#x6570;&#x4E3A;&#x6240;&#x6709;&#x53D8;&#x5316;&#x6309;&#x53D1;&#x751F;&#x987A;&#x5E8F;&#x7EC4;&#x6210;&#x7684;&#x6570;&#x7EC4;&#x3002;</p>

<div class="note">
<p>&#x901A;&#x8FC7;Array&#x65B9;&#x6CD5;&#x5982;<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop"> Array.prototype.pop( )</a> &#x89E6;&#x53D1;&#x7684;&#x53D8;&#x5316;&#x5C06;&#x88AB;&#x62A5;&#x544A;&#x6210;&quot;<em>splice</em>&quot;&#x53D8;&#x5316;&#xFF0C;&#x957F;&#x5EA6;&#x4E0D;&#x53D8;&#x4F46;&#x7D22;&#x5F15;&#x8D4B;&#x503C;&#x53D1;&#x751F;&#x53D8;&#x5316;&#x7684;&#x5C06;&#x88AB;&#x62A5;&#x544A;&#x6210;&quot;update&quot;&#x53D8;&#x5316;&#x3002;</p>
</div>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="Example_Logging_different_change_types">Example: Logging different change types</h3>

<pre class="brush: js">var arr = [&apos;a&apos;, &apos;b&apos;, &apos;c&apos;];

Array.observe(arr, function(changes) {
  console.log(changes);
});

arr[1] = &apos;B&apos;;
// [{type: &apos;update&apos;, object: &lt;arr&gt;, name: &apos;1&apos;, oldValue: &apos;b&apos;}]

arr[3] = &apos;d&apos;;
// [{type: &apos;splice&apos;, object: &lt;arr&gt;, index: 3, removed: [], addedCount: 1}]

arr.splice(1, 2, &apos;beta&apos;, &apos;gamma&apos;, &apos;delta&apos;);
// [{type: &apos;splice&apos;, object: &lt;arr&gt;, index: 1, removed: [&apos;B&apos;, &apos;c&apos;], addedCount: 3}]
</pre>

<h2 name="Specifications" id="Specifications">&#x6807;&#x51C6;&#x89C4;&#x8303;</h2>

<p><a href="https://github.com/arv/ecmascript-object-observe" class="external">Strawman proposal specification</a>.</p>

<h2 name="Browser_compatibility" id="Browser_compatibility">&#x6D4F;&#x89C8;&#x5668;&#x652F;&#x6301;</h2>

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
   <th>Chrome for Android</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x5185;&#x5BB9;</h2>

<ul>
 <li><a title="Array.unobserve()&#x65B9;&#x6CD5;&#x7528;&#x6765;&#x79FB;&#x9664;Array.observe()&#x8BBE;&#x7F6E;&#x7684;&#x6240;&#x6709;&#x89C2;&#x5BDF;&#x8005;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unobserve"><code>Array.unobserve()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></li>
 <li><a title="Object.observe()&#xA0;&#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x5F02;&#x6B65;&#x5730;&#x76D1;&#x89C6;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x4FEE;&#x6539;&#x3002;&#x5F53;&#x5BF9;&#x8C61;&#x5C5E;&#x6027;&#x88AB;&#x4FEE;&#x6539;&#x65F6;&#xFF0C;&#x65B9;&#x6CD5;&#x7684;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x4F1A;&#x63D0;&#x4F9B;&#x4E00;&#x4E2A;&#x6709;&#x5E8F;&#x7684;&#x4FEE;&#x6539;&#x6D41;&#x3002;&#x7136;&#x800C;&#xFF0C;&#x8FD9;&#x4E2A;&#x63A5;&#x53E3;&#x5DF2;&#x7ECF;&#x88AB;&#x5E9F;&#x5F03;&#x5E76;&#x4ECE;&#x5404;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#x79FB;&#x9664;&#x3002;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x66F4;&#x901A;&#x7528;&#x7684;&#xA0;Proxy &#x5BF9;&#x8C61;&#x66FF;&#x4EE3;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/observe"><code>Object.observe()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></li>
 <li><a href="https://stackoverflow.com/q/29269057/778272" class="external">Under what condition would Array.observe&apos;s &#x201C;add&#x201D; event trigger?</a></li>
</ul>
                  
                
              