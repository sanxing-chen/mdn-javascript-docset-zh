
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>@@iterator</strong></code>&#xA0;&#x5C5E;&#x6027;&#x7684;&#x521D;&#x59CB;&#x503C;&#x662F;&#x548C; <a title="values() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#xA0;Array Iterator&#xA0;&#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x5305;&#x542B;&#x6570;&#x7EC4;&#x6BCF;&#x4E2A;&#x7D22;&#x5F15;&#x7684;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/values"><code>Array.prototype.values</code></a> &#x5C5E;&#x6027;&#x7684;&#x521D;&#x59CB;&#x503C;&#x76F8;&#x540C;&#x7684;&#x5BF9;&#x8C61;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><var>arguments</var>[Symbol.iterator]()</pre>

<h2 id="&#x5B9E;&#x4F8B;">&#x5B9E;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;for...of&#x5FAA;&#x73AF;&#x7684;&#x8FED;&#x4EE3;">&#x4F7F;&#x7528;<code>for...of</code>&#x5FAA;&#x73AF;&#x7684;&#x8FED;&#x4EE3;</h3>

<pre class="brush: js">function f() {
  // &#x4F60;&#x7684;&#x6D4F;&#x89C8;&#x5668;&#x5FC5;&#x987B;&#x652F;&#x6301; for..of &#x5FAA;&#x73AF;
  // &#x4EE5;&#x53CA; for &#x5FAA;&#x73AF;&#x4E2D;&#x7684; let &#x533A;&#x57DF;&#x53D8;&#x91CF;
  for (let letter of arguments) {
    console.log(letter);
  }
}
f(&apos;w&apos;, &apos;y&apos;, &apos;k&apos;, &apos;o&apos;, &apos;p&apos;);
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x5907;&#x6CE8;</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-createunmappedargumentsobject" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN"> CreateUnmappedArgumentsObject</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-createmappedargumentsobject" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN"> CreateMappedArgumentsObject</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">CreateUnmappedArgumentsObject</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-createmappedargumentsobject" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">CreateMappedArgumentsObject</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;</h2>

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
   <td>&#x57FA;&#x7840;&#x652F;&#x6301;</td>
   <td>52</td>
   <td><a title="Released on 2016-04-26." href="/en-US/Firefox/Releases/46">46</a> (46)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>9</td>
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
   <td>&#x57FA;&#x7840;&#x652F;&#x6301;</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>46.0 (46)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x66F4;&#x591A;">&#x66F4;&#x591A;</h2>

<ul>
 <li><a title="values() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#xA0;Array Iterator&#xA0;&#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x5305;&#x542B;&#x6570;&#x7EC4;&#x6BCF;&#x4E2A;&#x7D22;&#x5F15;&#x7684;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/values"><code>Array.prototype.values()</code></a></li>
</ul>
                  
                
              