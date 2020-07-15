"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoLists",
      [
        {
          name: "Leo's footbal list",
          // userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dan's work list",
          // userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dan's personal list",
          // userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoLists", null, {})
  },
}
