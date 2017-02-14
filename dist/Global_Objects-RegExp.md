
                
                  
                    <p></p><section class="Quick_links" id="Quick_Links"><!-- --></section><p></p>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p><strong><code>RegExp</code></strong>&#xA0;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;&#x521B;&#x5EFA;&#x4E86;&#x4E00;&#x4E2A;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5BF9;&#x8C61;&#xFF0C;&#x7528;&#x6A21;&#x5F0F;&#x6765;&#x5339;&#x914D;&#x6587;&#x672C;&#x3002;</p>

<p>&#x6709;&#x5173;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x4ECB;&#x7ECD;&#xFF0C;&#x8BF7;&#x9605;&#x8BFB;<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/" class="new">JavaScript&#x6307;&#x5357;</a>&#x4E2D;&#x7684;<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions">&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x7AE0;&#x8282;</a>&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<p>&#x6587;&#x5B57;&#x548C;&#x6784;&#x9020;&#x7B26;&#x53F7;&#x662F;&#x53EF;&#x80FD;&#x7684;&#xFF1A;</p>

<pre class="syntaxbox"><code>/<em>pattern</em>/<em>flags new </em>RegExp(<em>pattern</em> <em>[, flags]</em>)</code>

</pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>pattern</code></dt>
 <dd>&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x7684;&#x6587;&#x672C;</dd>
 <dt><code>flags</code></dt>
 <dd>
 <p>&#x5982;&#x679C;&#x6307;&#x5B9A;&#xFF0C;&#x6807;&#x5FD7;&#x53EF;&#x4EE5;&#x5177;&#x6709;&#x4EE5;&#x4E0B;&#x503C;&#x7684;&#x4EFB;&#x610F;&#x7EC4;&#x5408;&#xFF1A;</p>

 <dl>
  <dt><code>g</code></dt>
  <dd>&#x5168;&#x5C40;&#x5339;&#x914D;</dd>
  <dt><code>i</code></dt>
  <dd>&#x5FFD;&#x7565;&#x5927;&#x5C0F;&#x5199;</dd>
  <dt><code>m</code></dt>
  <dd>&#x591A;&#x884C;;&#x8BA9;&#x5F00;&#x59CB;&#x548C;&#x7ED3;&#x675F;&#x5B57;&#x7B26;&#xFF08;^ &#x548C; $&#xFF09;&#x5DE5;&#x4F5C;&#x5728;&#x591A;&#x884C;&#x6A21;&#x5F0F;&#x5DE5;&#x4F5C;&#xFF08;&#x4F8B;&#x5982;&#xFF0C;^ &#x548C; $ &#x53EF;&#x4EE5;&#x5339;&#x914D;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x6BCF;&#x4E00;&#x884C;&#x7684;&#x5F00;&#x59CB;&#x548C;&#x7ED3;&#x675F;&#xFF08;&#x884C;&#x662F;&#x7531; \n &#x6216; \r &#x5206;&#x5272;&#x7684;&#xFF09;&#xFF0C;&#x800C;&#x4E0D;&#x53EA;&#x662F;&#x6574;&#x4E2A;&#x8F93;&#x5165;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x6700;&#x5F00;&#x59CB;&#x548C;&#x6700;&#x672B;&#x5C3E;&#x5904;&#x3002;</dd>
  <dt>u</dt>
  <dd>Unicode&#x3002;&#x628A;&#x6A21;&#x5F0F;&#x5F53;&#x4F5C;Unicode&#x4EE3;&#x7801;&#x70B9;(code points)&#x7684;&#x5E8F;&#x5217;&#x3002;</dd>
  <dt><code>y</code></dt>
  <dd>&#x9ECF;&#x5EA6;;&#xA0;&#x5728;&#x76EE;&#x6807;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#xFF0C;&#x53EA;&#x4ECE;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x7684;lastIndex&#x5C5E;&#x6027;&#x6307;&#x5B9A;&#x7684;&#x663E;&#x793A;&#x4F4D;&#x7F6E;&#x5F00;&#x59CB;&#x5339;&#x914D;&#xFF08;&#x5E76;&#x4E14;&#x4E0D;&#x8BD5;&#x56FE;&#x4ECE;&#x4EFB;&#x4F55;&#x4E4B;&#x540E;&#x7684;&#x7D22;&#x5F15;&#x5339;&#x914D;&#xFF09;&#x3002;</dd>
 </dl>
 </dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x6709;&#x4E24;&#x79CD;&#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x6B63;&#x5219;&#x5BF9;&#x8C61;&#xFF1A;&#x5B57;&#x9762;&#x91CF;&#x548C;&#x6784;&#x9020;&#x51FD;&#x6570;&#x3002;&#x8981;&#x8868;&#x793A;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x5B57;&#x9762;&#x91CF;&#x5F62;&#x5F0F;&#x4E0D;&#x4F7F;&#x7528;&#x5F15;&#x53F7;&#xFF0C;&#x800C;&#x4F20;&#x9012;&#x7ED9;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x53C2;&#x6570;&#x4F7F;&#x7528;&#x5F15;&#x53F7;&#x3002;&#x4E0B;&#x9762;&#x8868;&#x8FBE;&#x5F0F;&#x521B;&#x5EFA;&#x76F8;&#x540C;&#x7684;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#xFF1A;</p>

<pre class="brush: js" style="font-size: 14px;">/ab+c/i;
new RegExp(&apos;ab+c&apos;, &apos;i&apos;);
new RegExp(/ab+c/, &apos;i&apos;);</pre>

<p>&#x5F53;&#x8868;&#x8FBE;&#x5F0F;&#x88AB;&#x8D4B;&#x503C;&#x65F6;&#xFF0C;&#x5B57;&#x9762;&#x91CF;&#x5F62;&#x5F0F;&#x63D0;&#x4F9B;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x7684;&#x7F16;&#x8BD1;&#xFF08;compilation&#xFF09;&#x72B6;&#x6001;&#xFF0C;&#x5F53;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x4FDD;&#x6301;&#x4E3A;&#x5E38;&#x91CF;&#x65F6;&#x4F7F;&#x7528;&#x5B57;&#x9762;&#x91CF;&#x3002;&#x4F8B;&#x5982;&#x5F53;&#x4F60;&#x5728;&#x5FAA;&#x73AF;&#x4E2D;&#x4F7F;&#x7528;&#x5B57;&#x9762;&#x91CF;&#x6784;&#x9020;&#x4E00;&#x4E2A;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x65F6;&#xFF0C;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x4E0D;&#x4F1A;&#x5728;&#x6BCF;&#x4E00;&#x6B21;&#x8FED;&#x4EE3;&#x4E2D;&#x90FD;&#x88AB;&#x91CD;&#x65B0;&#x7F16;&#x8BD1;&#xFF08;recompiled&#xFF09;&#x3002;</p>

<p>&#x800C;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5BF9;&#x8C61;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;&#xFF0C;&#x5982; <code>new RegExp(&apos;ab+c&apos;)</code> &#x63D0;&#x4F9B;&#x4E86;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x8FD0;&#x884C;&#x65F6;&#x7F16;&#x8BD1;&#xFF08;runtime compilation&#xFF09;&#x3002;&#x5982;&#x679C;&#x4F60;&#x77E5;&#x9053;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x6A21;&#x5F0F;&#x5C06;&#x4F1A;&#x6539;&#x53D8;&#xFF0C;&#x6216;&#x8005;&#x4F60;&#x4E8B;&#x5148;&#x4E0D;&#x77E5;&#x9053;&#x4EC0;&#x4E48;&#x6A21;&#x5F0F;&#xFF0C;&#x800C;&#x662F;&#x4ECE;&#x53E6;&#x4E00;&#x4E2A;&#x6765;&#x6E90;&#x83B7;&#x53D6;&#xFF0C;&#x5982;&#x7528;&#x6237;&#x8F93;&#x5165;&#xFF0C;&#x8FD9;&#x4E9B;&#x60C5;&#x51B5;&#x90FD;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x6784;&#x9020;&#x51FD;&#x6570;&#x3002;</p>

<p>&#x4ECE;ECMAScript 6&#x5F00;&#x59CB;&#xFF0C;&#x5F53;&#x7B2C;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#x4E3A;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x800C;&#x7B2C;&#x4E8C;&#x4E2A;&#x6807;&#x5FD7;&#x53C2;&#x6570;&#x5B58;&#x5728;&#x65F6;&#xFF0C;new RegExp(/ab+c/, &apos;i&apos;)&#x4E0D;&#x518D;&#x629B;&#x51FA;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;"><code>TypeError</code></a> &#xFF08;&#x201C;&#x5F53;&#x4ECE;&#x5176;&#x4ED6;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x8FDB;&#x884C;&#x6784;&#x9020;&#x65F6;&#x4E0D;&#x652F;&#x6301;&#x6807;&#x5FD7;&#x201D;&#xFF09;&#x7684;&#x5F02;&#x5E38;&#xFF0C;&#x53D6;&#x800C;&#x4EE3;&#x4E4B;&#xFF0C;&#x5C06;&#x4F7F;&#x7528;&#x8FD9;&#x4E9B;&#x53C2;&#x6570;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x3002;</p>

<p>&#x5F53;&#x4F7F;&#x7528;&#x6784;&#x9020;&#x51FD;&#x6570;&#x521B;&#x9020;&#x6B63;&#x5219;&#x5BF9;&#x8C61;&#x65F6;&#xFF0C;&#x9700;&#x8981;&#x5E38;&#x89C4;&#x7684;&#x5B57;&#x7B26;&#x8F6C;&#x4E49;&#x89C4;&#x5219;&#xFF08;&#x5728;&#x524D;&#x9762;&#x52A0;&#x53CD;&#x659C;&#x6760; \&#xFF09;&#x3002;&#x6BD4;&#x5982;&#xFF0C;&#x4EE5;&#x4E0B;&#x662F;&#x7B49;&#x4EF7;&#x7684;&#xFF1A;</p>

<pre class="brush: js">var re = new RegExp(&quot;\\w+&quot;);
var re = /\w+/;</pre>

<h2 name="Special_characters_in_regular_expressions" id="Special_characters_in_regular_expressions">&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#x7684;&#x7279;&#x6B8A;&#x5B57;&#x7B26;</h2>

