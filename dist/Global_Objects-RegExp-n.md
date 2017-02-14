
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="overheadIndicator nonStandard nonStandardHeader">
      <p><strong><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> &#x975E;&#x6807;&#x51C6;</strong><br>
      &#x8BE5;&#x7279;&#x6027;&#x662F;&#x975E;&#x6807;&#x51C6;&#x7684;&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#xFF01;</p>
      </div></div>

<p>&#x975E;&#x6807;&#x51C6;<strong>$1, $2, $3, $4, $5, $6, $7, $8, $9 &#x662F;</strong>&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x62EC;&#x53F7;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x7684;&#x9759;&#x6001;&#x53EA;&#x8BFB;&#x5339;&#x914D;&#x9879;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>RegExp</var>.$1
RegExp.$2</code>
RegExp.$3
RegExp.$4
RegExp.$5
RegExp.$6
RegExp.$7
RegExp.$8
RegExp.$9
</pre>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>$1, ..., $9 &#x5C5E;&#x6027;&#x662F;&#x9759;&#x6001;&#x7684;, &#x4ED6;&#x4E0D;&#x662F;&#x72EC;&#x7ACB;&#x7684;&#x7684;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5C5E;&#x6027;. &#x6240;&#x4EE5;, &#x6211;&#x4EEC;&#x603B;&#x662F;&#x50CF;&#x8FD9;&#x6837;&#x5B50;&#x4F7F;&#x7528;&#x4ED6;&#x4EEC;<code>RegExp.$1</code>, ..., <code>RegExp.$9</code>.</p>

<p>&#x5C5E;&#x6027;&#x7684;&#x503C;&#x662F;&#x53EA;&#x8BFB;&#x7684;&#x800C;&#x4E14;&#x53EA;&#x6709;&#x5728;&#x6B63;&#x786E;&#x5339;&#x914D;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#x624D;&#x4F1A;&#x6539;&#x53D8;.</p>

<p>&#x62EC;&#x53F7;&#x5339;&#x914D;&#x9879;&#x662F;&#x65E0;&#x9650;&#x7684;, &#x4F46;&#x662F;RegExp&#x5BF9;&#x8C61;&#x80FD;&#x6355;&#x83B7;&#x7684;&#x53EA;&#x6709;&#x4E5D;&#x4E2A;. &#x4F60;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x7D22;&#x5F15;&#x6765;&#x53D6;&#x5F97;&#x6240;&#x6709;&#x7684;&#x62EC;&#x53F7;&#x5339;&#x914D;&#x9879;.</p>

<p>&#x8FD9;&#x4E9B;&#x5C5E;&#x6027;&#x53EF;&#x4EE5;&#x5728;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace" title="replace() &#x65B9;&#x6CD5;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x66FF;&#x6362;&#x503C;&#xFF08;replacement&#xFF09;&#x66FF;&#x6362;&#x6389;&#x4E00;&#x4E2A;&#x5339;&#x914D;&#x6A21;&#x5F0F;&#xFF08;pattern&#xFF09;&#x5728;&#x539F;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x67D0;&#x4E9B;&#x6216;&#x6240;&#x6709;&#x7684;&#x5339;&#x914D;&#x9879;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x66FF;&#x6362;&#x540E;&#x7684;&#x65B0;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x8FD9;&#x4E2A;&#x66FF;&#x6362;&#x6A21;&#x5F0F;&#x53EF;&#x4EE5;&#x662F;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x6216;&#x8005;&#x4E00;&#x4E2A;&#xA0;RegExp&#xFF0C;&#x66FF;&#x6362;&#x503C;&#x53EF;&#x4EE5;&#x662F;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x6216;&#x8005;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x3002;"><code>String.replace</code></a> &#x65B9;&#x6CD5;&#x4E2D;&#x66FF;&#x6362;&#x5B57;&#x7B26;&#x4E32;. &#x5728;&#x8FD9;&#x79CD;&#x60C5;&#x51B5;&#x4E0B;, &#x4E0D;&#x7528;&#x518D;&#x524D;&#x9762;&#x52A0;&#x4E0A;RegExp&#x3002;&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x5C06;&#x8BE6;&#x7EC6;&#x8BF4;&#x660E;. &#x5F53;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#x4E0D;&#x5305;&#x542B;&#x62EC;&#x53F7;, &#x811A;&#x672C;&#x4E2D;&#x7684;&#xA0;<code>$n</code>&apos;s &#x5C31;&#x662F;&#x5B57;&#x9762;&#x4E0A;&#x7684;&#x610F;&#x601D; (&#x5F53;n&#x662F;&#x6B63;&#x6574;&#x6570;).</p>

