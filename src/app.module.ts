import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieController } from './movie/movie.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieModule } from './movie/movie.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [MovieModule, MongooseModule.forRoot("mongodb+srv://maxernest:joh4nn35@cluster0.ad1mg53.mongodb.net/movie_review"), AuthModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
