
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>&#x96C6;&#x5408;&#xFF08;<code>Set</code>&#xFF09;&#x5BF9;&#x8C61;&#x5141;&#x8BB8;&#x4F60;&#x5B58;&#x50A8;&#x4EFB;&#x610F;&#x7C7B;&#x578B;&#x7684;&#x552F;&#x4E00;&#x503C;&#xFF08;&#x4E0D;&#x80FD;&#x91CD;&#x590D;&#xFF09;&#xFF0C;&#x65E0;&#x8BBA;&#x5B83;&#x662F;<a href="/en-US/docs/Glossary/Primitive" class="glossaryLink" title="&#x539F;&#x59CB;&#x503C;: Editorial review completed.">&#x539F;&#x59CB;&#x503C;</a>&#x6216;&#x8005;&#x662F;&#x5BF9;&#x8C61;&#x5F15;&#x7528;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">new Set([iterable]);</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt>iterable</dt>
 <dd>&#x4E00;&#x4E2A;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of">&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;</a>&#xFF0C;&#x5176;&#x4E2D;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x90FD;&#x4F1A;&#x88AB;&#x52A0;&#x5165;&#x5230; Set &#x4E2D;&#x3002;<code>null</code>&#x88AB;&#x89C6;&#x4F5C; <code>undefined </code>&#x3002;</dd>
</dl>

<h2 id="&#x7B80;&#x8FF0;">&#x7B80;&#x8FF0;</h2>

<p><code>Set</code>&#x5BF9;&#x8C61;&#x662F;&#x503C;&#x7684;&#x96C6;&#x5408;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x6309;&#x7167;&#x63D2;&#x5165;&#x7684;&#x987A;&#x5E8F;&#x8FED;&#x4EE3;&#x5B83;&#x7684;&#x5143;&#x7D20;&#x3002; Set&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x53EA;&#x4F1A;&#x51FA;&#x73B0;&#x4E00;&#x6B21;&#xFF0C;&#x5373; Set &#x4E2D;&#x7684;&#x5143;&#x7D20;&#x662F;&#x552F;&#x4E00;&#x7684;&#x3002;</p>

<h3 id="&#x503C;&#x7684;&#x76F8;&#x7B49;">&#x503C;&#x7684;&#x76F8;&#x7B49;</h3>

<p>&#x56E0;&#x4E3A; Set &#x4E2D;&#x7684;&#x503C;&#x603B;&#x662F;&#x552F;&#x4E00;&#x7684;&#xFF0C;&#x6240;&#x4EE5;&#x9700;&#x8981;&#x5224;&#x65AD;&#x4E24;&#x4E2A;&#x503C;&#x662F;&#x5426;&#x76F8;&#x7B49;&#x3002;&#x5224;&#x65AD;&#x76F8;&#x7B49;&#x7684;&#x7B97;&#x6CD5;&#x4E0E;&#x4E25;&#x683C;&#x76F8;&#x7B49;&#xFF08;===&#x64CD;&#x4F5C;&#x7B26;&#xFF09;&#x4E0D;&#x540C;&#x3002;&#x5177;&#x4F53;&#x6765;&#x8BF4;&#xFF0C;&#x5BF9;&#x4E8E; Set &#xFF0C; +0 &#xFF08;+0 &#x4E25;&#x683C;&#x76F8;&#x7B49;&#x4E8E;-0&#xFF09;&#x548C;-0&#x662F;&#x4E0D;&#x540C;&#x7684;&#x503C;&#x3002;&#x5C3D;&#x7BA1;&#x5728;&#x6700;&#x65B0;&#x7684; ECMAScript 6&#x89C4;&#x8303;&#x4E2D;&#x8FD9;&#x70B9;&#x5DF2;&#x88AB;&#x66F4;&#x6539;&#x3002;&#x4ECE;Gecko 29.0&#x548C; <a href="https://code.google.com/p/v8/issues/detail?id=3069" class="external">recent nightly Chrome</a>&#x5F00;&#x59CB;&#xFF0C;Set &#x89C6; +0 &#x548C; -0 &#x4E3A;&#x76F8;&#x540C;&#x7684;&#x503C;&#x3002;&#x53E6;&#x5916;&#xFF0C;<code>NaN</code>&#x548C;<code>undefined</code>&#x90FD;&#x53EF;&#x4EE5;&#x88AB;&#x5B58;&#x50A8;&#x5728;Set &#x4E2D;&#xFF0C; <code>NaN</code>&#x4E4B;&#x95F4;&#x88AB;&#x89C6;&#x4E3A;&#x76F8;&#x540C;&#x7684;&#x503C;&#xFF08;&#x5C3D;&#x7BA1; NaN !== NaN&#xFF09;&#x3002;</p>

