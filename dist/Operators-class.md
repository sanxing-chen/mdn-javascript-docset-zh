
                
                  
                    <div><div style="background: #9CF49C;" class="overheadIndicator"> 
    <p><strong>&#x8BE5;&#x65B0;&#x7279;&#x6027;&#x5C5E;&#x4E8E; ECMAScript 2015&#xFF08;ES6&#xFF09;&#x89C4;&#x8303;&#xFF0C;&#x5728;&#x4F7F;&#x7528;&#x65F6;&#x8BF7;&#x6CE8;&#x610F;&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;&#x3002;</strong></p> 
</div> <section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><strong>&#x7C7B;&#x8868;&#x8FBE;&#x5F0F;</strong>&#x662F;&#x7528;&#x6765;&#x5B9A;&#x4E49;&#x7C7B;&#x7684;&#x4E00;&#x79CD;&#x8BED;&#x6CD5;&#x3002;&#x548C;<a href="/zh-CN /docs/Web/JavaScript/Reference/Operators/function">&#x51FD;&#x6570;&#x8868;&#x8FBE;&#x5F0F;</a>&#x76F8;&#x540C;&#x7684;&#x4E00;&#x70B9;&#x662F;&#xFF0C;&#x7C7B;&#x8868;&#x8FBE;&#x5F0F;&#x53EF;&#x4EE5;&#x662F;&#x547D;&#x540D;&#x4E5F;&#x53EF;&#x4EE5;&#x662F;&#x533F;&#x540D;&#x7684;&#x3002;&#x5982;&#x679C;&#x662F;&#x547D;&#x540D;&#x7C7B;&#x8868;&#x8FBE;&#x5F0F;&#xFF0C;&#x8FD9;&#x4E2A;&#x540D;&#x5B57;&#x53EA;&#x80FD;&#x5728;&#x7C7B;&#x4F53;&#x5185;&#x90E8;&#x624D;&#x80FD;&#x8BBF;&#x95EE;&#x5230;&#x3002;JavaScript &#x7684;&#x7C7B;&#x4E5F;&#x662F;&#x57FA;&#x4E8E;&#x539F;&#x578B;&#x7EE7;&#x627F;&#x7684;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">var MyClass = class <em>[className]</em> [extends] {
&#xA0; // class body
};</pre>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x7C7B;&#x8868;&#x8FBE;&#x5F0F;&#x7684;&#x8BED;&#x6CD5;&#x548C;<a href="/zh-CN /docs/Web/JavaScript/Reference/Statements/class">&#x7C7B;&#x8BED;&#x53E5;</a>&#x7684;&#x8BED;&#x6CD5;&#x5F88;&#x7C7B;&#x4F3C;&#xFF0C;&#x53EA;&#x662F;&#x5728;&#x7C7B;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x7701;&#x7565;&#x6389;&#x7C7B;&#x540D;&#xFF0C;&#x800C;&#x7C7B;&#x8BED;&#x53E5;&#x4E2D;&#x4E0D;&#x80FD;&#x3002;</p>

<p>&#x548C;&#x7C7B;&#x8BED;&#x53E5;&#x4E00;&#x6837;&#xFF0C;&#x7C7B;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#x7684;&#x4EE3;&#x7801;&#x4E5F;&#x662F;&#x5F3A;&#x5236;<a href="/zh-CN /docs/Web/JavaScript/Reference/Strict_mode">&#x4E25;&#x683C;&#x6A21;&#x5F0F;</a>&#x7684;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;&#x7C7B;&#x8868;&#x8FBE;&#x5F0F;">&#x4F7F;&#x7528;&#x7C7B;&#x8868;&#x8FBE;&#x5F0F;</h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x4F7F;&#x7528;&#x7C7B;&#x8868;&#x8FBE;&#x5F0F;&#x8BED;&#x6CD5;&#x521B;&#x5EFA;&#x4E86;&#x4E00;&#x4E2A;&#x533F;&#x540D;&#x7C7B;&#xFF0C;&#x7136;&#x540E;&#x8D4B;&#x503C;&#x7ED9;&#x53D8;&#x91CF;&#xA0;Foo&#x3002;</p>

<pre class="brush: js">var Foo = class {
  constructor() {}
  bar() {
    return &quot;Hello World!&quot;;
  }
};

var instance = new Foo();
instance.bar(); // &quot;Hello World!&quot;
</pre>

<h3 id="&#x547D;&#x540D;&#x7C7B;&#x8868;&#x8FBE;&#x5F0F;">&#x547D;&#x540D;&#x7C7B;&#x8868;&#x8FBE;&#x5F0F;</h3>

<p>&#x5982;&#x679C;&#x4F60;&#x60F3;&#x5728;&#x7C7B;&#x4F53;&#x5185;&#x90E8;&#x4E5F;&#x80FD;&#x5F15;&#x7528;&#x8FD9;&#x4E2A;&#x7C7B;&#x672C;&#x8EAB;&#xFF0C;&#x90A3;&#x4E48;&#x4F60;&#x5C31;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x547D;&#x540D;&#x7C7B;&#x8868;&#x8FBE;&#x5F0F;&#xFF0C;&#x5E76;&#x4E14;&#x8FD9;&#x4E2A;&#x7C7B;&#x540D;&#x53EA;&#x80FD;&#x5728;&#x7C7B;&#x4F53;&#x5185;&#x90E8;&#x8BBF;&#x95EE;&#x3002;</p>

<pre class="brush: js">// TBD
var Foo = class NamedFoo {
  
}
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-class-definitions" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Class definitions</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
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
   <td>42.0</td>
   <td><em><a href="http://nightly.mozilla.org/" class="external">Nightly build</a></em></td>
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
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN /docs/Web/JavaScript/Reference/Operators/function"><code>&#x51FD;&#x6570;&#x8868;&#x8FBE;&#x5F0F;</code></a></li>
 <li><a href="/zh-CN /docs/Web/JavaScript/Reference/Statements/class"><code>&#x7C7B;&#x8BED;&#x53E5;</code></a></li>
 <li><a href="/zh-CN /docs/Web/JavaScript/Reference/Classes">&#x7C7B;</a></li>
</ul>
                  
                
              