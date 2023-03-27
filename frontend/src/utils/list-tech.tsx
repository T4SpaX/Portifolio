import { Button, Tooltip } from "@material-tailwind/react";
import renderThemeChanger from '../hook/darkModeHook';
interface Props {
    props:{
        text: string
        color: string
        colorIcon: string
        icon: JSX.Element
        mobile:string
    }
}

export function ListTech({props}:Props){
    const theme = renderThemeChanger();
//
    return(
    <li>
        <Tooltip 
            interactive={true}
            content={props.text}
            placement={'top'}
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
            <Button
                variant='filled' 
                className={`${props.colorIcon} p-3 
                text-center inline-flex items-center
                justify-center w-16 h-16 mb-5 rounded 
                ${props.color} font-semibold hover:-translate-y-1
                shadow-gray-400 ${theme?'shadow-none':''}`}
            >
                {props.icon}                              
            </Button>
        </Tooltip>
    </li>
    )
}