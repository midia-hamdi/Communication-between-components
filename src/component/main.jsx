import React, { Component } from 'react'

export default class Main extends Component {

    state = {
        boxes: [
            {id: 1, title: 'Box 1'},
            {id: 2, title: 'Box 2'},
            {id: 3, title: 'Box 3'},
            {id: 4, title: 'Box 4'},
        ],
        activrBoxes: [1, 2, 3, 4],
    }

    handelToggleBtn(id){
        console.log(id);
    }
  render() {

    const toggle = this.state.boxes.map(box => {
        return (
            <div className="toggle">
                <span>{box.title}</span>
                <label className="toggle-control">
                    <input type="checkbox" checked={this.state.activrBoxes.includes(box.id)} />
                    <span className="control" onClick={(e) => this.handelToggleBtn(box.id)}></span>
                </label>
            </div>
        )
    })

    const boxes = this.state.boxes.map(box => {
        if (this.state.activrBoxes.includes(box.id)) {
            return <div className="box">{box.title}</div>
        }
    })
    
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
