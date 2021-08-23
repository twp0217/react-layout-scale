import React from 'react';
import { LayoutScaleContainerConfig, LayoutScaleSize } from './interface';

export function useScaleSize(config: LayoutScaleContainerConfig) {
  const [layoutScaleSize, setLayoutScaleSize] =
    React.useState<LayoutScaleSize>();

  const onResize = React.useCallback(() => {
    const width: number = window.innerWidth;
    const height: number = window.innerHeight;

    const widthScale: number = width / config.width;
    const heightScale: number = height / config.height;
    const scale: number = Math.min(widthScale, heightScale);
    setLayoutScaleSize({
      width: config.width * scale,
      height: config.height * scale,
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
