import { Request, Response } from 'express';
import container from '../../../../config/ioc/installer';
import { BlogService } from '../../application/BlogService';

export class BlogController {
    private blogService: BlogService;
    constructor() {
        this.blogService = container.resolve<BlogService>(BlogService);
    }

    public async list(req: Request, res: Response) {
        const list = await this.blogService.showBlogs();
        console.log('entra');
        res.status(200).json(list);
    }

    public async get(req: Request, res: Response) {
        const id = Number(req.params.id);
        const item = await this.blogService.getBlog(id);
        res.status(200).json(item);
    }

    public async create(req: Request, res: Response) {
        const { title, body } = req.body;
        const params = {
            title,
            body
        };
        const newItem = await this.blogService.createBlog(params);
        res.status(201).json(newItem);
    }
}
