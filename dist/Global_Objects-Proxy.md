
                
                  
                    <div>
<div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div style="background: #9CF49C;" class="overheadIndicator">
    <p><strong>&#x8BE5;&#x65B0;&#x7279;&#x6027;&#x5C5E;&#x4E8E; ECMAScript 2015&#xFF08;ES6&#xFF09;&#x89C4;&#x8303;&#xFF0C;&#x5728;&#x4F7F;&#x7528;&#x65F6;&#x8BF7;&#x6CE8;&#x610F;&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;&#x3002;</strong></p>
</div></div>
</div>

<h2 id="&#x7B80;&#x4ECB;">&#x7B80;&#x4ECB;</h2>

<p><strong>Proxy&#xA0;</strong>&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x4E3A;&#x57FA;&#x7840;&#x64CD;&#x4F5C;&#xFF08;&#x4F8B;&#x5982;&#xFF1A;&#x5C5E;&#x6027;&#x67E5;&#x627E;&#x3001;&#x8D4B;&#x503C;&#x3001;&#x679A;&#x4E3E;&#x3001;&#x65B9;&#x6CD5;&#x8C03;&#x7528;&#x7B49;&#xFF09;&#x5B9A;&#x4E49;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x884C;&#x4E3A;&#x3002;</p>

<h2 id="&#x672F;&#x8BED;">&#x672F;&#x8BED;</h2>

<dl>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler">handler</a></dt>
 <dd>&#x5305;&#x542B; traps &#x7684;&#x5BF9;&#x8C61;&#x3002;</dd>
 <dt>traps</dt>
 <dd>&#x63D0;&#x4F9B;&#x8BBF;&#x95EE;&#x5C5E;&#x6027;&#x7684;&#x9014;&#x5F84;&#xFF0C;&#x4E0E;&#x64CD;&#x4F5C;&#x7CFB;&#x7EDF;&#x4E2D;&#x7684; traps &#x5B9A;&#x4E49;&#x76F8;&#x4F3C;&#x3002;</dd>
 <dt>target</dt>
 <dd>&#x88AB;&#x4EE3;&#x7406;&#x865A;&#x62DF;&#x5316;&#x7684;&#x5BF9;&#x8C61;&#xFF0C;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x5E38;&#x5E38;&#x7528;&#x4F5C;&#x4EE3;&#x7406;&#x7684;&#x5B58;&#x50A8;&#x540E;&#x7AEF;&#x3002;&#x5173;&#x4E8E;&#x5BF9;&#x8C61;&#x4E0D;&#x53EF;&#x62D3;&#x5C55;&#x6027;&#x548C;&#x4E0D;&#x53EF;&#x4FEE;&#x6539;&#x5C5E;&#x6027;&#x7684;&#x4E0D;&#x53D8;&#x91CF;&#x4F1A;&#x88AB;&#x4EE3;&#x7406;&#x62E6;&#x622A;&#x3002;</dd>
</dl>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">var p = new Proxy(target, handler);
</pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>target</code></dt>
 <dd>&#x76EE;&#x6807;&#x5BF9;&#x8C61;&#xFF0C;&#x53EF;&#x4EE5;&#x662F;&#x4EFB;&#x610F;&#x7C7B;&#x578B;&#x7684;&#x5BF9;&#x8C61;&#xFF0C;&#x6BD4;&#x5982;&#x6570;&#x7EC4;&#xFF0C;&#x51FD;&#x6570;&#xFF0C;&#x751A;&#x81F3;&#x662F;&#x53E6;&#x5916;&#x4E00;&#x4E2A;&#x4EE3;&#x7406;&#x5BF9;&#x8C61;&#x3002;</dd>
 <dt><code>handler</code></dt>
 <dd>&#x5904;&#x7406;&#x5668;&#x5BF9;&#x8C61;&#xFF0C;&#x5305;&#x542B;&#x4E86;&#x4E00;&#x7EC4;&#x4EE3;&#x7406;&#x65B9;&#x6CD5;&#xFF0C;&#x5206;&#x522B;&#x63A7;&#x5236;&#x6240;&#x751F;&#x6210;&#x4EE3;&#x7406;&#x5BF9;&#x8C61;&#x7684;&#x5404;&#x79CD;&#x884C;&#x4E3A;&#x3002;</dd>
</dl>

<h2 id="&#x65B9;&#x6CD5;">&#x65B9;&#x6CD5;</h2>

