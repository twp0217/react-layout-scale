/**
 * iframe: true
 */
import React from 'react';
import LayoutScaleContainer, {
  LayoutScaleContext,
  LayoutScaleSize,
} from '@twp0217/react-layout-scale';

const ChildrenElement = () => {
  const LayoutScaleSize: LayoutScaleSize = React.useContext(LayoutScaleContext);
  return (
    <div style={{ fontSize: 50 }}>
      <div>width: {LayoutScaleSize.width} px</div>
      <div>height: {LayoutScaleSize.height} px</div>
      <div>scale: {LayoutScaleSize.scale}</div>
      <div>configWidth: {LayoutScaleSize.configWidth} px</div>
      <div>configHeight: {LayoutScaleSize.configHeight} px</div>
    </div>
  );
};

const demo4 = () => {
  return (
    <LayoutScaleContainer
      config={{
        width: 1920,
        height: 1080,
      }}
    >
      <ChildrenElement />
    </LayoutScaleContainer>
  );
};

export default demo4;
