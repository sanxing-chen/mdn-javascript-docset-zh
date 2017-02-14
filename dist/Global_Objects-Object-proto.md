
                
                  
                    <div class="warning">
<p><strong>Warning:</strong> Changing the <code>[[Prototype]]</code> of an object is, by the nature of how modern JavaScript engines optimize property accesses, a very slow operation, in <strong><em>every</em></strong> browser and JavaScript engine. The effects on performance of altering inheritance are subtle and far-flung, and are not limited to simply the time spent in <code>obj.__proto__ = ...</code> statement, but may extend to <strong><em>any</em></strong> code that has access to <strong><em>any</em></strong> object whose <code>[[Prototype]]</code> has been altered. If you care about performance you should avoid setting the <code>[[Prototype]]</code> of an object. Instead, create a new object with the desired <code>[[Prototype]]</code> using <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create" title="The Object.create() method creates a new object with the specified prototype object and properties."><code>Object.create()</code></a>.</p>
</div>

<div class="warning">
<p><strong>Warning:</strong> While <code>Object.prototype.__proto__</code> is supported today in most browsers, its existence and exact behavior has only been standardized in the ECMAScript 2015 specification as a legacy feature to ensure compatibility for web browsers. For better support, it is recommended that only <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf" title="The Object.getPrototypeOf() method returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object."><code>Object.getPrototypeOf()</code></a> be used instead.</p>
</div>

<div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>The <code>__proto__</code> property of <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype" title="The Object.prototype property represents the Object prototype object."><code>Object.prototype</code></a> is an accessor property (a getter function and a setter function) that exposes the internal <code>[[Prototype]]</code> (either an object or <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/null" title="The value null&#xA0;represents the intentional absence of any object value. It is one of JavaScript&apos;s primitive values."><code>null</code></a>) of the object through which it is accessed.</p>

<p>The use of <code>__proto__</code> is controversial, and has been discouraged. It was never originally included in the EcmaScript language spec, but modern browsers decided to implement it anyway. Only recently, the <code>__proto__</code> property has been standardized in the ECMAScript 2015 language specification for web browsers to ensure compatibility, so will be supported into the future. It is deprecated in favor of <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf" title="The Object.getPrototypeOf() method returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object."><code>Object.getPrototypeOf</code></a>/<a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf" title="The static Reflect.getPrototypeOf() method is the same method as Object.getPrototypeOf(). It returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object."><code>Reflect.getPrototypeOf</code></a> and <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf" title="The Object.setPrototypeOf() method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null."><code>Object.setPrototypeOf</code></a>/<a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf" title="The static Reflect.setPrototypeOf() method is the same method as Object.setPrototypeOf(). It sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or to null."><code>Reflect.setPrototypeOf</code></a> (though still, setting the <code>[[Prototype]]</code> of an object is a slow operation that should be avoided if performance is a concern).</p>

<p>The <code>__proto__</code> property can also be used in an object literal definition to set the object <code>[[Prototype]]</code> on creation, as an alternative to <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create" title="The Object.create() method creates a new object with the specified prototype object and properties."><code>Object.create()</code></a>. See: <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer">object initializer / literal syntax</a>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var shape = {};
var circle = new Circle();

// Set the object prototype.
// DEPRECATED. This is for example purposes only. DO NOT DO THIS in real code.
shape.__proto__ = circle;

// Get the object prototype
console.log(shape.__proto__ === circle); // true
</pre>

<pre class="brush: js">var shape = function () {
};
var p = {
    a: function () {
        console.log(&apos;aaa&apos;);
    }
};
shape.prototype.__proto__ = p;

var circle = new shape();

circle.a();//aaa

console.log(shape.prototype === circle.__proto__);//true

//or

var shape = function () {
};
var p = {
    a: function () {
        console.log(&apos;a&apos;);
    }
};

var circle = new shape();
circle.__proto__ = p;


circle.a(); //  a

console.log(shape.prototype === circle.__proto__);//false

//or

function test() {
}
test.prototype.myname = function () {
    console.log(&apos;myname&apos;);

}
var a = new test()

console.log(a.__proto__ === test.prototype);//true

a.myname();//myname


//or

var fn = function () {
};
fn.prototype.myname = function () {
    console.log(&apos;myname&apos;);
}

var obj = {
    __proto__: fn.prototype
};


obj.myname();//myname
</pre>

