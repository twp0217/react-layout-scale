# react-layout-scale

## 简介

布局缩放组件

## 安装

```javascript
npm i @twp0217/react-layout-scale
```

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

## API

### props

| 名称               | 类型                       | 默认值 | 说明     |
| ------------------ | -------------------------- | ------ | -------- |
| config             | LayoutScaleContainerConfig | -      | 配置     |
| containerClassName | string                     | -      | 容器类名 |
| contentClassName   | string                     | -      | 内容类名 |

## 支持

- 如果项目对你有帮助，请点颗星:star:，谢谢。
- 如果你对项目有想法、问题、BUG，欢迎讨论。
