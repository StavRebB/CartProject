import './Main.css';
import React, {Component} from 'react';

class Main extends Component {
    constructor() {
        super();
        this.item1Ref = React.createRef();
        this.state = {
            item1: "Zero",
            item2: "Zero",
            item3: "Zero",
            item4: "Zero",
            itemsArray: [0,0,0,0],
            divArray: [
                {innterTxt: "Zero",
                plusId: "item1",
                minusId:"item-1",
                trashId:"1"},
                {innterTxt: "Zero",
                plusId: "item2",
                minusId:"item-2",
                trashId:"2"},
                {innterTxt: "Zero",
                plusId: "item3",
                minusId:"item-3",
                trashId:"3"},
                {innterTxt: "Zero",
                plusId: "item4",
                minusId:"item-4",
                trashId:"4"}
            ]
        }
    }

    addNum(e) {
        let newArray = [...this.state.divArray]
        let classItem = e.target.id
        for (let obj of newArray) {
            if (classItem == obj.plusId) {
                if (obj.innterTxt == "Zero") {
                    obj.innterTxt = 1;
                } else {
                    obj.innterTxt += 1;
                }
            }
        }
        this.setState({
            divArray: newArray,
        },this.cahngeAmount)
    }

    lessNum = (e) => {
        let newArray = [...this.state.divArray]
        let classItem = e.target.id
        for (let obj of newArray) {
            if (classItem == obj.minusId) {
                if(obj.innterTxt == 1) {
                    obj.innterTxt = "Zero";
                } else if(obj.innterTxt > 1) {
                    obj.innterTxt -= 1;
                }
            }
        }
        this.setState({
            divArray: newArray,
        },this.cahngeAmount)
    }

    doRefresh = () => {
        let StatesArray = [...this.state.divArray];
        for (let obj of StatesArray) {
            obj.innterTxt = "Zero"
        }
        this.setState({
            divArray: StatesArray,
        },this.cahngeAmount)
    }

    cahngeAmount() {
        let StatesArray = [...this.state.divArray]
        let count = 0;
        for (let obj of StatesArray) {
            if (obj.innterTxt != "Zero") {
                count += 1;
            }
        }
        console.log(count)
        this.props.changeCartNum(count);
    }

    removeDiv = (e) => {
        let trashId = e.target.id;
        let StatesArray = [...this.state.divArray]
        StatesArray = StatesArray.filter(obj => obj.trashId != trashId)
        this.setState({
            divArray: StatesArray,
        })
    }

    restoreDivs = () => {
        if (!this.state.divArray.length) {
            window.location.reload();
        }

    }


  render() {
    return (
      <div className="container">
          <button type="button" className={`btn btn-success mx-3 ${this.state.divArray.length ? '' : 'disabled'}`} onClick={this.doRefresh.bind(this)}>
            <i className="fas fa-sync-alt"></i>
          </button>
          <button type="button" className={`btn btn-primary ${this.state.divArray.length ? 'disabled' : ''}`} onClick={this.restoreDivs.bind(this)}>
            <i className="fas fa-recycle"></i>
          </button>
          {this.state.divArray.map((item,key) => {
              return (
                    <div className="row my-3" key={key}>
                        <div className="col">
                            <button type="button" className="btn btn-warning font-weight-bold">
                                {item.innterTxt}
                            </button>
                            <button type="button" id={item.plusId} className="btn btn-secondary mx-1" onClick={(e) => this.addNum(e)}>
                                <i className="fas fa-plus-circle" id={item.plusId}></i>
                            </button>
                            <button type="button" id={item.minusId} className="btn btn-primary mx-1" onClick={(e) => this.lessNum(e)}>
                                <i className="fas fa-minus-circle" id={item.minusId}></i>
                            </button>
                            <button type="button" className="btn btn-danger mx-1" id={item.trashId} onClick={(e) => this.removeDiv(e)}>
                                <i className="fas fa-trash-alt" id={item.trashId}></i>
                            </button>
                        </div>
                    </div>       
              )
          })}
      </div>
    );
  }
}

export default Main;