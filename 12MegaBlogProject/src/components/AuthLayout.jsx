/* This layout is based on the mechanism to protect the routes. You'll use it many times, it is only like a container. Here we'll conditionally render the children on the basis of authentication status. */
import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


// By default 'authentication' is true but it can change also who calls this component.
function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    // So first we'll ask form store if user is loggedin or not
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        /* 
        The code below can be complex. It can be made easier if compare only on the basis of 'authStatus' 
            if(authStatus === true){
                navigate("/")
            }else {
                navigate("/login")    
            }
        But humne ye complex code isliye banaya hai kyunki kabhi kabhi developer samne se bhi apne authentication deta hai ki vo true hai ya false isliye dono ko saath lekar chalna padta hai.
        */

        if (authentication && authStatus!==authentication) {
            navigate("/login")
        } else if(!authentication && authStatus!==authentication) {
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication]);

    return loader ? <h1>Loading...</h1> : <>{children}</>
}

export default Protected
 