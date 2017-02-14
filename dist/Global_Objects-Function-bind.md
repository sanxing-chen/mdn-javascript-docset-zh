
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><strong><span style="font-family: courier new,andale mono,monospace; line-height: 1.5;">bind()</span></strong>&#x65B9;&#x6CD5;&#x4F1A;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x51FD;&#x6570;&#x3002;&#x5F53;&#x8FD9;&#x4E2A;&#x65B0;&#x51FD;&#x6570;&#x88AB;&#x8C03;&#x7528;&#x65F6;&#xFF0C;bind()&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#x5C06;&#x4F5C;&#x4E3A;&#x5B83;&#x8FD0;&#x884C;&#x65F6;&#x7684; <span style="font-family: courier new,andale mono,monospace;">this</span>, &#x4E4B;&#x540E;&#x7684;&#x4E00;&#x5E8F;&#x5217;&#x53C2;&#x6570;&#x5C06;&#x4F1A;&#x5728;&#x4F20;&#x9012;&#x7684;&#x5B9E;&#x53C2;&#x524D;&#x4F20;&#x5165;&#x4F5C;&#x4E3A;&#x5B83;&#x7684;&#x53C2;&#x6570;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>fun</var>.bind(<var>thisArg</var>[,&#xA0;<var>arg1</var>[,&#xA0;<var>arg2</var>[, ...]]])</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>thisArg</code></dt>
 <dd>&#x5F53;&#x7ED1;&#x5B9A;&#x51FD;&#x6570;&#x88AB;&#x8C03;&#x7528;&#x65F6;&#xFF0C;&#x8BE5;&#x53C2;&#x6570;&#x4F1A;&#x4F5C;&#x4E3A;&#x539F;&#x51FD;&#x6570;&#x8FD0;&#x884C;&#x65F6;&#x7684;&#xA0;<span style="font-family: courier new,andale mono,monospace;">this&#xA0;</span>&#x6307;&#x5411;&#x3002;&#x5F53;&#x4F7F;&#x7528;<a href="/zh-cn/JavaScript/Reference/Operators/new" title="zh-cn/JavaScript/Reference/Operators/Special Operators/new Operator"><code>new</code> &#x64CD;&#x4F5C;&#x7B26;</a>&#x8C03;&#x7528;&#x7ED1;&#x5B9A;&#x51FD;&#x6570;&#x65F6;&#xFF0C;&#x8BE5;&#x53C2;&#x6570;&#x65E0;&#x6548;&#x3002;</dd>
 <dt><code>arg1, arg2, ...</code></dt>
 <dd>&#x5F53;&#x7ED1;&#x5B9A;&#x51FD;&#x6570;&#x88AB;&#x8C03;&#x7528;&#x65F6;&#xFF0C;&#x8FD9;&#x4E9B;&#x53C2;&#x6570;&#x5C06;&#x7F6E;&#x4E8E;&#x5B9E;&#x53C2;&#x4E4B;&#x524D;&#x4F20;&#x9012;&#x7ED9;&#x88AB;&#x7ED1;&#x5B9A;&#x7684;&#x65B9;&#x6CD5;&#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#xA0; &#xA0; &#xA0;&#xA0;&#x8FD4;&#x56DE;&#x7531;&#x6307;&#x5B9A;&#x7684;this&#x503C;&#x548C;&#x521D;&#x59CB;&#x5316;&#x53C2;&#x6570;&#x6539;&#x9020;&#x7684;&#x539F;&#x51FD;&#x6570;&#x62F7;&#x8D1D;</p>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<div><span style="font-family: courier new,andale mono,monospace; line-height: 1.5;">bind()</span>&#xA0;&#x51FD;&#x6570;&#x4F1A;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x51FD;&#x6570;&#xFF08;&#x79F0;&#x4E3A;&#x7ED1;&#x5B9A;&#x51FD;&#x6570;&#xFF09;&#xFF0C;&#x65B0;&#x51FD;&#x6570;&#x4E0E;&#x88AB;&#x8C03;&#x51FD;&#x6570;&#xFF08;&#x7ED1;&#x5B9A;&#x51FD;&#x6570;&#x7684;&#x76EE;&#x6807;&#x51FD;&#x6570;&#xFF09;&#x5177;&#x6709;&#x76F8;&#x540C;&#x7684;&#x51FD;&#x6570;&#x4F53;&#xFF08;&#x5728; ECMAScript 5 &#x89C4;&#x8303;&#x4E2D;&#x5185;&#x7F6E;&#x7684;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call" title="call() &#x65B9;&#x6CD5;&#x5728;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;this&#x503C;&#x548C;&#x82E5;&#x5E72;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x503C;&#x7684;&#x524D;&#x63D0;&#x4E0B;&#x8C03;&#x7528;&#x67D0;&#x4E2A;&#x51FD;&#x6570;&#x6216;&#x65B9;&#x6CD5;."><code>call</code></a>&#x5C5E;&#x6027;&#xFF09;&#x3002;&#x5F53;<strong>&#x76EE;&#x6807;&#x51FD;&#x6570;</strong>&#x88AB;&#x8C03;&#x7528;&#x65F6;&#xA0;<span style="font-family: courier new,andale mono,monospace;">this</span>&#xA0;&#x503C;&#x7ED1;&#x5B9A;&#x5230;&#xA0;<span style="font-family: courier new,andale mono,monospace;">bind()</span>&#xA0;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#xFF0C;&#x8BE5;&#x53C2;&#x6570;&#x4E0D;&#x80FD;&#x88AB;&#x91CD;&#x5199;&#x3002;&#x7ED1;&#x5B9A;&#x51FD;&#x6570;&#x88AB;&#x8C03;&#x7528;&#x65F6;&#xFF0C;<span style="font-family: courier new,andale mono,monospace;">bind()</span>&#xA0;&#x4E5F;&#x63A5;&#x53D7;&#x9884;&#x8BBE;&#x7684;&#x53C2;&#x6570;&#x63D0;&#x4F9B;&#x7ED9;&#x539F;&#x51FD;&#x6570;&#x3002;&#x4E00;&#x4E2A;&#x7ED1;&#x5B9A;&#x51FD;&#x6570;&#x4E5F;&#x80FD;&#x4F7F;&#x7528;<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/new" title="new&#x8FD0;&#x7B97;&#x7B26;&#x7684;&#x4F5C;&#x7528;&#x662F;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5B9E;&#x4F8B;&#x3002;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x53EF;&#x4EE5;&#x662F;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x662F;&#x4E00;&#x4E9B;&#x7CFB;&#x7EDF;&#x81EA;&#x5E26;&#x7684;&#x5E26;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x5BF9;&#x8C61;&#x3002;"><code>new</code></a>&#x64CD;&#x4F5C;&#x7B26;&#x521B;&#x5EFA;&#x5BF9;&#x8C61;&#xFF1A;&#x8FD9;&#x79CD;&#x884C;&#x4E3A;&#x5C31;&#x50CF;&#x628A;&#x539F;&#x51FD;&#x6570;&#x5F53;&#x6210;&#x6784;&#x9020;&#x5668;&#x3002;&#x63D0;&#x4F9B;&#x7684;&#xA0;<span style="font-family: courier new,andale mono,monospace;">this</span>&#xA0;&#x503C;&#x88AB;&#x5FFD;&#x7565;&#xFF0C;&#x540C;&#x65F6;&#x8C03;&#x7528;&#x65F6;&#x7684;&#x53C2;&#x6570;&#x88AB;&#x63D0;&#x4F9B;&#x7ED9;&#x6A21;&#x62DF;&#x51FD;&#x6570;&#x3002;</div>

