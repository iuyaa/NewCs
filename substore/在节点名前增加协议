/**
 * Sub-Store 快捷脚本 v1.3
 * 功能：在节点名前增加 [协议]
 * 规则：vless -> [Vless]，vmess -> [Vmess]
 */

function capitalizeFirstLetter(str) {
  if (!str) return str;
  str = String(str).toLowerCase();
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function operator(proxies = [], targetPlatform) {
  return (proxies || []).map((proxy) => {
    if (!proxy || !proxy.name || !proxy.type) return proxy;

    const protocol = capitalizeFirstLetter(proxy.type);
    const prefix = `[${protocol}] `;

    // 幂等：防止重复添加
    if (proxy.name.startsWith(prefix)) return proxy;

    proxy.name = prefix + proxy.name;
    return proxy;
  });
}

// Sub-Store 沙箱必须返回 operator
operator;
