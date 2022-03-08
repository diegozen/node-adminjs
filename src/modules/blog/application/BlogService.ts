import { injectable, inject, interfaces } from 'inversify';
import BLOG_IDENTIFIERS from '../domain/constants';
import { IBlog } from '../domain/IBlog';
import { IBlogRepository, ICreateBlogParams } from '../domain/IBlogRepository';
import 'reflect-metadata';

@injectable()
export class BlogService {
    private repository: IBlogRepository;

    constructor(@inject(BLOG_IDENTIFIERS.BlogRepository) repository: IBlogRepository) {
        this.repository = repository;
    }

    async showBlogs(): Promise<IBlog[]> {
        console.log('holaaaa');
        return await this.repository.listBlogs();
    }

    async getBlog(id: number): Promise<IBlog> {
        return await this.repository.getBlog(id);
    }

    async createBlog(params: ICreateBlogParams): Promise<IBlog> {
        return await this.repository.createBlog(params);
    }
    async updateBlog(id: number, params: Partial<ICreateBlogParams>): Promise<IBlog> {
        return await this.repository.updateBlog(id, params);
    }

    async deleteBlog(id: number): Promise<boolean> {
        return await this.repository.deleteBlog(id);
    }
}
