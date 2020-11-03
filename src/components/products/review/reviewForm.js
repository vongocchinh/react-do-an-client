import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

 class commentForm extends Component {
     constructor(props) {
            super(props);
            this.state={
                rating:0,
                name:'',
                message:'',
                email:'',
                open:false
            }
     }
     onChange=(e)=>{
         this.setState({
             [e.target.name]:e.target.value
         });
     }
     handleClose=()=>{
        this.setState({
            open:false
        });
    }
    open=()=>{
        this.setState({
            open:true
        });
    }
     onSubmit=(e)=>{
         e.preventDefault();
         var {name,message,rating,email}=this.state;
         rating=parseInt(rating,10);
         var review={
            name,
            message,rating,
            email
         }
         this.props.addReview(review);
         e.target.reset();
     }
    render() {
        return (
            <>  
                <Fab
                    variant="extended"
                    size="small"
                    color="primary"
                    aria-label="add"
                    style={{marginBottom:"10px"}}
                    onClick={this.open}
                    >
                    <NavigationIcon  />
                    Đánh giá
                </Fab>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title" className="form-review-height">
                        <form onSubmit={this.onSubmit}>
                            <DialogTitle id="form-dialog-title">Đánh giá</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    To subscribe to this website, please enter your email address here. We will send updates
                                    occasionally.
                                </DialogContentText>
                            <TextField
                                onChange={this.onChange}
                                autoFocus
                                margin="dense"
                                id="email"
                                label="Email Address"
                                type="email"
                                fullWidth
                                name="email"
                                required
                            />
                             <br/>
                            <div className="stars" style={{marginTop:"20px"}}>
                                <input onChange={this.onChange} className="star star-5" id="star-5" type="radio" value={5} name="rating" />
                                <label className="star star-5" htmlFor="star-5" />
                                <input onChange={this.onChange} className="star star-4" id="star-4" type="radio" value={4} name="rating" />
                                <label className="star star-4" htmlFor="star-4" />
                                <input onChange={this.onChange} className="star star-3" id="star-3" type="radio" value={3} name="rating" />
                                <label className="star star-3" htmlFor="star-3" />
                                <input onChange={this.onChange} className="star star-2" id="star-2" type="radio" value={2} name="rating" />
                                <label className="star star-2" htmlFor="star-2" />
                                <input onChange={this.onChange} className="star star-1" id="star-1" type="radio" value={1} name="rating" />
                                <label className="star star-1" htmlFor="star-1" />
                            </div>
                            <br/>
                            <TextField
                                onChange={this.onChange}
                                autoFocus
                                margin="dense"
                                id="name"
                                label="name"
                                type="text"
                                fullWidth
                                name="name"
                                required
                               
                            />
                             <br/>
                             <textarea required onChange={this.onChange} 
                                className="comment-text-area" style={{width:"95%",marginTop:"20px"}} 
                                name="message" placeholder="Nhập nội dung đánh giá của bạn về sản phẩm" 
                                defaultValue={""} />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleClose} color="primary">
                                Cancel
                                </Button>
                                <Button type="submit" onClick={this.handleClose} color="primary">
                                Đanh giá
                                </Button>
                            </DialogActions>
                        </form>
                    </Dialog>
            </>
        )
    }
}
export default (commentForm);