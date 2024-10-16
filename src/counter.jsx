// import { useState } from "react"

// import { useState } from "react";

// export default function Counter () {

// const [count , setCount] = useState(0)
// const addHandle = () => {
//                     const newCount = count + 1;
//                     setCount(newCount)
// }

// const reduceHandle = () => {
//                     const newCount = count - 1;
//                     setCount(newCount)
// }
//                     return(
//                                         <div>
//                                                             <h1>Count:{count} </h1>
//                                                             <button onClick={addHandle}>Add</button>
//                                                             <button onClick={reduceHandle}>Reduce</button>
//                                                             </div>
//                     )
// }

import { useState } from "react";
export default function Counter () {
const [count , setCount] = useState(0)
const addHandle = () => {
              const newCount = count + 1;
              setCount(newCount)      
}

const ReduceHandle = () => {
                    const newCount = count - 1;
                    setCount(newCount)
}
return (
                    <div style={{border: '3px solid red',padding: '20px', margin: '20px', borderRadius: '20px'}}>
                                        <h1>Counter: {count}</h1>
                       
                                       <button onClick={addHandle}>Add</button>
                                       <button style={{marginLeft: '20px'}} onClick={ReduceHandle}>Reduce</button>
                                  
                    </div>
)
}