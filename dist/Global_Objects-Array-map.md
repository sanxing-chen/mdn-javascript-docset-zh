
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p><code><strong>map()</strong></code> &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7531;&#x539F;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x65B9;&#x6CD5;&#x540E;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x7EC4;&#x6210;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<p><code><em>array</em>.map(<em>callback</em>[, <em>thisArg</em>])</code></p>

<h2 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h2>

<dl>
 <dt><code>callback</code></dt>
 <dd>&#x539F;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x7ECF;&#x8FC7;&#x8BE5;&#x65B9;&#x6CD5;&#x540E;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x5143;&#x7D20;&#x3002;
 <dl>
  <dt><code>currentValue</code></dt>
  <dd><code>callback</code> &#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#xFF0C;&#x6570;&#x7EC4;&#x4E2D;&#x5F53;&#x524D;&#x88AB;&#x4F20;&#x9012;&#x7684;&#x5143;&#x7D20;&#x3002;</dd>
  <dt><code>index</code></dt>
  <dd><code>callback</code> &#x7684;&#x7B2C;&#x4E8C;&#x4E2A;&#x53C2;&#x6570;&#xFF0C;&#x6570;&#x7EC4;&#x4E2D;&#x5F53;&#x524D;&#x88AB;&#x4F20;&#x9012;&#x7684;&#x5143;&#x7D20;&#x7684;&#x7D22;&#x5F15;&#x3002;</dd>
  <dt><code>array</code></dt>
  <dd><code>callback</code> &#x7684;&#x7B2C;&#x4E09;&#x4E2A;&#x53C2;&#x6570;&#xFF0C;&#x8C03;&#x7528;&#xA0;<code>map</code>&#xA0;&#x65B9;&#x6CD5;&#x7684;&#x6570;&#x7EC4;&#x3002;</dd>
 </dl>
 </dd>
 <dt><code>thisArg</code></dt>
 <dd>&#x6267;&#x884C;&#xA0;<code>callback</code>&#xA0;&#x51FD;&#x6570;&#x65F6;&#xA0;<code>this</code> &#x6307;&#x5411;&#x7684;&#x5BF9;&#x8C61;&#x3002;</dd>
 <dt>
 <h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

 <p>&#x7531;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x7EC4;&#x6210;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x3002;</p>
 </dt>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p><code>map</code> &#x65B9;&#x6CD5;&#x4F1A;&#x7ED9;&#x539F;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x90FD;&#x6309;&#x987A;&#x5E8F;&#x8C03;&#x7528;&#x4E00;&#x6B21; <code>callback</code> &#x51FD;&#x6570;&#x3002;<code>callback</code> &#x6BCF;&#x6B21;&#x6267;&#x884C;&#x540E;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#xFF08;&#x5305;&#x62EC; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined" title="undefined&#x6709;&#x591A;&#x91CD;&#x89D2;&#x8272;,&#x901A;&#x5E38;&#x60C5;&#x51B5;&#x4E0B;,&#x6211;&#x4EEC;&#x6240;&#x8BF4;&#x7684;undefined&#x90FD;&#x6307;&#x7684;&#x662F;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&quot;undefined&quot;."><code>undefined</code></a>&#xFF09;&#x7EC4;&#x5408;&#x8D77;&#x6765;&#x5F62;&#x6210;&#x4E00;&#x4E2A;&#x65B0;&#x6570;&#x7EC4;&#x3002; <code>callback</code>&#xA0;&#x51FD;&#x6570;&#x53EA;&#x4F1A;&#x5728;&#x6709;&#x503C;&#x7684;&#x7D22;&#x5F15;&#x4E0A;&#x88AB;&#x8C03;&#x7528;&#xFF1B;&#x90A3;&#x4E9B;&#x4ECE;&#x6765;&#x6CA1;&#x88AB;&#x8D4B;&#x8FC7;&#x503C;&#x6216;&#x8005;&#x4F7F;&#x7528; <code>delete</code> &#x5220;&#x9664;&#x7684;&#x7D22;&#x5F15;&#x5219;&#x4E0D;&#x4F1A;&#x88AB;&#x8C03;&#x7528;&#x3002;</p>

