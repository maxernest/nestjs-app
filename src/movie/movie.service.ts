import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Movie } from "./movie.schema";
import { Model } from "mongoose";

@Injectable()
export class MovieService{
    constructor(@InjectModel("movie") private movieModel : Model<Movie>){}

    async getAll() : Promise<Movie[]>{
        const movieData = await this.movieModel.find();
        return movieData;
    }

    async findById(movieId : string) : Promise<Movie>{
        const data = await this.movieModel.findById(movieId);
        return data;
    }
}