<h2 name="Properties" id="Properties">&#x5C5E;&#x6027;</h2>

<dl>
 <dt><code>Set.length</code></dt>
 <dd><code>length</code>&#x5C5E;&#x6027;&#x7684;&#x503C;&#x4E3A;0&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/@@species" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>get Set[@@species]</code></a></dt>
 <dd>&#x6784;&#x9020;&#x51FD;&#x6570;&#x7528;&#x6765;&#x521B;&#x5EFA;&#x6D3E;&#x751F;&#x5BF9;&#x8C61;.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/prototype" title="Set.prototype&#x5C5E;&#x6027;&#x8868;&#x793A;Set&#x6784;&#x9020;&#x5668;&#x7684;&#x539F;&#x578B;&#x3002;"><code>Set.prototype</code></a></dt>
 <dd>&#x8868;&#x793A;Set&#x6784;&#x9020;&#x5668;&#x7684;&#x539F;&#x578B;&#xFF0C;&#x5141;&#x8BB8;&#x5411;&#x6240;&#x6709;Set&#x5BF9;&#x8C61;&#x6DFB;&#x52A0;&#x65B0;&#x7684;&#x5C5E;&#x6027;&#x3002;</dd>
</dl>

<h2 id="Set&#x5B9E;&#x4F8B;"><code>Set</code>&#x5B9E;&#x4F8B;</h2>

<p>&#x6240;&#x6709;Set&#x5B9E;&#x4F8B;&#x7EE7;&#x627F;&#x81EA; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/prototype" title="Set.prototype&#x5C5E;&#x6027;&#x8868;&#x793A;Set&#x6784;&#x9020;&#x5668;&#x7684;&#x539F;&#x578B;&#x3002;"><code>Set.prototype</code></a>&#x3002;</p>

<h3 id="&#x5C5E;&#x6027;">&#x5C5E;&#x6027;</h3>

<p></p><dl><dt><code>Set.prototype.constructor</code></dt>
 <dd>&#x8FD4;&#x56DE;&#x5B9E;&#x4F8B;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;&#x3002;&#x9ED8;&#x8BA4;&#x60C5;&#x51B5;&#x4E0B;&#x662F;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set" title="&#x96C6;&#x5408;&#xFF08;Set&#xFF09;&#x5BF9;&#x8C61;&#x5141;&#x8BB8;&#x4F60;&#x5B58;&#x50A8;&#x4EFB;&#x610F;&#x7C7B;&#x578B;&#x7684;&#x552F;&#x4E00;&#x503C;&#xFF08;&#x4E0D;&#x80FD;&#x91CD;&#x590D;&#xFF09;&#xFF0C;&#x65E0;&#x8BBA;&#x5B83;&#x662F;&#x539F;&#x59CB;&#x503C;&#x6216;&#x8005;&#x662F;&#x5BF9;&#x8C61;&#x5F15;&#x7528;&#x3002;"><code>Set</code></a>&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/size" title="Size&#x5C5E;&#x6027;&#x5C06;&#x4F1A;&#x8FD4;&#x56DE;Set&#x5BF9;&#x8C61;&#x4E2D;&#x5143;&#x7D20;&#x7684;&#x4E2A;&#x6570;&#x3002;"><code>Set.prototype.size</code></a></dt>
 <dd>&#x8FD4;&#x56DE;<code>Set</code>&#x5BF9;&#x8C61;&#x7684;&#x503C;&#x7684;&#x4E2A;&#x6570;&#x3002;</dd>
