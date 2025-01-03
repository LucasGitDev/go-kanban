import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

// --------- Middleware ---------

// prisma.$use(async (params, next) => {
//   if (params.model === 'Task') {
//     if (params.action === 'delete') {
//       params.action = 'update';
//       params.args.data = {
//         deletedAt: new Date(),
//       };
//     }

//     if (params.action == 'deleteMany') {
//       params.action = 'updateMany';
//       if (params.args.data != undefined) {
//         params.args.data['deletedAt'] = new Date();
//       } else {
//         params.args['data'] = { deletedAt: new Date() };
//       }
//     }
//   }

//   return next(params);
// });

// --------- Middleware ---------

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;
