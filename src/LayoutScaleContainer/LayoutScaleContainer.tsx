import React from 'react';
import { LayoutScaleContainerProps } from './interface';
import LayoutScaleContext from './LayoutScaleContext';
import { useLayoutScaleSize } from './useLayoutScaleSize';
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

  const layoutScaleSize = useLayoutScaleSize(config);

  React.useEffect(() => {
    if (!!layoutScaleSize.scale) {
      const { width, height, scale } = layoutScaleSize;
      setInnerContainerStyle({ width, height });
      setInnerContentStyle({
        transform: `scale(${scale})`,
      });
    }
  }, [layoutScaleSize]);

  return (
    <LayoutScaleContext.Provider value={layoutScaleSize}>
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