<ul>
 <li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#character-classes">&#x5B57;&#x7B26;&#x7C7B;&#x522B;&#xFF08;Character Classes&#xFF09;</a></li>
 <li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#character-sets">&#x5B57;&#x7B26;&#x96C6;&#x5408;&#xFF08;Character Sets&#xFF09;</a></li>
 <li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#boundaries">&#x8FB9;&#x754C;&#xFF08;Boundaries&#xFF09;</a></li>
 <li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references">&#x5206;&#x7EC4;&#xFF08;grouping&#xFF09;&#x4E0E;&#x53CD;&#x5411;&#x5F15;&#x7528;&#xFF08;back references&#xFF09;</a></li>
 <li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#quantifiers">&#x6570;&#x91CF;&#x8BCD;&#xFF08;Quantifiers&#xFF09;</a></li>
</ul>

<table class="fullwidth-table" style="width: 662px;">
 <tbody>
  <tr id="character-classes">
   <th colspan="2">&#x5B57;&#x7B26;&#x7C7B;&#x522B;&#xFF08;Character Classes&#xFF09;</th>
  </tr>
  <tr>
   <th>&#x5B57;&#x7B26;</th>
   <th>&#x542B;&#x4E49;</th>
  </tr>
  <tr>
   <td><code>.</code></td>
   <td>
    <p>&#xFF08;&#x70B9;&#x53F7;&#xFF0C;&#x5C0F;&#x6570;&#x70B9;&#xFF09;&#x5339;&#x914D;&#x4EFB;&#x610F;&#x5355;&#x4E2A;&#x5B57;&#x7B26;&#xFF0C;&#x4F46;&#x662F;&#x6362;&#x884C;&#x7B26;&#x9664;&#x5916;&#xFF0C;&#x5305;&#x62EC;&#xFF1A;<code>\n</code>&#xA0;<code>\r</code>&#xA0;<code>\u2028</code>&#xA0;&#x6216;&#xA0;<code>\u2029</code>&#x3002;</p>

    <p>&#x9700;&#x8981;&#x6CE8;&#x610F;&#x7684;&#x662F;&#xFF0C;<code>m</code>&#xA0;&#x591A;&#x884C;&#xFF08;multiline&#xFF09;&#x6807;&#x5FD7;&#x4E0D;&#x4F1A;&#x6539;&#x53D8;&#x70B9;&#x53F7;&#x7684;&#x8868;&#x73B0;&#x3002;&#x56E0;&#x6B64;&#x4E3A;&#x4E86;&#x5339;&#x914D;&#x591A;&#x884C;&#x4E2D;&#x7684;&#x5B57;&#x7B26;&#x96C6;&#xFF0C;&#x53EF;&#x4F7F;&#x7528;<code>[^]</code>&#xA0;&#xFF08;&#x5F53;&#x7136;&#x4F60;&#x4E0D;&#x662F;&#x6253;&#x7B97;&#x7528;&#x5728;&#x65E7;&#x7248;&#x672C; IE &#x4E2D;&#xFF09;&#xFF0C;&#x5B83;&#x5C06;&#x4F1A;&#x5339;&#x914D;&#x4EFB;&#x610F;&#x5B57;&#x7B26;&#xFF0C;&#x5305;&#x62EC;&#x6362;&#x884C;&#x7B26;&#x3002;</p>

    <p>&#x4F8B;&#x5982;&#xFF0C;<code>/.y/</code>&#xA0;&#x5339;&#x914D; &quot;yes make my day&quot; &#x4E2D;&#x7684;&#xA0;&quot;my&quot; &#x548C; &quot;ay&quot;&#xFF0C;&#x4F46;&#x662F;&#x4E0D;&#x5339;&#x914D; &quot;yes&quot;&#x3002;</p>
   </td>
  </tr>
  <tr>
   <td><code>\d</code></td>
   <td>
    <p>&#x5339;&#x914D;&#x57FA;&#x672C;&#x62C9;&#x4E01;&#x5B57;&#x6BCD;&#x8868;&#xFF08;basic Latin alphabet&#xFF09;&#x4E2D;&#x7684;&#x4E00;&#x4E2A;&#x6570;&#x5B57;&#x5B57;&#x7B26;&#x3002;&#x7B49;&#x4EF7;&#x4E8E;<code>[0-9]</code>&#x3002;</p>

    <p>&#x4F8B;&#x5982;&#xFF0C;<code>/\d/</code>&#xA0;&#x6216;&#xA0;<code>/[0-9]/</code>&#xA0;&#x5339;&#x914D; &quot;B2 is the suite number.&quot; &#x4E2D;&#x7684;&#xA0;&apos;2&apos;&#x3002;&#xA0;</p>
   </td>
  </tr>
  <tr>
   <td><code>\D</code></td>
   <td>
    <p>&#x5339;&#x914D;&#x4EFB;&#x610F;&#x4E00;&#x4E2A;&#x4E0D;&#x662F;&#x57FA;&#x672C;&#x62C9;&#x4E01;&#x5B57;&#x6BCD;&#x8868;&#x4E2D;&#x6570;&#x5B57;&#x7684;&#x5B57;&#x7B26;&#x3002;&#x7B49;&#x4EF7;&#x4E8E;<code>[^0-9]</code>&#x3002;</p>

    <p>&#x4F8B;&#x5982;&#xFF0C;<code>/\D/</code>&#xA0;&#x6216;&#xA0;<code>/[^0-9]/</code>&#xA0;&#x5339;&#x914D; &quot;B2 is the suite number.&quot; &#x4E2D;&#x7684;&#xA0;&apos;B&apos;&#x3002;</p>
   </td>
  </tr>
  <tr>
   <td><code>\w</code></td>
   <td>
    <p>&#x5339;&#x914D;&#x4EFB;&#x610F;&#x6765;&#x81EA;&#x57FA;&#x672C;&#x62C9;&#x4E01;&#x5B57;&#x6BCD;&#x8868;&#x4E2D;&#x7684;&#x5B57;&#x6BCD;&#x6570;&#x5B57;&#x5B57;&#x7B26;&#xFF0C;&#x8FD8;&#x5305;&#x62EC;&#x4E0B;&#x5212;&#x7EBF;&#x3002;&#x7B49;&#x4EF7;&#x4E8E;&#xA0;<code>[A-Za-z0-9_]</code>&#x3002;</p>

    <p>&#x4F8B;&#x5982;&#xFF0C;<code>/\w/</code>&#xA0;&#x5339;&#x914D; &quot;apple&quot; &#x4E2D;&#x7684; &apos;a&apos;&#xFF0C;&quot;$5.28&quot; &#x4E2D;&#x7684; &apos;5&apos; &#x548C; &quot;3D&quot; &#x4E2D;&#x7684; &apos;3&apos;&#x3002;</p>
   </td>
  </tr>
  <tr>
   <td><code>\W</code></td>
   <td>
    <p>&#x5339;&#x914D;&#x4EFB;&#x610F;&#x4E0D;&#x662F;&#x57FA;&#x672C;&#x62C9;&#x4E01;&#x5B57;&#x6BCD;&#x8868;&#x4E2D;&#x5355;&#x8BCD;&#xFF08;&#x5B57;&#x6BCD;&#x6570;&#x5B57;&#x4E0B;&#x5212;&#x7EBF;&#xFF09;&#x5B57;&#x7B26;&#x7684;&#x5B57;&#x7B26;&#x3002;&#x7B49;&#x4EF7;&#x4E8E;&#xA0;<code>[^A-Za-z0-9_]</code>&#x3002;</p>

    <p>&#x4F8B;&#x5982;&#xFF0C;<code>/\W/</code>&#xA0;&#x6216;&#xA0;<code>/[^A-Za-z0-9_]/</code>&#xA0;&#x5339;&#x914D; &quot;50%&quot; &#x4E2D;&#x7684; &apos;%&apos;&#x3002;</p>
   </td>
  </tr>
  <tr>
   <td><code>\s</code></td>
   <td>
    <p>&#x5339;&#x914D;&#x4E00;&#x4E2A;&#x7A7A;&#x767D;&#x7B26;&#xFF0C;&#x5305;&#x62EC;&#x7A7A;&#x683C;&#x3001;&#x5236;&#x8868;&#x7B26;&#x3001;&#x6362;&#x9875;&#x7B26;&#x3001;&#x6362;&#x884C;&#x7B26;&#x548C;&#x5176;&#x4ED6; Unicode &#x7A7A;&#x683C;&#x3002;</p>

    <p>&#x7B49;&#x4EF7;&#x4E8E;&#xA0;<code>[ \f\n\r\t\v&#x200B;\u00a0\u1680&#x200B;\u180e\u2000&#x200B;\u2001\u2002&#x200B;\u2003\u2004&#x200B; \u2005\u2006&#x200B;\u2007\u2008&#x200B;\u2009\u200a&#x200B;\u2028\u2029&#x200B;&#x200B;\u202f\u205f&#x200B; \u3000]&#x3002;</code></p>

    <p>&#x4F8B;&#x5982;&#xA0;<code>/\s\w*/</code>&#xA0;&#x5339;&#x914D; &quot;foo bar&quot; &#x4E2D;&#x7684; &apos; bar&apos;&#x3002;</p>
   </td>
  </tr>
  <tr>
   <td><code>\S</code></td>
   <td>
    <p>&#x5339;&#x914D;&#x4E00;&#x4E2A;&#x975E;&#x7A7A;&#x767D;&#x7B26;&#x3002;&#x7B49;&#x4EF7;&#x4E8E;&#xA0;<code><code>[^ \f\n\r\t\v&#x200B;\u00a0\u1680&#x200B;\u180e\u2000&#x200B;\u2001\u2002&#x200B;\u2003\u2004&#x200B;&#xA0;\u2005\u2006&#x200B;\u2007\u2008&#x200B;\u2009\u200a&#x200B;\u2028\u2029&#x200B;\u202f\u205f&#x200B;\u3000]</code></code>&#x3002;</p>

    <p>&#x4F8B;&#x5982;&#xFF0C;<code>/\S\w*/</code>&#xA0;&#x5339;&#x914D; &quot;foo bar&quot; &#x4E2D;&#x7684; &apos;foo&apos;&#x3002;</p>
   </td>
  </tr>
  <tr>
   <td><code>\t</code></td>
   <td>&#x5339;&#x914D;&#x4E00;&#x4E2A;&#x6C34;&#x5E73;&#x5236;&#x8868;&#x7B26;&#xFF08;tab&#xFF09;</td>
  </tr>
  <tr>
   <td><code>\r</code></td>
   <td>&#x5339;&#x914D;&#x4E00;&#x4E2A;&#x56DE;&#x8F66;&#x7B26;&#xFF08;carriage return&#xFF09;</td>
  </tr>
  <tr>
   <td><code>\n</code></td>
   <td>&#x5339;&#x914D;&#x4E00;&#x4E2A;&#x6362;&#x884C;&#x7B26;&#xFF08;linefeed&#xFF09;</td>
  </tr>
  <tr>
   <td><code>\v</code></td>
   <td>&#x5339;&#x914D;&#x4E00;&#x4E2A;&#x5782;&#x76F4;&#x5236;&#x8868;&#x7B26;&#xFF08;vertical tab&#xFF09;</td>
  </tr>
  <tr>
   <td><code>\f</code></td>
   <td>&#x5339;&#x914D;&#x4E00;&#x4E2A;&#x6362;&#x9875;&#x7B26;&#xFF08;form-feed&#xFF09;</td>
  </tr>
  <tr>
   <td><code>[\b]</code></td>
   <td>&#x5339;&#x914D;&#x4E00;&#x4E2A;&#x9000;&#x683C;&#x7B26;&#xFF08;backspace&#xFF09;&#xFF08;&#x4E0D;&#x8981;&#x4E0E;&#xA0;<code>\b</code>&#xA0;&#x6DF7;&#x6DC6;&#xFF09;</td>
  </tr>
  <tr>
   <td><code>\0</code></td>
   <td>&#x5339;&#x914D;&#x4E00;&#x4E2A; NUL &#x5B57;&#x7B26;&#x3002;&#x4E0D;&#x8981;&#x5728;&#x6B64;&#x540E;&#x9762;&#x8DDF;&#x5C0F;&#x6570;&#x70B9;&#x3002;</td>
  </tr>
  <tr>
   <td><code>\c<em>X</em></code></td>
   <td>
    <p><code><em>X</em></code>&#xA0;&#x662F; A - Z &#x7684;&#x4E00;&#x4E2A;&#x5B57;&#x6BCD;&#x3002;&#x5339;&#x914D;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x7684;&#x4E00;&#x4E2A;&#x63A7;&#x5236;&#x5B57;&#x7B26;&#x3002;</p>

    <p>&#x4F8B;&#x5982;&#xFF0C;<code>/\cM/</code>&#xA0;&#x5339;&#x914D;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x7684; control-M&#x3002;</p>
   </td>
  </tr>
  <tr>
   <td><code>\x<em>hh</em></code></td>
   <td>&#x5339;&#x914D;&#x7F16;&#x7801;&#x4E3A;&#xA0;<code><em>hh</em></code>&#xA0;&#xFF08;&#x4E24;&#x4E2A;&#x5341;&#x516D;&#x8FDB;&#x5236;&#x6570;&#x5B57;&#xFF09;&#x7684;&#x5B57;&#x7B26;&#x3002;</td>
  </tr>
  <tr>
   <td><code>\u<em>hhhh</em></code></td>
   <td>&#x5339;&#x914D; Unicode &#x503C;&#x4E3A;&#xA0;<code><em>hhhh</em></code>&#xA0;&#xFF08;&#x56DB;&#x4E2A;&#x5341;&#x516D;&#x8FDB;&#x5236;&#x6570;&#x5B57;&#xFF09;&#x7684;&#x5B57;&#x7B26;&#x3002;</td>
  </tr>
  <tr>
   <td><code>\</code></td>
   <td>
    <p>&#x5BF9;&#x4E8E;&#x90A3;&#x4E9B;&#x901A;&#x5E38;&#x88AB;&#x8BA4;&#x4E3A;&#x5B57;&#x9762;&#x610F;&#x4E49;&#x7684;&#x5B57;&#x7B26;&#x6765;&#x8BF4;&#xFF0C;&#x8868;&#x793A;&#x4E0B;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x5177;&#x6709;&#x7279;&#x6B8A;&#x7528;&#x5904;&#xFF0C;&#x5E76;&#x4E14;&#x4E0D;&#x4F1A;&#x88AB;&#x6309;&#x7167;&#x5B57;&#x9762;&#x610F;&#x4E49;&#x89E3;&#x91CA;&#x3002;</p>

    <p>&#x4F8B;&#x5982;&#xA0;<code>/b/</code>&#xA0;&#x5339;&#x914D;&#x5B57;&#x7B26; &apos;b&apos;&#x3002;&#x5728; b &#x524D;&#x9762;&#x52A0;&#x4E0A;&#x4E00;&#x4E2A;&#x53CD;&#x659C;&#x6760;&#xFF0C;&#x5373;&#x4F7F;&#x7528;&#xA0;<code>/\b/</code>&#xFF0C;&#x5219;&#x8BE5;&#x5B57;&#x7B26;&#x53D8;&#x5F97;&#x7279;&#x6B8A;&#xFF0C;&#x4EE5;&#x4E3A;&#x8FD9;&#x5339;&#x914D;&#x4E00;&#x4E2A;&#x5355;&#x8BCD;&#x8FB9;&#x754C;&#x3002;</p>

    <p><em>&#x6216;</em></p>

    <p>&#x5BF9;&#x4E8E;&#x90A3;&#x4E9B;&#x901A;&#x5E38;&#x7279;&#x6B8A;&#x5BF9;&#x5F85;&#x7684;&#x5B57;&#x7B26;&#xFF0C;&#x8868;&#x793A;&#x4E0B;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E0D;&#x5177;&#x6709;&#x7279;&#x6B8A;&#x7528;&#x9014;&#xFF0C;&#x4F1A;&#x88AB;&#x6309;&#x7167;&#x5B57;&#x9762;&#x610F;&#x4E49;&#x89E3;&#x91CA;&#x3002;</p>

    <p>&#x4F8B;&#x5982;&#xFF0C;* &#x662F;&#x4E00;&#x4E2A;&#x7279;&#x6B8A;&#x5B57;&#x7B26;&#xFF0C;&#x8868;&#x793A;&#x5339;&#x914D;&#x67D0;&#x4E2A;&#x5B57;&#x7B26; 0 &#x6216;&#x591A;&#x6B21;&#xFF0C;&#x5982;&#xA0;<code>/a*/</code>&#xA0;&#x610F;&#x5473;&#x7740; 0 &#x6216;&#x591A;&#x4E2A; &quot;a&quot;&#x3002; &#x4E3A;&#x4E86;&#x5339;&#x914D;&#x5B57;&#x9762;&#x610F;&#x4E49;&#x4E0A;&#x7684;&#xA0;<code>*</code>&#xA0;&#xFF0C;&#x5728;&#x5B83;&#x524D;&#x9762;&#x52A0;&#x4E0A;&#x4E00;&#x4E2A;&#x53CD;&#x659C;&#x6760;&#xFF0C;&#x4F8B;&#x5982;&#xFF0C;<code>/a\*/</code>&#x5339;&#x914D; &apos;a*&apos;&#x3002;</p>
   </td>
  </tr>
 </tbody>
 <tbody>
  <tr id="character-sets">
   <th colspan="2">
    <p>&#x5B57;&#x7B26;&#x96C6;&#x5408;&#xFF08;Character Sets&#xFF09;</p>
   </th>
  </tr>
  <tr>
   <th>&#x5B57;&#x7B26;</th>
   <th>&#x542B;&#x4E49;</th>
  </tr>
  <tr>
   <td><code>[xyz]</code></td>
   <td>
    <p>&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x96C6;&#x5408;&#xFF0C;&#x4E5F;&#x53EB;&#x5B57;&#x7B26;&#x7EC4;&#x3002;&#x5339;&#x914D;&#x96C6;&#x5408;&#x4E2D;&#x7684;&#x4EFB;&#x610F;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x3002;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x8FDE;&#x5B57;&#x7B26;&apos;-&apos;&#x6307;&#x5B9A;&#x4E00;&#x4E2A;&#x8303;&#x56F4;&#x3002;</p>

    <p>&#x4F8B;&#x5982;&#xFF0C;[abcd] &#x7B49;&#x4EF7;&#x4E8E; [a-d]&#xFF0C;&#x5339;&#x914D;&quot;brisket&quot;&#x4E2D;&#x7684;&apos;b&apos;&#x548C;&quot;chop&quot;&#x4E2D;&#x7684;&apos;c&apos;&#x3002;</p>
   </td>
  </tr>
  <tr>
   <td><code>[^xyz]</code></td>
   <td>
    <p>&#x4E00;&#x4E2A;&#x53CD;&#x4E49;&#x6216;&#x8865;&#x5145;&#x5B57;&#x7B26;&#x96C6;&#xFF0C;&#x4E5F;&#x53EB;&#x53CD;&#x4E49;&#x5B57;&#x7B26;&#x7EC4;&#x3002;&#x4E5F;&#x5C31;&#x662F;&#x8BF4;&#xFF0C;&#x5B83;&#x5339;&#x914D;&#x4EFB;&#x610F;&#x4E0D;&#x5728;&#x62EC;&#x53F7;&#x5185;&#x7684;&#x5B57;&#x7B26;&#x3002;&#x4F60;&#x4E5F;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x4F7F;&#x7528;&#x8FDE;&#x5B57;&#x7B26; &apos;-&apos; &#x6307;&#x5B9A;&#x4E00;&#x4E2A;&#x8303;&#x56F4;&#x5185;&#x7684;&#x5B57;&#x7B26;&#x3002;</p>

    <p>&#x4F8B;&#x5982;&#xFF0C;<code>[^abc]</code>&#xA0;&#x7B49;&#x4EF7;&#x4E8E;&#xA0;<code>[^a-c]&#x3002;</code>&#xA0;&#x7B2C;&#x4E00;&#x4E2A;&#x5339;&#x914D;&#x7684;&#x662F; &quot;bacon&quot; &#x4E2D;&#x7684;&apos;o&apos; &#x548C; &quot;chop&quot; &#x4E2D;&#x7684; &apos;h&apos;&#x3002;</p>
   </td>
  </tr>
 </tbody>
 <tbody>
  <tr id="boundaries">
   <th colspan="2">&#x8FB9;&#x754C;&#xFF08;Boundaries&#xFF09;</th>
  </tr>
  <tr>
   <th>&#x5B57;&#x7B26;</th>
   <th>&#x542B;&#x4E49;</th>
  </tr>
  <tr>
   <td><code>^</code></td>
   <td>
    <p>&#x5339;&#x914D;&#x8F93;&#x5165;/&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x5F00;&#x59CB;&#x3002;&#x5982;&#x679C;&#x591A;&#x884C;&#xFF08;multiline&#xFF09;&#x6807;&#x5FD7;&#x88AB;&#x8BBE;&#x4E3A; true&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E5F;&#x4F1A;&#x5339;&#x914D;&#x4E00;&#x4E2A;&#x65AD;&#x884C;&#xFF08;line break&#xFF09;&#x7B26;&#x540E;&#x7684;&#x5F00;&#x59CB;&#x5904;&#x3002;</p>

    <p>&#x4F8B;&#x5982;&#xFF0C;<code>/^A/</code>&#xA0;&#x4E0D;&#x5339;&#x914D; &quot;an A&quot; &#x4E2D;&#x7684; &quot;A&quot;&#xFF0C;&#x4F46;&#x5339;&#x914D; &quot;An A&quot; &#x4E2D;&#x7684; &quot;A&quot;&#x3002;</p>
   </td>
  </tr>
  <tr>
   <td><code>$</code></td>
   <td>
    <p>&#x5339;&#x914D;&#x8F93;&#x5165;/&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x7ED3;&#x5C3E;&#x3002;&#x5982;&#x679C;&#x591A;&#x884C;&#xFF08;multiline&#xFF09;&#x6807;&#x5FD7;&#x88AB;&#x8BBE;&#x4E3A; true&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E5F;&#x4F1A;&#x5339;&#x914D;&#x4E00;&#x4E2A;&#x65AD;&#x884C;&#xFF08;line break&#xFF09;&#x7B26;&#x7684;&#x524D;&#x7684;&#x7ED3;&#x5C3E;&#x5904;&#x3002;</p>

    <p>&#x4F8B;&#x5982;&#xFF0C;<code>/t$/</code>&#xA0;&#x4E0D;&#x5339;&#x914D; &quot;eater&quot; &#x4E2D;&#x7684; &quot;t&quot;&#xFF0C;&#x4F46;&#x5339;&#x914D; &quot;eat&quot; &#x4E2D;&#x7684; &quot;t&quot;&#x3002;</p>
   </td>
  </tr>
  <tr>
   <td><code>\b</code></td>
   <td>
    <p>&#x5339;&#x914D;&#x4E00;&#x4E2A;&#x96F6;&#x5BBD;&#x5355;&#x8BCD;&#x8FB9;&#x754C;&#xFF08;zero-width word boundary&#xFF09;&#xFF0C;&#x5982;&#x4E00;&#x4E2A;&#x5B57;&#x6BCD;&#x4E0E;&#x4E00;&#x4E2A;&#x7A7A;&#x683C;&#x4E4B;&#x95F4;&#x3002; &#xFF08;&#x4E0D;&#x8981;&#x548C;&#xA0;<code>[\b]</code>&#xA0;&#x6DF7;&#x6DC6;&#xFF09;</p>

    <p>&#x4F8B;&#x5982;&#xFF0C;<code>/\bno/</code>&#xA0;&#x5339;&#x914D; &quot;at noon&quot; &#x4E2D;&#x7684; &quot;no&quot;&#xFF0C;<code>/ly\b/</code>&#xA0;&#x5339;&#x914D; &quot;possibly yesterday.&quot; &#x4E2D;&#x7684; &quot;ly&quot;&#x3002;</p>
   </td>
  </tr>
  <tr>
   <td><code>\B</code></td>
   <td>
    <p>&#x5339;&#x914D;&#x4E00;&#x4E2A;&#x96F6;&#x5BBD;&#x975E;&#x5355;&#x8BCD;&#x8FB9;&#x754C;&#xFF08;zero-width non-word boundary&#xFF09;&#xFF0C;&#x5982;&#x4E24;&#x4E2A;&#x5B57;&#x6BCD;&#x4E4B;&#x95F4;&#x6216;&#x4E24;&#x4E2A;&#x7A7A;&#x683C;&#x4E4B;&#x95F4;&#x3002;</p>

    <p>&#x4F8B;&#x5982;&#xFF0C;<code>/\Bon/</code>&#xA0;&#x5339;&#x914D; &quot;at noon&quot; &#x4E2D;&#x7684; &quot;on&quot;&#xFF0C;<code>/ye\B/</code>&#xA0;&#x5339;&#x914D; &quot;possibly yesterday.&quot; &#x4E2D;&#x7684; &quot;ye&quot;&#x3002;</p>
   </td>
  </tr>
 </tbody>
 <tbody>
  <tr id="grouping-back-references">
   <th colspan="2">&#x5206;&#x7EC4;&#xFF08;Grouping&#xFF09;&#x4E0E;&#x53CD;&#x5411;&#x5F15;&#x7528;&#xFF08;back references&#xFF09;</th>
  </tr>
  <tr>
   <th>&#x5B57;&#x7B26;</th>
   <th>&#x542B;&#x4E49;</th>
  </tr>
  <tr>
   <td><code>(<em>x</em>)</code></td>
   <td>
    <p>&#x5339;&#x914D;&#xA0;<code><em>x</em></code>&#xA0;&#x5E76;&#x4E14;&#x6355;&#x83B7;&#x5339;&#x914D;&#x9879;&#x3002; &#x8FD9;&#x88AB;&#x79F0;&#x4E3A;&#x6355;&#x83B7;&#x62EC;&#x53F7;&#xFF08;capturing parentheses&#xFF09;&#x3002;</p>

    <p>&#x4F8B;&#x5982;&#xFF0C;<code>/(foo)/</code>&#xA0;&#x5339;&#x914D;&#x4E14;&#x6355;&#x83B7; &quot;foo bar.&quot; &#x4E2D;&#x7684; &quot;foo&quot;&#x3002;&#x88AB;&#x5339;&#x914D;&#x7684;&#x5B50;&#x5B57;&#x7B26;&#x4E32;&#x53EF;&#x4EE5;&#x5728;&#x7ED3;&#x679C;&#x6570;&#x7EC4;&#x7684;&#x5143;&#x7D20;&#xA0;<code>[1], ..., [n]</code>&#xA0;&#x4E2D;&#x627E;&#x5230;&#xFF0C;&#x6216;&#x5728;&#x88AB;&#x5B9A;&#x4E49;&#x7684;&#xA0;<code>RegExp</code>&#xA0;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#xA0;<code>$1, ..., $9</code>&#xA0;&#x4E2D;&#x627E;&#x5230;&#x3002;</p>

    <p>&#x6355;&#x83B7;&#x7EC4;&#xFF08;Capturing groups&#xFF09;&#x6709;&#x6027;&#x80FD;&#x60E9;&#x7F5A;&#x3002;&#x5982;&#x679C;&#x518D;&#x6B21;&#x8BBF;&#x95EE;&#x88AB;&#x5339;&#x914D;&#x7684;&#x5B50;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x6700;&#x597D;&#x4F7F;&#x7528;&#x975E;&#x6355;&#x83B7;&#x62EC;&#x53F7;&#xFF08;non-capturing parentheses&#xFF09;&#xFF0C;&#x89C1;&#x4E0B;&#x9762;&#x3002;</p>
   </td>
  </tr>
  <tr>
   <td><code>\<em>n</em></code></td>
   <td>
    <p><code><em>n</em></code>&#xA0;&#x662F;&#x4E00;&#x4E2A;&#x6B63;&#x6574;&#x6570;&#x3002;&#x4E00;&#x4E2A;&#x53CD;&#x5411;&#x5F15;&#x7528;&#xFF08;back reference&#xFF09;&#xFF0C;&#x6307;&#x5411;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#x7B2C; n &#x4E2A;&#x62EC;&#x53F7;&#xFF08;&#x4ECE;&#x5DE6;&#x5F00;&#x59CB;&#x6570;&#xFF09;&#x4E2D;&#x5339;&#x914D;&#x7684;&#x5B50;&#x5B57;&#x7B26;&#x4E32;&#x3002;</p>

    <p>&#x4F8B;&#x5982;&#xFF0C;<code>/apple(,)\sorange\1/</code>&#xA0;&#x5339;&#x914D; &quot;apple, orange, cherry, peach.&quot; &#x4E2D;&#x7684; &quot;apple,orange,&quot;&#x3002;&#x4E00;&#x4E2A;&#x66F4;&#x5168;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x5728;&#x8BE5;&#x8868;&#x683C;&#x4E0B;&#x9762;&#x3002;</p>
   </td>
  </tr>
  <tr>
   <td><code>(?:<em>x</em>)</code></td>
   <td>&#x5339;&#x914D;&#xA0;<code><em>x</em></code>&#xA0;&#x4E0D;&#x4F1A;&#x6355;&#x83B7;&#x5339;&#x914D;&#x9879;&#x3002;&#x8FD9;&#x88AB;&#x79F0;&#x4E3A;&#x975E;&#x6355;&#x83B7;&#x62EC;&#x53F7;&#xFF08;non-capturing parentheses&#xFF09;&#x3002;&#x5339;&#x914D;&#x9879;&#x4E0D;&#x80FD;&#x591F;&#x4ECE;&#x7ED3;&#x679C;&#x6570;&#x7EC4;&#x7684;&#x5143;&#x7D20;&#xA0;<code>[1], ..., [n]</code>&#xA0;&#x6216;&#x5DF2;&#x88AB;&#x5B9A;&#x4E49;&#x7684;&#xA0;<code>RegExp</code>&#xA0;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#xA0;<code>$1, ..., $9</code>&#xA0;&#x518D;&#x6B21;&#x8BBF;&#x95EE;&#x5230;&#x3002;</td>
  </tr>
 </tbody>
 <tbody>
  <tr id="quantifiers">
   <th colspan="2">&#x6570;&#x91CF;&#x8BCD;&#xFF08;Quantifiers&#xFF09;</th>
  </tr>
  <tr>
   <th>&#x5B57;&#x7B26;</th>
   <th>&#x542B;&#x4E49;</th>
  </tr>
  <tr>
   <td><code><em>x</em>*</code></td>
   <td>
    <p>&#x5339;&#x914D;&#x524D;&#x9762;&#x7684;&#x6A21;&#x5F0F;&#xA0;<em>x</em>&#xA0;0 &#x6216;&#x591A;&#x6B21;&#x3002;</p>

    <p>&#x4F8B;&#x5982;&#xFF0C;<code>/bo*/</code>&#xA0;&#x5339;&#x914D; &quot;A ghost booooed&quot; &#x4E2D;&#x7684; &quot;boooo&quot;&#xFF0C;&quot;A bird warbled&quot; &#x4E2D;&#x7684; &quot;b&quot;&#xFF0C;&#x4F46;&#x662F;&#x4E0D;&#x5339;&#x914D; &quot;A goat grunted&quot;&#x3002;</p>
   </td>
  </tr>
  <tr>
   <td><code><em>x</em>+</code></td>
   <td>
    <p>&#x5339;&#x914D;&#x524D;&#x9762;&#x7684;&#x6A21;&#x5F0F;&#xA0;<em>x</em>&#xA0;1 &#x6216;&#x591A;&#x6B21;&#x3002;&#x7B49;&#x4EF7;&#x4E8E;&#xA0;<code>{1,}</code>&#x3002;</p>

    <p>&#x4F8B;&#x5982;&#xFF0C;<code>/a+/</code>&#xA0;&#x5339;&#x914D; &quot;candy&quot; &#x4E2D;&#x7684; &quot;a&quot;&#xFF0C;&quot;caaaaaaandy&quot; &#x4E2D;&#x6240;&#x6709;&#x7684; &quot;a&quot;&#x3002;</p>
   </td>
  </tr>
  <tr>
   <td><code><em>x</em>*?</code><br>
    <code><em>x</em>+?</code></td>
   <td>
    <p>&#x50CF;&#x4E0A;&#x9762;&#x7684; * &#x548C; + &#x4E00;&#x6837;&#x5339;&#x914D;&#x524D;&#x9762;&#x7684;&#x6A21;&#x5F0F;&#xA0;<em>x</em>&#xFF0C;&#x7136;&#x800C;&#x5339;&#x914D;&#x662F;&#x6700;&#x5C0F;&#x53EF;&#x80FD;&#x5339;&#x914D;&#x3002;</p>

    <p>&#x4F8B;&#x5982;&#xFF0C;<code>/&quot;.*?&quot;/</code>&#xA0;&#x5339;&#x914D; &apos;&quot;foo&quot; &quot;bar&quot;&apos; &#x4E2D;&#x7684; &apos;&quot;foo&quot;&apos;&#xFF0C;&#x800C; * &#x540E;&#x9762;&#x6CA1;&#x6709; ? &#x65F6;&#x5339;&#x914D; &apos;&quot;foo&quot; &quot;bar&quot;&apos;&#x3002;</p>
   </td>
  </tr>
  <tr>
   <td><code><em>x</em>?</code></td>
   <td>
    <p>&#x5339;&#x914D;&#x524D;&#x9762;&#x7684;&#x6A21;&#x5F0F;&#xA0;<em>x</em>&#xA0;0 &#x6216; 1 &#x6B21;&#x3002;</p>

    <p>&#x4F8B;&#x5982;&#xFF0C;<code>/e?le?/</code>&#xA0;&#x5339;&#x914D; &quot;angel&quot; &#x4E2D;&#x7684; &quot;el&quot;&#xFF0C;&quot;angle&quot; &#x4E2D;&#x7684; &quot;le&quot;&#x3002;</p>

    <p>&#x5982;&#x679C;&#x5728;&#x6570;&#x91CF;&#x8BCD;&#xA0;<code>*</code>&#x3001;<code>+</code>&#x3001;<code>?</code>&#xA0;&#x6216;&#xA0;<code>{}</code>, &#x4EFB;&#x610F;&#x4E00;&#x4E2A;&#x540E;&#x9762;&#x7D27;&#x8DDF;&#x8BE5;&#x7B26;&#x53F7;&#xFF08;?&#xFF09;&#xFF0C;&#x4F1A;&#x4F7F;&#x6570;&#x91CF;&#x8BCD;&#x53D8;&#x4E3A;&#x975E;&#x8D2A;&#x5A6A;&#xFF08; non-greedy&#xFF09; &#xFF0C;&#x5373;&#x5339;&#x914D;&#x6B21;&#x6570;&#x6700;&#x5C0F;&#x5316;&#x3002;&#x53CD;&#x4E4B;&#xFF0C;&#x9ED8;&#x8BA4;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x662F;&#x8D2A;&#x5A6A;&#x7684;&#xFF08;greedy&#xFF09;&#xFF0C;&#x5373;&#x5339;&#x914D;&#x6B21;&#x6570;&#x6700;&#x5927;&#x5316;&#x3002;</p>

    <p>&#x5728;&#x4F7F;&#x7528;&#x4E8E;&#x5411;&#x524D;&#x65AD;&#x8A00;&#xFF08;lookahead assertions&#xFF09;&#x65F6;&#xFF0C;&#x89C1;&#x8BE5;&#x8868;&#x683C;&#x4E2D;&#xA0;<code>(?=)&#x3001;</code><code>(?!)</code>&#xA0;&#x548C;&#xA0;<code>(?:)</code>&#xA0;&#x7684;&#x8BF4;&#x660E;&#x3002;</p>
   </td>
  </tr>
  <tr>
   <td><code><em>x</em>(?=<em>y</em>)</code></td>
   <td>&#x53EA;&#x6709;&#x5F53; <code><em>x</em></code>&#xA0;&#x540E;&#x9762;&#x7D27;&#x8DDF;&#x7740;&#xA0;<code><em>y</em></code>&#xA0;&#x65F6;&#xFF0C;&#x624D;&#x5339;&#x914D; <em><code>x</code></em>&#x3002; &#x4F8B;&#x5982;&#xFF0C;<code>/Jack(?=Sprat)/</code>&#xA0;&#x53EA;&#x6709;&#x5728; &apos;Jack&apos; &#x540E;&#x9762;&#x7D27;&#x8DDF;&#x7740; &apos;Sprat&apos; &#x65F6;&#xFF0C;&#x624D;&#x4F1A;&#x5339;&#x914D;&#x5B83;&#x3002;<code>/Jack(?=Sprat|Frost)/</code>&#xA0;&#x53EA;&#x6709;&#x5728; &apos;Jack&apos; &#x540E;&#x9762;&#x7D27;&#x8DDF;&#x7740; &apos;Sprat&apos; &#x6216; &apos;Frost&apos; &#x65F6;&#xFF0C;&#x624D;&#x4F1A;&#x5339;&#x914D;&#x5B83;&#x3002;&#x7136;&#x800C;&#xFF0C;&apos;Sprat&apos; &#x6216; &apos;Frost&apos; &#x90FD;&#x4E0D;&#x662F;&#x5339;&#x914D;&#x7ED3;&#x679C;&#x7684;&#x4E00;&#x90E8;&#x5206;&#x3002;</td>
  </tr>
  <tr>
   <td><code><em>x</em>(?!<em>y</em>)</code></td>
   <td>
    <p>&#x53EA;&#x6709;&#x5F53; <code><em>x</em></code>&#xA0;&#x540E;&#x9762;&#x4E0D;&#x662F;&#x7D27;&#x8DDF;&#x7740;&#xA0;<code><em>y</em></code>&#xA0;&#x65F6;&#xFF0C;&#x624D;&#x5339;&#x914D; <code><em>x</em></code>&#x3002;&#x4F8B;&#x5982;&#xFF0C;<code>/\d+(?!\.)/</code>&#xA0;&#x53EA;&#x6709;&#x5F53;&#x4E00;&#x4E2A;&#x6570;&#x5B57;&#x540E;&#x9762;&#x6CA1;&#x6709;&#x7D27;&#x8DDF;&#x7740;&#x4E00;&#x4E2A;&#x5C0F;&#x6570;&#x70B9;&#x65F6;&#xFF0C;&#x624D;&#x4F1A;&#x5339;&#x914D;&#x8BE5;&#x6570;&#x5B57;&#x3002;</p>

    <p><code>/\d+(?!\.)/.exec(&quot;3.141&quot;)</code>&#xA0;&#x5339;&#x914D; 141 &#x800C;&#x4E0D;&#x662F; 3.141&#x3002;</p>
   </td>
  </tr>
  <tr>
   <td><code><em>x</em>|<em>y</em></code></td>
   <td>
    <p>&#x5339;&#x914D;&#xA0;<code><em>x</em></code>&#xA0;&#x6216;&#xA0;<code><em>y</em></code></p>

    <p>&#x4F8B;&#x5982;&#xFF0C;<code>/green|red/</code>&#xA0;&#x5339;&#x914D; &quot;green apple&quot; &#x4E2D;&#x7684; &#x2018;green&apos;&#xFF0C;&quot;red apple.&quot; &#x4E2D;&#x7684; &apos;red&apos;&#x3002;</p>
   </td>
  </tr>
  <tr>
   <td><code><em>x</em>{<em>n</em>}</code></td>
   <td>
    <p><code><em>n</em></code>&#xA0;&#x662F;&#x4E00;&#x4E2A;&#x6B63;&#x6574;&#x6570;&#x3002;&#x524D;&#x9762;&#x7684;&#x6A21;&#x5F0F; <em>x</em>&#xA0;&#x8FDE;&#x7EED;&#x51FA;&#x73B0; n &#x6B21;&#x65F6;&#x5339;&#x914D;&#x3002;</p>

    <p>&#x4F8B;&#x5982;&#xFF0C;<code>/a{2}/</code>&#xA0;&#x4E0D;&#x5339;&#x914D; &quot;candy,&quot; &#x4E2D;&#x7684; &quot;a&quot;&#xFF0C;&#x4F46;&#x662F;&#x5339;&#x914D; &quot;caandy,&quot; &#x4E2D;&#x7684;&#x4E24;&#x4E2A; &quot;a&quot;&#xFF0C;&#x4E14;&#x5339;&#x914D; &quot;caaandy.&quot; &#x4E2D;&#x7684;&#x524D;&#x4E24;&#x4E2A; &quot;a&quot;&#x3002;</p>
   </td>
  </tr>
  <tr>
   <td><code><em>x</em>{<em>n</em>,}</code></td>
   <td>
    <p><code><em>n</em></code>&#xA0;&#x662F;&#x4E00;&#x4E2A;&#x6B63;&#x6574;&#x6570;&#x3002;&#x524D;&#x9762;&#x7684;&#x6A21;&#x5F0F;&#xA0;<em>x</em>&#xA0;&#x8FDE;&#x7EED;&#x51FA;&#x73B0;&#x81F3;&#x5C11; n &#x6B21;&#x65F6;&#x5339;&#x914D;&#x3002;</p>

    <p>&#x4F8B;&#x5982;&#xFF0C;<code>/a{2,}/</code>&#xA0;&#x4E0D;&#x5339;&#x914D; &quot;candy&quot; &#x4E2D;&#x7684; &quot;a&quot;&#xFF0C;&#x4F46;&#x662F;&#x5339;&#x914D; &quot;caandy&quot; &#x548C; &quot;caaaaaaandy.&quot; &#x4E2D;&#x6240;&#x6709;&#x7684; &quot;a&quot;&#x3002;</p>
   </td>
  </tr>
  <tr>
   <td><code><em>x</em>{<em>n</em>,<em>m</em>}</code></td>
   <td>
    <p><code><em>n</em></code>&#xA0;&#x548C;&#xA0;<code><em>m</em></code>&#xA0;&#x4E3A;&#x6B63;&#x6574;&#x6570;&#x3002;&#x524D;&#x9762;&#x7684;&#x6A21;&#x5F0F; x &#x8FDE;&#x7EED;&#x51FA;&#x73B0;&#x81F3;&#x5C11; n &#x6B21;&#xFF0C;&#x81F3;&#x591A; m &#x6B21;&#x65F6;&#x5339;&#x914D;&#x3002;</p>

    <p>&#x4F8B;&#x5982;&#xFF0C;<code>/a{1,3}/</code>&#xA0;&#x4E0D;&#x5339;&#x914D; &quot;cndy&quot;&#xFF0C;&#x5339;&#x914D; &quot;candy,&quot; &#x4E2D;&#x7684; &quot;a&quot;&#xFF0C;&quot;caandy,&quot; &#x4E2D;&#x7684;&#x4E24;&#x4E2A; &quot;a&quot;&#xFF0C;&#x5339;&#x914D; &quot;caaaaaaandy&quot; &#x4E2D;&#x7684;&#x524D;&#x9762;&#x4E09;&#x4E2A; &quot;a&quot;&#x3002;&#x6CE8;&#x610F;&#xFF0C;&#x5F53;&#x5339;&#x914D; &quot;caaaaaaandy&quot; &#x65F6;&#xFF0C;&#x5373;&#x4F7F;&#x539F;&#x59CB;&#x5B57;&#x7B26;&#x4E32;&#x62E5;&#x6709;&#x66F4;&#x591A;&#x7684; &quot;a&quot;&#xFF0C;&#x5339;&#x914D;&#x9879;&#x4E5F;&#x662F; &quot;aaa&quot;&#x3002;</p>
   </td>
  </tr>
 </tbody>