<div>&#xA0;</div>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x521B;&#x5EFA;&#x7ED1;&#x5B9A;&#x51FD;&#x6570;">&#x521B;&#x5EFA;&#x7ED1;&#x5B9A;&#x51FD;&#x6570;</h3>

<p><code>bind() &#x6700;&#x7B80;&#x5355;&#x7684;&#x7528;&#x6CD5;&#x662F;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#xFF0C;&#x4F7F;&#x8FD9;&#x4E2A;&#x51FD;&#x6570;&#x4E0D;&#x8BBA;&#x600E;&#x4E48;&#x8C03;&#x7528;&#x90FD;&#x6709;&#x540C;&#x6837;&#x7684;</code>&#xA0;<code>this</code>&#xA0;&#x503C;&#x3002;JavaScript&#x65B0;&#x624B;&#x7ECF;&#x5E38;&#x72AF;&#x7684;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#x662F;&#x5C06;&#x4E00;&#x4E2A;&#x65B9;&#x6CD5;&#x4ECE;&#x5BF9;&#x8C61;&#x4E2D;&#x62FF;&#x51FA;&#x6765;&#xFF0C;&#x7136;&#x540E;&#x518D;&#x8C03;&#x7528;&#xFF0C;&#x5E0C;&#x671B;&#x65B9;&#x6CD5;&#x4E2D;&#x7684;&#xA0;<code>this</code>&#xA0;&#x662F;&#x539F;&#x6765;&#x7684;&#x5BF9;&#x8C61;&#x3002;&#xFF08;&#x6BD4;&#x5982;&#x5728;&#x56DE;&#x8C03;&#x4E2D;&#x4F20;&#x5165;&#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x3002;&#xFF09;&#x5982;&#x679C;&#x4E0D;&#x505A;&#x7279;&#x6B8A;&#x5904;&#x7406;&#x7684;&#x8BDD;&#xFF0C;&#x4E00;&#x822C;&#x4F1A;&#x4E22;&#x5931;&#x539F;&#x6765;&#x7684;&#x5BF9;&#x8C61;&#x3002;&#x4ECE;&#x539F;&#x6765;&#x7684;&#x51FD;&#x6570;&#x548C;&#x539F;&#x6765;&#x7684;&#x5BF9;&#x8C61;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x7ED1;&#x5B9A;&#x51FD;&#x6570;&#xFF0C;&#x5219;&#x80FD;&#x5F88;&#x6F02;&#x4EAE;&#x5730;&#x89E3;&#x51B3;&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#xFF1A;</p>

<pre class="brush: js">this.x = 9; 
var module = {
&#xA0; x: 81,
&#xA0; getX: function() { return this.x; }
};

module.getX(); // &#x8FD4;&#x56DE; 81

var retrieveX = module.getX;
retrieveX(); // &#x8FD4;&#x56DE; 9, &#x5728;&#x8FD9;&#x79CD;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&quot;this&quot;&#x6307;&#x5411;&#x5168;&#x5C40;&#x4F5C;&#x7528;&#x57DF;

// &#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x51FD;&#x6570;&#xFF0C;&#x5C06;&quot;this&quot;&#x7ED1;&#x5B9A;&#x5230;module&#x5BF9;&#x8C61;
// &#x65B0;&#x624B;&#x53EF;&#x80FD;&#x4F1A;&#x88AB;&#x5168;&#x5C40;&#x7684;x&#x53D8;&#x91CF;&#x548C;module&#x91CC;&#x7684;&#x5C5E;&#x6027;x&#x6240;&#x8FF7;&#x60D1;
var boundGetX = retrieveX.bind(module);
boundGetX(); // &#x8FD4;&#x56DE; 81
</pre>

