
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section> <div class="overheadIndicator nonStandard nonStandardHeader"> 
      <p><strong><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> &#x975E;&#x6807;&#x51C6;</strong><br> 
      &#x8BE5;&#x7279;&#x6027;&#x662F;&#x975E;&#x6807;&#x51C6;&#x7684;&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#xFF01;</p> 
      </div></div>

<p>Array<strong>.unobserve()&#x65B9;&#x6CD5;&#x7528;&#x6765;&#x79FB;&#x9664;</strong><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/observe" title="Array.observe() &#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x5F02;&#x6B65;&#x76D1;&#x89C6;&#x6570;&#x7EC4;&#x53D1;&#x751F;&#x7684;&#x53D8;&#x5316;&#xFF0C;&#x7C7B;&#x4F3C;&#x4E8E;&#x9488;&#x5BF9;&#x5BF9;&#x8C61;&#x7684; Object.observe() &#x3002;&#x5F53;&#x6570;&#x7EC4;&#x7684;&#x503C;&#x53D1;&#x751F;&#x53D8;&#x5316;&#x65F6;&#xFF0C;&#x5B83;&#x6309;&#x53D1;&#x751F;&#x987A;&#x5E8F;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x53D8;&#x5316;&#x6D41;&#x3002;&#x4E0E; Object.observe() &#x7C7B;&#x4F3C;&#xFF0C;&#x5B83;&#x7531;&#x5982;&#x4E0B;&#x53EF;&#x63A5;&#x53D7;&#x7684;&#x53D8;&#x5316;&#x7C7B;&#x578B;&#x5217;&#x8868;[&quot;add&quot;&#x3001;&quot;update&quot;&#x3001;&quot;delete&quot;&#x3001;&quot;splice&quot;]&#x89E6;&#x53D1;&#x3002;"><code>Array.observe()</code></a>&#x8BBE;&#x7F6E;&#x7684;&#x6240;&#x6709;&#x89C2;&#x5BDF;&#x8005;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>Array.unobserve(<var>arr</var>, <var>callback</var>)</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>arr</code></dt>
 <dd>&#x505C;&#x6B62;&#x89C2;&#x5BDF;&#x7684;&#x6570;&#x7EC4;&#x3002;</dd>
 <dt>&#xA0;</dt>
 <dt><code>callback&#x56DE;&#x8C03;</code></dt>
 <dd>&#x9700;&#x8981;&#x505C;&#x6B62;&#x7684;array&#xA0;<strong>arr</strong>&#x6BCF;&#x6B21;&#x6539;&#x53D8;&#x90FD;&#x4F1A;&#x8C03;&#x7528;&#x7684;&#x51FD;&#x6570;&#x5F15;&#x7528;&#x3002;</dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>Array.unobserve()</code>&#xA0;&#x65B9;&#x6CD5;&#x56E0;&#x4E3A;&#x8981;&#x79FB;&#x9664;&#x89C2;&#x5BDF;&#x8005;&#xFF0C;&#x6240;&#x4EE5;&#x5E94;&#x8BE5;&#x5728;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/observe" title="Array.observe() &#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x5F02;&#x6B65;&#x76D1;&#x89C6;&#x6570;&#x7EC4;&#x53D1;&#x751F;&#x7684;&#x53D8;&#x5316;&#xFF0C;&#x7C7B;&#x4F3C;&#x4E8E;&#x9488;&#x5BF9;&#x5BF9;&#x8C61;&#x7684; Object.observe() &#x3002;&#x5F53;&#x6570;&#x7EC4;&#x7684;&#x503C;&#x53D1;&#x751F;&#x53D8;&#x5316;&#x65F6;&#xFF0C;&#x5B83;&#x6309;&#x53D1;&#x751F;&#x987A;&#x5E8F;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x53D8;&#x5316;&#x6D41;&#x3002;&#x4E0E; Object.observe() &#x7C7B;&#x4F3C;&#xFF0C;&#x5B83;&#x7531;&#x5982;&#x4E0B;&#x53EF;&#x63A5;&#x53D7;&#x7684;&#x53D8;&#x5316;&#x7C7B;&#x578B;&#x5217;&#x8868;[&quot;add&quot;&#x3001;&quot;update&quot;&#x3001;&quot;delete&quot;&#x3001;&quot;splice&quot;]&#x89E6;&#x53D1;&#x3002;"><code>Array.observe()</code></a>&#x8C03;&#x7528;&#x540E;&#x8C03;&#x7528;&#x3002;</p>

<p>&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x5E94;&#x8BE5;&#x662F;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x7684;&#x5F15;&#x7528;&#x5E76;&#x4E14;&#x4E0D;&#x80FD;&#x662F;&#x533F;&#x540D;&#x51FD;&#x6570;&#xFF0C; &#x56E0;&#x4E3A;&#x8FD9;&#x4E2A;&#x51FD;&#x6570;&#x9700;&#x8981;&#x7528;&#x6765;&#x79FB;&#x9664;&#x524D;&#x9762;&#x7684;&#x89C2;&#x5BDF;&#x8005;&#xFF0C; &#x5982;&#x679C;&#x7528;&#x533F;&#x540D;&#x51FD;&#x6570;&#x662F;&#x6CA1;&#x6709;&#x7528;&#x7684;&#xFF0C;&#x5C06;&#x4E0D;&#x80FD;&#x79FB;&#x9664;&#x4EFB;&#x4F55;&#x89C2;&#x5BDF;&#x8005;&#x3002;</p>

