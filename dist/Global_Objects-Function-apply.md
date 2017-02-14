
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><strong><code>apply()</code></strong> &#x65B9;&#x6CD5;&#x5728;&#x6307;&#x5B9A;&#xA0;<code>this</code>&#xA0;&#x503C;&#x548C;&#x53C2;&#x6570;&#xFF08;&#x53C2;&#x6570;&#x4EE5;&#x6570;&#x7EC4;&#x6216;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Predefined_Core_Objects#Working_with_Array-like_objects">&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;</a>&#x7684;&#x5F62;&#x5F0F;&#x5B58;&#x5728;&#xFF09;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#x8C03;&#x7528;&#x67D0;&#x4E2A;&#x51FD;&#x6570;&#x3002;</p>

<div class="note"><strong>&#x6CE8;&#x610F;&#xFF1A;</strong>&#x8BE5;&#x51FD;&#x6570;&#x7684;&#x8BED;&#x6CD5;&#x4E0E;&#xA0;<span style="line-height: 1.5;"><a title="call() &#x65B9;&#x6CD5;&#x5728;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;this&#x503C;&#x548C;&#x82E5;&#x5E72;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x503C;&#x7684;&#x524D;&#x63D0;&#x4E0B;&#x8C03;&#x7528;&#x67D0;&#x4E2A;&#x51FD;&#x6570;&#x6216;&#x65B9;&#x6CD5;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call"><code>call()</code></a>&#xA0;</span><span style="line-height: 1.5;">&#x65B9;&#x6CD5;&#x7684;&#x8BED;&#x6CD5;&#x51E0;&#x4E4E;&#x5B8C;&#x5168;&#x76F8;&#x540C;&#xFF0C;&#x552F;&#x4E00;&#x7684;&#x533A;&#x522B;&#x5728;&#x4E8E;&#xFF0C;</span><code style="font-style: italic; line-height: 1.5;">call()&#x65B9;&#x6CD5;&#x63A5;&#x53D7;&#x7684;&#x662F;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#x5217;&#x8868;&#xFF0C;&#x800C;&#xA0;</code><code style="font-style: italic; line-height: 1.5;">apply()</code><span style="line-height: 1.5;">&#x65B9;&#x6CD5;&#x63A5;&#x53D7;&#x7684;&#x662F;&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x591A;&#x4E2A;&#x53C2;&#x6570;&#x7684;&#x6570;&#x7EC4;&#xFF08;&#x6216;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#xFF09;&#x3002;</span></div>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><em>fun</em>.apply(<em>thisArg</em>[, <em>argsArray</em>])</code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>thisArg</code></dt>
 <dd>&#x5728;&#xA0;<em><code>fun</code></em>&#xA0;&#x51FD;&#x6570;&#x8FD0;&#x884C;&#x65F6;&#x6307;&#x5B9A;&#x7684;&#xA0;<code>this</code>&#xA0;<code>&#x503C;&#x3002;</code>&#x9700;&#x8981;&#x6CE8;&#x610F;&#x7684;&#x662F;&#xFF0C;&#x6307;&#x5B9A;&#x7684;&#xA0;<code>this</code>&#xA0;&#x503C;&#x5E76;&#x4E0D;&#x4E00;&#x5B9A;&#x662F;&#x8BE5;&#x51FD;&#x6570;&#x6267;&#x884C;&#x65F6;&#x771F;&#x6B63;&#x7684;&#xA0;<code>this</code>&#xA0;&#x503C;&#xFF0C;&#x5982;&#x679C;&#x8FD9;&#x4E2A;&#x51FD;&#x6570;&#x5904;&#x4E8E;<a title="JavaScript/Strict mode" href="../../../../../../zh-CN/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode" class="new">&#x975E;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E0B;</a>&#xFF0C;&#x5219;&#x6307;&#x5B9A;&#x4E3A;&#xA0;<code>null</code>&#xA0;&#x6216;&#xA0;<code>undefined</code>&#xA0;&#x65F6;<code>&#x4F1A;&#x81EA;&#x52A8;&#x6307;&#x5411;</code>&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#xFF08;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#x5C31;&#x662F;window&#x5BF9;&#x8C61;&#xFF09;&#xFF0C;&#x540C;&#x65F6;&#x503C;&#x4E3A;&#x539F;&#x59CB;&#x503C;&#xFF08;&#x6570;&#x5B57;&#xFF0C;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x5E03;&#x5C14;&#x503C;&#xFF09;&#x7684;&#xA0;<code>this</code>&#xA0;&#x4F1A;&#x6307;&#x5411;&#x8BE5;&#x539F;&#x59CB;&#x503C;&#x7684;&#x81EA;&#x52A8;&#x5305;&#x88C5;&#x5BF9;&#x8C61;&#x3002;</dd>
 <dt><code>argsArray</code></dt>
 <dd>&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x6216;&#x8005;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#xFF0C;&#x5176;&#x4E2D;&#x7684;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x5C06;&#x4F5C;&#x4E3A;&#x5355;&#x72EC;&#x7684;&#x53C2;&#x6570;&#x4F20;&#x7ED9;&#xA0;<code>fun</code>&#xA0;&#x51FD;&#x6570;&#x3002;&#x5982;&#x679C;&#x8BE5;&#x53C2;&#x6570;&#x7684;&#x503C;<code>&#x4E3A;null</code>&#xA0;&#x6216;&#xA0;<a title="undefined&#x6709;&#x591A;&#x91CD;&#x89D2;&#x8272;,&#x901A;&#x5E38;&#x60C5;&#x51B5;&#x4E0B;,&#x6211;&#x4EEC;&#x6240;&#x8BF4;&#x7684;undefined&#x90FD;&#x6307;&#x7684;&#x662F;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&quot;undefined&quot;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined"><code>undefined</code></a>&#xFF0C;&#x5219;&#x8868;&#x793A;&#x4E0D;&#x9700;&#x8981;&#x4F20;&#x5165;&#x4EFB;&#x4F55;&#x53C2;&#x6570;&#x3002;&#x4ECE;ECMAScript 5 &#x5F00;&#x59CB;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x3002;&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;&#x8BF7;&#x53C2;&#x9605;&#x672C;&#x6587;&#x5E95;&#x90E8;&#x5185;&#x5BB9;&#x3002;</dd>
