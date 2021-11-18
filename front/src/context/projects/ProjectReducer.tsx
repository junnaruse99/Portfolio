import { GET_PROJECTS, PROJECT_ERROR } from '../../types';

export default (state:any, action:any) => {
  switch (action.type) {
    case GET_PROJECTS:
      return{
        ...state,
        projects: action.payload
      }
    case PROJECT_ERROR:
      return{
        ...state,
        message: action.payload
      }
  }

}