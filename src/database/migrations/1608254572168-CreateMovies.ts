import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateMovies1608254572168
implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'movies',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'overview',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'runtime',
            type: 'int',
          },
          {
            name: 'release_date',
            type: 'varchar',
          },
          {
            name: 'genres',
            type: 'varchar[]',
          },
          {
            name: 'popularity',
            type: 'float',
          },
          {
            name: 'poster_path',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'translations',
            type: 'varchar[]',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('movies');
  }
}
