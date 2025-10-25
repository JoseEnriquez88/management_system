import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'API de Gestión de Órdenes',
      version: '1.0.0',
      description: 'API para gestionar órdenes',
    },
    servers: [
      {
        url: 'http://localhost:3001',
        description: 'Servidor de desarrollo',
      },
    ],
    components: {
      schemas: {
        Order: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'Identificador único de la orden',
            },
            customer_name: {
              type: 'string',
              description: 'Nombre del cliente',
            },
            item: {
              type: 'string',
              description: 'Artículo solicitado',
            },
            quantity: {
              type: 'integer',
              description: 'Cantidad del artículo',
            },
            status: {
              type: 'string',
              enum: ['pending', 'completed', 'cancelled'],
              description: 'Estado de la orden',
            },
            created_at: {
              type: 'string',
              format: 'date-time',
              description: 'Fecha y hora de creación',
            },
          },
          required: ['customer_name', 'item', 'quantity'],
        },
        OrderCreation: {
          type: 'object',
          properties: {
            customer_name: {
              type: 'string',
            },
            item: {
              type: 'string',
            },
            quantity: {
              type: 'integer',
            },
            status: {
              type: 'string',
              enum: ['pending', 'completed', 'cancelled'],
            },
          },
          required: ['customer_name', 'item', 'quantity'],
        },
        PaginatedOrders: {
          type: 'object',
          properties: {
            data: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/Order',
              },
            },
            meta: {
              type: 'object',
              properties: {
                total: {
                  type: 'integer',
                },
                page: {
                  type: 'integer',
                },
                page_size: {
                  type: 'integer',
                },
                total_pages: {
                  type: 'integer',
                },
                has_next_page: {
                  type: 'boolean',
                },
                has_prev_page: {
                  type: 'boolean',
                },
              },
            },
          },
        },
        Error: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
            },
          },
        },
      },
    },
  },
  apis: ['./src/docs/*.ts'], 
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;