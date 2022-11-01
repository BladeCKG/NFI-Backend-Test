import { Property, Entity, ManyToOne, PrimaryKey } from '@mikro-orm/core';

@Entity()
export class User {
    @PrimaryKey({autoincrement: true})
    id: number;
    
    @Property() 
    name: string;

    @Property({default: "abc@nfi.com", unique: true}) 
    email: string;

    @Property({default: 0})
    balance: number;
}