<p><code>callback</code> &#x51FD;&#x6570;&#x4F1A;&#x88AB;&#x81EA;&#x52A8;&#x4F20;&#x5165;&#x4E09;&#x4E2A;&#x53C2;&#x6570;&#xFF1A;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#xFF0C;&#x5143;&#x7D20;&#x7D22;&#x5F15;&#xFF0C;&#x539F;&#x6570;&#x7EC4;&#x672C;&#x8EAB;&#x3002;</p>

<p>&#x5982;&#x679C;&#xA0;<code>thisArg</code>&#xA0;&#x53C2;&#x6570;&#x6709;&#x503C;&#xFF0C;&#x5219;&#x6BCF;&#x6B21;&#xA0;<code>callback</code>&#xA0;&#x51FD;&#x6570;&#x88AB;&#x8C03;&#x7528;&#x7684;&#x65F6;&#x5019;&#xFF0C;<code>this</code> &#x90FD;&#x4F1A;&#x6307;&#x5411;&#xA0;<code>thisArg</code> &#x53C2;&#x6570;&#x4E0A;&#x7684;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x3002;&#x5982;&#x679C;&#x7701;&#x7565;&#x4E86;&#xA0;<code>thisArg&#xA0;</code><code>&#x53C2;&#x6570;,</code><code>&#x6216;&#x8005;&#x8D4B;&#x503C;&#x4E3A; null</code> &#x6216; <code>undefined</code>&#xFF0C;&#x5219; this &#x6307;&#x5411;&#x5168;&#x5C40;&#x5BF9;&#x8C61; &#x3002;</p>

<p><code>map&#xA0;</code>&#x4E0D;&#x4FEE;&#x6539;&#x8C03;&#x7528;&#x5B83;&#x7684;&#x539F;&#x6570;&#x7EC4;&#x672C;&#x8EAB;&#xFF08;&#x5F53;&#x7136;&#x53EF;&#x4EE5;&#x5728; <code>callback</code> &#x6267;&#x884C;&#x65F6;&#x6539;&#x53D8;&#x539F;&#x6570;&#x7EC4;&#xFF09;&#x3002;</p>

<p>&#x4F7F;&#x7528; map &#x65B9;&#x6CD5;&#x5904;&#x7406;&#x6570;&#x7EC4;&#x65F6;&#xFF0C;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x7684;&#x8303;&#x56F4;&#x662F;&#x5728; callback &#x65B9;&#x6CD5;&#x7B2C;&#x4E00;&#x6B21;&#x8C03;&#x7528;&#x4E4B;&#x524D;&#x5C31;&#x5DF2;&#x7ECF;&#x786E;&#x5B9A;&#x4E86;&#x3002;&#x5728; map &#x65B9;&#x6CD5;&#x6267;&#x884C;&#x7684;&#x8FC7;&#x7A0B;&#x4E2D;&#xFF1A;&#x539F;&#x6570;&#x7EC4;&#x4E2D;&#x65B0;&#x589E;&#x52A0;&#x7684;&#x5143;&#x7D20;&#x5C06;&#x4E0D;&#x4F1A;&#x88AB; callback &#x8BBF;&#x95EE;&#x5230;&#xFF1B;&#x82E5;&#x5DF2;&#x7ECF;&#x5B58;&#x5728;&#x7684;&#x5143;&#x7D20;&#x88AB;&#x6539;&#x53D8;&#x6216;&#x5220;&#x9664;&#x4E86;&#xFF0C;&#x5219;&#x5B83;&#x4EEC;&#x7684;&#x4F20;&#x9012;&#x5230; callback &#x7684;&#x503C;&#x662F; map &#x65B9;&#x6CD5;&#x904D;&#x5386;&#x5230;&#x5B83;&#x4EEC;&#x7684;&#x90A3;&#x4E00;&#x65F6;&#x523B;&#x7684;&#x503C;&#xFF1B;&#x800C;&#x88AB;&#x5220;&#x9664;&#x7684;&#x5143;&#x7D20;&#x5C06;&#x4E0D;&#x4F1A;&#x88AB;&#x8BBF;&#x95EE;&#x5230;&#x3002;</p>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<h3 name="Example:_Mapping_an_array_of_numbers_to_an_array_of_square_roots" id="Example:_Mapping_an_array_of_numbers_to_an_array_of_square_roots">&#x6C42;&#x6570;&#x7EC4;&#x4E2D;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x5E73;&#x65B9;&#x6839;</h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x521B;&#x5EFA;&#x4E86;&#x4E00;&#x4E2A;&#x65B0;&#x6570;&#x7EC4;&#xFF0C;&#x503C;&#x4E3A;&#x539F;&#x6570;&#x7EC4;&#x4E2D;&#x5BF9;&#x5E94;&#x6570;&#x5B57;&#x7684;&#x5E73;&#x65B9;&#x6839;&#x3002;</p>

