
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><strong><code>async function</code></strong> &#x5173;&#x952E;&#x5B57;&#x53EF;&#x4EE5;&#x7528;&#x6765;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x5F02;&#x6B65;&#x51FD;&#x6570;&#x8868;&#x8FBE;&#x5F0F;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">async function [<em>name</em>]([<em>param1</em>[, <em>param2[</em>, ..., <em>paramN</em>]]]) {
   <em>statements</em>
}</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>name</code></dt>
 <dd>&#x51FD;&#x6570;&#x540D;&#x79F0;&#x3002;&#x53EF;&#x4EE5;&#x7701;&#x7565;&#xFF0C;&#x4EE5;&#x6B64;&#x6765;&#x58F0;&#x660E;&#x4E00;&#x4E2A;&#x533F;&#x540D;&#x7684;&#x51FD;&#x6570;&#x3002;&#x4E5F;&#x662F;&#x7528;&#x4E8E;&#x672C;&#x5730;&#x8C03;&#x7528;&#x51FD;&#x6570;&#x4F53;&#x7684;&#x4E00;&#x4E2A;&#x540D;&#x79F0;&#x3002;</dd>
 <dt><code>paramN</code></dt>
 <dd>&#x4F20;&#x5165;&#x51FD;&#x6570;&#x7684;&#x53C2;&#x6570;&#x540D;&#x3002;</dd>
 <dt><code>statements</code></dt>
 <dd>&#x51FD;&#x6570;&#x4F53;&#x5185;&#x7684;&#x8BED;&#x53E5;&#x58F0;&#x660E;&#x3002;</dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>async function</code> &#x8868;&#x8FBE;&#x5F0F;&#x975E;&#x5E38;&#x7C7B;&#x4F3C;&#x4E8E; <a title="&#x8C03;&#x7528;&#x5F02;&#x6B65;&#x51FD;&#x6570;&#x65F6;&#x4F1A;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A; promise &#x5BF9;&#x8C61;&#x3002;&#x5F53;&#x8FD9;&#x4E2A;&#x5F02;&#x6B65;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x503C;&#x65F6;&#xFF0C;promise &#x7684;&#xA0;resolve &#x65B9;&#x6CD5;&#x5C06;&#x4F1A;&#x5904;&#x7406;&#x8FD9;&#x4E2A;&#x8FD4;&#x56DE;&#x503C;&#xFF1B;&#x5F53;&#x5F02;&#x6B65;&#x51FD;&#x6570;&#x629B;&#x51FA;&#x7684;&#x662F;&#x5F02;&#x5E38;&#x6216;&#x8005;&#x975E;&#x6CD5;&#x503C;&#x65F6;&#xFF0C;promise &#x7684; reject &#x65B9;&#x6CD5;&#x5C06;&#x5904;&#x7406;&#x8FD9;&#x4E2A;&#x5F02;&#x5E38;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function"><code>async function</code></a> &#x58F0;&#x660E;&#x8BED;&#x53E5;&#xFF0C;&#x5E76;&#x4E14;&#x51E0;&#x4E4E;&#x62E5;&#x6709;&#x7B49;&#x540C;&#x7684;&#x8BED;&#x6CD5;&#x3002;&#x4ED6;&#x4EEC;&#x4E4B;&#x95F4;&#x4E3B;&#x8981;&#x7684;&#x533A;&#x522B;&#x5728;&#x4E8E;&#x51FD;&#x6570;&#x540D;&#x79F0;&#xFF0C;async function&#x8868;&#x8FBE;&#x5F0F;&#x53EF;&#x4EE5;&#x7701;&#x7565;&#x51FD;&#x6570;&#x540D;&#x79F0;&#x6765;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x533F;&#x540D;&#x7684;&#x51FD;&#x6570;&#x3002;&#x53E6;&#x89C1; <a href="/en-US/docs/Web/JavaScript/Reference/Functions">functions</a> &#x7AE0;&#x8282;&#x83B7;&#x53D6;&#x66F4;&#x591A;&#x4FE1;&#x606F;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x7B80;&#x5355;&#x4F8B;&#x5B50;">&#x7B80;&#x5355;&#x4F8B;&#x5B50;</h3>

<pre class="brush: js">function resolveAfter2Seconds(x) {
  return new Promise(resolve =&gt; {
    setTimeout(() =&gt; {
      resolve(x);
    }, 2000);
  });
};

var add1 = async function(x) {
  var a = resolveAfter2Seconds(20);
  var b = resolveAfter2Seconds(30);
  return x + await a + await b;
}

add1(10).then(v =&gt; {
  console.log(v);  // prints 60 after 2 seconds.
});

var add2 = async function(x) {
  var a = await resolveAfter2Seconds(20);
  var b = await resolveAfter2Seconds(30);
  return x + a + b;
};

add2(10).then(v =&gt; {
  console.log(v);  // prints 60 after 4 seconds.
});
</pre>

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
   <th>&#xA0;Edge</th>
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
   <td>&#x57FA;&#x672C;&#x652F;&#x6301;</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
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

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="&#x8C03;&#x7528;&#x5F02;&#x6B65;&#x51FD;&#x6570;&#x65F6;&#x4F1A;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A; promise &#x5BF9;&#x8C61;&#x3002;&#x5F53;&#x8FD9;&#x4E2A;&#x5F02;&#x6B65;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x503C;&#x65F6;&#xFF0C;promise &#x7684;&#xA0;resolve &#x65B9;&#x6CD5;&#x5C06;&#x4F1A;&#x5904;&#x7406;&#x8FD9;&#x4E2A;&#x8FD4;&#x56DE;&#x503C;&#xFF1B;&#x5F53;&#x5F02;&#x6B65;&#x51FD;&#x6570;&#x629B;&#x51FA;&#x7684;&#x662F;&#x5F02;&#x5E38;&#x6216;&#x8005;&#x975E;&#x6CD5;&#x503C;&#x65F6;&#xFF0C;promise &#x7684; reject &#x65B9;&#x6CD5;&#x5C06;&#x5904;&#x7406;&#x8FD9;&#x4E2A;&#x5F02;&#x5E38;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function"><code>async function</code></a></li>
 <li><a title="AsyncFunction&#xA0;&#x6784;&#x9020;&#x51FD;&#x6570;&#xA0;&#x5B9E;&#x4F8B;&#x5316;&#x4E00;&#x4E2A;&#xA0;async function &#x5BF9;&#x8C61;. &#x5728; JavaScript &#x4E2D;&#x6BCF;&#x4E2A;&#x5F02;&#x6B65;&#x51FD;&#x6570;&#x5B9E;&#x4F8B;&#x4E0A;&#x90FD;&#x662F;&#xA0;AsyncFunction&#x5BF9;&#x8C61;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction"><code>AsyncFunction</code></a> &#x5BF9;&#x8C61;</li>
 <li><a title="await &#x64CD;&#x4F5C;&#x7B26;&#x88AB;&#x7528;&#x6765;&#x7B49;&#x5F85; async function&#xA0;&#x8FD4;&#x56DE;&#x7684; promise&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Operators/await"><code>await</code></a></li>
</ul>
                  
                
              