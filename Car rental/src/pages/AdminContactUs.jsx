import React, { useEffect } from 'react'

const AdminContactUs = () => {

    const [Message , setMessage] = useState([]);

useEffect(()=>{
    async function getAllMessages(){
     try {
        const response = await axios.get("http://localhost:5000/api/admin/AdminContactUs");
        console.log(response);
        setMessage(response?.data?.data)
     } catch (error) {
        console.error("something went wrong")
     }
    }
    getAllMessages()
},[]);

console.log(Message);
  return (
    <div>
      <h5>{Message}</h5>
    </div>
  )
}

export default AdminContactUs
