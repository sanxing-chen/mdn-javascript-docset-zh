
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<div>&#xA0;</div>

<div>let&#x8BED;&#x53E5;&#x58F0;&#x660E;&#x4E00;&#x4E2A;&#x5757;&#x7EA7;&#x4F5C;&#x7528;&#x57DF;&#x7684;&#x672C;&#x5730;&#x53D8;&#x91CF;&#xFF0C;&#x5E76;&#x4E14;&#x53EF;&#x9009;&#x7684;&#x8D4B;&#x4E88;&#x521D;&#x59CB;&#x503C;&#x3002;</div>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">let var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]];</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>var1</code>, <code>var2</code>, &#x2026;, <code>varN</code></dt>
 <dd>&#x53D8;&#x91CF;&#x540D;&#x3002;&#x53EF;&#x4EE5;&#x662F;&#x4EFB;&#x610F;&#x5408;&#x6CD5;&#x7684;&#x6807;&#x8BC6;&#x7B26;&#x3002;</dd>
 <dt><code>value1</code>, <code>value2</code>, &#x2026;, <code>valueN</code></dt>
 <dd>&#x53D8;&#x91CF;&#x7684;&#x521D;&#x59CB;&#x503C;&#x3002;&#x53EF;&#x4EE5;&#x662F;&#x4EFB;&#x610F;&#x5408;&#x6CD5;&#x7684;&#x8868;&#x8FBE;&#x5F0F;&#x3002;</dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>let&#x5141;&#x8BB8;&#x4F60;&#x58F0;&#x660E;&#x4E00;&#x4E2A;&#x4F5C;&#x7528;&#x57DF;&#x88AB;&#x9650;&#x5236;&#x5728;&#x5757;&#x7EA7;&#x4E2D;&#x7684;&#x53D8;&#x91CF;&#x3001;&#x8BED;&#x53E5;&#x6216;&#x8005;&#x8868;&#x8FBE;&#x5F0F;&#x3002;&#x4E0E;var&#x5173;&#x952E;&#x5B57;&#x4E0D;&#x540C;&#x7684;&#x662F;&#xFF0C;var&#x58F0;&#x660E;&#x7684;&#x53D8;&#x91CF;&#x53EA;&#x80FD;&#x662F;&#x5168;&#x5C40;&#x6216;&#x8005;&#x6574;&#x4E2A;&#x51FD;&#x6570;&#x5757;&#x7684;&#x3002;</p>

<p>&#x70B9;<a href="https://stackoverflow.com/questions/37916940/js-why-let-have-this-name" class="external">&#x8FD9;&#x91CC;</a>&#x53EF;&#x4EE5;&#x660E;&#x767D;&#x6211;&#x4EEC;&#x4E3A;&#x4EC0;&#x4E48;&#x9009;&#x53D6;&#x201C;let&#x201D;&#x8FD9;&#x4E2A;&#x540D;&#x5B57;&#x3002;</p>

<h3 id="&#x4F5C;&#x7528;&#x57DF;&#x89C4;&#x5219;">&#x4F5C;&#x7528;&#x57DF;&#x89C4;&#x5219;</h3>

<p>let&#x58F0;&#x660E;&#x7684;&#x53D8;&#x91CF;&#x53EA;&#x5728;&#x5176;&#x58F0;&#x660E;&#x7684;&#x5757;&#x6216;&#x5B50;&#x5757;&#x4E2D;&#x53EF;&#x7528;&#xFF0C;&#x8FD9;&#x4E00;&#x70B9;&#xFF0C;&#x4E0E;var&#x76F8;&#x4F3C;&#x3002;&#x4E8C;&#x8005;&#x4E4B;&#x95F4;&#x6700;&#x4E3B;&#x8981;&#x7684;&#x533A;&#x522B;&#x5728;&#x4E8E;var&#x58F0;&#x660E;&#x7684;&#x53D8;&#x91CF;&#x7684;&#x4F5C;&#x7528;&#x57DF;&#x662F;&#x6574;&#x4E2A;&#x5C01;&#x95ED;&#x51FD;&#x6570;&#x3002;</p>

