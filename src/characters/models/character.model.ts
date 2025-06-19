export interface Character {
    id: number;
    name: string;
    status: ALIVE_STATUS;
    species: string;
    type: string;
    gender: GENDER;
    origin: Location;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: Date;
}

export interface Location {
    name: string;
    url: string;
}

export type ALIVE_STATUS = 'Alive' | 'Dead' | 'unknown';

export type GENDER = 'Female' | 'Male' | 'Genderless' | 'unknown';