<h3 id="&#x504F;&#x51FD;&#x6570;&#xFF08;Partial_Functions&#xFF09;">&#x504F;&#x51FD;&#x6570;&#xFF08;Partial Functions&#xFF09;</h3>

<p><code>bind()</code>&#x7684;&#x53E6;&#x4E00;&#x4E2A;&#x6700;&#x7B80;&#x5355;&#x7684;&#x7528;&#x6CD5;&#x662F;&#x4F7F;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x62E5;&#x6709;&#x9884;&#x8BBE;&#x7684;&#x521D;&#x59CB;&#x53C2;&#x6570;&#x3002;&#x8FD9;&#x4E9B;&#x53C2;&#x6570;&#xFF08;&#x5982;&#x679C;&#x6709;&#x7684;&#x8BDD;&#xFF09;&#x4F5C;&#x4E3A;<code>bind()</code>&#x7684;&#x7B2C;&#x4E8C;&#x4E2A;&#x53C2;&#x6570;&#x8DDF;&#x5728;<code>this</code>&#xFF08;&#x6216;&#x5176;&#x4ED6;&#x5BF9;&#x8C61;&#xFF09;&#x540E;&#x9762;&#xFF0C;&#x4E4B;&#x540E;&#x5B83;&#x4EEC;&#x4F1A;&#x88AB;&#x63D2;&#x5165;&#x5230;&#x76EE;&#x6807;&#x51FD;&#x6570;&#x7684;&#x53C2;&#x6570;&#x5217;&#x8868;&#x7684;&#x5F00;&#x59CB;&#x4F4D;&#x7F6E;&#xFF0C;&#x4F20;&#x9012;&#x7ED9;&#x7ED1;&#x5B9A;&#x51FD;&#x6570;&#x7684;&#x53C2;&#x6570;&#x4F1A;&#x8DDF;&#x5728;&#x5B83;&#x4EEC;&#x7684;&#x540E;&#x9762;&#x3002;</p>

<pre class="brush: js">function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]

// Create a function with a preset leading argument
var leadingThirtysevenList = list.bind(undefined, 37);

var list2 = leadingThirtysevenList(); // [37]
var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]
</pre>

<h3 id="&#x914D;&#x5408;_setTimeout" style="line-height: 24px; font-size: 1.71428571428571rem;">&#x914D;&#x5408; setTimeout</h3>

<p>&#x5728;&#x9ED8;&#x8BA4;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x4F7F;&#x7528; <a href="/zh-CN/docs/Web/API/Window/setTimeout" title="&#x8BBE;&#x7F6E;&#x4E00;&#x4E2A;&#x5B9A;&#x65F6;&#x5668;,&#x5728;&#x5B9A;&#x65F6;&#x5668;&#x5230;&#x671F;&#x540E;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x51FD;&#x6570;&#x6216;&#x6307;&#x5B9A;&#x4EE3;&#x7801;&#x6BB5;."><code>window.setTimeout()</code></a> &#x65F6;&#xFF0C;<code>this&#xA0;</code>&#x5173;&#x952E;&#x5B57;&#x4F1A;&#x6307;&#x5411; <a href="/zh-CN/docs/Web/API/Window" title="The window object represents a window containing a DOM document; the document property points to the DOM document loaded in that window."><code>window</code></a> &#xFF08;&#x6216;&#x5168;&#x5C40;&#xFF09;&#x5BF9;&#x8C61;&#x3002;&#x5F53;&#x4F7F;&#x7528;&#x7C7B;&#x7684;&#x65B9;&#x6CD5;&#x65F6;&#xFF0C;&#x9700;&#x8981;&#xA0;<code>this</code>&#xA0;&#x5F15;&#x7528;&#x7C7B;&#x7684;&#x5B9E;&#x4F8B;&#xFF0C;&#x4F60;&#x53EF;&#x80FD;&#x9700;&#x8981;&#x663E;&#x5F0F;&#x5730;&#x628A;&#xA0;<code>this</code>&#xA0;&#x7ED1;&#x5B9A;&#x5230;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x4EE5;&#x4FBF;&#x7EE7;&#x7EED;&#x4F7F;&#x7528;&#x5B9E;&#x4F8B;&#x3002;</p>

<pre class="brush: js"><code>function LateBloomer() {
  this.petalCount = Math.ceil(Math.random() * 12) + 1;
}

// Declare bloom after a delay of 1 second
LateBloomer.prototype.bloom = function() {
  window.setTimeout(this.declare.bind(this), 1000);
};

LateBloomer.prototype.declare = function() {
  console.log(&apos;I am a beautiful flower with &apos; +
    this.petalCount + &apos; petals!&apos;);
};

var flower = new LateBloomer();
flower.bloom();  // &#x4E00;&#x79D2;&#x949F;&#x540E;, &#x8C03;&#x7528;&apos;declare&apos;&#x65B9;&#x6CD5;</code></pre>

<h3 id="&#x4F5C;&#x4E3A;&#x6784;&#x9020;&#x51FD;&#x6570;&#x4F7F;&#x7528;&#x7684;&#x7ED1;&#x5B9A;&#x51FD;&#x6570;">&#x4F5C;&#x4E3A;&#x6784;&#x9020;&#x51FD;&#x6570;&#x4F7F;&#x7528;&#x7684;&#x7ED1;&#x5B9A;&#x51FD;&#x6570;</h3>