</dl>

<div>&#xA0;</div>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p><span style="line-height: 1.5;">&#x5728;&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x5B58;&#x5728;&#x7684;&#x51FD;&#x6570;&#x65F6;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x4E3A;&#x5176;&#x6307;&#x5B9A;&#x4E00;&#x4E2A; <code>this</code> &#x5BF9;&#x8C61;&#x3002; <code>this</code></span>&#xA0;<span style="line-height: 1.5;">&#x6307;&#x5F53;&#x524D;&#x5BF9;&#x8C61;&#xFF0C;&#x4E5F;&#x5C31;&#x662F;&#x6B63;&#x5728;&#x8C03;&#x7528;&#x8FD9;&#x4E2A;&#x51FD;&#x6570;&#x7684;&#x5BF9;&#x8C61;&#x3002; &#x4F7F;&#x7528; <code>apply</code>&#xFF0C; &#x4F60;&#x53EF;&#x4EE5;&#x53EA;&#x5199;&#x4E00;&#x6B21;&#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x7136;&#x540E;&#x5728;&#x53E6;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4E2D;&#x7EE7;&#x627F;&#x5B83;&#xFF0C;&#x800C;&#x4E0D;&#x7528;&#x5728;&#x65B0;&#x5BF9;&#x8C61;&#x4E2D;&#x91CD;&#x590D;&#x5199;&#x8BE5;&#x65B9;&#x6CD5;&#x3002;</span></p>

<p><code>apply</code>&#xA0;&#x4E0E;&#xA0;<code><a title="call() &#x65B9;&#x6CD5;&#x5728;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;this&#x503C;&#x548C;&#x82E5;&#x5E72;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x503C;&#x7684;&#x524D;&#x63D0;&#x4E0B;&#x8C03;&#x7528;&#x67D0;&#x4E2A;&#x51FD;&#x6570;&#x6216;&#x65B9;&#x6CD5;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call"><code>call()</code></a></code>&#xA0;&#x975E;&#x5E38;&#x76F8;&#x4F3C;&#xFF0C;&#x4E0D;&#x540C;&#x4E4B;&#x5904;&#x5728;&#x4E8E;&#x63D0;&#x4F9B;&#x53C2;&#x6570;&#x7684;&#x65B9;&#x5F0F;&#x3002;<code style="font-size: 14px;">apply</code> &#x4F7F;&#x7528;&#x53C2;&#x6570;&#x6570;&#x7EC4;&#x800C;&#x4E0D;&#x662F;&#x4E00;&#x7EC4;&#x53C2;&#x6570;&#x5217;&#x8868;&#xFF08;&#x539F;&#x6587;&#xFF1A;a named set of parameters&#xFF09;&#x3002;<code style="font-size: 14px;">apply&#xA0;</code><span style="line-height: 1.5;">&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x6570;&#x7EC4;&#x5B57;&#x9762;&#x91CF;&#xFF08;</span>array literal&#xFF09;<span style="line-height: 1.5;">&#xFF0C;&#x5982;&#xA0;</span><code style="font-size: 14px;"><em>fun</em>.apply(this, [&apos;eat&apos;, &apos;bananas&apos;])</code><span style="line-height: 1.5;">&#xFF0C;&#x6216;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#xFF0C;</span><span style="line-height: 1.5;">&#xA0;&#x5982;&#xA0;&#xA0;</span><code style="font-size: 14px;"><em>fun</em>.apply(this, new Array(&apos;eat&apos;, &apos;bananas&apos;))</code><span style="line-height: 1.5;">&#x3002;</span></p>

