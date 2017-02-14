
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>ECMAScript 2015 &#x4E2D;&#x5F15;&#x5165;&#x7684; JavaScript &#x7C7B; &#x662F; JavaScript &#x7684;&#x73B0;&#x6709;&#x57FA;&#x4E8E;&#x539F;&#x578B;&#x7684;&#x7EE7;&#x627F;&#x7684;&#x8BED;&#x6CD5;&#x7CD6;&#x3002;&#xA0;&#x7C7B;&#x5E76;&#x4E0D;&#x662F;&#xA0;JavaScript &#x91CC;&#x52A0;&#x5165;&#x7684;&#x65B0;&#x7684;&#x9762;&#x5411;&#x5BF9;&#x8C61;&#x7684;&#x7EE7;&#x627F;&#x6A21;&#x578B;&#x3002;JavaScript &#x4E2D;&#x7684;&#x7C7B;&#x53EA;&#x662F;&#x80FD;&#x8BA9;&#x6211;&#x4EEC;&#x7528;&#x66F4;&#x7B80;&#x6D01;&#x660E;&#x4E86;&#x7684;&#x8BED;&#x6CD5;&#x521B;&#x5EFA;&#x5BF9;&#x8C61;&#x53CA;&#x5904;&#x7406;&#x76F8;&#x5173;&#x7684;&#x7EE7;&#x627F;&#x3002;</p>

<h2 id="&#x5B9A;&#x4E49;&#x7C7B;">&#x5B9A;&#x4E49;&#x7C7B;</h2>

<p>&#x7C7B;&#x5B9E;&#x9645;&#x4E0A;&#x662F;&#x4E2A;&#x201C;&#x7279;&#x6B8A;&#x7684;<a href="/zh-CN/docs/Web/JavaScript/Reference/Functions">&#x51FD;&#x6570;</a>&#x201D;&#xFF0C;&#x800C;&#x4E14;&#x6B63;&#x5982;&#x51FD;&#x6570;&#x7684;&#x5B9A;&#x4E49;&#x65B9;&#x5F0F;&#x6709;<a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/function">&#x51FD;&#x6570;&#x58F0;&#x660E;</a>&#x548C;<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/function">&#x51FD;&#x6570;&#x8868;&#x8FBE;&#x5F0F;</a>&#x4E24;&#x79CD;&#x4E00;&#x6837;&#xFF0C;&#x7C7B;&#x7684;&#x5B9A;&#x4E49;&#x65B9;&#x5F0F;&#x4E5F;&#x6709;&#x4E24;&#x79CD;&#xFF0C;&#x5206;&#x522B;&#x662F;&#xFF1A;<a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/class">&#x7C7B;&#x58F0;&#x660E;</a>&#x548C;<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/class">&#x7C7B;&#x8868;&#x8FBE;&#x5F0F;</a>&#x3002;</p>

<h3 id="&#x7C7B;&#x58F0;&#x660E;">&#x7C7B;&#x58F0;&#x660E;</h3>

<p>&#x7C7B;&#x58F0;&#x660E;&#x662F;&#x5B9A;&#x4E49;&#x7C7B;&#x7684;&#x4E00;&#x79CD;&#x65B9;&#x5F0F;&#xFF0C;&#x5C31;&#x50CF;&#x4E0B;&#x9762;&#x8FD9;&#x6837;&#xFF0C;&#x4F7F;&#x7528; <code>class</code> &#x5173;&#x952E;&#x5B57;&#x540E;&#x8DDF;&#x4E00;&#x4E2A;&#x7C7B;&#x540D;&#xFF08;&#x8FD9;&#x91CC;&#x662F; Polygon&#xFF09;&#xFF0C;&#x5C31;&#x53EF;&#x4EE5;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x7C7B;&#x3002;</p>

<pre class="brush: js">class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}</pre>

<h4 id="&#x53D8;&#x91CF;&#x63D0;&#x5347;">&#x53D8;&#x91CF;&#x63D0;&#x5347;</h4>

