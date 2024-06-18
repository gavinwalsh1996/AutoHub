import { MouseEventHandler } from "react" ;

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | 'submit';
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface SearchManuFacturerProps {
    manufacturer: string;
    setManuFacturer: (manufacturer: string) => void;
  }
// export interface CustomFilter {
//     title: string;
//     containerStyles?: string;
//     handleClick?: MouseEventHandler<HTMLButtonElement>;
//     btnType?: "button" | 'submit';
// }