<div class="warning">
<p><strong>&#x8B66;&#x544A;</strong>&#xA0;:&#x8FD9;&#x90E8;&#x5206;&#x6F14;&#x793A;&#x4E86; JavaScript &#x7684;&#x80FD;&#x529B;&#x5E76;&#x4E14;&#x8BB0;&#x5F55;&#x4E86; <code>bind()</code> &#x7684;&#x8D85;&#x524D;&#x7528;&#x6CD5;&#x3002;&#x4EE5;&#x4E0B;&#x5C55;&#x793A;&#x7684;&#x65B9;&#x6CD5;&#x5E76;&#x4E0D;&#x662F;&#x6700;&#x4F73;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x4E14;&#x53EF;&#x80FD;&#x4E0D;&#x5E94;&#x8BE5;&#x7528;&#x5728;&#x4EFB;&#x4F55;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x3002;</p>
</div>

<p>&#x81EA;&#x7136;&#x800C;&#x7136;&#x5730;&#xFF0C;&#x7ED1;&#x5B9A;&#x51FD;&#x6570;&#x9002;&#x7528;&#x4E8E;&#x7528;new&#x64CD;&#x4F5C;&#x7B26;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/new" title="new&#x8FD0;&#x7B97;&#x7B26;&#x7684;&#x4F5C;&#x7528;&#x662F;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5B9E;&#x4F8B;&#x3002;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x53EF;&#x4EE5;&#x662F;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x662F;&#x4E00;&#x4E9B;&#x7CFB;&#x7EDF;&#x81EA;&#x5E26;&#x7684;&#x5E26;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x5BF9;&#x8C61;&#x3002;"><code>new</code></a> &#x53BB;&#x6784;&#x9020;&#x4E00;&#x4E2A;&#x7531;&#x76EE;&#x6807;&#x51FD;&#x6570;&#x521B;&#x5EFA;&#x7684;&#x65B0;&#x7684;&#x5B9E;&#x4F8B;&#x3002;&#x5F53;&#x4E00;&#x4E2A;&#x7ED1;&#x5B9A;&#x51FD;&#x6570;&#x662F;&#x7528;&#x6765;&#x6784;&#x5EFA;&#x4E00;&#x4E2A;&#x503C;&#x7684;&#xFF0C;&#x539F;&#x6765;&#x63D0;&#x4F9B;&#x7684; this &#x5C31;&#x4F1A;&#x88AB;&#x5FFD;&#x7565;&#x3002;&#x7136;&#x800C;, &#x539F;&#x5148;&#x63D0;&#x4F9B;&#x7684;&#x90A3;&#x4E9B;&#x53C2;&#x6570;&#x4ECD;&#x7136;&#x4F1A;&#x88AB;&#x524D;&#x7F6E;&#x5230;&#x6784;&#x9020;&#x51FD;&#x6570;&#x8C03;&#x7528;&#x7684;&#x524D;&#x9762;&#x3002;</p>

<pre class="brush: js">function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() { 
  return this.x + &apos;,&apos; + this.y; 
};

var p = new Point(1, 2);
p.toString(); // &apos;1,2&apos;

var emptyObj = {};
var YAxisPoint = Point.bind(emptyObj, 0/*x*/);
// &#x4EE5;&#x4E0B;&#x8FD9;&#x884C;&#x4EE3;&#x7801;&#x5728; polyfill &#x4E0D;&#x652F;&#x6301;,
// &#x5728;&#x539F;&#x751F;&#x7684;bind&#x65B9;&#x6CD5;&#x8FD0;&#x884C;&#x6CA1;&#x95EE;&#x9898;:
//(&#x8BD1;&#x6CE8;&#xFF1A;polyfill&#x7684;bind&#x65B9;&#x6CD5;&#x5982;&#x679C;&#x52A0;&#x4E0A;&#x628A;bind&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#xFF0C;&#x5373;&#x65B0;&#x7ED1;&#x5B9A;&#x7684;this&#x6267;&#x884C;Object()&#x6765;&#x5305;&#x88C5;&#x4E3A;&#x5BF9;&#x8C61;&#xFF0C;Object(null)&#x5219;&#x662F;{}&#xFF0C;&#x90A3;&#x4E48;&#x4E5F;&#x53EF;&#x4EE5;&#x652F;&#x6301;)
var YAxisPoint = Point.bind(null, 0/*x*/);

var axisPoint = new YAxisPoint(5);
axisPoint.toString(); // &apos;0,5&apos;

axisPoint instanceof Point; // true
axisPoint instanceof YAxisPoint; // true
new Point(17, 42) instanceof YAxisPoint; // true</pre>

