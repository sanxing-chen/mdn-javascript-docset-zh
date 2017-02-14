
                
                  
                    <div>
<div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>
</div>

<p><code>Map</code>&#x5BF9;&#x8C61;&#x5C31;&#x662F;&#x7B80;&#x5355;&#x7684;&#x952E;/&#x503C;&#x6620;&#x5C04;&#x3002;&#x5176;&#x4E2D;&#x952E;&#x548C;&#x503C;&#x53EF;&#x4EE5;&#x662F;&#x4EFB;&#x610F;&#x503C;(&#x5BF9;&#x8C61;&#x6216;&#x8005;<a title="&#x539F;&#x59CB;&#x503C;: Editorial review completed." href="/en-US/docs/Glossary/Primitive" class="glossaryLink">&#x539F;&#x59CB;&#x503C;</a>)&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">new Map([iterable])</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>iterable</code></dt>
 <dd>Iterable &#x53EF;&#x4EE5;&#x662F;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x6216;&#x8005;&#x5176;&#x4ED6;&#xA0;iterable &#x5BF9;&#x8C61;&#xFF0C;&#x5176;&#x5143;&#x7D20;&#x6216;&#x4E3A;&#x952E;&#x503C;&#x5BF9;&#xFF0C;&#x6216;&#x4E3A;&#x4E24;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x6570;&#x7EC4;&#x3002;&#xA0;&#x6BCF;&#x4E2A;&#x952E;&#x503C;&#x5BF9;&#x90FD;&#x4F1A;&#x6DFB;&#x52A0;&#x5230;&#x65B0;&#x7684; Map&#x3002;<code>null</code> &#x4F1A;&#x88AB;&#x5F53;&#x505A;&#xA0;<code>undefined&#x3002;</code></dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>Map &#x5BF9;&#x8C61;&#x4F1A;&#x6309;&#x5143;&#x7D20;&#x63D2;&#x5165;&#x7684;&#x987A;&#x5E8F;&#x904D;&#x5386;&#x2014;&#xA0;<a title="for...of&#x8BED;&#x53E5;&#x5728;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;(&#x5305;&#x62EC; Array,&#xA0;Map, Set, String, TypedArray&#xFF0C;arguments&#xA0;&#x5BF9;&#x8C61;&#x7B49;&#x7B49;)&#x4E0A;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x8FED;&#x4EE3;&#x5FAA;&#x73AF;&#xFF0C;&#x5BF9;&#x6BCF;&#x4E2A;&#x4E0D;&#x540C;&#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x503C;,&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#x6709;&#x6267;&#x884C;&#x8BED;&#x53E5;&#x7684;&#x8FED;&#x4EE3;&#x6302;&#x94A9;." href="/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of"><code>for...of</code></a> &#x5FAA;&#x73AF;&#x6BCF;&#x6B21;&#x904D;&#x5386;&#x90FD;&#x4F1A;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#xA0;<code>[key, value]</code>&#xA0;&#x6570;&#x7EC4;&#x3002;</p>

<h3 id="&#x952E;&#x7684;&#x6BD4;&#x8F83;(Key_equality)">&#x952E;&#x7684;&#x6BD4;&#x8F83;(Key equality)</h3>

<p>&#x952E;&#x7684;&#x6BD4;&#x8F83;&#x662F;&#x57FA;&#x4E8E;&#xA0;&quot;same-value&quot; &#x7B97;&#x6CD5;&#xFF1A;<code>NaN &#x662F;&#x4E0E;</code>&#xA0;<code>NaN &#x76F8;&#x540C;&#x7684;</code>&#xFF08;&#x867D;&#x7136;&#xA0;<code>NaN !== NaN&#xFF09;&#xFF0C;&#x5269;&#x4E0B;</code>&#x6240;&#x6709;&#x5176;&#x5B83;&#x7684;&#x503C;&#x662F;&#x6839;&#x636E; === &#x8FD0;&#x7B97;&#x7B26;&#x7684;&#x7ED3;&#x679C;&#x5224;&#x65AD;&#x662F;&#x5426;&#x76F8;&#x7B49;&#x3002;&#x5728;&#xA0;ECMAScript 6 &#x8349;&#x7A3F;&#x7684;&#x65E9;&#x671F;&#x7248;&#x672C;&#x4E2D;&#x89C6;&#xA0;<code>-0&#xA0;<font face="Open Sans, Arial, sans-serif">&#x548C;&#xA0;</font></code><code>+0</code>&#xA0;&#x4E3A;&#x4E0D;&#x76F8;&#x540C;&#x7684;&#xA0;(&#x867D;&#x7136;&#xA0;<code>-0 === +0</code>)&#xFF0C;&#x5728;&#x8FD1;&#x671F;&#x7248;&#x672C;&#x91CC;&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x5DF2;&#x7ECF;&#x88AB;&#x66F4;&#x6B63;&#xFF0C;&#x4E14;&#x5728;&#xA0;Gecko 29 (Firefox 29 / Thunderbird 29 / SeaMonkey 2.26) (<a title="FIXED: Treat -0 and 0 as the same key in Maps and Sets" href="https://bugzilla.mozilla.org/show_bug.cgi?id=952870" class="external">bug&#xA0;952870</a>) &#x548C;<a href="https://code.google.com/p/v8/issues/detail?id=3069" class="external">&#x8FD1;&#x671F;&#x7684; nightly Chrome</a>&#xA0;&#x7248;&#x672C;&#x8FD9;&#x4E2A;&#x5DF2;&#x7ECF;&#x66F4;&#x6539;&#x4E86;&#x3002;</p>

