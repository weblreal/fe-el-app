interface IDirectors {
  imgAlt?: string;
  imgUrl?: string;
  name?: string;
  position?: string;
  route?: string;
}

export interface IBoardOfDirectors {
  directors?: Array<IDirectors>;
  title?: string;
}