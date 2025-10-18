# Fullstack Monorepo

A modern fullstack monorepo built with Nx, featuring TanStack Start for the frontend and NestJS with Drizzle ORM for the backend.

## Tech Stack

### Frontend (`apps/frontend`)
- **Framework**: TanStack Start (React-based SSR framework)
- **Routing**: TanStack Router
- **State Management**: TanStack Query
- **Build Tool**: Vite
- **Styling**: CSS

### Backend (`apps/backend`)
- **Framework**: NestJS
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM
- **Language**: TypeScript

### DevOps
- **Monorepo**: Nx
- **Package Manager**: pnpm
- **Containerization**: Docker & Docker Compose
- **Code Quality**: ESLint & Prettier

## Quick Start

### Prerequisites
- Node.js 18+
- pnpm
- Docker & Docker Compose

### 1. Clone and Install Dependencies
```bash
git clone <repository-url>
cd fullstack-app
pnpm install
```

### 2. Start PostgreSQL Database
```bash
# Using Docker (recommended)
docker-compose up -d postgres

# Or use your local PostgreSQL instance
# Create database named 'fullstackdb'
```

### 3. Environment Setup
```bash
cp .env.example .env
# Update .env with your database configuration
```

### 4. Database Setup
```bash
cd apps/backend
pnpm run db:generate  # Generate migration files
pnpm run db:migrate   # Run migrations
```

### 5. Start Development Servers
```bash
# Start both frontend and backend
pnpm run dev

# Or start individually
pnpm run dev:frontend  # Frontend on http://localhost:4200
pnpm run dev:backend   # Backend on http://localhost:3000
```

## Available Scripts

### Root Level Scripts
- `pnpm run dev` - Start  both frontend and backend in development mode
- `pnpm run build` - Build both applications
- `pnpm run docker:up` - Start all services with Docker Compose
- `pnpm run docker:down` - Stop all Docker services
- `pnpm run setup` - Install dependencies and start PostgreSQL

### Frontend Scripts (`apps/frontend`)
- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run start` - Start production server

### Backend Scripts (`apps/backend`)
- `pnpm run dev` - Start development server with hot reload
- `pnpm run build` - Build application
- `pnpm run start` - Start production server
- `pnpm run db:generate` - Generate database migrations
- `pnpm run db:migrate` - Run database migrations
- `pnpm run db:studio` - Open Drizzle Studio for database management

## API Endpoints

### Users API
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PATCH /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Health Check
- `GET /api/health` - Application health status

## Project Structure

```
fullstack-app/
├── apps/
│   ├── frontend/          # TanStack Start application
│   └── backend/           # NestJS application
├── docker-compose.yml     # Docker configuration
├── pnpm-workspace.yaml    # pnpm workspace configuration
├── nx.json               # Nx configuration
└── package.json          # Root package configuration
```

## Development

### Adding New Packages
```bash
# Add to specific app
pnpm add <package> --filter=@fullstack-app/frontend
pnpm add <package> --filter=@fullstack-app/backend

# Add to workspace root
pnpm add <package> -w
```

### Database Changes
1. Modify `apps/backend/src/schema.ts`
2. Generate migration: `pnpm run db:generate`
3. Apply migration: `pnpm run db:migrate`

## Deployment

### Docker Deployment
```bash
docker-compose up -d
```

This will start:
- PostgreSQL on port 5432
- Backend API on port 3000
- Frontend on port 4200

## License

MIT
