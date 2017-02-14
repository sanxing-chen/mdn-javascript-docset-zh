
                
                  
                    <h2 id="Summary" name="Summary">&#x6982;&#x8FF0;</h2>
<p>&#x672C;&#x6B21;&#x51FD;&#x6570;&#x8C03;&#x7528;&#x65F6;&#x4F20;&#x5165;&#x51FD;&#x6570;&#x7684;&#x5B9E;&#x53C2;&#x6570;&#x91CF;.</p>
<table class="standard-table">
  <tbody>
    <tr>
      <td class="header" colspan="2">Property of <a href="/zh-CN/docs/JavaScript/Reference/Functions_and_function_scope/arguments" title="JavaScript/Reference/Functions_and_function_scope/arguments">arguments</a></td>
    </tr>
    <tr>
      <td>Implemented in</td>
      <td>JavaScript 1.1</td>
    </tr>
    <tr>
      <td>ECMAScript Edition</td>
      <td>ECMA-262</td>
    </tr>
  </tbody>
</table>
<h2 id="Description" name="Description">&#x63CF;&#x8FF0;</h2>
<p>arguments.length&#x8868;&#x793A;&#x7684;&#x662F;&#x5B9E;&#x9645;&#x4E0A;&#x5411;&#x51FD;&#x6570;&#x4F20;&#x5165;&#x4E86;&#x591A;&#x5C11;&#x4E2A;&#x53C2;&#x6570;,&#x8FD9;&#x4E2A;&#x6570;&#x5B57;&#x53EF;&#x4EE5;&#x6BD4;&#x5F62;&#x53C2;&#x6570;&#x91CF;&#x5927;,&#x4E5F;&#x53EF;&#x4EE5;&#x6BD4;&#x5F62;&#x53C2;&#x6570;&#x91CF;&#x5C0F;(&#x5F62;&#x53C2;&#x6570;&#x91CF;&#x7684;&#x503C;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;<a href="/zh-CN/docs/JavaScript/Reference/Global_Objects/Function/length" title="JavaScript/Reference/Global Objects/Function/length">Function.length</a>&#x83B7;&#x53D6;&#x5230;).</p>
<h2 id="Examples" name="Examples">&#x4F8B;&#x5B50;</h2>
<h3 id="Example:_Using_arguments.length" name="Example:_Using_arguments.length">&#x4F8B;&#x5B50;: &#x4F7F;&#x7528;<code>arguments.length</code></h3>
<p>&#x8FD9;&#x4E2A;&#x4F8B;&#x4E2D;,&#x6211;&#x4EEC;&#x5B9A;&#x4E49;&#x4E86;&#x4E00;&#x4E2A;&#x53EF;&#x4EE5;&#x76F8;&#x52A0;&#x4EFB;&#x610F;&#x4E2A;&#x6570;&#x5B57;&#x7684;&#x51FD;&#x6570;.</p>
<pre class="brush: js">function adder(base, /*, n2, ... */) {
  base = Number(base);
  for (var i = 0; i &lt; arguments.length; i++) {
    base += Number(arguments[i]);
  }
  return base;
}
</pre>
<h2 id="See_also" name="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>
<ul>
  <li><a href="/zh-CN/docs/JavaScript/Reference/Global_Objects/Function/length" title="JavaScript/Reference/Global_Objects/Function/length">Function.length</a></li>
</ul>
                  
                
              