<pre class="brush: js"><code>function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // &#x540C;&#x6837;&#x7684;&#x53D8;&#x91CF;!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // &#x4E0D;&#x540C;&#x7684;&#x53D8;&#x91CF;
    console.log(x);  // 2
  }
  console.log(x);  // 1
}</code></pre>

<h3 id="&#x7B80;&#x5316;&#x5185;&#x90E8;&#x51FD;&#x6570;&#x4EE3;&#x7801;">&#x7B80;&#x5316;&#x5185;&#x90E8;&#x51FD;&#x6570;&#x4EE3;&#x7801;</h3>

<p>&#x5F53;&#x7528;&#x5230;&#x5185;&#x90E8;&#x51FD;&#x6570;&#x7684;&#x65F6;&#x5019;&#xFF0C;let&#x4F1A;&#x8BA9;&#x4F60;&#x7684;&#x4EE3;&#x7801;&#x66F4;&#x52A0;&#x7B80;&#x5355;&#x3002;</p>

<pre class="brush:js">var list = document.getElementById(&quot;list&quot;);

for (let i = 1; i &lt;= 5; i++) {
  var item = document.createElement(&quot;LI&quot;);
  item.appendChild(document.createTextNode(&quot;Item &quot; + i));

&#xA0; let j = i;
  item.onclick = function (ev) {
    console.log(&quot;Item &quot; + j + &quot; is clicked.&quot;);
  };
  list.appendChild(item);
}
</pre>

<p>&#x4E0A;&#x9762;&#x8FD9;&#x6BB5;&#x4EE3;&#x7801;&#x7684;&#x610F;&#x56FE;&#x662F;&#x521B;&#x5EFA;5&#x4E2A;li,&#x70B9;&#x51FB;&#x4E0D;&#x540C;&#x7684;li&#x80FD;&#x591F;&#x6253;&#x5370;&#x51FA;&#x5F53;&#x524D;li&#x7684;&#x5E8F;&#x53F7;&#x3002;&#x5982;&#x679C;&#x4E0D;&#x7528;let&#xFF0C;&#x800C;&#x6539;&#x7528;var&#x7684;&#x8BDD;&#xFF0C;&#x5C06;&#x603B;&#x662F;&#x6253;&#x5370;&#x51FA;&#xA0;Item 5&#xA0;is Clicked&#xFF0C;&#x56E0;&#x4E3A; j &#x662F;&#x51FD;&#x6570;&#x7EA7;&#x53D8;&#x91CF;&#xFF0C;5&#x4E2A;&#x5185;&#x90E8;&#x51FD;&#x6570;&#x90FD;&#x6307;&#x5411;&#x4E86;&#x540C;&#x4E00;&#x4E2A; j ,&#x800C; j &#x6700;&#x540E;&#x4E00;&#x6B21;&#x8D4B;&#x503C;&#x662F;5&#x3002;&#x7528;&#x4E86;let&#x540E;&#xFF0C;j &#x53D8;&#x6210;&#x5757;&#x7EA7;&#x57DF;&#xFF08;&#x4E5F;&#x5C31;&#x662F;&#x82B1;&#x62EC;&#x53F7;&#x4E2D;&#x7684;&#x5757;&#xFF0C;&#x6BCF;&#x8FDB;&#x5165;&#x4E00;&#x6B21;&#x82B1;&#x62EC;&#x53F7;&#x5C31;&#x751F;&#x6210;&#x4E86;&#x4E00;&#x4E2A;&#x5757;&#x7EA7;&#x57DF;&#xFF09;,&#x6240;&#x4EE5; 5 &#x4E2A;&#x5185;&#x90E8;&#x51FD;&#x6570;&#x6307;&#x5411;&#x4E86;&#x4E0D;&#x540C;&#x7684; j &#x3002;</p>

