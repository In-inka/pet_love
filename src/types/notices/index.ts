

export interface INotices {
  _id: string;
  species: string;
      category: string;
      title: string;
      name: string;
      birthday: string;
      comment: string;
      sex: string;
      location: string;
      imgURL: string;
      createdAt: string;
      user:string;
      popularity: number,
      updatedAt: string;
}

export interface NoticesResponse {
  page: number;
  perPage: number;
  totalPages: number;
  results: INotices[];
}