<p>&#x4F60;&#x77E5;&#x9053;&#x4E0D;&#x9700;&#x8981;&#x505A;&#x7279;&#x522B;&#x7684;&#x5904;&#x7406;&#x5C31;&#x53EF;&#x4EE5;&#x7528;new&#x64CD;&#x4F5C;&#x7B26;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/new" title="new&#x8FD0;&#x7B97;&#x7B26;&#x7684;&#x4F5C;&#x7528;&#x662F;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5B9E;&#x4F8B;&#x3002;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x53EF;&#x4EE5;&#x662F;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x662F;&#x4E00;&#x4E9B;&#x7CFB;&#x7EDF;&#x81EA;&#x5E26;&#x7684;&#x5E26;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x5BF9;&#x8C61;&#x3002;"><code>new</code></a> &#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x7ED1;&#x5B9A;&#x51FD;&#x6570;&#x3002;&#x5FC5;&#x7136;&#x5730;&#xFF0C;&#x4F60;&#x9700;&#x8981;&#x77E5;&#x9053;&#x4E0D;&#x9700;&#x8981;&#x505A;&#x7279;&#x522B;&#x5904;&#x7406;&#x5C31;&#x53EF;&#x4EE5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x53EF;&#x4EE5;&#x88AB;&#x76F4;&#x63A5;&#x8C03;&#x7528;&#x7684;&#x7ED1;&#x5B9A;&#x51FD;&#x6570;&#xFF0C;&#x5373;&#x4F7F;&#x4F60;&#x66F4;&#x5E0C;&#x671B;&#x7ED1;&#x5B9A;&#x51FD;&#x6570;&#x662F;&#x7528;new&#x64CD;&#x4F5C;&#x7B26;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/new" title="new&#x8FD0;&#x7B97;&#x7B26;&#x7684;&#x4F5C;&#x7528;&#x662F;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5B9E;&#x4F8B;&#x3002;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x53EF;&#x4EE5;&#x662F;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x662F;&#x4E00;&#x4E9B;&#x7CFB;&#x7EDF;&#x81EA;&#x5E26;&#x7684;&#x5E26;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x5BF9;&#x8C61;&#x3002;"><code>new</code></a> &#x6765;&#x8C03;&#x7528;&#x3002;</p>

<pre class="brush: js">// &#x8FD9;&#x4E2A;&#x4F8B;&#x5B50;&#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x5728;&#x4F60;&#x7684; javascript &#x63A7;&#x5236;&#x53F0;&#x8FD0;&#x884C;
// ...&#x63A5;&#x7740;&#x4E0A;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x7EE7;&#x7EED;(&#x8BD1;&#x6CE8;&#xFF1A;

// &#x4ECD;&#x7136;&#x80FD;&#x4F5C;&#x4E3A;&#x4E00;&#x4E2A;&#x666E;&#x901A;&#x51FD;&#x6570;&#x6765;&#x8C03;&#x7528;
// (&#x5373;&#x4F7F;&#x901A;&#x5E38;&#x6765;&#x8BF4;&#x8FD9;&#x4E2A;&#x4E0D;&#x662F;&#x88AB;&#x671F;&#x671B;&#x53D1;&#x751F;&#x7684;)
YAxisPoint(13);

emptyObj.x + &apos;,&apos; + emptyObj.y;   //  &apos;0,13&apos;
</pre>

<p>&#x5982;&#x679C;&#x4F60;&#x5E0C;&#x671B;&#x4E00;&#x4E2A;&#x7ED1;&#x5B9A;&#x51FD;&#x6570;&#x53EA;&#x652F;&#x6301;&#x4F7F;&#x7528;new&#x64CD;&#x4F5C;&#x7B26;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/new" title="new&#x8FD0;&#x7B97;&#x7B26;&#x7684;&#x4F5C;&#x7528;&#x662F;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5B9E;&#x4F8B;&#x3002;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x53EF;&#x4EE5;&#x662F;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x662F;&#x4E00;&#x4E9B;&#x7CFB;&#x7EDF;&#x81EA;&#x5E26;&#x7684;&#x5E26;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x5BF9;&#x8C61;&#x3002;"><code>new</code></a>&#xFF0C;&#x6216;&#x8005;&#x53EA;&#x80FD;&#x76F4;&#x63A5;&#x8C03;&#x7528;&#x5B83;&#xFF0C;&#x90A3;&#x4E48;&#x6A21;&#x677F;&#x51FD;&#x6570;&#x5FC5;&#x987B;&#x5F3A;&#x5236;&#x6267;&#x884C;&#x90A3;&#x9650;&#x5236;&#x3002;</p>

<h3 name="Example:_Creating_shortcuts" id="Example:_Creating_shortcuts" style="line-height: 24px; font-size: 1.71428571428571rem;">&#x5FEB;&#x6377;&#x8C03;&#x7528;</h3>

<p><code>&#x5728;&#x4F60;&#x60F3;&#x8981;&#x4E3A;&#x4E00;&#x4E2A;&#x9700;&#x8981;&#x7279;&#x5B9A;&#x7684; this &#x503C;&#x7684;&#x51FD;&#x6570;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x6377;&#x5F84;&#xFF08;shortcut&#xFF09;&#x7684;&#x65F6;&#x5019;&#xFF0C;bind()</code>&#xA0;&#x65B9;&#x6CD5;&#x4E5F;&#x5F88;&#x597D;&#x7528;&#x3002;</p>

<p>&#x4F60;&#x53EF;&#x4EE5;&#x7528; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" title="slice()&#xA0;&#x65B9;&#x6CD5;&#x5C06;&#x6570;&#x7EC4;&#x7684;&#x4E00;&#x90E8;&#x5206;&#x7684;&#x6D45;&#x62F7;&#x8D1D;, &#x8FD4;&#x56DE;&#x5230;&#x4ECE;&#x5F00;&#x59CB;&#x5230;&#x7ED3;&#x675F;&#xFF08;&#x7ED3;&#x675F;&#x4E0D;&#x5305;&#x62EC;&#xFF09;&#x9009;&#x62E9;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x3002;&#x539F;&#x59CB;&#x6570;&#x7EC4;&#x4E0D;&#x4F1A;&#x88AB;&#x4FEE;&#x6539;&#x3002;"><code>Array.prototype.slice</code></a> &#x6765;&#x5C06;&#x4E00;&#x4E2A;&#x7C7B;&#x4F3C;&#x4E8E;&#x6570;&#x7EC4;&#x7684;&#x5BF9;&#x8C61;&#xFF08;array-like object&#xFF09;&#x8F6C;&#x6362;&#x6210;&#x4E00;&#x4E2A;&#x771F;&#x6B63;&#x7684;&#x6570;&#x7EC4;&#xFF0C;&#x5C31;&#x62FF;&#x5B83;&#x6765;&#x4E3E;&#x4F8B;&#x5B50;&#x5427;&#x3002;&#x4F60;&#x53EF;&#x4EE5;&#x521B;&#x5EFA;&#x8FD9;&#x6837;&#x4E00;&#x4E2A;&#x6377;&#x5F84;&#xFF1A;</p>