</table>

<ol>
 <li><span id="endnote_equivalent_s"><strong><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#ref_equivalent_s">^</a></strong></span>&#x7B49;&#x4EF7;&#x4E8E;:
  <p><code>[\t\n\v\f\r \u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000]</code></p>
 </li>
</ol>

<h3 name="Properties" id="Properties">&#x5C5E;&#x6027;</h3>

<div><small><em>For properties available on <code>RegExp</code> instances, see <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/prototype#Properties">Properties of RegExp instances</a>.</em></small></div>

<dl>
 <dt>&#xA0;</dt>
</dl>

<dl>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/prototype" title="RegExp.prototype &#x5C5E;&#x6027;&#x8868;&#x793A;&#xA0;RegExp&#xA0;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x539F;&#x578B;&#x5BF9;&#x8C61;&#x3002;"><code>RegExp.prototype</code></a></dt>
 <dd>&#x5141;&#x8BB8;&#x4E3A;&#x6240;&#x6709;&#x6B63;&#x5219;&#x5BF9;&#x8C61;&#x6DFB;&#x52A0;&#x5C5E;&#x6027;&#x3002;</dd>
 <dt>RegExp.length</dt>
 <dd><code>RegExp.length</code>&#xA0;&#x503C;&#x4E3A; 2&#x3002;</dd>
