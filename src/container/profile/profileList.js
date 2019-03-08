import React, { Component } from 'react';
import ProfileCard from './profileCard';
import ProfileListView from './profileListView';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Icon, Card, Button } from 'antd';
import { getProfiles, addProfile, showAddProfile } from '../../actions/profile_actions';
import { getProfilesState } from '../../selectors/demoSelector';
import MainWrapper from '../../components/UI/Elements/MainWrapper'
import { StyledCodeSkeleton } from "../../components/UI/Elements";
import './profile.css';

function ProfileList(props) {

    if (props.isLoading) {
        return (<StyledCodeSkeleton />)
    }
    if (props.isError) {
        return (<h2>Some Error Occoured</h2>)
    }

    let renderCard = props.profiles
        .sort((a, b) => props.sortKey === 'ASC' ? a.name > b.name : a.name < b.name)
        .map(profile => {
            if (props.viewType === 'GRID') {
                return <ProfileCard
                    key={profile._id}
                    user={profile}
                />
            }
            if (props.viewType === 'LIST') {
                return <ProfileListView key={profile._id} user={profile} />
            }


        })
    return (
        <div className={props.viewType === 'GRID' ? 'profile-grid-view' : 'profile-list-view'} >
            {props.viewType === 'GRID' && <div className="flex-container"
                style={{ width: 155, height: 200, margin: '0.5rem', justifyContent: 'center', backgroundColor: '#fff', cursor: 'pointer' }}
                onClick={() => props.showAddProfile()}
            >
                <Icon type="user-add" style={{ fontSize: '10rem', color: '#444' }} />
            </div>}
            {renderCard}
        </div>
    )
}
const mapStateToProps = state => ({
    isLoading: state.profileReducer.isLoading,
    isError: state.profileReducer.isError,
    viewType: state.profileReducer.viewType,
    sortKey: state.profileReducer.sortKey,
    profiles: getProfilesState(state, state.profileReducer.filterText)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getProfiles,
    addProfile,
    showAddProfile
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProfileList);