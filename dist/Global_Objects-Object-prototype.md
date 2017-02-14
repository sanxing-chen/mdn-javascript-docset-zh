
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p><code><strong>Object.prototype</strong></code> &#x5C5E;&#x6027;&#x8868;&#x793A;&#x5BF9;&#x8C61; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object &#x6784;&#x9020;&#x51FD;&#x6570;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5305;&#x88C5;&#xFF08;object wrapper&#xFF09;&#x3002;"><code>Object</code></a> &#x7684;&#x539F;&#x578B;&#x5BF9;&#x8C61;&#x3002;</p>

<p></p><table class="standard-table">
  <thead>
    <tr>
      <th class="header" colspan="2"><code>Object.prototype</code> &#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x7279;&#x6027;&#xFF1A;</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>writable</td>
      <td>false</td>
    </tr>
    <tr>
      <td>enumerable</td>
      <td>false</td>
    </tr>
    <tr>
      <td>configurable</td>
      <td>false</td>
    </tr>
  </tbody>
</table><p></p>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x5728;JavaScript&#x4E2D;&#xFF0C;&#x6240;&#x6709;&#x7684;&#x5BF9;&#x8C61;&#x90FD;&#x662F;&#x57FA;&#x4E8E; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object &#x6784;&#x9020;&#x51FD;&#x6570;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5305;&#x88C5;&#xFF08;object wrapper&#xFF09;&#x3002;"><code>Object</code></a>&#xFF1B;&#x6240;&#x6709;&#x7684;&#x5BF9;&#x8C61;&#x90FD;&#x7EE7;&#x627F;&#x4E86;<code>Object.prototype&#x7684;&#x5C5E;&#x6027;&#x548C;&#x65B9;&#x6CD5;&#xFF0C;</code>&#x5B83;&#x4EEC;&#x53EF;&#x4EE5;&#x88AB;&#x8986;&#x76D6;&#xFF08;&#x9664;&#x4E86;&#x4EE5;null&#x4E3A;&#x539F;&#x578B;&#x7684;&#x5BF9;&#x8C61;&#xFF0C;&#x5982;&#xA0;<code>Object.create(null)&#xFF09;&#x3002;</code>&#x4F8B;&#x5982;&#xFF0C;&#x65B0;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x539F;&#x578B;&#x8986;&#x76D6;&#x539F;&#x6765;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x539F;&#x578B;&#xFF0C;&#x63D0;&#x4F9B;&#x5B83;&#x4EEC;&#x81EA;&#x5DF1;&#x7684;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString" title="toString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x8868;&#x793A;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;"><code>toString()</code></a> &#x65B9;&#x6CD5;.&#x3002;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;&#x7684;&#x6539;&#x53D8;&#x4F1A;&#x4F20;&#x64AD;&#x5230;&#x6240;&#x6709;&#x5BF9;&#x8C61;&#x4E0A;&#xFF0C;&#x9664;&#x975E;&#x8FD9;&#x4E9B;&#x5C5E;&#x6027;&#x548C;&#x65B9;&#x6CD5;&#x88AB;&#x5176;&#x4ED6;&#x5BF9;&#x539F;&#x578B;&#x94FE;&#x66F4;&#x91CC;&#x5C42;&#x7684;&#x6539;&#x52A8;&#x6240;&#x8986;&#x76D6;&#x3002;</p>

<h2 name="Properties" id="Properties">&#x5C5E;&#x6027;</h2>

