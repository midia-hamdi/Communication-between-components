import React, { Component } from 'react'

export default class Main extends Component {

    state = {
        boxes: [
            {id: 1, title: 'Box 1'},
            {id: 2, title: 'Box 2'},
            {id: 3, title: 'Box 3'},
            {id: 4, title: 'Box 4'},
        ]
    }
  render() {

    const toggle = this.state.boxes.map(box => {
        return (
            <div className="toggle">
                <span>{box.title}</span>
                <label className="toggle-control">
                    <input type="checkbox" />
                    <span className="control"></span>
                </label>
            </div>
        )
    })

    const boxes = this.state.boxes.map(box => <div className="box">{box.title}</div>)
    
    return (
        //it is sortcut <> </> for react.fragment
        <React.Fragment> 
            <aside>
               {toggle}
            </aside>
            <div className="box-wrapper">
                {boxes}
            </div>
        </React.Fragment>
    )
  }
}
