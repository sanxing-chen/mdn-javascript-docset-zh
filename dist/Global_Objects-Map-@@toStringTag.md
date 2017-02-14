
                
                  <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>The <strong><code>Map[@@toStringTag]</code></strong> property has an initial value of &quot;Map&quot;.</p>

<div><table class="standard-table">
  <thead>
    <tr>
      <th colspan="2" class="header">Property attributes of <code>Map.prototype[@@toStringTag]</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Writable</td>
      <td>no</td>
    </tr>
    <tr>
      <td>Enumerable</td>
      <td>no</td>
    </tr>
    <tr>
      <td>Configurable</td>
      <td>yes</td>
    </tr>
  </tbody>
</table></div>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">Map[Symbol.toStringTag]</pre>

<h2 id="Example">Example</h2>

<pre class="brush:js">Object.prototype.toString.call(new Map()) // &quot;[object Map]&quot;
</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-map.prototype-@@tostringtag" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="en-US">The definition of &apos;Map.prototype[@@toStringTag]&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-map.prototype-@@tostringtag" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="en-US">The definition of &apos;Map.prototype[@@toStringTag]&apos; in that specification.</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p></p><div class="htab">
    <a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>
    <ul>
        <li class="selected"><a>Desktop</a></li>
        <li><a>Mobile</a></li>
    </ul>
</div>&#xA0;<p></p>

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
   <td>44.0</td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
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
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td>44.0</td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td>44.0</td>
  </tr>
 </tbody>
</table>
</div>
                
              