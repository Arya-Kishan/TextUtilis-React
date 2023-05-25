import React from 'react'

function Alert(props) {
    function CapitaliseFirst(word) {
        let word1 = word.charAt(0).toUpperCase() + word.slice(1);
        return word1;
    }
    return (

        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible show" role="alert`}>
            <strong>{CapitaliseFirst(props.alert.type)}</strong> {props.alert.message}
        </div>
    )
}

export default Alert
