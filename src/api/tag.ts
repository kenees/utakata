/**
 * @author kenevy
 * @date  22:46
 * @descript  ''
 */
import request from '../util/request';

export const CreateTag = async (data: { tag_name: string, default_color: string }) =>  request.post('/api/v1/tags', data);

export const GetTags = async () =>  request.get('/api/v1/tags', {});

