import React from "react";
import like from '/Like.svg'
import dislike from '/Dislike.svg'
import { useState } from "react";

function Like() {

  const [ megusta, setMegusta] = useState(false)

  return (
    <>
      <div>
        <button onClick={() => setMegusta(!megusta)} className="botom"><img src={ megusta ? like : dislike} alt="" /></button>

      </div>
    </>
  );
};

export default Like;