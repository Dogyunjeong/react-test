import React, { Component } from 'react';
import MedalChart from '../../components/MedalChart/MedalChart';
import SportList from '../../components/SportList/SportList';
import api from '../../api_json';

class MedalStatus extends Component {
    constructor(props) {
        super(props);
        // Get data form api response
        const { NOCMedals, SportList } = api.GetMedalTableNOCDetail_Season();
        this.state = {
            NOCMedals,
            SportList
        }
    }

    getMax(arr) {
        return Math.max(...arr)
    }
    // TrimData for component
    // TrimData for component

    getSportListMax() {
        const totals = this.state.SportList.map(obj => obj.Medals.n_Total)
        return this.getMax(totals);
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="national-title">
                        <h2>
                            ({this.state.NOCMedals.NOC.c_Short}) : {this.state.NOCMedals.NOC.c_Name}
                        </h2>
                    </div>
                </div>
                <div className="row" style={{height: '500px'}}>
                    <div className="xs-12">
                        <MedalChart
                            max={this.getMax([this.state.NOCMedals.Medals.n_Total])}
                            height={400}
                            width={400}
                            medals={this.state.NOCMedals.Medals}/>
                    </div>
                </div>
                <div className="top-buffer">
                    <h3>Sport List</h3>
                </div>
                <SportList
                    max={this.getSportListMax()}
                    sportList={this.state.SportList}/>
            </div>
        )
    }
}

export default MedalStatus;