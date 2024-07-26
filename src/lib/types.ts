export interface Model {
  id: number;
  displayName: string;
  packages: Package[];
  detailLink: string;
  menuInformation: MenuInformation;
}

export interface MenuInformation {
  title: string;
  subTitle: string;
  subDescription: string;
  menuSmallImg: string;
  menuHeroImg: string;
  menuSmallImgWidth: number;
  menuHeroBigImg: string;
  menuHeroBackImg: string;
  menuHeroFrontImg: string;
}

export interface Package {
  id: number;
  displayName: string;
  mainFeatures: MainFeature[];
  colorOptions: ColorOption[];
  packageIncluded: PackageIncluded[];
}

export interface ColorOption {
  key: Key;
  value: Value;
  colorImg: string;
}

export enum Key {
  Color0 = "color0",
  Color1 = "color1",
  Color2 = "color2",
  Color3 = "color3",
}

export enum Value {
  Renk1 = "Renk1",
  Renk2 = "Renk2",
  Renk3 = "Renk3",
  Renk4 = "Renk4",
}

export interface MainFeature {
  key: string;
  displayName: string;
  value: string;
}

export interface PackageIncluded {
  key: string;
  value: string;
}
