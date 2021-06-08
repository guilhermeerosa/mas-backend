import { Column, CreateDateColumn, Entity, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
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

    @Column()
    grade: number;

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(()=> CourseUnit, course_unit => course_unit.activies)
    @JoinColumn({name: "course_unit_id"})
    course_unit: CourseUnit;
}

export {Activy}