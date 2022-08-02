

import { exportIgnorePropsFPS, importBlockPropsFPS } from '@mikezimm/npmfunctions/dist/HelpPanelOnNPM/onNpm/BannerSetup';
import { IMinWPBannerProps } from "@mikezimm/npmfunctions/dist/HelpPanelOnNPM/onNpm/BannerSetup";
import { IMinBannerUIProps, IMinPinMeProps, IMinPandoramicProps, IMinBannerThemeProps, IMinCustomHelpProps, IMinPageStyleProps, IMinBannerUtilityProps, IMinFPSLegacyProps } from "@mikezimm/npmfunctions/dist/HelpPanelOnNPM/onNpm/BannerSetup";

//Specific for this web part
export const exportIgnorePropsThis = [ ];

export const exportIgnoreProps = [ ...exportIgnorePropsFPS, ...exportIgnorePropsThis  ];

//These props will not be imported even if they are in one of the change arrays above (fail-safe)
//This was done so user could not manually insert specific props to over-right fail-safes built in to the webpart

//Specific for this web part
export const importBlockPropsThis = [ 'showSomeProps' ];

export const importBlockProps = [ ...importBlockPropsFPS, ...importBlockPropsThis ];


export const changePropertyGroupX = [ 'showSomeProps', 'showCustomProps' , 'showOOTBProps' , 'showApprovalProps' , 'propsTitleField', 'propsExpanded', 'selectedProperties' ];

export const changeWebPartStyles = [ 'h1Style', 'h2Style' ,'h3Style' , 'pageInfoStyle', 'tocStyle', 'propsStyle' ];

// export interface IFpsCore114BannerWebPartProps extends IMinWPBannerProps {
export interface IFpsCore114BannerWebPartProps extends IMinBannerUIProps, IMinPinMeProps, IMinPandoramicProps, IMinBannerThemeProps, IMinCustomHelpProps, IMinPageStyleProps, IMinBannerUtilityProps, IMinFPSLegacyProps {

  description: string;
  
}
