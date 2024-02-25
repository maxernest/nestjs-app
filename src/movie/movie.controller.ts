import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { MovieService } from "./movie.service";
import { Movie } from "./movie.schema";

@Controller("movie")
export class MovieController{
    constructor(private movieService : MovieService){}

    @Get()
    async getMovie(){
        const data = await this.movieService.getAll();
        return data;
    }

    @Get(":id")
    async findMovieById(@Param("id") movieId : string){
        const data = await this.movieService.findById(movieId);
        return data;
    }

    @Post()
    async addMovie(@Body() body : Movie) {
        return `Created a new post with values of ${body.Actors} 🚀`;
    }
}