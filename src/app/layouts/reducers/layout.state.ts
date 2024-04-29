import { Map, Record } from 'immutable';

export interface LayoutState extends Map<string, any> {
  isEnterpriseView: boolean;
  currentCountry: string;
  countryFlag:string;
}

export const LayoutStateRecord = Record({
  isEnterpriseView: false,
  currentCountry: 'Nigeria',
  countryFlag:'https://flagsapi.com/+234/flat/64.png'
});
