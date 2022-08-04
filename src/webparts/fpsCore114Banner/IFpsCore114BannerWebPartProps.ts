

import { exportIgnorePropsFPS, importBlockPropsFPS } from '@mikezimm/npmfunctions/dist/HelpPanelOnNPM/onNpm/BannerSetup';
import { IMinWPBannerProps } from "@mikezimm/npmfunctions/dist/HelpPanelOnNPM/onNpm/BannerSetup";
import { IMinBannerUIProps, IMinPinMeProps, IMinPandoramicProps, IMinBannerThemeProps, IMinCustomHelpProps, IMinPageStyleProps, IMinBannerUtilityProps, IMinFPSLegacyProps } from "@mikezimm/npmfunctions/dist/HelpPanelOnNPM/onNpm/BannerSetup";

//Specific for this web part
export const exportIgnorePropsThis : string[] = [ ];

export const exportIgnoreProps : string[] = [ ...exportIgnorePropsFPS, ...exportIgnorePropsThis  ];

//These props will not be imported even if they are in one of the change arrays above (fail-safe)
//This was done so user could not manually insert specific props to over-right fail-safes built in to the webpart

//Specific for this web part
export const importBlockPropsThis : string[] = [ 'showSomeProps' ];

export const importBlockProps : string[] = [ ...importBlockPropsFPS, ...importBlockPropsThis ];

export const changePropertyGroupX : string[] = [ 'showSomeProps', 'showCustomProps' , 'showOOTBProps' , 'showApprovalProps' , 'propsTitleField', 'propsExpanded', 'selectedProperties' ];

// export interface IFpsCore114BannerWebPartProps extends IMinWPBannerProps {
  /**
   * Extend with portions of FPS Props that are needed
   * 
   */
export interface IFpsCore114BannerWebPartProps extends IMinBannerUIProps, IMinPinMeProps, IMinPandoramicProps, IMinBannerThemeProps, IMinCustomHelpProps, IMinPageStyleProps, IMinBannerUtilityProps, IMinFPSLegacyProps {

  description: string;

}