<p>&#x5728;&#x7A0B;&#x5E8F;&#x6216;&#x8005;&#x51FD;&#x6570;&#x7684;&#x9876;&#x5C42;&#xFF0C;let&#x5E76;&#x4E0D;&#x4F1A;&#x50CF;var&#x4E00;&#x6837;&#x5728;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x4E0A;&#x521B;&#x9020;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&#xFF0C;&#x6BD4;&#x5982;</p>

<pre class="brush:js">var x = &apos;global&apos;;
let y = &apos;global&apos;;
console.log(this.x); // &quot;global&quot;
console.log(this.y); // undefined
</pre>

<h3 id="&#x6A21;&#x4EFF;&#x79C1;&#x6709;&#x63A5;&#x53E3;">&#x6A21;&#x4EFF;&#x79C1;&#x6709;&#x63A5;&#x53E3;</h3>

<p>&#x5728;&#x5904;&#x7406;<a href="https://developer.mozilla.org/en-US/docs/Glossary/Constructor">&#x6784;&#x9020;&#x51FD;&#x6570;</a>&#x7684;&#x65F6;&#x5019;&#xFF0C;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;let&#x58F0;&#x660E;&#x800C;&#x4E0D;&#x662F;&#x95ED;&#x5305;&#x6765;&#x521B;&#x5EFA;&#x79C1;&#x6709;&#x63A5;&#x53E3;&#x3002;</p>

<pre><code>var SomeConstructor;

{
    let privateScope = {};

    SomeConstructor = function SomeConstructor () {
        this.someProperty = &quot;foo&quot;;
        privateScope.hiddenProperty = &quot;bar&quot;;
    }

    SomeConstructor.prototype.showPublic = function () {
        console.log(this.someProperty); // foo
    }

    SomeConstructor.prototype.showPrivate = function () {
        console.log(privateScope.hiddenProperty); // bar
    }

}

var myInstance = new SomeConstructor();

myInstance.showPublic();
myInstance.showPrivate();

console.log(privateScope.hiddenProperty); // error</code></pre>

<h3 id="let_&#x7684;&#x6682;&#x5B58;&#x6B7B;&#x533A;&#x4E0E;&#x9519;&#x8BEF;">let &#x7684;&#x6682;&#x5B58;&#x6B7B;&#x533A;&#x4E0E;&#x9519;&#x8BEF;</h3>

<p>&#x5728;&#x540C;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x6216;&#x540C;&#x4E00;&#x4E2A;&#x4F5C;&#x7528;&#x57DF;&#x4E2D;&#x7528;let&#x91CD;&#x590D;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x53D8;&#x91CF;&#x5C06;&#x5F15;&#x8D77;&#xA0;<code><a href="/zh-CN/docs/JavaScript/Reference/Global_Objects/TypeError" class="new" title="TypeError">TypeError</a></code>.</p>

<pre class="brush: js">if (x) {
  let foo;
  let foo; // TypeError thrown.
}</pre>

<p>&#x5728; ECMAScript &#xA0;2015&#x4E2D;, &#xA0;<code>let</code>&#xA0;<strong>&#x5C06;&#x4F1A;&#x63D0;&#x5347;</strong>&#x8FD9;&#x4E2A;&#x53D8;&#x91CF;&#x5230;&#x8BED;&#x53E5;&#x5757;&#x7684;&#x9876;&#x90E8;&#x3002;&#x7136;&#x800C;&#xFF0C;&#x5728;&#x8FD9;&#x4E2A;&#x8BED;&#x53E5;&#x5757;&#x4E2D;&#xFF0C;&#x5728;&#x53D8;&#x91CF;&#x58F0;&#x660E;&#x4E4B;&#x524D;&#x5F15;&#x7528;&#x8FD9;&#x4E2A;&#x53D8;&#x91CF;&#x4F1A;&#x5BFC;&#x81F4;&#x4E00;&#x4E2A;&#xA0;<code><a href="/zh-CN/docs/JavaScript/Reference/Global_Objects/ReferenceError" class="new" title="TypeError">ReferenceError</a>&#x7684;&#x7ED3;&#x679C;</code>, &#x56E0;&#x4E3A;let&#x53D8;&#x91CF; &#x5728;&quot;&#x6682;&#x5B58;&#x6B7B;&#x533A;&quot; (&#x4ECE;&#x5757;&#x7684;&#x5F00;&#x59CB;&#x5230;&#x58F0;&#x660E;&#x8FD9;&#x6BB5;).</p>

