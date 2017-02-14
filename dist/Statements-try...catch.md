
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p>&#xA0;<strong><code>try...catch&#x8BED;&#x53E5;</code></strong><code>&#x5C06;&#x80FD;&#x5F15;&#x53D1;&#x9519;&#x8BEF;&#x7684;&#x4EE3;&#x7801;&#x653E;&#x5728;try&#x5757;&#x4E2D;&#xFF0C;&#x5E76;&#x4E14;&#x5BF9;&#x5E94;&#x4E00;&#x4E2A;&#x54CD;&#x5E94;&#xFF0C;&#x7136;&#x540E;&#x6709;&#x5F02;&#x5E38;&#x88AB;&#x629B;&#x51FA;&#x3002;</code></p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">try {
   <em>try_statements</em>
}
[catch (<em>exception_var_1</em> if <em>condition_1</em>) { // non-standard
   <em>catch_statements_1</em>
}]
...
[catch (<em>exception_var_2</em>) {
   <em>catch_statements_2</em>
}]
[finally {
   <em>finally_statements</em>
}]
</pre>

<dl>
 <dt><code>try_statements</code></dt>
 <dd>&#x9700;&#x8981;&#x88AB;&#x6267;&#x884C;&#x7684;&#x8BED;&#x53E5;&#x3002;</dd>
</dl>

<dl>
 <dt><code>catch_statements_1</code>, <code>catch_statements_2</code></dt>
 <dd>&#x5982;&#x679C;&#x5728;try&#x5757;&#x91CC;&#x6709;&#x5F02;&#x5E38;&#x88AB;&#x629B;&#x51FA;&#x65F6;&#x6267;&#x884C;&#x7684;&#x8BED;&#x53E5;&#x3002;</dd>
</dl>

<dl>
 <dt><code>exception_var_1</code>, <code>exception_var_2</code></dt>
 <dd>&#x4E00;&#x4E2A;&#x7528;&#x6765;&#x4FDD;&#x5B58;&#x629B;&#x51FA;&#x5BF9;&#x8C61;&#x7684;&#x53D8;&#x91CF;&#x6839;&#x636E;&#x76F8;&#x5173;catch&#x5B50;&#x53E5;&#x3002;</dd>
</dl>

<dl>
 <dt><code>condition_1</code></dt>
 <dd>&#x4E00;&#x4E2A;&#x6761;&#x4EF6;&#x8868;&#x8FBE;&#x5F0F;&#x3002;</dd>
</dl>

<dl>
 <dt><code>finally_statements</code></dt>
 <dd>&#x5728;try&#x8BED;&#x53E5;&#x5757;&#x4E4B;&#x540E;&#x6267;&#x884C;&#x7684;&#x8BED;&#x53E5;&#x5757;.&#x65E0;&#x8BBA;&#x662F;&#x5426;&#x6709;&#x5F02;&#x5E38;&#x629B;&#x51FA;&#x6216;&#x6355;&#x83B7;&#x8FD9;&#x4E9B;&#x8BED;&#x53E5;&#x90FD;&#x5C06;&#x6267;&#x884C;.</dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>try&#x8BED;&#x53E5;&#x5305;&#x542B;&#x4E86;&#x7531;&#x4E00;&#x4E2A;&#x6216;&#x8005;&#x591A;&#x4E2A;&#x8BED;&#x53E5;&#x7EC4;&#x6210;&#x7684;try&#x5757;, &#x548C;&#x81F3;&#x5C11;&#x4E00;&#x4E2A;catch&#x5B50;&#x53E5;&#x6216;&#x8005;&#x4E00;&#x4E2A;finally&#x5B50;&#x53E5;&#x7684;&#x5176;&#x4E2D;&#x4E00;&#x4E2A;&#xFF0C;&#x6216;&#x8005;&#x4E24;&#x4E2A;&#x517C;&#x6709;&#xFF0C;&#xA0;&#x4E0B;&#x9762;&#x662F;&#x4E09;&#x79CD;&#x5F62;&#x5F0F;&#x7684;try&#x58F0;&#x660E;:</p>

<ol>
 <li><code>try...catch</code></li>
 <li><code>try...finally</code></li>
 <li><code>try...catch...finally</code></li>
</ol>