</dl>

<div><div class="inheritsbox template-jsOverrides" style="border: 5px solid #D1D1FF; background: #f5f5ff; padding: 2px 10px; margin: 25px 0; overflow: hidden;"> 
<div><span style="font-weight: 700;">Properties inherited from <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function"><code>Function</code></a>:</span></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/Arity" class="internal"><code>arity</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/Caller" class="internal"><code>caller</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/Constructor" class="new internal"><code>constructor</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/Length" class="internal"><code>length</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/Name" class="internal"><code>name</code></a></div>
</div></div>

<h3 name="Methods" id="Methods">&#x65B9;&#x6CD5;</h3>

<div><small><em>For methods available on <code>RegExp</code> instances, see <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/prototype#Methods">Methods of RegExp instances</a>.</em></small></div>

<div>&#x5168;&#x5C40;&#x5BF9;&#x8C61;<span style="line-height: 1.5;">&#xA0;</span><code style="font-size: 14px;">RegExp</code><span style="line-height: 1.5;">&#xA0;&#x81EA;&#x8EAB;&#x6CA1;&#x6709;&#x65B9;&#x6CD5;, &#x4E0D;&#x8FC7;&#x5B83;&#x4F1A;&#x7EE7;&#x627F;&#x4E00;&#x4E9B;&#x65B9;&#x6CD5;&#x901A;&#x8FC7;&#x539F;&#x578B;&#x94FE;</span></div>

