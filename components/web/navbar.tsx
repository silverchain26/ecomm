import React from 'react'
import {Button}  from "@components/ui/button"
import Link   from "next/link"











const Navbar = () => {









  return (


    <div className = "flex justify-between p-4">

    <div>

    <Link href = "/">

    Home

    </Link>

    </div>

    


    <div>

    <Link href = "/sign-in">
    
    <Button>
      
      
      SignIn

        
    </Button>

    </Link>


    <Link href = "/sign-up">
    
    <Button>
      
      
      SignUp

        
    </Button>

    </Link>


    </div>

    
        
        
        
    
    
    
    
    
    
    </div>
  )
}

export default Navbar