import React from "react";

function contact(props) {
    return (
        <form action="" onSubmit="">
            <div className="formWord">
             <h2>Heloow Sir</h2> 
            <span><strong>Full Name</strong></span>  
            {/* <br /> */}
            <input className="input100" type="text" name="FullName" required />
            <br />
            <span><strong>Phone Number</strong></span>  
            <input className="input101" type="text" name="phone" required />
            <br />
            <span><strong>Enter Email</strong></span>  
            <input className="input102" type="text" name="email" required />
            <br />
            </div>

            <div className="formWord">
            <span><strong>Massage</strong></span>  
            <br />
            <textarea name="massage" required></textarea>
            <br />
            <button className="btn">Submit</button>
            <div className=""></div>
            </div>
   
        </form>
    );

}
export default contact;