/**
 * iframe: true
 */
import React from 'react';
import LayoutScaleContainer from '@twp0217/react-layout-scale';

const demo2 = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
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
    </div>
  );
};

export default demo2;