</dl><p></p>

<h3 id="&#x65B9;&#x6CD5;">&#x65B9;&#x6CD5;</h3>

<p></p><dl><dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/add" title="add() &#x65B9;&#x6CD5;&#x7528;&#x6765;&#x5411;&#x4E00;&#x4E2A; Set &#x5BF9;&#x8C61;&#x7684;&#x672B;&#x5C3E;&#x6DFB;&#x52A0;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x503C;&#x3002;"><code>Set.prototype.add(value)</code></a></dt>
 <dd>&#x5728;<code>Set&#x5BF9;&#x8C61;&#x5C3E;&#x90E8;&#x6DFB;&#x52A0;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x3002;&#x8FD4;&#x56DE;<font face="Open Sans, Arial, sans-serif">&#x8BE5;</font></code><code>Set&#x5BF9;&#x8C61;&#x3002;</code></dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/clear" title="clear() &#x65B9;&#x6CD5;&#x7528;&#x6765;&#x6E05;&#x7A7A;&#x4E00;&#x4E2A; Set &#x5BF9;&#x8C61;&#x4E2D;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x3002;"><code>Set.prototype.clear()</code></a></dt>
 <dd>&#x79FB;&#x9664;<code>Set</code>&#x5BF9;&#x8C61;&#x5185;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/delete" title="delete() &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x4ECE;&#x4E00;&#x4E2A; Set &#x5BF9;&#x8C61;&#x4E2D;&#x5220;&#x9664;&#x6307;&#x5B9A;&#x7684;&#x5143;&#x7D20;&#x3002;"><code>Set.prototype.delete(value)</code></a></dt>
 <dd><code><font face="Open Sans, Arial, sans-serif">&#x79FB;&#x9664;Set&#x7684;&#x4E2D;&#x4E0E;&#x8FD9;&#x4E2A;&#x503C;&#x76F8;&#x7B49;&#x7684;&#x5143;&#x7D20;&#xFF0C;&#x8FD4;&#x56DE;</font>Set.prototype.has(value)&#x5728;&#x8FD9;&#x4E2A;&#x64CD;&#x4F5C;&#x524D;&#x4F1A;&#x8FD4;&#x56DE;&#x7684;&#x503C;&#xFF08;&#x5373;&#x5982;&#x679C;&#x8BE5;&#x5143;&#x7D20;&#x5B58;&#x5728;&#xFF0C;&#x8FD4;&#x56DE;true&#xFF0C;&#x5426;&#x5219;&#x8FD4;&#x56DE;false&#xFF09;&#x3002;</code><code>Set.prototype.has(value)&#x5728;&#x6B64;&#x540E;&#x4F1A;&#x8FD4;&#x56DE;false&#x3002;</code></dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/entries" title="entries() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x8FED;&#x4EE3;&#x5668;&#x5BF9;&#x8C61; &#xFF0C;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x5143;&#x7D20;&#x662F;&#x7C7B;&#x4F3C; [value, value] &#x5F62;&#x5F0F;&#x7684;&#x6570;&#x7EC4;&#xFF0C;value &#x662F;&#x96C6;&#x5408;&#x5BF9;&#x8C61;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x8FED;&#x4EE3;&#x5668;&#x5BF9;&#x8C61;&#x5143;&#x7D20;&#x7684;&#x987A;&#x5E8F;&#x5373;&#x96C6;&#x5408;&#x5BF9;&#x8C61;&#x4E2D;&#x5143;&#x7D20;&#x63D2;&#x5165;&#x7684;&#x987A;&#x5E8F;&#x3002;&#x7531;&#x4E8E;&#x96C6;&#x5408;&#x5BF9;&#x8C61;&#x4E0D;&#x50CF; Map &#x5BF9;&#x8C61;&#x90A3;&#x6837;&#x62E5;&#x6709; key&#xFF0C;&#x7136;&#x800C;&#xFF0C;&#x4E3A;&#x4E86;&#x4E0E; Map &#x5BF9;&#x8C61;&#x7684; API &#x5F62;&#x5F0F;&#x4FDD;&#x6301;&#x4E00;&#x81F4;&#xFF0C;&#x6545;&#x4F7F;&#x5F97;&#x6BCF;&#x4E00;&#x4E2A; entry &#x7684; key &#x548C; value &#x90FD;&#x62E5;&#x6709;&#x76F8;&#x540C;&#x7684;&#x503C;&#xFF0C;&#x56E0;&#x800C;&#x6700;&#x7EC8;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A; [value, value] &#x5F62;&#x5F0F;&#x7684;&#x6570;&#x7EC4;&#x3002;"><code>Set.prototype.entries()</code></a></dt>
 <dd><code style="font-style: normal;">&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x8FED;&#x4EE3;&#x5668;&#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x5305;&#x542B;Set&#x5BF9;&#x8C61;&#x4E2D;&#x7684;</code><span style="font-family: Consolas,Monaco,&apos;Andale Mono&apos;,monospace;">&#x6309;&#x63D2;&#x5165;&#x987A;&#x5E8F;&#x6392;&#x5217;&#x7684;</span><code style="font-style: normal;">&#x6240;&#x6709;&#x5143;&#x7D20;&#x7684;&#x503C;&#x7684;[value, value]&#x6570;&#x7EC4;&#x3002;&#x4E3A;&#x4E86;&#x4F7F;&#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;</code>&#x548C;<code>Map&#x5BF9;&#x8C61;&#x4FDD;&#x6301;&#x76F8;&#x4F3C;&#xFF0C;</code>&#xA0;&#x6BCF;&#x4E2A;&#x503C;&#x7684;&#x952E;&#x548C;&#x503C;&#x76F8;&#x7B49;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach" title="forEach &#x65B9;&#x6CD5;&#x6839;&#x636E;&#x96C6;&#x5408;&#x4E2D;&#x5143;&#x7D20;&#x7684;&#x987A;&#x5E8F;&#xFF0C;&#x5BF9;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x90FD;&#x6267;&#x884C;&#x63D0;&#x4F9B;&#x7684; callback &#x51FD;&#x6570;&#x4E00;&#x6B21;&#x3002;"><code>Set.prototype.forEach(callbackFn[, thisArg])</code></a></dt>
 <dd>&#x6309;&#x7167;&#x63D2;&#x5165;&#x987A;&#x5E8F;&#xFF0C;&#x4E3A;Set&#x5BF9;&#x8C61;&#x4E2D;&#x7684;&#x6BCF;&#x4E00;&#x4E2A;&#x503C;&#x8C03;&#x7528;&#x4E00;&#x6B21;callBackFn&#x3002;&#x5982;&#x679C;&#x63D0;&#x4F9B;&#x4E86;<code>thisArg&#x53C2;&#x6570;&#xFF0C;&#x56DE;&#x8C03;&#x4E2D;&#x7684;this&#x4F1A;&#x662F;&#x8FD9;&#x4E2A;&#x53C2;&#x6570;&#x3002;</code></dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/has" title="has() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5E03;&#x5C14;&#x503C;&#x6765;&#x6307;&#x793A;&#x5BF9;&#x5E94;&#x7684;&#x503C;value&#x662F;&#x5426;&#x5B58;&#x5728;Set&#x5BF9;&#x8C61;&#x4E2D;"><code>Set.prototype.has(value)</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5E03;&#x5C14;&#x503C;&#xFF0C;&#x8868;&#x793A;&#x8BE5;&#x503C;&#x5728;<code>Set&#x4E2D;&#x5B58;&#x5728;&#x4E0E;&#x5426;&#x3002;</code></dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/keys" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Set.prototype.keys()</code></a></dt>
 <dd>&#x4E0E;<strong><code>values()</code></strong><code>&#x65B9;&#x6CD5;&#x76F8;&#x540C;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x8FED;&#x4EE3;&#x5668;&#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x5305;&#x542B;Set&#x5BF9;&#x8C61;&#x4E2D;&#x7684;</code><span style="font-family: Consolas,Monaco,&apos;Andale Mono&apos;,monospace;">&#x6309;&#x63D2;&#x5165;&#x987A;&#x5E8F;&#x6392;&#x5217;&#x7684;</span><code>&#x6240;&#x6709;&#x5143;&#x7D20;&#x7684;&#x503C;&#x3002;</code></dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/values" title="values()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A; Iterator &#xA0;&#x5BF9;&#x8C61;&#xFF0C;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x4EE5;&#x63D2;&#x5165;Set&#xA0;&#x5BF9;&#x8C61;&#x7684;&#x987A;&#x5E8F;&#x5305;&#x542B;&#x4E86;&#x539F; Set &#x5BF9;&#x8C61;&#x91CC;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x3002;"><code>Set.prototype.values()</code></a></dt>
 <dd><code style="font-style: normal;">&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x8FED;&#x4EE3;&#x5668;&#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x5305;&#x542B;Set&#x5BF9;&#x8C61;&#x4E2D;&#x7684;</code><span style="font-family: Consolas,Monaco,&apos;Andale Mono&apos;,monospace;">&#x6309;&#x63D2;&#x5165;&#x987A;&#x5E8F;&#x6392;&#x5217;&#x7684;</span><code style="font-style: normal;">&#x6240;&#x6709;&#x5143;&#x7D20;&#x7684;&#x503C;&#x3002;</code></dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator" title="The initial value of the @@iterator property is the same function object as the initial value of the values property."><code>Set.prototype[@@iterator]()</code></a></dt>
 <dd><code style="font-style: normal;">&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x8FED;&#x4EE3;&#x5668;&#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x5305;&#x542B;Set&#x5BF9;&#x8C61;&#x4E2D;&#x7684;</code><span style="font-family: Consolas,Monaco,&apos;Andale Mono&apos;,monospace;">&#x6309;&#x63D2;&#x5165;&#x987A;&#x5E8F;&#x6392;&#x5217;&#x7684;</span><code style="font-style: normal;">&#x6240;&#x6709;&#x5143;&#x7D20;&#x7684;&#x503C;&#x3002;</code></dd>
