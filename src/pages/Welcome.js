import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { trace } from 'mobx'

import EntryList from '@/components/list/EntryList'

@inject('store')
@observer
class Welcome extends Component {
  static propTypes = {
    store: PropTypes.shape({
      homeApi: PropTypes.shape({
        entryList: PropTypes.array
      })
    }).isRequired
  }
  constructor() {
    super() 
    
  }
  render() { 
    const { homeApi } = this.props.store
    return (
      <div>
        {
          homeApi.entryList.map((item, i) => {
            return <EntryList {...item} key={i}/> })
        }
      </div>
    )
  }
}
export default Welcome