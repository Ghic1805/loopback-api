import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'loopback_mysql',
  connector: 'mysql',
  url: '',
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '1234',
  database: 'loopbackmysql'
};

// Observe application's life cycle to disconnect the datasource whennp
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class LoopbackMysqlDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'loopback_mysql';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.loopback_mysql', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