<p>&#x7C7B;&#x58F0;&#x660E;&#x548C;&#x51FD;&#x6570;&#x58F0;&#x660E;&#x4E0D;&#x540C;&#x7684;&#x4E00;&#x70B9;&#x662F;&#xFF0C;&#x51FD;&#x6570;&#x58F0;&#x660E;&#x5B58;&#x5728;<a href="/en-US/docs/Glossary/Hoisting" class="glossaryLink" title="&#x53D8;&#x91CF;&#x63D0;&#x5347;: Hoisting is a term you will&#xA0;not find in the JavaScript docs. Hoisting was thought up as&#xA0;a general way of thinking about how execution context (specifically the creation and execution phases) work in JavaScript. But, hoisting can lead to misunderstandings. For example, hoisting teaches that variable and function declarations are physically moved to the top your coding, but this is not what happens at all. What does happen is the variable and function&#xA0;declarations are put into memory during the compile phase, but stays exactly where you typed it in your coding.">&#x53D8;&#x91CF;&#x63D0;&#x5347;</a>&#x73B0;&#x8C61;&#xFF0C;&#x800C;&#x7C7B;&#x58F0;&#x660E;&#x4E0D;&#x4F1A;&#x3002;&#x4E5F;&#x5C31;&#x662F;&#x8BF4;&#xFF0C;&#x4F60;&#x5FC5;&#x987B;&#x5148;&#x58F0;&#x660E;&#x7C7B;&#xFF0C;&#x7136;&#x540E;&#x624D;&#x80FD;&#x4F7F;&#x7528;&#x5B83;&#xFF0C;&#x5426;&#x5219;&#x4EE3;&#x7801;&#x4F1A;&#x629B;&#x51FA; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError" title="ReferenceError&#xFF08;&#x5F15;&#x7528;&#x9519;&#x8BEF;&#xFF09; &#x5BF9;&#x8C61;&#x8868;&#x660E;&#x4E00;&#x4E2A;&#x4E0D;&#x5B58;&#x5728;&#x7684;&#x53D8;&#x91CF;&#x88AB;&#x5F15;&#x7528;&#x3002;"><code>ReferenceError</code></a> &#x5F02;&#x5E38;&#xFF0C;&#x50CF;&#x4E0B;&#x9762;&#x8FD9;&#x6837;&#xFF1A;</p>

<pre class="brush: js example-bad">var p = new Polygon(); // ReferenceError

class Polygon {}
</pre>

<h3 id="&#x7C7B;&#x8868;&#x8FBE;&#x5F0F;">&#x7C7B;&#x8868;&#x8FBE;&#x5F0F;</h3>

<p>&#x7C7B;&#x8868;&#x8FBE;&#x5F0F;&#x662F;&#x5B9A;&#x4E49;&#x7C7B;&#x7684;&#x53E6;&#x5916;&#x4E00;&#x79CD;&#x65B9;&#x5F0F;&#x3002;&#x5728;&#x7C7B;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#xFF0C;&#x7C7B;&#x540D;&#x662F;&#x53EF;&#x6709;&#x53EF;&#x65E0;&#x7684;&#x3002;&#x5982;&#x679C;&#x5B9A;&#x4E49;&#x4E86;&#x7C7B;&#x540D;&#xFF0C;&#x5219;&#x8BE5;&#x7C7B;&#x540D;&#x53EA;&#x6709;&#x5728;&#x7C7B;&#x4F53;&#x5185;&#x90E8;&#x624D;&#x80FD;&#x8BBF;&#x95EE;&#x5230;&#x3002;</p>

<pre class="brush: js">// &#x533F;&#x540D;&#x7684;
var Polygon = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// &#x547D;&#x540D;&#x7684;
var Polygon = class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
</pre>

