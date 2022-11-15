import{_ as n,e as s}from"./app.3fb7e337.js";const a={},p=s(`<h1 id="_7-\u6298\u7EBF\u56FE" tabindex="-1"><a class="header-anchor" href="#_7-\u6298\u7EBF\u56FE" aria-hidden="true">#</a> 7.\u6298\u7EBF\u56FE</h1><h2 id="_7-1\u5E38\u89C1\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#_7-1\u5E38\u89C1\u6548\u679C" aria-hidden="true">#</a> 7.1\u5E38\u89C1\u6548\u679C</h2><p>\u5E38\u89C1\u6548\u679C</p><ul><li>\u6807\u8BB0 <ul><li>markPoint\uFF1A\u6807\u8BB0\u70B9\uFF08\u6700\u5927\u503C\uFF0C\u6700\u5C0F\u503C\uFF09</li><li>markLine\uFF1A\u6807\u8BB0\u7EBF\uFF08\u5E73\u5747\u503C\uFF09</li><li>markArea\uFF1A\u6807\u6CE8\u533A\u95F4</li></ul></li><li>\u7EBF\u6761\u63A7\u5236 <ul><li>smooth\uFF1A\u5E73\u6ED1</li><li>lineStyle\uFF1A\u7EBF\u6761\u6837\u5F0F</li></ul></li><li>\u586B\u5145\u98CE\u683C <ul><li>areaStyle\uFF1A\u586B\u5145\u533A\u57DF\u98CE\u683C</li></ul></li><li>\u7D27\u6328\u8FB9\u7F18 <ul><li>boundaryGap (\u914D\u7F6E\u5728xAxis\u4E2D)</li></ul></li><li>\u7F29\u653E\uFF1A\u8131\u79BB0\u503C\u6BD4\u4F8B <ul><li>scale</li></ul></li><li>\u5806\u53E0\u56FE\uFF08\u5F53\u6709\u591A\u4E2A\u7CFB\u5217\u4F7F\u56FE\u8868\u663E\u5F97\u6742\u4E71\u65E0\u7AE0\u65F6\u4F7F\u7528\uFF09 <ul><li>atack</li></ul></li><li>\u663E\u793A <ul><li>label\uFF1A\u6570\u503C\u663E\u793A</li></ul></li></ul><h2 id="_7-2\u6298\u7EBF\u56FE1-\u4EBA\u5458\u53D8\u5316\u6A21\u5757\u5236\u4F5C" tabindex="-1"><a class="header-anchor" href="#_7-2\u6298\u7EBF\u56FE1-\u4EBA\u5458\u53D8\u5316\u6A21\u5757\u5236\u4F5C" aria-hidden="true">#</a> 7.2\u6298\u7EBF\u56FE1 \u4EBA\u5458\u53D8\u5316\u6A21\u5757\u5236\u4F5C</h2><ul><li>\u5B98\u7F51\u627E\u5230\u7C7B\u4F3C\u5B9E\u4F8B\uFF0C \u9002\u5F53\u5206\u6790\uFF0C\u5E76\u4E14\u5F15\u5165\u5230HTML\u9875\u9762\u4E2D</li><li>\u6839\u636E\u9700\u6C42\u5B9A\u5236\u56FE\u8868</li></ul><p>\u9700\u6C421\uFF1A \u4FEE\u6539\u6298\u7EBF\u56FE\u5927\u5C0F\uFF0C\u663E\u793A\u8FB9\u6846\u8BBE\u7F6E\u989C\u8272\uFF1A#012f4a\uFF0C\u5E76\u4E14\u663E\u793A\u523B\u5EA6\u6807\u7B7E\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>     // \u8BBE\u7F6E\u7F51\u683C\u6837\u5F0F
     grid: { 
       top: &#39;20%&#39;,
       left: &#39;3%&#39;,
       right: &#39;4%&#39;,
       bottom: &#39;3%&#39;,
       show: true,// \u663E\u793A\u8FB9\u6846
       borderColor: &#39;#012f4a&#39;,// \u8FB9\u6846\u989C\u8272
       containLabel: true // \u5305\u542B\u523B\u5EA6\u6587\u5B57\u5728\u5185
     },
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u9700\u6C422\uFF1A \u4FEE\u6539\u56FE\u4F8B\u7EC4\u4EF6\u4E2D\u7684\u6587\u5B57\u989C\u8272 #4c9bfd\uFF0C \u8DDD\u79BB\u53F3\u4FA7 right \u4E3A 10%</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  // \u56FE\u4F8B\u7EC4\u4EF6
     legend: {
       textStyle: {
         color: &#39;#4c9bfd&#39; // \u56FE\u4F8B\u6587\u5B57\u989C\u8272
       },
       right: &#39;10%&#39; // \u8DDD\u79BB\u53F3\u8FB910%
     },
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u9700\u6C423\uFF1A x\u8F74\u76F8\u5173\u914D\u7F6E</p><ul><li>\u523B\u5EA6\u53BB\u9664</li><li>x\u8F74\u523B\u5EA6\u6807\u7B7E\u5B57\u4F53\u989C\u8272\uFF1A#4c9bfd</li><li>\u5254\u9664x\u5750\u6807\u8F74\u7EBF\u989C\u8272\uFF08\u5C06\u6765\u4F7F\u7528Y\u8F74\u5206\u5272\u7EBF)</li><li>\u8F74\u4E24\u7AEF\u662F\u4E0D\u9700\u8981\u5185\u95F4\u8DDD boundaryGap</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>     xAxis: {
       type: &#39;category&#39;,
       data: [&quot;\u5468\u4E00&quot;, &quot;\u5468\u4E8C&quot;],
       axisTick: {
          show: false // \u53BB\u9664\u523B\u5EA6\u7EBF
        },
        axisLabel: {
          color: &#39;#4c9bfd&#39; // \u6587\u672C\u989C\u8272
        },
        axisLine: {
          show: false // \u53BB\u9664\u8F74\u7EBF
        },
        boundaryGap: false  // \u53BB\u9664\u8F74\u5185\u95F4\u8DDD
     },
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u9700\u6C424\uFF1A y\u8F74\u7684\u5B9A\u5236</p><ul><li>\u523B\u5EA6\u53BB\u9664</li><li>\u5B57\u4F53\u989C\u8272\uFF1A#4c9bfd</li><li>\u5206\u5272\u7EBF\u989C\u8272\uFF1A#012f4a</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>     yAxis: {
       type: &#39;value&#39;,
       axisTick: {
         show: false  // \u53BB\u9664\u523B\u5EA6
       },
       axisLabel: {
         color: &#39;#4c9bfd&#39; // \u6587\u5B57\u989C\u8272
       },
       splitLine: {
         lineStyle: {
           color: &#39;#012f4a&#39; // \u5206\u5272\u7EBF\u989C\u8272
         }
       }
     },
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u9700\u6C425\uFF1A \u4E24\u6761\u7EBF\u5F62\u56FE\u5B9A\u5236</p><ul><li>\u989C\u8272\u5206\u522B\uFF1A#00f2f1 #ed3f35</li><li>\u628A\u6298\u7EBF\u4FEE\u9970\u4E3A\u5706\u6ED1 series \u6570\u636E\u4E2D\u6DFB\u52A0 smooth \u4E3A true</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>     color: [&#39;#00f2f1&#39;, &#39;#ed3f35&#39;],
     series: [{
       name:&#39;\u65B0\u589E\u7C89\u4E1D&#39;,
       data: [820, 932, 901, 934, 1290, 1330, 1320],
       type: &#39;line&#39;,
       // \u6298\u7EBF\u4FEE\u9970\u4E3A\u5706\u6ED1
       smooth: true,
       },{
       name:&#39;\u65B0\u589E\u6E38\u5BA2&#39;,
       data: [100, 331, 200, 123, 233, 543, 400],
       type: &#39;line&#39;,
       smooth: true,
     }]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u9700\u6C426\uFF1A \u914D\u7F6E\u6570\u636E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> // x\u8F74\u7684\u6587\u5B57
 xAxis: {
   type: &#39;category&#39;,
   data: [&#39;1\u6708&#39;, &#39;2\u6708&#39;, &#39;3\u6708&#39;, &#39;4\u6708&#39;, &#39;5\u6708&#39;, &#39;6\u6708&#39;, &#39;7\u6708&#39;, &#39;8\u6708&#39;, &#39;9\u6708&#39;, &#39;10\u6708&#39;, &#39;11\u6708&#39;, &#39;12\u6708&#39;],
 // \u56FE\u6807\u6570\u636E
     series: [{
       name:&#39;\u65B0\u589E\u7C89\u4E1D&#39;,
       data:  [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
       type: &#39;line&#39;,
       smooth: true
     },{
       name:&#39;\u65B0\u589E\u6E38\u5BA2&#39;,
       data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],     
       type: &#39;line&#39;,
       smooth: true
       }
     }]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u9700\u6C427\uFF1A \u65B0\u589E\u9700\u6C42 \u70B9\u51FB 2020\u5E74 2021\u5E74 \u6570\u636E\u53D1\u751F\u53D8\u5316</p><p>\u4EE5\u4E0B\u662F\u540E\u53F0\u9001\u8FC7\u6765\u6570\u636E\uFF08ajax\u8BF7\u6C42\u8FC7\u6765\u7684\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  var yearData = [
       {
         year: &#39;2020&#39;,  // \u5E74\u4EFD
         data: [  // \u4E24\u4E2A\u6570\u7EC4\u662F\u56E0\u4E3A\u6709\u4E24\u6761\u7EBF
              [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
              [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
           ]
       },
       {
         year: &#39;2021&#39;,  // \u5E74\u4EFD
         data: [  // \u4E24\u4E2A\u6570\u7EC4\u662F\u56E0\u4E3A\u6709\u4E24\u6761\u7EBF
              [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
             [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
           ]
       }
      ];
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ul><li>tab\u680F\u5207\u6362\u4E8B\u4EF6</li><li>\u70B9\u51FB2020\u6309\u94AE \u9700\u8981\u628A series \u7B2C\u4E00\u4E2A\u5BF9\u8C61\u91CC\u9762\u7684data \u6362\u6210 2020\u5E74\u5BF9\u8C61\u91CC\u9762data[0]</li><li>\u70B9\u51FB2020\u6309\u94AE \u9700\u8981\u628A series \u7B2C\u4E8C\u4E2A\u5BF9\u8C61\u91CC\u9762\u7684data \u6362\u6210 2020\u5E74\u5BF9\u8C61\u91CC\u9762data[1]</li><li>2021 \u6309\u94AE\u540C\u6837\u9053\u7406</li></ul><p>\u5B8C\u6574\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6298\u7EBF\u56FE1</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.line1&gt;.chart&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> yearData <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token string">&#39;2020&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5E74\u4EFD</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// \u4E24\u4E2A\u6570\u7EC4\u662F\u56E0\u4E3A\u6709\u4E24\u6761\u7EBF</span>
        <span class="token punctuation">[</span><span class="token number">24</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">134</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">210</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">210</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">191</span><span class="token punctuation">,</span> <span class="token number">324</span><span class="token punctuation">,</span> <span class="token number">290</span><span class="token punctuation">,</span> <span class="token number">330</span><span class="token punctuation">,</span> <span class="token number">310</span><span class="token punctuation">,</span> <span class="token number">213</span><span class="token punctuation">,</span> <span class="token number">180</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">180</span><span class="token punctuation">,</span> <span class="token number">79</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token string">&#39;2021&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5E74\u4EFD</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// \u4E24\u4E2A\u6570\u7EC4\u662F\u56E0\u4E3A\u6709\u4E24\u6761\u7EBF</span>
        <span class="token punctuation">[</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token number">175</span><span class="token punctuation">,</span> <span class="token number">112</span><span class="token punctuation">,</span> <span class="token number">197</span><span class="token punctuation">,</span> <span class="token number">121</span><span class="token punctuation">,</span> <span class="token number">67</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">43</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">76</span><span class="token punctuation">,</span> <span class="token number">38</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">143</span><span class="token punctuation">,</span> <span class="token number">131</span><span class="token punctuation">,</span> <span class="token number">165</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">,</span> <span class="token number">178</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">82</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">43</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> myOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u901A\u8FC7\u8FD9\u4E2Acolor\u4FEE\u6539\u4E24\u6761\u7EBF\u7684\u989C\u8272</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;#00f2f1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#ed3f35&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;axis&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5982\u679Cseries \u5BF9\u8C61\u6709name \u503C\uFF0C\u5219 legend\u53EF\u4EE5\u4E0D\u7528\u5199data</span>
      <span class="token comment">// \u4FEE\u6539\u56FE\u4F8B\u7EC4\u4EF6 \u6587\u5B57\u989C\u8272</span>
      <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#4c9bfd&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// \u8FD9\u4E2A10% \u5FC5\u987B\u52A0\u5F15\u53F7</span>
      <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">&#39;10%&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">&#39;20%&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&#39;3%&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">&#39;4%&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">&#39;3%&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u663E\u793A\u8FB9\u6846</span>
      <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&#39;#012f4a&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8FB9\u6846\u989C\u8272</span>
      <span class="token literal-property property">containLabel</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5305\u542B\u523B\u5EA6\u6587\u5B57\u5728\u5185</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">boundaryGap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;1\u6708&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2\u6708&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;3\u6708&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;4\u6708&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;5\u6708&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;6\u6708&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;7\u6708&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;8\u6708&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;9\u6708&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;10\u6708&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;11\u6708&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;12\u6708&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u53BB\u9664\u523B\u5EA6\u7EBF</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#4c9bfd&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6587\u672C\u989C\u8272</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u53BB\u9664\u8F74\u7EBF</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u53BB\u9664\u523B\u5EA6\u7EBF</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#4c9bfd&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6587\u672C\u989C\u8272</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u53BB\u9664\u8F74\u7EBF</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">splitLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#012f4a&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5206\u5272\u7EBF\u989C\u8272</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u65B0\u589E\u7C89\u4E1D&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> yearData<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">smooth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u65B0\u589E\u6E38\u5BA2&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> yearData<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">smooth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>myOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.line1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> a <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>tagName <span class="token operator">!==</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.line1 a.active&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&#39;active&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;active&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    myOptions<span class="token punctuation">.</span>series<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data <span class="token operator">=</span> yearData<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>id<span class="token punctuation">]</span><span class="token punctuation">;</span>
    myOptions<span class="token punctuation">.</span>series<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data <span class="token operator">=</span> yearData<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>id<span class="token punctuation">]</span><span class="token punctuation">;</span>
    myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>myOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> <span class="token parameter">_</span> <span class="token operator">=&gt;</span> myChart<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br></div></div><p><img src="https://i0.hdslb.com/bfs/album/7f7eaf66a989fac6812cabf1ca0e96876a5e3051.png" alt="image-20220729161855377"></p><h2 id="_7-3\u6298\u7EBF\u56FE2-\u64AD\u653E\u91CF\u6A21\u5757\u5236\u4F5C" tabindex="-1"><a class="header-anchor" href="#_7-3\u6298\u7EBF\u56FE2-\u64AD\u653E\u91CF\u6A21\u5757\u5236\u4F5C" aria-hidden="true">#</a> 7.3\u6298\u7EBF\u56FE2 \u64AD\u653E\u91CF\u6A21\u5757\u5236\u4F5C</h2><ul><li>\u5B98\u7F51\u627E\u5230\u7C7B\u4F3C\u5B9E\u4F8B\uFF0C \u9002\u5F53\u5206\u6790\uFF0C\u5E76\u4E14\u5F15\u5165\u5230HTML\u9875\u9762\u4E2D</li><li>\u6839\u636E\u9700\u6C42\u5B9A\u5236\u56FE\u8868</li></ul><p>\u9700\u6C421\uFF1A \u66F4\u6362\u56FE\u4F8B\u7EC4\u4EF6\u6587\u5B57\u989C\u8272 rgba(255,255,255,.5) \u6587\u5B57\u5927\u5C0F\u4E3A12</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">&quot;0%&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,.5)&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">&quot;12&quot;</span>
      <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u9700\u6C422\uFF1A \u4FEE\u6539\u56FE\u8868\u5927\u5C0F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">&quot;30&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">containLabel</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u9700\u6C423\uFF1A \u4FEE\u6539x\u8F74\u76F8\u5173\u914D\u7F6E</p><ul><li>\u4FEE\u6539\u6587\u672C\u989C\u8272\u4E3Argba(255,255,255,.6) \u6587\u5B57\u5927\u5C0F\u4E3A 12</li><li>x\u8F74\u7EBF\u7684\u989C\u8272\u4E3A rgba(255,255,255,.2)</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>     <span class="token comment">// \u6587\u672C\u989C\u8272\u4E3Argba(255,255,255,.6)  \u6587\u5B57\u5927\u5C0F\u4E3A 12</span>
     <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,.6)&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">12</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token comment">// x\u8F74\u7EBF\u7684\u989C\u8272\u4E3A   rgba(255,255,255,.2)</span>
        <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,.2)&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u9700\u6C424\uFF1A \u4FEE\u6539y\u8F74\u7684\u76F8\u5173\u914D\u7F6E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>        <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,.1)&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,.6)&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">12</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
	   <span class="token comment">// \u4FEE\u6539\u5206\u5272\u7EBF\u7684\u989C\u8272</span>
        <span class="token literal-property property">splitLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,.1)&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u9700\u6C425\uFF1A \u4FEE\u6539\u4E24\u4E2A\u7EBF\u6A21\u5757\u914D\u7F6E(\u6CE8\u610F\u5728series \u91CC\u9762\u5B9A\u5236)</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>       <span class="token comment">//\u7B2C\u4E00\u6761 \u7EBF\u662F\u5706\u6ED1</span>
       <span class="token literal-property property">smooth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5355\u72EC\u4FEE\u6539\u7EBF\u7684\u6837\u5F0F</span>
        <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#0184d5&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span> 
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token comment">// \u586B\u5145\u533A\u57DF</span>
        <span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token comment">// \u6E10\u53D8\u8272\uFF0C\u53EA\u9700\u8981\u590D\u5236\u5373\u53EF</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">echarts<span class="token punctuation">.</span>graphic<span class="token punctuation">.</span>LinearGradient</span><span class="token punctuation">(</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                  <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(1, 132, 213, 0.4)&quot;</span>   <span class="token comment">// \u6E10\u53D8\u8272\u7684\u8D77\u59CB\u989C\u8272</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(1, 132, 213, 0.1)&quot;</span>   <span class="token comment">// \u6E10\u53D8\u7EBF\u7684\u7ED3\u675F\u989C\u8272</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token boolean">false</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">shadowColor</span><span class="token operator">:</span> <span class="token string">&quot;rgba(0, 0, 0, 0.1)&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u8BBE\u7F6E\u62D0\u70B9 \u5C0F\u5706\u70B9</span>
        <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">&quot;circle&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u62D0\u70B9\u5927\u5C0F</span>
        <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
        <span class="token comment">// \u8BBE\u7F6E\u62D0\u70B9\u989C\u8272\u4EE5\u53CA\u8FB9\u6846</span>
       <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#0184d5&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&quot;rgba(221, 220, 107, .1)&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">12</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5F00\u59CB\u4E0D\u663E\u793A\u62D0\u70B9\uFF0C \u9F20\u6807\u7ECF\u8FC7\u663E\u793A</span>
        <span class="token literal-property property">showSymbol</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>       <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u8F6C\u53D1\u91CF&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;line&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">smooth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#00d887&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span>
          <span class="token punctuation">}</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">echarts<span class="token punctuation">.</span>graphic<span class="token punctuation">.</span>LinearGradient</span><span class="token punctuation">(</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                  <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(0, 216, 135, 0.4)&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(0, 216, 135, 0.1)&quot;</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token boolean">false</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">shadowColor</span><span class="token operator">:</span> <span class="token string">&quot;rgba(0, 0, 0, 0.1)&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u8BBE\u7F6E\u62D0\u70B9 \u5C0F\u5706\u70B9</span>
        <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">&quot;circle&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u62D0\u70B9\u5927\u5C0F</span>
        <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token comment">// \u8BBE\u7F6E\u62D0\u70B9\u989C\u8272\u4EE5\u53CA\u8FB9\u6846</span>
         <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#00d887&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&quot;rgba(221, 220, 107, .1)&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">12</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5F00\u59CB\u4E0D\u663E\u793A\u62D0\u70B9\uFF0C \u9F20\u6807\u7ECF\u8FC7\u663E\u793A</span>
        <span class="token literal-property property">showSymbol</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><p>\u9700\u6C426\uFF1A \u66F4\u6362\u6570\u636E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// x\u8F74\u66F4\u6362\u6570\u636E</span>
<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;01&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;02&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;03&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;04&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;05&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;06&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;07&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;08&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;09&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;11&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;12&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;13&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;14&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;15&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;16&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;17&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;18&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;19&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;20&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;21&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;22&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;23&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;24&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;25&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;26&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;26&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;28&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;29&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;30&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token comment">// series  \u7B2C\u4E00\u4E2A\u5BF9\u8C61data\u6570\u636E</span>
 <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span><span class="token number">60</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span><span class="token number">60</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span><span class="token number">60</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token comment">// series  \u7B2C\u4E8C\u4E2A\u5BF9\u8C61data\u6570\u636E</span>
 <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token number">130</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span><span class="token number">60</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">140</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span><span class="token number">99</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>\u5B8C\u6574\u4EE3\u7801</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6298\u7EBF\u56FE2 \u6A21\u5757\u5236\u4F5C</span>
<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.line2 .chart&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&quot;axis&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">&quot;0%&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;\u90AE\u4EF6\u8425\u9500&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u8054\u76DF\u5E7F\u544A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u89C6\u9891\u5E7F\u544A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u76F4\u63A5\u8BBF\u95EE&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u641C\u7D22\u5F15\u64CE&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,.5)&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">&quot;12&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">&quot;30&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">containLabel</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">boundaryGap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">// x\u8F74\u66F4\u6362\u6570\u636E</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;01&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;02&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;03&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;04&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;05&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;06&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;07&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;08&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;09&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;11&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;12&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;13&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;14&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;15&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;16&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;17&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;18&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;19&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;20&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;21&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;22&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;23&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;24&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;25&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;26&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;26&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;28&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;29&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;30&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// \u6587\u672C\u989C\u8272\u4E3Argba(255,255,255,.6)  \u6587\u5B57\u5927\u5C0F\u4E3A 12</span>
        <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,.6)&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">12</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// x\u8F74\u7EBF\u7684\u989C\u8272\u4E3A   rgba(255,255,255,.2)</span>
        <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,.2)&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,.1)&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,.6)&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">12</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u4FEE\u6539\u5206\u5272\u7EBF\u7684\u989C\u8272</span>
        <span class="token literal-property property">splitLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,.1)&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u90AE\u4EF6\u8425\u9500&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;line&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">smooth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5355\u72EC\u4FEE\u6539\u5F53\u524D\u7EBF\u6761\u7684\u6837\u5F0F</span>
        <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#0184d5&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u586B\u5145\u989C\u8272\u8BBE\u7F6E</span>
        <span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">echarts<span class="token punctuation">.</span>graphic<span class="token punctuation">.</span>LinearGradient</span><span class="token punctuation">(</span>
            <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(1, 132, 213, 0.4)&quot;</span> <span class="token comment">// \u6E10\u53D8\u8272\u7684\u8D77\u59CB\u989C\u8272</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(1, 132, 213, 0.1)&quot;</span> <span class="token comment">// \u6E10\u53D8\u7EBF\u7684\u7ED3\u675F\u989C\u8272</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token boolean">false</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">shadowColor</span><span class="token operator">:</span> <span class="token string">&quot;rgba(0, 0, 0, 0.1)&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u8BBE\u7F6E\u62D0\u70B9</span>
        <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">&quot;circle&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u62D0\u70B9\u5927\u5C0F</span>
        <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5F00\u59CB\u4E0D\u663E\u793A\u62D0\u70B9\uFF0C \u9F20\u6807\u7ECF\u8FC7\u663E\u793A</span>
        <span class="token literal-property property">showSymbol</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">// \u8BBE\u7F6E\u62D0\u70B9\u989C\u8272\u4EE5\u53CA\u8FB9\u6846</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#0184d5&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&quot;rgba(221, 220, 107, .1)&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">12</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token number">60</span><span class="token punctuation">,</span>
          <span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token number">60</span><span class="token punctuation">,</span>
          <span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token number">60</span><span class="token punctuation">,</span>
          <span class="token number">50</span><span class="token punctuation">,</span>
          <span class="token number">40</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u8054\u76DF\u5E7F\u544A&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;line&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">smooth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#00d887&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">echarts<span class="token punctuation">.</span>graphic<span class="token punctuation">.</span>LinearGradient</span><span class="token punctuation">(</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                  <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(0, 216, 135, 0.4)&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(0, 216, 135, 0.1)&quot;</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token boolean">false</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">shadowColor</span><span class="token operator">:</span> <span class="token string">&quot;rgba(0, 0, 0, 0.1)&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u8BBE\u7F6E\u62D0\u70B9 \u5C0F\u5706\u70B9</span>
        <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">&quot;circle&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u62D0\u70B9\u5927\u5C0F</span>
        <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token comment">// \u8BBE\u7F6E\u62D0\u70B9\u989C\u8272\u4EE5\u53CA\u8FB9\u6846</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#00d887&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&quot;rgba(221, 220, 107, .1)&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">12</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5F00\u59CB\u4E0D\u663E\u793A\u62D0\u70B9\uFF0C \u9F20\u6807\u7ECF\u8FC7\u663E\u793A</span>
        <span class="token literal-property property">showSymbol</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token number">130</span><span class="token punctuation">,</span>
          <span class="token number">10</span><span class="token punctuation">,</span>
          <span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">80</span><span class="token punctuation">,</span>
          <span class="token number">60</span><span class="token punctuation">,</span>
          <span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">90</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token number">140</span><span class="token punctuation">,</span>
          <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">130</span><span class="token punctuation">,</span>
          <span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">80</span><span class="token punctuation">,</span>
          <span class="token number">70</span><span class="token punctuation">,</span>
          <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token number">120</span><span class="token punctuation">,</span>
          <span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token number">99</span><span class="token punctuation">,</span>
          <span class="token number">50</span><span class="token punctuation">,</span>
          <span class="token number">20</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 4. \u8BA9\u56FE\u8868\u8DDF\u968F\u5C4F\u5E55\u81EA\u52A8\u7684\u53BB\u9002\u5E94</span>
  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;resize&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    myChart<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br></div></div><p><img src="https://i0.hdslb.com/bfs/album/11768b2dc68d0af0a2eb70b4206f4bfae027925c.png" alt="\u5C4F\u5E55\u622A\u56FE 2022-07-30 183240"></p>`,47);function t(e,o){return p}var r=n(a,[["render",t],["__file","04 \u3010\u6298\u7EBF\u56FE\u3011.html.vue"]]);export{r as default};
