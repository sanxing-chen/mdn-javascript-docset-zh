
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p><code><strong>arguments.callee&#xA0;</strong></code>&#x5C5E;&#x6027;&#x6307;&#x5411;&#x5F53;&#x524D;&#x6B63;&#x5728;&#x6267;&#x884C;&#x7684;&#x51FD;&#x6570;&#x3002;</p>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p><code>callee</code>&#xA0;&#x662F;&#xA0;<code>arguments</code>&#xA0;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#x3002;&#x5728;&#x8BE5;&#x51FD;&#x6570;&#x7684;&#x51FD;&#x6570;&#x4F53;&#x5185;&#xFF0C;&#x5B83;&#x53EF;&#x4EE5;&#x6307;&#x5411;&#x5F53;&#x524D;&#x6B63;&#x5728;&#x6267;&#x884C;&#x7684;&#x51FD;&#x6570;&#x3002;&#x5F53;&#x51FD;&#x6570;&#x662F;&#x533F;&#x540D;&#x51FD;&#x6570;&#x65F6;&#xFF0C;&#x8FD9;&#x662F;&#x5F88;&#x6709;&#x7528;&#x7684;&#xFF0C; &#x6BD4;&#x5982;&#x6CA1;&#x6709;&#x540D;&#x5B57;&#x7684;&#x51FD;&#x6570;&#x8868;&#x8FBE;&#x5F0F; (&#x4E5F;&#x53EB;&#x505A;&quot;&#x533F;&#x540D;&#x51FD;&#x6570;&quot;)&#x3002;</p>

<div class="warning"><strong>&#x8B66;&#x544A;&#xFF1A;</strong>ECMAScript&#xA0;5 &#x7981;&#x6B62;&#x5728;<a title="/en-US/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode" href="/en-US/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode">&#x4E25;&#x683C;&#x6A21;&#x5F0F;</a>&#x4E2D;&#x4F7F;&#x7528;&#xA0;<code>a<strong>rguments.callee()</strong>&#x3002;&#x5F53;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x5FC5;&#x987B;&#x8C03;&#x7528;&#x81EA;&#x8EAB;&#x7684;&#x65F6;&#x5019;&#xFF0C;&#x5047;&#x5982;&#x5B83;&#x662F;&#x51FD;&#x6570;&#x8868;&#x8FBE;&#x5F0F;&#x5219;&#x7ED9;&#x5B83;&#x547D;&#x540D;&#xFF0C;&#x6216;&#x8005;&#x4F7F;&#x7528;&#x51FD;&#x6570;&#x58F0;&#x660E;&#xFF0C;&#x907F;&#x514D;&#x4F7F;&#x7528;<strong>&#xA0;arguments.callee()</strong></code></div>

<h2 id="&#x4E3A;&#x4EC0;&#x4E48;&#x88AB;&#x4ECE;_ES5_&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E2D;&#x79FB;&#x9664;&#x6389;&#x4E86;">&#x4E3A;&#x4EC0;&#x4E48;&#x88AB;&#x4ECE; ES5 &#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E2D;&#x79FB;&#x9664;&#x6389;&#x4E86; ?</h2>