<p><strong>&#x6CE8;&#x610F;:</strong>&#xA0;&#x7C7B;&#x8868;&#x8FBE;&#x5F0F;&#x548C;&#x7C7B;&#x58F0;&#x660E;&#x4E00;&#x6837;&#x4E5F;&#x4E0D;&#x4F1A;&#x6709;&#x63D0;&#x5347;&#x7684;&#x73B0;&#x8C61;&#x3002;</p>

<h2 id="&#x7C7B;&#x4F53;&#x548C;&#x65B9;&#x6CD5;&#x5B9A;&#x4E49;">&#x7C7B;&#x4F53;&#x548C;&#x65B9;&#x6CD5;&#x5B9A;&#x4E49;</h2>

<p>&#x7C7B;&#x7684;&#x6210;&#x5458;&#x9700;&#x8981;&#x5B9A;&#x4E49;&#x5728;&#x4E00;&#x5BF9;&#x82B1;&#x62EC;&#x53F7; <code>{}</code> &#x91CC;&#xFF0C;&#x82B1;&#x62EC;&#x53F7;&#x91CC;&#x7684;&#x4EE3;&#x7801;&#x548C;&#x82B1;&#x62EC;&#x53F7;&#x672C;&#x8EAB;&#x7EC4;&#x6210;&#x4E86;&#x7C7B;&#x4F53;&#x3002;&#x7C7B;&#x6210;&#x5458;&#x5305;&#x62EC;&#x7C7B;&#x6784;&#x9020;&#x5668;&#x548C;&#x7C7B;&#x65B9;&#x6CD5;&#xFF08;&#x5305;&#x62EC;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#x548C;&#x5B9E;&#x4F8B;&#x65B9;&#x6CD5;&#xFF09;&#x3002;</p>

<h3 id="&#x4E25;&#x683C;&#x6A21;&#x5F0F;">&#x4E25;&#x683C;&#x6A21;&#x5F0F;</h3>

<p>&#x7C7B;&#x4F53;&#x4E2D;&#x7684;&#x4EE3;&#x7801;&#x90FD;&#x5F3A;&#x5236;&#x5728;<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode">&#x4E25;&#x683C;&#x6A21;&#x5F0F;</a>&#x4E2D;&#x6267;&#x884C;&#x3002;</p>

<h3 id="&#x6784;&#x9020;&#x5668;">&#x6784;&#x9020;&#x5668;</h3>

<p><a href="/zh-CN/docs/Web/JavaScript/Reference/Classes/constructor">&#x6784;&#x9020;&#x5668;</a>&#x65B9;&#x6CD5;&#x662F;&#x4E00;&#x4E2A;&#x7279;&#x6B8A;&#x7684;&#x7C7B;&#x65B9;&#x6CD5;&#xFF0C;&#x5176;&#x7528;&#x4E8E;&#x521B;&#x5EFA;&#x548C;&#x521D;&#x59CB;&#x5316;&#x5BF9;&#x8C61;&#xFF08;&#x7528;&#x8BE5;&#x7C7B;&#x751F;&#x6210;&#x7684;&#xFF09;&#x3002;&#x4E00;&#x4E2A;&#x7C7B;&#x53EA;&#x80FD;&#x62E5;&#x6709;&#x4E00;&#x4E2A;&#x540D;&#x4E3A; <code>constructor</code> &#x7684;&#x65B9;&#x6CD5;&#xFF0C;&#x5426;&#x5219;&#x4F1A;&#x629B;&#x51FA; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError" title="SyntaxError&#xA0;&#x5BF9;&#x8C61;&#x4EE3;&#x8868;&#x5C1D;&#x8BD5;&#x89E3;&#x6790;&#x8BED;&#x6CD5;&#x4E0A;&#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x4EE3;&#x7801;&#x7684;&#x9519;&#x8BEF;&#x3002;"><code>SyntaxError</code></a> &#x5F02;&#x5E38;&#x3002;</p>

