/***
 *    db    db  .d88b.       d888888b .88b  d88. d8888b.  .d88b.  d8888b. d888888b .d8888. 
 *    `8b  d8' .8P  Y8.        `88'   88'YbdP`88 88  `8D .8P  Y8. 88  `8D `~~88~~' 88'  YP 
 *     `8bd8'  88    88         88    88  88  88 88oodD' 88    88 88oobY'    88    `8bo.   
 *       88    88    88         88    88  88  88 88~~~   88    88 88`8b      88      `Y8b. 
 *       88    `8b  d8'        .88.   88  88  88 88      `8b  d8' 88 `88.    88    db   8D 
 *       YP     `Y88P'       Y888888P YP  YP  YP 88       `Y88P'  88   YD    YP    `8888Y' 
 *                                                                                         
 *                                                                                         
 */

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';


/***
 *    d888888b db   db d888888b .d8888.      db   d8b   db d88888b d8888b.      d8888b.  .d8b.  d8888b. d888888b 
 *    `~~88~~' 88   88   `88'   88'  YP      88   I8I   88 88'     88  `8D      88  `8D d8' `8b 88  `8D `~~88~~' 
 *       88    88ooo88    88    `8bo.        88   I8I   88 88ooooo 88oooY'      88oodD' 88ooo88 88oobY'    88    
 *       88    88~~~88    88      `Y8b.      Y8   I8I   88 88~~~~~ 88~~~b.      88~~~   88~~~88 88`8b      88    
 *       88    88   88   .88.   db   8D      `8b d8'8b d8' 88.     88   8D      88      88   88 88 `88.    88    
 *       YP    YP   YP Y888888P `8888Y'       `8b8' `8d8'  Y88888P Y8888P'      88      YP   YP 88   YD    YP    
 *                                                                                                               
 *                                                                                                               
 */

// STANDARD PROJECT IMPORTS
import * as strings from 'FpsCore114BannerWebPartStrings';
import { IFpsCore114BannerProps } from './components/IFpsCore114BannerProps';
import { IFpsCore114BannerWebPartProps } from './IFpsCore114BannerWebPartProps';
import FpsCore114Banner from './components/FpsCore114Banner';


/***
 *    d88888b d8888b. .d8888.      d8888b. d8888b. d88888b .d8888. d88888b d888888b .d8888. 
 *    88'     88  `8D 88'  YP      88  `8D 88  `8D 88'     88'  YP 88'     `~~88~~' 88'  YP 
 *    88ooo   88oodD' `8bo.        88oodD' 88oobY' 88ooooo `8bo.   88ooooo    88    `8bo.   
 *    88~~~   88~~~     `Y8b.      88~~~   88`8b   88~~~~~   `Y8b. 88~~~~~    88      `Y8b. 
 *    88      88      db   8D      88      88 `88. 88.     db   8D 88.        88    db   8D 
 *    YP      88      `8888Y'      88      88   YD Y88888P `8888Y' Y88888P    YP    `8888Y' 
 *
 *    USED IN PRESETTING PROPS
 */

import { applyPresetCollectionDefaults } from '@mikezimm/npmfunctions/dist/PropPaneHelp/ApplyPresets';
import { ISitePreConfigProps, } from '@mikezimm/npmfunctions/dist/PropPaneHelp/PreConfigFunctions';
import { PreConfiguredProps } from './CoreFPS/PreConfiguredSettings';


/***
 *     .d88b.  d8b   db      d888888b d8b   db d888888b d888888b 
 *    .8P  Y8. 888o  88        `88'   888o  88   `88'   `~~88~~' 
 *    88    88 88V8o 88         88    88V8o 88    88       88    
 *    88    88 88 V8o88         88    88 V8o88    88       88    
 *    `8b  d8' 88  V888        .88.   88  V888   .88.      88    
 *     `Y88P'  VP   V8P      Y888888P VP   V8P Y888888P    YP    
 *
 *     USED FIRST IN ONINIT
 */

