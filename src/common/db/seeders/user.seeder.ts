import { User } from 'src/user/entities/user.entity';
import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import * as bcrypt from 'bcrypt';

export class userSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(User);
    const dataUser = [
      {
        name: 'jesus',
        email: 'jesus@gmail.com',
        password: 'jesus12',
        roleId: 1,
      },
      {
        name: 'pedro',
        email: 'pedro@gmail.com',
        password: 'pedro12',
        roleId: 2,
      },
    ];

    for (const x of dataUser) {
      const query = await repo.findOneBy({ email: x.email });
      if (!query || !(await bcrypt.compare(x.password, query.password))) {
        const dataRole = repo.create(x);
        await repo.save(dataRole);
      }
    }
  }
}
