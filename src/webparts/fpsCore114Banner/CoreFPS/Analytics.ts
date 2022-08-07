
import { DisplayMode, } from '@microsoft/sp-core-library';

import { IFpsCore114BannerProps } from '../components/IFpsCore114BannerProps';
import { saveAnalytics3, IZLoadAnalytics, IZSentAnalytics, } from '../fpsReferences';

export const analyticsList: string = "FPSPageInfoViews";
export const analyticsWeb: string = "/sites/Templates/Analytics/";

/***
 *     .d8b.  d8b   db  .d8b.  db      db    db d888888b d888888b  .o88b. .d8888. 
 *    d8' `8b 888o  88 d8' `8b 88      `8b  d8' `~~88~~'   `88'   d8P  Y8 88'  YP 
 *    88ooo88 88V8o 88 88ooo88 88       `8bd8'     88       88    8P      `8bo.   
 *    88~~~88 88 V8o88 88~~~88 88         88       88       88    8b        `Y8b. 
 *    88   88 88  V888 88   88 88booo.    88       88      .88.   Y8b  d8 db   8D 
 *    YP   YP VP   V8P YP   YP Y88888P    YP       YP    Y888888P  `Y88P' `8888Y' 
 *                                                                                
 *                                                                                
 */

export function saveViewAnalytics( Title: string, Result: string, thisProps: IFpsCore114BannerProps, analyticsWasExecuted: boolean) : boolean {

    if ( analyticsWasExecuted === true ) {
      console.log('saved view info already');
      return true;

    } else {

    const { fpsPinMenu, context, FPSPropsObj, displayMode } = thisProps;

      // Do not save anlytics while in Edit Mode... only after save and page reloads
      if ( displayMode === DisplayMode.Edit ) { return; }

      let loadProperties: IZLoadAnalytics = {
        SiteID: context.pageContext.site.id['_guid'] as any,  //Current site collection ID for easy filtering in large list
        WebID:  context.pageContext.web.id['_guid'] as any,  //Current web ID for easy filtering in large list
        SiteTitle:  context.pageContext.web.title as any, //Web Title
        TargetSite:  context.pageContext.web.serverRelativeUrl,  //Saved as link column.  Displayed as Relative Url
        ListID:  `${context.pageContext.list.id}`,  //Current list ID for easy filtering in large list
        ListTitle:  context.pageContext.list.title,
        TargetList: `${context.pageContext.web.serverRelativeUrl}`,  //Saved as link column.  Displayed as Relative Url

      };

      const zzzRichText1Obj = null;
      const zzzRichText2Obj = null;
      const zzzRichText3Obj = null;

      console.log( 'zzzRichText1Obj:', zzzRichText1Obj);
      console.log( 'zzzRichText2Obj:', zzzRichText2Obj);
      console.log( 'zzzRichText3Obj:', zzzRichText3Obj);

      let zzzRichText1 = null;
      let zzzRichText2 = null;
      let zzzRichText3 = null;

      //This will get rid of all the escaped characters in the summary (since it's all numbers)
      // let zzzRichText3 = ''; //JSON.stringify( fetchInfo.summary ).replace('\\','');
      //This will get rid of the leading and trailing quotes which have to be removed to make it real json object
      // zzzRichText3 = zzzRichText3.slice(1, zzzRichText3.length - 1);

      if ( zzzRichText1Obj ) { zzzRichText1 = JSON.stringify( zzzRichText1Obj ); }
      if ( zzzRichText2Obj ) { zzzRichText2 = JSON.stringify( zzzRichText2Obj ); }
      if ( zzzRichText3Obj ) { zzzRichText3 = JSON.stringify( zzzRichText3Obj ); }

      console.log('zzzRichText1 length:', zzzRichText1 ? zzzRichText1.length : 0 );
      console.log('zzzRichText2 length:', zzzRichText2 ? zzzRichText2.length : 0 );
      console.log('zzzRichText3 length:', zzzRichText3 ? zzzRichText3.length : 0 );

      const FPSProps = JSON.stringify( FPSPropsObj );

      const saveObject: IZSentAnalytics = {
        loadProperties: loadProperties,

        Title: Title,  //General Label used to identify what analytics you are saving:  such as Web Permissions or List Permissions.

        Result: Result,  //Success or Error

        zzzText1: `${ fpsPinMenu.defPinState } - ${ fpsPinMenu.forcePinState ===  true ? 'forced' : '' }`,

        zzzText2: `${ 'zzzText2' }`,
        zzzText3: `${ 'zzzText3' }`,

        zzzText4: `${ 'zzzText4' }`,
        zzzText5: `${ 'zzzText5' } }`,

        //Info1 in some webparts.  Simple category defining results.   Like Unique / Inherited / Collection
        zzzText6: `${ 'zzzText6' }`, //Info2 in some webparts.  Phrase describing important details such as "Time to check old Permissions: 86 snaps / 353ms"

        // zzzNumber1: fetchInfo.fetchTime,
        // zzzNumber2: fetchInfo.regexTime,
        // zzzNumber3: fetchInfo.Block.length,
        // zzzNumber4: fetchInfo.Warn.length,
        // zzzNumber5: fetchInfo.Verify.length,
        // zzzNumber6: fetchInfo.Secure.length,
        // zzzNumber7: fetchInfo.js.length,

        zzzRichText1: zzzRichText1,  //Used to store JSON objects for later use, will be stringified
        zzzRichText2: zzzRichText2,
        zzzRichText3: zzzRichText3,

        FPSProps: FPSProps,

      };

      saveAnalytics3( analyticsWeb , `${ analyticsList }` , saveObject, true );

      const saved = true;
      console.log('saved view info');
      return saved;

    }

}

