import { Error } from '../Models';

export interface Profile {
    personal: Me | null;
    educations: Education[];
    experiences: Experience[];
    medias: Media[];
    message: Error | null;
    getProfile: () => void;
}

export interface Me {
    name: string;
    career: string;
    description: string;
    location: string;
}

export interface Education {
    id: number;
    name: number;
    location: string;
    start_date: Date;
    end_date: Date;
    description: string;
    extra: string;
}

export interface Experience {
    id: number;
    name: string;
    start_date: Date;
    end_date: Date;
    location: string;
    description: string;
    achievements: string;
}

export interface Media {
    id: number;
    icon: string;
    description: string;
    contact: string;
}

export const defaultProfile : Profile = {
    personal: null,
    educations: [],
    experiences: [],
    medias: [],
    message: null,
    getProfile: () => {}
}