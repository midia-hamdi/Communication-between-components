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
    });
    
    return (
        //it is sortcut <> </> for react.fragment
        <React.Fragment> 
            <aside>
               {toggle}
            </aside>
            <div className="box-wrapper">
                <div className="box">Box 1</div>
                <div className="box">Box 2</div>
                <div className="box">Box 3</div>
                <div className="box">Box 4</div>
            </div>
        </React.Fragment>
    )
  }
}
