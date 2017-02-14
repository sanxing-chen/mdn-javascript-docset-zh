
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section><div style="background: #9CF49C;" class="overheadIndicator"> 
    <p><strong>&#x8BE5;&#x65B0;&#x7279;&#x6027;&#x5C5E;&#x4E8E; ECMAScript 2015&#xFF08;ES6&#xFF09;&#x89C4;&#x8303;&#xFF0C;&#x5728;&#x4F7F;&#x7528;&#x65F6;&#x8BF7;&#x6CE8;&#x610F;&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;&#x3002;</strong></p> 
</div></div>

<p>&#x51E0;&#x4E2A;&#x65B0;&#x589E;&#x52A0;&#x7684;&#x5230;ECMAScript 2015 (ES6)&#xFF0C;&#x5B83;&#x4E0D;&#x5E76;&#x662F;&#x65B0;&#x7684;&#x5185;&#x7F6E;&#x63D2;&#x4EF6;&#x6216;&#x8BED;&#x6CD5;&#xFF0C;&#x800C;&#x662F;&#x4E00;&#x79CD;&#x534F;&#x8BAE;<span style="line-height: 1.5;">&#x3002;&#x8FD9;&#x79CD;&#x534F;&#x8BAE;&#x80FD;&#x88AB;&#x4EFB;&#x4F55;&#x9075;&#x5FAA;&#x67D0;&#x4E9B;&#x7EA6;&#x5B9A;&#x7684;&#x5BF9;&#x8C61;&#x5B9E;&#x73B0;&#x3002;</span></p>

<p>&#x6709;&#x4E24;&#x4E2A;&#x534F;&#x8BAE;&#xFF1A;&#x53EF;&#x8FED;&#x4EE3;&#x534F;&#x8BAE;&#x548C;&#x8FED;&#x4EE3;&#x5668;&#x534F;&#x8BAE;&#x3002;</p>

<h2 id="&#x53EF;&#x8FED;&#x4EE3;&#x534F;&#x8BAE;">&#x53EF;&#x8FED;&#x4EE3;&#x534F;&#x8BAE;</h2>

<p><strong>&#x53EF;&#x8FED;&#x4EE3;</strong>&#x534F;&#x8BAE;&#x5141;&#x8BB8; JavaScript &#x5BF9;&#x8C61;&#x53BB;&#x5B9A;&#x4E49;&#x6216;&#x5B9A;&#x5236;&#x5B83;&#x4EEC;&#x7684;&#x8FED;&#x4EE3;&#x884C;&#x4E3A;, &#x4F8B;&#x5982;&#xFF08;&#x5B9A;&#x4E49;&#xFF09;&#x5728;&#x4E00;&#x4E2A; <a title="for...of&#x8BED;&#x53E5;&#x5728;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;(&#x5305;&#x62EC; Array,&#xA0;Map, Set, String, TypedArray&#xFF0C;arguments&#xA0;&#x5BF9;&#x8C61;&#x7B49;&#x7B49;)&#x4E0A;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x8FED;&#x4EE3;&#x5FAA;&#x73AF;&#xFF0C;&#x5BF9;&#x6BCF;&#x4E2A;&#x4E0D;&#x540C;&#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x503C;,&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#x6709;&#x6267;&#x884C;&#x8BED;&#x53E5;&#x7684;&#x8FED;&#x4EE3;&#x6302;&#x94A9;." href="/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of"><code>for..of</code></a> &#x7ED3;&#x6784;&#x4E2D;&#x4EC0;&#x4E48;&#x503C;&#x53EF;&#x4EE5;&#x88AB;&#x5FAA;&#x73AF;&#xFF08;&#x5F97;&#x5230;&#xFF09;&#x3002;&#x4E00;&#x4E9B;&#x5185;&#x7F6E;&#x7C7B;&#x578B;&#x90FD;&#x662F;&#x5185;&#x7F6E;&#x7684;&#x53EF;&#x904D;&#x5386;&#x5BF9;&#x8C61;&#x5E76;&#x4E14;&#x6709;&#x9ED8;&#x8BA4;&#x7684;&#x8FED;&#x4EE3;&#x884C;&#x4E3A;, &#x6BD4;&#x5982;&#xA0;<a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Array"><code>Array</code></a> or <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Map"><code>Map</code></a>, &#x53E6;&#x4E00;&#x4E9B;&#x7C7B;&#x578B;&#x5219;&#x4E0D;&#x662F;&#xA0;(&#x6BD4;&#x5982;<a title="Object &#x6784;&#x9020;&#x51FD;&#x6570;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5305;&#x88C5;&#xFF08;object wrapper&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object"><code>Object</code></a>) &#x3002;</p>

