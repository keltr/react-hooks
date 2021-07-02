import React from 'react'
import { useAlert } from './alert/AlertContext'

export default function Main() {

    const alert = useAlert();

    return (
        <>
            <h1>Hello!!</h1>
            <button onClick={()=>alert.show('new text from main.js')} className="btn btn-success">show alert</button>
        </>
    )
}