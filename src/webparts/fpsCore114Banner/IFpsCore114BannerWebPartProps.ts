
// import { IPropertyFieldGroupOrPerson } from "@pnp/spfx-property-controls/lib/PropertyFieldPeoplePicker";

// import { ISupportedHost } from "@mikezimm/npmfunctions/dist/Services/PropPane/FPSInterfaces";

// import { IExpandAudiences } from "@mikezimm/npmfunctions/dist/Services/PropPane/FPSOptionsExpando";

// import { IWebpartHistory, IWebpartHistoryItem2, } from '@mikezimm/npmfunctions/dist/Services/PropPane/WebPartHistoryInterface';
// import { IPinMeState } from "@mikezimm/npmfunctions/dist/Services/DOM/PinMe/FPSPinMenu";

import { IMinHeadingStyleProps } from "@mikezimm/npmfunctions/dist/HeadingCSS/FPSHeadingFunctions";

import { exportIgnorePropsFPS, importBlockPropsFPS } from '@mikezimm/npmfunctions/dist/HelpPanelOnNPM/onNpm/BannerSetup';
import { IMinWPBannerProps } from "@mikezimm/npmfunctions/dist/HelpPanelOnNPM/onNpm/BannerSetup";
import { IMinBannerUIProps, IMinPinMeProps, IMinPandoramicProps, IMinBannerThemeProps, IMinCustomHelpProps, IMinPageStyleProps, IMinBannerUtilityProps, IMinFPSLegacyProps } from "@mikezimm/npmfunctions/dist/HelpPanelOnNPM/onNpm/BannerSetup";
import { IMinRelatedWPProps, IMinPageLinksProps } from "@mikezimm/npmfunctions/dist/RelatedItems/IRelatedWebPartProps";

//Specific for this web part
export const exportIgnorePropsThis = [ ];

export const exportIgnoreProps = [ ...exportIgnorePropsFPS, ...exportIgnorePropsThis  ];

//These props will not be imported even if they are in one of the change arrays above (fail-safe)
//This was done so user could not manually insert specific props to over-right fail-safes built in to the webpart

//Specific for this web part
export const importBlockPropsThis = [ 'showSomeProps' ];

export const importBlockProps = [ ...importBlockPropsFPS, ...importBlockPropsThis ];

//This will be in npmFunctions > Services/PropPane/FPSOptionsExpando in next release.
//  export type IExpandAudiences = 'Site Admins' | 'Site Owners' | 'Page Editors' | 'WWWone';

// Should be in npmFunctions
export const changePinMe = [ 'defPinState', 'forcePinState' ];  

export const changePropertyGroupX = [ 'showSomeProps', 'showCustomProps' , 'showOOTBProps' , 'showApprovalProps' , 'propsTitleField', 'propsExpanded', 'selectedProperties' ];

export const changeWebPartStyles = [ 'h1Style', 'h2Style' ,'h3Style' , 'pageInfoStyle', 'tocStyle', 'propsStyle' ];

// export interface IFpsCore114BannerWebPartProps extends IMinWPBannerProps {
export interface IFpsCore114BannerWebPartProps extends IMinBannerUIProps, IMinPinMeProps, IMinPandoramicProps, IMinBannerThemeProps, IMinCustomHelpProps, IMinPageStyleProps, IMinBannerUtilityProps, IMinFPSLegacyProps {

  description: string;
  
}
