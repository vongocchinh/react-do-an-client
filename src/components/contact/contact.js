import React, { Component } from 'react'
import { Dialog, DialogContent, CircularProgress } from '@material-ui/core';

 class contact extends Component {
     constructor(props) {
         super(props);
         this.state={
            lastName:'',
            firstName:'',
            email:'',
            phone:'',
            message:''
         }

     }
     onChange=(e)=>{
         this.setState({
             [e.target.name]:e.target.value
         });
     }
     onSubmit=(e)=>{
         e.preventDefault();
         var {lastName,firstName,email,phone,message}=this.state;
         var contact={
             lastName,firstName,email,phone,message
         }
         this.props.contact(contact);
         e.target.reset();
     }
    render() {
        var {contactStore}=this.props;
        
        return (
            <> <Dialog open={contactStore.CONTACT_IN}  aria-labelledby="form-dialog-title">
                        <DialogContent style={{display:"flex",justifyContent:"center"}}>
                            <CircularProgress color="secondary" />
                        </DialogContent>
                </Dialog>
                <div className="clear"></div>
                <div className="container-main">
                    <div className="contact-form-container">
                        <div className="contact-form-container-form">
                            <form onSubmit={this.onSubmit}>
                            <p>Cảm ơn bạn đã liên hệ chúng tôi.</p>
                                <div className="input-form-contact-name">
                                    <input required type="text" onChange={this.onChange} className="input-name-contact" placeholder="LastName" name="lastName"   />
                                    <input required type="text" onChange={this.onChange} className="input-name-contact" placeholder="FirstName" name="firstName"  />
                                </div>
                                <div className="input-form-contact">
                                    <input required type="text" onChange={this.onChange} name="email" className="input-contact" placeholder="email"/>
                                </div>
                                <div className="input-form-contact">
                                    <input required type="text" onChange={this.onChange} name="phone" className="input-contact" placeholder="phone" />
                                </div>
                                <div className="input-form-contact">
                                    <textarea required name="message" onChange={this.onChange} className="input-contact-textarea" placeholder="Message..." ></textarea>
                                </div>
                                <div className="submit-form-contact">
                                    <input required style={{border:"none"}} className="submit-form-login" type="submit" value="submit"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default contact;