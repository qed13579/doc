import{_ as t,o,c,a as n,b as s,d as p,F as l,e,r}from"./app.8de1a9ea.js";const u={},i=e('<h1 id="_13-\u3010\u64CD\u4F5Cmysql\u6570\u636E\u5E93\u3011" tabindex="-1"><a class="header-anchor" href="#_13-\u3010\u64CD\u4F5Cmysql\u6570\u636E\u5E93\u3011" aria-hidden="true">#</a> 13 \u3010\u64CD\u4F5Cmysql\u6570\u636E\u5E93\u3011</h1><h2 id="_1-mysql-\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_1-mysql-\u4ECB\u7ECD" aria-hidden="true">#</a> 1.mysql \u4ECB\u7ECD</h2><p>\u4ED8\u8D39\u7684\u5546\u7528\u6570\u636E\u5E93\uFF1A</p><ul><li>Oracle\uFF0C\u5178\u578B\u7684\u9AD8\u5BCC\u5E05\uFF1B</li><li>SQL Server\uFF0C\u5FAE\u8F6F\u81EA\u5BB6\u4EA7\u54C1\uFF0CWindows\u5B9A\u5236\u4E13\u6B3E\uFF1B</li><li>DB2\uFF0CIBM\u7684\u4EA7\u54C1\uFF0C\u542C\u8D77\u6765\u633A\u9AD8\u7AEF\uFF1B</li><li>Sybase\uFF0C\u66FE\u7ECF\u8DDF\u5FAE\u8F6F\u662F\u597D\u57FA\u53CB\uFF0C\u540E\u6765\u5173\u7CFB\u7834\u88C2\uFF0C\u73B0\u5728\u5BB6\u5883\u60E8\u6DE1\u3002</li></ul><p>\u8FD9\u4E9B\u6570\u636E\u5E93\u90FD\u662F\u4E0D\u5F00\u6E90\u800C\u4E14\u4ED8\u8D39\u7684\uFF0C\u6700\u5927\u7684\u597D\u5904\u662F\u82B1\u4E86\u94B1\u51FA\u4E86\u95EE\u9898\u53EF\u4EE5\u627E\u5382\u5BB6\u89E3\u51B3\uFF0C\u4E0D\u8FC7\u5728Web\u7684\u4E16\u754C\u91CC\uFF0C\u5E38\u5E38\u9700\u8981\u90E8\u7F72\u6210\u5343\u4E0A\u4E07\u7684\u6570\u636E\u5E93\u670D\u52A1\u5668\uFF0C\u5F53\u7136\u4E0D\u80FD\u628A\u5927\u628A\u5927\u628A\u7684\u94F6\u5B50\u6254\u7ED9\u5382\u5BB6\uFF0C\u6240\u4EE5\uFF0C\u65E0\u8BBA\u662FGoogle\u3001Facebook\uFF0C\u8FD8\u662F\u56FD\u5185\u7684BAT\uFF0C\u65E0\u4E00\u4F8B\u5916\u90FD\u9009\u62E9\u4E86\u514D\u8D39\u7684\u5F00\u6E90\u6570\u636E\u5E93\uFF1A</p><ul><li>MySQL\uFF0C\u5927\u5BB6\u90FD\u5728\u7528\uFF0C\u4E00\u822C\u9519\u4E0D\u4E86\uFF1B</li><li>PostgreSQL\uFF0C\u5B66\u672F\u6C14\u606F\u6709\u70B9\u91CD\uFF0C\u5176\u5B9E\u633A\u4E0D\u9519\uFF0C\u4F46\u77E5\u540D\u5EA6\u6CA1\u6709MySQL\u9AD8\uFF1B</li><li>sqlite\uFF0C\u5D4C\u5165\u5F0F\u6570\u636E\u5E93\uFF0C\u9002\u5408\u684C\u9762\u548C\u79FB\u52A8\u5E94\u7528\u3002</li></ul><p>\u4F5C\u4E3A\u4E00\u4E2AJavaScript\u5168\u6808\u5DE5\u7A0B\u5E08\uFF0C\u9009\u62E9\u54EA\u4E2A\u514D\u8D39\u6570\u636E\u5E93\u5462\uFF1F\u5F53\u7136\u662FMySQL\u3002\u56E0\u4E3AMySQL\u666E\u53CA\u7387\u6700\u9AD8\uFF0C\u51FA\u4E86\u9519\uFF0C\u53EF\u4EE5\u5F88\u5BB9\u6613\u627E\u5230\u89E3\u51B3\u65B9\u6CD5\u3002\u800C\u4E14\uFF0C\u56F4\u7ED5MySQL\u6709\u4E00\u5927\u5806\u76D1\u63A7\u548C\u8FD0\u7EF4\u7684\u5DE5\u5177\uFF0C\u5B89\u88C5\u548C\u4F7F\u7528\u5F88\u65B9\u4FBF\u3002</p><p><img src="https://i0.hdslb.com/bfs/album/8fc1c58bb05d52c4afa0641a099c92d078a55789.png" alt="image-20220420083146539"></p><h2 id="_2-\u4E0E\u975E\u5173\u7CFB\u6570\u636E\u5E93\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_2-\u4E0E\u975E\u5173\u7CFB\u6570\u636E\u5E93\u533A\u522B" aria-hidden="true">#</a> 2.\u4E0E\u975E\u5173\u7CFB\u6570\u636E\u5E93\u533A\u522B</h2><p>\u5173\u7CFB\u578B\u548C\u975E\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7684\u4E3B\u8981\u5DEE\u5F02\u662F\u6570\u636E\u5B58\u50A8\u7684\u65B9\u5F0F\u3002\u5173\u7CFB\u578B\u6570\u636E\u5929\u7136\u5C31\u662F\u8868\u683C\u5F0F\u7684\uFF0C\u56E0\u6B64\u5B58\u50A8\u5728\u6570\u636E\u8868\u7684\u884C\u548C\u5217\u4E2D\u3002\u6570\u636E\u8868\u53EF\u4EE5\u5F7C\u6B64\u5173\u8054\u534F\u4F5C\u5B58\u50A8\uFF0C\u4E5F\u5F88\u5BB9\u6613\u63D0\u53D6\u6570\u636E\u3002</p><p>\u4E0E\u5176\u76F8\u53CD\uFF0C\u975E\u5173\u7CFB\u578B\u6570\u636E\u4E0D\u9002\u5408\u5B58\u50A8\u5728\u6570\u636E\u8868\u7684\u884C\u548C\u5217\u4E2D\uFF0C\u800C\u662F\u5927\u5757\u7EC4\u5408\u5728\u4E00\u8D77\u3002\u975E\u5173\u7CFB\u578B\u6570\u636E\u901A\u5E38\u5B58\u50A8\u5728\u6570\u636E\u96C6\u4E2D\uFF0C\u5C31\u50CF\u6587\u6863\u3001\u952E\u503C\u5BF9\u6216\u8005\u56FE\u7ED3\u6784\u3002\u4F60\u7684\u6570\u636E\u53CA\u5176\u7279\u6027\u662F\u9009\u62E9\u6570\u636E\u5B58\u50A8\u548C\u63D0\u53D6\u65B9\u5F0F\u7684\u9996\u8981\u5F71\u54CD\u56E0\u7D20\u3002</p><p><strong>\u5173\u7CFB\u578B\u6570\u636E\u5E93\u6700\u5178\u578B\u7684\u6570\u636E\u7ED3\u6784\u662F\u8868\uFF0C\u7531\u4E8C\u7EF4\u8868\u53CA\u5176\u4E4B\u95F4\u7684\u8054\u7CFB\u6240\u7EC4\u6210\u7684\u4E00\u4E2A\u6570\u636E\u7EC4\u7EC7</strong> \u4F18\u70B9\uFF1A 1\u3001\u6613\u4E8E\u7EF4\u62A4\uFF1A\u90FD\u662F\u4F7F\u7528\u8868\u7ED3\u6784\uFF0C\u683C\u5F0F\u4E00\u81F4\uFF1B 2\u3001\u4F7F\u7528\u65B9\u4FBF\uFF1ASQL\u8BED\u8A00\u901A\u7528\uFF0C\u53EF\u7528\u4E8E\u590D\u6742\u67E5\u8BE2\uFF1B 3\u3001\u590D\u6742\u64CD\u4F5C\uFF1A\u652F\u6301SQL\uFF0C\u53EF\u7528\u4E8E\u4E00\u4E2A\u8868\u4EE5\u53CA\u591A\u4E2A\u8868\u4E4B\u95F4\u975E\u5E38\u590D\u6742\u7684\u67E5\u8BE2\u3002 \u7F3A\u70B9\uFF1A 1\u3001\u8BFB\u5199\u6027\u80FD\u6BD4\u8F83\u5DEE\uFF0C\u5C24\u5176\u662F\u6D77\u91CF\u6570\u636E\u7684\u9AD8\u6548\u7387\u8BFB\u5199\uFF1B 2\u3001\u56FA\u5B9A\u7684\u8868\u7ED3\u6784\uFF0C\u7075\u6D3B\u5EA6\u7A0D\u6B20\uFF1B 3\u3001\u9AD8\u5E76\u53D1\u8BFB\u5199\u9700\u6C42\uFF0C\u4F20\u7EDF\u5173\u7CFB\u578B\u6570\u636E\u5E93\u6765\u8BF4\uFF0C\u786C\u76D8I/O\u662F\u4E00\u4E2A\u5F88\u5927\u7684\u74F6\u9888\u3002</p><p><strong>\u975E\u5173\u7CFB\u578B\u6570\u636E\u5E93\u4E25\u683C\u4E0A\u4E0D\u662F\u4E00\u79CD\u6570\u636E\u5E93\uFF0C\u5E94\u8BE5\u662F\u4E00\u79CD\u6570\u636E\u7ED3\u6784\u5316\u5B58\u50A8\u65B9\u6CD5\u7684\u96C6\u5408\uFF0C\u53EF\u4EE5\u662F\u6587\u6863\u6216\u8005\u952E\u503C\u5BF9\u7B49\u3002</strong></p><p>\u4F18\u70B9\uFF1A</p><p>1\u3001\u683C\u5F0F\u7075\u6D3B\uFF1A\u5B58\u50A8\u6570\u636E\u7684\u683C\u5F0F\u53EF\u4EE5\u662Fkey,value\u5F62\u5F0F\u3001\u6587\u6863\u5F62\u5F0F\u3001\u56FE\u7247\u5F62\u5F0F\u7B49\u7B49\uFF0C\u6587\u6863\u5F62\u5F0F\u3001\u56FE\u7247\u5F62\u5F0F\u7B49\u7B49\uFF0C\u4F7F\u7528\u7075\u6D3B\uFF0C\u5E94\u7528\u573A\u666F\u5E7F\u6CDB\uFF0C\u800C\u5173\u7CFB\u578B\u6570\u636E\u5E93\u5219\u53EA\u652F\u6301\u57FA\u7840\u7C7B\u578B\u3002 2\u3001\u901F\u5EA6\u5FEB\uFF1Anosql\u53EF\u4EE5\u4F7F\u7528\u786C\u76D8\u6216\u8005\u968F\u673A\u5B58\u50A8\u5668\u4F5C\u4E3A\u8F7D\u4F53\uFF0C\u800C\u5173\u7CFB\u578B\u6570\u636E\u5E93\u53EA\u80FD\u4F7F\u7528\u786C\u76D8\uFF1B 3\u3001\u9AD8\u6269\u5C55\u6027\uFF1B 4\u3001\u6210\u672C\u4F4E\uFF1Anosql\u6570\u636E\u5E93\u90E8\u7F72\u7B80\u5355\uFF0C\u57FA\u672C\u90FD\u662F\u5F00\u6E90\u8F6F\u4EF6\u3002</p><p>\u7F3A\u70B9\uFF1A</p><p>1\u3001\u4E0D\u63D0\u4F9Bsql\u652F\u6301\uFF1B 2\u3001\u65E0\u4E8B\u52A1\u5904\u7406\uFF1B 3\u3001\u6570\u636E\u7ED3\u6784\u76F8\u5BF9\u590D\u6742\uFF0C\u590D\u6742\u67E5\u8BE2\u65B9\u9762\u7A0D\u6B20\u3002</p><h2 id="_3-mysql2\u7684\u5386\u53F2\u4EE5\u53CA\u9009\u62E9\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#_3-mysql2\u7684\u5386\u53F2\u4EE5\u53CA\u9009\u62E9\u539F\u56E0" aria-hidden="true">#</a> 3.MySQL2\u7684\u5386\u53F2\u4EE5\u53CA\u9009\u62E9\u539F\u56E0</h2>',18),k={href:"https://github.com/sidorares/nodejs-mysql-native",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/mysqljs/mysql",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/mysqljs/mysql",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/mysqljs/mysql",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/mysqljs/mysql",target:"_blank",rel:"noopener noreferrer"},g=n("li",null,"\u66F4\u5FEB\u3001\u66F4\u597D\u7684\u6027\u80FD",-1),y={href:"https://github.com/sidorares/node-mysql2/tree/master/documentation/Prepared-Statements.md",target:"_blank",rel:"noopener noreferrer"},f=n("li",null,"MySQL\u4E8C\u8FDB\u5236\u65E5\u5FD7\u534F\u8BAE",-1),_={href:"https://github.com/sidorares/node-mysql2/tree/master/documentation/MySQL-Server.md",target:"_blank",rel:"noopener noreferrer"},q=n("li",null,"\u5BF9\u7F16\u7801\u548C\u6392\u5E8F\u89C4\u5219\u6709\u5F88\u597D\u7684\u652F\u6301",-1),v={href:"https://github.com/sidorares/node-mysql2/tree/master/documentation/Promise-Wrapper.md",target:"_blank",rel:"noopener noreferrer"},w=n("li",null,"\u652F\u6301\u538B\u7F29",-1),S={href:"https://github.com/sidorares/node-mysql2/tree/master/documentation/Authentication-Switch.md",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/sidorares/node-mysql2/tree/master/documentation/Extras.md",target:"_blank",rel:"noopener noreferrer"},j={href:"https://github.com/sidorares/node-mysql2/tree/master/documentation_zh-cn#using-connection-pools",target:"_blank",rel:"noopener noreferrer"},L=e(`<p>MySQL2 \u53EF\u4EE5\u8DE8\u5E73\u53F0\u4F7F\u7528\uFF0C\u6BEB\u65E0\u7591\u95EE\u53EF\u4EE5\u5B89\u88C5\u5728 Linux\u3001Mac OS \u6216 Windows \u4E0A\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--save</span> mysql2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_4-\u8FDE\u63A5\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#_4-\u8FDE\u63A5\u6570\u636E\u5E93" aria-hidden="true">#</a> 4.\u8FDE\u63A5\u6570\u636E\u5E93</h2><p><code>config/db.config.js</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> mysql <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mysql2/promise&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u901A\u8FC7createPool\u65B9\u6CD5\u8FDE\u63A5\u670D\u52A1\u5668</span>
<span class="token keyword">const</span> db <span class="token operator">=</span> mysql<span class="token punctuation">.</span><span class="token function">createPool</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8868\u793A\u8FDE\u63A5\u67D0\u4E2A\u670D\u52A1\u5668\u4E0A\u7684mysql\u6570\u636E\u5E93</span>
  <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6570\u636E\u5E93\u7684\u7528\u6237\u540D \uFF08\u9ED8\u8BA4\u4E3Aroot\uFF09</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6570\u636E\u5E93\u7684\u5BC6\u7801 (\u9ED8\u8BA4\u4E3Aroot)</span>
  <span class="token literal-property property">database</span><span class="token operator">:</span> <span class="token string">&#39;dbtest11&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u521B\u5EFA\u7684\u672C\u5730\u6570\u636E\u5E93\u540D\u79F0</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u6D4B\u8BD5\u6570\u636E\u5E93\u662F\u5426\u8FDE\u63A5\u6210\u529F</span>
db<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> conn</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  conn<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8FDE\u63A5\u5931\u8D25~&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8FDE\u63A5\u6210\u529F~&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> db
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="_5-\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_5-\u67E5\u8BE2" aria-hidden="true">#</a> 5.\u67E5\u8BE2</h2><ul><li>\u5BFC\u5165mysql</li><li>\u901A\u8FC7createPool\u65B9\u6CD5\u5C06mysql\u6570\u636E\u5E93\u8FDE\u63A5\u5230\u670D\u52A1\u5668\uFF0C\u5E76\u58F0\u660E\u4E00\u4E2Adb\u53D8\u91CF</li><li>\u901A\u8FC7db.query\u65B9\u6CD5\u6D4B\u8BD5\u662F\u5426\u8FDE\u63A5\u6210\u529F</li><li>\u5C06\u6570\u636E\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF <ul><li>\u5BFC\u5165express</li><li>\u521B\u5EFA\u670D\u52A1\u5668</li><li>\u542F\u52A8\u670D\u52A1\u5668</li><li>\u6CE8\u518C\u8DEF\u7531</li><li>\u901A\u8FC7db.query\uFF08\u67E5\u8BE2\u6570\u636E\u5E93\uFF09\u6765\u6267\u884Csql\u8BED\u53E5</li><li>\u5982\u679C\u6267\u884C\u6210\u529F\u5C06\u6570\u636E\u54CD\u5E94\u7ED9\u5BA2\u6237\u7AEF</li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> db <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../config/db.config&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u901A\u8FC7nodejs\u83B7\u53D6\u6570\u636E\u5E93\u4E2D\u7684\u6570\u636E  \u5E76\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF-</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u901A\u8FC7db.query\u65B9\u6CD5\u6765\u6267\u884Cmysql  \u6D4B\u8BD5\u662F\u5426\u8FDE\u63A5\u6210\u529F</span>
  <span class="token comment">// \u67E5\u8BE2\u8BED\u53E5 data \u5F97\u5230\u7684\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C  \u589E\u5220\u6539\u5F97\u5230\u7684\u662F\u53D7\u5F71\u54CD\u7684\u884C\u6570</span>
  <span class="token keyword">let</span> users <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">&#39;select * from users&#39;</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>users<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">ok</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> users<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u63A7\u5236\u53F0\u8F93\u51FA\uFF1A</p><p><img src="https://i0.hdslb.com/bfs/album/8ab5e75aff0d880a7842e5c9faff295ff16936f8.png" alt="image-20221105230812798"></p><p>\u8FD4\u56DE\u7684\u6570\u636E\uFF1A</p><p><img src="https://i0.hdslb.com/bfs/album/2b34f7577230de56f5d481588c7758ea024d53f4.png" alt="image-20221105230828022"></p><h2 id="_6-\u63D2\u5165" tabindex="-1"><a class="header-anchor" href="#_6-\u63D2\u5165" aria-hidden="true">#</a> 6.\u63D2\u5165</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u7ED9user\u4E2D\u6DFB\u52A0\u7528\u6237\u540D\u548C\u5BC6\u7801</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/addUser&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> sql <span class="token operator">=</span> <span class="token string">&#39;insert into users (userid,department_id) values (?,?)&#39;</span> <span class="token comment">// \u6784\u5EFAsql\u8BED\u53E5</span>
  <span class="token comment">// \u6267\u884Csql\u8BED\u53E5</span>
  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;Mary&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">ok</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u63A7\u5236\u53F0\u8F93\u51FA\uFF1A</p><p><img src="https://i0.hdslb.com/bfs/album/e881a7c9d4663f1f81817f0a4d899a0428c67b64.png" alt="image-20221105231625375"></p><h2 id="_7-\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#_7-\u4FEE\u6539" aria-hidden="true">#</a> 7.\u4FEE\u6539</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4FEE\u6539\u6570\u636E</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/updateUser&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> sql <span class="token operator">=</span> <span class="token string">&#39;update users set userid=?,department_id=? where id=?&#39;</span> <span class="token comment">// \u6784\u5EFAsql\u8BED\u53E5</span>
  <span class="token comment">// \u6267\u884Csql\u8BED\u53E5</span>
  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;Jerry&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">ok</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u63A7\u5236\u53F0\u8F93\u51FA\uFF1A</p><p><img src="https://i0.hdslb.com/bfs/album/be9866defbe7223d33530db79638606752fc3b9f.png" alt="image-20221106095506641"></p><h2 id="_8-\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#_8-\u5220\u9664" aria-hidden="true">#</a> 8.\u5220\u9664</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5220\u9664\u6570\u636E</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/deleteUser&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> sql <span class="token operator">=</span> <span class="token string">&#39;delete from users where id=?&#39;</span> <span class="token comment">// \u6784\u5EFAsql\u8BED\u53E5</span>
  <span class="token comment">// \u6267\u884Csql\u8BED\u53E5</span>
  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">ok</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u63A7\u5236\u53F0\u8F93\u51FA\uFF1A</p><p><img src="https://i0.hdslb.com/bfs/album/45f7756833e7a6b94fe54c92ae3c350e12614d92.png" alt="image-20221106100105915"></p>`,24);function Q(M,P){const a=r("ExternalLinkIcon");return o(),c(l,null,[i,n("p",null,[s("MySQL2 \u9879\u76EE\u662F "),n("a",k,[s("MySQL-Native"),p(a)]),s(" \u7684\u5EF6\u7EED\u3002 \u534F\u8BAE\u89E3\u6790\u5668\u4EE3\u7801\u4ECE\u5934\u5F00\u59CB\u91CD\u5199\uFF0Capi \u66F4\u6539\u4E3A\u5339\u914D\u6D41\u884C\u7684 "),n("a",m,[s("mysqljs/mysql"),p(a)]),s("\u3002 MySQL2 \u56E2\u961F\u6B63\u5728\u4E0E "),n("a",b,[s("mysqljs/mysql"),p(a)]),s(" \u56E2\u961F\u5408\u4F5C\uFF0C\u5C06\u5171\u4EAB\u4EE3\u7801\u5206\u89E3\u5E76\u79FB\u81F3 "),n("a",d,[s("mysqljs"),p(a)]),s(" \u7EC4\u7EC7\u4E0B\u3002")]),n("p",null,[s("MySQL2 \u5927\u90E8\u5206 API \u4E0E "),n("a",h,[s("mysqljs"),p(a)]),s(" \u517C\u5BB9\uFF0C\u5E76\u652F\u6301\u5927\u90E8\u5206\u529F\u80FD\u3002 MySQL2 \u8FD8\u63D0\u4F9B\u4E86\u66F4\u591A\u7684\u9644\u52A0\u529F\u80FD")]),n("ul",null,[g,n("li",null,[n("a",y,[s("\u652F\u6301\u9884\u5904\u7406"),p(a)])]),f,n("li",null,[n("a",_,[s("MySQL Server"),p(a)])]),q,n("li",null,[n("a",v,[s("Promise\u5C01\u88C5"),p(a)])]),w,n("li",null,[s("SSL \u548C "),n("a",S,[s("Authentication Switch"),p(a)])]),n("li",null,[n("a",x,[s("\u81EA\u5B9A\u4E49\u6D41"),p(a)])]),n("li",null,[n("a",j,[s("\u8FDE\u63A5\u6C60"),p(a)])])]),L],64)}var I=t(u,[["render",Q],["__file","13 \u3010\u64CD\u4F5Cmysql\u6570\u636E\u5E93\u3011.html.vue"]]);export{I as default};
