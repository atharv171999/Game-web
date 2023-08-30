import React, { useEffect, useState } from 'react'
import '../App.css'
// import { ChevronUpOutline } from 'react-ionicons'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const GoToTop = () => {

    const[showTop, setShowTop] = useState(false)

    useEffect(() =>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 800){
                setShowTop(true)
            }else{
                setShowTop(false)
            }
        })
    },[])

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    
  return (
    <div>
    {showTop && (
        <button onClick={goTop} className=' focus:bg-[#1f2029]   go-to-top fixed bottom-6 right-6 bg-[#ff8605] p-[15px] btn-top '>
        <KeyboardArrowUpOutlinedIcon />
        </button>
        )}
        </div>
  )
}

export default GoToTop