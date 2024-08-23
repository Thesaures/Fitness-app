import { SvgProps } from "react-native-svg";

export type card ={
    index:number;
    header:string;
    number:number;
    time:number;
    Svg:React.FC<SvgProps>;
}
export type waterMeasure={
    start:string;
    end:string;
    measure:number;
}