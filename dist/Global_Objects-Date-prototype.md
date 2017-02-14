
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p><strong><code>Date.prototype</code></strong> &#x5C5E;&#x6027;&#x8868;&#x793A; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date" title="&#x521B;&#x5EFA;&#xA0;Date &#x5B9E;&#x4F8B;&#x7528;&#x6765;&#x5904;&#x7406;&#x65E5;&#x671F;&#x548C;&#x65F6;&#x95F4;&#x3002;Date &#x5BF9;&#x8C61;&#x57FA;&#x4E8E;1970&#x5E74;1&#x6708;1&#x65E5;&#xFF08;&#x4E16;&#x754C;&#x6807;&#x51C6;&#x65F6;&#x95F4;&#xFF09;&#x8D77;&#x7684;&#x6BEB;&#x79D2;&#x6570;&#x3002;"><code>Date</code></a> &#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x539F;&#x578B;&#x3002;</p>

<div><table class="standard-table"> 
  <thead> 
    <tr> 
      <th class="header" colspan="2"><code>Date.prototype</code> &#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x7279;&#x6027;&#xFF1A;</th> 
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
      <td>true</td> 
    </tr> 
  </tbody> 
</table></div>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date" title="&#x521B;&#x5EFA;&#xA0;Date &#x5B9E;&#x4F8B;&#x7528;&#x6765;&#x5904;&#x7406;&#x65E5;&#x671F;&#x548C;&#x65F6;&#x95F4;&#x3002;Date &#x5BF9;&#x8C61;&#x57FA;&#x4E8E;1970&#x5E74;1&#x6708;1&#x65E5;&#xFF08;&#x4E16;&#x754C;&#x6807;&#x51C6;&#x65F6;&#x95F4;&#xFF09;&#x8D77;&#x7684;&#x6BEB;&#x79D2;&#x6570;&#x3002;"><code>Date</code></a> &#x5B9E;&#x4F8B;&#x7EE7;&#x627F;&#x81EA;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/prototype" title="Date.prototype &#x5C5E;&#x6027;&#x8868;&#x793A; Date &#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x539F;&#x578B;&#x3002;"><code>Date.prototype</code></a>&#x3002; &#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x4FEE;&#x6539;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x539F;&#x578B;&#x5BF9;&#x8C61;&#x6765;&#x5F71;&#x54CD; Date &#x5B9E;&#x4F8B;&#x7EE7;&#x627F;&#x7684;&#x5C5E;&#x6027;&#x548C;&#x65B9;&#x6CD5;&#x3002;</p>

<p>&#x4E3A;&#x4E86;&#x517C;&#x5BB9;&#x5343;&#x79A7;&#x5E74;&#x8BA1;&#x7B97;&#xFF08;&#x4E5F;&#x5373;&#x8003;&#x8651;&#x5230; 2000 &#x5E74;&#xFF09;&#xFF0C;&#x5E94;&#x8BE5;&#x603B;&#x662F;&#x6307;&#x5B9A;&#x5B8C;&#x6574;&#x7684;&#x5E74;&#x4EFD;&#xFF0C;&#x4F8B;&#x5982;&#xFF0C;&#x4F7F;&#x7528; 1998&#xFF0C;&#x800C;&#x4E0D;&#x662F; 98&#x3002;&#x4E3A;&#x4E86;&#x65B9;&#x4FBF;&#x4EE5;&#x5B8C;&#x6574;&#x7684;&#x683C;&#x5F0F;&#x6307;&#x5B9A;&#x5E74;&#x4EFD;&#xFF0C; JavaScript &#x5305;&#x542B;&#x4E86;&#x76F8;&#x5E94;&#x7684;&#x65B9;&#x6CD5;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear" title="&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x5E74;&#x4EFD;&#x3002;"><code>getFullYear()</code></a>&#xFF0C;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear" title="setFullYear() &#x65B9;&#x6CD5;&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x4E3A;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x8BBE;&#x7F6E;&#x5E74;&#x4EFD;&#x3002;"><code>setFullYear()</code></a>&#xFF0C; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear" title="getUTCFullYear() &#x4EE5;&#x4E16;&#x754C;&#x65F6;&#x4E3A;&#x6807;&#x51C6;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x5E74;&#x4EFD;&#x3002;"><code>getUTCFullYear()</code></a> &#x548C;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear" title="setUTCFullYear() &#x65B9;&#x6CD5;&#x6839;&#x636E;&#x4E16;&#x754C;&#x6807;&#x51C6;&#x65F6;&#x95F4;&#x4E3A;&#x4E00;&#x4E2A;&#x5177;&#x4F53;&#x65E5;&#x671F;&#x8BBE;&#x7F6E;&#x5E74;&#x4EFD;&#x3002;"><code>setUTCFullYear()</code></a>&#x3002;</p>

<h2 name="Properties" id="Properties">&#x5C5E;&#x6027;</h2>

