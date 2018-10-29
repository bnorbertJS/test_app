import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import login from '../../actions/Login/LoginAction'
import {Button, InputField, Notification} from '../Proxies'
import {withRouter, Redirect} from 'react-router-dom'
import getRequestToken from '../../utils/GetRequestToken'

class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: {
                value: ""
            },
            password: {
                value: ""
            }
        }
        
        this.onKeyDownHandler = this.onKeyDownHandler.bind(this)
        this.onChangeInputField = this.onChangeInputField.bind(this)
        this.onClickLogin = this.onClickLogin.bind(this)
    }

    onChangeInputField(e){
        this.setState({ [e.target.name]: {value: e.target.value} })
    }

    onClickLogin(){
        //dummy input check
        let isError = true
        if(!this.state.email.value){
            isError = false
           this.setState( (prevState, currProps) =>{
               return {email: {...prevState.email, error: true}}
           })
        }

        if(!this.state.password.value){
            isError = false
            this.setState( (prevState, currProps) =>{
                return {password: {...prevState.password, error: true}}
            })
        }

        if(isError){
            this.props.login(this.state)
        }
    }

    onKeyDownHandler(e){
        /*
        firstelementChild is always the email input.
        If theres no nextSibling or previousSibling, we focus the first element, which is the searchField
        */
        const firstElementChild = document.getElementById("email")
        const next = e.target.nextSibling || firstElementChild
        const prev = e.target.previousSibling.previousSibling || firstElementChild

        if(e.which === 40) next.focus()
        if(e.which === 38) prev.focus()
    }

    componentDidMount(){
        //focus email input field
        const email = document.getElementById("email")
        email.focus()
    }

    render() {
        //after successful login redirect to movies list.
        if(getRequestToken()){
            return <Redirect to="/movies" push={true}/>
        }

        const {error} = this.props.user
        
        return (
            <Fragment>
            {error &&
                <Notification type="error" text="Something went wrong. Please doublecheck your credentials."/>
            }
            <form>
                <label htmlFor="email">Username/Email</label>
                <InputField 
                    id="email" 
                    type="text" 
                    name="email" 
                    value={this.state.email.value}
                    className={this.state.email.error ? "input-error" : ""}
                    placeholder={this.state.email.error ? "Cannot be blank" : ""}
                    onKeyDown={this.onKeyDownHandler}
                    onChange={this.onChangeInputField}/>
                <label htmlFor="password">Password</label>
                <InputField 
                    id="password" 
                    type="password" 
                    name="password" 
                    value={this.state.password.value}
                    className={this.state.password.error ? "input-error" : ""}
                    placeholder={this.state.password.error ? "Cannot be blank" : ""}
                    onKeyDown={this.onKeyDownHandler}
                    onChange={this.onChangeInputField}/>
                
                <Button className="button" value="Login"
                    onKeyDown={this.onKeyDownHandler}
                    onClick={ this.onClickLogin }/>
                
            </form>
            </Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    user: state.user
})

export default withRouter(connect(mapStateToProps, { login })(LoginForm))