<dl>
 <dt><a title="Proxy.revocable() &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x7528;&#x6765;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x53EF;&#x64A4;&#x9500;&#x7684;&#x4EE3;&#x7406;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/revocable"><code>Proxy.revocable()</code></a></dt>
 <dd>&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x53EF;&#x64A4;&#x9500;&#x7684;&#x4EE3;&#x7406;&#x5BF9;&#x8C61;&#x3002;</dd>
</dl>

<h2 id="handler_&#x5BF9;&#x8C61;&#x7684;&#x65B9;&#x6CD5;">handler &#x5BF9;&#x8C61;&#x7684;&#x65B9;&#x6CD5;</h2>

<p>handler &#x662F;&#x5360;&#x4F4D;&#x7B26;&#x5BF9;&#x8C61;&#xFF0C;&#x5B83;&#x5305;&#x542B;&#x4EE3;&#x7406;&#x7684; traps&#x3002;</p>

<div></div>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x57FA;&#x7840;&#x793A;&#x4F8B;">&#x57FA;&#x7840;&#x793A;&#x4F8B;</h3>

<p>&#x5728;&#x4EE5;&#x4E0B;&#x7B80;&#x5355;&#x7684;&#x4F8B;&#x5B50;&#x4E2D;&#xFF0C;&#x5F53;&#x5BF9;&#x8C61;&#x4E2D;&#x4E0D;&#x5B58;&#x5728;&#x5C5E;&#x6027;&#x540D;&#x65F6;&#xFF0C;&#x7F3A;&#x7701;&#x8FD4;&#x56DE;&#x6570;&#x4E3A;37&#x3002;&#x4F8B;&#x5B50;&#x4E2D;&#x4F7F;&#x7528;&#x4E86;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/get"><code>get</code></a> &#x5904;&#x7406;&#x5668;&#xFF08;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/get"><code>get</code></a> handler&#xFF09;&#x3002;</p>

<pre class="brush: js">var handler = {
    get: function(target, name){
        return name in target?
            target[name] :
            37;
    }
};

var p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // 1, undefined
console.log(&apos;c&apos; in p, p.c); // false, 37
</pre>

<h3 id="&#x65E0;&#x64CD;&#x4F5C;&#x8F6C;&#x53D1;&#x4EE3;&#x7406;">&#x65E0;&#x64CD;&#x4F5C;&#x8F6C;&#x53D1;&#x4EE3;&#x7406;</h3>

<p>&#x5728;&#x4EE5;&#x4E0B;&#x4F8B;&#x5B50;&#x4E2D;&#xFF0C;&#x6211;&#x4EEC;&#x4F7F;&#x7528;&#x4E86;&#x4E00;&#x4E2A;&#x539F;&#x751F; JavaScript &#x5BF9;&#x8C61;&#xFF0C;&#x4EE3;&#x7406;&#x4F1A;&#x5C06;&#x6240;&#x6709;&#x5E94;&#x7528;&#x5230;&#x5B83;&#x7684;&#x64CD;&#x4F5C;&#x8F6C;&#x53D1;&#x5230;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x4E0A;&#x3002;</p>

<pre class="brush: js">var target = {};
var p = new Proxy(target, {});

p.a = 37; // &#x88AB;&#x8F6C;&#x53D1;&#x5230;&#x4EE3;&#x7406;&#x7684;&#x64CD;&#x4F5C;

console.log(target.a); // 37. &#x64CD;&#x4F5C;&#x5DF2;&#x7ECF;&#x88AB;&#x6B63;&#x786E;&#x5730;&#x8F6C;&#x53D1;
</pre>

<h3 id="&#x9A8C;&#x8BC1;">&#x9A8C;&#x8BC1;</h3>

<p>&#x901A;&#x8FC7;&#x4EE3;&#x7406;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x8F7B;&#x677E;&#x5730;&#x9A8C;&#x8BC1;&#x5411;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x4F20;&#x503C;&#x3002;&#x4EE5;&#x4E0B;&#x4F8B;&#x5B50;&#x4F7F;&#x7528;&#x4E86;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/set"><code>set</code></a>&#xA0;&#x5904;&#x7406;&#x5668;&#xFF08;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/set"><code>set</code></a> handler&#xFF09;&#x3002;</p>

