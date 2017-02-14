
                
                  
                    <div>
 <section class="Quick_links" id="Quick_Links"><!-- --></section></div>
<h2 id="Summary" name="Summary">&#x6982;&#x8FF0;</h2>
<p><code><strong>toString()</strong></code> &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x9519;&#x8BEF;&#x5BF9;&#x8C61;&#xFF08;Error object&#xFF09;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x3002;</p>
<h2 id="Syntax" name="Syntax">&#x8BED;&#x6CD5;</h2>
<pre class="syntaxbox"><code><em>e</em>.toString();</code></pre>
<h2 id="Description" name="Description">&#x63CF;&#x8FF0;</h2>
<p><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error" title="&#x521B;&#x5EFA;&#x4E00;&#x4E2A;error&#x5BF9;&#x8C61;&#x3002;&#x5F53;&#x53D1;&#x751F;&#x8FD0;&#x884C;&#x65F6;&#x5F02;&#x5E38;&#x65F6;,&#x5176;&#x5B9E;&#x4F8B;&#x4F1A;&#x88AB;&#x629B;&#x51FA;.Error&#x5BF9;&#x8C61;&#x53EF;&#x4F5C;&#x4E3A;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x5F02;&#x5E38;&#x7684;&#x57FA;&#x5BF9;&#x8C61;.&#x4E0B;&#x9762;&#x662F;&#x5173;&#x4E8E;&#x6807;&#x51C6;&#x5185;&#x7F6E;error&#x7C7B;&#x578B;&#x7684;&#x8BF4;&#x660E;."><code>Error</code></a> &#x5BF9;&#x8C61;&#x8986;&#x76D6;&#x4E86; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString" title="toString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x4EE3;&#x8868;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;"><code>Object.prototype.toString()</code></a> &#x65B9;&#x6CD5;&#x3002;&#x8BE5;&#x65B9;&#x6CD5;&#x5B9E;&#x73B0;&#x5982;&#x4E0B;&#xFF1A;&#xFF08;&#x5047;&#x5B9A;&#xA0;<code>Object</code> &#x548C; <code>String</code> &#x6CA1;&#x6709;&#x88AB;&#x66F4;&#x6539;&#xFF09;&#xFF1A;</p>
<pre class="brush:js">Error.prototype.toString = function()
{
  &quot;use strict&quot;;

  var obj = Object(this);
  if (obj !== this)
    throw new TypeError();

  var name = this.name;
  name = (name === undefined) ? &quot;Error&quot; : String(name);

  var msg = this.message;
  msg = (msg === undefined) ? &quot;&quot; : String(msg);

  if (name === &quot;&quot;)
    return msg;
  if (msg === &quot;&quot;)
    return name;

  return name + &quot;: &quot; + msg;
};
</pre>
<h2 id="Example" name="Example">&#x793A;&#x4F8B;</h2>
<pre class="brush:js">var e = new Error(&quot;fatal error&quot;);
print(e.toString()); // &quot;Error: fatal error&quot;

e.name = undefined;
print(e.toString()); // &quot;Error: fatal error&quot;

e.name = &quot;&quot;;
print(e.toString()); // &quot;fatal error&quot;

e.message = undefined;
print(e.toString()); // &quot;Error&quot;

e.name = &quot;hello&quot;;
print(e.toString()); // &quot;hello&quot;
</pre>
<h2 id=".E8.A7.84.E8.8C.83">&#x89C4;&#x8303;</h2>
<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x7248;&#x672C;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x89E3;</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition.</td>
   <td>Standard</td>
   <td>Initial definition.<br>
    Implemented in JavaScript 1.1</td>
  </tr>
  <tr>
   <td><a class="external" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.11.4.4" hreflang="en" lang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Error.prototype.toString</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a class="external" href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-error.prototype.tostring" hreflang="en" lang="en">ECMAScript 6 (ECMA-262)<br><small lang="zh-CN">Error.prototype.toString</small></a></td>
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
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
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
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   </tr>
  </tbody>
 </table>
</div>
<h2 id="See_also" name="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>
<ul>
 <li><a class="new" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/toSource" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Error.prototype.toSource()</code></a></li>
</ul>
                  
                
              