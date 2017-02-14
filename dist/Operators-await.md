
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p>await &#x64CD;&#x4F5C;&#x7B26;&#x88AB;&#x7528;&#x6765;&#x7B49;&#x5F85; <a title="&#x8C03;&#x7528;&#x5F02;&#x6B65;&#x51FD;&#x6570;&#x65F6;&#x4F1A;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A; promise &#x5BF9;&#x8C61;&#x3002;&#x5F53;&#x8FD9;&#x4E2A;&#x5F02;&#x6B65;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x503C;&#x65F6;&#xFF0C;promise &#x7684;&#xA0;resolve &#x65B9;&#x6CD5;&#x5C06;&#x4F1A;&#x5904;&#x7406;&#x8FD9;&#x4E2A;&#x8FD4;&#x56DE;&#x503C;&#xFF1B;&#x5F53;&#x5F02;&#x6B65;&#x51FD;&#x6570;&#x629B;&#x51FA;&#x7684;&#x662F;&#x5F02;&#x5E38;&#x6216;&#x8005;&#x975E;&#x6CD5;&#x503C;&#x65F6;&#xFF0C;promise &#x7684; reject &#x65B9;&#x6CD5;&#x5C06;&#x5904;&#x7406;&#x8FD9;&#x4E2A;&#x5F02;&#x5E38;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function"><code>async function</code></a>&#xA0;&#x8FD4;&#x56DE;&#x7684; promise&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">[<em>rv</em>] = await <em>expression</em>;</pre>

<dl>
 <dt><font face="Consolas, Liberation Mono, Courier, monospace">&#x8868;&#x8FBE;&#x5F0F;</font></dt>
 <dd>&#x4E00;&#x4E2A; promise &#x6216;&#x8005; &#x4EFB;&#x4F55;&#x503C;&#x6765;&#x7B49;&#x5F85;&#x89E3;&#x51B3;&#x65B9;&#x6848;</dd>
 <dt><font face="Consolas, Liberation Mono, Courier, monospace">&#x8FD4;&#x56DE;&#x503C;</font></dt>
 <dd>
 <p>&#x8FD4;&#x56DE; promise resolved &#x540E;&#x7684;&#x503C;&#xFF0C;&#x5982;&#x679C;&#x4E0D;&#x662F; promise&#xFF0C;&#x5219;&#x8FD4;&#x56DE;&#x5176;&#x81EA;&#x8EAB;&#x3002;</p>
 </dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>await &#x8868;&#x8FBE;&#x5F0F;&#x4F1A;&#x9020;&#x6210;&#x5F02;&#x6B65;&#x51FD;&#x6570;&#x505C;&#x6B62;&#x6267;&#x884C;&#x5E76;&#x4E14;&#x7B49;&#x5F85; promise &#x7684;&#x89E3;&#x51B3;&#xFF0C;&#x5F53;&#x503C;&#x88AB; resolved&#xFF0C;&#x5F02;&#x6B65;&#x51FD;&#x6570;&#x4F1A;&#x6062;&#x590D;&#x6267;&#x884C;&#x4EE5;&#x53CA;&#x8FD4;&#x56DE; resolved &#x503C;&#x3002;&#x5982;&#x679C;&#x8BE5;&#x503C;&#x4E0D;&#x662F;&#x4E00;&#x4E2A; promise&#xFF0C;&#x5B83;&#x5C06;&#x4F1A;&#x88AB;&#x8F6C;&#x6362;&#x6210;&#x4E00;&#x4E2A; resolved &#x540E;&#x7684; promise&#x3002;</p>

<p>&#x5982;&#x679C; promise &#x88AB; rejected&#xFF0C;await &#x8868;&#x8FBE;&#x5F0F;&#x4F1A;&#x629B;&#x51FA;&#x5F02;&#x5E38;&#x503C;&#x3002;</p>

<h2 id="&#x4F8B;&#x5B50;">&#x4F8B;&#x5B50;</h2>

<p>&#x5982;&#x679C;&#x4E00;&#x4E2A; promise &#x4F20;&#x7ED9; await &#x8868;&#x8FBE;&#x5F0F;&#xFF0C;&#x5B83;&#x5C06;&#x4F1A;&#x7B49;&#x5F85; promise &#x7684;&#x89E3;&#x51B3;&#x548C;&#x8FD4;&#x56DE;&#x7684; resolved &#x503C;&#x3002;</p>

