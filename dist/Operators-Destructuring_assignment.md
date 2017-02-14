
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p><strong>&#x89E3;&#x6784;&#x8D4B;&#x503C;&#xFF08;destructuring assignment&#xFF09;&#x8BED;&#x6CD5;</strong>&#x662F;&#x4E00;&#x4E2A;Javascript&#x8868;&#x8FBE;&#x5F0F;&#xFF0C;&#x5B83;&#x4F7F;&#x5F97;&#x4ECE;&#x6570;&#x7EC4;&#x6216;&#x8005;&#x5BF9;&#x8C61;&#x4E2D;&#x63D0;&#x53D6;&#x6570;&#x636E;&#x8D4B;&#x503C;&#x7ED9;&#x4E0D;&#x540C;&#x7684;&#x53D8;&#x91CF;&#x6210;&#x4E3A;&#x53EF;&#x80FD;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="brush: js">var a, b, rest;
[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

({a, b} = {a:1, b:2});
console.log(a); // 1
console.log(b); // 2

// ES7 - not implemented in Firefox 47a01
({a, b, ...rest} = {a:1, b:2, c:3, d:4});</pre>

<h2 id="&#x7B80;&#x8FF0;">&#x7B80;&#x8FF0;</h2>

<p>&#x5BF9;&#x8C61;&#x5B57;&#x9762;&#x91CF;&#x548C;&#x6570;&#x7EC4;&#x5B57;&#x9762;&#x91CF;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x79CD;&#x7B80;&#x5355;&#x7684;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x7279;&#x5B9A;&#x7684;&#x6570;&#x636E;&#x7EC4;&#x7684;&#x65B9;&#x6CD5;&#x3002;</p>

<pre class="brush: js">var x = [1, 2, 3, 4, 5];</pre>

<p>&#x89E3;&#x6784;&#x8D4B;&#x503C;&#x4F7F;&#x7528;&#x4E86;&#x76F8;&#x540C;&#x7684;&#x8BED;&#x6CD5;&#xFF0C;&#x4E0D;&#x540C;&#x7684;&#x662F;&#x5728;&#x8868;&#x8FBE;&#x5F0F;&#x5DE6;&#x8FB9;&#x5B9A;&#x4E49;&#x4E86;&#x8981;&#x4ECE;&#x539F;&#x53D8;&#x91CF;&#x4E2D;&#x53D6;&#x51FA;&#x4EC0;&#x4E48;&#x53D8;&#x91CF;&#x3002;</p>

<pre class="brush: js">var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y); // 1
console.log(z); // 2
</pre>

<p>&#x89E3;&#x6784;&#x8D4B;&#x503C;&#x7684;&#x4F5C;&#x7528;&#x7C7B;&#x4F3C;&#x4E8E;Perl&#x548C;Python&#x8BED;&#x8A00;&#x4E2D;&#x7684;&#x76F8;&#x4F3C;&#x7279;&#x6027;&#x3002;</p>

<h2 id="&#x89E3;&#x6784;&#x6570;&#x7EC4;">&#x89E3;&#x6784;&#x6570;&#x7EC4;</h2>

<h3 id="&#x57FA;&#x672C;&#x53D8;&#x91CF;&#x8D4B;&#x503C;">&#x57FA;&#x672C;&#x53D8;&#x91CF;&#x8D4B;&#x503C;</h3>

<pre class="brush: js">var foo = [&quot;one&quot;, &quot;two&quot;, &quot;three&quot;];

var [one, two, three] = foo;
console.log(one); // &quot;one&quot;
console.log(two); // &quot;two&quot;
console.log(three); // &quot;three&quot;</pre>

<h3 id="&#x58F0;&#x660E;&#x8D4B;&#x503C;&#x5206;&#x79BB;">&#x58F0;&#x660E;&#x8D4B;&#x503C;&#x5206;&#x79BB;</h3>

<p>&#x901A;&#x8FC7;&#x89E3;&#x6784;&#x5206;&#x79BB;&#x53D8;&#x91CF;&#x7684;&#x58F0;&#x660E;&#xFF0C;&#x53EF;&#x4EE5;&#x4E3A;&#x4E00;&#x4E2A;&#x53D8;&#x91CF;&#x8D4B;&#x503C;&#x3002;</p>

<pre class="brush: js">var a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2</pre>

