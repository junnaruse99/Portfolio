import { GET_PROFILE, PROFILE_ERROR } from '../../types';

export default (state:any, action:any) => {
  switch (action.type) {
    case GET_PROFILE:
      return{
        ...state,
        personal: action.payload.personal,
        educations:action.payload.educations,
        experiences: action.payload.experiences,
        medias: action.payload.medias,
        message: null
      }
    case PROFILE_ERROR:
      return{
        ...state,
        message: action.payload
      }
  }

}