<div>&#xA0;</div>

<p></p><div class="inheritsbox template-jsOverrides" style="border: 5px solid #D1D1FF; background: #f5f5ff; padding: 2px 10px; margin: 25px 0; overflow: hidden;"> 
<div><span style="font-weight: 700;">Methods inherited from <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function"><code>Function</code></a>:</span></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/Apply" class="internal"><code>apply</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/Call" class="internal"><code>call</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/ToSource" class="internal"><code>toSource</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/ToString" class="internal"><code>toString</code></a></div>
</div><p></p>

<h2 id="RegExp_&#x5B9E;&#x4F8B;">RegExp &#x5B9E;&#x4F8B;</h2>

<h3 name="RegExp_instances-Properties" id="RegExp_instances-Properties">&#x5C5E;&#x6027;</h3>

<div><p>&#x67E5;&#x770B;<a href="/zh-CN/docs/JavaScript/Reference/Deprecated_Features#RegExp_Properties" class="new" title="zh-CN/docs/JavaScript/Reference/Deprecated_Features#RegExp_Properties">&#x5DF2;&#x5E9F;&#x5F03;&#x7684;RegExp&#x5C5E;&#x6027;</a></p>
<p>&#x6CE8;&#x610F;&#xFF0C;<code>RegExp</code>&#xA0;&#x5BF9;&#x8C61;&#x7684;&#x51E0;&#x4E2A;&#x5C5E;&#x6027;&#x65E2;&#x6709;&#x5B8C;&#x6574;&#x7684;&#x957F;&#x5C5E;&#x6027;&#x540D;&#xFF0C;&#x4E5F;&#x6709;&#x5BF9;&#x5E94;&#x7684;&#x7C7B; Perl &#x7684;&#x77ED;&#x5C5E;&#x6027;&#x540D;&#x3002;&#x4E24;&#x4E2A;&#x5C5E;&#x6027;&#x90FD;&#x6709;&#x7740;&#x540C;&#x6837;&#x7684;&#x503C;&#x3002;JavaScript &#x7684;&#x6B63;&#x5219;&#x8BED;&#x6CD5;&#x5C31;&#x662F;&#x57FA;&#x4E8E; Perl &#x7684;&#x3002;</p>
<dl><dt>
  <code style="font-style: normal; font-weight: bold;">RegExp.prototype.</code><code style="font-style: normal; font-weight: bold;">constructor</code></dt>
 <dd>
  &#x521B;&#x5EFA;&#x8BE5;&#x6B63;&#x5219;&#x5BF9;&#x8C61;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;&#x3002;</dd>
 <dt>
  <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global" title="global &#x5C5E;&#x6027;&#x8868;&#x660E;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x662F;&#x5426;&#x4F7F;&#x7528;&#x4E86; &quot;g&quot; &#x6807;&#x5FD7;&#x3002;global &#x662F;&#x4E00;&#x4E2A;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5B9E;&#x4F8B;&#x7684;&#x53EA;&#x8BFB;&#x5C5E;&#x6027;&#x3002;"><code>RegExp.prototype.global</code></a></dt>
 <dd>
  &#x662F;&#x5426;&#x5F00;&#x542F;&#x5168;&#x5C40;&#x5339;&#x914D;&#xFF0C;&#x4E5F;&#x5C31;&#x662F;&#x5339;&#x914D;&#x76EE;&#x6807;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x6240;&#x6709;&#x53EF;&#x80FD;&#x7684;&#x5339;&#x914D;&#x9879;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x53EA;&#x8FDB;&#x884C;&#x7B2C;&#x4E00;&#x6B21;&#x5339;&#x914D;&#x3002;</dd>
 <dt>
  <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase" title="ignoreCase &#x5C5E;&#x6027;&#x8868;&#x660E;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x662F;&#x5426;&#x4F7F;&#x7528;&#x4E86; &quot;i&quot; &#x6807;&#x5FD7;&#x3002;ignoreCase&#xA0;&#x662F;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5B9E;&#x4F8B;&#x7684;&#x53EA;&#x8BFB;&#x5C5E;&#x6027;&#x3002;"><code>RegExp.prototype.ignoreCase</code></a></dt>
 <dd>
  &#x5728;&#x5339;&#x914D;&#x5B57;&#x7B26;&#x4E32;&#x65F6;&#x662F;&#x5426;&#x8981;&#x5FFD;&#x7565;&#x5B57;&#x7B26;&#x7684;&#x5927;&#x5C0F;&#x5199;&#x3002;</dd>
 <dt>
  <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex" title="lastIndex&#xA0;&#x662F;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x7684;&#x4E00;&#x4E2A;&#x53EF;&#x8BFB;&#x53EF;&#x5199;&#x7684;&#x6574;&#x578B;&#x5C5E;&#x6027;&#xFF0C;&#x7528;&#x6765;&#x6307;&#x5B9A;&#x4E0B;&#x4E00;&#x6B21;&#x5339;&#x914D;&#x7684;&#x8D77;&#x59CB;&#x7D22;&#x5F15;&#x3002;"><code>RegExp.prototype.lastIndex</code></a></dt>
 <dd>
  &#x4E0B;&#x6B21;&#x5339;&#x914D;&#x5F00;&#x59CB;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x7D22;&#x5F15;&#x4F4D;&#x7F6E;&#x3002;</dd>
 <dt>
  <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline" title="multiline &#x5C5E;&#x6027;&#x8868;&#x660E;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x662F;&#x5426;&#x4F7F;&#x7528;&#x4E86; &quot;m&quot; &#x6807;&#x5FD7;&#x3002;multiline&#xA0;&#x662F;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5B9E;&#x4F8B;&#x7684;&#x4E00;&#x4E2A;&#x53EA;&#x8BFB;&#x5C5E;&#x6027;&#x3002;"><code>RegExp.prototype.multiline</code></a></dt>
 <dd>
  &#x662F;&#x5426;&#x5F00;&#x542F;&#x591A;&#x884C;&#x6A21;&#x5F0F;&#x5339;&#x914D;&#xFF08;&#x5F71;&#x54CD; ^ &#x548C; $ &#x7684;&#x884C;&#x4E3A;&#xFF09;&#x3002;</dd>
 <dt>
  <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source" title="source &#x5C5E;&#x6027;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x503C;&#x4E3A;&#x5F53;&#x524D;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5BF9;&#x8C61;&#x7684;&#x6A21;&#x5F0F;&#x6587;&#x672C;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x4E0D;&#x4F1A;&#x5305;&#x542B;&#x6B63;&#x5219;&#x5B57;&#x9762;&#x91CF;&#x4E24;&#x8FB9;&#x7684;&#x659C;&#x6760;&#x4EE5;&#x53CA;&#x4EFB;&#x4F55;&#x7684;&#x6807;&#x5FD7;&#x5B57;&#x7B26;&#x3002;"><code>RegExp.prototype.source</code></a></dt>
 <dd>
  &#x6B63;&#x5219;&#x5BF9;&#x8C61;&#x7684;&#x6E90;&#x6A21;&#x5F0F;&#x6587;&#x672C;&#x3002;</dd>
 <dt>
  <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>RegExp.prototype.sticky</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></dt>
 <dd>
  &#x662F;&#x5426;&#x5F00;&#x542F;&#x7C98;&#x6EDE;&#x5339;&#x914D;&#x3002;</dd>