<dl>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor" title="&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5411;&#x521B;&#x5EFA;&#x4E86;&#x8BE5;&#x5BF9;&#x8C61;&#x539F;&#x578B;&#x7684;&#x51FD;&#x6570;&#x5F15;&#x7528;&#x3002;&#x9700;&#x8981;&#x6CE8;&#x610F;&#x7684;&#x662F;&#xFF0C;&#x8BE5;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x662F;&#x90A3;&#x4E2A;&#x51FD;&#x6570;&#x672C;&#x8EAB;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x51FD;&#x6570;&#x540D;&#x79F0;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x5BF9;&#x4E8E;&#x539F;&#x59CB;&#x503C;&#xFF08;&#x5982;1&#xFF0C;true &#x6216; &quot;test&quot;&#xFF09;&#xFF0C;&#x8BE5;&#x5C5E;&#x6027;&#x4E3A;&#x53EA;&#x8BFB;&#x3002;"><code>Object.prototype.constructor</code></a></dt>
 <dd>&#x7279;&#x5B9A;&#x7684;&#x51FD;&#x6570;&#xFF0C;&#x7528;&#x4E8E;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__proto__" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Object.prototype.__proto__</code></a> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></dt>
 <dd>&#x6307;&#x5411;&#x5F53;&#x5BF9;&#x8C61;&#x88AB;&#x5B9E;&#x4F8B;&#x5316;&#x7684;&#x65F6;&#x5019;&#xFF0C;&#x7528;&#x4F5C;&#x539F;&#x578B;&#x7684;&#x5BF9;&#x8C61;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__noSuchMethod__" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Object.prototype.__noSuchMethod__</code></a> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></dt>
 <dd>&#x5F53;&#x672A;&#x5B9A;&#x4E49;&#x7684;&#x5BF9;&#x8C61;&#x6210;&#x5458;&#x88AB;&#x8C03;&#x7528;&#x4F5C;&#x65B9;&#x6CD5;&#x7684;&#x65F6;&#x5019;&#xFF0C;&#x5141;&#x8BB8;&#x5B9A;&#x4E49;&#x5E76;&#x6267;&#x884C;&#x7684;&#x51FD;&#x6570;&#x3002;</dd>
 <dt><s class="obsoleteElement"><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__count__" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Object.prototype.__count__</code></a> <span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span></s></dt>
 <dd><s class="obsoleteElement">&#x7528;&#x4E8E;&#x76F4;&#x63A5;&#x8FD4;&#x56DE;&#x7528;&#x6237;&#x5B9A;&#x4E49;&#x7684;&#x5BF9;&#x8C61;&#x4E2D;&#x53EF;&#x6570;&#x7684;&#x5C5E;&#x6027;&#x7684;&#x6570;&#x91CF;&#x3002;&#x5DF2;&#x88AB;&#x5E9F;&#x9664;&#x3002;</s></dd>
 <dt><s class="obsoleteElement"><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__parent__" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Object.prototype.__parent__</code></a> <span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span></s></dt>
 <dd><s class="obsoleteElement">&#x7528;&#x4E8E;&#x6307;&#x5411;&#x5BF9;&#x8C61;&#x7684;&#x5185;&#x5BB9;&#x3002;&#x5DF2;&#x88AB;&#x5E9F;&#x9664;&#x3002;</s></dd>
</dl>

<h2 name="Methods" id="Methods">&#x65B9;&#x6CD5;</h2>

