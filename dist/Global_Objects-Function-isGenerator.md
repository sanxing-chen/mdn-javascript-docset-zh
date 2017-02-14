
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="overheadIndicator nonStandard nonStandardHeader"> 
      <p><strong><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> &#x975E;&#x6807;&#x51C6;</strong><br> 
      &#x8BE5;&#x7279;&#x6027;&#x662F;&#x975E;&#x6807;&#x51C6;&#x7684;&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#xFF01;</p> 
      </div></div>

<h2 id="&#x6982;&#x8FF0;">&#x6982;&#x8FF0;</h2>

<p>&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x662F;&#x5426;&#x662F;&#x4E00;&#x4E2A;<a title="zh-cn/Core JavaScript 1.5 Guide/Iterators and Generators#Generators.3a a better way to build Iterators" href="/zh-cn/JavaScript/Guide/Iterators_and_Generators#Generators.3a_a_better_way_to_build_Iterators">&#x751F;&#x6210;&#x5668;</a>.</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>fun</var>.isGenerator()</code></pre>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x8BE5;&#x65B9;&#x6CD5;&#x7528;&#x6765;&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x662F;&#x5426;&#x662F;&#x4E00;&#x4E2A;<a title="zh-cn/Core JavaScript 1.5 Guide/Iterators and Generators#Generators.3a a better way to build Iterators" href="/zh-cn/JavaScript/Guide/Iterators_and_Generators#Generators.3a_a_better_way_to_build_Iterators">&#x751F;&#x6210;&#x5668;</a>.</p>

<h2 id="&#x4F8B;&#x5B50;">&#x4F8B;&#x5B50;</h2>

<pre class="brush: js">function f()&#xA0;{}
function* g() {
&#xA0; yield 42;
}
console.log(&quot;f.isGenerator() = &quot; +&#xA0;f.isGenerator());
console.log(&quot;g.isGenerator() = &quot; +&#xA0;g.isGenerator());
</pre>

<p>&#x4E0A;&#x9762;&#x4EE3;&#x7801;&#x7684;&#x8F93;&#x51FA;&#x7ED3;&#x679C;&#x4E3A;</p>

<pre>f.isGenerator()&#xA0;= false
g.isGenerator()&#xA0;= true 
</pre>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="zh-cn/Core JavaScript 1.5 Guide/Iterators and Generators" href="/zh-cn/JavaScript/Guide/Iterators_and_Generators">&#x8FED;&#x4EE3;&#x5668;&#x548C;&#x751F;&#x6210;&#x5668;</a></li>
</ul>
                  
                
              