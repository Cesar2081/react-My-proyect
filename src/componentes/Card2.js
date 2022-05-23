import React from "react";
import { HiOutlineStar, HiOutlineHeart } from "react-icons/hi";
import peso from '../css/Card2.module.css';


function Card2() {
  return (
    <div className={peso.card}>
        <div className={peso.cardImg}>
            <img src= {require ('../assets/bruce.jpg' )} alt="imagen1" />
        </div>
        
        <div className={peso.likeBtn}>
            <HiOutlineHeart />
        </div>

        <div className={peso.cardHeader}>
            <div>
                <h1>Standart Cactus</h1>
                <h2>Authorecee</h2>
            </div>
            <div className={peso.rate}><h1>$ 45</h1><p>.50</p></div>
        </div>

        

        <div className={peso.cardRating}>            
            <div className={peso.starOne}>
                <HiOutlineStar  />
            </div>
            <div className={peso.starTwo}>
                <HiOutlineStar  />
            </div>
            <div className={peso.starThree}>
                <HiOutlineStar  />
            </div>
            <div className={peso.starFour}>
                <HiOutlineStar  />
            </div>
            <p className={peso.review}>
                24 review
            </p>
        </div>

        <div className={peso.cardBtn}>
            <button className={peso.button}>Add to cart</button>
        </div>       
        
    </div>
    
  );
}

export default Card2;