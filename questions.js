const questions = [
    {
        q: "¿Qué equipo es el más pecho frío de Europa?",
        sub: "Piénsalo bien. Muy bien.",
        img: "img/q1.png",
        answers: [
            { t: "Arsenal", ok: false },
            { t: "Atlético de Madrid", ok: true },
            { t: "Borussia Dortmund", ok: false },
            { t: "Tottenham", ok: false }
        ],
        joke_right: "Correcto. El Atleti lleva desde 2016 pagando la terapia de sus seguidores.",
        joke_wrong: "Incorrecto. El Atleti lleva 500 años sin ganar la Champions pero con 10 razones nuevas cada año."
    },
    {
        q: "¿quien tiene mas goles en su carrera?",
        sub: "Responde con el corazón, no con la cabeza.",
        img: "img/q2.png",
        answers: [
            { t: "Joselu", ok: true },
            { t: "Muriqui", ok: false },
            { t: "Martin Braithwaite", ok: false },
            { t: "Mariano Díaz", ok: false }
        ],
        joke_right: "¡Exacto! Joselu: el hombre que convierte el agua en goles de UEFA Nations League.",
        joke_wrong: "Error. Ninguno de esos señores ha marcado en la Nations League. Solo Joselu tiene ese don."
    },
    {
        q: "¿Quién fue históricamente el mejor regateador de La Liga?",
        sub: "No busques en Google. Confía en ti.",
        img: "img/q3.png",
        answers: [
            { t: "Mendy", ok: false },
            { t: "Nyom", ok: true },
            { t: "Gravesen", ok: false },
            { t: "Ferran Torres", ok: false }
        ],
        joke_right: "Impecable. Nyom: 1.78m de pura elegancia y 0 asistencias en carrera.",
        joke_wrong: "Fallo garrafal. Nyom regateba a sus propios compañeros en los entrenamientos. Eso se llama dedicación."
    },
    {
        q: "¿Qué jugador se autodenominaba 'el tigre'?",
        sub: "prime.",
        img: "img/q4.png",
        answers: [
            { t: "arturo vidal", ok: false },
            { t: "falcao", ok: true },
            { t: "Chicharito", ok: false },
            { t: "batistuta", ok: false }
        ],
        joke_right: "¡ROAR! Respuesta correcta.",
        joke_wrong: "Incorrecto. El único tigre del área era Falcao."
    },
    {
        q: "¿Qué equipo protagonizó la histórica remontada 6-1 en Champions?",
        sub: "Ay, el árbitro...",
        img: "img/q5.png",
        answers: [
            { t: "Real Madrid", ok: false },
            { t: "FC Barcelona", ok: true },
            { t: "Bayern Munich", ok: false },
            { t: "Paris Saint-Germain", ok: false }
        ],
        joke_right: "Correcto. El milagro del Camp Nou (y de Deniz Aytekin).",
        joke_wrong: "Incorrecto. Fue el Barça de Luis Enrique."
    },

    {
        q: "quien tiene mas rojas en su carrera",
        sub: "tranquilo esta facil.",
        img: "img/q6.png",
        answers: [
            { t: "dani alves", ok: true },
            { t: "zinedine zidane", ok: false },
            { t: "guti", ok: false },
            { t: "puyol", ok: false }
        ],
        joke_right: "¡Acertaste! (El único brasileño que te haría titular).",
        joke_wrong: "Fallaste. (Ni tú lo creíste)."
    },
    {
        q: "quien tiene mas champions",
        sub: "la pregunta es simple, no te compliques",
        img: "img/q7.png",
        answers: [
            { t: "kepa", ok: false },
            { t: "xabi alonso", ok: false },
            { t: "david beckham", ok: false },
            { t: "victor valdes", ok: true }
        ],
        joke_right: "¡Acertaste! (El único que no le daba vergüenza enseñar los muslos).",
        joke_wrong: "Fallaste. (No tienes la misma sangre fría)."
    },
    {
        q: "quien tenia mas pelo en el mundo del futbol   ",
        sub: "mayor cantidad de foliculos detectados",
        img: "img/q8.png",
        answers: [
            { t: "fellaini", ok: true },
            { t: "cucurella", ok: false },
            { t: "marcelo", ok: false },
            { t: "david luiz", ok: false }
        ],
        joke_right: "¡Acertaste! (ojito con belgica).",
        joke_wrong: "Fallaste. (No tienes pelo en la cabeza)."
    },
    {
        q: "mejor jugador fuera de la cancha",
        sub: "los verdaderos  placeres de la vida ",
        img: "img/q9.png",
        answers: [
            { t: "hulk", ok: false },
            { t: "icardi", ok: false },
            { t: "ronaldinho", ok: false },
            { t: "george best", ok: true }
        ],
        joke_right: "Gasté mucho dinero en coches, mujeres y alcohol. El resto lo malgasté.",
        joke_wrong: "Fallaste. No es tu culpa, es de tu educación."
    },
    {
        q: "quien se tiraba mas al suelo",
        sub: "el que menos faltas recibio es el correcto",
        img: "img/q10.png",
        answers: [
            { t: "neymar", ok: true },
            { t: "robben", ok: false },
            { t: "sergio busquets", ok: false },
            { t: "luis suarez", ok: false }
        ],
        joke_right: "haciendo teatro tienes 10 champions.",
        joke_wrong: "te tiras mas que Mbappé en champions."
    }
];
