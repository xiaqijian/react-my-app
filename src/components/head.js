import React , { Component } from 'react'
import axios from '../utils/aixos'


class Head extends Component {
  componentDidMount () {
     axios.get('/news?lastCursor=1537930137000&pageSize=10')
     .then((res) => {
         console.log(res.data.data)
     })
     .catch((err) => {
         console.log(err)
     })
  }
  render () {
      return (
        <div className="head-class">
           <h1>
              顶顶顶顶
           </h1>
        </div>
      );
  }
}


export default Head