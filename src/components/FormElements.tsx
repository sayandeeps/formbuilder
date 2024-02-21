import { TextFieldFormElement } from "./fields/TextField";

export type ElementsType ="TextField" ;
export type FormElement={
    type : ElementsType;

    construct : (id:string) => FormElementInstance;

    designerBtnElement:{
        icon:React.ElementType;
        label:String;
    }


    designerComponent: React.FC<{
        elementInstance: FormElementInstance;
      }>;
    formComponent : React.FC;
    propertiesComponent : React.FC;
};

export type FormElementInstance=
{

    id:string;
    type : ElementsType;
    extraAttributes?:Record<string,any>;

}

type FormElementsType={
    [key in ElementsType] : FormElement;
}
export const FormElements: FormElementsType={
    TextField: TextFieldFormElement,
};