</dl><p></p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;Set&#x5BF9;&#x8C61;">&#x4F7F;&#x7528;<code>Set</code>&#x5BF9;&#x8C61;</h3>

<pre class="brush: js">var mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add(&quot;some text&quot;);

mySet.has(1); // true
mySet.has(3); // false, 3&#x8FD8;&#x6CA1;&#x6709;&#x88AB;&#x6DFB;&#x52A0;&#x5230;set&#x4E2D;
mySet.has(5);              // true
mySet.has(Math.sqrt(25));  // true
mySet.has(&quot;Some Text&quot;.toLowerCase()); // true

mySet.size; // 3

mySet.delete(5); // &#x4ECE;set&#x4E2D;&#x79FB;&#x9664;5
mySet.has(5);    // false, 5&#x5DF2;&#x7ECF;&#x88AB;&#x79FB;&#x9664;

mySet.size; // 3, &#x6211;&#x4EEC;&#x521A;&#x521A;&#x79FB;&#x9664;&#x4E86;&#x4E00;&#x4E2A;&#x503C;
</pre>

<h3 id="&#x8FED;&#x4EE3;Set">&#x8FED;&#x4EE3;Set</h3>

<pre class="brush: js">// &#x8FED;&#x4EE3;&#x6574;&#x4E2A;set
// &#x6309;&#x987A;&#x5E8F;&#x8F93;&#x51FA;&#xFF1A;1, &quot;some text&quot; 
for (let item of mySet) console.log(item);

