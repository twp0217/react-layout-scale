/**
 * iframe: true
 */
import React from 'react';
import LayoutScaleContainer from '@twp0217/react-layout-scale';

const demo2 = () => {
  return (
    <LayoutScaleContainer
      config={{
        width: 1920,
        height: 1080,
      }}
      containerStyle={{ backgroundColor: '#f00' }}
      contentStyle={{ color: '#fff' }}
    >
      内容区域
    </LayoutScaleContainer>
  );
};

export default demo2;
