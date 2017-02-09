react-demo
====
头创建一个基于 React, webpack, babel 的模板项目
-------
### 项目结构
<pre>
- src
    - index.js
    - App.js
- .babelrc
- index.html
- package.json
- server.js
- webpack.config.js
</pre>
### 1、初始化项目
    首先新建一个名为react-demo的文件夹，然后在命令行下对项目进行初始化 <br/>
<pre>
    <code>npm init</code>
</pre>
    之后需要按照提示输入项目的基本信息，按enter键下一步 ，或者运行：<br/>
<pre>
    <code>npm init -y    // 所有信息都按照默认设置</code>
</pre>
    npm init 命令的作用就是初始化一个项目，你可以发现项目文件夹内多出了一个 package.json 文件，它的内容如下：
<pre>
<span class="line"><span class="comment">// 按照默认设置生成的 package.json 文件</span></span><br><span class="line">{</span><br><span class="line">  <span class="string">"name"</span>: <span class="string">"react-demo"</span>,</span><br><span class="line">  <span class="string">"version"</span>: <span class="string">"1.0.0"</span>,</span><br><span class="line">  <span class="string">"description"</span>: <span class="string">""</span>,</span><br><span class="line">  <span class="string">"main"</span>: <span class="string">"index.js"</span>,</span><br><span class="line">  <span class="string">"scripts"</span>: {</span><br><span class="line">    <span class="string">"test"</span>: <span class="string">"echo \"Error: no test specified\" &amp;&amp; exit 1"</span></span><br><span class="line">  },</span><br><span class="line">  <span class="string">"keywords"</span>: [],</span><br><span class="line">  <span class="string">"author"</span>: <span class="string">""</span>,</span><br><span class="line">  <span class="string">"license"</span>: <span class="string">"ISC"</span></span><br><span class="line">}</span><br>
</pre>

