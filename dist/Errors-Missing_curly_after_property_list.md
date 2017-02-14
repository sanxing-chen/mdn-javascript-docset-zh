
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="&#x4FE1;&#x606F;">&#x4FE1;&#x606F;</h2>

<pre class="syntaxbox">SyntaxError: missing } after property list
</pre>

<h2 id="&#x9519;&#x8BEF;&#x7C7B;&#x578B;">&#x9519;&#x8BEF;&#x7C7B;&#x578B;</h2>

<p><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError" title="SyntaxError&#xA0;&#x5BF9;&#x8C61;&#x4EE3;&#x8868;&#x5C1D;&#x8BD5;&#x89E3;&#x6790;&#x8BED;&#x6CD5;&#x4E0A;&#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x4EE3;&#x7801;&#x7684;&#x9519;&#x8BEF;&#x3002;"><code>SyntaxError</code></a></p>

<h2 id="&#x54EA;&#x91CC;&#x51FA;&#x9519;&#x4E86;">&#x54EA;&#x91CC;&#x51FA;&#x9519;&#x4E86;?</h2>

<p>&#x5728;<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer">&#x5BF9;&#x8C61;&#x521D;&#x59CB;&#x5316;</a>&#x7684;&#x65F6;&#x5019;&#x8BED;&#x6CD5;&#x51FA;&#x9519;&#x4E86;&#x3002;&#x53EF;&#x80FD;&#x662F;&#x9057;&#x6F0F;&#x4E86;&#x4E00;&#x4E2A;&#x5927;&#x62EC;&#x53F7;&#xFF0C;&#x4E5F;&#x53EF;&#x80FD;&#x662F;&#x9057;&#x6F0F;&#x4E86;&#x9017;&#x53F7;&#x3002;&#x8FD8;&#x8981;&#x68C0;&#x67E5;&#x662F;&#x5426;&#x4EE5;&#x6B63;&#x786E;&#x7684;&#x987A;&#x5E8F;&#x5173;&#x95ED;&#x4E86;&#x5927;&#x62EC;&#x53F7;&#x6216;&#x62EC;&#x53F7;&#x3002; &#x7F29;&#x8FDB;&#x6216;&#x683C;&#x5F0F;&#x5316;&#x4EE3;&#x7801;&#x4E5F;&#x8BB8;&#x53EF;&#x4EE5;&#x66F4;&#x597D;&#x5E2E;&#x52A9;&#x4F60;&#x770B;&#x6E05;&#x8FD9;&#x4E9B;&#x829C;&#x6742;&#x7684;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x9057;&#x6F0F;&#x7684;&#x9017;&#x53F7;">&#x9057;&#x6F0F;&#x7684;&#x9017;&#x53F7;</h3>

<p>&#x5F88;&#x591A;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x5BF9;&#x8C61;&#x521D;&#x59CB;&#x503C;&#x4EE3;&#x7801;&#x4F1A;&#x4E2D;&#x7F3A;&#x5C11;&#x9017;&#x53F7;&#xFF1A;</p>

<pre class="brush: js example-bad">var obj = { 
  a: 1, 
  b: { myProp: 2 }
  c: 3
};
</pre>

<p>&#x6B63;&#x786E;&#x7684;&#x662F;&#xFF1A;</p>

<pre class="brush: js example-good">var obj = {
  a: 1,
  b: { myProp: 2 },
  c: 3
};
</pre>

<h2 id="&#x76F8;&#x5173;">&#x76F8;&#x5173;</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer">Object initializer</a></li>
</ul>
                  
                
              