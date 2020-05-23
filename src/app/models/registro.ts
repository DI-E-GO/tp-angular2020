export class Registro {
    usuario:string;
    nombreOrganizacion:string;
    requiereConstancia:boolean;

    Registro (usuario?:string, nombreOrganizacion?:string, requiereConstancia?:boolean){
        this.usuario = usuario;
        this.nombreOrganizacion = nombreOrganizacion;
        this.requiereConstancia = requiereConstancia;
    }
}