<h3 id="&#x9ED8;&#x8BA4;&#x503C;">&#x9ED8;&#x8BA4;&#x503C;</h3>

<p>&#x4E3A;&#x4E86;&#x9632;&#x6B62;&#x4ECE;&#x6570;&#x7EC4;&#x4E2D;&#x53D6;&#x51FA;&#x4E00;&#x4E2A;&#x503C;&#x4E3A;<code>undefined&#x7684;&#x5BF9;&#x8C61;&#xFF0C;&#x53EF;&#x4EE5;&#x4E3A;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x8BBE;&#x7F6E;&#x9ED8;&#x8BA4;&#x503C;&#x3002;</code></p>

<pre class="brush: js">var a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7</pre>

<h3 id="&#x4EA4;&#x6362;&#x53D8;&#x91CF;">&#x4EA4;&#x6362;&#x53D8;&#x91CF;</h3>

<p>&#x5728;&#x4E00;&#x4E2A;&#x89E3;&#x6784;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#x53EF;&#x4EE5;&#x4EA4;&#x6362;&#x4E24;&#x4E2A;&#x53D8;&#x91CF;&#x7684;&#x503C;&#x3002;</p>

<p>&#x6CA1;&#x6709;&#x89E3;&#x6784;&#x8D4B;&#x503C;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x4EA4;&#x6362;&#x4E24;&#x4E2A;&#x53D8;&#x91CF;&#x9700;&#x8981;&#x4E00;&#x4E2A;&#x4E34;&#x65F6;&#x53D8;&#x91CF; (&#x6216;&#x8005;&#x7528;&#x4F4E;&#x7EA7;&#x8BED;&#x8A00;&#x4E2D;&#x7684;<a href="http://en.wikipedia.org/wiki/XOR_swap" class="external">XOR-swap&#x6280;&#x5DE7;</a>&#xFF09;&#x3002;</p>

<pre class="brush: js">var a = 1;
var b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1</pre>

<h3 id="&#x89E3;&#x6790;&#x4E00;&#x4E2A;&#x4ECE;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x7684;&#x6570;&#x7EC4;">&#x89E3;&#x6790;&#x4E00;&#x4E2A;&#x4ECE;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x7684;&#x6570;&#x7EC4;</h3>

<p>&#x4ECE;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x662F;&#x5341;&#x5206;&#x5E38;&#x89C1;&#x7684;&#x60C5;&#x51B5;.&#x3002;&#x89E3;&#x6784;&#x4F7F;&#x5F97;&#x5904;&#x7406;&#x8FD4;&#x56DE;&#x503C;&#x4E3A;&#x6570;&#x7EC4;&#x65F6;&#x66F4;&#x52A0;&#x65B9;&#x4FBF;&#x3002;</p>

<p>&#x5728;&#x4E0B;&#x9762;&#x4F8B;&#x5B50;&#x4E2D;&#xFF0C;<code>[1, 2]</code>&#xA0;&#x4F5C;&#x4E3A;&#x51FD;&#x6570;&#x7684;&#xA0;<code>f()</code>&#xA0;&#x7684;&#x8F93;&#x51FA;&#x503C;&#xFF0C;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x89E3;&#x6784;&#x7528;&#x4E00;&#x53E5;&#x8BDD;&#x5B8C;&#x6210;&#x89E3;&#x6790;&#x3002;</p>

<pre class="brush: js">function f() {
  return [1, 2];
}

var a, b; 
[a, b] = f(); 
console.log(a); // 1
console.log(b); // 2</pre>

<p>&#x611F;&#x8C22;&#x89E3;&#x6784;&#x8D4B;&#x503C;&#xFF0C;&#x51FD;&#x6570;&#x73B0;&#x5728;&#x53EF;&#x4EE5;&#x8FD4;&#x56DE;&#x591A;&#x4E2A;&#x503C;&#x4E86;&#x3002;&#x5C3D;&#x7BA1;&#x51FD;&#x6570;&#x4E00;&#x76F4;&#x90FD;&#x53EF;&#x4EE5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#xFF0C;&#x4F46;&#x73B0;&#x5728;&#x8FD9;&#x6837;&#x505A;&#x6709;&#x66F4;&#x591A;&#x7684;&#x7075;&#x6D3B;&#x6027;&#x3002;</p>