<p>&#x4F60;&#x4E5F;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#xA0;<a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments"><code>arguments </code></a>&#xA0;&#x5BF9;&#x8C61;&#x4F5C;&#x4E3A;&#xA0;<code>argsArray</code> &#x53C2;&#x6570;&#x3002;&#xA0;<code>arguments</code> &#x662F;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x7684;&#x5C40;&#x90E8;&#x53D8;&#x91CF;&#x3002; &#x5B83;&#x53EF;&#x4EE5;&#x88AB;&#x7528;&#x4F5C;&#x88AB;&#x8C03;&#x7528;&#x5BF9;&#x8C61;&#x7684;&#x6240;&#x6709;&#x672A;&#x6307;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x3002;&#xA0;&#x8FD9;&#x6837;&#xFF0C;&#x4F60;&#x5728;&#x4F7F;&#x7528;apply&#x51FD;&#x6570;&#x7684;&#x65F6;&#x5019;&#x5C31;&#x4E0D;&#x9700;&#x8981;&#x77E5;&#x9053;&#x88AB;&#x8C03;&#x7528;&#x5BF9;&#x8C61;&#x7684;&#x6240;&#x6709;&#x53C2;&#x6570;&#x3002; &#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;arguments&#x6765;&#x628A;&#x6240;&#x6709;&#x7684;&#x53C2;&#x6570;&#x4F20;&#x9012;&#x7ED9;&#x88AB;&#x8C03;&#x7528;&#x5BF9;&#x8C61;&#x3002;&#xA0;&#x88AB;&#x8C03;&#x7528;&#x5BF9;&#x8C61;&#x63A5;&#x4E0B;&#x6765;&#x5C31;&#x8D1F;&#x8D23;&#x5904;&#x7406;&#x8FD9;&#x4E9B;&#x53C2;&#x6570;&#x3002;</p>

<p>&#x4ECE; ECMAScript &#x7B2C;5&#x7248;&#x5F00;&#x59CB;&#xFF0C;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x4EFB;&#x4F55;&#x79CD;&#x7C7B;&#x7684;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#xFF0C;&#x5C31;&#x662F;&#x8BF4;&#x53EA;&#x8981;&#x6709;&#x4E00;&#x4E2A;&#xA0;<code>length</code>&#xA0;&#x5C5E;&#x6027;&#x548C;<code>[0...length)</code>&#xA0;&#x8303;&#x56F4;&#x7684;&#x6574;&#x6570;&#x5C5E;&#x6027;&#x3002;&#x4F8B;&#x5982;&#x73B0;&#x5728;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; <a title="NodeList &#x5BF9;&#x8C61;&#x662F;&#x4E00;&#x4E2A;&#x8282;&#x70B9;&#x7684;&#x96C6;&#x5408;&#xFF0C;&#x662F;&#x7531; Node.childNodes &#x548C; document.querySelectorAll &#x8FD4;&#x56DE;&#x7684;." href="/zh-CN/docs/Web/API/NodeList"><code>NodeList</code></a>&#xA0;&#x6216;&#x4E00;&#x4E2A;&#x81EA;&#x5DF1;&#x5B9A;&#x4E49;&#x7684;&#x7C7B;&#x4F3C;&#xA0;<code>{&apos;length&apos;: 2, &apos;0&apos;: &apos;eat&apos;, &apos;1&apos;: &apos;bananas&apos;}</code>&#xA0;&#x5F62;&#x5F0F;&#x7684;&#x5BF9;&#x8C61;&#x3002;</p>

<p>&#x9700;&#x8981;&#x6CE8;&#x610F;&#xFF1A;Chrome 14 &#x4EE5;&#x53CA; Internet Explorer 9 &#x4ECD;&#x7136;&#x4E0D;&#x63A5;&#x53D7;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x3002;&#x5982;&#x679C;&#x4F20;&#x5165;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#xFF0C;&#x5B83;&#x4EEC;&#x4F1A;&#x629B;&#x51FA;&#x5F02;&#x5E38;&#x3002;</p>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<h3 name="Using_apply_to_chain_constructors" id="Using_apply_to_chain_constructors">&#x4F7F;&#x7528;apply&#x6765;&#x94FE;&#x63A5;&#x6784;&#x9020;&#x5668;</h3>