<p>&#x4E3A;&#x4E86;&#x53D8;&#x6210;&#x53EF;&#x904D;&#x5386;&#x5BF9;&#x8C61;&#xFF0C; &#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5FC5;&#x987B;&#x5B9E;&#x73B0;&#xA0;<strong>@@iterator </strong>&#x65B9;&#x6CD5;, &#x610F;&#x601D;&#x662F;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#xFF08;&#x6216;&#x8005;&#x5B83;&#x539F;&#x578B;&#x94FE;<a href="/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain">prototype chain</a>&#x4E0A;&#x7684;&#x67D0;&#x4E2A;&#x5BF9;&#x8C61;&#xFF09;&#x5FC5;&#x987B;&#x6709;&#x4E00;&#x4E2A;&#x540D;&#x5B57;&#x662F; <a title="&#x7B26;&#x53F7;&#x662F;&#x4E00;&#x79CD;&#x7279;&#x6B8A;&#x7684;&#x3001;&#x4E0D;&#x53EF;&#x53D8;&#x7684;&#x6570;&#x636E;&#x7C7B;&#x578B;&#xFF0C;&#x53EF;&#x4EE5;&#x4F5C;&#x4E3A;&#x5BF9;&#x8C61;&#x5C5E;&#x6027;&#x7684;&#x6807;&#x8BC6;&#x7B26;&#x4F7F;&#x7528;&#x3002;&#x7B26;&#x53F7;&#x5BF9;&#x8C61;&#x662F;&#x4E00;&#x4E2A;&#x7B26;&#x53F7;&#xA0;&#x539F;&#x59CB;&#x6570;&#x636E;&#x7C7B;&#x578B;&#x7684;&#x9690;&#x5F0F;&#x5BF9;&#x8C61;&#x5305;&#x88C5;&#x5668;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol"><code>Symbol</code></a><code>.iterator</code> &#x7684;&#x5C5E;&#x6027;:</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">&#x5C5E;&#x6027;</th>
   <th scope="col">&#x503C;</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>[Symbol.iterator]</code></td>
   <td>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x65E0;&#x53C2;&#x51FD;&#x6570;&#xFF0C;&#x88AB;&#x8FD4;&#x56DE;&#x5BF9;&#x8C61;&#x7B26;&#x5408;&#x8FED;&#x4EE3;&#x5668;&#x534F;&#x8BAE;&#x3002;</td>
  </tr>
 </tbody>
</table>

<p><font><font>&#x5F53;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x9700;&#x8981;&#x88AB;&#x904D;&#x5386;&#x7684;&#x65F6;&#x5019;&#xFF08;&#x6BD4;&#x5982;&#x5F00;&#x59CB;&#x7528;&#x4E8E;&#x4E00;&#x4E2A;</font></font><code><font><font>for..of&#x5FAA;&#x73AF;&#x4E2D;</font></font></code><font><font>&#xFF09;&#xFF0C;&#x5B83;&#x7684;</font></font><strong>@@iterator</strong><font><font>&#x65B9;&#x6CD5;&#x88AB;&#x8C03;&#x7528;&#x5E76;&#x4E14;&#x65E0;&#x53C2;&#x6570;&#xFF0C;</font></font>&#x7136;&#x540E;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7528;&#x4E8E;&#x5728;&#x904D;&#x5386;&#x4E2D;&#x83B7;&#x5F97;&#x503C;&#x7684;&#x8FED;&#x4EE3;&#x5668;<font><font>&#x3002;</font></font></p>

<h2 id="&#x8FED;&#x4EE3;&#x5668;&#x534F;&#x8BAE;"><strong><span style="line-height: 1.5;">&#x8FED;&#x4EE3;&#x5668;&#x534F;&#x8BAE;</span></strong></h2>