<p>&#x5728;&#x5B50;&#x7C7B;&#x7684;&#x6784;&#x9020;&#x5668;&#x4E2D;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; <code>super</code> &#x5173;&#x952E;&#x5B57;&#x8C03;&#x7528;&#x7236;&#x7C7B;&#x7684;&#x6784;&#x9020;&#x5668;&#x3002;</p>

<h3 id="&#x539F;&#x578B;&#x65B9;&#x6CD5;">&#x539F;&#x578B;&#x65B9;&#x6CD5;</h3>

<p>&#x53C2;&#x89C1;<a href="/zh-CN/docs/Web/JavaScript/Reference/Functions/Method_definitions">&#x65B9;&#x6CD5;&#x5B9A;&#x4E49;</a>&#x3002;</p>

<pre class="brush: js">class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  
  get area() {
    return this.calcArea()
  }

  calcArea() {
    return this.height * this.width;
  }
}
const square = new Polygon(10, 10);

// 100
console.log(square.area);</pre>

<h3 id="&#x9759;&#x6001;&#x65B9;&#x6CD5;">&#x9759;&#x6001;&#x65B9;&#x6CD5;</h3>

<p><code><a href="/zh-CN/docs/Web/JavaScript/Reference/Classes/static">static</a></code> &#x5173;&#x952E;&#x5B57;&#x7528;&#x6765;&#x5B9A;&#x4E49;&#x7C7B;&#x7684;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#x3002;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#x662F;&#x6307;&#x90A3;&#x4E9B;&#x4E0D;&#x9700;&#x8981;&#x5BF9;&#x7C7B;&#x8FDB;&#x884C;<a href="/zh-CN/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#The_object_(class_instance)">&#x5B9E;&#x4F8B;&#x5316;</a>&#xFF0C;&#x4F7F;&#x7528;&#x7C7B;&#x540D;&#x5C31;&#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x8BBF;&#x95EE;&#x7684;&#x65B9;&#x6CD5;&#xFF0C;&#x9700;&#x8981;&#x6CE8;&#x610F;&#x7684;&#x662F;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#x4E0D;&#x80FD;&#x88AB;&#x5B9E;&#x4F8B;&#x5316;&#x7684;&#x5BF9;&#x8C61;&#x8C03;&#x7528;&#x3002;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#x7ECF;&#x5E38;&#x7528;&#x6765;&#x4F5C;&#x4E3A;&#x5DE5;&#x5177;&#x51FD;&#x6570;&#x3002;</p>

<pre class="brush: js">class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.sqrt(dx*dx + dy*dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));
</pre>

<h2 id="&#x4F7F;&#x7528;_extends_&#x521B;&#x5EFA;&#x5B50;&#x7C7B;">&#x4F7F;&#x7528; <code>extends</code> &#x521B;&#x5EFA;&#x5B50;&#x7C7B;</h2>

<p><code><a href="/zh-CN/docs/Web/JavaScript/Reference/Classes/extends">extends</a></code> &#x5173;&#x952E;&#x5B57;&#x53EF;&#x4EE5;&#x7528;&#x5728;&#x7C7B;&#x58F0;&#x660E;&#x6216;&#x8005;&#x7C7B;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#x6765;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x7EE7;&#x627F;&#x4E86;&#x67D0;&#x4E2A;&#x7C7B;&#x7684;&#x5B50;&#x7C7B;&#x3002;</p>

<pre class="brush: js">class Animal { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + &apos; makes a noise.&apos;);
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + &apos; barks.&apos;);
  }
}

var d = new Dog(&apos;Mitzie&apos;);
// &apos;Mitzie barks.&apos;
d.speak();
</pre>

<p><code>&#x540C;&#x6837;&#x4E5F;&#x53EF;&#x4EE5;&#x7528;&#x4E8E;&#x539F;&#x6709;&#x7684;&#x539F;&#x578B;&#x7EE7;&#x627F;&#x7684;&#x201C;&#x7C7B;&#x201D;&#xFF1A;</code></p>