import { webpartInstance, } from '@mikezimm/npmfunctions/dist/Services/DOM/FPSDocument';
// import { getUrlVars } from '@mikezimm/npmfunctions/dist/Services/Logging/LogFunctions';

import { IFPSUser } from '@mikezimm/npmfunctions/dist/Services/Users/IUserInterfaces';
import { getFPSUser } from '@mikezimm/npmfunctions/dist/Services/Users/FPSUser';

import * as links from '@mikezimm/npmfunctions/dist/Links/LinksRepos';
import { IRepoLinks } from '@mikezimm/npmfunctions/dist/Links/CreateLinks';

export const repoLink: IRepoLinks = links.gitRepoCoreFPS114Small;


/***
 *    .d8888. d888888b db    db db      d88888b .d8888. 
 *    88'  YP `~~88~~' `8b  d8' 88      88'     88'  YP 
 *    `8bo.      88     `8bd8'  88      88ooooo `8bo.   
 *      `Y8b.    88       88    88      88~~~~~   `Y8b. 
 *    db   8D    88       88    88booo. 88.     db   8D 
 *    `8888Y'    YP       YP    Y88888P Y88888P `8888Y' 
 *
 *    USED FOR STYLES
 */

import { expandoOnInit } from '@mikezimm/npmfunctions/dist/Services/DOM/Expando/WebPartOnInit';
import { renderCustomStyles } from '@mikezimm/npmfunctions/dist/WebPartFunctions/MainWebPartStyleFunctions';
import { updateBannerThemeStyles } from '@mikezimm/npmfunctions/dist/WebPartFunctions/BannerThemeFunctions';


/***
 *    db   d8b   db d8888b.      db   db d888888b .d8888. d888888b  .d88b.  d8888b. db    db 
 *    88   I8I   88 88  `8D      88   88   `88'   88'  YP `~~88~~' .8P  Y8. 88  `8D `8b  d8' 
 *    88   I8I   88 88oodD'      88ooo88    88    `8bo.      88    88    88 88oobY'  `8bd8'  
 *    Y8   I8I   88 88~~~        88~~~88    88      `Y8b.    88    88    88 88`8b      88    
 *    `8b d8'8b d8' 88           88   88   .88.   db   8D    88    `8b  d8' 88 `88.    88    
 *     `8b8' `8d8'  88           YP   YP Y888888P `8888Y'    YP     `Y88P'  88   YD    YP    
 *
 *     USED FOR WEB PART HISTORY
 */

import { updateWebpartHistoryV2,  } from '@mikezimm/npmfunctions/dist/Services/PropPane/WebPartHistory/Functions';
import { getWebPartHistoryOnInit } from '@mikezimm/npmfunctions/dist/Services/PropPane/WebPartHistory/OnInit';


/***
 *    d8888b.  .d8b.  d8b   db d8b   db d88888b d8888b. 
 *    88  `8D d8' `8b 888o  88 888o  88 88'     88  `8D 
 *    88oooY' 88ooo88 88V8o 88 88V8o 88 88ooooo 88oobY' 
 *    88~~~b. 88~~~88 88 V8o88 88 V8o88 88~~~~~ 88`8b   
 *    88   8D 88   88 88  V888 88  V888 88.     88 `88. 
 *    Y8888P' YP   YP VP   V8P VP   V8P Y88888P 88   YD 
 *
 *     USED FOR CREATING BANNER
 */

import { IWebpartBannerProps } from '@mikezimm/npmfunctions/dist/HelpPanelOnNPM/onNpm/bannerProps';
import { mainWebPartRenderBannerSetup } from './CoreFPS/WebPartRenderBanner';
import { buildExportProps, buildFPSAnalyticsProps } from './CoreFPS/BuildExportProps';