<p><font><font>&#x8BE5;</font></font><strong><span style="line-height: 1.5;">&#x8FED;&#x4EE3;&#x5668;</span></strong><font><font>&#x534F;&#x8BAE;&#x5B9A;&#x4E49;&#x4E86;&#x4E00;&#x79CD;&#x6807;&#x51C6;&#x7684;&#x65B9;&#x5F0F;&#x6765;&#x4EA7;&#x751F;</font></font>&#x4E00;&#x4E2A;<font><font>&#x6709;&#x9650;&#x6216;&#x65E0;&#x9650;&#x5E8F;&#x5217;</font></font><font><font>&#x7684;&#x503C;&#x3002;</font></font></p>

<p>&#x5F53;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x88AB;&#x8BA4;&#x4E3A;&#x662F;&#x4E00;&#x4E2A;&#x8FED;&#x4EE3;&#x5668;&#x65F6;&#xFF0C;&#x5B83;<font><font>&#x5B9E;&#x73B0;&#x4E86;&#x4E00;&#x4E2A; </font></font><code><strong><font>next()&#xA0;</font></strong></code><font><font>&#x7684;&#x65B9;&#x6CD5;&#x5E76;&#x4E14;&#x62E5;&#x6709;&#x4EE5;&#x4E0B;&#x542B;&#x4E49;&#xFF1A;</font></font></p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x5C5E;&#x6027;</th>
   <th scope="col">&#x503C;</th>
  </tr>
  <tr>
   <td><code>next</code></td>
   <td>
    <p>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x65E0;&#x53C2;&#x51FD;&#x6570;&#xFF0C;&#x88AB;&#x8FD4;&#x56DE;&#x5BF9;&#x8C61;&#x62E5;&#x6709;&#x4E24;&#x4E2A;&#x5C5E;&#x6027;&#xFF1A;</p>

    <ul>
     <li><code>done</code> (boolean)

      <ul>
       <li>&#x5982;&#x679C;&#x8FED;&#x4EE3;&#x5668;&#x5DF2;&#x7ECF;&#x7ECF;&#x8FC7;&#x4E86;&#x88AB;&#x8FED;&#x4EE3;&#x5E8F;&#x5217;&#x65F6;&#x4E3A; true&#x3002;&#x8FD9;&#x65F6; value &#x53EF;&#x80FD;&#x63CF;&#x8FF0;&#x4E86;&#x8BE5;&#x8FED;&#x4EE3;&#x5668;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x3002;&#x8FD4;&#x56DE;&#x503C;&#x5728;<a href="http://www.2ality.com/2013/06/iterators-generators.html#generators-as-threads" class="external">&#x8FD9;&#x91CC;</a>&#x6709;&#x66F4;&#x591A;&#x89E3;&#x91CA;&#x3002;</li>
       <li>&#x5982;&#x679C;&#x8FED;&#x4EE3;&#x5668;&#x53EF;&#x4EE5;&#x4EA7;&#x751F;&#x5E8F;&#x5217;&#x4E2D;&#x7684;&#x4E0B;&#x4E00;&#x4E2A;&#x503C;&#xFF0C;&#x5219;&#x4E3A; false&#x3002;&#x8FD9;&#x7B49;&#x6548;&#x4E8E;&#x8FDE;&#x540C; done &#x5C5E;&#x6027;&#x4E5F;&#x4E0D;&#x6307;&#x5B9A;&#x3002;</li>
      </ul>
     </li>
     <li><code>value</code> - &#x8FED;&#x4EE3;&#x5668;&#x8FD4;&#x56DE;&#x7684;&#x4EFB;&#x4F55; JavaScript &#x503C;&#x3002;done &#x4E3A; true &#x65F6;&#x53EF;&#x7701;&#x7565;&#x3002;</li>
    </ul>
   </td>
  </tr>
 </tbody>
</table>

<p>&#x4E00;&#x4E9B;&#x8FED;&#x4EE3;&#x5668;&#x662F;&#x8F6C;&#x6362;&#x81EA;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;:</p>

<pre class="brush: js">var someArray = [1, 5, 7];
var someArrayEntries = someArray.entries();

someArrayEntries.toString();&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; // &quot;[object Array Iterator]&quot;
someArrayEntries === someArrayEntries[Symbol.iterator]();    // true
</pre>

<h2 id="&#x4F7F;&#x7528;&#x8FED;&#x4EE3;&#x534F;&#x8BAE;&#x7684;&#x4F8B;&#x5B50;">&#x4F7F;&#x7528;&#x8FED;&#x4EE3;&#x534F;&#x8BAE;&#x7684;&#x4F8B;&#x5B50;</h2>

<p><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/String"><code>String</code></a> &#x662F;&#x4E00;&#x4E2A;&#x5185;&#x7F6E;&#x7684;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;:</p>

