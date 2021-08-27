import React from 'react';
import { LayoutScaleContainerConfig, LayoutScaleSize } from './interface';

export function useLayoutScaleSize(config: LayoutScaleContainerConfig) {
  const { width: configWidth, height: configHeight } = config;

  const [layoutScaleSize, setLayoutScaleSize] = React.useState<LayoutScaleSize>(
    { configWidth, configHeight },
  );

  const onResize = React.useCallback(() => {
    const width: number = window.innerWidth;
    const height: number = window.innerHeight;

    const widthScale: number = width / configWidth;
    const heightScale: number = height / configHeight;
    const scale: number = Math.min(widthScale, heightScale);
    setLayoutScaleSize({
      ...layoutScaleSize,
      width: configWidth * scale,
      height: configHeight * scale,
      scale,
    });
  }, []);

  React.useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [onResize]);

  return layoutScaleSize;
}
