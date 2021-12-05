import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Province extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public provinceId: integer

  @column()
  public province: string
}
