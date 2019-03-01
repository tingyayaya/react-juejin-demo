import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import EntryList from '@/components/list/EntryList'

@inject('store')
@observer
class Welcome extends Component {
  static propTypes = {
    store: PropTypes.shape({
      homeApi: PropTypes.shape({
        entryList: PropTypes.array.isRequired
      })
    }).isRequired
  }
  constructor() {
    super() 
    this.state = {
      data: []
    }
  }
  componentWillMount() {
    this.props.store.homeApi.getList()
  }
  render() {
    const { homeApi } = this.props.store
    console.log(homeApi.entryList.data)
    return (
      <div>
        {/* {homeApi.data.list.map((item, i) => {
          <EntryList {...item}/>
        })} */}
      </div>
    )
  }
}
export default Welcome