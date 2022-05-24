let isClass = (a) => {
    try {
        let b = new a();
        return true;
    } catch (error) {
        return false;
    }
}
describe("Nivel básico", () => {
    describe(`1. - Crea el objeto Coche con las siguientes propiedades: marca, modelo y matricula y los métodos: acelerar { imprimirá por consola "a todo gas"} y frenar { imprimirá por consola "cuidado con la abuelita en el paso de cebra"}`, () => {
        it("Es un objeto", () => {
            expect(isClass(Coche)).toBeFalsy();
        })
        it("Contiene la propiedad marca", () => {
            expect(Coche.hasOwnProperty("marca")).toBeTruthy();
        });
        it("Contiene la propiedad modelo", () => {
            expect(Coche.hasOwnProperty("modelo")).toBeTruthy();
        });
        it("Contiene la propiedad matricula", () => {
            expect(Coche.hasOwnProperty("matricula")).toBeTruthy();
        });
        it("Contiene el método acelerar", () => {
            let originalConsole = console.log;
            console.log = jasmine.createSpy("log");
            Coche.acelerar();
            expect(console.log).toHaveBeenCalledWith("a todo gas");
            console.log = originalConsole;
        });
        it("Contiene el método frenar", () => {
            let originalConsole = console.log;
            console.log = jasmine.createSpy("log");
            Coche.frenar();
            expect(console.log).toHaveBeenCalledWith("cuidado con la abuelita en el paso de cebra");
            console.log = originalConsole;
        });
    });

    describe(`2.- Crea la clase Turismo con las siguientes propiedades: marca, modelo y matricula declaradas en el constructor y los métodos: acelerar {imprimirá por consola "a todo gas"} y frenar {imprimirá por consola "cuidado con la abuelita en el paso de cebra"}`, () => {
        let marca = randomString();
        let modelo = randomString();
        let matricula = randomString();
        let a = new Turismo(marca, modelo, matricula);
        
        it("Es una clase", () => {
            expect(isClass(Turismo)).toBeTruthy();
        })
        it("Contiene la propiedad marca", () => {
            expect(a.marca).toBe(marca);
        });
        it("Contiene la propiedad modelo", () => {
            expect(a.modelo).toBe(modelo);
        });
        it("Contiene la propiedad matricula", () => {
            expect(a.matricula).toBe(matricula);
        });
        it("Contiene el método acelerar", () => {
            let originalConsole = console.log;
            console.log = jasmine.createSpy("log");
            a.acelerar();
            expect(console.log).toHaveBeenCalledWith("a todo gas");
            console.log = originalConsole;
        });
        it("Contiene el método frenar", () => {
            let originalConsole = console.log;
            console.log = jasmine.createSpy("log");
            a.frenar();
            expect(console.log).toHaveBeenCalledWith("cuidado con la abuelita en el paso de cebra");
            console.log = originalConsole;
        });
    });

    describe(`3.- Crea una nueva instancia de Turismo (una instancia se crea con new Turismo(/*Valores de las propiedades*/) llamada miTurismo cuyas propiedades sean: marca: "Asiento", modelo: "Leon", matricula: "1234AAA"`, () => {
        let marca = "Asiento";
        let modelo = "Leon";
        let matricula = "1234AAA";
        let a = miTurismo
        it(`Contiene la propiedad marca con valor "${marca}"`, () => {
            expect(a.marca).toBe(marca);
        });
        it(`Contiene la propiedad modelo con valor "${modelo}"`, () => {
            expect(a.modelo).toBe(modelo);
        });
        it(`Contiene la propiedad matricula con valor "${matricula}"`, () => {
            expect(a.matricula).toBe(matricula);
        });
    });

    describe(`4.- Crea una nueva instancia de Turismo (una instancia se crea con new Turismo(/*Valores de las propiedades*/) llamada miSegundoTurismo cuyas propiedades sean: marca: "Vuelve", modelo: "XC90", matricula: "1540GAB"`, () => {
        let marca = "Vuelve";
        let modelo = "XC90";
        let matricula = "1540GAB";
        let a = miSegundoTurismo
        it(`Contiene la propiedad marca con valor "${marca}"`, () => {
            expect(a.marca).toBe(marca);
        });
        it(`Contiene la propiedad modelo con valor "${modelo}"`, () => {
            expect(a.modelo).toBe(modelo);
        });
        it(`Contiene la propiedad matricula con valor "${matricula}"`, () => {
            expect(a.matricula).toBe(matricula);
        });
    });

    describe(`5.- Crea una nueva clase Persona con las siguientes propiedades: nombre, apellidos, edad, gustosMusicales y los métodos: envejecer {aumentará en 1 la edad}, nuevoGusto {aceptará como argumento un string y lo añadirá al array gustosMusicales}`, () => {
        let prop1 = randomString();
        let prop2 = randomString();
        let prop3 = Math.random() * 40;
        let prop4 = ["No", "Me", "Gusta"];
        let a = new Persona(prop1, prop2, prop3, prop4);

        it("Es una clase", () => {
            expect(isClass(Persona)).toBeTruthy();
        })
        it("Contiene la propiedad nombre", () => {
            expect(a.nombre).toBe(prop1);
        });
        it("Contiene la propiedad apellidos", () => {
            expect(a.apellidos).toBe(prop2);
        });
        it("Contiene la propiedad edad", () => {
            expect(a.edad).toBe(prop3);
        });
        it("Contiene la propiedad gustosMusicales", () => {
            expect(a.gustosMusicales).toBe(prop4);
        });
        it("Contiene el método envejecer", () => {
            let edad = a.edad;
            a.envejecer();
            expect(a.edad).toBe(edad + 1);
        });
        it("Contiene el método nuevoGusto", () => {
            let string = randomString();
            let gm = a.gustosMusicales;
            gm.push(string)
            a.nuevoGusto(string);
            expect(a.gustosMusicales).toEqual(gm);
        });
    });

    describe(`6.- Crea una nueva instancia de Persona llamada rockero cuyas propiedades sean: nombre: "Freddie", apellidos: "Mercury", "edad": 45, gustosMusicales: ["Queen", "AC/DC"]`, () => {
        let prop1 = "Freddie";
        let prop2 = "Mercury";
        let prop3 = 45;
        let prop4 = ["Queen", "AC/DC"];
        let a = rockero
        it(`Contiene la propiedad nombre con valor "${prop1}"`, () => {
            expect(a.nombre).toBe(prop1);
        });
        it(`Contiene la propiedad apellidos con valor "${prop2}"`, () => {
            expect(a.apellidos).toBe(prop2);
        });
        it(`Contiene la propiedad edad con valor "${prop3}"`, () => {
            expect(a.edad).toBe(prop3);
        });
        it(`Contiene la propiedad gustosMusicales con valor "${prop4}"`, () => {
            expect(a.gustosMusicales).toEqual(prop4);
        });
    });

    describe(`7.- Crea una función aplicar__nuevoGusto que añada a rockero el gustoMusical "My Chemical Romance"  Que no te despiste que se pida una función, solo es para poder pasar el test, aprovecha el método nuevoGusto`, () => {
        it(`Valor correcto antes`, () => {
            let prop1 = ["Queen", "AC/DC"];
            expect(rockero.gustosMusicales).toEqual(prop1);
        });
        it(`Valor correcto después`, () => {
            let prop1 = ["Queen", "AC/DC", "My Chemical Romance"];
            aplicar__nuevoGusto();
            expect(rockero.gustosMusicales).toEqual(prop1);
        });
    });

    describe(`8.- Crea un array Perro que contenga los valores: [nombre, raza, función popo {devuelve ("Ha hecho", Math.random() * 3, "caquitas")}]`, () => {
        it("En posición 0 está el nombre", () => {
            expect(Perro[0]).toEqual(jasmine.any(String));
        });
        it("En posición 1 está la raza", () => {
            expect(Perro[1]).toEqual(jasmine.any(String));
        });
        it("En posición 2 está el método popo", () => {
            let ret = Perro[2]();
            expect(ret).toMatch(/Ha hecho [0, 1, 2, 3].\d+ caquitas$/)
        });
    });

    describe(`9.- Crea el objeto Perrito con las propiedades: nombre, raza y el método popo {devuelve ("Ha hecho ", Math.random() * 3, "caquitas")}`, () => {
        let a = Perrito;
        it("Es un objeto", () => {
            expect(isClass(a)).toBeFalsy();
        })
        it("Contiene la propiedad nombre", () => {
            expect(a.hasOwnProperty("nombre")).toBeTruthy();
        });
        it("Contiene la propiedad raza", () => {
            expect(a.hasOwnProperty("raza")).toBeTruthy();
        });
        it("Contiene el método popo", () => {
            let result = /Ha hecho [0, 1, 2, 3].\d+ caquitas$/;
            expect(a.popo()).toMatch(result);
        });
    });

    describe(`10.- Crea la clase Perrazo con las propiedades: nombre, raza y el método popo {devuelve ("Ha hecho " + Math.random() * 3 + " caquitas")}`, () => {
        let prop1 = randomString();
        let prop2 = randomString();
        let a = new Perrazo(prop1, prop2);

        it("Es una clase", () => {
            expect(isClass(Perrazo)).toBeTruthy();
        })
        it("Contiene la propiedad nombre", () => {
            expect(a.nombre).toBe(prop1);
        });
        it("Contiene la propiedad raza", () => {
            expect(a.raza).toBe(prop2);
        });
        it("Contiene el método popo", () => {
            let result = /Ha hecho [0, 1, 2, 3].\d+ caquitas$/;
            expect(a.popo()).toMatch(result);
        });
    });

    describe(`11.- Crea una nueva instancia de Perrazo llamada lebrelazo cuyas propiedades sean: nombre: "Gus", raza: "Lebrel"`, () => {
        let prop1 = "Gus";
        let prop2 = "Lebrel";
        let a = lebrelazo;
        it(`Contiene la propiedad nombre con valor "${prop1}"`, () => {
            expect(a.nombre).toBe(prop1);
        });
        it(`Contiene la propiedad raza con valor "${prop2}"`, () => {
            expect(a.raza).toBe(prop2);
        });
    });
});

