import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { VideoModule } from './video/video.module';
import { WatchHistoryModule } from './watch_history/watch_history.module';

@Module({
  imports: [PrismaModule, UserModule, VideoModule, WatchHistoryModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
