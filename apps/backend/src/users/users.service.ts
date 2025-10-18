import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database.service';
import { users, NewUser, User } from '../schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createUserDto: NewUser): Promise<User> {
    const [user] = await this.databaseService.database
      .insert(users)
      .values(createUserDto)
      .returning();
    return user;
  }

  async findAll(): Promise<User[]> {
    return await this.databaseService.database.select().from(users);
  }

  async findOne(id: number): Promise<User | null> {
    const [user] = await this.databaseService.database
      .select()
      .from(users)
      .where(eq(users.id, id));
    return user || null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const [user] = await this.databaseService.database
      .select()
      .from(users)
      .where(eq(users.email, email));
    return user || null;
  }

  async update(id: number, updateUserDto: Partial<NewUser>): Promise<User | null> {
    const [user] = await this.databaseService.database
      .update(users)
      .set({ ...updateUserDto, updatedAt: new Date() })
      .where(eq(users.id, id))
      .returning();
    return user || null;
  }

  async remove(id: number): Promise<void> {
    await this.databaseService.database
      .delete(users)
      .where(eq(users.id, id));
  }
}