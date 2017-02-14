
                
                  
                    <div>
<div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>
</div>

<h2 id="Summary" name="Summary">&#x6982;&#x8FF0;</h2>

<p><span class="seoSummary"><strong>&#x9017;&#x53F7;&#x64CD;&#x4F5C;&#x7B26;</strong>&#xA0;&#x5BF9;&#x5B83;&#x7684;&#x6BCF;&#x4E2A;&#x64CD;&#x4F5C;&#x5BF9;&#x8C61;&#x6C42;&#x503C;&#xFF08;&#x4ECE;&#x5DE6;&#x81F3;&#x53F3;&#xFF09;&#xFF0C;&#x7136;&#x540E;&#x8FD4;&#x56DE;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x64CD;&#x4F5C;&#x5BF9;&#x8C61;&#x7684;&#x503C;&#x3002;</span></p>

<h2 id=".E8.AF.AD.E6.B3.95">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><em>expr1</em>, <em>expr2, expr3...</em></pre>

<h2 id=".E5.8F.82.E6.95.B0">&#x53C2;&#x6570;</h2>

<dl>
 <dt><code>expr1</code>, <code>expr2, expr3...</code></dt>
 <dd>&#x4EFB;&#x4E00;&#x8868;&#x8FBE;&#x5F0F;&#x3002;</dd>
</dl>

<h2 id=".E6.8F.8F.E8.BF.B0">&#x63CF;&#x8FF0;</h2>

<p>&#x5F53;&#x4F60;&#x60F3;&#x8981;&#x5728;&#x671F;&#x671B;&#x4E00;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;&#x7684;&#x4F4D;&#x7F6E;&#x5305;&#x542B;&#x591A;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;&#x65F6;&#xFF0C;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x9017;&#x53F7;&#x64CD;&#x4F5C;&#x7B26;&#x3002;&#x8FD9;&#x4E2A;&#x64CD;&#x4F5C;&#x7B26;&#x6700;&#x5E38;&#x7528;&#x7684;&#x4E00;&#x79CD;&#x60C5;&#x51B5;&#x662F;&#xFF1A;<code>for</code>&#xA0;&#x5FAA;&#x73AF;&#x4E2D;&#x63D0;&#x4F9B;&#x591A;&#x4E2A;&#x53C2;&#x6570;&#x3002;</p>

<h2 id=".E7.A4.BA.E4.BE.8B">&#x793A;&#x4F8B;</h2>

<p>&#x5047;&#x8BBE; <code>a</code>&#xA0;&#x662F;&#x4E00;&#x4E2A;&#x4E8C;&#x7EF4;&#x6570;&#x7EC4;&#xFF0C;&#x6BCF;&#x4E00;&#x7EF4;&#x5EA6;&#x5305;&#x542B;10&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x5219;&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x4F7F;&#x7528;&#x9017;&#x53F7;&#x64CD;&#x4F5C;&#x7B26;&#x4E00;&#x6B21;&#x9012;&#x589E;/&#x9012;&#x51CF;&#x4E24;&#x4E2A;&#x53D8;&#x91CF;&#x3002;&#x9700;&#x8981;&#x6CE8;&#x610F;&#x7684;&#x662F;&#xFF0C;<code>var</code>&#xA0;&#x8BED;&#x53E5;&#x4E2D;&#x7684;&#x9017;&#x53F7;<em><strong>&#x4E0D;&#x662F;</strong></em>&#x9017;&#x53F7;&#x64CD;&#x4F5C;&#x7B26;&#xFF0C;&#x56E0;&#x4E3A;&#x5B83;&#x4E0D;&#x662F;&#x5B58;&#x5728;&#x4E8E;&#x4E00;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#x3002;&#x5C3D;&#x7BA1;&#x4ECE;&#x5B9E;&#x9645;&#x6548;&#x679C;&#x6765;&#x770B;&#xFF0C;&#x90A3;&#x4E2A;&#x9017;&#x53F7;&#x540C;&#x9017;&#x53F7;&#x8FD0;&#x7B97;&#x7B26;&#x7684;&#x8868;&#x73B0;&#x5F88;&#x76F8;&#x4F3C;&#x3002;&#x4F46;&#x786E;&#x5207;&#x5730;&#x8BF4;&#xFF0C;&#x5B83;&#x662F;&#xA0;<code style="font-style: normal;">var</code>&#xA0;&#x8BED;&#x53E5;&#x4E2D;&#x7684;&#x4E00;&#x4E2A;&#x7279;&#x6B8A;&#x7B26;&#x53F7;&#xFF0C;&#x7528;&#x4E8E;&#x628A;&#x591A;&#x4E2A;&#x53D8;&#x91CF;&#x58F0;&#x660E;&#x7ED3;&#x5408;&#x6210;&#x4E00;&#x4E2A;&#x3002;&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x6253;&#x5370;&#x4E00;&#x4E2A;&#x4E8C;&#x7EF4;&#x6570;&#x7EC4;&#x4E2D;&#x659C;&#x7EBF;&#x65B9;&#x5411;&#x7684;&#x5143;&#x7D20;&#xFF1A;</p>

<pre class="brush:js;highlight:[1]">for (var i = 0, j = 9; i &lt;= 9; i++, j--)
  document.writeln(&quot;a[&quot; + i + &quot;][&quot; + j + &quot;] = &quot; + a[i][j]);</pre>

<h3 id=".E5.A4.84.E7.90.86.E4.B9.8B.E5.90.8E.E8.BF.94.E5.9B.9E">&#x5904;&#x7406;&#x4E4B;&#x540E;&#x8FD4;&#x56DE;</h3>

<p>&#x53E6;&#x4E00;&#x4E2A;&#x4F7F;&#x7528;&#x9017;&#x53F7;&#x64CD;&#x4F5C;&#x7B26;&#x7684;&#x4F8B;&#x5B50;&#x662F;&#x5728;&#x8FD4;&#x56DE;&#x503C;&#x524D;&#x5904;&#x7406;&#x4E00;&#x4E9B;&#x64CD;&#x4F5C;&#x3002;&#x5982;&#x540C;&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#xFF0C;&#x53EA;&#x6709;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;&#x88AB;&#x8FD4;&#x56DE;&#xFF0C;&#x5176;&#x4ED6;&#x7684;&#x90FD;&#x53EA;&#x662F;&#x88AB;&#x6C42;&#x503C;&#x3002;</p>

<pre>function myFunc () {
  var x = 0;

  return (x += 1, x); // the same of return ++x;
}</pre>

<h2 id=".E8.A7.84.E8.8C.83">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition.</td>
   <td>Standard</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a class="external" href="http://www.ecma-international.org/ecma-262/5.1/#sec-11.14" hreflang="en" lang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Comma operator</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a class="external" href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-comma-operator" hreflang="en" lang="en">ECMAScript 6 (ECMA-262)<br><small lang="zh-CN">Comma operator</small></a></td>
   <td><span class="spec-RC">Release Candidate</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id=".E6.B5.8F.E8.A7.88.E5.99.A8.E5.85.BC.E5.AE.B9.E6.80.A7">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<p></p><div class="htab"> 
    <a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a> 
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
   <td>Yes</td>
   <td>Yes</td>
   <td>3.0</td>
   <td>Yes</td>
   <td>Yes</td>
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
   <td>Yes</td>
   <td>Yes</td>
   <td>Yes</td>
   <td>Yes</td>
   <td>Yes</td>
   <td>Yes</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also" name="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Statements/for">for loop</a></li>
</ul>
                  
                
              