<pre class="brush: js">let validator = {
  set: function(obj, prop, value) {
    if (prop === &apos;age&apos;) {
      if (!Number.isInteger(value)) {
        throw new TypeError(&apos;The age is not an integer&apos;);
      }
      if (value &gt; 200) {
        throw new RangeError(&apos;The age seems invalid&apos;);
      }
    }

    // The default behavior to store the value
    obj[prop] = value;
  }
};

let person = new Proxy({}, validator);

person.age = 100;
console.log(person.age); // 100
person.age = &apos;young&apos;; // &#x629B;&#x51FA;&#x5F02;&#x5E38;
person.age = 300; // &#x629B;&#x51FA;&#x5F02;&#x5E38;
</pre>

<h3 id="&#x6269;&#x5C55;&#x6784;&#x9020;&#x51FD;&#x6570;">&#x6269;&#x5C55;&#x6784;&#x9020;&#x51FD;&#x6570;</h3>

<p>&#x65B9;&#x6CD5;&#x4EE3;&#x7406;&#x53EF;&#x4EE5;&#x8F7B;&#x677E;&#x5730;&#x901A;&#x8FC7;&#x4E00;&#x4E2A;&#x65B0;&#x6784;&#x9020;&#x51FD;&#x6570;&#x6765;&#x6269;&#x5C55;&#x4E00;&#x4E2A;&#x5DF2;&#x6709;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;&#x3002;&#x4E00;&#x4E0B;&#x7684;&#x4F8B;&#x5B50;&#x4E2D;&#x4F7F;&#x7528;&#x4E86;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/construct" class="new"><code>construct</code></a> &#x5904;&#x7406;&#x5668; &#xFF08;<code><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/construct" class="new">construct</a>&#xA0;handler</code>&#xFF09;&#x548C;&#xA0;<code><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply">apply</a>&#xA0;&#x5904;&#x7406;&#x5668;</code>&#xA0;&#xFF08;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply"><code>apply</code></a> handler&#xFF09;&#x3002;</p>

<pre class="brush: js">function extend(sup,base) {
  var descriptor = Object.getOwnPropertyDescriptor(
    base.prototype,&quot;constructor&quot;
  );
  base.prototype = Object.create(sup.prototype);
  var handler = {
    construct: function(target, args) {
      var obj = Object.create(base.prototype);
      this.apply(target,obj,args);
      return obj;
    },
    apply: function(target, that, args) {
      sup.apply(that,args);
      base.apply(that,args);
    }
  };
  var proxy = new Proxy(base,handler);
  descriptor.value = proxy;
  Object.defineProperty(base.prototype, &quot;constructor&quot;, descriptor);
  return proxy;
}

var Person = function(name){
  this.name = name
};

var Boy = extend(Person, function(name, age) {
  this.age = age;
});

Boy.prototype.sex = &quot;M&quot;;

var Peter = new Boy(&quot;Peter&quot;, 13);
console.log(Peter.sex);  // &quot;M&quot;
console.log(Peter.name); // &quot;Peter&quot;
console.log(Peter.age);  // 13</pre>

<h3 id="&#x64CD;&#x4F5C;_DOM_&#x8282;&#x70B9;">&#x64CD;&#x4F5C; DOM &#x8282;&#x70B9;</h3>

<p>&#x6709;&#x65F6;&#x4F60;&#x5E0C;&#x671B;&#x5207;&#x6362;&#x4E24;&#x4E2A;&#x4E0D;&#x540C;&#x7684;&#x5143;&#x7D20;&#x7684;&#x5C5E;&#x6027;&#x6216;&#x7C7B;&#x540D;&#x3002;&#x4E0B;&#x9762;&#x5C55;&#x793A;&#x4E86;&#x5982;&#x4F55;&#x4F7F;&#x7528;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/set"><code>set</code></a>&#xA0;&#x5904;&#x7406;&#x5668;&#xFF08;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/set"><code>set</code></a> handler&#xFF09;&#x3002;</p>

<pre class="brush: js">let view = new Proxy({
  selected: null
},
{
  set: function(obj, prop, newval) {
    let oldval = obj[prop];

    if (prop === &apos;selected&apos;) {
      if (oldval) {
        oldval.setAttribute(&apos;aria-selected&apos;, &apos;false&apos;);
      }
      if (newval) {
        newval.setAttribute(&apos;aria-selected&apos;, &apos;true&apos;);
      }
    }

    // The default behavior to store the value
    obj[prop] = newval;
  }
});

