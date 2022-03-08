export class BlockItem {
    public id: number = 0;
    public key: string = '';
    public col: number = 0;
    public row: number = 0;
    public visited: boolean = false;

    // Dijstra
    public tentativeDistance: number = 0;

    // All
    public searchOrder?: number;
}