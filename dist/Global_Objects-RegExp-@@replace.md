
                
                  <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p>The <strong><code>[@@replace]()</code></strong> method replaces some or all matches of a <code>this</code> pattern in a string by a <code>replacement</code>, and returns the result of the replacement as a new string. The <code>replacement</code> can be a string or a function to be called for each match.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><var>regexp</var>[Symbol.replace](str, <var>newSubStr</var>|<var>function</var>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>str</code></dt>
 <dd>A <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" title="The String global object is a constructor for strings, or a sequence of characters."><code>String</code></a> that is a target of the replacement.</dd>
 <dt><code>newSubStr (replacement)</code></dt>
 <dd>The <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" title="The String global object is a constructor for strings, or a sequence of characters."><code>String</code></a> that replaces the substring. A number of special replacement patterns are supported; see the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_string_as_a_parameter" title="The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.">Specifying a string as a parameter</a> section in <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace" title="The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match."><code>String.prototype.replace()</code></a> page.</dd>
 <dt><code>function (replacement)</code></dt>
 <dd>A function to be invoked to create the new substring. The arguments supplied to this function are described in the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_function_as_a_parameter" title="The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.">Specifying a function as a parameter</a> section in <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace" title="The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match."><code>String.prototype.replace()</code></a> page.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A new string with some or all matches of a pattern replaced by a replacement.</p>

<h2 id="Description">Description</h2>

<p>This method is called internally in <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace" title="The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match."><code>String.prototype.replace()</code></a> if the <code>pattern</code> argument is a <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp" title="The RegExp constructor creates a regular expression object for matching text with a pattern."><code>RegExp</code></a> object.&#xA0; For example, following two examples return same result.</p>

<pre class="brush: js">&apos;abc&apos;.replace(/a/, &apos;A&apos;);

/a/[Symbol.replace](&apos;abc&apos;, &apos;A&apos;);</pre>

<p>This method exists for customizing replace behavior in <code>RegExp</code> subclass.</p>

<p>If pattern argument is <strong>not</strong> a <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp" title="The RegExp constructor creates a regular expression object for matching text with a pattern."><code>RegExp</code></a> object, <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace" title="The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match."><code>String.prototype.replace()</code></a> doesn&apos;t call this method, nor creates a <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp" title="The RegExp constructor creates a regular expression object for matching text with a pattern."><code>RegExp</code></a> object.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Direct_call">Direct call</h3>

<p>This method can be used in almost the same way as <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace" title="The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match."><code>String.prototype.replace()</code></a>, except the different <code>this</code> and the different arguments order.</p>

<pre class="brush: js">var re = /-/g; 
var str = &apos;2016-01-01&apos;;
var newstr = re[Symbol.replace](str, &apos;.&apos;);
console.log(newstr);  // 2016.01.01
</pre>

<h3 id="Using_replace_in_subclasses">Using @@replace in subclasses</h3>

<p>Subclasses of <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp" title="The RegExp constructor creates a regular expression object for matching text with a pattern."><code>RegExp</code></a> can override the <code>[@@replace]()</code> method to modify the default behavior.</p>

<pre class="brush: js">class MyRegExp extends RegExp {
  constructor(pattern, flags, count) {
    super(pattern, flags);
    this.count = count;
  }
  [Symbol.replace](str, replacement) {
    // Perform @@replace |count| times.
    var result = str;
    for (var i = 0; i &lt; this.count; i++) {
      result = RegExp.prototype[Symbol.replace].call(this, result, replacement);
    }
    return result;
  }
}

var re = new MyRegExp(&apos;\\d&apos;, &apos;&apos;, 3);
var str = &apos;01234567&apos;;
var newstr = str.replace(re, &apos;#&apos;); // String.prototype.replace calls re[@@replace].
console.log(newstr); // ###34567</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-regexp.prototype-@@replace" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="en-US">The definition of &apos;RegExp.prototype[@@replace]&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="en-US">The definition of &apos;RegExp.prototype[@@replace]&apos; in that specification.</small></a></td>
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
   <td><a href="/en-US/Firefox/Releases/49" title="Released on 2016-09-13.">49</a> (49)</td>
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
   <td>49.0 (49)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace" title="The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match."><code>String.prototype.replace()</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@match" title="The [@@match]() method retrieves the matches when matching a string against a regular expression."><code>RegExp.prototype[@@match]()</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@search" title="The [@@search]() method executes a search for a match between a this regular expression and a string."><code>RegExp.prototype[@@search]()</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@split" title="The [@@split]() method splits a String object into an array of strings by separating the string into substrings."><code>RegExp.prototype[@@split]()</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec" title="The exec() method executes a search for a match in a specified string. Returns a result array, or null."><code>RegExp.prototype.exec()</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test" title="The test() method executes a search for a match between a regular expression and a specified string. Returns true or false."><code>RegExp.prototype.test()</code></a></li>
</ul>
                
              