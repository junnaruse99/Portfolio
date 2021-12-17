import React, { useReducer, FC } from 'react';
import ProfileContext from './ProfileContext';
import { Me, Education, Experience, Media, Profile, defaultProfile } from './ProfileModel';
import { Error } from '../Models';
import ProfileReducer from './ProfileReducer';
import { GET_PROFILE, PROFILE_ERROR } from '../../types';
let meData : Me = require('../../data/me.json');
let educationData : Education[] = require('../../data/education.json');
let experienceData : Experience[] = require('../../data/experience.json');
let mediaData : Media[] = require('../../data/media.json');


const ProfileState: FC = props => {
  
  const [ state, dispatch ] = useReducer(ProfileReducer, defaultProfile);

  const getProfile = async () => {
    // Build my object
    let profile : Profile = {
      personal: meData,
      educations: educationData,
      experiences: experienceData,
      medias: mediaData,
      message: null,
      getProfile: () => {}
    }
   

    try {
      dispatch({
        type: GET_PROFILE,
        payload: profile
      })

    } catch (error) {
      const alert: Error = {
        msg: 'There was an error getting the data',
        class: 'alert-error'
      }

      dispatch({
        type: PROFILE_ERROR,
        payload: alert
      })

    }
  }

  return (
    <ProfileContext.Provider
    value={{
        personal: state.personal,
        educations: state.educations,
        experiences: state.experiences,
        medias: state.medias,
        message: state.message,
        getProfile,
    }}>
        {props.children}
    </ProfileContext.Provider>
  )
}

export default ProfileState;

