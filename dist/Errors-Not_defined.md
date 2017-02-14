
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="&#x9519;&#x8BEF;&#x4FE1;&#x606F;">&#x9519;&#x8BEF;&#x4FE1;&#x606F;</h2>

<pre class="syntaxbox">ReferenceError: &quot;x&quot; is not defined
</pre>

<h2 id="&#x9519;&#x8BEF;&#x7C7B;&#x578B;">&#x9519;&#x8BEF;&#x7C7B;&#x578B;</h2>

<p><a title="ReferenceError&#xFF08;&#x5F15;&#x7528;&#x9519;&#x8BEF;&#xFF09; &#x5BF9;&#x8C61;&#x8868;&#x660E;&#x4E00;&#x4E2A;&#x4E0D;&#x5B58;&#x5728;&#x7684;&#x53D8;&#x91CF;&#x88AB;&#x5F15;&#x7528;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError"><code>ReferenceError</code></a>.</p>

<h2 id="&#x4EC0;&#x4E48;&#x5730;&#x65B9;&#x51FA;&#x9519;&#x4E86;">&#x4EC0;&#x4E48;&#x5730;&#x65B9;&#x51FA;&#x9519;&#x4E86;?</h2>

<p>&#x5728;&#x67D0;&#x4E9B;&#x5730;&#x65B9;&#x5F15;&#x7528;&#x4E00;&#x4E2A;&#x4E0D;&#x5B58;&#x7684;&#x7684;&#x53D8;&#x91CF;&#x7684;&#x65F6;&#x5019;&#x3002;&#x5F53;&#x4F60;&#x4F7F;&#x7528;&#x53D8;&#x91CF;&#x7684;&#x65F6;&#x5019;&#xFF0C;&#x8FD9;&#x4E2A;&#x53D8;&#x91CF;&#x5FC5;&#x987B;&#x662F;&#x5DF2;&#x7ECF;&#x88AB;&#x58F0;&#x660E;&#x7684;&#xFF0C;&#x6216;&#x8005;&#x4F60;&#x53EF;&#x4EE5;&#x786E;&#x4FDD;&#x5B83;&#x5728;&#x4F60;&#x5F53;&#x524D;&#x7684;&#x811A;&#x672C;&#x6216;&#x4F5C;&#x7528;&#x57DF; (<a title="scope: The current context of execution. The context in which values and expressions are &quot;visible,&quot; or can be referenced. If a variable or other expression is not &quot;in the current scope,&quot; then it is unavailable for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa." href="/en-US/docs/Glossary/scope" class="glossaryLink">scope</a>) &#x4E2D;&#x53EF;&#x7528;&#x3002;</p>

<div class="note">
<p><strong>&#x6CE8;&#x610F;:</strong>&#xA0;&#x5F53;&#x4F60;&#x52A0;&#x8F7D;&#x4E00;&#x4E2A;&#x5E93;&#x7684;&#x65F6;&#x5019;&#xFF08;&#x4F8B;&#x5982; jQuery&#xFF09;&#xFF0C;&#x8BF7;&#x786E;&#x4FDD;&#x4F60;&#x5728;&#x8FD9;&#x4E2A;&#x5E93;&#x52A0;&#x8F7D;&#x5B8C;&#x6BD5;&#x540E;&#x518D;&#x4F7F;&#x7528;&#x8FD9;&#x4E2A;&#x5E93;&#x4E2D;&#x7684;&#x53D8;&#x91CF;&#xFF0C;&#x5982;&#x201C;$&#x201D;&#x3002;&#x5C06;&#x4F60;&#x60F3;&#x52A0;&#x8F7D;&#x7684;&#x5E93;&#x7684;&#xA0;<a title="HTML &lt;script&gt;&#xA0;&#x5143;&#x7D20;&#x7684;&#x4F5C;&#x7528;&#x662F;&#x5728;HTML&#x6216;XHTML&#x6587;&#x6863;&#x4E2D;&#x5D4C;&#x5165;&#x6216;&#x5F15;&#x7528;&#x53EF;&#x6267;&#x884C;&#x7684;&#x811A;&#x672C;&#x3002;&#x6CA1;&#x6709;async&#x6216;defer&#x5C5E;&#x6027;&#x7684;&#x811A;&#x672C;&#x548C;&#x5185;&#x8054;&#x811A;&#x672C;&#x4F1A;&#x5728;&#x6D4F;&#x89C8;&#x5668;&#x7EE7;&#x7EED;&#x89E3;&#x6790;&#x5269;&#x4F59;&#x6587;&#x6863;&#x524D;&#x88AB;&#x83B7;&#x53D6;&#x5E76;&#x7ACB;&#x523B;&#x6267;&#x884C;&#x3002;" href="/zh-CN/docs/Web/HTML/Element/script"><code>&lt;script&gt;</code></a> &#x6807;&#x7B7E;&#x653E;&#x7F6E;&#x5728;&#x4F60;&#x7684;&#x4EE3;&#x7801;&#x524D;&#x9762;&#x3002;</p>
</div>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x53D8;&#x91CF;&#x6CA1;&#x6709;&#x88AB;&#x58F0;&#x660E;">&#x53D8;&#x91CF;&#x6CA1;&#x6709;&#x88AB;&#x58F0;&#x660E;</h3>

