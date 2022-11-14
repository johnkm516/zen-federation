import { INestApplication, Injectable, Optional } from '@nestjs/common';
import { PrismaClient } from '@nx-prisma/prisma-clients/Auth';
import { ConfigService } from '../config';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(protected configService: ConfigService) {
    console.log(configService);
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
