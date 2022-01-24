export interface Child {
  id: string;
  name: string;
  gender: EGender;
  birth: string;
  photo: string;
}

export enum EGender {
  MALE = 'Мальчик',
  FEMALE = 'Девочка',
  NAN = 'NaN',
}