<pre class="brush: js">var slice = Array.prototype.slice;

// ...

slice.apply(arguments);</pre>

<p>&#x7528; <code>bind()&#xA0;</code>&#x53EF;&#x4EE5;&#x4F7F;&#x8FD9;&#x4E2A;&#x8FC7;&#x7A0B;&#x53D8;&#x5F97;&#x7B80;&#x5355;&#x3002;&#x5728;&#x4E0B;&#x9762;&#x8FD9;&#x6BB5;&#x4EE3;&#x7801;&#x91CC;&#x9762;&#xFF0C;<code>slice</code>&#xA0;&#x662F;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype" title="Function.prototype &#x5C5E;&#x6027;&#x5B58;&#x50A8;&#x4E86; Function &#x7684;&#x539F;&#x578B;&#x5BF9;&#x8C61;&#x3002;"><code>Function.prototype</code></a> &#x7684;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call" title="call() &#x65B9;&#x6CD5;&#x5728;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;this&#x503C;&#x548C;&#x82E5;&#x5E72;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x503C;&#x7684;&#x524D;&#x63D0;&#x4E0B;&#x8C03;&#x7528;&#x67D0;&#x4E2A;&#x51FD;&#x6570;&#x6216;&#x65B9;&#x6CD5;."><code>call()</code></a> &#x65B9;&#x6CD5;&#x7684;&#x7ED1;&#x5B9A;&#x51FD;&#x6570;&#xFF0C;&#x5E76;&#x4E14;&#x5C06; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype" title="&#x6240;&#x6709;&#x7684;&#x6570;&#x7EC4;&#x5B9E;&#x4F8B;&#x90FD;&#x7EE7;&#x627F;&#x4E8E; Array.prototype&#x3002;"><code>Array.prototype</code></a> &#x7684;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" title="slice()&#xA0;&#x65B9;&#x6CD5;&#x5C06;&#x6570;&#x7EC4;&#x7684;&#x4E00;&#x90E8;&#x5206;&#x7684;&#x6D45;&#x62F7;&#x8D1D;, &#x8FD4;&#x56DE;&#x5230;&#x4ECE;&#x5F00;&#x59CB;&#x5230;&#x7ED3;&#x675F;&#xFF08;&#x7ED3;&#x675F;&#x4E0D;&#x5305;&#x62EC;&#xFF09;&#x9009;&#x62E9;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x3002;&#x539F;&#x59CB;&#x6570;&#x7EC4;&#x4E0D;&#x4F1A;&#x88AB;&#x4FEE;&#x6539;&#x3002;"><code>slice()</code></a> &#x65B9;&#x6CD5;&#x4F5C;&#x4E3A;&#xA0;<code>this</code>&#xA0;&#x7684;&#x503C;&#x3002;&#x8FD9;&#x610F;&#x5473;&#x7740;&#x6211;&#x4EEC;&#x538B;&#x6839;&#x513F;&#x7528;&#x4E0D;&#x7740;&#x4E0A;&#x9762;&#x90A3;&#x4E2A;&#xA0;<code>apply() </code>&#x8C03;&#x7528;&#x4E86;&#x3002;</p>

<pre class="brush: js">// same as &quot;slice&quot; in the previous example
var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.call.bind(unboundSlice);

// ...

slice(arguments);</pre>

<h2 name="Compatibility" id="Compatibility">Polyfill&#xFF08;&#x517C;&#x5BB9;&#x65E7;&#x6D4F;&#x89C8;&#x5668;&#xFF09;</h2>

<p><code><span style="font-family: courier new,andale mono,monospace; line-height: 1.5;">bind</span>&#xA0;</code>&#x51FD;&#x6570;&#x5728; ECMA-262 &#x7B2C;&#x4E94;&#x7248;&#x624D;&#x88AB;&#x52A0;&#x5165;&#xFF1B;&#x5B83;&#x53EF;&#x80FD;&#x65E0;&#x6CD5;&#x5728;&#x6240;&#x6709;&#x6D4F;&#x89C8;&#x5668;&#x4E0A;&#x8FD0;&#x884C;&#x3002;&#x4F60;&#x53EF;&#x4EE5;&#x90E8;&#x4EFD;&#x5730;&#x5728;&#x811A;&#x672C;&#x5F00;&#x5934;&#x52A0;&#x5165;&#x4EE5;&#x4E0B;&#x4EE3;&#x7801;&#xFF0C;&#x5C31;&#x80FD;&#x4F7F;&#x5B83;&#x8FD0;&#x4F5C;&#xFF0C;&#x8BA9;&#x4E0D;&#x652F;&#x6301;&#x7684;&#x6D4F;&#x89C8;&#x5668;&#x4E5F;&#x80FD;&#x4F7F;&#x7528; <code>bind()</code> &#x529F;&#x80FD;&#x3002;</p>

