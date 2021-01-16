import React from 'react'

const getCurrentDate = () => {
    let newDate = new Date()

    const time = newDate.getHours() + ':' + newDate.getMinutes()

   const date = newDate.getDate()
   const month = newDate.toLocaleString('en-GB', { month: 'short' })

   const year = newDate.getFullYear()


    return [
        time, date, month, year
    ]
}

export default getCurrentDate
