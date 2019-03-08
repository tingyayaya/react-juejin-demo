import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'


@inject('store')
@observer
class ControlledCarousel extends Component {
  static propTypes = {
    store: PropTypes.shape({
      homeApi: PropTypes.shape({
        bookList: PropTypes.array
      })
    }).isRequired
  }
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }
 
  handleSelect(selectedIndex, direction) {
    console.log(selectedIndex, direction)
    this.setState({
      index: selectedIndex,
      direction: direction
    });
  }
  
  render() {
    const { index, direction} = this.state;
    const { homeApi } = this.props.store
    console.log(homeApi.bookList)
    return (
      <div className="wrapper">
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
        indicators={false}
        interval = {null}
        prevIcon ={<span className="w-icon w-icon-left arrow-left"></span>}
        nextIcon ={<span className="w-icon w-icon-right arrow-right"></span>}
      >  
        {
          homeApi.bookList.map((item,i) => {
            return (
              <Carousel.Item key={i}>
                { item.map((subitem, i) => {
                  return (
                    <Link to={`book/${subitem.bookId}`} className="slide-book-list" key={i}>
                      <div className="cover"><img src={subitem.thumbnail}/></div>
                      <div className="intrudtion">
                        <h5 className="title">{subitem.title}</h5>
                        <div className="price">
                          <span className="new">新人价 ￥{(subitem.price*0.5).toFixed(1)}</span>
                          <span className="delete">￥{subitem.price}</span>
                        </div>
                      </div>
                    </Link>
                  )
                }) }
              </Carousel.Item>
            )
          })
        }
      </Carousel>
      </div>
    );
  }
}

export default ControlledCarousel