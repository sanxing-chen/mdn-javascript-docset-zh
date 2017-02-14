
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 name="Summary" id="Summary">Summary &#x6982;&#x8981;</h2>

<p><strong><code>GeneratorFunction&#x6784;&#x9020;&#x5668;&#x751F;&#x6210;&#x65B0;&#x7684;</code></strong><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/function*" title="function* &#x58F0;&#x660E;&#xFF08;function&#x5173;&#x952E;&#x5B57;&#x540E;&#x8DDF;&#x4E00;&#x4E2A;&#x661F;&#x53F7;&#xFF09;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;generator&#xFF08;&#x751F;&#x6210;&#x5668;&#xFF09;&#x51FD;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;Generator&#x5BF9;&#x8C61;&#x3002;"><code>generator function</code></a> &#x5BF9;&#x8C61;&#x3002;&#x5728;JavaScript&#x4E2D;&#xFF0C;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;&#x5B9E;&#x9645;&#x4E0A;&#x90FD;&#x662F;<code>GeneratorFunction&#x7684;&#x5B9E;&#x4F8B;&#x5BF9;&#x8C61;</code></p>

<p>&#x6CE8;&#x610F;&#x5230;&#xFF0C;<code>GeneratorFunction&#x5E76;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x3002;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x83B7;&#x53D6;&#x3002;</code></p>

<pre class="brush: js">Object.getPrototypeOf(function*(){}).constructor
</pre>

<h2 name="Syntax" id="Syntax">Syntax &#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>new GeneratorFunction ([<var>arg1</var>[, <var>arg2</var>[, ...<var>argN</var>]],] <var>functionBody</var>)</code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>arg1, arg2, ... arg<em>N</em></code></dt>
 <dd>Names to be used by the function as formal argument names. Each must be a string that corresponds to a valid JavaScript identifier or a list of such strings separated with a comma; for example &quot;<code>x</code>&quot;, &quot;<code>theValue</code>&quot;, or &quot;<code>a,b</code>&quot;.</dd>
 <dt><font face="Consolas, Liberation Mono, Courier, monospace">&#x51FD;&#x6570;&#x4F53;</font></dt>
 <dd>&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x591A;&#x6761;&#x8868;&#x793A;JavaScript&#x51FD;&#x6570;&#x4F53;&#x8BED;&#x53E5;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;</dd>
</dl>

<h2 name="Description" id="Description">Description &#x63CF;&#x8FF0;</h2>

<p><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/function*" title="function* &#x58F0;&#x660E;&#xFF08;function&#x5173;&#x952E;&#x5B57;&#x540E;&#x8DDF;&#x4E00;&#x4E2A;&#x661F;&#x53F7;&#xFF09;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;generator&#xFF08;&#x751F;&#x6210;&#x5668;&#xFF09;&#x51FD;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;Generator&#x5BF9;&#x8C61;&#x3002;"><code>generator function</code></a> objects created with the <code>GeneratorFunction</code> constructor are parsed when the function is created. This is less efficient than declaring a generator function with a <a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/function*" title="function* &#x58F0;&#x660E;&#xFF08;function&#x5173;&#x952E;&#x5B57;&#x540E;&#x8DDF;&#x4E00;&#x4E2A;&#x661F;&#x53F7;&#xFF09;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;generator&#xFF08;&#x751F;&#x6210;&#x5668;&#xFF09;&#x51FD;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;Generator&#x5BF9;&#x8C61;&#x3002;"><code>function* expression</code></a> and calling it within your code, because such functions are parsed with the rest of the code.</p>

<p>All arguments passed to the function are treated as the names of the identifiers of the parameters in the function to be created, in the order in which they are passed.</p>

<div class="note">
<p><strong>Note:</strong> <a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/function*" title="function* &#x58F0;&#x660E;&#xFF08;function&#x5173;&#x952E;&#x5B57;&#x540E;&#x8DDF;&#x4E00;&#x4E2A;&#x661F;&#x53F7;&#xFF09;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;generator&#xFF08;&#x751F;&#x6210;&#x5668;&#xFF09;&#x51FD;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;Generator&#x5BF9;&#x8C61;&#x3002;"><code>generator function</code></a> created with the <code>GeneratorFunction</code> constructor do not create closures to their creation contexts; they always are created in the global scope. When running them, they will only be able to access their own local variables and global ones, not the ones from the scope in which the <code>GeneratorFunction</code> constructor was called. This is different from using <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval" title="&#x5C06;&#x4E00;&#x4E2A;JavaScript&#x4EE3;&#x7801;&#x5B57;&#x7B26;&#x4E32;&#x6C42;&#x503C;&#x6210;&#x7279;&#x5B9A;&#x7684;&#x5BF9;&#x8C61;&#x3002;"><code>eval</code></a> with code for a generator function expression.</p>
</div>

