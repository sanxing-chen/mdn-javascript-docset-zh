
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><strong><code>extends</code></strong>&#x5173;&#x952E;&#x8BCD;&#x88AB;&#x7528;&#x5728;<a href="/en-US/docs/Web/JavaScript/Reference/Statements/class">&#x7C7B;&#x58F0;&#x660E;</a>&#x6216;&#x8005;<a href="/en-US/docs/Web/JavaScript/Reference/Operators/class">&#x7C7B;&#x8868;&#x8FBE;&#x5F0F;</a>&#x4E0A;&#xFF0C;&#x4EE5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x7C7B;&#x7684;&#x5B50;&#x7C7B;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">class ChildClass extends ParentClass { ... }</pre>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>extends</code>&#x5173;&#x952E;&#x8BCD;&#x7528;&#x6765;&#x96C6;&#x6210;&#x4E00;&#x4E2A;&#x666E;&#x901A;&#x7C7B;&#x4EE5;&#x53CA;&#x5185;&#x5EFA;&#x5BF9;&#x8C61;&#x3002;</p>

<p><code><font face="Open Sans, Arial, sans-serif">&#x6269;&#x5C55;&#x7684;</font>.prototype&#x5FC5;&#x987B;&#x662F;&#x4E00;&#x4E2A;</code><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object &#x6784;&#x9020;&#x51FD;&#x6570;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5305;&#x88C5;&#xFF08;object wrapper&#xFF09;&#x3002;"><code>Object</code></a> &#x6216;&#x8005; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null" title="&#x503C;&#xA0;null&#xA0;&#x662F;&#x4E00;&#x4E2A; JavaScript &#x5B57;&#x9762;&#x91CF;&#xFF0C;&#x8868;&#x793A;&#x7A7A;&#x503C;&#xFF08;null or an &quot;empty&quot; value&#xFF09;&#xFF0C;&#x5373;&#x6CA1;&#x6709;&#x5BF9;&#x8C61;&#x88AB;&#x5448;&#x73B0;&#xFF08;no object value is present&#xFF09;&#x3002;&#x5B83;&#x662F; JavaScript &#x539F;&#x59CB;&#x503C; &#x4E4B;&#x4E00;&#x3002;"><code>null</code></a>&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;_extends">&#x4F7F;&#x7528;&#xA0;<code>extends</code></h3>

<p>&#x7B2C;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x662F;&#x6839;&#x636E;&#x540D;&#x4E3A;&#xA0;<code style="font-style: normal;">Polygon &#x7C7B;</code>&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x540D;&#x4E3A;<code>Square&#x7684;&#x7C7B;&#x3002;</code>&#xA0;&#x4F60;&#x53EF;&#x4EE5;&#x4ECE;<a href="https://googlechrome.github.io/samples/classes-es6/index.html" class="external">&#x5B9E;&#x6218;&#x6F14;&#x793A;</a>&#x770B;&#x5230;&#x8FD9;&#x4E2A;&#x4F8B;&#x5B50;&#x3002;</p>

<pre class="brush: js">class Square extends Polygon {
  constructor(length) {
    // &#x8FD9;&#x91CC;&#x628A;length&#x4F20;&#x53C2;&#x7ED9;&#x7236;&#x7C7B;&#x7684;&#x6784;&#x9020;&#x65B9;&#x6CD5;
    // &#x4F5C;&#x4E3A;&#x7236;&#x7C7B;Polygon&#x7684;&#x5BBD;&#x548C;&#x9AD8;
    super(length, length);
    // &#x5907;&#x6CE8;&#xFF1A;&#x5728;&#x884D;&#x751F;&#x7C7B;&#x4E2D;&#x4F7F;&#x7528;this&#x524D;&#x5FC5;&#x987B;&#x5148;&#x8C03;&#x7528;super()&#x65B9;&#x6CD5;
    // &#x5FFD;&#x89C6;&#x8FD9;&#x4E00;&#x70B9;&#x5C06;&#x4F1A;&#x5BFC;&#x81F4;&#x4E00;&#x4E2A;&#x5F15;&#x7528;&#x9519;&#x8BEF;
    this.name = &apos;Square&apos;;
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.area = value;
  } 
}</pre>

<h3 id="&#x4F7F;&#x7528;_extends_&#x6269;&#x5C55;&#x5185;&#x5EFA;&#x5BF9;&#x8C61;">&#x4F7F;&#x7528;&#xA0;<code>extends &#x6269;&#x5C55;&#x5185;&#x5EFA;&#x5BF9;&#x8C61;</code></h3>

<p>&#x8FD9;&#x4E2A;&#x793A;&#x4F8B;&#x7EE7;&#x627F;&#x4E86;<a href="/zh-CN/docs/Web/JavaScript/Reference/Date" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Date</code></a> &#x5BF9;&#x8C61;&#x3002;&#xA0;&#x4F60;&#x53EF;&#x4EE5;&#x4ECE;<a href="https://googlechrome.github.io/samples/classes-es6/index.html" class="external">&#x5B9E;&#x6218;&#x6F14;&#x793A;</a>&#x770B;&#x5230;&#x8FD9;&#x4E2A;&#x4F8B;&#x5B50;&#x3002;</p>

