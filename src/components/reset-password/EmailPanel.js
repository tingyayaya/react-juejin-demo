import React, {Component} from 'react'
import PropTypes from 'prop-types'


class EmailPanel extends Component {
  static propTypes = {
    onsubmit: PropTypes.func
  }
  constructor() {
    super()
    this.state = {
      email: '',
      tips: '请输入邮箱',
      show: true
    }
  }
  handleInput(event) {
    this.setState({
      email: event.target.value
    })
  }
  onsubmit(event) {
    const { email } = this.state
    if(this.props.submit){
      this.props.onsubmit({email})
    }
    if(!email){
      alert('请输入')
    }
    
    event.preventDefault();
  }

  _validation(){
    const { email } = this.state

    if(!email){
      
    }
  }
  render() {
    return (
      <div className="panel email">
        <div className="input-group">
          <input type="text" placeholder="请输入邮箱" autoComplete="off" className="input full-width"
            value={this.state.email}
            onChange={this.handleInput.bind(this)}/>
          <button className="ui-btn ui-btn_primary submit-btn" onClick={this.onsubmit.bind(this)}>发送邮件</button>
        </div>
      </div>
    )
  }
}

class AlertDismissable extends Component {
  constructor(props) {
    super(props);

    this.state = { show: true };
  }

  render() {
    const handleHide = () => this.setState({ show: false });
    const handleShow = () => this.setState({ show: true });
    return (
      <>
        <Alert show={this.state.show} variant="success">
          <Alert.Heading>How's it going?!</Alert.Heading>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
            amet fermentum.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={handleHide} variant="outline-success">
              Close me ya'll!
            </Button>
          </div>
        </Alert>

        {!this.state.show && <Button onClick={handleShow}>Show Alert</Button>}
      </>
    );
  }
}
export default EmailPanel