<pre class="brush: js">var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
/* roots&#x7684;&#x503C;&#x4E3A;[1, 2, 3], numbers&#x7684;&#x503C;&#x4ECD;&#x4E3A;[1, 4, 9] */</pre>

<h3 id="&#x4F7F;&#x7528;_map_&#x91CD;&#x65B0;&#x683C;&#x5F0F;&#x5316;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5BF9;&#x8C61;">&#x4F7F;&#x7528; map &#x91CD;&#x65B0;&#x683C;&#x5F0F;&#x5316;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5BF9;&#x8C61;</h3>

<p>&#x4EE5;&#x4E0B;&#x4EE3;&#x7801;&#x5C06;&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x5BF9;&#x8C61;&#x7684;&#x6570;&#x7EC4;&#x7528;&#x4EE5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x65B0;&#x91CD;&#x65B0;&#x683C;&#x5F0F;&#x5316;&#x5BF9;&#x8C61;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x3002;</p>

<pre><code>var kvArray = [{key:1, value:10}, {key:2, value:20}, {key:3, value: 30}];
var reformattedArray = kvArray.map(function(obj){ 
   var rObj = {};
   rObj[obj.key] = obj.value;
   return rObj;
});
// reformattedArray is now [{1:10}, {2:20}, {3:30}], 
// kvArray is still [{key:1, value:10}, {key:2, value:20}, {key:3, value: 30}]</code></pre>

<h3 name="Example:_Pluralizing_the_words_.28strings.29_in_an_array" id="Example:_Pluralizing_the_words_.28strings.29_in_an_array">&#x5C06;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5355;&#x8BCD;&#x8F6C;&#x6362;&#x6210;&#x5BF9;&#x5E94;&#x7684;&#x590D;&#x6570;&#x5F62;&#x5F0F;.</h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x5C06;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6240;&#x6709;&#x5355;&#x8BCD;&#x8F6C;&#x6362;&#x6210;&#x5BF9;&#x5E94;&#x7684;&#x590D;&#x6570;&#x5F62;&#x5F0F;.</p>

<pre class="brush: js">function fuzzyPlural(single) {
  var result = single.replace(/o/g, &apos;e&apos;);  
  if( single === &apos;kangaroo&apos;){
    result += &apos;se&apos;;
  }
  return result; 
}

var words = [&quot;foot&quot;, &quot;goose&quot;, &quot;moose&quot;, &quot;kangaroo&quot;];
console.log(words.map(fuzzyPlural));

// [&quot;feet&quot;, &quot;geese&quot;, &quot;meese&quot;, &quot;kangareese&quot;]
</pre>

<h3 name="Example:_using_map_generically" id="Example:_using_map_generically"><code>&#x4E00;&#x822C;&#x7684; map</code>&#xA0;&#x65B9;&#x6CD5;</h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x6F14;&#x793A;&#x5982;&#x4F55;&#x5728;&#x4E00;&#x4E2A; <a href="/zh-CN/docs/Web/JavaScript/Reference/String" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>String</code></a>&#xA0;&#xA0;&#x4E0A;&#x4F7F;&#x7528; map &#x65B9;&#x6CD5;&#x83B7;&#x53D6;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x6BCF;&#x4E2A;&#x5B57;&#x7B26;&#x6240;&#x5BF9;&#x5E94;&#x7684; ASCII &#x7801;&#x7EC4;&#x6210;&#x7684;&#x6570;&#x7EC4;&#xFF1A;</p>

<pre class="brush: js">var map = Array.prototype.map
var a = map.call(&quot;Hello World&quot;, function(x) { 
&#xA0; return x.charCodeAt(0); 
})
// a&#x7684;&#x503C;&#x4E3A;[72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
</pre>

<h3 id="querySelectorAll_&#x5E94;&#x7528;"><code>querySelectorAll &#x5E94;&#x7528;</code></h3>