<pre class="brush: js">if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== &quot;function&quot;) {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError(&quot;Function.prototype.bind - what is trying to be bound is not callable&quot;);
    }

    var aArgs = Array.prototype.slice.call(arguments, 1), 
        fToBind = this, 
        fNOP = function () {},
        fBound = function () {
          return fToBind.apply(this instanceof fNOP
                                 ? this
                                 : oThis || this,
                               aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
}
</pre>

<p>&#x4E0A;&#x8FF0;&#x7B97;&#x6CD5;&#x548C;&#x5B9E;&#x9645;&#x7684;&#x5B9E;&#x73B0;&#x7B97;&#x6CD5;&#x8FD8;&#x6709;&#x8BB8;&#x591A;&#x5176;&#x4ED6;&#x7684;&#x4E0D;&#x540C; &#xFF08;&#x5C3D;&#x7BA1;&#x53EF;&#x80FD;&#x8FD8;&#x6709;&#x5176;&#x4ED6;&#x4E0D;&#x540C;&#x4E4B;&#x5904;&#xFF0C;&#x5374;&#x6CA1;&#x6709;&#x90A3;&#x4E2A;&#x5FC5;&#x8981;&#x53BB;&#x7A77;&#x5C3D;&#xFF09;&#xFF1A;</p>

<ul>
 <li>&#x8FD9;&#x90E8;&#x5206;&#x5B9E;&#x73B0;&#x4F9D;&#x8D56;&#x4E8E;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" title="slice()&#xA0;&#x65B9;&#x6CD5;&#x5C06;&#x6570;&#x7EC4;&#x7684;&#x4E00;&#x90E8;&#x5206;&#x7684;&#x6D45;&#x62F7;&#x8D1D;, &#x8FD4;&#x56DE;&#x5230;&#x4ECE;&#x5F00;&#x59CB;&#x5230;&#x7ED3;&#x675F;&#xFF08;&#x7ED3;&#x675F;&#x4E0D;&#x5305;&#x62EC;&#xFF09;&#x9009;&#x62E9;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x3002;&#x539F;&#x59CB;&#x6570;&#x7EC4;&#x4E0D;&#x4F1A;&#x88AB;&#x4FEE;&#x6539;&#x3002;"><code>Array.prototype.slice()</code></a>&#xFF0C;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat" title="concat()&#xA0;&#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x5408;&#x5E76;&#x4E24;&#x4E2A;&#x6216;&#x591A;&#x4E2A;&#x6570;&#x7EC4;&#x3002;&#x6B64;&#x65B9;&#x6CD5;&#x4E0D;&#x4F1A;&#x66F4;&#x6539;&#x73B0;&#x6709;&#x6570;&#x7EC4;&#xFF0C;&#x800C;&#x662F;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x6570;&#x7EC4;&#x3002;"><code>Array.prototype.concat()</code></a>&#xFF0C;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call" title="call() &#x65B9;&#x6CD5;&#x5728;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;this&#x503C;&#x548C;&#x82E5;&#x5E72;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x503C;&#x7684;&#x524D;&#x63D0;&#x4E0B;&#x8C03;&#x7528;&#x67D0;&#x4E2A;&#x51FD;&#x6570;&#x6216;&#x65B9;&#x6CD5;."><code>Function.prototype.call()</code></a>&#x8FD9;&#x4E9B;&#x539F;&#x751F;&#x65B9;&#x6CD5;&#x3002;</li>
 <li>&#x8FD9;&#x90E8;&#x5206;&#x5B9E;&#x73B0;&#x521B;&#x5EFA;&#x7684;&#x51FD;&#x6570;&#x7684;&#x5B9E;&#x73B0;&#x5E76;&#x6CA1;&#x6709;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/caller" title="&#x8FD4;&#x56DE;&#x8C03;&#x7528;&#x6307;&#x5B9A;&#x51FD;&#x6570;&#x7684;&#x51FD;&#x6570;."><code>caller</code></a> &#x4EE5;&#x53CA;&#x4F1A;&#x5728; get&#xFF0C;set&#x6216;&#x8005;deletion&#x4E0A;&#x629B;&#x51FA;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;"><code>TypeError</code></a>&#x9519;&#x8BEF;&#x7684;&#xA0;arguments &#x5C5E;&#x6027;&#x8FD9;&#x4E24;&#x4E2A;&#x4E0D;&#x53EF;&#x6539;&#x53D8;&#x7684;&#x201C;&#x6BD2;&#x836F;&#x201D;&#xA0;&#x3002;&#xFF08;&#x5047;&#x5982;&#x73AF;&#x5883;&#x652F;&#x6301;{jsxref(&quot;Object.defineProperty&quot;)}}&#xFF0C;&#xA0;&#x6216;&#x8005;&#x5B9E;&#x73B0;&#x652F;&#x6301;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineGetter" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>__defineGetter__</code></a> and <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineSetter" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>__defineSetter__</code></a> &#x6269;&#x5C55;&#xFF09;</li>
 <li>&#x8FD9;&#x90E8;&#x5206;&#x5B9E;&#x73B0;&#x521B;&#x5EFA;&#x7684;&#x51FD;&#x6570;&#x6709;&#xA0;<code>prototype</code>&#xA0;&#x5C5E;&#x6027;&#x3002;&#xFF08;&#x6B63;&#x786E;&#x7684;&#x7ED1;&#x5B9A;&#x51FD;&#x6570;&#x6CA1;&#x6709;&#x7684;&#xFF09;</li>
 <li>&#x8FD9;&#x90E8;&#x5206;&#x5B9E;&#x73B0;&#x521B;&#x5EFA;&#x7684;&#x7ED1;&#x5B9A;&#x51FD;&#x6570;&#x6240;&#x6709;&#x7684; length &#x5C5E;&#x6027;&#x5E76;&#x4E0D;&#x662F;&#x540C;ECMA-262&#x6807;&#x51C6;&#x4E00;&#x81F4;&#x7684;&#xFF1A;&#x5B83;&#x7684; length &#x662F;0&#xFF0C;&#x800C;&#x5728;&#x5B9E;&#x9645;&#x7684;&#x5B9E;&#x73B0;&#x4E2D;&#x6839;&#x636E;&#x76EE;&#x6807;&#x51FD;&#x6570;&#x7684; length &#x548C;&#x9884;&#x5148;&#x6307;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x4E2A;&#x6570;&#x53EF;&#x80FD;&#x4F1A;&#x8FD4;&#x56DE;&#x975E;&#x96F6;&#x7684;&#xA0;length&#x3002;</li>
</ul>

<p>&#x5982;&#x679C;&#x4F60;&#x9009;&#x62E9;&#x4F7F;&#x7528;&#x8FD9;&#x90E8;&#x5206;&#x5B9E;&#x73B0;&#xFF0C;<strong>&#x4F60;&#x4E0D;&#x80FD;&#x4F9D;&#x8D56;&#x4E8E;ECMA-262&#xFF0C;&#x4F46;&#x662F;ECMA-5&#x662F;&#x53EF;&#x4EE5;&#x7684;&#x3002;</strong>&#x5728;&#x67D0;&#x4E9B;&#x60C5;&#x51B5;&#x4E0B;&#xFF08;&#x4E5F;&#x53EF;&#x4EE5;&#x4F5C;&#x53E6;&#x4E00;&#x756A;&#x4FEE;&#x6539;&#x4EE5;&#x9002;&#x5E94;&#x7279;&#x5B9A;&#x7684;&#x9700;&#x8981;&#xFF09;&#xFF0C;&#x8FD9;&#x90E8;&#x5206;&#x5B9E;&#x73B0;&#x4E5F;&#x8BB8;&#x53EF;&#x4EE5;&#x4F5C;&#x4E3A;&#x4E00;&#x4E2A;&#x8FC7;&#x6E21;&#xFF0C;&#x5728;<code>bind()</code>&#x51FD;&#x6570;&#x88AB;&#x5E7F;&#x6CDB;&#x652F;&#x6301;&#x4E4B;&#x524D;&#x3002;</p>

<h2 id="&#x89C4;&#x8303;" style="margin-bottom: 20px; line-height: 30px; font-size: 2.14285714285714rem;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.3.4.5" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Function.prototype.bind</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition. Implemented in JavaScript 1.8.5.</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-function.prototype.bind" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Function.prototype.bind</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;<br>
    &#xA0;</td>
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
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>7</td>
   <td><a href="/en-US/Firefox/Releases/4" title="Released on 2011-03-22.">4.0</a> (2)</td>
   <td>9</td>
   <td>11.60</td>
   <td>5.1</td>
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
   <td>4.0</td>
   <td>1</td>
   <td>4.0 (2)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>11.5</td>
   <td>6.0</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply" title="apply() &#x65B9;&#x6CD5;&#x5728;&#x6307;&#x5B9A;&#xA0;this&#xA0;&#x503C;&#x548C;&#x53C2;&#x6570;&#xFF08;&#x53C2;&#x6570;&#x4EE5;&#x6570;&#x7EC4;&#x6216;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x7684;&#x5F62;&#x5F0F;&#x5B58;&#x5728;&#xFF09;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#x8C03;&#x7528;&#x67D0;&#x4E2A;&#x51FD;&#x6570;&#x3002;"><code>Function.prototype.apply()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call" title="call() &#x65B9;&#x6CD5;&#x5728;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;this&#x503C;&#x548C;&#x82E5;&#x5E72;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x503C;&#x7684;&#x524D;&#x63D0;&#x4E0B;&#x8C03;&#x7528;&#x67D0;&#x4E2A;&#x51FD;&#x6570;&#x6216;&#x65B9;&#x6CD5;."><code>Function.prototype.call()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Functions" title="&#x901A;&#x5E38;&#x6765;&#x8BF4;&#xFF0C;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x5C31;&#x662F;&#x4E00;&#x4E2A;&#x53EF;&#x4EE5;&#x88AB;&#x5916;&#x90E8;&#x4EE3;&#x7801;&#x8C03;&#x7528;(&#x6216;&#x8005;&#x51FD;&#x6570;&#x672C;&#x8EAB;&#x9012;&#x5F52;&#x8C03;&#x7528;)&#x7684;&quot;&#x5B50;&#x7A0B;&#x5E8F;&quot;&#x3002;&#x548C;&#x7A0B;&#x5E8F;&#x672C;&#x8EAB;&#x4E00;&#x6837;&#xFF0C;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x7684;&#x51FD;&#x6570;&#x4F53;&#x662F;&#x7531;&#x4E00;&#x7CFB;&#x5217;&#x7684;&#x8BED;&#x53E5;&#x7EC4;&#x6210;&#x7684;&#x3002;&#x51FD;&#x6570;&#x53EF;&#x4EE5;&#x63A5;&#x6536;&#x4F20;&#x5165;&#x53C2;&#x6570;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x503C;&#x3002;">Functions</a></li>
</ul>
                  
                
              