<dl>
 <dt>Date.prototype.constructor</dt>
 <dd>&#x8FD4;&#x56DE;&#x521B;&#x5EFA;&#x8BE5;&#x5B9E;&#x4F8B;&#x7684;&#x51FD;&#x6570;&#x3002;&#x9ED8;&#x8BA4;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x662F; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date" title="&#x521B;&#x5EFA;&#xA0;Date &#x5B9E;&#x4F8B;&#x7528;&#x6765;&#x5904;&#x7406;&#x65E5;&#x671F;&#x548C;&#x65F6;&#x95F4;&#x3002;Date &#x5BF9;&#x8C61;&#x57FA;&#x4E8E;1970&#x5E74;1&#x6708;1&#x65E5;&#xFF08;&#x4E16;&#x754C;&#x6807;&#x51C6;&#x65F6;&#x95F4;&#xFF09;&#x8D77;&#x7684;&#x6BEB;&#x79D2;&#x6570;&#x3002;"><code>Date</code></a> <code>Date</code> &#x6784;&#x9020;&#x51FD;&#x6570;&#x3002;</dd>
</dl>

<div><div class="inheritsbox template-jsOverrides" style="border: 5px solid #D1D1FF; background: #f5f5ff; padding: 2px 10px; margin: 25px 0; overflow: hidden;">  
<div><span style="font-weight: 700;">Properties inherited from <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object"><code>Object</code></a>:</span></div> 
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Parent" class="internal"><code>__parent__</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Proto" class="internal"><code>__proto__</code></a></div> 
</div></div>

<h2 name="Methods" id="Methods">&#x65B9;&#x6CD5;</h2>

<h3 id="Getter">Getter</h3>