<p>catch&#x8BED;&#x53E5;&#x4E2D;&#x5305;&#x542B;&#x8981;&#x6267;&#x884C;&#x7684;&#x8BED;&#x53E5;&#xFF0C;&#x5F53;try&#x8BED;&#x53E5;&#x4E2D;&#x629B;&#x51FA;&#x9519;&#x8BEF;&#x65F6;&#x3002;&#x4E5F;&#x5C31;&#x662F;&#xFF0C;&#x4F60;&#x60F3;&#x8BA9;try&#x8BED;&#x53E5;&#x4E2D;&#x7684;&#x5185;&#x5BB9;&#x6210;&#x529F;&#xFF0C; &#x5982;&#x679C;&#x6CA1;&#x6210;&#x529F;&#xFF0C;&#x4F60;&#x60F3;&#x63A7;&#x5236;&#x63A5;&#x4E0B;&#x6765;&#x53D1;&#x751F;&#x7684;&#x4E8B;&#x60C5;&#xFF0C;&#x8FD9;&#x65F6;&#x4F60;&#x53EF;&#x4EE5;&#x5728;catch&#x8BED;&#x53E5;&#x4E2D;&#x5B9E;&#x73B0;&#x3002;&#xA0;&#x5982;&#x679C;&#x6709;&#x5728;try&#x5757;&#x4E2D;&#x6709;&#x4EFB;&#x4F55;&#x4E00;&#x4E2A;&#x8BED;&#x53E5;&#xFF08;&#x6216;&#x8005;&#x4ECE;try&#x5757;&#x4E2D;&#x8C03;&#x7528;&#x7684;&#x51FD;&#x6570;&#xFF09;&#x629B;&#x51FA;&#x5F02;&#x5E38;, &#x63A7;&#x5236;&#x7ACB;&#x5373;&#x8F6C;&#x5411;catch&#x5B50;&#x53E5;&#x3002;&#xA0;&#x5982;&#x679C;&#x5728;try&#x5757;&#x4E2D;&#x6CA1;&#x6709;&#x5F02;&#x5E38;&#x629B;&#x51FA;&#xFF0C;&#x8FD9;catch&#x5B50;&#x53E5;&#x5C06;&#x4F1A;&#x8DF3;&#x8FC7;&#x3002;</p>

<p>finally&#x5B50;&#x53E5;&#x5728;try&#x5757;&#x548C;catch&#x5757;&#x4E4B;&#x540E;&#x6267;&#x884C;&#x4F46;&#x662F;&#x5728;&#x4E0B;&#x4E00;&#x4E2A;try&#x58F0;&#x660E;&#x4E4B;&#x524D;&#x6267;&#x884C;. &#x65E0;&#x8BBA;&#x662F;&#x5426;&#x6709;&#x5F02;&#x5E38;&#x629B;&#x51FA;&#x6216;&#x7740;&#x662F;&#x5426;&#x88AB;&#x6355;&#x83B7;&#x5B83;&#x603B;&#x662F;&#x6267;&#x884C;&#x3002;</p>

<p>&#x4F60;&#x53EF;&#x4EE5;&#x5D4C;&#x5957;&#x4E00;&#x4E2A;&#x6216;&#x8005;&#x66F4;&#x591A;&#x7684;try&#x8BED;&#x53E5;&#x3002;&#xA0;&#x5982;&#x679C;&#x5185;&#x90E8;&#x7684;try&#x8BED;&#x53E5;&#x6CA1;&#x6709;catch&#x5B50;&#x53E5;&#xFF0C;&#x90A3;&#x4E48;&#x5C06;&#x4F1A;&#x8FDB;&#x5165;&#x5305;&#x56F4;&#x5B83;&#x7684;try&#x8BED;&#x53E5;&#x7684;catch&#x5B50;&#x53E5;&#x3002;</p>

<p>&#x4F60;&#x4E5F;&#x53EF;&#x4EE5;&#x7528;try&#x8BED;&#x53E5;&#x53BB;&#x5904;&#x7406;javascript&#x5F02;&#x5E38;. &#x53C2;&#x8003;&#xA0;<a href="/en-US/docs/Web/JavaScript/Guide" title="en/JavaScript/Guide">JavaScript Guide</a>&#xA0;&#x4E86;&#x89E3;&#x66F4;&#x591A;&#x5173;&#x4E8E;Javascript&#x5F02;&#x5E38;&#x7684;&#x4FE1;&#x606F;&#x3002;</p>

