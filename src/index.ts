import server from "./server";

const PORT: string | undefined = process.env.PORT;

server.listen(PORT, (): void => {
    console.log(`Server is running on port ${PORT}`);
});