import {
  CreationOptional,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  declare id: CreationOptional<number>;
  declare firstName: string;
  declare lastName: string;
  declare email: string;
  declare username: string;
  declare passwordHash: string;

  // timestamps!
  // createdAt can be undefined during creation
  declare createdAt: CreationOptional<Date>;
  // updatedAt can be undefined during creation
  declare updatedAt: CreationOptional<Date>;
}

export class Project extends Model<
  InferAttributes<Project>,
  InferCreationAttributes<Project>
> {
  declare id: CreationOptional<number>;
  declare student_id: ForeignKey<User["id"]>;
  declare coderfair_id: ForeignKey<Coderfairs["id"]>;
  declare name: string;
  declare description: string | null;
  declare presentation_video_url: string | null;
  declare code_access_link: CreationOptional<string | null>;
  declare coding_language: string;
  declare project_username: string;
  declare project_password: string;
  declare rank: CreationOptional<number | null>;
  declare overall_score: CreationOptional<number | null>;
  declare notes: CreationOptional<string | null>;

  // timestamps!

  // createdAt can be undefined during creation
  declare createdAt: CreationOptional<Date>;
  // updatedAt can be undefined during creation
  declare updatedAt: CreationOptional<Date>;
}

export class Coderfairs extends Model<
  InferAttributes<Coderfairs>,
  InferCreationAttributes<Coderfairs>
> {
  declare id: CreationOptional<number>;
  declare fairDate: Date;
  declare description: string | null;

  // timestamps!
  // createdAt can be undefined during creation
  declare createdAt: CreationOptional<Date>;
  // updatedAt can be undefined during creation
  declare updatedAt: CreationOptional<Date>;
}

export class Judges extends Model<
  InferAttributes<Judges>,
  InferCreationAttributes<Judges>
> {
  declare id: CreationOptional<number>;
  declare user_id: ForeignKey<User["id"]>;
  declare coderfair_id: ForeignKey<Coderfairs["id"]>;
}

export enum Tables {
  Projects = "projects",
  Users = "users",
}