<p>Note: that is two underscores, followed by the five characters &quot;proto&quot;, followed by two more underscores.</p>

<h2 id="Description">Description</h2>

<p>The <code>__proto__</code> getter function exposes the value of the internal <code>[[Prototype]]</code> of an object. For objects created using an object literal, this value is <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype" title="The Object.prototype property represents the Object prototype object."><code>Object.prototype</code></a>. For objects created using array literals, this value is <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype" title="The Array.prototype property represents the prototype for the Array constructor and allows you to add new properties and methods to all Array objects."><code>Array.prototype</code></a>. For functions, this value is <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype" title="The Function.prototype property represents the Function prototype object."><code>Function.prototype</code></a>. For objects created using <code>new fun</code>, where <code>fun</code> is one of the built-in constructor functions provided by JavaScript (<a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="The JavaScript Array&#xA0;object is a global object that&#xA0;is used in the&#xA0;construction&#xA0;of&#xA0;arrays; which are high-level, list-like objects."><code>Array</code></a>, <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean" title="The Boolean object is an object wrapper for a boolean value."><code>Boolean</code></a>, <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date" title="Creates a JavaScript Date instance that represents a single moment in time. Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC."><code>Date</code></a>, <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number" title="The Number JavaScript object is a wrapper object allowing you to work with numerical values. A Number object is created using the Number() constructor."><code>Number</code></a>, <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="The Object constructor creates an object wrapper."><code>Object</code></a>, <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" title="The String global object is a constructor for strings, or a sequence of characters."><code>String</code></a>, and so on&#xA0;&#x2014; including new constructors added as JavaScript evolves), this value is always <code>fun.prototype</code>. For objects created using <code>new fun</code>, where <code>fun</code> is a function defined in a script, this value is the value of <code>fun.prototype</code>. (That is, if the constructor didn&apos;t return an other object explicitly, or the <code>fun.prototype</code> has been reassigned since the instance was created).</p>

<p>The <code>__proto__</code> setter allows the <code>[[Prototype]]</code> of an object to be mutated. The object must be extensible according to <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible" title="The Object.isExtensible() method determines if an object is extensible (whether it can have new properties added to it)."><code>Object.isExtensible()</code></a>: if it is not, a <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="The TypeError object represents an error when a value is not of the expected type."><code>TypeError</code></a> is thrown. The value provided must be an object or <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/null" title="The value null&#xA0;represents the intentional absence of any object value. It is one of JavaScript&apos;s primitive values."><code>null</code></a>. Providing any other value will do nothing.</p>

<p>To understand how prototypes are used for inheritance, see guide article <a href="/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain">Inheritance and the prototype chain</a>.</p>

<p>The <code>__proto__</code> property is a simple accessor property on <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype" title="The Object.prototype property represents the Object prototype object."><code>Object.prototype</code></a> consisting of a getter and setter function. A property access for <code>__proto__</code> that eventually consults <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype" title="The Object.prototype property represents the Object prototype object."><code>Object.prototype</code></a> will find this property, but an access that does not consult <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype" title="The Object.prototype property represents the Object prototype object."><code>Object.prototype</code></a> will not find it. If some other <code>__proto__</code> property is found before <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype" title="The Object.prototype property represents the Object prototype object."><code>Object.prototype</code></a> is consulted, that property will hide the one found on <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype" title="The Object.prototype property represents the Object prototype object."><code>Object.prototype</code></a>.</p>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-additional-properties-of-the-object.prototype-object" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="en-US">The definition of &apos;Object.prototype.__proto__&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Included in the (normative) annex for additional ECMAScript legacy features for Web browsers (note that the specification codifies what is already in implementations).</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-additional-properties-of-the-object.prototype-object" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="en-US">The definition of &apos;Object.prototype.__proto__&apos; in that specification.</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>11</td>
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

<h2 id="Compatibility_notes">Compatibility notes</h2>

<p>While the ECMAScript 2015&#xA0;specification dictates that support for <code>__proto__</code> is required <em>only</em> for web browsers (although being normative), other environments may support it as well for legacy usage.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf" title="The isPrototypeOf() method checks if an object exists in another object&apos;s prototype chain."><code>Object.prototype.isPrototypeOf()</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf" title="The Object.getPrototypeOf() method returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object."><code>Object.getPrototypeOf()</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf" title="The Object.setPrototypeOf() method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null."><code>Object.setPrototypeOf()</code></a></li>
</ul>
                  
                
              