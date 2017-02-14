
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="overheadIndicator" style="background: #9CF49C;"> 
    <p><strong>&#x8BE5;&#x7279;&#x6027;&#x5904;&#x4E8E; ECMAScript 6 &#x89C4;&#x8303;&#x8349;&#x6848;&#x4E2D;&#xFF0C;&#x76EE;&#x524D;&#x7684;&#x5B9E;&#x73B0;&#x5728;&#x672A;&#x6765;&#x53EF;&#x80FD;&#x4F1A;&#x53D1;&#x751F;&#x5FAE;&#x8C03;&#xFF0C;&#x8BF7;&#x8C28;&#x614E;&#x4F7F;&#x7528;&#x3002;</strong></p> 
</div></div>

<h2 id="Summary" name="Summary">&#x6982;&#x8FF0;</h2>

<p>&#x8BE5;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4E24;&#x4E2A;&#x53C2;&#x6570;&#x7684;&#x7C7B;C&#x7684;32&#x4F4D;&#x6574;&#x6570;&#x4E58;&#x6CD5;&#x8FD0;&#x7B97;&#x7684;&#x8FD0;&#x7B97;&#x7ED3;&#x679C;.</p>

<h2 id=".E8.AF.AD.E6.B3.95">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>Math.imul(a, b)</code></pre>

<h3 id="Parameters" name="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>a</code></dt>
 <dd>&#x88AB;&#x4E58;&#x6570;.</dd>
 <dt><code>b</code></dt>
 <dd>&#x4E58;&#x6570;.</dd>
</dl>

<h2 id=".E6.8F.8F.E8.BF.B0">&#x63CF;&#x8FF0;</h2>

<p><code>Math.imul</code>&#x53EF;&#x4EE5;&#x8FDB;&#x884C;&#x5FEB;&#x901F;&#x7684;,&#x7C7B;C&#x8BED;&#x4E49;&#x7684;32&#x4F4D;&#x6574;&#x6570;&#x4E58;&#x6CD5;.&#x8BE5;&#x7279;&#x6027;&#x5BF9;&#x4E8E;&#x4E00;&#x4E9B;&#x9879;&#x76EE;&#x6BD4;&#x5982;<a class="external" href="http://en.wikipedia.org/wiki/Emscripten" title="http://en.wikipedia.org/wiki/Emscripten">Emscripten</a>&#x5F88;&#x6709;&#x7528;.</p>

<h2 id=".E4.BE.8B.E5.AD.90">&#x4F8B;&#x5B50;</h2>

<pre class="brush: js">Math.imul(2, 4) // 8
Math.imul(-1, 8) // -8
Math.imul(-2, -2) // 4
Math.imul(0xffffffff, 5) //-5
Math.imul(0xfffffffe, 5) //-10
</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>&#x4E0B;&#x9762;&#x7684;JavaScript&#x4EE3;&#x7801;&#x53EF;&#x4EE5;&#x5B9E;&#x73B0;&#x8BE5;&#x51FD;&#x6570;:</p>

<pre class="brush: js">function imul(a, b)
{
        var ah  = (a &gt;&gt;&gt; 16) &amp; 0xffff;
        var al = a &amp; 0xffff;
        var bh  = (b &gt;&gt;&gt; 16) &amp; 0xffff;
        var bl = b &amp; 0xffff;
        // &#x53F3;&#x79FB;0&#x4F4D;&#x53EF;&#x4EE5;&#x4FEE;&#x590D;&#x9AD8;&#x4F4D;&#x7684;&#x7B26;&#x53F7;&#x4F4D;
        return (al * bl) + (((ah*bl+al*bh)&lt;&lt;16)&gt;&gt;&gt;0);
}
</pre>

<h2 id=".E6.B5.8F.E8.A7.88.E5.99.A8.E5.85.BC.E5.AE.B9.E6.80.A7">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
   <th>Firefox (Gecko)</th>
   <th>Chrome</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><a href="/en-US/Firefox/Releases/20" title="Released on 2013-04-02.">20</a> (20)</td>
   <td><span style="color: rgb(255, 153, 0);" title="Compatibility unknown; please update this.">?</span></td>
   <td><span style="color: rgb(255, 153, 0);" title="Compatibility unknown; please update this.">?</span></td>
   <td><span style="color: rgb(255, 153, 0);" title="Compatibility unknown; please update this.">?</span></td>
   <td><span style="color: rgb(255, 153, 0);" title="Compatibility unknown; please update this.">?</span></td>
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
   <td>20.0 (20)</td>
   <td><span style="color: rgb(255, 153, 0);" title="Compatibility unknown; please update this.">?</span></td>
   <td><span style="color: rgb(255, 153, 0);" title="Compatibility unknown; please update this.">?</span></td>
   <td><span style="color: rgb(255, 153, 0);" title="Compatibility unknown; please update this.">?</span></td>
   <td><span style="color: rgb(255, 153, 0);" title="Compatibility unknown; please update this.">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<p>&#xA0;</p>
                  
                
              