<pre class="brush: js">function Animal (name) {
  this.name = name;  
}
Animal.prototype.speak = function () {
  console.log(this.name + &apos; makes a noise.&apos;);
}

class Dog extends Animal {
  speak() {
    super.speak();
    console.log(this.name + &apos; barks.&apos;);
  }
}

var d = new Dog(&apos;Mitzie&apos;);
d.speak();</pre>

<p>&#x9700;&#x8981;&#x6CE8;&#x610F;&#x7684;&#x662F;&#x7C7B;&#x4E0D;&#x80FD;&#x7EE7;&#x627F;&#x4E00;&#x822C;&#xFF08;&#x975E;&#x6784;&#x9020;&#x7684;&#xFF09;&#x5BF9;&#x8C61;&#x3002;&#x5982;&#x679C;&#x4F60;&#x60F3;&#x8981;&#x521B;&#x5EFA;&#x7684;&#x7C7B;&#x7EE7;&#x627F;&#x67D0;&#x4E2A;&#x4E00;&#x822C;&#x5BF9;&#x8C61;&#x7684;&#x8BDD;&#xFF0C;&#x4F60;&#x8981;&#x4F7F;&#x7528;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf" title="&#x5C06;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;(&#x5373;&#x5BF9;&#x8C61;&#x7684;[[Prototype]]&#x5185;&#x90E8;&#x5C5E;&#x6027;)&#x8BBE;&#x7F6E;&#x4E3A;&#x53E6;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x6216;&#x8005;null&#x3002;"><code>Object.setPrototypeOf()</code></a>&#xFF1A;</p>

<pre class="brush: js">var Animal = {
  speak() {
    console.log(this.name + &apos; makes a noise.&apos;);
  }
};

class Dog {
  constructor(name) {
    this.name = name;
  }
  speak() {
    super.speak();
    console.log(this.name + &apos; barks.&apos;);
  }
}
Object.setPrototypeOf(Dog.prototype, Animal);

var d = new Dog(&apos;Mitzie&apos;);
d.speak();</pre>

<h2 id="Species">Species</h2>

<p>&#x4F60;&#x53EF;&#x80FD;&#x60F3;&#x8981;&#x6570;&#x7EC4;&#x7C7B;&#xA0;<code>MyArray</code> &#x8FD4;&#x56DE;&#x7684;&#x662F;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Array" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Array</code></a> &#x5BF9;&#x8C61;&#x3002;&#x8FD9;&#x4E2A; species &#x6A21;&#x5F0F;&#x80FD;&#x8BA9;&#x4F60;&#x91CD;&#x5199;&#x9ED8;&#x8BA4;&#x7684;&#x6784;&#x9020;&#x5668;&#x3002;</p>

<p>&#x4F8B;&#x5982;&#xFF0C;&#x5F53;&#x4F7F;&#x7528;&#x50CF;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map" title="map() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7531;&#x539F;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x65B9;&#x6CD5;&#x540E;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x7EC4;&#x6210;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x3002;"><code>map()</code></a> &#x8FD9;&#x6837;&#x7684;&#x65B9;&#x6CD5;&#x6765;&#x8FD4;&#x56DE;&#x9ED8;&#x8BA4;&#x7684;&#x6784;&#x9020;&#x5668;&#x65F6;&#xFF0C;&#x4F60;&#x60F3;&#x8981;&#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x7236;&#x7EA7;&#x7684; <code>Array</code> &#x5BF9;&#x8C61;&#xFF0C;&#x800C;&#x4E0D;&#x662F; <code>MyArray &#x5BF9;&#x8C61;&#x3002;</code><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species" title="Symbol.species&#xA0;&#x662F;&#x6307;&#x5B9A;&#x4E00;&#x4E2A;&#x6784;&#x9020;&#x51FD;&#x6570;&#x521B;&#x5EFA;&#x6D3E;&#x751F;&#x5BF9;&#x8C61;&#x7684;&#x51FD;&#x6570;&#x503C;&#x5C5E;&#x6027;&#x3002;"><code>Symbol.species</code></a> &#x80FD;&#x5B9E;&#x73B0;&#xFF1A;</p>

