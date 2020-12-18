import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('movies')
class Movie {
  @PrimaryColumn('int')
  id: number;

  @Column()
  title: string;

  @Column()
  overview: string;

  @Column()
  runtime: number;

  @Column()
  release_date: string;

  @Column('text', { array: true })
  genres: string[];

  @Column()
  popularity: number;

  @Column()
  poster_path: string;

  @Column('text', { array: true })
  translations: string[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Movie;