<dl>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate" title="&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x4E3A;&#x4E00;&#x4E2A;&#x6708;&#x4E2D;&#x7684;&#x7B2C;&#x51E0;&#x5929;&#x3002;"><code>Date.prototype.getDate()</code></a></dt>
 <dd>&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x6708;&#x4EFD;&#x4E2D;&#x7684;&#x7B2C;&#x51E0;&#x5929;&#xFF08;1-31&#xFF09;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay" title="getDay() &#x65B9;&#x6CD5;&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5177;&#x4F53;&#x65E5;&#x671F;&#x4E2D;&#x4E00;&#x5468;&#x7684;&#x7B2C;&#x51E0;&#x5929;&#xFF0C;0 &#x8868;&#x793A;&#x661F;&#x671F;&#x5929;&#x3002;"><code>Date.prototype.getDay()</code></a></dt>
 <dd>&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x661F;&#x671F;&#x4E2D;&#x7684;&#x7B2C;&#x51E0;&#x5929;&#xFF08;0-6&#xFF09;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear" title="&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x5E74;&#x4EFD;&#x3002;"><code>Date.prototype.getFullYear()</code></a></dt>
 <dd>&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x5E74;&#x4EFD;&#xFF08;&#x56DB;&#x4F4D;&#x6570;&#x5E74;&#x4EFD;&#x65F6;&#x8FD4;&#x56DE;&#x56DB;&#x4F4D;&#x6570;&#x5B57;&#xFF09;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours" title="getHours() &#x65B9;&#x6CD5;&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x5C0F;&#x65F6;&#x3002;"><code>Date.prototype.getHours()</code></a></dt>
 <dd>&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x5C0F;&#x65F6;&#xFF08;0-23&#xFF09;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds" title="getMilliseconds() &#x65B9;&#x6CD5;&#xFF0C;&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x6BEB;&#x79D2;&#x6570;&#x3002;"><code>Date.prototype.getMilliseconds()</code></a></dt>
 <dd>&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x5FAE;&#x79D2;&#xFF08;0-999&#xFF09;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes" title="getMinutes() &#x65B9;&#x6CD5;&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x5206;&#x949F;&#x6570;&#x3002;"><code>Date.prototype.getMinutes()</code></a></dt>
 <dd>&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x5206;&#x949F;&#xFF08;0-59&#xFF09;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth" title="&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x6708;&#x4EFD;&#xFF0C;&#x4E3A;&#x57FA;&#x4E8E;0&#x7684;&#x503C;&#xFF08;0&#x8868;&#x793A;&#x4E00;&#x5E74;&#x4E2D;&#x7684;&#x7B2C;&#x4E00;&#x6708;&#xFF09;&#x3002;"><code>Date.prototype.getMonth()</code></a></dt>
 <dd>&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x6708;&#x4EFD;&#xFF08;0-11&#xFF09;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds" title="getSeconds() &#x65B9;&#x6CD5;&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x79D2;&#x6570;&#x3002;"><code>Date.prototype.getSeconds()</code></a></dt>
 <dd>&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x79D2;&#x6570;&#xFF08;0-59&#xFF09;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime" title="getTime() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65F6;&#x95F4;&#x7684;&#x683C;&#x6797;&#x5A01;&#x6CBB;&#x65F6;&#x95F4;&#x6570;&#x503C;&#x3002;"><code>Date.prototype.getTime()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4ECE;1970-1-1 00:00:00 UTC&#xFF08;&#x534F;&#x8C03;&#x4E16;&#x754C;&#x65F6;&#xFF09;&#x5230;&#x8BE5;&#x65E5;&#x671F;&#x7ECF;&#x8FC7;&#x7684;&#x6BEB;&#x79D2;&#x6570;&#xFF0C;&#x5BF9;&#x4E8E;1970-1-1 00:00:00 UTC&#x4E4B;&#x524D;&#x7684;&#x65F6;&#x95F4;&#x8FD4;&#x56DE;&#x8D1F;&#x503C;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset" title="getTimezoneOffset() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x534F;&#x8C03;&#x4E16;&#x754C;&#x65F6;&#xFF08;UTC&#xFF09;&#x76F8;&#x5BF9;&#x4E8E;&#x5F53;&#x524D;&#x65F6;&#x533A;&#x7684;&#x65F6;&#x95F4;&#x5DEE;&#x503C;&#xFF0C;&#x5355;&#x4F4D;&#x4E3A;&#x5206;&#x949F;&#x3002;"><code>Date.prototype.getTimezoneOffset()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x5F53;&#x524D;&#x65F6;&#x533A;&#x7684;&#x65F6;&#x533A;&#x504F;&#x79FB;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDate" title="getUTCDate() &#x65B9;&#x6CD5;&#x4EE5;&#x4E16;&#x754C;&#x65F6;&#x4E3A;&#x6807;&#x51C6;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x4E3A;&#x4E00;&#x4E2A;&#x6708;&#x4E2D;&#x7684;&#x7B2C;&#x51E0;&#x5929;"><code>Date.prototype.getUTCDate()</code></a></dt>
 <dd>Returns the day (date) of the month (1-31) in the specified date according to universal time.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay" title="getUTCDay() &#x65B9;&#x6CD5;&#x4EE5;&#x4E16;&#x754C;&#x65F6;&#x4E3A;&#x6807;&#x51C6;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x4E3A;&#x4E00;&#x661F;&#x671F;&#x4E2D;&#x7684;&#x7B2C;&#x51E0;&#x5929;&#xFF0C;&#x5176;&#x4E2D; 0 &#x4EE3;&#x8868;&#x661F;&#x671F;&#x5929;&#x3002;"><code>Date.prototype.getUTCDay()</code></a></dt>
 <dd>Returns the day of the week (0-6) in the specified date according to universal time.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear" title="getUTCFullYear() &#x4EE5;&#x4E16;&#x754C;&#x65F6;&#x4E3A;&#x6807;&#x51C6;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x5E74;&#x4EFD;&#x3002;"><code>Date.prototype.getUTCFullYear()</code></a></dt>
 <dd>Returns the year (4 digits for 4-digit years) in the specified date according to universal time.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCHours" title="getUTCHours() &#x65B9;&#x6CD5;&#x4EE5;&#x4E16;&#x754C;&#x65F6;&#x4E3A;&#x6807;&#x51C6;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x5C0F;&#x65F6;&#x6570;&#x3002;"><code>Date.prototype.getUTCHours()</code></a></dt>
 <dd>Returns the hours (0-23) in the specified date according to universal time.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds" title="getUTCMilliseconds() &#x65B9;&#x6CD5;&#x4EE5;&#x4E16;&#x754C;&#x65F6;&#x4E3A;&#x6807;&#x51C6;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x6BEB;&#x79D2;&#x6570;&#x3002;"><code>Date.prototype.getUTCMilliseconds()</code></a></dt>
 <dd>Returns the milliseconds (0-999) in the specified date according to universal time.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes" title="getUTCMinutes() &#x65B9;&#x6CD5;&#x4EE5;&#x4E16;&#x754C;&#x65F6;&#x4E3A;&#x6807;&#x51C6;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x5206;&#x949F;&#x6570;&#x3002;"><code>Date.prototype.getUTCMinutes()</code></a></dt>
 <dd>Returns the minutes (0-59) in the specified date according to universal time.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth" title="getUTCMonth() &#x65B9;&#x6CD5;&#x4EE5;&#x4E16;&#x754C;&#x65F6;&#x4E3A;&#x6807;&#x51C6;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x6708;&#x4EFD;&#xFF0C;&#x5B83;&#x662F;&#x4ECE; 0 &#x5F00;&#x59CB;&#x8BA1;&#x6570;&#x7684;&#xFF08;0 &#x4EE3;&#x8868;&#x4E00;&#x5E74;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x6708;&#xFF09;&#x3002;"><code>Date.prototype.getUTCMonth()</code></a></dt>
 <dd>Returns the month (0-11) in the specified date according to universal time.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds" title="getUTCSeconds() &#x65B9;&#x6CD5;&#x4EE5;&#x4E16;&#x754C;&#x65F6;&#x4E3A;&#x6807;&#x51C6;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x79D2;&#x6570;&#x3002;"><code>Date.prototype.getUTCSeconds()</code></a></dt>
 <dd>Returns the seconds (0-59) in the specified date according to universal time.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getYear" title="The getYear() method returns the year in the specified date according to local time. Because getYear does not return full years (&quot;year 2000 problem&quot;), it is no longer used and has been replaced by the getFullYear method."><code>Date.prototype.getYear()</code></a> <span title="This deprecated API should no longer be used, but will probably still work."><i class="icon-thumbs-down-alt"> </i></span></dt>
 <dd>Returns the year (usually 2-3 digits) in the specified date according to local time. Use <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear" title="&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x5E74;&#x4EFD;&#x3002;"><code>getFullYear()</code></a> instead.</dd>