<dl>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__" title="__defineGetter__ &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x5C06;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x7ED1;&#x5B9A;&#x5728;&#x5F53;&#x524D;&#x5BF9;&#x8C61;&#x7684;&#x6307;&#x5B9A;&#x5C5E;&#x6027;&#x4E0A;&#xFF0C;&#x5F53;&#x90A3;&#x4E2A;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x88AB;&#x8BFB;&#x53D6;&#x65F6;&#xFF0C;&#x4F60;&#x6240;&#x7ED1;&#x5B9A;&#x7684;&#x51FD;&#x6570;&#x5C31;&#x4F1A;&#x88AB;&#x8C03;&#x7528;&#x3002;"><code>Object.prototype.__defineGetter__()</code></a> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> <span title="This deprecated API should no longer be used, but will probably still work."><i class="icon-thumbs-down-alt"> </i></span></dt>
 <dd>&#x5173;&#x8054;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x5230;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&#x3002;&#x8BBF;&#x95EE;&#x8BE5;&#x51FD;&#x6570;&#x65F6;&#xFF0C;&#x6267;&#x884C;&#x8BE5;&#x51FD;&#x6570;&#x5E76;&#x8FD4;&#x56DE;&#x5176;&#x8FD4;&#x56DE;&#x503C;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__" title="__defineSetter__ &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x5C06;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x7ED1;&#x5B9A;&#x5728;&#x5F53;&#x524D;&#x5BF9;&#x8C61;&#x7684;&#x6307;&#x5B9A;&#x5C5E;&#x6027;&#x4E0A;&#xFF0C;&#x5F53;&#x90A3;&#x4E2A;&#x5C5E;&#x6027;&#x88AB;&#x8D4B;&#x503C;&#x65F6;&#xFF0C;&#x4F60;&#x6240;&#x7ED1;&#x5B9A;&#x7684;&#x51FD;&#x6570;&#x5C31;&#x4F1A;&#x88AB;&#x8C03;&#x7528;&#x3002;"><code>Object.prototype.__defineSetter__()</code></a> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> <span title="This deprecated API should no longer be used, but will probably still work."><i class="icon-thumbs-down-alt"> </i></span></dt>
 <dd>&#x5173;&#x8054;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x5230;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&#x3002;&#x8BBE;&#x7F6E;&#x8BE5;&#x51FD;&#x6570;&#x65F6;&#xFF0C;&#x6267;&#x884C;&#x8BE5;&#x4FEE;&#x6539;&#x5C5E;&#x6027;&#x7684;&#x51FD;&#x6570;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__" title="__lookupGetter__ &#x65B9;&#x6CD5;&#x4F1A;&#x8FD4;&#x56DE;&#x5F53;&#x524D;&#x5BF9;&#x8C61;&#x4E0A;&#x6307;&#x5B9A;&#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x8BFB;&#x53D6;&#x8BBF;&#x95EE;&#x5668;&#x51FD;&#x6570;&#xFF08;getter&#xFF09;&#x3002;"><code>Object.prototype.__lookupGetter__()</code></a> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> <span title="This deprecated API should no longer be used, but will probably still work."><i class="icon-thumbs-down-alt"> </i></span></dt>
 <dd>&#x8FD4;&#x56DE;&#x4F7F;&#x7528; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineGetter" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>__defineGetter__</code></a> &#x5B9A;&#x4E49;&#x7684;&#x65B9;&#x6CD5;&#x51FD;&#x6570; &#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__" title="&#x4E00;&#x4E2A;&#x7ED1;&#x5B9A;&#x4E86;setter&#x7684;&#x7279;&#x6B8A;&#x5C5E;&#x6027;&#x7684;&#x51FD;&#x6570;&#x5F15;&#x7528;&#x3002;"><code>Object.prototype.__lookupSetter__()</code></a> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> <span title="This deprecated API should no longer be used, but will probably still work."><i class="icon-thumbs-down-alt"> </i></span></dt>
 <dd>&#x8FD4;&#x56DE;&#x4F7F;&#x7528; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineSetter" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>__defineSetter__</code></a> &#x5B9A;&#x4E49;&#x7684;&#x65B9;&#x6CD5;&#x51FD;&#x6570;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty" title="hasOwnProperty() &#x65B9;&#x6CD5;&#x4F1A;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5E03;&#x5C14;&#x503C;&#xFF0C;&#x5176;&#x7528;&#x6765;&#x5224;&#x65AD;&#x67D0;&#x4E2A;&#x5BF9;&#x8C61;&#x662F;&#x5426;&#x542B;&#x6709;&#x6307;&#x5B9A;&#x7684;&#x5C5E;&#x6027;&#x3002;"><code>Object.prototype.hasOwnProperty()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5E03;&#x5C14;&#x503C; &#xFF0C;&#x8868;&#x793A;&#x67D0;&#x4E2A;&#x5BF9;&#x8C61;&#x662F;&#x5426;&#x542B;&#x6709;&#x6307;&#x5B9A;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x800C;&#x4E14;&#x6B64;&#x5C5E;&#x6027;&#x975E;&#x539F;&#x578B;&#x94FE;&#x7EE7;&#x627F;&#x7684;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf" title="isPrototypeOf() &#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x6D4B;&#x8BD5;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x662F;&#x5426;&#x5B58;&#x5728;&#x4E8E;&#x53E6;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x3002;"><code>Object.prototype.isPrototypeOf()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5E03;&#x5C14;&#x503C;&#xFF0C;&#x8868;&#x793A;&#x6307;&#x5B9A;&#x7684;&#x5BF9;&#x8C61;&#x662F;&#x5426;&#x5728;&#x672C;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;&#x94FE;&#x4E2D;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable" title="propertyIsEnumerable() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5E03;&#x5C14;&#x503C;&#xFF0C;&#x8868;&#x660E;&#x6307;&#x5B9A;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x662F;&#x5426;&#x662F;&#x5F53;&#x524D;&#x5BF9;&#x8C61;&#x53EF;&#x679A;&#x4E3E;&#x7684;&#x81EA;&#x8EAB;&#x5C5E;&#x6027;&#x3002;"><code>Object.prototype.propertyIsEnumerable()</code></a></dt>
 <dd>&#x5224;&#x65AD;&#x6307;&#x5B9A;&#x5C5E;&#x6027;&#x662F;&#x5426;&#x53EF;&#x679A;&#x4E3E;&#xFF0C;&#x5185;&#x90E8;&#x5C5E;&#x6027;&#x8BBE;&#x7F6E;&#x53C2;&#x89C1; <a href="/zh-CN/docs/ECMAScript_DontEnum_attribute" class="new" title="ECMAScript_DontEnum_attribute">ECMAScript DontEnum attribute</a> &#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource" title="&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x6E90;&#x4EE3;&#x7801;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;."><code>Object.prototype.toSource()</code></a> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></dt>
 <dd>&#x8FD4;&#x56DE;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x6B64;&#x5BF9;&#x8C61;&#x7684;&#x6E90;&#x4EE3;&#x7801;&#x5F62;&#x5F0F;&#xFF0C;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x6B64;&#x5B57;&#x7B26;&#x4E32;&#x751F;&#x6210;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x76F8;&#x540C;&#x7684;&#x5BF9;&#x8C61;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString" title="toLocaleString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x3002;&#x8BE5;&#x65B9;&#x6CD5;&#x4E3B;&#x8981;&#x7528;&#x4E8E;&#x88AB;&#x672C;&#x5730;&#x5316;&#x76F8;&#x5173;&#x5BF9;&#x8C61;&#x8986;&#x76D6;&#x3002;"><code>Object.prototype.toLocaleString()</code></a></dt>
 <dd>&#x76F4;&#x63A5;&#x8C03;&#x7528; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString" title="toString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x8868;&#x793A;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;"><code>toString()</code></a>&#x65B9;&#x6CD5;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString" title="toString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x8868;&#x793A;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;"><code>Object.prototype.toString()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/unwatch" title="unwatch() &#x5220;&#x9664;&#x4E00;&#x4E2A;&#xA0;watch() &#x8BBE;&#x7F6E;&#x7684;&#xA0;watchpoint."><code>Object.prototype.unwatch()</code></a> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></dt>
 <dd>&#x79FB;&#x9664;&#x5BF9;&#x8C61;&#x67D0;&#x4E2A;&#x5C5E;&#x6027;&#x7684;&#x76D1;&#x542C;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf" title="valueOf()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x59CB;&#x503C;&#x3002;"><code>Object.prototype.valueOf()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x59CB;&#x503C;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/watch" title="&#x76D1;&#x89C6;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x67D0;&#x4E2A;&#x5C5E;&#x6027;&#x662F;&#x5426;&#x88AB;&#x8D4B;&#x503C;,&#x5728;&#x8BE5;&#x5C5E;&#x6027;&#x8D4B;&#x503C;&#x65F6;&#x89E6;&#x53D1;&#x6307;&#x5B9A;&#x7684;&#x56DE;&#x8C03;&#x51FD;&#x6570;."><code>Object.prototype.watch()</code></a> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></dt>
 <dd>&#x7ED9;&#x5BF9;&#x8C61;&#x7684;&#x67D0;&#x4E2A;&#x5C5E;&#x6027;&#x589E;&#x52A0;&#x76D1;&#x542C;&#x3002;</dd>
 <dt><s class="obsoleteElement"><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/eval" title="Object.eval()&#xA0;&#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x5728;&#x5BF9;&#x8C61;&#x7684;&#x4E0A;&#x4E0B;&#x6587;&#x4E2D;&#x5BF9; JavaScript &#x4EE3;&#x7801;&#x5B57;&#x7B26;&#x4E32;&#x6C42;&#x503C;&#xFF0C;&#x4F46;&#x8BE5;&#x65B9;&#x6CD5;&#x5DF2;&#x88AB;&#x79FB;&#x9664;&#x3002;"><code>Object.prototype.eval()</code></a> <span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span></s></dt>
 <dd><s class="obsoleteElement">&#x5728;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x4E3A;&#x4E0A;&#x4E0B;&#x6587;&#x60C5;&#x51B5;&#x4E0B;&#x6267;&#x884C;javascript&#x5B57;&#x7B26;&#x4E32;&#x4EE3;&#x7801;&#xFF0C;&#x5DF2;&#x7ECF;&#x5E9F;&#x5F03;&#x3002;</s></dd>
