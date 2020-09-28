import request from '../util/request';

export const getArticleList = () => request.get(`/api/v1/article`, {});