<h3 id="Objects_&#x548C;_maps_&#x7684;&#x6BD4;&#x8F83;">Objects &#x548C; maps &#x7684;&#x6BD4;&#x8F83;</h3>

<p><code><a title="en/JavaScript/Reference/Global_Objects/Object" href="../../../../JavaScript/Reference/Global_Objects/Object">Object</a>&#xA0;</code>&#x548C;&#xA0;<code>Map&#x7C7B;&#x4F3C;</code>&#x7684;&#x4E00;&#x70B9;&#x662F;,&#x5B83;&#x4EEC;&#x90FD;&#x5141;&#x8BB8;&#x4F60;&#x6309;&#x952E;&#x5B58;&#x53D6;&#x4E00;&#x4E2A;&#x503C;,&#x90FD;&#x53EF;&#x4EE5;&#x5220;&#x9664;&#x952E;,&#x8FD8;&#x53EF;&#x4EE5;&#x68C0;&#x6D4B;&#x4E00;&#x4E2A;&#x952E;&#x662F;&#x5426;&#x7ED1;&#x5B9A;&#x4E86;&#x503C;.&#x56E0;&#x6B64;,&#x4E00;&#x76F4;&#x4EE5;&#x6765;,&#x6211;&#x4EEC;&#x90FD;&#x628A;&#x5BF9;&#x8C61;&#x5F53;&#x6210;<code>Map</code>&#x6765;&#x4F7F;&#x7528;,&#x4E0D;&#x8FC7;,&#x73B0;&#x5728;&#x6709;&#x4E86;<code>Map,</code><code>&#x4E0B;&#x9762;&#x7684;&#x533A;&#x522B;&#x89E3;&#x91CA;&#x4E86;&#x4E3A;&#x4EC0;&#x4E48;</code>&#x4F7F;&#x7528;<code>Map&#x66F4;&#x597D;</code>&#x70B9;.</p>

<ul>
 <li>&#x4E00;&#x4E2A;<code>&#x5BF9;&#x8C61;&#x901A;&#x5E38;&#x90FD;&#x6709;&#x81EA;&#x5DF1;&#x7684;&#x539F;&#x578B;</code>,&#x6240;&#x4EE5;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x603B;&#x6709;&#x4E00;&#x4E2A;&quot;prototype&quot;&#x952E;&#x3002;&#x4E0D;&#x8FC7;&#xFF0C;&#x4ECE; ES5 &#x5F00;&#x59CB;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;<code>map = Object.create(null)</code>&#x6765;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x6CA1;&#x6709;&#x539F;&#x578B;&#x7684;&#x5BF9;&#x8C61;&#x3002;</li>
 <li>&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x952E;&#x53EA;&#x80FD;&#x662F;<a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/String"><code>&#x5B57;&#x7B26;&#x4E32;</code></a>&#x6216;&#x8005;&#xA0;<a title="Symbol &#x662F;&#x4E00;&#x79CD;&#x7279;&#x6B8A;&#x7684;&#x3001;&#x4E0D;&#x53EF;&#x53D8;&#x7684;&#x6570;&#x636E;&#x7C7B;&#x578B;&#xFF0C;&#x53EF;&#x4EE5;&#x4F5C;&#x4E3A;&#x5BF9;&#x8C61;&#x5C5E;&#x6027;&#x7684;&#x6807;&#x8BC6;&#x7B26;&#x4F7F;&#x7528;&#x3002;Symbol &#x5BF9;&#x8C61;&#x662F;&#x4E00;&#x4E2A; symbol primitive data type &#x7684;&#x9690;&#x5F0F;&#x5BF9;&#x8C61;&#x5305;&#x88C5;&#x5668;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol"><code>Symbols</code></a>&#xFF0C;&#x4F46;&#x4E00;&#x4E2A;&#xA0;<code>Map &#x7684;&#x952E;&#x53EF;&#x4EE5;&#x662F;&#x4EFB;&#x610F;&#x503C;&#x3002;</code></li>
 <li>&#x4F60;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;size&#x5C5E;&#x6027;&#x5F88;&#x5BB9;&#x6613;&#x5730;&#x5F97;&#x5230;&#x4E00;&#x4E2A;<code>Map&#x7684;&#x952E;&#x503C;&#x5BF9;&#x4E2A;&#x6570;&#xFF0C;</code>&#x800C;&#x5BF9;&#x8C61;&#x7684;&#x952E;&#x503C;&#x5BF9;&#x4E2A;&#x6570;&#x53EA;&#x80FD;&#x624B;&#x52A8;&#x786E;&#x8BA4;&#x3002;</li>
</ul>