<pre class="brush: js">function do_something() {
  console.log(foo); // ReferenceError
  let foo = 2;
}</pre>

<p>&#x5728;&#xA0;<a href="/zh-CN/docs/JavaScript/Reference/Statements/switch" class="new" title="switch"><code>switch</code></a>&#xA0;&#x58F0;&#x660E;&#x4E2D;&#x4F60;&#x53EF;&#x80FD;&#x4F1A;&#x9047;&#x5230;&#x8FD9;&#x6837;&#x7684;&#x9519;&#x8BEF;&#xFF0C;&#x56E0;&#x4E3A;&#x4E00;&#x4E2A;switch&#x53EA;&#x6709;&#x4E00;&#x4E2A;&#x4F5C;&#x7528;&#x5757;.</p>

<pre class="brush: js">switch (x) {
  case 0:
    let foo;
    break;
    
  case 1:
    let foo; // TypeError for redeclaration.
    break;
}</pre>

<p>let&#x540E;&#x8DDF;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x4F20;&#x9012;&#x7684;&#x53C2;&#x6570;&#x65F6;&#x5C06;&#x5BFC;&#x81F4;&#x5FAA;&#x73AF;&#x5185;&#x90E8;&#x62A5;&#x9519;&#x3002;</p>

<pre><code>function go(n){
  for (let n of n.a) { // TypeError: n is undefined
    console.log(n);
  }
}

go({a:[1,2,3]});</code>
</pre>

<h3 id="&#x5FAA;&#x73AF;&#x5B9A;&#x4E49;&#x4E2D;&#x7684;let&#x4F5C;&#x7528;&#x57DF;"><font face="Consolas, Liberation Mono, Courier, monospace">&#x5FAA;&#x73AF;&#x5B9A;&#x4E49;&#x4E2D;&#x7684;let&#x4F5C;&#x7528;&#x57DF;</font></h3>

<p>&#x5FAA;&#x73AF;&#x4F53;&#x4E2D;&#x662F;&#x53EF;&#x4EE5;&#x5F15;&#x7528;&#x5728;for&#x58F0;&#x660E;&#x65F6;&#x7528;let&#x5B9A;&#x4E49;&#x7684;&#x53D8;&#x91CF;&#xFF0C;&#x5C3D;&#x7BA1;let&#x4E0D;&#x662F;&#x51FA;&#x73B0;&#x5728;&#x5927;&#x62EC;&#x53F7;&#x4E4B;&#x95F4;.</p>

<pre class="brush:js">var i = 0;
for (let i = i; i &lt; 10; i++) {
  console.log(i);
}
</pre>

<div class="note">
<p>&#x6CE8;&#xFF1A;&#x4EE5;&#x4E0A; let &#x58F0;&#x660E;&#x7684; i &#x5C06;&#x4F1A;&#x53D8;&#x6210;&#xA0;undefined&#xFF1B;chrome&#xA0;&#x7248;&#x672C;50.0.2661.102 (64-bit)&#xFF1B;&#x63A8;&#x8350;&#x4EE5;&#x4E0B;&#x5199;&#x6CD5;&#xFF1A;</p>
</div>

<pre>var i = 0; 
for (let l = i; l &lt; 10; l++) {  
&#x3000;console.log(l); 
}</pre>