<p>&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;apply&#x6765;&#x7ED9;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x94FE;&#x63A5;<a title="JavaScript/Reference/Operators/new" href="/zh-CN/docs/JavaScript/Reference/Operators/new" class="new">&#x6784;&#x9020;&#x5668;</a>&#xFF0C;&#x7C7B;&#x4F3C;&#x4E8E;Java. &#x5728;&#x63A5;&#x4E0B;&#x6765;&#x7684;&#x4F8B;&#x5B50;&#x4E2D;&#x6211;&#x4EEC;&#x4F1A;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x53EB;&#x505A;construct&#x7684;&#x5168;&#x5C40;&#x7684;<a title="JavaScript/Reference/Global_Objects/Function" href="/zh-CN/docs/JavaScript/Reference/Global_Objects/Function"><code>Function</code></a>&#x51FD;&#x6570;,&#x6765;&#x4F7F;&#x4F60;&#x80FD;&#x591F;&#x5728;&#x6784;&#x9020;&#x5668;&#x4E2D;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x800C;&#x975E;&#x53C2;&#x6570;&#x5217;&#x8868;&#x3002;</p>

<pre class="brush: js">Function.prototype.construct = function (aArgs) {
  var oNew = Object.create(this.prototype);
  this.apply(oNew, aArgs);
  return oNew;
};
</pre>

<div class="note">
<p><strong>&#x6CE8;&#x610F;:</strong>&#xA0;&#x4E0A;&#x9762;&#x4F7F;&#x7528;&#x7684;<code>Object.create()</code>&#x65B9;&#x6CD5;&#x76F8;&#x5BF9;&#x6765;&#x8BF4;&#x6BD4;&#x8F83;&#x65B0;&#x3002;&#x53E6;&#x4E00;&#x79CD;&#x53EF;&#x9009;&#x7684;&#x65B9;&#x6CD5;&#x662F;&#x4F7F;&#x7528;&#x95ED;&#x5305;&#xFF0C;&#x8BF7;&#x8003;&#x8651;&#x5982;&#x4E0B;&#x66FF;&#x4EE3;&#x65B9;&#x6CD5;&#xFF1A;</p>

