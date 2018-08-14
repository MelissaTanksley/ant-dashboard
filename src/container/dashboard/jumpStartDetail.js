import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import  classNames  from 'classnames';
import { openJumpstartModal } from "../../actions/dashboardAction";
const JumpStartDetail = (props) => {
    return (
        <div className={'jumpstart-box'}
            onClick={() => props.openJumpstartModal(props.data)}
            >
            <div>
                <h3 style={{ color: '#aaa' }}>{props.data.title}</h3>
                <h2 style={{ color: '#eee' }}>{props.data.value}
                    <span className={props.jumpstartStyle}>{props.data.progress}</span>
                </h2>
            </div>
        </div>
    )
}

export default connect(null, (dispatch) => {
    return bindActionCreators({
        openJumpstartModal
    }, dispatch)
})(JumpStartDetail);