</dl>

<h2 name="Examples" id="Examples">&#x4F8B;&#x5B50;</h2>

<p>&#x7531;&#x4E8E;JavaScript&#x6CA1;&#x6709;&#x5B50;&#x7C7B;&#x5BF9;&#x8C61;&#xFF0C;&#x539F;&#x578B;&#x662F;&#x4E00;&#x79CD;&#x5E38;&#x7528;&#x7684;&#x65B9;&#x6CD5;&#xFF0C;&#x7528;&#x4E8E;&#x4E3A;&#x67D0;&#x4E9B;&#x8868;&#x73B0;&#x4E3A;&#x5BF9;&#x8C61;&#x7684;&#x51FD;&#x6570;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x201C;&#x57FA;&#x7C7B;&#x201D;&#x5BF9;&#x8C61;&#x3002;&#x4F8B;&#x5982;&#xFF1A;</p>

<pre class="brush: js">var Person = function() {
  this.canTalk = true;
  this.greet = function() {
    if (this.canTalk) {
      console.log(&apos;Hi, I\&apos;m &apos; + this.name);
    }
  };
};

var Employee = function(name, title) {
  this.name = name;
  this.title = title;
  this.greet = function() {
    if (this.canTalk) {
      console.log(&quot;Hi, I&apos;m &quot; + this.name + &quot;, the &quot; + this.title);
    }
  };
};
Employee.prototype = new Person();

