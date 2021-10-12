export interface Dishes {
    ok:     boolean;
    dishes: Dish[];
}

export interface Dish {
    id:           string;
    nombre:       string;
    descripcion:  string;
    precio:       string;
    id_categoria?: string;
    imagen?:       string;
    fecha?:        Date;
    activado?:     string;
}
