import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'users_info' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column({ unique: true })
  username: string;

  @Column({ select: false })
  password: string;
}