<p>&#x4F46;&#x662F;&#x8FD9;&#x5E76;&#x4E0D;&#x610F;&#x5473;&#x7740;&#x4F60;&#x53EF;&#x4EE5;&#x968F;&#x610F;&#x4F7F;&#x7528;&#xA0;<code>Map&#xFF0C;&#x5BF9;&#x8C61;&#x4ECD;&#x65E7;&#x662F;&#x6700;&#x5E38;&#x7528;&#x7684;<font face="Open Sans, Arial, sans-serif">&#x3002;</font></code><code>Map</code>&#xA0;&#x5B9E;&#x4F8B;&#x53EA;&#x9002;&#x5408;&#x7528;&#x4E8E;&#x96C6;&#x5408;(collections)&#xFF0C;&#x4F60;&#x5E94;&#x5F53;&#x8003;&#x8651;&#x4FEE;&#x6539;&#x4F60;&#x539F;&#x6765;&#x7684;&#x4EE3;&#x7801;&#x2014;&#x2014;&#x5148;&#x524D;&#x4F7F;&#x7528;&#x5BF9;&#x8C61;&#x6765;&#x5BF9;&#x4ED8;&#x96C6;&#x5408;&#x7684;&#x5730;&#x65B9;&#x3002;&#x5BF9;&#x8C61;&#x5E94;&#x8BE5;&#x7528;&#x5176;&#x5B57;&#x6BB5;&#x548C;&#x65B9;&#x6CD5;&#x6765;&#x4F5C;&#x4E3A;&#x8BB0;&#x5F55;&#x7684;&#x3002;<br>
 &#x5982;&#x679C;&#x4F60;&#x4E0D;&#x786E;&#x5B9A;&#x8981;&#x4F7F;&#x7528;&#x54EA;&#x4E2A;&#xFF0C;&#x8BF7;&#x601D;&#x8003;&#x4E0B;&#x9762;&#x7684;&#x95EE;&#x9898;&#xFF1A;</p>

<ul>
 <li>&#x5728;&#x8FD0;&#x884C;&#x4E4B;&#x524D; key &#x662F;&#x5426;&#x662F;&#x672A;&#x77E5;&#x7684;&#xFF0C;&#x662F;&#x5426;&#x9700;&#x8981;&#x52A8;&#x6001;&#x5730;&#x67E5;&#x8BE2; key&#xA0;&#x5462;&#xFF1F;</li>
 <li>&#x662F;&#x5426;&#x6240;&#x6709;&#x7684;&#x503C;&#x90FD;&#x662F;&#x7EDF;&#x4E00;&#x7C7B;&#x578B;&#xFF0C;&#x8FD9;&#x4E9B;&#x503C;&#x53EF;&#x4EE5;&#x4E92;&#x6362;&#x4E48;&#xFF1F;</li>
 <li>&#x662F;&#x5426;&#x9700;&#x8981;&#x4E0D;&#x662F;&#x5B57;&#x7B26;&#x4E32;&#x7C7B;&#x578B;&#x7684; key &#xFF1F;</li>
 <li>&#x952E;&#x503C;&#x5BF9;&#x7ECF;&#x5E38;&#x589E;&#x52A0;&#x6216;&#x8005;&#x5220;&#x9664;&#x4E48;&#xFF1F;</li>
 <li>&#x662F;&#x5426;&#x6709;&#x4EFB;&#x610F;&#x4E2A;&#x4E14;&#x975E;&#x5E38;&#x5BB9;&#x6613;&#x6539;&#x53D8;&#x7684;&#x952E;&#x503C;&#x5BF9;?</li>
 <li>&#x8FD9;&#x4E2A;&#x96C6;&#x5408;&#x53EF;&#x4EE5;&#x904D;&#x5386;&#x4E48;(Is the collection iterated)?</li>
</ul>

<p>&#x5047;&#x5982;&#x4EE5;&#x4E0A;&#x5168;&#x662F;&#x201C;&#x662F;&#x201D;&#x7684;&#x8BDD;&#xFF0C;&#x90A3;&#x4E48;&#x4F60;&#x9700;&#x8981;&#x7528;&#xA0;<code>Map&#xA0;&#x6765;&#x4FDD;&#x5B58;&#x8FD9;&#x4E2A;&#x96C6;&#x3002;</code>&#xA0;&#x76F8;&#x53CD;&#xFF0C;&#x4F60;&#x6709;&#x56FA;&#x5B9A;&#x6570;&#x76EE;&#x7684;&#x952E;&#x503C;&#x5BF9;&#xFF0C;&#x72EC;&#x7ACB;&#x64CD;&#x4F5C;&#x5B83;&#x4EEC;&#xFF0C;&#x533A;&#x5206;&#x5B83;&#x4EEC;&#x7684;&#x7528;&#x6CD5;&#xFF0C;&#x90A3;&#x4E48;&#x4F60;&#x9700;&#x8981;&#x7684;&#x662F;&#x5BF9;&#x8C61;&#x3002;</p>

<h2 id="&#x5C5E;&#x6027;">&#x5C5E;&#x6027;</h2>

