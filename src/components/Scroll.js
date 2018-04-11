import React from 'react';


const Scroll = (props) => {
    return (
        <div style={{overflowY:'scroll',border:'1px solid black',height: '800px'}}>
            {props.children}
        </div>
    );
    return props.children;
}

export default Scroll;  