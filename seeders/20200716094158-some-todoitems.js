"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "winning championship",
          deadline: "this year",
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          todoListId: 1,
        },
        {
          task: "making new facebook",
          deadline: "in 10 years",
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          todoListId: 2,
        },
      ],
      {}
    )
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoItems", null, {})
  },
}
