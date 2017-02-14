
                
                  
                    <div>
<div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>
</div>

<h2 id="&#x6982;&#x8FF0;">&#x6982;&#x8FF0;</h2>

<p><span style="font-size: 14px; line-height: 1.5;"><strong>switch&#x8BED;&#x53E5;</strong>&#x5BF9;&#x4E00;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;&#x6C42;&#x503C;&#xFF0C;&#x5C06;&#x7ED3;&#x679C;&#x4E0E; <code>case</code> &#x5B50;&#x8BED;&#x53E5;&#x6BD4;&#x8F83;&#xFF0C;&#x5982;&#x679C;&#x5339;&#x914D;&#xFF0C;&#x5219;&#x4ECE; case &#x5904;&#x7684;&#x8BED;&#x53E5;&#x5411;&#x4E0B;&#x6267;&#x884C;&#x3002;</span></p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">switch (expression) {
  case value1:
    // &#x5F53; expression &#x7684;&#x7ED3;&#x679C;&#x4E0E; value1 &#x5339;&#x914D;&#x65F6;&#xFF0C;&#x4ECE;&#x6B64;&#x5904;&#x5F00;&#x59CB;&#x6267;&#x884C;
&#xA0;   statements1&#xFF1B;
    [break;]
  case value2:
    // &#x5F53; expression &#x7684;&#x7ED3;&#x679C;&#x4E0E; value2 &#x5339;&#x914D;&#x65F6;&#xFF0C;&#x4ECE;&#x6B64;&#x5904;&#x5F00;&#x59CB;&#x6267;&#x884C;
&#xA0;   statements2;
    [break;]
  ...
  case valueN:
    // &#x5F53; expression &#x7684;&#x7ED3;&#x679C;&#x4E0E; valueN &#x5339;&#x914D;&#x65F6;&#xFF0C;&#x4ECE;&#x6B64;&#x5904;&#x5F00;&#x59CB;&#x6267;&#x884C;
&#xA0;   statementsN;
    [break;]
  default:
    // &#x5982;&#x679C; expression &#x4E0E;&#x4E0A;&#x9762;&#x7684; value &#x503C;&#x90FD;&#x4E0D;&#x5339;&#x914D;&#x65F6;&#xFF0C;&#x6267;&#x884C;&#x6B64;&#x5904;&#x7684;&#x8BED;&#x53E5;
&#xA0;   statements_def;
    [break;]
}</pre>

<dl>
 <dt><code>expression</code></dt>
 <dd>&#x4E00;&#x4E2A;&#x7528;&#x6765;&#x4E0E; <code>case</code> &#x5B50;&#x8BED;&#x53E5;&#x5339;&#x914D;&#x7684;&#x8868;&#x8FBE;&#x5F0F;&#x3002;</dd>
 <dt><code>case expressionN</code></dt>
 <dd><code>case</code> &#x5B50;&#x8BED;&#x53E5;&#xFF0C;&#x7528;&#x6765;&#x4E0E; <code>expression</code> &#x5339;&#x914D;&#x3002;</dd>
 <dt><code>statementsN</code></dt>
 <dd>&#x5982;&#x679C; <code>expression</code> &#x5339;&#x914D;&#x5176;&#x5BF9;&#x5E94;&#x7684; <code>case</code> &#x5B50;&#x8BED;&#x53E5;&#xFF0C;&#x5219;&#x6267;&#x884C;&#x6B64;&#x5904;&#x7684;&#x8BED;&#x53E5;&#x3002;</dd>
 <dt><code>statements_def</code></dt>
 <dd>&#x5982;&#x679C; expression &#x6CA1;&#x6709;&#x5339;&#x914D;&#x5230;&#x4EFB;&#x4F55; case &#x5B50;&#x8BED;&#x53E5;&#xFF0C;&#x5219;&#x4F1A;&#x6267;&#x884C;&#x6B64;&#x5904;&#x7684;&#x8BED;&#x53E5;&#x3002;</dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>If a match is found, the program executes the associated statements. If multiple cases match the provided value, the first case that matches is selected, even if the cases are not equal to each other.</p>