// &#x6309;&#x987A;&#x5E8F;&#x8F93;&#x51FA;&#xFF1A;1, &quot;some text&quot; 
for (let item of mySet.keys()) console.log(item);
 
// &#x6309;&#x987A;&#x5E8F;&#x8F93;&#x51FA;&#xFF1A;1, &quot;some text&quot; 
for (let item of mySet.values()) console.log(item);

// &#x6309;&#x987A;&#x5E8F;&#x8F93;&#x51FA;&#xFF1A;1, &quot;some text&quot; 
//(&#x952E;&#x4E0E;&#x503C;&#x76F8;&#x7B49;)
for (let [key, value] of mySet.entries()) console.log(key);

// &#x8F6C;&#x6362;Set&#x4E3A;Array (with <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Array_comprehensions">Array comprehensions</a>)
var myArr = [v for (v of mySet)]; // [1, &quot;some text&quot;]
// &#x66FF;&#x4EE3;&#x65B9;&#x6848;(with <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from">Array.from</a>)
var myArr = Array.from(mySet); // [1, &quot;some text&quot;]

// &#x5982;&#x679C;&#x5728;HTML&#x6587;&#x6863;&#x4E2D;&#x5DE5;&#x4F5C;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#xFF1A;
mySet.add(document.body);
mySet.has(document.querySelector(&quot;body&quot;)); // true

