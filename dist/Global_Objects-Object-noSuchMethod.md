
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="overheadIndicator obsolete obsoleteHeader"><p><strong><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span> &#x5DF2;&#x5E9F;&#x5F03;</strong><br>This feature is obsolete. Although it may still work in some browsers, its use is discouraged since it could be removed at any time. Try to avoid using it.</p></div></div>

<p><strong><code>__noSuchMethod__</code></strong>&#xA0;&#x5C5E;&#x6027;&#x66FE;&#x7ECF;&#x662F;&#x6307;&#x5F53;&#x8C03;&#x7528;&#x67D0;&#x4E2A;&#x5BF9;&#x8C61;&#x91CC;&#x4E0D;&#x5B58;&#x5728;&#x7684;&#x65B9;&#x6CD5;&#x65F6;&#x5373;&#x5C06;&#x88AB;&#x6267;&#x884C;&#x7684;&#x51FD;&#x6570;&#xFF0C;&#x4F46;&#x662F;&#x73B0;&#x5728;&#x8FD9;&#x4E2A;&#x51FD;&#x6570;&#x5DF2;&#x7ECF;&#x4E0D;&#x53EF;&#x7528;&#x3002;</p>

<p><code><font face="Open Sans, Arial, sans-serif">&#x5728;</font><strong>__noSuchMethod__</strong></code>&#xA0;&#x5C5E;&#x6027;&#x88AB;&#x79FB;&#x9664;&#x4E4B;&#x540E;&#xFF0C;ECMAScript 2015 (ES6) &#x89C4;&#x8303;&#x8F6C;&#x800C;&#x91C7;&#x7528;&#xA0;<a title="Editorial review completed." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy"><code>Proxy</code></a> &#x5BF9;&#x8C61;&#xFF0C;&#xA0;&#x53EF;&#x4EE5;&#x5B9E;&#x73B0;&#x4E0B;&#x9762;&#x7684;&#x6548;&#x679C;&#xFF08;&#x4EE5;&#x53CA;&#x66F4;&#x591A;&#xFF09;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>obj</var>.__noSuchMethod__ = <var>fun</var></code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>fun</code></dt>
 <dd>&#x51FD;&#x6570;&#x5F62;&#x5F0F;&#x5982;&#x4E0B;&#xFF1A;</dd>
 <dd>
 <pre class="brush: js"><code>function (<var>id</var>, <var>args</var>) { . . . }</code></pre>

 <dl>
  <dt><code>id</code></dt>
  <dd>&#x8C03;&#x7528;&#x7684;&#x4E0D;&#x5B58;&#x5728;&#x7684;&#x65B9;&#x6CD5;&#x540D;</dd>
  <dt><code>args</code></dt>
  <dd>&#x4F20;&#x9012;&#x7ED9;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x53C2;&#x6570;&#x6570;&#x7EC4;</dd>
 </dl>
 </dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x9ED8;&#x8BA4;&#x60C5;&#x51B5;&#x559C;&#x7231;&#xFF0C;&#x8BD5;&#x56FE;&#x8C03;&#x7528;&#x5BF9;&#x8C61;&#x4E0A;&#x4E0D;&#x5B58;&#x5728;&#x7684;&#x65B9;&#x6CD5;&#x5176;&#x7ED3;&#x679C;&#x662F;&#x5728;<a title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a>&#x4E0A;&#x629B;&#x51FA;&#x5F02;&#x5E38;&#xFF0C;&#x8FD9;&#x79CD;&#x884C;&#x4E3A;&#x53EF;&#x4EE5;&#x5728;</p>

<p>By default, an attempt to call a method that doesn&apos;t exist on an object results in a <a title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a> being thrown. This behavior can be circumvented by defining a function at that object&apos;s <code>__noSuchMethod__</code> member. The function takes two arguments, the first is the name of the method attempted and the second is an array of the arguments that were passed in the method call. The second argument is an actual array (that is, it inherits through the <a title="&#x6240;&#x6709;&#x7684;&#x6570;&#x7EC4;&#x5B9E;&#x4F8B;&#x90FD;&#x7EE7;&#x627F;&#x4E8E; Array.prototype&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype"><code>Array.prototype</code></a> chain) and not the array-like <a title="JavaScript/Reference/Functions/arguments" href="/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments">arguments object</a>.</p>

