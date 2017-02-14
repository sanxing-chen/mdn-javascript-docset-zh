
                
                  
                    <p></p><section class="Quick_links" id="Quick_Links"><!-- --></section><p></p>

<h2 id="&#x6982;&#x8FF0;">&#x6982;&#x8FF0;</h2>

<p><strong><code>Symbol.hasInstance &#x7528;&#x4E8E;&#x5224;&#x65AD;&#x67D0;&#x5BF9;&#x8C61;&#x662F;&#x5426;&#x4E3A;&#x67D0;&#x6784;&#x9020;&#x5668;&#x7684;&#x5B9E;&#x4F8B;&#x3002;</code></strong>&#xA0;&#x56E0;&#x6B64;&#x4F60;&#x53EF;&#x4EE5;&#x7528;&#x5B83;&#x81EA;&#x5B9A;&#x4E49; <a title="instanceof &#x8FD0;&#x7B97;&#x7B26;&#x7528;&#x6765;&#x6D4B;&#x8BD5;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5728;&#x5176;&#x539F;&#x578B;&#x94FE;&#x4E2D;&#x662F;&#x5426;&#x5B58;&#x5728;&#x4E00;&#x4E2A;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#xA0;prototype&#xA0;&#x5C5E;&#x6027;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof"><code>instanceof</code></a> &#x64CD;&#x4F5C;&#x7B26;&#x5728;&#x67D0;&#x4E2A;&#x7C7B;&#x4E0A;&#x7684;&#x884C;&#x4E3A;&#x3002;</p>

<div><table class="standard-table"> 
  <thead> 
    <tr> 
      <th colspan="2" class="header"><code>Symbol.hasInstance</code> &#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x7279;&#x6027;&#xFF1A;</th> 
    </tr> 
  </thead> 
  <tbody> 
    <tr> 
      <td>writable</td> 
      <td>false</td> 
    </tr> 
    <tr> 
      <td>enumerable</td> 
      <td>false</td> 
    </tr> 
    <tr> 
      <td>configurable</td> 
      <td>false</td> 
    </tr> 
  </tbody> 
</table></div>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<p><code><font face="Open Sans, Arial, sans-serif">&#x4F8B;&#x5982;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x8FD9;&#x6837;&#x6765;&#x81EA;&#x5B9A;&#x4E49;&#xA0;</font></code>MyArray &#x7684;&#xA0;<code>instanceof&#xA0;</code>&#x884C;&#x4E3A;:</p>

<pre class="brush: js">class MyArray {  
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}
console.log([] instanceof MyArray); // true</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x6587;&#x6863;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x5907;&#x6CE8;</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-symbol.hasinstance" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Symbol.hasInstance</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-symbol.hasinstance" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Symbol.hasInstance</small></a></td>
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
   <td>51</td>
   <td><a title="Released on 2016-11-08." href="/en-US/Firefox/Releases/50">50</a> (50)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
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
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>50.0 (50)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x53C2;&#x8003;">&#x53C2;&#x8003;</h2>

<ul>
 <li><a title="instanceof &#x8FD0;&#x7B97;&#x7B26;&#x7528;&#x6765;&#x6D4B;&#x8BD5;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5728;&#x5176;&#x539F;&#x578B;&#x94FE;&#x4E2D;&#x662F;&#x5426;&#x5B58;&#x5728;&#x4E00;&#x4E2A;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#xA0;prototype&#xA0;&#x5C5E;&#x6027;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof"><code>instanceof</code></a></li>
</ul>
                  
                
              