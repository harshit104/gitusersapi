import React from 'react'

const Loading = () => {

    const loadingImg = {
        margin: '160px auto 0',
        width: '250px',
        display: 'flex',
        justifyContent: 'center',
        verticalAlign: 'middle',
        top: '40%'
    }

    return (
        <div className="container" style={loadingImg}>
            <img src="https://c.tenor.com/gJLmlIn6EvEAAAAC/loading-gif.gif" width="100%" alt="NoImage" />
        </div>
    )
}

export default Loading