<p>If this method cannot be called, either as if <code>undefined</code> by default, if deleted, or if manually set to a non-function, the JavaScript engine will revert to throwing <code>TypeError</code>s.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Simple_test_of___noSuchMethod__">Simple test of <code>__noSuchMethod__</code></h3>

<pre class="brush: js">var o = {
  __noSuchMethod__: function(id, args) { 
                      console.log(id, &apos;(&apos; + args.join(&apos;, &apos;) + &apos;)&apos;); 
                    }
};

o.foo(1, 2, 3);
o.bar(4, 5);
o.baz();

// Output
// foo (1, 2, 3)
// bar (4, 5)
// baz ()
</pre>

<h3 id="Using___noSuchMethod___to_simulate_multiple_inheritance">Using <code>__noSuchMethod__</code> to simulate multiple inheritance</h3>

<p>An example of code that implements a primitive form of multiple inheritance is shown below.</p>

<pre class="brush: js">// Doesn&apos;t work with multiple inheritance objects as parents
function noMethod(name, args) {
  var parents = this.__parents_;

  // Go through all parents
  for (var i = 0; i &lt; parents.length; i++) {
    // If we find a function on the parent, we call it
    if (typeof parents[i][name] == &quot;function&quot;) {
      return parents[i][name].apply(this, args);
    }
  }

  // If we get here, the method hasn&apos;t been found
  throw new TypeError;
}

// Used to add a parent for multiple inheritance
function addParent(obj, parent) {
  // If the object isn&apos;t initialized, initialize it
  if (!obj.__parents_) {
    obj.__parents_ = [];
    obj.__noSuchMethod__ = noMethod;
  }

  // Add the parent
  obj.__parents_.push(parent);
}
</pre>

<p>An example of using this idea is shown below.</p>

<pre class="brush: js">// Example base class 1
function NamedThing(name){
  this.name=name;
}

NamedThing.prototype = {
  getName: function() { return this.name; },
  setName: function(newName) { this.name = newName; }
}

// Example base class 2
function AgedThing(age) {
  this.age = age;
}

AgedThing.prototype = {
  getAge: function() { return this.age; },
  setAge: function(age) { this.age = age; }
}

// Child class. inherits from NamedThing and AgedThing
// as well as defining address
function Person(name, age, address){
  addParent(this, NamedThing.prototype);
  NamedThing.call(this, name);
  addParent(this, AgedThing.prototype);
  AgedThing.call(this, age);
  this.address = address;
}

Person.prototype = {
  getAddr: function() { return this.address; },
  setAddr: function(addr) { this.address = addr; }
}

var bob = new Person(&quot;bob&quot;, 25, &quot;New York&quot;);

console.log(&quot;getAge is &quot; + ((&quot;getAge&quot; in bob) ? &quot;in&quot; : &quot;not in&quot;) + &quot; bob&quot;);
// getAge is not in bob

console.log(&quot;bob&apos;s age is: &quot; + bob.getAge());
// bob&apos;s age is: 25

console.log(&quot;getName is &quot; + ((&quot;getName&quot; in bob) ? &quot;in&quot; : &quot;not in&quot;) + &quot; bob&quot;);
// getName is not in bob

console.log(&quot;bob&apos;s name is: &quot; + bob.getName());
// bob&apos;s name is: bob

console.log(&quot;getAddr is &quot; + ((&quot;getAddr&quot; in bob) ? &quot;in&quot; : &quot;not in&quot;) + &quot; bob&quot;);
// getAddr is in bob

console.log(&quot;bob&apos;s address is: &quot; + bob.getAddr());
// bob&apos;s address is: New York
</pre>

<h2 id="Specifications">Specifications</h2>

<p>Not part of any specifications. This feature has been removed, see <a title="FIXED: can we remove __noSuchMethod__, use proxies instead?" href="https://bugzilla.mozilla.org/show_bug.cgi?id=683218" class="external">bug&#xA0;683218</a>.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

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
   <td>Basic support</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span> [1]</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span> [1]</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<p>[1] This feature was implemented until version 43.</p>
                  
                
              