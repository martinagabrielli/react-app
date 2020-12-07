import React from 'react'

function Main(props) {
    return (
        <div>
            {console.log(props)}
            <p>{props.todo.text}</p>
        </div>
    )
}

export default Main
