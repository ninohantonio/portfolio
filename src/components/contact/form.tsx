import { FormEvent, useState } from "react"
import { motion } from "framer-motion"
import { Bounce, toast, ToastContainer } from "react-toastify"
import axios from "axios"

export default function ContactForm(){
    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmitMail = async(e: any) => {
        e.preventDefault()
        if(name !== "" && mail !== "" && message !== ""){
            
            try {
                const response = await axios.post('/api/email', {name: name, email: mail, message: message});
                if (response.data.success) {
                    toast.error("Something went wrong, please try later", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                    })
                  // Optionally, you can display a success message to the user
                } else {
                        toast.error("Something went wrong, please try later", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                    })
                }
              } catch (error) {
                toast.error("Something went wrong, please try later", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                })
              }
            setMail("")
            setMessage("")
            setName("")
        }
    }

    return (
        <div className="flex flex-col items-center mx-auto py-6">
            <input 
                type="text" 
                value={name}
                onChange={(e)=>{setName(e.target.value)}} 
                placeholder="Name *" 
                className="bg-gray-900 w-[50%] h-12 px-2 my-6 rounded-bl-md rounded-tr-md text-[#c4e4db] font-sans focus:outline-none focus:border focus:border-r-blue-700 focus:border-b-blue-400 focus:border-l-green-500 focus:border-t-blue-950"
            />

            <input 
                type="email" 
                value={mail} 
                onChange={(e)=>{setMail(e.target.value)}}
                placeholder="Email Address *" 
                className="bg-gray-900 w-[50%] h-12 px-2 my-6 rounded-bl-md rounded-tr-md text-[#c4e4db] font-sans focus:outline-none focus:border focus:border-r-blue-700 focus:border-b-blue-400 focus:border-l-green-500 focus:border-t-blue-950"
            />

            <textarea 
                value={message} 
                onChange={(e)=>{setMessage(e.target.value)}}
                placeholder="Your message *" 
                className="bg-gray-900 w-[50%] h-20 px-2 py-2 my-6 rounded-bl-md rounded-tr-md text-[#c4e4db] font-sans focus:outline-none focus:border focus:border-r-blue-700 focus:border-b-blue-400 focus:border-l-green-500 focus:border-t-blue-950"
            />
            <motion.div 
                className="px-6 py-2 text-[#c4e4db] text-mono bg-gray-900 rounded-3xl cursor-pointer"
                whileHover={{scale: 1.2}}
                whileTap={{
                    scale: 0.8,
                    rotate: -90,
                    borderRadius: "100%"
                }}
                onClick={handleSubmitMail}
            >
                Submit
            </motion.div>
        </div>
    )
}