import emailjs from "emailjs-com";
function EmailTest(){
    const submited=(e)=>{
      e.preventDefault();
      emailjs.sendForm('service_1zf5btk','template_spt9nuw',e.target,'jOyGFA8Kn3VFKYcLS').then(rs=>{
          console.log(rs)
      }).catch(err=>console.log(err))
    }
  return (<>
        <form onSubmit={submited}>
            <input type="text" name="name"/><br />
            <input type="email" name="email" id="" />
            <input type="text" name="ms" id="" />
            <input type="submit" value="Ok" />
        </form>
        </>)
}
export default EmailTest;