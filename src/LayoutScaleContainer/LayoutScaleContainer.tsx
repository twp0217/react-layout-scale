import React from 'react';
import { LayoutScaleContainerProps } from './interface';
import LayoutScaleContext from './LayoutScaleContext';
import { useScaleSize } from './useScaleSize';
import classNames from 'classnames';
import styles from './LayoutScaleContainer.module.less';

const LayoutScaleContainer: React.FC<LayoutScaleContainerProps> = (props) => {
  const {
    children,
    config,
    containerClassName,
    containerStyle,
    contentClassName,
    contentStyle,
  } = props;

  const [innerContainerStyle, setInnerContainerStyle] =
    React.useState<React.CSSProperties>({});
  const [innerContentStyle, setInnerContentStyle] =
    React.useState<React.CSSProperties>({});

  const scaleSize = useScaleSize(config);

  React.useEffect(() => {
    if (!!scaleSize) {
      const { width, height, scale } = scaleSize;
      setInnerContainerStyle({ width, height });
      setInnerContentStyle({
        transform: `scale(${scale})`,
      });
    }
  }, [scaleSize]);

  return (
    <LayoutScaleContext.Provider value={scaleSize}>
      <div
        className={classNames(styles.container, containerClassName)}
        style={{ ...containerStyle, ...innerContainerStyle }}
      >
        <div
          className={classNames(styles.content, contentClassName)}
          style={{
            ...contentStyle,
            ...innerContentStyle,
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
