
                
                  
                    <div>
 <section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="overheadIndicator nonStandard nonStandardHeader"> 
      <p><strong><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> &#x975E;&#x6807;&#x51C6;</strong><br> 
      &#x8BE5;&#x7279;&#x6027;&#x662F;&#x975E;&#x6807;&#x51C6;&#x7684;&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#xFF01;</p> 
      </div> <div class="overheadIndicator deprecated deprecatedHeader"> 
            <p><strong><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span> &#x5DF2;&#x5E9F;&#x5F03;</strong><br>&#x8BE5;&#x7279;&#x6027;&#x5DF2;&#x7ECF;&#x4ECE; Web &#x6807;&#x51C6;&#x4E2D;&#x5220;&#x9664;&#xFF0C;&#x867D;&#x7136;&#x4E00;&#x4E9B;&#x6D4F;&#x89C8;&#x5668;&#x76EE;&#x524D;&#x4ECD;&#x7136;&#x652F;&#x6301;&#x5B83;&#xFF0C;&#x4F46;&#x4E5F;&#x8BB8;&#x4F1A;&#x5728;&#x672A;&#x6765;&#x7684;&#x67D0;&#x4E2A;&#x65F6;&#x95F4;&#x505C;&#x6B62;&#x652F;&#x6301;&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x4F7F;&#x7528;&#x8BE5;&#x7279;&#x6027;&#x3002;</p> 
        </div></div>
<h2 id="Summary" name="Summary"><span class="def"><span>&#x6982;&#x8FF0;</span></span></h2>
<p><code><strong>__defineSetter__ </strong>&#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x5C06;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x7ED1;&#x5B9A;&#x5728;&#x5F53;&#x524D;&#x5BF9;&#x8C61;&#x7684;&#x6307;&#x5B9A;&#x5C5E;&#x6027;</code>&#x4E0A;&#xFF0C;&#x5F53;&#x90A3;&#x4E2A;&#x5C5E;&#x6027;&#x88AB;&#x8D4B;&#x503C;&#x65F6;&#xFF0C;&#x4F60;&#x6240;&#x7ED1;&#x5B9A;&#x7684;&#x51FD;&#x6570;&#x5C31;&#x4F1A;&#x88AB;&#x8C03;&#x7528;&#x3002;</p>
<h2 id="Syntax" name="Syntax">&#x8BED;&#x6CD5;</h2>
<pre class="syntaxbox"><code><var>obj</var>.__defineSetter__(<var>prop</var>, <var>fun</var>)</code></pre>
<h3 id="Parameters" name="Parameters">&#x53C2;&#x6570;</h3>
<dl>
 <dt>
  <code>prop</code></dt>
 <dd>
  &#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8868;&#x793A;&#x6307;&#x5B9A;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x3002;</dd>
 <dt>
  <code>fun</code></dt>
 <dd>
  &#x4E00;&#x4E2A;&#x51FD;&#x6570;&#xFF0C;&#x5F53;&#x8BD5;&#x56FE;&#x53BB;&#x4E3A; <code>sprop</code> &#x5C5E;&#x6027;&#x8D4B;&#x503C;&#x65F6;&#x88AB;&#x8C03;&#x7528;&#x3002;&#x901A;&#x5E38;&#x4F60;&#x8981;&#x7ED9;&#x8FD9;&#x4E2A;&#x51FD;&#x6570;&#x6307;&#x5B9A;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#xFF1A;<br>
  <pre>function(<var>val</var>) { . . . }</pre>
  <dl>
   <dt>
    <code>val</code></dt>
   <dd>
    &#x4EFB;&#x610F;&#x7684;&#x53C2;&#x6570;&#x540D;&#xFF0C;&#x5728; fun &#x88AB;&#x8C03;&#x7528;&#x65F6;&#xFF0C;&#x8BE5;&#x53C2;&#x6570;&#x7684;&#x503C;&#x5C31;&#x662F;&#x5C1D;&#x8BD5;&#x7ED9; <code>sprop</code> &#x5C5E;&#x6027;&#x6240;&#x8D4B;&#x7684;&#x503C;&#x3002;</dd>
  </dl>
 </dd>
</dl>
<h2 id="Description" name="Description">&#x63CF;&#x8FF0;</h2>
<p><code>__defineSetter__</code> &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x4E3A;&#x4E00;&#x4E2A;&#x5DF2;&#x7ECF;&#x5B58;&#x5728;&#x7684;&#x5BF9;&#x8C61;&#x8BBE;&#x7F6E;&#xFF08;&#x65B0;&#x5EFA;&#x6216;&#x4FEE;&#x6539;&#xFF09;&#x8BBF;&#x95EE;&#x5668;&#x5C5E;&#x6027;&#xFF0C;&#x800C; <a class="new" href="/zh-CN/docs/Web/JavaScript/Reference/Operators/set" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!">&#x5BF9;&#x8C61;&#x5B57;&#x9762;&#x91CF;&#x4E2D;&#x7684; set &#x8BED;&#x6CD5;</a> &#x53EA;&#x80FD;&#x5728;&#x65B0;&#x5EFA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x65F6;&#x4F7F;&#x7528;&#x3002;</p>
<h2 id="Specifications" name="Specifications">&#x89C4;&#x8303;</h2>
<p>&#x4E0D;&#x5C5E;&#x4E8E;&#x4EFB;&#x4F55;&#x89C4;&#x8303;&#x3002;</p>
<h2 id="Browser_compatibility" name="Browser_compatibility"><span class="def"><span>&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</span></span></h2>
<div>
 <div class="htab"> 
    <a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a> 
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
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td>11</td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
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
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: rgb(255, 153, 0);" title="Compatibility unknown; please update this.">?</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   </tr>
  </tbody>
 </table>
</div>
<h2 id="See_also" name="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>
<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__" title="__defineGetter__ &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x5C06;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x7ED1;&#x5B9A;&#x5728;&#x5F53;&#x524D;&#x5BF9;&#x8C61;&#x7684;&#x6307;&#x5B9A;&#x5C5E;&#x6027;&#x4E0A;&#xFF0C;&#x5F53;&#x90A3;&#x4E2A;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x88AB;&#x8BFB;&#x53D6;&#x65F6;&#xFF0C;&#x4F60;&#x6240;&#x7ED1;&#x5B9A;&#x7684;&#x51FD;&#x6570;&#x5C31;&#x4F1A;&#x88AB;&#x8C03;&#x7528;&#x3002;"><code>Object.prototype.__defineGetter__()</code></a></li>
 <li><a class="new" href="/zh-CN/docs/Web/JavaScript/Reference/Operators/set" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>set</code></a> operator</li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" title="Object.defineProperty() &#x65B9;&#x6CD5;&#x76F4;&#x63A5;&#x5728;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4E0A;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x65B0;&#x5C5E;&#x6027;&#xFF0C;&#x6216;&#x8005;&#x4FEE;&#x6539;&#x4E00;&#x4E2A;&#x5DF2;&#x7ECF;&#x5B58;&#x5728;&#x7684;&#x5C5E;&#x6027;&#xFF0C; &#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x3002;"><code>Object.defineProperty()</code></a></li>
 <li><a class="new" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Object.prototype.__lookupSetter__()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters">JS &#x6307;&#x5357;: &#x5B9A;&#x4E49; Getter &#x548C; Setter</a></li>
 <li><a class="external" href="http://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/">[&#x4E2A;&#x4EBA;&#x535A;&#x5BA2;] defineGetter__ &#x548C; __defineSetter__</a>&#x5DF2;&#x88AB;&#x5E9F;&#x5F03;</li>
</ul>
                  
                
              