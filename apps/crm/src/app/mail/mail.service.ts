import { ISendMailOptions, MailerService } from '@nestjs-modules/mailer';
import { Injectable, Logger } from '@nestjs/common';

import { ConfigService } from '../config';
import { JwtService } from '../jwt';
import { GeneralContext } from './contexts';

type MailOptions = ISendMailOptions & { template?: string };

@Injectable()
export class MailService {
  constructor(
    private readonly mailer: MailerService,
    private readonly jwtService: JwtService,
    private readonly config: ConfigService
  ) {}
  //--------------------------------------------------------------------------
  send(options: MailOptions) {
    Logger.log(`Sent ${options.template} ${options.to}`);
    return this.mailer.sendMail(options).catch(e => Logger.error(e, options));
  }
  //--------------------------------------------------------------------------
  sendGeneral(options: { to: string; subject: string; context: GeneralContext }) {
    return this.send({
      template: 'general',
      to: options.to,
      subject: options.subject,
      context: options.context,
    }).then();
  }
}
