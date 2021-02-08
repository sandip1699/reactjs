import React, { useState } from 'react';

function HsButton(props) {

    const [size] = useState(props.size)
    const [color] = useState(props.color)
    const [content] = useState(props.content)
    const [shape] = useState(props.shape)

    return ( 
        <button className={'btn btn-'+shape+' btn-'+color} style={{ fontSize: size }}>{content}</button>
    );

}

export default HsButton;