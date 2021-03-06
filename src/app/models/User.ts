import { Entity, Column, PrimaryColumn, BeforeInsert, BeforeUpdate} from "typeorm"
import {v4 as uuid} from "uuid"
import bcrypt from 'bcryptjs'


@Entity("users")
export class User {

    @PrimaryColumn()
    id:string;

    @Column()
    email:string;

    @Column()
    password:string;
    
    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        this.password = bcrypt.hashSync(this.password,8)
    }

    constructor(){
        if(!this.id){
            this.id = uuid(); 
        }
    }
   
}