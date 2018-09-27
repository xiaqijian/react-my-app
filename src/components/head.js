import React , { Component } from 'react'
import axios from '../utils/aixos'
import { Card } from 'antd';


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
  handClick () {
      console.log('我遭到了点击')
  }
  render () {
      const _data = this.state.data;
      const cardstyle = {
          marginTop: '20px',
          boxShadow: '0 4px 18px -4px rgba(0,0,0,.1)'
      }
      return (
        <div className="head-class" onClick={this.handClick.bind(this)}>
            {
                _data.map(function(item, i) {
                    return <div key={i} style={cardstyle}> <Card
                    type="inner"
                    title={item.title}
                    extra={<a href="#">More</a>}
                    >
                    {item.summary}
                    </Card>
                    </div>
                })
            }
        </div>
      );
  }
}


export default Head