import { equip, singleSet,exercises } from "../types/types";
import One from '../../assets/images/imOne.svg';
import Two from '../../assets/images/imTwo.svg';
import Three from '../../assets/images/imThree.svg';
import Four from '../../assets/images/imFive.svg';
import Five from '../../assets/images/imFive.svg';
import Six from '../../assets/images/imSix.svg'; 
import Dumbell from '../../assets/images/dumbell.svg';
import Bottle from '../../assets/images/bottle.svg';
import Rope from '../../assets/images/rope.svg';
export const SYMBOL_REGEX = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
export const CAPITAL_REGEX = /[A-Z]/;
export const NUMBER_REGEX = /[0-9]/;
export const USERNAME_REGEX = /[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]/;
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const CHECK_USERNAME = /^[A-Za-z]+ [A-Za-z]+$/;

const set:singleSet[] = [
    {
       Svg:One,
       name:'Warm Up',
       set:'05:00'
    },
    {
        Svg:Two,
        name:'Jumping Jack',
        set:'12x'
     },
     {
        Svg:Three,
        name:'Skipping',
        set:'15x'
     },
     {
        Svg:Four,
        name:'Squats',
        set:'20x'
     },
     {
        Svg:Five,
        name:'Arm Raises',
        set:'00:53'
     },
     {
        Svg:Six,
        name:'Rest And Drink',
        set:'02:00'
     },

]
 
export const sets:exercises[]=[
    {
        id:'1',
        set:set
    },
    {
        id:'2',
        set:set
    },
]
export const data:equip[]=[
    {
        name:'Dumbell',
        Svg:Dumbell
    },
    {
        name:'Rope',
        Svg:Rope
    },
    {
        name:'Bottle',
        Svg:Bottle
    },
    {
        name:'Bottle',
        Svg:Bottle
    },
]