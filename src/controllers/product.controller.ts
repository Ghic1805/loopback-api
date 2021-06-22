import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Produtc} from '../models';
import {ProdutcRepository} from '../repositories';

export class ProductController {
  constructor(
    @repository(ProdutcRepository)
    public produtcRepository : ProdutcRepository,
  ) {}

  @post('/produtcs')
  @response(200, {
    description: 'Produtc model instance',
    content: {'application/json': {schema: getModelSchemaRef(Produtc)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Produtc, {
            title: 'NewProdutc',
            exclude: ['id'],
          }),
        },
      },
    })
    produtc: Omit<Produtc, 'id'>,
  ): Promise<Produtc> {
    return this.produtcRepository.create(produtc);
  }

  @get('/produtcs/count')
  @response(200, {
    description: 'Produtc model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Produtc) where?: Where<Produtc>,
  ): Promise<Count> {
    return this.produtcRepository.count(where);
  }

  @get('/produtcs')
  @response(200, {
    description: 'Array of Produtc model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Produtc, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Produtc) filter?: Filter<Produtc>,
  ): Promise<Produtc[]> {
    return this.produtcRepository.find(filter);
  }

  @patch('/produtcs')
  @response(200, {
    description: 'Produtc PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Produtc, {partial: true}),
        },
      },
    })
    produtc: Produtc,
    @param.where(Produtc) where?: Where<Produtc>,
  ): Promise<Count> {
    return this.produtcRepository.updateAll(produtc, where);
  }

  @get('/produtcs/{id}')
  @response(200, {
    description: 'Produtc model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Produtc, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Produtc, {exclude: 'where'}) filter?: FilterExcludingWhere<Produtc>
  ): Promise<Produtc> {
    return this.produtcRepository.findById(id, filter);
  }

  @patch('/produtcs/{id}')
  @response(204, {
    description: 'Produtc PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Produtc, {partial: true}),
        },
      },
    })
    produtc: Produtc,
  ): Promise<void> {
    await this.produtcRepository.updateById(id, produtc);
  }

  @put('/produtcs/{id}')
  @response(204, {
    description: 'Produtc PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() produtc: Produtc,
  ): Promise<void> {
    await this.produtcRepository.replaceById(id, produtc);
  }

  @del('/produtcs/{id}')
  @response(204, {
    description: 'Produtc DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.produtcRepository.deleteById(id);
  }
}
