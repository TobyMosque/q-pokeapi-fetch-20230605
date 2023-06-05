import { ResponseList } from './api';

export interface PokemonItem {
  name: string;
  url: string;
}

export interface PokemonDetail {
  id: number;
  height: number;
  weight: number;
  name: string;
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  sprites: {
    back_default: string;
    back_female?: string | null;
    back_shiny: string;
    back_shiny_female?: string | null;
    front_default: string;
    front_female?: string | null;
    front_shiny: string;
    front_shiny_female?: string | null;
  };
}

export type PokemonList = ResponseList<PokemonItem>;
