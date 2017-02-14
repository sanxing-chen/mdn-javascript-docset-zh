
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<div><code><strong>async function &#x58F0;&#x660E;&#x4E86;&#x4E00;&#x4E2A;&#x5F02;&#x6B65;&#x51FD;&#x6570;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x4E86;&#x4E00;&#x4E2A;&#xA0;</strong></code><a title="AsyncFunction&#xA0;&#x6784;&#x9020;&#x51FD;&#x6570;&#xA0;&#x5B9E;&#x4F8B;&#x5316;&#x4E00;&#x4E2A;&#xA0;async function &#x5BF9;&#x8C61;. &#x5728; JavaScript &#x4E2D;&#x6BCF;&#x4E2A;&#x5F02;&#x6B65;&#x51FD;&#x6570;&#x5B9E;&#x4F8B;&#x4E0A;&#x90FD;&#x662F;&#xA0;AsyncFunction&#x5BF9;&#x8C61;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction"><code>AsyncFunction</code></a> &#x5BF9;&#x8C61;&#x3002;</div>

<div>&#xA0;</div>

<div class="noinclude">
<p>&#x4E5F;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x7528; <a title="AsyncFunction&#xA0;&#x6784;&#x9020;&#x51FD;&#x6570;&#xA0;&#x5B9E;&#x4F8B;&#x5316;&#x4E00;&#x4E2A;&#xA0;async function &#x5BF9;&#x8C61;. &#x5728; JavaScript &#x4E2D;&#x6BCF;&#x4E2A;&#x5F02;&#x6B65;&#x51FD;&#x6570;&#x5B9E;&#x4F8B;&#x4E0A;&#x90FD;&#x662F;&#xA0;AsyncFunction&#x5BF9;&#x8C61;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction"><code>AsyncFunction</code></a> &#x6784;&#x9020;&#x5668;&#x6216;&#x8005;&#x4E00;&#x4E2A;<a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Operators/async_function" class="new"><code>async function</code></a> &#x8868;&#x8FBE;&#x5F0F;&#x53BB;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x5F02;&#x6B65;&#x7684;&#x51FD;&#x6570;&#x3002;</p>
</div>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">async function <em>name</em>([<em>param</em>[, <em>param</em>[, ... <em>param</em>]]]) {
   <em>statements</em>
}
</pre>

<dl>
 <dt><code>name</code></dt>
 <dd>&#x65B9;&#x6CD5;&#x7684;&#x540D;&#x5B57;&#x3002;</dd>
</dl>

<dl>
 <dt><code>param</code></dt>
 <dd><code>&#x4F20;&#x9012;&#x7ED9;&#x65B9;&#x6CD5;&#x7684;&#x53C2;&#x6570;&#x540D;&#x3002;</code></dd>
</dl>

<dl>
 <dt><code>statements</code></dt>
 <dd>&#x65B9;&#x6CD5;&#x4F53;&#x7684;&#x8BED;&#x53E5;&#x3002;</dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x8C03;&#x7528;&#x5F02;&#x6B65;&#x51FD;&#x6570;&#x65F6;&#x4F1A;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A; promise &#x5BF9;&#x8C61;&#x3002;&#x5F53;&#x8FD9;&#x4E2A;&#x5F02;&#x6B65;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x503C;&#x65F6;&#xFF0C;promise &#x7684;&#xA0;resolve &#x65B9;&#x6CD5;&#x5C06;&#x4F1A;&#x5904;&#x7406;&#x8FD9;&#x4E2A;&#x8FD4;&#x56DE;&#x503C;&#xFF1B;&#x5F53;&#x5F02;&#x6B65;&#x51FD;&#x6570;&#x629B;&#x51FA;&#x7684;&#x662F;&#x5F02;&#x5E38;&#x6216;&#x8005;&#x975E;&#x6CD5;&#x503C;&#x65F6;&#xFF0C;promise &#x7684; reject &#x65B9;&#x6CD5;&#x5C06;&#x5904;&#x7406;&#x8FD9;&#x4E2A;&#x5F02;&#x5E38;&#x503C;&#x3002;</p>

<p>&#x5F02;&#x6B65;&#x51FD;&#x6570;&#x53EF;&#x80FD;&#x4F1A;&#x5305;&#x62EC;&#xA0; <a title="await &#x64CD;&#x4F5C;&#x7B26;&#x88AB;&#x7528;&#x6765;&#x7B49;&#x5F85; async function&#xA0;&#x8FD4;&#x56DE;&#x7684; promise&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Operators/await"><code>await</code></a> &#x8868;&#x8FBE;&#x5F0F;&#xFF0C;&#x8FD9;&#x5C06;&#x4F1A;&#x4F7F;&#x5F02;&#x6B65;&#x51FD;&#x6570;&#x6682;&#x505C;&#x6267;&#x884C;&#x5E76;&#x7B49;&#x5F85; promise &#x89E3;&#x6790;&#x4F20;&#x503C;&#x540E;&#xFF0C;&#x7EE7;&#x7EED;&#x6267;&#x884C;&#x5F02;&#x6B65;&#x51FD;&#x6570;&#x5E76;&#x8FD4;&#x56DE;&#x89E3;&#x6790;&#x503C;&#x3002;</p>

