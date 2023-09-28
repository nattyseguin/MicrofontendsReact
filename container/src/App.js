import React from 'react';
import MarketingApp from './components/MarketingApp';


export default () =>{
///Se podria exportar el cmponente directmente, pero puede dar problemas en el futuro si 
//cambiamos de framework, asi que lo no lo hacemos
    return <div>
        <h1>Hi there</h1>
        <hr/>
        <MarketingApp/>
    </div>
};