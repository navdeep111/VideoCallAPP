// // import React,{useState} from 'react'
// // import { useNavigate } from 'react-router-dom';
// // const HomePage = () => {
// //     const [input,setInput] = useState();
// //     const navigate = useNavigate();
// //     const submitHandler = ()=>{
// //         // alert(input);
// //         navigate(`/room/${input}`)
       
// //      }
// //   return (
// //     <div>
// //         <div>
// //             <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Enter Your Name...' />
// //              <button onClick={submitHandler}>Join</button>
// //         </div>
// //     </div> 

    
// //   )
// // }

// // export default HomePage


// // ------ only ui change

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const HomePage = () => {
//     const [input, setInput] = useState('');
//     const navigate = useNavigate();

//     const submitHandler = () => {
//         if (input.trim()) {
//             navigate(`/room/${input}`);
//         } else {
//             alert('Please enter your name');
//         }
//     };

//     return (
//         <div className="flex items-center justify-center h-screen">
//             <div className="p-10 bg-white rounded-lg shadow-lg">
//                 <h1 className="text-2xl mb-6 text-center">Video Call App</h1>
//                 <input 
//                     className="w-full p-3 mb-4 border rounded-lg" 
//                     value={input} 
//                     onChange={(e) => setInput(e.target.value)} 
//                     type="text" 
//                     placeholder="Enter Your Name..." 
//                 />
//                 <button 
//                     className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" 
//                     onClick={submitHandler}
//                 >
//                     Join
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default HomePage;





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from "./videocall image.png"

const HomePage = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const submitHandler = () => {
        if (input.trim()) {
            navigate(`/room/${input}`);
        } else {
            alert('Please enter your name');
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-purple-100">
            <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl">
                <div className="p-10 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-center mb-6">Video Call App</h1>
                    <input 
                        className="w-full p-3 mb-4 border rounded-lg" 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)} 
                        type="text" 
                        placeholder="Enter Your Name..." 
                    />
                    <button 
                        className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" 
                        onClick={submitHandler}
                    >
                        Join Now
                    </button>
                    <div className="text-center mt-4 text-gray-500">or join using social accounts</div>
                    <div className="flex justify-center gap-4 mt-4">
                        <button className="bg-blue-700 text-white p-2 rounded-lg">Facebook</button>
                        <button className="bg-blue-400 text-white p-2 rounded-lg">Twitter</button>
                    </div>
                </div>
                <div className="hidden md:block  flex items-center justify-center">
                    <img 
                        src={image} 
                        alt="Video Call" 
                        className="rounded-lg w-3/4 h-auto object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
