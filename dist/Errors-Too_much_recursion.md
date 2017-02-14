
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<h2 id="&#x4FE1;&#x606F;">&#x4FE1;&#x606F;</h2>

<pre class="syntaxbox">InternalError: too much recursion
</pre>

<h2 id="&#x9519;&#x8BEF;&#x7C7B;&#x578B;">&#x9519;&#x8BEF;&#x7C7B;&#x578B;</h2>

<p><a href="/zh-CN/docs/Web/JavaScript/Reference/InternalError" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>&#x5185;&#x90E8;&#x9519;&#x8BEF;</code></a>.</p>

<h2 id="&#x4EC0;&#x4E48;&#x5730;&#x65B9;&#x51FA;&#x9519;&#x4E86;">&#x4EC0;&#x4E48;&#x5730;&#x65B9;&#x51FA;&#x9519;&#x4E86;?</h2>

<p>&#x4E00;&#x4E2A;&#x8C03;&#x7528;&#x81EA;&#x8EAB;&#x7684;&#x51FD;&#x6570;&#x88AB;&#x79F0;&#x4F5C;<em>&#x9012;&#x5F52;&#x51FD;&#x6570;</em>&#x3002;&#x4E00;&#x4E9B;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x9012;&#x5F52;&#x51FD;&#x6570;&#x7C7B;&#x4F3C;&#x4E8E;&#x4E00;&#x4E2A;&#x5FAA;&#x73AF;&#xFF0C;&#x90FD;&#x91CD;&#x590D;&#x5730;&#x6267;&#x884C;&#x4E00;&#x4E2A;&#x4EE3;&#x7801;&#x6BB5;&#x8BB8;&#x591A;&#x6B21;&#xFF0C;&#x90FD;&#x9700;&#x8981;&#x4E00;&#x4E2A;&#x6761;&#x4EF6;&#xFF08;&#x7528;&#x4E8E;&#x907F;&#x514D;&#x65E0;&#x5C3D;&#x5FAA;&#x73AF;&#x6216;&#x6B64;&#x5904;&#x7684;&#x65E0;&#x5C3D;&#x9012;&#x5F52;&#xFF09;&#x3002;&#x5F53;&#x51FA;&#x73B0;&#x8FC7;&#x4E8E;&#x6DF1;&#x5C42;&#x7684;&#x9012;&#x5F52;&#x6216;&#x65E0;&#x5C3D;&#x9012;&#x5F52;&#x65F6;&#xFF0C;JavaScript&#x5C06;&#x4F1A;&#x629B;&#x51FA;&#x6B64;&#x9519;&#x8BEF;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<p>&#x6839;&#x636E;&#x9012;&#x5F52;&#x7EC8;&#x6B62;&#x7684;&#x6761;&#x4EF6;&#xFF0C;&#x8BE5;&#x51FD;&#x6570;&#x5C06;&#x9012;&#x5F52;&#x5730;&#x6267;&#x884C; 10 &#x6B21;&#x3002;</p>

<pre class="brush: js">function loop(x) {
  if (x &gt;= 10) // &quot;x &gt;= 10&quot; &#x662F;&#x9012;&#x5F52;&#x7EC8;&#x6B62;&#x6761;&#x4EF6;
    return;
  // &#x8FDB;&#x884C;&#x4E00;&#x4E9B;&#x64CD;&#x4F5C;...
  loop(x + 1); // &#x9012;&#x5F52;&#x8C03;&#x7528;
}
loop(0);</pre>

<p>&#x5C06;&#x9012;&#x5F52;&#x6761;&#x4EF6;&#x8BBE;&#x7F6E;&#x4E3A;&#x4E00;&#x4E2A;&#x6781;&#x5927;&#x7684;&#x6570;&#x503C;&#xFF0C;&#x5C06;&#x4E0D;&#x80FD;&#x8FD0;&#x884C;&#xFF1A;</p>

<pre class="brush: js example-bad">function loop(x) {
  if (x &gt;= 1000000000000)
    return;
  // &#x8FDB;&#x884C;&#x4E00;&#x4E9B;&#x64CD;&#x4F5C;...
  loop(x + 1);
}
loop(0);

// InternalError: too much recursion</pre>

<h2 id="&#x76F8;&#x5173;&#x9875;&#x9762;">&#x76F8;&#x5173;&#x9875;&#x9762;</h2>

<ul>
 <li><a href="/en-US/docs/Glossary/Recursion" class="glossaryLink" title="&#x9012;&#x5F52;: An act of a&#xA0;function&#xA0;calling itself. Recursion is used to solve problems that contain smaller sub-problems. A recursive function can receive two inputs: a base case (ends recursion) or a recursive case (continues recursion).">&#x9012;&#x5F52;</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Functions#Recursion">Recursive functions</a></li>
</ul>
                  
                
              