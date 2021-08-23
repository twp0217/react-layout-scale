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
  contentClassName?: string;
}

export interface LayoutScaleContextProps extends LayoutScaleSize {}
