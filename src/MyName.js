import React from 'react'

const MyName = () => {
    const name = ["PRELIM EXAM","Gerwin S. Cando", "BSIT-III"];
    return (
      <div>

          <h3>
              {name.map((info)=>(
                  <li key={info}>{info}</li>
              ))}
          </h3>
      </div>
    )
}

export default MyName