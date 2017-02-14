
                
                  <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p>The <code><strong>ArrayBuffer[@@species]</strong></code> accessor property returns the <code>ArrayBuffer</code> constructor.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">ArrayBuffer[Symbol.species]
</pre>

<h2 id="Description">Description</h2>

<p>The species accessor property returns the default constructor for <code>ArrayBuffer</code> objects. Subclass constructors may over-ride it to change the constructor assignment.</p>

<h2 id="Examples">Examples</h2>

<p>The species property returns the default constructor function, which is the <code>ArrayBuffer</code> constructor for <code>ArrayBuffer</code> objects:</p>

<pre class="brush: js">ArrayBuffer[Symbol.species]; // function ArrayBuffer()</pre>

<p>In a derived collection object (e.g. your custom array buffer <code>MyArrayBuffer</code>), the <code>MyArrayBuffer</code> species is the <code>MyArrayBuffer</code> constructor. However, you might want to overwrite this, in order to return parent <code>ArrayBuffer</code> objects in your derived class methods:</p>

<pre class="brush: js">class MyArrayBuffer extends ArrayBuffer {
  // Overwrite MyArrayBuffer species to the parent ArrayBuffer constructor
  static get [Symbol.species]() { return ArrayBuffer; }
}</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-get-arraybuffer-@@species" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="en-US">The definition of &apos;get ArrayBuffer [ @@species ]&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-get-arraybuffer-@@species" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="en-US">The definition of &apos;get ArrayBuffer [ @@species ]&apos; in that specification.</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

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
   <td><a href="/en-US/Firefox/Releases/48" title="Released on 2016-08-02.">48</a> (48)</td>
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
   <td>48.0 (48)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. You can not directly manipulate the contents of an ArrayBuffer; instead, you create one of the typed array objects or a DataView object which represents the buffer in a specific format, and use that to read and write the contents of the buffer."><code>ArrayBuffer</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species" title="The Symbol.species well-known symbol specifies a function valued property that is the constructor function that is used to create derived objects."><code>Symbol.species</code></a></li>
</ul>
                
              