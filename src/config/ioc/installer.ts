import 'reflect-metadata';
import { Container } from 'inversify';
import { BlogRepository } from '../../modules/blog/infrastructure/database/BlogRepository';
import BLOG_IDENTIFIERS from '../../modules/blog/domain/constants';
import { IBlogRepository } from '../../modules/blog/domain/IBlogRepository';

let container = new Container();

container.bind<IBlogRepository>(BLOG_IDENTIFIERS.BlogRepository).to(BlogRepository);

export default container;
