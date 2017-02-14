
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>&#x672C;&#x9644;&#x5F55;&#x5217;&#x51FA;&#x4E86;&#x90A3;&#x4E9B;&#x5DF2;&#x7ECF;&#x88AB;&#x5E9F;&#x5F03;&#x7684;(&#x4ECD;&#x7136;&#x53EF;&#x7528;,&#x4F46;&#x672A;&#x6765;&#x4F1A;&#x88AB;&#x5220;&#x9664;)&#x6216;&#x8005;&#x5DF2;&#x7ECF;&#x8FC7;&#x65F6;&#x7684;(&#x5DF2;&#x7ECF;&#x88AB;&#x5220;&#x9664;,&#x4E0D;&#x80FD;&#x518D;&#x7528;&#x4E86;)JavaScript&#x7279;&#x6027;.</p>

<h2 id=".E5.BA.9F.E5.BC.83.E7.89.B9.E6.80.A7">&#x5E9F;&#x5F03;&#x7279;&#x6027;</h2>

<p>&#x8FD9;&#x4E9B;&#x5E9F;&#x5F03;&#x7684;&#x7279;&#x6027;&#x4ECD;&#x7136;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;,&#x4F46;&#x4F60;&#x8981;&#x4FDD;&#x6301;&#x8C28;&#x614E;,&#x56E0;&#x4E3A;&#x5B83;&#x4EEC;&#x5F88;&#x53EF;&#x80FD;&#x4F1A;&#x5728;&#x672A;&#x6765;&#x7684;&#x67D0;&#x4E2A;&#x65F6;&#x5019;&#x88AB;&#x5220;&#x9664;.</p>

