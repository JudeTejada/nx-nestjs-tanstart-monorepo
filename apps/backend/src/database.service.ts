import { Injectable } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

@Injectable()
export class DatabaseService {
  private pool: Pool;
  private db: ReturnType<typeof drizzle>;

  constructor() {
    this.pool = new Pool({
      connectionString: process.env.DATABASE_URL || 'postgresql://postgres:password@localhost:5432/fullstackdb',
    });

    this.db = drizzle(this.pool, { schema });
  }

  get database() {
    return this.db;
  }

  async onModuleDestroy() {
    await this.pool.end();
  }
}