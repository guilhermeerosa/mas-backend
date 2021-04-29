import { Column, CreateDateColumn, Entity, PrimaryColumn, ManyToOne } from "typeorm";
import {v4 as uuid} from "uuid";

import { CourseUnit } from "./CourseUnit";

@Entity("activies")
class Activy {

    constructor(){
        if (!this.id) {
            this.id = uuid();
        }
    }

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    activy_date: Date;

    @ManyToOne(()=> CourseUnit, course_unit => course_unit.activies)
    course_unit: CourseUnit;

    @CreateDateColumn()
    created_at: Date;
}

export {Activy}