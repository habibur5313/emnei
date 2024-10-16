import User from "./User"
import './users.css'
// import { useEffect, useState } from "react"

import { useEffect, useState } from "react"

// export default function Users () {

// const [user, setUser] = useState([])

// useEffect(() => {
//                     fetch('https://jsonplaceholder.typicode.com/users')
//                     .then(res => res.json())
//                     .then(data => setUser(data)
//                     )
// },[])

// return(
//                     <div>
//                                         <h1>User:{user.length}</h1>
//                     </div>
// )
// }


export default function Users () {

                    const [users, setUser] = useState([])
                    useEffect(() => {
                                        fetch('https://jsonplaceholder.typicode.com/users')
                                        .then(res => res.json())
                                        .then(data => setUser(data))
                    },[])


return(
                    <div className="box">
                                        <h1>users:{users.length}</h1>
                                       {users.map(user => <User user={user}></User>)} 
                    </div>
)
}