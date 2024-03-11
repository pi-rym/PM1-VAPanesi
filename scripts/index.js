class Activity {
    constructor(id, titulo, descripcion, imagenUrl) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imagenUrl = imagenUrl; 
    }
}

class Repository {
    constructor() {
        this.activities = [];
    }

    getAllActivities () {
        return this.activities;
    }

    createActivity (id, titulo, descripcion, imagenUrl) {
        const nuevaActividad = new Activity(id, titulo, descripcion, imagenUrl);
        this.activities.push(nuevaActividad);
    }
}

const actividad1 = new Repository();
actividad1.createActivity("1", "Hacer yoga", "Hay que relajarse, respirar y hacer estiramientos", "");

console.log(actividad1.getAllActivities());