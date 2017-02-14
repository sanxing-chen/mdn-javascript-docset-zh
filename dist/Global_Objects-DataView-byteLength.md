
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>&#xA0;<strong><code>byteLength</code></strong> &#x5C5E;&#x6027;&#x63CF;&#x8FF0;&#x4E86;&#x89C6;&#x56FE;&#x4ECE;&#x5B83;&#x7684; <a title="&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x62E5;&#x6709;&#x6307;&#x5B9A;&#x5927;&#x5C0F;&#x7684;ArrayBuffer&#x5BF9;&#x8C61;&#x3002;&#x5B83;&#x7684;&#x5185;&#x5BB9;&#x90FD;&#x88AB;&#x521D;&#x59CB;&#x5316;&#x4E3A;0&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"><code>ArrayBuffer</code></a> &#x5F00;&#x59CB;&#x7684;&#x5B57;&#x8282;&#x957F;&#x5EA6;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><var>dataview</var>.byteLength</pre>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>byteLength</code> &#x5C5E;&#x6027;&#x662F;&#x4E00;&#x4E2A;&#x83B7;&#x53D6;(accessor)&#x5C5E;&#x6027;&#xFF0C;&#x5B83;&#x7684; set &#x5C5E;&#x6027;&#x4E3A; undefined&#xFF0C;&#x8FD9;&#x610F;&#x5473;&#x7740;&#x5B83;&#x662F;&#x53EA;&#x8BFB;&#x7684;&#x3002;&#x503C;&#x5728;&#xA0;<code>DataView &#x88AB;&#x521B;&#x5EFA;&#x65F6;&#x5C31;&#x786E;&#x5B9A;&#x4E86;&#xFF0C;&#x4E14;&#x4E0D;&#x80FD;&#x6539;&#x53D8;&#x3002;&#x5982;&#x679C;</code>&#xA0;<code>DataView</code>&#xA0;&#x6CA1;&#x6709;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;&#x6216;byteLength&#xFF0C;&#x90A3;&#x4E48;&#x88AB;&#x5F15;&#x7528;&#x7684; <code>ArrayBuffer &#x7684;&#x5B57;&#x8282;&#x957F;&#x5EA6;&#x5C06;&#x88AB;&#x8FD4;&#x56DE;&#x3002;</code></p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_the_byteLength_property">Using the <code>byteLength</code> property</h3>

<pre class="brush:js">var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.byteLength; // 8 (matches the byteLength of the buffer)

var dataview2 = new DataView(buffer, 1, 5);
dataview2.byteLength; // 5 (as specified when constructing the DataView)

var dataview3 = new DataView(buffer, 2);
dataview3.byteLength; // 6 (due to the offset of the constructed DataView)
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-get-dataview.prototype.bytelength">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">DataView.prototype.byteLength</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="https://tc39.github.io/ecma262/#sec-get-dataview.prototype.bytelength">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">DataView.prototype.byteLength</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<p></p><div class="htab">
    <a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a>
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
   <td>9.0</td>
   <td><a title="Released on 2012-08-28." href="/en-US/Firefox/Releases/15">15.0</a> (15.0)</td>
   <td>10</td>
   <td>12.1</td>
   <td>5.1</td>
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
   <td>4.0</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>15.0 (15)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>12.0</td>
   <td>4.2</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="DataView&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x4E0E;&#x5E73;&#x53F0;&#x4E2D;&#x5B57;&#x8282;&#x5728;&#x5185;&#x5B58;&#x4E2D;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;(&#x5B57;&#x8282;&#x5E8F;)&#x65E0;&#x5173;&#x7684;&#x4ECE;ArrayBuffer&#x8BFB;&#x5199;&#x591A;&#x6570;&#x5B57;&#x7C7B;&#x578B;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView"><code>DataView</code></a></li>
 <li><a title="&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x62E5;&#x6709;&#x6307;&#x5B9A;&#x5927;&#x5C0F;&#x7684;ArrayBuffer&#x5BF9;&#x8C61;&#x3002;&#x5B83;&#x7684;&#x5185;&#x5BB9;&#x90FD;&#x88AB;&#x521D;&#x59CB;&#x5316;&#x4E3A;0&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"><code>ArrayBuffer</code></a></li>
</ul>
                  
                
              