<pre class="brush: js">var someString = &quot;hi&quot;;
typeof someString[Symbol.iterator];          // &quot;function&quot;
</pre>

<p><code>String</code>&#xA0;&#x7684;&#x9ED8;&#x8BA4;&#x8FED;&#x4EE3;&#x5668;&#x4F1A;&#x4E00;&#x4E2A;&#x63A5;&#x4E00;&#x4E2A;&#x8FD4;&#x56DE;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x5B57;&#x7B26;&#xFF1A;</p>

<pre class="brush: js">var iterator = someString[Symbol.iterator]();
iterator + &quot;&quot;;                               // &quot;[object String Iterator]&quot;
 
iterator.next();                             // { value: &quot;h&quot;, done: false }
iterator.next();                             // { value: &quot;i&quot;, done: false }
iterator.next();                             // { value: undefined, done: true }</pre>

<p>&#x4E00;&#x4E9B;&#x5185;&#x7F6E;&#x7684;&#x8BED;&#x6CD5;&#x7ED3;&#x6784;&#xFF0C;&#x6BD4;&#x5982;&#xA0;<a href="/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator">spread operator</a>&#xFF0C;&#x5185;&#x90E8;&#x4E5F;&#x4F7F;&#x7528;&#x4E86;&#x540C;&#x6837;&#x7684;&#x8FED;&#x4EE3;&#x534F;&#x8BAE;&#xFF1A;</p>

<pre class="brush: js">[...someString]                              // [&quot;h&quot;, &quot;i&quot;]</pre>

<p>&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x81EA;&#x5DF1;&#x7684;&#xA0;<code>@@iterator &#x65B9;&#x6CD5;&#x91CD;&#x65B0;&#x5B9A;&#x4E49;&#x8FED;&#x4EE3;&#x884C;&#x4E3A;&#xFF1A;</code></p>

<pre class="brush: js">var someString = new String(&quot;hi&quot;);          // need to construct a String object explicitly to avoid auto-boxing

someString[Symbol.iterator] = function() {
  return { // this is the iterator object, returning a single element, the string &quot;bye&quot;
    next: function() {
      if (this._first) {
        this._first = false;
        return { value: &quot;bye&quot;, done: false };
      } else {
        return { done: true };
      }
    },
    _first: true
  };
};
</pre>

<p>&#x6CE8;&#x610F;&#x91CD;&#x65B0;&#x5B9A;&#x4E49;<code> @@iterator</code> &#x65B9;&#x6CD5;&#x662F;&#x5982;&#x4F55;&#x5F71;&#x54CD;&#x5185;&#x7F6E;&#x8BED;&#x6CD5;&#x7ED3;&#x6784;&#x7684;&#x884C;&#x4E3A;&#x7684;&#xFF0C;&#x5B83;&#x4F7F;&#x7528;&#x6570;&#x636E;&#x5BF9;&#x8C61;&#x76F8;&#x540C;&#x7684;&#x8FED;&#x4EE3;&#x534F;&#x8BAE;:</p>

<pre class="brush: js">[...someString];                              // [&quot;bye&quot;]
someString + &quot;&quot;;                              // &quot;hi&quot;
</pre>

<h2 id="&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#x793A;&#x4F8B;">&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#x793A;&#x4F8B;</h2>

<h3 id="&#x5185;&#x7F6E;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;">&#x5185;&#x7F6E;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;</h3>

