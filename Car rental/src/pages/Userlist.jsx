// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// function Userlist() {
//     const [userList,setUserList] = useState([])
//     useEffect(()=>{
//         async function user(){
//             const userList = await axios.get("http://localhost:5000/api/admin/getuser")
//             setUserList(userList)
//         }
//         user()
//     },[])
//   return (
    
//     <div>
//       {
//         userList.map((value,index)=>{
//             <h4>{value?.name}</h4> 
//         })
//       }
//     </div>
//   )
// }






// export default Userlist



import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Userlist() {
    const [userList, setUserList] = useState([])

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get("http://localhost:5000/api/admin/getuser")
                setUserList(response.data)  
                
            } catch (error) {
                console.error("Error fetching user list:", error)
            }
        }

        fetchUsers()
    }, [])

    return (
        <div>
            {
                userList.map((value, index) => (
                    <h4 key={index}>{value?.name}</h4>
                ))
            }
        </div>
    )
}

export default Userlist

