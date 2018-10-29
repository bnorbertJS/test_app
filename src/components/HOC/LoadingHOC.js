import React, {PureComponent} from 'react'
import {LoadingIndicator} from '../Proxies'

/*
Wraps a loading indicator to the page while Ajax request is running.
*/
const withLoading = ComposedComponent => {
    return class LoadingIndicatorHOC extends PureComponent {
        constructor(props) {
            super(props)
        }
        
        render() {
            const {isLoading} = this.props.movies
            if (!isLoading){
                return <ComposedComponent {...this.props} />;
            }
            return <LoadingIndicator />
        }
    }
  }

  export default withLoading