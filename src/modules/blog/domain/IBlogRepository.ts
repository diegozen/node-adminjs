import { IBlog } from './IBlog';

export interface IBlogRepository {
    listBlogs: () => Promise<Array<IBlog>>;
    getBlog(id: number): Promise<IBlog>;
    createBlog(params: ICreateBlogParams): Promise<IBlog>;
    updateBlog(id: number, params: IUpdateBlogParams): Promise<IBlog>;
    deleteBlog(id: number): Promise<boolean>;
}

export type ICreateBlogParams = {
    title: string;
    body: string;
};

export type IUpdateBlogParams = Partial<ICreateBlogParams>;
