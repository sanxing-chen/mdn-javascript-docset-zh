
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div style="background: #9CF49C;" class="overheadIndicator"> 
    <p><strong>&#x8BE5;&#x65B0;&#x7279;&#x6027;&#x5C5E;&#x4E8E; ECMAScript 2015&#xFF08;ES6&#xFF09;&#x89C4;&#x8303;&#xFF0C;&#x5728;&#x4F7F;&#x7528;&#x65F6;&#x8BF7;&#x6CE8;&#x610F;&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;&#x3002;</strong></p> 
</div></div>

<p>forEach &#x65B9;&#x6CD5;&#x6839;&#x636E;&#x96C6;&#x5408;&#x4E2D;&#x5143;&#x7D20;&#x7684;&#x987A;&#x5E8F;&#xFF0C;&#x5BF9;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x90FD;&#x6267;&#x884C;&#x63D0;&#x4F9B;&#x7684; callback &#x51FD;&#x6570;&#x4E00;&#x6B21;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><em>mySet</em>.forEach(<em>callback</em>[, <em>thisArg</em>])</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x90FD;&#x4F1A;&#x6267;&#x884C;&#x7684;&#x51FD;&#x6570;</dd>
 <dt><code>thisArg</code></dt>
 <dd>&#x5F53;&#x6267;&#x884C;callback&#x51FD;&#x6570;&#x65F6;&#x5019;&#xFF0C;&#x53EF;&#x4EE5;&#x5F53;&#x4F5C;this&#x6765;&#x4F7F;&#x7528;&#x3002;</dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x8FD9;&#x4E2A;forEach&#x65B9;&#x6CD5;&#x4F1A;&#x9488;&#x5BF9;&#x96C6;&#x5408;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x6267;&#x884C;&#x63D0;&#x4F9B;&#x7684;callback&#x51FD;&#x6570;&#x4E00;&#x6B21;&#x3002; &#x5BF9;&#x4E8E;&#x90A3;&#x4E9B;&#x5DF2;&#x7ECF;&#x88AB;&#x5220;&#x9664;&#x7684;&#x5143;&#x7D20;&#xFF0C;&#x5B83;&#x662F;&#x4E0D;&#x4F1A;&#x6267;&#x884C;&#x7684;&#xFF0C;&#x4F46;&#x662F;&#xFF0C;&#x5BF9;&#x4E8E;&#x5143;&#x7D20;&#x662F;undefined&#x7684;&#x60C5;&#x51B5;&#x5219;&#x76F8;&#x53CD;&#x3002;</p>

<p><code>callback</code>&#xA0;&#x6709;&#x4E09;&#x4E2A;&#x53C2;&#x6570;:</p>

<ul>
 <li>&#x5143;&#x7D20;&#x7684;&#x503C;</li>
 <li>&#x5143;&#x7D20;&#x7684;&#x7D22;&#x5F15;</li>
 <li>&#x5C06;&#x8981;&#x904D;&#x5386;&#x7684;&#x96C6;&#x5408;&#x5BF9;&#x8C61;</li>
</ul>

<p>The are no keys in Set objects. However, the first two arguments are both <strong>values</strong> contained in the Set, so that the callback function is consistent with the forEach methods for <a title="forEach() &#x65B9;&#x6CD5;&#x5C06;&#x4F1A;&#x4EE5;&#x63D2;&#x5165;&#x987A;&#x5E8F;&#x5BF9; Map &#x5BF9;&#x8C61;&#x4E2D;&#x7684;&#x6BCF;&#x4E00;&#x4E2A;&#x952E;&#x503C;&#x5BF9;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x53C2;&#x6570;&#x4E2D;&#x63D0;&#x4F9B;&#x7684;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/foreach"><code>Map</code></a> and <a title="forEach() &#x65B9;&#x6CD5;&#x5BF9;&#x6570;&#x7EC4;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x63D0;&#x4F9B;&#x7684;&#x51FD;&#x6570;(&#x56DE;&#x8C03;&#x51FD;&#x6570;)&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"><code>Array</code></a>.</p>

<p>If a <code>thisArg</code> parameter is provided to <code>forEach</code>, it will be passed to <code>callback</code> when invoked, for use as its <code>this</code> value.&#xA0; Otherwise, the value <code>undefined</code> will be passed for use as its <code>this</code> value.&#xA0; The <code>this</code> value ultimately observable by <code>callback</code> is determined according to <a href="/en-US/docs/Web/JavaScript/Reference/Operators/this">the usual rules for determining the <code>this</code> seen by a function</a>.</p>

<p>The range of elements processed by <code>forEach</code> is set before the first invocation of <code>callback</code>. Elements which are added to the <code>Set</code> object after the call to <code>forEach</code> begins, will not be visited by <code>callback</code>. If existing elements of the <code>Set</code> object are changed, or deleted, their value as passed to <code>callback</code> will be the value at the time <code>forEach</code> visits them; elements that are deleted are not visited.</p>

<p><code>forEach</code> executes the <code>callback</code> function once for each element in the <code>Set</code> object; it does not return a value.</p>

<h2 id="&#x4F8B;&#x5B50;">&#x4F8B;&#x5B50;</h2>

<h3 id="Logging_the_contents_of_a_Set_object">Logging the contents of a <code>Set</code> object</h3>

<p>The following code logs a line for each element in an <code>Set</code> object:</p>

<pre class="brush:js">function logSetElements(value1, value2, set) {
    console.log(&quot;s[&quot; + value1 + &quot;] = &quot; + value2);
}

new Set([&quot;foo&quot;, &quot;bar&quot;, undefined]).forEach(logSetElements);

// logs:
// &quot;s[foo] = foo&quot;
// &quot;s[bar] = bar&quot;
// &quot;s[undefined] = undefined&quot;
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
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-set.prototype.foreach" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Set.prototype.forEach</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
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
   <td>38</td>
   <td><a title="Released on 2013-10-29." href="/en-US/Firefox/Releases/25">25.0</a> (25.0)</td>
   <td>11</td>
   <td>25</td>
   <td>7.1</td>
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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>38</td>
   <td>25.0 (25.0)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>8</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><a title="forEach() &#x65B9;&#x6CD5;&#x5BF9;&#x6570;&#x7EC4;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x63D0;&#x4F9B;&#x7684;&#x51FD;&#x6570;(&#x56DE;&#x8C03;&#x51FD;&#x6570;)&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"><code>Array.prototype.forEach()</code></a></li>
 <li><a title="forEach() &#x65B9;&#x6CD5;&#x5C06;&#x4F1A;&#x4EE5;&#x63D2;&#x5165;&#x987A;&#x5E8F;&#x5BF9; Map &#x5BF9;&#x8C61;&#x4E2D;&#x7684;&#x6BCF;&#x4E00;&#x4E2A;&#x952E;&#x503C;&#x5BF9;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x53C2;&#x6570;&#x4E2D;&#x63D0;&#x4F9B;&#x7684;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach"><code>Map.prototype.forEach()</code></a></li>
</ul>
                  
                
              