<p>&#x4E0B;&#x9762;&#x4EE3;&#x7801;&#x5C55;&#x793A;&#x4E86;&#x5982;&#x4F55;&#x53BB;&#x904D;&#x5386;&#x7528;&#xA0;<code>querySelectorAll &#x5F97;&#x5230;&#x7684;&#x52A8;&#x6001;&#x5BF9;&#x8C61;&#x96C6;&#x5408;&#x3002;&#x5728;&#x8FD9;&#x91CC;&#xFF0C;&#x6211;&#x4EEC;&#x83B7;&#x5F97;&#x4E86;&#x6587;&#x6863;&#x91CC;&#x6240;&#x6709;&#x9009;&#x4E2D;&#x7684;&#x9009;&#x9879;&#xFF0C;&#x5E76;&#x5C06;&#x5176;&#x6253;&#x5370;&#xFF1A;</code></p>

<pre><code>var elems = document.querySelectorAll(&apos;select option:checked&apos;);
var values = Array.prototype.map.call(elems, function(obj) {
  return obj.value;
});</code></pre>

<h3 id="&#x53CD;&#x8F6C;&#x5B57;&#x7B26;&#x4E32;">&#x53CD;&#x8F6C;&#x5B57;&#x7B26;&#x4E32;</h3>

<pre><code>var str = &apos;12345&apos;;
Array.prototype.map.call(str, function(x) {
  return x;
}).reverse().join(&apos;&apos;); 

// Output: &apos;54321&apos;
// Bonus: use &apos;===&apos; to test if original string was a palindrome</code></pre>

<h3 id="&#x4F7F;&#x7528;&#x6280;&#x5DE7;&#x6848;&#x4F8B;">&#x4F7F;&#x7528;&#x6280;&#x5DE7;&#x6848;&#x4F8B;</h3>