<dl>
 <dt><code>Map.length</code></dt>
 <dd>&#x5C5E;&#x6027; length &#x7684;&#x503C;&#x4E3A; 0 &#x3002;</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/@@species" class="new"><code>get Map[@@species]</code></a></dt>
 <dd>&#x672C;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7528;&#x4E8E;&#x521B;&#x5EFA;&#x6D3E;&#x751F;&#x5BF9;&#x8C61;&#x3002;</dd>
 <dt><a title="Map.prototype &#x5C5E;&#x6027;&#x8868;&#x793A; Map&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x539F;&#x578B;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/prototype"><code>Map.prototype</code></a></dt>
 <dd>&#x8868;&#x793A;&#xA0;<code>Map</code>&#xA0;&#x6784;&#x9020;&#x5668;&#x7684;&#x539F;&#x578B;&#x3002;&#xA0;&#x5141;&#x8BB8;&#x6DFB;&#x52A0;&#x5C5E;&#x6027;&#x4ECE;&#x800C;&#x5E94;&#x7528;&#x4E8E;&#x6240;&#x6709;&#x7684;&#xA0;<code>Map</code>&#xA0;&#x5BF9;&#x8C61;&#x3002;</dd>
</dl>

<h2 id="Map_&#x5B9E;&#x4F8B;"><code>Map</code>&#xA0;&#x5B9E;&#x4F8B;</h2>

<p><code><font face="Open Sans, Arial, sans-serif">&#x6240;&#x6709;&#x7684;&#xA0;</font>Map</code>&#xA0;&#x5BF9;&#x8C61;&#x5B9E;&#x4F8B;&#x90FD;&#x4F1A;&#x7EE7;&#x627F; <a title="Map.prototype &#x5C5E;&#x6027;&#x8868;&#x793A; Map&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x539F;&#x578B;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/prototype"><code>Map.prototype</code></a>&#x3002;</p>

<h3 id="&#x5C5E;&#x6027;_2">&#x5C5E;&#x6027;</h3>

<p></p><dl><dt><code>Map.prototype.constructor</code></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#xFF0C;&#x5B83;&#x521B;&#x5EFA;&#x4E86;&#x5B9E;&#x4F8B;&#x7684;&#x539F;&#x578B;&#x3002;&#x9ED8;&#x8BA4;&#x662F;<a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Map"><code>Map</code></a>&#x51FD;&#x6570;&#x3002;</dd>
 <dt><a title="size&#xA0;&#x53EF;&#x8BBF;&#x95EE;&#x5C5E;&#x6027;&#x8FD4;&#x56DE;&#xA0;Map &#x5BF9;&#x8C61;&#x7684;&#x5143;&#x7D20;&#x6570;&#x91CF;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/size"><code>Map.prototype.size</code></a></dt>
 <dd>&#x8FD4;&#x56DE;Map&#x5BF9;&#x8C61;&#x7684;&#x952E;/&#x503C;&#x5BF9;&#x7684;&#x6570;&#x91CF;&#x3002;</dd>
</dl><p></p>

<h3 id="&#x65B9;&#x6CD5;">&#x65B9;&#x6CD5;</h3>