<h3 id="RegExp_Properties" name="RegExp_Properties">RegExp&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;</h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x8FD9;&#x4E9B;&#x5C5E;&#x6027;&#x5DF2;&#x7ECF;&#x88AB;&#x5E9F;&#x5F03;.&#x6CE8;&#x610F;,&#x8FD9;&#x548C;<a href="/en-US/docs/JavaScript/Reference/Global_Objects/String/replace" title="/en-US/docs/JavaScript/Reference/Global_Objects/String/replace">&#x66FF;&#x6362;&#x5B57;&#x7B26;&#x4E32;</a>&#x4E2D;&#x4F7F;&#x7528;&#x7684;&#x540C;&#x540D;&#x6807;&#x8BB0;&#x6CA1;&#x6709;&#x76F4;&#x63A5;&#x5173;&#x7CFB;.</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th>&#x5C5E;&#x6027;</th>
   <th>&#x63CF;&#x8FF0;</th>
  </tr>
  <tr>
   <td><code>$1, ..., $9</code></td>
   <td>
    <p>&#x4E0A;&#x6B21;&#x4EFB;&#x610F;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x7684;&#x5339;&#x914D;&#x64CD;&#x4F5C;&#x4E2D;&#x5BF9;&#x5E94;&#x6355;&#x83B7;&#x5206;&#x7EC4;&#x7684;&#x5339;&#x914D;&#x7ED3;&#x679C;.</p>
   </td>
  </tr>
  <tr>
   <td><code>$_</code></td>
   <td><code>input&#x5C5E;&#x6027;&#x522B;&#x540D;</code>.</td>
  </tr>
  <tr>
   <td><code>$*</code></td>
   <td><code>multiline</code><code>&#x5C5E;&#x6027;&#x522B;&#x540D;</code>.</td>
  </tr>
  <tr>
   <td><code>$&amp;</code></td>
   <td><code>lastMatch</code><code>&#x5C5E;&#x6027;&#x522B;&#x540D;</code>.</td>
  </tr>
  <tr>
   <td><code>$+</code></td>
   <td><code>lastParen</code><code>&#x5C5E;&#x6027;&#x522B;&#x540D;</code>.</td>
  </tr>
  <tr>
   <td><code>$`</code></td>
   <td><code>leftContext</code><code>&#x5C5E;&#x6027;&#x522B;&#x540D;</code>.</td>
  </tr>
  <tr>
   <td><code>$&apos;</code></td>
   <td><code>rightContext</code><code>&#x5C5E;&#x6027;&#x522B;&#x540D;</code>.</td>
  </tr>
  <tr>
   <td><code>input</code></td>
   <td>&#x4E0A;&#x6B21;&#x4EFB;&#x610F;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5339;&#x914D;&#x7684;&#x76EE;&#x6807;&#x5B57;&#x7B26;&#x4E32;.</td>
  </tr>
  <tr>
   <td><code>lastMatch</code></td>
   <td>&#x4E0A;&#x6B21;&#x4EFB;&#x610F;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x6210;&#x529F;&#x5339;&#x914D;&#x7684;&#x5B50;&#x5B57;&#x7B26;&#x4E32;.</td>
  </tr>
  <tr>
   <td><code>lastParen</code></td>
   <td>&#x4E0A;&#x6B21;&#x4EFB;&#x610F;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x7684;&#x5339;&#x914D;&#x64CD;&#x4F5C;&#x4E2D;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x6355;&#x83B7;&#x5206;&#x7EC4;&#x7684;&#x5339;&#x914D;&#x7ED3;&#x679C;.</td>
  </tr>
  <tr>
   <td><code>leftContext</code></td>
   <td>&#x4E0A;&#x6B21;&#x4EFB;&#x610F;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x6210;&#x529F;&#x5339;&#x914D;&#x7684;&#x5B50;&#x5B57;&#x7B26;&#x4E32;&#x5DE6;&#x8FB9;&#x7684;&#x5B57;&#x7B26;&#x4E32;</td>
  </tr>
  <tr>
   <td><code>rightContext</code></td>
   <td>
    <table class="standard-table">
     <tbody>
      <tr>
      </tr>
      <tr>
       <td>&#x4E0A;&#x6B21;&#x4EFB;&#x610F;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x6210;&#x529F;&#x5339;&#x914D;&#x7684;&#x5B50;&#x5B57;&#x7B26;&#x4E32;&#x53F3;&#x8FB9;&#x7684;&#x5B57;&#x7B26;&#x4E32;</td>
      </tr>
     </tbody>
    </table>
   </td>
  </tr>
 </tbody>
</table>

<p>&#x5E94;&#x8BE5;&#x4F7F;&#x7528;&#x4E0B;&#x9762;&#x8FD9;&#x4E9B;&#x6B63;&#x5219;&#x5B9E;&#x4F8B;&#x4E0A;&#x7684;&#x540C;&#x540D;&#x5C5E;&#x6027;&#x6765;&#x4EE3;&#x66FF;:</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th>&#x5C5E;&#x6027;</th>
   <th>&#x63CF;&#x8FF0;</th>
  </tr>
  <tr>
   <td><code>global</code></td>
   <td>&#x8BE5;&#x6B63;&#x5219;&#x662F;&#x5426;&#x5F00;&#x542F;&#x4E86;&#x5168;&#x5C40;&#x5339;&#x914D;&#x6A21;&#x5F0F;.</td>
  </tr>
  <tr>
   <td><code>ignoreCase</code></td>
   <td>&#x8BE5;&#x6B63;&#x5219;&#x662F;&#x5426;&#x5F00;&#x542F;&#x4E86;&#x5FFD;&#x7565;&#x5927;&#x5C0F;&#x5199;&#x6A21;&#x5F0F;.</td>
  </tr>
  <tr>
   <td><code>lastIndex</code></td>
   <td>&#x4E0A;&#x6B21;&#x6210;&#x529F;&#x5339;&#x914D;&#x540E;&#x7684;&#x7D22;&#x5F15;&#x4F4D;&#x7F6E;,&#x4F1A;&#x6210;&#x4E3A;&#x4E0B;&#x6B21;&#x5339;&#x914D;&#x7684;&#x5F00;&#x59CB;&#x7D22;&#x5F15;&#x4F4D;&#x7F6E;,&#x53EA;&#x5728;&#x5168;&#x5C40;&#x5339;&#x914D;&#x6216;&#x7C98;&#x6EDE;&#x5339;&#x914D;&#x6A21;&#x5F0F;&#x4E0B;&#x53EF;&#x7528;.</td>
  </tr>
  <tr>
   <td><code>multiline</code></td>
   <td>&#x8BE5;&#x6B63;&#x5219;&#x662F;&#x5426;&#x5F00;&#x542F;&#x4E86;&#x591A;&#x884C;&#x6A21;&#x5F0F;.</td>
  </tr>
  <tr>
   <td><code>source</code></td>
   <td>&#x6B63;&#x5219;&#x7684;&#x6E90;&#x7801;</td>
  </tr>
 </tbody>
</table>

<h3 id="RegExp_Methods" name="RegExp_Methods">RegExp&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x65B9;&#x6CD5;</h3>

<p><code>compile</code>&#x65B9;&#x6CD5;&#x5DF2;&#x7ECF;&#x88AB;&#x5E9F;&#x5F03;.</p>

<p><code>valueOf</code>&#x65B9;&#x6CD5;&#x5DF2;&#x7ECF;&#x88AB;&#x5E9F;&#x5F03;.&#x4F7F;&#x7528;<code>Object.valueOf&#x6765;&#x66FF;&#x4EE3;</code>.</p>

<h3 id=".E5.87.BD.E6.95.B0.E5.AF.B9.E8.B1.A1.E7.9A.84.E5.B1.9E.E6.80.A7">&#x51FD;&#x6570;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;</h3>

<p><code>caller</code>&#x548C;<code>arguments&#x5C5E;&#x6027;&#x5DF2;&#x7ECF;&#x5E9F;&#x5F03;</code>,&#x56E0;&#x4E3A;&#x5B83;&#x4EEC;&#x4F1A;&#x6CC4;&#x6F0F;&#x51FD;&#x6570;&#x8C03;&#x7528;&#x8005;.&#x4F60;&#x5E94;&#x8BE5;&#x5728;&#x51FD;&#x6570;&#x5185;&#x90E8;&#x4F7F;&#x7528;<code>arguments</code>&#x5BF9;&#x8C61;&#x6765;&#x4EE3;&#x66FF;<code>&#x51FD;&#x6570;&#x7684;arguments</code>&#x5C5E;&#x6027;.</p>

<h3 id="Date.E6.96.B9.E6.B3.95">Date&#x65B9;&#x6CD5;</h3>

<p><code>getYear</code>&#x548C;<code>setYear&#x65B9;&#x6CD5;</code>&#x56E0;&#x4E3A;&#x4F1A;&#x53D7;&#x5343;&#x5E74;&#x866B;&#x95EE;&#x9898;&#x7684;&#x5F71;&#x54CD;,&#x6240;&#x4EE5;&#x5DF2;&#x7ECF;&#x88AB;<code>getFullYear&#x548C;</code><code>setFullYear</code>&#x65B9;&#x6CD5;&#x66FF;&#x4EE3;.&#x540C;&#x65F6;&#x4F60;&#x8FD8;&#x5E94;&#x8BE5;&#x7528;<code>toISOString</code>&#x65B9;&#x6CD5;&#x6765;&#x4EE3;&#x66FF;&#x5DF2;&#x7ECF;&#x5E9F;&#x5F03;&#x7684;<code>toGMTString&#x65B9;&#x6CD5;</code>.</p>

<h3 id="Escape_Sequences" name="Escape_Sequences">&#x8F6C;&#x4E49;&#x5E8F;&#x5217;</h3>

<p>&#x516B;&#x8FDB;&#x5236;&#x8F6C;&#x4E49;&#x5E8F;&#x5217;(&#x53CD;&#x659C;&#x6760;\&#x540E;&#x8DDF;&#x4E00;&#x4F4D;,&#x4E24;&#x4F4D;,&#x6216;&#x4E09;&#x4F4D;&#x7684;&#x516B;&#x8FDB;&#x5236;&#x6570;&#x5B57;)&#x51FA;&#x73B0;&#x5728;&#x5B57;&#x7B26;&#x4E32;&#x5B57;&#x9762;&#x91CF;&#x548C;&#x6B63;&#x5219;&#x5B57;&#x9762;&#x91CF;&#x4E2D;&#x7684;&#x7684;&#x7528;&#x6CD5;&#x5DF2;&#x7ECF;&#x5E9F;&#x5F03;.</p>

<p><code>escape&#x51FD;&#x6570;</code>&#x548C;<code>unescape&#x51FD;&#x6570;&#x5DF2;&#x7ECF;&#x5E9F;&#x5F03;</code>,&#x8BF7;&#x4F7F;&#x7528;<code>encodeURI</code>,<code>encodeURIComponent</code>,<code>decodeURI</code>&#x6216;&#x8005;<code>decodeURIComponent</code>&#x6765;&#x8FDB;&#x884C;&#x7ED9;&#x5B9A;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x7F16;&#x7801;&#x548C;&#x89E3;&#x7801;&#x5DE5;&#x4F5C;.</p>

<h2 id=".E8.BF.87.E6.97.B6.E7.89.B9.E6.80.A7">&#x8FC7;&#x65F6;&#x7279;&#x6027;</h2>

<p>&#x8FD9;&#x4E9B;&#x8FC7;&#x65F6;&#x7684;&#x7279;&#x6027;&#x5DF2;&#x7ECF;&#x5B8C;&#x5168;&#x88AB;&#x5220;&#x9664;,&#x4E0D;&#x80FD;&#x5728;&#x5F53;&#x524D;&#x7248;&#x672C;&#x6216;&#x8005;&#x672A;&#x6765;&#x7248;&#x672C;&#x7684;JavaScript&#x4E2D;&#x4F7F;&#x7528;&#x4E86;.</p>

<h3 id=".E5.AF.B9.E8.B1.A1">&#x5BF9;&#x8C61;</h3>

<table class="standard-table">
 <tbody>
  <tr>
   <th>&#x5C5E;&#x6027;</th>
   <th>&#x63CF;&#x8FF0;</th>
  </tr>
  <tr>
   <td><code>__count__</code></td>
   <td>&#x8FD4;&#x56DE;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x5BF9;&#x8C61;&#x4E0A;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x81EA;&#x8EAB;&#x5C5E;&#x6027;&#x7684;&#x4E2A;&#x6570;.</td>
  </tr>
  <tr>
   <td><code>__parent__</code></td>
   <td>&#x6307;&#x5411;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x4E0A;&#x4E0B;&#x6587;.</td>
  </tr>
 </tbody>
</table>

<table class="standard-table">
 <tbody>
  <tr>
   <th>&#x65B9;&#x6CD5;</th>
   <th>&#x63CF;&#x8FF0;</th>
  </tr>
  <tr>
   <td><code>eval</code></td>
   <td>&#x5728;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x4E0A;&#x4E0B;&#x6587;&#x4E0A;,&#x5C06;&#x4E00;&#x4E2A;&#x5305;&#x542B;JavaScript&#x4EE3;&#x7801;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x6C42;&#x503C;.</td>
  </tr>
 </tbody>
</table>

<h3 id=".E5.87.BD.E6.95.B0">&#x51FD;&#x6570;</h3>

<table class="standard-table">
 <tbody>
  <tr>
   <th>&#x5C5E;&#x6027;</th>
   <th>&#x63CF;&#x8FF0;</th>
  </tr>
  <tr>
   <td><code>arity</code></td>
   <td>&#x5F62;&#x53C2;&#x7684;&#x6570;&#x91CF;</td>
  </tr>
 </tbody>
</table>

<p>&#xA0;</p>
                  
                
              