<h3 id="&#x5FFD;&#x7565;&#x67D0;&#x4E9B;&#x8FD4;&#x56DE;&#x503C;">&#x5FFD;&#x7565;&#x67D0;&#x4E9B;&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x4F60;&#x4E5F;&#x53EF;&#x4EE5;&#x5FFD;&#x7565;&#x4F60;&#x4E0D;&#x611F;&#x5174;&#x8DA3;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#xFF1A;</p>

<pre class="brush:js">function f() {
  return [1, 2, 3];
}

var [a, , b] = f();
console.log(a); // 1
console.log(b); // 3</pre>

<p>&#x4F60;&#x4E5F;&#x53EF;&#x4EE5;&#x5FFD;&#x7565;&#x5168;&#x90E8;&#x8FD4;&#x56DE;&#x503C;&#x3002;&#x4F8B;&#x5982;&#xFF1A;</p>

<pre class="brush:js">[,,] = f();
</pre>

<h3 id="&#x5C06;&#x5269;&#x4F59;&#x6570;&#x7EC4;&#x8D4B;&#x503C;&#x7ED9;&#x4E00;&#x4E2A;&#x53D8;&#x91CF;">&#x5C06;&#x5269;&#x4F59;&#x6570;&#x7EC4;&#x8D4B;&#x503C;&#x7ED9;&#x4E00;&#x4E2A;&#x53D8;&#x91CF;</h3>

<p>&#x5F53;&#x89E3;&#x6784;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x65F6;&#xFF0C;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x5269;&#x4F59;&#x6A21;&#x5F0F;&#xFF0C;&#x5C06;&#x6570;&#x7EC4;&#x5269;&#x4F59;&#x90E8;&#x5206;&#x8D4B;&#x503C;&#x7ED9;&#x4E00;&#x4E2A;&#x53D8;&#x91CF;&#x3002;</p>

<pre class="brush: js">var [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]</pre>

<h3 id="&#x7528;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5339;&#x914D;&#x63D0;&#x53D6;&#x503C;">&#x7528;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5339;&#x914D;&#x63D0;&#x53D6;&#x503C;</h3>

<p><code><font face="Open Sans, Arial, sans-serif">&#x7528;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x65B9;&#x6CD5;</font><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec">exec()</a>&#x5339;&#x914D;&#x5B57;&#x7B26;&#x4E32;&#x4F1A;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#xFF0C;&#x8BE5;&#x6570;&#x7EC4;&#x7B2C;&#x4E00;&#x4E2A;&#x503C;&#x662F;&#x5B8C;&#x5168;&#x5339;&#x914D;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x7136;&#x540E;&#x7684;&#x503C;&#x662F;&#x5339;&#x914D;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x62EC;&#x53F7;&#x5185;&#x5185;&#x5BB9;&#x90E8;&#x5206;&#x3002;&#x89E3;&#x6784;&#x8D4B;&#x503C;&#x5141;&#x8BB8;&#x4F60;&#x8F7B;&#x6613;&#x5730;&#x63D0;&#x53D6;&#x51FA;&#x9700;&#x8981;&#x7684;&#x90E8;&#x5206;&#xFF0C;&#x5FFD;&#x7565;&#x5B8C;&#x5168;&#x5339;&#x914D;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x2014;&#x2014;&#x5982;&#x679C;&#x4E0D;&#x9700;&#x8981;&#x7684;&#x8BDD;</code>&#x3002;</p>

<pre class="brush: js">var url = &quot;https://developer.mozilla.org/en-US/Web/JavaScript&quot;;

var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
console.log(parsedURL); // [&quot;https://developer.mozilla.org/en-US/Web/JavaScript&quot;, &quot;https&quot;, &quot;developer.mozilla.org&quot;, &quot;en-US/Web/JavaScript&quot;]

var [, protocol, fullhost, fullpath] = parsedURL;

console.log(protocol); // &quot;https&quot;</pre>

<h2 id="&#x89E3;&#x6784;&#x5BF9;&#x8C61;">&#x89E3;&#x6784;&#x5BF9;&#x8C61;</h2>

<h3 id="&#x7B80;&#x5355;&#x793A;&#x4F8B;">&#x7B80;&#x5355;&#x793A;&#x4F8B;</h3>

<pre class="brush: js">var o = {p: 42, q: true};
var {p, q} = o;

