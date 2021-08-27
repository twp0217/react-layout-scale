## LayoutScaleContainer-style

Demo:

```tsx
import React from 'react';
import LayoutScaleContainer from '@twp0217/react-layout-scale';

export default () => (
  <LayoutScaleContainer
    config={{
      width: 1920,
      height: 1080,
    }}
    containerStyle={{ backgroundColor: '#f00' }}
    contentStyle={{ color: '#fff' }}
  >
    内容
  </LayoutScaleContainer>
);
```