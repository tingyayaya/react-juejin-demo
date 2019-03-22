import React, {Component} from 'react'
import "./style.scss"


const MyLoading = ({isLoading, error}) => {
  // Handle the loading state
  if(isLoading) {
    return  <div className="loader">
              <div className="box">
                <div className="loader-diamonds"></div>
              </div>
              <div>Loading</div>
            </div>
  }
  // Handle the error state
  else if(error) {
    return <div>Sorry, there was a problem loading the page.</div>
  }
  else {
    return null
  }
}

class DiamondsLoading extends Component {
  render() {
    return (
      <div className="loader">
        <div className="box">
          <div className="loader-diamonds"></div>
        </div>
      </div>
    )
  }
}
export default MyLoading