<p></p><dl><dt><a title="clear()&#x65B9;&#x6CD5;&#x4F1A;&#x79FB;&#x9664;Map&#x5BF9;&#x8C61;&#x4E2D;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/clear"><code>Map.prototype.clear()</code></a></dt>
 <dd>&#x79FB;&#x9664;Map&#x5BF9;&#x8C61;&#x7684;&#x6240;&#x6709;&#x952E;/&#x503C;&#x5BF9; &#x3002;</dd>
 <dt><a title="&#xA0;delete() &#x65B9;&#x6CD5;&#x79FB;&#x9664; Map &#x5BF9;&#x8C61;&#x4E2D;&#x6307;&#x5B9A;&#x7684;&#x5143;&#x7D20;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/delete"><code>Map.prototype.delete(key)</code></a></dt>
 <dd>&#x79FB;&#x9664;&#x4EFB;&#x4F55;&#x4E0E;&#x952E;&#x76F8;&#x5173;&#x8054;&#x7684;&#x503C;&#xFF0C;&#x5E76;&#x4E14;&#x8FD4;&#x56DE;&#x8BE5;&#x503C;&#xFF0C;&#x8BE5;&#x503C;&#x5728;&#x4E4B;&#x524D;&#x4F1A;&#x88AB;Map.prototype.has(key)&#x8FD4;&#x56DE;&#x4E3A;true&#x3002;&#x4E4B;&#x540E;&#x518D;&#x8C03;&#x7528;Map.prototype.has(key)&#x4F1A;&#x8FD4;&#x56DE;false&#x3002;</dd>
 <dt><a title="entries() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x5305;&#x542B;&#xA0;[key, value] &#x5BF9;&#x7684;&#xA0;Iterator &#x5BF9;&#x8C61;&#xFF0C;&#x8FD4;&#x56DE;&#x7684;&#x8FED;&#x4EE3;&#x5668;&#x7684;&#x8FED;&#x4EE3;&#x987A;&#x5E8F;&#x4E0E;&#xA0;Map &#x5BF9;&#x8C61;&#x7684;&#x63D2;&#x5165;&#x987A;&#x5E8F;&#x76F8;&#x540C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/entries"><code>Map.prototype.entries()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684; <code>Iterator</code> &#x5BF9;&#x8C61;&#xFF0C;&#x5B83;&#x6309;&#x63D2;&#x5165;&#x987A;&#x5E8F;&#x5305;&#x542B;&#x4E86;Map&#x5BF9;&#x8C61;&#x4E2D;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x7684; <strong><code>[key, value]</code></strong> <code><strong>&#x6570;&#x7EC4;</strong></code>&#x3002;</dd>
 <dt><a title="forEach() &#x65B9;&#x6CD5;&#x5C06;&#x4F1A;&#x4EE5;&#x63D2;&#x5165;&#x987A;&#x5E8F;&#x5BF9; Map &#x5BF9;&#x8C61;&#x4E2D;&#x7684;&#x6BCF;&#x4E00;&#x4E2A;&#x952E;&#x503C;&#x5BF9;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x53C2;&#x6570;&#x4E2D;&#x63D0;&#x4F9B;&#x7684;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach"><code>Map.prototype.forEach(callbackFn[, thisArg])</code></a></dt>
 <dd>&#x6309;&#x63D2;&#x5165;&#x987A;&#x5E8F;&#xFF0C;&#x4E3A; <code>Map</code>&#x5BF9;&#x8C61;&#x91CC;&#x7684;&#x6BCF;&#x4E00;&#x952E;&#x503C;&#x5BF9;&#x8C03;&#x7528;&#x4E00;&#x6B21;callbackFn&#x51FD;&#x6570;&#x3002;&#x5982;&#x679C;&#x4E3A;forEach&#x63D0;&#x4F9B;&#x4E86;thisArg&#xFF0C;&#x5B83;&#x5C06;&#x5728;&#x6BCF;&#x6B21;&#x56DE;&#x8C03;&#x4E2D;&#x4F5C;&#x4E3A;this&#x503C;&#x3002;</dd>
 <dt><a title="get()&#xA0;&#x65B9;&#x6CD5;&#x7528;&#x6765;&#x83B7;&#x53D6;&#x4E00;&#x4E2A;&#xA0;Map &#x5BF9;&#x8C61;&#x4E2D;&#x6307;&#x5B9A;&#x7684;&#x5143;&#x7D20;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/get"><code>Map.prototype.get(key)</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x952E;&#x5BF9;&#x5E94;&#x7684;&#x503C;&#xFF0C;&#x5982;&#x679C;&#x4E0D;&#x5B58;&#x5728;&#xFF0C;&#x5219;&#x8FD4;&#x56DE;undefined&#x3002;</dd>
 <dt><a title="&#x65B9;&#x6CD5;has()&#xA0;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;bool&#x503C;&#xFF0C;&#x7528;&#x6765;&#x8868;&#x660E;map &#x4E2D;&#x662F;&#x5426;&#x5B58;&#x5728;&#x6307;&#x5B9A;&#x5143;&#x7D20;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/has"><code>Map.prototype.has(key)</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5E03;&#x5C14;&#x503C;&#xFF0C;&#x8868;&#x793A;Map&#x5B9E;&#x4F8B;&#x662F;&#x5426;&#x5305;&#x542B;&#x952E;&#x5BF9;&#x5E94;&#x7684;&#x503C;&#x3002;</dd>
 <dt><a title="keys() &#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#xA0;Iterator &#x5BF9;&#x8C61;&#x3002;&#x5B83;&#x5305;&#x542B;&#x6309;&#x7167;&#x987A;&#x5E8F;&#x63D2;&#x5165;Map&#x5BF9;&#x8C61;&#x4E2D;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x7684;key&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/keys"><code>Map.prototype.keys()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684; <code>Iterator</code>&#x5BF9;&#x8C61;&#xFF0C; &#x5B83;&#x6309;&#x63D2;&#x5165;&#x987A;&#x5E8F;&#x5305;&#x542B;&#x4E86;Map&#x5BF9;&#x8C61;&#x4E2D;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x7684;<strong>&#x952E; </strong>&#x3002;</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/set"><code>Map.prototype.set(key, value)</code></a></dt>
 <dd>&#x8BBE;&#x7F6E;Map&#x5BF9;&#x8C61;&#x4E2D;&#x952E;&#x7684;&#x503C;&#x3002;&#x8FD4;&#x56DE;&#x8BE5;Map&#x5BF9;&#x8C61;&#x3002;</dd>
 <dt><a title="&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#xA0;Map&#xA0;iterator &#x5BF9;&#x8C61;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/values"><code>Map.prototype.values()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684;<code>Iterator</code>&#x5BF9;&#x8C61;&#xFF0C;&#x5B83;&#x6309;&#x63D2;&#x5165;&#x987A;&#x5E8F;&#x5305;&#x542B;&#x4E86;Map&#x5BF9;&#x8C61;&#x4E2D;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x7684;<strong>&#x503C;</strong> &#x3002;</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator" class="new"><code>Map.prototype[@@iterator]()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684;<code>Iterator</code>&#x5BF9;&#x8C61;&#xFF0C;&#x5B83;&#x6309;&#x63D2;&#x5165;&#x987A;&#x5E8F;&#x5305;&#x542B;&#x4E86;Map&#x5BF9;&#x8C61;&#x4E2D;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x7684; <strong><code>[key, value]</code></strong> <code><strong>&#x6570;&#x7EC4;</strong></code>&#x3002;</dd>
</dl><p></p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;&#x6620;&#x5C04;&#x5BF9;&#x8C61;">&#x4F7F;&#x7528;&#x6620;&#x5C04;&#x5BF9;&#x8C61;</h3>

