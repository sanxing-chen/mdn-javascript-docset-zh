The **`Uint8ClampedArray`** typed array represents an array of 8-bit unsigned integers clamped to 0-255; if you specified a value that is out of the range of [0,255], 0 or 255 will be set instead; if you specify a non-integer, the nearest integer will be set. The contents are initialized to `0`. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).

## Syntax

<pre class="syntaxbox">new Uint8ClampedArray(length);
new Uint8ClampedArray(typedArray);
new Uint8ClampedArray(object);
new Uint8ClampedArray(buffer [, byteOffset [, length]]);</pre>

For more information about the constructor syntax and the parameters, see _[TypedArray](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax)_.

## Properties

<dl>

<dt>[`Uint8ClampedArray.BYTES_PER_ELEMENT`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT "The TypedArray.BYTES_PER_ELEMENT property represents the size in bytes of each element in an typed array.")</dt>

<dd>Returns a number value of the element size. `1` in the case of an `Uint8ClampedArray`.</dd>

<dt>Uint8ClampedArray.length</dt>

<dd>Static length property whose value is 3\. For the actual length (number of elements), see [`Uint8ClampedArray.prototype.length`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length "The length accessor property represents the length (in elements) of a typed array.").</dd>

<dt>[`Uint8ClampedArray.name`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/name "The TypedArray.name property represents a string value of the typed array constructor name.")</dt>

<dd>Returns the string value of the constructor name. In the case of the `Uint8ClampedArray` type: "Uint8ClampedArray".</dd>

<dt>[`Uint8ClampedArray.prototype`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/prototype "The TypedArray.prototype property represents the prototype for TypedArray constructors.")</dt>

<dd>Prototype for the _TypedArray_ objects.</dd>

</dl>

## Methods

<dl>

<dt>[`Uint8ClampedArray.from()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from "The TypedArray.from() method creates a new typed array from an array-like or iterable object. This method is nearly the same as Array.from().")</dt>

<dd>Creates a new `Uint8ClampedArray` from an array-like or iterable object. See also [`Array.from()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from "The Array.from() method creates a new Array instance from an array-like or iterable object.").</dd>

<dt>[`Uint8ClampedArray.of()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/of "The TypedArray.of() method creates a new typed array with a variable number of arguments. This method is nearly the same as Array.of().")</dt>

<dd>Creates a new `Uint8ClampedArray` with a variable number of arguments. See also [`Array.of()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of "The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.").</dd>

</dl>

## `Uint8ClampedArray` prototype

All `Uint8ClampedArray` objects inherit from [`%TypedArray%.prototype`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/prototype "The TypedArray.prototype property represents the prototype for TypedArray constructors.").

### Properties

<dl>

<dt>`Uint8ClampedArray.prototype.constructor`</dt>

<dd>Returns the function that created an instance's prototype. This is the `Uint8ClampedArray` constructor by default.</dd>

