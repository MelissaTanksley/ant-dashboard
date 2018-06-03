import { createSelector } from 'reselect';

const getProfiles = (state) => state.profileReducer.profiles
const filterText = (state) => state.profileReducer.filterText

export const getProfilesState = createSelector(
    [getProfiles, filterText],
    (profile, filterText) => {
        return profile.filter((profile) => (profile.name).toLowerCase().includes(filterText.toLowerCase()))
    }
)