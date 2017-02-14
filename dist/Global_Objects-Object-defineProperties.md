
                
                  
                    <p></p><section class="Quick_links" id="Quick_Links"><!-- --></section><p></p>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p><code>Object.defineProperties()</code> &#x65B9;&#x6CD5;&#x5728;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4E0A;&#x6DFB;&#x52A0;&#x6216;&#x4FEE;&#x6539;&#x4E00;&#x4E2A;&#x6216;&#x8005;&#x591A;&#x4E2A;&#x81EA;&#x6709;&#x5C5E;&#x6027;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x8BE5;&#x5BF9;&#x8C61;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<p><code>Object.defineProperties(<em>obj</em>, <em>props</em>)</code></p>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt>obj</dt>
 <dd>&#x5C06;&#x8981;&#x88AB;&#x6DFB;&#x52A0;&#x5C5E;&#x6027;&#x6216;&#x4FEE;&#x6539;&#x5C5E;&#x6027;&#x7684;&#x5BF9;&#x8C61;</dd>
 <dt>props</dt>
 <dd>&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x4E00;&#x4E2A;&#x6216;&#x591A;&#x4E2A;&#x952E;&#x503C;&#x5BF9;&#x5B9A;&#x4E49;&#x4E86;&#x5C06;&#x8981;&#x4E3A;&#x5BF9;&#x8C61;&#x6DFB;&#x52A0;&#x6216;&#x4FEE;&#x6539;&#x7684;&#x5C5E;&#x6027;&#x7684;&#x5177;&#x4F53;&#x914D;&#x7F6E;</dd>
</dl>

<h2 id="&#x4F8B;&#x5B50;">&#x4F8B;&#x5B50;</h2>

<pre class="brush: js">var obj = {};
Object.defineProperties(obj, {
&#xA0; &quot;property1&quot;: {
&#xA0;&#xA0;&#xA0; value: true,
&#xA0;&#xA0;&#xA0; writable: true
&#xA0; },
&#xA0; &quot;property2&quot;: {
&#xA0;&#xA0;&#xA0; value: &quot;Hello&quot;,
&#xA0;&#xA0;&#xA0; writable: false
&#xA0; }
&#xA0; // &#x7B49;&#x7B49;.
});
alert(obj.property2) //&#x5F39;&#x51FA;&quot;Hello&quot;
</pre>

<h2 id="&#x517C;&#x5BB9;&#x65E7;&#x73AF;&#x5883;&#xFF08;Polyfill&#xFF09;">&#x517C;&#x5BB9;&#x65E7;&#x73AF;&#x5883;&#xFF08;Polyfill&#xFF09;</h2>

<p>&#x4E0B;&#x9762;&#x7528; <code>JavaScript</code> &#x5B9E;&#x73B0;&#x7684; <code>defineProperties</code> &#x51FD;&#x6570;&#x51E0;&#x4E4E;&#x5B8C;&#x5168;&#x7B49;&#x4EF7;&#x4E8E;&#x539F;&#x751F;&#x7684;&#xA0;<code>Object.defineProperties</code>&#x3002;</p>

