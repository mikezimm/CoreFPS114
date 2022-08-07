import { IFPSCorePinMeReactComponentProps, IFPSCorePinMeReactComponentState } from '../fpsReferences';


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

}

/**
 * Extends IFPSCorePinMeReactComponentState with all basics required for FPS Banner
 */
export interface IFpsCore114BannerState extends IFPSCorePinMeReactComponentState {


}