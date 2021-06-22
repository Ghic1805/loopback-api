import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LoopbackMysqlDataSource} from '../datasources';
import {Produtc, ProdutcRelations} from '../models';

export class ProdutcRepository extends DefaultCrudRepository<
  Produtc,
  typeof Produtc.prototype.id,
  ProdutcRelations
> {
  constructor(
    @inject('datasources.loopback_mysql') dataSource: LoopbackMysqlDataSource,
  ) {
    super(Produtc, dataSource);
  }
}
