// import { IPropertyFieldGroupOrPerson } from "@pnp/spfx-property-controls/lib/PropertyFieldPeoplePicker";
// import { IFpsCore114BannerWebPartProps } from "../IFpsCore114BannerWebPartProps";

import { IPreConfigSettings, IAllPreConfigSettings } from '@mikezimm/npmfunctions/dist/PropPaneHelp/PreConfigFunctions';
import { PresetFPSBanner } from '@mikezimm/npmfunctions/dist/PropPaneHelp/PreConfiguredConstants';
import { encrptMeOriginalTest } from '@mikezimm/npmfunctions/dist/HelpPanelOnNPM/onNpm/logTest';
import { createBannerStyleStr } from "@mikezimm/npmfunctions/dist/HelpPanelOnNPM/onNpm/defaults";

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

export const PresetSomeRandomSite : IPreConfigSettings = {
    source: 'PresetSomeRandomSite',
    location: '/sites/FPS/'.toLowerCase(),
    props: {
        // homeParentGearAudience: 'Some Test Value',
        // requireDocumentation: false,
        requireDocumentation: 'redDark',
    }
};

export const ForceSomeRandomSite : IPreConfigSettings = {
    source: 'ForceSomeRandomSite',
    location: '/sites/FPS/'.toLowerCase(),
    props: {
        // homeParentGearAudience: 'Some Test Value',
        // requireDocumentation: false,
        // requireContacts: true,
        bannerStyleChoice: 'redDark',
        bannerStyle: createBannerStyleStr( 'redDark', 'banner'),
        bannerCmdStyle: createBannerStyleStr( 'redDark', 'cmd'),
    }
};


export const PreConfiguredProps : IAllPreConfigSettings = {
    //Forced over-ride presets.
    //Forced and presets are applied in order of this array....
    //  This means the final preset in the array takes precedance.

    //For Forced, generally speaking put because this web part may have specific needs.
    forced: [ WPForceEverywhere, ForceSomeRandomSite,  ],

    //For Presets, Order should be:  PresetFPSBanner, WPPresetEverywhere, CUSTOM Sites,
    preset: [ PresetFPSBanner, WPPresetEverywhere, PresetSomeRandomSite, ],
};
