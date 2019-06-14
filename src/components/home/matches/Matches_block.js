import React from 'react'

const Matches_block = ({ match }) => {

    return (
        <div className="match_block">
            <div className="match_date">
                {match.final ? match.date : `match not played yet: ${match.date}`}
            </div>
            <div className="match_wrapper">
                <div className="match_top">
                    <div className="left">
                        <div className="icon" style={{ background: `url(/images/team_icons/${match.localThmb}.png)` }}></div>
                        <div className="team_name">{match.local}</div>
                    </div>
                    <div className="right">
                        {match.final ? match.resultLocal : '-'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Matches_block
