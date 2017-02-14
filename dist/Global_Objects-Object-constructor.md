
                
                  
                    <p></p><section id="Quick_Links" class="Quick_links"><!-- --></section><p></p>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5411;&#x521B;&#x5EFA;&#x4E86;&#x8BE5;&#x5BF9;&#x8C61;&#x539F;&#x578B;&#x7684;&#x51FD;&#x6570;&#x5F15;&#x7528;&#x3002;&#x9700;&#x8981;&#x6CE8;&#x610F;&#x7684;&#x662F;&#xFF0C;&#x8BE5;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x662F;&#x90A3;&#x4E2A;&#x51FD;&#x6570;&#x672C;&#x8EAB;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x51FD;&#x6570;&#x540D;&#x79F0;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x5BF9;&#x4E8E;&#x539F;&#x59CB;&#x503C;&#xFF08;&#x5982;1&#xFF0C;<code>true</code> &#x6216; &quot;<code>test</code>&quot;&#xFF09;&#xFF0C;&#x8BE5;&#x5C5E;&#x6027;&#x4E3A;&#x53EA;&#x8BFB;&#x3002;</p>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x6240;&#x6709;&#x5BF9;&#x8C61;&#x90FD;&#x4F1A;&#x4ECE;&#x5B83;&#x7684;&#x539F;&#x578B;&#x4E0A;&#x7EE7;&#x627F;&#x4E00;&#x4E2A; <code>constructor</code> &#x5C5E;&#x6027;&#xFF1A;</p>

<pre class="brush:js">var o = new Object // &#x6216;&#x8005; o = {}
o.constructor == Object
var a = new Array  // &#x6216;&#x8005; a = []
a.constructor == Array
var n = new Number(3)
n.constructor == Number</pre>

<p>&#x5373;&#x4F7F;&#x4E00;&#x4E9B;DOM&#x5BF9;&#x8C61;&#x5E76;&#x4E0D;&#x662F;&#x4F60;&#x7528;&#x6784;&#x9020;&#x51FD;&#x6570;&#x751F;&#x6210;&#x7684;&#xFF0C;&#x4F46;&#x4F60;&#x4ECD;&#x7136;&#x53EF;&#x4EE5;&#x5C06;&#x5B83;&#x4EEC;&#x4E0E;&#x5BF9;&#x5E94;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;&#x8FDB;&#x884C;&#x6BD4;&#x8F83;&#x3002;&#x6BD4;&#x5982;&#xFF1A;</p>

<pre class="brush:js">document.constructor == Document;
document.form3.constructor == Form;</pre>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<h3 name="Example:_Displaying_the_constructor_of_an_object" id="Example:_Displaying_the_constructor_of_an_object">&#x4F8B;1: &#x6253;&#x5370;&#x51FA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;</h3>

<p>&#x4E0B;&#x4F8B;&#x9996;&#x5148;&#x521B;&#x5EFA;&#x4E86;&#x4E00;&#x4E2A;&#x6784;&#x9020;&#x539F;&#x578B;&#xFF08;&#x5373;&#x6784;&#x9020;&#x51FD;&#x6570;&#xFF09;<code>Tree&#xA0;</code>&#x548C;&#x8BE5;&#x539F;&#x578B;&#x7684;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#xA0;<code>theTree</code>&#x3002;&#x63A5;&#x7740;&#x6253;&#x5370;&#x51FA;&#x4E86;&#x5BF9;&#x8C61; <code>theTree </code>&#x7684; <code>constructor </code>&#x5C5E;&#x6027;&#x3002;</p>

<pre class="brush:js">function Tree(name) {
   this.name = name;
}

var theTree = new Tree(&quot;Redwood&quot;);
console.log( &quot;theTree.constructor is &quot; + theTree.constructor );</pre>

<p>&#x6253;&#x5370;&#x8F93;&#x51FA;&#xFF1A;</p>

<pre class="brush:js">theTree.constructor is function Tree(name) {
    this.name = name;
}</pre>

<h3 name="Example:_Changing_the_constructor_of_an_object" id="Example:_Changing_the_constructor_of_an_object">&#x4F8B;2: &#x6539;&#x53D8;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;constructor&#x5C5E;&#x6027;&#x7684;&#x503C;</h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x5C55;&#x793A;&#x4E86;&#x5982;&#x4F55;&#x4FEE;&#x6539;&#x57FA;&#x672C;&#x7C7B;&#x578B;&#x5BF9;&#x8C61;&#x7684; constructor &#x5C5E;&#x6027;&#x7684;&#x503C;&#x3002;&#x53EA;&#x6709; true, 1 &#x548C; &quot;test&quot; &#x7684;&#x4E0D;&#x53D7;&#x5F71;&#x54CD;&#xFF0C;&#x56E0;&#x4E3A;&#x521B;&#x5EFA;&#x4ED6;&#x4EEC;&#x7684;&#x662F;&#x53EA;&#x8BFB;&#x7684;&#x539F;&#x751F;&#x6784;&#x9020;&#x51FD;&#x6570;&#xFF08;native constructors&#xFF09;&#x3002;&#x8FD9;&#x4E2A;&#x4F8B;&#x5B50;&#x4E5F;&#x8BF4;&#x660E;&#x4E86;&#x4F9D;&#x8D56;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684; constructor &#x5C5E;&#x6027;&#x5E76;&#x4E0D;&#x5B89;&#x5168;&#x3002;</p>

<pre class="brush:js">function Type() { };

var	types = [
	new Array,
<span style="font-size: 1rem;">	</span>[],
	new Boolean,
<span style="font-size: 1rem;">	</span>true,        // remains unchanged
	new Date,
	new Error,
	new Function,
	function(){},
	Math,	
	new Number,
	1,           <span style="font-size: 1rem;">// remains unchanged</span>
	new Object,
	{},
	new RegExp,
	/(?:)/,
	new String,
	&quot;test&quot;       // remains unchanged
];

for(var i = 0; i &lt; types.length; i++) {
	types[i].constructor = Type;
	types[i] = [ types[i].constructor, types[i] instanceof Type, types[i].toString() ];
};

console.log( types.join(&quot;\n&quot;) );</pre>

<h2 id="&#x89C4;&#x8303;" style="margin-bottom: 20px; line-height: 30px;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x7248;&#x672C;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x89E3;</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition. Implemented in JavaScript 1.1</td>
   <td>Standard</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.2.4.1" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Objectprototype.constructor</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-object.prototype.constructor" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Object.prototype.constructor</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;" style="margin-bottom: 20px; line-height: 30px;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
   <th style="line-height: 16px;">Feature</th>
   <th style="line-height: 16px;">Chrome</th>
   <th style="line-height: 16px;">Firefox (Gecko)</th>
   <th style="line-height: 16px;">Internet Explorer</th>
   <th style="line-height: 16px;">Opera</th>
   <th style="line-height: 16px;">Safari</th>
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
</div>

<div id="compat-mobile">
<table class="compat-table">
 <tbody>
  <tr>
   <th style="line-height: 16px;">Feature</th>
   <th style="line-height: 16px;">Android</th>
   <th style="line-height: 16px;">Chrome for Android</th>
   <th style="line-height: 16px;">Firefox Mobile (Gecko)</th>
   <th style="line-height: 16px;">IE Mobile</th>
   <th style="line-height: 16px;">Opera Mobile</th>
   <th style="line-height: 16px;">Safari Mobile</th>
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
</div>

<p>&#xA0;</p>
                  
                
              