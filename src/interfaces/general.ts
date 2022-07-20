// @ts-ignore
import { IRawDataset } from './datasets.ts'
// @ts-ignore
import { IElement } from './elements.ts'

interface ISettings {
  header: {
    isHeaderRepeatable: boolean,
    height: number,
    headerElements: IElement[],
  },
  body: {
    bodyElements: IElement[]
  },
  footer: {
    isFooterRepeatable: boolean,
    height: number,
    footerElements: IElement[],
  },
  defaultHeightOfPaper: number,
  defaultWidthOfPaper: number
  totalHeightOfAPaper: number
  designName: string,
  orientation: string,
  pageSize: string,
  pageDirections: string,
  dataSets: IRawDataset,
  pageBorder: string,
  maximumFileSize: string
}

interface IConfigs {
  maximumFileSize: number,
  language: string
}

interface IMixins {
  methods: object
  data: () => object;
}

export { ISettings, IConfigs, IMixins }