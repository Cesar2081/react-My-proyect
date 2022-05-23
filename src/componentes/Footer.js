import React from "react";

import pie1 from '../css/Footer.module.css';

function pie() {
    return (
      <div className={pie1.wrapper} >
        <div className={pie1.header} >Header</div>
        <div className={pie1.sidebar} >Sidebar</div>
        <div className={pie1.content} >Content</div>
       </div>
       
    );
}

export default pie;