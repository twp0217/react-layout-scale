export interface WidthHeight {
  width: number;
  height: number;
}

export interface LayoutScaleSize extends Partial<WidthHeight> {
  scale?: number;
  configWidth?: number;
  configHeight?: number;
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