let i1 = view.selected = document.getElementById(&apos;item-1&apos;);
console.log(i1.getAttribute(&apos;aria-selected&apos;)); // &apos;true&apos;

let i2 = view.selected = document.getElementById(&apos;item-2&apos;);
console.log(i1.getAttribute(&apos;aria-selected&apos;)); // &apos;false&apos;
console.log(i2.getAttribute(&apos;aria-selected&apos;)); // &apos;true&apos;
</pre>

<h3 id="&#x503C;&#x4FEE;&#x6B63;&#x53CA;&#x9644;&#x52A0;&#x5C5E;&#x6027;">&#x503C;&#x4FEE;&#x6B63;&#x53CA;&#x9644;&#x52A0;&#x5C5E;&#x6027;</h3>

<p>&#x4EE5;&#x4E0B; products &#x4EE3;&#x7406;&#x4F1A;&#x8BA1;&#x7B97;&#x4F20;&#x503C;&#x5E76;&#x6839;&#x636E;&#x9700;&#x8981;&#x8F6C;&#x6362;&#x4E3A;&#x6570;&#x7EC4;&#x3002;&#x8FD9;&#x4E2A;&#x4EE3;&#x7406;&#x5BF9;&#x8C61;&#x540C;&#x65F6;&#x652F;&#x6301;&#x4E00;&#x4E2A;&#x53EB;&#x505A;&#xA0;<code>latestBrowser &#x7684;&#x9644;&#x52A0;&#x5C5E;&#x6027;&#xFF0C;&#x8FD9;&#x4E2A;&#x5C5E;&#x6027;&#x53EF;&#x4EE5;&#x540C;&#x65F6;&#x4F5C;&#x4E3A; getter &#x548C; setter&#x3002;</code></p>

<pre class="brush: js">let products = new Proxy({
  browsers: [&apos;Internet Explorer&apos;, &apos;Netscape&apos;]
},
{
  get: function(obj, prop) {
    // &#x9644;&#x52A0;&#x5C5E;&#x6027;
    if (prop === &apos;latestBrowser&apos;) {
      return obj.browsers[obj.browsers.length - 1];
    }

    // &#x7F3A;&#x7701;&#x884C;&#x4E3A;&#x662F;&#x8FD4;&#x56DE;&#x5C5E;&#x6027;&#x503C;
    return obj[prop];
  },
  set: function(obj, prop, value) {
    // &#x9644;&#x52A0;&#x5C5E;&#x6027;
    if (prop === &apos;latestBrowser&apos;) {
      obj.browsers.push(value);
      return;
    }

    // &#x5982;&#x679C;&#x4E0D;&#x662F;&#x6570;&#x7EC4;&#x5219;&#x8FDB;&#x884C;&#x8F6C;&#x6362;
    if (typeof value === &apos;string&apos;) {
      value = [value];
    }

    // &#x7F3A;&#x7701;&#x884C;&#x4E3A;&#x662F;&#x4FDD;&#x5B58;&#x5C5E;&#x6027;&#x503C;
    obj[prop] = value;
  }
});

console.log(products.browsers); // [&apos;Internet Explorer&apos;, &apos;Netscape&apos;]
products.browsers = &apos;Firefox&apos;; // &#x4F20;&#x5165;&#x4E00;&#x4E2A; string (&#x9519;&#x8BEF;&#x5730;)
console.log(products.browsers); // [&apos;Firefox&apos;] &lt;- &#x6CA1;&#x95EE;&#x9898;, &#x5F97;&#x5230;&#x7684;&#x662F;&#x4E00;&#x4E2A; array

products.latestBrowser = &apos;Chrome&apos;;
console.log(products.browsers); // [&apos;Firefox&apos;, &apos;Chrome&apos;]
console.log(products.latestBrowser); // &apos;Chrome&apos;
</pre>

<h3 id="&#x901A;&#x8FC7;&#x5C5E;&#x6027;&#x67E5;&#x627E;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x7279;&#x5B9A;&#x5BF9;&#x8C61;">&#x901A;&#x8FC7;&#x5C5E;&#x6027;&#x67E5;&#x627E;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x7279;&#x5B9A;&#x5BF9;&#x8C61;</h3>

