/**
 * 移除 pushplus 短信转发通知页面底部的广告横幅
 * 适用: Loon [Script] http-response, requires-body=true
 * 匹配: https://www.pushplus.plus/shortMessage/*
 */
let body = $response.body || "";

// 1. 移除包含广告的整个 container 块（hr.ad + 广告链接 + 广告图片）
body = body.replace(
  /<div class="container pb-3 text-center">\s*<hr class="my-3 ad"[\s\S]*?<\/a>\s*<\/div>/g,
  ""
);

// 兜底 2: 单独移除广告分隔线
body = body.replace(/<hr class="my-3 ad"[^>]*\/?>/g, "");

// 兜底 3: 单独移除指向 webdiff 的广告链接块
body = body.replace(
  /<a href="https?:\/\/webdiff\.perk-net\.com"[^>]*>\s*<img[^>]*pushplus\.plus\/ad\/[^>]*>\s*<\/a>/g,
  ""
);

$done({ body });