<pre class="brush: js">function resolveAfter2Seconds(x) {
  return new Promise(resolve =&gt; {
    setTimeout(() =&gt; {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}
f1();
</pre>

<p>&#x5982;&#x679C;&#x8FD9;&#x4E2A;&#x503C;&#x4E0D;&#x662F;&#x4E00;&#x4E2A; promise&#xFF0C;&#x90A3;&#x4E48;&#x4F1A;&#x628A;&#x5B83;&#x8F6C;&#x6362;&#x6210;&#x4E00;&#x4E2A;&#x5DF2;&#x7ECF; resolved &#x7684; promise&#xFF0C;&#x5E76;&#x4E14;&#x7B49;&#x5F85;&#x5B83;&#x3002;</p>

<pre class="brush: js">async function f2() {
  var y = await 20;
  console.log(y); // 20
}
f2();
</pre>

<p>&#x5982;&#x679C; promise &#x88AB; rejected&#xFF0C;&#x5F02;&#x5E38;&#x503C;&#x4F1A;&#x88AB;&#x629B;&#x51FA;&#x3002;</p>

<pre class="brush: js">async function f3() {
  try {
    var z = await Promise.reject(30);
  } catch (e) {
    console.log(e); // 30
  }
}
f3();</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="https://tc39.github.io/ecmascript-asyncawait/#async-function-definitions">ECMAScript Async Functions<br><small lang="zh-CN">async function</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#x63D0;&#x6848;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
   <th>Edge</th>
   <th>Opera</th>
   <th>Safari (WebKit)</th>
  </tr>
  <tr>
   <td>&#x57FA;&#x672C;&#x652F;&#x6301;</td>
   <td>55</td>
   <td><a title="Released on 2017-03-07." href="/en-US/Firefox/Releases/52">52.0</a> (52.0)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>42</td>
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
   <th>Android Webview</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
   <th>Chrome for Android</th>
  </tr>
  <tr>
   <td>&#xA0;&#x57FA;&#x672C;&#x652F;&#x6301;</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>52.0 (52.0)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>42</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>55</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><a title="&#x8C03;&#x7528;&#x5F02;&#x6B65;&#x51FD;&#x6570;&#x65F6;&#x4F1A;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A; promise &#x5BF9;&#x8C61;&#x3002;&#x5F53;&#x8FD9;&#x4E2A;&#x5F02;&#x6B65;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x503C;&#x65F6;&#xFF0C;promise &#x7684;&#xA0;resolve &#x65B9;&#x6CD5;&#x5C06;&#x4F1A;&#x5904;&#x7406;&#x8FD9;&#x4E2A;&#x8FD4;&#x56DE;&#x503C;&#xFF1B;&#x5F53;&#x5F02;&#x6B65;&#x51FD;&#x6570;&#x629B;&#x51FA;&#x7684;&#x662F;&#x5F02;&#x5E38;&#x6216;&#x8005;&#x975E;&#x6CD5;&#x503C;&#x65F6;&#xFF0C;promise &#x7684; reject &#x65B9;&#x6CD5;&#x5C06;&#x5904;&#x7406;&#x8FD9;&#x4E2A;&#x5F02;&#x5E38;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function"><code>async function</code></a></li>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" class="new" href="/zh-CN/docs/Web/JavaScript/Reference/Operators/async_function"><code>async function expression</code></a></li>
 <li><a title="AsyncFunction&#xA0;&#x6784;&#x9020;&#x51FD;&#x6570;&#xA0;&#x5B9E;&#x4F8B;&#x5316;&#x4E00;&#x4E2A;&#xA0;async function &#x5BF9;&#x8C61;. &#x5728; JavaScript &#x4E2D;&#x6BCF;&#x4E2A;&#x5F02;&#x6B65;&#x51FD;&#x6570;&#x5B9E;&#x4F8B;&#x4E0A;&#x90FD;&#x662F;&#xA0;AsyncFunction&#x5BF9;&#x8C61;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction"><code>AsyncFunction</code></a> object</li>
</ul>
                  
                
              