<h3 id="&#x65E0;&#x6761;&#x4EF6;&#x7684;catch&#x5B50;&#x53E5;">&#x65E0;&#x6761;&#x4EF6;&#x7684;catch&#x5B50;&#x53E5;</h3>

<p>&#x5F53;&#x5355;&#x4E2A;&#x7684;&#x65E0;&#x6761;&#x4EF6;&#x7684;catch &#x5B50;&#x53E5;&#x88AB;&#x4F7F;&#x7528;&#x65F6;, &#x5F53;&#x6709;&#x5F02;&#x5E38;&#x629B;&#x51FA;&#x65F6;&#x5219;&#x5C06;&#x4F1A;&#x8FDB;&#x5165;catch&#x5757;&#x6267;&#x884C;&#x8BED;&#x53E5;. &#x4F8B;&#x5982;, &#x5F53;&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x53D1;&#x751F;&#x5F02;&#x5E38;&#x65F6;&#xFF0C;&#x63A7;&#x5236;&#x5C06;&#x4F1A;&#x8F6C;&#x5411;catch&#x5B50;&#x53E5;&#x3002;</p>

<pre class="brush: js">try {
   throw &quot;myException&quot;; // generates an exception
}
catch (e) {
   // statements to handle any exceptions
   logMyErrors(e); // pass exception object to error handler
}
</pre>

<h3 id="&#x6761;&#x4EF6;catch&#x5B50;&#x53E5;">&#x6761;&#x4EF6;catch&#x5B50;&#x53E5;</h3>

<p></p><div class="overheadIndicator nonStandard nonStandardHeader"> 
      <p><strong><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> &#x975E;&#x6807;&#x51C6;</strong><br> 
      &#x8BE5;&#x7279;&#x6027;&#x662F;&#x975E;&#x6807;&#x51C6;&#x7684;&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#xFF01;</p> 
      </div><p></p>

<p>&#x4F60;&#x4E5F;&#x53EF;&#x4EE5;&#x7528;&#x4E00;&#x4E2A;&#x6216;&#x8005;&#x66F4;&#x591A;&#x6761;&#x4EF6;catch&#x5B50;&#x53E5;&#x6765;&#x5904;&#x7406;&#x7279;&#x5B9A;&#x7684;&#x5F02;&#x5E38;&#x3002;&#x5728;&#x8FD9;&#x79CD;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x5F53;&#x5F02;&#x5E38;&#x629B;&#x51FA;&#x65F6;&#x5C06;&#x4F1A;&#x8FDB;&#x5165;&#x5408;&#x9002;&#x7684;catch&#x5B50;&#x53E5;&#x4E2D;&#x3002;&#xA0;&#x5728;&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x4E2D;&#xFF0C;try&#x5757;&#x7684;&#x4EE3;&#x7801;&#x53EF;&#x80FD;&#x4F1A;&#x629B;&#x51FA;&#x4E09;&#x79CD;&#x5F02;&#x5E38;&#xFF1A;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;"><code>TypeError</code></a>&#xFF0C;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/RangeError" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>RangeError</code></a>&#xFF0C;&#xA0;&#x548C;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/EvalError" title="&#x672C;&#x5BF9;&#x8C61;&#x4EE3;&#x8868;&#x4E86;&#x4E00;&#x4E2A;&#x5173;&#x4E8E;&#xA0;eval &#x51FD;&#x6570;&#x7684;&#x9519;&#x8BEF;."><code>EvalError</code></a>&#x3002;&#x5F53;&#x4E00;&#x4E2A;&#x5F02;&#x5E38;&#x629B;&#x51FA;&#x65F6;&#xFF0C;&#x63A7;&#x5236;&#x5C06;&#x4F1A;&#x8FDB;&#x5165;&#x4E0E;&#x5176;&#x5BF9;&#x5E94;&#x7684;catch&#x8BED;&#x53E5;&#x3002;&#x5982;&#x679C;&#x8FD9;&#x4E2A;&#x5F02;&#x5E38;&#x4E0D;&#x662F;&#x7279;&#x5B9A;&#x7684;&#xFF0C;&#x90A3;&#x4E48;&#x63A7;&#x5236;&#x5C06;&#x8F6C;&#x79FB;&#x5230;&#x975E;&#x6761;&#x4EF6;catch&#x5B50;&#x53E5;&#x3002;</p>

