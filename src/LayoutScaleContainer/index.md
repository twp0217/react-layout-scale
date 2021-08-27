---
title: LayoutScaleContainer - 布局缩放容器
nav:
  path: /components
  title: 组件
---

# LayoutScaleContainer - 布局缩放容器

## 使用

```typescript
import LayoutScaleContainer from '@twp0217/react-layout-scale';

export default () => (
  <LayoutScaleContainer
    config={{
      width: 1920,
      height: 1080,
    }}
  >
    内容
  </LayoutScaleContainer>
);
```

## 代码演示

### 基本

<code src="./demo/demo1.tsx" />

### 带样式

<code src="./demo/demo2.tsx" />

### 上下左右居中

<code src="./demo/demo3.tsx" />

### 获取缩放信息

<code src="./demo/demo4.tsx" />

## API

### props

| 名称               | 类型                       | 默认值 | 说明     |
| ------------------ | -------------------------- | ------ | -------- |
| config             | LayoutScaleContainerConfig | -      | 配置     |
| containerClassName | string                     | -      | 容器类名 |
| containerStyle     | string                     | -      | 容器样式 |
| contentClassName   | string                     | -      | 内容类名 |
| contentStyle       | string                     | -      | 内容样式 |