/***
 *    d8888b. d8888b.  .d88b.  d8888b.       d888b  d8888b.  .d88b.  db    db d8888b. .d8888. 
 *    88  `8D 88  `8D .8P  Y8. 88  `8D      88' Y8b 88  `8D .8P  Y8. 88    88 88  `8D 88'  YP 
 *    88oodD' 88oobY' 88    88 88oodD'      88      88oobY' 88    88 88    88 88oodD' `8bo.   
 *    88~~~   88`8b   88    88 88~~~        88  ooo 88`8b   88    88 88    88 88~~~     `Y8b. 
 *    88      88 `88. `8b  d8' 88           88. ~8~ 88 `88. `8b  d8' 88b  d88 88      db   8D 
 *    88      88   YD  `Y88P'  88            Y888P  88   YD  `Y88P'  ~Y8888P' 88      `8888Y' 
 *
 *    USED FOR PROPERTY PANE GROUPS
 */

import { WebPartInfoGroup, } from '@mikezimm/npmfunctions/dist/Services/PropPane/zReusablePropPane';
import { FPSOptionsGroupBasic, } from '@mikezimm/npmfunctions/dist/Services/PropPane/FPSOptionsGroup3';
import { FPSBanner3BasicGroup,FPSBanner3NavGroup, FPSBanner3ThemeGroup } from '@mikezimm/npmfunctions/dist/Services/PropPane/FPSOptionsGroup3';
import { FPSBanner3VisHelpGroup } from '@mikezimm/npmfunctions/dist/CoreFPS/FPSOptionsGroupVisHelp';
import { FPSPinMePropsGroup } from '@mikezimm/npmfunctions/dist/Services/DOM/PinMe/FPSOptionsGroupPinMe';
import { FPSOptionsExpando, } from '@mikezimm/npmfunctions/dist/Services/DOM/Expando/FPSOptionsExpando'; //expandAudienceChoicesAll


/***
 *    d8888b. d8888b.  .d88b.  d8888b.      d888888b .88b  d88. d8888b.  .d88b.  d8888b. d888888b d888888b d8b   db  d888b  
 *    88  `8D 88  `8D .8P  Y8. 88  `8D        `88'   88'YbdP`88 88  `8D .8P  Y8. 88  `8D `~~88~~'   `88'   888o  88 88' Y8b 
 *    88oodD' 88oobY' 88    88 88oodD'         88    88  88  88 88oodD' 88    88 88oobY'    88       88    88V8o 88 88      
 *    88~~~   88`8b   88    88 88~~~           88    88  88  88 88~~~   88    88 88`8b      88       88    88 V8o88 88  ooo 
 *    88      88 `88. `8b  d8' 88             .88.   88  88  88 88      `8b  d8' 88 `88.    88      .88.   88  V888 88. ~8~ 
 *    88      88   YD  `Y88P'  88           Y888888P YP  YP  YP 88       `Y88P'  88   YD    YP    Y888888P VP   V8P  Y888P  
 *
 *    USED for IMPORTING and EXPORTING
 */

import { importBlockProps, } from './IFpsCore114BannerWebPartProps';
import { updateFpsImportProps, FPSImportPropsGroup } from '@mikezimm/npmfunctions/dist/Services/PropPane/ImportFunctions';
import { refreshBannerStylesOnPropChange,  } from '@mikezimm/npmfunctions/dist/WebPartFunctions/BannerThemeFunctions';
import { validateDocumentationUrl,  } from '@mikezimm/npmfunctions/dist/Links/ValidateLinks';


/***
 *     .d8b.  d8b   db  .d8b.  db      db    db d888888b d888888b  .o88b. .d8888. 
 *    d8' `8b 888o  88 d8' `8b 88      `8b  d8' `~~88~~'   `88'   d8P  Y8 88'  YP 
 *    88ooo88 88V8o 88 88ooo88 88       `8bd8'     88       88    8P      `8bo.   
 *    88~~~88 88 V8o88 88~~~88 88         88       88       88    8b        `Y8b. 
 *    88   88 88  V888 88   88 88booo.    88       88      .88.   Y8b  d8 db   8D 
 *    YP   YP VP   V8P YP   YP Y88888P    YP       YP    Y888888P  `Y88P' `8888Y' 
 *
 *    USED FOR ANALYTICS AND LOGGING
 */

// import { saveViewAnalytics } from './CoreFPS/Analytics';