<p>&#x5F53;&#x7528;&#x4E00;&#x4E2A;&#x975E;&#x6761;&#x4EF6;catch&#x5B50;&#x53E5;&#x548C;&#x4E00;&#x4E2A;&#x6216;&#x591A;&#x4E2A;&#x6761;&#x4EF6;&#x8BED;&#x53E5;&#x65F6;&#xFF0C;&#x975E;&#x6761;&#x4EF6;catch&#x5B50;&#x53E5;&#x5FC5;&#x987B;&#x653E;&#x5728;&#x6700;&#x540E;&#x3002;&#x5426;&#x5219;&#x5F53;&#x5230;&#x8FBE;&#x6761;&#x4EF6;&#x8BED;&#x53E5;&#x4E4B;&#x524D;&#x6240;&#x6709;&#x7684;&#x5F02;&#x5E38;&#x5C06;&#x4F1A;&#x88AB;&#x975E;&#x6761;&#x4EF6;&#x8BED;&#x53E5;&#x62E6;&#x622A;&#x3002;</p>

<p>&#x63D0;&#x9192;&#xFF1A;&#x8FD9;&#x4E2A;&#x529F;&#x80FD;&#x4E0D;&#x7B26;&#x5408;ECMAscript&#x89C4;&#x8303;&#x3002;</p>

<pre class="brush: js">try {
    myroutine(); // may throw three types of exceptions
} catch (e if e instanceof TypeError) {
    // statements to handle TypeError exceptions
} catch (e if e instanceof RangeError) {
    // statements to handle RangeError exceptions
} catch (e if e instanceof EvalError) {
    // statements to handle EvalError exceptions
} catch (e) {
    // statements to handle any unspecified exceptions
    logMyErrors(e); // pass exception object to error handler
}
</pre>

<p>&#x4E0B;&#x9762;&#x7528;&#x7B26;&#x5408;ECMAscript&#x89C4;&#x8303;&#x7684;&#x7B80;&#x5355;&#x7684;JavaScript&#x6765;&#x7F16;&#x5199;&#x76F8;&#x540C;&#x7684;&#x201C;&#x6761;&#x4EF6;catch&#x5B50;&#x53E5;&#x201D;&#xFF08;&#x663E;&#x7136;&#x66F4;&#x52A0;<span class="s1">&#x5197;&#x957F;&#x7684;</span>&#xFF0C;&#x4F46;&#x662F;&#x53EF;&#x4EE5;&#x5728;&#x4EFB;&#x4F55;&#x5730;&#x65B9;&#x8FD0;&#x884C;&#xFF09;&#xFF1A;</p>

<pre class="brush: js">try {
    myroutine(); // may throw three types of exceptions
} catch (e) {
    if (e instanceof TypeError) {
        // statements to handle TypeError exceptions
    } else if (e instanceof RangeError) {
        // statements to handle RangeError exceptions
    } else if (e instanceof EvalError) {
        // statements to handle EvalError exceptions
    } else {
       // statements to handle any unspecified exceptions
       logMyErrors(e); // pass exception object to error handler
    }
}
</pre>

<h3 id="&#x5F02;&#x5E38;&#x6807;&#x8BC6;&#x7B26;">&#x5F02;&#x5E38;&#x6807;&#x8BC6;&#x7B26;</h3>

<p>&#x5F53;try&#x5757;&#x4E2D;&#x7684;&#x629B;&#x51FA;&#x4E00;&#x4E2A;&#x5F02;&#x5E38;&#x65F6;&#xFF0C;&#xA0;<em><code>exception_var</code></em> (e.g. the <code>e</code> in <code>catch (e)</code>) &#x7528;&#x6765;&#x4FDD;&#x5B58;&#x88AB;&#x629B;&#x51FA;&#x58F0;&#x660E;&#x6307;&#x5B9A;&#x7684;&#x503C;&#x3002;&#xA0;&#x4F60;&#x53EF;&#x4EE5;&#x7528;&#x8FD9;&#x4E2A;&#x6807;&#x8BC6;&#x7B26;&#x6765;&#x83B7;&#x53D6;&#x5173;&#x4E8E;&#x88AB;&#x629B;&#x51FA;&#x5F02;&#x5E38;&#x7684;&#x4FE1;&#x606F;&#x3002;</p>