<pre class="brush: js example-bad">foo.substring(1); // ReferenceError: foo is not defined
</pre>

<p>&#x201C;foo&#x201D; &#x53D8;&#x91CF;&#x6CA1;&#x6709;&#x5728;&#x4EFB;&#x4F55;&#x5730;&#x65B9;&#x5457;&#x58F0;&#x660E;&#x3002;&#x5B83;&#x9700;&#x8981;&#x662F;&#x67D0;&#x79CD;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8FD9;&#x6837;&#xA0;<a title="substring() &#x8FD4;&#x56DE;&#x5B57;&#x7B26;&#x4E32;&#x4E24;&#x4E2A;&#x7D22;&#x5F15;&#x4E4B;&#x95F4;&#xFF08;&#x6216;&#x5230;&#x5B57;&#x7B26;&#x4E32;&#x672B;&#x5C3E;&#xFF09;&#x7684;&#x5B50;&#x4E32;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring"><code>String.prototype.substring()</code></a> &#x65B9;&#x6CD5;&#x624D;&#x53EF;&#x4EE5;&#x6B63;&#x5E38;&#x5DE5;&#x4F5C;&#x3002;</p>

<pre class="brush: js example-good">var foo = &quot;bar&quot;;
foo.substring(1); // &quot;ar&quot;</pre>

<h3 id="&#x9519;&#x8BEF;&#x7684;&#x4F5C;&#x7528;&#x57DF;">&#x9519;&#x8BEF;&#x7684;&#x4F5C;&#x7528;&#x57DF;</h3>

<p>&#x53D8;&#x91CF;&#x5FC5;&#x987B;&#x662F;&#x5728;&#x5B83;&#x5F53;&#x524D;&#x7684;&#x6267;&#x884C;&#x73AF;&#x5883;&#x4E2D;&#x53EF;&#x7528;&#x7684;&#x3002;&#x5728;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#xFF08;<a href="/en-US/docs/Web/JavaScript/Reference/Functions">function</a>&#xFF09;&#x4E2D;&#x5B9A;&#x4E49;&#x7684;&#x53D8;&#x91CF;&#x4E0D;&#x80FD;&#x4ECE;&#x8FD9;&#x4E2A;&#x51FD;&#x6570;&#x5916;&#x90E8;&#x7684;&#x4EFB;&#x4F55;&#x5730;&#x65B9;&#x8BBF;&#x95EE;&#xFF0C;&#x56E0;&#x4E3A;&#x8FD9;&#x4E2A;&#x53D8;&#x91CF;&#x7684;&#x4F5C;&#x7528;&#x57DF;&#x4EC5;&#x5728;&#x8FD9;&#x4E2A;&#x51FD;&#x6570;&#x7684;&#x5185;&#x90E8;&#x3002;</p>

<pre class="brush: js example-bad">function numbers () { 
  var num1 = 2, 
      num2 = 3;
  return num1 + num2;
}

console.log(num1); // ReferenceError num1 is not defined.</pre>

<p>&#x7136;&#x800C;&#xFF0C;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x53EF;&#x7528;&#x4F7F;&#x7528;&#x5728;&#x5B83;&#x6240;&#x88AB;&#x5B9A;&#x4E49;&#x7684;&#x4F5C;&#x7528;&#x57DF;&#x4E2D;&#x7684;&#x6240;&#x6709;&#x53D8;&#x91CF;&#x3002;&#x6362;&#x53E5;&#x8BDD;&#x8BF4;&#xFF0C;&#x5F53;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x88AB;&#x5B9A;&#x4E49;&#x5728;&#x5168;&#x5C40;&#x4F5C;&#x7528;&#x57DF;&#x7684;&#x65F6;&#x5019;&#xFF0C;&#x5B83;&#x53EF;&#x4EE5;&#x8BBF;&#x95EE;&#x6240;&#x6709;&#x5728;&#x5168;&#x5C40;&#x4F5C;&#x7528;&#x57DF;&#x4E2D;&#x5B9A;&#x4E49;&#x7684;&#x53D8;&#x91CF;&#x3002;</p>

<pre class="brush: js example-good">var num1 = 2,
    num2 = 3;

function numbers () {
  return num1 + num2; 
}

console.log(num1); // 2</pre>

<h2 id="&#x76F8;&#x5173;&#x9875;&#x9762;">&#x76F8;&#x5173;&#x9875;&#x9762;</h2>

<ul>
 <li><a title="Scope: The current context of execution. The context in which values and expressions are &quot;visible,&quot; or can be referenced. If a variable or other expression is not &quot;in the current scope,&quot; then it is unavailable for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa." href="/en-US/docs/Glossary/Scope" class="glossaryLink">Scope</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Declaring_variables">Declaring variables in the JavaScript Guide</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Functions#Function_scope/en-US/docs/">Function scope in the JavaScript Guide</a></li>
</ul>
                  
                
              