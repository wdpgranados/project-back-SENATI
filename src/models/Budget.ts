import {Table, Column, DataType, Model} from "sequelize-typescript";

@Table({
    tableName: 'budgets',
    timestamps: true,
    underscored: true,
})
class Budget extends Model {

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    })
    declare id_budget: number;

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    declare name: string;

    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    declare amount: number;
}
export default Budget;