<p><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/String"><code>String</code></a>, <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Array"><code>Array</code></a>, <a title="TypedArray &#x5BF9;&#x8C61;&#x8868;&#x793A;&#x5E95;&#x5C42;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#x7F13;&#x5B58;&#x533A;&#x7684;&#x7C7B;&#x6570;&#x7EC4;&#x89C6;&#x56FE;. &#x6CA1;&#x6709;&#x540D;&#x4E3A; TypedArray &#x7684;&#x5168;&#x5C40;&#x5C5E;&#x6027;&#xFF0C;&#x4E5F;&#x4E0D;&#x5B58;&#x5728;&#x76F4;&#x63A5;&#x53EF;&#x89C1;&#x7684; TypedArray &#x6784;&#x9020;&#x5668;&#x3002;&#x76F8;&#x53CD;&#xFF0C;&#x6709;&#x82E5;&#x5E72;&#x4E0D;&#x540C;&#x7684;&#x5168;&#x5C40;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x662F;&#x7C7B;&#x578B;&#x6570;&#x7EC4;&#x7684;&#x7279;&#x6B8A;&#x6784;&#x9020;&#x5668;&#xFF08;typed array constructors for specific element types&#xFF09;&#xFF0C;&#x7528;&#x4E8E;&#x7279;&#x5B9A;&#x7684;&#x5143;&#x7D20;&#x7C7B;&#x578B;&#xFF0C;&#x8FD9;&#x4E9B;&#x5728;&#x4E0B;&#x6587;&#x6709;&#x5217;&#x51FA;&#x3002;&#x63A5;&#x4E0B;&#x6765;&#xFF0C;&#x4F1A;&#x4ECB;&#x7ECD;&#x80FD;&#x548C;&#x4EFB;&#x4F55;&#x5305;&#x542B;&#x4EFB;&#x610F;&#x7C7B;&#x578B;&#x5143;&#x7D20;&#x7684;&#x7C7B;&#x578B;&#x6570;&#x7EC4;&#x4E00;&#x8D77;&#x4F7F;&#x7528;&#x7684;&#x901A;&#x7528;&#x5C5E;&#x6027;&#x548C;&#x65B9;&#x6CD5;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray"><code>TypedArray</code></a>, <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Map"><code>Map</code></a> and <a title="&#x96C6;&#x5408;&#xFF08;Set&#xFF09;&#x5BF9;&#x8C61;&#x5141;&#x8BB8;&#x4F60;&#x5B58;&#x50A8;&#x4EFB;&#x610F;&#x7C7B;&#x578B;&#x7684;&#x552F;&#x4E00;&#x503C;&#xFF08;&#x4E0D;&#x80FD;&#x91CD;&#x590D;&#xFF09;&#xFF0C;&#x65E0;&#x8BBA;&#x5B83;&#x662F;&#x539F;&#x59CB;&#x503C;&#x6216;&#x8005;&#x662F;&#x5BF9;&#x8C61;&#x5F15;&#x7528;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set"><code>Set</code></a> &#x662F;&#x6240;&#x6709;&#x5185;&#x7F6E;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#xFF0C;&#xA0;&#x56E0;&#x4E3A;&#x5B83;&#x4EEC;&#x7684;&#x539F;&#x578B;&#x5BF9;&#x8C61;&#x90FD;&#x6709;&#x4E00;&#x4E2A;&#xA0;<code>@@</code><code>iterator</code>&#xA0;&#x65B9;&#x6CD5;.</p>

<h3 id="&#x81EA;&#x5B9A;&#x4E49;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;">&#x81EA;&#x5B9A;&#x4E49;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;</h3>

<p>&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x5B9E;&#x73B0;&#x4E00;&#x4E2A;&#x81EA;&#x5DF1;&#x7684;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#xFF0C;&#x5C31;&#x50CF;&#x8FD9;&#x6837;:</p>

<pre class="brush: js">var myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
[...myIterable]; // [1, 2, 3]
</pre>

<h3 id="&#x63A5;&#x53D7;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#x7684;&#x5185;&#x7F6E;_APIs">&#x63A5;&#x53D7;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#x7684;&#x5185;&#x7F6E; APIs</h3>

<p>&#x8BB8;&#x591A; APIs &#x63A5;&#x53D7;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#xFF08;&#x4F5C;&#x4E3A;&#x53C2;&#x6570;&#xFF0C;&#x8BD1;&#x6CE8;&#xFF09;, &#x4F8B;&#x5982;&#xFF1A;<a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Map"><code>Map([iterable])</code></a>, <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/WeakMap"><code>WeakMap([iterable])</code></a>, <a title="&#x96C6;&#x5408;&#xFF08;Set&#xFF09;&#x5BF9;&#x8C61;&#x5141;&#x8BB8;&#x4F60;&#x5B58;&#x50A8;&#x4EFB;&#x610F;&#x7C7B;&#x578B;&#x7684;&#x552F;&#x4E00;&#x503C;&#xFF08;&#x4E0D;&#x80FD;&#x91CD;&#x590D;&#xFF09;&#xFF0C;&#x65E0;&#x8BBA;&#x5B83;&#x662F;&#x539F;&#x59CB;&#x503C;&#x6216;&#x8005;&#x662F;&#x5BF9;&#x8C61;&#x5F15;&#x7528;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set"><code>Set([iterable])</code></a> and <a title="&#x4E00;&#x4E2A;&#xA0;WeakSet&#xA0;&#x5BF9;&#x8C61;&#x662F;&#x4E00;&#x4E2A;&#x65E0;&#x5E8F;&#x7684;&#x96C6;&#x5408;, &#x53EF;&#x4EE5;&#x7528;&#x5B83;&#x6765;&#x5B58;&#x50A8;&#x4EFB;&#x610F;&#x7684;&#x5BF9;&#x8C61;&#x503C;, &#x5E76;&#x4E14;&#x5BF9;&#x8FD9;&#x4E9B;&#x5BF9;&#x8C61;&#x503C;&#x4FDD;&#x6301;&#x5F31;&#x5F15;&#x7528;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet"><code>WeakSet([iterable])</code></a>:</p>

