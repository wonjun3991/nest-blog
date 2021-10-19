import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/posts.controller';
import { UsersController } from './users/users.controller';
import { CommentsController } from './comments/comments.controller';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [PostsModule, UsersModule, CommentsModule],
  controllers: [
    AppController,
    PostsController,
    UsersController,
    CommentsController,
  ],
  providers: [AppService],
})
export class AppModule {}