</dl>

<h3 id="Setter">Setter</h3>

<dl>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate" title="setDate() &#x65B9;&#x6CD5;&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x6765;&#x6307;&#x5B9A;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x5929;&#x6570;&#x3002;"><code>Date.prototype.setDate()</code></a></dt>
 <dd>&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x4E3A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x8BBE;&#x7F6E;&#x6708;&#x4EFD;&#x4E2D;&#x7684;&#x7B2C;&#x51E0;&#x5929;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear" title="setFullYear() &#x65B9;&#x6CD5;&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x4E3A;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x8BBE;&#x7F6E;&#x5E74;&#x4EFD;&#x3002;"><code>Date.prototype.setFullYear()</code></a></dt>
 <dd>&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x4E3A;&#x6307;&#x5B9A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x8BBE;&#x7F6E;&#x5B8C;&#x6574;&#x5E74;&#x4EFD;&#xFF08;&#x56DB;&#x4F4D;&#x6570;&#x5E74;&#x4EFD;&#x662F;&#x56DB;&#x4E2A;&#x6570;&#x5B57;&#xFF09;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours" title="setHours()&#xA0;&#x65B9;&#x6CD5;&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x4E3A;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x8BBE;&#x7F6E;&#x5C0F;&#x65F6;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x4ECE;1970-01-01 00:00:00 UTC &#x5230;&#x66F4;&#x65B0;&#x540E;&#x7684; &#x65E5;&#x671F; &#x5BF9;&#x8C61;&#x5B9E;&#x4F8B;&#x6240;&#x8868;&#x793A;&#x65F6;&#x95F4;&#x7684;&#x6BEB;&#x79D2;&#x6570;&#x3002;"><code>Date.prototype.setHours()</code></a></dt>
 <dd>&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x4E3A;&#x6307;&#x5B9A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x8BBE;&#x7F6E;&#x5C0F;&#x65F6;&#x6570;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds" title="setMilliseconds()&#xA0;&#x65B9;&#x6CD5;&#x4F1A;&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x8BBE;&#x7F6E;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x8C6A;&#x79D2;&#x6570;&#x3002;"><code>Date.prototype.setMilliseconds()</code></a></dt>
 <dd>&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x4E3A;&#x6307;&#x5B9A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x8BBE;&#x7F6E;&#x6BEB;&#x79D2;&#x6570;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setMinutes" title="setMinutes() &#x65B9;&#x6CD5;&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x4E3A;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x8BBE;&#x7F6E;&#x5206;&#x949F;&#x6570;&#x3002;"><code>Date.prototype.setMinutes()</code></a></dt>
 <dd>&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x4E3A;&#x6307;&#x5B9A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x8BBE;&#x7F6E;&#x5206;&#x949F;&#x6570;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth" title="setMonth() &#x65B9;&#x6CD5;&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x4E3A;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x8BBE;&#x7F6E;&#x6708;&#x4EFD;&#x3002;"><code>Date.prototype.setMonth()</code></a></dt>
 <dd>&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x4E3A;&#x6307;&#x5B9A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x8BBE;&#x7F6E;&#x6708;&#x4EFD;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds" title="setSeconds() &#x65B9;&#x6CD5;&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x8BBE;&#x7F6E;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x79D2;&#x6570;&#x3002;"><code>Date.prototype.setSeconds()</code></a></dt>
 <dd>&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x4E3A;&#x6307;&#x5B9A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x8BBE;&#x7F6E;&#x79D2;&#x6570;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime" title="setTime() &#x65B9;&#x6CD5;&#x4EE5;&#x4E00;&#x4E2A;&#x8868;&#x793A;&#x4ECE;1970-1-1 00:00:00 UTC&#x8BA1;&#x65F6;&#x7684;&#x6BEB;&#x79D2;&#x6570;&#x4E3A;&#x6765;&#x4E3A;&#xA0;Date &#x5BF9;&#x8C61;&#x8BBE;&#x7F6E;&#x65F6;&#x95F4;&#x3002;"><code>Date.prototype.setTime()</code></a></dt>
 <dd>&#x901A;&#x8FC7;&#x6307;&#x5B9A;&#x4ECE; 1970-1-1 00:00:00 UTC &#x5F00;&#x59CB;&#x7ECF;&#x8FC7;&#x7684;&#x6BEB;&#x79D2;&#x6570;&#x6765;&#x8BBE;&#x7F6E;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x65F6;&#x95F4;&#xFF0C;&#x5BF9;&#x4E8E;&#x65E9;&#x4E8E; 1970-1-1 00:00:00 UTC&#x7684;&#x65F6;&#x95F4;&#x53EF;&#x4F7F;&#x7528;&#x8D1F;&#x503C;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCDate" title="setUTCDate()&#xA0;&#x65B9;&#x6CD5;&#x5C31;&#x662F;&#x6839;&#x636E;&#x5168;&#x7403;&#x65F6;&#x95F4;&#x8BBE;&#x7F6E;&#x7279;&#x5B9A;date&#x5BF9;&#x8C61;&#x7684;&#x65E5;&#x671F;&#x3002;"><code>Date.prototype.setUTCDate()</code></a></dt>
 <dd>&#x6839;&#x636E;&#x4E16;&#x754C;&#x65F6;&#x8BBE;&#x7F6E; Date &#x5BF9;&#x8C61;&#x4E2D;&#x6708;&#x4EFD;&#x7684;&#x4E00;&#x5929; (1 ~ 31)&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear" title="setUTCFullYear() &#x65B9;&#x6CD5;&#x6839;&#x636E;&#x4E16;&#x754C;&#x6807;&#x51C6;&#x65F6;&#x95F4;&#x4E3A;&#x4E00;&#x4E2A;&#x5177;&#x4F53;&#x65E5;&#x671F;&#x8BBE;&#x7F6E;&#x5E74;&#x4EFD;&#x3002;"><code>Date.prototype.setUTCFullYear()</code></a></dt>
 <dd>&#x6839;&#x636E;&#x4E16;&#x754C;&#x65F6;&#x8BBE;&#x7F6E; Date &#x5BF9;&#x8C61;&#x4E2D;&#x7684;&#x5E74;&#x4EFD;&#xFF08;&#x56DB;&#x4F4D;&#x6570;&#x5B57;&#xFF09;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCHours" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Date.prototype.setUTCHours()</code></a></dt>
 <dd>&#x6839;&#x636E;&#x4E16;&#x754C;&#x65F6;&#x8BBE;&#x7F6E; Date &#x5BF9;&#x8C61;&#x4E2D;&#x7684;&#x5C0F;&#x65F6; (0 ~ 23)&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Date.prototype.setUTCMilliseconds()</code></a></dt>
 <dd>&#x6839;&#x636E;&#x4E16;&#x754C;&#x65F6;&#x8BBE;&#x7F6E; Date &#x5BF9;&#x8C61;&#x4E2D;&#x7684;&#x6BEB;&#x79D2; (0 ~ 999)&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMinutes" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Date.prototype.setUTCMinutes()</code></a></dt>
 <dd>&#x6839;&#x636E;&#x4E16;&#x754C;&#x65F6;&#x8BBE;&#x7F6E; Date &#x5BF9;&#x8C61;&#x4E2D;&#x7684;&#x5206;&#x949F; (0 ~ 59)&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Date.prototype.setUTCMonth()</code></a></dt>
 <dd>&#x6839;&#x636E;&#x4E16;&#x754C;&#x65F6;&#x8BBE;&#x7F6E; Date &#x5BF9;&#x8C61;&#x4E2D;&#x7684;&#x6708;&#x4EFD; (0 ~ 11)&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds" title="&#x6B64;&#xA0;setUTCSeconds() &#x65B9;&#x6CD5;&#x4E3A;&#x4E00;&#x4E2A;&#x4F9D;&#x636E;&#x56FD;&#x9645;&#x901A;&#x7528;&#x65F6;&#x95F4;&#x7684;&#x7279;&#x5B9A;&#x65E5;&#x671F;&#x8BBE;&#x7F6E;&#x79D2;&#x6570;&#x3002;"><code>Date.prototype.setUTCSeconds()</code></a></dt>
 <dd>&#x6839;&#x636E;&#x4E16;&#x754C;&#x65F6;&#x8BBE;&#x7F6E; Date &#x5BF9;&#x8C61;&#x4E2D;&#x7684;&#x79D2;&#x949F; (0 ~ 59)&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setYear" title="The setYear() method sets the year for a specified date according to local time. Because setYear does not set full years (&quot;year 2000 problem&quot;), it is no longer used and has been replaced by the setFullYear method."><code>Date.prototype.setYear()</code></a> <span title="This deprecated API should no longer be used, but will probably still work."><i class="icon-thumbs-down-alt"> </i></span></dt>
 <dd>setYear() &#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x8BBE;&#x7F6E;&#x5E74;&#x4EFD;&#x3002;&#x8BF7;&#x4F7F;&#x7528;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear" title="setFullYear() &#x65B9;&#x6CD5;&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x4E3A;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x8BBE;&#x7F6E;&#x5E74;&#x4EFD;&#x3002;"><code>setFullYear()</code></a> &#x65B9;&#x6CD5;&#x4EE3;&#x66FF;&#x3002;</dd>
