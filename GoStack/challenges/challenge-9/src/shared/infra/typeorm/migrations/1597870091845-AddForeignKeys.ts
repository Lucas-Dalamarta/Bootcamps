import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class AddForeignKeys1597870091845 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    // Order X Customer
    await queryRunner.createForeignKey(
      'orders',
      new TableForeignKey({
        name: 'OrderCustomer',
        columnNames: ['customer_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'customers',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );

    // Order X OrdersProducts
    await queryRunner.createForeignKey(
      'orders_products',
      new TableForeignKey({
        name: 'OrdersProductsOrders',
        columnNames: ['order_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'orders',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );

    // Products X OrdersProducts
    await queryRunner.createForeignKey(
      'orders_products',
      new TableForeignKey({
        name: 'OrdersProductsProducts',
        columnNames: ['product_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'products',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKey('orders', 'OrderCustomer');
    await queryRunner.dropForeignKey('orders_products', 'OrdersProductsOrders');
    await queryRunner.dropForeignKey('orders', 'OrdersProductsProducts');
  }
}
