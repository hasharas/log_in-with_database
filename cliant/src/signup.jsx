import { useState } from "react";

const Signup = () => {
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('');

     async function onSubmit(ev) {

        ev.preventDefault();
           const response = await fetch('https://localhost:4000/register',{
            method:'POST',
            body:JSON.stringify({email,username,password}),
            headers:{'content-Type': 'application/json'}
            });

            if(response.status !== 200){
              alert('faild')
            }else{
              alert('Successfull ')
              window.location.href='/login'
            }
     
    }
  

    return <>


 <body>


  </body>

<div className="h-screen flex justify-center items-center ">

  

  <form onSubmit={onSubmit} className="space-y-5">
  
    <h1>Register</h1>
    
    <div>
      <label for="example1" className="mb-1 block text-sm font-medium text-gray-700">Email</label>
      <input type="email" 
      id="example1" 
      className="block w-full rounded-md border-gray-300 
      shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50
       disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
       placeholder="you@email.com"
       required
       value={email}
       onChange={ev => setEmail(ev.target.value)}
       />
    </div>

    <div>
      <label for="example11" className="mb-1 block text-sm font-medium text-gray-700">Name</label>
      <input type="text" 
      id="example11"
       className="block w-full rounded-md border-gray-300
       shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50
        disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
       placeholder="Username" 
       required
       value={username}
       onChange={ev => setUsername(ev.target.value)}
       />
    </div>

    <div>
      <label for="example2" className="mb-1 block text-sm font-medium text-gray-700">Password</label>
      <input type="password" 
      id="example2" 
      className="block w-full rounded-md border-gray-300
       shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50
        disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
         placeholder="Password" 
         value={password}
       onChange={ev => setPassword(ev.target.value)}
       required
       />
    </div>
    
    <button type="submit" className="rounded-lg border border-primary-500 bg-primary-500 
    px-5 py-2.5 text-center text-medium font-medium text-black shadow-sm transition-all hover:border-primary-700
     hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300
      disabled:bg-primary-300">Sign Up</button>
  </form>

</div> 

    </>;
}
 
export default Signup;