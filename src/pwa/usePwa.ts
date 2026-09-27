// PWA 生命周期提示：新版本更新与“已可离线使用”（官方 react 封装）
import { useRegisterSW } from 'virtual:pwa-register/react';

export function usePwa(): {
  needRefresh: boolean;
  offlineReady: boolean;
  applyUpdate: () => void;
} {
  const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({ immediate: true });

  return {
    needRefresh: needRefresh[0],
    offlineReady: offlineReady[0],
    applyUpdate: () => {
      void updateServiceWorker(true);
    },
  };
}