<p>(&#x6539;&#x7F16;&#x81EA; <a title="http://stackoverflow.com/a/235760/578288" class="external" href="http://stackoverflow.com/a/235760/578288">a Stack Overflow answer by olliej</a>)</p>

<p>&#x65E9;&#x671F;&#x7684; JavaScript &#x7248;&#x672C;&#x4E0D;&#x5141;&#x8BB8;&#x547D;&#x540D;&#x51FD;&#x6570;&#x8868;&#x8FBE;&#x5F0F;&#xFF0C;&#x4E5F;&#x56E0;&#x4E3A;&#x8FD9;&#x4E2A;&#x539F;&#x56E0;&#x4F60;&#x4E0D;&#x80FD;&#x6784;&#x9020;&#x4E00;&#x4E2A;&#x9012;&#x5F52;&#x7684;&#x51FD;&#x6570;&#x8868;&#x8FBE;&#x5F0F;&#x3002;</p>

<p>&#x4F8B;&#x5982;&#xFF0C;&#x4E0B;&#x8FB9;&#x8FD9;&#x4E2A;&#x8BED;&#x6CD5;&#x5C31;&#x662F;&#x884C;&#x7684;&#x901A;&#x7684;&#xFF1A;</p>

<pre class="brush: js">function factorial (n) {
    return !(n &gt; 1) ? 1 : factorial(n - 1) * n;
}

[1,2,3,4,5].map(factorial);</pre>

<p>&#x4F46;&#x662F;:</p>

<pre class="brush: js">[1,2,3,4,5].map(function (n) {
    return !(n &gt; 1) ? 1 : /* what goes here? */ (n - 1) * n;
});</pre>

<p>&#x8FD9;&#x4E2A;&#x4E0D;&#x884C;&#x3002;&#x4E3A;&#x4E86;&#x89E3;&#x51B3;&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#xFF0C;&#xA0;<code>arguments.callee</code> &#x6DFB;&#x52A0;&#x8FDB;&#x6765;&#x4E86;&#x3002;&#x7136;&#x540E;&#x4F60;&#x53EF;&#x4EE5;&#x8FD9;&#x4E48;&#x505A;</p>

<pre class="brush: js">[1,2,3,4,5].map(function (n) {
    return !(n &gt; 1) ? 1 : arguments.callee(n - 1) * n;
});</pre>

<p>&#x7136;&#x800C;&#xFF0C;&#x8FD9;&#x5B9E;&#x9645;&#x4E0A;&#x662F;&#x4E00;&#x4E2A;&#x7CDF;&#x7CD5;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#xFF0C;&#x56E0;&#x4E3A;&#x8FD9; (&#x4EE5;&#x53CA;&#x5176;&#x5B83;&#x7684;&#xA0;<code>arguments</code>, <code>callee</code>, &#x548C;&#xA0;<code>caller</code> &#x95EE;&#x9898;) &#x4F7F;&#x5F97;&#x5728;&#x901A;&#x5E38;&#x7684;&#x60C5;&#x51B5;&#xFF08;&#x4F60;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x8C03;&#x8BD5;&#x4E00;&#x4E9B;&#x4E2A;&#x522B;&#x4F8B;&#x5B50;&#x53BB;&#x5B9E;&#x73B0;&#x5B83;&#xFF0C;&#x4F46;&#x5373;&#x4F7F;&#x6700;&#x597D;&#x7684;&#x4EE3;&#x7801;&#x662F;&#x6700;&#x7406;&#x60F3;&#x7684;&#xFF0C;&#x4F60;&#x4E5F;&#x6CA1;&#x5FC5;&#x8981;&#x53BB;&#x68C0;&#x67E5;&#x8C03;&#x8BD5;&#x5B83;&#xFF09;&#x4E0D;&#x53EF;&#x80FD;&#x5B9E;&#x73B0;&#x5185;&#x8054;&#x548C;&#x5C3E;&#x9012;&#x5F52;&#x3002;&#x53E6;&#x5916;&#x4E00;&#x4E2A;&#x4E3B;&#x8981;&#x539F;&#x56E0;&#x662F;&#x9012;&#x5F52;&#x8C03;&#x7528;&#x4F1A;&#x83B7;&#x53D6;&#x5230;&#x4E00;&#x4E2A;&#x4E0D;&#x540C;&#x7684;&#xA0;<code>this</code>&#xA0;&#x503C;&#xFF0C;&#x5982;&#xFF1A;</p>

<pre class="brush: js">var global = this;

var sillyFunction = function (recursed) {
    if (!recursed) { return arguments.callee(true); }
    if (this !== global) {
        alert(&quot;This is: &quot; + this);
    } else {
        alert(&quot;This is the global&quot;);
    }
}

sillyFunction();</pre>

<p>ECMAScript 3 &#x901A;&#x8FC7;&#x547D;&#x540D;&#x51FD;&#x6570;&#x8868;&#x8FBE;&#x5F0F;&#x89E3;&#x51B3;&#x8FD9;&#x4E9B;&#x95EE;&#x9898;&#x3002;&#x5982;&#xFF1A;</p>

<pre class="brush: js">[1,2,3,4,5].map(function factorial (n) {
    return !(n &gt; 1) ? 1 : factorial(n-1)*n;
});</pre>

<p>&#x8FD9;&#x6709;&#x5F88;&#x591A;&#x597D;&#x5904;&#xFF1A;</p>

<ul>
 <li>&#x51FD;&#x6570;&#x80FD;&#x591F;&#x4ECE;&#x4F60;&#x4EE3;&#x7801;&#x5185;&#x90E8;&#x8C03;&#x7528;</li>
 <li>&#x4E0D;&#x4F1A;&#x5728;&#x5916;&#x90E8;&#x4F5C;&#x7528;&#x57DF;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x53D8;&#x91CF; (<a class="external" href="http://kangax.github.io/nfe/#example_1_function_expression_identifier_leaks_into_an_enclosing_scope">&#x9664;&#x4E86; IE 8 &#x53CA;&#x4EE5;&#x4E0B;</a>)</li>
 <li><span style="line-height: 1.5;">&#x6027;&#x80FD;&#x6BD4;&#x8BBF;&#x95EE;&#xA0;arguments &#x5BF9;&#x8C61;&#x66F4;&#x597D;</span></li>
</ul>

<p>&#x53E6;&#x5916;&#x4E00;&#x4E2A;&#x88AB;&#x5E9F;&#x5F03;&#x7684;&#x7279;&#x6027;&#x662F;&#xA0;<code>arguments.callee.caller</code>&#xFF0C;&#x5177;&#x4F53;&#x70B9;&#x8BF4;&#x5219;&#x662F;&#xA0;<code>Function.caller&#x3002;&#x4E3A;&#x4EC0;&#x4E48;</code>? &#x989D;&#xFF0C;&#x5728;&#x4EFB;&#x4F55;&#x4E00;&#x4E2A;&#x65F6;&#x95F4;&#x70B9;&#xFF0C;&#x4F60;&#x80FD;&#x5728;&#x5806;&#x6808;&#x4E2D;&#x627E;&#x5230;&#x4EFB;&#x4F55;&#x51FD;&#x6570;&#x7684;&#x6700;&#x6DF1;&#x5C42;&#x7684;&#x8C03;&#x7528;&#x8005;&#xFF0C;&#x4E5F;&#x6B63;&#x5982;&#x6211;&#x5728;&#x4E0A;&#x9762;&#x63D0;&#x5230;&#x7684;&#xFF0C;&#x5728;&#x8C03;&#x7528;&#x5806;&#x6808;&#x6709;&#x4E00;&#x4E2A;&#x5355;&#x4E00;&#x91CD;&#x5927;&#x5F71;&#x54CD;&#xFF1A;&#x4E0D;&#x53EF;&#x80FD;&#x505A;&#x5927;&#x91CF;&#x7684;&#x4F18;&#x5316;&#xFF0C;&#x6216;&#x8005;&#x6709;&#x66F4;&#x591A;&#x66F4;&#x591A;&#x7684;&#x56F0;&#x96BE;&#x3002;&#x6BD4;&#x5982;&#xFF0C;&#x5982;&#x679C;&#x4F60;&#x4E0D;&#x80FD;&#x4FDD;&#x8BC1;&#x4E00;&#x4E2A;&#x51FD;&#x6570; f &#x4E0D;&#x4F1A;&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x672A;&#x77E5;&#x51FD;&#x6570;&#xFF0C;&#x5B83;&#x5C31;&#x7EDD;&#x4E0D;&#x53EF;&#x80FD;&#x662F;&#x5185;&#x8054;&#x51FD;&#x6570; f&#x3002;&#x57FA;&#x672C;&#x4E0A;&#x8FD9;&#x610F;&#x5473;&#x7740;&#x5185;&#x8054;&#x4EE3;&#x7801;&#x4E2D;&#x79EF;&#x7D2F;&#x4E86;&#x5927;&#x91CF;&#x9632;&#x536B;&#x4EE3;&#x7801;&#xFF1A;</p>

<pre class="brush: js">function f (a, b, c, d, e) { return a ? b * c : d * e; }</pre>

<p>&#x5982;&#x679C; JavaScript &#x89E3;&#x91CA;&#x5668;&#x4E0D;&#x80FD;&#x4FDD;&#x8BC1;&#x6240;&#x6709;&#x63D0;&#x4F9B;&#x7684;&#x53C2;&#x6570;&#x6570;&#x91CF;&#x5728;&#x88AB;&#x8C03;&#x7528;&#x7684;&#x65F6;&#x5019;&#x90FD;&#x5B58;&#x5728;&#xFF0C;&#x90A3;&#x4E48;&#x5B83;&#x9700;&#x8981;&#x5728;&#x884C;&#x5185;&#x4EE3;&#x7801;&#x63D2;&#x5165;&#x68C0;&#x67E5;&#xFF0C;&#x6216;&#x8005;&#x4E0D;&#x80FD;&#x5185;&#x8054;&#x8FD9;&#x4E2A;&#x51FD;&#x6570;&#x3002;&#x73B0;&#x5728;&#x5728;&#x8FD9;&#x4E2A;&#x7279;&#x6B8A;&#x4F8B;&#x5B50;&#x91CC;&#x4E00;&#x4E2A;&#x667A;&#x80FD;&#x7684;&#x89E3;&#x91CA;&#x5668;&#x5E94;&#x8BE5;&#x80FD;&#x91CD;&#x6392;&#x68C0;&#x67E5;&#x800C;&#x66F4;&#x4F18;&#xFF0C;&#x5E76;&#x68C0;&#x67E5;&#x4EFB;&#x4F55;&#x5C06;&#x4E0D;&#x7528;&#x5230;&#x7684;&#x503C;&#x3002;&#x7136;&#x800C;&#x5728;&#x8BB8;&#x591A;&#x7684;&#x60C5;&#x51B5;&#x91CC;&#x90A3;&#x662F;&#x4E0D;&#x53EF;&#x80FD;&#x7684;&#xFF0C;&#x4E5F;&#x56E0;&#x6B64;&#x5B83;&#x4E0D;&#x80FD;&#x591F;&#x5185;&#x8054;&#x3002;&#xA0;</p>

<h2 name="Example.3A_Using_arguments.callee_in_an_anonymous_recursive_function" id="Example.3A_Using_arguments.callee_in_an_anonymous_recursive_function">&#x4F8B;&#x5B50;</h2>

<h3 name="Example.3A_Using_arguments.callee_in_an_anonymous_recursive_function" id="Example.3A_Using_arguments.callee_in_an_anonymous_recursive_function">&#x5728;&#x533F;&#x540D;&#x9012;&#x5F52;&#x51FD;&#x6570;&#x4E2D;&#x4F7F;&#x7528;&#xA0;<code>arguments.callee</code></h3>

<p>&#x9012;&#x5F52;&#x51FD;&#x6570;&#x5FC5;&#x987B;&#x80FD;&#x591F;&#x5F15;&#x7528;&#x5B83;&#x672C;&#x8EAB;&#x3002;&#x5F88;&#x5178;&#x578B;&#x7684;&#xFF0C;&#x51FD;&#x6570;&#x901A;&#x8FC7;&#x81EA;&#x5DF1;&#x7684;&#x540D;&#x5B57;&#x8C03;&#x7528;&#x81EA;&#x5DF1;&#x3002;&#x7136;&#x800C;&#xFF0C;&#x533F;&#x540D;&#x51FD;&#x6570; (&#x901A;&#x8FC7; <a title="JavaScript/Reference/Operators/Special/function" href="/en-US/docs/JavaScript/Reference/Operators/function">&#x51FD;&#x6570;&#x8868;&#x8FBE;&#x5F0F;</a>&#xA0;&#x6216;&#x8005; <code><a title="JavaScript/Reference/Global_Objects/Function" href="/en-US/docs/JavaScript/Reference/Global_Objects/Function">&#x51FD;&#x6570;&#x6784;&#x9020;&#x5668;&#xA0;</a>&#x521B;&#x5EFA;</code>) &#x6CA1;&#x6709;&#x540D;&#x79F0;&#x3002;&#x56E0;&#x6B64;&#x5982;&#x679C;&#x6CA1;&#x6709;&#x53EF;&#x8BBF;&#x95EE;&#x7684;&#x53D8;&#x91CF;&#x6307;&#x5411;&#x8BE5;&#x51FD;&#x6570;&#xFF0C;&#x552F;&#x4E00;&#x80FD;&#x5F15;&#x7528;&#x5B83;&#x7684;&#x65B9;&#x5F0F;&#x5C31;&#x662F;&#x901A;&#x8FC7;&#xA0;<code>arguments.callee</code>&#x3002;</p>

<p>&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x5B9A;&#x4E49;&#x4E86;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#xFF0C;&#x6309;&#x6D41;&#x7A0B;&#xFF0C;&#x5B9A;&#x4E49;&#x5E76;&#x8FD4;&#x56DE;&#x4E86;&#x4E00;&#x4E2A;&#x9636;&#x4E58;&#x51FD;&#x6570;&#x3002;&#x8BE5;&#x4F8B;&#x5E76;&#x4E0D;&#x662F;&#x5F88;&#x5B9E;&#x7528;&#xFF0C;&#x5E76;&#x4E14;&#x51E0;&#x4E4E;&#x90FD;&#x80FD;&#x591F;&#x7528;&#xA0;<a title="JavaScript/Reference/Operators/Special/function" style="line-height: 1.5;" href="/en-US/docs/JavaScript/Reference/Operators/function">&#x547D;&#x540D;&#x51FD;&#x6570;&#x8868;&#x8FBE;&#x5F0F;</a>&#xA0;<span style="line-height: 1.5;">&#x5B9E;&#x73B0;&#x540C;&#x6837;&#x7ED3;&#x679C;&#x7684;&#x4F8B;&#x5B50;, and there are nearly no cases where the same result cannot be achieved with </span><span style="line-height: 1.5;">.</span></p>

<pre class="brush: js">function create() {
   return function(n) {
      if (n &lt;= 1)
         return 1;
      return n * arguments.callee(n - 1);
   };
}

var result = create()(5); // returns 120 (5 * 4 * 3 * 2 * 1)
</pre>

<h3 id="&#x6CA1;&#x6709;&#x66FF;&#x4EE3;&#x65B9;&#x6848;&#x7684;_arguments.callee">&#x6CA1;&#x6709;&#x66FF;&#x4EE3;&#x65B9;&#x6848;&#x7684; arguments.callee</h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x662F;&#x6CA1;&#x6709;&#x53EF;&#x4EE5;&#x66FF;&#x4EE3;&#xA0;<span style="font-family: courier new,andale mono,monospace; line-height: 1.5;"><code>arguments.callee</code> &#x7684;&#x65B9;&#x6848;&#x7684;&#xFF0C;&#x56E0;&#x6B64;</span><span style="line-height: 1.5;">&#x5F03;&#x7528;&#x5B83;&#x65F6;&#x4F1A;&#x4EA7;&#x751F;&#x4E00;&#x4E2A;BUG (&#x53C2;&#x770B; <a title="Deprecation of arguments.callee: how to deal with the case of instances of Function constructor?" class="external" href="https://bugzilla.mozilla.org/show_bug.cgi?id=725398">bug&#xA0;725398</a>):</span></p>

<pre class="brush: js">function createPerson (sIdentity) {
    var oPerson = new Function(&quot;alert(arguments.callee.identity);&quot;);
    oPerson.identity = sIdentity;
    return oPerson;
}

var john = createPerson(&quot;John Smith&quot;);

john();</pre>

<h2 id="Specifications">Specifications</h2>

<table class=" standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a title="ECMAScript 1st Edition (ECMA-262)" hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf">ECMAScript 1st Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition. Implemented in JavaScript 1.2</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-10.6">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Arguments Object</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-arguments-exotic-objects">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Arguments Exotic Objects</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;<br>
    &#xA0;</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="https://tc39.github.io/ecma262/#sec-arguments-exotic-objects">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Arguments Exotic Objects</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x652F;&#x6301;">&#x6D4F;&#x89C8;&#x5668;&#x652F;&#x6301;</h2>

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

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Function"><code>Function</code></a></li>
</ul>

<p>&#xA0;</p>
                  
                
              