<pre class="brush: js">function defineProperties(obj, properties)
{
  function convertToDescriptor(desc){
    function hasProperty(obj, prop){
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    function isCallable(v){
      <strong>// </strong>&#x5982;&#x679C;&#x9664;&#x51FD;&#x6570;&#x4EE5;&#x5916;,&#x8FD8;&#x6709;&#x5176;&#x4ED6;&#x7C7B;&#x578B;&#x7684;&#x503C;&#x4E5F;&#x53EF;&#x4EE5;&#x88AB;&#x8C03;&#x7528;,&#x5219;&#x53EF;&#x4EE5;&#x4FEE;&#x6539;&#x4E0B;&#x9762;&#x7684;&#x8BED;&#x53E5;
      return typeof v === &quot;function&quot;;
    }

    if (typeof desc !== &quot;object&quot; || desc === null)
      throw new TypeError(&quot;&#x4E0D;&#x662F;&#x6B63;&#x89C4;&#x7684;&#x5BF9;&#x8C61;&quot;);

    var d = {};
    if (hasProperty(desc, &quot;enumerable&quot;))
      d.enumerable = !!desc.enumerable;
    if (hasProperty(desc, &quot;configurable&quot;))
      d.configurable = !!desc.configurable;
    if (hasProperty(desc, &quot;value&quot;))
      d.value = desc.value;
    if (hasProperty(desc, &quot;writable&quot;))
      d.writable = !!desc.writable;
    if (hasProperty(desc, &quot;get&quot;)){
      var g = desc.get;
      if (!isCallable(g) &amp;&amp; g !== &quot;undefined&quot;)
        throw new TypeError(&quot;bad get&quot;);
      d.get = g;
    }
    if (hasProperty(desc, &quot;set&quot;)){
      var s = desc.set;
      if (!isCallable(s) &amp;&amp; s !== &quot;undefined&quot;)
        throw new TypeError(&quot;bad set&quot;);
      d.set = s;
    }

    if ((&quot;get&quot; in d || &quot;set&quot; in d) &amp;&amp; (&quot;value&quot; in d || &quot;writable&quot; in d))
      throw new TypeError(&quot;identity-confused descriptor&quot;);

    return d;
  }

  if (typeof obj !== &quot;object&quot; || obj === null)
    throw new TypeError(&quot;&#x4E0D;&#x662F;&#x6B63;&#x89C4;&#x7684;&#x5BF9;&#x8C61;&quot;);

  properties = Object(properties);
  var keys = Object.keys(properties);
  var descs = [];
  for (var i = 0; i &lt; keys.length; i++)
    descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);
  for (var i = 0; i &lt; descs.length; i++)
    Object.defineProperty(obj, descs[i][0], descs[i][1]);

  return obj;
}
</pre>

<h2 id="&#x89C4;&#x8303;" style="margin-bottom: 20px; line-height: 30px;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.2.3.7" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Object.defineProperties</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.<br>
    Implemented in JavaScript 1.8.5</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-object.defineproperties" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Object.defineProperties</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<p>&#x57FA;&#x4E8E;<a href="http://kangax.github.com/es5-compat-table/" class="external">Kangax&apos;s compat tables</a>.</p>

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
   <td><a href="/en-US/Firefox/Releases/4" title="Released on 2011-03-22.">4.0</a> (2)</td>
   <td>5 (previous versions untested)</td>
   <td>9</td>
   <td>11.60</td>
   <td>5</td>
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
   <td>4.0 (2)</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>11.50</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" title="Object.defineProperty() &#x65B9;&#x6CD5;&#x4F1A;&#x76F4;&#x63A5;&#x5728;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4E0A;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x65B0;&#x5C5E;&#x6027;&#xFF0C;&#x6216;&#x8005;&#x4FEE;&#x6539;&#x4E00;&#x4E2A;&#x5DF2;&#x7ECF;&#x5B58;&#x5728;&#x7684;&#x5C5E;&#x6027;&#xFF0C; &#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x3002;"><code>Object.defineProperty()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys" title="Object.keys() &#x65B9;&#x6CD5;&#x4F1A;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7531;&#x7ED9;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x6240;&#x6709;&#x53EF;&#x679A;&#x4E3E;&#x81EA;&#x8EAB;&#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x7EC4;&#x6210;&#x7684;&#x6570;&#x7EC4;&#xFF0C;&#x6570;&#x7EC4;&#x4E2D;&#x5C5E;&#x6027;&#x540D;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;&#x548C;&#x4F7F;&#x7528;for-in&#x5FAA;&#x73AF;&#x904D;&#x5386;&#x8BE5;&#x5BF9;&#x8C61;&#x65F6;&#x8FD4;&#x56DE;&#x7684;&#x987A;&#x5E8F;&#x4E00;&#x81F4; (&#x987A;&#x5E8F;&#x4E00;&#x81F4;&#x4E0D;&#x5305;&#x62EC;&#x6570;&#x5B57;&#x5C5E;&#x6027;)&#xFF08;&#x4E24;&#x8005;&#x7684;&#x4E3B;&#x8981;&#x533A;&#x522B;&#x662F; for-in &#x8FD8;&#x4F1A;&#x904D;&#x5386;&#x51FA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4ECE;&#x5176;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x7EE7;&#x627F;&#x5230;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#xFF09;&#x3002;"><code>Object.keys()</code></a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Enumerability_and_ownership_of_properties" title="Enumerability_and_ownership_of_properties">Enumerability and ownership of properties</a></li>
</ul>
                  
                
              