<pre class="brush: js">class myDate extends Date {
  constructor() {|
    super();
  }

  getFormattedDate() {
    var months = [&apos;Jan&apos;,&apos;Feb&apos;,&apos;Mar&apos;,&apos;Apr&apos;,&apos;May&apos;,&apos;Jun&apos;,&apos;Jul&apos;,&apos;Aug&apos;,&apos;Sep&apos;,&apos;Oct&apos;,&apos;Nov&apos;,&apos;Dec&apos;];
    return this.getDate() + &quot;-&quot; + months[this.getMonth()] + &quot;-&quot; + this.getFullYear();
  }
}</pre>

<h3 id="&#x6269;&#x5C55;_null"><code><font face="Open Sans, Arial, sans-serif">&#x6269;&#x5C55;&#xA0;</font>null</code></h3>

<p>&#x53EF;&#x4EE5;&#x50CF;&#x6269;&#x5C55;&#x666E;&#x901A;&#x7C7B;&#x4E00;&#x6837;&#x6269;&#x5C55;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null" title="&#x503C;&#xA0;null&#xA0;&#x662F;&#x4E00;&#x4E2A; JavaScript &#x5B57;&#x9762;&#x91CF;&#xFF0C;&#x8868;&#x793A;&#x7A7A;&#x503C;&#xFF08;null or an &quot;empty&quot; value&#xFF09;&#xFF0C;&#x5373;&#x6CA1;&#x6709;&#x5BF9;&#x8C61;&#x88AB;&#x5448;&#x73B0;&#xFF08;no object value is present&#xFF09;&#x3002;&#x5B83;&#x662F; JavaScript &#x539F;&#x59CB;&#x503C; &#x4E4B;&#x4E00;&#x3002;"><code>null</code></a>&#xFF0C;&#x4F46;&#x662F;&#x65B0;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;&#x5C06;&#x4E0D;&#x4F1A;&#x7EE7;&#x627F;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype" title="Object.prototype &#x5C5E;&#x6027;&#x8868;&#x793A;&#x5BF9;&#x8C61; Object &#x7684;&#x539F;&#x578B;&#x5BF9;&#x8C61;&#x3002;"><code>Object.prototype</code></a>.</p>

<pre class="brush: js"><code>class nullExtends extends null {
  constructor() {}
}

Object.getPrototypeOf(nullExtends); // Function.prototype
Object.getPrototypeOf(nullExtends.prototype) // null</code></pre>

<h2 id="&#x8BE6;&#x8FF0;">&#x8BE6;&#x8FF0;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x8BE6;&#x8FF0;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x91CA;</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-class-definitions" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">extends</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x6700;&#x521D;&#x7684;&#x5B9A;&#x4E49;</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-class-definitions" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">extends</small></a></td>
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
   <th>&#x7279;&#x6027;</th>
   <th>Chrome</th>
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>&#x57FA;&#x672C;&#x652F;&#x6301;</td>
   <td>42.0</td>
   <td>&#x4EC5;&#x5728;&#x591C;&#x95F4;&#x9891;&#x9053;&#xFF08;<span style="font-size: 12px; line-height: 18px;">Nightly channel</span>&#xFF09;&#x53EF;&#x7528;<span style="font-size: 12px; line-height: 18px;">&#xFF08;</span>&#x81EA;2015&#x5E74;3&#x6708;<span style="font-size: 12px; line-height: 18px;">&#xFF09;</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
  <tr>
   <td>&#x6570;&#x7EC4;&#x7684;&#x5B50;&#x7C7B;</td>
   <td>43.0</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
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
   <th><span style="font-family: open sans light,helvetica,arial,sans-serif; font-size: 16px; line-height: 16px;">&#x7279;&#x6027;</span></th>
   <th>Android</th>
   <th>Android Webview</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
   <th>Chrome for Android</th>
  </tr>
  <tr>
   <td><span style="font-size: 12px; line-height: 18px;">&#x57FA;&#x672C;&#x652F;&#x6301;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>42.0</td>
   <td><span style="font-size: 12px; line-height: 18px;">&#x4EC5;&#x5728;&#x591C;&#x95F4;&#x9891;&#x9053;&#xFF08;</span><span style="font-size: 12px; line-height: 18px;">Nightly channel</span><span style="font-size: 12px; line-height: 18px;">&#xFF09;&#x53EF;&#x7528;</span><span style="font-size: 12px; line-height: 18px;">&#xFF08;</span><span style="font-size: 12px; line-height: 18px;">&#x81EA;2015&#x5E74;3&#x6708;</span><span style="font-size: 12px; line-height: 18px;">&#xFF09;</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>42.0</td>
  </tr>
  <tr>
   <td><span style="font-size: 12px; line-height: 18px;">&#x6570;&#x7EC4;&#x7684;&#x5B50;&#x7C7B;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>43.0</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>43.0</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x6269;&#x5C55;&#x9605;&#x8BFB;">&#x6269;&#x5C55;&#x9605;&#x8BFB;</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Classes">&#x7C7B;</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/super">super</a></li>
</ul>
                  
                
              