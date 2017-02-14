
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section> <div class="overheadIndicator nonStandard nonStandardHeader"> 
      <p><strong><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> &#x975E;&#x6807;&#x51C6;</strong><br> 
      &#x8BE5;&#x7279;&#x6027;&#x662F;&#x975E;&#x6807;&#x51C6;&#x7684;&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#xFF01;</p> 
      </div></div>

<p><code><strong><em>function</em>.displayName&#x5C5E;&#x6027;&#x83B7;&#x53D6;&#x51FD;&#x6570;&#x7684;&#x663E;&#x793A;&#x540D;&#x5B57;</strong></code></p>

<h2 id="Description_&#x63CF;&#x8FF0;">Description &#x63CF;&#x8FF0;</h2>

<p><code>&#x5F53;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x7684;displayName&#x5C5E;&#x6027;&#x88AB;&#x5B9A;&#x4E49;&#xFF0C;displayName&#x5C5E;&#x6027;&#x5C06;&#x8FD4;&#x56DE;&#x51FD;&#x6570;&#x663E;&#x793A;&#x7684;&#x540D;&#x5B57;&#x3002;</code></p>

<pre class="brush: js">function doSomething() {}

console.log(doSomething.displayName); // &quot;undefined&quot;

var popup = function(content) { console.log(content); };

popup.displayName = &apos;Show Popup&apos;;

console.log(popup.displayName); // &quot;Show Popup&quot;
</pre>

<p>&#x53EF;&#x4EE5;&#x5728;&#x51FD;&#x6570;&#x8868;&#x8FBE;&#x5F0F;&#x91CD;&#x5B9A;&#x4E49;&#x51FD;&#x6570;&#x7684;&#x663E;&#x793A;&#x540D;&#x5B57;<a href="/zh-CN/docs/Web/JavaScript/Reference/Functions" title="&#x901A;&#x5E38;&#x6765;&#x8BF4;&#xFF0C;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x5C31;&#x662F;&#x4E00;&#x4E2A;&#x53EF;&#x4EE5;&#x88AB;&#x5916;&#x90E8;&#x4EE3;&#x7801;&#x8C03;&#x7528;(&#x6216;&#x8005;&#x51FD;&#x6570;&#x672C;&#x8EAB;&#x9012;&#x5F52;&#x8C03;&#x7528;)&#x7684;&quot;&#x5B50;&#x7A0B;&#x5E8F;&quot;&#x3002;&#x548C;&#x7A0B;&#x5E8F;&#x672C;&#x8EAB;&#x4E00;&#x6837;&#xFF0C;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x7684;&#x51FD;&#x6570;&#x4F53;&#x662F;&#x7531;&#x4E00;&#x7CFB;&#x5217;&#x7684;&#x8BED;&#x53E5;&#x7EC4;&#x6210;&#x7684;&#x3002;&#x51FD;&#x6570;&#x53EF;&#x4EE5;&#x63A5;&#x6536;&#x4F20;&#x5165;&#x53C2;&#x6570;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x503C;&#x3002;">function expression</a>:</p>

<pre class="brush: js">var object = {
  someMethod: function() {}
};

object.someMethod.displayName = &apos;someMethod&apos;;

console.log(object.someMethod.displayName); // logs &quot;someMethod&quot;

try { someMethod } catch(e) { console.log(e); }
// ReferenceError: someMethod is not defined
</pre>

<p>&#x53EF;&#x4EE5;&#x52A8;&#x6001;&#x4FEE;&#x6539;&#x51FD;&#x6570;&#x7684;&#x663E;&#x793A;&#x540D;&#x79F0;&#xFF1A;</p>

<pre class="brush: js">var object = {
  // anonymous
  someMethod: function(value) {
    this.displayName = &apos;someMethod (&apos; + value + &apos;)&apos;;
  }
};

console.log(object.someMethod.displayName); // &quot;undefined&quot;

object.someMethod(&apos;123&apos;)
console.log(object.someMethod.displayName); // &quot;someMethod (123)&quot;
</pre>

<h2 id="Examples_&#x4F8B;&#x5B50;">Examples &#x4F8B;&#x5B50;</h2>

<p>It is usually preferred by consoles and profilers over <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/name" title="name &#x5C5E;&#x6027;&#x8FD4;&#x56DE;&#x6240;&#x5C5E;&#x51FD;&#x6570;&#x7684;&#x51FD;&#x6570;&#x540D;&#x79F0;."><code>func.name</code></a> to display the name of a function.</p>

<p>&#x5728;&#x63A7;&#x5236;&#x53F0;&#x8F93;&#x5165;&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#xFF0C;&#x63A7;&#x5236;&#x53F0;&#x6253;&#x5370;&#x51FA; &quot;<code>function My Function()</code>&quot;&#xFF1A;</p>

<pre class="brush: js">var a = function() {};
a.displayName = &apos;My Function&apos;;

a; // &quot;function My Function()&quot;</pre>

<h2 id="Specifications_&#x89C4;&#x8303;">Specifications &#x89C4;&#x8303;</h2>

<p>&#x4E0D;&#x5C5E;&#x4E8E;&#x4EFB;&#x4F55;&#x89C4;&#x8303;</p>

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
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><a href="/en-US/Firefox/Releases/13" title="Released on 2012-06-05.">13</a> (13)</td>
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
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>
                  
                
              