/***
 *     .o88b. .d8888. .d8888.      d8888b. d88888b  .d88b.  db    db d888888b d8888b. d88888b .d8888. 
 *    d8P  Y8 88'  YP 88'  YP      88  `8D 88'     .8P  Y8. 88    88   `88'   88  `8D 88'     88'  YP 
 *    8P      `8bo.   `8bo.        88oobY' 88ooooo 88    88 88    88    88    88oobY' 88ooooo `8bo.   
 *    8b        `Y8b.   `Y8b.      88`8b   88~~~~~ 88    88 88    88    88    88`8b   88~~~~~   `Y8b. 
 *    Y8b  d8 db   8D db   8D      88 `88. 88.     `8P  d8' 88b  d88   .88.   88 `88. 88.     db   8D 
 *     `Y88P' `8888Y' `8888Y'      88   YD Y88888P  `Y88'Y8 ~Y8888P' Y888888P 88   YD Y88888P `8888Y' 
 *
 *     USED BY BANNER COMPONENTS
 */

require('@mikezimm/npmfunctions/dist/Services/PropPane/GrayPropPaneAccordions.css');
require('@mikezimm/npmfunctions/dist/Services/DOM/PinMe/FPSPinMe.css');
require('@mikezimm/npmfunctions/dist/HeadingCSS/FPSHeadings.css');
require('@mikezimm/npmfunctions/dist/PropPaneHelp/PropPanelHelp.css');



export default class FpsCore114BannerWebPart extends BaseClientSideWebPart<IFpsCore114BannerWebPartProps> {

  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';

  //Common FPS variables

  private sitePresets : ISitePreConfigProps = null;
  private trickyApp = 'FPS Core114';
  private wpInstanceID: any = webpartInstance( this.trickyApp );
  private FPSUser: IFPSUser = null;

  //For FPS Banner
  private forceBanner = true ;
  private modifyBannerTitle = true ;
  private modifyBannerStyle = true ;
  private enableExpandoramic = true ;

  private exitPropPaneChanged = false;
  private importErrorMessage = '';
    
  // private performance : ILoadPerformanceALVFM = null;
  // private bannerProps: IWebpartBannerProps = null;

  // private urlParameters: any = {};

  //2022-04-07:  Intent of this is a one-time per instance to 'become a reader' level user.  aka, hide banner buttons that reader won't see
  private beAReader: boolean = false; 


  protected onInit(): Promise<void> {
    this._environmentMessage = this._getEnvironmentMessage();

    return super.onInit().then(async _ => {

      /***
     *     .d88b.  d8b   db      d888888b d8b   db d888888b d888888b      d8888b. db   db  .d8b.  .d8888. d88888b      .d888b. 
     *    .8P  Y8. 888o  88        `88'   888o  88   `88'   `~~88~~'      88  `8D 88   88 d8' `8b 88'  YP 88'          VP  `8D 
     *    88    88 88V8o 88         88    88V8o 88    88       88         88oodD' 88ooo88 88ooo88 `8bo.   88ooooo         odD' 
     *    88    88 88 V8o88         88    88 V8o88    88       88         88~~~   88~~~88 88~~~88   `Y8b. 88~~~~~       .88'   
     *    `8b  d8' 88  V888        .88.   88  V888   .88.      88         88      88   88 88   88 db   8D 88.          j88.    
     *     `Y88P'  VP   V8P      Y888888P VP   V8P Y888888P    YP         88      YP   YP YP   YP `8888Y' Y88888P      888888D 
     *                                                                                                                         
     *                                                                                                                         
     */

      //NEED TO APPLY THIS HERE as well as follow-up in render for it to not visibly change
      this.sitePresets = applyPresetCollectionDefaults( this.sitePresets, PreConfiguredProps, this.properties, this.context.pageContext.web.serverRelativeUrl ) ;

      //This indicates if its SPA, Teams etc.... always keep.
      this.properties.pageLayout =  this.context['_pageLayoutType']?this.context['_pageLayoutType'] : this.context['_pageLayoutType'];
      // this.urlParameters = getUrlVars();

      this.FPSUser = getFPSUser( this.context as any, links.trickyEmails, this.trickyApp ) ;
      console.log( 'FPSUser: ', this.FPSUser );

      expandoOnInit( this.properties, this.context.domElement, this.displayMode );

      updateBannerThemeStyles( this.properties, 'corpDark1', false, this.properties.defPinState );
 
      this.properties.webpartHistory = getWebPartHistoryOnInit( this.context.pageContext.user.displayName, this.properties.webpartHistory );

      renderCustomStyles( this as any, this.domElement, this.properties, false );

    });
  }

