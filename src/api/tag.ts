/**
 * @author kenevy
 * @date  22:46
 * @descript  ''
 */
import request from '../util/request';

export const CreateTag =  (data: { tag_name: string, default_color: string }) =>  request.post('/api/v1/tags', data);

export const UpdateTag =  (data: any) => request.put('/api/v1/tags', data);

export const GetTags =  (params?: { tag_id?: number, tag_name?: string}) =>  request.get('/api/v1/tags', params || {});

export const DeleteTag =  (tag_id: number) => request.delete('/api/v1/tags', { tag_id })

