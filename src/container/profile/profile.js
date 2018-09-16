import React from 'react';
import { connect } from 'react-redux';
import ProfileList from './profileList';
import AddProfile from './addProfile';
import EditProfile from './editProfile';
import ProfileView from './profileView';
import ProfileActionHeaderLeft from './ProfileActionHeaderLeft';
import ActionHeader from '../../components/layouts/ActionHeader';
import PaginationComponent from '../../components/common/pagination/pagination';
import './profile.css';

const Profile = (props) => {
  return (
    <div className="pr">
      <ActionHeader />
      <ProfileActionHeaderLeft />
      <div className="profile-wrapper">
        <div className="profile-view">
          <ProfileList />
          <PaginationComponent />
        </div>
        <div className="profile-action">
          {props.showAddProfile && <AddProfile />}
          {props.showEditProfile && <EditProfile />}
          {props.showViewProfile && <ProfileView />}
        </div>
      </div>
    </div>

  )
}
const mapStateToProps = (state) => {
  return {
    isLoading: state.profileReducer.isLoading,
    isError: state.profileReducer.isError,
    showAddProfile: state.profileReducer.showAddProfile,
    showEditProfile: state.profileReducer.showEditProfile,
    showViewProfile: state.profileReducer.showViewProfile
  }
}
export default connect(mapStateToProps)(Profile);
const LeftActionHeader = props => {
  return (<React.Fragment>

  </React.Fragment>
  )
}

const RightActionHeader = props => {
  return (<React.Fragment>

  </React.Fragment>
  )
}