</dl><div>
 <div class="inheritsbox template-jsOverrides" style="border: 5px solid #D1D1FF; background: #f5f5ff; padding: 2px 10px; margin: 25px 0; overflow: hidden;">  
<div><span style="font-weight: 700;">Properties inherited from <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object"><code>Object</code></a>:</span></div> 
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Parent" class="internal"><code>__parent__</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Proto" class="internal"><code>__proto__</code></a></div> 
</div></div></div>

<h3 id="&#x65B9;&#x6CD5;">&#x65B9;&#x6CD5;</h3>

<div><p>&#x67E5;&#x770B;<a href="/zh-CN/docs/JavaScript/Reference/Deprecated_Features#RegExp_Methods" class="new" title="zh-CN/docs/JavaScript/Reference/Deprecated_Features#RegExp_Methods">&#x5DF2;&#x5E9F;&#x5F03;&#x7684;RegExp&#x65B9;&#x6CD5;</a></p>
<dl><dt>
  <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec" title="exec() &#x65B9;&#x6CD5;&#x4E3A;&#x6307;&#x5B9A;&#x7684;&#x4E00;&#x6BB5;&#x5B57;&#x7B26;&#x4E32;&#x6267;&#x884C;&#x641C;&#x7D22;&#x5339;&#x914D;&#x64CD;&#x4F5C;&#x3002;&#x5B83;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x662F;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x6216;&#x8005; null&#x3002;"><code>RegExp.prototype.exec()</code></a></dt>
 <dd>
  &#x5728;&#x76EE;&#x6807;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x6B63;&#x5219;&#x5339;&#x914D;&#x64CD;&#x4F5C;&#x3002;</dd>
 <dt>
  <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test" title="test() &#x65B9;&#x6CD5;&#x6267;&#x884C;&#x4E00;&#x4E2A;&#x68C0;&#x7D22;&#xFF0C;&#x7528;&#x6765;&#x67E5;&#x770B;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x4E0E;&#x6307;&#x5B9A;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x662F;&#x5426;&#x5339;&#x914D;&#x3002;&#x8FD4;&#x56DE; true &#x6216; false&#x3002;"><code>RegExp.prototype.test()</code></a></dt>
 <dd>
  &#x6D4B;&#x8BD5;&#x5F53;&#x524D;&#x6B63;&#x5219;&#x662F;&#x5426;&#x80FD;&#x5339;&#x914D;&#x76EE;&#x6807;&#x5B57;&#x7B26;&#x4E32;&#x3002;</dd>
 <dt>
  <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/toSource" title="&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;,&#x4EE3;&#x8868;&#x5F53;&#x524D;&#x5BF9;&#x8C61;&#x7684;&#x6E90;&#x4EE3;&#x7801;"><code>RegExp.prototype.toSource()</code></a> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></dt>
 <dd>
  &#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x5176;&#x503C;&#x4E3A;&#x8BE5;&#x6B63;&#x5219;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x9762;&#x91CF;&#x5F62;&#x5F0F;&#x3002;&#x8986;&#x76D6;&#x4E86;<code>Object.prototype.toSource</code>&#xA0;&#x65B9;&#x6CD5;.</dd>
 <dt>
  <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/toString" title="toString() &#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x8868;&#x793A;&#x8BE5;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;"><code>RegExp.prototype.toString()</code></a></dt>
 <dd>
  &#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x5176;&#x503C;&#x4E3A;&#x8BE5;&#x6B63;&#x5219;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x9762;&#x91CF;&#x5F62;&#x5F0F;&#x3002;&#x8986;&#x76D6;&#x4E86;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString" title="toString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x4EE3;&#x8868;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;"><code>Object.prototype.toString()</code></a>&#xA0;&#x65B9;&#x6CD5;&#x3002;</dd>
