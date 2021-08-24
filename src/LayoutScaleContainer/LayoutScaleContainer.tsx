import React, { useState, CSSProperties } from 'react';
import { LayoutScaleContainerProps } from './interface';
import LayoutScaleContext from './LayoutScaleContext';
import { useScaleSize } from './useScaleSize';
import classNames from 'classnames';
import styles from './LayoutScaleContainer.module.less';

const LayoutScaleContainer: React.FC<LayoutScaleContainerProps> = (props) => {
  const { children, config, containerClassName, contentClassName } = props;

  const [layoutStyle, setLayoutStyle] = useState<CSSProperties>({});
  const [contentStyle, setContentStyle] = useState<CSSProperties>({});

  const scaleSize = useScaleSize(config);

  React.useEffect(() => {
    if (!!scaleSize) {
      const { width, height, scale } = scaleSize;
      setLayoutStyle({ width, height });
      setContentStyle({
        transform: `scale(${scale})`,
      });
    }
  }, [scaleSize]);

  return (
    <LayoutScaleContext.Provider value={scaleSize}>
      <div
        className={classNames(styles.container, containerClassName)}
        style={layoutStyle}
      >
        <div
          className={classNames(styles.content, contentClassName)}
          style={{
            ...contentStyle,
            width: config.width,
            height: config.height,
          }}
        >
          {children}
        </div>
      </div>
    </LayoutScaleContext.Provider>
  );
};

export default LayoutScaleContainer;