<pre class="brush: js">class MyArray extends Array {
  // Overwrite species to the parent Array constructor
  static get [Symbol.species]() { return Array; }
}
var a = new MyArray(1,2,3);
var mapped = a.map(x =&gt; x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array);   // true
</pre>

<h2 id="&#x4F7F;&#x7528;_super_&#x5F15;&#x7528;&#x7236;&#x7C7B;">&#x4F7F;&#x7528; <code>super</code>&#xA0;&#x5F15;&#x7528;&#x7236;&#x7C7B;</h2>

<p><code><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/super">super</a></code> &#x5173;&#x952E;&#x5B57;&#x53EF;&#x4EE5;&#x7528;&#x6765;&#x8C03;&#x7528;&#x5176;&#x7236;&#x7C7B;&#x7684;&#x6784;&#x9020;&#x5668;&#x6216;&#x8005;&#x7C7B;&#x65B9;&#x6CD5;</p>

<pre class="brush: js">class Cat { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + &apos; makes a noise.&apos;);
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(this.name + &apos; roars.&apos;);
  }
}
</pre>

<h2 id="Mix-ins">Mix-ins</h2>

<p><span style="font-size: 14px; font-weight: normal;">&#x62BD;&#x8C61;&#x5B50;&#x7C7B;&#x6216;&#x8005;</span><span style="font-size: 14px; font-weight: normal;">&#xA0;</span><em>mix-ins</em><span style="font-size: 14px; font-weight: normal;">&#xA0;&#x662F;&#x7C7B;&#x7684;&#x6A21;&#x677F;&#x3002; &#x4E00;&#x4E2A; ECMAScript &#x7C7B;&#x53EA;&#x80FD;&#x4EC5;&#x6709;&#x4E00;&#x4E2A;&#x7236;&#x7C7B;&#xFF0C;&#x6240;&#x4EE5;&#x60F3;&#x8981;</span><span style="font-size: 14px; font-weight: normal;">&#x4ECE;&#x5DE5;&#x5177;&#x7C7B;&#x6765;&#x591A;&#x91CD;&#x7EE7;&#x627F;&#x7684;&#x884C;&#x4E3A;&#x662F;&#x4E0D;&#x53EF;&#x80FD;&#x7684;&#x3002;&#x5B50;&#x7C7B;&#x7EE7;&#x627F;&#x7684;&#x53EA;&#x80FD;&#x662F;</span><span style="font-size: 14px; font-weight: normal;">&#x7236;&#x7C7B;&#x63D0;&#x4F9B;&#x7684;&#x529F;&#x80FD;&#x6027;</span><span style="font-size: 14px; font-weight: normal;">&#x3002;</span></p>

<p>&#x5728; ECMAScript &#x91CC;&#x4E00;&#x4E2A;&#x5C06;&#x7236;&#x7C7B;&#x4F5C;&#x4E3A;&#x8F93;&#x5165;&#x4E14;&#x5C06;&#x5176;&#x5B50;&#x7C7B;&#x4F5C;&#x4E3A;&#x8F93;&#x51FA;&#x7684;&#x51FD;&#x6570;&#x53EF;&#x4EE5;&#x7528;&#x6765;&#x5B9E;&#x73B0;&#xA0;mix-ins&#xFF1A;</p>

<pre class="brush: js">var calculatorMixin = Base =&gt; class extends Base {
  calc() { }
};

var randomizerMixin = Base =&gt; class extends Base {
  randomize() { }
};</pre>

<p>&#x4F7F;&#x7528; mix-ins &#x7684;&#x7C7B;&#x53EF;&#x4EE5;&#x50CF;&#x4E0B;&#x9762;&#x8FD9;&#x6837;&#x5199;&#xFF1A;</p>