<p>&#x4EE5;&#x4E0B;&#x4EE3;&#x7406;&#x4E3A;&#x6570;&#x7EC4;&#x6269;&#x5C55;&#x4E86;&#x4E00;&#x4E9B;&#x5B9E;&#x7528;&#x5DE5;&#x5177;&#x3002;&#x53EF;&#x4EE5;&#x770B;&#x5230;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x7075;&#x6D3B;&#x5730;&#x201C;&#x5B9A;&#x4E49;&#x201D;&#x5C5E;&#x6027;&#xFF0C;&#x800C;&#x4E0D;&#x9700;&#x8981;&#x4F7F;&#x7528;&#xA0;<code><a href="/zh-CN/docs/JavaScript/Reference/Global_Objects/Object/defineProperties">Object.defineProperties</a>&#xA0;&#x65B9;&#x6CD5;&#x3002;&#x4EE5;&#x4E0B;&#x4F8B;&#x5B50;&#x53EF;&#x4EE5;&#x7528;&#x4E8E;&#x901A;&#x8FC7;&#x5355;&#x5143;&#x683C;&#x6765;&#x67E5;&#x627E;&#x8868;&#x683C;&#x4E2D;&#x7684;&#x4E00;&#x884C;&#x3002;&#x5728;&#x8FD9;&#x79CD;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;target &#x662F;&#xA0;</code><code><a href="/zh-CN/docs/DOM/table.rows" class="new">table.rows</a>&#x3002;</code></p>

<pre class="brush: js">let products = new Proxy([
  { name: &apos;Firefox&apos;, type: &apos;browser&apos; },
  { name: &apos;SeaMonkey&apos;, type: &apos;browser&apos; },
  { name: &apos;Thunderbird&apos;, type: &apos;mailer&apos; }
],
{
  get: function(obj, prop) {
    // &#x7F3A;&#x7701;&#x884C;&#x4E3A;&#x662F;&#x8FD4;&#x56DE;&#x5C5E;&#x6027;&#x503C;&#xFF0C; prop &#x901A;&#x5E38;&#x662F;&#x4E00;&#x4E2A;&#x6574;&#x6570;
    if (prop in obj) {
      return obj[prop];
    }

    // &#x83B7;&#x53D6; products &#x7684; number; &#x5B83;&#x662F; products.length &#x7684;&#x522B;&#x540D;
    if (prop === &apos;number&apos;) {
      return obj.length;
    }

    let result, types = {};

    for (let product of obj) {
      if (product.name === prop) {
        result = product;
      }
      if (types[product.type]) {
        types[product.type].push(product);
      } else {
        types[product.type] = [product];
      }
    }

    // &#x901A;&#x8FC7; name &#x83B7;&#x53D6; product
    if (result) {
      return result;
    }

    // &#x901A;&#x8FC7; type &#x83B7;&#x53D6; products
    if (prop in types) {
      return types[prop];
    }

    // &#x83B7;&#x53D6; product type
    if (prop === &apos;types&apos;) {
      return Object.keys(types);
    }

    return undefined;
  }
});

console.log(products[0]); // { name: &apos;Firefox&apos;, type: &apos;browser&apos; }
console.log(products[&apos;Firefox&apos;]); // { name: &apos;Firefox&apos;, type: &apos;browser&apos; }
console.log(products[&apos;Chrome&apos;]); // undefined
console.log(products.browser); // [{ name: &apos;Firefox&apos;, type: &apos;browser&apos; }, { name: &apos;SeaMonkey&apos;, type: &apos;browser&apos; }]
console.log(products.types); // [&apos;browser&apos;, &apos;mailer&apos;]
console.log(products.number); // 3
</pre>

<h3 id="&#x4E00;&#x4E2A;&#x5B8C;&#x6574;&#x7684;_traps_&#x5217;&#x8868;&#x793A;&#x4F8B;">&#x4E00;&#x4E2A;&#x5B8C;&#x6574;&#x7684; traps &#x5217;&#x8868;&#x793A;&#x4F8B;</h3>

