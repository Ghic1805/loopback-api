import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LoopbackMysqlDataSource} from '../datasources';
import {User, UserRelations} from '../models';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {
  constructor(
    @inject('datasources.loopback_mysql') dataSource: LoopbackMysqlDataSource,
  ) {
    super(User, dataSource);
  }
}
