
                
                  <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>The <strong><code>unicode</code></strong> property indicates whether or not the &quot;<code>u</code>&quot; flag is used with a regular expression. <code>unicode</code> is a read-only property of an individual regular expression instance.</p>

<div><table class="standard-table">
  <thead>
    <tr>
      <th class="header" colspan="2">Property attributes of <code>RegExp.prototype.unicode</code></th>
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

<h2 id="Description">Description</h2>

<p>The value of <code>unicode</code> is a <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean" title="The Boolean object is an object wrapper for a boolean value."><code>Boolean</code></a> and <code>true</code> if the &quot;<code>u</code>&quot; flag was used; otherwise <code>false</code>. The &quot;<code>u</code>&quot; flag enables various Unicode-related features. With the &quot;u&quot; flag, any Unicode code point escapes will be interpreted as such, for example.</p>

<p>You cannot change this property directly. It is read-only.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_the_unicode_property">Using the <code>unicode</code> property</h3>

<pre class="brush: js">var regex = new RegExp(&apos;\u{61}&apos;, &apos;u&apos;);

console.log(regex.unicode); // true
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
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-get-regexp.prototype.unicode" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="en-US">The definition of &apos;RegExp.prototype.unicode&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-get-regexp.prototype.unicode" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="en-US">The definition of &apos;RegExp.prototype.unicode&apos; in that specification.</small></a></td>
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
   <th>Edge</th>
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>50</td>
   <td>12 (case folding 13)</td>
   <td><a href="/en-US/Firefox/Releases/46" title="Released on 2016-04-26.">46</a> (46)</td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td>37</td>
   <td>10</td>
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
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td>50</td>
   <td>46.0 (46)</td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>10</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex" title="The lastIndex is a read/write integer property of regular expression instances that specifies the index at which to start the next match."><code>RegExp.lastIndex</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global" title="The global property indicates whether or not the &quot;g&quot; flag is used with the regular expression. global is a read-only property of an individual regular expression instance."><code>RegExp.prototype.global</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase" title="The ignoreCase property indicates whether or not the &quot;i&quot; flag is used with the regular expression. ignoreCase is a read-only property of an individual regular expression instance."><code>RegExp.prototype.ignoreCase</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline" title="The multiline property indicates whether or not the &quot;m&quot; flag is used with the regular expression. multiline is a read-only property of an individual regular expression instance."><code>RegExp.prototype.multiline</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source" title="The source property returns a String containing the source text of the regexp object, and it doesn&apos;t contain the two forward slashes&#xA0;on both sides&#xA0;and&#xA0;any flags."><code>RegExp.prototype.source</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky" title="The sticky property reflects whether or not the search is sticky (searches in strings only from the index indicated by the lastIndex property of this regular expression). sticky is a read-only property of an individual regular expression object."><code>RegExp.prototype.sticky</code></a></li>
</ul>
                
              