console.log(p); // 42
console.log(q); // true 

// &#x7528;&#x65B0;&#x53D8;&#x91CF;&#x540D;&#x8D4B;&#x503C;
var {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true &#xA0;</pre>

<h3 id="&#x51FD;&#x6570;&#x53C2;&#x6570;&#x9ED8;&#x8BA4;&#x503C;">&#x51FD;&#x6570;&#x53C2;&#x6570;&#x9ED8;&#x8BA4;&#x503C;</h3>

<h4 id="ES5&#x7248;&#x672C;">ES5&#x7248;&#x672C;</h4>

<pre class="brush: js">function drawES5Chart(options) {
  options = options === undefined ? {} : options;
  var size = options.size === undefined ? &apos;big&apos; : options.size;
  var cords = options.cords === undefined ? { x: 0, y: 0 } : options.cords;
  var radius = options.radius === undefined ? 25 : options.radius;
  console.log(size, cords, radius);
  // now finally do some chart drawing
}

drawES5Chart({
  cords: { x: 18, y: 30 },
  radius: 30
});</pre>

<h4 id="ES6&#x7248;&#x672C;">ES6&#x7248;&#x672C;</h4>

<pre class="brush: js">function drawES6Chart({size = &apos;big&apos;, cords = { x: 0, y: 0 }, radius = 25} = {}) 
{
  console.log(size, cords, radius);
  // do some chart drawing
}

drawES6Chart({
  cords: { x: 18, y: 30 },
  radius: 30
});</pre>

<div class="note">
<p>Firefox&#x4E2D;&#xFF0C;<strong>&#x89E3;&#x6784;&#x8D4B;&#x503C;&#x9ED8;&#x8BA4;&#x503C;</strong>&#x8FD8;&#x672A;&#x88AB;&#x5B9E;&#x65BD;: var { x = 3 } = {}&#x548C;var [foo = &quot;bar&quot;] = []&#x3002;&#x51FD;&#x6570;&#x4E2D;&#x7684;&#x89E3;&#x6784;&#x9ED8;&#x8BA4;&#x503C;&#x8BF7;&#x53C2;&#x8003;<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=932080" class="external" title="FIXED: Support default values in destructuring">bug&#xA0;932080</a>&#x3002;</p>
</div>

<h3 id="&#x52A0;&#x8F7D;&#x6A21;&#x5757;">&#x52A0;&#x8F7D;&#x6A21;&#x5757;</h3>

<p>&#x89E3;&#x6784;&#x8D4B;&#x503C;&#x53EF;&#x4EE5;&#x5E2E;&#x52A9;&#x52A0;&#x8F7D;&#x4E00;&#x4E2A;&#x6A21;&#x5757;&#x7684;&#x7279;&#x5B9A;&#x5B50;&#x96C6;&#xFF0C;&#x50CF;<a href="/en-US/Add-ons/SDK">Add-on SDK</a>&#x4E2D;:</p>

<pre class="brush: js">const { Loader, main } = require(&apos;toolkit/loader&apos;);
</pre>

<h3 id="&#x89E3;&#x6784;&#x5D4C;&#x5957;&#x5BF9;&#x8C61;&#x548C;&#x6570;&#x7EC4;">&#x89E3;&#x6784;&#x5D4C;&#x5957;&#x5BF9;&#x8C61;&#x548C;&#x6570;&#x7EC4;</h3>

<pre class="brush:js">var metadata = {
&#xA0;&#xA0;&#xA0; title: &quot;Scratchpad&quot;,
&#xA0;&#xA0;&#xA0; translations: [
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; {
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; locale: &quot;de&quot;,
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; localization_tags: [ ],
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; last_edit: &quot;2014-04-14T08:43:37&quot;,
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; url: &quot;/de/docs/Tools/Scratchpad&quot;,
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; title: &quot;JavaScript-Umgebung&quot;
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; }
&#xA0;&#xA0;&#xA0; ],
&#xA0;&#xA0;&#xA0; url: &quot;/en-US/docs/Tools/Scratchpad&quot;
};

var { title: englishTitle, translations: [{ title: localeTitle }] } = metadata;

console.log(englishTitle); // &quot;Scratchpad&quot;
console.log(localeTitle);&#xA0; // &quot;JavaScript-Umgebung&quot;</pre>

<h3 id="For_of_&#x8FED;&#x4EE3;&#x548C;&#x89E3;&#x6784;">For of &#x8FED;&#x4EE3;&#x548C;&#x89E3;&#x6784;</h3>

<pre class="brush: js">var people = [
&#xA0; {
&#xA0;&#xA0;&#xA0; name: &quot;Mike Smith&quot;,
&#xA0;&#xA0;&#xA0; family: {
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; mother: &quot;Jane Smith&quot;,
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; father: &quot;Harry Smith&quot;,
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; sister: &quot;Samantha Smith&quot;
&#xA0;&#xA0;&#xA0; },
&#xA0;&#xA0;&#xA0; age: 35
&#xA0; },
&#xA0; {
&#xA0;&#xA0;&#xA0; name: &quot;Tom Jones&quot;,
&#xA0;&#xA0;&#xA0; family: {
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; mother: &quot;Norah Jones&quot;,
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; father: &quot;Richard Jones&quot;,
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; brother: &quot;Howard Jones&quot;
&#xA0;&#xA0;&#xA0; },
&#xA0;&#xA0;&#xA0; age: 25
&#xA0; }
];

for (var {name: n, family: { father: f } } of people) {
  console.log(&quot;Name: &quot; + n + &quot;, Father: &quot; + f);
}

// &quot;Name: Mike Smith, Father: Harry Smith&quot;
// &quot;Name: Tom Jones, Father: Richard Jones&quot;</pre>

<h3 id="&#x4ECE;&#x4F5C;&#x4E3A;&#x51FD;&#x6570;&#x5B9E;&#x53C2;&#x7684;&#x5BF9;&#x8C61;&#x4E2D;&#x63D0;&#x53D6;&#x6570;&#x636E;">&#x4ECE;&#x4F5C;&#x4E3A;&#x51FD;&#x6570;&#x5B9E;&#x53C2;&#x7684;&#x5BF9;&#x8C61;&#x4E2D;&#x63D0;&#x53D6;&#x6570;&#x636E;</h3>

<pre class="brush:js">function userId({id}) {
  return id;
}

function whois({displayName: displayName, fullName: {firstName: name}}){
  console.log(displayName + &quot; is &quot; + name);
}

var user = { 
  id: 42, 
  displayName: &quot;jdoe&quot;,
  fullName: { 
      firstName: &quot;John&quot;,
      lastName: &quot;Doe&quot;
  }
};

console.log(&quot;userId: &quot; + userId(user)); // &quot;userId: 42&quot;
whois(user); // &quot;jdoe is John&quot;</pre>

<p>&#x8FD9;&#x6BB5;&#x4EE3;&#x7801;&#x4ECE;user&#x5BF9;&#x8C61;&#x4E2D;&#x63D0;&#x53D6;&#x5E76;&#x8F93;&#x51FA;<code>id<font face="Open Sans, Arial, sans-serif">&#x3001;</font></code><code>displayName</code>&#x548C;<code>firstName</code>&#x3002;</p>

<h3 id="&#x5BF9;&#x8C61;&#x5C5E;&#x6027;&#x8BA1;&#x7B97;&#x540D;&#x548C;&#x89E3;&#x6784;">&#x5BF9;&#x8C61;&#x5C5E;&#x6027;&#x8BA1;&#x7B97;&#x540D;&#x548C;&#x89E3;&#x6784;</h3>

<p>&#x8BA1;&#x7B97;&#x5C5E;&#x6027;&#x540D;&#xFF0C;&#x5982;<a href="/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names">object literals</a>&#xFF0C;&#x53EF;&#x4EE5;&#x88AB;&#x89E3;&#x6784;&#x3002;</p>

<pre class="brush: js">let key = &quot;z&quot;;
let { [key]: foo } = { z: &quot;bar&quot; };

console.log(foo); // &quot;bar&quot;
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
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-destructuring-assignment" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Destructuring assignment</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-destructuring-assignment" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Destructuring assignment</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
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
   <th>Edge</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>49.0</td>
   <td><a href="/en-US/Firefox/Releases/2" title="Released on 2006-10-24.">2.0</a> (1.8.1)</td>
   <td>14</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>7.1</td>
  </tr>
  <tr>
   <td>Computed property names</td>
   <td>49.0</td>
   <td><a href="/en-US/Firefox/Releases/34" title="Released on 2014-12-01.">34</a> (34)</td>
   <td>14</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
  <tr>
   <td>Spread operator</td>
   <td>49.0</td>
   <td><a href="/en-US/Firefox/Releases/34" title="Released on 2014-12-01.">34</a> (34)</td>
   <td>12<sup>[1]</sup></td>
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
   <th>Chrome for Android</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>49.0</td>
   <td>1.0 (1.0)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>8</td>
   <td>49.0</td>
  </tr>
  <tr>
   <td>Computed property names</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>49.0</td>
   <td>34.0 (34)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>49.0</td>
  </tr>
  <tr>
   <td>Spread operator</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>49.0</td>
   <td>34.0 (34)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>49.0</td>
  </tr>
 </tbody>
</table>
</div>

<p>[1] &#x9700;&#x8981;&#x5728;`about:flags`&#x4E0B;&#x5F00;&#x542F; &quot;Enable experimental Javascript features&quot;&#xA0;</p>

<h3 id="sect1">&#xA0;</h3>

<h3 id="Firefox&#x7279;&#x522B;&#x6CE8;&#x610F;&#x4E8B;&#x9879;">Firefox&#x7279;&#x522B;&#x6CE8;&#x610F;&#x4E8B;&#x9879;</h3>

<ul>
 <li>Firefox&#x4E3A;<a href="/en-US/docs/Web/JavaScript/New_in_JavaScript/1.7">JS1.7</a>&#x63D0;&#x4F9B;&#x4E86;&#x89E3;&#x6784;&#x7684;&#x975E;&#x6807;&#x51C6;&#x7684;&#x8BED;&#x8A00;&#x6269;&#x5C55;&#x3002;&#x8FD9;&#x4E2A;&#x6269;&#x5C55;&#x5728;Gecko 40 (Firefox 40 / Thunderbird 40 / SeaMonkey 2.37)&#x4E2D;&#x88AB;&#x79FB;&#x9664;&#x3002;&#x53C2;&#x89C1;<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1083498" class="external" title="FIXED: Remove SpiderMonkey support for destructuring for-in (JS1.7-only language extension)">bug&#xA0;1083498</a>&#x3002;</li>
 <li>&#x81EA; (Firefox 41 / Thunderbird 41 / SeaMonkey 2.38)&#x7248;&#x672C;&#x5F00;&#x59CB;&#xFF0C;&#x51FA;&#x4E8E;&#x9075;&#x5B88;ES6&#x89C4;&#x8303;&#x7684;&#x8003;&#x8651;, &#x5706;&#x62EC;&#x53F7;&#x5185;&#x7684;&#x89E3;&#x6784;&#x8D4B;&#x503C;,&#x6BD4;&#x5982;&#xA0;<code>([a, b]) = [1, 2]</code>&#xA0;&#x6216;&#x8005;&#xA0;<code>({a, b}) = { a: 1, b: 2 }</code>,&#x73B0;&#x5728;&#x88AB;&#x89C6;&#x4E3A; invalid&#xA0;&#x5E76;&#x4E14;&#x4F1A;&#x629B;&#x51FA; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError" title="SyntaxError&#xA0;&#x5BF9;&#x8C61;&#x4EE3;&#x8868;&#x5C1D;&#x8BD5;&#x89E3;&#x6790;&#x8BED;&#x6CD5;&#x4E0A;&#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x4EE3;&#x7801;&#x7684;&#x9519;&#x8BEF;."><code>SyntaxError</code></a>. &#x70B9;&#x51FB;&#xA0;<a href="http://whereswalden.com/2015/06/20/new-changes-to-make-spidermonkeys-and-firefoxs-parsing-of-destructuring-patterns-more-spec-compliant/" class="external-icon external">Jeff Walden&apos;s blog post</a> &#x548C; <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1146136" class="external" title="FIXED: Parenthesized AssignmentPatterns are not a valid LHS">bug&#xA0;1146136</a> &#x6765;&#x83B7;&#x5F97;&#x66F4;&#x591A;&#x4FE1;&#x606F;&#x3002;</li>
</ul>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators">&#x8D4B;&#x503C;&#x64CD;&#x4F5C;&#x7B26;</a></li>
 <li><a href="https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/" class="external">&quot;ES6 in Depth: Destructuring&quot; on hacks.mozilla.org</a></li>
</ul>
                  
                
              