<p>&#x8FD9;&#x4E2A;&#x6807;&#x8BC6;&#x7B26;&#x662F;catch&#x5B50;&#x8BED;&#x53E5;&#x5185;&#x90E8;&#x7684;&#x3002;&#xA0;&#x6362;&#x8A00;&#x4E4B;, &#x5F53;&#x8FDB;&#x5165;catch&#x5B50;&#x8BED;&#x53E5;&#x65F6;&#x6807;&#x8BC6;&#x7B26;&#x521B;&#x5EFA;&#xFF0C;catch&#x5B50;&#x8BED;&#x53E5;&#x6267;&#x884C;&#x5B8C;&#x6BD5;&#x540E;&#xFF0C;&#x8FD9;&#x4E2A;&#x8868;&#x793A;&#x7B26;&#x5C06;&#x4E0D;&#x518D;&#x53EF;&#x7528;&#x3002;</p>

<h3 id="finally&#x4ECE;&#x53E5;">finally&#x4ECE;&#x53E5;</h3>

<p>finally&#x5B50;&#x53E5;&#x5728;try&#x5757;&#x548C;catch&#x5757;&#x4E4B;&#x540E;&#x6267;&#x884C;&#x4F46;&#x662F;&#x5728;&#x4E00;&#x4E2A;try&#x58F0;&#x660E;&#x4E4B;&#x524D;&#x6267;&#x884C;. &#x65E0;&#x8BBA;&#x662F;&#x5426;&#x6709;&#x5F02;&#x5E38;&#x629B;&#x51FA;&#x5B83;&#x603B;&#x662F;&#x6267;&#x884C;&#x3002;&#xA0;&#x5982;&#x679C;&#x6709;&#x5F02;&#x5E38;&#x629B;&#x51FA;finally&#x5B50;&#x53E5;&#x5C06;&#x4F1A;&#x88AB;&#x6267;&#x884C;&#xFF0C;&#x8FD9;&#x4E2A;&#x58F0;&#x660E;&#x5373;&#x4F7F;&#x6CA1;&#x6709;catch&#x5B50;&#x53E5;&#x5904;&#x7406;&#x5F02;&#x5E38;&#x3002;</p>

<p>&#x4F60;&#x53EF;&#x4EE5;&#x7528;finally&#x5B50;&#x53E5;&#x4F7F;&#x4F60;&#x7684;&#x811A;&#x672C;&#x7ED3;&#x675F;&#x5730;&#x66F4;&#x52A0;&#x4F18;&#x96C5;&#x3002;&#xA0;&#x4F8B;&#x5982;, &#xA0;&#x4F60;&#x53EF;&#x80FD;&#x9700;&#x8981;&#x91CA;&#x653E;&#x4F60;&#x7684;&#x811A;&#x672C;&#x5DF2;&#x7ECF;&#x7528;&#x8FC7;&#x7684;&#x8D44;&#x6E90;&#x3002;&#x4E0B;&#x9762;&#x7684;&#x793A;&#x4F8B;&#x6253;&#x5F00;&#x4E00;&#x4E2A;&#x6587;&#x4EF6;&#x7136;&#x540E;&#x6267;&#x884C;&#x4F7F;&#x7528;&#x6587;&#x4EF6;&#x7684;&#x8BED;&#x53E5;&#xFF08;&#x670D;&#x52A1;&#x5668;&#x7AEF;&#x7684;javaScript&#x5141;&#x8BB8;&#x4F60;&#x8BBF;&#x95EE;&#x6587;&#x4EF6;&#xFF09;&#x3002;&#x5982;&#x679C;&#x5F53;&#x6587;&#x4EF6;&#x6253;&#x5F00;&#x65F6;&#x6709;&#x4E00;&#x4E2A;&#x5F02;&#x5E38;&#x629B;&#x51FA;, finally&#x5B50;&#x53E5;&#x5173;&#x95ED;&#x6587;&#x4EF6;&#x5728;&#x811A;&#x672C;&#x7ED3;&#x675F;&#x4E4B;&#x524D;&#x3002;</p>

<pre class="brush: js">openMyFile()
try {
   // tie up a resource
   writeMyFile(theData);
}
finally {
   closeMyFile(); // always close the resource
}
</pre>

<h2 id="&#x4F8B;&#x5B50;">&#x4F8B;&#x5B50;</h2>

<h3 id="&#x5D4C;&#x5957;_try-blocks">&#x5D4C;&#x5957; try-blocks</h3>

