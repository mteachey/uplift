import React, { Component } from 'react';
import Nav from './Nav.js';
import FilterButtons from './FilterButtons.js';
import { faPlusSquare, faIdCard  } from '@fortawesome/free-regular-svg-icons';
import { faUser, faUsers, faUserFriends } from '@fortawesome/free-solid-svg-icons';


class MyAccount extends Component{

    render(){
        return(
            <div>
                <Nav 
                   pageType={'interior'}
                />
                <form className="update-account-form">
                    <h2>My Account</h2>
                    <p>The account information for melinda is below.</p>
                    <p>Please use the form to update your name, email address or password.</p>
                    <div className="form-field-group">
                        <label htmlFor="first-name">First Name</label><br/>
                        <input placeholder='Melinda' type="text" name='first-name' id='first-name'/>
                    </div>
                    <div className="form-field-group">
                        <label htmlFor="last-name">Last Name</label>
                        <input placeholder="Teachey" type='text' name='last-name' id='last-name'/>
                    </div>
                    <div className="form-field-group">
                        <label htmlFor="email">Email</label>
                        <input placeholder="user@gmail.com" type="email" name='email' id='email'/>
                    </div>
                    <div className="form-field-group">
                        <label htmlFor="password">Password</label>
                        <input placeholder="*******" type="password" name='password' id='password'/>
                    </div>
                    <button type="submit">Update</button>
                    <button type="reset">Cancel</button>
                   </form>
                   <FilterButtons
                        buttonInfo={[{ariaLabel:'all users',icon_type:faUsers, link:'/dashboard',display_change:'allUsers'},
                        {ariaLabel:'all users you follow',icon_type:faUserFriends, link:'/dashboard',display_change:'followees'},
                        {aria_label:'my posts',icon_type:faUser, link:'/dashboard', display_change:'user'},
                        {aria_label:'my account',icon_type:faIdCard, link:'/my-account',display_change:'all'},
                        {aria_label:'add new post',icon_type:faPlusSquare, link:'/new-post', display_change:'all'}
                        ]}
                    
                    />
            </div>
        )
    }
}

export default MyAccount;
