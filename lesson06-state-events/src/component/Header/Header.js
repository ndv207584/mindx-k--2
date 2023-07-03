import {useState} from "react";
import {Header1} from './Header1';
import {False} from './False';
import './Header.css'

const Header = () => {
    const [result, setResult] = useState(false);
    const contact = (simble) => {
        const regit = simble;
        setResult(regit);
    }
    return(
        result?<False contact={contact} result={result}/>:<Header1 contact={contact} result={!result}/>
    )
} 

export default Header;