<p>&#x51FA;&#x4E8E;&#x6559;&#x5B66;&#x76EE;&#x7684;&#xFF0C;&#x8FD9;&#x91CC;&#x4E3A;&#x4E86;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5B8C;&#x6574;&#x7684; traps &#x5217;&#x8868;&#x793A;&#x4F8B;&#xFF0C;&#x6211;&#x4EEC;&#x5C06;&#x5C1D;&#x8BD5;&#x4EE3;&#x7406;&#x5316;&#x4E00;&#x4E2A;&#x975E;&#x539F;&#x751F;&#x5BF9;&#x8C61;&#xFF0C;&#x8FD9;&#x7279;&#x522B;&#x9002;&#x7528;&#x4E8E;&#x8FD9;&#x7C7B;&#x64CD;&#x4F5C;&#xFF1A;&#x7531; <a title="https://developer.mozilla.org/zh-CN/docs/DOM/document.cookie#A_little_framework.3A_a_complete_cookies_reader.2Fwriter_with_full_unicode_support" href="https://developer.mozilla.org/zh-CN/docs/DOM/document.cookie#A_little_framework.3A_a_complete_cookies_reader.2Fwriter_with_full_unicode_support" class="new">&#x53D1;&#x5E03;&#x5728; document.cookie&#x9875;&#x9762;&#x4E0A;&#x7684;&#x201C;&#x5C0F;&#x578B;&#x6846;&#x67B6;&#x201D;</a>&#x521B;&#x5EFA;&#x7684;&#xA0;docCookies &#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x3002;</p>

<pre class="brush: js">/*
  var docCookies = ... get the &quot;docCookies&quot; object here:  
  https://developer.mozilla.org/zh-CN/docs/DOM/document.cookie#A_little_framework.3A_a_complete_cookies_reader.2Fwriter_with_full_unicode_support
*/

var docCookies = new Proxy(docCookies, {
  &quot;get&quot;: function (oTarget, sKey) {
    return oTarget[sKey] || oTarget.getItem(sKey) || undefined;
  },
  &quot;set&quot;: function (oTarget, sKey, vValue) {
    if (sKey in oTarget) { return false; }
    return oTarget.setItem(sKey, vValue);
  },
  &quot;deleteProperty&quot;: function (oTarget, sKey) {
    if (sKey in oTarget) { return false; }
    return oTarget.removeItem(sKey);
  },
  &quot;enumerate&quot;: function (oTarget, sKey) {
    return oTarget.keys();
  },
  &quot;ownKeys&quot;: function (oTarget, sKey) {
    return oTarget.keys();
  },
  &quot;has&quot;: function (oTarget, sKey) {
    return sKey in oTarget || oTarget.hasItem(sKey);
  },
  &quot;defineProperty&quot;: function (oTarget, sKey, oDesc) {
    if (oDesc &amp;&amp; &quot;value&quot; in oDesc) { oTarget.setItem(sKey, oDesc.value); }
    return oTarget;
  },
  &quot;getOwnPropertyDescriptor&quot;: function (oTarget, sKey) {
    var vValue = oTarget.getItem(sKey);
    return vValue ? {
      &quot;value&quot;: vValue,
      &quot;writable&quot;: true,
      &quot;enumerable&quot;: true,
      &quot;configurable&quot;: false
    } : undefined;
  },
});

/* Cookies &#x6D4B;&#x8BD5; */

alert(docCookies.my_cookie1 = &quot;First value&quot;);
alert(docCookies.getItem(&quot;my_cookie1&quot;));

docCookies.setItem(&quot;my_cookie1&quot;, &quot;Changed value&quot;);
alert(docCookies.my_cookie1);</pre>

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
   <td>
    <p>49.0</p>
   </td>
   <td><a title="Released on 2013-01-08." href="/en-US/Firefox/Releases/18">18</a> (18)</td>
   <td>12</td>
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
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>49.0</td>
   <td><a title="Released on 2013-01-08." href="/en-US/Firefox/Releases/18">18</a> (18)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="Gecko&#x7279;&#x522B;&#x8BF4;&#x660E;">Gecko&#x7279;&#x522B;&#x8BF4;&#x660E;</h2>

