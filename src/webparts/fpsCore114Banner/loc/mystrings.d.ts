declare interface IFpsCore114BannerWebPartStrings {
  bannerTitle: string;
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;

  // 1 - Analytics options
  analyticsWeb: string;
  analyticsList: string;

}

declare module 'FpsCore114BannerWebPartStrings' {
  const strings: IFpsCore114BannerWebPartStrings;
  export = strings;
}
