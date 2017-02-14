
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><strong><code>Symbol.toStringTag</code></strong>&#xA0;&#x662F;&#x4E00;&#x4E2A;&#x5185;&#x7F6E; symbol&#xFF0C;&#x5B83;&#x901A;&#x5E38;&#x4F5C;&#x4E3A;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#x952E;&#x4F7F;&#x7528;&#xFF0C;&#x5BF9;&#x5E94;&#x7684;&#x5C5E;&#x6027;&#x503C;&#x5E94;&#x8BE5;&#x4E3A;&#x5B57;&#x7B26;&#x4E32;&#x7C7B;&#x578B;&#xFF0C;&#x8FD9;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x7528;&#x6765;&#x8868;&#x793A;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x81EA;&#x5B9A;&#x4E49;&#x7C7B;&#x578B;&#x6807;&#x7B7E;&#xFF0C;&#x901A;&#x5E38;&#x53EA;&#x6709;&#x5185;&#x7F6E;&#x7684;&#xA0;<a title="toString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x4EE3;&#x8868;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString"><code>Object.prototype.toString()</code></a> &#x65B9;&#x6CD5;&#x4F1A;&#x53BB;&#x8BFB;&#x53D6;&#x8FD9;&#x4E2A;&#x6807;&#x7B7E;&#x5E76;&#x628A;&#x5B83;&#x5305;&#x542B;&#x5728;&#x81EA;&#x5DF1;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x91CC;&#x3002;</p>

<div><table class="standard-table"> 
  <thead> 
    <tr> 
      <th colspan="2" class="header"><code>Symbol.toStringTag</code> &#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x7279;&#x6027;&#xFF1A;</th> 
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

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x8BB8;&#x591A;&#x5185;&#x7F6E;&#x7684; JavaScript &#x5BF9;&#x8C61;&#x7C7B;&#x578B;&#x5373;&#x4FBF;&#x6CA1;&#x6709; <code>toStringTag</code> &#x5C5E;&#x6027;&#xFF0C;&#x4E5F;&#x80FD;&#x88AB; <code>toString()</code>&#xA0;&#x65B9;&#x6CD5;&#x8BC6;&#x522B;&#x5E76;&#x8FD4;&#x56DE;&#x7279;&#x5B9A;&#x7684;&#x7C7B;&#x578B;&#x6807;&#x7B7E;&#xFF0C;&#x6BD4;&#x5982;&#xFF1A;</p>

<pre class="brush: js">Object.prototype.toString.call(&apos;foo&apos;);     // &quot;[object String]&quot;
Object.prototype.toString.call([1, 2]);    // &quot;[object Array]&quot;
Object.prototype.toString.call(3);         // &quot;[object Number]&quot;
Object.prototype.toString.call(true);      // &quot;[object Boolean]&quot;
Object.prototype.toString.call(undefined); // &quot;[object Undefined]&quot;
Object.prototype.toString.call(null);      // &quot;[object Null]&quot;
// ... and more
</pre>

<p>&#x53E6;&#x5916;&#x4E00;&#x4E9B;&#x5BF9;&#x8C61;&#x7C7B;&#x578B;&#x5219;&#x4E0D;&#x7136;&#xFF0C;<code>toString()</code>&#xA0;&#x65B9;&#x6CD5;&#x80FD;&#x8BC6;&#x522B;&#x5B83;&#x4EEC;&#x662F;&#x56E0;&#x4E3A;&#x5F15;&#x64CE;&#x4E3A;&#x5B83;&#x4EEC;&#x8BBE;&#x7F6E;&#x597D;&#x4E86;&#xA0;<code>toStringTag</code>&#xA0;&#x6807;&#x7B7E;&#xFF1A;</p>

<pre class="brush: js">Object.prototype.toString.call(new Map());       // &quot;[object Map]&quot;
Object.prototype.toString.call(function* () {}); // &quot;[object GeneratorFunction]&quot;
Object.prototype.toString.call(Promise.resolve()); // &quot;[object Promise]&quot;
// ... and more
</pre>

<p>&#x4F46;&#x4F60;&#x81EA;&#x5DF1;&#x521B;&#x5EFA;&#x7684;&#x7C7B;&#x4E0D;&#x4F1A;&#x6709;&#x8FD9;&#x4EFD;&#x7279;&#x6B8A;&#x5F85;&#x9047;&#xFF0C;<code>toString()&#xA0;</code>&#x627E;&#x4E0D;&#x5230;&#xA0;<code>toStringTag</code> &#x5C5E;&#x6027;&#x65F6;&#x53EA;&#x597D;&#x8FD4;&#x56DE;&#x9ED8;&#x8BA4;&#x7684; <code>Object</code>&#xA0;&#x6807;&#x7B7E;&#xFF1A;</p>

<pre class="brush: js">class ValidatorClass {}

Object.prototype.toString.call(new ValidatorClass()); // &quot;[object Object]&quot;
</pre>

<p>&#x52A0;&#x4E0A;&#xA0;<code>toStringTag</code>&#xA0;&#x5C5E;&#x6027;&#xFF0C;&#x4F60;&#x7684;&#x7C7B;&#x4E5F;&#x4F1A;&#x6709;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#x7C7B;&#x578B;&#x6807;&#x7B7E;&#x4E86;&#xFF1A;</p>

<pre class="brush: js">class ValidatorClass {
  get [Symbol.toStringTag]() {
    return &quot;Validator&quot;;
  }
}

Object.prototype.toString.call(new ValidatorClass()); // &quot;[object Validator]&quot;
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
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-symbol.tostringtag" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Symbol.toStringTag</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-symbol.tostringtag" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Symbol.toStringTag</small></a></td>
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
   <td>49</td>
   <td><a title="Released on 2017-01-24." href="/en-US/Firefox/Releases/51">51</a> (51)</td>
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
   <td>51.0 (51)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="toString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x4EE3;&#x8868;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString"><code>Object.prototype.toString()</code></a></li>
</ul>
                  
                
              