<h4 id="&#x57DF;&#x4F5C;&#x7528;&#x89C4;&#x5219;">&#x57DF;&#x4F5C;&#x7528;&#x89C4;&#x5219;</h4>

<pre class="eval">for (let <var>expr1</var>; <var>expr2</var>; <var>expr3</var>) <var>statement</var>
</pre>

<p>&#x5728;&#x8FD9;&#x4E2A;&#x4F8B;&#x5B50;&#x4E2D;&#xFF0C;<var>expr2</var>, <var>expr3</var>, &#x548C;&#xA0;<var>statement</var> &#x90FD;&#x662F;&#x5305;&#x542B;&#x5728;&#x4E00;&#x4E2A;&#x9690;&#x542B;&#x57DF;&#x5757;&#x4E2D;&#xFF0C;&#x5176;&#x4E2D;&#x4E5F;&#x5305;&#x542B;&#x4E86; expr1.</p>

<h2 id="&#x4F8B;&#x5B50;">&#x4F8B;&#x5B50;</h2>

<h3 id="let_&#x5BF9;&#x6BD4;_var"><code>let</code>&#xA0; &#x5BF9;&#x6BD4;&#xA0;<code>var</code></h3>

<p>let&#x7684;&#x4F5C;&#x7528;&#x57DF;&#x662F;&#x5757;&#xFF0C;&#x800C;var&#x7684;&#x4F5C;&#x7528;&#x57DF;&#x662F;&#x51FD;&#x6570;</p>

<pre class="brush: js">var a = 5;
var b = 10;

if (a === 5) {
  let a = 4; // The scope is inside the if-block
  var b = 1; // The scope is inside the function

  console.log(a);  // 4
  console.log(b);  // 1
} 

console.log(a); // 5
console.log(b); // 1</pre>

<h3 id="let_&#x5728;&#x5FAA;&#x73AF;&#x4E2D;"><code>let</code> &#x5728;&#x5FAA;&#x73AF;&#x4E2D;</h3>

<p>&#x53EF;&#x4EE5;&#x7528; let &#x6765;&#x4EE3;&#x66FF; var &#xFF0C;&#x5728; for &#x5B9A;&#x4E49;&#x5757;&#x4E2D;&#x4F7F;&#x7528;&#x5757;&#x7EA7;&#x53D8;&#x91CF;.</p>

<pre class="brush: js">for (let i = 0; i &lt; 10; i++) {
  console.log(i); // 0, 1, 2, 3, 4 ... 9
}

console.log(i); // i is not defined</pre>

<h2 id="&#x975E;&#x6807;&#x51C6;&#x7684;_let_&#x6269;&#x5C55;">&#x975E;&#x6807;&#x51C6;&#x7684; let &#x6269;&#x5C55;</h2>

<h3 id="let&#x5757;&#xFF08;let_block&#xFF09;"><code>let&#x5757;<strong>&#xFF08;</strong></code><strong><code>let</code>&#xA0;block&#xFF09;</strong></h3>

<div class="warning">
<p>let blocks &#x5728; Gecko 44 &#x4E2D;&#x5DF2;&#x7ECF;&#x5E9F;&#x9664;&#xFF08; <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1167029" class="external" title="FIXED: Remove SpiderMonkey support for let blocks">bug&#xA0;1167029</a>&#xFF09; &#x3002;</p>
</div>

<p><strong><code>let&#x5757;</code></strong>&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x79CD;&#x5728;&#x5757;&#x7684;&#x8303;&#x56F4;&#x5185;&#x83B7;&#x53D6;&#x53D8;&#x91CF;&#x7684;&#x503C;&#xFF0C;&#x800C;&#x4E0D;&#x4F1A;&#x5F71;&#x54CD;&#x5757;&#x5916;&#x9762;&#x540D;&#x5B57;&#x76F8;&#x540C;&#x7684;&#x53D8;&#x91CF;&#x7684;&#x503C;&#x7684;&#x65B9;&#x6CD5;&#x3002;</p>