<pre class="brush: js">var myObj = {};
new Map([[1,&quot;a&quot;],[2,&quot;b&quot;],[3,&quot;c&quot;]]).get(2);               // &quot;b&quot;
new WeakMap([[{},&quot;a&quot;],[myObj,&quot;b&quot;],[{},&quot;c&quot;]]).get(myObj); // &quot;b&quot;
new Set([1, 2, 3]).has(3);                               // true
new Set(&quot;123&quot;).has(&quot;2&quot;);                                 // true
new WeakSet(function*() {
    yield {};
    yield myObj;
    yield {};
}()).has(myObj);                                         // true
</pre>

<p>&#x53E6;&#x5916;&#x8FD8;&#x6709; <a title="Promise.all(iterable)&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;promise&#xFF0C;&#x8BE5;promise&#x4F1A;&#x7B49;iterable&#x53C2;&#x6570;&#x5185;&#x7684;&#x6240;&#x6709;promise&#x90FD;&#x88AB;resolve&#x540E;&#x88AB;resolve&#xFF0C;&#x6216;&#x4EE5;&#x7B2C;&#x4E00;&#x4E2A;promise&#x88AB;reject&#x7684;&#x539F;&#x56E0;&#x800C;reject &#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all"><code>Promise.all(iterable)</code></a>, <a title="Promise.race(iterable)&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;promise&#xFF0C;&#x8FD9;&#x4E2A;promise&#x5728;iterable&#x4E2D;&#x7684;&#x4EFB;&#x610F;&#x4E00;&#x4E2A;promise&#x88AB;&#x89E3;&#x51B3;&#x6216;&#x62D2;&#x7EDD;&#x540E;&#xFF0C;&#x7ACB;&#x523B;&#x4EE5;&#x76F8;&#x540C;&#x7684;&#x89E3;&#x51B3;&#x503C;&#x88AB;&#x89E3;&#x51B3;&#x6216;&#x4EE5;&#x76F8;&#x540C;&#x7684;&#x62D2;&#x7EDD;&#x539F;&#x56E0;&#x88AB;&#x62D2;&#x7EDD;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/race"><code>Promise.race(iterable)</code></a> &#x4EE5;&#x53CA;&#xA0;<a title="Array.from() &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x5C06;&#x4E00;&#x4E2A;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x6216;&#x53EF;&#x904D;&#x5386;&#x5BF9;&#x8C61;&#x8F6C;&#x6362;&#x6210;&#x771F;&#x6B63;&#x7684;&#x6570;&#x7EC4;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from"><code>Array.from()</code></a>.</p>

<h3 id="&#x7528;&#x4E8E;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#x7684;&#x8BED;&#x6CD5;">&#x7528;&#x4E8E;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#x7684;&#x8BED;&#x6CD5;</h3>

<p>&#x4E00;&#x4E9B;&#x8BED;&#x53E5;&#x548C;&#x8868;&#x8FBE;&#x5F0F;&#x662F;&#x9884;&#x6599;&#x4F1A;&#x7528;&#x4E8E;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#xFF0C;&#x6BD4;&#x5982;&#xA0;<code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of">for-of</a></code>&#xA0;&#x5FAA;&#x73AF;&#xFF0C;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator">spread operator</a>, <code><a href="/en-US/docs/Web/JavaScript/Reference/Operators/yield*">yield*</a>&#xA0;&#x548C;</code>&#xA0;<a href="/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">destructuring assignment</a>&#x3002;</p>

<pre class="brush: js">for(let value of [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]){
    console.log(value);
}
// &quot;a&quot;
// &quot;b&quot;
// &quot;c&quot;

