
                
                  
                    <p></p><section class="Quick_links" id="Quick_Links"><!-- --></section><div class="overheadIndicator nonStandard nonStandardHeader">
      <p><strong><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> &#x975E;&#x6807;&#x51C6;</strong><br>
      &#x8BE5;&#x7279;&#x6027;&#x662F;&#x975E;&#x6807;&#x51C6;&#x7684;&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#xFF01;</p>
      </div><p></p>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p>&#x76D1;&#x89C6;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x67D0;&#x4E2A;&#x5C5E;&#x6027;&#x662F;&#x5426;&#x88AB;&#x8D4B;&#x503C;,&#x5728;&#x8BE5;&#x5C5E;&#x6027;&#x8D4B;&#x503C;&#x65F6;&#x89E6;&#x53D1;&#x6307;&#x5B9A;&#x7684;&#x56DE;&#x8C03;&#x51FD;&#x6570;.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th class="header" colspan="2">Method of <a href="/zh-cn/JavaScript/Reference/Global_Objects/Object" title="zh-cn/JavaScript/Reference/Global_Objects/Object"><code>Object</code></a></th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Implemented in</td>
   <td>JavaScript 1.8.6</td>
  </tr>
  <tr>
   <td>ECMAScript Edition</td>
   <td>none</td>
  </tr>
 </tbody>
</table>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<p><code><em>object</em>.watch(<em>prop</em>, <em>handler</em>) </code></p>

<h2 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h2>

<dl>
 <dt><code>prop</code></dt>
 <dd>&#x60F3;&#x8981;&#x76D1;&#x89C6;&#x503C;&#x662F;&#x5426;&#x53D1;&#x751F;&#x53D8;&#x5316;&#x7684;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x67D0;&#x4E2A;&#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x79F0;</dd>
</dl>

<dl>
 <dt><code>handler</code></dt>
 <dd>&#x5F53;&#x6307;&#x5B9A;&#x7684;&#x5C5E;&#x6027;&#x53D1;&#x751F;&#x53D8;&#x5316;&#x65F6;&#x6267;&#x884C;&#x7684;&#x56DE;&#x8C03;&#x51FD;&#x6570;</dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<div class="warning"><strong>&#x8B66;&#x544A;:</strong> &#x901A;&#x5E38;&#x6765;&#x8BB2;,&#x4F60;&#x5E94;&#x8BE5;&#x5C3D;&#x91CF;&#x907F;&#x514D;&#x4F7F;&#x7528; <code>watch()</code>&#x548C; <a href="/zh-cn/JavaScript/Reference/Global_Objects/Object/unwatch" title="/zh-cn/JavaScript/Reference/Global_Objects/Object/unwatch"><code>unwatch()</code></a> &#x65B9;&#x6CD5; . &#x8FD9;&#x4E24;&#x4E2A;&#x65B9;&#x6CD5;&#x4EC5;&#x5728;Gecko&#x4E2D;&#x5B9E;&#x73B0;,&#x5E76;&#x4E14;&#x5B83;&#x4EEC;&#x4E3B;&#x8981;&#x662F;&#x4E3A;&#x4E86;&#x5728;&#x8C03;&#x8BD5;&#x7684;&#x65F6;&#x5019;&#x4F7F;&#x7528;. In addition, using watchpoints has a serious negative impact on performance, which is especially true when used on global objects, such as window. You can usually use <a href="/zh-cn/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters" title="https://developer.mozilla.org/zh-cn/Core_JavaScript_1.5_Guide/Working_with_Objects#Defining_getters_and_setters">setters and getters</a> or proxies instead. See <a href="#Compatibility">Compatibility</a> for details.</div>

<p>Watches for assignment to a property named <code>prop</code> in this object, calling <code>handler(prop, oldval, newval)</code> whenever <code>prop</code> is set and storing the return value in that property. A watchpoint can filter (or nullify) the value assignment, by returning a modified <code>newval</code> (or by returning <code>oldval</code>).</p>

<p>If you delete a property for which a watchpoint has been set, that watchpoint does not disappear. If you later recreate the property, the watchpoint is still in effect.</p>

<p>To remove a watchpoint, use the <code><a href="/zh-cn/JavaScript/Reference/Global_Objects/Object/unwatch" title="zh-cn/JavaScript/Reference/Global_Objects/Object/unwatch">unwatch()</a></code> method. By default, the <code>watch</code> method is inherited by every object descended from <code>Object</code>.</p>

<p>The JavaScript debugger has functionality similar to that provided by this method, as well as other debugging options. For information on the debugger, see <a href="/zh-cn/Venkman" title="zh-cn/Venkman">Venkman</a>.</p>

<p>In Firefox, <code>handler</code> is only called from assignments in script, not from native code. For example, <code>window.watch(&apos;location&apos;, myHandler)</code> will not call <code>myHandler</code> if the user clicks a link to an anchor within the current document. However, <code>window.location += &apos;#myAnchor&apos;</code> will call <code>myHandler</code>.</p>