<h2 id="&#x4F8B;&#x5B50;">&#x4F8B;&#x5B50;</h2>

<h3 id="&#x505C;&#x6B62;&#x89C2;&#x5BDF;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;">&#x505C;&#x6B62;&#x89C2;&#x5BDF;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;</h3>

<pre class="brush: js">var arr = [1, 2, 3];

var observer = function(changes) {
&#xA0; console.log(changes);
}

Array.observe(arr, observer);
&#x200B;
arr.push(4);
// [{type: &quot;splice&quot;, object: &lt;arr&gt;, index: 3, removed:[], addedCount: 1}]

Array.unobserve(arr, observer);

arr.pop();
// The callback wasn&apos;t called</pre>

<h3 id="&#x4F7F;&#x7528;&#x533F;&#x540D;&#x51FD;&#x6570;">&#x4F7F;&#x7528;&#x533F;&#x540D;&#x51FD;&#x6570;</h3>

<pre class="brush: js">var persons = [&apos;Khalid&apos;, &apos;Ahmed&apos;, &apos;Mohammed&apos;];

Array.observe(persons, function (changes) {
&#xA0; console.log(changes);
});

persons.shift(); 
// [{type: &quot;splice&quot;, object: &lt;arr&gt;, index: 0, removed: [ &quot;Khalid&quot; ], addedCount: 0 }]

Array.unobserve(persons, function (changes) {
&#xA0; console.log(changes);
});

persons.push(&apos;Abdullah&apos;);
// [{type: &quot;splice&quot;, object: &lt;arr&gt;, index: 2, removed: [], addedCount: 1 }]
// The callback will always be called
</pre>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
   <th>&#x7279;&#x6027;</th>
   <th>Chrome</th>
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>&#x57FA;&#x7840;&#x652F;&#x6301;</td>
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
   <th>&#x7279;&#x6027;</th>
   <th>Android</th>
   <th>Chrome for Android</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>&#x57FA;&#x7840;&#x652F;&#x6301;</td>
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

<h2 id="&#x76F8;&#x5173;&#x5185;&#x5BB9;">&#x76F8;&#x5173;&#x5185;&#x5BB9;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/observe" title="Array.observe() &#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x5F02;&#x6B65;&#x76D1;&#x89C6;&#x6570;&#x7EC4;&#x53D1;&#x751F;&#x7684;&#x53D8;&#x5316;&#xFF0C;&#x7C7B;&#x4F3C;&#x4E8E;&#x9488;&#x5BF9;&#x5BF9;&#x8C61;&#x7684; Object.observe() &#x3002;&#x5F53;&#x6570;&#x7EC4;&#x7684;&#x503C;&#x53D1;&#x751F;&#x53D8;&#x5316;&#x65F6;&#xFF0C;&#x5B83;&#x6309;&#x53D1;&#x751F;&#x987A;&#x5E8F;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x53D8;&#x5316;&#x6D41;&#x3002;&#x4E0E; Object.observe() &#x7C7B;&#x4F3C;&#xFF0C;&#x5B83;&#x7531;&#x5982;&#x4E0B;&#x53EF;&#x63A5;&#x53D7;&#x7684;&#x53D8;&#x5316;&#x7C7B;&#x578B;&#x5217;&#x8868;[&quot;add&quot;&#x3001;&quot;update&quot;&#x3001;&quot;delete&quot;&#x3001;&quot;splice&quot;]&#x89E6;&#x53D1;&#x3002;"><code>Array.observe()</code></a> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/observe" title="Object.observe()&#xA0;&#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x5F02;&#x6B65;&#x7684;&#x76D1;&#x89C6;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x4FEE;&#x6539;&#x3002;&#x5F53;&#x5BF9;&#x8C61;&#x5C5E;&#x6027;&#x88AB;&#x4FEE;&#x6539;&#x65F6;&#xFF0C;&#x65B9;&#x6CD5;&#x7684;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x4F1A;&#x63D0;&#x4F9B;&#x4E00;&#x4E2A;&#x6709;&#x5E8F;&#x7684;&#x4FEE;&#x6539;&#x6D41;&#x3002;"><code>Object.observe()</code></a> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/unobserve" title="Object.unobserve()&#xA0;&#x662F;&#x7528;&#x6765;&#x79FB;&#x9664;&#x901A;&#x8FC7; Object.observe()&#x8BBE;&#x7F6E;&#x7684;&#x89C2;&#x5BDF;&#x8005;&#x7684;&#x65B9;&#x6CD5;&#x3002;"><code>Object.unobserve()</code></a> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></li>
</ul>
                  
                
              