[...&quot;abc&quot;]; // [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]

function* gen(){
  yield* [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;];
}

gen().next(); // { value:&quot;a&quot;, done:false }

[a, b, c] = new Set([&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]);
a // &quot;a&quot;

</pre>

<h3 id="Non-well-formed_(&#x975E;-&#x826F;&#x597D;-&#x683C;&#x5F0F;&#x5316;&#x7684;)&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;">Non-well-formed (&#x975E;-&#x826F;&#x597D;-&#x683C;&#x5F0F;&#x5316;&#x7684;)&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;</h3>

<p>&#x5982;&#x679C;&#x4E00;&#x4E2A;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#x7684;<code> @@iterator &#x65B9;&#x6CD5;&#x4E0D;&#x662F;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x8FED;&#x4EE3;&#x5668;&#x5BF9;&#x8C61;&#xFF0C;&#x90A3;&#x4E48;&#x5B83;&#x5C31;&#x662F;&#x4E00;&#x4E2A;</code> non-well-formed&#xA0;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#xA0;&#x3002;&#x4F7F;&#x7528;&#x5B83;&#x53EF;&#x80FD;&#x4F1A;&#x53D1;&#x751F;&#x5982;&#x4E0B;&#x7684;&#x8FD0;&#x884C;&#x65F6;&#x5F02;&#x5E38;&#x6216;&#x8005; buggy &#x884C;&#x4E3A;:</p>

<pre class="brush: js">var nonWellFormedIterable = {}
nonWellFormedIterable[Symbol.iterator] = () =&gt; 1
[...nonWellFormedIterable] // TypeError: [] is not a function
</pre>

<h2 id="&#x8FED;&#x4EE3;&#x5668;&#x793A;&#x4F8B;">&#x8FED;&#x4EE3;&#x5668;&#x793A;&#x4F8B;</h2>

<h3 id="&#x7B80;&#x5355;&#x8FED;&#x4EE3;&#x5668;">&#x7B80;&#x5355;&#x8FED;&#x4EE3;&#x5668;</h3>

<pre class="brush: js">function makeIterator(array){
    var nextIndex = 0;
    
    return {
       next: function(){
           return nextIndex &lt; array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    };
}

var it = makeIterator([&apos;yo&apos;, &apos;ya&apos;]);

console.log(it.next().value); // &apos;yo&apos;
console.log(it.next().value); // &apos;ya&apos;
console.log(it.next().done);  // true
</pre>

<h3 id="&#x65E0;&#x7A77;&#x8FED;&#x4EE3;&#x5668;">&#x65E0;&#x7A77;&#x8FED;&#x4EE3;&#x5668;</h3>

<pre class="brush: js">function idMaker(){
    var index = 0;
    
    return {
       next: function(){
           return {value: index++, done: false};
       }
    };
}

var it = idMaker();

console.log(it.next().value); // &apos;0&apos;
console.log(it.next().value); // &apos;1&apos;
console.log(it.next().value); // &apos;2&apos;
// ...
</pre>

<h3 id="&#x751F;&#x6210;&#x5668;&#x5F0F;&#x7684;&#x8FED;&#x4EE3;&#x5668;">&#x751F;&#x6210;&#x5668;&#x5F0F;&#x7684;&#x8FED;&#x4EE3;&#x5668;</h3>

<pre class="brush: js">function* makeSimpleGenerator(array){
    var nextIndex = 0;
    
    while(nextIndex &lt; array.length){
        yield array[nextIndex++];
    }
}

var gen = makeSimpleGenerator([&apos;yo&apos;, &apos;ya&apos;]);

console.log(gen.next().value); // &apos;yo&apos;
console.log(gen.next().value); // &apos;ya&apos;
console.log(gen.next().done);  // true



function* idMaker(){
    var index = 0;
    while(true)
        yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // &apos;0&apos;
console.log(gen.next().value); // &apos;1&apos;
console.log(gen.next().value); // &apos;2&apos;
// ...
</pre>

<h2 id="&#x751F;&#x6210;&#x5668;&#x5BF9;&#x8C61;&#x5230;&#x5E95;&#x662F;&#x4E00;&#x4E2A;&#x8FED;&#x4EE3;&#x5668;&#x8FD8;&#x662F;&#x4E00;&#x4E2A;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;">&#x751F;&#x6210;&#x5668;&#x5BF9;&#x8C61;&#x5230;&#x5E95;&#x662F;&#x4E00;&#x4E2A;&#x8FED;&#x4EE3;&#x5668;&#x8FD8;&#x662F;&#x4E00;&#x4E2A;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;?</h2>

<p><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator">&#x751F;&#x6210;&#x5668;&#x5BF9;&#x8C61;</a>&#xA0;&#x65E2;&#x662F;&#x8FED;&#x4EE3;&#x5668;&#x4E5F;&#x662F;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;:</p>

<pre class="brush: js">var aGeneratorObject = function*(){
    yield 1;
    yield 2;
    yield 3;
}();
typeof aGeneratorObject.next;
// &quot;function&quot;, because it has a next method, so it&apos;s an iterator
typeof aGeneratorObject[Symbol.iterator];
// &quot;function&quot;, because it has an @@iterator method, so it&apos;s an iterable
aGeneratorObject[Symbol.iterator]() === aGeneratorObject;
// true, because its @@iterator method return its self (an iterator), so it&apos;s an well-formed iterable
[...aGeneratorObject];
// [1, 2, 3]
</pre>

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
   <th>&#x7279;&#x6027;</th>
   <th>Chrome</th>
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari (WebKit)</th>
  </tr>
  <tr>
   <td>&#x57FA;&#x672C;&#x652F;&#x6301;</td>
   <td>39.0</td>
   <td><a title="Released on 2014-02-04." href="/en-US/Firefox/Releases/27">27.0</a> (27.0)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>26</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
  <tr>
   <td><code>IteratorResult</code> object instead of throwing</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><a title="Released on 2014-04-29." href="/en-US/Firefox/Releases/29">29.0</a> (29.0)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<div id="compat-mobile">
<table class="compat-table">
 <tbody>
  <tr>
   <th>&#x7279;&#x6027;</th>
   <th>Android</th>
   <th>Android Webview</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
   <th>Chrome for Android</th>
  </tr>
  <tr>
   <td>&#x57FA;&#x672C;&#x652F;&#x6301;</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>27.0 (27.0)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>39.0</td>
  </tr>
  <tr>
   <td><code>IteratorResult</code> object instead of throwing</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>29.0 (29.0)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="Firefox-specific_notes">Firefox-specific notes</h2>

<h3 id="IteratorResult_object_returned_instead_of_throwing"><code>IteratorResult</code> object returned instead of throwing</h3>

<p>Starting with Gecko 29 (Firefox 29 / Thunderbird 29 / SeaMonkey 2.26), the completed generator function no longer throws a <a title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a> &quot;generator has already finished&quot;. Instead, it returns an <code>IteratorResult</code> object like <code>{ value: undefined, done: true }</code> (<a title="FIXED: Return IteratorResult object for completed generators instead of throwing" href="https://bugzilla.mozilla.org/show_bug.cgi?id=958951" class="external">bug&#xA0;958951</a>).</p>

<h3 id="Iterator_property_and_iterator_symbol"><code>Iterator</code> property and <code>@@iterator</code> symbol</h3>

<p>From Gecko 17 (Firefox 17 / Thunderbird 17 / SeaMonkey 2.14) to Gecko 26 (Firefox 26 / Thunderbird 26 / SeaMonkey 2.23 / Firefox OS 1.2) the <code>iterator</code> property was used (<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=907077" class="external">bug 907077</a>), and from Gecko 27 to Gecko 35 the <code>&quot;@@iterator&quot;</code> placeholder was used. In Gecko 36 (Firefox 36 / Thunderbird 36 / SeaMonkey 2.33), the <code>@@iterator</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol">symbol</a> got implemented (<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=918828" class="external">bug 918828</a>).</p>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x5907;&#x6CE8;</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-iteration" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Iteration</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>
    <p>Initial definition.</p>
   </td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-iteration" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Iteration</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;ES7(ES2016/ES2017)</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x53C2;&#x8003;">&#x53C2;&#x8003;</h2>

<ul>
 <li>&#x66F4;&#x591A;&#x6709;&#x5173; ES6 &#x751F;&#x6210;&#x5668;&#x7684;&#x4FE1;&#x606F;&#xFF0C;&#x8BF7;&#x53C2;&#x8003;&#xA0;<a href="/en-US/docs/Web/JavaScript/Reference/Statements/function*">the function*() documentation</a>.</li>
</ul>
                  
                
              