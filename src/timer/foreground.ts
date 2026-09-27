// 浏览器前台检测：页面可见 && 窗口聚焦
export function isBrowserForeground(): boolean {
  if (typeof document === 'undefined') return false;
  return document.visibilityState === 'visible' && document.hasFocus();
}

/** 监听可见性与焦点变化 */
export function onForegroundChange(cb: (foreground: boolean) => void): () => void {
  const handler = () => cb(isBrowserForeground());
  document.addEventListener('visibilitychange', handler);
  window.addEventListener('focus', handler);
  window.addEventListener('blur', handler);
  return () => {
    document.removeEventListener('visibilitychange', handler);
    window.removeEventListener('focus', handler);
    window.removeEventListener('blur', handler);
  };
}
