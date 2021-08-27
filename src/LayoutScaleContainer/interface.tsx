export interface LayoutScaleSize {
  width?: number;
  height?: number;
  scale?: number;
  configWidth?: number;
  configHeight?: number;
}

export interface LayoutScaleContainerConfig {
  width: number;
  height: number;
}

export interface LayoutScaleContainerProps {
  children: React.ReactNode;
  config: LayoutScaleContainerConfig;
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
  contentClassName?: string;
  contentStyle?: React.CSSProperties;
}
