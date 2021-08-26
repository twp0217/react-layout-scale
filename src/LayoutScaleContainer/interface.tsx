export interface WidthHeight {
  width: number;
  height: number;
}

export interface LayoutScaleSize extends WidthHeight {
  scale: number;
}

export interface LayoutScaleContainerConfig extends WidthHeight {}

export interface LayoutScaleContainerProps {
  children: React.ReactNode;
  config: LayoutScaleContainerConfig;
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
  contentClassName?: string;
  contentStyle?: React.CSSProperties;
}

export interface LayoutScaleContextProps extends LayoutScaleSize {}
