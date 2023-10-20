import { Entity, PrimaryColumn,Generated, Column ,CreateDateColumn,DeleteDateColumn} from 'typeorm';

@Entity()
export class Users {
  @PrimaryColumn({type:"uuid"})
  @Generated("uuid") id: string;
  @Column()
  @Column({ length: 100 })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ length: 11 })
  phone: string;

  @Column({default: () => 'CURRENT_TIMESTAMP'})
  birthday: string;

  @Column({ default: null })
  gender: boolean;

  @Column({ default: false })
  isActive: boolean;

  @CreateDateColumn()
  created!: Date;

  @CreateDateColumn()
  updatedA!: Date

  @DeleteDateColumn()
  deletedAt?: Date;

  @Column({default: false})
  isDeleted: Boolean
  
  
}