<p><a href="http://www.wirfs-brock.com/allzh-cn/posts/166" class="external">(&#x539F;&#x6587;&#x5730;&#x5740;)</a></p>

<p>&#x901A;&#x5E38;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;<code>map</code> &#x65B9;&#x6CD5;&#x4E2D;&#x7684; <code>callback</code> &#x51FD;&#x6570;&#x53EA;&#x9700;&#x8981;&#x63A5;&#x53D7;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#xFF0C;&#x5C31;&#x662F;&#x6B63;&#x5728;&#x88AB;&#x904D;&#x5386;&#x7684;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x672C;&#x8EAB;&#x3002;&#x4F46;&#x8FD9;&#x5E76;&#x4E0D;&#x610F;&#x5473;&#x7740; <code>map</code> &#x53EA;&#x7ED9; <code>callback</code> &#x4F20;&#x4E86;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#x3002;&#x8FD9;&#x4E2A;&#x601D;&#x7EF4;&#x60EF;&#x6027;&#x53EF;&#x80FD;&#x4F1A;&#x8BA9;&#x6211;&#x4EEC;&#x72AF;&#x4E00;&#x4E2A;&#x5F88;&#x5BB9;&#x6613;&#x72AF;&#x7684;&#x9519;&#x8BEF;&#x3002;</p>

<pre class="brush: js">// &#x4E0B;&#x9762;&#x7684;&#x8BED;&#x53E5;&#x8FD4;&#x56DE;&#x4EC0;&#x4E48;&#x5462;:
[&quot;1&quot;, &quot;2&quot;, &quot;3&quot;].map(parseInt);
// &#x4F60;&#x53EF;&#x80FD;&#x89C9;&#x7684;&#x4F1A;&#x662F;[1, 2, 3]
// &#x4F46;&#x5B9E;&#x9645;&#x7684;&#x7ED3;&#x679C;&#x662F; [1, NaN, NaN]

// &#x901A;&#x5E38;&#x4F7F;&#x7528;parseInt&#x65F6;,&#x53EA;&#x9700;&#x8981;&#x4F20;&#x9012;&#x4E00;&#x4E2A;&#x53C2;&#x6570;.
// &#x4F46;&#x5B9E;&#x9645;&#x4E0A;,parseInt&#x53EF;&#x4EE5;&#x6709;&#x4E24;&#x4E2A;&#x53C2;&#x6570;.&#x7B2C;&#x4E8C;&#x4E2A;&#x53C2;&#x6570;&#x662F;&#x8FDB;&#x5236;&#x6570;.
// &#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x8BED;&#x53E5;&quot;alert(parseInt.length)===2&quot;&#x6765;&#x9A8C;&#x8BC1;.
// map&#x65B9;&#x6CD5;&#x5728;&#x8C03;&#x7528;callback&#x51FD;&#x6570;&#x65F6;,&#x4F1A;&#x7ED9;&#x5B83;&#x4F20;&#x9012;&#x4E09;&#x4E2A;&#x53C2;&#x6570;:&#x5F53;&#x524D;&#x6B63;&#x5728;&#x904D;&#x5386;&#x7684;&#x5143;&#x7D20;, 
// &#x5143;&#x7D20;&#x7D22;&#x5F15;, &#x539F;&#x6570;&#x7EC4;&#x672C;&#x8EAB;.
// &#x7B2C;&#x4E09;&#x4E2A;&#x53C2;&#x6570;parseInt&#x4F1A;&#x5FFD;&#x89C6;, &#x4F46;&#x7B2C;&#x4E8C;&#x4E2A;&#x53C2;&#x6570;&#x4E0D;&#x4F1A;,&#x4E5F;&#x5C31;&#x662F;&#x8BF4;,
// parseInt&#x628A;&#x4F20;&#x8FC7;&#x6765;&#x7684;&#x7D22;&#x5F15;&#x503C;&#x5F53;&#x6210;&#x8FDB;&#x5236;&#x6570;&#x6765;&#x4F7F;&#x7528;.&#x4ECE;&#x800C;&#x8FD4;&#x56DE;&#x4E86;NaN.

/*
//&#x5E94;&#x8BE5;&#x4F7F;&#x7528;&#x5982;&#x4E0B;&#x7684;&#x7528;&#x6237;&#x51FD;&#x6570;returnInt

function returnInt(element){
  return parseInt(element,10);
}

[&quot;1&quot;, &quot;2&quot;, &quot;3&quot;].map(returnInt);
// &#x8FD4;&#x56DE;[1,2,3]
*/

</pre>

<h2 name="Compatibility" style="line-height: 30px;" id="Compatibility">&#x517C;&#x5BB9;&#x65E7;&#x73AF;&#x5883;&#xFF08;Polyfill&#xFF09;</h2>

<p><code>map</code>&#xA0;&#x662F;&#x5728;&#x6700;&#x8FD1;&#x7684; ECMA-262 &#x6807;&#x51C6;&#x4E2D;&#x65B0;&#x6DFB;&#x52A0;&#x7684;&#x65B9;&#x6CD5;&#xFF1B;&#x6240;&#x4EE5;&#x4E00;&#x4E9B;&#x65E7;&#x7248;&#x672C;&#x7684;&#x6D4F;&#x89C8;&#x5668;&#x53EF;&#x80FD;&#x6CA1;&#x6709;&#x5B9E;&#x73B0;&#x8BE5;&#x65B9;&#x6CD5;&#x3002;&#x5728;&#x90A3;&#x4E9B;&#x6CA1;&#x6709;&#x539F;&#x751F;&#x652F;&#x6301;&#xA0;<code>map</code>&#xA0;&#x65B9;&#x6CD5;&#x7684;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x4E0B;&#x9762;&#x7684; Javascript &#x4EE3;&#x7801;&#x6765;<code>&#x5B9E;&#x73B0;&#x5B83;&#x3002;</code>&#x6240;&#x4F7F;&#x7528;&#x7684;&#x7B97;&#x6CD5;&#x6B63;&#x662F; ECMA-262&#xFF0C;&#x7B2C; 5 &#x7248;&#x89C4;&#x5B9A;&#x7684;&#x3002;&#x5047;&#x5B9A;<code style="color: inherit;">Object</code>,&#xA0;<code style="color: inherit;">TypeError</code>, &#x548C;&#xA0;<code>Array</code>&#xA0;&#x6709;&#x4ED6;&#x4EEC;&#x7684;&#x539F;&#x59CB;&#x503C;&#x3002;&#x800C;&#x4E14;&#xA0;<code style="color: inherit;">callback.call</code>&#xA0;&#x7684;&#x539F;&#x59CB;&#x503C;&#x4E5F;&#x662F;&#xA0;<code style="color: inherit;"><a href="/zh-cn/JavaScript/Reference/Global_Objects/Function/call" rel="internal" style="color: rgb(4, 121, 167);">Function.prototype.call</a></code></p>

<pre class="brush: js" style="font-size: 14px;">// &#x5B9E;&#x73B0; ECMA-262, Edition 5, 15.4.4.19
// &#x53C2;&#x8003;: <a href="http://es5.github.com/#x15.4.4.19" rel="freelink" class="external">http://es5.github.com/#x15.4.4.19</a>
if (!Array.prototype.map) {
  Array.prototype.map = function(callback, thisArg) {

    var T, A, k;

    if (this == null) {
      throw new TypeError(&quot; this is null or not defined&quot;);
    }

    // 1. &#x5C06;O&#x8D4B;&#x503C;&#x4E3A;&#x8C03;&#x7528;map&#x65B9;&#x6CD5;&#x7684;&#x6570;&#x7EC4;.
    var O = Object(this);

    // 2.&#x5C06;len&#x8D4B;&#x503C;&#x4E3A;&#x6570;&#x7EC4;O&#x7684;&#x957F;&#x5EA6;.
    var len = O.length &gt;&gt;&gt; 0;

    // 3.&#x5982;&#x679C;callback&#x4E0D;&#x662F;&#x51FD;&#x6570;,&#x5219;&#x629B;&#x51FA;TypeError&#x5F02;&#x5E38;.
    if (Object.prototype.toString.call(callback) != &quot;[object Function]&quot;) {
      throw new TypeError(callback + &quot; is not a function&quot;);
    }

    // 4. &#x5982;&#x679C;&#x53C2;&#x6570;thisArg&#x6709;&#x503C;,&#x5219;&#x5C06;T&#x8D4B;&#x503C;&#x4E3A;thisArg;&#x5426;&#x5219;T&#x4E3A;undefined.
    if (thisArg) {
      T = thisArg;
    }

    // 5. &#x521B;&#x5EFA;&#x65B0;&#x6570;&#x7EC4;A,&#x957F;&#x5EA6;&#x4E3A;&#x539F;&#x6570;&#x7EC4;O&#x957F;&#x5EA6;len
    A = new Array(len);

    // 6. &#x5C06;k&#x8D4B;&#x503C;&#x4E3A;0
    k = 0;

    // 7. &#x5F53; k &lt; len &#x65F6;,&#x6267;&#x884C;&#x5FAA;&#x73AF;.
    while(k &lt; len) {

      var kValue, mappedValue;

      //&#x904D;&#x5386;O,k&#x4E3A;&#x539F;&#x6570;&#x7EC4;&#x7D22;&#x5F15;
      if (k in O) {

        //kValue&#x4E3A;&#x7D22;&#x5F15;k&#x5BF9;&#x5E94;&#x7684;&#x503C;.
        kValue = O[ k ];

        // &#x6267;&#x884C;callback,this&#x6307;&#x5411;T,&#x53C2;&#x6570;&#x6709;&#x4E09;&#x4E2A;.&#x5206;&#x522B;&#x662F;kValue:&#x503C;,k:&#x7D22;&#x5F15;,O:&#x539F;&#x6570;&#x7EC4;.
        mappedValue = callback.call(T, kValue, k, O);

        // &#x8FD4;&#x56DE;&#x503C;&#x6DFB;&#x52A0;&#x5230;&#x65B0;&#x6570;&#x7EC4;A&#x4E2D;.
        A[ k ] = mappedValue;
      }
      // k&#x81EA;&#x589E;1
      k++;
    }

    // 8. &#x8FD4;&#x56DE;&#x65B0;&#x6570;&#x7EC4;A
    return A;
  };      
}</pre>

<h2 id="&#x89C4;&#x8303;" style="margin-bottom: 20px; line-height: 30px;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.19" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Array.prototype.map</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.<br>
    Implemented in JavaScript 1.6</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.map" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Array.prototype.map</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-array.prototype.map" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Array.prototype.map</small></a></td>
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
   <th>Firefox (Gecko)</th>
   <th>Chrome</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><a href="/en-US/Firefox/Releases/1.5" title="Released on 2005-11-25.">1.5</a> (1.8)</td>
   <td>9</td>
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
   <th>Feature</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>Android</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>1.0 (1.8)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 name="See_also" style="margin-bottom: 20px; line-height: 30px;" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" title="forEach() &#x65B9;&#x6CD5;&#x5BF9;&#x6570;&#x7EC4;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x63D0;&#x4F9B;&#x7684;&#x51FD;&#x6570;(&#x56DE;&#x8C03;&#x51FD;&#x6570;)&#x3002;"><code>Array.prototype.forEach()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Map" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Map</code></a> object</li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from" title="Editorial review completed."><code>Array.from()</code></a></li>
</ul>
                  
                
              