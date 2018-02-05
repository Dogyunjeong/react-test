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

    getMedal(medalObj) {
        return {
            total: medalObj.n_Total,
            gold: medalObj.n_Gold,
            silver: medalObj.n_Silver,
            bronze: medalObj.n_Bronze
        }
    }

    getMax(arr) {
        return Math.max(...arr)
    }
    // TrimData for component
    getMedalList(list) {
        return list.map((obj) => {
            return {
                name: obj.Participant.c_Participant,
                event: obj.Event.c_Name,
                gender: obj.Gender.c_Short
            }
        })
    }
    // TrimData for component

    getSport() {
        const ctx = this;
        const totals = this.state.SportList.map(obj => obj.Medals.n_Total)
        const max = this.getMax(totals);

        return this.state.SportList.map((obj) => {
            return {
                name: obj.Sport.c_Name,
                short: obj.Sport.c_Short,
                rank: obj.Medals.n_RankTotal,
                medals: ctx.getMedal(obj.Medals),
                max,
                medalList: {
                    goldMedalList: ctx.getMedalList(obj.GoldMedalList),
                    silverMedalList: ctx.getMedalList(obj.SilverMedalList),
                    bronzeMedalList: ctx.getMedalList(obj.BronzeMedalList),
                },
            }
        })
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
                            medals={this.getMedal(this.state.NOCMedals.Medals)}/>
                    </div>
                </div>
                <div className="top-buffer">
                    <h3>Sport List</h3>
                </div>
                <SportList
                    sport={this.getSport()}/>
            </div>
        )
    }
}

export default MedalStatus;