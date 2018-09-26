import React , { Component } from 'react'
import axios from '../utils/aixos'


class Head extends Component {
  constructor (props) {
      super(props)
      this.state = { data: ['222222222222'] }
  }
  componentDidMount () {
      console.log(this.state.data)
      const that = this
     axios.get('/news?lastCursor=1537930137000&pageSize=10')
     .then((res) => {
         console.log(res.data.data)
         that.setState({
             data: res.data.data
         })
         console.log(that.state.data)
     })
     .catch((err) => {
         console.log(err)
     })
  }
  render () {
      const _data = this.state.data;
      return (
        <div className="head-class">
            {
                _data.map(function(item, i) {
                    return <h1 key={i}>{item.title}</h1>
                })
            }
        </div>
      );
  }
}


export default Head