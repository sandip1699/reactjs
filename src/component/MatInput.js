import React, { useState } from 'react';

function MatInput({labelName}) {


    return (
        <div className="inputBox">
            <input type="text" className="form-control" onkeyup="this.setAttribute('value', this.value);" required />
            <label>{labelName}</label>
        </div>
    );

}

export default MatInput;