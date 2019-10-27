import { Block } from "tsc/block/Block";

declare var instgrm: any;

declare namespace bre {
  type Event =
    | "onLoad"
    | "onChange"
    | "onBlockAdd"
    | "onBlockDelete"
    | "onBlockMove"
    | "onBlockSelect"
    | "onBlockDeselect"
    | "onBlockUpdate"
    | "onError";
  
  type Subscriptions = {
    [TKey in Event]: (params: any) => void;
  };

  type FileUploadHandler = (file: any, callback: (url: string) => void) => void); 

  type Options = Subscriptions & {
      /** Url to predifined templates */
      templatesUrl: string = "templates/bootstrap4.html",      
    
      onUpload: FileUploadHandler,
    
      /** Url to fetch initial blocks, overrides initial blocks property */
      blocksUrl: string,
      /** Inital block data */
      blocks: Block[],
      /** Show blocks selector in compact mode */
      compactTools?: boolean,
      /** Max screen width to show tools in compact mode */
      compactToolsWidth: number,
      /** Ignore blocks html field, if you need only json */
      ignoreHtml: boolean,
      /** Custom Html editor buttons */
      htmlToolsButtons?: bre.IHtmlToolsButton[],
      /** Form selector to bind form submit event */
      formSelector: string,
      /** Input selector to put json to on form submit */
      inputSelector: string,    
    }

  namespace ui {}

  interface IHtmlToolsButton {
    icon: string;
    command: string;
    range: boolean;
    aValueArgument: string;
  }

  interface IBlockData {
    template: string;
    fields: any[];
    html?: string;
  }

  // type DataField = {
  //   name: string;
  //   value: any;
  // };

  type Data = {
    [TKey: string]: any;
    name: string;
  };

  // namespace field {
  //   interface IBaseField<TData extends bre.Data> {
  //     data: TData;
  //   }
  // }

  namespace prompt {
    type PromptParameterType = "text" | "file";

    type PromptParameter = {
      type?: PromptParameterType;
      value: any;
      title: string;
      placeholder?: string;
    };

    type PromptParameters = {
      [TKey: string]: PromptParameter;
    };

    type PromptParameterWithControl = PromptParameter & {
      control: HTMLElement;
    };

    interface IPromptParameterImageResult {
      fileContent: string;
      fileInfo: IPromptParameterImageResultFile;
    }

    interface IPromptParameterImageResultFile {
      lastModified: number;
      lastModifiedDate: any;
      name: string;
      size: number;
      type: string;

      // constructor(file: File) {
      //   this.name = file.name;
      //   this.size = file.size;
      //   this.type = file.type;
      //   this.lastModified = (file as any).lastModified;
      //   this.lastModifiedDate = file.lastModifiedDate;
      // }
    }

    interface IPromptParameterOption {
      title: string;
      value: any;
      selected?: boolean;
    }
  }
}