<ul>
 <li>&#x76EE;&#x524D;&#xFF0C;<code>Object.getPrototypeOf(proxy)&#xA0;<font face="Open Sans, Arial, sans-serif">&#x65E0;&#x6761;&#x4EF6;&#x5730;&#x8FD4;&#x56DE;&#xA0;</font></code><code>Object.getPrototypeOf(target)&#xFF0C;&#x56E0;&#x4E3A;</code>ES6 getPrototypeOf&#xA0;&#x7684;&#x7F3A;&#x9677;&#x8FD8;&#x6CA1;&#x88AB;&#x5B9E;&#x73B0;&#xA0;(<a title="FIXED: Implement ES6 Proxy traps for getPrototypeOf and setPrototypeOf" href="https://bugzilla.mozilla.org/show_bug.cgi?id=888969" class="external">bug&#xA0;888969</a>&#xFF0C;<a title="FIXED: Implement ES6 Proxy traps for getPrototypeOf and setPrototypeOf" href="https://bugzilla.mozilla.org/show_bug.cgi?id=888969" class="external">bug&#xA0;888969</a>)&#x3002;</li>
 <li><code>Array.isArray(proxy)</code>&#xA0;&#x65E0;&#x6761;&#x4EF6;&#x5730;&#x8FD4;&#x56DE;&#xA0;<code>Array.isArray(target)</code> (<a title="FIXED: Implement ES6 7.2.2  IsArray" href="https://bugzilla.mozilla.org/show_bug.cgi?id=1111785" class="external">bug&#xA0;1111785</a>&#xFF0C;<a title="FIXED: Implement ES6 7.2.2  IsArray" href="https://bugzilla.mozilla.org/show_bug.cgi?id=1111785" class="external">bug&#xA0;1111785</a>)&#x3002;</li>
 <li><code>Object.prototype.toString.call(proxy)</code>&#xA0;&#x65E0;&#x6761;&#x4EF6;&#x5730;&#x8FD4;&#x56DE;&#xA0;<code>Object.prototype.toString.call(target)&#xFF0C;</code>&#x56E0;&#x4E3A;&#xA0;ES6 Symbol.toStringTag &#x8FD8;&#x6CA1;&#x88AB;&#x5B9E;&#x73B0;&#xA0;(<a title="FIXED: Implement ES6 Symbol.toStringTag" href="https://bugzilla.mozilla.org/show_bug.cgi?id=1114580" class="external">bug&#xA0;1114580</a>)&#x3002;</li>
</ul>

<h2 id="&#x53C2;&#x8003;">&#x53C2;&#x8003;</h2>

<ul>
 <li><a href="http://jsconf.eu/2010/speaker/be_proxy_objects.html" class="external">&quot;Proxies are awesome&quot; Brendan Eich presentation at JSConf</a> (<a href="http://www.slideshare.net/BrendanEich/metaprog-5303821" class="external">slides</a>)</li>
 <li><a href="http://wiki.ecmascript.org/doku.php?id=harmony:proxies" class="external">ECMAScript Harmony Proxy proposal page</a> and <a href="http://wiki.ecmascript.org/doku.php?id=harmony:proxies_semantics" class="external">ECMAScript Harmony proxy semantics page</a></li>
 <li><a href="http://soft.vub.ac.be/~tvcutsem/proxies/" class="external">Tutorial on proxies</a></li>
 <li><a title="/zh-CN/docs/JavaScript/Old_Proxy_API" href="/zh-CN/docs/JavaScript/Old_Proxy_API" class="new">SpiderMonkey specific Old Proxy API</a></li>
 <li><a title="&#x76D1;&#x89C6;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x67D0;&#x4E2A;&#x5C5E;&#x6027;&#x662F;&#x5426;&#x88AB;&#x8D4B;&#x503C;,&#x5728;&#x8BE5;&#x5C5E;&#x6027;&#x8D4B;&#x503C;&#x65F6;&#x89E6;&#x53D1;&#x6307;&#x5B9A;&#x7684;&#x56DE;&#x8C03;&#x51FD;&#x6570;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/watch"><code>Object.watch()</code></a> is a non-standard feature but has been supported in Gecko for a long time.</li>
</ul>

<h2 id="&#x7248;&#x6743;&#x58F0;&#x660E;">&#x7248;&#x6743;&#x58F0;&#x660E;</h2>

<p>&#x4E00;&#x4E9B;&#x5185;&#x5BB9;&#xFF08;&#x5982;&#x6587;&#x672C;&#x3001;&#x4F8B;&#x5B50;&#xFF09;&#x662F;&#x590D;&#x5236;&#x81EA;&#x6216;&#x4FEE;&#x6539;&#x81EA;<a href="http://wiki.ecmascript.org/doku.php" class="external">ECMAScript wiki</a>&#xFF08;&#x7248;&#x6743;&#x58F0;&#x660E;&#xA0;<a href="http://creativecommons.org/licenses/by-nc-sa/2.0/" class="external">CC 2.0 BY-NC-SA</a>&#xFF09;&#x3002;</p>
                  
                
              