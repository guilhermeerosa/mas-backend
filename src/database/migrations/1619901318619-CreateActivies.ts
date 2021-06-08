import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateActivies1619740824054 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "activies",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "grade",
                        type: "decimal"
                    },
                    {
                        name: "activy_date",
                        type: "date"
                    },
                    {
                        name: "course_unit_id",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FK_course_unit",
                        referencedTableName: "course_units",
                        referencedColumnNames: ["id"],
                        columnNames: ["course_unit_id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("activies");
    }

}
