import { GET_PROFILE, PROFILE_ERROR } from '../../types';

export default (state:any, action:any) => {
  switch (action.type) {
    case GET_PROFILE:
      return{
        ...state,
        personal: action.payload.personal,
        education:action.payload.education,
        experience: action.payload.experience,
        media: action.payload.media,
        message: null
      }
    case PROFILE_ERROR:
      return{
        ...state,
        message: action.payload
      }
  }

}