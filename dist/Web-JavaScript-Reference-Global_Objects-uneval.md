
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section><div class="overheadIndicator nonStandard nonStandardHeader"> 
      <p><strong><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> &#x975E;&#x6807;&#x51C6;</strong><br> 
      &#x8BE5;&#x7279;&#x6027;&#x662F;&#x975E;&#x6807;&#x51C6;&#x7684;&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#xFF01;</p> 
      </div></div>

<p><code><strong>uneval()</strong></code> &#x51FD;&#x6570;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x4EE3;&#x8868;&#x5BF9;&#x8C61;&#x7684;&#x6E90;&#x4EE3;&#x7801;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">uneval(<var>object</var>)</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>object</code></dt>
 <dd>JavaScript &#x8868;&#x8FBE;&#x5F0F;&#x6216;&#x8005;&#x8BED;&#x53E5;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<dl>
 <dd>&#x8868;&#x793A;&#x7ED9;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x6E90;&#x4EE3;&#x7801;&#x7684;&#x5B57;&#x7B26;&#x4E32;</dd>
</dl>

<div class="note"><strong>&#x6CE8;&#x610F;:</strong>&#xA0;&#x65E0;&#x6CD5;&#x901A;&#x8FC7;&#x6B64;&#x65B9;&#x6CD5;&#x83B7;&#x53D6;&#x5BF9;&#x8C61;&#x7684;&#xA0;JSON &#x5F62;&#x5F0F;</div>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>uneval()</code>&#xA0;&#x662F;&#x4E00;&#x4E2A;&#x9876;&#x7EA7;&#x51FD;&#x6570;&#x5E76;&#x4E14;&#x4E0D;&#x4E0E;&#x4EFB;&#x4F55;&#x5BF9;&#x8C61;&#x5173;&#x8054;</p>

<h2 id="&#x5B9E;&#x4F8B;">&#x5B9E;&#x4F8B;</h2>

<pre class="brush:js">var a = 1;
uneval(a); // returns a String containing 1

var b = &quot;1&quot;;
uneval(b) // returns a String containing &quot;1&quot;

uneval(function foo(){}); // returns &quot;(function foo(){})&quot;


var a = uneval(function foo(){return &apos;hi&apos;});
var foo = eval(a);
foo(); // returns &quot;hi&quot;
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<p>&#x6CA1;&#x6709;&#x88AB;&#x6807;&#x51C6;&#x5316;.</p>

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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="&#x5C06;&#x4E00;&#x4E2A;JavaScript&#x4EE3;&#x7801;&#x5B57;&#x7B26;&#x4E32;&#x6C42;&#x503C;&#x6210;&#x7279;&#x5B9A;&#x7684;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval"><code>eval()</code></a></li>
 <li><a title="JSON.stringify() &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x5C06;&#x4EFB;&#x610F;&#x7684; JavaScript &#x503C;&#x5E8F;&#x5217;&#x5316;&#x6210; JSON &#x5B57;&#x7B26;&#x4E32;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"><code>JSON.stringify</code></a></li>
 <li><a title="JSON.parse() &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x5C06;&#x4E00;&#x4E2A; JSON &#x5B57;&#x7B26;&#x4E32;&#x89E3;&#x6790;&#x6210;&#x4E3A;&#x4E00;&#x4E2A; JavaScript &#x503C;&#x3002;&#x5728;&#x89E3;&#x6790;&#x8FC7;&#x7A0B;&#x4E2D;&#xFF0C;&#x8FD8;&#x53EF;&#x4EE5;&#x9009;&#x62E9;&#x6027;&#x7684;&#x4FEE;&#x6539;&#x67D0;&#x4E9B;&#x5C5E;&#x6027;&#x7684;&#x539F;&#x59CB;&#x89E3;&#x6790;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse"><code>JSON.parse</code></a></li>
 <li><a title="&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x6E90;&#x4EE3;&#x7801;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource"><code>Object.toSource</code></a></li>
</ul>
                  
                
              