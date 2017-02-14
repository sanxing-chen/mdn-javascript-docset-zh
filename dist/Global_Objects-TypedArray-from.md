
                
                  <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>The <code><strong><em>TypedArray</em>.from()</strong></code> method creates a new <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects">typed array</a> from an array-like or iterable object. This method is nearly the same as <a title="The Array.from() method creates a new Array instance from an array-like or iterable object." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from"><code>Array.from()</code></a>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><code><em>TypedArray</em>.from(source[, mapFn[, thisArg]])
</code>
where <em>TypedArray</em> is one of:

Int8Array
Uint8Array
Uint8ClampedArray
Int16Array
Uint16Array
Int32Array
Uint32Array
Float32Array
Float64Array
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>source</code></dt>
 <dd>An array-like or iterable object to convert to a typed array.</dd>
 <dt><code>mapFn</code></dt>
 <dd>Optional. Map function to call on every element of the typed array.</dd>
 <dt><code>thisArg</code></dt>
 <dd>Optional. Value to use as <code>this</code> when executing <code>mapFn</code>.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A new <a title="A TypedArray object describes an array-like view of an underlying binary data buffer. There is no global property named TypedArray, nor is there a directly visible TypedArray constructor.&#xA0; Instead, there are a number of different global properties, whose values are typed array constructors for specific element types, listed below. On the following pages you will find common properties and methods that can be used with any typed array containing elements of any type." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray"><code>TypedArray</code></a> instance.</p>

<h2 id="Description">Description</h2>

<p><code><em>TypedArray</em>.from()</code> lets you create typed arrays from:</p>

<ul>
 <li>array-like objects (objects with a <code>length</code> property and indexed elements) or</li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/iterable">iterable objects</a> (objects where you can get its elements, such as <a title="The Map object is a simple key/value map. Any value (both objects and primitive values) may be used as either a key or a value." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"><code>Map</code></a> and <a title="The Set object lets you store unique values of any type, whether primitive values or object references." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"><code>Set</code></a>).</li>
</ul>

<p><code><em>TypedArray</em>.from()</code> has an optional parameter <code>mapFn</code>, which allows you to execute a <a title="The map() method creates a new array with the results of calling a provided function on every element in this array." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"><code>map</code></a> function on each element of the typed array (or subclass object) that is being created. More clearly, <code><em>TypedArray</em>.from(obj, mapFn, thisArg)</code> is the same as <code><em>TypedArray</em>.from(Array.prototype.map.call(obj, mapFn, thisArg))</code>.</p>

<p>The <code>length</code> property of the <code>from()</code> method is 1.</p>

<p>Some subtle dinstinctions between <a title="The Array.from() method creates a new Array instance from an array-like or iterable object." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from"><code>Array.from()</code></a> and <code><em>TypedArray</em>.from()</code>:</p>

<ul>
 <li>If the <code>|this|</code> value passed to <code><em>TypedArray</em>.from</code> is not a constructor, <code><em>TypedArray</em>.from</code> will throw a <a title="The TypeError object represents an error when a value is not of the expected type." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a>, where <code>Array.from</code> defaults to creating a new <a title="The JavaScript Array&#xA0;object is a global object that&#xA0;is used in the&#xA0;construction&#xA0;of&#xA0;arrays; which are high-level, list-like objects." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"><code>Array</code></a>.</li>
 <li><code><em>TypedArray</em>.from</code> uses <code>[[Put]]</code> where <code>Array.from</code> uses <code>[[DefineProperty]]</code>. Hence, when working with <a title="The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc)." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy"><code>Proxy</code></a> objects, it calls <a title="The handler.set() method is a trap for setting a property value." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/set"><code>handler.set</code></a> to create new elements rather than <a title="The handler.defineProperty() method is a trap for Object.defineProperty()." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/defineProperty"><code>handler.defineProperty</code></a>.</li>
 <li>When <code>from</code> gets an iterator, the <code><em>TypedArray</em></code> version first collects all the values from the iterator, then creates an instance of <code>|this|</code> using the count, then sets the values on the instance. <code>Array.from</code> sets each value as it gets them from the iterator then sets the length at the end.</li>
 <li>When <code>Array.from</code> gets an array-like which isn&apos;t an iterator, it respects holes, where <code><em>TypedArray</em>.from</code> will ensure the result is dense.</li>
</ul>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">// Set (iterable object)
var s = new Set([1, 2, 3]);
Uint8Array.from(s);
// Uint8Array [ 1, 2, 3 ]


// String
Int16Array.from(&apos;123&apos;);                      
// Int16Array [ 1, 2, 3 ]


// Using an arrow function as the map function to
// manipulate the elements
Float32Array.from([1, 2, 3], x =&gt; x + x);      
// Float32Array [ 2, 4, 6 ]


// Generate a sequence of numbers
Uint8Array.from({length: 5}, (v, k) =&gt; k);    
// Uint8Array [ 0, 1, 2, 3, 4 ]
</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>You can partially work around this by inserting the following code at the beginning of your scripts, allowing use of much of the functionality of <font face="Consolas, Liberation Mono, Courier, monospace">from()</font>&#xA0;in implementations that do not natively support it.</p>

<pre class="brush: js">if (!Int8Array.__proto__.from) {
    (function () {
        Int8Array.__proto__.from = function (obj, func, thisObj) {

            var typedArrayClass = Int8Array.__proto__;
            if(typeof this !== &apos;function&apos;) {
                throw new TypeError(&apos;# is not a constructor&apos;);
            }
            if (this.__proto__ !== typedArrayClass) {
                throw new TypeError(&apos;this is not a typed array.&apos;);
            }
, 
            func = func || function (elem) {
                    return elem;
                };

            if (typeof func !== &apos;function&apos;) {
                throw new TypeError(&apos;specified argument is not a function&apos;);
            }

            obj = Object(obj);
            if (!obj[&apos;length&apos;]) {
                return new this(0);
            }
            var copy_data = [];
            for(var i = 0; i &lt; obj.length; i++) {
                copy_data.push(obj[i]);
            }

            copy_data = copy_data.map(func, thisObj);

            var typed_array = new this(copy_data.length);
            for(var i = 0; i &lt; typed_array.length; i++) {
                typed_array[i] = copy_data[i];
            }
            return typed_array;
        }
    })();
}</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-%typedarray%.from" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="en-US">The definition of &apos;%TypedArray%.from&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-%typedarray%.from" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="en-US">The definition of &apos;%TypedArray%.from&apos; in that specification.</small></a></td>
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
   <td>45.0</td>
   <td><a title="Released on 2015-05-19." href="/en-US/Firefox/Releases/38">38</a> (38)</td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td>10</td>
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
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td>38.0 (38)</td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td>10</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><a title="The TypedArray.of() method creates a new typed array with a variable number of arguments. This method is nearly the same as Array.of()." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/of"><code>TypedArray.of()</code></a></li>
 <li><a title="The Array.from() method creates a new Array instance from an array-like or iterable object." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from"><code>Array.from()</code></a></li>
 <li><a title="The map() method creates a new array with the results of calling a provided function on every element in this array." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"><code>Array.prototype.map()</code></a></li>
</ul>
                
              