<p>The program first looks for a&#xA0;<code>case</code>&#xA0;clause whose expression evaluates to the same value as the input expression (using&#xA0;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators">strict comparison</a>,&#xA0;<code>===)</code>&#xA0;and then transfers control to that clause, executing the associated statements. If no matching&#xA0;<code>case</code>&#xA0;clause is found, the program looks for the optional&#xA0;<code>default</code>&#xA0;clause, and if found, transfers control to that clause, executing the associated statements. If no&#xA0;<code>default</code>&#xA0;clause is found, the program continues execution at the statement following the end of&#xA0;<code>switch</code>. By convention, the&#xA0;<code>default</code>&#xA0;clause is the last clause, but it does not need to be so.</p>

<p>The optional&#xA0;<code><a title="JavaScript/Reference/Statements/break" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break">break</a></code>&#xA0;statement associated with each case label ensures that the program breaks out of switch once the matched statement is executed and continues execution at the statement following switch. If&#xA0;<code>break</code>&#xA0;is omitted, the program continues execution at the next statement in the&#xA0;<code>switch</code>&#xA0;statement.</p>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<h3 name="Example:_Using_switch" id="Example:_Using_switch">&#x793A;&#x4F8B;1&#xFF1A;&#x4F7F;&#x7528; <code>switch</code></h3>

<p>In the following example, if&#xA0;<code style="font-style: normal;">expr</code>&#xA0;evaluates to &quot;Bananas&quot;, the program matches the value with case &quot;Bananas&quot; and executes the associated statement. When&#xA0;<code style="font-style: normal;">break</code>&#xA0;is encountered, the program breaks out of&#xA0;<code style="font-style: normal;">switch</code>&#xA0;and executes the statement following&#xA0;<code style="font-style: normal;">switch</code>. If&#xA0;<code style="font-style: normal;">break</code>&#xA0;were omitted, the statement for case &quot;Cherries&quot; would also be executed.</p>

<pre class="brush: js">switch (expr) {
  case &quot;Oranges&quot;:
    console.log(&quot;Oranges are $0.59 a pound.&quot;);
    break;
  case &quot;Apples&quot;:
    console.log(&quot;Apples are $0.32 a pound.&quot;);
    break;
  case &quot;Bananas&quot;:
    console.log(&quot;Bananas are $0.48 a pound.&quot;);
    break;
  case &quot;Cherries&quot;:
    console.log(&quot;Cherries are $3.00 a pound.&quot;);
    break;
  case &quot;Mangoes&quot;:
  case &quot;Papayas&quot;:
    console.log(&quot;Mangoes and papayas are $2.79 a pound.&quot;);
    break;
  default:
    console.log(&quot;Sorry, we are out of &quot; + expr + &quot;.&quot;);
}

console.log(&quot;Is there anything else you&apos;d like?&quot;);
</pre>

<h3 name="What_happens_if_I_forgot_a_break" id="What_happens_if_I_forgot_a_break">&#x793A;&#x4F8B;2&#xFF1A;&#x5982;&#x679C;&#x5FD8;&#x8BB0;&#x4E2D;&#x65AD;(break)&#x4F1A;&#x600E;&#x4E48;&#x6837;&#xFF1F;</h3>

<p>If you forget a break then script will run from the case where criteria is met, and will run the case after that regardless if criteria was met. See example here:</p>

<pre class="brush: js">var foo = 0;
switch (foo) {
&#xA0;&#xA0; &#xA0;case -1:
&#xA0;&#xA0; &#xA0;&#xA0;&#xA0; &#xA0;console.log(&apos;negative 1&apos;);
        break;
&#xA0;&#xA0; &#xA0;case 0: // foo is 0 so criteria met here so this block will run
&#xA0;&#xA0; &#xA0;&#xA0;&#xA0; &#xA0;console.log(0)
 &#xA0;&#xA0;&#xA0; &#xA0;  // NOTE: the forgotten break would have been here
&#xA0;&#xA0; &#xA0;case 1: // no break statement in &apos;case 0:&apos; so this case will run as well
&#xA0;&#xA0; &#xA0;&#xA0;&#xA0; &#xA0;console.log(1);
&#xA0;&#xA0; &#xA0;&#xA0;&#xA0; &#xA0;break; // it encounters this break so will not continue into &apos;case 2:&apos;
&#xA0;&#xA0; &#xA0;case 2:
&#xA0;&#xA0; &#xA0;&#xA0;&#xA0; &#xA0;console.log(2);
&#xA0;&#xA0; &#xA0;&#xA0;&#xA0; &#xA0;break;
&#xA0;&#xA0; &#xA0;default:
&#xA0;&#xA0; &#xA0;&#xA0;&#xA0; &#xA0;console.log(&apos;default&apos;);
}</pre>