  public render(): void {



  /***
   *    d8888b. d88888b d8b   db d8888b. d88888b d8888b.       .o88b.  .d8b.  db      db      .d8888. 
   *    88  `8D 88'     888o  88 88  `8D 88'     88  `8D      d8P  Y8 d8' `8b 88      88      88'  YP 
   *    88oobY' 88ooooo 88V8o 88 88   88 88ooooo 88oobY'      8P      88ooo88 88      88      `8bo.   
   *    88`8b   88~~~~~ 88 V8o88 88   88 88~~~~~ 88`8b        8b      88~~~88 88      88        `Y8b. 
   *    88 `88. 88.     88  V888 88  .8D 88.     88 `88.      Y8b  d8 88   88 88booo. 88booo. db   8D 
   *    88   YD Y88888P VP   V8P Y8888D' Y88888P 88   YD       `Y88P' YP   YP Y88888P Y88888P `8888Y' 
   *                                                                                                  
   *           Source:   PivotTiles 1.5.2.6                                                                                
   */
   renderCustomStyles( this as any, this.domElement, this.properties, false );

   let exportProps = buildExportProps( this.properties , this.wpInstanceID, this.context.pageContext.web.serverRelativeUrl );

   let bannerProps: IWebpartBannerProps = mainWebPartRenderBannerSetup( this.displayMode, this.beAReader, this.FPSUser, repoLink.desc, 
       this.properties, repoLink, exportProps, strings , this.domElement.clientWidth, this.context, this.modifyBannerTitle, 
       this.forceBanner, this.enableExpandoramic );

    const element: React.ReactElement<IFpsCore114BannerProps> = React.createElement(
      FpsCore114Banner,
      {

        /**
         * Default 1.14 properties
         */
        description: this.properties.description,
        isDarkTheme: this._isDarkTheme,
        environmentMessage: this._environmentMessage,
        hasTeamsContext: !!this.context.sdks.microsoftTeams,
        userDisplayName: this.context.pageContext.user.displayName,

        /**
         * Added FPS Banner settings
         */

        //Environement props
        // pageContext: this.context.pageContext, //This can be found in the bannerProps now
        context: this.context,
        displayMode: this.displayMode,

        // saveLoadAnalytics: this.saveLoadAnalytics.bind(this),
        FPSPropsObj: buildFPSAnalyticsProps( this.properties, this.wpInstanceID, this.context.pageContext.web.serverRelativeUrl ),

        //Banner related props
        errMessage: 'any',
        bannerProps: bannerProps,
        webpartHistory: this.properties.webpartHistory,

        sitePresets: this.sitePresets,

        fpsPinMenu: {
          defPinState: this.properties.defPinState,
          forcePinState: this.properties.forcePinState,
          domElement: this.context.domElement,
          pageLayout: this.properties.pageLayout,
        }

      }
    );

    ReactDom.render(element, this.domElement);

  }