<pre style="font-style: normal;" class="brush: js">Function.prototype.construct = function(aArgs) {
  var fConstructor = this, fNewConstr = function() { 
&#xA0;   fConstructor.apply(this, aArgs); 
&#xA0; };
  fNewConstr.prototype = fConstructor.prototype;
  return new fNewConstr();
};</pre>
</div>

<p>&#x4F7F;&#x7528;&#x6848;&#x4F8B;&#xFF1A;</p>

<pre class="brush: js">function MyConstructor () {
    for (var nProp = 0; nProp &lt; arguments.length; nProp++) {
        this[&quot;property&quot; + nProp] = arguments[nProp];
    }
}

var myArray = [4, &quot;Hello world!&quot;, false];
var myInstance = MyConstructor.construct(myArray);

console.log(myInstance.property1);                // logs &quot;Hello world!&quot;
console.log(myInstance instanceof MyConstructor); // logs &quot;true&quot;
console.log(myInstance.constructor);              // logs &quot;MyConstructor&quot;</pre>

<div class="note"><strong>&#x6CE8;&#x610F;&#xFF1A;</strong>&#xA0;&#x8FD9;&#x4E2A;&#x975E;native&#x7684;<code>Function.construct</code>&#x65B9;&#x6CD5;&#x65E0;&#x6CD5;&#x548C;&#x4E00;&#x4E9B;native&#x6784;&#x9020;&#x5668;&#xFF08;&#x4F8B;&#x5982;<a title="JavaScript/Reference/Global_Objects/Date" href="/zh-CN/docs/JavaScript/Reference/Global_Objects/Date"><code>Date</code></a>&#xFF09;&#x4E00;&#x8D77;&#x4F7F;&#x7528;&#x3002;&#xA0;&#x5728;&#x8FD9;&#x79CD;&#x60C5;&#x51B5;&#x4E0B;&#x4F60;&#x5FC5;&#x987B;&#x4F7F;&#x7528;<a title="JavaScript/Reference/Global_Objects/Function/bind#Bound_functions_used_as_constructors" href="/zh-CN/docs/JavaScript/Reference/Global_Objects/Function/bind#Bound_functions_used_as_constructors"><code>Function.bind</code></a>&#x65B9;&#x6CD5;&#xFF08;&#x4F8B;&#x5982;&#xFF0C;&#x60F3;&#x8C61;&#x6709;&#x5982;&#x4E0B;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x8981;&#x7528;&#x5728;Date&#x6784;&#x9020;&#x5668;&#x4E2D;&#xFF1A;&#xA0;<code>[2012, 11, 4]</code>&#xFF1B;&#x8FD9;&#x65F6;&#x4F60;&#x9700;&#x8981;&#x8FD9;&#x6837;&#x5199;&#xFF1A;&#xA0;<code>new (Function.prototype.bind.apply(Date, [null].concat([2012, 11, 4])))()</code> &#x2013; -&#x65E0;&#x8BBA;&#x5982;&#x4F55;&#x8FD9;&#x4E0D;&#x662F;&#x6700;&#x597D;&#x7684;&#x5B9E;&#x73B0;&#x65B9;&#x5F0F;&#x5E76;&#x4E14;&#x4E5F;&#x8BB8;&#x4E0D;&#x8BE5;&#x7528;&#x5728;&#x4EFB;&#x4F55;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;).</div>

<h3 name="apply_and_built-in_functions" id="apply_and_built-in_functions"><code>&#x4F7F;&#x7528;apply</code>&#x548C;&#x5185;&#x7F6E;&#x51FD;&#x6570;</h3>

<p>&#x806A;&#x660E;&#x7684;apply&#x7528;&#x6CD5;&#x5141;&#x8BB8;&#x4F60;&#x5728;&#x67D0;&#x4E9B;&#x672C;&#x6765;&#x9700;&#x8981;&#x5199;&#x6210;&#x904D;&#x5386;&#x6570;&#x7EC4;&#x53D8;&#x91CF;&#x7684;&#x4EFB;&#x52A1;&#x4E2D;&#x4F7F;&#x7528;&#x5185;&#x5EFA;&#x7684;&#x51FD;&#x6570;&#x3002;&#x5728;&#x63A5;&#x4E0B;&#x91CC;&#x7684;&#x4F8B;&#x5B50;&#x4E2D;&#x6211;&#x4EEC;&#x4F1A;&#x4F7F;&#x7528;Math.max/Math.min&#x6765;&#x627E;&#x51FA;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6700;&#x5927;/&#x6700;&#x5C0F;&#x503C;&#x3002;</p>

<pre class="brush: js">/* min/max number in an array */
var numbers = [5, 6, 2, 3, 7];

/* using Math.min/Math.max apply */
var max = Math.max.apply(null, numbers); /* This about equal to Math.max(numbers[0], ...) or Math.max(5, 6, ..) */
var min = Math.min.apply(null, numbers);

/* vs. simple loop based algorithm */
max = -Infinity, min = +Infinity;

for (var i = 0; i &lt; numbers.length; i++) {
  if (numbers[i] &gt; max)
    max = numbers[i];
  if (numbers[i] &lt; min) 
    min = numbers[i];
}</pre>

<p>&#x4F46;&#x662F;&#x5F53;&#x5FC3;&#xFF1A;&#x5982;&#x679C;&#x7528;&#x4E0A;&#x9762;&#x7684;&#x65B9;&#x5F0F;&#x8C03;&#x7528;<code> <code>apply</code>, &#x4F60;&#x5F88;&#x53EF;&#x80FD;&#x4F1A;&#x9047;&#x5230;&#x65B9;&#x6CD5;&#x53C2;&#x6570;&#x4E2A;&#x6570;&#x8D8A;&#x754C;&#x7684;&#x95EE;&#x9898;. </code>&#x5F53;&#x4F60;&#x5BF9;&#x4E00;&#x4E2A;&#x65B9;&#x6CD5;&#x4F20;&#x5165;&#x975E;&#x5E38;&#x591A;&#x7684;&#x53C2;&#x6570; (&#x6BD4;&#x5982;&#x8D85;&#x8FC7;1W&#x591A;&#x4E2A;&#x53C2;&#x6570;) &#x65F6;, &#x5C31;&#x975E;&#x5E38;&#x6709;&#x53EF;&#x80FD;&#x4F1A;&#x5BFC;&#x81F4;&#x8D8A;&#x754C;&#x95EE;&#x9898;, &#x8FD9;&#x4E2A;&#x4E34;&#x754C;&#x503C;&#x662F;&#x6839;&#x636E;&#x4E0D;&#x540C;&#x7684; JavaScript &#x5F15;&#x64CE;&#x800C;&#x5B9A;&#x7684; (JavaScript &#x6838;&#x5FC3;&#x4E2D;&#x5DF2;&#x7ECF;&#x505A;&#x4E86;&#x786C;&#x7F16;&#x7801; <a href="https://bugs.webkit.org/show_bug.cgi?id=80797" class="external link-https">&#xA0;&#x53C2;&#x6570;&#x4E2A;&#x6570;&#x9650;&#x5236;&#x5728;65536</a>)&#xFF0C;&#x56E0;&#x4E3A;&#x8FD9;&#x4E2A;&#x9650;&#x5236;(&#x5B9E;&#x9645;&#x4E0A;&#x4E5F;&#x662F;&#x4EFB;&#x4F55;&#x7528;&#x5230;&#x8D85;&#x5927;&#x6808;&#x7A7A;&#x95F4;&#x7684;&#x884C;&#x4E3A;&#x7684;&#x81EA;&#x7136;&#x8868;&#x73B0;)&#x662F;&#x672A;&#x6307;&#x5B9A;&#x7684;. &#x6709;&#x4E9B;&#x5F15;&#x64CE;&#x4F1A;&#x629B;&#x51FA;&#x5F02;&#x5E38;.&#xA0; &#x66F4;&#x7CDF;&#x7CD5;&#x7684;&#x662F;&#x5176;&#x4ED6;&#x5F15;&#x64CE;&#x4F1A;&#x76F4;&#x63A5;&#x9650;&#x5236;&#x4F20;&#x5165;&#x5230;&#x65B9;&#x6CD5;&#x7684;&#x53C2;&#x6570;&#x4E2A;&#x6570;&#xFF0C;&#x5BFC;&#x81F4;&#x53C2;&#x6570;&#x4E22;&#x5931;. (&#x4E3E;&#x4E2A;&#x4F8B;&#x5B50;: &#x5982;&#x679C;&#x67D0;&#x4E2A;&#x5F15;&#x64CE;&#x9650;&#x5236;&#x4E86;&#x65B9;&#x6CD5;&#x53C2;&#x6570;&#x6700;&#x591A;&#x4E3A;4&#x4E2A; [&#x5B9E;&#x9645;&#x771F;&#x6B63;&#x7684;&#x53C2;&#x6570;&#x4E2A;&#x6570;&#x9650;&#x5236;&#x5F53;&#x7136;&#x8981;&#x9AD8;&#x5F97;&#x591A;&#x4E86;, &#x8FD9;&#x91CC;&#x53EA;&#x662F;&#x6253;&#x4E2A;&#x6BD4;&#x65B9;], &#x4E0A;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x4E2D;, &#x771F;&#x6B63;&#x901A;&#x8FC7; <code>apply </code>&#x4F20;&#x5230;&#x76EE;&#x6807;&#x65B9;&#x6CD5;&#x4E2D;&#x7684;&#x53C2;&#x6570;&#x4E3A; 5, 6, 2, 3, &#x800C;&#x4E0D;&#x662F;&#x5B8C;&#x6574;&#x7684; numbers &#x6570;&#x7EC4;.) &#x5982;&#x679C;&#x4F60;&#x7684;&#x53C2;&#x6570;&#x6570;&#x7EC4;&#x53EF;&#x80FD;&#x975E;&#x5E38;&#x5927;, &#x90A3;&#x4E48;&#x63A8;&#x8350;&#x4F7F;&#x7528;&#x4E0B;&#x9762;&#x8FD9;&#x79CD;&#x7B56;&#x7565;&#x6765;&#x5904;&#x7406;: &#x5C06;&#x53C2;&#x6570;&#x6570;&#x7EC4;&#x5207;&#x5757;&#x540E;&#x5FAA;&#x73AF;&#x4F20;&#x5165;&#x76EE;&#x6807;&#x65B9;&#x6CD5;:</p>

<pre class="brush: js">function minOfArray(arr) {
  var min = Infinity;
  var QUANTUM = 32768;

  for (var i = 0, len = arr.length; i &lt; len; i += QUANTUM) {
    var submin = Math.min.apply(null, arr.slice(i, Math.min(i + QUANTUM, len)));
    min = Math.min(submin, min);
  }

  return min;
}

var min = minOfArray([5, 6, 2, 3, 7]);</pre>

<h3 style="line-height: 24px;" id="&#x5728;monkey-patching&#x4E2D;&#x4F7F;&#x7528;apply">&#x5728;&quot;monkey-patching&quot;&#x4E2D;&#x4F7F;&#x7528;apply</h3>

<p>Apply&#x53EF;&#x4EE5;&#x4F5C;&#x4E3A;monkey-patch&#x4E00;&#x4E2A;Firefox&#x6216;JS&#x5E93;&#x5185;&#x5EFA;&#x51FD;&#x6570;&#x7684;&#x6700;&#x597D;&#x65B9;&#x5F0F;&#x3002;&#x5BF9;&#x4E8E;someobject.foo &#x51FD;&#x6570;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x7528;&#x4E00;&#x79CD;&#x65C1;&#x95E8;&#x5DE6;&#x9053;&#x7684;&#x65B9;&#x5F0F;&#x6765;&#x4FEE;&#x6539;&#x8FD9;&#x4E2A;&#x51FD;&#x6570;&#xFF0C;&#x50CF;&#x8FD9;&#x6837;&#xFF1A;</p>

<pre style="padding: 1em 0px 1em 30px; border-left-width: 6px; border-left-style: solid; font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; font-size: 14px; direction: ltr; white-space: normal; text-shadow: none; background-color: rgba(234, 239, 242, 0.247059);" class="brush: js  language-js"><code style="font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; direction: ltr; white-space: pre; color: inherit; text-shadow: none;" class="language-js"><span style="color: rgb(0, 119, 170);" class="keyword token">var</span> originalfoo <span style="background: rgba(255, 255, 255, 0.498039); color: rgb(166, 127, 89);" class="operator token">=</span> someobject<span style="color: rgb(153, 153, 153);" class="punctuation token">.</span>foo<span style="color: rgb(153, 153, 153);" class="punctuation token">;</span>
someobject<span style="color: rgb(153, 153, 153);" class="punctuation token">.</span>foo <span style="background: rgba(255, 255, 255, 0.498039); color: rgb(166, 127, 89);" class="operator token">=</span> <span style="color: rgb(0, 119, 170);" class="keyword token">function</span><span style="color: rgb(153, 153, 153);" class="punctuation token">(</span><span style="color: rgb(153, 153, 153);" class="punctuation token">)</span> <span style="color: rgb(153, 153, 153);" class="punctuation token">{</span>
 <span style="color: rgb(112, 128, 144); display: inherit;" class="comment token"> //&#x5728;&#x8C03;&#x7528;&#x51FD;&#x6570;&#x524D;&#x5E72;&#x4E9B;&#x4EC0;&#x4E48;
</span>  console<span style="color: rgb(153, 153, 153);" class="punctuation token">.</span><span style="color: rgb(221, 74, 104);" class="function token">log<span style="color: rgb(153, 153, 153);" class="punctuation token">(</span></span>arguments<span style="color: rgb(153, 153, 153);" class="punctuation token">)</span><span style="color: rgb(153, 153, 153);" class="punctuation token">;</span>
 <span style="color: rgb(112, 128, 144); display: inherit;" class="comment token"> //&#x50CF;&#x6B63;&#x5E38;&#x8C03;&#x7528;&#x8FD9;&#x4E2A;&#x51FD;&#x6570;&#x4E00;&#x6837;&#x6765;&#x8FDB;&#x884C;&#x8C03;&#x7528;&#xFF1A;
</span>  originalfoo<span style="color: rgb(153, 153, 153);" class="punctuation token">.</span><span style="color: rgb(221, 74, 104);" class="function token">apply<span style="color: rgb(153, 153, 153);" class="punctuation token">(</span></span><span style="color: rgb(0, 119, 170);" class="keyword token">this</span><span style="color: rgb(153, 153, 153);" class="punctuation token">,</span>arguments<span style="color: rgb(153, 153, 153);" class="punctuation token">)</span><span style="color: rgb(153, 153, 153);" class="punctuation token">;</span>
 <span style="color: rgb(112, 128, 144); display: inherit;" class="comment token"> //&#x5728;&#x8FD9;&#x91CC;&#x505A;&#x4E00;&#x4E9B;&#x8C03;&#x7528;&#x4E4B;&#x540E;&#x7684;&#x4E8B;&#x60C5;&#x3002;
</span><span style="color: rgb(153, 153, 153);" class="punctuation token">}</span></code></pre>

<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 0px; background: 0px 0px;" class="line-number">&#xA0;</div>

<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 19px; background: 0px 0px;" class="line-number">&#xA0;</div>

<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 38px; background: 0px 0px;" class="line-number">&#xA0;</div>

<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 57px; background: 0px 0px;" class="line-number">&#xA0;</div>

<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 76px; background: 0px 0px;" class="line-number">&#xA0;</div>

<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 95px; background: 0px 0px;" class="line-number">&#xA0;</div>

<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 114px; background: 0px 0px;" class="line-number">&#xA0;</div>

<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 133px; background: 0px 0px;" class="line-number">&#xA0;</div>

<p>&#x8FD9;&#x79CD;&#x65B9;&#x6CD5;&#x5728;&#x4F60;&#x60F3;&#x8981;debug&#x4E8B;&#x4EF6;&#xFF0C;&#x6216;&#x8005;&#x4E0E;&#x4E00;&#x4E9B;&#x6CA1;&#x6709;API&#x7684;&#x4E1C;&#x897F;&#x914D;&#x5408;&#xFF0C;&#x4F8B;&#x5982;&#x591A;&#x79CD; .on([event]... events, &#x6BD4;&#x5982;&#x90A3;&#x4E9B;&#x5728;<a href="https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector#Developer_API">Devtools Inspector</a>&#x4E2D;&#x53EF;&#x7528;&#x7684;).</p>

<h2 style="margin-bottom: 20px; line-height: 30px;" id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x8BF4;&#x660E;</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" class="external" href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf" title="ECMAScript 3rd Edition (ECMA-262)">ECMAScript 3rd Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;&#x3002;&#x5728;&#xA0;JavaScript 1.3&#x4E2D;&#x5B9E;&#x73B0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.3.4.3" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Function.prototype.apply</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-function.prototype.apply" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Function.prototype.apply</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 style="margin-bottom: 20px; line-height: 30px;" id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
  <tr>
   <td>ES 5.1 generic array-like object as <a title="arguments&#xA0;&#x662F;&#x4E00;&#x4E2A;&#x7C7B;&#x4F3C;&#x6570;&#x7EC4;&#x7684;&#x5BF9;&#x8C61;, &#x5BF9;&#x5E94;&#x4E8E;&#x4F20;&#x9012;&#x7ED9;&#x51FD;&#x6570;&#x7684;&#x53C2;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments"><code>arguments</code></a></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><a title="Released on 2011-03-22." href="/en-US/Firefox/Releases/4">4.0</a> (2.0)</td>
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
  <tr>
   <td>ES 5.1 generic array-like object as <a title="arguments&#xA0;&#x662F;&#x4E00;&#x4E2A;&#x7C7B;&#x4F3C;&#x6570;&#x7EC4;&#x7684;&#x5BF9;&#x8C61;, &#x5BF9;&#x5E94;&#x4E8E;&#x4F20;&#x9012;&#x7ED9;&#x51FD;&#x6570;&#x7684;&#x53C2;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments"><code>arguments</code></a></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>4.0 (2.0)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 style="margin-bottom: 20px; line-height: 30px;" name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments"><code>arguments </code></a> object</li>
 <li><a title="bind()&#x65B9;&#x6CD5;&#x4F1A;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x51FD;&#x6570;&#x3002;&#x5F53;&#x8FD9;&#x4E2A;&#x65B0;&#x51FD;&#x6570;&#x88AB;&#x8C03;&#x7528;&#x65F6;&#xFF0C;bind()&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#x5C06;&#x4F5C;&#x4E3A;&#x5B83;&#x8FD0;&#x884C;&#x65F6;&#x7684; this, &#x4E4B;&#x540E;&#x7684;&#x4E00;&#x5E8F;&#x5217;&#x53C2;&#x6570;&#x5C06;&#x4F1A;&#x5728;&#x4F20;&#x9012;&#x7684;&#x5B9E;&#x53C2;&#x524D;&#x4F20;&#x5165;&#x4F5C;&#x4E3A;&#x5B83;&#x7684;&#x53C2;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind"><code>Function.prototype.bind()</code></a></li>
 <li><a title="call() &#x65B9;&#x6CD5;&#x5728;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;this&#x503C;&#x548C;&#x82E5;&#x5E72;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x503C;&#x7684;&#x524D;&#x63D0;&#x4E0B;&#x8C03;&#x7528;&#x67D0;&#x4E2A;&#x51FD;&#x6570;&#x6216;&#x65B9;&#x6CD5;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call"><code>Function.prototype.call()</code></a></li>
 <li><a title="&#x901A;&#x5E38;&#x6765;&#x8BF4;&#xFF0C;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x5C31;&#x662F;&#x4E00;&#x4E2A;&#x53EF;&#x4EE5;&#x88AB;&#x5916;&#x90E8;&#x4EE3;&#x7801;&#x8C03;&#x7528;(&#x6216;&#x8005;&#x51FD;&#x6570;&#x672C;&#x8EAB;&#x9012;&#x5F52;&#x8C03;&#x7528;)&#x7684;&quot;&#x5B50;&#x7A0B;&#x5E8F;&quot;&#x3002;&#x548C;&#x7A0B;&#x5E8F;&#x672C;&#x8EAB;&#x4E00;&#x6837;&#xFF0C;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x7684;&#x51FD;&#x6570;&#x4F53;&#x662F;&#x7531;&#x4E00;&#x7CFB;&#x5217;&#x7684;&#x8BED;&#x53E5;&#x7EC4;&#x6210;&#x7684;&#x3002;&#x51FD;&#x6570;&#x53EF;&#x4EE5;&#x63A5;&#x6536;&#x4F20;&#x5165;&#x53C2;&#x6570;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Functions">Functions and function scope</a></li>
 <li><a title="&#x9759;&#x6001;&#x65B9;&#x6CD5;&#xA0;Reflect.apply() &#x901A;&#x8FC7;&#x6307;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x5217;&#x8868;&#x53D1;&#x8D77;&#x5BF9;&#x76EE;&#x6807;(target)&#x51FD;&#x6570;&#x7684;&#x8C03;&#x7528;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/apply"><code>Reflect.apply()</code></a></li>
</ul>
                  
                
              