<p>&#x9996;&#x5148;&#x8BA9;&#x6211;&#x4EEC;&#x770B;&#x770B;&#x8FD9;&#x91CC;&#x53D1;&#x751F;&#x4EC0;&#x4E48;&#xFF1A;</p>

<pre class="brush: js">try {
  try {
    throw new Error(&quot;oops&quot;);
  }
  finally {
    console.log(&quot;finally&quot;);
  }
}
catch (ex) {
  console.error(&quot;outer&quot;, ex.message);
}

// Output:
// &quot;finally&quot;
// &quot;outer&quot; &quot;oops&quot;
</pre>

<p>&#x73B0;&#x5728;&#xFF0C;&#x5982;&#x679C;&#x6211;&#x4EEC;&#x5DF2;&#x7ECF;&#x6355;&#x83B7;&#x5F02;&#x5E38;&#x901A;&#x8FC7;&#x589E;&#x52A0;&#x4E00;&#x4E2A;catch&#x8BED;&#x53E5;&#x5757;</p>

<pre class="brush: js">try {
  try {
    throw new Error(&quot;oops&quot;);
  }
  catch (ex) {
    console.error(&quot;inner&quot;, ex.message);
  }
  finally {
    console.log(&quot;finally&quot;);
  }
}
catch (ex) {
  console.error(&quot;outer&quot;, ex.message);
}

// Output:
// &quot;inner&quot; &quot;oops&quot;
// &quot;finally&quot;
</pre>

<p>&#x73B0;&#x5728;&#xFF0C;&#x8BA9;&#x6211;&#x4EEC;&#x518D;&#x6B21;&#x629B;&#x51FA;&#x9519;&#x8BEF;&#x3002;</p>

<pre class="brush: js">try {
  try {
    throw new Error(&quot;oops&quot;);
  }
  catch (ex) {
    console.error(&quot;inner&quot;, ex.message);
    throw ex;
  }
  finally {
    console.log(&quot;finally&quot;);
  }
}
catch (ex) {
  console.error(&quot;outer&quot;, ex.message);
}

// Output:
// &quot;inner&quot; &quot;oops&quot;
// &quot;finally&quot;
// &quot;outer&quot; &quot;oops&quot;
</pre>

<p>&#x4EFB;&#x4F55;&#x7ED9;&#x5B9A;&#x7684;&#x5F02;&#x5E38;&#x53EA;&#x4F1A;&#x88AB;&#x79BB;&#x5B83;&#x6700;&#x8FD1;&#x7684;&#x5C01;&#x95ED;catch&#x5757;&#x6355;&#x83B7;&#x4E00;&#x6B21;&#x3002;&#x5F53;&#x7136;&#xFF0C;&#x5728;&#x201C;&#x5185;&#x90E8;&#x201D;&#x5757;&#x629B;&#x51FA;&#x7684;&#x4EFB;&#x4F55;&#x65B0;&#x5F02;&#x5E38;&#xA0;&#xFF08;&#x56E0;&#x4E3A;catch&#x5757;&#x91CC;&#x7684;&#x4EE3;&#x7801;&#x4E5F;&#x53EF;&#x4EE5;&#x629B;&#x51FA;&#x5F02;&#x5E38;&#xFF09;&#xFF0C;&#x5C06;&#x4F1A;&#x88AB;&#x201C;&#x5916;&#x90E8;&#x201D;&#x5757;&#x6240;&#x6355;&#x83B7;&#x3002;</p>

<h3 id="&#x4ECE;finally&#x8BED;&#x53E5;&#x5757;&#x8FD4;&#x56DE;">&#x4ECE;finally&#x8BED;&#x53E5;&#x5757;&#x8FD4;&#x56DE;</h3>

<p>&#x5982;&#x679C;&#x4ECE;finally&#x5757;&#x4E2D;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x503C;&#xFF0C;&#x90A3;&#x4E48;&#x8FD9;&#x4E2A;&#x503C;&#x5C06;&#x4F1A;&#x6210;&#x4E3A;&#x6574;&#x4E2A;<span style="font-family: consolas,monaco,andale mono,monospace;">try-catch-finally&#x7684;&#x8FD4;&#x56DE;&#x503C;&#xFF0C;&#x65E0;&#x8BBA;&#x662F;&#x5426;&#x6709;return&#x8BED;&#x53E5;&#x5728;try&#x548C;catch&#x4E2D;&#x3002;&#x8FD9;&#x5305;&#x62EC;&#x5728;catch&#x5757;&#x91CC;&#x629B;&#x51FA;&#x7684;&#x5F02;&#x5E38;&#x3002;</span></p>

