import React, { useEffect, useState } from 'react';
import { FaUser, FaEnvelope, FaCalendar, FaPhone, FaEdit, FaTrashAlt } from 'react-icons/fa';

let nextId = 1;
function Form() {
  const [newArray,setNewArray]=useState([])
  const [fullName,setFullName]=useState('')
  const [phoneNumber,setPhoneNumber]=useState('')
  const [age,setAge]=useState('')
  const [email,setEmail]=useState('')
  const [status,setStatus]=useState('')
  const [otp,setOtp]=useState('')
  const [otpNum,setOtpNum]=useState('')
  // const [disabled,setDisabled]=useState(true)
  const [tooltipVisible, setTooltipVisible] = useState(false);

  // const optInputRef=useRef(null);

const generateOtp=()=>{
  let otpNumber=Math.floor(Math.random() * 90000) + 10000
  setOtpNum(otpNumber)
}
const copyToClipBoard=()=>{
  if(otpNum!==''){
    otpNum.current?.select();
  otpNum.current?.setSelectionRange(0, 99999);
  window.navigator.clipboard.writeText(otpNum)
  setTooltipVisible(true);
  }
    
  // Hide tooltip after 2 seconds
  setTimeout(() => {
    setTooltipVisible(false);
  }, 2000);
}
// useEffect(()=>{
//     if(+otp===otpNum){
//       setDisabled(false)
//     }else{
//       setDisabled(true)
//     }
  
// })

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(+otp!==otpNum){
          alert('Please enter the correct OTP!')
        return false;
        }
        if(!fullName || !phoneNumber || !age || !email){
          alert("Please Fill all fields!");
          return;
        }
        console.log(status)
        if(status===''){
          let result=newArray.some(item=>item.phone===phoneNumber)
          if(result){
            alert("Phone number already exists!");
            return;
          }else{
            setNewArray([...newArray,{ id: nextId++, name: fullName,phone: phoneNumber,age:age,email:email }])
            setFullName('')
            setPhoneNumber('')
            setAge('')
            setEmail('')
          }
        }else{
          if(status!=='Ok'){
            setNewArray(newArray.map(item=>
              item.id===status?{...item,name: fullName,phone: phoneNumber,age:age,email:email} : item
            ))

            setFullName('')
            setPhoneNumber('')
            setAge('')
            setEmail('')
            setStatus('');
          }
        }
    }
    
    const handleEdit=(id)=>{
      let editItem=newArray.find((item)=>item.id===id)
      console.log(id)
      setFullName(editItem.name)
          setPhoneNumber(editItem.phone)
          setAge(editItem.age)
          setEmail(editItem.email)
          setStatus(editItem.id)
    }
    
    const handleDelete=(id)=>{
     let deletedItemArray= newArray.filter((item)=>item.id!==id)
     setNewArray(deletedItemArray)
     console.log(deletedItemArray)
    }
   
  return (
    <>
    <div className='flex justify-center items-center gap-3'>
      <div className='flex mt-3 relative justify-center items-center gap-4'>
      {/* <input type="number"  readOnly value={otpNum} placeholder='Please Enter OTP Number' className="pl-3 block w-[400px] rounded-md bg-gray-50 px-3 py-2 text-base text-gray-900 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none" /> */}
      <input type="number" onChange={(e)=>setOtpNum(e.target.value)} value={otpNum} placeholder='Please Enter OTP Number' className="pl-3 block w-[400px] rounded-md bg-gray-50 px-3 py-2 text-base text-gray-900 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
      <button onClick={copyToClipBoard} className="relative rounded-md flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56">
      <span className="relative z-10">Copy Text</span>
    </button>
    <button onClick={generateOtp} className="relative h-12 w-40 rounded-md overflow-hidden border border-indigo-600 text-indigo-600 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-indigo-600 before:duration-300 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
      <span className="relative z-10">Get OTP</span>
    </button>
    {tooltipVisible && (
        <div className="absolute bottom-[-40px]  bg-orange-600 text-white text-sm py-2 px-4 rounded-md mt-2">
          Text Copied!
        </div>
      )}
      </div>
    
    </div>
    <div className="w-[600px] p-6 shadow-lg rounded-lg mx-auto mt-8 border-indigo-600 border-2 bg-white">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-center py-4 rounded-t-lg">
        <h1 className="text-4xl font-bold text-white">Registration Form</h1>
      </div>
      <input type="number" value={otp} onChange={(e)=>setOtp(e.target.value)} placeholder='Please Enter OTP Number' className="pl-3 block mt-2 w-full rounded-md bg-gray-50 px-3 py-2 text-base text-gray-900 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none" />

      <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-6">
        {/* First Name */}
        <div>
          <label
            htmlFor="first-name"
            className="block text-sm font-semibold text-gray-700"
          >
            Full Name
          </label>
          <div className="relative mt-2">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              
              name="first-name"
              onInput={(e)=>setFullName(e.target.value)}
              value={fullName}
              id="first-name"
              autoComplete="given-name"
              placeholder="Enter your first name"
              className="pl-10 block w-full rounded-md bg-gray-50 px-3 py-2 text-base text-gray-900 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none disabled:border-red-500 disabled:border-2 disabled:bg-gray-200"
            />
          </div>
        </div>

       {/* Number */}
<div>
  <label
    htmlFor="number"
    className="block text-sm font-semibold text-gray-700"
  >
    Phone Number
  </label>
  <div className="relative mt-2">
    <FaPhone className="absolute left-3 top-3 text-gray-400" />
    <input
      type="tel"
      name="number"
      
      onInput={(e)=>setPhoneNumber(e.target.value)}
      value={phoneNumber}
      id="number"
      maxLength={11}
      placeholder="Enter your phone number"
      className="pl-10 block w-full rounded-md bg-gray-50 px-3 py-2 text-base text-gray-900 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none disabled:border-red-500 disabled:border-2 disabled:bg-gray-200"
    />
  </div>
</div>


        {/* Age */}
        <div>
          <label
            htmlFor="age"
            className="block text-sm font-semibold text-gray-700"
          >
            Age
          </label>
          <div className="relative mt-2">
            <FaCalendar className="absolute left-3 top-3 text-gray-400" />
            <input
              type="number"
              name="age"
              
              id="age"
              onInput={(e)=>setAge(e.target.value)}
              value={age}
              maxLength={2}
              placeholder="Enter your age"
              className="pl-10 block w-full rounded-md bg-gray-50 px-3 py-2 text-base text-gray-900 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none disabled:border-red-500 disabled:border-2 disabled:bg-gray-200"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700"
          >
            Email
          </label>
          <div className="relative mt-2">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              name="email"
              
              id="email"
              onInput={(e)=>setEmail(e.target.value)}
              value={email}
              autoComplete="email"
              placeholder="Enter your email"
              className="pl-10 block w-full rounded-md bg-gray-50 px-3 py-2 text-base text-gray-900 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none disabled:border-red-500 disabled:border-2 disabled:bg-gray-200"
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6 text-center">
        <button className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none">
          Submit
        </button>
      </div>
      </form>
    </div>
    <div className="w-[600px] mx-auto mt-6">

    <table className="w-full text-sm text-left text-gray-500 border border-gray-200">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Full Name</th>
              <th className="px-6 py-3">Phone Number</th>
              <th className="px-6 py-3">Age</th>
              <th className="px-6 py-3">Email</th>
            </tr>
        </thead>
        <tbody>
          {
            newArray.map((item)=>(
              <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{item.id}</td>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{item.name}</td>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{item.phone}</td>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{item.age}</td>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{item.email}</td>
                <td className="px-6 py-4 flex">
        <button onClick={()=>{handleEdit(item.id)}} className="text-blue-500 text-2xl hover:text-blue-700 mx-2">
          <FaEdit />
        </button>
        <button onClick={()=>{handleDelete(item.id)}} className="text-red-500 text-2xl hover:text-red-700 mx-2">
          <FaTrashAlt />
        </button>
      </td>
              </tr>
            ))
          }
          
            
        </tbody>
      </table>
      </div>

</>
  );
}

export default Form;
