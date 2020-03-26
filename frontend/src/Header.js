import React from 'react'; //É necessário o React em todo arquivo contendo JSX

export default function Header(props){
    return(
        <header>
            <h1>{props.children}</h1>
        </header>
    )
}