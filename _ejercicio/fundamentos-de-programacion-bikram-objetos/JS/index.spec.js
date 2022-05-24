describe("Pair Programming", () => {
    describe("Objetos", () => {
        describe("Declaración", () => {
            describe("1.- Crea un 'objeto' de nombre 'Coche' que tenga las propiedades: 'marca, modelo, matricula'", () => {
                it("Contiene la propiedad marca", () => {
                    expect(Coche.hasOwnProperty('marca')).toBeTruthy();
                });
                it("Contiene la propiedad modelo", () => {
                    expect(Coche.hasOwnProperty('modelo')).toBeTruthy();
                });
                it("Contiene la propiedad matricula", () => {
                    expect(Coche.hasOwnProperty('matricula')).toBeTruthy();
                });
            });
            describe("2.- Crea un 'objeto' de nombre 'Casa' que tenga las propiedades: 'codPostal, calle, portal, piso'", () => {
                it("Contiene la propiedad codPostal", () => {
                    expect(Casa.hasOwnProperty('codPostal')).toBeTruthy();
                });
                it("Contiene la propiedad calle", () => {
                    expect(Casa.hasOwnProperty('calle')).toBeTruthy();
                });
                it("Contiene la propiedad portal", () => {
                    expect(Casa.hasOwnProperty('portal')).toBeTruthy();
                });
                it("Contiene la propiedad piso", () => {
                    expect(Casa.hasOwnProperty('piso')).toBeTruthy();
                });
            });
            describe("3.- Crea un 'objeto' de nombre 'FullStackDeveloper' que tenga las propiedades: 'array lenguajes, array proyectos'", () => {
                it("Contiene la propiedad lenguajes", () => {
                    expect(FullStackDeveloper.lenguajes).toEqual(jasmine.any(Array));
                });
                it("Contiene la propiedad proyectos", () => {
                    expect(FullStackDeveloper.proyectos).toEqual(jasmine.any(Array));
                });
            });
            describe("4.- Crea un 'objeto' de nombre 'Perro' que tenga las propiedades: 'nombre, raza, color, edad, función ladrar (imprime por consola un ladrido), función popo (devuelve el valor: Math.random() * 3)'", () => {
                it("Contiene la propiedad nombre", () => {
                    expect(Perro.hasOwnProperty('nombre')).toBeTruthy();
                });
                it("Contiene la propiedad raza", () => {
                    expect(Perro.hasOwnProperty('raza')).toBeTruthy();
                });
                it("Contiene la propiedad color", () => {
                    expect(Perro.hasOwnProperty('color')).toBeTruthy();
                });
                it("Contiene la propiedad edad", () => {
                    expect(Perro.hasOwnProperty('edad')).toBeTruthy();
                });
                it("Contiene la propiedad función ladrar", () => {
                    let originalConsole = console.log;
                    console.log = jasmine.createSpy("log");
                    Perro.ladrar();
                    expect(console.log).toHaveBeenCalledWith(jasmine.any(String));
                    console.log = originalConsole;
                });
                it("Contiene la propiedad función popo", () => {
                    expect(Perro.popo() >= 0 && Perro.popo() <= 3).toBeTruthy();
                });
            });
        });

        describe("Lectura de propiedades", () => {
            it("5.- Dado un 'objeto' de nombre 'Portatil' obtén el valor de la propiedad 'marca con .marca' guardándolo en la variable 'marcaPortatil'", () => {
                expect(marcaPortatil).toBe(Portatil.marca);
            });
            it("6.- Dado un 'objeto' de nombre 'Portatil' obtén el valor de la propiedad 'marca con ['marca'] guardándolo en la variable 'marcaPortatil2'", () => {
                expect(marcaPortatil2).toBe(Portatil["marca"]);
            });
            it("7.- Dado un 'objeto' de nombre 'Concierto' obtén el valor de la propiedad 'grupos' guardándolo en la variable 'grupos'", () => {
                expect(grupos).toEqual(Concierto.grupos);
            });
            it("8.- Dado un 'objeto' de nombre 'Led' obtén el valor de las propiedades 'rojo, verde y azul' guardándolo en la variable 'array RGB[rojo, verde, azul]'", () => {
                expect(RGB).toEqual([Led.rojo, Led.verde, Led.azul]);
            });

        });

        describe("Modificación de propiedades", () => {
            it("9.- Dado un 'objeto' de nombre 'Portatil' modifica el valor de la propiedad 'modelo' por el valor 'P345'", () => {
                expect(Portatil.modelo).toBe("P345");
            });
            it("10.- Dado un 'objeto' de nombre 'Concierto' añade el valor 'Guns N' Roses' a la propiedad 'cartelera'", () => {
                expect(Concierto.cartelera).toEqual(["Queen", "Guns N' Roses"]);
            });
            it("11.- Dado un 'objeto' de nombre 'Concierto' modifica el valor de la propiedad 'fecha' por el valor 'new Date'", () => {
                expect(Concierto.fecha).toEqual(jasmine.any(Date));
            });
            it("12.- Dado un 'objeto' de nombre 'Impresora' modifica el valor de la propiedad 'imprimiendo' por el valor 'objeto con propiedades: nombreArchivo, copias, numPaginas'", () => {
                expect(Impresora.imprimiendo).toEqual(jasmine.any(Object));
            });
        });
    });
});