<pre class="brush: js">try {
  try {
    throw new Error(&quot;oops&quot;);
  }
  catch (ex) {
    console.error(&quot;inner&quot;, ex.message);
    throw ex;
  }
  finally {
    console.log(&quot;finally&quot;);
    return;
  }
}
catch (ex) {
  console.error(&quot;outer&quot;, ex.message);
}

// Output:
// &quot;inner&quot; &quot;oops&quot;
// &quot;finally&quot;
</pre>

<p>&#x56E0;&#x4E3A;finally&#x5757;&#x91CC;&#x7684;return&#x8BED;&#x53E5;&#xFF0C;&#x5916;&#x90E8;&#x7684;&#x201C;oops&#x201D;&#x5F02;&#x5E38;&#x6CA1;&#x6709;&#x629B;&#x51FA;&#x3002;&#x4ECE;catch&#x5757;&#x8FD4;&#x56DE;&#x7684;&#x503C;&#x540C;&#x6837;&#x9002;&#x7528;&#x3002;</p>

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
    Implemented in JavaScript 1.4</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-12.14" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">try statement</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-try-statement" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">try statement</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<p>Not part of an ECMA-262 standard: Multiple catch clauses and conditional clauses (SpiderMonkey extension, JavaScript 1.5).</p>

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
  <tr>
   <td>Conditional clauses<br>
    (non-standard)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
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
  <tr>
   <td>Conditional clauses<br>
    (non-standard)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x53C2;&#x89C1;">&#x53C2;&#x89C1;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error" title="&#x901A;&#x8FC7;Error&#x7684;&#x6784;&#x9020;&#x5668;&#x53EF;&#x4EE5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#x5BF9;&#x8C61;&#x3002;&#x5F53;&#x8FD0;&#x884C;&#x65F6;&#x9519;&#x8BEF;&#x4EA7;&#x751F;&#x65F6;&#xFF0C;Error&#x7684;&#x5B9E;&#x4F8B;&#x5BF9;&#x8C61;&#x4F1A;&#x88AB;&#x629B;&#x51FA;&#x3002;Error&#x5BF9;&#x8C61;&#x53EF;&#x7528;&#x4E8E;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#x5F02;&#x5E38;&#x7684;&#x57FA;&#x7840;&#x5BF9;&#x8C61;&#x3002;&#x4E0B;&#x9762;&#x5217;&#x51FA;&#x4E86;&#x5404;&#x79CD;&#x5185;&#x5EFA;&#x7684;&#x6807;&#x51C6;&#x9519;&#x8BEF;&#x7C7B;&#x578B;&#x3002;"><code>Error</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/throw" title="throw &#x8BED;&#x53E5;&#x7528;&#x6765;&#x629B;&#x51FA;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x5F02;&#x5E38;&#x3002;&#x5F53;&#x524D;&#x51FD;&#x6570;&#x7684;&#x6267;&#x884C;&#x5C06;&#x4F1A;&#x88AB;&#x4E2D;&#x6B62;&#xFF08;throw&#x4E4B;&#x540E;&#x7684;&#x8BED;&#x53E5;&#x5C06;&#x4F1A;&#x5F97;&#x4E0D;&#x5230;&#x6267;&#x884C;&#xFF09;&#xFF0C;&#x63A5;&#x7740;&#x6267;&#x884C;&#x6D41;&#x7A0B;&#x4F1A;&#x8F6C;&#x79FB;&#x5230;&#x7B2C;&#x4E00;&#x4E2A;&#xA0;catch&#xA0;&#x8BED;&#x53E5;&#x5757;&#x3002;&#x5982;&#x679C;&#x5728;&#x8C03;&#x7528;&#x65B9;&#x51FD;&#x6570;&#x4E2D;&#x6CA1;&#x6709;&#x4EFB;&#x4F55;catch&#x8BED;&#x53E5;&#x5757;&#xFF0C;&#x90A3;&#x4E48;&#x7A0B;&#x5E8F;&#x5C06;&#x4F1A;&#x88AB;&#x4E2D;&#x6B62;&#x3002;"><code>throw</code></a></li>
</ul>
                  
                
              