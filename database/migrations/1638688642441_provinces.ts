import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Provinces extends BaseSchema {
  protected tableName = 'provinces'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('province_id').primary()
      table.string('province')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
