
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>&#x5173;&#x952E;&#x5B57;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x57FA;&#x4E8E;&#x539F;&#x578B;&#x7EE7;&#x627F;&#x7684;&#x65B0;&#x7C7B;(&#x8BD1;&#x8005;&#x6CE8;&#xFF1A;ES6&#x65B0;&#x52A0;&#x5165;&#x7684;class&#x5173;&#x952E;&#x5B57;&#x662F;&#x8BED;&#x6CD5;&#x7CD6;&#xFF0C;&#x672C;&#x8D28;&#x8FD8;&#x662F;&#x51FD;&#x6570;)</p>

<div class="noinclude">
<p>&#x53EF;&#x4EE5;&#x4F7F;&#x7528;class&#x8868;&#x8FBE;&#x5F0F;&#x5B9A;&#x4E49;&#x7C7B;<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/class" title="&#x7C7B;&#x8868;&#x8FBE;&#x5F0F;&#x662F;&#x7528;&#x6765;&#x5B9A;&#x4E49;&#x7C7B;&#x7684;&#x4E00;&#x79CD;&#x8BED;&#x6CD5;&#x3002;&#x548C;&#x51FD;&#x6570;&#x8868;&#x8FBE;&#x5F0F;&#x76F8;&#x540C;&#x7684;&#x4E00;&#x70B9;&#x662F;&#xFF0C;&#x7C7B;&#x8868;&#x8FBE;&#x5F0F;&#x53EF;&#x4EE5;&#x662F;&#x547D;&#x540D;&#x4E5F;&#x53EF;&#x4EE5;&#x662F;&#x533F;&#x540D;&#x7684;&#x3002;&#x5982;&#x679C;&#x662F;&#x547D;&#x540D;&#x7C7B;&#x8868;&#x8FBE;&#x5F0F;&#xFF0C;&#x8FD9;&#x4E2A;&#x540D;&#x5B57;&#x53EA;&#x80FD;&#x5728;&#x7C7B;&#x4F53;&#x5185;&#x90E8;&#x624D;&#x80FD;&#x8BBF;&#x95EE;&#x5230;&#x3002;JavaScript &#x7684;&#x7C7B;&#x4E5F;&#x662F;&#x57FA;&#x4E8E;&#x539F;&#x578B;&#x7EE7;&#x627F;&#x7684;&#x3002;">class expression</a>.</p>
</div>

<h2 id="Syntax_&#x8BED;&#x6CD5;">Syntax &#x8BED;&#x6CD5;</h2>

<pre class="brush: js">class <em>name</em> [extends] {
  // class body
}
</pre>

<h2 id="Description_&#x63CF;&#x8FF0;">Description &#x63CF;&#x8FF0;</h2>

<p>&#x548C;class&#x8868;&#x8FBE;&#x5F0F;&#x4E00;&#x6837;&#xFF0C;class&#x58F0;&#x660E;&#x4F53;&#x5728;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode">&#x4E25;&#x683C;&#x6A21;&#x5F0F;(strict mode)</a>&#x4E0B;&#x8FD0;&#x884C;&#x3002;&#x6784;&#x9020;&#x51FD;&#x6570;&#xFF08;constructor&#xFF09;&#x662F;&#x53EF;&#x9009;&#x7684;&#x3002;</p>

<p>Class&#x58F0;&#x660E;&#x4E0D;&#x53EF;&#x4EE5;&#x63D0;&#x5347;(&#x8FD9;&#x70B9;&#x548C;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function">&#x51FD;&#x6570;&#x58F0;&#x660E;</a>&#x4E0D;&#x4E00;&#x6837;)&#x3002;</p>

<h2 id="Examples_&#x4F8B;&#x5B50;">Examples &#x4F8B;&#x5B50;</h2>

<h3 id="&#x4E00;&#x4E2A;&#x7C7B;&#x58F0;&#x660E;&#x7684;&#x4F8B;&#x5B50;">&#x4E00;&#x4E2A;&#x7C7B;&#x58F0;&#x660E;&#x7684;&#x4F8B;&#x5B50;</h3>

<p>&#x5728;&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#xFF0C;&#x5B9A;&#x4E49;&#x4E86;&#x4E00;&#x4E2A;&#x540D;&#x4E3A;Polygon&#x7684;&#x7C7B;&#xFF0C;&#x7136;&#x540E;&#x5B9A;&#x4E49;&#x4E86;&#x4E00;&#x4E2A;&#x7EE7;&#x627F;&#x4E8E;Polygon&#x7684;&#x7C7B; Square&#x3002;&#x6CE8;&#x610F;&#x5230;&#x5728;&#x6784;&#x9020;&#x5668;&#x4F7F;&#x7528;&#x7684;&#xA0;super()&#xFF0C;supper()&#x53EA;&#x80FD;&#x5728;&#x6784;&#x9020;&#x5668;&#x4E2D;&#x4F7F;&#x7528;&#xFF0C;super&#x51FD;&#x6570;&#x4E00;&#x5B9A;&#x8981;&#x5728;this&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x4E4B;&#x524D;&#x8C03;&#x7528;&#x3002;</p>

<pre class="brush: js">class Polygon {
  constructor(height, width) {
    this.name = &apos;Polygon&apos;;
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(length) {
    super(length, length);
&#xA0;   this.name = &apos;Square&apos;;
  }
}</pre>

<div class="warning">
<h3 id="&#x91CD;&#x590D;&#x5B9A;&#x4E49;&#x7C7B;">&#x91CD;&#x590D;&#x5B9A;&#x4E49;&#x7C7B;</h3>

<p>&#x91CD;&#x590D;&#x5B9A;&#x4E49;&#x7C7B;&#x4F1A;&#x5F15;&#x8D77;&#x7C7B;&#x578B;&#x9519;&#x8BEF;.</p>

<pre><code>class Foo {};
class Foo {}; // Uncaught TypeError: Identifier &apos;Foo&apos; has already been declared</code></pre>

<p>&#x7531;&#x4E8E;&#x7C7B;&#x58F0;&#x660E;&#x4E0D;&#x4F1A;&#x88AB;&#x63D0;&#x5347;&#xFF0C;&#x6240;&#x4EE5;&#xFF0C;&#x5728;&#x5B9A;&#x4E49;&#x4E4B;&#x524D;&#x5F15;&#x7528;&#x7C7B;&#x4F1A;&#x51FA;&#x9519;.</p>

<pre><code>var Foo = class {};
class Foo {}; // Uncaught TypeError: Identifier &apos;Foo&apos; has already been declared</code></pre>
</div>

<h2 id="Specifications_&#x89C4;&#x8303;">Specifications &#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-class-definitions" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Class definitions</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-class-definitions" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Class definitions</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility_&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">Browser compatibility &#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
   <td>42.0</td>
   <td><em><a href="http://nightly.mozilla.org/" class="external">Nightly build</a></em></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
  <tr>
   <td>Array subclassing</td>
   <td>43.0</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
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
   <th>Android Webview</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
   <th>Chrome for Android</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>42.0</td>
   <td><em><a href="http://nightly.mozilla.org/" class="external">Nightly build</a></em></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>42.0</td>
  </tr>
  <tr>
   <td>Array subclassing</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>43.0</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>43.0</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Statements/function"><code>function</code> declaration</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/class"><code>class</code> expression</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Classes">Classes</a></li>
</ul>
                  
                
              