describe("Nivel intermedio", () => {
    describe(`12.- Crea la clase Husky que extienda la clase Perrazo (class Husky extends Perrazo) y añade la propiedad: heterocromia (booleano), la propiedad raza siempre será "Husky" y el método tieneHeterocromia (imprime por console "si" o "no" en base a la propiedad heterocromia)`, () => {
        let prop1 = randomString();
        let prop2 = "Husky";
        let prop3 = Math.random() * 6 > 3;
        let a = new Husky(prop1, prop3);

        it("Es una clase", () => {
            expect(isClass(Husky)).toBeTruthy();
        })
        it("Contiene la propiedad nombre", () => {
            expect(a.nombre).toBe(prop1);
        });
        it("Contiene la propiedad raza", () => {
            expect(a.raza).toBe(prop2);
        });
        it("Contiene la propiedad heterocromia", () => {
            expect(a.heterocromia).toBe(prop3);
        });
        it("Contiene el método tieneHeterocromia", () => {
            let result = a.heterocromia ? "si" : "no";
            let originalConsole = console.log;
            console.log = jasmine.createSpy("log");
            a.tieneHeterocromia();
            expect(console.log).toHaveBeenCalledWith(result);
            console.log = originalConsole;
        });
    });

    describe(`13.- Crea una nueva instancia de Husky llamada miHusky cuyas propiedades sean: nombre: "Alaska", "heterocromia": true`, () => {
        let prop1 = "Alaska";
        let prop2 = true;
        let a = miHusky
        it(`Contiene la propiedad nombre con valor "${prop1}"`, () => {
            expect(a.nombre).toBe(prop1);
        });
        it(`Contiene la propiedad heterocromia con valor "${prop2}"`, () => {
            expect(a.heterocromia).toBe(prop2);
        });
    });

    describe(`14.- Crea la clase Coordenadas con las propiedades: x, y`, () => {
        let prop1 = Math.random() * 1000;
        let prop2 = Math.random() * 1000;
        let a = new Coordenadas(prop1, prop2);

        it("Es una clase", () => {
            expect(isClass(Coordenadas)).toBeTruthy();
        })
        it("Contiene la propiedad x", () => {
            expect(a.x).toBe(prop1);
        });
        it("Contiene la propiedad y", () => {
            expect(a.y).toBe(prop2);
        });
    });

    describe(`15.- Crea la clase Jugador con las propiedades: posicion (instancia de coordenadas), fuerza, velocidad (instancia de coordenadas), direccion (instancia de coordenadas) vida y los métodos: moverse {posicion.x += velocidad.x * direccion.x, posicion.y += velocidad.y * direccion.y}, perderVida {vida -= 1}`, () => {
        let prop1 = new Coordenadas(153, 2);
        let prop2 = 25.4;
        let prop3 = new Coordenadas(2, 0);
        let prop4 = new Coordenadas(23, 0);
        let prop5 = 10;
        let a = new Jugador(prop1, prop2, prop3, prop4, prop5);

        it("Es una clase", () => {
            expect(isClass(Jugador)).toBeTruthy();
        })
        it("Contiene la propiedad posicion", () => {
            expect(a.posicion).toBe(prop1);
        });
        it("Contiene la propiedad fuerza", () => {
            expect(a.fuerza).toBe(prop2);
        });
        it("Contiene la propiedad velocidad", () => {
            expect(a.velocidad).toBe(prop3);
        });
        it("Contiene la propiedad direccion", () => {
            expect(a.direccion).toBe(prop4);
        });
        it("Contiene la propiedad vida", () => {
            expect(a.vida).toBe(prop5);
        });
        it("Contiene el método moverse", () => {
            let result = new Coordenadas(prop1.x + prop3.x * prop4.x, prop1.y + prop3.y * prop4.y);
            a.moverse();
            expect(a.posicion).toEqual(result);
        });
    });

    describe(`16.- Crea un array de instancias de jugador llamado jugadores`, () => {
        for(let i = 0; i < jugadores.length; i++) {
            it(`La posición ${i} es un objeto Jugador`, () => {
                expect(jugadores[i]).toEqual(jasmine.any(Jugador));
            })
        }
    });

    describe(`17.- Crea el objeto frameworksJavaScript con la propiedad: array frameworks y el método: generarFramework {añade al array frameworksJavaScript el string (randomString() + ".js")}`, () => {
        let a = FrameworksJavaScript;
        it("Es un objeto", () => {
            expect(isClass(a)).toBeFalsy();
        })
        it("Contiene la propiedad array frameworks", () => {
            expect(a.hasOwnProperty("frameworks")).toBeTruthy();
        });
        it("Contiene el método generarFramework", () => {
            let result = a.frameworks.length + 1;
            a.generarFramework();
            expect(a.frameworks.length).toBe(result);
            expect(a.frameworks[a.frameworks.length - 1]).toMatch(/\w.js$/);
        });
    });

    describe(`18.- Crea la clase Error_ con las propiedades: codigo, descripcion, nombre y el método: imprimirError {se imprime a si mismo (this) por pantalla}`, () => {
        let prop1 = Math.floor(Math.random() * 600);
        let prop2 = randomString();
        let prop3 = randomString();
        let a = new Error_(prop1, prop2, prop3);

        it("Es una clase", () => {
            expect(isClass(Error_)).toBeTruthy();
        })
        it("Contiene la propiedad codigo", () => {
            expect(a.codigo).toBe(prop1);
        });
        it("Contiene la propiedad descripcion", () => {
            expect(a.descripcion).toBe(prop2);
        });
        it("Contiene la propiedad nombre", () => {
            expect(a.nombre).toBe(prop3);
        });
        it("Contiene el método imprimirError", () => {
            let result = a;
            let originalConsole = console.log;
            console.log = jasmine.createSpy("log");
            a.imprimirError();
            expect(console.log).toHaveBeenCalledWith(result);
            console.log = originalConsole;
        });
    });

    describe(`19.- Crea la clase Huevera con las propiedades: huevosMaximos, huevos y el método comprarHuevos {acepta como argumento un número y añade ese número de huevos}`, () => {
        let prop1 = 12;
        let prop2 = 2;
        let a = new Huevera(prop1, prop2);

        it("Es una clase", () => {
            expect(isClass(Huevera)).toBeTruthy();
        })
        it("Contiene la propiedad huevosMaximos", () => {
            expect(a.huevosMaximos).toBe(prop1);
        });
        it("Contiene la propiedad huevos", () => {
            expect(a.huevos).toBe(prop2);
        });
        it("Contiene el método comprarHuevos", () => {
            let num = Math.floor(Math.random() * 5);
            let result = a.huevos + num;
            a.comprarHuevos(num);
            expect(a.huevos).toBe(result);
        });
    });
});

