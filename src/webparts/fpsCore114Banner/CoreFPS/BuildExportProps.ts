
/***
 *    d888888b .88b  d88. d8888b.  .d88b.  d8888b. d888888b       .d88b.  d88888b d88888b d888888b  .o88b. d888888b  .d8b.  db      
 *      `88'   88'YbdP`88 88  `8D .8P  Y8. 88  `8D `~~88~~'      .8P  Y8. 88'     88'       `88'   d8P  Y8   `88'   d8' `8b 88      
 *       88    88  88  88 88oodD' 88    88 88oobY'    88         88    88 88ooo   88ooo      88    8P         88    88ooo88 88      
 *       88    88  88  88 88~~~   88    88 88`8b      88         88    88 88~~~   88~~~      88    8b         88    88~~~88 88      
 *      .88.   88  88  88 88      `8b  d8' 88 `88.    88         `8b  d8' 88      88        .88.   Y8b  d8   .88.   88   88 88booo. 
 *    Y888888P YP  YP  YP 88       `Y88P'  88   YD    YP          `Y88P'  YP      YP      Y888888P  `Y88P' Y888888P YP   YP Y88888P 
 *                                                                                                                                  
 *                                                                                                                                  
 */


/***
  *    d888888b .88b  d88. d8888b.  .d88b.  d8888b. d888888b      d8b   db d8888b. .88b  d88.      d88888b db    db d8b   db  .o88b. d888888b d888888b  .d88b.  d8b   db .d8888. 
  *      `88'   88'YbdP`88 88  `8D .8P  Y8. 88  `8D `~~88~~'      888o  88 88  `8D 88'YbdP`88      88'     88    88 888o  88 d8P  Y8 `~~88~~'   `88'   .8P  Y8. 888o  88 88'  YP 
  *       88    88  88  88 88oodD' 88    88 88oobY'    88         88V8o 88 88oodD' 88  88  88      88ooo   88    88 88V8o 88 8P         88       88    88    88 88V8o 88 `8bo.   
  *       88    88  88  88 88~~~   88    88 88`8b      88         88 V8o88 88~~~   88  88  88      88~~~   88    88 88 V8o88 8b         88       88    88    88 88 V8o88   `Y8b. 
  *      .88.   88  88  88 88      `8b  d8' 88 `88.    88         88  V888 88      88  88  88      88      88b  d88 88  V888 Y8b  d8    88      .88.   `8b  d8' 88  V888 db   8D 
  *    Y888888P YP  YP  YP 88       `Y88P'  88   YD    YP         VP   V8P 88      YP  YP  YP      YP      ~Y8888P' VP   V8P  `Y88P'    YP    Y888888P  `Y88P'  VP   V8P `8888Y' 
  *                                                                                                                                                                              
  *                                                                                                                                                                              
  */

//  import { getHelpfullError } from '@mikezimm/npmfunctions/dist/Services/Logging/ErrorHandler';
//  import { getHelpfullErrorV2, saveThisLogItem } from  '@mikezimm/npmfunctions/dist/Services/Logging/ErrorHandler';

 import { createExportObject, } from '@mikezimm/npmfunctions/dist/Services/PropPane/ExportFunctions';
//  import { IMinExportObject, } from '@mikezimm/npmfunctions/dist/Services/PropPane/ExportFunctions';

  /***
  *    d888888b .88b  d88. d8888b.  .d88b.  d8888b. d888888b       .o88b.  .d88b.  .88b  d88. d8888b.  .d88b.  d8b   db d88888b d8b   db d888888b 
  *      `88'   88'YbdP`88 88  `8D .8P  Y8. 88  `8D `~~88~~'      d8P  Y8 .8P  Y8. 88'YbdP`88 88  `8D .8P  Y8. 888o  88 88'     888o  88 `~~88~~' 
  *       88    88  88  88 88oodD' 88    88 88oobY'    88         8P      88    88 88  88  88 88oodD' 88    88 88V8o 88 88ooooo 88V8o 88    88    
  *       88    88  88  88 88~~~   88    88 88`8b      88         8b      88    88 88  88  88 88~~~   88    88 88 V8o88 88~~~~~ 88 V8o88    88    
  *      .88.   88  88  88 88      `8b  d8' 88 `88.    88         Y8b  d8 `8b  d8' 88  88  88 88      `8b  d8' 88  V888 88.     88  V888    88    
  *    Y888888P YP  YP  YP 88       `Y88P'  88   YD    YP          `Y88P'  `Y88P'  YP  YP  YP 88       `Y88P'  VP   V8P Y88888P VP   V8P    YP    
  *                                                                                                                                               
  *                                                                                                                                               
  */

//Common or Shared FPS Banner props

import { exportIgnoreProps, } from '../IFpsCore114BannerWebPartProps';

import { changePinMe, changeWebPartStyles, } from '../IFpsCore114BannerWebPartProps'; //These were added in FPSPageInfo.  May not apply to all web parts.

import { changeVisitor, changeExpando, changeBanner, changefpsOptions1, changefpsOptions2,  } from '@mikezimm/npmfunctions/dist/WebPartInterfaces/ImportProps';

import { changeBannerBasics, changeBannerNav, changeBannerTheme, changeBannerOther,  } from '@mikezimm/npmfunctions/dist/WebPartInterfaces/ImportProps';

