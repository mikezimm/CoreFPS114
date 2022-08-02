/**
 * These are the defaults created with yo....
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

import * as strings from 'FpsCore114BannerWebPartStrings';
import FpsCore114Banner from './components/FpsCore114Banner';
import { IFpsCore114BannerProps } from './components/IFpsCore114BannerProps';

/**
 * These are the imports for FPSBanner
 */



// import { PropertyFieldPeoplePicker, PrincipalType } from '@pnp/spfx-property-controls/lib/PropertyFieldPeoplePicker';

// import { setPageFormatting, } from '@mikezimm/npmfunctions/dist/Services/DOM/FPSFormatFunctions';

// import { IFPSPage, } from '@mikezimm/npmfunctions/dist/Services/DOM/FPSInterfaces';
// import { createFPSWindowProps, initializeFPSSection, initializeFPSPage, webpartInstance, } from '@mikezimm/npmfunctions/dist/Services/DOM/FPSDocument';
import { webpartInstance, } from '@mikezimm/npmfunctions/dist/Services/DOM/FPSDocument';
// import { IFPSWindowProps, IFPSSection, IFPSSectionStyle } from '@mikezimm/npmfunctions/dist/Services/DOM/FPSInterfaces';
// import { setSectionStyles } from '@mikezimm/npmfunctions/dist/Services/DOM/setAllSectionStyles';
// import { minimizeHeader } from '@mikezimm/npmfunctions/dist/Services/DOM/minimzeHeader';
// import { minimizeToolbar } from '@mikezimm/npmfunctions/dist/Services/DOM/minimzeToolbar';
// import { minimizeQuickLaunch } from '@mikezimm/npmfunctions/dist/Services/DOM/quickLaunch';
import { applyHeadingCSS } from '@mikezimm/npmfunctions/dist/HeadingCSS/FPSHeadingFunctions';
import { renderCustomStyles } from '@mikezimm/npmfunctions/dist/WebPartFunctions/MainWebPartStyleFunctions';
import { updateBannerThemeStyles } from '@mikezimm/npmfunctions/dist/WebPartFunctions/BannerThemeFunctions';
import { expandoOnInit } from '@mikezimm/npmfunctions/dist/Services/DOM/Expando/WebPartOnInit';

import { replaceHandleBars } from '@mikezimm/npmfunctions/dist/Services/Strings/handleBars';

// import { FPSOptionsGroupBasic, FPSBanner2Group, FPSOptionsGroupAdvanced } from '@mikezimm/npmfunctions/dist/Services/PropPane/FPSOptionsGroup2';
// import { FPSOptionsGroupBasic, FPSBanner3Group, FPSOptionsGroupAdvanced } from '@mikezimm/npmfunctions/dist/Services/PropPane/FPSOptionsGroup3';
import { FPSOptionsGroupBasic, } from '@mikezimm/npmfunctions/dist/Services/PropPane/FPSOptionsGroup3';
import { FPSBanner3BasicGroup,FPSBanner3NavGroup, FPSBanner3ThemeGroup } from '@mikezimm/npmfunctions/dist/Services/PropPane/FPSOptionsGroup3';
import { FPSBanner3VisHelpGroup } from '@mikezimm/npmfunctions/dist/CoreFPS/FPSOptionsGroupVisHelp';
import { FPSPinMePropsGroup } from '@mikezimm/npmfunctions/dist/Services/DOM/PinMe/FPSOptionsGroupPinMe';
import { buildRelatedItemsPropsGroup } from '@mikezimm/npmfunctions/dist/RelatedItems/RelatedItemsPropGroup';

import { FPSOptionsExpando, expandAudienceChoicesAll } from '@mikezimm/npmfunctions/dist/Services/DOM/Expando/FPSOptionsExpando'; //expandAudienceChoicesAll

import { WebPartInfoGroup, } from '@mikezimm/npmfunctions/dist/Services/PropPane/zReusablePropPane';

import * as links from '@mikezimm/npmfunctions/dist/Links/LinksRepos';

import { importProps, FPSImportPropsGroup } from '@mikezimm/npmfunctions/dist/Services/PropPane/ImportFunctions';

// import { sortStringArray, sortObjectArrayByStringKey, sortNumberArray, sortObjectArrayByNumberKey, sortKeysByOtherKey 
// } from '@mikezimm/npmfunctions/dist/Services/Arrays/sorting';

// import { IBuildBannerSettings , buildBannerProps, IMinWPBannerProps } from '@mikezimm/npmfunctions/dist/HelpPanelOnNPM/onNpm/BannerSetup';

import { buildExportProps, buildFPSAnalyticsProps } from './CoreFPS/BuildExportProps';

// import { setExpandoRamicMode } from '@mikezimm/npmfunctions/dist/Services/DOM/FPSExpandoramic';
import { getUrlVars } from '@mikezimm/npmfunctions/dist/Services/Logging/LogFunctions';

//encodeDecodeString(this.props.libraryPicker, 'decode')
// import { encodeDecodeString, } from "@mikezimm/npmfunctions/dist/Services/Strings/urlServices";

// import { verifyAudienceVsUser } from '@mikezimm/npmfunctions/dist/Services/Users/CheckPermissions';

// import { bannerThemes, bannerThemeKeys, makeCSSPropPaneString, createBannerStyleStr, createBannerStyleObj } from '@mikezimm/npmfunctions/dist/HelpPanelOnNPM/onNpm/defaults';

import { IRepoLinks } from '@mikezimm/npmfunctions/dist/Links/CreateLinks';

