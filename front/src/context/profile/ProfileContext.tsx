import { createContext } from 'react';
import { Profile, defaultProfile } from './ProfileModel';

const ProfileContext = createContext<Profile>(defaultProfile);

export default ProfileContext;
