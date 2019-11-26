'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestionSchema extends Schema {
  up () {
    this.create('questions', (table) => {
      
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

      table.string('description', 500).notNullable().unique()
      table.string('area', 100).notNullable()
      table.enu('difficulty',['easy','medium','hard']).notNullable()
      table.boolean('is_right')
      table.integer('score').unsigned().notNullable()
      table.timestamps()

    })
  }

  down () {
    this.drop('questions')
  }
}

module.exports = QuestionSchema