import { IWebpartHistoryItem2 } from '@mikezimm/npmfunctions/dist/Services/PropPane/WebPartHistory/Interface';
import { updateWebpartHistoryV2,  } from '@mikezimm/npmfunctions/dist/Services/PropPane/WebPartHistory/Functions';
import { getWebPartHistoryOnInit } from '@mikezimm/npmfunctions/dist/Services/PropPane/WebPartHistory/OnInit';

// import { saveAnalytics3 } from '@mikezimm/npmfunctions/dist/Services/Analytics/analytics2';
// import { IZLoadAnalytics, IZSentAnalytics, } from '@mikezimm/npmfunctions/dist/Services/Analytics/interfaces';

// import { getSiteInfo, getWebInfoIncludingUnique } from '@mikezimm/npmfunctions/dist/Services/Sites/getSiteInfo';
import { IFPSUser } from '@mikezimm/npmfunctions/dist/Services/Users/IUserInterfaces';
import { getFPSUser } from '@mikezimm/npmfunctions/dist/Services/Users/FPSUser';

// import { startPerformInit, startPerformOp, updatePerformanceEnd } from './components/Performance/functions';
// import { IPerformanceOp, ILoadPerformanceALVFM, IHistoryPerformance } from './components/Performance/IPerformance';
import { IWebpartBannerProps } from '@mikezimm/npmfunctions/dist/HelpPanelOnNPM/onNpm/bannerProps';

import { mainWebPartRenderBannerSetup } from './CoreFPS/WebPartRenderBanner';
// import { ISupportedHost } from "@mikezimm/npmfunctions/dist/Services/PropPane/FPSInterfaces";

export const repoLink: IRepoLinks = links.gitRepoCoreFPS114Small;

require('@mikezimm/npmfunctions/dist/Services/PropPane/GrayPropPaneAccordions.css');
require('@mikezimm/npmfunctions/dist/Services/DOM/PinMe/FPSPinMe.css');
require('@mikezimm/npmfunctions/dist/HeadingCSS/FPSHeadings.css');
require('@mikezimm/npmfunctions/dist/PropPaneHelp/PropPanelHelp.css');

import { IFpsCore114BannerWebPartProps } from './IFpsCore114BannerWebPartProps';
// import { exportIgnoreProps, importBlockProps, } from './IFpsCore114BannerWebPartProps';
import { importBlockProps, } from './IFpsCore114BannerWebPartProps';
import { createStyleFromString } from '@mikezimm/npmfunctions/dist/Services/PropPane/StringToReactCSS';

import { css } from 'office-ui-fabric-react';
import { PreConfiguredProps } from './CoreFPS/PreConfiguredSettings';
import { refreshBannerStylesOnPropChange,  } from '@mikezimm/npmfunctions/dist/WebPartFunctions/BannerThemeFunctions';
import { updateFpsImportProps,  } from '@mikezimm/npmfunctions/dist/Services/PropPane/ImportFunctions';
import { validateDocumentationUrl,  } from '@mikezimm/npmfunctions/dist/Links/ValidateLinks';

// import { getThisSitesPreConfigProps, IConfigurationProp, ISitePreConfigProps, IPreConfigSettings, IAllPreConfigSettings } from '@mikezimm/npmfunctions/dist/PropPaneHelp/PreConfigFunctions';
import { ISitePreConfigProps, } from '@mikezimm/npmfunctions/dist/PropPaneHelp/PreConfigFunctions';
import { applyPresetCollectionDefaults } from '@mikezimm/npmfunctions/dist/PropPaneHelp/ApplyPresets';
// import { IRelatedItemsProps, IRelatedKey } from '@mikezimm/npmfunctions/dist/RelatedItems/IRelatedItemsProps';

// import { saveViewAnalytics } from './CoreFPS/Analytics';



export default class FpsCore114BannerWebPart extends BaseClientSideWebPart<IFpsCore114BannerWebPartProps> {

  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';

  //Common FPS variables

  private sitePresets : ISitePreConfigProps = null;

  private _unqiueId;
  private _validDocsContacts: string = '';

  private trickyApp = 'FPS Core114';
  private wpInstanceID: any = webpartInstance( this.trickyApp );

  private FPSUser: IFPSUser = null;

  private urlParameters: any = {};

  //For FPS options
  // private fpsPageDone: boolean = false;
  // private fpsPageArray: any[] = null;
  // private minQuickLaunch: boolean = false;
  // private minHideToolbar: boolean = false;

  //For FPS Banner
  private forceBanner = true ;
  private modifyBannerTitle = true ;
  private modifyBannerStyle = true ;
  private enableExpandoramic = true ;

  private  expandoDefault = false;
  // private filesList: any = [];

  private exitPropPaneChanged = false;

  // private expandoErrorObj = {

  // };

  //ADDED FOR WEBPART HISTORY:  
  // private thisHistoryInstance: IWebpartHistoryItem2 = null;

  private importErrorMessage = '';
    
  // private performance : ILoadPerformanceALVFM = null;
  // private bannerProps: IWebpartBannerProps = null;

  private beAReader: boolean = false; //2022-04-07:  Intent of this is a one-time per instance to 'become a reader' level user.  aka, hide banner buttons that reader won't see

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
      // this.presetCollectionDefaults();
      this.sitePresets = applyPresetCollectionDefaults( this.sitePresets, PreConfiguredProps, this.properties, this.context.pageContext.web.serverRelativeUrl ) ;

      //This indicates if its SPA, Teams etc.... always keep.
      this.properties.pageLayout =  this.context['_pageLayoutType']?this.context['_pageLayoutType'] : this.context['_pageLayoutType'];

      

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
        urlVars: getUrlVars(),
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
