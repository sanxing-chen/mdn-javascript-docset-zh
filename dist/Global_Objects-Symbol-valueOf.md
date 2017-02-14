
                
                  
                    <div>
 <section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="overheadIndicator" style="background: #9CF49C;"> 
    <p><strong>&#x8BE5;&#x7279;&#x6027;&#x5904;&#x4E8E; ECMAScript 6 &#x89C4;&#x8303;&#x8349;&#x6848;&#x4E2D;&#xFF0C;&#x76EE;&#x524D;&#x7684;&#x5B9E;&#x73B0;&#x5728;&#x672A;&#x6765;&#x53EF;&#x80FD;&#x4F1A;&#x53D1;&#x751F;&#x5FAE;&#x8C03;&#xFF0C;&#x8BF7;&#x8C28;&#x614E;&#x4F7F;&#x7528;&#x3002;</strong></p> 
</div></div>
<h2 id="Summary" name="Summary">&#x6982;&#x8FF0;</h2>
<p><code><strong>valueOf()</strong></code> &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x5F53;&#x524D; symbol &#x5BF9;&#x8C61;&#x6240;&#x5305;&#x542B;&#x7684; symbol &#x539F;&#x59CB;&#x503C;&#x3002;</p>
<h2 id="Syntax" name="Syntax">&#x8BED;&#x6CD5;</h2>
<pre class="syntaxbox"><var>symbol.valueOf();
</var></pre>
<h2 id="Description" name="Description">&#x63CF;&#x8FF0;</h2>
<p>&#x5728; JavaScript &#x4E2D;&#xFF0C;&#x867D;&#x7136;&#x5927;&#x591A;&#x6570;&#x7C7B;&#x578B;&#x7684;&#x5BF9;&#x8C61;&#x5728;&#x67D0;&#x4E9B;&#x64CD;&#x4F5C;&#x4E0B;&#x90FD;&#x4F1A;&#x81EA;&#x52A8;&#x7684;&#x9690;&#x5F0F;&#x8C03;&#x7528;&#x81EA;&#x8EAB;&#x7684; <code>valueOf()</code>&#xA0;&#x65B9;&#x6CD5;&#x6216;&#x8005; <code>toString()</code>&#xA0;&#x65B9;&#x6CD5;&#x6765;&#x5C06;&#x81EA;&#x5DF1;&#x8F6C;&#x6362;&#x6210;&#x4E00;&#x4E2A;&#x539F;&#x59CB;&#x503C;&#xFF0C;&#x4F46; symbol &#x5BF9;&#x8C61;&#x4E0D;&#x4F1A;&#x8FD9;&#x4E48;&#x5E72;&#xFF0C;symbol &#x5BF9;&#x8C61;&#x65E0;&#x6CD5;&#x9690;&#x5F0F;&#x8F6C;&#x6362;&#x6210;&#x5BF9;&#x5E94;&#x7684;&#x539F;&#x59CB;&#x503C;&#xFF1A;</p>
<pre class="brush: js">Object(Symbol(&quot;foo&quot;)) + &quot;bar&quot;;
// TypeError: can&apos;t convert symbol object to primitive
// &#x65E0;&#x6CD5;&#x9690;&#x5F0F;&#x7684;&#x8C03;&#x7528; valueOf() &#x65B9;&#x6CD5;

Object(Symbol(&quot;foo&quot;)).valueOf() + &quot;bar&quot;;
// TypeError:  can&apos;t convert symbol to string
// &#x624B;&#x52A8;&#x8C03;&#x7528; valueOf() &#x65B9;&#x6CD5;&#xFF0C;&#x867D;&#x7136;&#x8F6C;&#x6362;&#x6210;&#x4E86;&#x539F;&#x59CB;&#x503C;&#xFF0C;&#x4F46; symbol &#x539F;&#x59CB;&#x503C;&#x4E0D;&#x80FD;&#x8F6C;&#x6362;&#x4E3A;&#x5B57;&#x7B26;&#x4E32;

Object(Symbol(&quot;foo&quot;)).toString() + &quot;bar&quot;;
// &quot;Symbol(foo)bar&quot;&#xFF0C;&#x9700;&#x8981;&#x624B;&#x52A8;&#x8C03;&#x7528; toString() &#x65B9;&#x6CD5;&#x624D;&#x884C;
</pre>
<h2 id=".E8.A7.84.E8.8C.83">&#x89C4;&#x8303;</h2>
<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a class="external" href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-symbol.prototype.valueof" hreflang="en" lang="en">ECMAScript 6 (ECMA-262)<br><small lang="zh-CN">Symbol.prototype.valueOf</small></a></td>
   <td><span class="spec-RC">Release Candidate</span></td>
   <td>Initial definition.</td>
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
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><a href="/en-US/Firefox/Releases/33" title="Released on 2014-10-14.">33.0</a> (33.0)</td>
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
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td>33.0 (33.0)</td>
    <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
    <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
    <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   </tr>
  </tbody>
 </table>
</div>
<h2 id="See_Also" name="See_Also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>
<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf" title="The&#xA0;valueOf()&#xA0;method returns the primitive value of the specified object."><code>Object.prototype.valueOf()</code></a></li>
</ul>
                  
                
              