<h4 id="&#x8BED;&#x6CD5;_2">&#x8BED;&#x6CD5;</h4>

<pre class="syntaxbox">let (var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]]) block;</pre>

<h4 id="&#x63CF;&#x8FF0;_2">&#x63CF;&#x8FF0;</h4>

<p>let &#x8BED;&#x53E5;&#x5757;&#x4E3A;&#x53D8;&#x91CF;&#x63D0;&#x4F9B;&#x4E86;&#x5C40;&#x90E8;&#x4F5C;&#x7528;&#x57DF;&#x3002;&#x5B83;&#x7684;&#x4F5C;&#x7528;&#x662F;&#x5728;&#x5355;&#x4E00;&#x4EE3;&#x7801;&#x5757;&#x7684;&#x8BCD;&#x6CD5;&#x8303;&#x56F4;&#x5185;&#x7ED1;&#x5B9A;&#x96F6;&#x4E2A;&#x6216;&#x591A;&#x4E2A;&#x53D8;&#x91CF;&#xFF1B;&#xA0;&#x6B64;&#x5916;&#x4E0E;&#x666E;&#x901A;&#x8BED;&#x53E5;&#x5757;&#x6CA1;&#x6709;&#x4EFB;&#x4F55;&#x533A;&#x522B;&#x3002;&#x9700;&#x8981;&#x7279;&#x522B;&#x6CE8;&#x610F;&#x7684;&#x662F;&#xFF0C; &#x5728;&#xA0;<code>let&#xA0;</code>&#x8BED;&#x53E5;&#x5757;&#x5185;&#x4F7F;&#x7528; var&#xA0;&#x58F0;&#x660E;&#x7684;&#x53D8;&#x91CF;&#xFF0C;&#x5B83;&#x7684;&#x4F5C;&#x7528;&#x57DF;&#x4E0E;&#x5728; let &#x8BED;&#x53E5;&#x5757;&#x4E4B;&#x5916;&#x58F0;&#x660E;&#x6CA1;&#x6709;&#x533A;&#x522B;&#xFF1B;&#x8FD9;&#x6837;&#x7684;&#x53D8;&#x91CF;&#x4ECD;&#x7136;&#x5177;&#x6709;&#x51FD;&#x6570;&#x4F5C;&#x7528;&#x57DF;&#x3002;&#x5728;&#x4F7F;&#x7528;&#xA0;<code>let</code> &#x8BED;&#x53E5;&#x5757;&#x65F6;&#xFF0C;&#x5FC5;&#x987B;&#x4F7F;&#x7528;&#x82B1;&#x62EC;&#x53F7;&#xFF0C;&#x5426;&#x5219;&#x4F1A;&#x5BFC;&#x81F4;&#x8BED;&#x6CD5;&#x9519;&#x8BEF;&#x3002;</p>

<h4 id="&#x4F8B;&#x5B50;_2">&#x4F8B;&#x5B50;</h4>

<pre class="brush:js">var x = 5;
var y = 0;

let (x = x + 10, y = 12) {
  console.log(x + y); // 27
}

console.log(x + y); // 5
</pre>

<p>let &#x4EE3;&#x7801;&#x5757;&#x7684;&#x89C4;&#x5219;&#x4E0E; JavaScript &#x4E2D;&#x5176;&#x4ED6;&#x7C7B;&#x578B;&#x7684;&#x4EE3;&#x7801;&#x5757;&#x76F8;&#x540C;&#x3002;&#x5141;&#x8BB8;&#x5728;&#x5757;&#x5185;&#x901A;&#x8FC7; let &#x5173;&#x952E;&#x5B57;&#x58F0;&#x660E;&#x5C40;&#x90E8;&#x53D8;&#x91CF;&#x3002;</p>

<h4 id="&#x4F5C;&#x7528;&#x57DF;&#x89C4;&#x5219;_2">&#x4F5C;&#x7528;&#x57DF;&#x89C4;&#x5219;</h4>

