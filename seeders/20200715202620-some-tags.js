'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tags",
      [
        {
          title: "goal",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "weekend",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "personal",
          createdAt: new Date(),
          updatedAt: new Date(),
        },   {
          title: "week day",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tags", null, {})
  },
}
