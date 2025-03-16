import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5435,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    entities: ["*/**/*.entity.ts"],
    migrations: ["src/migrations/*.ts"]
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export default AppDataSource;