<pre class="brush: js">var myMap = new Map();
&#xA0;
var keyObj = {},
&#xA0;&#xA0;&#xA0; keyFunc = function () {},
&#xA0;&#xA0;&#xA0; keyString = &quot;a string&quot;;
&#xA0;
// &#x6DFB;&#x52A0;&#x952E;
myMap.set(keyString, &quot;&#x548C;&#x952E;&apos;a string&apos;&#x5173;&#x8054;&#x7684;&#x503C;&quot;);
myMap.set(keyObj, &quot;&#x548C;&#x952E;keyObj&#x5173;&#x8054;&#x7684;&#x503C;&quot;);
myMap.set(keyFunc, &quot;&#x548C;&#x952E;keyFunc&#x5173;&#x8054;&#x7684;&#x503C;&quot;);
&#xA0;
myMap.size; // 3
&#xA0;
// &#x8BFB;&#x53D6;&#x503C;
myMap.get(keyString);&#xA0;&#xA0;&#xA0; // &quot;&#x548C;&#x952E;&apos;a string&apos;&#x5173;&#x8054;&#x7684;&#x503C;&quot;
myMap.get(keyObj);&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; // &quot;&#x548C;&#x952E;keyObj&#x5173;&#x8054;&#x7684;&#x503C;&quot;
myMap.get(keyFunc);&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; // &quot;&#x548C;&#x952E;keyFunc&#x5173;&#x8054;&#x7684;&#x503C;&quot;
&#xA0;
myMap.get(&quot;a string&quot;);&#xA0;&#xA0; // &quot;&#x548C;&#x952E;&apos;a string&apos;&#x5173;&#x8054;&#x7684;&#x503C;&quot;
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; // &#x56E0;&#x4E3A;keyString === &apos;a string&apos;
myMap.get({});&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; // undefined, &#x56E0;&#x4E3A;keyObj !== {}
myMap.get(function() {}) // undefined, &#x56E0;&#x4E3A;keyFunc !== function () {}</pre>

<h3 id="&#x5C06;NaN&#x4F5C;&#x4E3A;&#x6620;&#x5C04;&#x7684;&#x952E;">&#x5C06;NaN&#x4F5C;&#x4E3A;&#x6620;&#x5C04;&#x7684;&#x952E;</h3>

<p><code>NaN</code> &#x4E5F;&#x53EF;&#x4EE5;&#x4F5C;&#x4E3A;Map&#x5BF9;&#x8C61;&#x7684;&#x952E;. &#x867D;&#x7136; <code>NaN</code> &#x548C;&#x4EFB;&#x4F55;&#x503C;&#x751A;&#x81F3;&#x548C;&#x81EA;&#x5DF1;&#x90FD;&#x4E0D;&#x76F8;&#x7B49;(<code>NaN !== NaN</code> &#x8FD4;&#x56DE;true), &#x4F46;&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x8868;&#x660E;, <code>&#x4E24;&#x4E2A;NaN</code>&#x4F5C;&#x4E3A;Map&#x7684;&#x952E;&#x6765;&#x8BF4;&#x662F;&#x6CA1;&#x6709;<span><span>&#x533A;&#x522B;&#x7684;</span></span>:</p>

<pre class="brush: js">var myMap = new Map();
myMap.set(NaN, &quot;not a number&quot;);

myMap.get(NaN); // &quot;not a number&quot;

var otherNaN = Number(&quot;foo&quot;);
myMap.get(otherNaN); // &quot;not a number&quot;
</pre>

<h3 id="&#x4F7F;&#x7528;for..of&#x65B9;&#x6CD5;&#x8FED;&#x4EE3;&#x6620;&#x5C04;"><code>&#x4F7F;&#x7528;for..of&#x65B9;&#x6CD5;&#x8FED;&#x4EE3;&#x6620;&#x5C04;</code></h3>

<p>&#x6620;&#x5C04;&#x4E5F;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;<code>for..of&#x5FAA;&#x73AF;&#x6765;&#x5B9E;&#x73B0;&#x8FED;&#x4EE3;&#xFF1A;</code></p>

<pre class="brush: js">var myMap = new Map();
myMap.set(0, &quot;zero&quot;);
myMap.set(1, &quot;one&quot;);
for (var [key, value] of myMap) {
  console.log(key + &quot; = &quot; + value);
}
// &#x5C06;&#x4F1A;&#x663E;&#x793A;&#x4E24;&#x4E2A;log&#x3002;&#x4E00;&#x4E2A;&#x662F;&quot;0 = zero&quot;&#x53E6;&#x4E00;&#x4E2A;&#x662F;&quot;1 = one&quot;

for (var key of myMap.keys()) {
  console.log(key);
}
// &#x5C06;&#x4F1A;&#x663E;&#x793A;&#x4E24;&#x4E2A;log&#x3002; &#x4E00;&#x4E2A;&#x662F; &quot;0&quot; &#x53E6;&#x4E00;&#x4E2A;&#x662F; &quot;1&quot;

for (var value of myMap.values()) {
  console.log(value);
}
// &#x5C06;&#x4F1A;&#x663E;&#x793A;&#x4E24;&#x4E2A;log&#x3002; &#x4E00;&#x4E2A;&#x662F; &quot;zero&quot; &#x53E6;&#x4E00;&#x4E2A;&#x662F; &quot;one&quot;

for (var [key, value] of myMap.entries()) {
  console.log(key + &quot; = &quot; + value);
}
// &#x5C06;&#x4F1A;&#x663E;&#x793A;&#x4E24;&#x4E2A;log&#x3002; &#x4E00;&#x4E2A;&#x662F; &quot;0 = zero&quot; &#x53E6;&#x4E00;&#x4E2A;&#x662F; &quot;1 = one&quot;</pre>

<h3 id="&#x4F7F;&#x7528;forEach()&#x65B9;&#x6CD5;&#x8FED;&#x4EE3;&#x6620;&#x5C04;"><code>&#x4F7F;&#x7528;forEach()&#x65B9;&#x6CD5;&#x8FED;&#x4EE3;&#x6620;&#x5C04;</code></h3>

<p>&#x6620;&#x5C04;&#x4E5F;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;<code>forEach()&#x65B9;&#x6CD5;&#x8FED;&#x4EE3;&#xFF1A;</code></p>

<pre class="brush: js">myMap.forEach(function(value, key) {
  console.log(key + &quot; = &quot; + value);
}, myMap)
// &#x5C06;&#x4F1A;&#x663E;&#x793A;&#x4E24;&#x4E2A;logs&#x3002; &#x4E00;&#x4E2A;&#x662F; &quot;0 = zero&quot; &#x53E6;&#x4E00;&#x4E2A;&#x662F; &quot;1 = one&quot;
</pre>

<h3 id="&#x6620;&#x5C04;&#x4E0E;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x7684;&#x5173;&#x7CFB;">&#x6620;&#x5C04;&#x4E0E;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x7684;&#x5173;&#x7CFB;</h3>

<pre><code>var kvArray = [[&quot;key1&quot;, &quot;value1&quot;], [&quot;key2&quot;, &quot;value2&quot;]];

// &#x4F7F;&#x7528;&#x6620;&#x5C04;&#x5BF9;&#x8C61;&#x5E38;&#x89C4;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;&#x5C06;&#x4E00;&#x4E2A;&#x4E8C;&#x7EF4;&#x952E;&#x503C;&#x5BF9;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x8F6C;&#x6362;&#x6210;&#x4E00;&#x4E2A;&#x6620;&#x5C04;&#x5173;&#x7CFB;
var myMap = new Map(kvArray);

myMap.get(&quot;key1&quot;); // &#x8FD4;&#x56DE;&#x503C;&#x4E3A; &quot;value1&quot;

// &#x4F7F;&#x7528;&#x5C55;&#x5F00;&#x8FD0;&#x7B97;&#x7B26;&#x5C06;&#x4E00;&#x4E2A;&#x6620;&#x5C04;&#x5173;&#x7CFB;&#x8F6C;&#x6362;&#x6210;&#x4E00;&#x4E2A;&#x4E8C;&#x7EF4;&#x952E;&#x503C;&#x5BF9;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;
console.log(uneval([...myMap])); // &#x5C06;&#x4F1A;&#x5411;&#x60A8;&#x663E;&#x793A;&#x548C;kvArray&#x76F8;&#x540C;&#x7684;&#x6570;&#x7EC4;

// &#x6216;&#x8005;&#x4F7F;&#x7528;&#x5C55;&#x5F00;&#x8FD0;&#x7B97;&#x7B26;&#x4F5C;&#x7528;&#x5728;&#x952E;&#x6216;&#x8005;&#x503C;&#x7684;&#x8FED;&#x4EE3;&#x5668;&#x4E0A;&#xFF0C;&#x8FDB;&#x800C;&#x5F97;&#x5230;&#x53EA;&#x542B;&#x6709;&#x952E;&#x6216;&#x8005;&#x503C;&#x5F97;&#x6570;&#x7EC4;
console.log(uneval([...myMap.keys()])); // &#x8F93;&#x51FA; [&quot;key1&quot;, &quot;key2&quot;]</code></pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-map-objects" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Map</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-map-objects" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Map</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x60C5;&#x51B5;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x60C5;&#x51B5;</h2>

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
   <th>Edge</th>
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>
    <p>38 [1]</p>
   </td>
   <td>12</td>
   <td><a title="Released on 2012-06-05." href="/en-US/Firefox/Releases/13">13</a> (13)</td>
   <td>11</td>
   <td>25</td>
   <td>7.1</td>
  </tr>
  <tr>
   <td>Constructor argument: <code>new Map(iterable)</code></td>
   <td>38</td>
   <td>12</td>
   <td><a title="Released on 2012-06-05." href="/en-US/Firefox/Releases/13">13</a> (13)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>25</td>
   <td>9</td>
  </tr>
  <tr>
   <td>iterable</td>
   <td>38</td>
   <td>12</td>
   <td><a title="Released on 2012-11-20." href="/en-US/Firefox/Releases/17">17</a> (17)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>25</td>
   <td>7.1</td>
  </tr>
  <tr>
   <td><code>Map.clear()</code></td>
   <td>31<br>
    38</td>
   <td>12</td>
   <td><a title="Released on 2013-02-19." href="/en-US/Firefox/Releases/19">19</a> (19)</td>
   <td>11</td>
   <td>25</td>
   <td>7.1</td>
  </tr>
  <tr>
   <td><code>Map.keys(), Map.values(), Map.entries()</code></td>
   <td>37<br>
    38</td>
   <td>12</td>
   <td><a title="Released on 2013-04-02." href="/en-US/Firefox/Releases/20">20</a> (20)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>25</td>
   <td>7.1</td>
  </tr>
  <tr>
   <td><code>Map.forEach()</code></td>
   <td>36<br>
    38</td>
   <td>12</td>
   <td><a title="Released on 2013-10-29." href="/en-US/Firefox/Releases/25">25</a> (25)</td>
   <td>11</td>
   <td>25</td>
   <td>7.1</td>
  </tr>
  <tr>
   <td>Key equality for -0 and 0</td>
   <td>34<br>
    38</td>
   <td>12</td>
   <td><a title="Released on 2014-04-29." href="/en-US/Firefox/Releases/29">29</a> (29)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>25</td>
   <td>9</td>
  </tr>
  <tr>
   <td>Constructor argument: <code>new Map(null)</code></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>12</td>
   <td><a title="Released on 2015-04-07." href="/en-US/Firefox/Releases/37">37</a> (37)</td>
   <td>11</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>9</td>
  </tr>
  <tr>
   <td>Monkey-patched <code>set()</code> in Constructor</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>12</td>
   <td><a title="Released on 2015-04-07." href="/en-US/Firefox/Releases/37">37</a> (37)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>9</td>
  </tr>
  <tr>
   <td><code>Map[@@species]</code></td>
   <td>51</td>
   <td>13</td>
   <td><a title="Released on 2015-09-22." href="/en-US/Firefox/Releases/41">41</a> (41)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>38</td>
   <td>10</td>
  </tr>
  <tr>
   <td><code>Map()</code> without <code>new</code> throws</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>12</td>
   <td><a title="Released on 2015-11-03." href="/en-US/Firefox/Releases/42">42</a> (42)</td>
   <td>11</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>9</td>
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
   <td>38 [1]</td>
   <td>13.0 (13)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>8</td>
  </tr>
  <tr>
   <td>Constructor argument: <code>new Map(iterable)</code></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>38</td>
   <td>13.0 (13)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>9</td>
  </tr>
  <tr>
   <td>iterable</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>17.0 (17)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>8</td>
  </tr>
  <tr>
   <td><code>Map.clear()</code></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>31<br>
    38</td>
   <td>19.0 (19)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>8</td>
  </tr>
  <tr>
   <td><code>Map.keys(), Map.values(), Map.entries()</code></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>37<br>
    38</td>
   <td>20.0 (20)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>8</td>
  </tr>
  <tr>
   <td><code>Map.forEach()</code></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>36<br>
    38</td>
   <td>25.0 (25)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>8</td>
  </tr>
  <tr>
   <td>Key equality for -0 and 0</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>34<br>
    38</td>
   <td>29.0 (29)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
  <tr>
   <td>Constructor argument: <code>new Map(null)</code></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>37.0 (37)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>9</td>
  </tr>
  <tr>
   <td>Monkey-patched <code>set()</code> in Constructor</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>37.0 (37)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>9</td>
  </tr>
  <tr>
   <td><code>Map[@@species]</code></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>41.0 (41)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>10</td>
  </tr>
  <tr>
   <td><code>Map()</code> without <code>new</code> throws</td>
   <td>5.1</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>42.0 (42)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>9</td>
  </tr>
 </tbody>
</table>
</div>

<p>[1] Starting with Chrome 31&#xFF0C;the feature was available behind a preference. In <code>chrome://flags</code>, activate the entry &#x201C;Enable Experimental JavaScript&#x201D;.</p>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=697479" class="external link-https">Map and Set bug at Mozilla</a></li>
 <li><a href="http://wiki.ecmascript.org/doku.php?id=harmony:simple_maps_and_sets" class="external">ECMAScript Harmony proposal</a></li>
 <li><a title="&#x96C6;&#x5408;&#xFF08;Set&#xFF09;&#x5BF9;&#x8C61;&#x5141;&#x8BB8;&#x4F60;&#x5B58;&#x50A8;&#x4EFB;&#x610F;&#x7C7B;&#x578B;&#x7684;&#x552F;&#x4E00;&#x503C;&#xFF08;&#x4E0D;&#x80FD;&#x91CD;&#x590D;&#xFF09;&#xFF0C;&#x65E0;&#x8BBA;&#x5B83;&#x662F;&#x539F;&#x59CB;&#x503C;&#x6216;&#x8005;&#x662F;&#x5BF9;&#x8C61;&#x5F15;&#x7528;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set"><code>Set</code></a></li>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/WeakMap"><code>WeakMap</code></a></li>
 <li><a title="&#x4E00;&#x4E2A;&#xA0;WeakSet&#xA0;&#x5BF9;&#x8C61;&#x662F;&#x4E00;&#x4E2A;&#x65E0;&#x5E8F;&#x7684;&#x96C6;&#x5408;, &#x53EF;&#x4EE5;&#x7528;&#x5B83;&#x6765;&#x5B58;&#x50A8;&#x4EFB;&#x610F;&#x7684;&#x5BF9;&#x8C61;&#x503C;, &#x5E76;&#x4E14;&#x5BF9;&#x8FD9;&#x4E9B;&#x5BF9;&#x8C61;&#x503C;&#x4FDD;&#x6301;&#x5F31;&#x5F15;&#x7528;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet"><code>WeakSet</code></a></li>
</ul>
                  
                
              