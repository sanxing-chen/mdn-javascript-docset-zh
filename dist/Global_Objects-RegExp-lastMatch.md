
                
                  <div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="overheadIndicator nonStandard nonStandardHeader">
      <p><strong><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> Non-standard</strong><br>
      This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.</p>
      </div></div>

<p>The non-standard <strong>lastMatch </strong>property is a static and read-only property of regular expressions that contains the last matched characters. <code>RegExp.$&amp;</code> is an alias for this property.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><var>RegExp</var>.lastMatch
RegExp[&apos;$&amp;&apos;]
</pre>

<h2 id="Description">Description</h2>

<p>The <code>lastMatch</code> property is static, it is not a property of an individual regular expression object. Instead, you always use it as <code>RegExp.lastMatch</code> or <code>RegExp[&apos;$&amp;&apos;].</code></p>

<p>The value of the <code>lastMatch</code> property is read-only and modified whenever a successful match is made.</p>

<p>You can not use the shorthand alias with the dot property accessor (<code>RegExp.$&amp;</code>), because the parser expects an expression with &quot;&amp;&quot; in that case and a <a title="The SyntaxError object represents an error when trying to interpret syntactically invalid code." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError"><code>SyntaxError</code></a> is thrown. Use the <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors">bracket notation for property access</a>.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_lastMatch_and">Using <code>lastMatch</code> and <code>$&amp;</code></h3>

<pre class="brush: js">var re = /hi/g;
re.test(&apos;hi there!&apos;);
RegExp.lastMatch; // &quot;hi&quot;
RegExp[&apos;$&amp;&apos;];     // &quot;hi&quot;
</pre>

<h2 id="Specifications">Specifications</h2>

<p>Non-standard. Not part of any current specification.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div><div class="htab">
    <a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a>
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

<h2 id="See_also">See also</h2>

<ul>
 <li><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> <a title="The non-standard input property is a static property of regular expressions that contains the string against which a regular expression is matched. RegExp.$_ is an alias for this property." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input"><code>RegExp.input ($_)</code></a></li>
 <li><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> <a title="The non-standard lastParen property is a static and read-only property of regular expressions that contains the last parenthesized substring match, if any. RegExp.$+ is an alias for this property." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen"><code>RegExp.lastParen ($+)</code></a></li>
 <li><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> <a title="The non-standard leftContext property is a static and read-only property of regular expressions that contains the substring preceding the most recent match. RegExp.$` is an alias for this property." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext"><code>RegExp.leftContext ($`)</code></a></li>
 <li><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> <a title="The non-standard rightContext property is a static and read-only property of regular expressions that contains the substring following the most recent match. RegExp.$&apos; is an alias for this property." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext"><code>RegExp.rightContext ($&apos;)</code></a></li>
 <li><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> <a title="The non-standard $1, $2, $3, $4, $5, $6, $7, $8, $9 properties are static and read-only properties of regular expressions that contain parenthesized substring matches." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n"><code>RegExp.$1-$9</code></a></li>
</ul>
                
              