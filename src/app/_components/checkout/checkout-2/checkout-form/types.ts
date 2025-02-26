export interface StateProvinceOption {
  value: string;
  label: string;
}

export interface CountryRegions {
  [key: string]: {
    name: string;
    options: StateProvinceOption[];
  };
}
