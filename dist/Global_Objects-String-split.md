
                
                  
                    <p></p><section class="Quick_links" id="Quick_Links"><!-- --></section><p></p>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p><code><strong>split&#xFF08;&#xFF09;</strong>&#x65B9;&#x6CD5;&#x901A;&#x8FC7;&#x5C06;&#x5B57;&#x7B26;&#x4E32;&#x5206;&#x6210;&#x5B50;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x4ECE;&#x800C;&#x5C06;&#x4E00;&#x4E2A;</code><a href="/zh-CN/docs/Web/JavaScript/Reference/String" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>String</code></a><code>&#x5BF9;&#x8C61;&#x62C6;&#x5206;&#x4E3A;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x6570;&#x7EC4;&#x3002;</code></p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><em>str</em>.split([<em>separator</em>][, <em>limit</em>])</code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>separator</code></dt>
 <dd>&#x6307;&#x5B9A;&#x7528;&#x6765;&#x5206;&#x5272;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x5B57;&#x7B26;&#xFF08;&#x4E32;&#xFF09;&#x3002;<code>separator</code>&#xA0;&#x53EF;&#x4EE5;&#x662F;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x6216;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp" title="JavaScript/Reference/Global_Objects/RegExp">&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;</a>&#x3002; &#x5982;&#x679C;&#x5FFD;&#x7565;&#xA0;<code>separator</code>&#xFF0C;&#x5219;&#x8FD4;&#x56DE;&#x6574;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x6570;&#x7EC4;&#x5F62;&#x5F0F;&#x3002;&#x5982;&#x679C;&#xA0;<code>separator</code> &#x662F;&#x4E00;&#x4E2A;&#x7A7A;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x5219;&#xA0;<code><em>str</em></code> &#x5C06;&#x4F1A;&#x628A;&#x539F;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x6BCF;&#x4E2A;&#x5B57;&#x7B26;&#x7684;&#x6570;&#x7EC4;&#x5F62;&#x5F0F;&#x8FD4;&#x56DE;&#x3002;</dd>
 <dt><code>limit</code></dt>
 <dd>&#x4E00;&#x4E2A;&#x6574;&#x6570;&#xFF0C;&#x9650;&#x5B9A;&#x8FD4;&#x56DE;&#x7684;&#x5206;&#x5272;&#x7247;&#x6BB5;&#x6570;&#x91CF;&#x3002;<code>split</code> &#x65B9;&#x6CD5;&#x4ECD;&#x7136;&#x5206;&#x5272;&#x6BCF;&#x4E00;&#x4E2A;&#x5339;&#x914D;&#x7684;&#xA0;<code>separator</code>&#xFF0C;&#x4F46;&#x662F;&#x8FD4;&#x56DE;&#x7684;&#x6570;&#x7EC4;&#x53EA;&#x4F1A;&#x622A;&#x53D6;&#x6700;&#x591A;&#xA0;<code>limit</code>&#xA0;&#x4E2A;&#x5143;&#x7D20;&#x3002;</dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p><code>split</code> &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x3002;</p>

<p>&#x5F53;&#x627E;&#x5230;&#x4E00;&#x4E2A; <code>seperator</code> &#x65F6;&#xFF0C;<code>separator</code> &#x4F1A;&#x4ECE;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x88AB;&#x79FB;&#x9664;&#xFF0C;&#x8FD4;&#x56DE;&#x5B58;&#x8FDB;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x5F53;&#x4E2D;&#x7684;&#x5B50;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x5982;&#x679C;&#x5FFD;&#x7565;&#xA0;<code>separator</code> &#x53C2;&#x6570;&#xFF0C;&#x5219;&#x8FD4;&#x56DE;&#x7684;&#x6570;&#x7EC4;&#x5305;&#x542B;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x8BE5;&#x5143;&#x7D20;&#x662F;&#x539F;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x5982;&#x679C; <code>separator</code> &#x662F;&#x4E00;&#x4E2A;&#x7A7A;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x5219;&#xA0;<code><em>str</em></code> &#x5C06;&#x88AB;&#x8F6C;&#x6362;&#x4E3A;&#x7531;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x5B57;&#x7B26;&#x7EC4;&#x6210;&#x7684;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x3002;</p>

<p>&#x5982;&#x679C; <code>separator</code> &#x662F;&#x4E00;&#x4E2A;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#xFF0C;&#x4E14;&#x5305;&#x542B;&#x6355;&#x83B7;&#x62EC;&#x53F7;&#xFF08;capturing parentheses&#xFF09;&#xFF0C;&#x5219;&#x6BCF;&#x6B21;&#x5339;&#x914D;&#x5230;&#xA0;<code>separator</code>&#xA0;&#x65F6;&#xFF0C;&#x6355;&#x83B7;&#x62EC;&#x53F7;&#x5339;&#x914D;&#x7684;&#x7ED3;&#x679C;&#x5C06;&#x4F1A;&#x63D2;&#x5165;&#x5230;&#x8FD4;&#x56DE;&#x7684;&#x6570;&#x7EC4;&#x4E2D;&#x3002;&#x7136;&#x800C;&#xFF0C;&#x4E0D;&#x662F;&#x6240;&#x6709;&#x6D4F;&#x89C8;&#x5668;&#x90FD;&#x652F;&#x6301;&#x8BE5;&#x7279;&#x6027;&#x3002;</p>