<dt>[`Uint8ClampedArray.prototype.buffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/buffer "The buffer accessor property represents the ArrayBuffer referenced by a TypedArray at construction time.") <span class="inlineIndicator readOnly readOnlyInline" title="This value may not be changed.">Read only</span></dt>

<dd>Returns the [`ArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. You cannot directly manipulate the contents of an ArrayBuffer; instead, you create one of the typed array objects or a DataView object which represents the buffer in a specific format, and use that to read and write the contents of the buffer.") referenced by the `Uint8ClampedArray` Fixed at construction time and thus **read only**.</dd>

<dt>[`Uint8ClampedArray.prototype.byteLength`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteLength "The byteLength accessor property represents the length (in bytes) of a typed array.") <span class="inlineIndicator readOnly readOnlyInline" title="This value may not be changed.">Read only</span></dt>

<dd>Returns the length (in bytes) of the `Uint8ClampedArray` from the start of its [`ArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. You cannot directly manipulate the contents of an ArrayBuffer; instead, you create one of the typed array objects or a DataView object which represents the buffer in a specific format, and use that to read and write the contents of the buffer."). Fixed at construction time and thus **read only.**</dd>

<dt>[`Uint8ClampedArray.prototype.byteOffset`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset "The byteOffset accessor property represents the offset (in bytes) of a typed array from the start of its ArrayBuffer.") <span class="inlineIndicator readOnly readOnlyInline" title="This value may not be changed.">Read only</span></dt>

<dd>Returns the offset (in bytes) of the `Uint8ClampedArray` from the start of its [`ArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. You cannot directly manipulate the contents of an ArrayBuffer; instead, you create one of the typed array objects or a DataView object which represents the buffer in a specific format, and use that to read and write the contents of the buffer."). Fixed at construction time and thus **read only.**</dd>

<dt>[`Uint8ClampedArray.prototype.length`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length "The length accessor property represents the length (in elements) of a typed array.") <span class="inlineIndicator readOnly readOnlyInline" title="This value may not be changed.">Read only</span></dt>

<dd>Returns the number of elements hold in the `UintClamped8Array`. Fixed at construction time and thus **read only.**</dd>

</dl>

### Methods

<dl>

<dt>[`Uint8ClampedArray.prototype.copyWithin()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin "The copyWithin() method copies the sequence of array elements within the array to the position starting at target. The copy is taken from the index positions of the second and third arguments start and end. The end argument is optional and defaults to the length of the array. This method has the same algorithm as Array.prototype.copyWithin. TypedArray is one of the typed array types here.")</dt>

<dd>Copies a sequence of array elements within the array. See also [`Array.prototype.copyWithin()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin "The copyWithin() method shallow copies part of an array to another location in the same array and returns it, without modifying its size.").</dd>

<dt>[`Uint8ClampedArray.prototype.entries()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/entries "The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.")</dt>

<dd>Returns a new `Array Iterator` object that contains the key/value pairs for each index in the array. See also [`Array.prototype.entries()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries "The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.").</dd>

<dt>[`Uint8ClampedArray.prototype.every()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/every "The every() method tests whether all elements in the typed array pass the test implemented by the provided function. This method has the same algorithm as Array.prototype.every(). TypedArray is one of the typed array types here.")</dt>

<dd>Tests whether all elements in the array pass the test provided by a function. See also [`Array.prototype.every()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every "The every() method tests whether all elements in the array pass the test implemented by the provided function.").</dd>

<dt>[`Uint8ClampedArray.prototype.fill()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/fill "The fill() method fills all the elements of a typed array from a start index to an end index with a static value. This method has the same algorithm as Array.prototype.fill(). TypedArray is one of the typed array types here.")</dt>

<dd>Fills all the elements of an array from a start index to an end index with a static value. See also [`Array.prototype.fill()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill "The fill() method fills all the elements of an array from a start index to an end index with a static value.").</dd>

<dt>[`Uint8ClampedArray.prototype.filter()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/filter "The filter() method creates a new typed array with all elements that pass the test implemented by the provided function. This method has the same algorithm as Array.prototype.filter(). TypedArray is one of the typed array types here.")</dt>

<dd>Creates a new array with all of the elements of this array for which the provided filtering function returns true. See also [`Array.prototype.filter()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter "The filter() method creates a new array with all elements that pass the test implemented by the provided function.").</dd>

<dt>[`Uint8ClampedArray.prototype.find()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/find "The find() method returns a value in the typed array, if an element satisfies the provided testing function. Otherwise undefined is returned. TypedArray is one of the typed array types here.")</dt>

<dd>Returns the found value in the array, if an element in the array satisfies the provided testing function or `undefined` if not found. See also [`Array.prototype.find()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find "The find() method returns a value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.").</dd>

<dt>[`Uint8ClampedArray.prototype.findIndex()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex "The findIndex() method returns an index in the typed array, if an element in the typed array satisfies the provided testing function. Otherwise -1 is returned.")</dt>

<dd>Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found. See also [`Array.prototype.findIndex()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex "The findIndex() method returns an index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.").</dd>

<dt>[`Uint8ClampedArray.prototype.forEach()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/forEach "The forEach() method executes a provided function once per array element. This method has the same algorithm as Array.prototype.forEach(). TypedArray is one of the typed array types here.")</dt>

<dd>Calls a function for each element in the array. See also [`Array.prototype.forEach()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach "The forEach() method executes a provided function once for each array element.").</dd>

<dt>[`Uint8ClampedArray.prototype.includes()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes "The includes() method determines whether a typed array includes a certain element, returning true or false as appropriate. This method has the same algorithm as Array.prototype.includes(). TypedArray is one of the typed array types here.")<span title="This is an experimental API that should not be used in production code."></span></dt>

<dd>Determines whether a typed array includes a certain element, returning `true` or `false` as appropriate. See also [`Array.prototype.includes()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes "The includes() method determines whether an array includes a certain element, returning true or false as appropriate.").</dd>

<dt>[`Uint8ClampedArray.prototype.indexOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf "The indexOf() method returns the first index at which a given element can be found in the typed array, or -1 if it is not present. This method has the same algorithm as Array.prototype.indexOf(). TypedArray is one of the typed array types here.")</dt>

<dd>Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found. See also [`Array.prototype.indexOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.").</dd>

<dt>[`Uint8ClampedArray.prototype.join()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/join "The join() method joins all elements of an array into a string. This method has the same algorithm as Array.prototype.join(). TypedArray is one of the typed array types here.")</dt>

<dd>Joins all elements of an array into a string. See also [`Array.prototype.join()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join "The join() method joins all elements of an array (or an array-like object) into a string.").</dd>

<dt>[`Uint8ClampedArray.prototype.keys()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/keys "The keys() method returns a new Array Iterator object that contains the keys for each index in the array.")</dt>

<dd>Returns a new `Array Iterator` that contains the keys for each index in the array. See also [`Array.prototype.keys()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys "The keys() method returns a new Array Iterator that contains the keys for each index in the array.").</dd>

<dt>[`Uint8ClampedArray.prototype.lastIndexOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf "The lastIndexOf() method returns the last index at which a given element can be found in the typed array, or -1 if it is not present. The typed array is searched backwards, starting at fromIndex. This method has the same algorithm as Array.prototype.lastIndexOf(). TypedArray is one of the typed array types here.")</dt>

<dd>Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found. See also [`Array.prototype.lastIndexOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf "The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.").</dd>

<dt>[`Uint8ClampedArray.prototype.map()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map "The map() method creates a new typed array with the results of calling a provided function on every element in this typed array. This method has the same algorithm as Array.prototype.map(). TypedArray is one of the typed array types here.")</dt>

<dd>Creates a new array with the results of calling a provided function on every element in this array. See also [`Array.prototype.map()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map "The map() method creates a new array with the results of calling a provided function on every element in this array.").</dd>

<dt>[`Uint8ClampedArray.prototype.move()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/move "The move() method used to copy the sequence of array elements within the array to the position starting at target. However, this non-standard method has been replaced with the standard TypedArray.prototype.copyWithin() method. TypedArray is one of the typed array types here.") <span title="This API has not been standardized."></span><span class="inlineIndicator unimplemented unimplementedInline">Unimplemented</span></dt>

<dd>Former non-standard version of [`Uint8ClampedArray.prototype.copyWithin()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin "The copyWithin() method copies the sequence of array elements within the array to the position starting at target. The copy is taken from the index positions of the second and third arguments start and end. The end argument is optional and defaults to the length of the array. This method has the same algorithm as Array.prototype.copyWithin. TypedArray is one of the typed array types here.").</dd>

<dt>[`Uint8ClampedArray.prototype.reduce()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduce "The reduce() method applies a function against an accumulator and each value of the typed array (from left-to-right) has to reduce it to a single value. This method has the same algorithm as Array.prototype.reduce(). TypedArray is one of the typed array types here.")</dt>

<dd>Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value. See also [`Array.prototype.reduce()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce "The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.").</dd>

<dt>[`Uint8ClampedArray.prototype.reduceRight()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduceRight "The reduceRight() method applies a function against an accumulator and each value of the typed array (from right-to-left) has to reduce it to a single value. This method has the same algorithm as Array.prototype.reduceRight(). TypedArray is one of the typed array types here.")</dt>

<dd>Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value. See also [`Array.prototype.reduceRight()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight "The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) has to reduce it to a single value.").</dd>

<dt>[`Uint8ClampedArray.prototype.reverse()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reverse "The reverse() method reverses a typed array in place. The first typed array element becomes the last and the last becomes the first. This method has the same algorithm as Array.prototype.reverse(). TypedArray is one of the typed array types here.")</dt>

<dd>Reverses the order of the elements of an array — the first becomes the last, and the last becomes the first. See also [`Array.prototype.reverse()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse "The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.").</dd>

<dt>[`Uint8ClampedArray.prototype.set()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set "The set() method stores multiple values in the typed array, reading input values from a specified array.")</dt>

<dd>Stores multiple values in the typed array, reading input values from a specified array.</dd>

<dt>[`Uint8ClampedArray.prototype.slice()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/slice "The slice() method returns a shallow copy of a portion of a typed array into a new typed array object. This method has the same algorithm as Array.prototype.slice(). TypedArray is one of the typed array types here.")</dt>

<dd>Extracts a section of an array and returns a new array. See also [`Array.prototype.slice()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice "The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.").</dd>

<dt>[`Uint8ClampedArray.prototype.some()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/some "The some() method tests whether some element in the typed array passes the test implemented by the provided function. This method has the same algorithm as Array.prototype.some(). TypedArray is one of the typed array types here.")</dt>

<dd>Returns true if at least one element in this array satisfies the provided testing function. See also [`Array.prototype.some()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some "The some() method tests whether some element in the array passes the test implemented by the provided function.").</dd>

<dt>[`Uint8ClampedArray.prototype.sort()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/sort "The sort() method sorts the elements of a typed array in place and returns the typed array. This method has the same algorithm as Array.prototype.sort(). TypedArray is one of the typed array types here.")</dt>

<dd>Sorts the elements of an array in place and returns the array. See also [`Array.prototype.sort()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort "The sort() method sorts the elements of an array in place and returns the array. The sort is not necessarily stable. The default sort order is according to string Unicode code points.").</dd>

<dt>[`Uint8ClampedArray.prototype.subarray()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray "The subarray() method returns a new TypedArray on the same ArrayBuffer store and with the same element types as for this TypedArray object. The begin offset is inclusive and the end offset is exclusive. TypedArray is one of the typed array types.")</dt>

<dd>Returns a new `Uint8ClampedArray` from the given start and end element index.</dd>

<dt>[`Uint8ClampedArray.prototype.values()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/values "The values() method returns a new Array Iterator object that contains the values for each index in the array.")</dt>

<dd>Returns a new `Array Iterator` object that contains the values for each index in the array. See also [`Array.prototype.values()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values "The values() method returns a new Array Iterator object that contains the values for each index in the array.").</dd>

<dt>[`Uint8ClampedArray.prototype.toLocaleString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toLocaleString "The toLocaleString() method returns a string representing the elements of the typed array. The elements are converted to strings and are separated by a locale-specific string (such as a comma “,”). This method has the same algorithm as Array.prototype.toLocaleString() and, as the typed array elements are numbers, the same algorithm as Number.prototype.toLocaleString() applies for each element. TypedArray is one of the typed array types here.")</dt>

<dd>Returns a localized string representing the array and its elements. See also [`Array.prototype.toLocaleString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString "The toLocaleString() method returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma “,”).").</dd>

<dt>[`Uint8ClampedArray.prototype.toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toString "The toString() method returns a string representing the specified array and its elements. This method has the same algorithm as Array.prototype.toString(). TypedArray is one of the typed array types here.")</dt>

<dd>Returns a string representing the array and its elements. See also [`Array.prototype.toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString "The toString() method returns a string representing the specified array and its elements.").</dd>

<dt>[`Uint8ClampedArray.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator "The initial value of the @@iterator property is the same function object as the initial value of the values property.")</dt>

<dd>Returns a new `Array Iterator` object that contains the values for each index in the array.</dd>

</dl>

## Examples

Different ways to create a `Uint8ClampedArray`:

<pre class="brush: js">// From a length
var uintc8 = new Uint8ClampedArray(2);
uintc8[0] = 42;
uintc8[1] = 1337;
console.log(uintc8[0]); // 42
console.log(uintc8[1]); // 255 (clamped)
console.log(uintc8.length); // 2
console.log(uintc8.BYTES_PER_ELEMENT); // 1

// From an array
var arr = new Uint8ClampedArray([21,31]);
console.log(arr[1]); // 31

// From another TypedArray
var x = new Uint8ClampedArray([21, 31]);
var y = new Uint8ClampedArray(x);
console.log(y[0]); // 21

// From an ArrayBuffer
var buffer = new ArrayBuffer(8);
var z = new Uint8ClampedArray(buffer, 1, 4);

// From an iterable 
var iterable = function*(){ yield* [1,2,3]; }(); 
var uintc8 = new Uint8ClampedArray(iterable); 
// Uint8ClampedArray[1, 2, 3]
</pre>

## Specifications

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[Typed Array Specification](https://www.khronos.org/registry/typedarray/specs/latest/ "The 'Typed Array Specification' specification")</td>

<td><span class="spec-Obsolete">Obsolete</span></td>

<td>Superseded by ECMAScript 2015.</td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="en-US">The definition of 'TypedArray constructors' in that specification.</small>](http://www.ecma-international.org/ecma-262/6.0/#table-49)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition in an ECMA standard. Specified that `new` is required.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="en-US">The definition of 'TypedArray constructors' in that specification.</small>](https://tc39.github.io/ecma262/#table-49)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

</tbody>

</table>

## Browser compatibility

<div class="htab"><a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>

*   <a>Desktop</a>
*   <a>Mobile</a>

</div>

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

<td>7.0</td>

<td>[4.0](/en-US/Firefox/Releases/4 "Released on 2011-03-22.") (2)</td>

<td>11 (as of [KB2929437](https://support.microsoft.com/en-us/kb/2929437))</td>

<td>11.6</td>

<td>5.1</td>

</tr>

<tr>

<td>`new` is required</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>[44](/en-US/Firefox/Releases/44 "Released on 2016-01-26.") (44)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

<tr>

<td>Iterable in constructor</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>[52](/en-US/Firefox/Releases/52 "Released on 2017-03-07.") (52)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

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

<td>4.0 (2)</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>11.6</td>

<td>4.2</td>

</tr>

<tr>

<td>`new` is required</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>44.0 (44)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

<tr>

<td>Iterable in constructor</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>52.0 (52)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

</tbody>

</table>

</div>

## Compatibility notes

Starting with ECMAScript 2015, `Uint8ClampedArray` constructors require to be constructed with a [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new "The new operator creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function.") operator. Calling a `Uint8ClampedArray` constructor as a function without `new`, will throw a [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError "The TypeError object represents an error when a value is not of the expected type.") from now on.

<pre class="brush: js example-bad">var dv = Uint8ClampedArray([1, 2, 3]);
// TypeError: calling a builtin Uint8ClampedArray constructor
// without new is forbidden</pre>

<pre class="brush: js example-good">var dv = new Uint8ClampedArray([1, 2, 3]);</pre>

## See also

*   [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
*   [`ArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. You cannot directly manipulate the contents of an ArrayBuffer; instead, you create one of the typed array objects or a DataView object which represents the buffer in a specific format, and use that to read and write the contents of the buffer.")
*   [`DataView`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView "The DataView view provides a low-level interface for reading and writing multiple number types in an ArrayBuffer irrespective of the platform's endianness.")