// Set&#x548C;Array&#x4E92;&#x6362;
mySet2 = new Set([1,2,3,4]);
mySet2.size; // 4
[...mySet2]; // [1,2,3,4]

// &#x622A;&#x53D6; &#xA0;
var intersection = new Set([x for (x of set1) if (set2.has(x))]);

// &#x7528;forEach&#x8FED;&#x4EE3;
mySet.forEach(function(value) {
  console.log(value);
});

// 1
// 2
// 3
// 4</pre>

<h3 id="&#x4E0E;_Array_&#x7684;&#x8054;&#x7CFB;">&#x4E0E;&#xA0;<code>Array &#x7684;&#x8054;&#x7CFB;</code></h3>

<pre class="brush: js">var myArray = [&quot;value1&quot;, &quot;value2&quot;, &quot;value3&quot;];

// &#x7528;Set&#x6784;&#x9020;&#x5668;&#x5C06;Array&#x8F6C;&#x6362;&#x4E3A;Set
var mySet = new Set(myArray);

mySet.has(&quot;value1&quot;); // returns true

// &#x7528;...(&#x5C55;&#x5F00;&#x64CD;&#x4F5C;&#x7B26;)&#x64CD;&#x4F5C;&#x7B26;&#x5C06;Set&#x8F6C;&#x6362;&#x4E3A;Array
console.log([...mySet]); // &#x4E0E;myArray&#x5B8C;&#x5168;&#x4E00;&#x81F4;</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x5907;&#x6CE8;</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-set-objects" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Set</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-set-objects" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Set</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
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
   <td>
    <p>31&#xA0;<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set$edit#chrome-specific-note-1" class="new">[1]</a><br>
     38</p>
   </td>
   <td><a href="/en-US/Firefox/Releases/13" title="Released on 2012-06-05.">13</a> (13)</td>
   <td>11</td>
   <td>25</td>
   <td>7.1</td>
  </tr>
  <tr>
   <td>Constructor argument: <code>new Set(iterable)</code></td>
   <td>38</td>
   <td><a href="/en-US/Firefox/Releases/13" title="Released on 2012-06-05.">13</a> (13)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>25</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
  <tr>
   <td>iterable</td>
   <td>38</td>
   <td><a href="/en-US/Firefox/Releases/17" title="Released on 2012-11-20.">17</a> (17)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>25</td>
   <td>7.1</td>
  </tr>
  <tr>
   <td><code>Set.clear()</code></td>
   <td>31&#xA0;<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set$edit#chrome-specific-note-1" class="new">[1]</a><br>
    38</td>
   <td><a href="/en-US/Firefox/Releases/19" title="Released on 2013-02-19.">19</a> (19)</td>
   <td>11</td>
   <td>25</td>
   <td>7.1</td>
  </tr>
  <tr>
   <td><code>Set.keys(), Set.values(), Set.entries()</code></td>
   <td>37&#xA0;<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set$edit#chrome-specific-note-1" class="new">[1]</a><br>
    38</td>
   <td><a href="/en-US/Firefox/Releases/24" title="Released on 2013-09-17.">24</a> (24)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>25</td>
   <td>7.1</td>
  </tr>
  <tr>
   <td><code>Set.forEach()</code></td>
   <td>36&#xA0;<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set$edit#chrome-specific-note-1" class="new">[1]</a><br>
    38</td>
   <td><a href="/en-US/Firefox/Releases/25" title="Released on 2013-10-29.">25</a> (25)</td>
   <td>11</td>
   <td>25</td>
   <td>7.1</td>
  </tr>
  <tr>
   <td>Value equality for -0 and 0</td>
   <td>34&#xA0;<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set$edit#chrome-specific-note-1" class="new">[1]</a><br>
    38</td>
   <td><a href="/en-US/Firefox/Releases/29" title="Released on 2014-04-29.">29</a> (29)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>25</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
  <tr>
   <td>Constructor argument: <code>new Set(null)</code></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><a href="/en-US/Firefox/Releases/37" title="Released on 2015-04-07.">37</a> (37)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
  <tr>
   <td>Monkey-patched <code>add()</code> in Constructor</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><a href="/en-US/Firefox/Releases/37" title="Released on 2015-04-07.">37</a> (37)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
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
   <th>Chrome for Android</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>31&#xA0;<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set$edit#chrome-specific-note-1" class="new">[1]</a><br>
    38</td>
   <td>13.0 (13)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>iOS 8</td>
  </tr>
  <tr>
   <td>Constructor argument: <code>new Set(iterable)</code></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>38</td>
   <td>13.0 (13)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
  <tr>
   <td>iterable</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>17.0 (17)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>iOS 8</td>
  </tr>
  <tr>
   <td><code>Set.clear()</code></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>31&#xA0;<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set$edit#chrome-specific-note-1" class="new">[1]</a><br>
    38</td>
   <td>19.0 (19)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>iOS 8</td>
  </tr>
  <tr>
   <td><code>Set.keys(), Set.values(), Set.entries()</code></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>37&#xA0;<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set$edit#chrome-specific-note-1" class="new">[1]</a><br>
    38</td>
   <td>24.0 (24)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>iOS 8</td>
  </tr>
  <tr>
   <td><code>Set.forEach()</code></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>36&#xA0;<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set$edit#chrome-specific-note-1" class="new">[1]</a><br>
    38</td>
   <td>25.0 (25)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>iOS 8</td>
  </tr>
  <tr>
   <td>Value equality for -0 and 0</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>34&#xA0;<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set$edit#chrome-specific-note-1" class="new">[1]</a><br>
    38</td>
   <td>29.0 (29)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
  <tr>
   <td>Constructor argument: <code>new Set(null)</code></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>37.0 (37)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
  <tr>
   <td>Monkey-patched <code>add()</code> in Constructor</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>37.0 (37)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<p><a name="chrome-specific-note-1">[1]</a> Chrome &#x4E2D;&#x8BE5;&#x7279;&#x6027;&#x9700;&#x8981;&#x5728; <code>chrome://flags</code> &#x4E2D;&#x6253;&#x5F00;&#x5F00;&#x5173; &#x201C;Enable Experimental JavaScript&#x201D;.</p>

<h2 id="&#x53C2;&#x89C1;">&#x53C2;&#x89C1;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Map" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Map</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/WeakMap" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>WeakMap</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet" title="&#x4E00;&#x4E2A;&#xA0;WeakSet&#xA0;&#x5BF9;&#x8C61;&#x662F;&#x4E00;&#x4E2A;&#x65E0;&#x5E8F;&#x7684;&#x96C6;&#x5408;, &#x53EF;&#x4EE5;&#x7528;&#x5B83;&#x6765;&#x5B58;&#x50A8;&#x4EFB;&#x610F;&#x7684;&#x5BF9;&#x8C61;&#x503C;, &#x5E76;&#x4E14;&#x5BF9;&#x8FD9;&#x4E9B;&#x5BF9;&#x8C61;&#x503C;&#x4FDD;&#x6301;&#x5F31;&#x5F15;&#x7528;."><code>WeakSet</code></a></li>
</ul>

<header>&#xA0;</header>
                  
                
              