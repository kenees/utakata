import request from '../util/request';

export const GetArticleList = (params: any) => request.get(`/api/v1/article`, params);

export const CreateArticle = (data: any) => request.post('/api/v1/article', data);

export const UpdateArticle = (data: any) => request.put('/api/v1/article', data);

export const DeleteArticle = (article_id: number) => request.delete('/api/v1/article', { article_id });