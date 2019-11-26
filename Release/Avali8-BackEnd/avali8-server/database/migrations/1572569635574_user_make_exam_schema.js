'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserMakeExamSchema extends Schema {
  up () {
    this.create('user_makes_exam', (table) => {

      table.increments()
      table.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .index('user_id')

      table.integer('exam_id')
      .unsigned()
      .references('id')
      .inTable('exams')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .index('exam_id')
      table.integer('score').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('user_makes_exam')
  }
}

module.exports = UserMakeExamSchema
