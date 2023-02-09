import { INestApplication, Injectable, Optional } from '@nestjs/common';
import { Prisma, PrismaClient } from '@nx-prisma/prisma-clients/crm';

import { ConfigService } from '../config';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(protected configService: ConfigService) {
    super({
      datasources: {
        db: {
          url: configService.dbSourceURL,
        },
      },
    });
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