describe("proyecto", () => {
    describe("Objetos", () => {
        describe("Declaración", () => {
            describe("13.- Crea un 'objeto' de nombre 'Noticia' que tenga las propiedades: 'titular, cuerpo'", () => {
                it("Contiene la propiedad titular", () => {
                    expect(Noticia.hasOwnProperty('titular')).toBeTruthy();
                });
                it("Contiene la propiedad cuerpo", () => {
                    expect(Noticia.hasOwnProperty('cuerpo')).toBeTruthy();
                });
            });
            describe("14.- Crea un 'objeto' de nombre 'Persona' que tenga las propiedades: 'nombre, apellidos, edad'", () => {
                it("Contiene la propiedad nombre", () => {
                    expect(Persona.hasOwnProperty('nombre')).toBeTruthy();
                });
                it("Contiene la propiedad apellidos", () => {
                    expect(Persona.hasOwnProperty('apellidos')).toBeTruthy();
                });
                it("Contiene la propiedad edad", () => {
                    expect(Persona.hasOwnProperty('edad')).toBeTruthy();
                });
            });
            describe("15.- Crea un 'objeto' de nombre 'Avion' que tenga las propiedades: 'numPasajeros, función despegar (imprime por consola 'despegando'), función volar (imprime por consola llegando al destino), función aterrizar (imprime por consola 'aterrizando')", () => {
                it("Contiene la propiedad numPasajeros", () => {
                    expect(Avion.hasOwnProperty('numPasajeros')).toBeTruthy();
                });
                let originalConsole = console.log;
                beforeEach(() => console.log = jasmine.createSpy("log"));
                afterEach(() => console.log = originalConsole);
                it("Contiene la función despegar", () => {
                    Avion.despegar();
                    expect(console.log).toHaveBeenCalledWith("despegando");
                });
                it("Contiene la función volar", () => {
                    Avion.volar();
                    expect(console.log).toHaveBeenCalledWith("llegando al destino");
                });
                it("Contiene la función aterrizar", () => {
                    Avion.aterrizar();
                    expect(console.log).toHaveBeenCalledWith("aterrizando");
                });
            });
            describe("16.- Crea un 'objeto' de nombre 'Paquete' que tenga la propiedad: 'array contenido con todos los objetos que contenga el paquete'", () => {
                it("Contiene la propiedad paquete de tipo array", () => {
                    expect(Paquete.contenido).toEqual(jasmine.any(Array));
                });
            });
            describe("17.- Crea un 'objeto' de nombre 'Pais' que tenga las propiedades: 'numHabitantes, continente, gentilicio'", () => {
                it("Contiene la propiedad numHabitantes", () => {
                    expect(Pais.hasOwnProperty('numHabitantes')).toBeTruthy();
                });
                it("Contiene la propiedad continente", () => {
                    expect(Pais.hasOwnProperty('continente')).toBeTruthy();
                });
                it("Contiene la propiedad gentilicio", () => {
                    expect(Pais.hasOwnProperty('gentilicio')).toBeTruthy();
                });
            });
        });

        describe("Lectura de propiedades", () => {
            it("18.- Dado un 'objeto' de nombre 'O_Error' obtén el valor de la propiedad 'codigo' guardándolo en la variable 'codError'", () => {
                expect(codError).toBe(O_Error.codigo);
            });
            it("19.- Dado un 'objeto' de nombre 'Grupo' obtén el valor de la propiedad 'integrantes' guardándolo en la variable 'integrantes'", () => {
                expect(integrantes).toEqual(Grupo.integrantes);
            });
            it("20.- Dado un 'objeto' de nombre 'Impresora' obtén el valor de la propiedad 'tinta' guardándolo en la variable 'nivelesTinta'", () => {
                expect(nivelesTinta).toEqual(Impresora.tinta);
            });
            it("21.- Dado un 'objeto' de nombre 'Pantalla' obtén el valor de la propiedad 'pixeles' guardándolo en la variable 'pixeles'", () => {
                expect(pixeles).toEqual(Pantalla.pixeles);
            });
            it("22.- Dado un 'objeto' de nombre 'Movil' obtén el valor de la propiedad 'especificaciones con ['especificaciones']' guardándolo en la variable 'especificaciones'", () => {
                expect(especificaciones).toEqual(Movil.especificaciones);
            });
        });

        describe("Modificación de propiedades", () => {
            it("23.- Dado un 'objeto' de nombre 'Grupo' modifica el valor de la propiedad 'numIntegrantes' por el valor '5'", () => {
                expect(Grupo.numIntegrantes).toBe(5);
            });
            it("24.- Dado un 'objeto' de nombre 'Pantalla' modifica el valor de la propiedad 'dimensiones' por el valor '1920x1080'", () => {
                expect(Pantalla.dimensiones).toBe("1920x1080");
            });
            it("25.- Dado un 'objeto' de nombre 'Led' modifica el valor de la propiedad 'encendido' por el valor 'false si vale true y true si vale false'", () => {
                expect(Led.encendido).toBe(!powered);
            });
            it("26.- Dado un 'objeto' de nombre 'Movil' modifica el valor de la propiedad 'temperatura' por el valor '20º'", () => {
                expect(Movil.temperatura).toBe("20º");
            });
        });
    });
});