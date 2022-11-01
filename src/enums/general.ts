export enum fileEntryTypes {
  imageElement = 1,
  imageVariable,
  VCPSrcFile
}

export enum getDisplaySetModes {
  TEMPLATEBUILDERCHILD = 'templatebuilder_child', // child element of repeator
  TEMPLATEBUILDERSEPRATE = 'templatebuilder_seprate',
  REPEATOR = 'repeator'
}

export enum TemplateBuilderSections {
  HEADER = 'header',
  BEFOREBODY = 'beforeBody',
  BODY = 'body',
  AFTERBODY = 'afterBody',
  FOOTER = 'footer',
}