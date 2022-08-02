import { WebPartContext, } from "@microsoft/sp-webpart-base";

import { IWebpartBannerProps, } from '@mikezimm/npmfunctions/dist/HelpPanelOnNPM/onNpm/bannerProps';

import { DisplayMode } from '@microsoft/sp-core-library';

import { IWebpartHistory, } from '@mikezimm/npmfunctions/dist/Services/PropPane/WebPartHistory/Interface';

import { IPinMeState, IFPSPinMenu } from "@mikezimm/npmfunctions/dist/Services/DOM/PinMe/FPSPinMenu";
import { ISitePreConfigProps, } from '@mikezimm/npmfunctions/dist/PropPaneHelp/PreConfigFunctions';

export interface IFpsCore114BannerProps {

  /**
   * Default 1.14 properties
   */
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;


  /**
   * Added FPS Banner settings
   */

  sitePresets : ISitePreConfigProps;

  //FPS Banner and Options props
  displayMode: DisplayMode;

  //Environement props
  context: WebPartContext;

  //Banner related props
  errMessage: any;
  bannerProps: IWebpartBannerProps;

  //ADDED FOR WEBPART HISTORY:
  webpartHistory: IWebpartHistory;

  fpsPinMenu: IFPSPinMenu;

  // saveLoadAnalytics: any;
  FPSPropsObj: any;

}

export interface IFpsCore114BannerState {

  pinState: IPinMeState;

  showDevHeader: boolean;
  lastStateChange: string;

  analyticsWasExecuted: boolean;

}