<p></p><div class="note"><strong>Note:</strong>&#xA0;&#x5F53;&#x5B57;&#x7B26;&#x4E32;&#x4E3A;&#x7A7A;&#x65F6;&#xFF0C;<code>split</code> &#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x4E00;&#x4E2A;&#x7A7A;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x6570;&#x7EC4;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x7A7A;&#x6570;&#x7EC4;&#x3002;</div><p></p>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<pre class="brush: js">&quot;Webkit Moz O ms Khtml&quot;.split( &quot; &quot; )   // [&quot;Webkit&quot;, &quot;Moz&quot;, &quot;O&quot;, &quot;ms&quot;, &quot;Khtml&quot;]
</pre>

<h3 name="Example:_Using_split" id="Example:_Using_split">&#x4F8B;&#x5B50;&#xFF1A;&#x4F7F;&#x7528;&#xA0;<code>split</code></h3>

<p>&#x4E0B;&#x4F8B;&#x5B9A;&#x4E49;&#x4E86;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#xFF1A;&#x4F7F;&#x7528;&#x6307;&#x5B9A;&#x7684;&#x5206;&#x9694;&#x7B26;&#x5C06;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x5206;&#x5272;&#x6210;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x6570;&#x7EC4;&#x3002;&#x5206;&#x9694;&#x5B57;&#x7B26;&#x4E32;&#x540E;&#xFF0C;&#x8BE5;&#x51FD;&#x6570;&#x4F9D;&#x6B21;&#x8F93;&#x51FA;&#x539F;&#x59CB;&#x5B57;&#x7B26;&#x4E32;&#x4FE1;&#x606F;&#xFF0C;&#x88AB;&#x4F7F;&#x7528;&#x7684;&#x5206;&#x9694;&#x7B26;&#xFF0C;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x7684;&#x4E2A;&#x6570;&#xFF0C;&#x4EE5;&#x53CA;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x4E2D;&#x6240;&#x6709;&#x7684;&#x5143;&#x7D20;&#x3002;</p>

<pre class="brush: js">function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);

  console.log(&apos;The original string is: &quot;&apos; + stringToSplit + &apos;&quot;&apos;);
  console.log(&apos;The separator is: &quot;&apos; + separator + &apos;&quot;&apos;);
  console.log(&quot;The array has &quot; + arrayOfStrings.length + &quot; elements: &quot;);

  for (var i=0; i &lt; arrayOfStrings.length; i++)
    console.log(arrayOfStrings[i] + &quot; / &quot;);
}

var tempestString = &quot;Oh brave new world that has such people in it.&quot;;
var monthString = &quot;Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec&quot;;

var space = &quot; &quot;;
var comma = &quot;,&quot;;

splitString(tempestString, space);
splitString(tempestString);
splitString(monthString, comma);
</pre>

<p>&#x4E0A;&#x4F8B;&#x8F93;&#x51FA;&#x4E0B;&#x9762;&#x7ED3;&#x679C;&#xFF1A;</p>

<pre>The original string is: &quot;Oh brave new world that has such people in it.&quot;
The separator is: &quot; &quot;
The array has 10 elements: Oh / brave / new / world / that / has / such / people / in / it. /

The original string is: &quot;Oh brave new world that has such people in it.&quot;
The separator is: &quot;undefined&quot;
The array has 1 elements: Oh brave new world that has such people in it. /

The original string is: &quot;Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec&quot;
The separator is: &quot;,&quot;
The array has 12 elements: Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec /
</pre>

<h3 name="Example:_Removing_spaces_from_a_string" id="Example:_Removing_spaces_from_a_string">&#x4F8B;&#x5B50;&#xFF1A;&#x79FB;&#x51FA;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x7684;&#x7A7A;&#x683C;</h3>

<p>&#x4E0B;&#x4F8B;&#x4E2D;&#xFF0C;<code>split</code>&#xA0;&#x65B9;&#x6CD5;&#x4F1A;&#x67E5;&#x627E;&#x201C;0 &#x6216;&#x591A;&#x4E2A;&#x7A7A;&#x767D;&#x7B26;&#x63A5;&#x7740;&#x7684;&#x5206;&#x53F7;&#xFF0C;&#x518D;&#x63A5;&#x7740; 0 &#x6216;&#x591A;&#x4E2A;&#x7A7A;&#x767D;&#x7B26;&#x201D;&#x6A21;&#x5F0F;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x627E;&#x5230;&#x540E;&#xFF0C;&#x5C31;&#x5C06;&#x7A7A;&#x767D;&#x7B26;&#x4ECE;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x79FB;&#x9664;&#xFF0C;<code>nameList</code> &#x662F; <code>split</code>&#xA0;&#x7684;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x3002;</p>