</dl><div>
 <div class="inheritsbox template-jsOverrides" style="border: 5px solid #D1D1FF; background: #f5f5ff; padding: 2px 10px; margin: 25px 0; overflow: hidden;">  
<div><span style="font-weight: 700;">Methods inherited from <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object"><code>Object</code></a>:</span></div> 
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/DefineGetter" class="new internal"><code>__defineGetter__</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/DefineSetter" class="new internal"><code>__defineSetter__</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/HasOwnProperty" class="internal"><code>hasOwnProperty</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/IsPrototypeOf" class="internal"><code>isPrototypeOf</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/LookupGetter" class="internal"><code>__lookupGetter__</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/LookupSetter" class="new internal"><code>__lookupSetter__</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/NoSuchMethod" class="internal"><code>__noSuchMethod__</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/PropertyIsEnumerable" class="internal"><code>propertyIsEnumerable</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/ToLocaleString" class="internal"><code>toLocaleString</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Unwatch" class="internal"><code>unwatch</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/ValueOf" class="internal"><code>valueOf</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Watch" class="internal"><code>watch</code></a></div> 
</div></div></div>

<h2 id="&#x4F8B;&#x5B50;">&#x4F8B;&#x5B50;</h2>

<h3 name="Example:_Using_a_regular_expression_to_change_data_format" id="Example:_Using_a_regular_expression_to_change_data_format">&#x4F8B;&#x5B50;&#xFF1A;&#x4F7F;&#x7528;&#x6B63;&#x5219;&#x6539;&#x53D8;&#x6570;&#x636E;&#x7ED3;&#x6784;</h3>

<p>&#x4E0B;&#x4F8B;&#x4F7F;&#x7528;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace" title="replace() &#x65B9;&#x6CD5;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x66FF;&#x6362;&#x503C;&#xFF08;replacement&#xFF09;&#x66FF;&#x6362;&#x6389;&#x4E00;&#x4E2A;&#x5339;&#x914D;&#x6A21;&#x5F0F;&#xFF08;pattern&#xFF09;&#x5728;&#x539F;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x67D0;&#x4E9B;&#x6216;&#x6240;&#x6709;&#x7684;&#x5339;&#x914D;&#x9879;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x66FF;&#x6362;&#x540E;&#x7684;&#x65B0;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x8FD9;&#x4E2A;&#x66FF;&#x6362;&#x6A21;&#x5F0F;&#x53EF;&#x4EE5;&#x662F;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x6216;&#x8005;&#x4E00;&#x4E2A;&#xA0;RegExp&#xFF0C;&#x66FF;&#x6362;&#x503C;&#x53EF;&#x4EE5;&#x662F;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x6216;&#x8005;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x3002;"><code>replace</code></a>&#xA0;&#x65B9;&#x6CD5; &#xFF08;&#x7EE7;&#x627F;&#x81EA;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String" title="String&#xA0;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x662F;&#x7528;&#x6765;&#x6784;&#x9020;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#x6216;&#x5B57;&#x7B26;&#x5E8F;&#x5217;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;&#x3002;"><code>String</code></a>&#xFF09;&#x53BB;&#x5339;&#x914D;&#x59D3;&#x540D;&#xA0;<em>first last </em>&#x8F93;&#x51FA;&#x65B0;&#x7684;&#x683C;&#x5F0F;&#xA0;<em>last</em>, <em>first</em>&#x3002;&#x811A;&#x672C;&#x4E2D;&#x4F7F;&#x7528;&#xA0;<code>$1 &#x548C;</code>&#xA0;<code>$2</code>&#xA0;&#x6307;&#x660E;&#x62EC;&#x53F7;&#x91CC;&#x5148;&#x524D;&#x7684;&#x5339;&#x914D;.</p>

