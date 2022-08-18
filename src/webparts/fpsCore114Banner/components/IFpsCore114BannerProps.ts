import { IFPSCorePinMeReactComponentProps, IFPSCorePinMeReactComponentState, ILoadPerformance } from '../fpsReferences';


/**
 * Extends IFPSCorePinMeReactComponentProps with all basics required for FPS Banner
 */
export interface IFpsCore114BannerProps extends IFPSCorePinMeReactComponentProps {

  /**
   * Default 1.14 properties
   */
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;

  performance: ILoadPerformance;

}

/**
 * Extends IFPSCorePinMeReactComponentState with all basics required for FPS Banner
 */
export interface IFpsCore114BannerState extends IFPSCorePinMeReactComponentState {


}