<h3 name="Methods_for_Multi-criteria_Case" id="Methods_for_Multi-criteria_Case">&#x793A;&#x4F8B;&#xFF1A;&#x4F7F;&#x7528;&#x591A;&#x6761;&#x4EF6; case &#x7684;&#x65B9;&#x6CD5;</h3>

<p>If you would like one case segment to meet multiple criteria there are two methods/tricks. Method one is the recommended way, method two is a &quot;hacky&quot; way. The two methods below aim to alert &quot;yes&quot; when variable <code>foo</code> is 0, 1, 2, or 3.</p>

<p>Sources for these techniques are here:</p>

<ol>
 <li><a href="http://stackoverflow.com/questions/21808543/multple-cripteria-single-case-switch-statement" class="external">Multiple Criteria Single Case Switch Statement (Stack Overflow)</a></li>
 <li><a href="http://stackoverflow.com/questions/13207927/switch-statement-multiple-cases-in-javascript" class="external">Switch statement multiple cases in JavaScript (Stack Overflow)</a></li>
</ol>

<h4 id="&#x65B9;&#x6CD5;&#x4E00;">&#x65B9;&#x6CD5;&#x4E00;</h4>

<p>This method takes advantage of the fact that if there is no break below a case statement it will continue to execute the next case statement regardless if the case meets the criteria. See the section title &quot;What happens if I forgot a break?&quot;</p>

<pre class="brush: js">var foo = 1;
switch (foo) {
&#xA0;&#xA0; &#xA0;case 0:
&#xA0;&#xA0; &#xA0;case 1:
&#xA0;&#xA0; &#xA0;case 2:
&#xA0;&#xA0; &#xA0;case 3:
&#xA0;&#xA0; &#xA0;&#xA0;&#xA0; &#xA0;alert(&apos;yes&apos;);
&#xA0;&#xA0; &#xA0;&#xA0;&#xA0; &#xA0;break;
&#xA0;&#xA0; &#xA0;default:
&#xA0;&#xA0; &#xA0;&#xA0;&#xA0; &#xA0;alert(&apos;not&apos;);
}</pre>

<h4 id="&#x65B9;&#x6CD5;&#x4E8C;">&#x65B9;&#x6CD5;&#x4E8C;</h4>

<p>This is the &quot;hacky&quot; method; on line 2, where you would usually find <code>switch(foo)</code>, we instead put an invariant <code>true</code>, and place conditional logic (instead of constants) into the case statements:</p>

<pre class="brush: js">var foo = 1;
switch (true) { // &#x975E;&#x53D8;&#x91CF; TRUE &#x66FF;&#x4EE3; foo
&#xA0;&#xA0; &#xA0;case foo &gt;= 0 &amp;&amp; foo &lt;= 3:
&#xA0;&#xA0; &#xA0;&#xA0;&#xA0; &#xA0;alert(&apos;yes&apos;);
&#xA0;&#xA0; &#xA0;&#xA0;&#xA0; &#xA0;break;
&#xA0;&#xA0; &#xA0;default:
&#xA0;&#xA0; &#xA0;&#xA0;&#xA0; &#xA0;alert(&apos;not&apos;);
}</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>ECMAScript 3rd Edition</td>
   <td>Standard</td>
   <td>Initial definition.<br>
    Implemented in JavaScript 1.2</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-12.11" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">switch statement</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-switch-statement" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">switch statement</small></a></td>
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
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else"><code>if...else</code></a></li>
</ul>
                  
                
              