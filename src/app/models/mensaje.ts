export class Mensaje {
    para: number;
    desde: number;
    texto: string;

    Mensaje(para?:number, desde?:number, texto?:string){
        this.para = para;
        this.desde = desde;
        this.texto = texto;
    }
}
