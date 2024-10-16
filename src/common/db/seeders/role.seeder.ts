import { Role } from 'src/role/entities/role.entity';
import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';

export class roleSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(Role);
    const dataRole = [{ nameRole: 'admin' }, { nameRole: 'client' }];

    for (const x of dataRole) {
      const query = await repo.findOneBy({ nameRole: x.nameRole });
      if (!query) {
        const dataRole = repo.create(x);
        await repo.save(dataRole);
      }
    }
  }
}