<pre class="brush: js">class Foo { }
class Bar extends calculatorMixin(randomizerMixin(Foo)) { }</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-class-definitions" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Class definitions</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-class-definitions" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Class definitions</small></a></td>
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
   <th>Edge</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>42.0<sup>[1]</sup><br>
    49.0</td>
   <td>45</td>
   <td>13</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>9.0</td>
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
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
   <th>Chrome for Android</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>45</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>9</td>
   <td>42.0<sup>[1]</sup><br>
    49.0</td>
  </tr>
 </tbody>
</table>
</div>

<p>[1] &#x8981;&#x6C42;&#x4F7F;&#x7528;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x3002;&#x975E;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x9700;&#x8981;&#x52FE;&#x9009;&#x542F;&#x7528;&#x5B9E;&#x9A8C;&#x6027;&#x7684; JavaScript&#xFF08;Enable Experimental JavaScript&#xFF09;&#xFF0C;&#x5176;&#x9ED8;&#x8BA4;&#x4E0D;&#x52FE;&#x9009;&#x3002;</p>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Functions">&#x51FD;&#x6570;</a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/class" title="&#x5173;&#x952E;&#x5B57;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x57FA;&#x4E8E;&#x539F;&#x578B;&#x7EE7;&#x627F;&#x7684;&#x65B0;&#x7C7B;(&#x8BD1;&#x8005;&#x6CE8;&#xFF1A;ES6&#x65B0;&#x52A0;&#x5165;&#x7684;class&#x5173;&#x952E;&#x5B57;&#x662F;&#x8BED;&#x6CD5;&#x7CD6;&#xFF0C;&#x672C;&#x8D28;&#x8FD8;&#x662F;&#x51FD;&#x6570;)"><code>&#x7C7B;&#x58F0;&#x660E;</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/class" title="&#x7C7B;&#x8868;&#x8FBE;&#x5F0F;&#x662F;&#x7528;&#x6765;&#x5B9A;&#x4E49;&#x7C7B;&#x7684;&#x4E00;&#x79CD;&#x8BED;&#x6CD5;&#x3002;&#x548C;&#x51FD;&#x6570;&#x8868;&#x8FBE;&#x5F0F;&#x76F8;&#x540C;&#x7684;&#x4E00;&#x70B9;&#x662F;&#xFF0C;&#x7C7B;&#x8868;&#x8FBE;&#x5F0F;&#x53EF;&#x4EE5;&#x662F;&#x547D;&#x540D;&#x4E5F;&#x53EF;&#x4EE5;&#x662F;&#x533F;&#x540D;&#x7684;&#x3002;&#x5982;&#x679C;&#x662F;&#x547D;&#x540D;&#x7C7B;&#x8868;&#x8FBE;&#x5F0F;&#xFF0C;&#x8FD9;&#x4E2A;&#x540D;&#x5B57;&#x53EA;&#x80FD;&#x5728;&#x7C7B;&#x4F53;&#x5185;&#x90E8;&#x624D;&#x80FD;&#x8BBF;&#x95EE;&#x5230;&#x3002;JavaScript &#x7684;&#x7C7B;&#x4E5F;&#x662F;&#x57FA;&#x4E8E;&#x539F;&#x578B;&#x7EE7;&#x627F;&#x7684;&#x3002;"><code>&#x7C7B;&#x8868;&#x8FBE;&#x5F0F;</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/super" title="super&#xA0;&#x5173;&#x952E;&#x5B57;&#x7528;&#x4E8E;&#x8BBF;&#x95EE;&#x7236;&#x5BF9;&#x8C61;&#x4E0A;&#x7684;&#x51FD;&#x6570;&#x3002;"><code>super</code></a></li>
 <li><a href="https://hacks.mozilla.org/2015/07/es6-in-depth-classes/" class="external">Blog post: &quot;ES6 In Depth: Classes&quot;</a></li>
</ul>
                  
                
              