import { classes } from '@automapper/classes';
import { AutomapperModule } from '@automapper/nestjs';

export const MapperModule = AutomapperModule.forRoot({
  strategyInitializer: classes(),
});
