export default {
    "particles": {
        "number": {
            "value": window.innerWidth > window.innerHeight ? window.innerWidth / 30 : window.innerHeight / 30
        },
        "size": {
            "value": 3
        },
        "line_linked": {
            "enable": true,
            "color": "#fff",
            "width": 1
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            }
        },
        "modes": {
            "push": {
                "particles_nb": 5
            },
            "grab": {
                "distance": 300,
                "line_linked": {
                    "opacity": 1
                }
            }
        }
    }
}
