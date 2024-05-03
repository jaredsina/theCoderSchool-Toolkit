import { DataTypes } from "sequelize";
import { sequelize } from "../index";
import { Questions_Grades } from "../models/models.types";

const queryInterface = sequelize.getQueryInterface();

export const up = async (): Promise<void> => {
  await queryInterface.createTable<Questions_Grades>("question_grades", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    grade_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "grades", key: "id" },
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "questions", key: "id" },
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};

export const down = async (): Promise<void> => {
  await queryInterface.dropTable("question_grades");
};
