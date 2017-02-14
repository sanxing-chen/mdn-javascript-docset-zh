
                
                  <div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="overheadIndicator nonStandard nonStandardHeader">
      <p><strong><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> Non-standard</strong><br>
      This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.</p>
      </div></div>

<p>The non-standard <strong>leftContext </strong>property is a static and read-only property of regular expressions that contains the substring preceding the most recent match. <code>RegExp.$`</code> is an alias for this property.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><var>RegExp</var>.leftContext
RegExp[&apos;$`&apos;]
</pre>

<h2 id="Description">Description</h2>

<p>The <code>leftContext</code> property is static, it is not a property of an individual regular expression object. Instead, you always use it as <code>RegExp.leftContext</code> or <code>RegExp[&apos;$`&apos;].</code></p>

<p>The value of the <code>leftContext</code> property is read-only and modified whenever a successful match is made.</p>

<p>You can not use the shorthand alias with the dot property accessor (<code>RegExp.$`</code>), because the parser expects a starting template string in that case and a <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError" title="The SyntaxError object represents an error when trying to interpret syntactically invalid code."><code>SyntaxError</code></a> is thrown. Use the <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors">bracket notation for property access</a>.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_leftContext_and">Using <code>leftContext</code> and <code>$`</code></h3>

<pre class="brush: js">var re = /world/g;
re.test(&apos;hello world!&apos;);
RegExp.leftContext; // &quot;hello &quot;
RegExp[&apos;$`&apos;];       // &quot;hello &quot;
</pre>

<h2 id="Specifications">Specifications</h2>

<p>Non-standard. Not part of any current specification.</p>

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
 <li><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input" title="The non-standard input property is a static property of regular expressions that contains the string against which a regular expression is matched. RegExp.$_ is an alias for this property."><code>RegExp.input ($_)</code></a></li>
 <li><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch" title="The non-standard lastMatch property is a static and read-only property of regular expressions that contains the last matched characters. RegExp.$&amp; is an alias for this property."><code>RegExp.lastMatch ($&amp;amp;)</code></a></li>
 <li><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen" title="The non-standard lastParen property is a static and read-only property of regular expressions that contains the last parenthesized substring match, if any. RegExp.$+ is an alias for this property."><code>RegExp.lastParen ($+)</code></a></li>
 <li><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext" title="The non-standard rightContext property is a static and read-only property of regular expressions that contains the substring following the most recent match. RegExp.$&apos; is an alias for this property."><code>RegExp.rightContext ($&apos;)</code></a></li>
 <li><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n" title="The non-standard $1, $2, $3, $4, $5, $6, $7, $8, $9 properties are static and read-only properties of regular expressions that contain parenthesized substring matches."><code>RegExp.$1-$9</code></a></li>
</ul>
                
              