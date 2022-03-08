import { injectable } from 'inversify';
import 'reflect-metadata';
import { EntityRepository, getConnection, getRepository, UpdateResult } from 'typeorm';
import { IBlog } from '../../domain/IBlog';
import { IBlogRepository, ICreateBlogParams } from '../../domain/IBlogRepository';
import { Blog } from './Blog';

@injectable()
@EntityRepository(Blog)
export class BlogRepository implements IBlogRepository {
    async listBlogs(): Promise<IBlog[]> {
        return await getRepository(Blog).find();
    }
    async getBlog(id: number): Promise<IBlog> {
        return await getRepository(Blog).findOneOrFail(id);
        // throw new Error('Method not implemented.');
    }
    async createBlog(params: ICreateBlogParams): Promise<IBlog> {
        const newBlog = await getConnection().createQueryBuilder().insert().into(Blog).values([params]).execute();
        return newBlog.raw;
        // throw new Error('Method not implemented.');
    }
    async updateBlog(id: number, params: Partial<ICreateBlogParams>): Promise<IBlog> {
        const updatedBlog = await getConnection()
            .createQueryBuilder()
            .update(Blog)
            .set(params)
            .where('id = :id', { id })
            .execute();
        return updatedBlog.raw;
        // return await this.getBlog(id);
    }
    async deleteBlog(id: number): Promise<boolean> {
        const deletedBlog = await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Blog)
            .where('id = :id', { id: 1 })
            .execute();
        return !!deletedBlog.raw;
        // throw new Error('Method not implemented.');
    }
}
