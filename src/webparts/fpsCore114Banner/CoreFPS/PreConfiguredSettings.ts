import { IPropertyFieldGroupOrPerson } from "@pnp/spfx-property-controls/lib/PropertyFieldPeoplePicker";
// import { IFpsCore114BannerWebPartProps } from "../IFpsCore114BannerWebPartProps";

import { IPreConfigSettings, IAllPreConfigSettings } from '@mikezimm/npmfunctions/dist/PropPaneHelp/PreConfigFunctions';
import { PresetFPSBanner } from '@mikezimm/npmfunctions/dist/PropPaneHelp/PreConfiguredConstants';
import { encrptMeOriginalTest } from '@mikezimm/npmfunctions/dist/HelpPanelOnNPM/onNpm/logTest';
import { ContALVFMContent, ContALVFMWebP } from '@mikezimm/npmfunctions/dist/HelpPanelOnNPM/onNpm/constants';

import * as strings from 'FpsCore114BannerWebPartStrings';
// import { createBannerStyleStr } from "@mikezimm/npmfunctions/dist/HelpPanelOnNPM/onNpm/defaults";

const FinancialManualContacts: IPropertyFieldGroupOrPerson = {
    id: '1',
    description: '',
    fullName: 'Financial Manual Support team',
    login: '',
    email: `ae57524a.${window.location.hostname}.onmicrosoft.com@amer.teams.ms`,
    // jobTitle?: string;
    // initials?: string;
    imageUrl: null,
};

//Specific to this web part
export const WPForceEverywhere : IPreConfigSettings = {
    source: 'WPForceEverywhere',
    location: '*',
    props: {

        showRepoLinks : true,
        // showExport : false,

        // enableExpandoramic : false,
        showBanner : true,

    }
};

//Specific to this web part
export const WPPresetEverywhere : IPreConfigSettings = {
    source: 'WPPresetEverywhere',
    location: '*',
    props: {
        bannerTitle: "FPS Core 1.14 Banner Default",
        defPinState: 'disabled',
    }
};

export const ForceFinancialManualColl : IPreConfigSettings = {
    source: 'ForceFinancialManualColl',
    location: '/sites/financemanual/'.toLowerCase(),
    props: {
        // Pin Me props that are not preset in manifest.json
        defPinState: "pinFull",
        forcePinState: true,

        // Visitor Panel props that are not preset in manifest.json
        fullPanelAudience: 'Page Editors',
        panelMessageDescription1: 'Finance Manual Help and Contact',
        panelMessageSupport: `Contact ${encrptMeOriginalTest( ContALVFMContent )} for Finance Manual content`,
        panelMessageDocumentation: `Contact ${encrptMeOriginalTest( ContALVFMWebP )}  for Web part questions`,
        panelMessageIfYouStill: '',
        documentationLinkDesc: 'Finance Manual Help site',
        documentationLinkUrl: '/sites/FinanceManual/Help',
        documentationIsValid: true,
        supportContacts: [ FinancialManualContacts ],

        // FPS Banner Basics
        bannerTitle: 'Page Info',
        infoElementChoice: "IconName=Unknown",
        infoElementText: "Question mark circle",
        feedbackEmail: `ae57524a.${window.location.hostname}.onmicrosoft.com@amer.teams.ms`,

        // FPS Banner Navigation
        showGoToHome: true,
        showGoToParent: true,

        // Banner Theme props that are not preset in manifest.json
        bannerStyleChoice: 'corpDark1',
        bannerStyle: '{\"color\":\"white\",\"backgroundColor\":\"#005495\",\"fontSize\":\"larger\",\"fontWeight\":600,\"fontStyle\":\"normal\",\"padding\":\"0px 10px\",\"height\":\"48px\",\"cursor\":\"pointer\"}',
        bannerCmdStyle: '{\"color\":\"white\",\"backgroundColor\":\"#005495\",\"fontSize\":16,\"fontWeight\":\"normal\",\"fontStyle\":\"normal\",\"padding\":\"7px 4px\",\"marginRight\":\"0px\",\"borderRadius\":\"5px\",\"cursor\":\"pointer\"}',
        lockStyles: true,

    }
};

export const ForceFinancialManualSubSite : IPreConfigSettings = {
    source: 'ForceFinancialManualSubSite',
    location: '/sites/financemanual/manual/'.toLowerCase(),
    props: {

    }
};

export const PresetFinancialManual : IPreConfigSettings = {
    source: 'PresetFinancialManual',
    location: '/sites/financemanual/'.toLowerCase(),
    props: {
        homeParentGearAudience: 'Everyone',
    }
};

export const PresetSomeRandomSite : IPreConfigSettings = {
    source: 'PresetSomeRandomSite',
    location: '/sites/FpsCore114BannerSite/'.toLowerCase(),
    props: {
        // homeParentGearAudience: 'Some Test Value',
        // requireDocumentation: false,
        // requireDocumentation: 'redDark',
    }
};

export const ForceSomeRandomSite : IPreConfigSettings = {
    source: 'ForceSomeRandomSite',
    location: '/sites/FpsCore114BannerSite/'.toLowerCase(),
    props: {
        // homeParentGearAudience: 'Some Test Value',
        // requireDocumentation: false,
        // requireContacts: true,
        // bannerStyleChoice: 'redDark',
        // bannerStyle: createBannerStyleStr( 'redDark', 'banner'),
        // bannerCmdStyle: createBannerStyleStr( 'redDark', 'cmd'),
    }
};


export const PreConfiguredProps : IAllPreConfigSettings = {
    //Forced over-ride presets.
    //Forced and presets are applied in order of this array....
    //  This means the final preset in the array takes precedance.

    //For Forced, generally speaking put because this web part may have specific needs.
    forced: [ WPForceEverywhere, ForceFinancialManualColl, ForceFinancialManualSubSite, ForceSomeRandomSite,  ],

    //For Presets, Order should be:  PresetFPSBanner, WPPresetEverywhere, CUSTOM Sites,
    preset: [ PresetFPSBanner, WPPresetEverywhere, PresetFinancialManual, PresetSomeRandomSite, ],
};
