import React, {Fragment} from "react";
import Like from "./Like"
import { useState } from "react";


function Album({props}) {

    return(
        <>
          <main className="Album">
            <div className="Card">
                <img src={props.img} alt="imagen" className="Card__img"/>

                <div className="Card__data">
                    <h1 className="Card__data__artist">{props.artist}</h1>
                    <p className="Card__data_grupo">grupo</p>
                    <h3 className="Card__data__name">{props.name}</h3>
                    <div className="Card__data__year">{props.year}</div>
                    <div className="Card__data__like">
                      <div className="Card__data__genre">{props.genre}</div>
                      <Like/>
                    </div>
                    
                    
                </div>
            </div>
          </main>
        </>
    );
};
export default Album;