<h2 id="&#x4F8B;&#x5982;">&#x4F8B;&#x5982;</h2>

<h3 id="&#x7B80;&#x5355;&#x4F8B;&#x5B50;">&#x7B80;&#x5355;&#x4F8B;&#x5B50;</h3>

<pre class="brush: js">function resolveAfter2Seconds(x) {
  return new Promise(resolve =&gt; {
    setTimeout(() =&gt; {
      resolve(x);
    }, 2000);
  });
}

async function add1(x) {
  var a = resolveAfter2Seconds(20);
  var b = resolveAfter2Seconds(30);
  return x + await a + await b;
}

add1(10).then(v =&gt; {
  console.log(v);  // prints 60 after 2 seconds.
});

async function add2(x) {
  var a = await resolveAfter2Seconds(20);
  var b = await resolveAfter2Seconds(30);
  return x + a + b;
}

add2(10).then(v =&gt; {
  console.log(v);  // prints 60 after 4 seconds.
});
</pre>

<h3 id="&#x901A;&#x8FC7;&#x5F02;&#x6B65;&#x65B9;&#x6CD5;&#x91CD;&#x5199;_promise_&#x94FE;">&#x901A;&#x8FC7;&#x5F02;&#x6B65;&#x65B9;&#x6CD5;&#x91CD;&#x5199; promise &#x94FE;</h3>

<p>&#x8FD4;&#x56DE; promise &#x7684; API &#x5C06;&#x4F1A;&#x88AB;&#x7528;&#x4E8E; promise &#x94FE;&#xFF0C;&#x5B83;&#x4F1A;&#x5C06;&#x65B9;&#x6CD5;&#x5206;&#x6210;&#x82E5;&#x5E72;&#x90E8;&#x5206;&#x3002;&#x4F8B;&#x5982;&#x4E0B;&#x9762;&#x4EE3;&#x7801;&#xFF1A;</p>

<pre class="brush: js">function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch(e =&gt; {
      return downloadFallbackData(url) // returns a promise
    })
    .then(v =&gt; {
      return processDataInWorker(v); // returns a promise
    });
}
</pre>

<p>&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x4E00;&#x4E2A;&#x5F02;&#x6B65;&#x51FD;&#x6570;&#x6539;&#x5199;&#x4E3A;&#xFF1A;</p>

<pre class="brush: js">async function getProcessedData(url) {
  let v:
  try {
    v = await downloadData(url); 
  } catch (e) {
    v = await downloadFallbackData(url);
  }
  return processDataInWorker(v);
}
</pre>

<p>&#x6CE8;&#x610F;&#xFF0C;&#x5728;&#x4E0A;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x4E2D;&#x8FD4;&#x56DE;&#x8BED;&#x53E5;&#x4E2D;&#x6CA1;&#x6709; await &#xFF0C;&#x56E0;&#x4E3A;&#xA0;<code>Promise.resolve &#x4F1A;</code>&#x9690;&#x5F0F;&#x5305;&#x88F9;&#x5F02;&#x6B65;&#x65B9;&#x6CD5;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x3002;</p>

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
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecmascript-asyncawait/#async-function-definitions" class="external">ECMAScript Async Functions<br><small lang="zh-CN">async function</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>Proposal</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x517C;&#x5BB9;&#x6027;">&#x517C;&#x5BB9;&#x6027;</h2>

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
   <th>&#xA0;Edge</th>
   <th>Opera</th>
   <th>Safari (WebKit)</th>
  </tr>
  <tr>
   <td>Basic support</td>
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
   <td>Basic support</td>
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

<p>&#xA0;</p>

<h2 id="&#x53C2;&#x89C1;">&#x53C2;&#x89C1;</h2>

<ul>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Operators/async_function" class="new"><code>async function expression</code></a></li>
 <li><a title="AsyncFunction&#xA0;&#x6784;&#x9020;&#x51FD;&#x6570;&#xA0;&#x5B9E;&#x4F8B;&#x5316;&#x4E00;&#x4E2A;&#xA0;async function &#x5BF9;&#x8C61;. &#x5728; JavaScript &#x4E2D;&#x6BCF;&#x4E2A;&#x5F02;&#x6B65;&#x51FD;&#x6570;&#x5B9E;&#x4F8B;&#x4E0A;&#x90FD;&#x662F;&#xA0;AsyncFunction&#x5BF9;&#x8C61;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction"><code>AsyncFunction</code></a> object</li>
 <li><a title="await &#x64CD;&#x4F5C;&#x7B26;&#x88AB;&#x7528;&#x6765;&#x7B49;&#x5F85; async function&#xA0;&#x8FD4;&#x56DE;&#x7684; promise&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Operators/await"><code>await</code></a></li>
</ul>
                  
                
              