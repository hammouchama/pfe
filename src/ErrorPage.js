const ErrorPage =()=>{
    return(<>
    <p className="text-center" style={{color:"red",fontSize:"200px"}}>404</p>
     <h1 className="notFoundTitle text-center">Oops! That page can’t be found.</h1>
                <p className="notFoundDesc text-center">
                        It looks like nothing was found at this location.
                        Maybe try one of the links in the menu or press back to go to the previous page.
                </p>
       </>)
} 
export default ErrorPage