</dl>

<h3 id="Conversion_getter">Conversion getter</h3>

<dl>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString" title="toDateString()&#xA0;&#x65B9;&#x6CD5;&#x4EE5;&#x7F8E;&#x5F0F;&#x82F1;&#x8BED;&#x548C;&#x4EBA;&#x7C7B;&#x6613;&#x8BFB;&#x7684;&#x5F62;&#x5F0F;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x65E5;&#x671F;&#x90E8;&#x5206;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;"><code>Date.prototype.toDateString()</code></a></dt>
 <dd>&#x4EE5;&#x4EBA;&#x7C7B;&#x6613;&#x8BFB;&#xFF08;human-readable&#xFF09;&#x7684;&#x5F62;&#x5F0F;&#x8FD4;&#x56DE;&#x8BE5;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x65E5;&#x671F;&#x90E8;&#x5206;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString" title="toISOString()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A; ISO&#xFF08;ISO 8601 Extended Format&#xFF09;&#x683C;&#x5F0F;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF1A;&#xA0;YYYY-MM-DDTHH:mm:ss.sssZ&#x3002;&#x65F6;&#x533A;&#x603B;&#x662F;UTC&#xFF08;&#x534F;&#x8C03;&#x4E16;&#x754C;&#x65F6;&#xFF09;&#xFF0C;&#x52A0;&#x4E00;&#x4E2A;&#x540E;&#x7F00;&#x201C;Z&#x201D;&#x6807;&#x8BC6;&#x3002;"><code>Date.prototype.toISOString()</code></a></dt>
 <dd>&#x628A;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x8F6C;&#x6362;&#x4E3A;&#x7B26;&#x5408; ISO 8601 &#x6269;&#x5C55;&#x683C;&#x5F0F;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON" title="toJSON() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE; Date &#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x5F62;&#x5F0F;&#x3002;"><code>Date.prototype.toJSON()</code></a></dt>
 <dd>&#x4F7F;&#x7528; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString" title="toISOString()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A; ISO&#xFF08;ISO 8601 Extended Format&#xFF09;&#x683C;&#x5F0F;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF1A;&#xA0;YYYY-MM-DDTHH:mm:ss.sssZ&#x3002;&#x65F6;&#x533A;&#x603B;&#x662F;UTC&#xFF08;&#x534F;&#x8C03;&#x4E16;&#x754C;&#x65F6;&#xFF09;&#xFF0C;&#x52A0;&#x4E00;&#x4E2A;&#x540E;&#x7F00;&#x201C;Z&#x201D;&#x6807;&#x8BC6;&#x3002;"><code>toISOString()</code></a> &#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x8868;&#x793A;&#x8BE5;&#x65E5;&#x671F;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x4E3A;&#x4E86;&#x5728; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify" title="JSON.stringify() &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x5C06;&#x4EFB;&#x610F;&#x7684; JavaScript &#x503C;&#x5E8F;&#x5217;&#x5316;&#x6210; JSON &#x5B57;&#x7B26;&#x4E32;&#x3002;&#x82E5;&#x8F6C;&#x6362;&#x7684;&#x51FD;&#x6570;&#x88AB;&#x6307;&#x5B9A;&#xFF0C;&#x5219;&#x88AB;&#x5E8F;&#x5217;&#x5316;&#x7684;&#x503C;&#x7684;&#x6BCF;&#x4E2A;&#x5C5E;&#x6027;&#x90FD;&#x4F1A;&#x7ECF;&#x8FC7;&#x8BE5;&#x51FD;&#x6570;&#x7684;&#x8F6C;&#x6362;&#x548C;&#x5904;&#x7406;&#xFF1B;&#x82E5;&#x8F6C;&#x6362;&#x7684;&#x6570;&#x7EC4;&#x88AB;&#x6307;&#x5B9A;&#xFF0C;&#x53EA;&#x6709;&#x5305;&#x542B;&#x5728;&#x8FD9;&#x4E2A;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x624D;&#x4F1A;&#x88AB;&#x5E8F;&#x5217;&#x5316;&#x5230;&#x6700;&#x7EC8;&#x7684; JSON &#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x3002;"><code>JSON.stringify()</code></a> &#x65B9;&#x6CD5;&#x4E2D;&#x4F7F;&#x7528;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toGMTString" title="The toGMTString() method converts a date to a string, using Internet GMT conventions. The exact format of the value returned by toGMTString varies according to the platform and browser, in general it should represent a human readable date string."><code>Date.prototype.toGMTString()</code></a> <span title="This deprecated API should no longer be used, but will probably still work."><i class="icon-thumbs-down-alt"> </i></span></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x57FA;&#x4E8E; GMT (UT) &#x65F6;&#x533A;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x6765;&#x8868;&#x793A;&#x8BE5;&#x65E5;&#x671F;&#x3002;&#x8BF7;&#x4F7F;&#x7528; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString" title="toUTCString()&#xA0;&#x65B9;&#x6CD5;&#x628A;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x8F6C;&#x6362;&#x4E3A;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x4F7F;&#x7528;UTC&#x65F6;&#x533A;&#x3002;"><code>toUTCString()</code></a> &#x65B9;&#x6CD5;&#x4EE3;&#x66FF;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString" title="toLocaleDateString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x8BE5;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x65E5;&#x671F;&#x90E8;&#x5206;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x683C;&#x5F0F;&#x56E0;&#x4E0D;&#x540C;&#x8BED;&#x8A00;&#x800C;&#x4E0D;&#x540C;&#x3002;&#x65B0;&#x589E;&#x7684;&#x53C2;&#x6570;&#xA0;locales&#xA0;&#x548C;&#xA0;options &#x4F7F;&#x7A0B;&#x5E8F;&#x80FD;&#x591F;&#x6307;&#x5B9A;&#x4F7F;&#x7528;&#x54EA;&#x79CD;&#x8BED;&#x8A00;&#x683C;&#x5F0F;&#x5316;&#x89C4;&#x5219;&#xFF0C;&#x5141;&#x8BB8;&#x5B9A;&#x5236;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x8868;&#x73B0;&#xFF08;behavior&#xFF09;&#x3002;&#x5728;&#x65E7;&#x7248;&#x672C;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#xFF0C;&#xA0;locales &#x548C; options &#x53C2;&#x6570;&#x88AB;&#x5FFD;&#x7565;&#xFF0C;&#x4F7F;&#x7528;&#x7684;&#x8BED;&#x8A00;&#x73AF;&#x5883;&#x548C;&#x8FD4;&#x56DE;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x683C;&#x5F0F;&#x662F;&#x5404;&#x81EA;&#x72EC;&#x7ACB;&#x5B9E;&#x73B0;&#x7684;&#x3002;"><code>Date.prototype.toLocaleDateString()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x8868;&#x793A;&#x8BE5;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x65E5;&#x671F;&#x90E8;&#x5206;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x683C;&#x5F0F;&#x4E0E;&#x7CFB;&#x7EDF;&#x8BBE;&#x7F6E;&#x7684;&#x5730;&#x533A;&#x5173;&#x8054;&#xFF08;locality sensitive&#xFF09;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleFormat" title="&#x975E;&#x6807;&#x51C6;&#x65B9;&#x6CD5;&#xA0;toLocaleFormat()&#xA0;&#x6309;&#x7279;&#x5B9A;&#x7684;&#x683C;&#x5F0F;&#x5C06;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x8F6C;&#x6362;&#x6210;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#xA0;Intl.DateTimeFormat &#x662F;&#x7B26;&#x5408;&#x6807;&#x51C6;&#x7684;&#x683C;&#x5F0F;&#x5316;&#x65E5;&#x671F;&#x7684;&#x66FF;&#x4EE3;&#x65B9;&#x6CD5;&#x3002;&#x53E6;&#x89C1;&#x66F4;&#x65B0;&#x7684;(newer)&#x7248;&#x672C;&#x7684;&#xA0;Date.prototype.toLocaleDateString()&#x65B9;&#x6CD5;."><code>Date.prototype.toLocaleFormat()</code></a> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></dt>
 <dd>&#x4F7F;&#x7528;&#x683C;&#x5F0F;&#x5B57;&#x7B26;&#x4E32;&#x5C06;&#x65E5;&#x671F;&#x8F6C;&#x6362;&#x4E3A;&#x5B57;&#x7B26;&#x4E32;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString" title="toLocaleString()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x8BE5;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x683C;&#x5F0F;&#x56E0;&#x4E0D;&#x540C;&#x8BED;&#x8A00;&#x800C;&#x4E0D;&#x540C;&#x3002;&#x65B0;&#x589E;&#x7684;&#x53C2;&#x6570;&#xA0;locales&#xA0;&#x548C;&#xA0;options&#xA0;&#x4F7F;&#x7A0B;&#x5E8F;&#x80FD;&#x591F;&#x6307;&#x5B9A;&#x4F7F;&#x7528;&#x54EA;&#x79CD;&#x8BED;&#x8A00;&#x683C;&#x5F0F;&#x5316;&#x89C4;&#x5219;&#xFF0C;&#x5141;&#x8BB8;&#x5B9A;&#x5236;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x8868;&#x73B0;&#xFF08;behavior&#xFF09;&#x3002;&#x5728;&#x65E7;&#x7248;&#x672C;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#xFF0C;&#xA0;locales&#xA0;&#x548C;&#xA0;options&#xA0;&#x53C2;&#x6570;&#x88AB;&#x5FFD;&#x7565;&#xFF0C;&#x4F7F;&#x7528;&#x7684;&#x8BED;&#x8A00;&#x73AF;&#x5883;&#x548C;&#x8FD4;&#x56DE;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x683C;&#x5F0F;&#x662F;&#x5404;&#x81EA;&#x72EC;&#x7ACB;&#x5B9E;&#x73B0;&#x7684;&#x3002;"><code>Date.prototype.toLocaleString()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x8868;&#x793A;&#x8BE5;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x4E0E;&#x7CFB;&#x7EDF;&#x8BBE;&#x7F6E;&#x7684;&#x5730;&#x533A;&#x5173;&#x8054;&#xFF08;locality sensitive&#xFF09;&#x3002;&#x8986;&#x76D6;&#x4E86; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString" title="toLocaleString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x3002;&#x8BE5;&#x65B9;&#x6CD5;&#x4E3B;&#x8981;&#x7528;&#x4E8E;&#x88AB;&#x672C;&#x5730;&#x5316;&#x76F8;&#x5173;&#x5BF9;&#x8C61;&#x8986;&#x76D6;&#x3002;"><code>Object.prototype.toLocaleString()</code></a> &#x65B9;&#x6CD5;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString" title="The toLocaleTimeString()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x8BE5;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x65F6;&#x95F4;&#x90E8;&#x5206;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x683C;&#x5F0F;&#x56E0;&#x4E0D;&#x540C;&#x8BED;&#x8A00;&#x800C;&#x4E0D;&#x540C;&#x3002;&#x65B0;&#x589E;&#x7684;&#x53C2;&#x6570;&#xA0;locales&#xA0;&#x548C;&#xA0;options&#xA0;&#x4F7F;&#x7A0B;&#x5E8F;&#x80FD;&#x591F;&#x6307;&#x5B9A;&#x4F7F;&#x7528;&#x54EA;&#x79CD;&#x8BED;&#x8A00;&#x683C;&#x5F0F;&#x5316;&#x89C4;&#x5219;&#xFF0C;&#x5141;&#x8BB8;&#x5B9A;&#x5236;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x8868;&#x73B0;&#xFF08;behavior&#xFF09;&#x3002;&#x5728;&#x65E7;&#x7248;&#x672C;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#xFF0C;&#xA0;locales&#xA0;&#x548C;&#xA0;options&#xA0;&#x53C2;&#x6570;&#x88AB;&#x5FFD;&#x7565;&#xFF0C;&#x4F7F;&#x7528;&#x7684;&#x8BED;&#x8A00;&#x73AF;&#x5883;&#x548C;&#x8FD4;&#x56DE;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x683C;&#x5F0F;&#x662F;&#x5404;&#x81EA;&#x72EC;&#x7ACB;&#x5B9E;&#x73B0;&#x7684;&#x3002;"><code>Date.prototype.toLocaleTimeString()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x8868;&#x793A;&#x8BE5;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x65F6;&#x95F4;&#x90E8;&#x5206;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x683C;&#x5F0F;&#x4E0E;&#x7CFB;&#x7EDF;&#x8BBE;&#x7F6E;&#x7684;&#x5730;&#x533A;&#x5173;&#x8054;&#xFF08;locality sensitive&#xFF09;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toSource" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Date.prototype.toSource()</code></a> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x4E0E;<a href="/zh-CN/docs/Web/JavaScript/Reference/Date" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Date</code></a>&#x7B49;&#x4EF7;&#x7684;&#x539F;&#x59CB;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x8FD9;&#x4E2A;&#x503C;&#x53BB;&#x751F;&#x6210;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x5BF9;&#x8C61;&#x3002;&#x91CD;&#x5199;&#x4E86;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource" title="&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x6E90;&#x4EE3;&#x7801;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;."><code>Object.prototype.toSource()</code></a> &#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toString" title="toString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8868;&#x793A;&#x8BE5;Date&#x5BF9;&#x8C61;&#x3002;"><code>Date.prototype.toString()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x8868;&#x793A;&#x8BE5;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x8986;&#x76D6;&#x4E86;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString" title="toString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x4EE3;&#x8868;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;"><code>Object.prototype.toString()</code></a> &#x65B9;&#x6CD5;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString" title="toTimeString()&#xA0;&#x65B9;&#x6CD5;&#x4EE5;&#x4EBA;&#x7C7B;&#x6613;&#x8BFB;&#x5F62;&#x5F0F;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x65F6;&#x95F4;&#x90E8;&#x5206;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x4EE5;&#x7F8E;&#x5F0F;&#x82F1;&#x8BED;&#x683C;&#x5F0F;&#x5316;&#x3002;"><code>Date.prototype.toTimeString()</code></a></dt>
 <dd>&#x4EE5;&#x4EBA;&#x7C7B;&#x6613;&#x8BFB;&#x683C;&#x5F0F;&#x8FD4;&#x56DE;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x65F6;&#x95F4;&#x90E8;&#x5206;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString" title="toUTCString()&#xA0;&#x65B9;&#x6CD5;&#x628A;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x8F6C;&#x6362;&#x4E3A;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x4F7F;&#x7528;UTC&#x65F6;&#x533A;&#x3002;"><code>Date.prototype.toUTCString()</code></a></dt>
 <dd>&#x628A;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x8F6C;&#x6362;&#x4E3A;&#x4E00;&#x4E2A;&#x4EE5;UTC&#x65F6;&#x533A;&#x8BA1;&#x65F6;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/valueOf" title="valueOf() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x59CB;&#x503C;&#x3002;"><code>Date.prototype.valueOf()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x59CB;&#x503C;&#x3002;&#x8986;&#x76D6;&#x4E86; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf" title="valueOf()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x539F;&#x59CB;&#x503C;."><code>Object.prototype.valueOf()</code></a> &#x65B9;&#x6CD5;&#x3002;</dd>
</dl>

<p></p><div class="inheritsbox template-jsOverrides" style="border: 5px solid #D1D1FF; background: #f5f5ff; padding: 2px 10px; margin: 25px 0; overflow: hidden;">  
<div><span style="font-weight: 700;">Methods inherited from <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object"><code>Object</code></a>:</span></div> 
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/DefineGetter" class="new internal"><code>__defineGetter__</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/DefineSetter" class="new internal"><code>__defineSetter__</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/HasOwnProperty" class="internal"><code>hasOwnProperty</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/IsPrototypeOf" class="internal"><code>isPrototypeOf</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/LookupGetter" class="internal"><code>__lookupGetter__</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/LookupSetter" class="new internal"><code>__lookupSetter__</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/NoSuchMethod" class="internal"><code>__noSuchMethod__</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/PropertyIsEnumerable" class="internal"><code>propertyIsEnumerable</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Unwatch" class="internal"><code>unwatch</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Watch" class="internal"><code>watch</code></a></div> 
</div><p></p>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

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
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Date.prototype</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-properties-of-the-date-prototype-object" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Date.prototype</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
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
                  
                
              