<h2 id="&#x4F8B;&#x5B50;">&#x4F8B;&#x5B50;</h2>

<h3 id="n_&#x5728;_String.replace&#x4E2D;&#x7684;&#x5E94;&#x7528;"><code>$n</code>&#xA0;&#x5728;&#xA0;<code>String.replace&#x4E2D;&#x7684;&#x5E94;&#x7528;</code></h3>

<p>&#x4EE5;&#x4E0B;&#x811A;&#x672C;&#x7528; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace" title="replace() &#x65B9;&#x6CD5;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x66FF;&#x6362;&#x503C;&#xFF08;replacement&#xFF09;&#x66FF;&#x6362;&#x6389;&#x4E00;&#x4E2A;&#x5339;&#x914D;&#x6A21;&#x5F0F;&#xFF08;pattern&#xFF09;&#x5728;&#x539F;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x67D0;&#x4E9B;&#x6216;&#x6240;&#x6709;&#x7684;&#x5339;&#x914D;&#x9879;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x66FF;&#x6362;&#x540E;&#x7684;&#x65B0;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x8FD9;&#x4E2A;&#x66FF;&#x6362;&#x6A21;&#x5F0F;&#x53EF;&#x4EE5;&#x662F;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x6216;&#x8005;&#x4E00;&#x4E2A;&#xA0;RegExp&#xFF0C;&#x66FF;&#x6362;&#x503C;&#x53EF;&#x4EE5;&#x662F;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x6216;&#x8005;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x3002;"><code>replace()</code></a> &#x65B9;&#x6CD5;&#x53BB;&#x5339;&#x914D;&#x4E00;&#x4E2A;first last&#x683C;&#x5F0F;&#x7684;&#xA0;name<a href="/zh-CN/docs/Web/JavaScript/Reference/String" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>String</code></a> &#x5B9E;&#x4F8B;&#xA0;&#x8F93;&#x51FA;last first&#x683C;&#x5F0F;. &#x5728;&#x66FF;&#x6362;&#x6587;&#x672C;&#x91CC;, &#x811A;&#x672C;&#x7528;&#xA0;<code>$1</code>&#xA0;&#x548C;&#xA0;<code>$2</code> &#x8868;&#x793A;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#x7684;&#x62EC;&#x53F7;&#x5339;&#x914D;&#x9879;&#x7684;&#x7ED3;&#x679C;.</p>

<pre class="brush: js">var re = /(\w+)\s(\w+)/;
var str = &apos;John Smith&apos;;
str.replace(re, &apos;$2, $1&apos;); // &quot;Smith, John&quot;
RegExp.$1; // &quot;John&quot;
RegExp.$2; // &quot;Smith&quot;
</pre>

<h2 id="&#x6280;&#x672F;&#x6307;&#x6807;">&#x6280;&#x672F;&#x6307;&#x6807;</h2>

<p>&#x975E;&#x6807;&#x51C6;. &#x4E0D;&#x5C5E;&#x4E8E;&#x5F53;&#x524D;&#x7684;&#x4EFB;&#x4F55;&#x89C4;&#x8303;.</p>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x9002;&#x914D;">&#x6D4F;&#x89C8;&#x5668;&#x9002;&#x914D;</h2>

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

<h2 id="&#x53C2;&#x89C1;">&#x53C2;&#x89C1;</h2>

<ul>
 <li><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>RegExp.input ($_)</code></a></li>
 <li><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>RegExp.lastMatch ($&amp;amp;)</code></a></li>
 <li><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>RegExp.lastParen ($+)</code></a></li>
 <li><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>RegExp.leftContext ($`)</code></a></li>
 <li><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>RegExp.rightContext ($&apos;)</code></a></li>
</ul>
                  
                
              