describe(`Nivel premium`, () => {
    describe(`20.- Crea el objeto Nevera con las propiedades: productos y el getter numProducos {devuelve la suma del número de productos}`, () => {
        let a = Nevera;
        it("Es un objeto", () => {
            expect(isClass(a)).toBeFalsy();
        })
        it("Contiene la propiedad productos", () => {
            expect(a.hasOwnProperty("productos")).toBeTruthy();
        });
        it("Contiene el getter numProductos", () => {
            let result = a.productos.length;
            expect(a.numProductos).toBe(result);
        });
    });

    describe(`21.- Crea el objeto Congelador con las propiedades: array productos y el setter compra {acepta un array como argumento y añade cada elemento a this.productos}`, () => {
        let a = Congelador;
        it("Es un objeto", () => {
            expect(isClass(a)).toBeFalsy();
        })
        it("Contiene la propiedad productos", () => {
            expect(a.hasOwnProperty("productos")).toBeTruthy();
        });
        it("Contiene el setter numProductos", () => {
            let iterations = Math.floor(Math.random() * 5) + 1;
            let compra = [];
            let result = Array.from(a.productos);
            for (let i = 0; i < iterations; i++) {
                compra.push(randomString());
                result.push(compra[compra.length - 1]);
            }
            a.compra = compra;
            expect(a.productos).toEqual(result);
        });
    });

    describe(`22.- Crea el objeto Pecera con las propiedades: array peces y el getter numPeces {retorna el número de peces} y el setter nuevosPeces {acepta como argumento un array y añade cada elemento a this.peces}`, () => {
        let a = Pecera;
        it("Es un objeto", () => {
            expect(isClass(a)).toBeFalsy();
        })
        it("Contiene la propiedad peces", () => {
            expect(a.hasOwnProperty("peces")).toBeTruthy();
        });
        it("Contiene el getter numPeces", () => {
            expect(a.numPeces).toBe(a.peces.length)
        });
        it("Contiene el setter nuevosPeces", () => {
            let iterations = Math.floor(Math.random() * 5) + 1;
            let nuevosPeces = [];
            let result = Array.from(a.peces);
            for (let i = 0; i < iterations; i++) {
                nuevosPeces.push(randomString());
                result.push(nuevosPeces[nuevosPeces.length - 1]);
            }
            a.nuevosPeces = nuevosPeces;
            expect(a.peces).toEqual(result);
        })
    });

    describe(`23.- Crea la clase Lavavajillas con las propiedades: carga (objeto {platos: numPlatos, vasos: numVasos}), el setter cargar {acepatará como argumento un objeto {platos: numPlatos, vasos: numVasos} y actualizará carga, para llamarlo se podrá utilizar el operador de propagación, si una variable queda sin definir, su valor no deberá cambiar}`, () => {
        let prop1 = {platos: Math.floor(Math.random() * 15), vasos: Math.floor(Math.random() * 15)};
        let a = new Lavavajillas(prop1);

        it("Es una clase", () => {
            expect(isClass(Lavavajillas)).toBeTruthy();
        })
        it("Contiene la propiedad carga", () => {
            expect(a.carga).toBe(prop1);
        });
        it("Contiene el setter cargar cambiamos ambas", () => {
            let pre = a.carga;
            let nuevaCarga = {...a.carga, platos: Math.floor(Math.random() * 15)};
            a.nuevaCarga = nuevaCarga;
            expect(a.carga).toEqual(nuevaCarga);
        });
        it("Contiene el setter cargar cambiamos solo vasos", () => {
            let pre = a.carga;
            let nuevaCarga = {vasos: Math.floor(Math.random() * 15)};
            a.nuevaCarga = nuevaCarga;
            expect(a.carga).toEqual({platos: a.carga.platos, vasos: nuevaCarga.vasos});
        });
        it("Contiene el setter cargar cambiamos solo platos", () => {
            let pre = a.carga;
            let nuevaCarga = { platos: Math.floor(Math.random() * 15) };
            a.nuevaCarga = nuevaCarga;
            expect(a.carga).toEqual({ platos: nuevaCarga.platos, vasos: a.carga.vasos });
        });
    });

    describe(`24.- Crea la clase ColeccionLibros con la propiedad array libros y el getter ultimaAdquisicion {devuelve el último elemento de this.libros}`, () => {
        let prop1 = ["Harry Potter", "Moby-Dick", "El Principito"];
        let a = new ColeccionLibros(prop1);
        it("Es una clase", () => {
            expect(isClass(ColeccionLibros)).toBeTruthy();
        })
        it("Contiene la propiedad libros", () => {
            expect(a.libros).toBe(prop1);
        });
        it("Contiene el getter ultimaAdquisicion", () => {
            let result = prop1[prop1.length - 1];
            expect(a.ultimaAdquisicion).toBe(result);
        });
    });

    describe(`25.- Crea la clase Humano con las propiedades: nombre y nacimiento además, deberá tener un getter edad {imprime por consola new Date().getFullYear() - nacimiento} y un setter edad(nuevaEdad) {cambiará la edad por nuevaEdad}`, () => {
        let prop1 = randomString();
        let prop2 = new Date("4 may 2001");
        let a = new Humano(prop1, prop2);

        it("Es una clase", () => {
            expect(isClass(Humano)).toBeTruthy();
        })
        it("Contiene la propiedad nombre", () => {
            expect(a.nombre).toBe(prop1);
        });
        it("Contiene la propiedad nacimiento", () => {
            expect(a.nacimiento).toBe(prop2);
        });
        it("Contiene el getter edad", () => {
            let result = new Date().getFullYear() - a.nacimiento;
            expect(a.edad).toBe(result);
        });
        it("Contiene el setter edad", () => {
            let edad = Math.floor(Math.random() * 89);
            a.edad = edad;
            expect(a.nacimiento).toBe(new Date().getFullYear() - edad);
        })
    });

    describe(`26.- Crea la clase Horno con las propiedades: horaInicio (instancia de Tiempo(horas, minutos) ya declarado en JS/functions.js) y horaFin (instancia de Tiempo(horas, minutos)), el getter tiempoPasado {devolverá ("Llevamos", TiempoAString(new Tiempo(horaActual - horaInicio, minutoActual - minutoInicio))) y el getter tiempoRestante {devolverá ("Quedan", TiempoAString(new Tiempo(horaFin - horaInicio, minutoFin - minutoInicio))) }`, () => {
        let time = new Date();
        let prop1 = new Tiempo(time.getHours() - Math.floor(Math.random() * 3), time.getMinutes() - Math.floor(Math.random() * 5));
        let prop2 = new Tiempo(time.getHours() + Math.floor(Math.random() * 3), time.getMinutes() + Math.floor(Math.random() * 5));
        let a = new Horno(prop1, prop2);

        it("Es una clase", () => {
            expect(isClass(Horno)).toBeTruthy();
        })
        it("Contiene la propiedad horaInicio", () => {
            expect(a.horaInicio).toBe(prop1);
        });
        it("Contiene la propiedad horaFin", () => {
            expect(a.horaFin).toBe(prop2);
        });
        it("Contiene el getter tiempoPasado", () => {
            let time = new Date();
            expect(a.tiempoPasado).toBe("Llevamos " + TiempoAString(new Tiempo(time.getHours() - a.horaInicio.horas, time.getMinutes() - a.horaInicio.minutos)));
        });
        it("Contiene el getter tiempoRestante", () => {
            let time = new Date();
            expect(a.tiempoRestante).toBe("Quedan " + TiempoAString(new Tiempo(a.horaFin.horas - time.getHours(), a.horaFin.minutos - time.getMinutes())));
        });
    });
});