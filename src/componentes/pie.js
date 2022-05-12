import React from "react";

import pie from '../css/pie.module.css';

function Pie( ) {
    return (
      <div className={pie.wrapper} >
        <div className={pie.header} >Header</div>
        <div className={pie.sidebar} >Sidebar</div>
        <div className={pie.content} >Content</div>
       </div>
       
    );
}

export default Pie;