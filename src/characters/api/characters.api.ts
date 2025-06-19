import axios from "axios";
import type { Character } from "../models/character.model";

const BASE_URL = 'https://rickandmortyapi.com/api';

export async function getAllCharacters(pageNumber : number): Promise<Character[]> {
    const res = await axios.get<{ results: Character[] }>(`${BASE_URL}/character?page=${pageNumber}`);
    return res.data.results;
}

export async function getCharacterById(characterId: number): Promise<Character> {
    const res = await axios.get<Character>(`${BASE_URL}/character/${characterId}`);
    return res.data;
}
