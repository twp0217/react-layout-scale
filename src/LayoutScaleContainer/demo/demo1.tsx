/**
 * iframe: true
 */
import React from 'react';
import LayoutScaleContainer from '@twp0217/react-layout-scale';

const demo1 = () => {
  return (
    <LayoutScaleContainer
      config={{
        width: 1920,
        height: 1080,
      }}
    >
      内容区域
    </LayoutScaleContainer>
  );
};

export default demo1;
