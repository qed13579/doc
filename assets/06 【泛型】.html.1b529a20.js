import{_ as n,e as s}from"./app.8de1a9ea.js";const a={},p=s(`<h1 id="_8-\u6CDB\u578B" tabindex="-1"><a class="header-anchor" href="#_8-\u6CDB\u578B" aria-hidden="true">#</a> 8.\u6CDB\u578B</h1><h2 id="_8-1-\u57FA\u672C\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_8-1-\u57FA\u672C\u4ECB\u7ECD" aria-hidden="true">#</a> 8.1 \u57FA\u672C\u4ECB\u7ECD</h2><p>\u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570\u6216\u7C7B\u65F6\uFF0C\u6709\u4E9B\u60C5\u51B5\u4E0B\u65E0\u6CD5\u786E\u5B9A\u5176\u4E2D\u8981\u4F7F\u7528\u7684\u5177\u4F53\u7C7B\u578B\uFF08\u8FD4\u56DE\u503C\u3001\u53C2\u6570\u3001\u5C5E\u6027\u7684\u7C7B\u578B\u4E0D\u80FD\u786E\u5B9A\uFF09\uFF0C\u6B64\u65F6\u6CDB\u578B\u4FBF\u80FD\u591F\u53D1\u6325\u4F5C\u7528\u3002</p><ul><li><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><ul><li><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">identity</span> <span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> arg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>\u4E0A\u4F8B\u4E2D\uFF0Cidentity \u51FD\u6570\u6709\u4E00\u4E2A\u53C2\u6570\u7C7B\u578B\u4E0D\u786E\u5B9A\uFF0C\u4F46\u662F\u80FD\u786E\u5B9A\u7684\u65F6\u5176\u8FD4\u56DE\u503C\u7684\u7C7B\u578B\u548C\u53C2\u6570\u7684\u7C7B\u578B\u662F\u76F8\u540C\u7684\uFF0C\u7531\u4E8E\u7C7B\u578B\u4E0D\u786E\u5B9A\u6240\u4EE5\u53C2\u6570\u548C\u8FD4\u56DE\u503C\u5747\u4F7F\u7528\u4E86any\uFF0C\u4F46\u662F\u5F88\u660E\u663E\u8FD9\u6837\u505A\u662F\u4E0D\u5408\u9002\u7684\uFF0C\u9996\u5148\u4F7F\u7528any\u4F1A\u5173\u95EDTS\u7684\u7C7B\u578B\u68C0\u67E5\uFF0C\u5176\u6B21\u8FD9\u6837\u8BBE\u7F6E\u4E5F\u4E0D\u80FD\u4F53\u73B0\u51FA\u53C2\u6570\u548C\u8FD4\u56DE\u503C\u662F\u76F8\u540C\u7684\u7C7B\u578B</p></li><li><p>\u4F7F\u7528\u6CDB\u578B\uFF1A \u4E3A\u4E86\u89E3\u51B3\u4E0A\u9762\u7684\u8FD9\u4E9B\u95EE\u9898\uFF0C\u6211\u4EEC<strong>\u4F7F\u7528\u6CDB\u578B\u5BF9\u4E0A\u9762\u7684\u4EE3\u7801\u8FDB\u884C\u91CD\u6784</strong>\u3002\u548C\u6211\u4EEC\u7684\u5B9A\u4E49\u4E0D\u540C\uFF0C\u8FD9\u91CC\u7528\u4E86\u4E00\u4E2A \u7C7B\u578B T\uFF0C\u8FD9\u4E2A <strong>T \u662F\u4E00\u4E2A\u62BD\u8C61\u7C7B\u578B\uFF0C\u53EA\u6709\u5728\u8C03\u7528\u7684\u65F6\u5019\u624D\u786E\u5B9A\u5B83\u7684\u503C</strong>\u3002</p></li><li><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><ol><li>\u8BED\u6CD5\uFF1A\u5728\u51FD\u6570\u540D\u79F0\u7684\u540E\u9762\u6DFB\u52A0 <code>&lt;&gt;</code>(\u5C16\u62EC\u53F7)\uFF0C<strong>\u5C16\u62EC\u53F7\u4E2D\u6DFB\u52A0\u7C7B\u578B\u53D8\u91CF</strong>\uFF0C\u6BD4\u5982\u6B64\u5904\u7684 Type</li><li><strong>\u7C7B\u578B\u53D8\u91CF Type\uFF0C\u662F\u4E00\u79CD\u7279\u6B8A\u7C7B\u578B\u7684\u53D8\u91CF\uFF0C\u5B83\u5904\u7406\u7C7B\u578B\u800C\u4E0D\u662F\u503C</strong></li><li><strong>\u8BE5\u7C7B\u578B\u53D8\u91CF\u76F8\u5F53\u4E8E\u4E00\u4E2A\u7C7B\u578B\u5BB9\u5668</strong>\uFF0C\u80FD\u591F\u6355\u83B7\u7528\u6237\u63D0\u4F9B\u7684\u7C7B\u578B(\u5177\u4F53\u662F\u4EC0\u4E48\u7C7B\u578B\u7531\u7528\u6237\u8C03\u7528\u8BE5\u51FD\u6570\u65F6\u6307\u5B9A)</li><li>\u56E0\u4E3A Type \u662F\u7C7B\u578B\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5C06\u5176\u4F5C\u4E3A\u51FD\u6570\u53C2\u6570\u548C\u8FD4\u56DE\u503C\u7684\u7C7B\u578B\uFF0C\u8868\u793A\u53C2\u6570\u548C\u8FD4\u56DE\u503C\u5177\u6709\u76F8\u540C\u7684\u7C7B\u578B</li><li>\u7C7B\u578B\u53D8\u91CF Type\uFF0C\u53EF\u4EE5\u662F\u4EFB\u610F\u5408\u6CD5\u7684\u53D8\u91CF\u540D\u79F0</li></ol></li><li><p>\u9664\u4E86 <code>T</code> \u4E4B\u5916\uFF0C\u4EE5\u4E0B\u662F\u5E38\u89C1\u6CDB\u578B\u53D8\u91CF\u4EE3\u8868\u7684\u610F\u601D\uFF1A</p><ul><li>K\uFF08Key\uFF09\uFF1A\u8868\u793A\u5BF9\u8C61\u4E2D\u7684\u952E\u7C7B\u578B\uFF1B</li><li>V\uFF08Value\uFF09\uFF1A\u8868\u793A\u5BF9\u8C61\u4E2D\u7684\u503C\u7C7B\u578B\uFF1B</li><li>E\uFF08Element\uFF09\uFF1A\u8868\u793A\u5143\u7D20\u7C7B\u578B\u3002 <img src="https://i0.hdslb.com/bfs/album/f0875f26e68c8533ab32d23a82bbae11e2232b50.png" alt="image-20220807133943971"></li></ul></li><li><p>\u90A3\u4E48\u5982\u4F55\u4F7F\u7528\u4E0A\u8FB9\u7684\u51FD\u6570\u5462\uFF1F</p><ul><li><p>\u65B9\u5F0F\u4E00\uFF08\u76F4\u63A5\u4F7F\u7528\uFF09\uFF1A</p><ul><li><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">identity</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><ol><li>\u5728\u8C03\u7528\u6CDB\u578B\u51FD\u6570\u65F6\uFF0C<strong>\u53EF\u4EE5\u7701\u7565 <code>&lt;\u7C7B\u578B&gt;</code> \u6765\u7B80\u5316\u6CDB\u578B\u51FD\u6570\u7684\u8C03\u7528</strong></li><li>\u6B64\u65F6\uFF0CTS \u5185\u90E8\u4F1A\u91C7\u7528\u4E00\u79CD\u53EB\u505A<strong>\u7C7B\u578B\u53C2\u6570\u63A8\u65AD</strong>\u7684\u673A\u5236\uFF0C\u6765\u6839\u636E\u4F20\u5165\u7684\u5B9E\u53C2\u81EA\u52A8\u63A8\u65AD\u51FA\u7C7B\u578B\u53D8\u91CF Type \u7684\u7C7B\u578B</li><li>\u6BD4\u5982\uFF0C\u4F20\u5165\u5B9E\u53C2 10\uFF0CTS \u4F1A\u81EA\u52A8\u63A8\u65AD\u51FA\u53D8\u91CF num \u7684\u7C7B\u578B number\uFF0C\u5E76\u4F5C\u4E3A Type \u7684\u7C7B\u578B</li></ol><blockquote><ul><li>\u63A8\u8350\uFF1A\u4F7F\u7528\u8FD9\u79CD\u7B80\u5316\u7684\u65B9\u5F0F\u8C03\u7528\u6CDB\u578B\u51FD\u6570\uFF0C\u4F7F\u4EE3\u7801\u66F4\u77ED\uFF0C\u66F4\u6613\u4E8E\u9605\u8BFB</li><li>\u8BF4\u660E\uFF1A<strong>\u5F53\u7F16\u8BD1\u5668\u65E0\u6CD5\u63A8\u65AD\u7C7B\u578B\u6216\u8005\u63A8\u65AD\u7684\u7C7B\u578B\u4E0D\u51C6\u786E\u65F6\uFF0C\u5C31\u9700\u8981\u663E\u5F0F\u5730\u4F20\u5165\u7C7B\u578B\u53C2\u6570</strong></li></ul></blockquote></li></ul></li><li><p>\u65B9\u5F0F\u4E8C\uFF08\u6307\u5B9A\u7C7B\u578B\uFF09\uFF1A</p><ul><li><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><ol><li><p>\u8BED\u6CD5\uFF1A\u5728\u51FD\u6570\u540D\u79F0\u7684\u540E\u9762\u6DFB\u52A0 <code>&lt;&gt;</code>(\u5C16\u62EC\u53F7)\uFF0C<strong>\u5C16\u62EC\u53F7\u4E2D\u6307\u5B9A\u5177\u4F53\u7684\u7C7B\u578B</strong>\uFF0C\u6BD4\u5982\uFF0C\u6B64\u5904\u7684 number</p></li><li><p>\u5F53\u4F20\u5165\u7C7B\u578B number \u540E\uFF0C\u8FD9\u4E2A\u7C7B\u578B\u5C31\u4F1A\u88AB\u51FD\u6570\u58F0\u660E\u65F6\u6307\u5B9A\u7684\u7C7B\u578B\u53D8\u91CF Type \u6355\u83B7\u5230</p></li><li><p>\u6B64\u65F6\uFF0CType \u7684\u7C7B\u578B\u5C31\u662F number\uFF0C\u6240\u4EE5\uFF0C\u51FD\u6570 id \u53C2\u6570\u548C\u8FD4\u56DE\u503C\u7684\u7C7B\u578B\u4E5F\u90FD\u662F number</p><blockquote><ul><li><p>\u540C\u6837\uFF0C\u5982\u679C\u4F20\u5165\u7C7B\u578B string\uFF0C\u51FD\u6570 id \u53C2\u6570\u548C\u8FD4\u56DE\u503C\u7684\u7C7B\u578B\u5C31\u90FD\u662F string</p></li><li><p>\u8FD9\u6837\uFF0C\u901A\u8FC7\u6CDB\u578B\u5C31\u505A\u5230\u4E86\u8BA9 id \u51FD\u6570\u4E0E\u591A\u79CD\u4E0D\u540C\u7684\u7C7B\u578B\u4E00\u8D77\u5DE5\u4F5C\uFF0C<strong>\u5B9E\u73B0\u4E86\u590D\u7528\u7684\u540C\u65F6\u4FDD\u8BC1\u4E86\u7C7B\u578B\u5B89\u5168</strong></p></li></ul></blockquote></li></ol></li></ul></li></ul></li><li><p>\u5176\u5B9E\u5E76\u4E0D\u662F\u53EA\u80FD\u5B9A\u4E49\u4E00\u4E2A\u7C7B\u578B\u53D8\u91CF\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5F15\u5165\u5E0C\u671B\u5B9A\u4E49\u7684\u4EFB\u4F55\u6570\u91CF\u7684\u7C7B\u578B\u53D8\u91CF\u3002\u6BD4\u5982\u6211\u4EEC\u5F15\u5165\u4E00\u4E2A\u65B0\u7684\u7C7B\u578B\u53D8\u91CF <code>U</code>\uFF0C\u7528\u4E8E\u6269\u5C55\u6211\u4EEC\u5B9A\u4E49\u7684 <code>identity</code> \u51FD\u6570\uFF1A</p><ul><li><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">identity</span> <span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token constant">U</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span>Number<span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">68</span><span class="token punctuation">,</span> <span class="token string">&quot;Semlinker&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="https://i0.hdslb.com/bfs/album/1d646c21096038011017b93333d8fecd97639e4f.png" alt="image-20220807134038387"></p></li><li><p>\u4F7F\u7528\u6CDB\u578B\u65F6\uFF0C\u5B8C\u5168\u53EF\u4EE5\u5C06\u6CDB\u578B\u5F53\u6210\u662F\u4E00\u4E2A\u666E\u901A\u7684\u7C7B\u53BB\u4F7F\u7528</p></li></ul></li><li><p>\u7C7B\u4E2D\u540C\u6837\u53EF\u4EE5\u4F7F\u7528\u6CDB\u578B\uFF1A</p><ul><li><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">MyClass<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span><span class="token punctuation">{</span>
    prop<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>prop<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>prop <span class="token operator">=</span> prop<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li></ul></li></ul></li></ul><h2 id="_8-2-\u6CDB\u578B\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#_8-2-\u6CDB\u578B\u7EA6\u675F" aria-hidden="true">#</a> 8.2 \u6CDB\u578B\u7EA6\u675F</h2><ul><li>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6CDB\u578B\u51FD\u6570\u7684\u7C7B\u578B\u53D8\u91CF Type \u53EF\u4EE5\u4EE3\u8868\u591A\u4E2A\u7C7B\u578B\uFF0C\u8FD9\u5BFC\u81F4\u65E0\u6CD5\u8BBF\u95EE\u4EFB\u4F55\u5C5E\u6027</li><li>\u6BD4\u5982\uFF0Cid(&#39;a&#39;) \u8C03\u7528\u51FD\u6570\u65F6\u83B7\u53D6\u53C2\u6570\u7684\u957F\u5EA6\uFF1A</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">id</span><span class="token generic class-name"><span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>value<span class="token operator">:</span> Type<span class="token punctuation">)</span><span class="token operator">:</span> Type <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
  <span class="token keyword">return</span> value
<span class="token punctuation">}</span>

<span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>\u89E3\u91CA\uFF1AType \u53EF\u4EE5\u4EE3\u8868\u4EFB\u610F\u7C7B\u578B\uFF0C\u65E0\u6CD5\u4FDD\u8BC1\u4E00\u5B9A\u5B58\u5728 length \u5C5E\u6027\uFF0C\u6BD4\u5982 number \u7C7B\u578B\u5C31\u6CA1\u6709 length</li><li>\u6B64\u65F6\uFF0C\u5C31\u9700\u8981<strong>\u4E3A\u6CDB\u578B\u6DFB\u52A0\u7EA6\u675F\u6765<code>\u6536\u7F29\u7C7B\u578B</code>(\u7F29\u7A84\u7C7B\u578B\u53D6\u503C\u8303\u56F4)</strong></li><li>\u6DFB\u52A0\u6CDB\u578B\u7EA6\u675F\u6536\u7F29\u7C7B\u578B\uFF0C\u4E3B\u8981\u6709\u4EE5\u4E0B\u4E24\u79CD\u65B9\u5F0F\uFF1A1 \u6307\u5B9A\u66F4\u52A0\u5177\u4F53\u7684\u7C7B\u578B 2 \u6DFB\u52A0\u7EA6\u675F</li></ul><h3 id="_8-2-1-\u6307\u5B9A\u66F4\u52A0\u5177\u4F53\u7684\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_8-2-1-\u6307\u5B9A\u66F4\u52A0\u5177\u4F53\u7684\u7C7B\u578B" aria-hidden="true">#</a> 8.2.1 \u6307\u5B9A\u66F4\u52A0\u5177\u4F53\u7684\u7C7B\u578B</h3><p>\u6BD4\u5982\uFF0C\u5C06\u7C7B\u578B\u4FEE\u6539\u4E3A <code>Type[]</code>(Type \u7C7B\u578B\u7684\u6570\u7EC4)\uFF0C\u56E0\u4E3A\u53EA\u8981\u662F\u6570\u7EC4\u5C31\u4E00\u5B9A\u5B58\u5728 length \u5C5E\u6027\uFF0C\u56E0\u6B64\u5C31\u53EF\u4EE5\u8BBF\u95EE\u4E86</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">id</span><span class="token generic class-name"><span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>value<span class="token operator">:</span> Type<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> Type<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
  <span class="token keyword">return</span> value
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_8-2-2-\u6DFB\u52A0\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#_8-2-2-\u6DFB\u52A0\u7EA6\u675F" aria-hidden="true">#</a> 8.2.2 \u6DFB\u52A0\u7EA6\u675F</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u63A5\u53E3</span>
<span class="token keyword">interface</span> <span class="token class-name">ILength</span> <span class="token punctuation">{</span> length<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>

<span class="token comment">// Type extends ILength \u6DFB\u52A0\u6CDB\u578B\u7EA6\u675F</span>
<span class="token comment">// \u89E3\u91CA\uFF1A\u8868\u793A\u4F20\u5165\u7684 \u7C7B\u578B \u5FC5\u987B\u6EE1\u8DB3 ILength \u63A5\u53E3\u7684\u8981\u6C42\u624D\u884C\uFF0C\u4E5F\u5C31\u662F\u5F97\u6709\u4E00\u4E2A number \u7C7B\u578B\u7684 length \u5C5E\u6027</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">id</span><span class="token generic class-name"><span class="token operator">&lt;</span>Type <span class="token keyword">extends</span> ILength<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>value<span class="token operator">:</span> Type<span class="token punctuation">)</span><span class="token operator">:</span> Type <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
  <span class="token keyword">return</span> value
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>\u89E3\u91CA: <ol><li>\u521B\u5EFA\u63CF\u8FF0\u7EA6\u675F\u7684\u63A5\u53E3 ILength\uFF0C\u8BE5\u63A5\u53E3\u8981\u6C42\u63D0\u4F9B length \u5C5E\u6027</li><li>\u901A\u8FC7 <code>extends</code> \u5173\u952E\u5B57\u4F7F\u7528\u8BE5\u63A5\u53E3\uFF0C\u4E3A\u6CDB\u578B(\u7C7B\u578B\u53D8\u91CF)\u6DFB\u52A0\u7EA6\u675F</li><li>\u8BE5\u7EA6\u675F\u8868\u793A\uFF1A<strong>\u4F20\u5165\u7684\u7C7B\u578B\u5FC5\u987B\u5177\u6709 length \u5C5E\u6027</strong></li></ol></li><li>\u6CE8\u610F:\u4F20\u5165\u7684\u5B9E\u53C2(\u6BD4\u5982\uFF0C\u6570\u7EC4)\u53EA\u8981\u6709 length \u5C5E\u6027\u5373\u53EF\uFF08\u7C7B\u578B\u517C\u5BB9\u6027)</li></ul><h2 id="_8-3-\u6CDB\u578B\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_8-3-\u6CDB\u578B\u63A5\u53E3" aria-hidden="true">#</a> 8.3 \u6CDB\u578B\u63A5\u53E3</h2><p>\u6CDB\u578B\u63A5\u53E3\uFF1A\u63A5\u53E3\u4E5F\u53EF\u4EE5\u914D\u5408\u6CDB\u578B\u6765\u4F7F\u7528\uFF0C\u4EE5\u589E\u52A0\u5176\u7075\u6D3B\u6027\uFF0C\u589E\u5F3A\u5176\u590D\u7528\u6027</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">IdFunc<span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token function-variable function">id</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> Type<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Type
  <span class="token function-variable function">ids</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Type<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> obj<span class="token operator">:</span> IdFunc<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">id</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> value <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">ids</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>\u89E3\u91CA: <ol><li>\u5728\u63A5\u53E3\u540D\u79F0\u7684\u540E\u9762\u6DFB\u52A0 <code>&lt;\u7C7B\u578B\u53D8\u91CF&gt;</code>\uFF0C\u90A3\u4E48\uFF0C\u8FD9\u4E2A\u63A5\u53E3\u5C31\u53D8\u6210\u4E86\u6CDB\u578B\u63A5\u53E3\u3002</li><li>\u63A5\u53E3\u7684\u7C7B\u578B\u53D8\u91CF\uFF0C\u5BF9\u63A5\u53E3\u4E2D\u6240\u6709\u5176\u4ED6\u6210\u5458\u53EF\u89C1\uFF0C\u4E5F\u5C31\u662F<strong>\u63A5\u53E3\u4E2D\u6240\u6709\u6210\u5458\u90FD\u53EF\u4EE5\u4F7F\u7528\u7C7B\u578B\u53D8\u91CF</strong>\u3002</li><li>\u4F7F\u7528\u6CDB\u578B\u63A5\u53E3\u65F6\uFF0C<strong>\u9700\u8981\u663E\u5F0F\u6307\u5B9A\u5177\u4F53\u7684\u7C7B\u578B</strong>(\u6BD4\u5982\uFF0C\u6B64\u5904\u7684 IdFunc)\u3002</li><li>\u6B64\u65F6\uFF0Cid \u65B9\u6CD5\u7684\u53C2\u6570\u548C\u8FD4\u56DE\u503C\u7C7B\u578B\u90FD\u662F number;ids \u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u7C7B\u578B\u662F number[]\u3002</li></ol></li></ul><p><strong>JS \u4E2D\u7684\u6CDB\u578B\u63A5\u53E3</strong></p><p>\u5B9E\u9645\u4E0A\uFF0CJS \u4E2D\u7684\u6570\u7EC4\u5728 TS \u4E2D\u5C31\u662F\u4E00\u4E2A\u6CDB\u578B\u63A5\u53E3\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> strs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span>
<span class="token comment">// \u9F20\u6807\u653E\u5728 forEach \u4E0A\u67E5\u770B\u7C7B\u578B</span>
strs<span class="token punctuation">.</span>forEach

<span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
<span class="token comment">// \u9F20\u6807\u653E\u5728 forEach \u4E0A\u67E5\u770B\u7C7B\u578B</span>
nums<span class="token punctuation">.</span>forEach
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>\u89E3\u91CA:\u5F53\u6211\u4EEC\u5728\u4F7F\u7528\u6570\u7EC4\u65F6\uFF0CTS \u4F1A\u6839\u636E\u6570\u7EC4\u7684\u4E0D\u540C\u7C7B\u578B\uFF0C\u6765\u81EA\u52A8\u5C06\u7C7B\u578B\u53D8\u91CF\u8BBE\u7F6E\u4E3A\u76F8\u5E94\u7684\u7C7B\u578B</li><li>\u6280\u5DE7:\u53EF\u4EE5\u901A\u8FC7 Ctrl + \u9F20\u6807\u5DE6\u952E\u6765\u67E5\u770B\u5177\u4F53\u7684\u7C7B\u578B\u4FE1\u606F\u3002</li></ul>`,22);function e(t,l){return p}var c=n(a,[["render",e],["__file","06 \u3010\u6CDB\u578B\u3011.html.vue"]]);export{c as default};