var Customer = function(name) {
  this.name = name;
};
Customer.prototype = new Person();

var Mime = function(name) {
  this.name = name;
  this.canTalk = false;
};
Mime.prototype = new Person();

var bob = new Employee(&apos;Bob&apos;, &apos;Builder&apos;);
var joe = new Customer(&apos;Joe&apos;);
var rg = new Employee(&apos;Red Green&apos;, &apos;Handyman&apos;);
var mike = new Customer(&apos;Mike&apos;);
var mime = new Mime(&apos;Mime&apos;);
bob.greet();
joe.greet();
rg.greet();
mike.greet();
mime.greet();
</pre>

<p>&#x8F93;&#x51FA;&#xFF1A;</p>

<pre>Hi, I&apos;m Bob, the Builder
Hi, I&apos;m Joe
Hi, I&apos;m Red Green, the Handyman
Hi, I&apos;m Mike
</pre>

<h2 name="Specifications" id="Specifications">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x63CF;&#x8FF0;</th>
   <th scope="col">&#x5907;&#x6CE8;</th>
  </tr>
  <tr>
   <td>ECMAScript &#x7B2C;&#x4E00;&#x7248;&#xFF0C;&#x5728;JavaScript 1.0.&#x5DF2;&#x5B9E;&#x73B0;</td>
   <td>&#x6807;&#x51C6;</td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.2.3.1" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Object.prototype</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-object.prototype" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Object.prototype</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 name="Browser_compatibility" id="Browser_compatibility">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
   <td>&#x57FA;&#x672C;&#x652F;&#x6301;</td>
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
   <th>Feature</th>
   <th>Android</th>
   <th>Chrome for Android</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>&#x57FA;&#x672C;&#x652F;&#x6301;</td>
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
                  
                
              