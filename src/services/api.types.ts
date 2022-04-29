import {
  TArticle, TComment, TProfile, TTags, TUser,
} from '../types/types';

export type TAPINewUser = {
  user: {
    username: string;
    email: string;
    password: string;
  }
};

export type TAPILoginUser = {
  user: {
    email: string;
    password: string;
  }
};

export type TAPIUser = {
  user : TUser;
};

export type TAPIPatchUser = {
  user: {
    email?: string;
    username?: string;
    bio?: string;
    image?:string;
    password?: string; }
};

export type TAPIArticles = {
  articles: Array<TArticle>,
  articlesCount: number,
};

export type TAPIParamsObject = {
  limit?: number,
  offset?: number,
  tag?: string,
  favorited?: string,
  author?: string
};

export type TAPIArticle = {
  article : TArticle;
};

export type TAPITags = {
  tags: TTags;
};

export type TAPIComment = {
  comment: TComment;
};
export type TAPIComments = {
  comments: Array<TComment>;
};

export type TAPIProfile = {
  profile: TProfile;
};

export type TAPIError = {
  errors: {
    [error: string]: string;
  }
};
