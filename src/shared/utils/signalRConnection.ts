import * as signalR from "@microsoft/signalr";

class Connector {
    private connection: signalR.HubConnection;
    public events: (onMessageReceived: (message: string) => void) => void = () => { };

    private static instance: Connector;

    private constructor() {
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl("https://localhost:7097/notificaciones-globales")
            .withAutomaticReconnect()
            .build();
    }

    public static getInstance(): Connector {
        if (!Connector.instance) {
            Connector.instance = new Connector();
        }
        return Connector.instance;
    }

    public initialize(onMessageReceived: (message: string) => void) {
        this.connection
            .start()
            .then(() => {
                this.connection.on("Notificar", (message) => {
                    onMessageReceived(message);
                });
            })
    }
}

export default Connector;