  private _getEnvironmentMessage(): string {
    if (!!this.context.sdks.microsoftTeams) { // running in Teams
      return this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
    }

    return this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment;
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    this._isDarkTheme = !!currentTheme.isInverted;
    const {
      semanticColors
    } = currentTheme;
    this.domElement.style.setProperty('--bodyText', semanticColors.bodyText);
    this.domElement.style.setProperty('--link', semanticColors.link);
    this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered);

  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }


  
  /***
 *    d8888b. d8888b.  .d88b.  d8888b.      d8888b.  .d8b.  d8b   db d88888b       .o88b. db   db  .d8b.  d8b   db  d888b  d88888b 
 *    88  `8D 88  `8D .8P  Y8. 88  `8D      88  `8D d8' `8b 888o  88 88'          d8P  Y8 88   88 d8' `8b 888o  88 88' Y8b 88'     
 *    88oodD' 88oobY' 88    88 88oodD'      88oodD' 88ooo88 88V8o 88 88ooooo      8P      88ooo88 88ooo88 88V8o 88 88      88ooooo 
 *    88~~~   88`8b   88    88 88~~~        88~~~   88~~~88 88 V8o88 88~~~~~      8b      88~~~88 88~~~88 88 V8o88 88  ooo 88~~~~~ 
 *    88      88 `88. `8b  d8' 88           88      88   88 88  V888 88.          Y8b  d8 88   88 88   88 88  V888 88. ~8~ 88.     
 *    88      88   YD  `Y88P'  88           88      YP   YP VP   V8P Y88888P       `Y88P' YP   YP YP   YP VP   V8P  Y888P  Y88888P 
 *                                                                                                                                 
 *                                                                                                                                 
 */

  //Copied from AdvancedPagePropertiesWebPart.ts
  // protected onPropertyPaneFieldChanged(propertyPath: string, oldValue: any, newValue: any): void {
    protected async onPropertyPaneFieldChanged(propertyPath: string, oldValue: any, newValue: any) {
      super.onPropertyPaneFieldChanged(propertyPath, oldValue, newValue);
  
      await validateDocumentationUrl ( this.properties, propertyPath , newValue );
  
      this.properties.webpartHistory = updateWebpartHistoryV2( this.properties.webpartHistory , propertyPath , newValue, this.context.pageContext.user.displayName, [], [] );
  
      if ( propertyPath === 'fpsImportProps' ) {
  
        updateFpsImportProps( this.properties, importBlockProps, propertyPath, newValue,
          this.context.propertyPane.refresh,
          this.onPropertyPaneConfigurationStart,
          this.exitPropPaneChanged,
          this.importErrorMessage, 
        );
  
       } else if ( propertyPath === 'bannerStyle' || propertyPath === 'bannerCmdStyle' )  {
  
        refreshBannerStylesOnPropChange( this.properties, propertyPath, newValue, this.context.propertyPane.refresh );
  
      } else if (propertyPath === 'bannerStyleChoice')  {
        // bannerThemes, bannerThemeKeys, makeCSSPropPaneString
  
        updateBannerThemeStyles( this.properties , newValue, true, this.properties.defPinState );
  
        if ( newValue === 'custom' || newValue === 'lock' ) {
          //Do nothing for these cases.
          
        } else {
          //Reset main web part styles to defaults
  
        }
  
      }
  
      this.context.propertyPane.refresh();
  
      this.render();
  
    }


  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          displayGroupsAsAccordion: true, //DONT FORGET THIS IF PROP PANE GROUPS DO NOT EXPAND
          groups: [
            WebPartInfoGroup( repoLink, 'Sample FPS Banner component :)' ),
            FPSPinMePropsGroup, //End this group  

            FPSBanner3VisHelpGroup( this.context, this.onPropertyPaneFieldChanged, this.properties ),
            FPSBanner3BasicGroup( this.forceBanner , this.modifyBannerTitle, this.properties.showBanner, this.properties.infoElementChoice === 'Text' ? true : false, true ),
            FPSBanner3NavGroup(),
            FPSBanner3ThemeGroup( this.modifyBannerStyle, this.properties.showBanner, this.properties.lockStyles, ),
            FPSOptionsGroupBasic( false, true, true, true, this.properties.allSectionMaxWidthEnable, true, this.properties.allSectionMarginEnable, true ), // this group
            FPSOptionsExpando( this.properties.enableExpandoramic, this.properties.enableExpandoramic,null, null ),
  
            FPSImportPropsGroup, // this group
          ]
        }
      ]
    };
  }
}