<pre class="brush: js">var re = /(\w+)\s(\w+)/;
var str = &quot;John Smith&quot;;
var newstr = str.replace(re, &quot;$2, $1&quot;);
print(newstr);</pre>

<p>&#x663E;&#x793A; &quot;Smith, John&quot;.</p>

<h3 id="&#x4F8B;&#x5B50;&#xFF1A;&#x5728;&#x591A;&#x884C;&#x4E2D;&#x4F7F;&#x7528;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;" style="line-height: 24px;">&#x4F8B;&#x5B50;&#xFF1A;&#x5728;&#x591A;&#x884C;&#x4E2D;&#x4F7F;&#x7528;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;</h3>

<pre class="brush: js">var s = &quot;Please yes\nmake my day!&quot;;
s.match(/yes.*day/);
// Returns null
s.match(/yes[^]*day/);
// Returns &apos;yes\nmake my day&apos;</pre>

<h3 name="Example:_Using_a_regular_expression_with_the_sticky_flag" id="Example:_Using_a_regular_expression_with_the_sticky_flag">&#x4F8B;&#x5B50;: &#x4F7F;&#x7528;&#x5E26;&#x6709; &#x201D;sticky&#x201C; &#x6807;&#x5FD7;&#x7684;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;</h3>

<p>&#x8BE5;&#x4F8B;&#x5C55;&#x793A;&#x4E86;&#xFF0C;&#x5982;&#x4F55;&#x5728;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x4E0A;&#x4F7F;&#x7528; sticky &#x6807;&#x5FD7;&#xFF0C;&#x7528;&#x6765;&#x5339;&#x914D;&#x591A;&#x884C;&#x8F93;&#x5165;&#x7684;&#x5355;&#x72EC;&#x884C;&#x3002;</p>

<pre class="brush: js">var text = &quot;First line\nsecond line&quot;;
var regex = /(\S+) line\n?/y;

var match = regex.exec(text);
print(match[1]);  // prints &quot;First&quot;
print(regex.lastIndex); // prints 11

var match2 = regex.exec(text);
print(match2[1]); // prints &quot;Second&quot;
print(regex.lastIndex); // prints &quot;22&quot;

var match3 = regex.exec(text);
print(match3 === null); // prints &quot;true&quot;</pre>

<p>&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#xA0;<code>try { &#x2026; } catch { &#x2026; }</code>&#xA0;&#x6765;&#x6D4B;&#x8BD5;&#x8FD0;&#x884C;&#x65F6;&#xFF08;run-time&#xFF09;&#x662F;&#x5426;&#x652F;&#x6301; <code>sticky</code> &#x6807;&#x5FD7;&#x3002;&#x8FD9;&#x79CD;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x5FC5;&#x987B;&#x4F7F;&#x7528;&#xA0;<code>eval(&#x2026;)</code>&#xA0;&#x8868;&#x8FBE;&#x5F0F;&#x6216;&#xA0;<code>RegExp(<var>regex-string</var>, <var>flags-string</var>)</code> &#x8BED;&#x6CD5;&#xFF08;&#x8FD9;&#x662F;&#x7531;&#x4E8E;&#xA0;<code>/<var>regex</var>/<var>flags</var></code>&#xA0;&#x8868;&#x793A;&#x6CD5;&#x5C06;&#x4F1A;&#x5728;&#x7F16;&#x8BD1;&#x65F6;&#x523B;&#x88AB;&#x5904;&#x7406;&#xFF0C;&#x56E0;&#x6B64;&#x5728;&#xA0;<code>catch</code> &#x8BED;&#x53E5;&#x5757;&#x5904;&#x7406;&#x5F02;&#x5E38;&#x524D;&#x5C31;&#x4F1A;&#x629B;&#x51FA;&#x4E00;&#x4E2A;&#x5F02;&#x5E38;&#x3002;&#x4F8B;&#x5982;&#xFF1A;</p>

<pre class="brush: js">var supports_sticky;
try { RegExp(&apos;&apos;,&apos;y&apos;); supports_sticky = true; }
catch(e) { supports_sticky = false; }
alert(supports_sticky); // alerts &quot;false&quot; in Firefox 2, &quot;true&quot; in Firefox 3+</pre>

<h3 name="Browser_Compatibility" id="Browser_Compatibility">&#x4F8B;&#x5B50;&#xFF1A;&#x4F7F;&#x7528;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x548C; Unicode &#x5B57;&#x7B26;</h3>

<p>&#x6B63;&#x5982;&#x4E0A;&#x9762;&#x8868;&#x683C;&#x63D0;&#x5230;&#x7684;&#xFF0C;<code>\w</code>&#xA0;&#x6216;&#xA0;<code>\W</code> &#x53EA;&#x4F1A;&#x5339;&#x914D;&#x57FA;&#x672C;&#x7684; ASCII &#x5B57;&#x7B26;&#xFF1B;&#x5982; &apos;a&apos; &#x5230; &apos;z&apos;&#x3001; &apos;A&apos; &#x5230; &apos;Z&apos;&#x3001; 0 &#x5230; 9 &#x53CA; &apos;_&apos;&#x3002;&#x4E3A;&#x4E86;&#x5339;&#x914D;&#x5176;&#x4ED6;&#x8BED;&#x8A00;&#x4E2D;&#x7684;&#x5B57;&#x7B26;&#xFF0C;&#x5982;&#x897F;&#x91CC;&#x5C14;&#xFF08;Cyrillic&#xFF09;&#x6216; &#x5E0C;&#x4F2F;&#x6765;&#x8BED;&#xFF08;Hebrew&#xFF09;&#xFF0C;&#x8981;&#x4F7F;&#x7528;&#xA0;<code>\uhhhh</code>&#xFF0C;&quot;hhhh&quot; &#x8868;&#x793A;&#x4EE5;&#x5341;&#x516D;&#x8FDB;&#x5236;&#x8868;&#x793A;&#x7684;&#x5B57;&#x7B26;&#x7684; Unicode &#x503C;&#x3002;&#x4E0B;&#x4F8B;&#x5C55;&#x793A;&#x4E86;&#x600E;&#x6837;&#x4ECE;&#x4E00;&#x4E2A;&#x5355;&#x8BCD;&#x4E2D;&#x5206;&#x79BB;&#x51FA; Unicode &#x5B57;&#x7B26;&#x3002;</p>

<pre class="brush: js">var text = &quot;&#x41E;&#x431;&#x440;&#x430;&#x437;&#x435;&#x446; text &#x43D;&#x430; &#x440;&#x443;&#x441;&#x441;&#x43A;&#x43E;&#x43C; &#x44F;&#x437;&#x44B;&#x43A;&#x435;&quot;;
var regex = /[\u0400-\u04FF]+/g;

var match = regex.exec(text);
print(match[1]);  // prints &quot;&#x41E;&#x431;&#x440;&#x430;&#x437;&#x435;&#x446;&quot;
print(regex.lastIndex);  // prints &quot;7&quot;

var match2 = regex.exec(text);
print(match2[1]);  // prints &quot;&#x43D;&#x430;&quot; [did not print &quot;text&quot;]
print(regex.lastIndex);  // prints &quot;15&quot;

// and so on</pre>

<p>&#x8FD9;&#x91CC;&#x6709;&#x4E00;&#x4E2A;&#x5916;&#x90E8;&#x8D44;&#x6E90;&#xFF0C;&#x7528;&#x6765;&#x83B7;&#x53D6; Unicode &#x4E2D;&#x7684;&#x4E0D;&#x540C;&#x533A;&#x5757;&#x8303;&#x56F4;&#xFF1A;<a href="http://kourge.net/projects/regexp-unicode-block" class="external" title="http://kourge.net/projects/regexp-unicode-block">Regexp-unicode-block</a></p>

<h3 id="&#x4F8B;&#x5B50;&#xFF1A;&#x4ECE;_URL_&#x4E2D;&#x63D0;&#x53D6;&#x5B50;&#x57DF;&#x540D;" style="line-height: 24px;">&#x4F8B;&#x5B50;&#xFF1A;&#x4ECE; URL &#x4E2D;&#x63D0;&#x53D6;&#x5B50;&#x57DF;&#x540D;</h3>

<pre class="brush: js">var url = &quot;http://xxx.domain.com&quot;;
print(/[^.]+/.exec(url)[0].substr(7)); // prints &quot;xxx&quot;</pre>

<h2 id="&#x89C4;&#x8303;" style="margin-bottom: 20px; line-height: 30px;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition. Implemented in JavaScript 1.1</td>
   <td>Standard</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.10" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">RegExp</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-regexp-regular-expression-objects" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">RegExp</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 name="Browser_Compatibility" id="Browser_Compatibility">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
   <td>Sticky flag (&quot;y&quot;)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><a href="/en-US/Firefox/Releases/3" title="Released on 2008-06-17.">3.0</a> (1.9)</td>
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
   <td>Sticky flag (&quot;y&quot;)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>1.0 (1.9)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;" style="margin-bottom: 20px; line-height: 30px;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions" title="JavaScript/Guide/Regular_Expressions">Regular Expressions</a>&#xA0;chapter in the&#xA0;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" title="JavaScript/Guide">JavaScript Guide</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match">String.prototype.match()</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace">String.prototype.replace()</a></li>
</ul>
                  
                
              