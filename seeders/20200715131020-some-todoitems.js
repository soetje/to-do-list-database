"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "winning championship",
          // userId: 1,
          deadline: "this year",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "making new facebook",
          // userId: 2,
          deadline: "in 10 years",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoItems", null, {})
  },
}
