import React from 'react'

const getCurrentDate = () => {
    let newDate = new Date()

    //const out = newDate.getHours() + ':' + newDate.getMinutes()

   //const out = newDate.getDate()
   // const out = newDate.getFullYear()

    const out = newDate.toLocaleString('en-GB', { month: 'short' })


    return <p>{out}</p>
}

export default getCurrentDate