<pre class="brush: js">var names = &quot;Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand &quot;;

console.log(names);

var re = /\s*;\s*/;
var nameList = names.split(re);

console.log(nameList);
</pre>

<p>&#x4E0A;&#x4F8B;&#x8F93;&#x51FA;&#x4E24;&#x884C;&#xFF0C;&#x7B2C;&#x4E00;&#x884C;&#x8F93;&#x51FA;&#x539F;&#x59CB;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x7B2C;&#x4E8C;&#x884C;&#x8F93;&#x51FA;&#x7ED3;&#x679C;&#x6570;&#x7EC4;&#x3002;</p>

<pre>Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand
Harry Trump,Fred Barney,Helen Rigby,Bill Abel,Chris Hand
</pre>

<h3 name="Example:_Returning_a_limited_number_of_splits" id="Example:_Returning_a_limited_number_of_splits">&#x4F8B;&#x5B50;&#xFF1A;&#x9650;&#x5236;&#x8FD4;&#x56DE;&#x503C;&#x4E2D;&#x5206;&#x5272;&#x5143;&#x7D20;&#x6570;&#x91CF;</h3>

<p>&#x4E0B;&#x4F8B;&#x4E2D;&#xFF0C;<code>split</code> &#x67E5;&#x627E;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x7684; 0 &#x6216;&#x591A;&#x4E2A;&#x7A7A;&#x683C;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x627E;&#x5230;&#x7684;&#x524D; 3 &#x4E2A;&#x5206;&#x5272;&#x5143;&#x7D20;&#xFF08;splits&#xFF09;&#x3002;</p>

<pre class="brush: js">var myString = &quot;Hello World. How are you doing?&quot;;
var splits = myString.split(&quot; &quot;, 3);

console.log(splits);
</pre>

<p>&#x4E0A;&#x4F8B;&#x8F93;&#x51FA;&#xFF1A;</p>

<pre>Hello,World.,How
</pre>

<h3 name="Example:_Capturing_parentheses" id="Example:_Capturing_parentheses">&#x4F8B;&#x5B50;&#xFF1A;&#x6355;&#x83B7;&#x62EC;&#x53F7;&#xFF08;Capturing parentheses&#xFF09;</h3>

<p>&#x5982;&#x679C; <code>separator</code> &#x5305;&#x542B;&#x6355;&#x83B7;&#x62EC;&#x53F7;&#xFF08;capturing parentheses&#xFF09;&#xFF0C;&#x5219;&#x5176;&#x5339;&#x914D;&#x7ED3;&#x679C;&#x5C06;&#x4F1A;&#x5305;&#x542B;&#x5728;&#x8FD4;&#x56DE;&#x7684;&#x6570;&#x7EC4;&#x4E2D;&#x3002;</p>

<pre class="brush: js">var myString = &quot;Hello 1 word. Sentence number 2.&quot;;
var splits = myString.split(/(\d)/);

console.log(splits);
</pre>

<p>&#x4E0A;&#x4F8B;&#x8F93;&#x51FA;&#xFF1A;</p>

<pre>Hello ,1, word. Sentence number ,2,.
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
   <td>ECMAScript 3rd Edition.</td>
   <td>Standard</td>
   <td>Initial definition.<br>
    Implemented in JavaScript 1.1</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.5.4.14" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">String.prototype.split</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.split" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">String.prototype.split</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
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

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt" title="charAt() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x6307;&#x5B9A;&#x4F4D;&#x7F6E;&#x7684;&#x5B57;&#x7B26;&#x3002;"><code>String.prototype.charAt()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf" title="indexOf()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x503C;&#x5728;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#x4E2D;&#x9996;&#x6B21;&#x51FA;&#x73B0;&#x7684;&#x4F4D;&#x7F6E;&#x3002;&#x4ECE;&#xA0;fromIndex&#xA0;&#x4F4D;&#x7F6E;&#x5F00;&#x59CB;&#x67E5;&#x627E;&#xFF0C;&#x5982;&#x679C;&#x4E0D;&#x5B58;&#x5728;&#xFF0C;&#x5219;&#x8FD4;&#x56DE; -1&#x3002;"><code>String.prototype.indexOf()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf" title="lastIndexOf()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x503C;&#x5728;&#x8C03;&#x7528;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x6700;&#x540E;&#x51FA;&#x73B0;&#x7684;&#x4F4D;&#x7F6E;&#xFF0C;&#x5982;&#x679C;&#x6CA1;&#x627E;&#x5230;&#x5219;&#x8FD4;&#x56DE;&#xA0;-1&#x3002;&#x4ECE;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x540E;&#x9762;&#x5411;&#x524D;&#x67E5;&#x627E;&#xFF0C;&#x4ECE; fromIndex &#x5904;&#x5F00;&#x59CB;&#x3002;"><code>String.prototype.lastIndexOf()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join" title="join() &#x65B9;&#x6CD5;&#x5C06;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x8FDE;&#x63A5;&#x6210;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x3002;"><code>Array.prototype.join()</code></a></li>
</ul>
                  
                
              