<div class="note"><strong>&#x6CE8;&#x610F;:</strong> Calling <code>watch()</code> on an object for a specific property overrides and previous handler attached for that property.</div>

<h2 name="Examples" id="Examples">&#x4F8B;&#x5B50;</h2>

<h3 name="Example:_Using_watch_and_unwatch" id="Example:_Using_watch_and_unwatch">&#x4F8B;&#x5B50;: &#x4F7F;&#x7528; <code>watch</code> &#x548C; <code>unwatch</code></h3>

<pre class="brush: js">var o = {p:1};
o.watch(&quot;p&quot;,
  function (id, oldval, newval) {
    console.log(&quot;o.&quot; + id + &quot;&#x7531;&quot; + oldval + &quot; &#x53D8;&#x4E3A; &quot; + newval);
    return newval;
  });

o.p = 2;
o.p = 3;
delete o.p;
o.p = 4;

o.unwatch(&apos;p&apos;);
o.p = 5;
</pre>

<p>&#x4E0A;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x663E;&#x793A;&#x7ED3;&#x679C;&#x5982;&#x4E0B;:</p>

<pre class="eval">o.p &#x7531; 1 &#x53D8;&#x4E3A; 2
o.p &#x7531; 2 &#x53D8;&#x4E3A; 3
o.p &#x7531; undefined &#x53D8;&#x4E3A; 4
</pre>

<h3 name="Example:_Using_watch_to_validate_an_object.27s_properties" id="Example:_Using_watch_to_validate_an_object.27s_properties">&#x4F8B;&#x5B50;: &#x4F7F;&#x7528; <code>watch</code> &#x6765;&#x9A8C;&#x8BC1;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;</h3>

<p>&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; <code>watch</code> &#x6765;&#x68C0;&#x6D4B;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#x8D4B;&#x503C;&#x662F;&#x5426;&#x662F;&#x5408;&#x6CD5;&#x7684;.&#x4E0B;&#x4F8B;&#x6F14;&#x793A;&#x4E86;&#x5982;&#x4F55;&#x786E;&#x4FDD;&#x6BCF;&#x4E2A;&#x4EBA;&#x59CB;&#x7EC8;&#x5177;&#x6709;&#x4E00;&#x4E2A;&#x5408;&#x6CD5;&#x7684;&#x540D;&#x5B57;&#x548C;0 &#x5230; 200&#x4E4B;&#x95F4;&#x7684;&#x5E74;&#x9F84;.</p>

<pre class="brush: js">Person = function(name,age) {
  this.watch(&quot;age&quot;, Person.prototype._isValidAssignment);
  this.watch(&quot;name&quot;, Person.prototype._isValidAssignment);
  this.name = name;
  this.age = age;
}

Person.prototype.toString = function() {
  return this.name + &quot;, &quot; + this.age;
};

Person.prototype._isValidAssignment = function(id, oldval, newval) {
  if (id === &quot;name&quot; &amp;&amp; (!newval || newval.length &gt; 30)) {
    throw new RangeError(&quot;&#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x540D;&#x5B57; &quot; + this);
  }
  if (id === &quot;age&quot;  &amp;&amp; (newval &lt; 0 || newval &gt; 200)) {
    throw new RangeError(&quot;&#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x5E74;&#x9F84; &quot; + this);
  }
  return newval;
}

will = new Person(&quot;Will&quot;, 29);
print(will);   // Will, 29

try {
  will.name = &quot;&quot;;
} catch (e) {
  //print(e);
  console.log(e);
}

try {
  will.age = -4;
} catch (e) {
  //print(e);
  console.log(e);
}
</pre>

<p>&#x4E0A;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x663E;&#x793A;&#x7ED3;&#x679C;&#x5982;&#x4E0B;:</p>

<pre class="eval">Will, 29
RangeError: &#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x540D;&#x5B57; Will, 29
RangeError: &#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x5E74;&#x9F84; Will, 29
</pre>

<h2 id="&#x517C;&#x5BB9;&#x6027;">&#x517C;&#x5BB9;&#x6027;</h2>

<ul>
 <li><span class="external"><a href="https://gist.github.com/384583" class="external link-https" title="https://gist.github.com/384583">Polyfill</a> &#x5728;&#x6240;&#x6709;&#x7684;&#x652F;&#x6301;<code>ES5</code>&#x7684;&#x6D4F;&#x89C8;&#x5668;&#x4E0A;&#x63D0;&#x4F9B;&#x4E86;<code>watch</code>&#x65B9;&#x6CD5;.</span></li>
 <li>Using a <a href="/zh-cn/JavaScript/Reference/Global_Objects/Proxy" title="Proxy">Proxy</a> enables you do that even deeper changes to how property assignments work</li>
</ul>

<h2 name="See_Also" id="See_Also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<p><a href="/zh-cn/JavaScript/Reference/Global_Objects/Object/unwatch" title="zh-cn/JavaScript/Reference/Global_Objects/Object/unwatch">unwatch()</a></p>
                  
                
              