import { Table, Column, DataType, Model, CreatedAt, UpdatedAt } from "sequelize-typescript";

@Table({
    tableName: "budget",
    timestamps: true,
})
class Budget extends Model {

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    })
    id_budget!: number;

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    name!: string;

    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    amount!: number;

    @CreatedAt
    @Column({
        type: DataType.DATE
    })
    created_At!: Date;

    @UpdatedAt
    @Column({
        type: DataType.DATE
    })
    updated_At!: Date;
}

export default Budget;