// import React from 'react'

// const Variable = () => {
//     let context 
//      context = <>  Updates the system </>
//   return (
//     <>
//     <h1>{context}</h1>
//     </>
//   )
// }

// export default Variable



// !  variable using short circuit
// import React from 'react'

// const Variable = () => {
//     let cond = false
//     let a 
//     let b 
//     a = <> lovely runner is the best drama </>
//     b = <> Queen of Tears is famous drama </>
//   return (
//     <>
//      {cond && a}
//     </>
//   )
// }

// export default Variable

// ! === variable using ternary operator 
// import React from 'react'

// const Variable = () => {
//     let cond = false
//     let a = <>lovely Runner </>
//     let b = <>Queen of tears</>
//   return (
//     <>
//     {cond ? a : b}
//     </>
//   )
// }

// export default Variable;


import React from 'react'

const Variable = () => {
    let cond = true
    let a = <>loverly runner</>
    let b = <>revenage love</>
    let c = <>Shooting Star</>
    let d = <> Our secret </>
  return (
    <>
    cond? <>a</>
     : cond? <>b</> 
     : cond? <>c</>
    </>
  )
}

export default Variable