/***
 *    .d8888.  .d8b.  .88b  d88. d8888b. db      d88888b       .d88b.  d8b   db db      db    db                                                                            
 *    88'  YP d8' `8b 88'YbdP`88 88  `8D 88      88'          .8P  Y8. 888o  88 88      `8b  d8'                                                                            
 *    `8bo.   88ooo88 88  88  88 88oodD' 88      88ooooo      88    88 88V8o 88 88       `8bd8'                                                                             
 *      `Y8b. 88~~~88 88  88  88 88~~~   88      88~~~~~      88    88 88 V8o88 88         88                                                                               
 *    db   8D 88   88 88  88  88 88      88booo. 88.          `8b  d8' 88  V888 88booo.    88                                                                               
 *    `8888Y' YP   YP YP  YP  YP 88      Y88888P Y88888P       `Y88P'  VP   V8P Y88888P    YP                                                                               
 *                                                                                                                                                                          
 *                                                                                                                                                                          
 *     .o88b.  .d88b.  d8888b. db    db      d888888b  .d88b.       db       .d88b.   .o88b.  .d8b.  db           d8888b. d8888b.  .d88b.     d88b d88888b  .o88b. d888888b 
 *    d8P  Y8 .8P  Y8. 88  `8D `8b  d8'      `~~88~~' .8P  Y8.      88      .8P  Y8. d8P  Y8 d8' `8b 88           88  `8D 88  `8D .8P  Y8.    `8P' 88'     d8P  Y8 `~~88~~' 
 *    8P      88    88 88oodD'  `8bd8'          88    88    88      88      88    88 8P      88ooo88 88           88oodD' 88oobY' 88    88     88  88ooooo 8P         88    
 *    8b      88    88 88~~~      88            88    88    88      88      88    88 8b      88~~~88 88           88~~~   88`8b   88    88     88  88~~~~~ 8b         88    
 *    Y8b  d8 `8b  d8' 88         88            88    `8b  d8'      88booo. `8b  d8' Y8b  d8 88   88 88booo.      88      88 `88. `8b  d8' db. 88  88.     Y8b  d8    88    
 *     `Y88P'  `Y88P'  88         YP            YP     `Y88P'       Y88888P  `Y88P'   `Y88P' YP   YP Y88888P      88      88   YD  `Y88P'  Y8888P  Y88888P  `Y88P'    YP    
 *                                                                                                                                                                          
 *                                                                                                                                                                          
 */

 import { IFpsCore114BannerWebPartProps } from '../IFpsCore114BannerWebPartProps';
 import { } from '@mikezimm/npmfunctions/dist/WebPartInterfaces/ImportProps';

/***
 *    d88888b db    db d8888b.  .d88b.  d8888b. d888888b      d8888b. d8888b.  .d88b.  d8888b. .d8888. 
 *    88'     `8b  d8' 88  `8D .8P  Y8. 88  `8D `~~88~~'      88  `8D 88  `8D .8P  Y8. 88  `8D 88'  YP 
 *    88ooooo  `8bd8'  88oodD' 88    88 88oobY'    88         88oodD' 88oobY' 88    88 88oodD' `8bo.   
 *    88~~~~~  .dPYb.  88~~~   88    88 88`8b      88         88~~~   88`8b   88    88 88~~~     `Y8b. 
 *    88.     .8P  Y8. 88      `8b  d8' 88 `88.    88         88      88 `88. `8b  d8' 88      db   8D 
 *    Y88888P YP    YP 88       `Y88P'  88   YD    YP         88      88   YD  `Y88P'  88      `8888Y' 
 *                                                                                                     
 *                                                                                                     
 */


/**
 * buildExportProps builds up an object of specific webpart properties that can be exported via the help panel
 * @param wpProps 
 * @param wpInstanceID 
 * @param currentWeb 
 * @returns 
 */

 export function buildExportProps( wpProps : IFpsCore114BannerWebPartProps, wpInstanceID: string, currentWeb: string, ) {
    let exportStructure :any = {};

    //These are common at top of every web part
    exportStructure.wpInstanceID = wpInstanceID;
    exportStructure.currentWeb = currentWeb;

    //Add Keys to export like this.
    // exportStructure.changeTOC = changeTOC;



    //These are common across all FPS Banner web parts
    exportStructure.changePinMe = changePinMe;

    exportStructure.changeWebPartStyles = changeWebPartStyles;

    exportStructure.Visitor = changeVisitor;

    exportStructure.Banner = changeBanner;

    exportStructure.fpsOptions1 = changefpsOptions1;

    exportStructure.Expando = changeExpando;

    exportStructure.fpsOptions2 = changefpsOptions2;

    let exportObject = createExportObject( exportStructure, wpProps, exportIgnoreProps, false );

    console.log('Exportable Props:', exportObject );
    return exportObject;

  }

  /**
   * This function creates FPSPropsObj which is designed to be passed in to Analytics save object.
   * @param wpProps 
   * @param wpInstanceID 
   * @param currentWeb 
   * @returns 
   */
  export function buildFPSAnalyticsProps( wpProps : IFpsCore114BannerWebPartProps, wpInstanceID: string, currentWeb: string, ) {
    let exportStructure :any = {};

    exportStructure.wpInstanceID = wpInstanceID;
    exportStructure.currentWeb = currentWeb;

    exportStructure.Visitor = changeVisitor;

    exportStructure.BannerBasics = changeBannerBasics;
    exportStructure.BannerNav = changeBannerNav;

    exportStructure.BannerTheme = changeBannerTheme;
    exportStructure.BannerOther = changeBannerOther;

    // exportStructure.Expando = changeExpando;

    exportStructure.fpsOptions1 = changefpsOptions1;
    exportStructure.fpsOptions2 = changefpsOptions2;

    let exportObject = createExportObject( exportStructure, wpProps, exportIgnoreProps, false );

    console.log('Exportable Props:', exportObject );
    return exportObject;

  }