const PrismaClient = require('@prisma/client').PrismaClient;
const prisma = new PrismaClient()


class PRISMA {

    constructor(schema){
        this.schema = schema
        this.checkDatabaseConnection()
    }

    async checkDatabaseConnection() {
        try {
          await prisma.$connect();
          console.log('Connected to the database');
        } catch (error) {
          console.error('Failed to connect to the database:', error);
        } finally {
          await prisma.$disconnect();
        }
      }

   async create(data) {
    try {
      const user = await prisma[this.schema].create({
        data,
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
  //Get all 
  async getAll() {
    try {
      const user = await prisma[this.schema].findMany();
      return user;
    } catch (error) {
      return null;
    }
  }

  // Get by ID
   async getById(id) {
    try {
      const user = await prisma[this.schema].findUnique({
        where: { id },
      });
      return user;
    } catch (error) {
      return null;
    }
  }

  // Update by ID
   async update(id, data) {
    try {
      const user = await prisma[this.schema].update({
        where: { id },
        data,
      });
      return user;
    } catch (error) {
      return null;
    }
  }

  // Delete by ID
   async delete(id) {
    try {
      const user = await prisma[this.schema].delete({
        where: { id },
      });
      return user;
    } catch (error) {
      return null;
    }
  }
}

module.exports = PRISMA;
