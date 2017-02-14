
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>(<strong><code>new</code>&#xA0;operator</strong>) &#x65B0;&#x8FD0;&#x7B97;&#x7B26;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x7528;&#x6237;&#x5B9A;&#x4E49;&#x7684;&#x5BF9;&#x8C61;&#x7C7B;&#x578B;&#x7684;&#x5B9E;&#x4F8B;&#x6216;&#x5177;&#x6709;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x5185;&#x7F6E;&#x5BF9;&#x8C61;&#x7C7B;&#x578B;&#x4E4B;&#x4E00;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>new <em>constructor</em>[([<em>arguments</em>])]</code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>&#x6784;&#x9020;&#x51FD;&#x6570;(constructor)</code></dt>
 <dd><font face="Courier New, Andale Mono, monospace">&#x4E00;&#x4E2A;</font>&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x5B9E;&#x4F8B;&#x7684;&#x7C7B;&#x578B;&#x7684;&#x51FD;&#x6570;&#x3002;<font face="Courier New, Andale Mono, monospace">&#x3002;</font></dd>
</dl>

<dl>
 <dt><code>&#x4F20;&#x53C2;(arguments)</code></dt>
 <dd>&#x4E00;&#x4E2A;&#x7528;&#x6765;&#x88AB;&#x6784;&#x9020;&#x51FD;&#x6570;&#x8C03;&#x7528;&#x7684;&#x53C2;&#x6570;&#x5217;&#x8868;&#x3002;</dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#x5BF9;&#x8C61;&#x9700;&#x8981;&#x4E24;&#x6B65;&#xFF1A;</p>

<ol>
 <li>&#x5B9A;&#x4E49;&#x6784;&#x9020;&#x51FD;&#x6570;&#x3002;</li>
 <li>&#x901A;&#x8FC7;new&#x6765;&#x521B;&#x5EFA;&#x5BF9;&#x8C61;&#x5B9E;&#x4F8B;&#x3002;</li>
</ol>

<p>&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7C7B;&#x578B;&#x9700;&#x8981;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x4E86;&#x540D;&#x79F0;&#x548C;&#x5C5E;&#x6027;&#x7684;&#x51FD;&#x6570;&#xFF1B;&#x5176;&#x4E2D;&#x8FD9;&#x4E9B;&#x5C5E;&#x6027;&#x53EF;&#x4EE5;&#x6307;&#x5411;&#x5B83;&#x672C;&#x8EAB;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x6307;&#x5411;&#x5176;&#x4ED6;&#x5BF9;&#x8C61;&#xFF0C;&#x770B;&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#xFF1A;</p>

<p>&#x5F53;&#x4EE3;&#x7801;&#xA0;<code>new <em>foo</em>(...)</code>&#xA0;&#x6267;&#x884C;&#x65F6;&#xFF1A;</p>

<ol>
 <li>&#x4E00;&#x4E2A;&#x65B0;&#x5BF9;&#x8C61;&#x88AB;&#x521B;&#x5EFA;&#x3002;&#x5B83;&#x7EE7;&#x627F;&#x81EA;<code><em>foo</em>.prototype</code>.</li>
 <li>&#x6784;&#x9020;&#x51FD;&#x6570;&#xA0;<code><em>foo</em></code>&#xA0;&#x88AB;&#x6267;&#x884C;&#x3002;&#x6267;&#x884C;&#x7684;&#x65F6;&#x5019;&#xFF0C;&#x76F8;&#x5E94;&#x7684;&#x4F20;&#x53C2;&#x4F1A;&#x88AB;&#x4F20;&#x5165;&#xFF0C;&#x540C;&#x65F6;&#x4E0A;&#x4E0B;&#x6587;(<code>this)&#x4F1A;&#x88AB;&#x6307;&#x5B9A;&#x4E3A;&#x8FD9;&#x4E2A;&#x65B0;&#x5B9E;&#x4F8B;&#x3002;</code><code>new <em>foo</em></code>&#xA0;&#x7B49;&#x540C;&#x4E8E;&#xA0;<code>new <em>foo</em>()</code>, &#x53EA;&#x80FD;&#x7528;&#x5728;&#x4E0D;&#x4F20;&#x9012;&#x4EFB;&#x4F55;&#x53C2;&#x6570;&#x7684;&#x60C5;&#x51B5;&#x3002;</li>
 <li>&#x5982;&#x679C;&#x6784;&#x9020;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4E86;&#x4E00;&#x4E2A;&#x201C;&#x5BF9;&#x8C61;&#x201D;&#xFF0C;&#x90A3;&#x4E48;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x4F1A;&#x53D6;&#x4EE3;&#x6574;&#x4E2A;<code>new</code>&#x51FA;&#x6765;&#x7684;&#x7ED3;&#x679C;&#x3002;&#x5982;&#x679C;&#x6784;&#x9020;&#x51FD;&#x6570;&#x6CA1;&#x6709;&#x8FD4;&#x56DE;&#x5BF9;&#x8C61;&#xFF0C;&#x90A3;&#x4E48;<code>new</code>&#x51FA;&#x6765;&#x7684;&#x7ED3;&#x679C;&#x4E3A;&#x6B65;&#x9AA4;1&#x521B;&#x5EFA;&#x7684;&#x5BF9;&#x8C61;&#xFF0C;ps&#xFF1A;&#x4E00;&#x822C;&#x60C5;&#x51B5;&#x4E0B;&#x6784;&#x9020;&#x51FD;&#x6570;&#x4E0D;&#x8FD4;&#x56DE;&#x4EFB;&#x4F55;&#x503C;&#xFF0C;&#x4E0D;&#x8FC7;&#x7528;&#x6237;&#x5982;&#x679C;&#x60F3;&#x8986;&#x76D6;&#x8FD9;&#x4E2A;&#x8FD4;&#x56DE;&#x503C;&#xFF0C;&#x53EF;&#x4EE5;&#x81EA;&#x5DF1;&#x9009;&#x62E9;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x666E;&#x901A;&#x5BF9;&#x8C61;&#x6765;&#x8986;&#x76D6;&#x3002;&#x5F53;&#x7136;&#xFF0C;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x4E5F;&#x4F1A;&#x8986;&#x76D6;&#xFF0C;&#x56E0;&#x4E3A;&#x6570;&#x7EC4;&#x4E5F;&#x662F;&#x5BF9;&#x8C61;&#x3002;</li>
</ol>

<p>&#x4EFB;&#x4F55;&#x60C5;&#x51B5;&#x4E0B;&#x90FD;&#x53EF;&#x4EE5;&#x5BF9;&#x4EFB;&#x610F;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x6DFB;&#x52A0;&#x65B0;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x6BD4;&#x5982;&#xA0;<code>car1.color = &quot;black&quot;</code>&#xA0;&#x8FD9;&#x53E5;&#x4EE3;&#x7801;&#x7ED9;<span style="font-family: courier new,andale mono,monospace; line-height: 1.5;">car1</span><span style="line-height: 1.5;">&#x6DFB;&#x52A0;&#x4E86;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x5C5E;&#x6027;</span><code style="font-style: normal; line-height: 1.5;">color</code><span style="line-height: 1.5;"> </span><span style="line-height: 1.5;">, &#x7136;&#x540E;&#x7ED9;&#x8FD9;&#x4E2A;&#x5C5E;&#x6027;&#x8D4B;&#x503C; &quot;</span><code style="font-style: normal; line-height: 1.5;">black</code><span style="line-height: 1.5;">&quot;&#x3002;&#x7136;&#x800C;&#xFF0C;&#x8FD9;&#x4E2A;&#x64CD;&#x4F5C;&#x4E0D;&#x4F1A;&#x5F71;&#x54CD;&#x4EFB;&#x4F55;&#x5176;&#x4ED6;&#x5BF9;&#x8C61;&#x3002;&#x5982;&#x679C;&#x60F3;&#x7ED9;&#x6240;&#x6709;&#x540C;&#x6837;&#x7C7B;&#x578B;&#x7684;&#x5BF9;&#x8C61;&#x6DFB;&#x52A0;&#x5C5E;&#x6027;&#xFF0C;&#x4F60;&#x9700;&#x8981;&#x7ED9;<code>Car</code>&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x7C7B;&#x578B;&#x6765;&#x6DFB;&#x52A0;&#x5C5E;&#x6027;&#x3002;</span></p>

<p>&#x4F60;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x7ED9;&#xA0;<code style="font-style: normal; line-height: 1.5;"><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype">Function.prototype</a></code><span style="line-height: 1.5;">&#xA0;&#x6DFB;&#x52A0;&#x5C5E;&#x6027;&#x7684;&#x65B9;&#x5F0F;&#x6765;&#x7ED9;&#x6240;&#x6709;&#x5148;&#x524D;&#x5B9A;&#x4E49;&#x7684;&#x5B9E;&#x4F8B;&#x6765;&#x6DFB;&#x52A0;&#x5C5E;&#x6027;&#x3002;&#x8FD9;&#x79CD;&#x5B9A;&#x4E49;&#x5C5E;&#x6027;&#x7684;&#x65B9;&#x5F0F;&#x4F1A;&#x5F71;&#x54CD;&#x5230;&#x6240;&#x6709;&#x901A;&#x8FC7;<code>new</code>&#x6784;&#x9020;&#x51FD;&#x6570;&#x521B;&#x5EFA;&#x7684;&#x5BF9;&#x8C61;&#xFF0C;&#x56E0;&#x4E3A;&#x5B83;&#x4EEC;&#x5171;&#x4EAB;&#x4E86;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x7C7B;&#x578B;&#x3002;&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x7ED9;&#x5B9E;&#x4F8B;car&#x7684;&#x5BF9;&#x8C61;&#x7C7B;&#x578B;&#x6DFB;&#x52A0;&#x4E86;&#x4E00;&#x4E2A;<code>color</code>&#x5C5E;&#x6027;<code>null</code>&#xFF0C;&#x7136;&#x540E;&#x53C8;&#x7ED9;&#x5B9E;&#x4F8B;<code>car1</code>&#x8986;&#x76D6;&#x4E86;</span><code><span style="line-height: 1.5;">color</span></code><span style="line-height: 1.5;">&#x5C5E;&#x6027;&apos;<code>black</code>&apos;&#xFF0C;&#x8BE6;&#x89C1;</span><span style="line-height: 1.5;">&#xA0;</span><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype" style="line-height: 1.5;">prototype</a><span style="line-height: 1.5;">.</span></p>

<pre class="brush: js"> function Car() {}
 car1 = new Car()
 
 alert(car1.color)           // undefined
 
 Car.prototype.color = null
 alert(car1.color)           // null
 
 car1.color = &quot;black&quot;
 alert(car1.color)           // black
</pre>

<h2 name="Examples" id="Examples">&#x4F8B;&#x5B50;</h2>

<h3 name="Example:_Object_type_and_object_instance" id="Example:_Object_type_and_object_instance">&#x4F8B;1&#xFF1A;&#x5BF9;&#x8C61;&#x7C7B;&#x578B;&#x548C;&#x5BF9;&#x8C61;&#x5B9E;&#x4F8B;</h3>

<p>&#x5047;&#x8BBE;&#x4F60;&#x8981;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x6C7D;&#x8F66;&#x7684;&#x5BF9;&#x8C61;&#x7C7B;&#x578B;&#x3002;&#x4F60;&#x5E0C;&#x671B;&#x8FD9;&#x4E2A;&#x7C7B;&#x578B;&#x53EB;&#x505A;car&#xFF0C;&#x8FD9;&#x4E2A;&#x7C7B;&#x578B;&#x5177;&#x5907;make, model, year&#x7B49;&#x5C5E;&#x6027;&#xFF0C;&#x8981;&#x505A;&#x5230;&#x8FD9;&#x4E9B;&#xFF0C;&#x4F60;&#x9700;&#x8981;&#x8FD9;&#x6837;&#x6765;&#x5199;&#x4E2A;&#x6784;&#x9020;&#x51FD;&#x6570;&#xFF1A;</p>

<pre class="brush: js">function car(make, model, year) {
   this.make = make;
   this.model = model;
   this.year = year;
}
</pre>

<p>&#x73B0;&#x5728;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5B9E;&#x4F8B;&#x4E86;&#xFF1A;</p>

<pre class="brush: js">var mycar = new car(&quot;Eagle&quot;, &quot;Talon TSi&quot;, 1993);
</pre>

<p>&#x8FD9;&#x6BB5;&#x4EE3;&#x7801;&#x521B;&#x5EFA;&#x4E86;&#x4E00;&#x4E2A;<code>mycar</code>&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x5B9E;&#x4F8B;&#xFF0C;&#x8FD8;&#x7ED9;&#x5B83;&#x8D4B;&#x4E88;&#x4E86;3&#x4E2A;&#x5C5E;&#x6027;&#xFF0C;&#x73B0;&#x5728;<code>mycar.make</code>&#x7B49;&#x4E8E;&quot;<code>Eagle</code>&quot;&#xFF0C; <code>mycar.year</code> &#x7B49;&#x4E8E;1993&#xFF0C;&#x4EE5;&#x6B64;&#x7C7B;&#x63A8;&#x3002;</p>

<p>&#x4F60;&#x5DF2;&#x7ECF;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;<code>new</code>&#x6765;&#x521B;&#x5EFA;&#x4EFB;&#x610F;&#x4E2A;&#x6C7D;&#x8F66;&#x5BF9;&#x8C61;&#x5B9E;&#x4F8B;&#x4E86;&#xFF1A;</p>

<pre class="brush: js">var kenscar = new car(&quot;Nissan&quot;, &quot;300ZX&quot;, 1992);
</pre>

<h3 name="Example:_Object_property_that_is_itself_another_object" id="Example:_Object_property_that_is_itself_another_object">&#xA0;</h3>

<h3 name="Example:_Object_property_that_is_itself_another_object" id="Example:_Object_property_that_is_itself_another_object"><span style="font-size: 1.71428571428571rem;">&#x4F8B;2: &#x5BF9;&#x8C61;&#x5C5E;&#x6027;&#x4E3A;&#x81EA;&#x8EAB;&#x6216;&#x5176;&#x4ED6;&#x5BF9;&#x8C61;</span></h3>

<p>&#x5047;&#x8BBE;&#x4F60;&#x5B9A;&#x4E49;&#x4E86;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x53EB;&#x505A;<code>person</code>&#xFF1A;</p>

<pre class="brush: js">function person(name, age, sex) {
   this.name = name;
   this.age = age;
   this.sex = sex;
}
</pre>

<p>&#x7136;&#x540E;&#x5B9A;&#x4E49;&#x4E86;&#x4E24;&#x4E2A;&#x5B9E;&#x4F8B;&#xFF1A;</p>

<pre class="brush: js">var rand = new person(&quot;Rand McNally&quot;, 33, &quot;M&quot;);
var ken = new person(&quot;Ken Jones&quot;, 39, &quot;M&quot;);
</pre>

<p>&#x7136;&#x540E;&#x4F60;&#x91CD;&#x5199;&#x4E86;car&#x7684;&#x5B9A;&#x4E49;&#xFF0C;&#x6DFB;&#x52A0;&#x4E86;&#x4E00;&#x4E2A;owner&#x5C5E;&#x6027;&#x6765;&#x6307;&#x5411;&#x4E00;&#x4E2A;person&#x5BF9;&#x8C61;&#x5B9E;&#x4F8B;&#xFF1A;</p>

<pre class="brush: js">function car(make, model, year, owner) {
   this.make = make;
   this.model = model;
   this.year = year;
   this.owner = owner;
}
</pre>

<p>&#x521B;&#x5EFA;&#x5B9E;&#x4F8B;&#x53D8;&#x6210;&#x4E86;&#x8FD9;&#x6837;&#xFF1A;</p>

<pre class="brush: js">var car1 = new car(&quot;Eagle&quot;, &quot;Talon TSi&quot;, 1993, rand);
var car2 = new car(&quot;Nissan&quot;, &quot;300ZX&quot;, 1992, ken);
</pre>

<p>&#x4E0A;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x6CA1;&#x6709;&#x4F20;&#x5B57;&#x7B26;&#x4E32;&#x6216;&#x6570;&#x5B57;&#x8FC7;&#x53BB;&#xFF0C;&#x800C;&#x662F;&#x4F20;&#x4E86;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61; <code>rand</code> &#x548C; <code>ken</code> &#xFF0C;&#x8FD9;&#x4E2A;&#x65F6;&#x5019;&#x53EF;&#x4EE5;&#x8FD9;&#x6837;&#x6765;&#x83B7;&#x53D6;<code>car2</code>&#x7684;&#x62E5;&#x6709;&#x8005;&#x7684;&#x540D;&#x79F0;&#xFF1A;</p>

<pre class="brush: js">car2.owner.name
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table>
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-new-operator" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">The new Operator</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-11.2.2" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">The new Operator</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf#sec-11.2.2" class="external" lang="en" hreflang="en">ECMAScript 3rd Edition (ECMA-262)<br><small lang="zh-CN">The new Operator</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf#sec-11.2.2" class="external" lang="en" hreflang="en">ECMAScript 1st Edition (ECMA-262)<br><small lang="zh-CN">The new Operator</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition. Implemented in JavaScript 1.0.</td>
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

<table>
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
 </tbody>
</table>

<table>
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
 </tbody>
</table>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Function" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Function</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/construct" title="Reflect.construct() &#x65B9;&#x6CD5;&#x7684;&#x884C;&#x4E3A;&#x6709;&#x70B9;&#x50CF;&#xA0;new &#x64CD;&#x4F5C;&#x7B26; &#x6784;&#x9020;&#x51FD;&#x6570;&#xA0;&#xFF0C; &#x76F8;&#x5F53;&#x4E8E;&#x8FD0;&#x884C;&#xA0;new target(...args)."><code>Reflect.construct()</code></a></li>
</ul>
                  
                
              