<p>Invoking the <code>GeneratorFunction</code> constructor as a function (without using the <code>new</code> operator) has the same effect as invoking it as a constructor.</p>

<h2 name="Properties" id="Properties">Properties &#x5C5E;&#x6027;</h2>

<dl>
 <dt><code><strong>GeneratorFunction.length</strong></code></dt>
 <dd>The <code>GeneratorFunction</code> constructor&apos;s length property whose value is 1.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction/prototype" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>GeneratorFunction.prototype</code></a></dt>
 <dd>Allows the addition of properties to all generator function objects.</dd>
</dl>

<h2 id="GeneratorFunction_prototype_object"><code>GeneratorFunction</code> prototype object</h2>

<h3 id="Properties_2">Properties</h3>

<div><dl><dt><code><strong>GeneratorFunction.constructor</strong></code></dt>
 <dd>The initial value is <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction" title="The GeneratorFunction constructor creates a new generator function object. In JavaScript every generator function is actually a GeneratorFunction object."><code>GeneratorFunction</code></a>.</dd>
 <dt><code><strong>GeneratorFunction.prototype.prototype</strong></code></dt>
 <dd>The value is <code>%GeneratorPrototype%</code>.</dd>
</dl></div>

<h2 name="GeneratorFunction_instances" id="GeneratorFunction_instances"><code>GeneratorFunction</code>&#xA0;&#x5B9E;&#x4F8B;</h2>

<p><code>GeneratorFunction</code> instances inherit methods and properties from <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction/prototype" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>GeneratorFunction.prototype</code></a>. As with all constructors, you can change the constructor&apos;s prototype object to make changes to all <code>GeneratorFunction</code> instances.</p>

<h2 name="Examples" id="Examples">Examples &#x4F8B;&#x5B50;</h2>

<h3 id="Creating_a_generator_function_from_a_GeneratorFunction_constructor">Creating a generator function from a <code>GeneratorFunction</code> constructor</h3>

<pre class="brush: js">var GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor
var g = new GeneratorFunction(&quot;a&quot;, &quot;yield a * 2&quot;);
var iterator = g(10);
console.log(iterator.next().value); // 20
</pre>

<h2 id="Specifications_&#x89C4;&#x8303;">Specifications &#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-generatorfunction-objects" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">GeneratorFunction</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility_&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">Browser compatibility &#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
   <td><a href="/en-US/Firefox/Releases/26" title="Released on 2013-12-10.">26</a> (26)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><a href="/en-US/Firefox/Releases/26" title="Released on 2013-12-10.">26</a> (26)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 name="See_also" id="See_also">See also &#x53E6;&#x89C1;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/function*" title="function* &#x58F0;&#x660E;&#xFF08;function&#x5173;&#x952E;&#x5B57;&#x540E;&#x8DDF;&#x4E00;&#x4E2A;&#x661F;&#x53F7;&#xFF09;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;generator&#xFF08;&#x751F;&#x6210;&#x5668;&#xFF09;&#x51FD;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;Generator&#x5BF9;&#x8C61;&#x3002;"><code>function* function</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/function*" title="function*&#x5173;&#x952E;&#x5B57;&#x53EF;&#x4EE5;&#x5728;&#x8868;&#x8FBE;&#x5F0F;&#x5185;&#x90E8;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;&#x3002;"><code>function* expression</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function" title="Function&#xA0;&#x6784;&#x9020;&#x5668;&#x4F1A;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#xA0;Function&#xA0;&#x5BF9;&#x8C61;&#x3002;&#xA0;&#x5728; JavaScript &#x4E2D;&#x6BCF;&#x4E2A;&#x51FD;&#x6570;&#x90FD;&#x662F;&#x4E00;&#x4E2A;Function&#x5BF9;&#x8C61;&#x3002;"><code>Function</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/function" title="&#x51FD;&#x6570;&#x58F0;&#x660E;&#x7528;&#x6307;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x58F0;&#x660E;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x3002;"><code>function statement</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/function" title="function &#x5173;&#x952E;&#x5B57;&#x53EF;&#x7528;&#x6765;&#x5728;&#x4E00;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x3002;"><code>function expression</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!">Functions and function scope</a></li>
</ul>
                  
                
              