<p>&#x4F7F;&#x7528; <code>let</code>&#xA0;&#x8BED;&#x53E5;&#x5757;&#x7ED1;&#x5B9A;&#x7684;&#x53D8;&#x91CF;&#xFF0C;&#x5176;&#x4F5C;&#x7528;&#x57DF;&#x662F; <code>let</code> &#x8BED;&#x53E5;&#x5757;&#x672C;&#x8EAB;&#xFF0C;&#x4E0E;&#x4EFB;&#x4F55;&#x5176;&#x5185;&#x90E8;&#x8BED;&#x53E5;&#x5757;&#x7684;&#x4F5C;&#x7528;&#x57DF;&#x4E00;&#x6837;&#xFF0C;&#x9664;&#x975E;&#x5728;&#x8FD9;&#x4E9B;&#x5185;&#x90E8;&#x8BED;&#x53E5;&#x5757;&#x5185;&#x53C8;&#x5B9A;&#x4E49;&#x4E86;&#x540C;&#x540D;&#x7684;&#x53D8;&#x91CF;&#x3002;</p>

<h3 id="let_&#x8868;&#x8FBE;&#x5F0F;&#xFF08;_let_expression&#xFF09;"><code>let&#xA0;</code><strong>&#x8868;&#x8FBE;&#x5F0F;&#xFF08;</strong> let expression&#xFF09;</h3>

<div class="warning">
<p><code>let</code> expression &#x5728;&#xA0;Gecko 41 &#x5DF2;&#x7ECF;&#x5E9F;&#x9664;&#xFF08;<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1023609" class="external" title="FIXED: Remove SpiderMonkey support for let expressions">bug&#xA0;1023609</a>&#xFF09;&#x3002;</p>
</div>

<p><strong><code>let</code>&#x8868;&#x8FBE;&#x5F0F;</strong>&#xA0;&#x53EF;&#x4EE5;&#x5C06;&#x53D8;&#x91CF;&#x7684;&#x4F5C;&#x7528;&#x57DF;&#x4EC5;&#x4F5C;&#x7528;&#x4E8E;&#x4E00;&#x6761;&#x8BED;&#x53E5;&#x3002;</p>

<h4 id="&#x8BED;&#x6CD5;_3">&#x8BED;&#x6CD5;</h4>

<pre class="syntaxbox">let (var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]]) expression;</pre>

<h4 id="&#x4F8B;&#x5B50;_3">&#x4F8B;&#x5B50;</h4>

<p>&#x4F60;&#x53EF;&#x4EE5;&#x5728;&#x4E00;&#x6761;&#x8BED;&#x53E5;&#x7684;&#x8303;&#x56F4;&#x4E2D;&#x4F7F;&#x7528;&#xA0;<code>let</code> &#x5173;&#x952E;&#x5B57;&#x6765;&#x8BBE;&#x7ACB;&#x53D8;&#x91CF;&#xFF1A;</p>

<pre class="brush: js">var a = 5;
let(a = 6) console.log(a); // 6
console.log(a); // 5</pre>

<h4 id="&#x4F5C;&#x7528;&#x57DF;&#x89C4;&#x5219;_3">&#x4F5C;&#x7528;&#x57DF;&#x89C4;&#x5219;</h4>

<p>&#x7ED9;&#x5B9A;&#x4E00;&#x4E2A;&#xA0;<code>let</code> &#x8868;&#x8FBE;&#x5F0F;&#xFF1A;</p>

<pre class="eval">let (<var>decls</var>) <var>expr</var>
</pre>

