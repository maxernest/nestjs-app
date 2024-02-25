import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
interface rating {
    Source : string;
    Value : string;
}


@Schema()
export class Movie{
    @Prop()
    Title : string;

    @Prop()
    Year : number;

    @Prop()
    Rated : string;

    @Prop()
    Released : Date;

    @Prop()
    Runtime : number;

    @Prop()
    Genre : string;

    @Prop()
    Director : string;

    @Prop()
    Writer : string;

    @Prop()
    Actors : string;

    @Prop()
    Plot : string;

    @Prop()
    Language : string;

    @Prop()
    Country : string;

    @Prop()
    Awards : string;

    @Prop()
    Poster : string;

    @Prop()
    Ratings : rating[];

    @Prop()
    MetaScore : number;

    @Prop()
    imdbRating : number;

    @Prop()
    imdbVotes : number;

    @Prop()
    imdbID : string;

    @Prop()
    Type : string

    @Prop()
    DVD : Date;

    @Prop()
    BoxOffice : number;

    @Prop()
    Production : string;

    @Prop()
    Website : string;

    @Prop()
    Response : string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);