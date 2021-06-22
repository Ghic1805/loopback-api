import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Produtc extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  descicao: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Produtc>) {
    super(data);
  }
}

export interface ProdutcRelations {
  // describe navigational properties here
}

export type ProdutcWithRelations = Produtc & ProdutcRelations;