<p>&#x8FD9;&#x91CC;&#x9690;&#x5F0F;&#x521B;&#x5EFA;&#x4E86;&#x4E00;&#x4E2A;&#x5305;&#x56F4; <var>expr</var>&#xA0;&#x7684;&#x8BED;&#x53E5;&#x5757;&#x3002;</p>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-let-and-const-declarations" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Let and Const Declarations</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition. Does not specify let expressions or let blocks.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-let-and-const-declarations" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Let and Const Declarations</small></a></td>
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
   <th>Edge</th>
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>41.0</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><a href="/en-US/Firefox/Releases/44" title="Released on 2016-01-26.">44</a> (44)</td>
   <td>11</td>
   <td>17</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
  <tr>
   <td>Temporal dead zone</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><a href="/en-US/Firefox/Releases/35" title="Released on 2015-01-13.">35</a> (35)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
  <tr>
   <td><code>let</code> expression <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
  <tr>
   <td><code>let</code> block <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
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
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>41.0</td>
   <td>44.0 (44)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
  <tr>
   <td>Temporal dead zone</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>35.0 (35)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
  <tr>
   <td><code>let</code> expression <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
  <tr>
   <td><code>let</code> block <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="Firefox-specific_notes">Firefox-specific notes</h2>

<ul>
 <li>[1]: &#x53EA;&#x5141;&#x8BB8;&#x7528;&#x5728;&#x88AB;<code>&lt;script type=&quot;application/javascript;version=1.7&quot;&gt;</code>&#xA0;&#x5305;&#x88F9;&#x7684;&#x4EE3;&#x7801;&#x5757;&#x4E2D; &#xFF08;&#x6216;&#x8005;&#x66F4;&#x9AD8;&#x7684; &#x7248;&#x672C;version&#xFF09;&#x3002;&#x5F53;&#x5FC3;&#xFF0C;&#x65E0;&#x8BBA;&#x5982;&#x4F55;&#xFF0C;&#xA0;&#x4F5C;&#x4E3A;&#x4E00;&#x4E2A;&#x975E;&#x6807;&#x51C6;&#x7279;&#x6027;&#xFF0C;&#xA0;&#x5F88;&#x6709;&#x53EF;&#x80FD;&#x4F1A;&#x6253;&#x7834;&#x5176;&#x4ED6;&#x6D4F;&#x89C8;&#x5668;&#x7684;&#x652F;&#x6301;&#x3002;&#xA0;<a href="/zh-CN/docs/XUL" title="zh-CN/docs/XUL">XUL</a>&#xA0;&#x811A;&#x672C;&#x6807;&#x7B7E;&#x5B9E;&#x73B0;&#x8FD9;&#x4E9B;&#x7279;&#x6027;&#x4E0D;&#x9700;&#x8981;&#x7279;&#x6B8A;&#x7684;&#x5757;&#x3002;&#xA0;&#x8BF7;&#x770B;&#xA0;<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=932517" class="external" title="FIXED: Enable let without version=1.7+ in non-strict mode">bug&#xA0;932517</a>&#x548C;<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=932517" class="external" title="FIXED: Enable let without version=1.7+ in non-strict mode">bug&#xA0;932517</a>&#x3002;</li>
 <li>ES6 compliance for <code>let</code> in SpIderMonkey is tracked in <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=950547" class="external" title="FIXED: Make let and const ES6-compatible">bug&#xA0;950547</a> and non-standard extensions are going to be removed in the future <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1023609" class="external" title="FIXED: Remove SpiderMonkey support for let expressions">bug&#xA0;1023609</a>.</li>
</ul>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/var"><code>var</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/const"><code>const</code></a></li>
 <li><a href="https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/" class="external">ES6 In Depth: <code>let</code> and <code>const</code></a></li>
 <li><a href="https://blog.mozilla.org/addons/2015/10/14/breaking-changes-let-const-firefox-nightly-44/" class="external">Breaking changes in <code>let</code> and <code>const</code> in Firefox 44.</a></li>
 <li><a href="https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch3.md" class="external">You Don&apos;t Know JS: Scope &amp; Closures:&#xA0;Chapter 3: Function vs. Block Scope</a></li>
</ul>
                  
                
              